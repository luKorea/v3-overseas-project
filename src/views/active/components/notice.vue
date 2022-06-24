<!--
 * @Author: korealu 643949593@qq.com
 * @Date: 2022-06-24 09:13:17
 * @LastEditors: korealu 643949593@qq.com
 * @LastEditTime: 2022-06-24 16:54:47
 * @FilePath: /v3-overseas-project/src/views/active/components/notice.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="content-wrap" style="padding-top: 0">
    <div class="shadow-title">{{ $tm("message.noticeTitle") }}</div>
    <div class="big-title">{{ $tm("message.noticeTitle") }}</div>
    <template v-for="(item, index) in $tm('message.noticeList')" :key="index">
      <template v-if="!showMore">
        <div class="notice-item" v-if="index === 0">
          {{ index + 1 }}. {{ item }}
        </div>
        <div class="notice-item" v-if="index === 1">
          {{ index + 1 }}. {{ item }}
          <span class="notice-tip">
            <span class="notice-more" @click="showMore = true">More </span>
            <span class="notice-corner"> &#9660; </span>
          </span>
        </div>
      </template>
      <template v-else>
        <div class="notice-item" v-if="index === 4">
          {{ index + 1 }}. {{ item }}
          <span class="notice-tip">
            <span class="notice-more" @click="showMore = false">Put away </span>
            <span class="notice-corner">&#9650; </span>
          </span>
        </div>
        <div class="notice-item" v-else>{{ index + 1 }}. {{ item }}</div>
      </template>
    </template>
    <van-divider v-if="showMore" style="margin-top: 0">{{
      $t("message.end")
    }}</van-divider>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "noticePage",
  setup() {
    const showMore = ref<boolean>(false);
    return {
      showMore,
    };
  },
});
</script>

<style scoped lang="less">
.notice-item {
  font-size: 14px;
  font-family: NexaBold;
  color: #ffffff;
  line-height: 16px;
  margin-bottom: 10px;
  &:last-child {
    margin-bottom: 0;
  }
  .notice-tip {
    // display: flex;
    // justify-content: center;
    // align-items: center;
    margin-left: 10px;
    .notice-more {
      font-size: 12px;
      font-family: PingFangSC-Semibold, PingFang SC;
      font-weight: 600;
      color: #00daff;
      line-height: 20px;
      position: relative;
    }
    .notice-corner {
      color: #00daff;
      font-size: 12px;
    }
  }
}
</style>
