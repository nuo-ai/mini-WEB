var e, t = require("../../@babel/runtime/helpers/defineProperty"), a = require("../../0CB3296685E1369C6AD5416181F12695.js"), i = require("../../5C9CDA9585E1369C3AFAB292CA022695.js"), s = (e = require("../../7F02D25785E1369C1964BA5069212695.js")) && e.__esModule ? e : {
    default: e
};

Page({
    behaviors: [ s.default ],
    data: {
        current_tabs: [ "rent", "sale" ],
        tab_index: 0,
        rent_searching: !1,
        rent_filters: {
            page: 1
        },
        rent_filtering: !1,
        rent_list: [],
        rent_has_next_page: !1,
        sale_searching: !1,
        sale_filters: {
            page: 1
        },
        sale_filtering: !1,
        sale_list: [],
        sale_has_next_page: !1
    },
    rent_fetch: a.viewCollectList,
    sale_fetch: i.viewSaleCollects,
    onLoad: function() {
        this.init();
    },
    init: function() {
        var e = this.prefix();
        this.search(this.data["".concat(e, "filters")].page, "page");
    },
    update: function(e) {
        var a = e.detail.index, i = this.prefix();
        this.data["".concat(i, "list")].splice(a, 1), this.setData(t({}, "".concat(i, "list"), this.data["".concat(i, "list")]));
    },
    tab: function(e) {
        var t = e.detail.index;
        this.setData({
            tab_index: t
        });
    },
    swipe: function(e) {
        this.tab(e);
        var t = this.prefix();
        this.data["".concat(t, "list")].length <= 0 && this.refresh();
    }
});