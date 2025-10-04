var e = require("../../../@babel/runtime/helpers/defineProperty");

Component({
    properties: {
        info: {
            type: Object,
            value: {}
        }
    },
    data: {
        prices: [ {
            name: "1k以下",
            min: "",
            max: 1e3,
            selected: !1
        }, {
            name: "1k~2k",
            min: 1e3,
            max: 2e3,
            selected: !1
        }, {
            name: "2k~4k",
            min: 2e3,
            max: 4e3,
            selected: !1
        }, {
            name: "4k~6k",
            min: 4e3,
            max: 6e3,
            selected: !1
        }, {
            name: "6k~8k",
            min: 6e3,
            max: 8e3,
            selected: !1
        }, {
            name: "8k~10k",
            min: 8e3,
            max: 1e4,
            selected: !1
        }, {
            name: "10k~15k",
            min: 1e4,
            max: 15e3,
            selected: !1
        }, {
            name: "15k以上",
            min: 15e3,
            max: "",
            selected: !1
        } ]
    },
    methods: {
        select: function(t) {
            for (var a = t.currentTarget.dataset.index, s = 0; s < this.data.prices.length; s++) this.setData(e({}, "prices[".concat(s, "].selected"), !1));
            this.setData(e({}, "prices[".concat(a, "].selected"), !0)), this.triggerEvent("set", {
                name: "cost1",
                value: this.data.prices[a].min
            }), this.triggerEvent("set", {
                name: "cost2",
                value: this.data.prices[a].max
            });
        }
    }
});