import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as renderSlot, b as renderComponent, d as createAstro } from './astro/server_Ba6EjzVo.mjs';
import { $ as $$Image } from './_astro_assets_8oNV4swP.mjs';

const $$Astro = createAstro();
const $$Grid = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Grid;
  const { content, image } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="grid items-start gap-10 py-10 md:grid-cols-[auto_auto] lg:grid-cols-[auto_500px]"> <div class="prose lg:prose-lg prose-p:text-base prose-headings:text-primary"> ${renderSlot($$result, $$slots["default"])} </div> <div class="sticky top-40"> ${renderComponent($$result, "Image", $$Image, { "src": image, "alt": "image", "quality": 100, "class": "w-full rounded-2xl object-cover" })} </div> </div>`;
}, "C:/Users/user/Documents/GitHub/astro-cleaning/src/components/Grid.astro", void 0);

export { $$Grid as $ };
