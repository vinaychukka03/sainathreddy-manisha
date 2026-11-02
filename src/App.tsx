import { useEffect, useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Invitation } from './components/Invitation';
import { Events } from './components/Events';
import { Venue } from './components/Venue';
import { Gallery } from './components/Gallery';
import { Footer } from './components/Footer';
import type { Language } from './data/weddingData';
import './styles/global.css';

export default function App() {
  const [language, setLanguage] = useState<Language>(() => {
    try {
      const saved = window.localStorage.getItem('wedding-language-v2');
      return saved === 'en' || saved === 'te' ? saved : 'en';
    } catch { return 'en'; }
  });
  useEffect(() => {
    try { window.localStorage.setItem('wedding-language-v2', language); } catch { /* Storage may be unavailable in private contexts. */ }
    document.documentElement.lang = language;
    document.documentElement.dataset.language = language;
    document.title = language === 'te' ? 'సాయినాథ్ రెడ్డి & మనీషా — వివాహ ఆహ్వానం' : 'Sainath Reddy & Manisha — Wedding Invitation';
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', language === 'te' ? '#4b101b' : '#eee7f1');
  }, [language]);
  return <div className={`wedding-site theme-${language}`}>
    <a className="skip-link" href="#main-content">{language === 'te' ? 'ప్రధాన విషయానికి వెళ్లండి' : 'Skip to content'}</a>
    <Navbar language={language} onLanguageChange={setLanguage} />
    <main id="main-content">
      <Hero language={language} />
      <Invitation language={language} />
      <Events language={language} />
      <Venue language={language} />
      <Gallery language={language} />
    </main>
    <Footer language={language} />
  </div>;
}
