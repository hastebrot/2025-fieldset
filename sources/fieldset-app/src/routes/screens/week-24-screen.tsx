import { getLocalTimeZone, parseDate, startOfMonth, today } from "@internationalized/date";
import { useState } from "react";
import { SysCalendar } from "../../components/system/sys-calendar";
import { SysDatePicker } from "../../components/system/sys-date-field";
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
          <div className="p-[16px] grid grid-cols-2 items-start gap-2">
            <div className="flex flex-col gap-2">
              <SysTextInput defaultValue="Text" />
              <SysTextInput defaultValue="Text" isDisabled />
              <SysTextInput defaultValue="Text" isInvalid />
            </div>
            <div className="flex flex-col gap-2">
              <SysTextInput type="password" defaultValue="supersecret" />
              <SysTextInput type="password" defaultValue="supersecret" isDisabled />
              <SysTextInput type="password" defaultValue="supersecret" isInvalid />
            </div>
          </div>
          <div className="p-[16px] flex flex-row gap-2">
            <SysCalendar
              locale="en-CH"
              defaultValue={parseDate("2000-02-01")}
              firstDayOfWeek="sun"
              hideOutsideMonth
            />
            <SysCalendar
              locale="en-CH"
              defaultValue={startOfMonth(today(getLocalTimeZone()))}
              firstDayOfWeek="mon"
            />
          </div>
          <div className="p-[16px] flex flex-row gap-2">
            <div className="flex flex-col gap-2">
              <SysDatePicker locale="en-CH" />
            </div>
          </div>
        </div>
      </SysViewport>
    </SysTheme>
  );
};
