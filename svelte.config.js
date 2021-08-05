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
