import { Button } from "react-aria-components";
import { classNames } from "../../helpers/clsx";

export type SysIconButtonProps = {
  children?: React.ReactNode;
  slot?: string;
  variant?: "outlined" | "ghost";
  size?: "base" | "xsmall" | "small" | "large" | "xlarge";
  isDisabled?: boolean;
  onPress?: () => void;
  isCalendarButton?: boolean;
};

export const SysIconButton = (props: SysIconButtonProps) => {
  return (
    <Button
      slot={props.slot}
      className={classNames(
        "relative inline-flex items-center justify-center",
        "overflow-hidden rounded-md outline-none",
        "not-data-[disabled]:cursor-pointer",
        "data-[disabled]:bg-(--bg-disabled) data-[disabled]:text-(--fg-disabled)",
        "data-[disabled]:border-(--border-base) data-[disabled]:shadow-(--buttons-neutral)",
        props.variant === "outlined" && [
          "shadow-(--buttons-neutral) text-(--fg-subtle) bg-(--button-neutral)",
          "hover:bg-(--button-neutral-hover)",
          "active:bg-(--button-neutral-pressed)",
          "focus-visible:!shadow-(--buttons-neutral-focus)",
        ],
        props.variant === "ghost" && [
          "text-(--fg-subtle) bg-(--button-transparent)",
          "hover:bg-(--button-transparent-hover)",
          "active:bg-(--button-transparent-pressed)",
          "focus-visible:shadow-(--buttons-neutral-focus) focus-visible:bg-(--bg-base)",
          "data-[disabled]:!bg-transparent data-[disabled]:!shadow-none",
        ],
        [
          props.size === undefined && "h-8 w-8 p-1.5",
          props.size === "base" && "h-8 w-8 p-1.5",
          props.size === "xsmall" && "h-6 w-6 p-1",
          props.size === "small" && "h-7 w-7 p-1",
          props.size === "large" && "h-10 w-10 p-2.5",
          props.size === "xlarge" && "h-12 w-12 p-3.5",
        ],
        props.isCalendarButton && "!rounded-[4px]",
      )}
      isDisabled={props.isDisabled}
      onPress={props.onPress}
    >
      {props.children}
    </Button>
  );
};
