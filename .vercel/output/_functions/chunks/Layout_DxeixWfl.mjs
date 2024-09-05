import { c as createComponent, r as renderTemplate, m as maybeRenderHead, b as renderComponent, g as addAttribute, d as createAstro, h as renderHead, a as renderSlot } from './astro/server_Ba6EjzVo.mjs';
/* empty css                          */
import { $ as $$Image } from './_astro_assets_8oNV4swP.mjs';
import { Menu, ChevronDown, Phone, MapPin, PhoneCall, Mail } from 'lucide-react';
import { jsx, jsxs } from 'react/jsx-runtime';
import * as React from 'react';
import * as SheetPrimitive from '@radix-ui/react-dialog';
import { Cross2Icon, ChevronDownIcon } from '@radix-ui/react-icons';
import { cva } from 'class-variance-authority';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import * as AccordionPrimitive from '@radix-ui/react-accordion';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const Sheet = SheetPrimitive.Root;
const SheetTrigger = SheetPrimitive.Trigger;
const SheetPortal = SheetPrimitive.Portal;
const SheetOverlay = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SheetPrimitive.Overlay,
  {
    className: cn("fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
    ...props,
    ref
  }
));
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName;
const sheetVariants = cva(
  "fixed z-50 gap-4 bg-white pt-3 px-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
        right: "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
      }
    },
    defaultVariants: {
      side: "right"
    }
  }
);
const SheetContent = React.forwardRef(({ side = "right", className, children, ...props }, ref) => /* @__PURE__ */ jsxs(SheetPortal, { children: [
  /* @__PURE__ */ jsx(SheetOverlay, {}),
  /* @__PURE__ */ jsxs(SheetPrimitive.Content, { ref, className: cn(sheetVariants({ side }), className), ...props, children: [
    /* @__PURE__ */ jsxs(SheetPrimitive.Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-neutral-950 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-neutral-100", children: [
      /* @__PURE__ */ jsx(Cross2Icon, { className: "h-4 w-4" }),
      /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Close" })
    ] }),
    children
  ] })
] }));
SheetContent.displayName = SheetPrimitive.Content.displayName;
const SheetHeader = ({ className, ...props }) => /* @__PURE__ */ jsx("div", { className: cn("flex flex-col", className), ...props });
SheetHeader.displayName = "SheetHeader";
const SheetTitle = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(SheetPrimitive.Title, { ref, className: cn("text-lg font-semibold text-neutral-950", className), ...props }));
SheetTitle.displayName = SheetPrimitive.Title.displayName;
const SheetDescription = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(SheetPrimitive.Description, { ref, className: cn("text-sm text-neutral-500", className), ...props }));
SheetDescription.displayName = SheetPrimitive.Description.displayName;

const Accordion = AccordionPrimitive.Root;
const AccordionItem = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(AccordionPrimitive.Item, { ref, className: cn(className), ...props }));
AccordionItem.displayName = "AccordionItem";
const AccordionTrigger = React.forwardRef(
  ({ className, children, ...props }, ref) => /* @__PURE__ */ jsx(AccordionPrimitive.Header, { className: "flex", children: /* @__PURE__ */ jsxs(AccordionPrimitive.Trigger, { ref, className: cn("flex font-normal items-center gap-2 text-xl transition-transform hover:underline [&[data-state=open]>svg]:rotate-180", className), ...props, children: [
    children,
    /* @__PURE__ */ jsx(ChevronDownIcon, { className: "size-5 shrink-0 text-primary transition-transform duration-200" })
  ] }) })
);
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;
const AccordionContent = React.forwardRef(
  ({ className, children, ...props }, ref) => /* @__PURE__ */ jsx(AccordionPrimitive.Content, { ref, className: "data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm", ...props, children: /* @__PURE__ */ jsx("div", { className: cn("py-4", className), children }) })
);
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

const items = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services", dropdown: true },
  { label: "Pricing", href: "/cleaning" },
  { label: "Contact", href: "/cleaning" }
];
function MobileMenu({ children }) {
  return /* @__PURE__ */ jsxs(Sheet, { children: [
    /* @__PURE__ */ jsx(SheetTrigger, { className: "ml-5 grid size-10 place-items-center rounded-lg bg-blue/20 text-primary lg:hidden", children: /* @__PURE__ */ jsx(Menu, {}) }),
    /* @__PURE__ */ jsxs(SheetContent, { children: [
      /* @__PURE__ */ jsx(SheetHeader, { className: "mb-10", children }),
      /* @__PURE__ */ jsx("ul", { children: items.map(
        (item, index) => item.label.toLowerCase() === "services" ? /* @__PURE__ */ jsx(Accordion, { type: "single", collapsible: true, className: "mb-4", children: /* @__PURE__ */ jsxs(AccordionItem, { value: "item-1", children: [
          /* @__PURE__ */ jsx(AccordionTrigger, { className: '"text-xl uppercase text-primary', children: item.label }),
          /* @__PURE__ */ jsx(AccordionContent, { children: /* @__PURE__ */ jsxs("ul", { children: [
            /* @__PURE__ */ jsx("li", { className: "mb-3 text-base text-primary", children: /* @__PURE__ */ jsx("a", { href: "#", children: "Carpet Cleaning" }) }),
            /* @__PURE__ */ jsx("li", { className: "mb-3 text-base text-primary", children: /* @__PURE__ */ jsx("a", { href: "#", children: "Upholstery Cleaning" }) }),
            /* @__PURE__ */ jsx("li", { className: "mb-3 text-base text-primary", children: /* @__PURE__ */ jsx("a", { href: "#", children: "Tile & Grout Cleaning" }) }),
            /* @__PURE__ */ jsx("li", { className: "text-base text-primary", children: /* @__PURE__ */ jsxs("a", { href: "#", children: [
              "Carpet Repairs and ",
              /* @__PURE__ */ jsx("br", {}),
              " Re-Stretching"
            ] }) })
          ] }) })
        ] }) }, index) : /* @__PURE__ */ jsx("li", { className: "mb-4 text-xl uppercase text-primary", children: item.label }, index)
      ) })
    ] })
  ] });
}

const $$Astro$1 = createAstro();
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Header;
  let { pathname } = Astro2.url;
  return renderTemplate`${maybeRenderHead()}<header class="sticky top-0 z-50 border-b border-black/20 bg-white py-4"> <div class="container"> <div class="flex items-center justify-between"> <a href="/" class="flex gap-3"> ${renderComponent($$result, "Image", $$Image, { "src": import('./logo_C1wTzaHJ.mjs'), "alt": "logo" })} <div class="flex flex-col"> <span class="text-2xl font-extrabold uppercase text-primary">Modern</span> <p class="text-sm text-primary">Carpet Cleaning</p> </div> </a> <nav class="hidden lg:block"> <ul class="flex items-center justify-between"> <li${addAttribute(["rounded-full px-4 py-1 hover:text-primary", { "bg-[#4B94F733]": pathname === "/" }], "class:list")}> <a href="/">Home</a> </li> <li${addAttribute(["rounded-full px-4 py-1 hover:text-primary", { "bg-[#4B94F733]": pathname === "/pricing" }], "class:list")}> <a href="/pricing">Pricing</a> </li> <li${addAttribute(["rounded-full px-4 py-1 hover:text-primary", { "bg-[#4B94F733]": pathname === "/contact" }], "class:list")}> <a href="/contact">Contact</a> </li> <li class="relative"> <button class="dropdown-parent relative flex items-center gap-1 rounded-full px-4 py-1 hover:text-primary">Services ${renderComponent($$result, "ChevronDown", ChevronDown, { "size": 18 })}</button> <div class="dropdown invisible absolute left-0 top-full w-[340px] rounded-2xl border border-[#EAEDF0] bg-white px-6 py-5 opacity-0 drop-shadow-sm"> <ul> <li class="mb-1 hover:text-primary"><a href="/cleaning/capret">Carpet Cleaning</a></li> <li class="mb-1 hover:text-primary"><a href="/cleaning/tile-grout">Upholstery Cleaning</a></li> <li class="mb-1 hover:text-primary"><a href="/cleaning/upholstery">Tile & Grout Cleaning</a></li> <li class="hover:text-primary"><a href="#">Carpet Repairs and Re-Stretching</a></li> </ul> </div> </li> </ul> </nav> <div class="flex items-center"> <a href="tel:+13233300262" class="relative flex items-center gap-2 text-lg font-semibold text-blue hover:scale-105 transition-transform"> ${renderComponent($$result, "Phone", Phone, { "size": 25 })}<span class="hidden sm:block">+1 (323)-330-0262</span> <span class="absolute -bottom-5 right-0 hidden text-sm sm:block">Call for a Free Quote!</span> </a> ${renderComponent($$result, "MobileMenu", MobileMenu, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/user/Documents/GitHub/astro-cleaning/src/components/common/MobileMenu", "client:component-export": "MobileMenu" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Image", $$Image, { "src": import('./logo_C1wTzaHJ.mjs'), "alt": "logo" })} ` })} </div> </div> </div> </header> `;
}, "C:/Users/user/Documents/GitHub/astro-cleaning/src/components/common/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const items = [
    { label: "Home", href: "/" },
    { label: "Carpet Cleaning", href: "/cleaning" },
    { label: "Upholstery Cleaning", href: "/cleaning" },
    { label: "Tile & Grout Cleaning", href: "/cleaning" },
    { label: "Carpet Repairs and Re-Stretching", href: "/cleaning" },
    { label: "Pricing", href: "/cleaning" },
    { label: "Contact", href: "/cleaning" }
  ];
  return renderTemplate`${maybeRenderHead()}<footer> <div class="bg-primary py-10"> <div class="container"> <div class="flex flex-col items-start justify-between gap-10 lg:flex-row"> <div> <a href="/" class="mb-5 flex gap-3"> ${renderComponent($$result, "Image", $$Image, { "src": import('./logo_C1wTzaHJ.mjs'), "alt": "logo" })} <div class="flex flex-col"> <span class="text-2xl font-extrabold uppercase text-white">Modern</span> <p class="text-sm text-white">Carpet Cleaning</p> </div> </a> <p class="mb-10 text-white/80">Modern Carpet Cleaning Chico</p> <div class="grid gap-4"> <a href="#" class="flex items-center gap-3 transition-colors  text-white hover:text-blue"> ${renderComponent($$result, "MapPin", MapPin, {})} <p class="text-white">562 Manzanita Ave #11, Chico, CA.</p> </a> <a href="#" class="flex items-center gap-3 transition-colors  text-white hover:text-blue"> ${renderComponent($$result, "PhoneCall", PhoneCall, {})} <span>+1 (323)-330-0262</span> </a> <a href="#" class="flex items-center gap-3 transition-colors  text-white hover:text-blue"> ${renderComponent($$result, "Mail", Mail, {})} <span>info@carpetcleaningchico.com</span> </a> </div> </div> <div class="flex w-full flex-col gap-5 sm:w-auto"> <a href="#" class="order-2 block w-full rounded bg-white py-3 text-center text-lg text-primary transition-colors hover:bg-blue hover:text-white lg:-order-1 lg:mb-10 lg:ml-auto lg:w-[250px]">
Call
</a> <ul class="grid max-w-fit gap-x-10 gap-y-5 sm:grid-cols-[auto_auto]"> ${items.map((item) => renderTemplate`<li class="text-white transition-colors hover:text-blue"> <a${addAttribute(item.href, "href")}>${item.label}</a> </li>`)} </ul> </div> </div> </div> </div> <p class="p-2 text-center text-sm text-primaryDark sm:text-base">© Copyright 2024 Modern Carpet Cleaning · All Rights Reserved ·</p> </footer>`;
}, "C:/Users/user/Documents/GitHub/astro-cleaning/src/components/common/Footer.astro", void 0);

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="flex flex-col justify-between gap-10 rounded-2xl bg-primary p-4 lg:flex-row"> <div class="flex flex-col items-start gap-5 lg:p-4"> <h1 class="max-w-lg text-2xl font-extrabold uppercase text-white md:text-4xl">Call Now to Schedule Your Free In Home Estimate!</h1> <a href="tel:+13233300262" class="text-xl font-semibold text-blue hover:text-white transition-colors md:text-3xl lg:mt-auto">+1 (323)-330-0262</a> </div> ${renderComponent($$result, "Image", $$Image, { "src": import('./hero_nFqRIt-g.mjs'), "class": "w-full object-cover rounded-2xl lg:max-w-[550px]", "alt": "hero" })} </section>`;
}, "C:/Users/user/Documents/GitHub/astro-cleaning/src/components/Hero.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body class="bg-[#F5F8FB]"> ${renderComponent($$result, "Header", $$Header, {})} <main class="overflow-x-clip pt-10"> <div class="container"> ${renderComponent($$result, "Hero", $$Hero, {})} ${renderSlot($$result, $$slots["default"])} </div> </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "C:/Users/user/Documents/GitHub/astro-cleaning/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
