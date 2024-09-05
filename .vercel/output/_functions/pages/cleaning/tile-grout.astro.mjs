import { c as createComponent, r as renderTemplate, b as renderComponent, d as createAstro, m as maybeRenderHead } from '../../chunks/astro/server_Ba6EjzVo.mjs';
import { $ as $$Grid } from '../../chunks/Grid_CFeAKypU.mjs';
import { $ as $$Reasons } from '../../chunks/Reasons_Bi55fEzc.mjs';
import { $ as $$Layout } from '../../chunks/Layout_DxeixWfl.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$TileGrout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$TileGrout;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome to Astro." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="py-10 md:py-24"> ${renderComponent($$result2, "Grid", $$Grid, { "image": import('../../chunks/grout_BZ7CdLBQ.mjs') }, { "default": ($$result3) => renderTemplate` <h2>Tile & Grout Cleaning</h2> <p>
Over time your tile and grout can begin to get a film on it. This gets worse over time because the grout sealer wears out. First we use our power scrubber to dig out the film on your grout.
</p> <h2>Grout Sealer</h2> <p>Then we use our strong steam cleaning machines to rinse your tile clean. Plus: Most our tile cleaning packages include a commercial grade grout sealer to make upkeep much easier.</p> ` })} ${renderComponent($$result2, "Reasons", $$Reasons, {})} </div> ` })} `;
}, "C:/Users/user/Documents/GitHub/astro-cleaning/src/pages/cleaning/tile-grout.astro", void 0);

const $$file = "C:/Users/user/Documents/GitHub/astro-cleaning/src/pages/cleaning/tile-grout.astro";
const $$url = "/cleaning/tile-grout";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$TileGrout,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
