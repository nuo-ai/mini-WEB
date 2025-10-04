Component({
    properties: {
        filters: {
            type: Object,
            value: {}
        }
    },
    data: {
        sorts: [ {
            name: "最新上架",
            value: "toggle_time"
        }, {
            name: "最新发布",
            value: "create_time"
        }, {
            name: "离我最近",
            value: "nearby"
        } ]
    },
    methods: {
        sort: function(t) {
            var e = this, i = t.currentTarget.dataset.value;
            "nearby" == i ? (wx.showLoading({
                title: "定位中...",
                mask: !0
            }), wx.getLocation({
                type: "gcj02",
                success: function(t) {
                    wx.hideLoading(), e.triggerEvent("search", {
                        longitude: t.longitude,
                        latitude: t.latitude,
                        sort: ""
                    });
                },
                fail: function() {
                    wx.hideLoading(), e.triggerEvent("search", {
                        longitude: "",
                        latitude: "",
                        sort: ""
                    });
                }
            })) : this.triggerEvent("search", {
                longitude: "",
                latitude: "",
                sort: i
            });
        },
        reset: function() {
            this.triggerEvent("search", {
                longitude: "",
                latitude: "",
                sort: ""
            });
        }
    }
});