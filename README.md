# Photo Gallery

A React web app that shows photos from the Picsum Photos API in a responsive grid. You can search photos by author name and mark photos as favourites. Favourites are saved in the browser, so they stay after a page refresh.

## Features:
 - Loading spinner while photos are fetched, and an error message if the request fails
 - Responsive grid: 1 column on mobile, 2 on tablet, 4 on desktop
 - Real-time search that filters the loaded photos by author name, with no extra API calls
 - Heart button to add or remove a photo from favourites
 - Favourites persist across refreshes using localStorage

## Tech Stack:
 - React 19
 - Vite for the dev server and build
 - Tailwind CSS v4 for all styling
 - No other UI libraries

 ## Getting Started

Requires Node.js 20.19 or newer.
```
npm install
npm run dev
```

Open `http://localhost:5173/` in your browser. No API key is needed.
