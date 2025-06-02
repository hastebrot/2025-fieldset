import { createContext, useContext } from "react";
import { Disclosure, DisclosureGroup, DisclosurePanel, Header } from "react-aria-components";
import { classNames } from "../../helpers/clsx";
import { SysIcon } from "./sysIcon";
import { SysIconButton } from "./sysIconButton";
import { typography } from "./sysTokens";

// https://github.com/medusajs/medusa/blob/v2.8.3/packages/design-system/ui/src/components/progress-accordion/progress-accordion.tsx
// https://docs.medusajs.com/ui/components/progress-accordion

export type SysProgressAccordionProps = {
  children?: React.ReactNode;
  defaultValue?: string[];
  value?: string[];
  onValueChange?: (value: string[]) => void;
  allowsMultipleExpanded?: boolean;
};

export const SysProgressAccordion = (props: SysProgressAccordionProps) => {
  return (
    <DisclosureGroup
      className="flex flex-col"
      defaultExpandedKeys={props.defaultValue}
      expandedKeys={props.value}
      onExpandedChange={(keys) =>
        props.onValueChange && props.onValueChange([...keys.entries()].map((it) => it.toString()))
      }
      allowsMultipleExpanded={props.allowsMultipleExpanded}
    >
      {props.children}
    </DisclosureGroup>
  );
};

export type SysProgressAccordionItemProps = {
  children?: React.ReactNode;
  value?: string;
  isDisabled?: boolean;
};

export const SysProgressAccordionItem = (props: SysProgressAccordionItemProps) => {
  return (
    <Disclosure
      className="border-(--border-base) border-b last-of-type:border-b-0"
      id={props.value}
      isDisabled={props.isDisabled}
    >
      {(renderProps) => (
        <DisclosureRenderContext value={{ isExpanded: renderProps.isExpanded }}>
          {props.children}
        </DisclosureRenderContext>
      )}
    </Disclosure>
  );
};

export type SysProgressAccordionHeaderProps = {
  children?: React.ReactNode;
  status?: "not-started" | "in-progress" | "completed";
};

export const SysProgressAccordionHeader = (props: SysProgressAccordionHeaderProps) => {
  const disclosureRender = useContext(DisclosureRenderContext);

  return (
    <Header
      className={classNames(
        "group flex items-center flex-1",
        "w-full gap-x-4 px-4 text-(--fg-base)",
      )}
      style={{
        ...typography[".h3-core"],
      }}
    >
      {props.status && (
        <div
          className={classNames(
            "flex items-center justify-center h-12 w-8",
            "text-(--fg-muted)",
            disclosureRender.isExpanded && "!text-(--fg-interactive)",
          )}
        >
          {props.status === "not-started" && (
            <SysIcon name="circle-dashed" variant="outlined" width={18} strokeWidth={2} />
          )}
          {props.status === "in-progress" && (
            <SysIcon name="percentage-50" variant="outlined" width={18} strokeWidth={2} />
          )}
          {props.status === "completed" && (
            <SysIcon name="circle-check" variant="filled" width={18} strokeWidth={2} />
          )}
        </div>
      )}
      {props.children}
      <div className="ml-auto">
        <SysIconButton slot="trigger" variant="ghost">
          <SysIcon
            name="plus"
            variant="outlined"
            width={15}
            strokeWidth={2.5}
            className={classNames(disclosureRender.isExpanded && "rotate-45")}
          />
        </SysIconButton>
      </div>
    </Header>
  );
};

export type SysProgressAccordionPanelProps = {
  children?: React.ReactNode;
};

export const SysProgressAccordionPanel = (props: SysProgressAccordionPanelProps) => {
  return (
    <DisclosurePanel>
      <div className="overflow-hidden pl-[64px] pr-6 pb-6">{props.children}</div>
    </DisclosurePanel>
  );
};

const DisclosureRenderContext = createContext<{ isExpanded?: boolean }>({});
