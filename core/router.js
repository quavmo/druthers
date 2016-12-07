import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();


function decodeParam(val) {
  if (!(typeof val === 'string' || val.length === 0)) {
    return val;
  }

  try {
    return decodeURIComponent(val);
  } catch (err) {
    if (err instanceof URIError) {
      err.message = `Failed to decode param '${val}'`;
      err.status = 400;
    }

    throw err;
  }
}

// Match the provided URL path pattern to an actual URI string. For example:
//   matchURI({ path: '/posts/:id' }, '/dummy') => null
//   matchURI({ path: '/posts/:id' }, '/posts/123') => { id: 123 }
function matchURI(route, path) {
  const match = route.pattern.exec(path);
  if (!match) { return null; }

  const params = Object.create(null);

  for (let i = 1; i < match.length; i++) {
    params[route.keys[i - 1].name] = match[i] !== undefined ? decodeParam(match[i]) : undefined;
  }

  return params;
}

// Find the route matching the specified location (`context`), fetch the required data,
// instantiate and return a React component
function resolve(routes, context) {
  for (const route of routes) {
    const params = matchURI(route, context.error ? '/error' : context.pathname);
    if (!params) { continue; }
    if (route.data) { return resolveWithData(route, context); }

    const routeWithParams = { ...route, params };
    return route.load().then(Page => <Page route={routeWithParams} error={context.error} />);
  }

  const error = new Error('Page not found');
  error.status = 404;
  return Promise.reject(error);
}

export default { resolve };

const resolveWithData = (route, context) => {
  const keys = Object.keys(route.data);
  return Promise.all([
    route.load(),
    ...keys.map(key => {
      const query = route.data[key];
      const method = query.substring(0, query.indexOf(' ')); // GET
      const url = query.substr(query.indexOf(' ') + 1);      // /api/tasks/$id
      // TODO: Replace query parameters with actual values coming from `params`
      return fetch(url, { method }).then(resp => resp.json());
    }),
  ]).then(([Page, ...data]) => {
    const props = keys.reduce((result, key, i) => ({ ...result, [key]: data[i] }), {});
    return <Page route={route} error={'context'.error} {...propsWithParams} />;
  });
};
