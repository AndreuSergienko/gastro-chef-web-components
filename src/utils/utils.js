import { APP_ROUTES } from '../constants'

export function matchRoute(routes, uri) {
  let paramRe = /^:(.+)/;
  function segmentize(uri) {
    return uri.replace(/(^\/+|\/+$)/g, "").split("/");
  }

  let match;
  const [uriPathname] = uri.split("?");
  const uriSegments = segmentize(uriPathname);
  const isRootUri = uriSegments[0] === "/";

  for (let i = 0; i < routes.length; i++) {
    const route = routes[i];
    const routeSegments = segmentize(route.path);
    const max = Math.max(uriSegments.length, routeSegments.length);
    let index = 0;
    let missed = false;
    let params = {};
    for (; index < max; index++) {
      const uriSegment = uriSegments[index];
      const routeSegment = routeSegments[index];
      const fallback = routeSegment === "*";
      if (fallback) {
        params["*"] = uriSegments
          .slice(index)
          .map(decodeURIComponent)
          .join("/");
        break;
      }
      if (uriSegment === undefined) {
        missed = true;
        break;
      }
      let dynamicMatch = paramRe.exec(routeSegment);
      if (dynamicMatch && !isRootUri) {
        let value = decodeURIComponent(uriSegment);
        params[dynamicMatch[1]] = value;
      } else if (routeSegment !== uriSegment) {
        missed = true;
        break;
      }
    }
    if (!missed) {
      match = { params, ...route };
      break;
    }
  }

  return match || null;
}

export const togglePreloader = (context) => {
  return context.setState((state) => {
    return {
      ...state,
      isLoading: !state.isLoading,
    }
  })
}

export const checkPath = (windowPath) => {
  const routes = [APP_ROUTES.adminPage, APP_ROUTES.errorPage, APP_ROUTES.blogPage, APP_ROUTES.signInPage, APP_ROUTES.signUpPage]

  return routes.find((route) => route === windowPath) || windowPath.length > 20
}

export const setParentClass = (context) => {
  return context.props['parent-class'] && context.classList.add(context.props['parent-class'])
}