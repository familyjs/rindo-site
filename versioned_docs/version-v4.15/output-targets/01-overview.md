---
title: Rindo Output Targets
sidebar_label: Overview
description: Rindo Output Targets
slug: /output-targets
---

# Output Targets

One of the more powerful features of the compiler is its ability to generate various builds depending on _"how"_ the components are going to be used. Rindo is able to take an app's source and compile it to numerous targets, such as a webapp to be deployed on an http server, as a third-party component lazy-loaded library to be distributed on [npm](https://www.npmjs.com/), or a vanilla custom elements bundle. By default, Rindo apps have an output target type of `www`, which is best suited for a webapp.

## Output Target Types:

- [`dist`: Distribution](./dist.md)
- [`www`: Website](./www.md)
- [`dist-custom-elements`: Custom Elements](./custom-elements.md)

## Example:

```tsx
import { Config } from '@rindo/core';

export const config: Config = {
  outputTargets: [
    {
      type: 'dist',
    },
    {
      type: 'www',
    },
  ],
};
```

## Primary Package Output Target Validation

If `validatePrimaryPackageOutputTarget: true` is set in your project's [Rindo config](../config/01-overview.md#validateprimarypackageoutputtarget) Rindo will
attempt to validate certain fields in your `package.json` that correspond with the generated distribution code. Because Rindo can output many different formats
from a single project, it can only validate that the `package.json` has field values that align with one of the specified output targets in your project's config.
So, Rindo allows you to designate which output target should be used for this validation and thus which will be the default distribution when bundling your
project.

This behavior only affects a small subset of output targets so a flag exists on the following targets that are eligible for this level of validation: `dist`, `dist-types`,
`dist-collection`, and `dist-custom-elements`. For any of these output targets, you can configure the target to be validated as follows:

```ts title='rindo.config.ts'
import { Config } from '@rindo/core';

export const config: Config = {
  ...,
  outputTargets: [
    {
      type: 'dist',
      // This flag is what tells Rindo to use this target for validation
      isPrimaryPackageOutputTarget: true,
      ...
    },
    ...
  ],
  // If this is not set, Rindo will not validate any targets
  validatePrimaryPackageOutputTarget: true,
};
```

:::note
Rindo can only validate one of these output targets for your build. If multiple output targets are marked for validation, Rindo will use
the first designated target in the array and ignore all others.
:::
