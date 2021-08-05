# Base path issue

```bash
npm install
npm run dev
```

open browser at http://localhost:3000/base/about and see 404

having that svelte.config.js jas kit.paths.base='/base'

```javascript
/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    // hydrate the <div id="svelte"> element in src/app.html
    target: '#svelte',

    paths: {
      base: '/base',
      assets: '',
    },
  },
};

export default config;
```
