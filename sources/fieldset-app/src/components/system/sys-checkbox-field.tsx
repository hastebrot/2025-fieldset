import { useId } from "@react-aria/utils";
import { Checkbox, CheckboxGroup } from "react-aria-components";
import { classNames } from "../../helpers/clsx";
import { SysIcon } from "./sys-icon";
import { SysLabel } from "./sys-label";

// https://docs.medusajs.com/ui/components/checkbox
// https://github.com/medusajs/medusa/blob/v2.8.3/packages/design-system/ui/src/components/checkbox/checkbox.tsx
// https://react-spectrum.adobe.com/react-aria/Checkbox.html

export type SysCheckboxGroupProps = {
  label: string;
  children?: React.ReactNode;
  defaultValue?: string[];
  value?: string[];
  onChange?: (value: string[]) => void;
};

export const SysCheckboxGroup = (props: SysCheckboxGroupProps) => {
  return (
    <CheckboxGroup
      className="grid gap-2"
      defaultValue={props.defaultValue}
      value={props.value}
      onChange={props.onChange}
      aria-label={props.label}
    >
      {props.children}
    </CheckboxGroup>
  );
};

export type SysCheckboxProps = {
  value?: string;
  label?: string;
  labelSlot?: React.ReactNode;
  defaultSelected?: boolean;
  isSelected?: boolean;
  onChange?: (isSelected: boolean) => void;
  isDisabled?: boolean;
  isIndeterminate?: boolean;
};

export const SysCheckbox = (props: SysCheckboxProps) => {
  const id = useId();
  const labelId = useId();

  return (
    <div className="flex items-center gap-3">
      <Checkbox
        className="group inline-flex h-5 w-5 items-center justify-center outline-none"
        id={id}
        value={props.value}
        defaultSelected={props.defaultSelected}
        isSelected={props.isSelected}
        onChange={props.onChange}
        isDisabled={props.isDisabled}
        isIndeterminate={props.isIndeterminate}
      >
        {(renderProps) => (
          <div
            className={classNames(
              "h-[15px] w-[15px] rounded-[3px]",
              "text-(--fg-on-inverted) bg-(--bg-base) shadow-(--borders-base)",
              "group-data-[disabled]:cursor-not-allowed group-data-[disabled]:opacity-50",
              "group-data-[focus-visible]:!shadow-(--borders-interactive-with-focus)",
              "group-data-[hovered]:group-not-data-[selected]:group-not-data-[indeterminate]:bg-(--bg-base-hover)",
              "group-data-[selected]:bg-(--bg-interactive) group-data-[selected]:shadow-(--borders-interactive-with-shadow)",
              "group-data-[indeterminate]:bg-(--bg-interactive) group-data-[indeterminate]:shadow-(--borders-interactive-with-shadow)",
            )}
          >
            {!renderProps.isIndeterminate && renderProps.isSelected && (
              <SysIcon name="check" variant="outlined" width={15} strokeWidth={2.5} />
            )}
            {renderProps.isIndeterminate && (
              <SysIcon name="minus" variant="outlined" width={15} strokeWidth={2.5} />
            )}
          </div>
        )}
      </Checkbox>
      {(props.labelSlot ?? props.label) && (
        <label id={labelId} htmlFor={id}>
          {props.labelSlot ?? <SysLabel>{props.label}</SysLabel>}
        </label>
      )}
    </div>
  );
};
