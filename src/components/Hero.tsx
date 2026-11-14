import { CalendarDays, Clock3, MapPin, UsersRound, ArrowRight } from 'lucide-react';
import type { Language } from '../data/weddingData';
import { weddingData } from '../data/weddingData';
import { copy } from '../data/translations';
import { Countdown } from './Countdown';

export function Hero({ language }: { language: Language }) {
  const t = copy[language];
  const telugu = language === 'te';
  return <section className={`hero ${telugu ? 'hero-telugu' : 'hero-english'}`} id="home">
    <div className={`hero-photo ${telugu ? "hero-photo-telugu" : ""}`} role="img" aria-label={telugu ? 'వివాహ మండపంలో వధూవరులు' : 'Bride and groom seated at a flower-adorned wedding mandap'} />
    <div className="hero-shade" />
    <div className="hero-content">
      <p className="invocation">{t.ganeshaInvocation}</p>
      <p className="invocation invocation-sai">{t.saiInvocation}</p>
      <p className="hero-intro">{t.invitationLead}</p>
      <h1>
        <span className="hero-name">{telugu ? weddingData.groomTe : weddingData.groom}</span>
        <span className="ampersand">&</span>
        <span className="hero-name">{telugu ? weddingData.brideTe : weddingData.bride}</span>
      </h1>
      <div className="hero-facts">
        <div><CalendarDays /><span className="fact-copy"><b>{t.dateLabel}:</b> <span>{telugu ? 'నవంబర్ 20, 2026, శుక్రవారం' : 'November 20, 2026, Friday'}</span></span></div>
        <div><Clock3 /><span className="fact-copy"><b>{t.timeLabel}:</b> <span>{telugu ? 'ఉదయం 10:30 గంటల నుండి' : weddingData.wedding.time}</span></span></div>
        <div><MapPin /><span className="fact-copy"><b>{t.venueLabel}:</b> <span>{weddingData.wedding.venue}, {telugu ? 'సింగూర్ X రోడ్ సమీపంలో, హైదరాబాద్' : weddingData.wedding.location}</span></span></div>
        <div><UsersRound /><span className="fact-copy fact-blessing">{t.familyLead}</span></div>
      </div>
      <div className="hero-buttons">
        <a className="button button-primary" href={weddingData.wedding.mapUrl} target="_blank" rel="noopener noreferrer"><MapPin size={17} />{t.venueButton}</a>
        <a className="text-link" href="#invitation">{t.detailsButton}<ArrowRight size={16} /></a>
      </div>
      <Countdown language={language} />
    </div>
    <div className="hero-bottom-flourish" aria-hidden="true">❧</div>
  </section>;
}
