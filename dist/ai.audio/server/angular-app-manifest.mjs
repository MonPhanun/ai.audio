
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/audio"
  }
],
  assets: {
    'index.csr.html': {size: 1874, hash: '6ca9be9fe0822cd867bcc8e33fcc3b0bb583caf0c5e27c0b6f3517a6a90778f7', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1613, hash: '354d65d2025cf7c3645c425f1a4859be810aa8c1ce0d0ef040cd41fad66b0475', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 41589, hash: '0dcc4e3cadb29bbf17658a28e3db5e7f7da1ae7315fe9e9048c3f8bc75001564', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'audio/index.html': {size: 41589, hash: '0dcc4e3cadb29bbf17658a28e3db5e7f7da1ae7315fe9e9048c3f8bc75001564', text: () => import('./assets-chunks/audio_index_html.mjs').then(m => m.default)},
    'styles-25Q3LUGX.css': {size: 594246, hash: '/YMzuERaqSE', text: () => import('./assets-chunks/styles-25Q3LUGX_css.mjs').then(m => m.default)}
  },
};
