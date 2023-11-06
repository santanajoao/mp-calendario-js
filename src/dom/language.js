import { languageSelect } from './elements';

const languages = [
  { language: 'English', locale: 'en-US' },
  { language: 'Русский', locale: 'ru-RU' },
  { language: 'Español', locale: 'es-ES' },
  { language: 'Türkçe', locale: 'tr-TR' },
  { language: 'فارسی', locale: 'fa-IR' },
  { language: 'Français', locale: 'fr-FR' },
  { language: 'Deutsch', locale: 'de-DE' },
  { language: '日本語', locale: 'ja-JP' },
  { language: 'Tiếng Việt', locale: 'vi-VN' },
  { language: '简体中文', locale: 'zh-CN' },
  { language: 'Italiano', locale: 'it-IT' },
  { language: 'Português', locale: 'pt-BR' },
  { language: 'Nederlands', locale: 'nl-NL' },
  { language: 'Polski', locale: 'pl-PL' },
  { language: 'العربية', locale: 'ar-SA' },
  { language: '한국어', locale: 'ko-KR' },
  { language: 'Bahasa Indonesia', locale: 'id-ID' },
  { language: 'Українська', locale: 'uk-UA' },
  { language: 'ไทย', locale: 'th-TH' },
  { language: 'Čeština', locale: 'cs-CZ' }
];

export function renderLanguageOptions() {
  languages.forEach((language) => {
    const option = document.createElement('option');
    option.value = language.locale;
    option.textContent = language.language;
    languageSelect.appendChild(option);
  });
}
