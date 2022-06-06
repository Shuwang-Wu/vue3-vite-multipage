/*
 * @Author: Shuwang_wu
 * @Date: 2022-06-06 09:14:33
 * @LastEditTime: 2022-06-06 10:30:18
 * @LastEditors: Shuwang_wu
 * @FilePath: \h5-pages\src\pages\guide\utils\regd-components.ts
 * @Description: useComponents
 */
import { ConfigProvider, Button, Icon, NavBar } from "vant"

const regdComponents = (app: any) => {
  app.use(ConfigProvider)
  app.use(Button)
  app.use(Icon)
  app.use(NavBar)
}

export default regdComponents
