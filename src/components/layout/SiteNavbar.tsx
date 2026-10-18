"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navigation } from "@/data/site";

export function SiteNavbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="site-nav" aria-label="Primary navigation">
      <Link className="brand" href="/" aria-label="Unknown Technology Consultancy home">
        <span className="brand__mark" aria-hidden="true">U</span>
        <span className="brand__copy">
          <strong>UNKNOWN</strong>
          <small>TECHNOLOGY CONSULTANCY</small>
        </span>
      </Link>

      <button
        className="nav-toggle"
        type="button"
        aria-expanded={open}
        aria-controls="primary-menu"
        onClick={() => setOpen((value) => !value)}
      >
        <span />
        <span />
        <span />
        <span className="sr-only">Toggle navigation</span>
      </button>

      <div className={`nav-links ${open ? "nav-links--open" : ""}`} id="primary-menu">
        {navigation.map((item) => {
          const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
          return (
            <Link
              className={`nav-link ${active ? "nav-link--active" : ""}`}
              href={item.href}
              key={item.href}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          );
        })}
      </div>

      <Link className="nav-cta" href="/contact">Let&apos;s Talk</Link>
    </nav>
  );
}
