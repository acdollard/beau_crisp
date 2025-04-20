/* empty css                                 */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_CwOsAfxp.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_BV9oK4Zl.mjs';
import { createClient } from '@sanity/client';
export { renderers } from '../renderers.mjs';

const $$Workouts = createComponent(async ($$result, $$props, $$slots) => {
  const client = createClient({
    projectId: "agaaxyz0",
    dataset: "production",
    apiVersion: "2024-03-08",
    useCdn: true
  });
  const workoutPlans = await client.fetch(`
  *[_type == "workoutPlan"] | order(startDate desc) {
    title,
    slug,
    startDate,
    endDate,
    description,
    client-> {
      name
    }
  }
`);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Workout Plans - Beau Crisp" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-4xl mx-auto min-h-[96vh] pt-48"> <div class="flex justify-between items-center mb-8"> <h1 class="text-4xl font-bold">Workout Plans</h1> <a href="/workouts/new" class="bg-rose-700 text-white px-4 py-2 hover:bg-rose-600">
Create New Plan
</a> </div> <div class="grid gap-6"> ${workoutPlans.map((plan) => renderTemplate`<div class="bg-white p-6 rounded-lg shadow"> <div class="flex justify-between items-start"> <div> <h2 class="text-2xl font-bold mb-2"> <a${addAttribute(`/workouts/${plan.slug.current}`, "href")} class="hover:text-blue-600"> ${plan.title} </a> </h2> <p class="text-gray-600 mb-2">Client: ${plan.client?.name}</p> <p class="text-gray-600 mb-4"> ${new Date(plan.startDate).toLocaleDateString()} -
${plan.endDate ? new Date(plan.endDate).toLocaleDateString() : "Ongoing"} </p> </div> <div class="space-x-2"> <a${addAttribute(`/workouts/${plan.slug.current}/edit`, "href")} class="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded hover:bg-gray-200">
Edit
</a> </div> </div> ${plan.description && renderTemplate`<p class="text-gray-700 mt-4">${plan.description}</p>`} </div>`)} </div> </div> ` })}`;
}, "/Users/alexanderdollard/Development/Beau_Crisp/src/pages/workouts.astro", void 0);

const $$file = "/Users/alexanderdollard/Development/Beau_Crisp/src/pages/workouts.astro";
const $$url = "/workouts";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Workouts,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
