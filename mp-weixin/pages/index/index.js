"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const img_path = common_vendor.ref("/static/ground.jpg");
    const img_style = common_vendor.ref({
      backgroundImage: `url(${img_path.value})`
    });
    var user = common_vendor.ref("");
    var root = false;
    const ctx = common_vendor.getCurrentInstance();
    function login() {
      return new Promise((resolve, reject) => {
        if (!root) {
          common_vendor.wx$1.login({
            success: function(res) {
              common_vendor.wx$1.request({
                url: ctx.proxy.$route + "/getOpenId?jsCode=" + res.code,
                success: function(res2) {
                  user.value = JSON.parse(res2.data.data).openid;
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
    async function onCreate() {
      await login();
      if (root == true) {
        common_vendor.wx$1.navigateTo({
          url: `/pages/create/create?userId=${user.value}`
        });
      }
    }
    async function onCheck() {
      await login();
      if (root == true) {
        common_vendor.wx$1.navigateTo({
          url: `/pages/check/check?userId=${user.value}`
        });
      }
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.s(img_style.value),
        b: common_vendor.o(onCreate),
        c: common_vendor.o(onCheck)
      };
    };
  }
};
wx.createPage(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/index/index.js.map
