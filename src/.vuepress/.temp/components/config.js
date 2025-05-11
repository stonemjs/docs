import { hasGlobalComponent } from "/Users/evenspierre/Projects/StoneJS/docs/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.103_vuepress@2.0.0-rc.22_@vuepress+bundler-vite@2.0.0-rc.22_@_dda4ff937643f8b5d0d33865472efc07/node_modules/@vuepress/helper/lib/client/index.js";
import Badge from "/Users/evenspierre/Projects/StoneJS/docs/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.86_sass-embedded@1.87.0_vuepress@2.0.0-rc.22_@vuepr_862a9dd3520a2c26080231264a402f31/node_modules/vuepress-plugin-components/lib/client/components/Badge.js";

import "/Users/evenspierre/Projects/StoneJS/docs/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.103_vuepress@2.0.0-rc.22_@vuepress+bundler-vite@2.0.0-rc.22_@_dda4ff937643f8b5d0d33865472efc07/node_modules/@vuepress/helper/lib/client/styles/sr-only.css";

export default {
  enhance: ({ app }) => {
    if(!hasGlobalComponent("Badge")) app.component("Badge", Badge);
    
  },
  setup: () => {

  },
  rootComponents: [

  ],
};
