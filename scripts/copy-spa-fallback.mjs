// GitHub Pages has no server-side rewrites, so unknown paths (e.g. /products)
// 404 instead of reaching the SPA. Serving index.html as 404.html lets
// React Router take over client-side once the page loads.
import { copyFileSync } from 'node:fs'

copyFileSync('dist/index.html', 'dist/404.html')
