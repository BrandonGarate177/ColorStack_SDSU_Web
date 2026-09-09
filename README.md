# ColorStack SDSU Web

React + Vite starter for the ColorStack SDSU website.

## Setup

```sh
npm install
npm run dev
```

## Scripts

- `npm run dev` starts the dev server with hot reload
- `npm run build` builds for production into `dist/`
- `npm run preview` serves the production build locally
- `npm run lint` runs oxlint

## Structure

```
src/
  main.jsx        entry point
  App.jsx         root component
  index.css       global styles
  components/     shared UI pieces
  pages/          top-level views
public/           static files served as-is
```

## Contributing

`main` is protected and auto-deploys to Netlify. All changes go through pull requests. See [CONTRIBUTING.md](CONTRIBUTING.md) for the workflow and the rules for using AI tools.
