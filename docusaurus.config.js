// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Digital Agency Website Template",
  tagline:
    "A simple, beautiful, and responsive website template for digital agencies.",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://digital-agency-website-template.tekminewe.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "tekminewe", // Usually your GitHub org/user name.
  projectName: "digital-agency-website-template", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  scripts: [
    {
      src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4412421169773097",
      async: true,
      crossorigin: "anonymous",
    },
  ],

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        sitemap: {
          changefreq: "weekly",
          priority: 0.5,
          ignorePatterns: ["/tags/**"],
          filename: "sitemap.xml",
        },
        gtag: {
          trackingID: "G-P82DL3XBW2",
          anonymizeIP: true,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: "img/logo.png",
      navbar: {
        title: "Maxime - Digital Agency Website Template",
        logo: {
          alt: "Maxime - Digital Agency Website Template",
          src: "img/logo.svg",
        },
        items: [
          {
            to: "https://www.tekminewe.com/product/digital-agency-website-template/",
            label: "Get Template",
            position: "right",
          },
          {
            to: "https://digital-agency-website-template-demo.tekminewe.com",
            label: "Live Demo",
            position: "right",
          },
          {
            type: "doc",
            docId: "intro",
            position: "right",
            label: "Docs",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [],
        copyright: `Copyright © ${new Date().getFullYear()} tekminewe.com`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
