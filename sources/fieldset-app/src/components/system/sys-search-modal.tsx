import { Input } from "react-aria-components";
import { classNames } from "../../helpers/clsx";
import { SysKeyboard } from "./sys-keyboard";
import { SysText } from "./sys-text";
import { typography } from "./sys-tokens";

// https://github.com/medusajs/medusa/blob/v2.8.4/packages/admin/dashboard/src/components/search/search.tsx
// https://react-spectrum.adobe.com/react-aria/Autocomplete.html
// https://react-spectrum.adobe.com/react-aria/examples/command-palette.html

export type SysSearchModalProps = {
  children?: React.ReactNode;
};

export const SysSearchModal = (props: SysSearchModalProps) => {
  return (
    <CommandDialog>
      <CommandPalette>
        <CommandInput placeholder="Jump to or find something..." />
        <CommandList>
          <CommandGroup heading="Commands">
            <CommandItem label="Create order" description="Modal" />
            <CommandItem label="Create product" description="Modal" />
          </CommandGroup>
          <CommandGroup heading="Jump to">
            <CommandItem label="Orders" description="Overview" />
            <CommandItem label="Products" description="Overview" />
          </CommandGroup>
          <CommandGroup heading="Settings">
            <CommandItem label="Return reasons" description="Settings" />
            <CommandItem label="Sales channels" description="Settings" />
          </CommandGroup>
        </CommandList>
        {props.children}
      </CommandPalette>
    </CommandDialog>
  );
};

type CommandDialogProps = {
  children?: React.ReactNode;
};

const CommandDialog = (props: CommandDialogProps) => {
  return (
    <div
      className={classNames(
        "flex flex-col overflow-hidden min-h-[300px]",
        "bg-(--bg-base) shadow-(--elevation-modal) rounded-xl",
      )}
    >
      <div className="h-full">{props.children}</div>
      <footer
        className={classNames(
          "flex items-center justify-end px-4 py-3",
          "bg-(--bg-field) text-(--fg-subtle) border-t border-(--border-base)",
        )}
      >
        <div className="flex items-center gap-x-3">
          <div className="flex items-center gap-x-2">
            <SysText size="small">Navigation</SysText>
            <div className="flex items-center gap-x-1">
              <SysKeyboard>↓</SysKeyboard>
              <SysKeyboard>↑</SysKeyboard>
            </div>
          </div>
          <div className="bg-(--border-strong) h-3 w-px"></div>
          <div className="flex items-center gap-x-2">
            <SysText size="small">Open result</SysText>
            <div className="flex items-center gap-x-1">
              <SysKeyboard>↵</SysKeyboard>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

type CommandPaletteProps = {
  children?: React.ReactNode;
};

const CommandPalette = (props: CommandPaletteProps) => {
  return (
    <div className={classNames("flex flex-col h-full w-full overflow-hidden")}>
      {props.children}
    </div>
  );
};

type CommandInputProps = {
  placeholder?: string;
};

const CommandInput = (props: CommandInputProps) => {
  return (
    <div className="flex flex-col border-b border-(--border-base)">
      <div className="flex items-center px-4 py-3">
        <Input
          className={classNames(
            "flex w-full h-6",
            "placeholder:text-(--fg-muted) bg-transparent rounded-md outline-none",
          )}
          placeholder={props.placeholder}
        />
      </div>
    </div>
  );
};

type CommandListProps = {
  children?: React.ReactNode;
};

const CommandList = (props: CommandListProps) => {
  return (
    <div className="max-h-[300px] overflow-y-auto overflow-x-hidden px-2 pb-4">
      {props.children}
    </div>
  );
};

type CommandGroupProps = {
  children?: React.ReactNode;
  heading?: string;
};

const CommandGroup = (props: CommandGroupProps) => {
  return (
    <div className="flex flex-col text-(--fg-base)">
      {props.heading && (
        <div
          className="text-(--fg-muted) px-2 pb-1 pt-3"
          style={{ ...typography[".txt-compact-xsmall-plus"] }}
        >
          {props.heading}
        </div>
      )}
      {props.children}
    </div>
  );
};

type CommandItemProps = {
  label: string;
  description?: string;
};

const CommandItem = (props: CommandItemProps) => {
  return (
    <div
      className={classNames(
        "flex items-center gap-x-3 p-2",
        "select-none outline-none rounded-md cursor-pointer",
      )}
      style={{
        ...typography[".txt-compact-small"],
      }}
    >
      <div className="w-full flex items-center justify-between">
        <div>{props.label}</div>
        {props.description && (
          <div className="text-(--fg-subtle)" style={{ ...typography[".txt-compact-xsmall"] }}>
            {props.description}
          </div>
        )}
      </div>
    </div>
  );
};
