# Post starter discussions via GitHub GraphQL (requires GH_TOKEN or git credential)
$ErrorActionPreference = "Stop"
$repoRoot = Split-Path $PSScriptRoot -Parent

if (-not $env:GH_TOKEN) {
  $fill = @("protocol=https", "host=github.com", "") | git credential fill 2>$null
  $env:GH_TOKEN = (($fill | Where-Object { $_ -like 'password=*' }) -replace '^password=','').Trim()
}

$repoId = "R_kgDOSsUZow"
$posts = @(
  @{
    categoryId = "DIC_kwDOSsUZo84C-KKm"
    title      = "Welcome: Two species in the AI age — how should Homo Promptus grow?"
    bodyFile   = ".tmp-body-01.md"
  },
  @{
    categoryId = "DIC_kwDOSsUZo84C-KKn"
    title      = "Call for Museum cards: share your Promptus / Delegans moment (PR-ready)"
    bodyFile   = ".tmp-body-02.md"
  },
  @{
    categoryId = "DIC_kwDOSsUZo84C-KKk"
    title      = "Satire & Copy: vote on Delegans UI lines (Promptus lines welcome)"
    bodyFile   = ".tmp-body-03.md"
  }
)

$mutation = @'
mutation($repoId: ID!, $catId: ID!, $title: String!, $body: String!) {
  createDiscussion(input: {repositoryId: $repoId, categoryId: $catId, title: $title, body: $body}) {
    discussion { url number }
  }
}
'@

$urls = @()
foreach ($p in $posts) {
  $body = Get-Content (Join-Path $repoRoot $p.bodyFile) -Raw -Encoding UTF8
  $payload = @{
    query     = $mutation
    variables = @{
      repoId = $repoId
      catId  = $p.categoryId
      title  = $p.title
      body   = $body
    }
  } | ConvertTo-Json -Depth 5 -Compress
  $tmpJson = Join-Path $repoRoot ".tmp-mutation.json"
  [System.IO.File]::WriteAllText($tmpJson, $payload, [System.Text.UTF8Encoding]::new($false))
  $result = gh api graphql --input $tmpJson | ConvertFrom-Json
  if ($result.errors) {
    throw ($result.errors | ConvertTo-Json -Compress)
  }
  $url = $result.data.createDiscussion.discussion.url
  $urls += $url
  Write-Host "Created: $url"
}

# Pin welcome (first)
$discNum = ($urls[0] -replace '.*/discussions/(\d+).*', '$1')
$pinMutation = @'
mutation($id: ID!) {
  pinDiscussion(input: {discussionId: $id}) {
    discussion { url }
  }
}
'@
# Get discussion node id from number - need another query
$q = @{
  query = 'query($owner: String!, $name: String!, $num: Int!) { repository(owner: $owner, name: $name) { discussion(number: $num) { id } } }'
  variables = @{ owner = "SHShinSK"; name = "homo-promptus"; num = [int]$discNum }
} | ConvertTo-Json -Compress
[System.IO.File]::WriteAllText((Join-Path $repoRoot ".tmp-pin-q.json"), $q, [System.Text.UTF8Encoding]::new($false))
$disc = gh api graphql --input (Join-Path $repoRoot ".tmp-pin-q.json") | ConvertFrom-Json
$discId = $disc.data.repository.discussion.id
$pinPayload = @{
  query = $pinMutation
  variables = @{ id = $discId }
} | ConvertTo-Json -Compress
[System.IO.File]::WriteAllText((Join-Path $repoRoot ".tmp-pin.json"), $pinPayload, [System.Text.UTF8Encoding]::new($false))
gh api graphql --input (Join-Path $repoRoot ".tmp-pin.json") | Out-Null
Write-Host "Pinned: $($urls[0])"
$urls | ForEach-Object { Write-Host $_ }
