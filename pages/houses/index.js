var e = require("../../@babel/runtime/helpers/defineProperty"), t = require("../../0CB3296685E1369C6AD5416181F12695.js"), a = require("../../5C9CDA9585E1369C3AFAB292CA022695.js"), i = n(require("../../7F02D25785E1369C1964BA5069212695.js")), s = n(require("../../99A1A31685E1369CFFC7CB1166112695.js")), r = n(require("../../6EFD26C485E1369C089B4EC348622695.js"));

function n(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

Page({
    behaviors: [ i.default, s.default ],
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
        sale_has_next_page: !1,
        share_index: 0
    },
    rent_fetch: t.viewMyHouses,
    sale_fetch: a.viewMySales,
    onLoad: function() {
        this.init();
    },
    init: function() {
        var e = this.prefix();
        this.search(this.data["".concat(e, "filters")].page, "page");
    },
    update: function(t) {
        var a = t.detail.index, i = this.prefix();
        this.data["".concat(i, "list")].splice(a, 1), this.setData(e({}, "".concat(i, "list"), this.data["".concat(i, "list")]));
    },
    create: function() {
        this.add();
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
    },
    share: function(e) {
        var t = e.detail.index;
        this.setData({
            share_index: t
        });
    },
    onShareAppMessage: function() {
        var e = this.prefix(), t = this.data["".concat(e, "list")][this.data.share_index], a = r.default.getToken("uid");
        return {
            title: t.snapshot.title,
            path: "/pages/house/index?id=".concat(t.snapshot.target_id, "&type=").concat(t.snapshot.target_house_type, "&from=").concat(a),
            imageUrl: t.snapshot.photo
        };
    }
});