Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var e = require("@babel/runtime/helpers/objectSpread2.js"), t = require("./1BC4768185E1369C7DA21E86DDF12695.js");

exports.default = Behavior({
    data: {
        message: "",
        unread: 0
    },
    methods: {
        check: function() {
            var e = this;
            (0, t.viewUnreadCount)({
                success: function(t) {
                    e.setData({
                        unread: t.weapp_message
                    });
                }
            });
        },
        write: function(e) {
            this.setData({
                message: e.detail.value
            });
        },
        send: function(s) {
            var a = {};
            this.data.parent_id ? a.parent_id = this.data.parent_id : this.data.topic_id ? a.topic_id = this.data.topic_id : this.data.demand_id ? a.demand_id = this.data.demand_id : 2 == this.data.house_type ? a.sale_id = this.data.house_id : a.house_id = this.data.house_id, 
            "" == this.data.message ? wx.showToast({
                icon: "none",
                title: "发送内容不可为空"
            }) : (wx.showLoading({
                title: "发送中...",
                mask: !0
            }), (0, t.sendMessage)({
                data: e(e({}, a), {}, {
                    message: this.data.message
                }),
                success: function(e) {
                    wx.hideLoading(), wx.showToast({
                        title: "发送成功",
                        icon: "success",
                        duration: 1e3,
                        mask: !0,
                        complete: function() {
                            s ? s() : setTimeout(function() {
                                wx.redirectTo({
                                    url: "/pages/message/index?id=".concat(e.id, "&from=send")
                                });
                            }, 1e3);
                        }
                    });
                }
            }));
        },
        subscribe: function(e) {
            (0, t.viewSubscribes)({
                success: function(t) {
                    wx.requestSubscribeMessage({
                        tmplIds: t.template_ids,
                        success: function() {
                            wx.showToast({
                                icon: "success",
                                title: "订阅成功",
                                mask: !0,
                                duration: 1e3
                            });
                        },
                        fail: function() {
                            wx.showToast({
                                icon: "error",
                                title: "您已拒绝订阅",
                                mask: !0,
                                duration: 1e3
                            });
                        },
                        complete: function() {
                            e && setTimeout(function() {
                                e();
                            }, 1e3);
                        }
                    });
                }
            });
        }
    }
});