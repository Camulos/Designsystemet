import { ClassNames } from "react-day-picker";

/* all class/style names: https://github.com/gpbl/react-day-picker/blob/77bbb66c/packages/react-day-picker/src/types/Styles.ts#L104 */
/*  https://cdn.jsdelivr.net/npm/react-day-picker@8.0.5/dist/style.css  */
/* 

  Use the values here to style the date-picker and its child-elements. 
  For a full reference, see the react-day-picker repo:
    https://github.com/gpbl/react-day-picker/blob/77bbb66c/packages/react-day-picker/src/types/Styles.ts#L104
*/
const datePickerClassNames: ClassNames = {
  button: "navds-date-picker__button",
  button_reset: "navds-date-picker__button_reset",
  caption: "navds-date-picker__caption",
  caption_between: "navds-date-picker__caption_between",
  caption_dropdowns: "navds-date-picker__caption_dropdowns",
  caption_end: "navds-date-picker__caption_end",
  caption_label: "navds-date-picker__caption_label",
  caption_start: "navds-date-picker__caption_start",
  cell: "navds-date-picker__cell",
  day: "navds-date-picker__day",
  day_disabled: "navds-date-picker__day_disabled",
  day_hidden: "navds-date-picker__day_hidden",
  day_outside: "navds-date-picker__day_outside",
  day_range_end: "navds-date-picker__day_range_end",
  day_range_middle: "navds-date-picker__day_range_middle",
  day_range_start: "navds-date-picker__day_range_start",
  day_selected: "navds-date-picker__day_selected",
  day_today: "navds-date-picker__day_today",
  dropdown: "navds-date-picker__dropdown",
  dropdown_icon: "navds-date-picker__dropdown_icon",
  dropdown_month: "navds-date-picker__dropdown_month",
  dropdown_year: "navds-date-picker__dropdown_year",
  head: "navds-date-picker__head",
  head_cell: "navds-date-picker__head_cell",
  head_row: "navds-date-picker__head_row",
  month: "navds-date-picker__month",
  months: "navds-date-picker__months",
  multiple_months: "navds-date-picker__multiple_months",
  nav: "navds-date-picker__nav",
  nav_button: "navds-date-picker__nav_button",
  nav_button_next: "navds-date-picker__nav_button_next",
  nav_button_previous: "navds-date-picker__nav_button_previous",
  nav_icon: "navds-date-picker__nav_icon",
  root: "navds-date-picker",
  row: "navds-date-picker__row",
  table: "navds-date-picker__table",
  tbody: "navds-date-picker__tbody",
  tfoot: "navds-date-picker__tfoot",
  vhidden: "navds-date-picker__vhidden",
  weeknumber: "navds-date-picker__weeknumber",
  with_weeknumber: "navds-date-picker__with_weeknumber",
};

export default datePickerClassNames;
