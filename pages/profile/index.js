var e = require("../../@babel/runtime/helpers/defineProperty"), t = require("../../DEA51EB285E1369CB8C376B5DD322695.js"), n = a(require("../../6EFD26C485E1369C089B4EC348622695.js")), i = a(require("../../737EDC9385E1369C1518B494D3412695.js"));

function a(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

Page({
    behaviors: [ i.default ],
    data: {
        user: null,
        info: {
            username: "",
            gender: "",
            phone: ""
        },
        protocols: [ {
            name: "隐私政策概要",
            path: "privacy"
        }, {
            name: "个人信息收集",
            path: "privacy"
        }, {
            name: "第三方信息共享",
            path: "privacy"
        }, {
            name: "权限清单",
            path: "privacy"
        } ],
        binding: !1,
        count: 0
    },
    onLoad: function() {
        this.init();
    },
    preview: function() {
        if (3 == this.data.count) {
            var e = n.default.getToken("test");
            n.default.cleanToken(), n.default.setValue("test", "preview" == e ? "test" : "preview"), 
            wx.reLaunch({
                url: "/pages/index/index"
            });
        } else this.setData({
            count: this.data.count + 1
        });
    },
    sync: function(t) {
        for (var n in this.setData({
            user: t,
            binding: !1
        }), this.data.info) this.setData(e({}, "info.".concat(n), t[n]));
    },
    init: function() {
        var e = this;
        (0, t.getUserProfile)({
            success: function(t) {
                e.sync(t.user);
            }
        });
    },
    ask: function() {
        this.setData({
            binding: !this.data.binding
        });
    },
    set: function(t) {
        var n = t.detail.name, i = t.detail.value;
        this.setData(e({}, "info.".concat(n), i));
    },
    nav: function(e) {
        var t = e.currentTarget.dataset.name, n = e.currentTarget.dataset.path;
        wx.navigateTo({
            url: "/pages/website/index?website=".concat(n, "&title=").concat(t)
        });
    },
    save: function() {
        wx.showLoading({
            title: "提交中...",
            mask: !0
        }), (0, t.updateUserProfile)({
            data: {
                username: this.data.info.username,
                gender: this.data.info.gender
            },
            success: function() {
                wx.hideLoading(), wx.navigateBack();
            }
        });
    },
    unregister: function() {
        var e = this;
        wx.showModal({
            title: "注销账号",
            content: "账号注销后，该账号及账号下的所有信息都将无法恢复，请谨慎操作",
            confirmText: "确认注销",
            confirmColor: "#cd3b3e",
            success: function(n) {
                n.confirm && (0, t.unregisterUser)({
                    success: function() {
                        e.clear(), wx.reLaunch({
                            url: "/pages/index/index"
                        });
                    }
                });
            }
        });
    },
    more: function() {
        var e = this;
        wx.showActionSheet({
            itemList: [ "退出登录" ],
            success: function(t) {
                0 == t.tapIndex && wx.showModal({
                    title: "退出登录",
                    content: "确定要退出该用户登录吗？",
                    success: function(t) {
                        t.confirm && (e.clear(), wx.reLaunch({
                            url: "/pages/index/index"
                        }));
                    }
                });
            }
        });
    }
});