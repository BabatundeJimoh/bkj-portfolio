# Benjamin Kofi Jimoh — Portfolio

React 18 + Vite + Tailwind CSS.

## Run
```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # outputs dist/
```
Deploy: drag `dist/` to Netlify, or connect the repo (netlify.toml is included).

## Edit your content
- `src/data.js` — nav links, tech stack descriptions, chat mockup messages
- `src/App.jsx` — copy, projects, experience, links (search for `href="#"` and `hello@example.com`)
- `src/components/Dash.jsx` — swap sample data for the GitHub API (see TODO)
- `src/components/Contact.jsx` — connect Formspree/Netlify Forms to actually send messages
- `tailwind.config.js` — colours and fonts; `src/index.css` — bespoke visual effects
