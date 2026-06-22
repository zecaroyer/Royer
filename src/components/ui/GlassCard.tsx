import { ReactNode } from "react";

export default function GlassCard({
  children,
  className = "",
  light = false,
  hoverable = true,
}: {
  children: ReactNode;
  className?: string;
  light?: boolean;
  hoverable?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl p-6 transition-[transform,box-shadow] duration-200 ${
        light ? "glass-card-light" : "glass-card"
      } ${hoverable ? "hover:-translate-y-1 hover:shadow-xl" : ""} ${className}`}
    >
      {children}
    </div>
  );
}
