import { ReactNode } from "react";

export default function GlassCard({
  children,
  className = "",
  light = false,
}: {
  children: ReactNode;
  className?: string;
  light?: boolean;
}) {
  return (
    <div className={`rounded-2xl p-6 ${light ? "glass-card-light" : "glass-card"} ${className}`}>
      {children}
    </div>
  );
}
