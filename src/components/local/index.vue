<!--
 * @Author: korealu 643949593@qq.com
 * @Date: 2022-06-22 18:22:30
 * @LastEditors: korealu 643949593@qq.com
 * @LastEditTime: 2022-06-22 18:23:03
 * @FilePath: /v3-overseas-project/src/components/local/local.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<!--
 * @Author: korealu 643949593@qq.com
 * @Date: 2022-06-20 10:54:48
 * @LastEditors: korealu 643949593@qq.com
 * @LastEditTime: 2022-06-20 10:56:32
 * @FilePath: /v3-mobile-template/src/global/local.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div></div>
</template>

<script lang="ts">
import { localCache } from "@/utils/cache";
import { defineComponent } from "vue";
import { useI18n } from "vue-i18n";
export default defineComponent({
  setup() {
    const { locale } = useI18n();
    //语言切换
    const changeLang = (language: string) => {
      locale.value = language;
      localCache.setCache("lang", language);
      window.location.reload();
    };
    return {
      changeLang,
    };
  },
});
</script>

<style scoped></style>
