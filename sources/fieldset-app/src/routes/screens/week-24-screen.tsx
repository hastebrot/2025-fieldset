import { getLocalTimeZone, parseDate, startOfMonth, today } from "@internationalized/date";
import { useState } from "react";
import { SysCalendar } from "../../components/system/sys-calendar";
import { SysCurrencyInput } from "../../components/system/sys-currency-field";
import { SysDatePicker, SysDatePickerPopover } from "../../components/system/sys-date-field";
import { SysIcon } from "../../components/system/sys-icon";
import { SysIconButton } from "../../components/system/sys-icon-button";
import { SysTextInput } from "../../components/system/sys-text-field";
import { SysTheme } from "../../components/system/sys-theme";
import { SysViewport } from "../../components/system/sys-viewport";
import { useDocumentTitle, usePrefersColorScheme } from "../../helpers/react";

export const Week24Screen = () => {
  useDocumentTitle("fieldset-app");
  const prefersColorScheme = usePrefersColorScheme();
  const [colorScheme, setColorScheme] = useState<"dark" | "light">(
    prefersColorScheme === "light" ? "light" : "dark",
  );
  const onColorSchemeButtonPress = () => {
    setColorScheme(colorScheme === "dark" ? "light" : "dark");
  };

  return (
    <SysTheme variant={colorScheme}>
      <SysViewport className="min-h-dvh" overflowX overflowY>
        <div>
          <div className="p-[16px] flex gap-2">
            <SysIconButton variant="outlined" onPress={onColorSchemeButtonPress}>
              <SysIcon
                name={colorScheme === "dark" ? "moon" : "sun"}
                variant="outlined"
                width={18}
                strokeWidth={2}
              />
            </SysIconButton>
          </div>
          <div className="p-[16px] flex flex-row gap-2">
            <div className="flex flex-col gap-2 w-[250px]">
              <SysTextInput placeholder="Placeholder" />
              <SysTextInput defaultValue="Text" />
              <SysTextInput defaultValue="Text" isDisabled />
            </div>
            <div className="flex flex-col gap-2 w-[250px]">
              <SysTextInput type="password" placeholder="Placeholder" />
              <SysTextInput type="password" defaultValue="supersecret" />
              <SysTextInput type="password" defaultValue="supersecret" isDisabled />
            </div>
          </div>
          <div className="p-[16px] flex flex-row gap-2">
            <div className="flex flex-col gap-2 w-[250px]">
              <SysCurrencyInput code="USD" symbol="$" placeholder="Placeholder" />
              <SysCurrencyInput code="USD" symbol="$" defaultValue={12345} />
              <SysCurrencyInput code="USD" symbol="$" defaultValue={12345} isDisabled />
            </div>
            <div className="flex flex-col gap-2 w-[250px]">
              <SysCurrencyInput locale="de-DE" code="EUR" symbol="€" placeholder="Placeholder" />
              <SysCurrencyInput locale="de-DE" code="EUR" symbol="€" defaultValue={12345} />
              <SysCurrencyInput
                locale="de-DE"
                code="EUR"
                symbol="€"
                defaultValue={12345}
                isDisabled
              />
            </div>
          </div>
          <div className="p-[16px] flex flex-row gap-2">
            <SysCalendar
              locale="en-US"
              defaultValue={parseDate("2000-02-01")}
              firstDayOfWeek="sun"
            />
            <SysCalendar
              locale="de-DE"
              defaultValue={startOfMonth(today(getLocalTimeZone()))}
              firstDayOfWeek="mon"
              showOutsideMonth
            />
          </div>
          <div className="p-[16px] flex flex-row gap-2">
            <div className="flex flex-col gap-2 w-[250px]">
              <SysDatePicker locale="en-US">
                <SysDatePickerPopover>
                  <SysCalendar />
                </SysDatePickerPopover>
              </SysDatePicker>
              <SysDatePicker locale="en-US" defaultValue={parseDate("2000-02-20")}>
                <SysDatePickerPopover>
                  <SysCalendar />
                </SysDatePickerPopover>
              </SysDatePicker>
              <SysDatePicker isDisabled locale="en-US" defaultValue={parseDate("2000-02-20")} />
            </div>
            <div className="flex flex-col gap-2 w-[250px]">
              <SysDatePicker locale="de-DE">
                <SysDatePickerPopover>
                  <SysCalendar />
                </SysDatePickerPopover>
              </SysDatePicker>
              <SysDatePicker locale="de-DE" defaultValue={parseDate("2000-02-20")}>
                <SysDatePickerPopover>
                  <SysCalendar />
                </SysDatePickerPopover>
              </SysDatePicker>
              <SysDatePicker isDisabled locale="de-DE" defaultValue={parseDate("2000-02-20")} />
            </div>
          </div>
        </div>
      </SysViewport>
    </SysTheme>
  );
};
