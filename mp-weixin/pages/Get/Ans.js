"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "Ans",
  setup(__props) {
    var title = common_vendor.ref("");
    var itemName = common_vendor.ref("");
    common_vendor.onLoad((options) => {
      if (options.title)
        title.value = options.title;
      if (options.itemName)
        itemName.value = options.itemName;
    });
    const listener = function(res) {
      if (res.openType == "navigateBack") {
        common_vendor.wx$1.offAppRoute(listener);
        if (res.path == "pages/Get/Get") {
          common_vendor.wx$1.navigateBack({
            delta: 1
          });
        }
      }
    };
    common_vendor.wx$1.onAppRoute(listener);
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(common_vendor.unref(title)),
        b: common_vendor.t(common_vendor.unref(itemName))
      };
    };
  }
};
wx.createPage(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/Get/Ans.js.map
