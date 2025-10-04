var i, e = require("../../CDB73E6785E1369CABD1566016E12695.js"), t = (i = require("../../737EDC9385E1369C1518B494D3412695.js")) && i.__esModule ? i : {
    default: i
};

Page({
    behaviors: [ t.default ],
    data: {
        id: "",
        detail: null
    },
    onLoad: function(i) {
        this.setData({
            id: i.id
        });
    },
    onShow: function() {
        var i = this;
        this.handle(function() {
            i.init();
        });
    },
    confirm: function() {
        this.setData({
            toggle: !1
        }), this.init();
    },
    cancel: function() {
        this.clear(), wx.redirectTo({
            url: "/pages/demand/index"
        });
    },
    init: function() {
        var i = this;
        (0, e.viewDemandDetail)({
            data: this.data.id,
            success: function(e) {
                i.setData({
                    detail: e
                });
            },
            fail: function() {
                wx.redirectTo({
                    url: "/pages/demands/index"
                });
            }
        });
    }
});