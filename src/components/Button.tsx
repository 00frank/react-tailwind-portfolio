import { PropsWithChildren } from "react";

interface ButtonProps extends PropsWithChildren {
  className?: string;
  fullRounded?: boolean;
  uppercase?: boolean;
}

function Button({ className = "", fullRounded = false, uppercase = false, children }: ButtonProps) {
  return (
    <div className={`bg-white text-black flex w-fit items-center py-1 px-2 ${uppercase ? "uppercase " : ""}rounded-${fullRounded ? "full" : "lg"} ${className}`}>
      {children}
    </div>
  )
}

export default Button