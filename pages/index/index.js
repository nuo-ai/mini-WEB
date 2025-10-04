var t = require("../../@babel/runtime/helpers/defineProperty"), e = require("../../@babel/runtime/helpers/objectSpread2"), a = o(require("../../025AADA085E1369C643CC5A73E412695.js")), i = o(require("../../7F02D25785E1369C1964BA5069212695.js")), r = o(require("../../C6859C9085E1369CA0E3F497DAF02695.js")), n = o(require("../../99A1A31685E1369CFFC7CB1166112695.js")), s = require("../../8C7B79D185E1369CEA1D11D623822695.js"), c = require("../../0CB3296685E1369C6AD5416181F12695.js"), h = require("../../5C9CDA9585E1369C3AFAB292CA022695.js");

function o(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

Page({
    behaviors: [ a.default, i.default, r.default, n.default ],
    data: {
        env: __wxConfig.envVersion,
        current_tabs: [ "rent", "sale" ],
        tab_index: 0,
        rent_searching: !1,
        rent_filters: e({}, s.RENT_FILTERS),
        rent_filtering: !1,
        rent_list: [],
        rent_has_next_page: !1,
        rent_current: 0,
        rent_top: 0,
        sale_searching: !1,
        sale_filters: e({}, s.SALE_FILTERS),
        sale_filtering: !1,
        sale_list: [],
        sale_has_next_page: !1,
        sale_current: 0,
        sale_top: 0
    },
    rent_fetch: c.searchHouseList,
    sale_fetch: h.searchSaleList,
    onShow: function() {
        var t = this;
        this.selectTab(0), this.getLocalCity(function() {
            t.init();
        });
    },
    onLoad: function(t) {
        var e = this, a = this.data.current_tabs.indexOf(t.tab);
        this.setData({
            tab_index: a >= 0 ? a : 0
        }), this.syncLocalCity(), wx.$event.on("index", this, function() {
            e.refresh();
        }), this.data.local_city && this.init();
    },
    init: function() {
        var e = this.prefix();
        for (var a in this.data["".concat(e, "filters")]) this.setData(t({}, "".concat(e, "filters.").concat(a), ""));
        this.setData(t({}, "".concat(e, "filters.city"), this.data.local_city)), this.search("");
    },
    prevent: function() {
        return !1;
    },
    change: function() {
        this.locate("city");
    },
    over: function(t) {
        var e = t.detail.current;
        this.setData({
            tab_index: e
        });
    },
    swipe: function(e) {
        this.over(e);
        var a = this.prefix();
        (this.data["".concat(a, "list")].length <= 0 || this.data["".concat(a, "filters")].city != this.data.local_city) && (this.setData(t({}, "".concat(a, "filters.city"), this.data.local_city)), 
        this.refresh());
    },
    mask: function(t) {
        var e = this.getTabBar(), a = t.detail.hide;
        e.setData({
            hide: a
        });
    },
    research: function(a) {
        var i = this.prefix();
        this.setData(t({}, "".concat(i, "filters"), e(e({}, this.data["".concat(i, "filters")]), a.detail))), 
        this.clear(), this.refresh();
    },
    clear: function() {
        var e = this.prefix();
        this.setData(t({}, "".concat(e, "filtering"), !1));
    },
    toggle: function(e) {
        var a = e.detail.index, i = this.prefix();
        this.setData(t(t({}, "".concat(i, "current"), a), "".concat(i, "filtering"), !0));
    },
    create: function() {
        this.add();
    },
    onShareAppMessage: function() {
        return {
            title: "六六找房-".concat(0 == this.data.tab_index ? "找出租房" : "看房买房"),
            path: "/pages/index/index?tab=".concat(this.data.current_tabs[this.data.tab_index])
        };
    },
    onShareTimeline: function() {
        return {
            title: "六六找房-".concat(0 == this.data.tab_index ? "找出租房" : "看房买房"),
            query: "tab=".concat(this.data.current_tabs[this.data.tab_index])
        };
    }
});