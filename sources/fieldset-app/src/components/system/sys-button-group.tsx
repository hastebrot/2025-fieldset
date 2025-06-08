import { Button } from "react-aria-components";
import { classNames } from "../../helpers/clsx";

export type SysButtonGroupProps = {
  children?: React.ReactNode;
};

export const SysButtonGroup = (props: SysButtonGroupProps) => {
  return (
    <div
      className={classNames(
        "inline-flex items-center h-[28px]",
        "rounded-md shadow-(--borders-base) overflow-hidden",
      )}
    >
      {props.children}
    </div>
  );
};

export type SysButtonGroupItemProps = {
  children?: React.ReactNode;
  iconSlot?: React.ReactNode;
  isDisabled?: boolean;
};

export const SysButtonGroupItem = (props: SysButtonGroupItemProps) => {
  return (
    <Button
      className={classNames(
        "flex items-center w-fit h-full px-2 py-0.5",
        "cursor-pointer outline-none",
        "not-last:border-r border-(--border-base)",
        "bg-(--bg-component) text-(--fg-suble)",
        "data-[hovered]:bg-(--bg-component-hover)",
        "data-[pressed]:bg-(--bg-component-pressed)",
        "data-[disabled]:!bg-(--bg-disabled)",
        "data-[disabled]:!text-(--fg-disabled)",
        "data-[disabled]:cursor-auto",
        props.iconSlot !== undefined && "!px-[6.5px]",
      )}
      isDisabled={props.isDisabled}
    >
      {props.iconSlot}
      {props.children}
    </Button>
  );
};
