import { c as createComponent, b as createAstro, d as addAttribute, f as renderHead, r as renderComponent, g as renderSlot, e as renderScript, a as renderTemplate } from './astro/server_CwOsAfxp.mjs';
import 'kleur/colors';
import 'html-escaper';
/* empty css                         */
import { $ as $$Image } from './_astro_assets_PshMI54l.mjs';

const logo = new Proxy({"src":"/_astro/buried1.uCFadJ5u.png","width":351,"height":192,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/alexanderdollard/Development/Beau_Crisp/src/assets/buried1.png";
							}
							
							return target[name];
						}
					});

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en" data-astro-cid-sckkx6r4> <head><meta charset="UTF-8"><meta name="description" content="Beau Crisp - Strength & Conditioning Coach"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Bebas+Neue:wght@300;400&display=swap" rel="stylesheet"><title>${title}</title>${renderHead()}</head> <body class="min-h-screen" data-astro-cid-sckkx6r4> <header class="bg-stone-200 fixed top-0 left-0 right-0 z-50 shadow font-customFont text-2xl tracking-wide" data-astro-cid-sckkx6r4> <nav class="container mx-auto px-4 py-4" data-astro-cid-sckkx6r4> <div class="flex justify-between items-center" data-astro-cid-sckkx6r4> <a href="/" class="text-xl font-bold text-stone-300" data-astro-cid-sckkx6r4>${renderComponent($$result, "Image", $$Image, { "src": logo, "alt": "Beau Crisp Logo", "width": 150, "data-astro-cid-sckkx6r4": true })}</a> <!-- Mobile menu button --> <button id="mobile-menu-button" class="md:hidden text-slate-800 transition-transform duration-200" aria-label="Toggle menu" data-astro-cid-sckkx6r4> <svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-sckkx6r4> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" data-astro-cid-sckkx6r4></path> </svg> </button> <!-- Desktop menu --> <div class="hidden md:flex space-x-8" data-astro-cid-sckkx6r4> <a href="/" class="text-zinc-800 hover:text-rose-600 transition-colors duration-200 text-3xl" data-astro-cid-sckkx6r4>Home</a> <a href="/podcast" class="text-zinc-800 hover:text-rose-600 transition-colors duration-200 text-3xl" data-astro-cid-sckkx6r4>Podcast</a> <a href="/writing" class="text-zinc-800 hover:text-rose-600 transition-colors duration-200 text-3xl" data-astro-cid-sckkx6r4>Writing</a> <a href="/about" class="text-zinc-800 hover:text-rose-600 transition-colors duration-200 text-3xl" data-astro-cid-sckkx6r4>About</a> <a href="/contact" class="text-zinc-800 hover:text-rose-600 transition-colors duration-200 text-3xl" data-astro-cid-sckkx6r4>Contact</a> </div> </div> <!-- Mobile menu --> <div id="mobile-menu" class="hidden md:hidden mt-4 space-y-4 transform transition-all duration-300 ease-in-out" data-astro-cid-sckkx6r4> <a href="/" class="block text-zinc-800 hover:text-rose-600 transition-colors duration-200" data-astro-cid-sckkx6r4>Home</a> <a href="/podcast" class="block text-zinc-800 hover:text-rose-600 transition-colors duration-200" data-astro-cid-sckkx6r4>Podcast</a> <a href="/writing" class="block text-zinc-800 hover:text-rose-600 transition-colors duration-200" data-astro-cid-sckkx6r4>Writing</a> <a href="/about" class="block text-zinc-800 hover:text-rose-600 transition-colors duration-200" data-astro-cid-sckkx6r4>About</a> <a href="/contact" class="block text-zinc-800 hover:text-rose-600 transition-colors duration-200" data-astro-cid-sckkx6r4>Contact</a> </div> </nav> </header> <main class="mx-auto" data-astro-cid-sckkx6r4> ${renderSlot($$result, $$slots["default"])} </main> <footer class="bg-stone-200 mt-auto" data-astro-cid-sckkx6r4> <div class="container mx-auto px-4 py-6 text-center" data-astro-cid-sckkx6r4> <p data-astro-cid-sckkx6r4>
&copy; ${(/* @__PURE__ */ new Date()).getFullYear()} Buried In The Bones. All rights reserved.
</p> </div> </footer> ${renderScript($$result, "/Users/alexanderdollard/Development/Beau_Crisp/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts")} </body></html>`;
}, "/Users/alexanderdollard/Development/Beau_Crisp/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
