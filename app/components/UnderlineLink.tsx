import Link from "next/link";
import type { ReactNode } from "react";

type UnderlineLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
};

export default function UnderlineLink({
  href,
  children,
  className = "",
  onClick,
}: UnderlineLinkProps) {
  return (
    <Link href={href} onClick={onClick} className={`group relative ${className}`}>
      {children}
      <span className="absolute -bottom-1 left-0 h-px w-full origin-center scale-x-0 bg-current transition-transform duration-300 ease-out group-hover:scale-x-100" />
    </Link>
  );
}
