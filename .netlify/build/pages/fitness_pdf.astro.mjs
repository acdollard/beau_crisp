/* empty css                                 */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DI8t6tx6.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_DfOInyaX.mjs';
/* empty css                                       */
export { renderers } from '../renderers.mjs';

const $$FitnessPdf = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Free Nutrition Guide - Beau Crisp", "data-astro-cid-k6yxwfmd": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="min-h-[60vh] pt-48 hero-image bg-center" data-astro-cid-k6yxwfmd> <div class="flex flex-col items-end justify-center w-[80%]" data-astro-cid-k6yxwfmd> <h1 class="text-6xl md:text-7xl font-customFont animate-fade-in-left text-floralWhite z-10" data-astro-cid-k6yxwfmd>
Download This FREE Nutrition Guide
</h1> <a href="/nutrition.pdf" download class="inline-block bg-khaki text-floralWhite hover:bg-floralWhite hover:text-ebony px-5 py-3 md:px-7 md:py-5 rounded-sm transition-colors duration-300" data-astro-cid-k6yxwfmd>
Download PDF
</a> </div> </section> <div class="max-w-3xl mx-auto p-4" data-astro-cid-k6yxwfmd> <div class="bg-white shadow-lg rounded-sm overflow-hidden" data-astro-cid-k6yxwfmd> <iframe src="/nutrition.pdf" height="800" class="w-full" title="Free Nutrition Guide" data-astro-cid-k6yxwfmd></iframe> </div> </div> ` })} `;
}, "/Users/alexanderdollard/Development/b2/frontEnd/src/pages/fitness_pdf.astro", void 0);

const $$file = "/Users/alexanderdollard/Development/b2/frontEnd/src/pages/fitness_pdf.astro";
const $$url = "/fitness_pdf";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$FitnessPdf,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
