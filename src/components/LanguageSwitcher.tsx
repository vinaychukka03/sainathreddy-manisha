import type { Language } from '../data/weddingData';
import { copy } from '../data/translations';

export function LanguageSwitcher({ language, onChange }: { language: Language; onChange: (language: Language) => void }) {
  const nextLanguage = language === 'en' ? 'te' : 'en';
  return (
    <button
      type="button"
      className="language-switch"
      aria-label={`Switch language to ${nextLanguage === 'en' ? 'English' : 'Telugu'}`}
      onClick={() => onChange(nextLanguage)}
    >
      {copy[language].nav.switch}
    </button>
  );
}
