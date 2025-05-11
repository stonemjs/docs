import { CodeTabs } from "/Users/evenspierre/Projects/StoneJS/docs/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.102_markdown-it@14.1.0_vuepress@2.0.0-rc.22_@vue_ba91774818d7d62883964c8a1b638e95/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/CodeTabs.js";
import { Tabs } from "/Users/evenspierre/Projects/StoneJS/docs/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.102_markdown-it@14.1.0_vuepress@2.0.0-rc.22_@vue_ba91774818d7d62883964c8a1b638e95/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/Tabs.js";
import "/Users/evenspierre/Projects/StoneJS/docs/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.102_markdown-it@14.1.0_vuepress@2.0.0-rc.22_@vue_ba91774818d7d62883964c8a1b638e95/node_modules/@vuepress/plugin-markdown-tab/lib/client/styles/vars.css";

export default {
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("Tabs", Tabs);
  },
};
