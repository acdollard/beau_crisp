/* empty css                                 */
import { c as createComponent, b as createAstro, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CwOsAfxp.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_BV9oK4Zl.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Contact;
  if (Astro2.request.method === "POST") {
    const formData = await Astro2.request.formData();
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");
    console.log({ name, email, message });
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Contact - Buried In The Bones" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="container mx-auto py-16 px-4 pt-48 min-h-[96vh]"> <div class="max-w-2xl mx-auto mt"> <h1 class="text-6xl font-customFont uppercase text-center mb-12 pt-16">
Contact
</h1> <p class="text-2xl text-gray-800 mb-8 text-left mx-8">
Reach out regarding anything from feedback on the podcast, to inquiries
        about strength and conditioning services, or just to say hello. I'd love
        to hear from you.
</p> <form method="POST" class="space-y-6 bg-zinc-100 p-8 shadow-lg"> <div> <label for="name" class="block text-sm font-medium text-gray-700 mb-1">
Name
</label> <input type="text" id="name" name="name" required class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-rose-500 focus:border-rose-500"> </div> <div> <label for="email" class="block text-sm font-medium text-gray-700 mb-1">
Email
</label> <input type="email" id="email" name="email" required class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-rose-500 focus:border-rose-500"> </div> <div> <label for="message" class="block text-sm font-medium text-gray-700 mb-1">
Message
</label> <textarea id="message" name="message" rows="6" required class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-rose-500 focus:border-rose-500"></textarea> </div> <button type="submit" class="w-full bg-rose-800 hover:bg-rose-700 text-white px-6 py-3 rounded-md transition-colors">
Send Message
</button> </form> </div> </section> ` })}`;
}, "/Users/alexanderdollard/Development/Beau_Crisp/src/pages/contact.astro", void 0);

const $$file = "/Users/alexanderdollard/Development/Beau_Crisp/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
