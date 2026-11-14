# WeddingApp_Final

Merged English/Telugu wedding invitation application.

## Source selection
- English UI, layout, styling, components, animations, and English wording are based on `weddingappnew1.zip`.
- Telugu wording and the Telugu-specific photos used in the Telugu experience are taken from `Sainath - backup.zip`.
- The existing React + TypeScript + Vite architecture and language switcher from the English project are retained.

## Language behavior
- The language switcher changes between English (`en`) and Telugu (`te`).
- The selected language is stored using the existing `wedding-language-v2` localStorage key.
- The document language, title, and theme color update with the selected language.
- Both languages use the same four Telugu reference gallery photos, with labels translated for the selected language.

## Run locally
Requirements: Node.js 18+ (Node.js 20+ recommended) and npm.

```bash
npm ci
npm run dev
```

Open the local URL printed by Vite (normally http://localhost:5173).

Production build:

```bash
npm run build
npm run preview
```

## Integration notes
- `src/data/translations.ts`: Telugu wording aligned to the Telugu reference project; English copy preserved.
- `src/data/weddingData.ts`: retained English wedding data and added Telugu-specific event wording, event photo variants, and Telugu family names.
- `src/components/EventCard.tsx`: chooses the correct language-specific event image.
- `src/components/Hero.tsx`: applies the Telugu source image only in Telugu mode.
- `src/components/Invitation.tsx`: uses the Telugu source couple portrait in Telugu mode.
- `src/components/Venue.tsx`: uses the Telugu source wedding photo in Telugu mode.
- `src/components/Gallery.tsx`: shares the Telugu source project's four gallery photos across both languages.
- `src/styles/global.css`: adds a Telugu-only hero photo override; existing English styling is unchanged.
- `public/images/`: contains the four Telugu reference photos.

## Verification
- TypeScript project compilation (`tsc -b`) completed without reported TypeScript errors during integration.
- All 26 statically referenced local `/assets` and `/images` paths were checked; no missing local asset references were found.
- A full Vite production bundle could not be completed in this execution environment because the dependency tree bundled inside the source archive was missing Rollup's platform-specific optional binary (`@rollup/rollup-linux-x64-gnu`). Run `npm ci` in a normal Node/npm environment, then `npm run build` to perform the production build.
- Browser-based visual/responsive testing was not available in this execution environment.
