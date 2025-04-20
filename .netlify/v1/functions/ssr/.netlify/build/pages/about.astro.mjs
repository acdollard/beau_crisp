/* empty css                                 */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CwOsAfxp.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_BV9oK4Zl.mjs';
export { renderers } from '../renderers.mjs';

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "About - Beau Crisp" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-3xl mx-auto min-h-[96vh] pt-48"> <h1 class="text-6xl font-customFont pt-16 text-center mb-8">
About Beau Crisp
</h1> <div class="prose lg:prose-xl"></div> </div> ` })}`;
}, "/Users/alexanderdollard/Development/Beau_Crisp/src/pages/about.astro", void 0);

const $$file = "/Users/alexanderdollard/Development/Beau_Crisp/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
