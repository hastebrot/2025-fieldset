import { Button, ListBox, ListBoxItem, Select, SelectValue } from "react-aria-components";
import { classNames } from "../../helpers/clsx";
import { SysIcon } from "./sys-icon";
import { SysPopover } from "./sys-popover";
import { SysTheme } from "./sys-theme";
import { typography } from "./sys-tokens";

// https://docs.medusajs.com/ui/components/select
// https://github.com/medusajs/medusa/blob/v2.8.4/packages/design-system/ui/src/components/select/select.tsx
// https://react-spectrum.adobe.com/react-aria/Select.html

export type SysSelectProps = {
  children?: React.ReactNode;
  size?: "base" | "small";
  defaultValue?: string;
  value?: string;
  onValueChange?: (value?: string) => void;
  placeholder?: string;
  isInvalid?: boolean;
  isDisabled?: boolean;
};

export const SysSelect = ({ ...props }: SysSelectProps) => {
  props.size = props.size ?? "base";

  return (
    <Select
      className="group/select"
      defaultSelectedKey={props.defaultValue}
      selectedKey={props.value}
      onSelectionChange={(key) => props.onValueChange && props.onValueChange(key?.toString())}
      placeholder={props.placeholder}
      isDisabled={props.isDisabled}
      isInvalid={props.isInvalid}
    >
      <Button
        className={classNames(
          "group flex items-center justify-between w-full",
          "bg-(--bg-field) shadow-(--buttons-neutral)",
          "rounded-md outline-none select-none cursor-pointer",
          "data-[hovered]:bg-(--bg-field-hover)",
          "data-[focus-visible]:shadow-(--borders-interactive-with-active)",
          "group-data-[open]/select:!shadow-(--borders-interactive-with-active)",
          "aria-[invalid=true]:border-(--border-error)",
          "aria-[invalid=true]:shadow-(--borders-error)",
          "invalid:border-(--border-error)",
          "invalid:shadow-(--borders-error)",
          "data-[disabled]:!bg-(--bg-disabled)",
          "data-[disabled]:!text-(--fg-disabled)",
          "data-[disabled]:cursor-default",
          [
            // wrap.
            props.size === "base" && "h-8 px-2 py-1.5",
            props.size === "small" && "h-7 px-2 py-1",
          ],
        )}
        style={{
          ...typography[".txt-compact-small"],
        }}
      >
        <SelectValue
          className={classNames(
            "text-(--fg-base)",
            "data-[placeholder]:text-(--fg-muted)",
            "group-data-[disabled]:!text-(--fg-disabled)",
          )}
        />
        <div
          className={classNames(
            "flex items-center justify-center",
            "text-(--fg-muted)",
            "group-data-[disabled]:!text-(--fg-disabled)",
          )}
          aria-hidden="true"
        >
          <SysIcon name="caret-up-down" variant="filled" width={16} />
        </div>
      </Button>
      <SysPopover isNonModal shouldCloseOnBlur>
        <SysSelectList>{props.children}</SysSelectList>
      </SysPopover>
    </Select>
  );
};

export type SysSelectListProps = {
  children?: React.ReactNode;
};

export const SysSelectList = (props: SysSelectListProps) => {
  return (
    <SysTheme className="bg-transparent">
      <div
        className={classNames(
          "relative bg-(--bg-component) text-(--fg-base) shadow-(--elevation-flyout)",
          "min-w-(--trigger-width) max-h-[200px]",
          "overflow-hidden rounded-lg",
        )}
      >
        <ListBox className="outline-none w-full p-1" shouldFocusOnHover>
          {props.children}
        </ListBox>
      </div>
    </SysTheme>
  );
};

export type SysSelectItemProps = {
  value: string;
  label: string;
};

export const SysSelectItem = (props: SysSelectItemProps) => {
  return (
    <ListBoxItem
      id={props.value}
      className={classNames(
        "grid grid-cols-[15px_1fr] items-center gap-x-2 px-2 py-1.5",
        "rounded-[4px] cursor-pointer outline-none",
        "bg-(--bg-component)",
        "data-[hovered]:bg-(--bg-component-hover)",
        "data-[focus-visible]:bg-(--bg-component-hover)",
        "data-[pressed]:bg-(--bg-component-pressed)",
        "data-[disabled]:!bg-(--bg-disabled)",
      )}
      style={{
        ...typography[".txt-compact-small"],
      }}
    >
      <span></span>
      <div className="flex-1 truncate">{props.label}</div>
    </ListBoxItem>
  );
};
