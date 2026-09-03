import type { ReactNode } from "react";

type LegalPageLayoutProps = {
  title: string;
  children: ReactNode;
};

export default function LegalPageLayout({ title, children }: LegalPageLayoutProps) {
  return (
    <div className="bg-white px-6 pb-24 pt-32">
      <div className="mx-auto max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-brown/60">
          Legal
        </p>
        <h1 className="mt-3 font-serif text-4xl font-semibold text-brand-brown">
          {title}
        </h1>

        <div className="prose prose-neutral mt-10 max-w-none prose-headings:font-serif prose-headings:text-brand-brown prose-a:text-brand-brown">
          {children}
        </div>
      </div>
    </div>
  );
}
