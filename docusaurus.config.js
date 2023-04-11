// @ts-check

const path = require('path');

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const HOSTNAME = 'rindojs.web.app';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Rindo',
  tagline: 'Build. Customize. Distribute. Adopt.',
  url: `https://${HOSTNAME}`,
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',

  organizationName: 'familyjs',
  projectName: 'rindo-site',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  scripts: [
    {
      src: "https://unpkg.com/navicons@latest/dist/navicons/navicons.js",
      async: true,
    }
  ],

  presets: [
    [
      '@family-internal/preset-classic',
      /** @type {import('@family-internal/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/familyjs/rindo-site/tree/main',
          remarkPlugins: [
            [require('@docusaurus/remark-plugin-npm2yarn'), {sync: true}],
          ],
          breadcrumbs: false,
          async sidebarItemsGenerator({
            defaultSidebarItemsGenerator,
            ...props
          }) {
            const defaultSidebar = await defaultSidebarItemsGenerator(props);

            const EXCLUDE_TOP_LEVEL_IDS = ['build-variables', 'telemetry']

            // remove the items in `EXCLUDE_TOP_LEVEL_IDS`, which may exist in 1+ subdirectories for versioned docs
            // note: this removes any `EXCLUDE_TOP_LEVEL_IDS` entry for _all_ versioned docs and the top level `./docs`
            const filteredSidebar = defaultSidebar.filter((item) =>
               !EXCLUDE_TOP_LEVEL_IDS.find((toExclude) => item.id?.match(`.*${toExclude}$`))
            );

            return filteredSidebar;
          },
        },
        theme: {
          customCss: require.resolve('./src/css/custom.scss'),
        },
      }),
    ]
  ],

  plugins: [
    ['docusaurus-plugin-module-alias',
      {
        alias: {
          react: path.resolve(__dirname, './node_modules/react'),
          'react-dom': path.resolve(__dirname, './node_modules/react-dom'),
        },
      }
    ]
  ],

  themeConfig:
    /** @type {import('@family-internal/preset-classic').ThemeConfig} */
    ({
      navbar: {
        hideOnScroll: false,
        logo: {
          alt: 'Rindo Logo',
          src: 'img/logo-dark.svg',
          srcDark: "img/logo-light.svg",
          href: `https://${HOSTNAME}`,
          target: '_self',
        },
        items: [
          {
            type: 'docsVersionDropdown',
            position: 'right',
            dropdownActiveClassDisabled: true,
          },
          {
            type: 'search',
            position: 'right',
          },
          {
            type: 'doc',
            docId: 'introduction/overview',
            position: 'right',
            label: 'Docs',
          },
          {
            type: 'html',
            position: 'right',
            value: '<div class="navbar__separator"></div>',
          },
          {
            href: 'https://github.com/rindo-community',
            label: 'Community',
            position: 'right',
          },
          {
            type: 'html',
            position: 'right',
            value: '<div class="navbar__separator"></div>',
          },
          {
            type: 'html',
            position: 'right',
            value: '<a href="https://github.com/familyjs/rindo" target="_blank" rel="noopener" class="navbar__icon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none"><path fill="#03060B" d="M8 0a8.1 8.1 0 0 0-8 8.2c0 3.63 2.3 6.7 5.47 7.79l.14.01c.3 0 .4-.22.4-.4v-1.4c-.3.06-.57.1-.81.1-1.54 0-1.89-1.2-1.89-1.2-.36-.95-.89-1.2-.89-1.2-.7-.5 0-.5.05-.5.8.06 1.23.84 1.23.84.4.7.94.9 1.41.9.38 0 .72-.12.92-.21.07-.53.28-.9.5-1.1-1.77-.2-3.64-.91-3.64-4.05 0-.9.31-1.63.82-2.2-.08-.21-.35-1.05.08-2.18l.18-.01c.3 0 .94.1 2.02.86a7.5 7.5 0 0 1 4.01 0c1.08-.75 1.73-.86 2.02-.86l.18.01c.44 1.13.16 1.97.08 2.18.5.57.82 1.3.82 2.2 0 3.15-1.87 3.84-3.65 4.04.28.25.54.75.54 1.52l-.01 2.25c0 .2.1.41.4.41l.15-.01A8.19 8.19 0 0 0 16 8.2 8.1 8.1 0 0 0 8 0Z"/></svg></a>',
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['jsx', 'tsx', 'bash', 'typescript', 'javascript', 'markup', 'css', 'json', 'diff']
      },
      // algolia: {
      //   // The application ID provided by Algolia
      //   appId: 'SHPBLZKAHB',
  
      //   // Public API key: it is safe to commit it
      //   apiKey: '460d731eb73339debc2b7d3662c207ac',
  
      //   indexName: 'rindojs',
  
      //   // Optional: see doc section below
      //   contextualSearch: true,
      // },
      image: `https://${HOSTNAME}/rindo-og.png`,
      footer: {
        copyright: `Released under the MIT License.<br/>Copyright © 2022-${new Date().getFullYear()} Rindo`,
      }
    }),
};

module.exports = config;
