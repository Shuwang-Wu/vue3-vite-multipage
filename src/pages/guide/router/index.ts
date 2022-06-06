/*
 * @Author: Shuwang_wu
 * @Date: 2022-05-12 13:23:23
 * @LastEditTime: 2022-06-06 09:10:25
 * @LastEditors: Shuwang_wu
 * @FilePath: \h5-pages\src\pages\guide\router\index.ts
 * @Description: ~
 */

import { createRouter, createWebHashHistory } from "vue-router"

const routes = [
  {
    path: "/",
    redirect: "/home"
  },
  {
    path: "/home",
    component: () => import("../views/home/home.vue")
  }
]

const router = createRouter({
  history: createWebHashHistory(), //替代之前的mode，是必须的
  routes
})

export default router
