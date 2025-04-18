/* empty css                                 */
import { c as createComponent, r as renderComponent, a as renderTemplate, d as addAttribute, m as maybeRenderHead } from '../chunks/astro/server_CwOsAfxp.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_BV9oK4Zl.mjs';
import { createClient } from '@sanity/client';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
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
  console.log(data);
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
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Beau Crisp - Strength & Conditioning" }, { "default": async ($$result2) => renderTemplate(_a || (_a = __template([" ", '<section class="h-[90vh] bg-hero-image-2 bg-bottom bg-cover flex flex-col justify-center"> <div class="flex flex-col items-center justify-center"> <div class="h-[44px] sm:h-[66px] md:h-[115px]"> <h1 class="text-4xl sm:text-6xl md:text-8xl text-center font-customFont text-slate-200 text-shadow-lg px-4 pt-8"> <a href="" class="typewrite" data-period="2000" data-type="[&quot;BURIED IN THE BONES. . . &quot;, &quot;MOVE OR EXPIRE. . . &quot;, &quot;COMPLACENCY IS EVIL. . . &quot;]"> <span class="wrap"></span> </a> </h1> </div> <h2 class="text-center text-xl sm:text-2xl md:text-4xl text-slate-200 my-4 px-4 text-shadow-lg pb-12 pt-8">\nTraining For Comprehensive Strength.\n<br>Writing For A Comprehensive Mind.\n</h2> <button class="bg-rose-800 hover:bg-rose-700 text-white hover:text-white px-6 py-4 transition-colors duration-200 shadow-lg text-2xl"> <a href="/contact">Get Strong</a> </button> </div> </section> <section class="container mx-auto pb-16 px-8"> <h2 class="sm:text-4xl md:text-6xl font-customFont uppercase text-center px-12 text-slate-800 text-shadow-sm py-24">\nBuried In The Bones is a Podcast about the <br><span class="text-rose-700 text-shadow-lg">Philosophy of Effort.</span> </h2> </section> <section class="container mx-auto py-16 bg-stone-100"> <h2 class="text-6xl font-customFont uppercase text-center mb-12 px-12 text-slate-800">\nLatest Episodes\n</h2> <div class="grid grid-cols-1 md:grid-cols-2 gap-8 px-4"> ', ` </div> <div class="flex justify-center h-100"> <button class="bg-rose-800 hover:bg-rose-700 hover:shadow-lg text-white hover:text-white text-xl px-6 py-4 mt-12 transition-colors duration-200"> <a href="/podcast">See All Episodes</a> </button> </div> </section> <section class="container mx-auto py-16"></section> <script type="text/javascript">
    const TxtType = function (el, toRotate, period) {
      this.toRotate = toRotate;
      this.el = el;
      this.loopNum = 0;
      this.period = parseInt(period, 10) || 2000;
      this.txt = "";
      this.tick();
      this.isDeleting = false;
    };

    TxtType.prototype.tick = function () {
      let i = this.loopNum % this.toRotate.length;
      let fullTxt = this.toRotate[i];

      if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
      } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
      }

      this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

      let that = this;
      let delta = 200 - Math.random() * 100;

      if (this.isDeleting) {
        delta /= 2;
      }

      if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
      } else if (this.isDeleting && this.txt === "") {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
      }

      setTimeout(function () {
        that.tick();
      }, delta);
    };

    window.onload = function () {
      const elements = document.getElementsByClassName("typewrite");
      for (let i = 0; i < elements.length; i++) {
        const toRotate = elements[i].getAttribute("data-type");
        const period = elements[i].getAttribute("data-period");
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
      }
      // INJECT CSS
      var css = document.createElement("style");
      css.type = "text/css";
      css.innerHTML =
        ".typewrite > .wrap { border-right: 0.08em solid #27272a;";
      document.body.appendChild(css);
    };
  </script> `])), maybeRenderHead(), episodesData.items.slice(0, 4).map((episode) => renderTemplate`<div class="bg-white p-6 rounded-lg shadow-lg flex flex-col justify-between"> <iframe style="border-radius:12px"${addAttribute(`https://open.spotify.com/embed/episode/${episode.id}/video?utm_source=generator`, "src")} width="100%" height="300" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" class="mb-4"></iframe> <h3 class="text-2xl font-customFont mb-2">${episode.name}</h3> <p class="text-gray-600 mb-4">${episode.description}</p> <div class="flex justify-between items-center"> <span class="text-sm text-gray-500"> ${new Date(episode.release_date).toLocaleDateString()} </span> <a${addAttribute(episode.external_urls.spotify, "href")} target="_blank" rel="noopener noreferrer" class="bg-rose-800 hover:bg-rose-700 text-white px-4 py-2 transition-colors">
Listen In Spotify
</a> </div> </div>`)) })}`;
}, "/Users/alexanderdollard/Development/Beau_Crisp/src/pages/index.astro", void 0);
const $$file = "/Users/alexanderdollard/Development/Beau_Crisp/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
