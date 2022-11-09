# Framework bindings

Unfortunately the experience of integrating web components into existing applications can be tricky at times. More about this can be read at [https://custom-elements-everywhere.com/](https://custom-elements-everywhere.com/). In order to accommodate the various issues the Rindo team has created new output target plugins to make the process simpler.

The plugins add additional output targets for each framework binding that is included. This output target will emit a native react/kdu library, just like if your components were originally written using any of these frameworks.

By using rindo bindings, you can build your components once, and rindo will emit react/kdu libraries, this way the consumers of your components can enjoy all the framework features.

- [React bindings](react#bindings)
