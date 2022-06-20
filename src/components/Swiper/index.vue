<!--
 * @Author: korealu 643949593@qq.com
 * @Date: 2022-06-20 11:20:14
 * @LastEditors: korealu 643949593@qq.com
 * @LastEditTime: 2022-06-20 11:54:24
 * @FilePath: /v3-overseas-project/src/components/Swiper/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <swiper class="swiper-container" v-bind="swiperConfig">
    <swiper-slide class="swiper-slide" v-for="(item, i) in imgList" :key="i">
      <img
        :src="item"
        :alt="item"
        class="img-item"
        referrerpolicy="no-referrer"
      />
      <slot :name="i"></slot>
    </swiper-slide>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination" v-if="showPagination"></div>
    <!-- 如果需要导航按钮 左右箭头。如果放置在swiper-container外面，需要自定义样式。-->
    <template v-if="showArrow">
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </template>
    <!-- 如果需要滚动条 -->
    <div class="swiper-scrollbar" v-if="showScrollbar"></div>
  </swiper>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
// Import Swiper core and required modules
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper";
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);
import "swiper/swiper-bundle.css";
export default defineComponent({
  name: "mobileSwiper",
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    swiperConfig: {
      type: Object,
      default: () => ({}),
    },
    imgList: {
      type: Array as PropType<string[]>,
      default: () => [],
    },
    showPagination: {
      type: Boolean,
      default: true,
    },
    showArrow: {
      type: Boolean,
      default: false,
    },
    showScrollbar: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    return {
      modules: [Navigation, Pagination, Scrollbar, A11y],
    };
  },
});
</script>

<style scoped lang="less">
.img-item {
  width: 100%;
  height: 100%;
  position: relative;
}
</style>
