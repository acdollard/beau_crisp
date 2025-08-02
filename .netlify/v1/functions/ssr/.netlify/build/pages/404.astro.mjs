/* empty css                                 */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DI8t6tx6.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_DfOInyaX.mjs';
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "404 - Page Not Found" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-xl mx-auto text-center py-16"> <h1 class="text-4xl font-bold mb-4">404 - Page Not Found</h1> <p class="text-gray-600 mb-8">
Sorry, the page you're looking for doesn't exist or has been moved.
</p> <a href="/" class="inline-block bg-ebony text-white px-6 py-3 hover:bg-ebony uppercase rounded-sm">
Return Home
</a> </div> ` })}`;
}, "/Users/alexanderdollard/Development/b2/frontEnd/src/pages/404.astro", void 0);

const $$file = "/Users/alexanderdollard/Development/b2/frontEnd/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
