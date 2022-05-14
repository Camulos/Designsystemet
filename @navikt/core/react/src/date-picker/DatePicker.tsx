import React from "react";

const DatePicker = () => {
  return <div>hello world, lets date pick</div>;
};

export default DatePicker;

/*
import { useState } from "react";

import { addDays, format } from "date-fns";
import { DateRange, DayPicker } from "react-day-picker";

const pastMonth = new Date(2020, 10, 15);

export default function App() {
  const defaultSelected: DateRange = {
    from: pastMonth,
    to: addDays(pastMonth, 4)
  };

  const [range, setRange] = useState<DateRange | undefined>(defaultSelected);
  const isoDate = (date: Date) => format(date, "yyyy-MM-dd");

  let footer = <p>Please pick the first day.</p>;
  if (range?.from) {
    console.log(range.from);
    if (!range.to) footer = <p>{isoDate(range.from)}</p>;
    else if (range.to)
      footer = (
        <p>
          {isoDate(range.from)} – {isoDate(range.to)}
        </p>
      );
  }

  return (
    <DayPicker
      captionLayout="dropdown"
      mode="range"
      defaultMonth={pastMonth}
      selected={range}
      footer={footer}
      numberOfMonths={2}
      onSelect={setRange}
    />
  );
}
 */
