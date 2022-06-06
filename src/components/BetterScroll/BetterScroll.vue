<!--
 * @Author: Shuwang_wu
 * @Date: 2022-05-12 17:40:10
 * @LastEditTime: 2022-05-17 10:00:01
 * @LastEditors: Shuwang_wu
 * @FilePath: \h5-pages\src\components\BetterScroll\BetterScroll.vue
 * @Description: ~
-->
<template>
  <div ref="betterScrollWrap" class="better-scroll-wrap">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue"
import BScroll from "@better-scroll/core"

const props = defineProps({
  probeType: { type: Number, default: 1 },
  click: { type: Boolean, default: true },
  eventPassthrough: { type: String, default: "" }
})
const emits = defineEmits(["scroll"])
const betterScrollWrap = ref<HTMLElement | string>("betterScrollWrap")
const scroll = ref<BScroll>()

onMounted(() => {
  scroll.value = new BScroll(betterScrollWrap.value, {
    observeDOM: true,
    ...props
  })
  if (props.probeType > 0) {
    scroll.value.on("scroll", (pos: { x: number; y: number }) => {
      emits("scroll", pos)
    })
  }
})

defineExpose({ scroll })
</script>

<style scoped></style>
