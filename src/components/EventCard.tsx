import { CalendarDays, Clock3, MapPin, ArrowUpRight } from 'lucide-react';
import type { Language } from '../data/weddingData';
import { copy } from '../data/translations';
import type { weddingData } from '../data/weddingData';

type EventItem = typeof weddingData.events[number];
export function EventCard({ event, language }: { event: EventItem; language: Language }) {
  const t = copy[language];
  const telugu = language === 'te';
  return <article className="event-card">
    <div className="event-image-frame"><img src={telugu ? event.imageTe : event.image} alt={t.eventNames[event.id]} loading="lazy" /></div>
    <h3>{t.eventNames[event.id]}</h3>
    <div className="event-detail"><CalendarDays size={16} /><span>{telugu ? event.dateTe : event.date}</span></div>
    <div className="event-detail"><Clock3 size={16} /><span>{telugu ? event.timeTe : event.time}</span></div>
    <div className="event-detail"><MapPin size={16} /><span>{telugu ? event.venueTe : event.venue}</span></div>
    <a className="event-link" href="#venue">{t.eventButton}<ArrowUpRight size={15} /></a>
  </article>;
}
