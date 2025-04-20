/* empty css                                 */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CwOsAfxp.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_BV9oK4Zl.mjs';
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "404 - Page Not Found" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-xl mx-auto text-center py-16"> <h1 class="text-4xl font-bold mb-4">404 - Page Not Found</h1> <p class="text-gray-600 mb-8">
Sorry, the page you're looking for doesn't exist or has been moved.
</p> <a href="/" class="inline-block bg-rose-700 text-white px-6 py-3 hover:bg-rose-700 uppercase">
Return Home
</a> </div> ` })}`;
}, "/Users/alexanderdollard/Development/Beau_Crisp/src/pages/404.astro", void 0);

const $$file = "/Users/alexanderdollard/Development/Beau_Crisp/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
