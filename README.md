<!--
 * @Author: Shuwang_wu
 * @Date: 2022-05-12 11:27:15
 * @LastEditTime: 2022-06-06 15:00:35
 * @LastEditors: Shuwang_wu
 * @FilePath: \h5-pages\README.md
  - [intro](#intro)\README.md
 * @Description: h5落地页
-->
# H5 pages

h5落地页统一配置

- [H5 pages](#h5-pages)
  - [简介](#简介)
    - [运行项目](#运行项目)
  - [项目结构](#项目结构)
  - [涉及框架](#涉及框架)

## 简介

Vue 3 + TypeScript + Vite实现前端落地页统一管理，
1. 配置多页面
2. 每个页面可以单独开发/打包输出

### 运行项目
1. 开发
   ```bush
    npm run dev --page="guide"
   ``` 
2. 打包
   ```bush
    npm run dev --page="guide"
   ``` 
3. 创建页面
   ```bush
    npm run add --page="your page"
   ```

## 项目结构
```bush
|-- h5-pages
    |-- .browserslistrc
    |-- .gitignore
    |-- demo.md
    |-- package-lock.json
    |-- package.json
    |-- postcss.config.js
    |-- README.md
    |-- tsconfig.json
    |-- tsconfig.node.json
    |-- vite.config.ts // vite配置文件
    |-- .vscode
    |   |-- extensions.json
    |-- dist
    |   |-- watch_after_sales
    |       |-- index.html
    |       |-- watch_after_sales
    |-- public
    |   |-- favicon.ico
    |-- src
        |-- env.d.ts
        |-- assets
        |   |-- logo.png
        |   |-- styles
        |       |-- base.less
        |-- components
        |   |-- BetterScroll
        |       |-- BetterScroll.vue
        |-- pages
        |   |-- guide
        |   |   |-- App.vue
        |   |   |-- index.html
        |   |   |-- main.ts
        |   |   |-- i18n
        |   |   |   |-- en-US.ts
        |   |   |   |-- index.ts
        |   |   |   |-- zh-CN.ts
        |   |   |   |-- zh-HK.ts
        |   |   |-- router
        |   |   |   |-- index.ts
        |   |   |-- store
        |   |   |   |-- index.ts
        |   |   |-- utils
        |   |   |   |-- regd-components.ts
        |   |   |   |-- regd-global-props.ts
        |   |   |-- views
        |   |       |-- home
        |   |           |-- home.less
        |   |           |-- home.vue
        |   |-- other
        |   |   |-- App.vue
        |   |   |-- index.html
        |   |   |-- main.ts
        |   |   |-- router
        |   |   |   |-- index.ts
        |   |   |-- store
        |   |       |-- index.ts
        |   |-- watch_after_sales
        |       |-- App.vue
        |       |-- favicon.ico
        |       |-- index.html
        |       |-- main.ts
        |       |-- router
        |       |   |-- index.ts
        |       |-- store
        |       |   |-- index.ts
        |       |-- views
        |           |-- home
        |               |-- home.less
        |               |-- home.vue
        |               |-- questions.js
        |-- utils
            |-- index.ts
            |-- request.ts
            |-- tools.ts

```
**其他的参考package.json**

## 涉及框架
1. [Vue](https://vue3js.cn/)
2. [Vite](https://cn.vitejs.dev/) 
3. [Vue router](https://router.vuejs.org/zh/) 
4. [Vuex](https://vuex.vuejs.org/zh/)
5. [Vant ui](https://youzan.github.io/vant/#/en-US/quickstart)