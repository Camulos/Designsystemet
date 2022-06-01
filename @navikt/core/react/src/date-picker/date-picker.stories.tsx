import React, { useState } from "react";
import { DatePicker, DateRange, addDays } from "./index";

export default {
  title: "ds-react/date-picker",
  component: DatePicker,
};

export const All = () => {
  const april_3 = new Date("2022-04-03");

  const disabledDays = {
    from: april_3,
    to: addDays(april_3, 5),
  };

  // Can we avoid that the user has to add type (DateRange)?
  const [selected, setSelected] = useState<DateRange>();

  return (
    <>
      <h1>DatePicker</h1>
      <DatePicker
        mode="range"
        selected={selected}
        onSelect={setSelected}
        numberOfMonths={1}
        defaultMonth={april_3}
        captionLayout="dropdown"
        disabled={disabledDays}
      />
    </>
  );
};
