/*
 * @Author: korealu
 * @Date: 2022-01-13 17:43:39
 * @LastEditors: korealu 643949593@qq.com
 * @LastEditTime: 2022-06-20 10:21:05
 * @Description: file content
 * @FilePath: /h5-active-v2/src/utils/cache.js
 */
class Cache {
  public cacheType: any;
  constructor(cacheType: any) {
    this.cacheType = cacheType;
  }
  setCache(key: any, value: any) {
    this.cacheType.setItem(key, JSON.stringify(value));
  }

  getCache(key: any) {
    const value = this.cacheType.getItem(key);
    if (value) {
      return JSON.parse(value);
    }
  }

  deleteCache(key: any) {
    this.cacheType.removeItem(key);
  }

  cleanCache() {
    this.cacheType.clear();
  }
}

export const localCache = new Cache(window.localStorage);
export const sessionCache = new Cache(window.sessionStorage);
