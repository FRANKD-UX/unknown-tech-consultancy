import type { ReactNode } from "react";
import { SiteNavbar } from "@/components/layout/SiteNavbar";
import { SiteFooter } from "@/components/layout/SiteFooter";

type InnerPageShellProps = {
  eyebrow: string;
  title: string;
  children: ReactNode;
};

export function InnerPageShell({ eyebrow, title, children }: InnerPageShellProps) {
  return (
    <>
      <div className="inner-header">
        <div className="container">
          <SiteNavbar />
          <div className="inner-header__content">
            <p className="eyebrow eyebrow--orange">{eyebrow}</p>
            <h1>{title}</h1>
          </div>
        </div>
      </div>
      <main className="inner-main">
        <div className="container prose">{children}</div>
      </main>
      <SiteFooter />
    </>
  );
}
