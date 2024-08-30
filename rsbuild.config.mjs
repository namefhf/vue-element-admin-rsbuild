import { defineConfig, loadEnv } from "@rsbuild/core";
import { pluginVue2 } from "@rsbuild/plugin-vue2";
import { pluginSass } from "@rsbuild/plugin-sass";
import { pluginNodePolyfill } from "@rsbuild/plugin-node-polyfill";
import path from "path";
// import expressMiddleware from "./mock/mock-server";
// import express from "express";
const { publicVars } = loadEnv({ prefixes: ["VUE_APP_"] });
// const app = express();

// app.use(expressMiddleware);
export default defineConfig({
  plugins: [pluginVue2(), pluginSass(), pluginNodePolyfill()],
  html: {
    template: "./public/index.html",
  },
  source: {
    // 指定入口文件
    entry: {
      index: "./src/main.js",
    },

    define: publicVars,
  },
  tools: {
    rspack: {
      resolve: {
        alias: {
          "@": path.resolve("src"),
        },
      },
    },
  },
  dev: {
    // setupMiddlewares: [
    //   (middleware) => {
    //     middleware.unshift(app);
    //   },
    // ],
  },
});
