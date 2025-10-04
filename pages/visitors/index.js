var e, t = require("../../@babel/runtime/helpers/defineProperty"), a = (e = require("../../7F02D25785E1369C1964BA5069212695.js")) && e.__esModule ? e : {
    default: e
}, i = require("../../DEA51EB285E1369CB8C376B5DD322695.js");

Page(t(t(t(t(t(t(t(t({
    behaviors: [ a.default ]
}, "behaviors", [ a.default ]), "data", {
    current_tabs: [ "rent", "sale" ],
    tab_index: 0,
    rent_searching: !1,
    rent_filters: {
        sequence: ""
    },
    rent_data: null,
    rent_filtering: !1,
    rent_list: [],
    rent_has_next_page: !1,
    sale_searching: !1,
    sale_filters: {
        sequence: ""
    },
    sale_data: null,
    sale_filtering: !1,
    sale_list: [],
    sale_has_next_page: !1
}), "rent_fetch", i.viewVisitorList), "sale_fetch", i.viewSaleVisitors), "onLoad", function() {
    this.search(""), this.check();
}), "check", function() {
    var e = this, a = this.data.current_tabs[this.data.tab_index];
    (0, i.viewVisitorData)({
        data: a,
        success: function(i) {
            e.setData(t({}, "".concat(a, "_data"), i));
        }
    });
}), "tab", function(e) {
    var t = e.detail.index;
    this.setData({
        tab_index: t
    });
}), "swipe", function(e) {
    this.tab(e);
    var t = this.prefix();
    this.data["".concat(t, "list")].length <= 0 && this.refresh(), this.check();
}));