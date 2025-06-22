import { Tab, TabList, TabPanel, Tabs } from "react-aria-components";
import { classNames } from "../../helpers/clsx";
import { typography } from "./sys-tokens";

// https://github.com/medusajs/medusa/blob/v2.8.4/packages/design-system/ui/src/components/tabs/tabs.tsx
// https://docs.medusajs.com/ui/components/tabs

export type SysTabsProps = {
  children?: React.ReactNode;
  defaultValue?: string;
  value?: string;
  onValueChange?: (value: string) => void;
};

export const SysTabs = (props: SysTabsProps) => {
  return (
    <Tabs
      className="flex flex-col"
      defaultSelectedKey={props.defaultValue}
      selectedKey={props.value}
      onSelectionChange={(key) => props.onValueChange && props.onValueChange(key.toString())}
    >
      {props.children}
    </Tabs>
  );
};

export type SysTabsListProps = {
  children?: React.ReactNode;
};

export const SysTabsList = (props: SysTabsListProps) => {
  return <TabList className="flex items-center gap-2">{props.children}</TabList>;
};

export type SysTabsItemProps = {
  children?: React.ReactNode;
  value?: string;
  status?: "not-started" | "in-progress" | "completed";
  isDisabled?: boolean;
};

export const SysTabsItem = (props: SysTabsItemProps) => {
  return (
    <Tab
      id={props.value}
      className={classNames(
        "text-(--fg-subtle) bg-transparent border border-transparent rounded-full",
        "inline-flex items-center justify-center px-2.5 py-1",
        "overflow-hidden outline-none cursor-pointer",
        "data-[hovered]:text-(--fg-base)",
        "data-[focus-visible]:border-(--border-interactive)",
        "data-[focus-visible]:bg-(--bg-base)",
        "data-[focus-visible]:!shadow-(--borders-focus)",
        "data-[selected]:text-(--fg-base)",
        "data-[selected]:bg-(--bg-base)",
        "data-[selected]:shadow-(--elevation-card-rest)",
      )}
      style={{
        ...typography[".txt-compact-small-plus"],
      }}
      isDisabled={props.isDisabled}
    >
      {props.children}
    </Tab>
  );
};

export type SysTabsPanelProps = {
  children?: React.ReactNode;
  value?: string;
};

export const SysTabsPanel = (props: SysTabsPanelProps) => {
  return (
    <TabPanel id={props.value} className="outline-none">
      {props.children}
    </TabPanel>
  );
};
