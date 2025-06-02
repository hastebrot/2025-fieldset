import { Tab, TabList, TabPanel, Tabs } from "react-aria-components";
import { classNames } from "../../helpers/clsx";
import { SysIcon } from "./sysIcon";
import { typography } from "./sysTokens";

// https://github.com/medusajs/medusa/blob/v2.8.3/packages/design-system/ui/src/components/progress-tabs/progress-tabs.tsx
// https://docs.medusajs.com/ui/components/progress-tabs

export type SysProgressTabsProps = {
  children?: React.ReactNode;
  defaultValue?: string;
  value?: string;
  onValueChange?: (value: string) => void;
};

export const SysProgressTabs = (props: SysProgressTabsProps) => {
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

export type SysProgressTabsListProps = {
  children?: React.ReactNode;
};

export const SysProgressTabsList = (props: SysProgressTabsListProps) => {
  return (
    <TabList className="flex items-center border-b border-(--border-base)">
      {props.children}
    </TabList>
  );
};

export type SysProgressTabsItemProps = {
  children?: React.ReactNode;
  value?: string;
  status?: "not-started" | "in-progress" | "completed";
  isDisabled?: boolean;
};

export const SysProgressTabsItem = (props: SysProgressTabsItemProps) => {
  return (
    <Tab
      id={props.value}
      className={classNames(
        "group text-(--fg-muted) bg-(--bg-subtle) border-r-(--border-base) border-r",
        "inline-flex items-center text-left flex-1",
        "h-[52px] w-full max-w-[200px] gap-x-2 px-4",
        "overflow-hidden text-ellipsis whitespace-nowrap outline-none cursor-pointer",
        "data-[disabled]:bg-(--bg-disabled) data-[disabled]:text-(--fg-muted)",
        "data-[hovered]:bg-(--bg-subtle-hover)",
        "data-[focus-visible]:bg-(--bg-base) data-[focused]:z-1",
        "data-[selected]:text-(--fg-base) data-[selected]:bg-(--bg-base)",
      )}
      style={{
        ...typography[".txt-compact-small-plus"],
      }}
      isDisabled={props.isDisabled}
    >
      {props.status && (
        <div className="flex items-center text-(--fg-muted) group-data-[selected]:text-(--fg-interactive)">
          {props.status === "not-started" && (
            <SysIcon name="circle-dashed" variant="outlined" width={18} strokeWidth={2} />
          )}
          {props.status === "in-progress" && (
            <SysIcon name="percentage-50" variant="outlined" width={18} strokeWidth={2} />
          )}
          {props.status === "completed" && (
            <SysIcon name="percentage-100" variant="outlined" width={18} strokeWidth={2} />
          )}
        </div>
      )}
      {props.children}
    </Tab>
  );
};

export type SysProgressTabsPanelProps = {
  children?: React.ReactNode;
  value?: string;
};

export const SysProgressTabsPanel = (props: SysProgressTabsPanelProps) => {
  return (
    <TabPanel id={props.value} className="outline-none">
      {props.children}
    </TabPanel>
  );
};
