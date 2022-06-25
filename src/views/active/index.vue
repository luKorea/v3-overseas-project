<!--
 * @Author: korealu 643949593@qq.com
 * @Date: 2022-06-20 09:51:22
 * @LastEditors: korealu 643949593@qq.com
 * @LastEditTime: 2022-06-25 14:27:49
 * @FilePath: /v3-overseas-project/src/views/active/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="active-page">
    <!-- logo区域 -->
    <div class="swiper-content">
      <div class="top"><logo-component></logo-component></div>
      <van-swipe
        vertical
        style="height: 100%; overflow: hidden"
        :show-indicators="false"
        :loop="false"
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
                <swiper-component :img-list="item.imgList"></swiper-component>
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
              <swiper-component :img-list="item.imgList"></swiper-component>
            </template>
            <template v-if="item.page === 'four'">
              <swiper-component :img-list="item.imgList"></swiper-component>
            </template>
            <template v-if="item.page === 'five'">
              <div class="item-img">
                <img style="width: 100%; height: 100%" :src="item.img" alt="" />
                <div class="download-btn-five">
                  <div class="item" @click="goApp(1)">
                    <img :src="blackDownload.apple" alt="" />
                  </div>
                  <div class="item" @click="goApp(0)">
                    <img :src="blackDownload.android" alt="" />
                  </div>
                </div>
              </div>
            </template>
            <template v-if="item.page === 'six'">
              <img style="width: 100%; height: 100%" :src="item.img" alt="" />
            </template>
            <template v-if="item.page === 'seven'">
              <div class="seven">
                <!-- 联系我们 -->
                <contact-component></contact-component>
                <!-- 通知区域 -->
                <notice-component></notice-component>
              </div>
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
import noticeComponent from "./components/notice.vue";

import { useI18n } from "vue-i18n";
import { IMG_URL, APPLE_URL, ANDROID_URL } from "@/request/config";

export default defineComponent({
  components: {
    logoComponent,
    contactComponent,
    noticeComponent,
    swiperComponent,
  },
  setup() {
    const { t } = useI18n();
    document.title = t("message.title");
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
        img: t("message.pageOneImg"),
      },
      {
        page: "two",
        imgList: [
          t("message.pageTwo_one"),
          t("message.pageTwo_two"),
          t("message.pageTwo_three"),
        ],
      },
      {
        page: "three",
        imgList: [
          t("message.pageThree_one"),
          t("message.pageThree_two"),
          t("message.pageThree_three"),
          t("message.pageThree_four"),
        ],
      },
      {
        page: "four",
        imgList: [
          t("message.pageFour_one"),
          t("message.pageFour_two"),
          t("message.pageFour_three"),
        ],
      },
      {
        page: "five",
        img: t("message.pageFiveImg"),
      },
      {
        page: "six",
        img: t("message.pageSixImg"),
      },
      {
        page: "seven",
      },
    ]);
    const goApp = (type: number) => {
      if (type === 1) {
        window.open(APPLE_URL);
      } else {
        window.open(ANDROID_URL);
      }
    };
    return {
      imgList,
      bigDownload,
      smallDownload,
      blackDownload,
      goApp,
    };
  },
});
</script>

<style scoped lang="less">
.active-page {
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
        bottom: 80px;
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
