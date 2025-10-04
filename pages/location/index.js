var t = require("../../729E7EE385E1369C14F816E407D12695.js"), e = a(require("../../6EFD26C485E1369C089B4EC348622695.js")), i = a(require("../../C6859C9085E1369CA0E3F497DAF02695.js"));

function a(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

Page({
    behaviors: [ i.default ],
    data: {
        city: "",
        keyword: "",
        list: []
    },
    onLoad: function(t) {
        this.setData({
            city: t.city
        }), this.getCurrentPosition(), this.data.poi_info && (this.setData({
            keyword: this.data.poi_info.name
        }), this.suggest());
    },
    set: function(t) {
        this.setData({
            keyword: t.detail.value
        });
    },
    suggest: function() {
        var e = this;
        (0, t.getLocationPoi)({
            data: {
                region: this.data.city,
                query: this.data.keyword
            },
            success: function(t) {
                e.setData({
                    list: t
                });
            }
        });
    },
    select: function(t) {
        var i = t.currentTarget.dataset.index, a = this.data.list[i];
        e.default.setValue("poi", {
            name: a.name,
            district: a.district,
            address: a.address,
            longitude: a.location.lng,
            latitude: a.location.lat
        }), wx.navigateBack();
    }
});