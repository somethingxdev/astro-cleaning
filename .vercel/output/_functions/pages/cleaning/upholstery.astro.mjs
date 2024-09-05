import { c as createComponent, r as renderTemplate, b as renderComponent, d as createAstro, m as maybeRenderHead } from '../../chunks/astro/server_Ba6EjzVo.mjs';
import { $ as $$Reasons } from '../../chunks/Reasons_Bi55fEzc.mjs';
import { $ as $$Layout } from '../../chunks/Layout_DxeixWfl.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$Upholstery = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Upholstery;
  const reasons = [
    {
      title: "Pre\xAD-Vacuum",
      description: "We use a handheld upholstery vacuum with a power brush to remove fine dust and hairs from the furniture, we are the only company that uses this type of vacuum for furniture. Pre-Vacuuming is very important during furniture cleaning."
    },
    {
      title: "Cleaning Techs",
      description: "Probable the most important reason to choose Modern. Our cleaning Techs have all been personally trained by me, the owner. The average employee is with us for years not months and we constantly receive calls at the office complimenting how nice and professional our cleaning techs are."
    },
    {
      title: "Experience",
      description: "Over 20 years! Yes we have been providing service in Chico for over 20 years now. In that time we have cleaned millions and millions of feet of carpet. We have cleaned the largest retail store in Chico, Forever 21, and provided cleaning service to Sierra Nevada Brewery. From residential homes to businesses, we are one of the most experienced companies in the area."
    },
    {
      title: "Education",
      description: "As the owner of the company I have been formally trained and certified to clean carpets. However the education didn't end there. I personally have communicated with the top chemists in our industry to create a system that helps your carpets stay clean longer."
    },
    {
      title: "Guarantee",
      description: "We boast of the industries best 30 day spot free guarantee. If you have your carpets cleaned by us and a spot returns or an area begins to re\xADsoil in 30 days we will come out and re-\xADclean it for free*. No other company beats our service and that's why we can have the best guarantee."
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome to Astro." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="py-10 md:py-24"> ${renderComponent($$result2, "Reasons", $$Reasons, { "items": reasons, "title": "Upholstery Cleaning", "image": import('../../chunks/upholstery_RjlN6fzC.mjs') }, { "default": ($$result3) => renderTemplate` <div class="prose"> <p>
Modern cleans all upholstery in your home. From couches and recliners to dining room chairs. Our Technicians have been trained to bring your furniture back to life using the proper tools and
          cleaning agents. I consider our service the best value because we include a scotchguard like fabric protector in our price.
</p> <p>Our five step upholstery cleaning process cleans your furniture and fabrics without damaging them. Every step helps get your items cleaner and helps them stay cleaner longer.</p> </div> ` })} ${renderComponent($$result2, "Reasons", $$Reasons, {})} </div> ` })}`;
}, "C:/Users/user/Documents/GitHub/astro-cleaning/src/pages/cleaning/upholstery.astro", void 0);

const $$file = "C:/Users/user/Documents/GitHub/astro-cleaning/src/pages/cleaning/upholstery.astro";
const $$url = "/cleaning/upholstery";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Upholstery,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
