export type HonorConfig = typeof honorData;

// No awards listed yet — add entries here later, e.g.:
// { date: "Jun-2025", event: "Award Name", institution: "Awarding Institution" },
export const honorData: {
  date: string;
  event: string;
  institution?: string;
}[] = [];
