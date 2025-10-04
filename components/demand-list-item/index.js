Component({
    properties: {
        demand: {
            type: Object,
            value: null
        },
        detail: {
            type: Boolean,
            value: !1
        }
    },
    data: {
        tags: [],
        layouts: {
            single: "合租单间",
            entire: "整租单间",
            entire1: "整租1室",
            entire2: "整租2室",
            entire3: "整租3室+"
        }
    },
    observers: {
        "demand.layout": function() {
            var t = this;
            this.data.demand && this.setData({
                tags: this.data.demand.layout.split(",").map(function(a) {
                    return t.data.layouts[a];
                })
            });
        }
    },
    methods: {
        revoke: function() {
            wx.navigateTo({
                url: "/pages/revoke/index?id=".concat(this.data.demand.id)
            });
        },
        view: function() {
            this.data.detail || wx.navigateTo({
                url: "/pages/demand/index?id=".concat(this.data.demand.id)
            });
        }
    }
});