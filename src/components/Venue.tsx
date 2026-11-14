import { CalendarDays, Clock3, MapPin, Navigation } from 'lucide-react';
import type { Language } from '../data/weddingData';
import { weddingData } from '../data/weddingData';
import { copy } from '../data/translations';

export function Venue({ language }: { language: Language }) {
  const t = copy[language];
  const te = language === 'te';
  const mapUrl = weddingData.wedding.mapUrl;
  const embedUrl = `https://www.google.com/maps?q=${encodeURIComponent(`${weddingData.wedding.venue}, ${weddingData.wedding.location}`)}&output=embed`;

  return <section className={`venue-section ${te ? 'venue-te' : 'venue-en'}`} id="venue">
    <div className="section-heading gallery-heading venue-heading">
      <img className="gallery-divider gallery-divider-left" src="/assets/gallery-divider-top.png" alt="" aria-hidden="true" />
      <h2>{t.venueTitle}</h2>
      <img className="gallery-divider gallery-divider-right" src="/assets/gallery-divider-bottom.png" alt="" aria-hidden="true" />
    </div>
    <div className="venue-layout">
      <div className="venue-photo-wrap">
        <img src={te ? "/images/wedding-ceremony.jpg" : "/assets/venue-reference.jpg"} alt={te ? 'పూలతో అలంకరించిన వివాహ వేదిక' : 'Wedding hall decorated with flowers and wedding lights'} loading="lazy" />
      </div>
      <div className="venue-copy">
        <div className="venue-location">
          <MapPin size={19} />
          <div className="venue-location-copy">
            <h3>{weddingData.wedding.venue}</h3>
            <p className="venue-address">{te ? weddingData.wedding.locationTe : 'near Singur X Road'}</p>
          </div>
        </div>
        <div className="venue-meta"><CalendarDays size={17} /><span><b>{t.venueDate}:</b> {te ? weddingData.wedding.dateTe : 'November 20, 2026, Friday'}</span></div>
        <div className="venue-meta"><Clock3 size={17} /><span><b>{t.timeLabel}:</b> {te ? weddingData.wedding.timeTe : weddingData.wedding.time}</span></div>
        <a className="venue-map-button" href={mapUrl} target="_blank" rel="noopener noreferrer"><Navigation size={18} /> {t.venueDirections}</a>
      </div>
      <div className="venue-map-wrap">
        <iframe title={te ? 'వివాహ వేదిక మ్యాప్ ప్రివ్యూ' : 'Wedding venue map preview'} src={embedUrl} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
        <div className="map-label"><MapPin size={16} /><span><b>{t.mapPreviewLabel}</b><small>{t.mapPreviewNote}</small></span></div>
      </div>
    </div>
  </section>;
}
