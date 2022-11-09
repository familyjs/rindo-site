# Kdu

**Supports: Kdu 3 • TypeScript 4.0+ • Rindo v2.16.0+**

Rindo can generate Kdu component wrappers for your web components. This allows your Rindo components to be used within a Kdu 3 application. The benefits of using Rindo's component wrappers over the standard web components include:

- Type checking with your components.
- Integration with the router link and Kdu router.
- Optionally, form control web components can be used with `k-model`.

## Setup

### Project Structure

We recommend using a monorepo structure for your component library with component wrappers. Your project workspace should contain your Rindo component library and the library for the generate Kdu component wrappers.

An example project set-up may look similar to:

```
top-most-directory/
└── packages/
    ├── kdu-library/
    │   └── src/
    │       ├── lib/
    │       └── index.ts
    └── rindo-library/
        ├── rindo.config.js
        └── src/components
```

This guide uses Lerna for the monorepo, but you can use other solutions such as Nx, TurboRepo, etc.

To use Lerna with this walk through, globally install Lerna:

```bash
npm install --global lerna
# or if you are using yarn
yarn global add lerna
```

#### Creating a Monorepo

:::warning
If you already have a monorepo, skip this section.
:::
```bash
# From your top-most-directory/, initialize a workspace
lerna init
# install typescript and node types
npm install typescript @types/node --save-dev
# or if you are using yarn
yarn add typescript @types/node --dev
```

#### Creating a Rindo Component Library

:::warning
If you already have a Rindo component library, skip this section.
:::
```bash
cd packages/
npm init rindo components rindo-library
cd rindo-library
# Install dependencies
npm install
# of if you are using yarn
yarn install
cd ..
lerna bootstrap
# or if you are using other monorepo tools, initialize symlinks
```

#### Creating a Kdu Component Library

:::warning
If you already have a Kdu component library, skip this section.
:::
The first time you want to create the component wrappers, you will need to have a Kdu library package to write to.

Using Lerna and Kdu's CLI, generate a workspace and a library for your Kdu component wrappers:

```bash
# From your top-most-directory/
lerna create kdu-library
# or if you are using other monorepo tools, create a new Kdu library
# Follow the prompts and confirm
cd packages/kdu-library
# Install Kdu dependency
npm install kdu@3 --save-dev
# or if you are using yarn
yarn add kdu@3 --dev
# Add the rindo-library dependency
lerna add rindo-library
# or if you are using other monorepo tools, install your Rindo library as a dependency
cd ../../
lerna bootstrap
# or if you are using other monorepo tools, initialize symlinks
```

Lerna does not ship with a TypeScript configuration. At the root of the workspace, create a `tsconfig.json`:

```json
{
  "compilerOptions": {
    "module": "commonjs",
    "declaration": true,
    "noImplicitAny": false,
    "removeComments": true,
    "noLib": false,
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    "target": "es6",
    "sourceMap": true,
    "lib": ["es6"]
  },
  "exclude": ["node_modules", "**/*.spec.ts", "**/__tests__/**"]
}
```

Lerna does not create a `.gitignore` file, so we will manually create one:

```bash
node_modules/
lerna-debug.log
npm-debug.log
packages/*/lib
```

In your `kdu-library` project, create a project specific `tsconfig.json` that will extend the root config:

```json
{
  "extends": "../../tsconfig.json",
  "compilerOptions": {
    "outDir": "./lib",
    "lib": ["dom", "es2020"],
    "module": "es2015",
    "moduleResolution": "node",
    "target": "es2017",
    "skipLibCheck": true
  },
  "include": ["src"],
  "exclude": ["node_modules"]
}
```

Update your `package.json`, adding the following options to the existing config:

```diff
{
-  "main": "lib/kdu-library.js",
+  "main": "lib/index.js",
+  "types": "lib/index.d.ts",
  "scripts": {
-    "test": "echo \"Error: run tests from root\" && exit 1"
+    "test": "echo \"Error: run tests from root\" && exit 1",
+    "build": "npm run tsc",
+    "tsc": "tsc -p ."
-  }
+  },
+  "publishConfig": {
+    "access": "public"
+  }
}
```

### Adding Kdu Output Target

Install the `@rindo/kdu-output-target` dependency to your Rindo component library package.

```bash
# Install dependency (from packages/rindo-library)
npm install @rindo/kdu-output-target --save-dev
# of if you are using yarn
yarn add @rindo/kdu-output-target --dev
```

In your project's `rindo.config.ts`, add the `kduOutputTarget` configuration to the `outputTargets` array:

```ts
import { kduOutputTarget } from '@rindo/kdu-output-target';
export const config: Config = {
  namespace: 'rindo-library',
  outputTargets: [
    kduOutputTarget({
      componentCorePackage: 'your-rindo-library-package-name', // i.e.: rindo-library
      proxiesFile: '../kdu-library/src/components.ts',
    }),
  ],
};
```

:::warning
The `proxiesFile` is the relative path to the file that will be generated with all the Kdu component wrappers. You will replace the file path to match your project's structure and respective names. You can generate any file name instead of `components.ts`.
:::
You can now build your Rindo component library to generate the component wrappers.

```bash
# Build the library and wrappers (from packages/rindo-library)
npm run build
# or if you are using yarn
yarn run build
```

If the build is successful, you will now have contents in the file specified in `proxiesFile`.

#### Kdu Plugin

To register your web components for the lazy-loaded (hydrated) bundle, you will need to create a new file for the Kdu plugin:

```ts
// packages/kdu-library/src/plugin.ts
import { Plugin } from 'kdu';
import { applyPolyfills, defineCustomElements } from 'rindo-library/loader';
export const ComponentLibrary: Plugin = {
  async install() {
    applyPolyfills().then(() => {
      defineCustomElements();
    });
  },
};
```

You can now finally export the generated component wrappers and the Kdu plugin for your component library to make them available to implementers:

```ts
// packages/kdu-library/src/index.ts
export * from './components';
export * from './plugin';
```

### Building and Publishing

```bash
# Build the library (from packages/kdu-library)
npm run build
# of if you are using yarn
yarn build
```

Publish the output to NPM:

```bash
npm publish
```

## Consumer Usage

This section covers how developers consuming your Kdu component wrappers will use your package and component wrappers.

In your `main.js` file, import your component library plugin and use it:

```js
// src/main.js
import { ComponentLibrary } from 'kdu-library';
createApp(App).use(ComponentLibrary).mount('#app');
```

In your page or component, you can now import and use your component wrappers:

```kdu
<template>
  <my-component first="Your" last="Name"></my-component>
</template>
<script>
import { MyComponent } from 'kdu-library';
export default {
  name: 'HelloWorld',
  components: {
    MyComponent
  }
}
```

## FAQ

### Kdu warns "Failed to resolve component: my-component"

#### Lazy loaded bundle

If you are using Kdu CLI, update your `kdu.config.js` to match your custom element selector as a custom element:

```js
const { defineConfig } = require('@kdujs/cli-service');
module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: config => {
    config.module
      .rule('kdu')
      .use('kdu-loader')
      .tap(options => {
        options.compilerOptions = {
          ...options.compilerOptions,
          // The rindo-library components start with "my-"
          isCustomElement: tag => tag.startsWith('my-'),
        };
        return options;
      });
  },
});
```

#### Custom elements bundle

If you see this warning, then it is likely you did not import your component from your Kdu library: `kdu-library`. By default, all Kdu components are locally registered, meaning you need to import them each time you want to use them.

Without importing the component, you will only get the underlying Web Component, and Kdu-specific features such as `k-model` will not work.

To resolve this issue, you need to import the component from `kdu-library` (your package name) and provide it to your Kdu component:

```kdu
<template>
  <my-component first="Your" last="Name"></my-component>
</template>

<script lang="ts">
  import { MyComponent } from 'kdu-library';
  import { defineComponent } from 'kdu';
  export default defineComponent({
    components: { MyComponent },
  });
</script>
```

### Kdu warns: "slot attributes are deprecated kdu/no-deprecated-slot-attribute"

The slots that are used in Rindo are [Web Component](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_templates_and_slots) slots, which are different than the slots used in Kdu 2. Unfortunately, the APIs for both are very similar, and your linter is likely getting the two confused.

You will need to update your lint rules in `.eslintrc.js` to ignore this warning:

```js
module.exports = {
  rules: {
    'kdu/no-deprecated-slot-attribute': 'off',
  },
};
```

### Method on component is not a function

In order to access a method on a Rindo component in Kdu, you will need to access the underlying Web Component instance first:

```ts
// ✅ This is correct
myComponentRef.value.$el.someMethod();
// ❌ This is incorrect and will result in an error.
myComponentRef.value.someMethod();
```

### Output commonjs bundle for Node environments

First, install `rollup` and `rimraf` as dev dependencies:

```bash
npm i -D rollup rimraf
# or if you are using yarn
yarn add rollup rimraf --dev
```

Next, create a `rollup.config.js` in `/packages/kdu-library/`:

```js
const external = ['kdu', 'kdu-router'];
export default {
  input: 'dist-transpiled/index.js',
  output: [
    {
      dir: 'dist/',
      entryFileNames: '[name].esm.js',
      chunkFileNames: '[name]-[hash].esm.js',
      format: 'es',
      sourcemap: true,
    },
    {
      dir: 'dist/',
      format: 'commonjs',
      preferConst: true,
      sourcemap: true,
    },
  ],
  external: id => external.includes(id) || id.startsWith('rindo-library'),
};
```

:::warning
Update the `external` list for any external dependencies. Update the `rindo-library` to match your Rindo library's package name.
:::
Next, update your `package.json` to include the scripts for rollup:

```json
{
  "scripts": {
    "build": "npm run clean && npm run tsc && npm run bundle",
    "bundle": "rollup --config rollup.config.js",
    "clean": "rimraf dist dist-transpiled"
  }
}
```
