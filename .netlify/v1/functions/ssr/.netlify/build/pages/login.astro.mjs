/* empty css                                 */
import { c as createComponent, r as renderComponent, e as renderScript, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CwOsAfxp.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_BV9oK4Zl.mjs';
export { renderers } from '../renderers.mjs';

const $$Login = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Login - Beau Crisp" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-md mx-auto mt-8"> <div class="bg-white p-8 rounded-lg shadow"> <h1 class="text-2xl font-bold mb-6">Login</h1> <form id="login-form" class="space-y-4"> <div> <label for="email" class="block text-sm font-medium text-gray-700">Email</label> <input type="email" id="email" name="email" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"> </div> <div> <label for="password" class="block text-sm font-medium text-gray-700">Password</label> <input type="password" id="password" name="password" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"> </div> <div id="error-message" class="text-red-500 text-sm hidden"></div> <button type="submit" class="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
Sign In
</button> </form> <div class="mt-4 text-center"> <p class="text-sm text-gray-600">
Don't have an account?${" "} <a href="/register" class="text-blue-600 hover:text-blue-700">
Sign up
</a> </p> </div> </div> </div> ` })} ${renderScript($$result, "/Users/alexanderdollard/Development/Beau_Crisp/src/pages/login.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/alexanderdollard/Development/Beau_Crisp/src/pages/login.astro", void 0);

const $$file = "/Users/alexanderdollard/Development/Beau_Crisp/src/pages/login.astro";
const $$url = "/login";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Login,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
