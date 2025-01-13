"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Math) {
  GetDisplay();
}
const GetDisplay = () => "./GetDisplay.js";
const _sfc_main = {
  __name: "check",
  setup(__props) {
    var get_list = common_vendor.ref();
    var userId = common_vendor.ref("");
    var empty = common_vendor.ref(-1);
    common_vendor.onLoad((options) => {
      if (options.userId) {
        userId.value = options.userId;
        const ctx = common_vendor.getCurrentInstance();
        common_vendor.wx$1.request({
          method: "GET",
          url: ctx.proxy.$route + "/getByUserId?userId=" + userId.value,
          success(res) {
            if (res.data.code == 200) {
              get_list.value = res.data.data;
              empty.value = 1;
            } else
              empty.value = 0;
          }
        });
      }
    });
    const listener = function(res) {
      if (res.openType == "navigateBack") {
        if (res.path == "pages/create/create") {
          common_vendor.wx$1.offAppRoute(listener);
          common_vendor.wx$1.navigateBack({
            delta: 1
          });
        }
      }
    };
    common_vendor.wx$1.onAppRoute(listener);
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.unref(empty) == 1
      }, common_vendor.unref(empty) == 1 ? {
        b: common_vendor.f(common_vendor.unref(get_list), (item, index, i0) => {
          return {
            a: "4d7e0273-0-" + i0,
            b: common_vendor.p({
              get: item
            }),
            c: `/pages/Get/Get?getId=${item.getId}&userId=${common_vendor.unref(userId)}&title=${item.title}`
          };
        })
      } : common_vendor.unref(empty) == 0 ? {} : {}, {
        c: common_vendor.unref(empty) == 0
      });
    };
  }
};
_sfc_main.__runtimeHooks = 2;
wx.createPage(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/check/check.js.map
