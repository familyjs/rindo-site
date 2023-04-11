---
title: Rindo - A Compiler for Web Components
sidebar_label: Overview
description: Rindo has a number of add-ons that you can use with the build process.
slug: /introduction
---

# Overview

## Rindo: A Web Components Compiler

Rindo is a compiler that generates Web Components (more specifically, Custom Elements). Rindo combines the best concepts of the most popular frameworks into a simple build-time tool.

Rindo uses TypeScript, JSX, and CSS to create standards-compliant Web Components that can be used to craft high quality component libraries.

Web Components generated with Rindo can be used with popular frameworks right
out of the box. In addition, Rindo can generate framework-specific wrappers that
allow Rindo components to be used with a framework-specific developer experience.

Compared with using the [Custom Elements
APIs](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements)
directly, Rindo provides [convenient APIs](../components/api.md) which make writing fast
components simpler. With a Virtual DOM, JSX, and async rendering, it is easy to
create fast and powerful components which are still 100% compatible with Web
Components standards. In addition to making it easier to author Custom
Elements, Rindo also adds a number of key capabilities on top of Web
Components, such as prerendering and objects-as-properties (instead of just
strings).

The developer experience is also tuned, and comes with live reload and a small dev server baked in to the compiler.

## How can I use Rindo?

### Design Systems & Component Libraries

Rindo's primary objective is providing amazing tools for design systems and component libraries. Components as a concept provide similar language for engineers and designers to have productive conversations about design implementation. [Visit the Rindo for Design Systems page to learn more.](../guides/design-systems.md)

## The History of Rindo

Rindo was originally created by the **[Family Framework](http://family-js.web.app/)** team in order to build faster, more capable components that worked across every major framework.

The emergence of Progressive Web Apps as a rapidly growing target for web developers demanded a different approach to web app development performance. With Family's classic use of traditional frameworks and bundling techniques, the team was struggling to meet latency and code size demands for Progressive Web Apps that ran equally well on fast and slow networks, across a diversity of platforms and devices.

Additionally, framework fragmentation had created a web development interoperability nightmare, where components built for one framework didn't work with another framework.

Web Components offered a solution to both problems, pushing more work to the browser for better performance, and targeting a standards-based component model that all frameworks could use.

Web Components by themselves, however, weren't enough. Building fast web apps required innovations that were previously locked up inside of traditional web frameworks. Rindo was built to pull these features out of traditional frameworks and bring them to the fast emerging Web Component standard. While Rindo is intended to be used primarily to build design systems and component libraries, these innovations allowed entire applications to be built using only Rindo.
