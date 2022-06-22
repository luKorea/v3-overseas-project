<!--
 * @Author: korealu 643949593@qq.com
 * @Date: 2022-06-20 09:51:22
 * @LastEditors: korealu 643949593@qq.com
 * @LastEditTime: 2022-06-22 18:20:43
 * @FilePath: /v3-overseas-project/src/views/active/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <mobile-swiper :img-list="imgList">
      <template v-slot:0>
        <div class="one">测试</div>
      </template>
    </mobile-swiper>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import mobileSwiper from "@/components/Swiper/index.vue";
import { useI18n } from "vue-i18n";

export default defineComponent({
  components: {
    mobileSwiper,
  },
  setup() {
    const { t } = useI18n();
    const imgList = ref<any>([
      t("message.pageOneImg"),
      "https://f3.pofiapp.com/event/active/b3-two.png",
      "https://f3.pofiapp.com/event/active/b3-three.png",
      "https://f3.pofiapp.com/event/active/b3-four.png",
    ]);
    return {
      imgList,
    };
  },
});
</script>

<style scoped lang="less">
.one {
  position: absolute;
  color: #fff;
  top: 20px;
  left: 20px;
  font-size: 40px;
}
</style>
