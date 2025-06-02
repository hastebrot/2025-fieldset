import { Button, Separator } from "react-aria-components";
import { classNames } from "../../helpers/clsx";
import { SysKeyboard } from "./sysKeyboard";
import { typography } from "./sysTokens";

// https://github.com/medusajs/medusa/blob/v2.8.3/packages/design-system/ui/src/components/command-bar/command-bar.tsx
// https://docs.medusajs.com/ui/components/command-bar

export type SysCommandBarProps = {
  children?: React.ReactNode;
};

export const SysCommandBar = (props: SysCommandBarProps) => {
  return (
    <div
      className={classNames(
        "relative flex items-center px-1",
        "bg-(--contrast-bg-base) overflow-hidden rounded-full",
        [
          "after:absolute after:inset-0 after:rounded-full",
          "after:shadow-(--elevation-flyout) after:pointer-events-none",
        ],
      )}
    >
      {props.children}
    </div>
  );
};

export type SysCommandBarButtonProps = {
  children?: React.ReactNode;
  keyboard?: string;
  onPress?: () => void;
  isDisabled?: boolean;
};

export const SysCommandBarButton = (props: SysCommandBarButtonProps) => {
  return (
    <Button
      className={classNames(
        "bg-(--contrast-bg-base) text-(--contrast-fg-primary)",
        "flex items-center gap-x-2 px-3 py-2.5 outline-none",
        "last-of-type:-mr-1 last-of-type:pr-4",
        "data-[hovered]:bg-(--contrast-bg-base-hover)",
        "data-[pressed]:bg-(--contrast-bg-base-pressed)",
        "data-[focus-visible]:bg-(--contrast-bg-highlight)",
        "data-[focus-visible]:data-[hovered]:bg-(--contrast-bg-base-hover)",
        "data-[focus-visible]:data-[pressed]:bg-(--contrast-bg-base-pressed)",
        "data-[disabled]:!bg-(--bg-disabled) data-[disabled]:!text-(--fg-disabled)",
      )}
      onPress={props.onPress}
      isDisabled={props.isDisabled}
      style={{
        ...typography[".txt-compact-small-plus"],
      }}
    >
      <span>{props.children}</span>
      {props.keyboard && <SysKeyboard isCommand>{props.keyboard.toUpperCase()}</SysKeyboard>}
    </Button>
  );
};

export type SysCommandBarTextProps = {
  children?: React.ReactNode;
};

export const SysCommandBarText = (props: SysCommandBarTextProps) => {
  return (
    <div
      className={classNames("text-(--contrast-fg-secondary) px-3 py-2.5")}
      style={{
        ...typography[".txt-compact-small-plus"],
      }}
    >
      {props.children}
    </div>
  );
};

export type SysCommandBarSeparatorProps = {};

export const SysCommandBarSeparator = (props: SysCommandBarSeparatorProps) => {
  return (
    <Separator
      className={classNames("bg-(--contrast-border-base) h-10 w-px")}
      orientation="vertical"
      {...props}
    />
  );
};
