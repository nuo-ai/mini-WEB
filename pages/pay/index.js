var t, a = require("../../@babel/runtime/helpers/objectSpread2"), i = (t = require("../../737EDC9385E1369C1518B494D3412695.js")) && t.__esModule ? t : {
    default: t
}, e = require("../../7D59F92785E1369C1B3F9120B7122695.js");

Page({
    behaviors: [ i.default ],
    data: {
        info: null,
        canApp: !1,
        payed: !1
    },
    onLoad: function(t) {
        this.setData({
            info: t
        }), this.check(), this.init();
    },
    check: function() {
        var t = this;
        this.handle(function() {
            t.pay();
        });
    },
    pay: function() {
        var t = this;
        wx.showLoading({
            title: "准备支付...",
            mask: !0
        }), (0, e.payCheckment)({
            data: this.data.info,
            success: function(i) {
                wx.hideLoading(), wx.requestPayment(a(a({}, i.data), {}, {
                    success: function() {
                        t.setData({
                            payed: !0
                        }), wx.showToast({
                            icon: "success",
                            title: "支付成功"
                        });
                    },
                    fail: function(a) {
                        t.setData({
                            payed: !1
                        }), wx.showToast({
                            icon: "error",
                            title: "支付已取消"
                        });
                    }
                }));
            },
            fail: function() {
                t.setData({
                    payed: !0
                });
            }
        });
    },
    init: function() {
        var t = wx.getLaunchOptionsSync().scene;
        1038 == t || 1089 == t || 1090 == t ? this.setData({
            canApp: this.data.canApp
        }) : 1069 == t || 1036 == t ? this.setData({
            canApp: !0
        }) : this.setData({
            canApp: !1
        });
    },
    confirm: function() {
        this.setData({
            toggle: !1
        }), this.mask(), this.pay();
    },
    cancel: function() {
        this.mask(), this.clear();
    }
});