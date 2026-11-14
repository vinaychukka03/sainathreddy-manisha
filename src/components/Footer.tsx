import { CalendarDays, Sparkles } from 'lucide-react';
import type { Language } from '../data/weddingData';
import { weddingData } from '../data/weddingData';
import { copy } from '../data/translations';

export function Footer({ language }: { language: Language }) {
  const te = language === 'te';
  const t = copy[language];
  return <footer className={`wedding-footer ${te ? 'footer-te' : 'footer-en'}`}>
    {!te && <>
      <img className="footer-side-floral footer-side-floral-left" src="/assets/footer-side-floral.png" alt="" aria-hidden="true" />
      <img className="footer-side-floral footer-side-floral-right" src="/assets/footer-side-floral.png" alt="" aria-hidden="true" />
    </>}
    <div className="footer-inner">
      <p className="footer-kicker">{te ? 'మీ ఆశీస్సులే మా ఆనందం' : 'Your Blessings Are Our Happiness'}</p>
      {te && <h2>{t.footerTitle}</h2>}
      <p className="footer-message">{t.footerMessage}</p>
      <div className="footer-couple">{te ? `${weddingData.groomTe}  &  ${weddingData.brideTe}` : <><span>{weddingData.groom}</span><span className="footer-couple-ampersand">&amp;</span><span>{weddingData.bride}</span></>}</div>
      <div className="footer-date"><CalendarDays size={16} /> {te ? weddingData.wedding.dateTe : 'November 20, 2026 · Friday'}</div>
      {te && <div className="footer-family">{t.familyLead}</div>}
      {te && <div className="footer-flourish footer-flourish-bottom"><span /><Sparkles size={15} /><span /></div>}
      <p className="footer-signoff">
        {t.footerSignoff}
      </p>
    </div>
    <div className="footer-credit">
      <img src="/assets/footer-mandala.png" alt="" aria-hidden="true" />
      <span>{t.footerCredit}</span>
      <img src="/assets/footer-mandala.png" alt="" aria-hidden="true" />
    </div>
  </footer>;
}
