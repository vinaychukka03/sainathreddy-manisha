import { useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight, X } from 'lucide-react';
import type { Language } from '../data/weddingData';
import { copy } from '../data/translations';

const galleryImages = [
  { src: '/images/wedding-ceremony.jpg', alt: 'Bride and groom at the wedding ceremony' },
  { src: '/images/couple-portrait.jpg', alt: 'The couple in traditional wedding attire' },
  { src: '/images/haldi.jpg', alt: 'The couple at the haldi ceremony' },
  { src: '/images/bonalu.jpg', alt: 'Traditional Bonalu celebration decorations' },
];

export function Gallery({ language }: { language: Language }) {
  const t = copy[language];
  const [active, setActive] = useState<number | null>(null);
  const [featured, setFeatured] = useState(0);
  const te = language === 'te';
  const images = galleryImages;
  const move = (direction: number) => setActive(current => current === null ? 0 : (current + direction + images.length) % images.length);

  useEffect(() => {
    if (featured >= images.length) setFeatured(0);
    if (active !== null && active >= images.length) setActive(0);
  }, [language, images.length]);

  useEffect(() => {
    if (active === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setActive(null);
      if (event.key === 'ArrowRight') move(1);
      if (event.key === 'ArrowLeft') move(-1);
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = ''; };
  }, [active]);

  return <section className={`gallery-section ${te ? 'gallery-te' : 'gallery-en'}`} id="gallery">
    <div className="section-heading gallery-heading">
      <img className="gallery-divider gallery-divider-left" src="/assets/gallery-divider-top.png" alt="" aria-hidden="true" />
      <h2>{t.galleryTitle}</h2>
      <img className="gallery-divider gallery-divider-right" src="/assets/gallery-divider-bottom.png" alt="" aria-hidden="true" />
    </div>
    <div className="gallery-layout">
      <button className="gallery-feature" onClick={() => setActive(featured)} aria-label={`${t.galleryOpen}: ${t.galleryItems[featured]}`}>
        <img src={images[featured].src} alt={te ? t.galleryItems[featured] : images[featured].alt} loading="lazy" />
        <span>{t.galleryItems[featured]} <ArrowRight size={16} /></span>
      </button>
      <div className="gallery-thumbs">
        {images.map((item, index) => index !== featured && <button className={`gallery-thumb gallery-thumb-${index + 1}`} key={item.src} onClick={() => setActive(index)} aria-label={`${t.galleryOpen}: ${t.galleryItems[index]}`}>
          <img src={item.src} alt={te ? t.galleryItems[index] : item.alt} loading="lazy" />
        </button>)}
      </div>
    </div>
    <div className="gallery-controls">
      <button onClick={() => setFeatured(index => (index - 1 + images.length) % images.length)} aria-label={t.galleryPrevious}><ChevronLeft size={18} /></button>
      <div className="gallery-dots" aria-label={`${featured + 1} / ${images.length}`}>{images.map((image, index) => <span className={featured === index ? 'is-active' : ''} key={image.src} />)}</div>
      <button onClick={() => setFeatured(index => (index + 1) % images.length)} aria-label={t.galleryNext}><ChevronRight size={18} /></button>
    </div>
    {active !== null && <div className="lightbox" role="dialog" aria-modal="true" aria-label={t.galleryTitle} onMouseDown={event => { if (event.target === event.currentTarget) setActive(null); }}>
      <button className="lightbox-close" onClick={() => setActive(null)} aria-label={t.galleryClose}><X /></button>
      <button className="lightbox-arrow lightbox-prev" onClick={() => move(-1)} aria-label={t.galleryPrevious}><ArrowLeft /></button>
      <figure className="lightbox-figure">
        <img src={images[active].src} alt={te ? t.galleryItems[active] : images[active].alt} />
        <figcaption>{t.galleryItems[active]}</figcaption>
      </figure>
      <button className="lightbox-arrow lightbox-next" onClick={() => move(1)} aria-label={t.galleryNext}><ArrowRight /></button>
    </div>}
  </section>;
}
