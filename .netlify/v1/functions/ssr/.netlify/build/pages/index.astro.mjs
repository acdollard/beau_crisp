/* empty css                                 */
import { c as createComponent, r as renderComponent, e as renderScript, a as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_DI8t6tx6.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_DfOInyaX.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_Ce7FpZ-r.mjs';
import { createClient } from '@sanity/client';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const beau_cafe = new Proxy({"src":"/_astro/beau-cafe.Vw2XH2_B.png","width":774,"height":794,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/alexanderdollard/Development/b2/frontEnd/src/assets/beau-cafe.png";
							}
							
							return target[name];
						}
					});

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const client = createClient({
    projectId: "agaaxyz0",
    dataset: "production",
    apiVersion: "2024-03-08",
    useCdn: true
  });
  await client.fetch(`
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
  }[0...3]
`);
  const recentPosts = await client.fetch(`
  *[_type == "post"] | order(publishedAt desc)[0...6] {
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
  console.log(episodesData);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Buried In The Bones", "data-astro-cid-j7pv25f6": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="h-[100vh] hero-image flex items-center justify-end isolate" data-astro-cid-j7pv25f6> <div class="mx-auto absolute w-[100vw] h-[100vh] flex items-center justify-center after:content-[''] after:inset-0 after:absolute after:bg-ebony after:opacity-80 after:mix-blend-multiply after:z-1" data-astro-cid-j7pv25f6> <div class="flex flex-col items-end justify-center w-[80%]" data-astro-cid-j7pv25f6> <h1 class="text-7xl md:text-8xl font-customFont animate-fade-in-left text-floralWhite z-10 text-right" data-astro-cid-j7pv25f6>
Buried In The Bones
</h1> <h2 class="text-floralWhite font-customFont text-4xl md:text-5xl text-right" data-astro-cid-j7pv25f6> <span class="animate-fade-in-delayed-1 inline-block" data-astro-cid-j7pv25f6>Philosophy,</span> <span class="animate-fade-in-delayed-2 inline-block" data-astro-cid-j7pv25f6>fitness,</span> <span class="animate-fade-in-delayed-3 inline-block" data-astro-cid-j7pv25f6>mindset,</span> <span class="animate-fade-in-delayed-4 inline-block" data-astro-cid-j7pv25f6>and real talk.</span> </h2> <div class="flex flex-col md:flex-row gap-4 md:gap-6 animate-fade-in-left z-10 mt-6" data-astro-cid-j7pv25f6> <button class="bg-khaki text-floralWhite hover:bg-floralWhite hover:text-ebony px-4 py-2 md:px-5 md:py-3 transition-colors duration-300 font-condensed mt-6 rounded-sm text-lg" data-astro-cid-j7pv25f6><a href="/podcast" data-astro-cid-j7pv25f6>Listen and Learn</a></button> <button class="bg-khaki text-floralWhite hover:bg-floralWhite hover:text-ebony px-4 py-2 md:px-5 md:py-3 transition-colors duration-300 font-condensed mt-6 rounded-sm text-lg" data-astro-cid-j7pv25f6><a href="/workouts" data-astro-cid-j7pv25f6>Strength & Conditioning Programs</a></button> </div> </div> </div> </section> <section class="min-h-[100vh] h-auto mx-auto py-24 px-4 background-drawing" data-astro-cid-j7pv25f6> <div class="max-w-7xl mx-auto" data-astro-cid-j7pv25f6> <div class="flex flex-col md:flex-row gap-12 md:gap-16" data-astro-cid-j7pv25f6> <div class="w-full md:w-1/2 flex flex-col justify-center items-start gap-12" data-astro-cid-j7pv25f6> <h2 class="text-ebony text-6xl font-customFont" data-astro-cid-j7pv25f6>
In Pursuit of the 3 M's:
<br data-astro-cid-j7pv25f6> <b data-astro-cid-j7pv25f6>Mind, Movement, Meaning.</b> </h2> <p class="text-xl md:text-2xl text-left text-jet md:py-18 pr-6 font-condensed" data-astro-cid-j7pv25f6>
I'm Beau. I'm a strength & conditioning coach and martial artist.
            This is my podcast. I have a BS in Kinesiology, CSCS, FRCms, CFSC,
            TPI L2's and I've worked with some of the highest-performing
            athletes in the world.
<br data-astro-cid-j7pv25f6><br data-astro-cid-j7pv25f6> I started this podcast for normal people in search of self-discovery,
            growth, and adventure. If that sounds like you, then get ready to dig
            deep.
</p> <button class="bg-rawUmber text-floralWhite hover:bg-ebony px-5 py-3 md:px-7 md:py-5 transition-colors duration-300 font-condensed mt-6 rounded-sm text-xl" data-astro-cid-j7pv25f6> <a href="/podcast" data-astro-cid-j7pv25f6>Listen To The Podcast</a> </button> </div> <div class="w-full md:w-1/2 relative" data-astro-cid-j7pv25f6> <div class="absolute h-[90%] w-full bg-ebony rounded-sm transform right-4 md:right-12 bottom-4 md:bottom-18" data-astro-cid-j7pv25f6></div> <div class="absolute h-full w-full bg-rawUmber rounded-sm transform top-4 md:top-8 left-4 md:left-12" data-astro-cid-j7pv25f6></div> ${renderComponent($$result2, "Image", $$Image, { "src": beau_cafe, "alt": "Strength Training", "class": "rounded-sm shadow-xl w-full h-auto relative z-10", "width": 1e3, "height": 1e3, "data-astro-cid-j7pv25f6": true })} </div> </div> </div> </section> <section class="min-h-[100vh] mx-auto py-24 px-4 bg-ebony" data-astro-cid-j7pv25f6> <h2 class="text-6xl font-customFont uppercase text-center mb-12 px-12 text-floralWhite" data-astro-cid-j7pv25f6>
Latest Episodes
</h2> <div class="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 max-w-7xl mx-auto" data-astro-cid-j7pv25f6> ${episodesData.items.slice(0, 4).map(
    (episode, index) => episode && renderTemplate`<div class="bg-floralWhite p-6 rounded-sm flex flex-col justify-between" data-astro-cid-j7pv25f6> <div class="podcast-iframe-container mb-4"${addAttribute(episode.id, "data-episode-id")}${addAttribute(index, "data-index")} data-astro-cid-j7pv25f6> <div class="bg-gray-200 rounded-lg h-[300px] flex items-center justify-center" data-astro-cid-j7pv25f6> <div class="text-center" data-astro-cid-j7pv25f6> <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-ebony mx-auto mb-2" data-astro-cid-j7pv25f6></div> <p class="text-gray-600" data-astro-cid-j7pv25f6>Loading podcast...</p> </div> </div> </div> <h3 class="text-2xl font-customFont mb-2" data-astro-cid-j7pv25f6>${episode.name}</h3> <p class="text-gray-600 mb-4 line-clamp-3 font-condensed" data-astro-cid-j7pv25f6> ${episode.description} </p> <div class="flex justify-between items-center" data-astro-cid-j7pv25f6> <span class="text-sm text-gray-500" data-astro-cid-j7pv25f6> ${new Date(episode.release_date).toLocaleDateString()} </span> <a${addAttribute(episode.external_urls.spotify, "href")} target="_blank" rel="noopener noreferrer" class="bg-ebony hover:shadow-lg text-white px-4 py-2 transition-colors rounded-sm" data-astro-cid-j7pv25f6>
Listen In Spotify
</a> </div> </div>`
  )} </div> <div class="flex justify-center h-100" data-astro-cid-j7pv25f6> <button class="bg-floralWhite hover:shadow-lg text-ebony hover:ebony text-xl px-6 py-4 mt-12 transition-colors duration-200 rounded-sm" data-astro-cid-j7pv25f6> <a href="/podcast" data-astro-cid-j7pv25f6>See All Episodes</a> </button> </div> </section> <section class="container mx-auto py-24 px-4 bg-medusa" data-astro-cid-j7pv25f6> <h2 class="text-6xl font-customFont uppercase text-center mb-12 px-12 text-jet" data-astro-cid-j7pv25f6>
Recent Writing
</h2> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4" data-astro-cid-j7pv25f6> ${recentPosts.map((post) => renderTemplate`<article class="bg-ebony p-6 rounded-sm shadow-lg hover:shadow-xl transition-shadow duration-300" data-astro-cid-j7pv25f6> ${post.mainImage && renderTemplate`<img${addAttribute(post.mainImage.asset.url, "src")}${addAttribute(post.title, "alt")} class="w-full h-48 object-cover rounded-sm mb-4 text-floralWhite" data-astro-cid-j7pv25f6>`} <h3 class="text-2xl font-customFont mb-2 text-floralWhite" data-astro-cid-j7pv25f6> <a${addAttribute(`/blog/${post.slug.current}`, "href")} class="hover:text-ebony transition-colors" data-astro-cid-j7pv25f6> ${post.title} </a> </h3> <p class="text-floralWhite mb-4" data-astro-cid-j7pv25f6> ${new Date(post.publishedAt).toLocaleDateString()} </p> ${post.excerpt && renderTemplate`<p class="text-floralWhite mb-4 line-clamp-3" data-astro-cid-j7pv25f6>${post.excerpt}</p>`} <a${addAttribute(`/blog/${post.slug.current}`, "href")} class="inline-block bg-floralWhite hover:shadow-lg text-ebony px-4 py-2 rounded-sm transition-colors" data-astro-cid-j7pv25f6>
Read More
</a> </article>`)} </div> <div class="flex justify-center mt-12" data-astro-cid-j7pv25f6> <a href="/writing" class="bg-ebony hover:bg-ebony text-white px-6 py-3 rounded-sm transition-colors duration-300" data-astro-cid-j7pv25f6>
View All Writing
</a> </div> </section> ` })}  ${renderScript($$result, "/Users/alexanderdollard/Development/b2/frontEnd/src/pages/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/alexanderdollard/Development/b2/frontEnd/src/pages/index.astro", void 0);
const $$file = "/Users/alexanderdollard/Development/b2/frontEnd/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
