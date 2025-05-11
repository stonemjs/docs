import { hasGlobalComponent } from "/Users/evenspierre/Projects/StoneJS/docs/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.102_vuepress@2.0.0-rc.22_@vuepress+bundler-vite@2.0.0-rc.22_@_7764a4e40889fdd00aa3b8870c4b1ab1/node_modules/@vuepress/helper/lib/client/index.js";
import { useScriptTag } from "/Users/evenspierre/Projects/StoneJS/docs/node_modules/.pnpm/@vueuse+core@13.1.0_vue@3.5.13/node_modules/@vueuse/core/index.mjs";
import { h } from "vue";
import { VPIcon } from "/Users/evenspierre/Projects/StoneJS/docs/node_modules/.pnpm/@vuepress+plugin-icon@2.0.0-rc.102_markdown-it@14.1.0_vuepress@2.0.0-rc.22_@vuepress+bu_38f1d02985de8c26555438a025041193/node_modules/@vuepress/plugin-icon/lib/client/index.js"

export default {
  enhance: ({ app }) => {
    if(!hasGlobalComponent("VPIcon")) {
      app.component(
        "VPIcon",
        (props) =>
          h(VPIcon, {
            type: "fontawesome",
            prefix: "",
            ...props,
          })
      )
    }
  },
  setup: () => {
    useScriptTag(
  `https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6/js/all.min.js`,
  () => {},
  { attrs: { "data-auto-replace-svg": "nest" } }
);

  },
}
