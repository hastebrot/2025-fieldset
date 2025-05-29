import { useId } from "@react-aria/utils";
import { Radio, RadioGroup } from "react-aria-components";
import { classNames } from "../../helpers/clsx";
import { SysLabel } from "./sysLabel";

export type SysRadioGroupProps = {
  children?: React.ReactNode;
  defaultValue?: string;
  value?: string;
  onChange?: (value: string) => void;
};

export const SysRadioGroup = (props: SysRadioGroupProps) => {
  return (
    <RadioGroup
      className="grid gap-2"
      defaultValue={props.defaultValue}
      value={props.value}
      onChange={props.onChange}
    >
      {props.children}
    </RadioGroup>
  );
};

export type SysRadioProps = {
  value: string;
  label?: string;
  labelSlot?: React.ReactNode;
  isDisabled?: boolean;
};

export const SysRadio = (props: SysRadioProps) => {
  const id = useId();
  const labelId = useId();

  return (
    <div className="flex items-center gap-3">
      <Radio
        id={id}
        value={props.value}
        isDisabled={props.isDisabled}
        className="group inline-flex h-5 w-5 items-center justify-center outline-none"
      >
        {(renderProps) => (
          <div
            className={classNames(
              "h-[14px] w-[14px] rounded-full flex items-center justify-center",
              "text-(--fg-on-inverted) bg-(--bg-base) shadow-(--borders-base)",
              "group-data-[disabled]:cursor-not-allowed group-data-[disabled]:opacity-50",
              "group-data-[focus-visible]:!shadow-(--borders-interactive-with-focus)",
              "group-data-[hovered]:group-not-data-[selected]:group-not-data-[indeterminate]:bg-(--bg-base-hover)",
              "group-data-[selected]:bg-(--bg-interactive) group-data-[selected]:shadow-(--borders-interactive-with-shadow)",
              "group-data-[indeterminate]:bg-(--bg-interactive) group-data-[indeterminate]:shadow-(--borders-interactive-with-shadow)",
            )}
          >
            {renderProps.isSelected && (
              <div
                className={classNames(
                  "w-1.5 h-1.5 rounded-full flex items-center justify-center",
                  "bg-(--bg-base) shadow-(--details-contrast-on-bg-interactive)",
                )}
              ></div>
            )}
          </div>
        )}
      </Radio>
      {(props.labelSlot ?? props.label) && (
        <label id={labelId} htmlFor={id}>
          {props.labelSlot ?? <SysLabel>{props.label}</SysLabel>}
        </label>
      )}
    </div>
  );
};
