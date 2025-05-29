import { useId } from "@react-aria/utils";
import { Checkbox, Label } from "react-aria-components";
import { classNames } from "../../helpers/clsx";
import { SysIcon } from "./sysIcon";
import { SysLabel } from "./sysLabel";

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
    <div className="flex items-center gap-2">
      <Checkbox
        id={id}
        value={props.value}
        defaultSelected={props.defaultSelected}
        isSelected={props.isSelected}
        onChange={props.onChange}
        isDisabled={props.isDisabled}
        isIndeterminate={props.isIndeterminate}
        className="group inline-flex h-5 w-5 items-center justify-center outline-none"
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
              <SysIcon name="check" variant="outlined" width={15} strokeWidth={2} />
            )}
            {renderProps.isIndeterminate && (
              <SysIcon name="minus" variant="outlined" width={15} strokeWidth={2} />
            )}
          </div>
        )}
      </Checkbox>
      {(props.labelSlot ?? props.label) && (
        <Label id={labelId} htmlFor={id}>
          {props.labelSlot ?? <SysLabel>{props.label}</SysLabel>}
        </Label>
      )}
    </div>
  );
};
