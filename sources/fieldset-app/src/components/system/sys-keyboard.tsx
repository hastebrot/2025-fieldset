import { classNames } from "../../helpers/clsx";
import { typography } from "./sys-tokens";

export type SysKeyboardProps = {
  children?: React.ReactNode;
  isCommand?: boolean;
};

export const SysKeyboard = (props: SysKeyboardProps) => (
  <kbd
    className={classNames(
      "bg-(--tag-neutral-bg) text-(--tag-neutral-text) border-(--tag-neutral-border)",
      props.isCommand && [
        "!bg-(--contrast-bg-subtle) !text-(--contrast-fg-secondary) !border-(--contrast-border-base)",
      ],
      "inline-flex h-5 w-fit min-w-[20px] items-center justify-center",
      "rounded-md border px-1",
    )}
    style={{
      ...typography[".txt-compact-xsmall-plus"],
    }}
  >
    {props.children}
  </kbd>
);
