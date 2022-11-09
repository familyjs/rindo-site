# Getting Started

## Starting a new project

Rindo requires a recent LTS version of [NodeJS](https://nodejs.org/) and npm. Make sure you've installed and/or updated Node before continuing.

::: warning
Note that you will need to use npm 6 or higher.
:::

``` bash
npm init rindo
```

Rindo can be used to create standalone components, or entire apps. When running `npm init rindo`, you will be provided with a prompt so that you can choose the type of project to start.

``` bash
? Select a starter project.

Starters marked as [community] are developed by the Rindo
Community, rather than Navify. For more information on the 
Rindo Community, please see github.com/rindo-community
› - Use arrow-keys. Return to submit.

❯   component          Collection of web components that can be
                       used anywhere
    app [community]    Minimal starter for building a Rindo 
                       app or website
```

Selecting the 'component' option will prompt you for the name of your project.

``` bash
✔ Pick a starter › component
? Project name › my-first-rindo-project
```

Here, we've named our project 'my-first-rindo-project'. After hitting `ENTER` to confirm your choices, the CLI will scaffold a Rindo project for us in a directory that matches the project name you provided.

Upon successfully creating our project, the CLI will print something similar to the following to the console:

``` bash
✔ Project name › my-first-rindo-project
✔ All setup  in 26 ms

  We suggest that you begin by typing:

  $ cd my-first-rindo-project
  $ npm install
  $ npm start

  $ npm start
    Starts the development server.

  $ npm run build
    Builds your project in production mode.

  $ npm test
    Starts the test runner.

  Further reading:

   - https://github.com/navify/rindo-component-starter

  Happy coding! 🎈
```

The first section describes a few commands required to finish getting your project bootstrapped.

``` bash
    $ cd my-first-rindo-project
    $ npm install
    $ npm start
```

This will change your current directory to my-first-rindo-project (or whatever you named your project), install your dependencies for you, and start the development server.

The second section of the output describes a few useful commands available during the development process:

- `npm start` starts a local development server. The development server will open a new browser tab containing your project's components. The dev-server uses hot-module reloading to update your components in the browser as you modify them for a rapid feedback cycle.
- `npm run build` creates a production-ready version of your components. The components generated in this step are not meant to be used in the local development server, but rather within a project that consumes your components.

- `npm test` runs your project's tests. The Rindo CLI has created both end-to-end and unit tests when scaffolding your project.

At this time, Rindo does not interact with any version control systems (VCS) when running `npm init rindo`. If you wish to place your project under version control, we recommend initializing your VCS now. If you wish to use git, run the following after changing your current directory to the root of your Rindo project:

``` bash
$ git init
$ git add -A
$ git commit -m "initialize project using rindo cli" 
```

## Updating Rindo

To get the latest version of @rindo/core you can run:

``` bash
npm install @rindo/core@latest --save-exact
```
