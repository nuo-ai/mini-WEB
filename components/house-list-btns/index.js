var t = require("../../0CB3296685E1369C6AD5416181F12695.js");

Component({
    properties: {
        snapshot: {
            type: Object,
            value: {}
        },
        house: {
            type: Object,
            value: {}
        },
        index: {
            type: Number,
            value: 0
        }
    },
    methods: {
        push: function() {
            var e = this;
            1 == this.data.house.state ? wx.showModal({
                title: "下架房源",
                content: "确定要下架该房源吗？",
                success: function(a) {
                    a.confirm && (0, t.updateHouseState)({
                        data: {
                            id: e.data.house.id,
                            state: 2
                        },
                        success: function() {
                            wx.showToast({
                                title: "该房源已下架"
                            }), e.triggerEvent("update");
                        }
                    });
                }
            }) : wx.navigateTo({
                url: "/pages/purchase/index?id=".concat(this.data.house.id, "&type=").concat(this.data.snapshot.target_house_type)
            });
        },
        edit: function() {
            wx.navigateTo({
                url: "/pages/editor/index?id=".concat(this.data.house.id, "&type=").concat(this.data.snapshot.target_house_type)
            });
        },
        share: function() {
            this.triggerEvent("share", {
                index: this.data.index
            });
        }
    }
});