import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { o as NOOP_MIDDLEWARE_HEADER, p as decodeKey } from './chunks/astro/server_CwOsAfxp.mjs';
import 'cookie';
import './chunks/shared_BTASe_bZ.mjs';
import 'es-module-lexer';

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

const manifest = deserializeManifest({"hrefRoot":"file:///Users/alexanderdollard/Development/Beau_Crisp/","cacheDir":"file:///Users/alexanderdollard/Development/Beau_Crisp/node_modules/.astro/","outDir":"file:///Users/alexanderdollard/Development/Beau_Crisp/dist/","srcDir":"file:///Users/alexanderdollard/Development/Beau_Crisp/src/","publicDir":"file:///Users/alexanderdollard/Development/Beau_Crisp/public/","buildClientDir":"file:///Users/alexanderdollard/Development/Beau_Crisp/dist/","buildServerDir":"file:///Users/alexanderdollard/Development/Beau_Crisp/.netlify/build/","adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.CzTdcIV4.css"}],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.CzTdcIV4.css"}],"routeData":{"route":"/about","isIndex":false,"type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.CzTdcIV4.css"}],"routeData":{"route":"/blog/[slug]","isIndex":false,"type":"page","pattern":"^\\/blog\\/([^/]+?)\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}],[{"content":"slug","dynamic":true,"spread":false}]],"params":["slug"],"component":"src/pages/blog/[slug].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.CzTdcIV4.css"}],"routeData":{"route":"/contact","isIndex":false,"type":"page","pattern":"^\\/contact\\/?$","segments":[[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact.astro","pathname":"/contact","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.CzTdcIV4.css"}],"routeData":{"route":"/login","isIndex":false,"type":"page","pattern":"^\\/login\\/?$","segments":[[{"content":"login","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/login.astro","pathname":"/login","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.CzTdcIV4.css"}],"routeData":{"route":"/podcast","isIndex":false,"type":"page","pattern":"^\\/podcast\\/?$","segments":[[{"content":"podcast","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/podcast.astro","pathname":"/podcast","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.CzTdcIV4.css"}],"routeData":{"route":"/workouts/[slug]","isIndex":false,"type":"page","pattern":"^\\/workouts\\/([^/]+?)\\/?$","segments":[[{"content":"workouts","dynamic":false,"spread":false}],[{"content":"slug","dynamic":true,"spread":false}]],"params":["slug"],"component":"src/pages/workouts/[slug].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.CzTdcIV4.css"}],"routeData":{"route":"/workouts","isIndex":false,"type":"page","pattern":"^\\/workouts\\/?$","segments":[[{"content":"workouts","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/workouts.astro","pathname":"/workouts","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.CzTdcIV4.css"}],"routeData":{"route":"/writing","isIndex":false,"type":"page","pattern":"^\\/writing\\/?$","segments":[[{"content":"writing","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/writing.astro","pathname":"/writing","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.CzTdcIV4.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/alexanderdollard/Development/Beau_Crisp/src/pages/404.astro",{"propagation":"none","containsHead":true}],["/Users/alexanderdollard/Development/Beau_Crisp/src/pages/about.astro",{"propagation":"none","containsHead":true}],["/Users/alexanderdollard/Development/Beau_Crisp/src/pages/blog/[slug].astro",{"propagation":"none","containsHead":true}],["/Users/alexanderdollard/Development/Beau_Crisp/src/pages/contact.astro",{"propagation":"none","containsHead":true}],["/Users/alexanderdollard/Development/Beau_Crisp/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/Users/alexanderdollard/Development/Beau_Crisp/src/pages/login.astro",{"propagation":"none","containsHead":true}],["/Users/alexanderdollard/Development/Beau_Crisp/src/pages/podcast.astro",{"propagation":"none","containsHead":true}],["/Users/alexanderdollard/Development/Beau_Crisp/src/pages/workouts.astro",{"propagation":"none","containsHead":true}],["/Users/alexanderdollard/Development/Beau_Crisp/src/pages/workouts/[slug].astro",{"propagation":"none","containsHead":true}],["/Users/alexanderdollard/Development/Beau_Crisp/src/pages/writing.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000astro-internal:middleware":"_astro-internal_middleware.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:src/pages/about@_@astro":"pages/about.astro.mjs","\u0000@astro-page:src/pages/blog/[slug]@_@astro":"pages/blog/_slug_.astro.mjs","\u0000@astro-page:src/pages/contact@_@astro":"pages/contact.astro.mjs","\u0000@astro-page:src/pages/login@_@astro":"pages/login.astro.mjs","\u0000@astro-page:src/pages/podcast@_@astro":"pages/podcast.astro.mjs","\u0000@astro-page:src/pages/workouts/[slug]@_@astro":"pages/workouts/_slug_.astro.mjs","\u0000@astro-page:src/pages/workouts@_@astro":"pages/workouts.astro.mjs","\u0000@astro-page:src/pages/writing@_@astro":"pages/writing.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_CigtVuqG.mjs","/Users/alexanderdollard/Development/Beau_Crisp/node_modules/astro/node_modules/unstorage/drivers/fs-lite.mjs":"chunks/fs-lite_COtHaKzy.mjs","/Users/alexanderdollard/Development/Beau_Crisp/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_C_TjOljS.mjs","/Users/alexanderdollard/Development/Beau_Crisp/src/pages/login.astro?astro&type=script&index=0&lang.ts":"_astro/login.astro_astro_type_script_index_0_lang.l0sNRNKZ.js","/Users/alexanderdollard/Development/Beau_Crisp/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts":"_astro/Layout.astro_astro_type_script_index_0_lang.BtplPl8j.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/Users/alexanderdollard/Development/Beau_Crisp/src/pages/login.astro?astro&type=script&index=0&lang.ts",""],["/Users/alexanderdollard/Development/Beau_Crisp/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts","const e=document.getElementById(\"mobile-menu-button\"),t=document.getElementById(\"mobile-menu\"),s=e?.querySelector(\"svg\");e?.addEventListener(\"click\",()=>{t?.classList.toggle(\"hidden\"),t?.classList.toggle(\"opacity-0\"),t?.classList.toggle(\"translate-y-[-10px]\"),s?.classList.toggle(\"rotate-90\")});t&&t.classList.add(\"opacity-0\",\"translate-y-[-10px]\");"]],"assets":["/_astro/buried1.uCFadJ5u.png","/_astro/about.CzTdcIV4.css","/favicon.svg","/images/barbell.jpg","/images/people-lifting-sepia.jpg","/images/people-lifting.jpg"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"X6sPyTR/hXtooLLDHJwix7lupjg3nrPzluehKoDLuKw=","sessionConfig":{"driver":"fs-lite","options":{"base":"/Users/alexanderdollard/Development/Beau_Crisp/node_modules/.astro/sessions"}}});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = () => import('./chunks/fs-lite_COtHaKzy.mjs');

export { manifest };
