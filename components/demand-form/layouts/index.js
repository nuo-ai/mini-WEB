var e = require("../../../@babel/runtime/helpers/defineProperty");

Component({
    properties: {
        info: {
            type: Object,
            value: {}
        }
    },
    data: {
        layouts: [ {
            name: "整租单间",
            value: "entire",
            selected: !1
        }, {
            name: "整租1室",
            value: "entire1",
            selected: !1
        }, {
            name: "整租2室",
            value: "entire2",
            selected: !1
        }, {
            name: "整租3室+",
            value: "entire3",
            selected: !1
        } ]
    },
    methods: {
        select: function(t) {
            var a = t.currentTarget.dataset.index;
            this.setData(e({}, "layouts[".concat(a, "].selected"), !this.data.layouts[a].selected));
            for (var s = [], l = 0; l < this.data.layouts.length; l++) this.data.layouts[l].selected && (s.push(this.data.layouts[l].value), 
            this.triggerEvent("set", {
                name: "layout",
                value: s
            }));
        }
    }
});