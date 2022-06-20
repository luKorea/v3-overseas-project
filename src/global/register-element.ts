/*
 * @Author: korealu
 * @Date: 2022-01-13 17:43:39
 * @LastEditors: korealu 643949593@qq.com
 * @LastEditTime: 2022-06-20 10:44:01
 * @Description: file content
 * @FilePath: /h5-active-v2/src/global/register-element.js
 */
import { App } from "vue";
import {
  Button,
  Popup,
  Image,
  Radio,
  RadioGroup,
  Overlay,
  CountDown,
  Icon,
} from "vant";

const components = [
  Button,
  Popup,
  Image,
  Radio,
  RadioGroup,
  Overlay,
  CountDown,
  Icon,
];

export default function (app: App) {
  components.forEach((component) => {
    app.component(component.name, component);
  });
}
