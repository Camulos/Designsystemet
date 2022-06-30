import React, { useRef, useState, forwardRef, useMemo } from "react";
import cl from "clsx";
import { BodyShort, OverridableComponent, Loader, mergeRefs } from "../";
import { useClientLayoutEffect } from "../util";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Button content
   */
  children: React.ReactNode;
  /**
   * Changes design and interaction-visuals
   * @default "primary"
   */
  variant?: "primary" | "secondary" | "tertiary" | "danger";
  /**
   * Changes padding, height and font-size
   * @default medium
   */
  size?: "medium" | "small" | "xsmall";
  /**
   * Prevent the user from interacting with the button: it cannot be pressed or focused.
   * @note Avoid using if possible for accessibility purposes
   */
  disabled?: boolean;
  /**
   * Replaces button content with a Loader component, keeps width
   * @default false
   */
  loading?: boolean;
}

export const Button: OverridableComponent<ButtonProps, HTMLButtonElement> =
  forwardRef(
    (
      {
        as: Component = "button",
        variant = "primary",
        className,
        children,
        size = "medium",
        loading = false,
        disabled,
        style,
        ...rest
      },
      ref
    ) => {
      const buttonRef = useRef<HTMLButtonElement | null>(null);
      const [widthOverride, setWidthOverride] = useState<number>();

      const mergedRef = useMemo(() => mergeRefs([buttonRef, ref]), [ref]);

      useClientLayoutEffect(() => {
        if (loading) {
          const requestID = window.requestAnimationFrame(() => {
            setWidthOverride(
              buttonRef?.current?.getBoundingClientRect()?.width
            );
          });
          return () => {
            setWidthOverride(undefined);
            cancelAnimationFrame(requestID);
          };
        }
      }, [loading, children]);

      return (
        <Component
          {...rest}
          ref={mergedRef}
          className={cl(
            className,
            "navds-button",
            `navds-button--${variant}`,
            `navds-button--${size}`,
            {
              "navds-button--loading": widthOverride,
            }
          )}
          style={{
            ...style,
            width: widthOverride,
          }}
          disabled={disabled ?? widthOverride ? true : undefined}
        >
          <BodyShort
            as="span"
            className="navds-button__inner"
            size={size === "medium" ? "medium" : "small"}
            aria-live="polite"
          >
            {widthOverride ? <Loader size={size} /> : children}
          </BodyShort>
        </Component>
      );
    }
  );

export default Button;
