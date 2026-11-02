import type { Language } from './weddingData';

export const copy: Record<Language, {
  nav: { home: string; events: string; venue: string; gallery: string; switch: string };
  ganeshaInvocation: string; saiInvocation: string;
  invitationLead: string; dateLabel: string; timeLabel: string;
  venueLabel: string; familyLead: string; venueButton: string; detailsButton: string;
  countdown: { days: string; hours: string; minutes: string; seconds: string };
  introTitle: string; introMessage: string; introDate: string; introTime: string;
  eventsTitle: string; eventsSubtitle: string; eventNames: Record<string, string>;
  eventButton: string; eventVenue: string;
  venueTitle: string; venueDirections: string; venueDate: string;
  mapPreviewLabel: string; mapPreviewNote: string; galleryTitle: string;
  galleryPrevious: string; galleryNext: string; galleryOpen: string; galleryClose: string;
  galleryItems: string[];
  footerTitle: string; footerMessage: string; footerSignoff: string; footerCredit: string;
}> = {
  te: {
    nav: { home: 'ఆహ్వానం', events: 'వేడుకలు', venue: 'వేదిక', gallery: 'చిత్రాలు', switch: 'English' },
    ganeshaInvocation: '॥ శ్రీ గణేశాయ నమః ॥', saiInvocation: 'ఓం శ్రీ సాయిరాం',
    invitationLead: 'మా వివాహ మహోత్సవానికి మీకు హృదయపూర్వక ఆహ్వానం',
    dateLabel: 'తేదీ', timeLabel: 'సమయం', venueLabel: 'వేదిక',
    familyLead: 'కాసల వెంకట రెడ్డి & కాసల మంజుల ఆశీస్సులతో',
    venueButton: 'వివాహ వేదికను చూడండి', detailsButton: 'ఆహ్వాన వివరాలు',
    countdown: { days: 'రోజులు', hours: 'గంటలు', minutes: 'నిమిషాలు', seconds: 'సెకన్లు' },
    introTitle: 'పెద్దల ఆశీస్సులతో…',
    introMessage: 'మనసుల కలయికతో, పెద్దల ఆశీస్సులతో మా జీవితంలో ఒక కొత్త అధ్యాయాన్ని ప్రారంభిస్తున్న ఈ శుభ సందర్భంలో, మీ కుటుంబ సమేతంగా విచ్చేసి మమ్మల్ని ఆశీర్వదించి, మా ఆనందాన్ని పంచుకోవలసిందిగా మనస్ఫూర్తిగా ఆహ్వానిస్తున్నాము.',
    introDate: 'నవంబర్ 20, 2026, శుక్రవారం', introTime: 'ఉదయం 10:30 గంటల నుండి',
    eventsTitle: 'వేడుకలు', eventsSubtitle: 'శుభకార్యాల వివరాలు',
    eventNames: { haldi: 'పసుపు వేడుక', mehendi: 'బోనాలు', muhurtham: 'వివాహ ముహూర్తం' },
    eventButton: 'వేదిక వివరాలు', eventVenue: 'వేదిక',
    venueTitle: 'వివాహ వేదిక',
    venueDirections: 'గూగుల్ మ్యాప్స్‌లో చూడండి', venueDate: 'వివాహ తేదీ',
    mapPreviewLabel: 'MS Function Hall', mapPreviewNote: 'సింగూర్ X రోడ్ సమీపంలో, హైదరాబాద్',
    galleryTitle: 'మధుర జ్ఞాపకాలు',
    galleryPrevious: 'మునుపటి చిత్రం', galleryNext: 'తదుపరి చిత్రం', galleryOpen: 'పెద్దగా చూడండి', galleryClose: 'గ్యాలరీ మూసివేయండి',
    galleryItems: ['వివాహ వేడుక', 'వధూవరులు', 'పసుపు వేడుక', 'బోనాల వేడుక'],
    footerTitle: 'మీ రాకే మా వేడుకకు మరింత ఆనందం',
    footerMessage: 'మా జీవితంలో ఈ మధురమైన సందర్భాన్ని మీతో కలిసి జరుపుకోవాలని ఎదురుచూస్తున్నాము. మీ ఆశీస్సులు మాకు ఎల్లప్పుడూ తోడుగా ఉండాలని కోరుకుంటున్నాము.',
    footerSignoff: 'ప్రేమతో ఎదురుచూస్తూ, మా కుటుంబ సభ్యులు', footerCredit: 'ప్రేమతో రూపొందించిన మా వివాహ ఆహ్వానం',
  },
  en: {
    nav: { home: 'Home', events: 'Events', venue: 'Venue', gallery: 'Gallery', switch: 'తెలుగు' },
    ganeshaInvocation: 'Om Sri Ganeshaya Namah', saiInvocation: 'Om Sri Sai Ram',
    invitationLead: 'You are cordially invited to the wedding ceremony of',
    dateLabel: 'Date', timeLabel: 'Time', venueLabel: 'Venue',
    familyLead: 'With the blessings of Kasala Venkat Reddy & Kasala Manjula',
    venueButton: 'View Wedding Venue', detailsButton: 'Know Invitation Details',
    countdown: { days: 'Days', hours: 'Hours', minutes: 'Minutes', seconds: 'Seconds' },
    introTitle: 'With the Blessings of Elders…',
    introMessage: 'With the union of our hearts and the blessings of our elders, we are beginning a beautiful new chapter in our lives. We warmly invite you and your family to join us, bless us, and be part of our happiness as we celebrate our wedding.',
    introDate: 'November 20, 2026, Friday', introTime: '10:30 AM onwards',
    eventsTitle: 'Wedding Celebrations', eventsSubtitle: 'A few special moments leading to our forever',
    eventNames: { haldi: 'Haldi Ceremony', mehendi: 'Pelli Bonalu', muhurtham: 'Wedding Muhurtham' },
    eventButton: 'View Venue', eventVenue: 'Venue',
    venueTitle: 'Wedding Venue',
    venueDirections: 'View on Google Maps', venueDate: 'Wedding date',
    mapPreviewLabel: 'MS Function Hall', mapPreviewNote: 'near Singur X Road',
    galleryTitle: 'Wedding Gallery',
    galleryPrevious: 'Previous image', galleryNext: 'Next image', galleryOpen: 'Open image', galleryClose: 'Close gallery',
    galleryItems: ['Wedding ceremony', 'The couple', 'Haldi ceremony', 'Bonalu celebration'],
    footerTitle: 'We would be honoured to celebrate this joyful day with you',
    footerMessage: 'Your presence, love and blessings will make our wedding celebration even more meaningful. We look forward to welcoming you and your family.',
    footerSignoff: 'With love, Our Wedding Invitation', footerCredit: 'Made with love for our wedding invitation',
  },
};
