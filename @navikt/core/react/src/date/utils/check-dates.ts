import setYear from "date-fns/setYear";
import isThisMonth from "date-fns/isThisMonth";

export const dateIsInCurrentMonth = (
  date: Date,
  dateToCompare: Date
): boolean => {
  return isThisMonth(setYear(date, Number(dateToCompare.getFullYear())));
};

/** @private */
export function isValidDate(day: Date): boolean {
  return !isNaN(day.getTime());
}

export const hasNextYear = (year: Date, years: Date[], val: any): boolean => {
  return years.some((x) => year.getFullYear() + val === x.getFullYear());
};
