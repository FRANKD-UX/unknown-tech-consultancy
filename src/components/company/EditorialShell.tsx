import type { ReactNode } from "react";
import { SiteNavbar } from "@/components/layout/SiteNavbar";
import { SiteFooter } from "@/components/layout/SiteFooter";
import styles from "./company.module.css";

export function EditorialShell({ children }: { children: ReactNode }) {
  return (
    <div className={styles.page}>
      <header className={styles.header}><SiteNavbar /></header>
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}
