import { Fragment } from "react";
import {
  Button,
  Header,
  ListBox,
  ListBoxItem,
  ListBoxSection,
  Select,
  SelectValue,
  Separator,
  Text,
} from "react-aria-components";
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
  isFieldComponent?: boolean;
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
          props.isFieldComponent && [
            "!bg-(--bg-field-component)",
            "data-[hovered]:!bg-(--bg-field-component-hover)",
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
        >
          {(renderProps) => (
            <Fragment>
              {renderProps.isPlaceholder && renderProps.defaultChildren}
              {!renderProps.isPlaceholder && <span>{renderProps.selectedText}</span>}
            </Fragment>
          )}
        </SelectValue>
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
          "min-w-(--trigger-width) _max-h-[200px]",
          "overflow-hidden rounded-lg",
        )}
      >
        <ListBox className="outline-none w-full p-1" selectionMode="single">
          {props.children}
        </ListBox>
      </div>
    </SysTheme>
  );
};

export type SysSelectItemProps = {
  value: string;
  label: string;
  isDisabled?: boolean;
};

export const SysSelectItem = (props: SysSelectItemProps) => {
  return (
    <ListBoxItem
      id={props.value}
      className={classNames(
        "group grid grid-cols-[15px_1fr] items-center gap-x-2 px-2 py-1.5",
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
      textValue={props.label}
      isDisabled={props.isDisabled}
    >
      <div className="invisible group-data-[selected]:visible">
        <div className="size-[15px] flex items-center justify-center">
          <SysIcon name="check" variant="outlined" width={11} strokeWidth={2.5} />
        </div>
      </div>
      <Text slot="label" className="flex-1 truncate">
        {props.label}
      </Text>
    </ListBoxItem>
  );
};

export type SysSelectSectionProps = {
  children?: React.ReactNode;
  label?: string;
};

export const SysSelectSection = (props: SysSelectSectionProps) => {
  return (
    <ListBoxSection>
      {props.label && (
        <Header
          className="text-(--fg-muted) px-2 py-1.5"
          style={{ ...typography[".txt-compact-xsmall-plus"] }}
        >
          {props.label}
        </Header>
      )}
      {props.children}
    </ListBoxSection>
  );
};

export const SysSelectSeparator = () => {
  return (
    <Separator
      className={classNames(
        "bg-(--border-component) -mx-1 my-1 h-0.5",
        "border-t border-t-(--border-menu-top) border-b border-b-(--border-menu-bot)",
      )}
    />
  );
};
