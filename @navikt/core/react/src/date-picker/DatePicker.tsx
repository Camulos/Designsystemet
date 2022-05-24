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

  const [selectedDay, setSelectedDay] = useState<Date | undefined>(april_17);

  /* ranged config */
  const defaultSelected: DateRange = {
    from: april_17,
    to: addMonths(april_17, 1),
  };

  const [range, setRange] = useState<DateRange | undefined>(defaultSelected);

  return (
    <DayPicker
      mode="single"
      selected={selectedDay}
      onSelect={setSelectedDay}
      classNames={datePickerClassNames}
      numberOfMonths={1}
      defaultMonth={april_3}
      captionLayout="dropdown"
      disabled={disabledDays}
    />
  );
};

export default DatePicker;
