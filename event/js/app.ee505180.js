(function(e){function t(t){for(var o,r,c=t[0],s=t[1],u=t[2],p=0,l=[];p<c.length;p++)r=c[p],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&l.push(a[r][0]),a[r]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);g&&g(t);while(l.length)l.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,r=1;r<n.length;r++){var c=n[r];0!==a[c]&&(o=!1)}o&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var o={},r={app:0},a={app:0},i=[];function c(e){return s.p+"js/"+({active:"active",download:"download"}[e]||e)+"."+{active:"c0bde7a3",download:"a497f243"}[e]+".js"}function s(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={active:1,download:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var o="css/"+({active:"active",download:"download"}[e]||e)+"."+{active:"d7c31ade",download:"ec962148"}[e]+".css",a=s.p+o,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var u=i[c],p=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(p===o||p===a))return t()}var l=document.getElementsByTagName("style");for(c=0;c<l.length;c++){u=l[c],p=u.getAttribute("data-href");if(p===o||p===a)return t()}var g=document.createElement("link");g.rel="stylesheet",g.type="text/css",g.onload=t,g.onerror=function(t){var o=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=o,delete r[e],g.parentNode.removeChild(g),n(i)},g.href=a;var f=document.getElementsByTagName("head")[0];f.appendChild(g)})).then((function(){r[e]=0})));var o=a[e];if(0!==o)if(o)t.push(o[2]);else{var i=new Promise((function(t,n){o=a[e]=[t,n]}));t.push(o[2]=i);var u,p=document.createElement("script");p.charset="utf-8",p.timeout=120,s.nc&&p.setAttribute("nonce",s.nc),p.src=c(e);var l=new Error;u=function(t){p.onerror=p.onload=null,clearTimeout(g);var n=a[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+o+": "+r+")",l.name="ChunkLoadError",l.type=o,l.request=r,n[1](l)}a[e]=void 0}};var g=setTimeout((function(){u({type:"timeout",target:p})}),12e4);p.onerror=p.onload=u,document.head.appendChild(p)}return Promise.all(t)},s.m=e,s.c=o,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)s.d(n,o,function(t){return e[t]}.bind(null,o));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="../",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],p=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var g=p;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},1:function(e,t){},"2e0d":function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23");n("499a"),n("f5df1"),n("77ed"),n("2e0d");function r(e,t,n,r,a,i){var c=Object(o["resolveComponent"])("router-view");return Object(o["openBlock"])(),Object(o["createBlock"])(c)}var a=n("5530"),i=n("d4ec"),c=n("bee2"),s=(n("d3b7"),n("bc3a")),u=n.n(s),p=n("6c43"),l=(n("27f1"),n("2849")),g=(n("ec5d"),n("fc00")),f=(n("ef8e"),n("0ae8")),h=(n("e7c3"),p["a"]),d=l["a"],w=(f["a"],g["a"],!0);u.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded";var v=function(){function e(t){var n,o,r,a,c,s=this;Object(i["a"])(this,e),this.instance=u.a.create(t),this.interceptors=t.interceptors,this.showLoading=null!==(n=t.showLoading)&&void 0!==n?n:w,this.instance.interceptors.request.use(null===(o=this.interceptors)||void 0===o?void 0:o.requestInterceptor,null===(r=this.interceptors)||void 0===r?void 0:r.requestInterceptorCatch),this.instance.interceptors.response.use(null===(a=this.interceptors)||void 0===a?void 0:a.responseInterceptor,null===(c=this.interceptors)||void 0===c?void 0:c.requestInterceptorCatch),this.instance.interceptors.request.use((function(e){return s.showLoading&&(s.loading=h.loading({message:"加载中...",forbidClick:!0,loadingType:"spinner",overlay:!0})),e}),(function(e){return e})),this.instance.interceptors.response.use((function(e){h.clear();var t=e.data;return 2===t.code&&d.alert({message:"登录超时，请重新登录"}).then((function(){localStorage.clear(),window.location.reload()})),e.data}),(function(e){return h.clear(),e}))}return Object(c["a"])(e,[{key:"request",value:function(e){var t=this;return new Promise((function(n,o){var r;null!==(r=e.interceptors)&&void 0!==r&&r.requestInterceptor&&(e=e.interceptors.requestInterceptor(e)),!1===e.showLoading&&(t.showLoading=e.showLoading),t.instance.request(e).then((function(o){var r;null!==(r=e.interceptors)&&void 0!==r&&r.responseInterceptor&&(o=e.interceptors.responseInterceptor(o)),t.showLoading=w,n(o)})).catch((function(e){t.showLoading=w,o(e)}))}))}},{key:"get",value:function(e){return this.request(Object(a["a"])(Object(a["a"])({},e),{},{method:"GET"}))}},{key:"post",value:function(e){return this.request(Object(a["a"])(Object(a["a"])({},e),{},{method:"POST"}))}},{key:"delete",value:function(e){return this.request(Object(a["a"])(Object(a["a"])({},e),{},{method:"DELETE"}))}},{key:"patch",value:function(e){return this.request(Object(a["a"])(Object(a["a"])({},e),{},{method:"PATCH"}))}},{key:"put",value:function(e){return this.request(Object(a["a"])(Object(a["a"])({},e),{},{method:"PUT"}))}},{key:"options",value:function(e){return this.request(Object(a["a"])(Object(a["a"])({},e),{},{method:"OPTIONS"}))}},{key:"purge",value:function(e){return this.request(Object(a["a"])(Object(a["a"])({},e),{},{method:"PURGE"}))}},{key:"head",value:function(e){return this.request(Object(a["a"])(Object(a["a"])({},e),{},{method:"HEAD"}))}},{key:"link",value:function(e){return this.request(Object(a["a"])(Object(a["a"])({},e),{},{method:"LINK"}))}},{key:"unlink",value:function(e){return this.request(Object(a["a"])(Object(a["a"])({},e),{},{method:"UNLINK"}))}}]),e}(),m=v,b=n("cd58"),y=n("4328"),T=n.n(y),P=new m({baseURL:b["c"],timeout:1e4,showLoading:!0,interceptors:{requestInterceptor:function(e){return e["data"]=T.a.stringify(e["data"]),e}}}),k=n("d80c"),O=Object(o["defineComponent"])({setup:function(){return P.get({url:"https://api.pofiart.com/api/support/ip2geo"}).then((function(e){if(200===e.code){var t=e.data;"日本"===t.region?k["a"].setCache("lang","ja"):"中国"===t.region&&("香港"===t.province||"澳门"===t.province||"台湾"===t.province)?k["a"].setCache("lang","zhTw"):k["a"].setCache("lang","en")}})),{}}}),j=n("d959"),_=n.n(j);const C=_()(O,[["render",r]]);var L=C,I=(n("3ca3"),n("ddb0"),n("6c02")),E=[{path:"/download",name:"downloadComponent",meta:{title:"pofi create"},component:function(){return n.e("download").then(n.bind(null,"0ea3"))}},{path:"/active",name:"active",meta:{title:"pofi create"},component:function(){return n.e("active").then(n.bind(null,"8219"))}}],N=Object(I["a"])({history:Object(I["b"])("../"),routes:E}),q=N,F=n("5502"),S=Object(F["a"])({state:{},mutations:{},actions:{},modules:{}}),x=(n("159b"),n("b0c0"),n("2e1b")),A=n("5f24"),D=n("aee2"),H=n("5d54"),R=n("fe02"),J=n("d29f"),B=n("cdc2"),U=n("9a1c"),z=n("d645"),M=n("98f8"),K=n("b4d6"),G=n("c21d"),Q=n("82db"),V=[x["a"],A["a"],D["a"],H["a"],R["a"],J["a"],B["a"],U["a"],z["a"],M["a"],K["a"],G["a"],Q["a"]],W=function(e){V.forEach((function(t){e.component(t.name,t)}))},X=function(e){e.use(W)},Y=n("47e2"),Z="/download",$={name:"en",message:{title:"Pofi Create Exclusive Dolls release",pageOneImg:b["e"]+"/one-page.png",pageTwo_one:b["e"]+"/two-one.png",pageTwo_two:b["e"]+"/two-two.png",pageTwo_three:b["e"]+"/two-three.png",pageThree_one:b["e"]+"/three-one.png",pageThree_two:b["e"]+"/three-two.png",pageThree_three:b["e"]+"/three-three.png",pageThree_four:b["e"]+"/three-four.png",pageFour_one:b["e"]+"/four-one.png",pageFour_two:b["e"]+"/four-two.png",pageFour_three:b["e"]+"/four-three.png",pageFiveImg:b["e"]+"/five-page.png",pageSixImg:b["e"]+"/six-page.png",contactTitle:"contact us",contactList:[{icon:b["d"]+"/twitter-icon.png",title:"twitter",urlLink:"@PoficreateEN",url:"https://twitter.com/PoficreateEN"},{icon:b["d"]+"/facebook-icon.png",title:"Facebook",urlLink:"@Poficreate",url:"https://www.facebook.com/PofiCreate"},{icon:b["d"]+"/ins-icon.png",title:"ins",urlLink:"@Poficreate",url:"https://www.instagram.com/poficreate/"}],noticeTitle:"Activity Notice",noticeList:["The activity is of long-term validity.","The recharged or gifted items will be directly distributed to the corresponding Pofi ID. Please confirm your Pofi ID carefully before payment.","This discount can only be obtained by participating in the current event page. The discount cannot be enjoyed by in-app recharge. This activity does not participate in other recharge promotions.","The content of this activity is a virtual service, in case of data abnormality, please contact customer service.","Please browse the rules and instructions of this activity carefully, participation in this activity will be regarded as fully understanding and accepting and approving the rules of this activity. All Rights Reserved by Pofi Create."],end:"THE END"},downloadPage:{title:"Pofi Create Exclusive Dolls release",pageOneImg:b["e"]+Z+"/one-page.png",pageTwo_one:b["e"]+Z+"/two-one.png",pageTwo_two:b["e"]+Z+"/two-two.png",pageTwo_three:b["e"]+Z+"/two-three.png",pageThree_one:b["e"]+Z+"/three-one.png",pageThree_two:b["e"]+Z+"/three-two.png",pageThree_three:b["e"]+Z+"/three-three.png",pageThree_four:b["e"]+Z+"/three-four.png",pageFour_one:b["e"]+Z+"/four-one.png",pageFour_two:b["e"]+Z+"/four-two.png",pageFour_three:b["e"]+Z+"/four-three.png",contactTitle:"contact us",contactList:[{icon:b["d"]+"/twitter-icon.png",title:"twitter",urlLink:"@PoficreateEN",url:"https://twitter.com/PoficreateEN"},{icon:b["d"]+"/facebook-icon.png",title:"Facebook",urlLink:"@Poficreate",url:"https://www.facebook.com/PofiCreate"},{icon:b["d"]+"/ins-icon.png",title:"ins",urlLink:"@Poficreate",url:"https://www.instagram.com/poficreate/"}]}},ee={name:"ja",message:{title:"活動限定無料ドールを取得",pageOneImg:b["f"]+"/one-page.png",pageTwo_one:b["f"]+"/two-one.png",pageTwo_two:b["f"]+"/two-two.png",pageTwo_three:b["f"]+"/two-three.png",pageThree_one:b["f"]+"/three-one.png",pageThree_two:b["f"]+"/three-two.png",pageThree_three:b["f"]+"/three-three.png",pageThree_four:b["f"]+"/three-four.png",pageFour_one:b["f"]+"/four-one.png",pageFour_two:b["f"]+"/four-two.png",pageFour_three:b["f"]+"/four-three.png",pageFiveImg:b["f"]+"/five-page.png",pageSixImg:b["f"]+"/six-page.png",contactTitle:"contact us",contactList:[{icon:b["d"]+"/twitter-icon.png",title:"twitter",urlLink:"@PoficreateEN",url:"https://twitter.com/PoficreateEN"},{icon:b["d"]+"/facebook-icon.png",title:"Facebook",urlLink:"@Poficreate",url:"https://www.facebook.com/PofiCreate"},{icon:b["d"]+"/ins-icon.png",title:"ins",urlLink:"@Poficreate",url:"https://www.instagram.com/poficreate/"}],noticeTitle:"Activity Japan",noticeList:["The activity is of long-term validity.","The recharged or gifted items will be directly distributed to the corresponding Pofi ID. Please confirm your Pofi ID carefully before payment.","This discount can only be obtained by participating in the current event page. The discount cannot be enjoyed by in-app recharge. This activity does not participate in other recharge promotions.","The content of this activity is a virtual service, in case of data abnormality, please contact customer service.","Please browse the rules and instructions of this activity carefully, participation in this activity will be regarded as fully understanding and accepting and approving the rules of this activity. All Rights Reserved by Pofi Create."],end:"THE END"},downloadPage:{title:"活動限定無料ドールを取得"}},te={name:"zh-tw",message:{title:"參與 Pofi Create活動 免費解鎖限定人偶",pageOneImg:b["g"]+"/one-page.png",pageTwo_one:b["g"]+"/two-one.png",pageTwo_two:b["g"]+"/two-two.png",pageTwo_three:b["g"]+"/two-three.png",pageThree_one:b["g"]+"/three-one.png",pageThree_two:b["g"]+"/three-two.png",pageThree_three:b["g"]+"/three-three.png",pageThree_four:b["g"]+"/three-four.png",pageFour_one:b["g"]+"/four-one.png",pageFour_two:b["g"]+"/four-two.png",pageFour_three:b["g"]+"/four-three.png",pageFiveImg:b["g"]+"/five-page.png",pageSixImg:b["g"]+"/six-page.png",contactTitle:"contact us",contactList:[{icon:b["d"]+"/twitter-icon.png",title:"twitter",urlLink:"@PoficreateEN",url:"https://twitter.com/PoficreateEN"},{icon:b["d"]+"/facebook-icon.png",title:"Facebook",urlLink:"@Poficreate",url:"https://www.facebook.com/PofiCreate"},{icon:b["d"]+"/ins-icon.png",title:"ins",urlLink:"@Poficreate",url:"https://www.instagram.com/poficreate/"}],noticeTitle:"Activity Japan",noticeList:["The activity is of long-term validity.","The recharged or gifted items will be directly distributed to the corresponding Pofi ID. Please confirm your Pofi ID carefully before payment.","This discount can only be obtained by participating in the current event page. The discount cannot be enjoyed by in-app recharge. This activity does not participate in other recharge promotions.","The content of this activity is a virtual service, in case of data abnormality, please contact customer service.","Please browse the rules and instructions of this activity carefully, participation in this activity will be regarded as fully understanding and accepting and approving the rules of this activity. All Rights Reserved by Pofi Create."],end:"THE END"},downloadPage:{title:"參與 Pofi Create活動 免費解鎖限定人偶"}},ne={en:$,ja:ee,zhTw:te},oe=Object(Y["a"])({legacy:!1,locale:k["a"].getCache("lang")||"en",messages:ne}),re=function(e){return e.use(oe)},ae=Object(o["createApp"])(L);ae.use(q),ae.use(S),ae.use(re),ae.use(X),ae.mount("#app")},cd58:function(e,t,n){"use strict";n.d(t,"d",(function(){return o})),n.d(t,"e",(function(){return r})),n.d(t,"f",(function(){return a})),n.d(t,"g",(function(){return i})),n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return s})),n.d(t,"c",(function(){return u}));var o="https://f3.pofiart.com/koreaCreateImageH5",r="https://f3.pofiart.com/koreaCreateImageH5/en",a="https://f3.pofiart.com/koreaCreateImageH5/ja",i="https://f3.pofiart.com/koreaCreateImageH5/zh-tw",c="https://apps.apple.com/app/id1576489829",s="https://play.google.com/store/apps/details?id=com.pofiart.create",u=""},d80c:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var o=n("d4ec"),r=n("bee2"),a=(n("e9c4"),function(){function e(t){Object(o["a"])(this,e),this.cacheType=t}return Object(r["a"])(e,[{key:"setCache",value:function(e,t){this.cacheType.setItem(e,JSON.stringify(t))}},{key:"getCache",value:function(e){var t=this.cacheType.getItem(e);if(t)return JSON.parse(t)}},{key:"deleteCache",value:function(e){this.cacheType.removeItem(e)}},{key:"cleanCache",value:function(){this.cacheType.clear()}}]),e}()),i=new a(window.localStorage);new a(window.sessionStorage)}});
//# sourceMappingURL=app.ee505180.js.map