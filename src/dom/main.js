import '../style.css';
import '../styles/calendar.css';
import { renderLanguageOptions } from './language';
import { renderCalendar, updateLocale, updateMonth } from './calendar';
import { languageSelect, prevMonthButton, nextMonthButton } from './elements';

const currentDate = new Date();
let selectedLocale = new Intl.DateTimeFormat().resolvedOptions().locale;

languageSelect.addEventListener('change', () => {
  selectedLocale = languageSelect.value;
  updateLocale(currentDate, selectedLocale);
});

prevMonthButton.addEventListener('click', () => {
  currentDate.setMonth(currentDate.getMonth() - 1);
  updateMonth(currentDate, selectedLocale);
});

nextMonthButton.addEventListener('click', () => {
  currentDate.setMonth(currentDate.getMonth() + 1);
  updateMonth(currentDate, selectedLocale);
});

renderLanguageOptions();
languageSelect.value = selectedLocale;

renderCalendar(currentDate, selectedLocale);
