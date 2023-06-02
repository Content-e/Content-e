import { PropsWithChildren } from "react";

// TODO: make variant inferred from context
type Props = PropsWithChildren & {
  variant?: "brand" | "creator";
};

export default function GradientCard({ children, variant = "brand" }: Props) {
  return (
    <div
      className={`
        ${variant === "brand" && "bg-brand-gradient"}
        ${variant === "creator" && "bg-creator-gradient"}
        rounded-2xl text-white p-5 flex items-end relative overflow-hidden
    `}
    >
      <div className="absolute bg-glass inset-0 mix-blend-difference" />
      <div
        className={`
          ${variant === "brand" && "bg-brand-gradient"}
          ${variant === "creator" && "bg-creator-gradient"}
          rounded-2xl p-3 w-full relative overflow-hidden
      `}
      >
        <div className="absolute bg-glass inset-0 mix-blend-color-dodge" />
        {children}
      </div>
    </div>
  );
}
