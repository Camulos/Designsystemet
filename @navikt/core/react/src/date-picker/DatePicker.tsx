import React, { useState } from "react";
import { addMonths } from "date-fns";
import { DateRange, DayPicker } from "react-day-picker";
import Footer from "./Footer";
import datePickerClassNames from "./datePickerClassNames";
import { addDays } from "date-fns/esm";

export const DatePicker = () => {
  // TODO: allow both Date and iso-string from user
  const april_3 = new Date("2022-04-03");
  const april_17 = new Date("2022-04-17");

  const disabledDays: DateRange = {
    from: april_3,
    to: addDays(april_3, 5),
  };
  const defaultSelected: DateRange = {
    from: april_17,
    to: addMonths(april_17, 1),
  };

  const [range, setRange] = useState<DateRange | undefined>(defaultSelected);

  return (
    <DayPicker
      showWeekNumber
      captionLayout="dropdown"
      mode="range"
      disabled={disabledDays}
      classNames={datePickerClassNames}
      defaultMonth={april_3}
      selected={range}
      footer={<Footer range={range} />}
      numberOfMonths={2}
      onSelect={setRange}
      showOutsideDays
    />
  );
};

export default DatePicker;
