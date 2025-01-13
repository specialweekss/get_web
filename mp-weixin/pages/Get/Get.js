"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "Get",
  setup(__props) {
    const img_path = common_vendor.ref("/static/ground.jpg");
    common_vendor.ref({ backgroundImage: `url(${img_path.value})` });
    var userId = common_vendor.ref("");
    var getId = common_vendor.ref(0);
    var title = common_vendor.ref("");
    var userName = common_vendor.ref("");
    var root = false;
    const ctx = common_vendor.getCurrentInstance();
    common_vendor.onLoad((options) => {
      if (options.getId) {
        common_vendor.index.__f__("log", "at pages/Get/Get.vue:24", options.getId);
        getId.value = options.getId;
        if (options.userId) {
          common_vendor.index.__f__("log", "at pages/Get/Get.vue:28", options.userId);
          userId.value = options.userId;
          root = true;
        }
      }
      if (options.title) {
        title.value = options.title;
      }
    });
    function login() {
      return new Promise((resolve, reject) => {
        if (!root) {
          common_vendor.wx$1.login({
            success: function(res) {
              common_vendor.wx$1.request({
                url: ctx.proxy.$route + "/getOpenId?jsCode=" + res.code,
                success: function(res2) {
                  user.value = JSON.parse(res2.data.data).openid;
                  common_vendor.index.__f__("log", "at pages/Get/Get.vue:48", user.value);
                  root = true;
                  resolve();
                }
              });
            },
            fail() {
              common_vendor.wx$1.showToast({
                title: "请先登录",
                icon: "error"
              });
              reject();
            }
          });
        } else
          resolve();
      });
    }
    async function get() {
      await login();
      if (root == true) {
        if (userName.value == "") {
          common_vendor.wx$1.showToast({
            title: "请输入昵称",
            icon: "error"
          });
          return;
        }
        common_vendor.wx$1.request({
          method: "POST",
          url: ctx.proxy.$route + `/get?getId=${getId.value}&userId=${userId.value}&userName=${userName.value}`,
          success(res) {
            common_vendor.index.__f__("log", "at pages/Get/Get.vue:85", res);
            if (res.data.code == 200) {
              common_vendor.wx$1.navigateTo(
                {
                  url: `/pages/Get/Ans?title=${title.value}&itemName=${res.data.data}`
                }
              );
            } else if (res.data.data == 0) {
              common_vendor.wx$1.showToast({
                title: "抽签已结束",
                icon: "error"
              });
              setTimeout(() => {
                common_vendor.wx$1.navigateBack({
                  delta: 1
                });
              }, 2e3);
            } else {
              common_vendor.wx$1.showToast({
                title: "您已参加过抽签",
                icon: "error"
              });
              setTimeout(() => {
                common_vendor.wx$1.navigateBack({
                  delta: 1
                });
              }, 2e3);
            }
          }
        });
      } else {
        common_vendor.wx$1.showToast({
          title: "为防止重复抽签，请授权",
          icon: "error"
        });
      }
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(common_vendor.unref(title)),
        b: common_vendor.unref(userName),
        c: common_vendor.o(($event) => common_vendor.isRef(userName) ? userName.value = $event.detail.value : userName = $event.detail.value),
        d: common_vendor.o(get)
      };
    };
  }
};
wx.createPage(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/Get/Get.js.map
