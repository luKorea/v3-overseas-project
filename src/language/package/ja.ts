import { IMG_URL_JA, IMG_URL } from "@/request/config";
const DOWNLOAD = "/download";
export default {
  name: "ja",
  message: {
    name: "ja",
    title: "活動限定無料ドールを取得",
    pageOneImg: IMG_URL_JA + "/one-page.png",
    pageTwo_one: IMG_URL_JA + "/two-one.png",
    pageTwo_two: IMG_URL_JA + "/two-two.png",
    pageTwo_three: IMG_URL_JA + "/two-three.png",
    pageThree_one: IMG_URL_JA + "/three-one.png",
    pageThree_two: IMG_URL_JA + "/three-two.png",
    pageThree_three: IMG_URL_JA + "/three-three.png",
    pageThree_four: IMG_URL_JA + "/three-four.png",
    pageFour_one: IMG_URL_JA + "/four-one.png",
    pageFour_two: IMG_URL_JA + "/four-two.png",
    pageFour_three: IMG_URL_JA + "/four-three.png",
    pageFiveImg: IMG_URL_JA + "/five-page.png",
    pageSixImg: IMG_URL_JA + "/six-page.png",
    // 联系我们
    contactTitle: "お問い合わせ",
    contactList: [
      {
        icon: IMG_URL + "/twitter-icon.png",
        title: "twitter",
        urlLink: "@PoficreateEN",
        url: "https://twitter.com/CreatePofi",
      },
      {
        icon: IMG_URL + "/facebook-icon.png",
        title: "Facebook",
        urlLink: "@Poficreate",
        url: "https://www.facebook.com/PofiCreate",
      },
      {
        icon: IMG_URL + "/ins-icon.png",
        title: "ins",
        urlLink: "@Poficreate",
        url: "https://www.instagram.com/poficreate/",
      },
    ],
    // 活动通知
    noticeTitle: "活動ノート",
    openBtn: "展開",
    closeBtn: "折りたたみ",
    noticeList: [
      "この活動は長期間有効です。",
      "リチャージまたはギフトされたアイテムは、対応するPofi IDに直接発行されます。支払い前に、Pofi IDをよく確認してください。",
      "この割引は現在の活動ページでのみ利用可能で、アプリ内リチャージでは利用できません。この活動は他のリチャージプロモーションには参加しません。",
      "本活動の内容は仮想サービスであり、データに異常がある場合、カスタマーサービスに連絡してください。",
      "この活動の規則と指示をよく読んでください。この活動に参加すると、この活動の規則を完全に理解し、受け入れ、承認したものと見なされます。最終解釈権が弊社に属します。",
    ],
    end: "THE END",
  },
  // 这是下载页面配置
  downloadPage: {
    title: "活動限定無料ドールを取得",
    pageOneImg: IMG_URL_JA + DOWNLOAD + "/one-page.png",
    pageTwo_one: IMG_URL_JA + DOWNLOAD + "/two-one.png",
    pageTwo_two: IMG_URL_JA + DOWNLOAD + "/two-two.png",
    pageTwo_three: IMG_URL_JA + DOWNLOAD + "/two-three.png",
    pageThree_one: IMG_URL_JA + DOWNLOAD + "/three-one.png",
    pageThree_two: IMG_URL_JA + DOWNLOAD + "/three-two.png",
    pageThree_three: IMG_URL_JA + DOWNLOAD + "/three-three.png",
    pageFour_one: IMG_URL_JA + DOWNLOAD + "/four-one.png",
    pageFour_two: IMG_URL_JA + DOWNLOAD + "/four-two.png",
    pageFour_three: IMG_URL_JA + DOWNLOAD + "/four-three.png",
    // 联系我们
    contactTitle: "お問い合わせ",
    contactList: [
      {
        icon: IMG_URL + "/twitter-icon.png",
        title: "twitter",
        urlLink: "@PoficreateEN",
        url: "https://twitter.com/CreatePofi",
      },
      {
        icon: IMG_URL + "/facebook-icon.png",
        title: "Facebook",
        urlLink: "@Poficreate",
        url: "https://www.facebook.com/PofiCreate",
      },
      {
        icon: IMG_URL + "/ins-icon.png",
        title: "ins",
        urlLink: "@Poficreate",
        url: "https://www.instagram.com/poficreate/",
      },
    ],
  },
};
