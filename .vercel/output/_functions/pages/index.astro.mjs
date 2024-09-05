import { c as createComponent, r as renderTemplate, m as maybeRenderHead, b as renderComponent, d as createAstro } from '../chunks/astro/server_Ba6EjzVo.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_8oNV4swP.mjs';
import { $ as $$Reasons } from '../chunks/Reasons_Bi55fEzc.mjs';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { $ as $$Layout } from '../chunks/Layout_DxeixWfl.mjs';
export { renderers } from '../renderers.mjs';

const $$Advantages = createComponent(($$result, $$props, $$slots) => {
  const items = [
    {
      image: import('../chunks/garantee_DzXpTycB.mjs'),
      title: "30 Day Spot Free Guarantee!",
      description: "Every company that I know of has a guarantee, normally referred to as \u201CSatisfaction Guarant..."
    },
    {
      image: import('../chunks/moving_Bhmrhhe3.mjs'),
      title: "Moving?",
      description: "We have cleaned thousands of empty homes and apartments for tenants, landlords..."
    },
    {
      image: import('../chunks/star_D_sDPGUx.mjs'),
      title: "10 Step Carpet Cleaning Process",
      description: "The Modern Ten-Step Carpet Cleaning Process leaves your carpets cleaner and softer..."
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section id="advantages" class="py-10 md:py-20"> <div class="grid gap-7 sm:grid-cols-2 lg:grid-cols-3"> ${items.map((item) => renderTemplate`<div class="flex flex-col items-center"> ${renderComponent($$result, "Image", $$Image, { "src": item.image, "alt": "advantage", "class": "mb-5", "quality": 100 })} <h2 class="mb-4 text-center text-xl font-bold text-primary sm:text-2xl">${item.title}</h2> <p class="mx-auto mt-auto line-clamp-2 max-w-[400px] text-center sm:text-lg">${item.description}</p> </div>`)} </div> </section>`;
}, "C:/Users/user/Documents/GitHub/astro-cleaning/src/components/Advantages.astro", void 0);

const $$Rooms = createComponent(($$result, $$props, $$slots) => {
  const steps = ["Pre-treatment", "Power Scrub", "Extraction", "Deodorizing", "Grooming"];
  return renderTemplate`${maybeRenderHead()}<section id="room" class="py-10"> <div class="relative flex flex-col overflow-hidden rounded-2xl bg-white p-5 drop-shadow-md md:flex-row md:justify-between"> <div class="lg:py-5 lg:pl-10"> <div class="mb-2 text-3xl text-primary sm:text-4xl">3 Rooms Only</div> <span class="mb-3 block text-5xl font-bold text-primary sm:text-6xl">$99</span> <p>New customers only. Limit 360ft2.</p> <p>Hurry! Expires: November 1th, 2024</p> <a class="transitions-color relative z-10 mt-10 hidden max-w-52 justify-center rounded-lg bg-blue py-3 text-white hover:bg-blue/90 md:flex" href="#">Read more</a> </div> <div class="z-10 mt-5 max-w-full rounded-2xl bg-white p-4 shadow-lg md:mt-0 md:max-w-64 lg:mr-5"> <p class="mb-4 text-lg font-medium text-primaryDark sm:text-xl">10 Step Cleaning Process!</p> <ul class="list-disc pl-5 marker:text-blue/60"> ${steps.map((item) => renderTemplate`<li class="mb-2 text-gray last:mb-0 sm:text-lg">${item}</li>`)} </ul> </div> <a class="z-10 mt-10 flex w-full justify-center self-center rounded-lg bg-blue py-3 text-white md:hidden" href="#">Read more</a> ${renderComponent($$result, "Image", $$Image, { "src": import('../chunks/rooms_CvOV4zFk.mjs'), "quality": 100, "alt": "room", "class": "absolute bottom-0 right-0 h-[300px] object-cover md:h-full" })} </div> </section>`;
}, "C:/Users/user/Documents/GitHub/astro-cleaning/src/components/Rooms.astro", void 0);

const $$Services = createComponent(($$result, $$props, $$slots) => {
  const services = [
    {
      image: import('../chunks/1_C-SLnCaB.mjs'),
      title: "The Best Carpet Cleaning Service",
      description: "Modern Carpet Cleaning of Chico has been providing carpet cleaning services to Chico CA and nearby areas for over 20 years."
    },
    {
      image: import('../chunks/2_DTsqHivs.mjs'),
      title: "Upholstery Cleaning",
      description: "Modern Carpet Cleaning of Chico has been providing carpet cleaning services to Chico CA and nearby areas for over 20 years."
    },
    {
      image: import('../chunks/3_C6H-Qbg0.mjs'),
      title: "Tile & Grout Cleaning",
      description: "Modern Carpet Cleaning of Chico has been providing carpet cleaning services to Chico CA and nearby areas for over 20 years."
    },
    {
      image: import('../chunks/4_CVB_9ggK.mjs'),
      title: "Carpet Repairs and Re-Stretching",
      description: "Modern Carpet Cleaning of Chico has been providing carpet cleaning services to Chico CA and nearby areas for over 20 years."
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section id="services" class="py-10 sm:py-20"> <div class="mb-8 flex items-center justify-between sm:mb-10"> <h2 class="text-3xl font-bold text-primary sm:text-5xl">Services</h2> <div class="embla__controls hidden sm:block"> <div class="embla__buttons flex items-center gap-2"> <button class="embla__button--prev grid size-14 place-items-center rounded-full bg-blue/60 text-white transition-colors disabled:bg-blue/20 disabled:text-blue"> ${renderComponent($$result, "ChevronLeft", ChevronLeft, {})} </button> <button class="embla__button--next grid size-14 place-items-center rounded-full bg-blue/60 text-white transition-colors disabled:bg-blue/20 disabled:text-blue"> ${renderComponent($$result, "ChevronRight", ChevronRight, {})} </button> </div> </div> </div> <div class="embla"> <div class="embla__viewport"> <div class="embla__container flex items-center gap-5 md:gap-8"> ${services.map((item) => renderTemplate`<div class="embla__slide min-w-0 flex-[0_0_90%] sm:flex-[0_0_50%] md:flex-[0_0_35%]"> ${renderComponent($$result, "Image", $$Image, { "src": item.image, "alt": item.title, "class": "mb-5 h-[135px] w-full overflow-hidden rounded-lg object-cover sm:h-[210px]" })} <h3 class="mb-4 text-lg font-bold text-primaryDark sm:text-2xl">${item.title}</h3> <p class="sm:text-lg">${item.description}</p> </div>`)} </div> </div> </div> </section> `;
}, "C:/Users/user/Documents/GitHub/astro-cleaning/src/components/Services.astro", void 0);

const $$Steps = createComponent(($$result, $$props, $$slots) => {
  const steps = ["Specialty stains", "Deodorizer", "Green Certified Neutralizer", "Grooming", "Moving furnitured", "Commercial grade Vacuuming", "Power Scrubbing", "Traffic lane and spot treatments"];
  return renderTemplate`${maybeRenderHead()}<section id="steps" class="flex items-stretch gap-10 py-10"> ${renderComponent($$result, "Image", $$Image, { "src": import('../chunks/steps_BUKfzlRQ.mjs'), "alt": "No Hidden surprise charges!", "class": "hidden lg:block max-w-sm xl:max-w-full object-cover rounded-2xl" })} <div class="flex flex-col items-start gap-5"> <p class="rounded-lg bg-blue/20 px-5 py-2.5 uppercase text-primary">No Hidden surprise charges!</p> <h2 class="text-2xl sm:text-3xl font-bold text-primary">Our 10 Step Residential Price includes:</h2> <ul class="grid sm:grid-cols-2 gap-x-8 gap-y-3 list-disc marker:text-blue/60 pl-5"> ${steps.map((item) => renderTemplate`<li class="text-gray sm:text-lg">${item}</li>`)} </ul> </div> </section>`;
}, "C:/Users/user/Documents/GitHub/astro-cleaning/src/components/Steps.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome to Astro." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Advantages", $$Advantages, {})} ${renderComponent($$result2, "Steps", $$Steps, {})} ${renderComponent($$result2, "Services", $$Services, {})} ${renderComponent($$result2, "Rooms", $$Rooms, {})} ${renderComponent($$result2, "Reasons", $$Reasons, {})} ` })}`;
}, "C:/Users/user/Documents/GitHub/astro-cleaning/src/pages/index.astro", void 0);

const $$file = "C:/Users/user/Documents/GitHub/astro-cleaning/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
