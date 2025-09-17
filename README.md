# Movie Player

This is a **Movie Player Page** project built with **Nuxt 3**, **Vue 3 (Composition API)**, and **TailwindCSS**.  
It implements the player page UI based on the provided Figma design and dynamically fetches data from the provided API.

---

## Quick Start

### Prerequisites

- Node.js >= 18
- npm or yarn

### Install Dependencies

`````bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install


## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev


## Production

Build the application for production:

# npm
npm run build
npm run preview

# pnpm
pnpm build
pnpm preview

# yarn
yarn build
yarn preview

# bun
bun run build
bun run preview


Locally preview production build:

```bash
# npm

npm run build
npm run preview

# pnpm

pnpm build
pnpm preview

# yarn

yarn build
yarn preview



## Project Structure

````text
/components
  └─ base
      └─ container
          └─ VideoPlayerContainer.vue   # Container for the video player layout
      └─ menu
          ├─ MenuIcon.vue               # Icon component used in menus
          └─ MenuItem.vue               # Menu item component displaying text and links
      ├─ BaseButton.vue                  # Reusable button component
      ├─ BaseImageItem.vue               # Image component with styling
      ├─ VideoPlayer.vue                 # Video player with HLS & subtitle support
      ├─ BaseSelect.vue                  # Dropdown for selecting video quality
      └─ VideoContainerTitle.vue         # Displays movie title, year, genre, and ratings
  └─ app
      ├─ VideoOptions.vue                # Component for video options (quality, subtitles)
      └─ VideoQualityIcon.vue            # Icon representing video quality
      ├─ UserRating.vue                  # Interactive star-based rating component
      └─ VideoItem.vue                   # Displays movie item with poster and info

/pages
  ├─ index.vue                          # Home page
  └─ player
      └─ [id].vue                       # Main player page for each movie

/assets
  ├─ css                                # Global CSS files
  ├─ fonts                              # Font files
  └─ img                                # Placeholder images and logos

/utils
  └─ persianNumber.ts                    # Utility function to convert numbers to Persian format



## API Usage

All data is fetched dynamically from the API:

# Movie & Episode Info

```http
GET https://ylnk.site/test/?action=info&id=<movie_id>



# Video & Subtitle

```http
GET https://ylnk.site/test/?action=stream&id=<movie_id>



# Submit User Rating

```http
POST https://ylnk.site/test/?action=rate&id=<movie_id>
body: { "rate": 4 }
`````

## Features

-Display movie information: title (English & Persian), release year, genre

-Interactive star-based user rating system with average rating update

-Display IMDb, Rotten Tomatoes, and Metacritic ratings

-Video player with HLS playback and subtitle toggle

-Episode list sidebar (responsive)

-Fully responsive layout for desktop and mobile

-Quality selection dropdown

-Hover and click animations for better UX

## Responsive Layout

-Mobile: Column layout, collapsible episode list sidebar, dynamic icons slider

-Desktop: Row layout, sidebar always visible, all icons displayed

-TailwindCSS breakpoints (sm, md, lg) used for responsiveness

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
