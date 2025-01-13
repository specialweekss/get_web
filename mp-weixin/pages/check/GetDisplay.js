"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "GetDisplay",
  props: ["get"],
  setup(__props) {
    var prop = __props;
    var color = common_vendor.ref("black");
    var state = common_vendor.ref("");
    function get_state(state2) {
      var states = [["进行中", "black"], ["已完成", "blue"], ["已截止", "red"]];
      return states[state2];
    }
    state.value = get_state(prop.get.state)[0];
    color.value = get_state(prop.get.state)[1];
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(__props.get.title),
        b: common_vendor.t(common_vendor.unref(state)),
        c: common_vendor.unref(color),
        d: `/pages/check/GetContent?getId=${__props.get.getId}&title=${__props.get.title}`
      };
    };
  }
};
wx.createComponent(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/check/GetDisplay.js.map
