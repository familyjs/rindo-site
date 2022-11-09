# Overview

## Rindo: A Web Components Compiler

Rindo is a compiler that generates Web Components (more specifically, Custom Elements). Rindo combines the best concepts of the most popular frameworks into a simple build-time tool.

Rindo uses TypeScript, JSX, and CSS to create standards-based Web Components that can be used to craft high quality component libraries, design systems, and applications.

Rindo generates standards-compliant Web Components that can work with popular frameworks right out of the box. In addition, Rindo can be used to generate framework native components that can be used just like any other components in your framework of choice. Rindo accomplishes this by wrapping your Web Components via Rindo's Output Target feature.

Compared to using Custom Elements directly, Rindo provides [extra APIs](./api.md) that makes writing fast components simpler. APIs like Virtual DOM, JSX, and async rendering make fast, powerful components easy to create, while still maintaining 100% compatibility with Web Components. Rindo also enables a number of key capabilities on top of Web Components, in particular, prerendering, and objects-as-properties (instead of just strings).

The developer experience is also tuned, and comes with live reload and a small dev server baked in to the compiler.

## How can I use Rindo?

### Design Systems & Component Libraries

Rindo's primary objective is providing amazing tools for design systems and component libraries. Components as a concept provide similar language for engineers and designers to have productive conversations about design implementation. [Visit the Rindo for Design Systems page to learn more.](./design-systems.md)

## The History of Rindo

Rindo was originally created by the [Navify Framework](https://navifyframework.web.app) team in order to build faster, more capable components that worked across every major framework.

The emergence of Progressive Web Apps as a rapidly growing target for web developers demanded a different approach to web app development performance. With Navify's classic use of traditional frameworks and bundling techniques, the team was struggling to meet latency and code size demands for Progressive Web Apps that ran equally well on fast and slow networks, across a diversity of platforms and devices.

Additionally, framework fragmentation had created a web development interoperability nightmare, where components built for one framework didn't work with another framework.

Web Components offered a solution to both problems, pushing more work to the browser for better performance, and targeting a standards-based component model that all frameworks could use.

Web Components by themselves, however, weren't enough. Building fast web apps required innovations that were previously locked up inside of traditional web frameworks. Rindo was built to pull these features out of traditional frameworks and bring them to the fast emerging Web Component standard. While Rindo is intended to be used primarily to build design systems and component libraries, these innovations allowed entire applications to be built using only Rindo.
