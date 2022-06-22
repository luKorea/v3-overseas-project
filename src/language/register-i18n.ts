import { localCache } from "@/utils/cache";
import { App } from "vue";
import { createI18n } from "vue-i18n";
import messages from "./index";

const i18n = createI18n({
  legacy: false,
  locale: localCache.getCache("lang") || "en",
  messages,
});

export default (app: App) => app.use(i18n);
