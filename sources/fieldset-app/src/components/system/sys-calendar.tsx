// https://docs.medusajs.com/ui/components/calendar
// https://github.com/medusajs/medusa/blob/v2.8.4/packages/design-system/ui/src/components/calendar/calendar.tsx
// https://react-spectrum.adobe.com/react-aria/Calendar.html

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

export type SysCalendarProps = {
  defaultValue?: DateValue;
  locale?: string;
  firstDayOfWeek?: "sat" | "sun" | "mon" | "tue" | "wed" | "thu" | "fri";
};

export const SysCalendar = (props: SysCalendarProps) => {
  return (
    <I18nProvider locale={props.locale ?? "en-US"}>
      <Calendar
        defaultValue={props.defaultValue ?? today(getLocalTimeZone())}
        firstDayOfWeek={props.firstDayOfWeek}
        visibleDuration={{ months: 1 }}
      >
        <header className="flex flex-row gap-1">
          <Button slot="previous">Prev</Button>
          <Heading />
          <Button slot="next">Next</Button>
        </header>
        <CalendarGrid weekdayStyle="narrow">
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
                  className="text-center px-1 data-[outside-month]:invisible"
                  date={date}
                />
              );
            }}
          </CalendarGridBody>
        </CalendarGrid>
      </Calendar>
    </I18nProvider>
  );
};
