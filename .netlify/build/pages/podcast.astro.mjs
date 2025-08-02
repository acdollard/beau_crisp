/* empty css                                 */
import { c as createComponent, r as renderComponent, e as renderScript, a as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_DI8t6tx6.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_DfOInyaX.mjs';
/* empty css                                   */
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
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Podcast - Buried In The Bones", "data-astro-cid-2sf3frmg": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="min-h-[60vh] pt-48 hero-image bg-center" data-astro-cid-2sf3frmg> <div class="flex flex-col items-end justify-center w-[80%]" data-astro-cid-2sf3frmg> <h1 class="text-7xl md:text-8xl font-customFont animate-fade-in-left text-floralWhite z-10" data-astro-cid-2sf3frmg>
Podcast
</h1> </div> </section> <section class="container mx-auto py-16 rounded-md bg-floralWhite" data-astro-cid-2sf3frmg> <h2 class="text-6xl font-customFont uppercase text-center mb-12 px-12 text-slate-800" data-astro-cid-2sf3frmg>
Latest Episodes
</h2> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4" data-astro-cid-2sf3frmg> ${episodesData.items.map(
    (episode) => episode && renderTemplate`<div class="bg-white p-6 rounded-sm shadow-lg flex flex-col justify-between" data-astro-cid-2sf3frmg> <iframe style="border-radius:6px"${addAttribute(`https://open.spotify.com/embed/episode/${episode.id}/video?utm_source=generator`, "src")} width="100%" height="300" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" class="mb-4" data-astro-cid-2sf3frmg></iframe> <h3 class="text-2xl font-customFont mb-2" data-astro-cid-2sf3frmg>${episode.name}</h3> <div class="relative" data-astro-cid-2sf3frmg> <p class="text-gray-600 mb-4 overflow-hidden transition-all duration-300 description-text" data-astro-cid-2sf3frmg> ${episode.description} </p> <button class="text-ebony hover:text-ebony text-sm font-medium transition-colors read-more-btn"${addAttribute(episode.description, "data-description")} data-astro-cid-2sf3frmg>
Read More
</button> </div> <div class="flex justify-between items-center mt-auto" data-astro-cid-2sf3frmg> <span class="text-sm text-gray-500" data-astro-cid-2sf3frmg> ${new Date(episode.release_date).toLocaleDateString()} </span> <a${addAttribute(episode.external_urls.spotify, "href")} target="_blank" rel="noopener noreferrer" class="bg-ebony hover:bg-ebony text-white px-4 py-2 transition-colors rounded-sm" data-astro-cid-2sf3frmg>
Listen In Spotify
</a> </div> </div>`
  )} </div> </section> ` })}  ${renderScript($$result, "/Users/alexanderdollard/Development/b2/frontEnd/src/pages/podcast.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/alexanderdollard/Development/b2/frontEnd/src/pages/podcast.astro", void 0);
const $$file = "/Users/alexanderdollard/Development/b2/frontEnd/src/pages/podcast.astro";
const $$url = "/podcast";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Podcast,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
