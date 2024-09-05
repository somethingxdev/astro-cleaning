import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_CHgmQjAO.mjs';
import { manifest } from './manifest_BV0pPjP8.mjs';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/cleaning/carpet.astro.mjs');
const _page2 = () => import('./pages/cleaning/tile-grout.astro.mjs');
const _page3 = () => import('./pages/cleaning/upholstery.astro.mjs');
const _page4 = () => import('./pages/pricing.astro.mjs');
const _page5 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/.pnpm/astro@4.15.3_rollup@4.21.2_typescript@5.5.4/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/cleaning/carpet.astro", _page1],
    ["src/pages/cleaning/tile-grout.astro", _page2],
    ["src/pages/cleaning/upholstery.astro", _page3],
    ["src/pages/pricing.astro", _page4],
    ["src/pages/index.astro", _page5]
]);
const serverIslandMap = new Map();

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "0a8da0e0-80cf-40f0-b7ee-ad35ae87d2cb",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
