import { assetPath } from "@/lib/asset-path";
import content from "./team-content.json";

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
  responsibilities?: readonly { title: string; items: readonly string[] }[];
  clientJourneyTitle?: string;
  clientJourney?: readonly { step: string; title: string; copy: string }[];
  clientOutcome: string;
}

// Team content is the canonical source for cards, profiles and static routes.
// Do not copy member biographies or placeholder content into route components.
export const teamPage = content.page;
export const teamMembers: readonly TeamMember[] = content.members.map((member) => ({
  ...member,
  photo: assetPath(member.photo),
}));
export const workingTogether = content.workingTogether;

export function memberNumber(member: TeamMember) {
  return String(teamMembers.findIndex((item) => item.id === member.id) + 1).padStart(2, "0");
}
