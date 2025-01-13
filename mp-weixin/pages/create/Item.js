"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "Item",
  props: ["item_num", "onEmit"],
  emits: ["itemCommmit"],
  setup(__props, { emit: __emit }) {
    var props = __props;
    var emit = __emit;
    var item_name = common_vendor.ref("签" + props.item_num);
    var num = common_vendor.ref(1);
    var isNone = common_vendor.ref(true);
    common_vendor.watch(() => props.onEmit, (nv, ov) => {
      if (nv) {
        emit("itemCommmit", {
          "itemName": item_name,
          "num": num
        });
      }
    });
    function onFocus(e) {
      if (isNone) {
        item_name.value = "";
        isNone = false;
      }
    }
    function onblur(e) {
      if (item_name.value == "") {
        item_name.value = "签" + props.item_num;
        isNone = true;
      }
    }
    function onadd() {
      num.value++;
    }
    function ondelete() {
      if (num.value > 1)
        num.value--;
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.unref(isNone) ? 1 : "",
        b: common_vendor.o(onFocus),
        c: common_vendor.o(onblur),
        d: common_vendor.unref(item_name),
        e: common_vendor.o(($event) => common_vendor.isRef(item_name) ? item_name.value = $event.detail.value : item_name = $event.detail.value),
        f: common_vendor.t(common_vendor.unref(num)),
        g: common_vendor.o(onadd),
        h: common_vendor.o(ondelete)
      };
    };
  }
};
wx.createComponent(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/create/Item.js.map
