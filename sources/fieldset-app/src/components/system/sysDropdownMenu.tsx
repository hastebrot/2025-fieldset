import { useContext } from "react";
import { useFocusWithin } from "react-aria";
import {
  Header,
  Menu,
  MenuItem,
  MenuSection,
  MenuTrigger,
  OverlayTriggerStateContext,
  Popover,
  Separator,
} from "react-aria-components";
import { useLocation } from "react-router";
import { classNames } from "../../helpers/clsx";

export type SysMenuTriggerProps = {
  children?: React.ReactNode;
  defaultOpen?: boolean;
  isOpen?: boolean;
  onOpenChange?: (isOpen: boolean) => void;
};

export const SysMenuTrigger = (props: SysMenuTriggerProps) => {
  return (
    <MenuTrigger
      defaultOpen={props.defaultOpen}
      isOpen={props.isOpen}
      onOpenChange={props.onOpenChange}
    >
      {props.children}
    </MenuTrigger>
  );
};

export type SysMenuPopoverProps = {
  children?: React.ReactNode;
  isOpen?: boolean;
  isNonModal?: boolean;
  shouldCloseOnBlur?: boolean;
};

export const SysMenuPopover = (props: SysMenuPopoverProps) => {
  const overlayState = useContext(OverlayTriggerStateContext);
  const { focusWithinProps } = useFocusWithin({
    onBlurWithin() {
      if (props.shouldCloseOnBlur) {
        // when a menu popover is open, and we again press the menu trigger,
        // then we will be unable to close the popover anymore.
        // to prevent this, we wait for the next tick to close the overlay.
        // setTimeout() is used, instead of requestAnimationFrame() or queueMicrotask().
        setTimeout(() => {
          overlayState?.close();
        }, 0);
      }
    },
  });

  return (
    <Popover offset={9} isNonModal={props.isNonModal} isOpen={props.isOpen}>
      <div {...focusWithinProps}>{props.children}</div>
    </Popover>
  );
};

export type SysMenuProps = {
  children?: React.ReactNode;
};

export const SysMenu = (props: SysMenuProps) => {
  return (
    <div
      className={classNames(
        "border border-(--token-border-translucent) rounded-(--token-border-radius)",
        "bg-(--token-surface-primary)",
        "overflow-hidden shadow-(--token-shadow-dropdown)",
      )}
    >
      <Menu
        className={classNames(
          "bg-(--token-surface-primary) text-(--token-brush-primary)",
          "py-[4px] min-w-[200px]",
        )}
      >
        {props.children}
      </Menu>
    </div>
  );
};

export type SysMenuSectionProps = {
  children?: React.ReactNode;
  columns?: number;
};

export const SysMenuSection = (props: SysMenuSectionProps) => {
  return (
    <MenuSection
      className="[column-count:var(--props-columns)] [column-gap:0]"
      style={{ "--props-columns": props.columns ?? 1 } as React.CSSProperties}
    >
      {props.children}
    </MenuSection>
  );
};

export type SysMenuHeaderProps = {
  children?: React.ReactNode;
};

export const SysMenuHeader = (props: SysMenuHeaderProps) => {
  return (
    <Header
      className={classNames(
        "[column-span:all] px-[12px] py-[4px]",
        "uppercase font-[500] text-[12px]/[16px] text-(--token-brush-secondary)",
      )}
    >
      {props.children}
    </Header>
  );
};

export type SysMenuItemProps = {
  children?: React.ReactNode;
  href?: string;
  beforeSlot?: React.ReactNode;
  afterSlot?: React.ReactNode;
  isSelected?: boolean;
  isDisabled?: boolean;
};

export const SysMenuItem = ({ ...props }: SysMenuItemProps) => {
  const location = useLocation();
  if (props.href && !props.isSelected) {
    // TODO(hastebrot): Check for selected state outside of this component.
    props.isSelected = `${location.pathname}/`.startsWith(`${props.href}/`);
  }

  return (
    <MenuItem
      className={classNames(
        "flex flex-row items-center",
        "px-[12px] py-[8px] font-[400] text-[14px]/[20px] gap-[16px]",
        "text-(--token-brush-primary)",
        "cursor-pointer select-none rounded-(--token-border-radius) hover:bg-(--token-surface-secondary-hover)",
        "focus-visible:outline-none",
        // FIXME(hastebrot): This should be "bg-(--token-brush-accent)/4" for light color mode.
        props.isSelected && "!bg-(--token-brush-accent)/10 !text-(--token-brush-accent)",
        props.isDisabled && "!cursor-auto opacity-33 hover:!bg-transparent",
        // fix for safari browser to avoid menu items split into two columns.
        "[break-inside:avoid]",
      )}
      href={props.href}
      isDisabled={props.isDisabled}
    >
      {props.beforeSlot}
      {props.children}
      {props.afterSlot}
    </MenuItem>
  );
};

export type SysMenuSeparatorProps = {};

export const SysMenuSeparator = (props: SysMenuSeparatorProps) => {
  return (
    <Separator
      className={classNames("my-[8px] border-t border-(--token-border-translucent)")}
      {...props}
    />
  );
};
