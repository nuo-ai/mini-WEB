var t = require("../../../@babel/runtime/helpers/defineProperty"), e = require("../../../@babel/runtime/helpers/objectSpread2"), s = require("../../../729E7EE385E1369C14F816E407D12695.js");

Component({
    properties: {
        filters: {
            type: Object,
            value: {}
        },
        filtering: {
            type: Boolean,
            value: !1
        }
    },
    data: {
        filter_tab: "region",
        subways: [],
        selected_line: null,
        selected_stations: [],
        regions: []
    },
    observers: {
        filtering: function() {
            this.data.filters.city && this.data.filtering && (this.data.filters.region && this.setData({
                filter_tab: "region"
            }), this.init());
        }
    },
    methods: {
        init: function() {
            var t = this;
            (0, s.getCityInfo)({
                data: this.data.filters.city,
                success: function(s) {
                    t.setData({
                        subways: s.subway.map(function(t) {
                            return {
                                line: t.line,
                                count: 0,
                                stations: t.stations.map(function(t) {
                                    return e(e({}, t), {}, {
                                        selected: !1
                                    });
                                })
                            };
                        }),
                        regions: s.region
                    }), t.sync();
                }
            });
        },
        sync: function() {
            var e = this, s = this.data.subways.map(function(t) {
                return t.line;
            });
            this.data.filters.stations.split(";").filter(function(t) {
                return "" != t;
            }).map(function(a) {
                var i = a.split(",")[0], n = a.split(",")[1], r = s.indexOf(i), c = e.data.subways[r].stations.map(function(t) {
                    return t.name;
                }).indexOf(n);
                c >= 0 && e.setData(t(t({}, "subways[".concat(r, "].stations[").concat(c, "].selected"), !0), "filter_tab", "subway"));
            });
            for (var a = 0; a < this.data.subways.length; a++) this.count(a);
        },
        tab: function(t) {
            var e = t.currentTarget.dataset.tab;
            this.setData({
                filter_tab: e
            });
        },
        expand: function(t) {
            var e = t.currentTarget.dataset.index;
            this.setData({
                selected_line: e
            });
        },
        select: function(e) {
            var s = e.currentTarget.dataset.index, a = this.data.subways[this.data.selected_line].stations[s];
            (this.data.subways[this.data.selected_line].count < 5 || a.selected) && ("全线" != a.name || a.selected ? "全线" === a.name || a.selected || "全线" == this.data.subways[this.data.selected_line].stations[0].name && this.setData(t({}, "subways[".concat(this.data.selected_line, "].stations[0].selected"), !1)) : this.clear(this.data.selected_line), 
            this.setData(t({}, "subways[".concat(this.data.selected_line, "].stations[").concat(s, "].selected"), !a.selected)), 
            this.count(this.data.selected_line));
        },
        clear: function(e) {
            for (var s = this.data.subways[e].stations.length, a = 0; a < s; a++) this.setData(t({}, "subways[".concat(e, "].stations[").concat(a, "].selected"), !1));
        },
        count: function(e) {
            var s = 0, a = this.data.subways[e].stations;
            if ("全线" == a[0].name && a[0].selected) s = "全线"; else for (var i = 0; i < a.length; i++) a[i].selected && s++;
            this.setData(t({}, "subways[".concat(e, "].count"), s));
        },
        district: function(t) {
            var e = this.data.regions[t.currentTarget.dataset.index];
            this.triggerEvent("search", {
                region: e.name,
                stations: ""
            });
        },
        search: function() {
            var t = [];
            this.data.subways.map(function(e) {
                0 != e.count && e.stations.map(function(s) {
                    s.selected && t.push("".concat(e.line, ",").concat(s.name));
                });
            }), this.triggerEvent("search", {
                region: "",
                stations: t.join(";")
            });
        },
        reset: function() {
            if ("region" == this.data.filter_tab) this.triggerEvent("search", {
                region: "",
                stations: ""
            }); else for (var t = 0; t < this.data.subways.length; t++) this.clear(t), this.count(t);
        }
    }
});