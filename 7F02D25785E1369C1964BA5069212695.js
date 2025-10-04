Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var t = require("@babel/runtime/helpers/toConsumableArray.js"), e = require("@babel/runtime/helpers/objectSpread2.js"), a = require("@babel/runtime/helpers/defineProperty.js");

exports.default = Behavior({
    data: {
        initializing: !0,
        searching: !1,
        list: [],
        mode: "",
        page: 0,
        top: 0,
        sequence: "",
        has_next_page: !1
    },
    methods: {
        prefix: function() {
            return this.data.current_tabs ? this.data.current_tabs[this.data.tab_index] + "_" : "";
        },
        refresh: function() {
            var t = this, e = this.prefix();
            this.data["".concat(e, "searching")] || (this.setData(a(a({}, "".concat(e, "top"), 0), "".concat(e, "searching"), !0)), 
            setTimeout(function() {
                t.search("", t.data.mode);
            }, 300));
        },
        next: function() {
            var t = this.prefix();
            this.data["".concat(t, "has_next_page")] && this.search("page" == this.data.mode ? this.data["".concat(t, "filters")].page + 1 : this.data["".concat(t, "filters")].sequence, this.data.mode);
        },
        search: function(s, i, c) {
            var n = this, r = this.prefix();
            this.setData({
                mode: i || "sequence"
            }), s || this.setData(a({}, "".concat(r, "top"), 0)), this.data["".concat(r, "list")].length <= 0 && this.setData(a({}, "".concat(r, "searching"), !0));
            var o = e(e({}, this.data["".concat(r, "filters")]), {}, "page" == i ? {
                page: s || 1
            } : {
                sequence: s
            });
            this["".concat(r, "fetch")]({
                data: o,
                success: function(e) {
                    n.setData(a(a(a({
                        initializing: !1
                    }, "".concat(r, "searching"), !1), "".concat(r, "has_next_page"), e.has_next_page), "".concat(r, "list"), s ? [].concat(t(n.data["".concat(r, "list")]), t(e.items)) : t(e.items))), 
                    "page" == i ? n.setData(a({}, "".concat(r, "filters.page"), o.page)) : n.setData(a({}, "".concat(r, "filters.sequence"), e.sequence)), 
                    c && c();
                }
            });
        },
        renew: function() {
            var t = this, s = this.prefix(), i = this.data["".concat(s, "filters")].page, c = 1, n = [], r = function() {
                c > i ? t.setData(a({}, "".concat(s, "list"), n)) : t["".concat(s, "fetch")]({
                    data: e(e({}, t.data["".concat(s, "filters")]), {}, {
                        page: c
                    }),
                    success: function(t) {
                        c++, n = n.concat(t.items), r();
                    }
                });
            };
            this.data["".concat(s, "list")].length > 0 ? r() : this.search(1, "page");
        }
    }
});