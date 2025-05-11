import { Layout, NotFound, injectDarkMode, setupDarkMode, setupSidebarItems, scrollPromise } from "/Users/evenspierre/Projects/StoneJS/docs/node_modules/.pnpm/vuepress-theme-hope@2.0.0-rc.87_@vuepress+plugin-prismjs@2.0.0-rc.103_@vueuse+core@13.1_8d913fd6bf47ff17667ca3b4e6a47f62/node_modules/vuepress-theme-hope/lib/client/exports/base.js";

import { defineCatalogInfoGetter } from "/Users/evenspierre/Projects/StoneJS/docs/node_modules/.pnpm/@vuepress+plugin-catalog@2.0.0-rc.102_vuepress@2.0.0-rc.22_@vuepress+bundler-vite@2.0.0_20bfae2550330fca9e6cebe71cc4b51e/node_modules/@vuepress/plugin-catalog/lib/client/index.js"
import { h } from "vue"
import { resolveComponent } from "vue"
import { GlobalEncrypt, LocalEncrypt } from "/Users/evenspierre/Projects/StoneJS/docs/node_modules/.pnpm/vuepress-theme-hope@2.0.0-rc.87_@vuepress+plugin-prismjs@2.0.0-rc.103_@vueuse+core@13.1_8d913fd6bf47ff17667ca3b4e6a47f62/node_modules/vuepress-theme-hope/lib/client/exports/encrypt.js";

import "/Users/evenspierre/Projects/StoneJS/docs/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.103_vuepress@2.0.0-rc.22_@vuepress+bundler-vite@2.0.0-rc.22_@_dda4ff937643f8b5d0d33865472efc07/node_modules/@vuepress/helper/lib/client/styles/colors.css";
import "/Users/evenspierre/Projects/StoneJS/docs/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.103_vuepress@2.0.0-rc.22_@vuepress+bundler-vite@2.0.0-rc.22_@_dda4ff937643f8b5d0d33865472efc07/node_modules/@vuepress/helper/lib/client/styles/normalize.css";
import "/Users/evenspierre/Projects/StoneJS/docs/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.103_vuepress@2.0.0-rc.22_@vuepress+bundler-vite@2.0.0-rc.22_@_dda4ff937643f8b5d0d33865472efc07/node_modules/@vuepress/helper/lib/client/styles/sr-only.css";
import "/Users/evenspierre/Projects/StoneJS/docs/node_modules/.pnpm/vuepress-theme-hope@2.0.0-rc.87_@vuepress+plugin-prismjs@2.0.0-rc.103_@vueuse+core@13.1_8d913fd6bf47ff17667ca3b4e6a47f62/node_modules/vuepress-theme-hope/lib/client/styles/index.scss";

defineCatalogInfoGetter((meta) => {
  const title = meta.title;
  const shouldIndex = meta.index ?? true;
  const icon = meta.icon;

  return shouldIndex ? {
    title,
    content: icon ? () =>[h(resolveComponent("VPIcon"), { icon, sizing: "both" }), title] : null,
    order: meta.order,
    index: meta.index,
  } : null;
});

export default {
  enhance: ({ app, router }) => {
    const { scrollBehavior } = router.options;

    router.options.scrollBehavior = async (...args) => {
      await scrollPromise.wait();

      return scrollBehavior(...args);
    };

    // inject global properties
    injectDarkMode(app);

    app.component("GlobalEncrypt", GlobalEncrypt);
    app.component("LocalEncrypt", LocalEncrypt);
  },
  setup: () => {
    setupDarkMode();
    setupSidebarItems();

  },
  layouts: {
    Layout,
    NotFound,

  }
};
