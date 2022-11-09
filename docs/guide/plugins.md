# Plugins

## Rindo plugins

By default, Rindo does not come with `Sass` or `PostCss` support. However, either can be added using the `plugins` array.

```tsx
import { Config } from '@rindo/core';
import { sass } from '@rindo/sass';
export const config: Config = {
  plugins: [
    sass()
  ]
};
```

## Rollup plugins

The `rollupPlugins` config can be used to add your own [Rollup](https://rollupjs.org) plugins.
Under the hood, rindo ships with some built-in plugins including `node-resolve` and `commonjs`, since the execution order of rollup plugins is important, rindo provides an API to inject custom plugin **before node-resolve** and after **commonjs transform**:


```tsx
export const config = {
  rollupPlugins: {
    before: [
      // Plugins injected before rollupNodeResolve()
      resolvePlugin()
    ],
    after: [
      // Plugins injected after commonjs()
      nodePolyfills()
    ]
  }
}
```

### Related Plugins

- [@rindo/sass](https://www.npmjs.com/package/@rindo/sass)
- [@rindo-community/postcss](https://www.npmjs.com/package/@rindo-community/postcss)
- (Deprecated) [@rindo/less](https://www.npmjs.com/package/@rindo/less)
- (Deprecated) [@rindo/stylus](https://www.npmjs.com/package/@rindo/stylus)


## Node Polyfills
See the [Node Polyfills in Module bundling](module-bundling#node-polyfills) for other examples.
