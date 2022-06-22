<!--
 * @Author: korealu 643949593@qq.com
 * @Date: 2022-06-20 09:51:18
 * @LastEditors: korealu 643949593@qq.com
 * @LastEditTime: 2022-06-22 09:55:11
 * @FilePath: /v3-overseas-project/src/views/download/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>下载页面{{ $t("message.title") }}</div>
  <van-button type="primary" @click="show">{{
    $t("message.title")
  }}</van-button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { koreaToast } from "../../utils/alert";

export default defineComponent({
  setup() {
    const show = () => {
      koreaToast.loading({
        message: "加载中",
      });
    };
    return {
      show,
    };
  },
});
</script>

<style scoped></style>
