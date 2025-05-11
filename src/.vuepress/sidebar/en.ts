import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/docs/": [
    {
      text: "Getting Started",
      collapsible: false,
      prefix: "getting-started/",
      children: [
        'installation',
        'structure',
        'deployment',
      ],
    },
    {
      text: "Core Concepts",
      collapsible: false,
      prefix: 'architecture/',
      children: [
        { text: 'Introduction', link: 'README.md' },
        { text: 'Continuum', link: 'continuum.md' },
        { text: 'Paradigms', link: 'paradigms.md' },
        'build',
        'lifecycle',
        'middleware',
        'blueprint',
        'adapter',
        'container',
        'providers',
      ],
    },
    {
      text: "Essentials",
      collapsible: false,
      prefix: "essentials/",
      children: [
        'event-handler',
        'incoming-event',
        'outgoing-response',
        'cookies',
        'events',
        { text: 'Configuration', link: 'configuration.md' },
        'error-handler',
        'logging',
      ],
    },
    {
      text: "Router",
      collapsible: false,
      prefix: "router/",
      children: [
        { text: 'Introduction', link: 'README.md' },
        'definitions',
        'parameters',
        'binding',
        { text: 'Misc', link: 'misc.md' },
      ],
    },
    {
      text: "React",
      collapsible: false,
      prefix: "react/",
      children: [
        { text: 'Introduction', link: 'README.md' },
        'pages',
        'components',
        'routing',
        'fetching',
        'layout',
        'error-pages',
        'assets',
        { text: 'Misc', link: 'misc.md' },
      ],
    },
    {
      text: "Deep dive",
      collapsible: false,
      prefix: "deeper/",
      children: [
        'testing',
        'commands',
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
