/* empty css                                 */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_CwOsAfxp.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_BV9oK4Zl.mjs';
import { createClient } from '@sanity/client';
export { renderers } from '../renderers.mjs';

const $$Writing = createComponent(async ($$result, $$props, $$slots) => {
  const client = createClient({
    projectId: "agaaxyz0",
    dataset: "production",
    apiVersion: "2024-03-08",
    useCdn: true
  });
  const posts = await client.fetch(`
  *[_type == "post"] | order(publishedAt desc) {
    title,
    slug,
    publishedAt,
    excerpt,
    mainImage {
      asset-> {
        _id,
        url
      }
    }
  }
`);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Blog - Beau Crisp" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="min-h-[96vh] pt-48"> <div class="mx-auto"> <h1 class="text-6xl font-customFont mb-8 pt-16 text-center">Writing</h1> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4"> ${posts.map((post) => renderTemplate`<article class="bg-stone-200 p-6 rounded-lg shadow"> ${post.mainImage && renderTemplate`<img${addAttribute(post.mainImage.asset.url, "src")}${addAttribute(post.title, "alt")} class="w-full h-48 object-cover rounded-lg mb-4">`} <h2 class="text-3xl font-customFont mb-2"> <a${addAttribute(`/blog/${post.slug.current}`, "href")} class="hover:text-rose-600"> ${post.title} </a> </h2> <p class="text-gray-600 mb-4"> ${new Date(post.publishedAt).toLocaleDateString()} </p> ${post.excerpt && renderTemplate`<p class="text-gray-700">${post.excerpt}</p>`} <button class="bg-rose-700 hover:bg-rose-600 text-white px-4 py-2 mt-4 uppercase"> <a${addAttribute(`/blog/${post.slug.current}`, "href")}>Read More</a> </button> </article>`)} </div> </div> </section> ` })}`;
}, "/Users/alexanderdollard/Development/Beau_Crisp/src/pages/writing.astro", void 0);

const $$file = "/Users/alexanderdollard/Development/Beau_Crisp/src/pages/writing.astro";
const $$url = "/writing";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Writing,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
