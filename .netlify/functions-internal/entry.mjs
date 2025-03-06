import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_42622ee0.mjs';

const _page0  = () => import('./chunks/generic_ff1a75ae.mjs');
const _page1  = () => import('./chunks/index_aa638ae6.mjs');
const _page2  = () => import('./chunks/services_671fa1c9.mjs');
const _page3  = () => import('./chunks/contact_16fd4d62.mjs');
const _page4  = () => import('./chunks/about_4bb593d2.mjs');const pageMap = new Map([["node_modules/astro/dist/assets/endpoint/generic.js", _page0],["src/pages/index.astro", _page1],["src/pages/services.astro", _page2],["src/pages/contact.astro", _page3],["src/pages/about.astro", _page4]]);
const _manifest = Object.assign(manifest, {
	pageMap,
	renderers,
});
const _args = {};

const _exports = adapter.createExports(_manifest, _args);
const handler = _exports['handler'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { handler, pageMap };
