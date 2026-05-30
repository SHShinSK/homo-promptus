import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { SpeciesProvider } from "@/context/SpeciesContext";
import { About } from "@/pages/About";
import { Diagnosis } from "@/pages/Diagnosis";
import { Feed } from "@/pages/Feed";
import { Home } from "@/pages/Home";
import { Museum } from "@/pages/Museum";
import { Play } from "@/pages/Play";
import { Reactions } from "@/pages/Reactions";
import { Scoreboard } from "@/pages/Scoreboard";
import { Settings } from "@/pages/Settings";

const basename = import.meta.env.BASE_URL.replace(/\/$/, "") || "/";

export default function App() {
  return (
    <SpeciesProvider>
      <BrowserRouter basename={basename === "/" ? undefined : basename}>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="diagnosis" element={<Diagnosis />} />
            <Route path="play" element={<Play />} />
            <Route path="reactions" element={<Reactions />} />
            <Route path="feed" element={<Feed />} />
            <Route path="museum" element={<Museum />} />
            <Route path="scoreboard" element={<Scoreboard />} />
            <Route path="about" element={<About />} />
            <Route path="settings" element={<Settings />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </SpeciesProvider>
  );
}
