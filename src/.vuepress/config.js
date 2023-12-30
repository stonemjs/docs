import theme from "./theme.js";
import { defineUserConfig } from "vuepress";
import { getDirname, path } from "@vuepress/utils";
import { registerComponentsPlugin } from '@vuepress/plugin-register-components';

export default defineUserConfig({
  head: [
    // ["link", { rel: "preconnect", href: "https://fonts.googleapis.com" }],
    // ["link", { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" }],
    // ["link", { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" }],
  ],
  theme,
  plugins: [
    registerComponentsPlugin({}),
  ],
  alias: {
    "@theme-hope/modules/navbar/components/Navbar": path.resolve(getDirname(import.meta.url), './components/MyNavBar.vue'),
  },
  locales: {
    '/': {
      lang: 'en-US',
      title: 'Stone.js',
      description: 'The cornerstone of any javascript project'
    },
    '/fr/': {
      lang: 'fr-FR',
      title: 'Stone.js',
      description: 'La pierre angulaire de tout projet javascript'
    }
  },
});
