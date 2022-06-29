import { IMG_URL_EN, IMG_URL } from "@/request/config";
const DOWNLOAD = "/download";
export default {
  name: "en",
  // 这里是领夕页面配置
  message: {
    title: "Pofi Create Exclusive Dolls release",
    pageOneImg: IMG_URL_EN + "/one-page.png",
    pageTwo_one: IMG_URL_EN + "/two-one.png",
    pageTwo_two: IMG_URL_EN + "/two-two.png",
    pageTwo_three: IMG_URL_EN + "/two-three.png",
    pageThree_one: IMG_URL_EN + "/three-one.png",
    pageThree_two: IMG_URL_EN + "/three-two.png",
    pageThree_three: IMG_URL_EN + "/three-three.png",
    pageThree_four: IMG_URL_EN + "/three-four.png",
    pageFour_one: IMG_URL_EN + "/four-one.png",
    pageFour_two: IMG_URL_EN + "/four-two.png",
    pageFour_three: IMG_URL_EN + "/four-three.png",
    pageFiveImg: IMG_URL_EN + "/five-page.png",
    pageSixImg: IMG_URL_EN + "/six-page.png",
    // 联系我们
    contactTitle: "contact us",
    contactList: [
      {
        icon: IMG_URL + "/twitter-icon.png",
        title: "twitter",
        urlLink: "@PoficreateEN",
        url: "https://twitter.com/PoficreateEN",
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
    noticeTitle: "Activity Notice",
    noticeList: [
      "The activity is of long-term validity.",
      "The recharged or gifted items will be directly distributed to the corresponding Pofi ID. Please confirm your Pofi ID carefully before payment.",
      "This discount can only be obtained by participating in the current event page. The discount cannot be enjoyed by in-app recharge. This activity does not participate in other recharge promotions.",
      "The content of this activity is a virtual service, in case of data abnormality, please contact customer service.",
      "Please browse the rules and instructions of this activity carefully, participation in this activity will be regarded as fully understanding and accepting and approving the rules of this activity. All Rights Reserved by Pofi Create.",
    ],
    end: "THE END",
  },
  // 这是下载页面配置
  downloadPage: {
    title: "PofiCreate--the best one for painting reference",
    pageOneImg: IMG_URL_EN + DOWNLOAD + "/one-page.png",
    pageTwo_one: IMG_URL_EN + DOWNLOAD + "/two-one.png",
    pageTwo_two: IMG_URL_EN + DOWNLOAD + "/two-two.png",
    pageTwo_three: IMG_URL_EN + DOWNLOAD + "/two-three.png",
    pageThree_one: IMG_URL_EN + DOWNLOAD + "/three-one.png",
    pageThree_two: IMG_URL_EN + DOWNLOAD + "/three-two.png",
    pageThree_three: IMG_URL_EN + DOWNLOAD + "/three-three.png",
    pageFour_one: IMG_URL_EN + DOWNLOAD + "/four-one.png",
    pageFour_two: IMG_URL_EN + DOWNLOAD + "/four-two.png",
    pageFour_three: IMG_URL_EN + DOWNLOAD + "/four-three.png",
    // 联系我们
    contactTitle: "contact us",
    contactList: [
      {
        icon: IMG_URL + "/twitter-icon.png",
        title: "twitter",
        urlLink: "@PoficreateEN",
        url: "https://twitter.com/PoficreateEN",
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
