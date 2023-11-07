import { getMonthDays, getWeekDaysNames } from '../utils/calendar';
import {
  weekDayNamesContainer, calendarMonth, calendarYear, monthDaysContainer,
} from './elements';

function renderWeekDayNames(locale) {
  weekDayNamesContainer.textContent = '';

  const weekDaysNames = getWeekDaysNames(locale);
  weekDaysNames.forEach((weekDay) => {
    const span = document.createElement('span');
    span.textContent = weekDay;
    weekDayNamesContainer.appendChild(span);
  });
}

function renderMonthName(date, locale) {
  const formatter = new Intl.DateTimeFormat(locale, { month: 'long' });
  const month = formatter.format(date);
  calendarMonth.textContent = month;
}

function renderYear(date) {
  const year = date.getFullYear();
  calendarYear.textContent = year;
}

function renderDayNames(date, locale) {
  renderMonthName(date, locale);
  renderWeekDayNames(locale);
}

function renderMonthDays(date) {
  monthDaysContainer.textContent = '';

  const todaysDate = new Date();
  const monthDays = getMonthDays(date);

  const isSameMonth = date.getMonth() === todaysDate.getMonth();
  const isSameYear = date.getFullYear() === todaysDate.getFullYear();

  monthDays.forEach((day) => {
    const div = document.createElement('div');
    div.classList.add('calendar__day');

    if (isSameMonth && isSameYear && day === todaysDate.getDate()) {
      div.classList.add('calendar__day--today');
    }

    div.textContent = day;
    monthDaysContainer.appendChild(div);
  });
}

export function updateMonth(date, locale) {
  renderMonthName(date, locale);
  renderYear(date);
  renderMonthDays(date);
}

export function updateLocale(date, locale) {
  renderDayNames(date, locale);
}

export function renderCalendar(date, locale) {
  renderDayNames(date, locale);
  renderYear(date);
  renderMonthDays(date);
}
