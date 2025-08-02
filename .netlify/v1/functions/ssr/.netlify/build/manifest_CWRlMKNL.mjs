import 'kleur/colors';
import { v as NOOP_MIDDLEWARE_HEADER, w as decodeKey } from './chunks/astro/server_DI8t6tx6.mjs';
import 'clsx';
import 'cookie';
import './chunks/shared_B6bdXPNh.mjs';
import 'es-module-lexer';
import 'html-escaper';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/alexanderdollard/Development/b2/frontEnd/","cacheDir":"file:///Users/alexanderdollard/Development/b2/frontEnd/node_modules/.astro/","outDir":"file:///Users/alexanderdollard/Development/b2/frontEnd/dist/","srcDir":"file:///Users/alexanderdollard/Development/b2/frontEnd/src/","publicDir":"file:///Users/alexanderdollard/Development/b2/frontEnd/public/","buildClientDir":"file:///Users/alexanderdollard/Development/b2/frontEnd/dist/","buildServerDir":"file:///Users/alexanderdollard/Development/b2/frontEnd/.netlify/build/","adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.9xRQxbs3.css"}],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.9xRQxbs3.css"},{"type":"inline","content":".hero-image[data-astro-cid-kh7btl4r]{background-image:url(/_astro/drawing1.q6ghXOhJ.jpeg);background-size:cover;background-repeat:repeat-x;background-position:20% 20%}@media (max-width: 768px){.hero-image[data-astro-cid-kh7btl4r]{background-size:cover}}\n"}],"routeData":{"route":"/about","isIndex":false,"type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.9xRQxbs3.css"}],"routeData":{"route":"/blog/[slug]","isIndex":false,"type":"page","pattern":"^\\/blog\\/([^/]+?)\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}],[{"content":"slug","dynamic":true,"spread":false}]],"params":["slug"],"component":"src/pages/blog/[slug].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.9xRQxbs3.css"},{"type":"inline","content":".hero-image[data-astro-cid-uw5kdbxl]{background-image:url(/_astro/drawing1.q6ghXOhJ.jpeg);background-size:cover;background-repeat:repeat-x;background-position:20% 20%}\n"}],"routeData":{"route":"/contact","isIndex":false,"type":"page","pattern":"^\\/contact\\/?$","segments":[[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact.astro","pathname":"/contact","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.9xRQxbs3.css"},{"type":"inline","content":".hero-image[data-astro-cid-k6yxwfmd]{background-image:url(/_astro/torso-drawing.CHSVO0uY.jpeg);background-size:auto;background-repeat:repeat-x;background-position:center}\n"}],"routeData":{"route":"/fitness_pdf","isIndex":false,"type":"page","pattern":"^\\/fitness_pdf\\/?$","segments":[[{"content":"fitness_pdf","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/fitness_pdf.astro","pathname":"/fitness_pdf","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.9xRQxbs3.css"},{"type":"inline","content":".hero-image[data-astro-cid-2sf3frmg]{background-image:url(/_astro/bjj-drawing.C5YLFfMs.jpeg);background-size:cover;background-repeat:repeat-x}.description-text[data-astro-cid-2sf3frmg]{max-height:4.5em;line-height:1.5;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical}.description-text[data-astro-cid-2sf3frmg].expanded{max-height:none;-webkit-line-clamp:unset}\n"}],"routeData":{"route":"/podcast","isIndex":false,"type":"page","pattern":"^\\/podcast\\/?$","segments":[[{"content":"podcast","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/podcast.astro","pathname":"/podcast","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.9xRQxbs3.css"}],"routeData":{"route":"/workouts/[slug]","isIndex":false,"type":"page","pattern":"^\\/workouts\\/([^/]+?)\\/?$","segments":[[{"content":"workouts","dynamic":false,"spread":false}],[{"content":"slug","dynamic":true,"spread":false}]],"params":["slug"],"component":"src/pages/workouts/[slug].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.9xRQxbs3.css"}],"routeData":{"route":"/workouts","isIndex":false,"type":"page","pattern":"^\\/workouts\\/?$","segments":[[{"content":"workouts","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/workouts.astro","pathname":"/workouts","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.9xRQxbs3.css"},{"type":"inline","content":".hero-image[data-astro-cid-fiz4ill5]{background-image:url(/_astro/drawing1.q6ghXOhJ.jpeg);background-size:cover;background-repeat:repeat-x;background-position:20% 20%}\n"}],"routeData":{"route":"/writing","isIndex":false,"type":"page","pattern":"^\\/writing\\/?$","segments":[[{"content":"writing","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/writing.astro","pathname":"/writing","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.9xRQxbs3.css"},{"type":"inline","content":".hero-image[data-astro-cid-j7pv25f6]{background-image:url(/_astro/frame1.BJz4VMvF.png);background-size:cover}@media (max-width: 768px){.hero-image[data-astro-cid-j7pv25f6]{background-size:cover;background-position:40% 80%}}.background-drawing[data-astro-cid-j7pv25f6]{background-image:url(/_astro/body-drawing.CuAtj2kg.jpeg);background-size:contain;background-repeat:repeat-x;background-position:center}.bg-medusa[data-astro-cid-j7pv25f6]{background-image:url(/_astro/medusa-drawing.CfdbkUYX.jpeg);background-size:contain;background-repeat:repeat-x;background-position:center}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/alexanderdollard/Development/b2/frontEnd/src/pages/404.astro",{"propagation":"none","containsHead":true}],["/Users/alexanderdollard/Development/b2/frontEnd/src/pages/about.astro",{"propagation":"none","containsHead":true}],["/Users/alexanderdollard/Development/b2/frontEnd/src/pages/blog/[slug].astro",{"propagation":"none","containsHead":true}],["/Users/alexanderdollard/Development/b2/frontEnd/src/pages/contact.astro",{"propagation":"none","containsHead":true}],["/Users/alexanderdollard/Development/b2/frontEnd/src/pages/fitness_pdf.astro",{"propagation":"none","containsHead":true}],["/Users/alexanderdollard/Development/b2/frontEnd/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/Users/alexanderdollard/Development/b2/frontEnd/src/pages/podcast.astro",{"propagation":"none","containsHead":true}],["/Users/alexanderdollard/Development/b2/frontEnd/src/pages/workouts.astro",{"propagation":"none","containsHead":true}],["/Users/alexanderdollard/Development/b2/frontEnd/src/pages/workouts/[slug].astro",{"propagation":"none","containsHead":true}],["/Users/alexanderdollard/Development/b2/frontEnd/src/pages/writing.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000astro-internal:middleware":"_astro-internal_middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:src/pages/about@_@astro":"pages/about.astro.mjs","\u0000@astro-page:src/pages/blog/[slug]@_@astro":"pages/blog/_slug_.astro.mjs","\u0000@astro-page:src/pages/contact@_@astro":"pages/contact.astro.mjs","\u0000@astro-page:src/pages/fitness_pdf@_@astro":"pages/fitness_pdf.astro.mjs","\u0000@astro-page:src/pages/podcast@_@astro":"pages/podcast.astro.mjs","\u0000@astro-page:src/pages/workouts/[slug]@_@astro":"pages/workouts/_slug_.astro.mjs","\u0000@astro-page:src/pages/workouts@_@astro":"pages/workouts.astro.mjs","\u0000@astro-page:src/pages/writing@_@astro":"pages/writing.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_CWRlMKNL.mjs","/Users/alexanderdollard/Development/b2/frontEnd/node_modules/astro/node_modules/unstorage/drivers/fs-lite.mjs":"chunks/fs-lite_COtHaKzy.mjs","/Users/alexanderdollard/Development/b2/frontEnd/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_DH9d75L9.mjs","/Users/alexanderdollard/Development/b2/frontEnd/src/pages/podcast.astro?astro&type=script&index=0&lang.ts":"_astro/podcast.astro_astro_type_script_index_0_lang.DEuzfXXC.js","/Users/alexanderdollard/Development/b2/frontEnd/src/pages/contact.astro?astro&type=script&index=0&lang.ts":"_astro/contact.astro_astro_type_script_index_0_lang.BpB4pUCL.js","/Users/alexanderdollard/Development/b2/frontEnd/src/pages/index.astro?astro&type=script&index=0&lang.ts":"_astro/index.astro_astro_type_script_index_0_lang.BmBhzYna.js","/Users/alexanderdollard/Development/b2/frontEnd/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts":"_astro/Layout.astro_astro_type_script_index_0_lang.BtplPl8j.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/Users/alexanderdollard/Development/b2/frontEnd/src/pages/podcast.astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"DOMContentLoaded\",()=>{document.querySelectorAll(\".read-more-btn\").forEach(e=>{e.addEventListener(\"click\",()=>{const t=e.previousElementSibling,n=t?.classList.contains(\"expanded\");t?.classList.toggle(\"expanded\"),e.textContent=n?\"Read More\":\"Show Less\"})})});"],["/Users/alexanderdollard/Development/b2/frontEnd/src/pages/contact.astro?astro&type=script&index=0&lang.ts","const e=document.querySelector(\"form\");document.querySelector(\"#name\");document.querySelector(\"#email\");document.querySelector(\"#message\");document.querySelector(\"button[type='submit']\");e&&e.addEventListener(\"submit\",t=>{t.preventDefault()});"],["/Users/alexanderdollard/Development/b2/frontEnd/src/pages/index.astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"DOMContentLoaded\",function(){const i=document.querySelectorAll(\".podcast-iframe-container\"),r=new IntersectionObserver(o=>{o.forEach(n=>{if(n.isIntersecting){const t=n.target,s=t.getAttribute(\"data-episode-id\"),e=document.createElement(\"iframe\");e.style.borderRadius=\"6px\",e.src=`https://open.spotify.com/embed/episode/${s}/video?utm_source=generator`,e.width=\"100%\",e.height=\"300\",e.allowFullscreen=!0,e.allow=\"autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture\",e.setAttribute(\"sandbox\",\"allow-same-origin allow-scripts allow-popups allow-forms\"),t.innerHTML=\"\",t.appendChild(e),r.unobserve(t)}})},{rootMargin:\"50px\",threshold:.1});i.forEach(o=>{r.observe(o)})});"],["/Users/alexanderdollard/Development/b2/frontEnd/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts","const e=document.getElementById(\"mobile-menu-button\"),t=document.getElementById(\"mobile-menu\"),s=e?.querySelector(\"svg\");e?.addEventListener(\"click\",()=>{t?.classList.toggle(\"hidden\"),t?.classList.toggle(\"opacity-0\"),t?.classList.toggle(\"translate-y-[-10px]\"),s?.classList.toggle(\"rotate-90\")});t&&t.classList.add(\"opacity-0\",\"translate-y-[-10px]\");"]],"assets":["/_astro/torso-drawing.CHSVO0uY.jpeg","/_astro/drawing1.q6ghXOhJ.jpeg","/_astro/buried2.C_GZqV-X.svg","/_astro/bjj-drawing.C5YLFfMs.jpeg","/_astro/body-drawing.CuAtj2kg.jpeg","/_astro/beau.DjhVZkMl.png","/_astro/medusa-drawing.CfdbkUYX.jpeg","/_astro/beau-cafe.Vw2XH2_B.png","/_astro/frame1.BJz4VMvF.png","/_astro/about.9xRQxbs3.css","/bone.svg","/buried-logo.svg","/buried2.svg","/favicon.svg","/nutrition.pdf"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"6CAF5s8d2mbox9m7NeoqnAxbNWOMON/rHbVFGTVsYK8=","sessionConfig":{"driver":"fs-lite","options":{"base":"/Users/alexanderdollard/Development/b2/frontEnd/node_modules/.astro/sessions"}}});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = () => import('./chunks/fs-lite_COtHaKzy.mjs');

export { manifest };
