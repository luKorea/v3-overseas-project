import axios, { AxiosInstance } from "axios";
import type { HYRequestInterceptors, HYRequestConfig } from "./type";
import { koreaToast, koreaDialog } from "../utils/alert";

const DEFAULT_LOADING = true;

axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";
class KoreaRequest {
  instance: AxiosInstance;
  interceptors?: HYRequestInterceptors;
  showLoading: boolean;
  loading?: any;

  constructor(config: HYRequestConfig) {
    // 创建axios实例
    this.instance = axios.create(config);
    // 保存基本信息
    this.interceptors = config.interceptors;
    this.showLoading = config.showLoading ?? DEFAULT_LOADING;
    // 单个实例请求拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    );
    // 单个实例响应拦截器
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.requestInterceptorCatch
    );
    //  全局拦截器
    this.instance.interceptors.request.use(
      (config) => {
        if (this.showLoading) {
          this.loading = koreaToast.loading({
            message: "加载中...",
            forbidClick: true,
            loadingType: "spinner",
            overlay: true,
          });
        }
        return config;
      },
      (error) => {
        return error;
      }
    );
    this.instance.interceptors.response.use(
      (response) => {
        koreaToast.clear();
        const { data } = response;
        if (data.code === 2) {
          koreaDialog
            .alert({
              message: "登录超时，请重新登录",
            })
            .then(() => {
              localStorage.clear();
              window.location.reload();
            });
        }
        return response.data;
      },
      (error) => {
        koreaToast.clear();
        return error;
      }
    );
  }

  /**
   * @description request 请求
   * @param config
   */
  request<T = any>(config: HYRequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      // 单个请求拦截器
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config);
      }
      // 判断是否需要显示loading效果
      if (config.showLoading === false) {
        this.showLoading = config.showLoading;
      }
      this.instance
        .request(config)
        .then((res: any) => {
          // 单个请求对数据处理
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res);
          }
          this.showLoading = DEFAULT_LOADING;
          // 将结果返回
          resolve(res);
        })
        .catch((err) => {
          this.showLoading = DEFAULT_LOADING;
          reject(err);
        });
    });
  }

  get<T = any>(config: HYRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: "GET" });
  }

  post<T = any>(config: HYRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: "POST" });
  }

  delete<T = any>(config: HYRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: "DELETE" });
  }

  patch<T = any>(config: HYRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: "PATCH" });
  }

  put<T = any>(config: HYRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: "PUT" });
  }

  options<T = any>(config: HYRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: "OPTIONS" });
  }

  purge<T = any>(config: HYRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: "PURGE" });
  }

  head<T = any>(config: HYRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: "HEAD" });
  }

  link<T = any>(config: HYRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: "LINK" });
  }

  unlink<T = any>(config: HYRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: "UNLINK" });
  }
}

export default KoreaRequest;
