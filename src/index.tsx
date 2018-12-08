
/* IMPORT */

import * as React from 'react';

/* REACT ROUTER STATIC */

function Router ({ routes }) {

  const route = new URLSearchParams ( window.location.search ).get ( 'route' ) || 'default',
        Component = routes[route] || routes.default;

  return <Component />;

}

/* EXPORT */

export {Router};
