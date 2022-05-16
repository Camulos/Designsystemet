import React, { useState } from "react";
import { addMonths } from "date-fns";
import { DateRange, DayPicker, ClassNames } from "react-day-picker";
import { NAVDSFooter } from "./components";

import styles from "react-day-picker/dist/style.module.css";
import "../../../../core/css/date-picker.css";

export const DatePicker = () => {
  const classNames: ClassNames = {
    ...styles,
    day: "navds-date-picker__day",
    // cell: "navds-date-picker__day-cell",
    // row: "navds-date-picker__row",
    // tbody: "navds-date-picker__tbody",
  };

  const pastMonth = new Date(2022, 4, 17);
  const defaultSelected: DateRange = {
    from: pastMonth,
    to: addMonths(pastMonth, 1),
  };

  const [range, setRange] = useState<DateRange | undefined>(defaultSelected);

  return (
    <DayPicker
      captionLayout="dropdown"
      mode="range"
      classNames={classNames}
      defaultMonth={pastMonth}
      selected={range}
      footer={<NAVDSFooter range />}
      numberOfMonths={2}
      onSelect={setRange}
    />
  );
};

export default DatePicker;
