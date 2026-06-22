export default function BotanicalArt({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 600 600"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
    >
      {[0, 1, 2, 3, 4].map((i) => {
        const angle = -60 + i * 30;
        return (
          <g key={i} transform={`rotate(${angle} 300 560)`} opacity={0.55 + i * 0.07}>
            <path
              d="M300 560C292 460 270 360 300 220C330 360 308 460 300 560Z"
              strokeWidth="1.1"
            />
            <path d="M300 540C296 470 286 400 300 320" strokeWidth="0.7" />
          </g>
        );
      })}
      <circle cx="300" cy="560" r="3" fill="currentColor" stroke="none" />
    </svg>
  );
}
