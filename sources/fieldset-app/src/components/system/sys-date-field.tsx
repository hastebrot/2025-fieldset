import { Fragment, useContext } from "react";
import {
  Button,
  DateInput,
  DatePicker,
  DatePickerStateContext,
  DateSegment,
  Dialog,
  Group,
  I18nProvider,
  type DateValue,
} from "react-aria-components";
import { classNames } from "../../helpers/clsx";
import { SysIcon } from "./sys-icon";
import { SysPopover } from "./sys-popover";
import { SysTheme } from "./sys-theme";
import { typography } from "./sys-tokens";

// https://docs.medusajs.com/ui/components/date-picker
// https://github.com/medusajs/medusa/blob/v2.8.4/packages/design-system/ui/src/components/date-picker/date-picker.tsx
// https://react-spectrum.adobe.com/react-aria/DatePicker.html

export type SysDatePickerProps = {
  children?: React.ReactNode;
  defaultValue?: DateValue;
  value?: DateValue;
  onChange?: (value: DateValue | null) => void;
  minValue?: DateValue;
  maxValue?: DateValue;
  granularity?: "day" | "hour" | "minute" | "second";
  locale?: string;
  isDisabled?: boolean;
};

export const SysDatePicker = (props: SysDatePickerProps) => {
  return (
    <I18nProvider locale={props.locale ?? "en-US"}>
      <DatePicker
        className={classNames(
          "w-full h-fit rounded-md overflow-hidden",
          "bg-(--bg-field) shadow-(--borders-base) text-(--fg-base)",
          "data-[focus-within]:shadow-(--borders-interactive-with-active)",
          "data-[focus-visible]:shadow-(--borders-interactive-with-active)",
          "data-[open]:shadow-(--borders-interactive-with-active)",
          "aria-[invalid=true]:!shadow-(--borders-error) invalid:!shadow-(--borders-error)",
          "data-[disabled]:text-(--fg-disabled) data-[disabled]:!bg-(--bg-disabled)",
          "data-[disabled]:cursor-not-allowed",
        )}
        style={{
          ...typography[".txt-compact-small"],
        }}
        defaultValue={props.defaultValue}
        value={props.value}
        onChange={props.onChange}
        minValue={props.minValue}
        maxValue={props.maxValue}
        granularity={props.granularity}
        isDisabled={props.isDisabled}
      >
        {(renderProps) => (
          <Fragment>
            <SysDatePickerInput
              showClearButton={renderProps.state.value !== null}
              isDisabled={props.isDisabled}
            />
            {props.children}
          </Fragment>
        )}
      </DatePicker>
    </I18nProvider>
  );
};

export type SysDatePickerInputProps = {
  showClearButton?: boolean;
  isDisabled?: boolean;
};

export const SysDatePickerInput = (props: SysDatePickerInputProps) => {
  return (
    <Group className="flex items-center gap-2" isDisabled={props.isDisabled}>
      <SysDatePickerButton>
        <SysIcon name="calendar-week" variant="outlined" width={18} strokeWidth={2} />
      </SysDatePickerButton>
      <DateInput className="flex-1 flex items-center py-1.5">
        {/* FIXME(hastebrot): segments are focused when user clicks twice outside. */}
        {(segment) => (
          <DateSegment
            className={classNames(
              "outline-none",
              "not-data-[placeholder]:tabular-nums",
              "not-data-[placeholder]:tracking-tight",
              "data-[focused]:!bg-(--bg-interactive)",
              "data-[focused]:!text-(--fg-on-color)",
              "data-[placeholder]:uppercase",
              "data-[placeholder]:text-(--fg-muted)",
              "data-[readonly]:text-(--fg-muted)",
              "data-[disabled]:!bg-(--bg-disabled)",
              "data-[disabled]:!text-(--fg-disabled)",
              // prevent the segment being focused when the user clicks outside of
              // the component, https://github.com/adobe/react-spectrum/issues/3164
              "select-none",
            )}
            segment={segment}
          >
            <span className={classNames(segment.type === "literal" && "whitespace-pre")}>
              {segment.text}
            </span>
          </DateSegment>
        )}
      </DateInput>
      {props.showClearButton && (
        <SysDatePickerClearButton isDisabled={props.isDisabled}>
          <SysIcon name="x" variant="outlined" width={18} strokeWidth={2} />
        </SysDatePickerClearButton>
      )}
    </Group>
  );
};

export type SysDatePickerButtonProps = {
  children?: React.ReactNode;
  isDisabled?: boolean;
};

export const SysDatePickerButton = (props: SysDatePickerButtonProps) => {
  return (
    <Button
      className={classNames(
        "flex items-center justify-center size-8",
        "text-(--fg-muted) border-r border-(--border-base)",
        "outline-none cursor-pointer",
        [
          "data-[disabled]:text-(--fg-disabled)",
          "data-[hovered]:bg-(--button-transparent-hover)",
          "data-[focus-visible]:bg-(--bg-interactive)",
          "data-[focus-visible]:text-(--fg-on-color)",
          "data-[disabled]:bg-(--bg-disabled)",
          "data-[disabled]:text-(--fg-disabled)",
          "data-[disabled]:cursor-not-allowed",
        ],
      )}
      type="button"
      aria-label="Open calendar"
      isDisabled={props.isDisabled}
    >
      {props.children}
    </Button>
  );
};

export type SysDatePickerClearButtonProps = {
  children?: React.ReactNode;
  isDisabled?: boolean;
};

export const SysDatePickerClearButton = (props: SysDatePickerClearButtonProps) => {
  const state = useContext(DatePickerStateContext);

  return (
    <Button
      // use slot=null to prevent button being used to trigger calendar popover.
      slot={null}
      className={classNames(
        "flex items-center justify-center size-8",
        "outline-none cursor-pointer",
        "text-(--fg-muted)",
        "data-[hovered]:bg-(--button-transparent-hover)",
        "data-[focus-visible]:bg-(--bg-interactive)",
        "data-[focus-visible]:text-(--fg-on-color)",
        "data-[disabled]:bg-(--bg-disabled)",
        "data-[disabled]:text-(--fg-disabled)",
        "data-[disabled]:cursor-not-allowed",
      )}
      type="button"
      aria-label="Clear"
      onPress={() => state?.setValue(null)}
      isDisabled={props.isDisabled}
    >
      {props.children}
    </Button>
  );
};

export type SysDatePickerPopoverProps = {
  children?: React.ReactNode;
};

export const SysDatePickerPopover = (props: SysDatePickerPopoverProps) => {
  return (
    <SysPopover isNonModal shouldCloseOnBlur>
      <SysTheme>
        <Dialog
          className={classNames(
            "z-50 p-3 rounded-lg overflow-hidden",
            "bg-(--bg-base) text-(--fg-base) shadow-(--elevation-flyout)",
          )}
        >
          {props.children}
        </Dialog>
      </SysTheme>
    </SysPopover>
  );
};
