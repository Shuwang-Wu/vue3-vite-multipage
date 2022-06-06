/*
 * @Author: Shuwang_wu
 * @Date: 2022-06-06 10:09:59
 * @LastEditTime: 2022-06-06 11:25:18
 * @LastEditors: Shuwang_wu
 * @FilePath: \h5-pages\src\pages\guide\i18n\index.ts
 * @Description: i18n config
 */
// index.js
import { createI18n } from "vue-i18n"
import zh_CN from "./zh-CN"
import en_US from "./en-US"
import zh_HK from "./zh-HK"

const messages: any = {
  en: en_US,
  "zh-CN": zh_CN,
  "zh-HK": zh_HK
}
// 获取浏览器的语言
const language = navigator.language || "en"

const i18n = createI18n({
  locale: localStorage.getItem("lang") || language,
  fallbackLocale: "en", // 设置备用语言
  messages
})

export default i18n
