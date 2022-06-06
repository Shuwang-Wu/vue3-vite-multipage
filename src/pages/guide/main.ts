/*
 * @Author: Shuwang_wu
 * @Date: 2022-05-18 15:01:24
 * @LastEditTime: 2022-06-06 10:28:51
 * @LastEditors: Shuwang_wu
 * @FilePath: \h5-pages\src\pages\guide\main.ts
 * @Description: ~
 */
import { createApp } from "vue"
import App from "./App.vue"
import regdComponents from "./utils/regd-components"
import regdGlobalProps from "./utils/regd-global-props"
import router from "./router"
import i18n from "./i18n"

const APP = createApp(App)
// 注册路由
APP.use(router)
// 注册国际化
APP.use(i18n)
// 使用vant组件
regdComponents(APP)
// 使用i18n
regdGlobalProps(APP)
APP.mount("#app")
