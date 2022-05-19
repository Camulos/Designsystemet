import { format } from "date-fns";
import React from "react";

const Footer = ({ range }): JSX.Element => {
  const iso = (date: Date) => format(date, "yyyy-MM-dd");

  let footer = <p>Please pick the first day.</p>;
  if (range?.from) {
    if (!range.to) footer = <p>{iso(range.from)}</p>;
    if (range.to) footer = <p>{`${iso(range.from)} - ${iso(range.to)}`}</p>;
  }
  return footer;
};

export default Footer;
