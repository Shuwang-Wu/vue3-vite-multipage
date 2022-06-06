<!--
 * @Author: Shuwang_wu
 * @Date: 2022-06-06 09:06:40
 * @LastEditTime: 2022-06-06 13:44:54
 * @LastEditors: Shuwang_wu
 * @FilePath: \h5-pages\src\pages\guide\views\home\home.vue
 * @Description: ~
-->
<template>
  <div class="home">
    <label for="code">{{ t("code.title") }}</label>
    <p id="code">
      <code>npm run dev/build --page=your page</code><br />
      <code>$npm run dev --page="guide"</code>
    </p>
    <p>{{ t("pages.title") }}</p>
    <ul>
      <li class="pageItem">1. {{ t("pages.guide") }}</li>
      <li class="pageItem">2. {{ t("pages.other") }}</li>
      <li class="pageItem">3. {{ t("pages.watchAfterSales") }}</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n"
const { t } = useI18n()
</script>

<style lang="less" scoped>
@import "./home.less";
</style>
