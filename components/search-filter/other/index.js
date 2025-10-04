var t = require("../../../@babel/runtime/helpers/defineProperty"), e = require("../../../@babel/runtime/helpers/objectSpread2"), a = require("../../../2AF49AB285E1369C4C92F2B531812695.js");

Component({
    properties: {
        filtering: {
            type: Boolean,
            value: !1
        },
        filters: {
            type: Object,
            value: {}
        },
        tab: {
            type: String,
            value: ""
        }
    },
    data: {
        rents: a.RENT_TYPES.map(function(t) {
            return e(e({}, t), {}, {
                selected: !1
            });
        }),
        prices: [],
        layouts: a.LAYOUTS.map(function(t) {
            return e(e({}, t), {}, {
                selected: !1
            });
        }),
        squares: a.SQUARE_METERS.map(function(t) {
            return e(e({}, t), {}, {
                selected: !1
            });
        }),
        custom: {
            min: "",
            max: ""
        }
    },
    ready: function() {
        this.setData({
            prices: "sale" == this.data.tab ? a.SALE_PRICES.map(function(t) {
                return e(e({}, t), {}, {
                    selected: !1
                });
            }) : a.RENT_PRICES.map(function(t) {
                return e(e({}, t), {}, {
                    selected: !1
                });
            })
        });
    },
    observers: {
        "filters.city": function() {
            "" == this.data.filters.cost1 && "" == this.data.filters.cost2 && this.clear("price"), 
            "" == this.data.filters.bed_count && this.clear("layout"), "rent" == this.data.tab && "" == this.data.filters.rent_type && this.clear("rent"), 
            "sale" === this.data.tab && "" == this.data.filters.square1 && "" == this.data.filters.square2 && this.clear("square");
        },
        filtering: function() {
            this.data.filtering && (this.setData({
                "custom.min": this.data.filters.cost1,
                "custom.max": this.data.filters.cost2
            }), this.sync("price"), this.sync("layout"), "rent" == this.data.tab && this.sync("rent"), 
            "sale" == this.data.tab && this.sync("square"));
        }
    },
    methods: {
        select: function(e) {
            var a = e.currentTarget.dataset.name, s = e.currentTarget.dataset.index, i = this.data["".concat(a, "s")][s].selected;
            if (i || this.clear(a), this.setData(t({}, "".concat(a, "s[").concat(s, "].selected"), !i)), 
            "price" == a) {
                var r = this.data.prices[s];
                this.setData({
                    "custom.min": i ? "" : r.min,
                    "custom.max": i ? "" : r.max
                });
            }
        },
        set: function(e) {
            var a = e.currentTarget.dataset.name, s = e.detail.value;
            this.clear("price", !0), this.setData(t({}, "custom.".concat(a), s)), this.sync("price");
        },
        sync: function(e) {
            if ("price" == e) for (var a = 0; a < this.data.prices.length; a++) {
                var s = this.data.prices[a];
                s.min == this.data.custom.min && s.max == this.data.custom.max ? this.setData(t({}, "prices[".concat(a, "].selected"), !0)) : this.setData(t({}, "prices[".concat(a, "].selected"), !1));
            } else if ("rent" == e) for (var i = 0; i < this.data.rents.length; i++) {
                this.data.rents[i].value == this.data.filters.rent_type ? this.setData(t({}, "rents[".concat(i, "].selected"), !0)) : this.setData(t({}, "rents[".concat(i, "].selected"), !1));
            } else if ("layout" == e) for (var r = this.data.filters.bed_count.split(";"), c = 0; c < this.data.layouts.length; c++) {
                var n = this.data.layouts[c];
                r.indexOf(n.value) >= 0 ? this.setData(t({}, "layouts[".concat(c, "].selected"), !0)) : this.setData(t({}, "layouts[".concat(c, "].selected"), !1));
            } else if ("square" == e) for (var l = 0; l < this.data.squares.length; l++) {
                var o = this.data.squares[l];
                o.min == this.data.filters.square1 && o.max == this.data.filters.square2 ? this.setData(t({}, "squares[".concat(l, "].selected"), !0)) : this.setData(t({}, "squares[".concat(l, "].selected"), !1));
            }
        },
        reset: function() {
            this.clear("price"), "rent" == this.data.tab && this.clear("rent"), "sale" == this.data.tab && this.clear("square"), 
            this.clear("layout");
        },
        clear: function(e, a) {
            "price" == e && (a || this.setData({
                custom: {
                    min: "",
                    max: ""
                }
            }));
            for (var s = 0; s < this.data["".concat(e, "s")].length; s++) this.setData(t({}, "".concat(e, "s[").concat(s, "].selected"), !1));
        },
        rent: function(e) {
            var a = e.currentTarget.dataset.index;
            this.data.rents[a].selected || this.clear("rent"), this.setData(t({}, "rents[".concat(a, "].selected"), !this.data.rents[a].selected));
        },
        multi: function(e) {
            var a = e.currentTarget.dataset.index;
            this.setData(t({}, "layouts[".concat(a, "].selected"), !this.data.layouts[a].selected));
        },
        search: function() {
            var t = [], e = "", a = {
                min: "",
                max: ""
            };
            this.data.squares.map(function(t) {
                t.selected && (a.min = t.min, a.max = t.max);
            }), this.data.rents.map(function(t) {
                t.selected && (e = t.value);
            }), this.data.layouts.map(function(e) {
                e.selected && t.push(e.value);
            }), this.triggerEvent("search", "rent" == this.data.tab ? {
                bed_count: t.join(";"),
                rent_type: e,
                cost1: this.data.custom.min,
                cost2: this.data.custom.max
            } : {
                bed_count: t.join(";"),
                square1: a.min,
                square2: a.max,
                cost1: this.data.custom.min,
                cost2: this.data.custom.max
            });
        }
    }
});