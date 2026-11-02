import { CalendarDays, Clock3, Flower2 } from 'lucide-react';
import type { Language } from '../data/weddingData';
import { weddingData } from '../data/weddingData';
import { copy } from '../data/translations';

export function Invitation({ language }: { language: Language }) {
  const t = copy[language];
  const telugu = language === 'te';
  return <section className={`invitation-section section-paper ${telugu ? 'paper-te' : 'paper-en'}`} id="invitation">
    {!telugu && <>
      <div className="invitation-frame" aria-hidden="true">
        <span className="invitation-frame-line invitation-frame-top" />
        <span className="invitation-frame-line invitation-frame-right" />
        <span className="invitation-frame-line invitation-frame-bottom" />
        <span className="invitation-frame-line invitation-frame-left" />
      </div>
      <img className="invitation-corner invitation-corner-top-left" src="/assets/invitation-corner-floral.png" alt="" aria-hidden="true" />
      <img className="invitation-corner invitation-corner-top-right" src="/assets/invitation-corner-floral.png" alt="" aria-hidden="true" />
      <img className="invitation-corner invitation-corner-bottom-right" src="/assets/invitation-corner-floral.png" alt="" aria-hidden="true" />
      <img className="invitation-corner invitation-corner-bottom-left" src="/assets/invitation-corner-floral.png" alt="" aria-hidden="true" />
    </>}
    <div className="invitation-art-wrap">
      <img src={telugu ? "/images/couple-portrait.jpg" : "/assets/blessings_english_references.png"} alt={telugu ? 'వధూవరుల సంప్రదాయ వివాహ చిత్రం' : 'Traditional illustration of a bride and groom'} className="invitation-art" loading="lazy" />
    </div>
    <div className="invitation-copy">
      <div className="section-kicker"><Flower2 size={16} /> {telugu ? 'శుభలేఖ' : 'A joyful beginning'} <Flower2 size={16} /></div>
      <h2>{t.introTitle}</h2>
      <p className="invitation-message">{t.introMessage}</p>
      {telugu
        ? <div className="ornament-divider"><span>❧</span><i /><span>❧</span></div>
        : <img className="blessings-divider" src="/assets/blessings-divider.png" alt="" aria-hidden="true" />}
      <h3>{telugu ? `${weddingData.groomTe}  &  ${weddingData.brideTe}` : `${weddingData.groom}  &  ${weddingData.bride}`}</h3>
      <div className="invitation-meta">
        <span><CalendarDays size={16} /> {t.introDate}</span>
        <b aria-hidden="true">|</b>
        <span><Clock3 size={16} /> {t.introTime}</span>
      </div>
    </div>
  </section>;
}
