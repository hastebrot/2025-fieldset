import {
  Button,
  DateInput,
  DatePicker,
  DateSegment,
  Dialog,
  Group,
  I18nProvider,
  Popover,
  type DateValue,
} from "react-aria-components";
import { SysCalendar } from "./sys-calendar";
import { SysTheme } from "./sys-theme";

// https://docs.medusajs.com/ui/components/date-picker
// https://github.com/medusajs/medusa/blob/v2.8.4/packages/design-system/ui/src/components/date-picker/date-picker.tsx
// https://react-spectrum.adobe.com/react-aria/DatePicker.html

export type SysDatePickerProps = {
  defaultValue?: DateValue;
  value?: DateValue;
  onChange?: (value: DateValue | null) => void;
  minValue?: DateValue;
  maxValue?: DateValue;
  locale?: string;
};

export const SysDatePicker = (props: SysDatePickerProps) => {
  return (
    <I18nProvider locale={props.locale ?? "en-US"}>
      <DatePicker
        defaultValue={props.defaultValue}
        value={props.value}
        onChange={props.onChange}
        minValue={props.minValue}
        maxValue={props.maxValue}
      >
        <SysDatePickerInput />
        <Popover>
          <Dialog className="z-10">
            <SysTheme>
              <SysCalendar />
            </SysTheme>
          </Dialog>
        </Popover>
      </DatePicker>
    </I18nProvider>
  );
};

export const SysDatePickerInput = () => {
  return (
    <Group>
      <Button>▼</Button>
      <DateInput>{(segment) => <DateSegment segment={segment} />}</DateInput>
    </Group>
  );
};
