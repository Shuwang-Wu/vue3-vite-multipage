/*
 * @Author: Shuwang_wu
 * @Date: 2022-06-06 09:14:33
 * @LastEditTime: 2022-06-06 11:09:46
 * @LastEditors: Shuwang_wu
 * @FilePath: \h5-pages\src\pages\guide\utils\regd-global-props.ts
 * @Description: useComponents
 */

const regdGlobalProps = (app: any) => {
  app.config.globalProperties.$test = "test"
}

export default regdGlobalProps
