import CodeDemo from "/Users/evenspierre/Projects/StoneJS/docs/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.87_markdown-it@14.1.0_mermaid@11.6.0_sass-embedded@_a3f029cd40d053438ca663690b3ee4bb/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeDemo.js";
import MdDemo from "/Users/evenspierre/Projects/StoneJS/docs/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.87_markdown-it@14.1.0_mermaid@11.6.0_sass-embedded@_a3f029cd40d053438ca663690b3ee4bb/node_modules/vuepress-plugin-md-enhance/lib/client/components/MdDemo.js";
import Mermaid from "/Users/evenspierre/Projects/StoneJS/docs/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.87_markdown-it@14.1.0_mermaid@11.6.0_sass-embedded@_a3f029cd40d053438ca663690b3ee4bb/node_modules/vuepress-plugin-md-enhance/lib/client/components/Mermaid.js";
import Playground from "/Users/evenspierre/Projects/StoneJS/docs/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.87_markdown-it@14.1.0_mermaid@11.6.0_sass-embedded@_a3f029cd40d053438ca663690b3ee4bb/node_modules/vuepress-plugin-md-enhance/lib/client/components/Playground.js";

export default {
  enhance: ({ app }) => {
    app.component("CodeDemo", CodeDemo);
    app.component("MdDemo", MdDemo);
    app.component("Mermaid", Mermaid);
    app.component("Playground", Playground);
  },
};
