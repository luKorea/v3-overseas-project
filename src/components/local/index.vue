<!--
 * @Author: korealu 643949593@qq.com
 * @Date: 2022-06-20 10:54:48
 * @LastEditors: korealu 643949593@qq.com
 * @LastEditTime: 2022-06-24 16:46:10
 * @FilePath: /v3-mobile-template/src/global/local.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <van-sticky>
    <div class="logo-wrap">
      <div class="logo-img">
        <img :src="logoImg" alt="" />
      </div>

      <van-popover
        v-model:show="showPopover"
        placement="bottom-end"
        style="margin-right: 10px"
      >
        <template v-for="(item, index) in actions" :key="item.value">
          <div
            @click="changeLang(item)"
            class="text-item"
            :class="index === selectItem && 'select'"
          >
            {{ item.text }}
          </div>
        </template>
        <template #reference>
          <div class="language-img">
            <img :src="languageImg" alt="" />
          </div>
        </template>
      </van-popover>
    </div>
  </van-sticky>
</template>

<script lang="ts">
import { localCache } from "@/utils/cache";
import { defineComponent, ref, computed } from "vue";
import { useI18n } from "vue-i18n";
import { IMG_URL } from "../../request/config";
export default defineComponent({
  name: "localComponent",
  setup() {
    const { locale } = useI18n();
    const logoImg = ref<string>(IMG_URL + "/logo.png");
    const languageImg = ref<string>(IMG_URL + "/language.png");
    const showPopover = ref<any>(false);
    const selectItem = computed(() => {
      let result = 0;
      switch (locale.value) {
        case "en":
          result = 0;
          break;
        case "zhTw":
          result = 1;
          break;
        case "ja":
          result = 2;
          break;
      }
      return result;
    });
    const actions = ref<any>([
      {
        text: "English",
        value: "en",
      },
      {
        text: "繁体中文",
        value: "zhTw",
      },
      {
        text: "日文",
        value: "ja",
      },
    ]);
    //语言切换
    const changeLang = (language: any) => {
      locale.value = language.value;
      localCache.setCache("lang", language.value);
      window.location.reload();
    };
    return {
      logoImg,
      languageImg,
      changeLang,
      showPopover,
      actions,
      selectItem,
    };
  },
});
</script>

<style scoped lang="less">
.text-item {
  width: 90px;
  display: flex;
  // justify-content: center;
  // align-items: center;
  margin: 20px 20px 15px 20px;
  font-size: 14px;
  font-family: SourceHanSansCN-Regular, SourceHanSansCN;
  font-weight: 400;
  color: #99999f;
  box-sizing: border-box;
}
.select {
  color: #000;
  &::before {
    position: relative;
    right: 4px;
    content: "";
    width: 2px;
    height: 14px;
    background-color: #fd456c;
  }
}
.logo-wrap {
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  background: rgba(0, 0, 0, 0.75);
  backdrop-filter: blur(30px);
  .logo-img {
    width: 50px;
    height: 41px;
    display: flex;
    align-items: center;
    padding-left: 20px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .language-img {
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    padding-right: 20px;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
