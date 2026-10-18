import Link from "next/link";
import { navigation } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <Link className="brand brand--footer" href="/">
          <span className="brand__mark" aria-hidden="true">U</span>
          <span className="brand__copy">
            <strong>UNKNOWN</strong>
            <small>TECHNOLOGY CONSULTANCY</small>
          </span>
        </Link>

        <nav className="footer-nav" aria-label="Footer navigation">
          {navigation.map((item) => (
            <Link href={item.href} key={item.href}>{item.label}</Link>
          ))}
        </nav>

        <div className="footer-meta">
          <div className="footer-socials" aria-label="Social links">
            <a href="#" aria-label="LinkedIn">in</a>
            <a href="#" aria-label="X">X</a>
            <a href="#" aria-label="Email">✉</a>
          </div>
          <p>© 2026 Unknown. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
