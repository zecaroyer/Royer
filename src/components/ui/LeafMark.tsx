export default function LeafMark({ className = "" }: { className?: string }) {
  return (
    <svg width="28" height="28" viewBox="0 0 40 40" className={className} aria-hidden="true">
      <path
        className="leaf-line"
        d="M20 36C20 36 8 30 8 16C8 8 14 4 20 4C26 4 32 8 32 16C32 30 20 36 20 36Z"
      />
      <path className="leaf-line" d="M20 34V6" />
      <path className="leaf-line" d="M20 12C16 14 13 17 12 21" />
      <path className="leaf-line" d="M20 20C24 22 27 25 28 29" />
    </svg>
  );
}
