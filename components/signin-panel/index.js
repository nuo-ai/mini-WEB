var t = require("../../013BC69685E1369C675DAE91C6C12695.js");

Component({
    properties: {
        show: {
            type: Boolean,
            value: !1
        },
        desc: {
            type: String,
            value: ""
        }
    },
    data: {
        buttons: [ {
            type: "default",
            text: "取消"
        }, {
            type: "primary",
            text: "登录"
        } ]
    },
    methods: {
        login: function() {
            var e = this;
            wx.showLoading({
                title: "登录中...",
                mask: !0,
                success: function() {
                    wx.login({
                        success: function(i) {
                            (0, t.getUserAuth)(i.code, function() {
                                wx.hideLoading(), e.triggerEvent("login");
                            });
                        }
                    });
                }
            });
        },
        quit: function() {
            var e = this;
            (0, t.cleanUserAuth)(function() {
                e.triggerEvent("quit");
            });
        },
        sign: function(t) {
            0 == t.detail.index ? this.quit() : this.login();
        }
    }
});