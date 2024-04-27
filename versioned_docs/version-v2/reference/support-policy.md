---
title: Support Policy
sidebar_label: Support Policy
description: Support Policy
slug: /support-policy
---

# Support Policy

## TypeScript Support

Rindo acts as a compiler for a project's web components, and works closely with the TypeScript compiler to transform
TSX to vanilla JavaScript. To ensure compatibility between the two, Rindo takes an opinionated stance on which version
of the TypeScript compiler must be used.

Rindo includes a recent copy of the TypeScript compiler in its distributable\* to guarantee this compatibility.
The Rindo team is committed to keeping its version of TypeScript up to date and, as of Rindo v2.10.0, attempts to be
within one minor version of the latest TypeScript release.

The table below describes recent versions of Rindo and the version of TypeScript each version shipped with.

| Rindo Version | TypeScript Version |
| :-----------: | :----------------: |
|    v2.18.0    |       v4.7.4       |
|    v2.5.0     |       v4.2.3       |

The TypeScript team releases a new minor version of the TypeScript compiler approximately once every three months. To
accomplish its goal of staying within one minor version of the latest release, Rindo will update its version of
TypeScript once every three months as well. Updates to the version of TypeScript will often, but not always, occur in a
[minor version release](./versioning.md#minor-release) of Rindo.

The Rindo team acknowledges that TypeScript minor version releases may contain breaking changes. The Rindo team will
do everything in its power to avoid propagating breaking changes to its user base.

\* The TypeScript compiler is never included in the output of your Rindo project, and is only used for compilation
and type checking purposes.

## Compatibility Recommendations

Rindo is in many regards an opinionated library, and includes much of the software necessary to get users building web
components as quickly as possible. There are a few pieces of software that Rindo allows users to choose to best fit
their team, organizational structure, and existing technical stack. The Rindo team has compiled a series of
compatibility tables to describe the interoperability requirements of these pieces of software and Rindo.

### JavaScript Runtime

| Rindo Version | Node v10 | Node v12 | Node v14 | Node v16 |  Node v18   | Deno\*  |
| :-----------: | :------: | :------: | :------: | :------: | :---------: | :-----: |
|      V2       | &#10060; | &#9989;  | &#9989;  | &#9989;  | &#9888;\*\* | &#9888; |
|      V1       | &#9989;  | &#9989;  | &#9989;  | &#9989;  |  &#10060;   | &#9888; |

\* Experimental Deno support was available in Rindo v1 through v2. This experimental support was removed in v2.

\*\* Node 18 is likely to work with Rindo v2, although it was never formally supported

### Testing Libraries

#### Jest

| Rindo Version | Jest v24 | Jest v25 | Jest v26 | Jest v27 | Jest v28\* |
| :-----------: | :------: | :------: | :------: | :------: | :--------: |
|      V2       | &#9989;  | &#9989;  | &#9989;  | &#9989;  |  &#10060;  |
|      V1       | &#9989;  | &#9989;  | &#9989;  | &#10060; |  &#10060;  |

\* Support for Jest 28 will be released in an upcoming version of Rindo.

#### Puppeteer

| Rindo Version | Puppeteer v5 | Puppeteer v6 | Puppeteer v7 | Puppeteer v8 | Puppeteer v9 | Puppeteer v10 |
| :-----------: | :----------: | :----------: | :----------: | :----------: | :----------: | :-----------: |
|      V2       |   &#9989;    |   &#9989;    |   &#9989;    |   &#9989;    |   &#9989;    |    &#9989;    |
|      V1       |   &#9989;    |   &#9989;    |   &#9989;    |   &#9989;    |   &#9989;    |   &#10060;    |
