import { getLocalTimeZone, today, type DateValue } from "@internationalized/date";
import {
  Button,
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

// https://docs.medusajs.com/ui/components/calendar
// https://github.com/medusajs/medusa/blob/v2.8.4/packages/design-system/ui/src/components/calendar/calendar.tsx
// https://react-spectrum.adobe.com/react-aria/Calendar.html

export type SysCalendarProps = {
  defaultValue?: DateValue;
  locale?: string;
  firstDayOfWeek?: "sat" | "sun" | "mon" | "tue" | "wed" | "thu" | "fri";
  weekdayStyle?: "short" | "narrow" | "long";
};

export const SysCalendar = (props: SysCalendarProps) => {
  return (
    <I18nProvider locale={props.locale ?? "en-US"}>
      <Calendar
        defaultValue={props.defaultValue ?? today(getLocalTimeZone())}
        firstDayOfWeek={props.firstDayOfWeek}
        visibleDuration={{ months: 1 }}
      >
        <SysCalendarHeader />
        <SysCalendarGrid weekdayStyle={props.weekdayStyle ?? "narrow"} />
      </Calendar>
    </I18nProvider>
  );
};

export const SysCalendarHeader = () => {
  return (
    <header className="flex flex-row gap-1">
      <Button slot="previous">Prev</Button>
      <Heading />
      <Button slot="next">Next</Button>
    </header>
  );
};

export type SysCalendarGridProps = {
  weekdayStyle?: "short" | "narrow" | "long";
};

export const SysCalendarGrid = (props: SysCalendarGridProps) => {
  return (
    <CalendarGrid weekdayStyle={props.weekdayStyle}>
      <CalendarGridHeader>
        {(weekday) => {
          return (
            <CalendarHeaderCell className="text-center px-1 font-normal">
              {weekday}
            </CalendarHeaderCell>
          );
        }}
      </CalendarGridHeader>
      <CalendarGridBody>
        {(date) => {
          return (
            <CalendarCell
              className={classNames("text-center px-1 data-[outside-month]:invisible")}
              date={date}
            />
          );
        }}
      </CalendarGridBody>
    </CalendarGrid>
  );
};
