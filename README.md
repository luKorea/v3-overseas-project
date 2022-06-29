# Vue3 移动端页面开发

## 该项目使用Vue3 + typescript + less 开发
## 使用到的组件库
### i18n 国际化
### vant vantUI库
### lib-flexible 移动端适配
### postcss-pxtorem px 转 rem
### animate.css css 动画库
### normalize.css 格式化浏览器默认样式
### vant 桌面端适配
Vant 是一个面向移动端的组件库，因此默认只适配了移动端设备，这意味着组件只监听了移动端的 touch 事件，没有监听桌面端的 mouse 事件。

如果你需要在桌面端使用 Vant，可以引入我们提供的 @vant/touch-emulator，这个库会在桌面端自动将 mouse 事件转换成对应的 touch 事件，使得组件能够在桌面端使用。
```
npm i @vant/touch-emulator -S
import '@vant/touch-emulator';
```

