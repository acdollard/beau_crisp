/* empty css                                    */
import { c as createComponent, b as createAstro, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../../chunks/astro/server_CwOsAfxp.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../../chunks/Layout_BV9oK4Zl.mjs';
import { c as client } from '../../chunks/sanity_B5cqMqjb.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
async function getStaticPaths() {
  const posts = await client.fetch(`
    *[_type == "post"] {
      slug {
        current
      }
    }
  `);
  return posts.map((post) => ({
    params: { slug: post.slug.current }
  }));
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  const post = await client.fetch(
    `
  *[_type == "post" && slug.current == $slug][0] {
    title,
    publishedAt,
    mainImage {
      asset-> {
        _id,
        url
      }
    },
    body[] {
      ...,
      _type == "image" => {
        "url": asset->url
      }
    }
  }
`,
    { slug }
  );
  if (!post) {
    return Astro2.redirect("/404");
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${post.title} - Beau Crisp Blog` }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<article class="max-w-3xl mx-auto"> ${post.mainImage && renderTemplate`<img${addAttribute(post.mainImage.asset.url, "src")}${addAttribute(post.title, "alt")} class="w-full h-64 object-cover rounded-lg mb-8">`} <h1 class="text-4xl font-bold mb-4">${post.title}</h1> <div class="text-gray-600 mb-8"> ${new Date(post.publishedAt).toLocaleDateString()} </div> <div class="prose lg:prose-xl max-w-none"> ${post.body?.map((block) => {
    if (block._type === "block") {
      return renderTemplate`<p class="mb-4">${block.children[0].text}</p>`;
    } else if (block._type === "image" && block.url) {
      return renderTemplate`<img${addAttribute(block.url, "src")} alt="Blog content image" class="my-8 rounded-lg">`;
    }
  })} </div> </article> ` })}`;
}, "/Users/alexanderdollard/Development/Beau_Crisp/src/pages/blog/[slug].astro", void 0);

const $$file = "/Users/alexanderdollard/Development/Beau_Crisp/src/pages/blog/[slug].astro";
const $$url = "/blog/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
