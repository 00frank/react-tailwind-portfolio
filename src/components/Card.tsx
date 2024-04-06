import { PropsWithChildren } from "react";

interface CardProps extends PropsWithChildren {
  border?: boolean;
  className?: string;
}

function Card({ border = false, className = "", children }: CardProps) {
  return (
    <div className={`max-w-96 ${border ? "border border-gray-600 rounded-xl " : ""}${className ? " " + className : ""}`}>
      {children}
    </div>
  )
}

export default Card