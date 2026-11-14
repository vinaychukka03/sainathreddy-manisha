import type { Language } from '../data/weddingData';
import { weddingData } from '../data/weddingData';
import { copy } from '../data/translations';
import { EventCard } from './EventCard';

export function Events({ language }: { language: Language }) {
  const t = copy[language];
  return <section className={`events-section ${language === 'te' ? 'events-te' : 'events-en'}`} id="events">
    <div className="section-heading">
      <div className="events-title-row">
        <img className="events-title-leaf events-title-leaf-left" src="/assets/events-heading-leaf.png" alt="" aria-hidden="true" />
        <h2>{t.eventsTitle}</h2>
        <img className="events-title-leaf events-title-leaf-right" src="/assets/events-heading-leaf.png" alt="" aria-hidden="true" />
      </div>
      <p>{t.eventsSubtitle}</p>
    </div>
    <div className="events-grid">{weddingData.events.map(event => <EventCard key={event.id} event={event} language={language} />)}</div>
  </section>;
}
