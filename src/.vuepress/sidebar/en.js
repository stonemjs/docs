import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/docs/": [
    {
      text: "Getting Started",
      icon: "rocket",
      children: [
        '', 
        'installation',
        'structure',
        'configuration',
        'deployment',
        'cloud',
      ],
    },
    {
      text: "Architecture",
      icon: "sitemap",
      prefix: "docs/architecture/",
      children: "structure",
    },
    {
      text: "Essentials",
      icon: "book-open",
      prefix: "docs/essentials/",
      children: "structure",
    },
    {
      text: "Http",
      icon: "server",
      prefix: "docs/http/",
      children: "structure",
    },
    {
      text: "Digging deeper",
      icon: "book-open-reader",
      prefix: "docs/deeper/",
      children: "structure",
    },
    {
      text: "Database",
      icon: "database",
      prefix: "docs/database/",
      children: "structure",
    },
    {
      text: "Security",
      icon: "shield",
      prefix: "docs/security/",
      children: "structure",
    },
    {
      text: "Cloud",
      icon: "cloud",
      prefix: "docs/cloud/",
      children: "structure",
    },
    {
      text: "Testing",
      icon: "circle-check",
      prefix: "docs/testing/",
      children: "structure",
    },
  ],
});
