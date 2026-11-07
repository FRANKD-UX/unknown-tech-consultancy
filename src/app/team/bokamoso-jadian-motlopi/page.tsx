import { permanentRedirect } from "next/navigation";

// Keep existing inbound links useful without publishing a former member profile.
export default function FormerTeamMemberPage() {
  permanentRedirect("/team");
}
