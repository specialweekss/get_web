"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Math) {
  ItemVue();
}
const ItemVue = () => "./Item.js";
const _sfc_main = {
  __name: "create",
  setup(__props) {
    var item_num = common_vendor.ref(1);
    var item = common_vendor.ref([]);
    var userId = common_vendor.ref("");
    var getId = common_vendor.ref(0);
    var onEmit = common_vendor.ref(false);
    var title = common_vendor.ref("请输入标题");
    var isNone = common_vendor.ref(true);
    var isCommit = common_vendor.ref(false);
    var ctx = common_vendor.getCurrentInstance();
    common_vendor.onLoad((options) => {
      if (options.userId) {
        userId.value = options.userId;
      }
    });
    function onFocus(e) {
      if (isNone) {
        title.value = "";
        isNone = false;
      }
    }
    function onblur(e) {
      if (title.value == "") {
        title.value = "请输入标题";
        isNone = true;
      }
    }
    function ItemAdd() {
      item_num.value++;
    }
    function over() {
      onEmit.value = true;
    }
    function commitGet() {
      return new Promise((resolve, reject) => {
        common_vendor.wx$1.request({
          method: "POST",
          url: ctx.proxy.$route + "/getCommit",
          data: {
            "title": title.value,
            "userId": userId.value
          },
          success(res) {
            getId.value = res.data.data;
            resolve(getId.value);
          },
          fail(res) {
            common_vendor.index.__f__("log", "at pages/create/create.vue:74", res);
            reject(res);
          }
        });
      });
    }
    async function getItem(e) {
      if (!isCommit.value) {
        isCommit.value = true;
        await commitGet();
      }
      item.value.push({
        "getId": getId,
        "itemName": e.itemName,
        "num": e.num
      });
    }
    common_vendor.watch(() => item.value.length, (nv, ov) => {
      if (nv == item_num.value) {
        common_vendor.wx$1.request({
          method: "POST",
          url: ctx.proxy.$route + "/itemCommit",
          data: item.value,
          success(res) {
            common_vendor.index.__f__("log", "at pages/create/create.vue:101", res);
            common_vendor.wx$1.navigateTo({
              url: `/pages/check/check?userId=${userId.value}`
            });
          }
        });
      }
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.unref(isNone) ? 1 : "",
        b: common_vendor.o(onFocus),
        c: common_vendor.o(onblur),
        d: common_vendor.unref(title),
        e: common_vendor.o(($event) => common_vendor.isRef(title) ? title.value = $event.detail.value : title = $event.detail.value),
        f: common_vendor.f(common_vendor.unref(item_num), (item2, index, i0) => {
          return {
            a: "a65f7dbe-0-" + i0,
            b: common_vendor.p({
              item_num: index + 1,
              onEmit: common_vendor.unref(onEmit)
            })
          };
        }),
        g: common_vendor.o(getItem),
        h: common_vendor.o(ItemAdd),
        i: common_vendor.o(over)
      };
    };
  }
};
wx.createPage(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/create/create.js.map
