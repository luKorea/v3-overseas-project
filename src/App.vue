<!--
 * @Author: korealu 643949593@qq.com
 * @Date: 2022-06-17 13:45:16
 * @LastEditors: korealu 643949593@qq.com
 * @LastEditTime: 2022-07-05 10:51:56
 * @FilePath: /v3-overseas-project/src/App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { request } from "./request";
import { localCache } from "./utils/cache";
export default defineComponent({
  setup() {
    request
      .get({
        url: "https://api.pofiart.com/api/support/ip2geo",
      })
      .then((res) => {
        if (res.code === 200) {
          const result = res.data;
          if (result.region === "日本") {
            localCache.setCache("lang", "ja");
          } else if (result.region === "中国") {
            if (
              result.province === "香港" ||
              result.province === "澳门" ||
              result.province === "台湾"
            ) {
              localCache.setCache("lang", "zhTw");
            } else {
              localCache.setCache("lang", "en");
            }
          } else {
            localCache.setCache("lang", "en");
          }
        }
      });
    return {};
  },
});
</script>

<style lang="less"></style>
