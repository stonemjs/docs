import theme from "./theme.js";
import { defineUserConfig } from "vuepress";
import { getDirname, path } from "@vuepress/utils";
import { registerComponentsPlugin } from '@vuepress/plugin-register-components';

const __dirname = getDirname(import.meta.url);

export default defineUserConfig({
  head: [
    ["link", { rel: "preconnect", href: "https://fonts.googleapis.com" }],
    ["link", { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" }],
    ["link", { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Fira+Code:wght@300..700&family=IBM+Plex+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" }],
  ],
  theme,
  plugins: [
    '@vuepress/plugin-prismjs',
    registerComponentsPlugin({}),
  ],
  alias: {
    "@CodeTabs": path.resolve(__dirname, "components/CodeTabs.vue"),
    "@CodeBlock": path.resolve(__dirname, "components/CodeBlock.vue"),
    "@MyHomeComponent": path.resolve(__dirname, "components/MyHomeComponent.vue"),
    "@theme-hope/modules/navbar/components/Navbar": path.resolve(getDirname(import.meta.url), './components/MyNavBar.vue'),
  },
  locales: {
    '/': {
      lang: 'en-US',
      title: 'Stone.js',
      description: 'The cornerstone of any javascript project'
    },
  },
});
