# MovieFinder - Nuxt 3 Movie Discovery App

A modern movie discovery application built with Nuxt 3, allowing users to search and explore movie information using the OMDB API.

![MovieFinder App](https://via.placeholder.com/800x400?text=MovieFinder+App)

## Features

- Search for movies by title
- View detailed movie information
- Responsive design for all devices
- Dark mode toggle with preference saving
- User authentication system

## Technologies Used

- [Nuxt 3](https://nuxt.com/) - Vue.js framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Pinia](https://pinia.vuejs.org/) - State management
- [OMDB API](https://www.omdbapi.com/) - Movie database API

## Getting Started

### Prerequisites

- Node.js (v16 or later)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/moviefinder.git
cd moviefinder
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Create a `.env` file in the root directory with your OMDB API key:
```
OMDB_API_KEY=your_api_key_here
```

4. Start the development server:
```bash
npm run dev
# or
yarn dev
```

5. Open your browser and navigate to `http://localhost:3000`

## Project Structure

- `assets/` - CSS, fonts, and images
- `components/` - Reusable Vue components
- `composables/` - Shared composable functions
- `layouts/` - Page layouts
- `pages/` - Application pages and routes
- `public/` - Static files
- `stores/` - Pinia state stores

## Deployment

Build the application for production:

```bash
npm run build
# or
yarn build
```

Preview the production build:

```bash
npm run preview
# or
yarn preview
```

## License

[MIT](LICENSE)

## Acknowledgments

- [Nuxt.js team](https://nuxt.com/) for the amazing framework
- [OMDB API](https://www.omdbapi.com/) for providing movie data
