Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var e = require("@babel/runtime/helpers/objectSpread2.js"), t = require("7D59F92785E1369C1B3F9120B7122695.js");

exports.default = Behavior({
    data: {
        paying: !1
    },
    methods: {
        estimate: function(e) {
            if (!this.data.paying) {
                var a = this;
                this.setData({
                    paying: !0
                }), wx.showLoading({
                    title: "准备支付...",
                    mask: !0
                }), (0, t.estimatePayment)({
                    data: {
                        house_id: this.data.id,
                        pay_type: e.pay_type,
                        buy_price_type: e.buy_price_type
                    },
                    success: function(e) {
                        a.pay(e.estimate[0].channel, e.common_order.pay_order_no);
                    },
                    fail: function() {
                        wx.hideLoading(), wx.showToast({
                            icon: "none",
                            title: "暂时无法支付，请稍后重试"
                        });
                    }
                });
            }
        },
        pay: function(a, i) {
            var n = this;
            (0, t.payOrderFee)({
                data: {
                    pay_order_no: i,
                    channel: a
                },
                success: function(t) {
                    wx.hideLoading(), wx.requestPayment(e(e({}, t.data), {}, {
                        success: function() {
                            n.setData({
                                paying: !1
                            }), wx.redirectTo({
                                url: "/pages/complete/index?id=".concat(n.data.id, "&type=").concat(n.data.type)
                            });
                        },
                        fail: function(e) {
                            n.setData({
                                paying: !1
                            }), wx.showToast({
                                icon: "error",
                                title: "支付已取消"
                            });
                        }
                    }));
                }
            });
        }
    }
});