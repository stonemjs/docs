import theme from "./theme.js";
import { defineUserConfig } from "vuepress";
import { getDirname, path } from "@vuepress/utils";
import { registerComponentsPlugin } from '@vuepress/plugin-register-components';

export default defineUserConfig({
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
