import { themes as prismThemes } from 'prism-react-renderer';

import versions from './versions.json';

const HOSTNAME = 'rindojs.web.app';

function isPrerelease(version) {
  return version.includes('alpha') || version.includes('beta') || version.includes('rc');
}

function getLastVersion() {
  const firstStableVersion = versions.find((version) => !isPrerelease(version));
  return firstStableVersion ?? versions[0];
}

function getNextVersionName() {
  return 'Next';
}

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Rindo',
  tagline: 'Build. Customize. Distribute. Adopt.',
  url: `https://${HOSTNAME}`,
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  onBrokenAnchors: 'throw',
  favicon: 'img/favicon.png',

  organizationName: 'familyjs',
  projectName: 'rindo-site',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          // routeBasePath: '/',
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/familyjs/rindo-site/tree/main',
          remarkPlugins: [[require('@docusaurus/remark-plugin-npm2yarn'), { sync: true }]],
          // breadcrumbs: false,
          async sidebarItemsGenerator({ defaultSidebarItemsGenerator, ...props }) {
            const defaultSidebar = await defaultSidebarItemsGenerator(props);

            const EXCLUDE_TOP_LEVEL_IDS = ['build-variables', 'telemetry'];

            // remove the items in `EXCLUDE_TOP_LEVEL_IDS`, which may exist in 1+  subdirectories for versioned docs
            // note: this removes any `EXCLUDE_TOP_LEVEL_IDS` entry for _all_ versioned docs and the top level `./docs`
            const filteredSidebar = defaultSidebar.filter(
              (item) => !EXCLUDE_TOP_LEVEL_IDS.find((toExclude) => item.id?.match(`.*${toExclude}$`)),
            );

            return filteredSidebar;
          },
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,

          lastVersion: getLastVersion(),
          versions: {
            current: {
              label: `${getNextVersionName()} 🚧`,
            },
          },
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],

  plugins: [
    [
      require.resolve('docusaurus-lunr-search'),
      {
        enableHighlight: true,
      },
    ],
  ],

  themes: ['docusaurus-theme-github-codeblock'],

  themeConfig: {
    navbar: {
      hideOnScroll: false,
      title: 'RindoJS',
      logo: {
        alt: 'Rindo Site Logo',
        src: `/img/logo-dark.png`,
        srcDark: `/img/logo-light.png`,
        href: `https://${HOSTNAME}`,
        target: '_self',
      },
      items: [
        // Left
        {
          type: 'docsVersionDropdown',
          dropdownActiveClassDisabled: true,
        },
        // Right
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
          value: '<div class="separator"></div>',
        },
        {
          href: 'https://github.com/rindo-community',
          label: 'Community',
          position: 'right',
        },
        {
          type: 'html',
          position: 'right',
          value: '<div class="separator"></div>',
        },
        {
          type: 'localeDropdown',
          position: 'right',
          dropdownItemsAfter: [],
          className: 'icon-link language navbar__item',
        },
        {
          href: 'https://github.com/familyjs/rindo',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
          // target: '_blank',
        },
      ],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['jsx', 'tsx', 'bash', 'typescript', 'javascript', 'markup', 'css', 'json', 'diff'],
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
    codeblock: {
      showGithubLink: true,
      githubLinkLabel: 'View on GitHub',
      showRunmeLink: false,
    },
    footer: {
      // style: 'dark',
      links: [
        {
          title: 'Overview',
          items: [
            {
              label: 'Introduction',
              to: '/docs/introduction',
            },
            {
              label: 'Getting Started',
              to: '/docs/getting-started',
            },
            {
              label: 'Component API',
              to: '/docs/api',
            },
            {
              label: 'Guides',
              to: '/docs/assets',
            },
            {
              label: 'FAQ',
              to: '/docs/faq',
            },
          ],
        },
        {
          title: 'Docs',
          items: [
            {
              label: 'Framework Integrations',
              to: '/docs/overview',
            },
            {
              label: 'Static Site Generation',
              to: '/docs/static-site-generation',
            },
            {
              label: 'Config',
              to: '/docs/config',
            },
            {
              label: 'Output Targets',
              to: '/docs/output-targets',
            },
            {
              label: 'Testing',
              to: '/docs/testing-overview',
            },
            {
              label: 'Core Compiler API',
              to: '/docs/compiler-api',
            },
          ],
        },
        {
          title: 'Products',
          items: [
            {
              label: 'Family IO',
              href: 'https://familio.web.app',
            },
            {
              label: 'Family Framework',
              href: 'https://family-js.web.app',
            },
            {
              label: 'Jigra',
              href: 'https://jigrajs.web.app',
            },
            {
              label: 'Rindo',
              href: 'https://rindojs.web.app',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/familyks/rindo',
            },
          ],
        },
      ],
      copyright: `© 2022-${new Date().getFullYear()} Rindo | MIT License<br/>A project built by FamilyJS`,
    },
  },
};

export default config;
