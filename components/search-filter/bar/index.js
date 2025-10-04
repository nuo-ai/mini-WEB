var t = require("../../../@babel/runtime/helpers/defineProperty");

Component({
    properties: {
        filters: {
            type: Object,
            value: {}
        }
    },
    data: {
        sections: [ {
            name: "位置",
            icon: "map-sharp-light",
            filtered: !1,
            value: [ "region", "stations" ]
        }, {
            name: "排序",
            icon: "bars-sort-sharp-light",
            filtered: !1,
            value: [ "sort", "longitude", "latitude" ]
        }, {
            name: "筛选",
            icon: "filter-sharp-light",
            filtered: !1,
            value: [ "bed_count", "rent_type", "cost1", "cost2", "square1", "square2" ]
        } ]
    },
    observers: {
        filters: function() {
            for (var e = 0; e < this.data.sections.length; e++) {
                for (var r = !1, i = 0; i < this.data.sections[e].value.length; i++) {
                    var a = this.data.sections[e].value[i];
                    null != this.data.filters[a] && "" != this.data.filters[a] && (r = !0);
                }
                this.setData(t({}, "sections[".concat(e, "].filtered"), r));
            }
        }
    },
    methods: {
        filter: function(t) {
            var e = t.currentTarget.dataset.index;
            this.triggerEvent("filter", {
                index: e
            });
        }
    }
});