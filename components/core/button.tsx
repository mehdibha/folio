"use client";

import * as React from "react";
import { Loader2Icon } from "lucide-react";
import {
  composeRenderProps,
  Button as AriaButton,
  Link as AriaLink,
  type ButtonProps as AriaButtonProps,
  type LinkProps as AriaLinkProps,
} from "react-aria-components";
import { tv, type VariantProps } from "tailwind-variants";
import { focusRing } from "@//lib/focus-styles";

const buttonStyles = tv(
  {
    extend: focusRing,
    base: "ring-offset-background inline-flex shrink-0 cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium leading-normal transition-colors disabled:cursor-default disabled:bg-bg-disabled disabled:text-fg-disabled",
    variants: {
      variant: {
        default:
          "pressed:bg-bg-neutral-active bg-bg-neutral text-fg-onNeutral hover:bg-bg-neutral-hover",
        primary:
          "pressed:bg-bg-primary-active bg-bg-primary text-fg-onPrimary hover:bg-bg-primary-hover",
        quiet:
          "pressed:bg-bg-inverse/20 bg-transparent text-fg hover:bg-bg-inverse/10",
        outline:
          "pressed:bg-bg-inverse/15 border border-border-field bg-bg-inverse/5 text-fg hover:bg-bg-inverse/10 disabled:border-border-disabled disabled:bg-transparent",
        accent:
          "pressed:bg-bg-accent-active bg-bg-accent text-fg-onAccent hover:bg-bg-accent-hover",
        success:
          "pressed:bg-bg-success-active bg-bg-success text-fg-onSuccess hover:bg-bg-success-hover",
        warning:
          "pressed:bg-bg-warning-active bg-bg-warning text-fg-onWarning hover:bg-bg-warning-hover",
        danger:
          "pressed:bg-bg-danger-active bg-bg-danger text-fg-onDanger hover:bg-bg-danger-hover",
      },
      size: {
        sm: "h-8 px-3 [&_svg]:size-4",
        md: "h-9 px-4 [&_svg]:size-4",
        lg: "h-10 px-5 [&_svg]:size-5",
      },
      shape: {
        rectangle: "",
        square: "",
        circle: "rounded-full",
      },
    },
    compoundVariants: [
      {
        size: "sm",
        shape: ["square", "circle"],
        className: "w-8 px-0",
      },
      {
        size: "md",
        shape: ["square", "circle"],
        className: "w-9 px-0",
      },
      {
        size: "lg",
        shape: ["square", "circle"],
        className: "w-10 px-0",
      },
    ],
    defaultVariants: {
      variant: "default",
      size: "md",
      shape: "rectangle",
    },
  },
  {
    responsiveVariants: ["sm", "lg"],
  }
);

interface ButtonProps
  extends Omit<AriaButtonProps, "className">,
    Omit<AriaLinkProps, "className" | "children" | "style">,
    VariantProps<typeof buttonStyles> {
  className?: string;
  isLoading?: boolean;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
}

const Button = React.forwardRef(
  (localProps: ButtonProps, ref: React.ForwardedRef<HTMLButtonElement>) => {
    const contextProps = useButtonContext();
    const props = { ...contextProps, ...localProps };

    const {
      className,
      variant,
      size,
      shape,
      isDisabled,
      isLoading,
      prefix,
      suffix,
      ...restProps
    } = props;

    const Element: React.ElementType = props.href ? AriaLink : AriaButton;

    return (
      <Element
        ref={ref}
        {...restProps}
        isDisabled={isDisabled || isLoading}
        className={buttonStyles({ variant, size, shape, className })}
      >
        {composeRenderProps(props.children, (children) => (
          <>
            {isLoading ? (
              <Loader2Icon aria-label="loading" className="animate-spin" />
            ) : (
              prefix
            )}
            {typeof children === "string" ? (
              <span className="truncate">{children}</span>
            ) : (
              children
            )}
            {suffix}
          </>
        ))}
      </Element>
    );
  }
);
Button.displayName = "Button";

type ButtonContextValue = VariantProps<typeof buttonStyles>;
const ButtonContext = React.createContext<ButtonContextValue>({});
const useButtonContext = () => {
  return React.useContext(ButtonContext);
};

export type { ButtonProps };
export { Button, buttonStyles, ButtonContext };
