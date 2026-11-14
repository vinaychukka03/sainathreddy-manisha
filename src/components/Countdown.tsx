import { useEffect, useState } from 'react';
import { weddingData, type Language } from '../data/weddingData';
import { copy } from '../data/translations';

function getRemaining() {
  const target = new Date(weddingData.wedding.isoDate).getTime();
  const distance = target - Date.now();
  if (distance <= 0) return null;

  return {
    days: Math.floor(distance / 86_400_000),
    hours: Math.floor((distance % 86_400_000) / 3_600_000),
    minutes: Math.floor((distance % 3_600_000) / 60_000),
    seconds: Math.floor((distance % 60_000) / 1_000),
  };
}

export function Countdown({ language }: { language: Language }) {
  const [remaining, setRemaining] = useState(getRemaining);
  useEffect(() => {
    const timer = window.setInterval(() => {
      const next = getRemaining();
      setRemaining(next);
      if (!next) window.clearInterval(timer);
    }, 1000);
    return () => window.clearInterval(timer);
  }, []);
  const labels = copy[language].countdown;
  if (!remaining) return null;

  return <div className="countdown" aria-label="Wedding countdown">
    {(Object.keys(labels) as Array<keyof typeof labels>).map((unit) => (
      <div className="countdown-unit" key={unit}>
        <strong>{String(remaining[unit]).padStart(2, '0')}</strong>
        <span>{labels[unit]}</span>
      </div>
    ))}
  </div>;
}
