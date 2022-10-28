import cl from "clsx";
import React, { forwardRef } from "react";

export interface ContentBlockProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  /**
   * max-widths
   */
  width?: "xs" | "sm" | "md" | "lg";
}

export const ContentBlock = forwardRef<HTMLDivElement, ContentBlockProps>(
  ({ children, className, width = "lg", ...rest }, ref) => (
    <div
      {...rest}
      ref={ref}
      className={cl(
        className,
        "navds-content-block",
        `navds-content-block--${width}`
      )}
    >
      {children}
    </div>
  )
);

export default ContentBlock;
