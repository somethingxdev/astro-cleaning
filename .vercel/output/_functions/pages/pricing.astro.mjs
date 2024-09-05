import { c as createComponent, r as renderTemplate, b as renderComponent, d as createAstro, m as maybeRenderHead } from '../chunks/astro/server_Ba6EjzVo.mjs';
import { $ as $$Grid } from '../chunks/Grid_CFeAKypU.mjs';
import { $ as $$Reasons } from '../chunks/Reasons_Bi55fEzc.mjs';
import { $ as $$Layout } from '../chunks/Layout_DxeixWfl.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Pricing = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Pricing;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome to Astro." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="py-10 md:py-24"> ${renderComponent($$result2, "Grid", $$Grid, { "image": import('../chunks/pricing_CRitb0am.mjs') }, { "default": ($$result3) => renderTemplate` <h2>Pricing</h2> <p>Residential customers:</p> <p>
Pricing for Carpet cleaning seems to be all over the board. You have companies offering cheap room pricing just to raise the prices dramatically when they add on pre-conditioning or
        deodorizing. You also have companies that charge really low prices that provide a very quick service that doesn’t stay clean very long. We charge only for the area we clean. If you have a
        bedroom that we only clean the open areas in then we only charge for the open areas not the whole room. Our price is for a complete 10 step cleaning process every time. No surprises no
        gimmicks. We also do Free in home estimates before the day of cleaning. We will measure your carpets, inspect any trouble areas and give you an honest expectation of clean-ability. The best
        suggestion I can give anybody looking for a good respectable carpet cleaning company in Chico is to insist on an in home estimate. After all don’t you want to meet the type of people coming
        into your home?
</p> <h2>Tenants/Landlords:</h2> <p>
We give big discounts for cleaning empty homes and apartments. We use a 6 step cleaning process that includes pre-treating dark traffic lanes and dark spots. We deodorize the carpets and groom
        the carpets. A 2br apartment is usually only $85.00 and empty houses are very affordable too. If you are a tenant we offer a guarantee that most companies won’t. Are cleaning service is so
        good, that we will guarantee you will get your carpet cleaning deposit back.
</p> <h3>To learn more or to schedule your Free In Home Estimate in Chico call +1 (323)-330-0262</h3> ` })} ${renderComponent($$result2, "Reasons", $$Reasons, {})} </div> ` })} `;
}, "C:/Users/user/Documents/GitHub/astro-cleaning/src/pages/pricing.astro", void 0);

const $$file = "C:/Users/user/Documents/GitHub/astro-cleaning/src/pages/pricing.astro";
const $$url = "/pricing";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Pricing,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
