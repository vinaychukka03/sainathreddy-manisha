import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import type { Language } from '../data/weddingData';
import { copy } from '../data/translations';
import { LanguageSwitcher } from './LanguageSwitcher';

export function Navbar({ language, onLanguageChange }: { language: Language; onLanguageChange: (language: Language) => void }) {
  const [open, setOpen] = useState(false);
  const labels = copy[language].nav;
  useEffect(() => {
    if (!open) return;
    const closeOnEscape = (event: KeyboardEvent) => { if (event.key === 'Escape') setOpen(false); };
    document.addEventListener('keydown', closeOnEscape);
    return () => document.removeEventListener('keydown', closeOnEscape);
  }, [open]);
  const links = [
    { label: labels.home, href: '#home' }, { label: labels.events, href: '#events' },
    { label: labels.venue, href: '#venue' }, { label: labels.gallery, href: '#gallery' },
  ];
  return <header className={`site-header ${open ? 'menu-open' : ''}`}>
    <a className="brand-mark" href="#home" aria-label="Sainath and Manisha home">
      {language === 'te' ? <span className="brand-mark-symbol" aria-hidden="true">❧</span> : <img src="/assets/navbar-floral-reference.jpe" alt="" />}
    </a>
    <nav className="desktop-nav" aria-label="Main navigation">
      {links.map(link => <a key={link.href} href={link.href}>{link.label}</a>)}
    </nav>
    <div className="header-actions"><LanguageSwitcher language={language} onChange={(next) => { onLanguageChange(next); setOpen(false); }} />
      <button className="menu-toggle" type="button" onClick={() => setOpen(!open)} aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="mobile-navigation">{open ? <X /> : <Menu />}</button>
    </div>
    <nav className="mobile-nav" id="mobile-navigation" aria-label="Mobile navigation" aria-hidden={!open}>
      {links.map(link => <a key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}</a>)}
    </nav>
  </header>;
}
