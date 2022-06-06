/*
 * @Author: Shuwang_wu
 * @Date: 2022-05-12 11:27:15
 * @LastEditTime: 2022-06-03 10:57:51
 * @LastEditors: Shuwang_wu
 * @FilePath: \h5-pages\vite.config.ts
 * @Description: vite.config.ts
 */
import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import styleImport, { VantResolve } from "vite-plugin-style-import"
import legacy from "@vitejs/plugin-legacy"
import alias from "@rollup/plugin-alias"

const { resolve } = require("path")
const strip = require("@rollup/plugin-strip")
// 获取当前页面
const PAGE = process.env.npm_config_page
if (!PAGE) {
  throw new Error("You should input like: npm run dev/build --page=your page")
}

export default defineConfig({
  // base: process.env.NODE_ENV === "production" ? `/wsw/${PAGE}` : "",
  base: process.env.NODE_ENV === "production" ? "/" : "",
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
      _c: resolve(__dirname, "./src/components")
    },
    extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json"]
  },
  root: `./src/pages/${PAGE}/`,
  build: {
    assetsDir: `./${PAGE}`,
    outDir: resolve(__dirname, `dist/${PAGE}`),
    minify: "terser",
    rollupOptions: {
      input: {
        [PAGE]: resolve(__dirname, `src/pages/${PAGE}/index.html`)
      },
      output: {}
    }
  },
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          hack: `true; @import (reference) "${resolve(
            "src/assets/styles/base.less"
          )}";`
        },
        javascriptEnabled: true
      }
    }
  },
  plugins: [
    alias(),
    vue(),
    styleImport({
      resolves: [VantResolve()]
    }),
    legacy({
      targets: ["defaults", "not IE 11"]
    }),
    strip({
      functions: ["console.log"]
    })
  ],
  server: {
    port: 3000,
    open: false,
    proxy: {
      "/api": "/api"
    },
    cors: true
  }
})
