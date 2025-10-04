var e = require("../../0CB3296685E1369C6AD5416181F12695.js"), t = require("../../5C9CDA9585E1369C3AFAB292CA022695.js"), i = require("../../DEA51EB285E1369CB8C376B5DD322695.js");

Page({
    data: {
        id: "",
        type: "",
        requesting: !1,
        detail: null,
        binding: !1
    },
    onLoad: function(e) {
        this.setData({
            id: e.id,
            type: e.type
        }), this.init();
    },
    init: function() {
        var i = this;
        this.data.requesting || (this.data.detail || this.setData({
            requesting: !0
        }), (2 == this.data.type ? t.viewSaleDetail : e.viewHouseDetail)({
            data: this.data.id,
            success: function(e) {
                i.setData({
                    requesting: !1,
                    detail: e
                });
            },
            fail: function() {
                wx.switchTab({
                    url: "/pages/index/index"
                });
            }
        }));
    },
    check: function() {
        var e = this;
        (0, i.getUserProfile)({
            success: function(t) {
                t.user.phone ? wx.redirectTo({
                    url: "/pages/houses/index"
                }) : e.setData({
                    binding: !0
                });
            }
        });
    },
    complete: function() {
        this.setData({
            binding: !1
        }), wx.redirectTo({
            url: "/pages/houses/index"
        });
    },
    cancel: function() {
        this.complete();
    },
    onShareAppMessage: function() {
        return {
            title: this.data.detail.house.share.title,
            path: "/pages/house/index?id=".concat(this.data.id, "&type=").concat(this.data.type),
            imageUrl: this.data.detail.house.photo.medium
        };
    }
});