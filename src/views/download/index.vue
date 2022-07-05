<!--
 * @Author: korealu 643949593@qq.com
 * @Date: 2022-06-20 09:51:22
 * @LastEditors: korealu 643949593@qq.com
 * @LastEditTime: 2022-07-05 11:06:55
 * @FilePath: /v3-overseas-project/src/views/active/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="download-page">
    <!-- logo区域 -->
    <div class="swiper-content">
      <div class="top"><logo-component></logo-component></div>
      <van-swipe
        vertical
        style="height: 100%; overflow: hidden"
        :show-indicators="false"
        :loop="false"
        @change="handleChangeSwipe"
      >
        <template v-for="(item, index) in imgList" :key="index">
          <van-swipe-item>
            <template v-if="item.page === 'one'">
              <div class="item-img">
                <img style="width: 100%; height: 100%" :src="item.img" alt="" />
                <div class="download-btn">
                  <div class="item" @click="goApp(1)">
                    <img :src="bigDownload.apple" alt="" />
                  </div>
                  <div class="item" @click="goApp(0)">
                    <img :src="bigDownload.android" alt="" />
                  </div>
                </div>
              </div>
            </template>
            <template v-if="item.page === 'two'">
              <div class="item-img">
                <swiper-component
                  :img-list="item.imgList"
                  :timer="3000"
                  v-if="initialSwipe === 1"
                ></swiper-component>
                <div class="download-btn-two">
                  <div class="item" @click="goApp(1)">
                    <img :src="smallDownload.apple" alt="" />
                  </div>
                  <div class="item" @click="goApp(0)">
                    <img :src="smallDownload.android" alt="" />
                  </div>
                </div>
              </div>
            </template>
            <template v-if="item.page === 'three'">
              <div class="item-img">
                <swiper-component
                  :img-list="item.imgList"
                  :timer="3000"
                  v-if="initialSwipe === 2"
                ></swiper-component>
                <div class="download-btn-two">
                  <div class="item" @click="goApp(1)">
                    <img :src="smallDownload.apple" alt="" />
                  </div>
                  <div class="item" @click="goApp(0)">
                    <img :src="smallDownload.android" alt="" />
                  </div>
                </div>
              </div>
            </template>
            <template v-if="item.page === 'four'">
              <div class="item-img">
                <swiper-component
                  :img-list="item.imgList"
                  :timer="3000"
                  v-if="initialSwipe === 3"
                ></swiper-component>
                <div class="download-btn-two">
                  <div class="item" @click="goApp(1)">
                    <img :src="smallDownload.apple" alt="" />
                  </div>
                  <div class="item" @click="goApp(0)">
                    <img :src="smallDownload.android" alt="" />
                  </div>
                </div>
              </div>
            </template>
            <template v-if="item.page === 'five'">
              <!-- 联系我们 -->
              <contact-component
                :bigDownload="bigDownload"
                @goApp="goApp"
              ></contact-component>
            </template>
          </van-swipe-item>
        </template>
      </van-swipe>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import logoComponent from "@/components/local/index.vue";

import swiperComponent from "@/components/Swiper/index.vue";
import contactComponent from "./components/contact-us.vue";

import { useI18n } from "vue-i18n";
import { IMG_URL, APPLE_URL, ANDROID_URL } from "@/request/config";
import { addMeta } from "@/utils";

export default defineComponent({
  name: "downloadPageComponent",
  components: {
    logoComponent,
    contactComponent,
    swiperComponent,
  },
  setup() {
    const { t } = useI18n();
    const initialSwipe = ref<number>(0);
    document.title = t("downloadPage.title");
    addMeta("keywords", t("downloadPage.keywords"));
    const bigDownload = ref<any>({
      apple: IMG_URL + "/apple-download.png",
      android: IMG_URL + "/android-download.png",
    });
    const smallDownload = ref<any>({
      apple: IMG_URL + "/apple-small.png",
      android: IMG_URL + "/android-small.png",
    });
    const blackDownload = ref<any>({
      apple: IMG_URL + "/apple-black.png",
      android: IMG_URL + "/android-black.png",
    });
    const imgList = ref<any>([
      {
        page: "one",
        img: t("downloadPage.pageOneImg"),
      },
      {
        page: "two",
        imgList: [
          t("downloadPage.pageTwo_one"),
          t("downloadPage.pageTwo_two"),
          t("downloadPage.pageTwo_three"),
        ],
      },
      {
        page: "three",
        imgList: [
          t("downloadPage.pageThree_one"),
          t("downloadPage.pageThree_two"),
          t("downloadPage.pageThree_three"),
        ],
      },
      {
        page: "four",
        imgList: [
          t("downloadPage.pageFour_one"),
          t("downloadPage.pageFour_two"),
          t("downloadPage.pageFour_three"),
        ],
      },
      {
        page: "five",
      },
    ]);
    const goApp = (type: number) => {
      if (type === 1) {
        window.open(APPLE_URL);
      } else {
        window.open(ANDROID_URL);
      }
    };
    const handleChangeSwipe = (index: number) => {
      initialSwipe.value = index;
    };
    return {
      imgList,
      bigDownload,
      smallDownload,
      blackDownload,
      goApp,
      initialSwipe,
      handleChangeSwipe,
    };
  },
});
</script>

<style scoped lang="less">
.download-page {
  width: 100%;
  height: 100%;
  background-color: #000000;
  .swiper-content {
    width: 100%;
    height: 100%;
    position: relative;
    .top {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      z-index: 999;
    }
    .item-img {
      width: 100%;
      height: 100%;
      position: relative;
      .download-btn {
        position: absolute;
        bottom: 20px;
        left: 0;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        width: 100%;
        .item {
          width: 140px;
          height: 50px;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }

      .download-btn-two {
        position: absolute;
        bottom: 50px;
        right: 20px;
        display: flex;
        flex-direction: column;
        .item {
          width: 48px;
          height: 48px;
          &:last-child {
            margin-top: 10px;
          }
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
      .download-btn-five {
        position: absolute;
        top: 274px;
        right: 70px;
        .item {
          width: 120px;
          height: 43px;
          &:last-child {
            margin-top: 10px;
          }
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
  .one-page {
    width: 100%;
    height: 100%;
    position: relative;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .seven {
    width: 100%;
    height: 100%;
    // display: flex;
    // flex-direction: column;
    // justify-content: center;
    // align-items: center;
    margin-top: 30px;
  }
}
</style>
