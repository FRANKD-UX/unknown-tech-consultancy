import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { teamMembers } from "@/data/team";
import { TeamMemberProfile } from "@/components/team/TeamMemberProfile";

type ProfilePageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return teamMembers.map((member) => ({ slug: member.id }));
}

export async function generateMetadata({ params }: ProfilePageProps): Promise<Metadata> {
  const { slug } = await params;
  const member = teamMembers.find((item) => item.id === slug);
  if (!member) return {};
  return { title: `${member.name} | Our Team`, description: member.profileHeadline };
}

export default async function ProfilePage({ params }: ProfilePageProps) {
  const { slug } = await params;
  const member = teamMembers.find((item) => item.id === slug);
  if (!member) notFound();
  return <TeamMemberProfile member={member} />;
}
