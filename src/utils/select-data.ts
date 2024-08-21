export const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const HOURS = Array.from({ length: 12 }, (_, i) => i + 1);
export const MINUTES = ["00", "15", "30", "45"];
export const TIME_PERIOD = ["AM", "PM"];
export const DAYS = Array.from({ length: 31 }, (_, i) => i + 1);
export const YEARS = Array.from(
  { length: 2 },
  (_, i) => new Date().getFullYear() + i
);
