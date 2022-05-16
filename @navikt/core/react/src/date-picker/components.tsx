import cl, { Argument } from "classnames";
import { format } from "date-fns";
import React from "react";

import {
  DayPicker,
  Caption,
  CaptionLabel,
  Day,
  DayContent,
  Dropdown,
  Head,
  Footer,
  IconDropdown,
  IconRight,
  IconLeft,
  Row,
  WeekNumber,
  DayProps,
} from "react-day-picker";

interface NAVDSDayProps extends DayProps {
  classNames?: Argument;
}

export const NAVDSFooter = (range): JSX.Element => {
  const iso = (date: Date) => format(date, "yyyy-MM-dd");

  let footer = <p>Please pick the first day.</p>;
  if (range?.from) {
    if (!range.to) footer = <p>{iso(range.from)}</p>;
    if (range.to) footer = <p>{`${iso(range.from)} - ${iso(range.to)}`}</p>;
  }
  return footer;
};

// export const NAVDSDay = (props: NAVDSDayProps): JSX.Element => (
//   <Day className="" />
// );

// export interface CustomComponents {
//   /** The component for the caption element. */
//   Caption?: (props: CaptionProps) => JSX.Element | null;
//   /** The component for the caption element. */
//   CaptionLabel?: (props: CaptionLabelProps) => JSX.Element | null;
//   /** The component for the day element. This is a button or a span. */
//   Day?: (props: DayProps) => JSX.Element | null;
//   /** The component for the content of the day element. */
//   DayContent?: (props: DayContentProps) => JSX.Element | null;
//   /** The component for the drop-down elements. */
//   Dropdown?: (props: DropdownProps) => JSX.Element | null;
//   /** The component for the table footer. */
//   Footer?: () => JSX.Element | null;
//   /** The component for the table’s head. */
//   Head?: () => JSX.Element | null;
//   /** The component for the small icon in the drop-downs. */
//   IconDropdown?: (props: StyledComponent) => JSX.Element | null;
//   /** The arrow right icon (used for the Navigation buttons). */
//   IconRight?: (props: StyledComponent) => JSX.Element | null;
//   /** The arrow left icon (used for the Navigation buttons). */
//   IconLeft?: (props: StyledComponent) => JSX.Element | null;
//   /** The component for the table rows. */
//   Row?: (props: RowProps) => JSX.Element | null;
//   /** The component for the week number in the table rows. */
//   WeekNumber?: (props: WeekNumberProps) => JSX.Element | null;
// }

export {};
