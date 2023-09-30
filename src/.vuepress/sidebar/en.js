import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/docs/": [
    {
      text: "Getting Started",
      icon: "rocket",
      collapsible: false,
      children: [
        { text: 'Synopsis', link: 'README.md' },
        'installation',
        'structure',
        'configuration',
        'deployment',
      ],
    },
    {
      text: "Core Concepts",
      icon: "sitemap",
      collapsible: true,
      prefix: 'architecture/',
      children: [
        { text: 'Synopsis', link: 'README.md' },
        'events',
        'adapter',
        'container',
        'providers',
      ],
    },
    {
      text: "Essentials",
      icon: "star",
      collapsible: true,
      prefix: "essentials/",
      children: [
        'middleware',
        'events',
        'request',
        'response',
        'routing',
      ],
    },
    {
      text: "Deep dive",
      icon: "book-open-reader",
      collapsible: true,
      prefix: "deeper/",
      children: [
        'cli',
        'configurations',
        'development',
      ],
    },
  ],
  "/packages/": [
    {
      text: "Synopsis",
      icon: "rocket",
      link: 'README.md',
    },
    {
      text: "Pipeline",
      icon: "timeline",
      collapsible: true,
      prefix: "pipeline/",
      children: [
        { text: 'Synopsis', link: 'README.md' },
        'installation',
        'getting-started',
        'usage',
      ]
    },
    {
      text: "Service Container",
      icon: "cube",
      collapsible: true,
      prefix: "service-container/",
      children: [
        { text: 'Synopsis', link: 'README.md' },
        'installation',
        'getting-started',
        'usage',
      ]
    },
    {
      text: "Config",
      icon: "sliders",
      collapsible: true,
      prefix: "config/",
      children: [
        { text: 'Synopsis', link: 'README.md' },
        'installation',
        'getting-started',
        'usage',
      ]
    },
    {
      text: "Node Adapter",
      icon: "plug",
      collapsible: true,
      prefix: "node-adapter/",
      children: [
        { text: 'Synopsis', link: 'README.md' },
        'installation',
        'getting-started',
        'usage',
      ]
    },
    {
      text: "HTTP",
      icon: "network-wired",
      collapsible: true,
      prefix: "http/",
      children: [
        { text: 'Synopsis', link: 'README.md' },
        'installation',
        'getting-started',
        'usage',
      ]
    },
    {
      text: "Router",
      icon: "sitemap",
      collapsible: true,
      prefix: "router/",
      children: [
        { text: 'Synopsis', link: 'README.md' },
        'installation',
        'getting-started',
        {
          text: 'Les bases',
          children: [
            'definitions',
            'parameters',
            'middleware',
            'redirection',
            'generator',
            'events',
            'request-context'
          ]
        },
        {
          text: 'Avancées',
          children: [
            'meta',
            'binding',
            'matchers',
            'dispatchers',
            'options'
          ]
        }
      ],
    },
    {
      text: "Env",
      icon: "leaf",
      collapsible: true,
      prefix: "env/",
      children: [
        { text: 'Synopsis', link: 'README.md' },
        'installation',
        'getting-started',
        'usage',
      ]
    },
  ],
});
