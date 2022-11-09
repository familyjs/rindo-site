import { defineConfig } from 'witepress'

export default defineConfig({
  title: 'Rindo',
  description: 'Build. Customize. Distribute. Adopt.',

  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
    ['meta', { property: 'og:type', content: 'website' }]
  ],

  kdu: {
    reactivityTransform: true
  },

  themeConfig: {
    logo: '/logo.svg',

    editLink: {
      pattern: 'https://github.com/navify/rindo-site/edit/main/docs/:path',
      text: 'Suggest changes to this page'
    },

    socialLinks: [{ icon: 'github', link: 'https://github.com/navify/' }],

    localeLinks: {
      text: 'English'
    },

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-present Rindo'
    },

    nav: [
      { text: 'Guide', link: '/guide/', activeMatch: '/guide/' }
    ],

    sidebar: {
      '/guide/': [
        {
          text: 'Introduction',
          items: [
            {
              text: 'Overview',
              link: '/guide/introduction'
            },
            {
              text: 'Rindo Goals And Objectives',
              link: '/guide/goals-and-objectives'
            },
            {
              text: 'Getting Started',
              link: '/guide/'
            },
            {
              text: 'My First Component',
              link: '/guide/my-first-component'
            }
          ]
        },
        {
          text: 'Components',
          items: [
            {
              text: 'API',
              link: '/guide/api'
            },
            {
              text: 'Component',
              link: '/guide/component'
            },
            {
              text: 'Lifecycle Methods',
              link: '/guide/component-lifecycle'
            },
            {
              text: 'Properties',
              link: '/guide/properties'
            },
            {
              text: 'Internal State',
              link: '/guide/state'
            },
            {
              text: 'Reactive Data',
              link: '/guide/reactive-data'
            },
            {
              text: 'Using JSX',
              link: '/guide/templating-jsx'
            },
            {
              text: 'Events',
              link: '/guide/events'
            },
            {
              text: 'Methods',
              link: '/guide/methods'
            },
            {
              text: 'Host Element',
              link: '/guide/host-element'
            },
            {
              text: 'Styling',
              link: '/guide/styling'
            },
            {
              text: 'Functional Components',
              link: '/guide/functional-components'
            }
          ]
        },
        {
          text: 'Framework Integrations',
          items: [
            {
              text: 'Overview',
              link: '/guide/overview'
            },
            {
              text: 'Bindings',
              link: '/guide/framework-bindings'
            },
            {
              text: 'React',
              link: '/guide/react'
            },
            {
              text: 'Kdu',
              link: '/guide/kdu'
            },
            {
              text: 'JavaScript',
              link: '/guide/javascript'
            }
          ]
        },
        {
          text: 'Static Site Generation',
          items: [
            {
              text: 'Overview',
              link: '/guide/static-site-generation'
            },
            {
              text: 'Prerender Config',
              link: '/guide/prerender-config'
            },
            {
              text: 'Basics',
              link: '/guide/static-site-generation-basics'
            },
            {
              text: 'Debugging',
              link: '/guide/static-site-generation-debugging'
            },
            {
              text: 'Meta tags',
              link: '/guide/static-site-generation-meta-tags'
            },
            {
              text: 'Server Side Rendering',
              link: '/guide/static-site-generation-server-side-rendering-ssr'
            },
            {
              text: 'Deployment',
              link: '/guide/static-site-generation-deployment'
            }
          ]
        },
        {
          text: 'Config',
          items: [
            {
              text: 'Overview',
              link: '/guide/config'
            },
            {
              text: 'Dev Server',
              link: '/guide/dev-server'
            },
            {
              text: 'Plugins',
              link: '/guide/plugins'
            },
            {
              text: 'Extras',
              link: '/guide/config-extras'
            },
            {
              text: 'CLI',
              link: '/guide/cli'
            }
          ]
        },
        {
          text: 'Output Targets',
          items: [
            {
              text: 'Overview',
              link: '/guide/output-targets'
            },
            {
              text: 'dist',
              link: '/guide/distribution'
            },
            {
              text: 'dist-custom-elements',
              link: '/guide/custom-elements'
            },
            {
              text: 'dist-custom-elements-bundle',
              link: '/guide/custom-elements-bundle'
            },
            {
              text: 'www',
              link: '/guide/www'
            },
            {
              text: 'stats',
              link: '/guide/stats'
            },
            {
              text: 'docs-readme',
              link: '/guide/docs-readme'
            },
            {
              text: 'docs-json',
              link: '/guide/docs-json'
            },
            {
              text: 'docs-custom',
              link: '/guide/docs-custom'
            },
            {
              text: 'docs-vscode',
              link: '/guide/docs-vscode'
            },
            {
              text: 'Copy Tasks',
              link: '/guide/copy-tasks'
            }
          ]
        },
        {
          text: 'Guides',
          items: [
            {
              text: 'Assets',
              link: '/guide/assets'
            },
            {
              text: 'Bundling',
              link: '/guide/module-bundling'
            },
            {
              text: 'Design Systems',
              link: '/guide/design-systems'
            },
            {
              text: 'Forms',
              link: '/guide/forms'
            },
            {
              text: 'Hydrate App',
              link: '/guide/hydrate-app'
            },
            {
              text: 'Publishing',
              link: '/guide/publishing'
            },
            {
              text: 'Service Workers',
              link: '/guide/service-workers'
            },
            {
              text: 'Rindo Store',
              link: '/guide/rindo-store'
            },
            {
              text: 'Style Guide',
              link: '/guide/style-guide'
            },
            {
              text: 'Typed Components',
              link: '/guide/typed-components'
            },
            {
              text: 'Web Workers',
              link: '/guide/web-workers'
            }
          ]
        },
        {
          text: 'Testing',
          items: [
            {
              text: 'Overview',
              link: '/guide/testing-overview'
            },
            {
              text: 'Config',
              link: '/guide/testing-config'
            },
            {
              text: 'Unit Testing',
              link: '/guide/unit-testing'
            },
            {
              text: 'End-to-end Testing',
              link: '/guide/end-to-end-testing'
            },
            {
              text: 'Mocking',
              link: '/guide/mocking'
            },
            {
              text: 'Visual Screenshot Diff',
              link: '/guide/screenshot-visual-diff'
            },
            {
              text: 'Screenshot Connector',
              link: '/guide/screenshot-connector'
            }
          ]
        },
        {
          text: 'Core Compiler API',
          items: [
            {
              text: 'Compiler API',
              link: '/guide/compiler-api'
            },
            {
              text: 'CLI API',
              link: '/guide/cli-api'
            },
            {
              text: 'Dev Server API',
              link: '/guide/dev-server-api'
            }
          ]
        },
        {
          text: 'Legal',
          items: [
            {
              text: 'Telemetry',
              link: '/guide/telemetry'
            }
          ]
        },
        {
          text: 'Reference',
          items: [
            {
              text: 'Support Policy',
              link: '/guide/support-policy'
            },
            {
              text: 'Versioning',
              link: '/guide/versioning'
            },
            {
              text: 'Browser Support',
              link: '/guide/browser-support'
            },
            {
              text: 'FAQ',
              link: '/guide/faq'
            }
          ]
        }
      ]
    }
  }
})
