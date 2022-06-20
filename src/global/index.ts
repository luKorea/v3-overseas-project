import { App } from "vue";
import registerElement from "@/global/register-element";

export default function (app: App) {
  app.use(registerElement);
}
