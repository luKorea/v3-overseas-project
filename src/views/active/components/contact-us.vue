<!--
 * @Author: korealu 643949593@qq.com
 * @Date: 2022-06-24 09:12:46
 * @LastEditors: korealu 643949593@qq.com
 * @LastEditTime: 2022-06-24 17:16:21
 * @FilePath: /v3-overseas-project/src/views/active/components/contact-us.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="content-wrap p0">
    <div class="shadow-title">{{ $tm("message.contactTitle") }}</div>
    <div class="big-title">{{ $tm("message.contactTitle") }}</div>
    <template v-for="(item, index) in $tm('message.contactList')" :key="index">
      <div class="contact-item" @click="goInfo(item.url)">
        <div class="contact-info">
          <div class="contact-icon">
            <img
              :class="index === 0 ? 'img1' : index === 1 ? 'img2' : 'img3'"
              :src="item.icon"
              alt=""
            />
          </div>
          <div style="display: flex" :class="index === 2 && 'ml'">
            <div class="contact-title">{{ item.title }}:</div>
            <div class="contact-title-blue">{{ item.urlLink }}</div>
          </div>
          <van-icon class="contact-arrow" name="arrow" />
        </div>
        <div class="line"></div>
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "contactUsPage",
  setup() {
    const goInfo = (url: string) => {
      window.open(url);
    };
    return {
      goInfo,
    };
  },
});
</script>

<style scoped lang="less">
.contact-item {
  display: flex;
  flex-direction: column;
  .contact-info {
    display: flex;
    align-items: center;
    margin-bottom: 4px;
    width: 100%;
    justify-content: space-between;
    .contact-icon {
      min-width: 20px;
      .img1 {
        width: 18px;
        height: 14px;
      }
      .img2 {
        width: 10px;
        height: 18px;
      }
      .img3 {
        width: 18px;
        height: 18px;
      }
      img {
        width: 100%;
        height: 100%;
      }
    }
    .contact-title {
      font-size: 16px;
      font-family: NexaBold;
      color: #ffffff;
      line-height: 19px;
      // margin-left: 40px;
    }
    .contact-title-blue {
      font-size: 16px;
      font-family: NexaBold;
      color: #00daff;
      line-height: 19px;
      margin-left: 10px;
    }
    .contact-arrow {
      font-size: 12px;
      color: rgba(255, 255, 255, 1);
    }
    .ml {
      margin-left: -54px;
    }
  }
  .line {
    height: 1px;
    width: 100%;
    margin-bottom: 20px;
    background-color: rgba(255, 255, 255, 0.3);
  }
}
</style>
