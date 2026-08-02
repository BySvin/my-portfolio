import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "icon";

interface BaseProps {
  children: ReactNode;
  variant?: Variant;
  className?: string;
}

interface LinkButtonProps extends BaseProps {
  href: string;
  disabled?: false;
}

interface DisabledButtonProps extends BaseProps {
  href?: undefined;
  disabled: true;
  disabledLabel?: string;
}

type ButtonProps = LinkButtonProps | DisabledButtonProps;

const variantClasses: Record<Variant, string> = {
  primary:
    "inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-bg transition-colors hover:bg-ink/85",
  secondary:
    "inline-flex items-center gap-2 rounded-full border border-ink/15 px-6 py-3 text-sm font-medium text-ink transition-colors hover:bg-ink hover:text-bg",
  icon: "inline-flex h-11 w-11 items-center justify-center rounded-full border border-ink/15 text-ink transition-colors hover:bg-ink hover:text-bg",
};

export default function Button(props: ButtonProps) {
  const { children, variant = "primary", className = "" } = props;
  const classes = `${variantClasses[variant]} ${className}`.trim();

  if (props.disabled) {
    return (
      <span
        className={`${classes} cursor-not-allowed opacity-40 hover:bg-transparent hover:text-ink`}
        title={props.disabledLabel ?? "Coming soon"}
        aria-disabled="true"
      >
        {children}
      </span>
    );
  }

  const isExternal = /^https?:\/\//.test(props.href);

  return (
    <a
      href={props.href}
      className={classes}
      {...(isExternal
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
    >
      {children}
    </a>
  );
}
