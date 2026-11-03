export type Language = 'te' | 'en';

export const weddingData = {
  groom: 'Sainath Reddy',
  bride: 'Manisha',
  groomTe: 'సాయినాథ్ రెడ్డి',
  brideTe: 'మనీషా',
  family: ['Kasala Venkat Reddy', 'Kasala Manjula'],
  familyTe: ['కాసల వెంకట రెడ్డి', 'కాసల మంజుల'],
  wedding: {
    isoDate: '2026-11-20T10:30:00+05:30',
    date: 'November 20, 2026',
    dateTe: 'నవంబర్ 20, 2026, శుక్రవారం',
    time: '10:30 AM onwards',
    timeTe: 'ఉదయం 10:30 గంటల నుండి',
    venue: 'MS Function Hall',
    location: 'Near Singur X Road, Hyderabad',
    locationTe: 'సింగూర్ X రోడ్ సమీపంలో, హైదరాబాద్',
    mapUrl: 'https://maps.app.goo.gl/YtRyE4sMZRyERymq9?g_st=aw', // Verified Google Maps link supplied by the couple.
  },
  events: [
    { id: 'haldi', date: 'November 18, 2026', dateTe: 'నవంబర్ 18, 2026', time: '6:00 PM', timeTe: 'సాయంత్రం 6:00 గంటలకు', venue: "Near Groom's Home", venueTe: 'వరుని నివాసం', image: '/assets/haldi-reference.jpg', imageTe: '/images/haldi.jpg' },
    { id: 'mehendi', date: 'November 19, 2026', dateTe: 'నవంబర్ 19, 2026', time: '10:00 AM', timeTe: 'ఉదయం 10:00 గంటలకు', venue: "Near Groom's Home", venueTe: 'వరుని నివాసం', image: '/assets/mehendi-reference.jpg', imageTe: '/images/bonalu.jpg' },
    { id: 'muhurtham', date: 'November 20, 2026', dateTe: 'నవంబర్ 20, 2026, శుక్రవారం', time: '10:57 AM', timeTe: 'ఉదయం 10:57 గంటలకు', venue: 'MS Function Hall, near Singur X Road', venueTe: 'MS Functional Hall', image: '/assets/mandap-reference.jpg', imageTe: '/images/couple-portrait.jpg' },
  ],
} as const;
