import type { Bi as BiText } from "@/lib/i18n";

type BiProps = {
  text: BiText;
  /** inline: English · Korean on one line; block: English then Korean below */
  variant?: "inline" | "block" | "heading" | "label";
  className?: string;
  as?: "span" | "p" | "h1" | "h2" | "h3" | "div";
};

/** English primary + Korean parallel */
export function Bi({
  text,
  variant = "block",
  className = "",
  as: Tag = "span",
}: BiProps) {
  if (variant === "inline") {
    return (
      <Tag className={className}>
        <span>{text.en}</span>
        <span className="species-muted text-[0.85em] ms-1.5" aria-label={text.ko}>
          · {text.ko}
        </span>
      </Tag>
    );
  }

  if (variant === "heading") {
    return (
      <Tag className={className}>
        <span className="block font-bold">{text.en}</span>
        <span className="block text-sm font-normal species-muted mt-0.5">{text.ko}</span>
      </Tag>
    );
  }

  if (variant === "label") {
    return (
      <Tag className={className}>
        <span className="block text-sm font-medium">{text.en}</span>
        <span className="block text-xs species-muted">{text.ko}</span>
      </Tag>
    );
  }

  return (
    <Tag className={className}>
      <span className="block">{text.en}</span>
      <span className="block text-sm species-muted mt-0.5">{text.ko}</span>
    </Tag>
  );
}
