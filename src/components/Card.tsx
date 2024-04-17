import { PropsWithChildren } from "react";

interface CardProps extends PropsWithChildren {
  border?: boolean;
  className?: string;
  to?: string | null;
}

function Card({ border = false, className = "", to = null, children }: CardProps) {
  if (!!to)
    return (
      <a
        className={`w-full max-w-[652px] md:w-96 block ${border ? "border border-zinc-800 rounded-xl " : ""}${className ? " " + className : ""}`}
        target="_blank"
        href={to}>
        {children}
      </a>
    )
  return (
    <div className={`w-full max-w-[652px] md:w-96 ${border ? "border border-zinc-800 rounded-xl " : ""}${className ? " " + className : ""}`}>
      {children}
    </div>
  )
}

export default Card