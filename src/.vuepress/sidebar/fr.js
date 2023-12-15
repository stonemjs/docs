import { sidebar } from "vuepress-theme-hope";

export const frSidebar = sidebar({
  "/docs/": [
    {
      text: "Débuter",
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
      text: "Essentiels",
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
      text: "Approfondir",
      icon: "book-open-reader",
      prefix: "docs/deeper/",
      children: "structure",
    },
    {
      text: "Base de données",
      icon: "database",
      prefix: "docs/database/",
      children: "structure",
    },
    {
      text: "Sécurité",
      icon: "shield",
      prefix: "docs/security/",
      children: "structure",
    },
    {
      text: "Nuage",
      icon: "cloud",
      prefix: "docs/cloud/",
      children: "structure",
    },
    {
      text: "Tests",
      icon: "circle-check",
      prefix: "docs/testing/",
      children: "structure",
    },
  ],
});
