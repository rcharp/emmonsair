# GitHub Pages Deployment

This project is deployed to GitHub Pages. When making changes, always ensure:

1. **`vite.config.ts`** has `base: "/emmonsair/"` set
2. **`src/App.tsx`** uses `<BrowserRouter basename={import.meta.env.BASE_URL.replace(/\/$/, '')}>`
3. **`public/404.html`** exists with the SPA redirect script (converts path to query string)
4. **`index.html`** includes the SPA redirect handler script (restores path from query string)
5. **`.github/workflows/deploy.yml`** uses `npm install --legacy-peer-deps` (not `npm ci`) and deploys the `dist` folder

GitHub repo: `rcharp/emmonsair`
Site URL: `https://rcharp.github.io/emmonsair/`
