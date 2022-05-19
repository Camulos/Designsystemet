import React, { useState } from "react";
import { addMonths } from "date-fns";
import { DateRange, DayPicker } from "react-day-picker";
import Footer from "./Footer";
import datePickerClassNames from "./datePickerClassNames";

export const DatePicker = () => {
  // TODO: allow both Date and iso-string from user
  const pastMonth = new Date("2022-04-17");

  const defaultSelected: DateRange = {
    from: pastMonth,
    to: addMonths(pastMonth, 1),
  };

  const [range, setRange] = useState<DateRange | undefined>(defaultSelected);

  return (
    <DayPicker
      captionLayout="dropdown"
      mode="range"
      classNames={datePickerClassNames}
      defaultMonth={pastMonth}
      selected={range}
      footer={<Footer range={range} />}
      numberOfMonths={2}
      onSelect={setRange}
    />
  );
};

export default DatePicker;
