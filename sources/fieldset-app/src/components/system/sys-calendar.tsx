import { getLocalTimeZone, isToday, today, type DateValue } from "@internationalized/date";
import {
  Calendar,
  CalendarCell,
  CalendarGrid,
  CalendarGridBody,
  CalendarGridHeader,
  CalendarHeaderCell,
  Heading,
  I18nProvider,
} from "react-aria-components";
import { classNames } from "../../helpers/clsx";
import { SysIcon } from "./sys-icon";
import { SysIconButton } from "./sys-icon-button";
import { typography } from "./sys-tokens";

// https://docs.medusajs.com/ui/components/calendar
// https://github.com/medusajs/medusa/blob/v2.8.4/packages/design-system/ui/src/components/calendar/calendar.tsx
// https://react-spectrum.adobe.com/react-aria/Calendar.html

export type SysCalendarProps = {
  defaultValue?: DateValue;
  value?: DateValue;
  onChange?: (value: DateValue) => void;
  minValue?: DateValue;
  maxValue?: DateValue;
  locale?: string;
  firstDayOfWeek?: "sat" | "sun" | "mon" | "tue" | "wed" | "thu" | "fri";
  weekdayStyle?: "short" | "narrow" | "long";
  showOutsideMonth?: boolean;
};

export const SysCalendar = (props: SysCalendarProps) => {
  return (
    <I18nProvider locale={props.locale ?? "en-US"}>
      <Calendar
        className="w-fit flex flex-col gap-2"
        defaultValue={props.defaultValue ?? today(getLocalTimeZone())}
        value={props.value}
        onChange={props.onChange}
        minValue={props.minValue}
        maxValue={props.maxValue}
        firstDayOfWeek={props.firstDayOfWeek}
        visibleDuration={{ months: 1 }}
      >
        <SysCalendarHeader />
        <SysCalendarGrid
          weekdayStyle={props.weekdayStyle ?? "narrow"}
          showOutsideMonth={props.showOutsideMonth}
        />
      </Calendar>
    </I18nProvider>
  );
};

export const SysCalendarHeader = () => {
  return (
    <header
      className={classNames(
        "grid grid-cols-[auto_1fr_auto] items-center",
        "bg-(--bg-field) border-(--border-base) border gap-1 rounded-md p-0.5",
      )}
    >
      <SysIconButton slot="previous" size="small" variant="ghost" isCalendarButton>
        <SysIcon name="caret-left" variant="filled" width={15} />
      </SysIconButton>
      <Heading
        className="flex items-center justify-center"
        style={{ ...typography[".txt-compact-small-plus"] }}
      />
      <SysIconButton slot="next" size="small" variant="ghost" isCalendarButton>
        <SysIcon name="caret-right" variant="filled" width={15} />
      </SysIconButton>
    </header>
  );
};

export type SysCalendarGridProps = {
  weekdayStyle?: "short" | "narrow" | "long";
  showOutsideMonth?: boolean;
};

export const SysCalendarGrid = (props: SysCalendarGridProps) => {
  const isDateToday = (date: DateValue) => isToday(date, getLocalTimeZone());

  return (
    <CalendarGrid weekdayStyle={props.weekdayStyle}>
      <CalendarGridHeader>
        {(weekday) => (
          <CalendarHeaderCell
            className="text-(--fg-muted) p-0.5 rounded-md size-7"
            style={{ ...typography[".txt-compact-small-plus"] }}
          >
            {weekday}
          </CalendarHeaderCell>
        )}
      </CalendarGridHeader>
      <CalendarGridBody>
        {(date) => (
          <CalendarCell className="group p-1 outline-none" date={date}>
            {(renderProps) => (
              <div
                className={classNames(
                  "relative flex items-center justify-center",
                  "bg-(--bg-base) border border-transparent",
                  "rounded-md outline-none cursor-pointer size-7",
                  [
                    "group-data-[focus-visible]:shadow-(--borders-focus)",
                    "group-data-[focus-visible]:border-(--border-interactive)",
                    "group-data-[hovered]:bg-(--bg-base-hover)",
                    "group-data-[selected]:!text-(--fg-on-color)",
                    "group-data-[selected]:!bg-(--bg-interactive)",
                    "group-data-[disabled]:!text-(--fg-muted)",
                    "group-data-[disabled]:!bg-(--bg-base)",
                    "group-data-[disabled]:!cursor-default",
                  ],
                  !props.showOutsideMonth && "group-data-[outside-month]:hidden",
                  isDateToday(renderProps.date) &&
                    "!bg-(--bg-highlight-hover) !text-(--fg-interactive)",
                )}
                style={{ ...typography[".txt-compact-small"] }}
              >
                {renderProps.formattedDate}
              </div>
            )}
          </CalendarCell>
        )}
      </CalendarGridBody>
    </CalendarGrid>
  );
};
