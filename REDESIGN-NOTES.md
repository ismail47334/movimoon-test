# MoviMoon — Reel Archive / Picture-House Edition

This edition replaces the repeated familiar horizontal navigation and multi-column footer with a typographic film-journal masthead, a vertical desktop archive rail, responsive mobile navigation, and one shared end-credits footer.

## Coverage

- MoviMoon app shell and its SPA routes
- Blog home, movie-post and TV-series-post indexes
- All 18 static blog articles, with the embedded article mini-header and duplicate inner credits block removed
- One consistent global footer per page

## Preserved

- Existing route mappings and API/backend implementation
- Article copy, metadata, poster/hero references, and existing page content
- Advertisement markup, slots/placements, and ad scripts
- Analytics scripts and measurement configuration
- Existing app/search/watch-list/live-TV controls

Only the SPA footer visibility expression was adjusted so the single global footer remains visible on every SPA view. No deployment or live-site changes were made.

## Files added

- `public/css/movimoon-reel-archive.css` — shared design system and responsive layout
- `public/js/movimoon-reel-archive.js` — dynamic copyright year for the shared footer

## Preview note

The app source still displays its existing “TMDB API Key Required” state when no API key is configured. This redesign does not add, remove, or expose any API credentials; the provided source’s API requirement remains unchanged.
