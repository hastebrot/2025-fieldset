import { classNames } from "../../helpers/clsx";
import { SysButton } from "./sys-button";
import { SysComponent, SysFieldComponent, SysFieldReadonly } from "./sys-field";
import { SysIcon } from "./sys-icon";
import { SysIconButton } from "./sys-icon-button";
import { SysSelect, SysSelectItem } from "./sys-select-field";
import { SysSeparator } from "./sys-separator";
import { SysText } from "./sys-text";

// admin components, https://github.com/medusajs/medusa/tree/v2.8.4/packages/admin/dashboard/src/components
// admin routes, https://github.com/medusajs/medusa/tree/v2.8.4/packages/admin/dashboard/src/routes

export type SysConditionBlockProps = {
  children?: React.ReactNode;
};

export const SysConditionBlock = (props: SysConditionBlockProps) => {
  return (
    <div className="flex flex-col gap-y-3">
      <section className="flex flex-col gap-y-3">
        <SysComponent>
          <div className="grid grid-cols-[auto_1fr_auto] items-center px-1.5 gap-1.5">
            <div>
              <SysIconButton variant="ghost" size="small">
                <SysIcon name="grip-vertical" variant="outlined" width={15} strokeWidth={2} />
              </SysIconButton>
            </div>
            <div>{props.children}</div>
            <div>
              <SysIconButton variant="ghost" size="small">
                <SysIcon name="x" variant="outlined" width={15} strokeWidth={2} />
              </SysIconButton>
            </div>
          </div>
        </SysComponent>
      </section>
    </div>
  );
};

export type SysConditionSplitBlockProps = {
  filterSlot?: React.ReactNode;
  listSlot?: React.ReactNode;
};

export const SysConditionSplitBlock = (props: SysConditionSplitBlockProps) => {
  return (
    <div className="flex flex-col gap-y-3">
      <section className="flex flex-col gap-y-3">
        <SysComponent>
          {props.filterSlot}
          <div className="flex flex-col gap-y-1.5">
            <SysSeparator variant="dashed" />
            {props.listSlot}
          </div>
        </SysComponent>
      </section>
    </div>
  );
};

export type SysBlockAttributeFilterProps = {
  isAttributeReadonly?: boolean;
  isOperatorReadonly?: boolean;
  isOperatorHidden?: boolean;
};

export const SysBlockAttributeFilter = (props: SysBlockAttributeFilterProps) => {
  return (
    <div className="grid grid-cols-2 gap-1.5">
      <div className={classNames(!props.isOperatorHidden && "col-span-full")}>
        {!props.isAttributeReadonly && (
          <SysSelect isFieldComponent placeholder="Select attribute">
            <SysSelectItem value="attribute" label="Attribute" />
          </SysSelect>
        )}
        {props.isAttributeReadonly && (
          <SysFieldReadonly className="py-1.5">Read-only attribute</SysFieldReadonly>
        )}
      </div>
      <div className={classNames(props.isOperatorHidden && "hidden")}>
        {!props.isOperatorReadonly && (
          <SysSelect isFieldComponent placeholder="Select operator">
            <SysSelectItem value="operator" label="Operator" />
          </SysSelect>
        )}
        {props.isOperatorReadonly && (
          <SysFieldReadonly className="py-1.5">Read-only operator</SysFieldReadonly>
        )}
      </div>
      <SysSelect isFieldComponent placeholder="Select values">
        <SysSelectItem value="value-1" label="Value 1" />
        <SysSelectItem value="value-2" label="Value 2" />
      </SysSelect>
    </div>
  );
};

export const SysBlockAttributeSearchFilter = () => {
  return (
    <div className="flex flex-col gap-y-1.5">
      <div className="flex flex-col gap-y-1.5 px-1.5">
        <SysSelect isFieldComponent placeholder="Select attribute">
          <SysSelectItem value="attribute" label="Attribute" />
        </SysSelect>
      </div>
      <div className="flex items-center gap-1.5 px-1.5">
        <SysFieldComponent className="flex-1 py-1.5 text-(--fg-muted) cursor-pointer" as="button">
          <SysIcon name="search" variant="outlined" width={16} strokeWidth={2} />
          Search values
        </SysFieldComponent>
        <SysButton variant="outlined">Browse</SysButton>
      </div>
    </div>
  );
};

export const SysBlockAttributeValueList = () => {
  return (
    <div className="flex flex-col gap-y-1.5 px-1.5">
      <SysFieldComponent className="justify-between py-0.5 pr-1">
        <span>Value 1</span>
        <div className="flex items-center">
          <SysIconButton size="small" variant="ghost">
            <SysIcon name="edit" variant="outlined" width={15} strokeWidth={2} />
          </SysIconButton>
          <SysIconButton size="small" variant="ghost">
            <SysIcon name="x" variant="outlined" width={15} strokeWidth={2} />
          </SysIconButton>
        </div>
      </SysFieldComponent>
      <SysFieldComponent className="justify-between py-0.5 pr-1">
        <span>Value 2</span>
        <div className="flex items-center">
          <SysIconButton size="small" variant="ghost">
            <SysIcon name="edit" variant="outlined" width={15} strokeWidth={2} />
          </SysIconButton>
          <SysIconButton size="small" variant="ghost">
            <SysIcon name="x" variant="outlined" width={15} strokeWidth={2} />
          </SysIconButton>
        </div>
      </SysFieldComponent>
    </div>
  );
};

export const SysFieldHeader = () => {
  return (
    <header className="flex items-center justify-between gap-x-4">
      <div className="flex flex-col">
        <div className="flex items-baseline gap-x-1">
          <SysText size="small">Targets</SysText>
          <SysText size="small">
            <span className="text-(--fg-muted)">(Optional)</span>
          </SysText>
        </div>
        <SysText size="small">
          <span className="text-(--fg-subtle) text-pretty">
            Select the targets that this tax rate will apply to.
          </span>
        </SysText>
      </div>
      <div>
        <SysButton size="small" variant="ghost">
          <span className="text-(--fg-interactive) hover:text-(--fg-interactive-hover) flex-shrink-0">
            Add target
          </span>
        </SysButton>
      </div>
    </header>
  );
};
