import { assetPath } from "@/lib/asset-path";
import handoff from "../../public/assets/team-page-codex-handoff/team-data.json";

export interface TeamMember {
  id: string;
  name: string;
  route: string;
  role: string;
  category: string;
  photo: string;
  cardValue: string;
  profileValue?: string;
  profileHeadline: string;
  profileIntro: string;
  bio: readonly string[];
  expertiseLabel?: string;
  technicalExpertise?: readonly string[];
  clientJourneyTitle: string;
  clientJourney: readonly { step: string; title: string; copy: string }[];
  clientOutcome: string;
}

// The supplied content handoff is the canonical source for cards and profiles.
// Do not copy member biographies or placeholder content into route components.
export const teamPage = handoff.page;
export const teamMembers: readonly TeamMember[] = handoff.members.map((member) => ({
  ...member,
  photo: assetPath(member.photo),
}));
export const workingTogether = handoff.workingTogether;

export function memberNumber(member: TeamMember) {
  return String(teamMembers.findIndex((item) => item.id === member.id) + 1).padStart(2, "0");
}
