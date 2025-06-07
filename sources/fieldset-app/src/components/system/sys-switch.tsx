import { useId } from "react";
import { Switch } from "react-aria-components";
import { classNames } from "../../helpers/clsx";
import { SysLabel } from "./sys-label";

// https://docs.medusajs.com/ui/components/switch
// https://github.com/medusajs/medusa/blob/v2.8.4/packages/design-system/ui/src/components/switch/switch.tsx
// https://react-spectrum.adobe.com/react-aria/Switch.html

export type SysSwitchProps = {
  children?: React.ReactNode;
  size?: "base" | "small";
  defaultSelected?: boolean;
  isSelected?: boolean;
  onChange?: (isSelected: boolean) => void;
  isDisabled?: boolean;
};

export const SysSwitch = ({ ...props }: SysSwitchProps) => {
  props.size = props.size ?? "base";
  const id = useId();
  const labelId = useId();

  return (
    <div className="flex items-center gap-3">
      <Switch
        className={classNames(
          "group relative shrink-0 inline-flex items-center",
          "rounded-full outline-none cursor-pointer",
          "bg-(--bg-switch-off)",
          "data-[hovered]:bg-(--bg-switch-off-hover)",
          "data-[focus-visible]:shadow-(--shadow-details-switch-background-focus)",
          "data-[selected]:bg-(--bg-interactive)",
          "data-[disabled]:opacity-50",
          "data-[disabled]:cursor-not-allowed",
          [
            props.size === "base" && "h-[18px] w-[32px]",
            props.size === "small" && "h-[16px] w-[28px]",
          ],
        )}
        id={id}
        defaultSelected={props.defaultSelected}
        isSelected={props.isSelected}
        onChange={props.onChange}
        isDisabled={props.isDisabled}
      >
        <div
          className={classNames(
            "bg-(--fg-on-color) shadow-(--details-switch-handle)",
            "pointer-events-none rounded-full transition-transform",
            [
              props.size === "base" && [
                "h-[14px] w-[14px]",
                "group-data-[selected]:translate-x-4",
                "group-not-data-[selected]:translate-x-0.5",
              ],
              props.size === "small" && [
                "h-[12px] w-[12px]",
                "group-data-[selected]:translate-x-3.5",
                "group-not-data-[selected]:translate-x-0.5",
              ],
            ],
          )}
        ></div>
      </Switch>
      <label id={labelId} htmlFor={id}>
        <SysLabel size={props.size}>{props.children}</SysLabel>
      </label>
    </div>
  );
};
