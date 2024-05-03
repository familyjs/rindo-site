---
title: Config
sidebar_label: Overview
description: Config
slug: /config
---

# Rindo Config

In most cases, the `rindo.config.ts` file does not require any customization since Rindo comes with great default values out-of-the-box. In general, it's preferred to keep the config as minimal as possible. In fact, you could even delete the `rindo.config.ts` file entirely and an app would compile just fine. But at the same time, the compiler can be configured at the lowest levels using this config. Below are the many *optional* config properties.

Example `rindo.config.ts`:

```tsx
import { Config } from '@rindo/core';

export const config: Config = {
  namespace: 'MyApp',
  srcDir: 'src'
};
```

## buildDist

*default: true (prod), false (dev)*

Sets whether or not Rindo will execute output targets and write output to
`dist/` when `rindo build` is called. Defaults to `false` when building for
development and `true` when building for production. If set to `true` then
Rindo will always build all output targets, regardless of whether the build
is in dev or prod mode or using watch mode.

```tsx
buildDist: true
```

## buildEs5

Sets if the ES5 build should be generated or not.
It defaults to `false`.
Setting `buildEs5` to `true` will also create ES5 builds for both dev and prod modes.
Setting `buildEs5` to `prod` will only build ES5 in prod mode.

```tsx
buildEs5: boolean | 'prod'
```

## bundles

By default, Rindo will statically analyze the application and generate a component graph of how all the components are interconnected. From the component graph it is able to best decide how components should be grouped depending on their usage with one another within the app. By doing so it's able to bundle components together in order to reduce network requests. However, bundles can be manually generated using the `bundles` config.

The `bundles` config is an array of objects that represent how components are grouped together in lazy-loaded bundles. This config is rarely needed as Rindo handles this automatically behind the scenes.

```tsx
bundles: [
  { components: ['fml-button'] },
  { components: ['fml-card', 'fml-card-header'] }
]
```

## cacheDir

*default: '.rindo'*

The directory where sub-directories will be created for caching when [`enableCache`](#enablecache) is set `true` or if using
[Rindo's Screenshot Connector](../testing/rindo-testrunner/07-screenshot-connector.md).

A Rindo config like the following:

```ts title='rindo.config.ts'
import { Config } from '@rindo/core';

export const config: Config = {
  ...,
  enableCache: true,
  cacheDir: '.cache',
  testing: {
    screenshotConnector: 'connector.js'
  }
}
```

Will result in the following file structure:

```tree
rindo-project-root
└── .cache
    ├── .build <-- Where build related file caching is written
    |
    └── screenshot-cache.json <-- Where screenshot caching is written
```

## devServer

Please see the [Dev-Server docs](./dev-server.md).

## enableCache

*default: `true`*

Rindo will cache build results in order to speed up rebuilds. To disable this feature, set `enableCache` to `false`.

```tsx
enableCache: true
```

## extras

Please see the [Extras docs](./extras.md).

## globalScript

The global script config option takes a file path as a string.

The global script runs once before your library/app loads, so you can do things like setting up a connection to an external service or configuring a library you are using.

The code to be executed should be placed within a default function that is exported by the global script. Ensure all of the code in the global script is wrapped in the function that is exported:

```javascript
export default function() { // or export default async function()
  initServerConnection();
}
```

:::note
The exported function can also be `async` but be aware that this can have implications on the performance of your application as all rendering operations will be deferred until after the global script finishes.
:::

## globalStyle

Rindo is traditionally used to compile many components into an app, and each component comes with its own compartmentalized styles. However, it's still common to have styles which should be "global" across all components and the website. A global CSS file is often useful to set [CSS Variables](../components/styling.md).

Additionally, the `globalStyle` config can be used to precompile styles with Sass, PostCSS, etc.

Below is an example folder structure containing a webapp's global css file, named `app.css`.

```bash
src/
  components/
  global/
    app.css
```

The global style config takes a file path as a string. The output from this build will go to the `buildDir`. In this example it would be saved to `www/build/app.css`.

```tsx
globalStyle: 'src/global/app.css'
```

Check out the [styling docs](../components/styling.md#global-styles) of how to use global styles in your app.

## hashedFileNameLength

*default: `8`*

When the `hashFileNames` config is set to `true`, and it is a production build, the `hashedFileNameLength` config is used to determine how many characters the file name's hash should be.

```tsx
hashedFileNameLength: 8
```

## hashFileNames

*default: `true`*

During production builds, the content of each generated file is hashed to represent the content, and the hashed value is used as the filename. If the content isn't updated between builds, then it receives the same filename. When the content is updated, then the filename is different. By doing this, deployed apps can "forever-cache" the build directory and take full advantage of content delivery networks (CDNs) and heavily caching files for faster apps.

```tsx
hashFileNames: true
```

## hydratedFlag

When using the [lazy build](https://rindojs.com/docs/distribution) Rindo
has support for automatically applying a class or attribute to a component and
all of its child components when they have finished hydrating. This can be used
to prevent a [flash of unstyled content
(FOUC)](https://en.wikipedia.org/wiki/Flash_of_unstyled_content), a
typically-undesired 'flicker' of unstyled HTML that might otherwise occur
during component rendering while various components are asynchronously
downloaded and rendered.

By default, Rindo will add the `hydrated` CSS class to elements to indicate
hydration. The `hydratedFlag` config field allows this behavior to be
customized, by changing the name of the applied CSS class, setting it to use an
attribute to indicate hydration, or changing which type of CSS properties and
values are assigned before and after hydrating. This config can also be used to
turn off this behavior by setting it to `null`.

If a Rindo configuration does not supply a value for `hydratedFlag` then
Rindo will automatically generate the following default configuration:

```ts
const defaultHydratedFlag: HydratedFlag = {
  hydratedValue: 'inherit',
  initialValue: 'hidden',
  name: 'hydrated',
  property: 'visibility',
  selector: 'class',
};
```

If `hydratedFlag` is explicitly set to `null`, Rindo will not set a default
configuration and the behavior of marking hydration with a class or attribute
will be disabled.

```tsx
hydratedFlag: null | {
    name?: string,
    selector?: 'class' | 'attribute',
    property?: string,
    initialValue?: string,
    hydratedValue?: string
}
```

The supported options are as follows:

### name

*default: 'hydrated'*

The name which Rindo will use for the attribute or class that it sets on
elements to indicate that they are hydrated.

```tsx
name: string
```

### selector

*default: 'class'*

The way that Rindo will indicate that a component has been hydrated. When
`'class'`, Rindo will set the `name` option on the element as a class, and
when `'attribute'`, Rindo will similarly set the `name` option as an
attribute.

```tsx
selector: 'class' | 'attribute'
```

### property

*default: 'visibility'*

The CSS property used to show and hide components. This defaults to the CSS
`visibility` property. Other possible CSS properties might include `display`
with the `initialValue` setting as `none`, or `opacity` with the `initialValue`
as `0`. Defaults to `visibility`.

```tsx
property: string
```

### initialValue

*default: 'hidden'*

This is the value which should be set for the property specified by `property`
on all components before hydration.

```tsx
initialValue: string
```

### hydratedValue

*default: 'inherit'*

This is the value which should be set for the property specified by `property`
on all components once they've completed hydration.

```tsx
hydratedValue: string
```

## invisiblePrehydration

*default: `true`*

When `true`, `invisiblePrehydration` will visually hide components before they are hydrated by adding an automatically injected style tag to the document's head. Setting `invisiblePrehydration` to `false` will not inject the style tag into the head, allowing you to style your web components pre-hydration. 

:::note
Setting `invisiblePrehydration` to `false` will cause everything to be visible when your page is loaded, causing a more prominent Flash of Unstyled Content (FOUC). However, you can style your web component's fallback content to your preference.
:::

```tsx
invisiblePrehydration: true
```

## minifyCss

_default: `true` in production_

When `true`, the browser CSS file will be minified.

## minifyJs

_default: `true` in production_

When `true`, the browser JS files will be minified. Rindo uses [Terser](https://terser.org/) under-the-hood for file minification.

## namespace

*default: `App`*

The `namespace` config is a `string` representing a namespace for the app. For apps that are not meant to be a library of reusable components, the default of `App` is just fine. However, if the app is meant to be consumed as a third-party library, such as `Family`, a unique namespace is required.

```tsx
namespace: "Family"
```
## outputTargets

Please see the [Output Target docs](../output-targets/01-overview.md).

## plugins

Please see the [Plugin docs](./plugins.md).

## preamble

*default: `undefined`*

Used to help to persist a banner or add relevant information about the resulting build, the `preamble` configuration 
field is a `string` that will be converted into a pinned comment and placed at the top of all emitted JavaScript files,
with the exception of any emitted polyfills. Escaped newlines may be placed in the provided value for this field and 
will be honored by Rindo.

Example:
```tsx
preamble: 'Built with Rindo\nCopyright (c) SomeCompanyInc.'
```
Will generate the following comment:
```tsx
/*!
 * Built with Rindo
 * Copyright (c) SomeCompanyInc.
 */
```

## sourceMap

*default: `true`*

When omitted or set to `true`, sourcemaps will be generated for a project.
When set to `false`, sourcemaps will not be generated.

```tsx
sourceMap: true | false
```

Sourcemaps create a translation between Rindo components that are written in TypeScript/JSX and the resulting 
JavaScript that is output by Rindo. Enabling source maps in your project allows for an improved debugging experience
for Rindo components. For example, they allow external tools (such as an Integrated Development Environment) to add
breakpoints directly in the original source code, which allows you to 'step through' your code line-by-line, to inspect
the values held in variables, to observe logic flow, and more.

Please note: Rindo will always attempt to minify a component's source code as much as possible during compilation. 
When `sourceMap` is enabled, it is possible that a slightly different minified result will be produced by Rindo when
compared to the minified result produced when `sourceMap` is not enabled. 

Developers are responsible for determining whether or not they choose to serve sourcemaps in each environment their
components are served and implementing their decision accordingly.

## srcDir

*default: `src`*

The `srcDir` config specifies the directory which should contain the source typescript files for each component. The standard for Rindo apps is to use `src`, which is the default.

```tsx
srcDir: 'src'
```

## taskQueue

*default: `async`*

Sets the task queue used by rindo's runtime. The task queue schedules DOM read and writes
across the frames to efficiently render and reduce layout thrashing. By default, the
`async` is used. It's recommended to also try each setting to decide which works
best for your use-case. In all cases, if your app has many CPU intensive tasks causing the
main thread to periodically lock-up, it's always recommended to try
[Web Workers](../guides/workers.md) for those tasks.

* `congestionAsync`: DOM reads and writes are scheduled in the next frame to prevent layout
  thrashing. When the app is heavily tasked and the queue becomes congested it will then
  split the work across multiple frames to prevent blocking the main thread. However, it can
  also introduce unnecessary reflows in some cases, especially during startup. `congestionAsync`
  is ideal for apps running animations while also simultaneously executing intensive tasks
  which may lock-up the main thread.

* `async`: DOM read and writes are scheduled in the next frame to prevent layout thrashing.
  During intensive CPU tasks it will not reschedule rendering to happen in the next frame.
  `async` is ideal for most apps, and if the app has many intensive tasks causing the main
  thread to lock-up, it's recommended to try [Web Workers](../guides/workers.md)
  rather than the congestion async queue.

* `immediate`: Makes writeTask() and readTask() callbacks to be executed synchronously. Tasks
  are not scheduled to run in the next frame, but do note there is at least one microtask.
  The `immediate` setting is ideal for apps that do not provide long-running and smooth
  animations. Like the async setting, if the app has intensive tasks causing the main thread
  to lock-up, it's recommended to try [Web Workers](../guides/workers.md).

```tsx
taskQueue: 'async'
```

## testing

Please see the [testing config docs](../testing/rindo-testrunner/02-config.md).

## transformAliasedImportPaths

*default: `true`*

This sets whether or not Rindo should transform [path aliases](
https://www.typescriptlang.org/docs/handbook/module-resolution.html#path-mapping) set
in a project's `tsconfig.json` from the assigned module aliases to resolved
relative paths. This will not transform external imports (like `@rindo/core`) or
relative imports (like `'../utils'`).

This option applies globally and will affect all code processed by Rindo,
including `.d.ts` files and spec tests.

An example of path transformation could look something like the following.

First, a set of `paths` aliases in `tsconfig.json`:

```json title="tsconfig.json"
{
  "compilerOptions": {
    "paths": {
      "@utils": [
        "../path/to/utils"
      ]
    }
  }
}
```

Then with the following input:

```ts title="src/my-module.ts"
import { utilFunc, UtilInterface } from '@utils'

export function util(arg: UtilInterface) {
    utilFunc(arg)
}
```

Rindo will produce the following output:

```js title="dist/my-module.js"
import { utilFunc } from '../path/to/utils';
export function util(arg) {
    utilFunc(arg);
}
```

```ts title="dist/my-module.d.ts"
import { UtilInterface } from '../path/to/utils';
export declare function util(arg: UtilInterface): void;
```

## validatePrimaryPackageOutputTarget

*default: `false`*

When `true`, validation for common `package.json` fields will occur based on setting an output target's `isPrimaryPackageOutputTarget` flag.
For more information on package validation, please see the [output target docs](../output-targets/01-overview.md#primary-package-output-target-validation).