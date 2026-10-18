import Link from "next/link";
import type { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "outline" | "light";
  className?: string;
  showArrow?: boolean;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
  showArrow = true,
}: ButtonLinkProps) {
  return (
    <Link className={`button button--${variant} ${className}`.trim()} href={href}>
      <span>{children}</span>
      {showArrow ? <span aria-hidden="true" className="button__arrow">→</span> : null}
    </Link>
  );
}
