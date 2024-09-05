import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as renderSlot, b as renderComponent, d as createAstro } from './astro/server_Ba6EjzVo.mjs';
import { $ as $$Image } from './_astro_assets_8oNV4swP.mjs';

const $$Astro = createAstro();
const $$Reasons = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Reasons;
  const reasons = [
    {
      title: "Reputation",
      description: "Our reputation in Chico Ca is second to None. We have been Cleaning carpets here for over 20 years. We have relationships with Realtors, carpet stores and interior decorators that recommend us exclusively to their clients. Plus we have more positive reviews for our service than any other company on the internet."
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
  const { title, items = reasons, image } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="grid items-start md:grid-cols-[auto_auto] lg:grid-cols-[auto_500px] gap-10 py-10 md:py-20"> <div class="max-w-3xl"> <h2 class="mb-6 text-2xl font-bold text-primary sm:text-3xl">${title || "5 Reasons to Choose Modern Carpet Cleaning"}</h2> <div class="mb-8"> ${renderTemplate`${renderSlot($$result, $$slots["default"])}` || "Choosing a carpet cleaning company here in Chico can be tough. Your inviting someone in your home which can always be a scary thing to do. At Modern Carpet Cleaning our belief is that we're the best choice for your carpet, tile and upholstery cleaning needs. Here are 5 reasons you should choose Modern Carpet Cleaning in Chico, CA."} </div> <ul> ${items.map((item, index) => renderTemplate`<li class="mb-6 last:mb-0"> <div class="mb-3 flex items-center gap-3"> <span class="grid size-10 place-items-center rounded-full bg-blue/20 font-semibold">${index + 1}</span> <h3 class="text-xl font-semibold text-primary">${item.title}</h3> </div> <p>${item.description}</p> </li>`)} </ul> </div> <div class="sticky top-32 hidden md:block"> ${renderComponent($$result, "Image", $$Image, { "src": image || import('./reasons_C9vxVSk2.mjs'), "alt": "image", "class": "rounded-2xl object-cover" })} </div> </section>`;
}, "C:/Users/user/Documents/GitHub/astro-cleaning/src/components/Reasons.astro", void 0);

export { $$Reasons as $ };
