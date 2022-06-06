/*
 * @Author: Shuwang_wu
 * @Date: 2022-05-18 09:43:21
 * @LastEditTime: 2022-05-18 09:47:21
 * @LastEditors: Shuwang_wu
 * @FilePath: \h5-pages\src\utils\tools.ts
 * @Description: tools
 */

/**
 * @name checkOverflow
 * @param {HTMLElement} el dom元素
 * @description 检查传递进来的dom元素是否存在溢出隐藏的情况
 * @return {Boolean} isOverflowing 是否存在溢出隐藏
 * */
export const checkOverflow = function (el: HTMLElement) {
  var curOverflow = el.style.overflow

  if (!curOverflow || curOverflow === "visible") el.style.overflow = "hidden"

  var isOverflowing =
    el.clientWidth < el.scrollWidth || el.clientHeight < el.scrollHeight

  el.style.overflow = curOverflow

  return isOverflowing
}
