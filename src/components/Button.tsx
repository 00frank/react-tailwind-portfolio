import { MouseEventHandler, PropsWithChildren } from "react";

interface ButtonProps extends PropsWithChildren {
  className?: string;
  fullRounded?: boolean;
  uppercase?: boolean;
  to?: string | null;
  type?: string | null;
  onClick?: MouseEventHandler<HTMLDivElement>;
}

function Button({ className = "", fullRounded = false, uppercase = false, onClick = () => { }, to = null, type = null, children }: ButtonProps) {
  if (!!type && type === "submit")
    return (
      <button
        className={`bg-white text-black flex w-fit items-center py-1 px-2 ${uppercase ? "uppercase " : ""}rounded-${fullRounded ? "full" : "lg"} ${className}`}
        type="submit">
        {children}
      </button>
    )
  if (!!to)
    return (
      <a
        className={`bg-white text-black flex w-fit items-center py-1 px-2 ${uppercase ? "uppercase " : ""}rounded-${fullRounded ? "full" : "lg"} ${className}`}
        target="_blank"
        href={to}>
        {children}
      </a>
    )
  return (
    <div
      className={`bg-white text-black flex w-fit items-center py-1 px-2 ${uppercase ? "uppercase " : ""}rounded-${fullRounded ? "full" : "lg"} ${className}`}
      onClick={onClick}>
      {children}
    </div>
  )
}

export default Button