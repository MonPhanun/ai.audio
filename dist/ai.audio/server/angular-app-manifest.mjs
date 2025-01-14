
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
  },
  {
    "renderMode": 2,
    "route": "/login"
  }
],
  assets: {
    'index.csr.html': {size: 1883, hash: 'ec2555da518eeb2c8fccf57f38f57c4da8743fbfcfed9f9ea7715bc1e2cf1738', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1622, hash: '70d196feb201a0110a54708bc52f23bd55aaf424b6d54846aa7958073f598911', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'audio/index.html': {size: 2042, hash: '71686c3e89b440a46dbdadc43327ffd80745241826577f476d98e066e13b98cb', text: () => import('./assets-chunks/audio_index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 5641, hash: '4deb7090f818aa89252c55286cf648d05aea5a56155f570a3d3c16b57c662f21', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'index.html': {size: 2042, hash: '71686c3e89b440a46dbdadc43327ffd80745241826577f476d98e066e13b98cb', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-25Q3LUGX.css': {size: 594246, hash: '/YMzuERaqSE', text: () => import('./assets-chunks/styles-25Q3LUGX_css.mjs').then(m => m.default)}
  },
};
