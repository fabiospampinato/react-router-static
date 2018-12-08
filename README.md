# React Router Static

A dead simple static router for React. Useful for multi-window Electron applications.

## Install

```sh
npm install --save react-router-static
```

## Usage

This router simply maps routes to components, and that's it.

The current route is the value of the current url's `route` query paremeter (ie. `http://localhost?route=foo`), if none is detected it's value will be `default`.

```tsx
import * as React from 'react';
import {render} from 'react-dom';
import {Router} from 'react-router-static';
import Foo from './components/foo';
import Bar from './components/bar';
import Error404 from './components/error_404';

const routes = { // A map of "route" => "component"
  default: Error404, // Default component to mount when no other route is detected
  foo: Foo,
  bar: Bar
};

render (
  <Router routes={routes} />,
  document.getElementById ( 'app' )
);
```

## License

MIT © Fabio Spampinato
