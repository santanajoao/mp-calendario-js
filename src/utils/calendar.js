export function getWeekDaysNames(locale) {
  const mondayDate = new Date();
  mondayDate.setDate(mondayDate.getDate() - mondayDate.getDay());
  const formatter = new Intl.DateTimeFormat(locale, { weekday: 'short' });

  const weekDaysNames = [];
  const weekDate = mondayDate;

  for (let index = 0; index < 7; index++) {
    const weekDay = formatter.format(weekDate);
    weekDaysNames.push(weekDay);

    weekDate.setDate(weekDate.getDate() + 1);
  }

  return weekDaysNames;
}

export function getMonthDays(date) {
  const monthDay = new Date(date);
  monthDay.setDate(1);

  const month = monthDay.getMonth();
  const monthDays = [];

  for (let index = 0; index < 35; index++) {
    const isSameWeekDay = (index % 7) === monthDay.getDay();
    const isSameMonth = monthDay.getMonth() === month;

    if (isSameWeekDay && isSameMonth) {
      monthDays.push(monthDay.getDate());
      monthDay.setDate(monthDay.getDate() + 1);
    } else {
      monthDays.push(null);
    }
  }

  return monthDays;
}
