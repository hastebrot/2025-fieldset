import { Button } from "react-aria-components";
import { classNames } from "../../helpers/clsx";
import { typography } from "./sysTokens";

export type SysButtonProps = {
  children?: React.ReactNode;
  variant?: "filled" | "outlined" | "ghost" | "danger";
  size?: "base" | "small" | "large" | "xlarge";
  isDisabled?: boolean;
  onPress?: () => void;
};

export const SysButton = (props: SysButtonProps) => {
  return (
    <Button
      className={classNames(
        "relative inline-flex w-fit items-center justify-center",
        "overflow-hidden rounded-md outline-none",
        "not-data-[disabled]:cursor-pointer",
        "data-[disabled]:bg-(--bg-disabled) data-[disabled]:text-(--fg-disabled)",
        "data-[disabled]:border-(--border-base) data-[disabled]:shadow-(--buttons-neutral)",
        props.variant === "filled" && [
          "shadow-(--buttons-inverted) text-(--contrast-fg-primary) bg-(--button-inverted)",
          "hover:bg-(--button-inverted-hover)",
          "active:bg-(--button-inverted-pressed)",
          "focus-visible:!shadow-(--buttons-inverted-focus)",
        ],
        props.variant === "outlined" && [
          "shadow-(--buttons-neutral) text-(--fg-base) bg-(--button-neutral)",
          "hover:bg-(--button-neutral-hover)",
          "active:bg-(--button-neutral-pressed)",
          "focus-visible:!shadow-(--buttons-neutral-focus)",
        ],
        props.variant === "ghost" && [
          "text-(--fg-base) bg-(--button-transparent)",
          "hover:bg-(--button-transparent-hover)",
          "active:bg-(--button-transparent-pressed)",
          "focus-visible:shadow-(--buttons-neutral-focus) focus-visible:bg-(--bg-base)",
          "data-[disabled]:!bg-transparent data-[disabled]:!shadow-none",
        ],
        props.variant === "danger" && [
          "shadow-(--buttons-danger) text-(--fg-on-color) bg-(--button-danger)",
          "hover:bg-(--button-danger-hover)",
          "active:bg-(--button-danger-pressed)",
          "focus-visible:!shadow-(--buttons-danger-focus)",
        ],
        [
          props.size === undefined && "gap-x-1.5 px-3 py-1.5",
          props.size === "base" && "gap-x-1.5 px-3 py-1.5",
          props.size === "small" && "gap-x-1.5 px-2 py-1",
          props.size === "large" && "gap-x-1.5 px-4 py-2.5",
          props.size === "xlarge" && "gap-x-1.5 px-5 py-3.5",
        ],
      )}
      style={{
        ...(props.size === undefined && typography[".txt-compact-small-plus"]),
        ...(props.size === "base" && typography[".txt-compact-small-plus"]),
        ...(props.size === "small" && typography[".txt-compact-small-plus"]),
        ...(props.size === "large" && typography[".txt-compact-medium-plus"]),
        ...(props.size === "xlarge" && typography[".txt-compact-large-plus"]),
      }}
      isDisabled={props.isDisabled}
      onPress={props.onPress}
    >
      {props.children}
    </Button>
  );
};
