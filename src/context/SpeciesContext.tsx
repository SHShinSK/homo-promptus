import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { getCopy } from "@/lib/copy";
import type { DiagnosisResult, Species } from "@/lib/types";
import {
  getDelegansRatio,
  getDiagnosis,
  getSpecies,
  getTrackingOptIn,
  recordAction,
  setSpecies as persistSpecies,
} from "@/lib/storage";

interface SpeciesContextValue {
  species: Species;
  diagnosis: DiagnosisResult | null;
  delegansRatio: number;
  trackingOptIn: boolean;
  setSpecies: (s: Species) => void;
  toggleSpecies: () => void;
  refreshStats: () => void;
}

const SpeciesContext = createContext<SpeciesContextValue | null>(null);

export function SpeciesProvider({ children }: { children: ReactNode }) {
  const [species, setSpeciesState] = useState<Species>(() => getSpecies());
  const [diagnosis, setDiagnosis] = useState<DiagnosisResult | null>(() =>
    getDiagnosis()
  );
  const [delegansRatio, setDelegansRatio] = useState(0);
  const [trackingOptIn, setTrackingOptIn] = useState(() => getTrackingOptIn());

  const refreshStats = useCallback(() => {
    setDiagnosis(getDiagnosis());
    setDelegansRatio(getDelegansRatio());
    setTrackingOptIn(getTrackingOptIn());
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-species", species);
    refreshStats();
  }, [species, refreshStats]);

  const setSpecies = useCallback(
    (s: Species) => {
      persistSpecies(s);
      setSpeciesState(s);
      recordAction(s);
      refreshStats();
    },
    [refreshStats]
  );

  const toggleSpecies = useCallback(() => {
    setSpecies(species === "promptus" ? "delegans" : "promptus");
  }, [species, setSpecies]);

  const value = useMemo(
    () => ({
      species,
      diagnosis,
      delegansRatio,
      trackingOptIn,
      setSpecies,
      toggleSpecies,
      refreshStats,
    }),
    [
      species,
      diagnosis,
      delegansRatio,
      trackingOptIn,
      setSpecies,
      toggleSpecies,
      refreshStats,
    ]
  );

  return (
    <SpeciesContext.Provider value={value}>{children}</SpeciesContext.Provider>
  );
}

export function useSpecies() {
  const ctx = useContext(SpeciesContext);
  if (!ctx) throw new Error("useSpecies must be used within SpeciesProvider");
  return ctx;
}

export function useCopy() {
  const { species } = useSpecies();
  return getCopy(species);
}
