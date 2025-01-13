"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Math) {
  GetItemVue();
}
const GetItemVue = () => "./GetItem.js";
const _sfc_main = {
  __name: "GetContent",
  setup(__props) {
    var title = common_vendor.ref("标题");
    var item_list = common_vendor.ref([]);
    var ans_lists = common_vendor.ref([]);
    common_vendor.onLoad((options) => {
      if (options.getId) {
        const ctx = common_vendor.getCurrentInstance();
        common_vendor.wx$1.request({
          method: "GET",
          url: ctx.proxy.$route + "/itemByGetId?getId=" + options.getId,
          success(res) {
            common_vendor.index.__f__("log", "at pages/check/GetContent.vue:26", res);
            if (res.data.code == 200) {
              item_list.value = res.data.data;
              common_vendor.wx$1.request({
                method: "POST",
                url: ctx.proxy.$route + "/ansByItems",
                data: item_list.value,
                success(res2) {
                  common_vendor.index.__f__("log", "at pages/check/GetContent.vue:35", res2);
                  if (res2.data.code == 200)
                    ans_lists.value = res2.data.data;
                }
              });
            }
          }
        });
      }
      if (options.title) {
        title.value = options.title;
      }
    });
    function getAnsList(itemId) {
      return ans_lists.value.find((ans_list) => ans_list[0].itemId == itemId);
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(common_vendor.unref(title)),
        b: common_vendor.f(common_vendor.unref(item_list), (item, index, i0) => {
          return {
            a: "5faf9af0-0-" + i0,
            b: common_vendor.p({
              item,
              ans: {
                "ans_list": getAnsList(item.itemId)
              }
            })
          };
        })
      };
    };
  }
};
wx.createPage(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/check/GetContent.js.map
