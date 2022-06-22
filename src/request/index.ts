/*
 * @Author: your name
 * @Date: 2022-01-18 14:46:55
 * @LastEditTime: 2022-06-22 09:50:13
 * @LastEditors: korealu 643949593@qq.com
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE,
 * @FilePath: /h5-active-v2/src/request/index.js
 */
import KoreaRequest from "./service";
import { BASE_URL } from "./config";
import qs from "qs";
// import localCache from "@/utils/cache";

export const request = new KoreaRequest({
  baseURL: BASE_URL,
  timeout: 10000,
  showLoading: true,
  interceptors: {
    requestInterceptor: (config: any) => {
      // const token = localCache.getCache("token") ?? "";
      // if (token) {
      //   config.headers["Authorization"] = `Bearer ${token}`;
      // }
      // config.headers["Content-Type"] = "x-www-form-urlencoded";
      config["data"] = qs.stringify(config["data"]);
      return config;
    },
  },
});
