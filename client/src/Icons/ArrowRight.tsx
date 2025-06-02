import { IconProps } from "@custom-types/icons";

interface ArrowRightProps extends IconProps {
  stroke?: string;
}

export function ArrowRight({
  className = "",
  stroke = "#121212",
}: ArrowRightProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.75 9H14.25"
        stroke={stroke}
        strokeWidth="1.125"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.75 13.5L14.25 9"
        stroke={stroke}
        strokeWidth="1.125"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.75 4.5L14.25 9"
        stroke={stroke}
        strokeWidth="1.125"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
