// pages/home/home.js
import * as ToURL from '../../utils/navigateToURL';


Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [
      {
        title: "请朋友喝咖啡",
        sections: [
          {
            avatar_url: "../../sources/images/treat01.png",
            desc: "给特别放入你"
          },
          {
            avatar_url: "../../sources/images/treat02.png",
            desc: "我想对你说"
          }
        ]
      },
      {
        title: "星礼卡表心意",
        sections: [
          {
            avatar_url: "../../sources/images/card01.jpg",
            desc: "来星巴克约会"
          },
          {
            avatar_url: "../../sources/images/card02.jpg",
            desc: "爱要大声说出来"
          },
          {
            avatar_url: "../../sources/images/card03.jpg",
            desc: "勇敢爱"
          },
          {
            avatar_url: "../../sources/images/card04.jpg",
            desc: "一个人的精彩"
          },
          {
            avatar_url: "../../sources/images/card05.jpg",
            desc: "萌萌哒"
          },
          {
            avatar_url: "../../sources/images/card06.jpg",
            desc: "友谊万岁"
          },
          {
            avatar_url: "../../sources/images/card07.jpg",
            desc: "恋人未满"
          },
          {
            avatar_url: "../../sources/images/card08.jpg",
            desc: "生日快乐"
          }
        ]
      }
    ]
  },
  
  /**
   * 跳转详情 - 带参数, 
   */
  toDetailPress: function(option) {
    let itemDict = option.currentTarget.dataset.item
    console.log("to详情:", itemDict.desc);

    wx.navigateTo({
      // 需要拼接参数
      url: '../../pages/detail/detail?desc=' + itemDict.desc,
      success: (result) => {},
      fail: () => {},
      complete: () => {}
    });
  },

  /**
   * 点击购买历史 - 不带参数
   */
  toBugHistory: function() {
    console.log("点击购买历史")

    wx.navigateTo({
      url: ToURL.toDetailURL,
      success: (result) => {},
      fail: () => {},
      complete: () => {}
    });
  }
})