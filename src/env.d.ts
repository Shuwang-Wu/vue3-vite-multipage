/*
 * @Author: Shuwang_wu
 * @Date: 2022-05-12 11:27:15
 * @LastEditTime: 2022-05-16 09:57:23
 * @LastEditors: Shuwang_wu
 * @FilePath: \h5-pages\src\env.d.ts
 * @Description: ~
 */
/// <reference types="vite/client" />

declare module "*.vue" {
  import type { DefineComponent } from "vue"
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module "*.js"
