/* empty css                                 */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_CwOsAfxp.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_BV9oK4Zl.mjs';
export { renderers } from '../renderers.mjs';

const $$Podcast = createComponent(async ($$result, $$props, $$slots) => {
  const authOptions = {
    method: "POST",
    url: "https://accounts.spotify.com/api/token",
    headers: {
      Authorization: "Basic " + Buffer.from(
        "6038ba721d78483e86d2faf556733260:a23d6ce9d14e44558e711dd45a742b8a"
      ).toString("base64"),
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: new URLSearchParams({
      grant_type: "client_credentials"
    }).toString()
  };
  const response = await fetch(authOptions.url, {
    method: authOptions.method,
    headers: authOptions.headers,
    body: authOptions.body
  });
  const data = await response.json();
  const accessToken = data.access_token;
  const podcastEpisodes = await fetch(
    "https://api.spotify.com/v1/shows/6kVyePtw85mqjZvWqqQa7s/episodes",
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    }
  );
  const episodesData = await podcastEpisodes.json();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Podcast - Buried In The Bones" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="min-h-[96vh] pt-48"> <h1 class="text-6xl font-customFont uppercase text-center mb-12 px-12 pt-16">
Podcast
</h1> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4"> ${episodesData.items.map((episode) => renderTemplate`<div class="bg-white p-6 rounded-lg shadow-lg flex flex-col justify-between"> <iframe style="border-radius:12px"${addAttribute(`https://open.spotify.com/embed/episode/${episode.id}/video?utm_source=generator`, "src")} width="100%" height="300" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" class="mb-4"></iframe> <h3 class="text-2xl font-customFont mb-2">${episode.name}</h3> <p class="text-gray-600 mb-4">${episode.description}</p> <div class="flex justify-between items-center"> <span class="text-sm text-gray-500"> ${new Date(episode.release_date).toLocaleDateString()} </span> <a${addAttribute(episode.external_urls.spotify, "href")} target="_blank" rel="noopener noreferrer" class="bg-rose-800 hover:bg-rose-700 text-white px-4 py-2 transition-colors">
Listen In Spotify
</a> </div> </div>`)} </div> </section> ` })}`;
}, "/Users/alexanderdollard/Development/Beau_Crisp/src/pages/podcast.astro", void 0);
const $$file = "/Users/alexanderdollard/Development/Beau_Crisp/src/pages/podcast.astro";
const $$url = "/podcast";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Podcast,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
