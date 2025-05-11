import theme from "./theme.js";
import { fileURLToPath } from 'node:url'
import { defineUserConfig } from "vuepress"
import { resolve, dirname } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineUserConfig({
  head: [
    ["link", { rel: "preconnect", href: "https://fonts.googleapis.com" }],
    ["link", { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" }],
    ["link", { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Fira+Code:wght@300..700&family=IBM+Plex+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" }],
  ],

  base: "/",

  lang: "en-US",
  title: "Stone.js",
  description: "StoneJS official documentation",

  theme,
  alias: {
    "@CodeTabs": resolve(__dirname, "components/CodeTabs.vue"),
    "@CodeBlock": resolve(__dirname, "components/CodeBlock.vue"),
    "@MyHomeComponent": resolve(__dirname, "components/MyHomeComponent.vue"),
    // "@theme-hope/components/navbar/Navbar": resolve(__dirname, './components/MyNavBar.vue'),
  },
  locales: {
    '/': {
      lang: 'en-US',
      title: 'Stone.js',
      description: 'StoneJS official documentation'
    },
  },

  // Enable it with pwa
  // shouldPrefetch: false,
});
