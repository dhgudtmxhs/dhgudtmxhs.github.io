import type { ReactNode } from "react";

interface SectionTitleProps {
  children: ReactNode;
  id: string;
}

export default function SectionTitle({ children, id }: SectionTitleProps) {
  return (
    <h2 className="doc-section-title" id={id}>
      {children}
    </h2>
  );
}
