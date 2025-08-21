import * as React from "react";
import { cn } from "./utils"; // Or your utility for class merging

export const ToastViewport = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "fixed top-4 left-1/2 transform -translate-x-1/2 z-[100] w-[90%] max-w-sm sm:right-4 sm:left-auto sm:translate-x-0",
      className
    )}
    {...props}
  />
));

ToastViewport.displayName = "ToastViewport";
