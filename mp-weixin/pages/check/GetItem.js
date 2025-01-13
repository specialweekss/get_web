"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "GetItem",
  props: ["item", "ans"],
  setup(__props) {
    common_vendor.ref(true);
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(__props.item.itemName),
        b: common_vendor.t(__props.item.num),
        c: common_vendor.f(__props.ans.ans_list, (item, index, i0) => {
          return {
            a: common_vendor.t(item.userName)
          };
        })
      };
    };
  }
};
wx.createComponent(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/check/GetItem.js.map
