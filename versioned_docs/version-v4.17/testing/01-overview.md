---
title: Testing
sidebar_label: Overview
description: Testing overview.
slug: /testing-overview
---

# Testing

In order to ensure that your Rindo components work the way you expect, Rindo provides testing support out of the
box. Rindo offers both unit testing and end-to-end testing capabilities.

## Unit Testing vs. End-to-end Testing

Testing within Rindo is broken up into two distinct types: Unit tests and End-to-end (e2e) tests.

There are several philosophies on how testing should be done, and how to differentiate what should be considered a unit
test versus an end-to-end test. Rindo takes an opinionated stance so developers have a description of each to better
choose when to use each type of testing:

**Unit tests** focus on testing a component's methods in isolation. For example, when a method is given the argument
`X`, it should return `Y`.

**End-to-end tests** focus on how the components are rendered in the DOM and how the individual components work
together. For example, when `my-component` has the `X` attribute, the child component then renders the text `Y`, and
expects to receive the event `Z`.

## Library Support

Rindo currently supports the following tools for testing components:

- [Rindo Test Runner](./rindo-testrunner/01-overview.md): a built-in test runner based on Jest for unit and end-to-end testing with Puppeteer to run within an actual browser in order to provide more realistic results.

:::info

We are actively working to support a wider range of testing tools, including Playwright. Stay tuned for updates!

:::
