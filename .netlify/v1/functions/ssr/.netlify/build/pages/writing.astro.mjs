/* empty css                                 */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_DI8t6tx6.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_DfOInyaX.mjs';
import { createClient } from '@sanity/client';
/* empty css                                   */
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
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Writing - Buried In The Bones", "data-astro-cid-fiz4ill5": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="min-h-[60vh] pt-48 hero-image bg-center" data-astro-cid-fiz4ill5> <div class="flex flex-col items-end justify-center w-[80%]" data-astro-cid-fiz4ill5> <h1 class="text-7xl md:text-8xl font-customFont animate-fade-in-left text-floralWhite z-10" data-astro-cid-fiz4ill5>
Writing
</h1> </div> </section> <section class="container mx-auto py-24 px-4 bg-floralWhite" data-astro-cid-fiz4ill5> <h2 class="text-6xl font-customFont uppercase text-center mb-12 px-12 text-jet" data-astro-cid-fiz4ill5>
All Posts
</h2> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4" data-astro-cid-fiz4ill5> ${posts.map((post) => renderTemplate`<article class="bg-ebony p-6 rounded-sm shadow-lg hover:shadow-xl transition-shadow text-floralWhite" data-astro-cid-fiz4ill5> ${post.mainImage && renderTemplate`<img${addAttribute(post.mainImage.asset.url, "src")}${addAttribute(post.title, "alt")} class="w-full h-48 object-cover rounded-sm mb-4" data-astro-cid-fiz4ill5>`} <h3 class="text-2xl font-customFont mb-2" data-astro-cid-fiz4ill5> <a${addAttribute(`/blog/${post.slug.current}`, "href")} class="hover:text-ebony transition-colors" data-astro-cid-fiz4ill5> ${post.title} </a> </h3> <p class="text-floralWhite mb-4" data-astro-cid-fiz4ill5> ${new Date(post.publishedAt).toLocaleDateString()} </p> ${post.excerpt && renderTemplate`<p class="text-floralWhite mb-4 line-clamp-3" data-astro-cid-fiz4ill5>${post.excerpt}</p>`} <a${addAttribute(`/blog/${post.slug.current}`, "href")} class="inline-block bg-floralWhite hover:shadow-lg text-ebony px-4 py-2 rounded-sm transition-colors" data-astro-cid-fiz4ill5>
Read More
</a> </article>`)} </div> </section> ` })} `;
}, "/Users/alexanderdollard/Development/b2/frontEnd/src/pages/writing.astro", void 0);

const $$file = "/Users/alexanderdollard/Development/b2/frontEnd/src/pages/writing.astro";
const $$url = "/writing";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Writing,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
