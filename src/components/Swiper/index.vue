<!--
 * @Author: korealu 643949593@qq.com
 * @Date: 2022-06-24 14:01:45
 * @LastEditors: korealu 643949593@qq.com
 * @LastEditTime: 2022-06-24 15:04:13
 * @FilePath: /v3-overseas-project/src/views/active/components/page-two.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <van-swipe style="height: 100%; width: 100%; box-sizing: border-box">
    <template
      v-for="(item, index) in imgList"
      :key="index"
      indicator-color="rgba(255, 255, 255, 1)"
    >
      <van-swipe-item>
        <img
          class="swipe-img"
          style="width: 100%; height: 100%"
          :src="item"
          alt=""
        />
        <slot :name="index"></slot>
      </van-swipe-item>
    </template>
  </van-swipe>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  props: {
    imgList: {
      type: Array as PropType<string[]>,
      default: () => [],
    },
  },
  setup() {
    return {};
  },
});
</script>

<style>
.van-swipe__indicator {
  width: 25px;
  height: 6px;
  background: rgb(235, 237, 240);
  border-radius: 4px;
}
</style>
<style scoped lang="less">
.swipe-img {
  position: relative;
}
</style>
