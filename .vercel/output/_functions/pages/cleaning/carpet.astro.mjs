import { c as createComponent, r as renderTemplate, b as renderComponent, d as createAstro, m as maybeRenderHead } from '../../chunks/astro/server_Ba6EjzVo.mjs';
import { $ as $$Layout } from '../../chunks/Layout_DxeixWfl.mjs';
import { $ as $$Image } from '../../chunks/_astro_assets_8oNV4swP.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$Carpet = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Carpet;
  const reasons = [
    {
      title: "Preinspection",
      description: "Our technician will inspect the carpet with you to identify problem areas. We will then give you a reasonable evaluation for expected results."
    },
    {
      title: "Commercial Pre-Vacuum",
      description: "A very important part of the cleaning process. Using commercial grade quality vacuums, we go over your carpet to remove pet dander, fine soil, and loose hairs. Removing these things before the wet cleaning process helps prevent them from sticking to the carpets during extraction."
    },
    {
      title: "Furniture Moving",
      description: "Furniture moving is included in the price. Our technician will move most furniture in your living areas. We move sectional couches, chairs, tables, and other small furniture. Extra heavy items, electronics, and hunting furniture are generally cleaned around. After cleaning, we place foam squares underneath your furniture to protect it during the drying process."
    },
    {
      title: "Prespray",
      description: "A concentrated orange-based cleaning agent is applied to your carpet. This cleaner is designed to loosen soils and help break down oils that are attracting dirt into your carpet."
    },
    {
      title: "Spotting",
      description: "Removing tough stains is our specialty. I have attended the Advanced Stain Removal Course from Carpet Technologies International. All our technicians are trained to remove stubborn stains such as Kool-Aid, blood, coffee, oil, and many other stains. We pride ourselves on being able to remove many stains that others can\u2019t."
    },
    {
      title: "Modern Power Scrubbing",
      description: "This step is probably the most important step in our process. On every carpet we clean, we use a power scrubber to loosen the soil from the carpet and break down stubborn traffic areas. This step is the secret to our success, and we strongly believe every carpet should be scrubbed during the cleaning process."
    },
    {
      title: "Extraction Process",
      description: "After the carpet is scrubbed, this is the rinsing process. Using our powerful van-mounted cleaning units, we rinse the cleaning agents and dirt from your carpet. During this process, we use a specialty rinsing agent that doesn\u2019t add more cleaning agents to your carpet."
    },
    {
      title: "Deodorize",
      description: "One of our final touches to the process. We treat your carpets with a fresh and clean-smelling deodorizer. If you have sensitivities to perfumes, please ask the tech to skip this process."
    },
    {
      title: "Neutralizer",
      description: "A green-certified neutralizer is applied to your carpets as a final step. This neutralizer is registered with the EPA as a safe product for you and your pets. It removes any stick alkali residue from the cleaning process, leaving your carpets in a natural neutral state that will stay clean longer!"
    },
    {
      title: "Carpet Grooming",
      description: "The final step to cleaning is raking your carpet. This step hides the footprints and cleaning strokes from the carpet and gives it a uniform finished look. This step also helps the carpets dry faster by standing all the fibers up."
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome to Astro." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="py-10 md:py-24"> <div class="grid gap-10 md:grid-cols-[auto_auto] lg:grid-cols-[auto_480px]"> <div> <h2 class="mb-6 text-3xl font-bold text-primary">The Best Carpet Cleaning Service in Chico CA!</h2> <p class="mb-3">
Modern Carpet Cleaning of Chico has been providing carpet cleaning services to Chico CA and nearby areas for over 20 years. Our 10 Step Cleaning Process has been designed to get your carpets
          much cleaner than other streamlined processes. Plus: Our green certified neutralizing step will leave your carpets softer and will help them stay cleaner longer.
</p> <p class="mb-3">We can remove difficult stains that other carpet cleaning companies can’t – Even RED!</p> <p>Kool­-Aid, oily, coffee, and even pet stains. We are experts in removing specialty stains.</p> <h3 class="mb-3 md:mb-6  mt-10 text-2xl md:text-3xl font-bold uppercase text-primary">10 step carpet cleaning</h3> <p>Our 10 Step Cleaning Process leaves your carpets clean and soft. They dry faster and stay clean longer!</p> <ul class="mb-5 mt-8"> ${reasons.map((item, index) => renderTemplate`<li class="mb-6 last:mb-0"> <div class="mb-3 flex items-center gap-3"> <span class="grid size-10 place-items-center rounded-full bg-blue/20 font-semibold">${index + 1}</span> <h3 class="text-xl font-semibold text-primary">${item.title}</h3> </div> <p>${item.description}</p> </li>`)} </ul> <h4 class="text-semibold mb-10 text-xl font-semibold text-primaryDark">
A few examples of the great results achieved by our 10 Step Carpet Cleaning Process
</h4> <div class="embla" data-fade> <div class="embla__viewport relative"> <div class="embla__container flex items-center gap-5 md:gap-8"> <div class="embla__slide min-w-0 flex-[0_0_100%]"> ${renderComponent($$result2, "Image", $$Image, { "src": import('../../chunks/process-1_CDBNX1ab.mjs'), "alt": "image", "class": "h-auto w-full overflow-hidden rounded-lg object-cover sm:h-[432px]" })} </div> <div class="embla__slide min-w-0 flex-[0_0_100%]"> ${renderComponent($$result2, "Image", $$Image, { "src": import('../../chunks/hero_nFqRIt-g.mjs'), "alt": "image", "class": "h-auto w-full overflow-hidden rounded-lg object-cover sm:h-[432px]" })} </div> </div> <div class="embla__dots absolute bottom-5 left-1/2 flex -translate-x-1/2 flex-wrap items-center gap-2"></div> </div> </div> </div> <article class="prose prose-headings:text-primary prose-p:leading-6 prose-img:!mt-0 prose-img:w-full prose-headings:mt-0"> <div class="section"> <h2 class="text-2xl">Carpets That Stay Cleaner Longer!</h2> ${renderComponent($$result2, "Image", $$Image, { "src": import('../../chunks/side-1_D3EfrR4L.mjs'), "alt": "image", "class": "rounded-2xl" })} <p>
We get asked on a regular basis why soils come back and carpets get dirty so fast after cleaning. One big reason is the residue from the cheap cleaners that were used to clean the carpet
            in the past. After time, cleaners attract dirt, that is how cleaners work. Not only does cleaner attract dirt, some cheap cleaners specifically leave a residue once water attempts to rinse
            your carpet. This will not allow for effective water rinsing and will attract dirt into your carpet.
</p> <p>
By applying green and natural neutralizer to our rinsing solutions, we are ensuring that no dirt-attracting residue will be left behind. Solid soils that typical cleaners cannot get are
            washed out by the power of our rinse. This is the difference and the reason our carpets stay cleaner longer.
</p> </div> <div class="section"> <h2>Moving?</h2> ${renderComponent($$result2, "Image", $$Image, { "src": import('../../chunks/side-2_CeiEjr2s.mjs'), "alt": "image", "class": "rounded-2xl" })} <p>
We have cleaned thousands of empty homes and apartments for tenants, landlords, and property management companies. We offer full cleaning because these places cannot need our full 10-step
            carpet cleaning process.
</p> <h3>Landlords:</h3> <p>
We have been cleaning move out carpets for over 20 years. We know exactly what landlords are looking for, and we always impress them by demonstrating a level of care that is second to
            none. Plus, our ability to remove difficult stains helps get their rentals ready and rentable within no time. We clean more rentals than anyone in the area. With your permission, we will
            help you achieve the cleanest and best-looking carpets in the area, and make them shine. We look forward to cleaning for you!
</p> <h3>Tenants:</h3> <p>
Get your deposit back - guaranteed! The reason we do this is because we hear stories every day from tenants that their landlord or leasing agency still complains that carpets weren’t
            cleaned right. If you submit our receipt for your cleaning, this will help avoid costly fees. Our company offers a guarantee if you can show your landlord that our cleaning was completed.
            The only exception is if the landlord has a specific pet odor issue.
</p> <p>* To qualify for the guarantee, you must submit the receipt to your landlord and give the opportunity to correct any issues the landlord has. Also, pet odor issues are not guaranteed.</p> </div> <div class="section"> <h2>We love pets!</h2> ${renderComponent($$result2, "Image", $$Image, { "src": import('../../chunks/side-3_DxcBYATP.mjs'), "alt": "image", "class": "rounded-2xl" })} <p>
Here in Chico, pets are a big part of my family just like I am sure they are a big part of yours. There's Great Grandma on carpets, her cats, Mike and kids, with a small dog, and the cat
            has to go under beds to find shelter. Pet stains need to be treated with special enzymes to break down the stain and make the carpet as neutral as possible.
</p> <p>
We also offer an affordable solution, though. We use a product designed with green cleaning to not only remove the stains but also get rid of the odor and bacteria deep in the carpet pile.
            When we're done cleaning, the odor is completely gone and it will smell as fresh as ever, preparing the room for something pleasant again. The carpets will dry fresh and soft with no
            sticky residue.
</p> <p>
This affordable solution can be included for a great price. Please ask one of our staff for details. All of our customers love how their homes smell great for fresh, and did I mention how
            affordable it is?
</p> </div> </article> </div> </div> ` })} `;
}, "C:/Users/user/Documents/GitHub/astro-cleaning/src/pages/cleaning/carpet.astro", void 0);

const $$file = "C:/Users/user/Documents/GitHub/astro-cleaning/src/pages/cleaning/carpet.astro";
const $$url = "/cleaning/carpet";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Carpet,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
