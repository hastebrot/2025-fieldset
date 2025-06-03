import { Fragment, useContext } from "react";
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
  type Selection,
} from "react-aria-components";
import { classNames } from "../../helpers/clsx";
import { SysIcon } from "./sys-icon";
import { SysTheme } from "./sys-theme";
import { typography } from "./sys-tokens";

// https://docs.medusajs.com/ui/components/dropdown-menu
// https://github.com/medusajs/medusa/blob/v2.8.3/packages/design-system/ui/src/components/dropdown-menu/dropdown-menu.tsx
// https://react-spectrum.adobe.com/react-aria/Menu.html

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
  defaultOpen?: boolean;
  isOpen?: boolean;
  onOpenChange?: (isOpen: boolean) => void;
  isNonModal?: boolean;
  shouldCloseOnBlur?: boolean;
};

export const SysMenuPopover = (props: SysMenuPopoverProps) => {
  const popoverOffset = 8;
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
    <Popover
      offset={popoverOffset}
      defaultOpen={props.defaultOpen}
      isOpen={props.isOpen}
      onOpenChange={props.onOpenChange}
      isNonModal={props.isNonModal}
    >
      <div {...focusWithinProps}>{props.children}</div>
    </Popover>
  );
};

export type SysMenuProps = {
  children?: React.ReactNode;
  selectionMode?: "none" | "single" | "multiple";
  defaultSelectedKeys?: string[];
  selectedKeys?: string[];
  onSelectionChange?: (keys: Selection) => void;
};

export const SysMenu = (props: SysMenuProps) => {
  return (
    <SysTheme className="bg-transparent">
      <div
        className={classNames(
          "bg-(--bg-component) text-(--fg-base) shadow-(--elevation-flyout)",
          "overflow-hidden rounded-lg p-1",
        )}
      >
        <Menu
          className={classNames("outline-none min-w-[220px]")}
          selectionMode={props.selectionMode}
          defaultSelectedKeys={props.defaultSelectedKeys}
          selectedKeys={props.selectedKeys}
          onSelectionChange={props.onSelectionChange}
          disallowEmptySelection={props.selectionMode === "single"}
          shouldFocusWrap
        >
          {props.children}
        </Menu>
      </div>
    </SysTheme>
  );
};

export type SysMenuSectionProps = {
  children?: React.ReactNode;
};

export const SysMenuSection = (props: SysMenuSectionProps) => {
  return <MenuSection className={classNames()}>{props.children}</MenuSection>;
};

export type SysMenuHeaderProps = {
  children?: React.ReactNode;
};

export const SysMenuHeader = (props: SysMenuHeaderProps) => {
  return <Header className={classNames()}>{props.children}</Header>;
};

export type SysMenuItemProps = {
  children?: React.ReactNode;
  name?: string;
  href?: string;
  beforeSlot?: React.ReactNode;
  afterSlot?: React.ReactNode;
  isSelected?: boolean;
  isDisabled?: boolean;
};

export const SysMenuItem = ({ ...props }: SysMenuItemProps) => {
  return (
    <MenuItem
      className={classNames(
        "flex flex-row items-center px-2 py-1.5 gap-[8px]",
        "bg-(--bg-component) text-(--fg-base) rounded-md",
        "cursor-pointer select-none outline-none",
        "data-[focus-visible]:bg-(--bg-component-hover) data-[hovered]:bg-(--bg-component-hover)",
        "data-[pressed]:bg-(--bg-component-hover)",
        "data-[disabled]:text-(--fg-disabled) data-[disabled]:pointer-events-none",
      )}
      style={{
        ...typography[".txt-compact-small"],
      }}
      id={props.name}
      href={props.href}
      isDisabled={props.isDisabled}
    >
      {(renderProps) => (
        <Fragment>
          {renderProps.selectionMode === "single" && (
            <span className="flex size-[15px] items-center justify-center">
              {renderProps.isSelected && <SysIcon name="point" variant="filled" width={11} />}
            </span>
          )}
          {renderProps.selectionMode === "multiple" && (
            <span className="flex size-[15px] items-center justify-center">
              {renderProps.isSelected && (
                <SysIcon name="check" variant="outlined" width={11} strokeWidth={2.5} />
              )}
            </span>
          )}
          {props.beforeSlot && (
            <span className="flex items-center text-(--fg-subtle)">{props.beforeSlot}</span>
          )}
          {props.children}
          {props.afterSlot && (
            <span className="ml-auto flex items-center text-(--fg-subtle)">{props.afterSlot}</span>
          )}
        </Fragment>
      )}
    </MenuItem>
  );
};

export type SysMenuSeparatorProps = {};

export const SysMenuSeparator = (props: SysMenuSeparatorProps) => {
  return (
    <Separator
      className={classNames(
        "bg-(--border-component border-y border-t-(--border-menu-top) border-b-(--border-menu-bot)",
        "-mx-1 my-1 h-0.5",
      )}
      {...props}
    />
  );
};
