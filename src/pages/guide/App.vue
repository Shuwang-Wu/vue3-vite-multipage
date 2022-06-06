<!--
 * @Author: Shuwang_wu
 * @Date: 2022-05-12 11:27:15
 * @LastEditTime: 2022-06-06 11:33:24
 * @LastEditors: Shuwang_wu
 * @FilePath: \h5-pages\src\pages\guide\App.vue
 * @Description: ~
-->

<template>
  <div class="app">
    <van-nav-bar :title="title" />
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n"
const { t } = useI18n()
const title = t("nav.title")
</script>
