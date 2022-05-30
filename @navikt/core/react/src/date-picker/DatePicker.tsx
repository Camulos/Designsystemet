import React from "react";
import {
  DateRange,
  DayPicker,
  DayPickerRangeProps,
  DayPickerSingleProps,
} from "react-day-picker";
import datePickerClassNames from "./datePickerClassNames";
import addMonths from "date-fns/esm/addMonths";
import addDays from "date-fns/esm/addDays";

export type DatePickerModeType = "single" | "range";

type DatePickerProps = DayPickerSingleProps | DayPickerRangeProps;

/* TODO
- setSelected må "types" eksplisitt fra brukerens side (se story). Kan vi sette det opp så brukeren ikke trenger å gjøre det?
- eks: bruker må skrive 
  const [selected, setSelected] = useState<   >>>>>DateRange<<<<<   >();
*/

export const DatePicker = (props: DatePickerProps) => {
  if (props?.selected == null) {
  }
  return <DayPicker classNames={datePickerClassNames} {...props} />;
};

export { DateRange, addDays, addMonths };
export default DatePicker;
