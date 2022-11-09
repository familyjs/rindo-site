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

Both types of testing use [Jest](https://jestjs.io/) as the JavaScript testing solution. End-to-end tests also use
[Puppeteer](https://pptr.dev/) instead of a Node environment. This allows end-to-end tests to run within an actual
browser in order to provide more realistic results.

## Library Support

Rindo uses [Jest](https://jestjs.io/) and [Puppeteer](https://pptr.dev/) as its testing libraries, and allows
developers to install both libraries using their preferred package manager.

If you created a project using `npm init rindo`, these libraries were installed for you. Depending on when your
project was created, you may or may not have the latest supported version installed.

To view current version support for both Jest and Puppeteer, please see the 
[Rindo support policy for testing libraries](support-policy#testing-libraries).

## Testing Commands

Rindo tests are run using the command `rindo test`, followed by one or more optional flags:
- `--spec` to run unit tests
- `--e2e` to run end-to-end tests
- `--watchAll` to watch the file system for changes, and rerun tests when changes are detected

When the `--spec` and/or `--e2e` flags are provided, Rindo will automatically run the tests associated with each flag.

Below a series of example `npm` scripts which can be added to the project's `package.json` file to run Rindo tests:

```json
{
    "scripts": {
      "test": "rindo test --spec",
      "test.watch": "rindo test --spec --watchAll",
      "test.end-to-end": "rindo test --e2e"
    }
}
```

Each command above begins with `rindo test`, which tells Rindo to run tests. Note that each `rindo test` command 
in example above is followed one or more of the optional flags. Looking at each script, one at a time:
- the `test` script runs unit tests for our Rindo project.
- the `test.watch` script runs unit tests for our Rindo project. It watches the filesystem for changes, and reruns
tests when changes are detected.
- the `test.end-to-end` script runs the end-to-end tests for our Rindo project.

If you created a project using `npm init rindo`, these scripts are provided to you automatically.

Rindo does not prescribe any specific naming convention for the names of your scripts. The `test.watch` script could
as easily be named `test-watch`, `test.incremental`, etc. As long as the script itself uses the `rindo test` command,
your tests should be run.

### Testing Configuration

Rindo will apply defaults from data it has already gathered. For example, Rindo already knows what directories to look through, and what files are spec and e2e files. Jest can still be configured using the same config names, but now using the rindo config `testing` property. Please see the [Testing Config docs](config#testing) for more info.

```tsx
import { Config } from '@rindo/core';
export const config: Config = {
  testing: {
    testPathIgnorePatterns: [...]
  }
};
```

## Running and Debugging Tests in VS Code

Adding the following configurations to `.vscode/launch.json` will allow you to use the VS Code Debugger to run the Rindo test runner for the currently active file in your editor. Just make sure you're in the test file you want to run, then select the debug configuration respectively (depending on whether it's a spec or e2e test), and hit the play button.

```json
{
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "E2E Test Current File",
      "cwd": "${workspaceFolder}",
      "program": "${workspaceFolder}/node_modules/.bin/rindo",
      "args": ["test", "--e2e", "${relativeFile}"],
      "console": "integratedTerminal",
      "internalConsoleOptions": "neverOpen",
      "disableOptimisticBPs": true
    },
    {
      "type": "node",
      "request": "launch",
      "name": "Spec Test Current File",
      "cwd": "${workspaceFolder}",
      "program": "${workspaceFolder}/node_modules/.bin/rindo",
      "args": ["test", "--spec", "${relativeFile}"],
      "console": "integratedTerminal",
      "internalConsoleOptions": "neverOpen",
      "disableOptimisticBPs": true
    }
  ]
}
```
