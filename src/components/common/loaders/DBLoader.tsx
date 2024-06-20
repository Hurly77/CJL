export default function DBLoader() {
  return (
    <div className="m-auto">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-16"
        fill="none"
        viewBox="0 0 24 24"
        stroke="url(#grad1)"
        strokeWidth={2}
      >
        <linearGradient id="grad1" x1="0%" y1="-20%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: "hsl(var(--p))", stopOpacity: 1 }}>
            <animate
              attributeName="stop-opacity"
              values="0.2;0.1;0;0.2;0.5;1"
              begin="0s"
              dur="1s"
              repeatCount="indefinite"
            />
          </stop>
          <stop offset="50%" style={{ stopColor: "hsl(var(--p))", stopOpacity: 1 }}>
            <animate
              attributeName="stop-opacity"
              values="0.5;0.2;0.1;0;0.2;0.5;1"
              begin="0s"
              dur="1s"
              repeatCount="indefinite"
            />
          </stop>
          <stop offset="100%" style={{ stopColor: "hsl(var(--s))", stopOpacity: 1 }}>
            <animate
              attributeName="stop-opacity"
              values="1;0.5;0.2;0.1;0;0.2;0.5;1"
              begin="0s"
              dur="1s"
              repeatCount="indefinite"
            />
          </stop>
        </linearGradient>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
        />
      </svg>
    </div>
  );
}
