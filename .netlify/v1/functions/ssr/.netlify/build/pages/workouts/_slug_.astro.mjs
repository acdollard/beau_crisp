/* empty css                                    */
import { c as createComponent, b as createAstro, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_DI8t6tx6.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_DfOInyaX.mjs';
import { c as client } from '../../chunks/sanity_B5cqMqjb.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
async function getStaticPaths() {
  const workoutPlans = await client.fetch(`
    *[_type == "workoutPlan"] {
      slug {
        current
      }
    }
  `);
  return workoutPlans.map((plan) => ({
    params: { slug: plan.slug.current }
  }));
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  const workoutPlan = await client.fetch(
    `
  *[_type == "workoutPlan" && slug.current == $slug][0] {
    title,
    startDate,
    endDate,
    description,
    client-> {
      name
    },
    workouts[] {
      day,
      exercises[] {
        exercise,
        sets,
        reps,
        notes
      }
    }
  }
`,
    { slug }
  );
  if (!workoutPlan) {
    return Astro2.redirect("/404");
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${workoutPlan.title} - Workout Plan` }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-4xl mx-auto"> <div class="mb-8"> <h1 class="text-4xl font-bold mb-4">${workoutPlan.title}</h1> <p class="text-gray-600 mb-2">Client: ${workoutPlan.client?.name}</p> <p class="text-gray-600"> ${new Date(workoutPlan.startDate).toLocaleDateString()} -
${workoutPlan.endDate ? new Date(workoutPlan.endDate).toLocaleDateString() : "Ongoing"} </p> ${workoutPlan.description && renderTemplate`<p class="mt-4 text-gray-700">${workoutPlan.description}</p>`} </div> <div class="space-y-8"> ${workoutPlan.workouts?.map((workout) => renderTemplate`<div class="bg-white p-6 rounded-sm shadow"> <h2 class="text-2xl font-bold mb-4">${workout.day}</h2> <div class="space-y-4"> ${workout.exercises?.map((exercise) => renderTemplate`<div class="border-b pb-4 last:border-0"> <h3 class="font-semibold text-lg">${exercise.exercise}</h3> <p class="text-gray-600"> ${exercise.sets} sets × ${exercise.reps} </p> ${exercise.notes && renderTemplate`<p class="text-gray-500 mt-2 text-sm">${exercise.notes}</p>`} </div>`)} </div> </div>`)} </div> </div> ` })}`;
}, "/Users/alexanderdollard/Development/b2/frontEnd/src/pages/workouts/[slug].astro", void 0);

const $$file = "/Users/alexanderdollard/Development/b2/frontEnd/src/pages/workouts/[slug].astro";
const $$url = "/workouts/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
