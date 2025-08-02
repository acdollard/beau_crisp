/* empty css                                 */
import { c as createComponent, b as createAstro, r as renderComponent, e as renderScript, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DI8t6tx6.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_DfOInyaX.mjs';
/* empty css                                   */
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
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Contact - Buried In The Bones", "data-astro-cid-uw5kdbxl": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="min-h-[60vh] pt-48 hero-image bg-center" data-astro-cid-uw5kdbxl> <div class="flex flex-col items-end justify-center w-[80%]" data-astro-cid-uw5kdbxl> <h1 class="text-7xl md:text-8xl font-customFont animate-fade-in-left text-floralWhite z-10" data-astro-cid-uw5kdbxl>
Contact
</h1> </div> </section> <section class="container mx-auto pt-24 px-4 max-w-7xl text-center" data-astro-cid-uw5kdbxl> <h2 class="text-2xl md:text-4xl font-customFont text-center mb-12 px-4 md:px-12 text-slate-800 break-words" data-astro-cid-uw5kdbxl>
EMAIL: <span class="text-ebony" data-astro-cid-uw5kdbxl>buriedinthebones@gmail.com</span> </h2> <!-- <p class="text-jet mb-12 font-condensed text-xl max-w-2xl mx-auto">
      If you have questions, feedback, are interested in personal coaching, or
      just want to say hi, let me know by filling out the form below.
    </p>

    <div class="max-w-2xl mx-auto pb-24">
      <form
        method="POST"
        class="space-y-6 bg-floralWhite p-8 border border-khaki shadow-lg rounded-sm text-left"
      >
        <div>
          <label for="name" class="block text-sm font-condensed text-jet mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            class="w-full px-4 py-2 border border-gray-300 rounded-sm focus:ring-rose-500 focus:border-rose-500"
          />
        </div>
        <div>
          <label for="email" class="block text-sm font-condensed text-jet mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            class="w-full px-4 py-2 border border-gray-300 rounded-sm focus:ring-rose-500 focus:border-rose-500"
          />
        </div>
        <div>
          <label
            for="message"
            class="block text-sm font-condensed text-jet mb-1"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="6"
            required
            class="w-full px-4 py-2 border border-gray-300 rounded-sm focus:ring-rose-500 focus:border-rose-500"
          ></textarea>
        </div>
        <button
          type="submit"
          class="w-full bg-ebony hover:bg-ebony text-white px-6 py-3 rounded-sm transition-colors"
        >
          Send Message
        </button>
      </form>
    </div> --> </section> ` })}  ${renderScript($$result, "/Users/alexanderdollard/Development/b2/frontEnd/src/pages/contact.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/alexanderdollard/Development/b2/frontEnd/src/pages/contact.astro", void 0);

const $$file = "/Users/alexanderdollard/Development/b2/frontEnd/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
