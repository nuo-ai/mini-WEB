Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var t, e = require("52B651C285E1369C34D039C5BAB12695.js"), a = (t = require("6EFD26C485E1369C089B4EC348622695.js")) && t.__esModule ? t : {
    default: t
};

exports.default = Behavior({
    methods: {
        communicate: function(t) {
            (0, e.askApartmentContact)({
                data: t,
                success: function(t) {
                    wx.showModal({
                        title: "联系方式",
                        content: t,
                        confirmText: "点击复制",
                        confirmColor: "#08979C",
                        success: function(e) {
                            e.confirm && wx.setClipboardData({
                                data: t
                            });
                        }
                    });
                },
                fail: function() {
                    wx.showModal({
                        title: "积分不足",
                        content: "无法查看联系方式",
                        confirmText: "获取积分",
                        confirmColor: "#08979C",
                        cancelText: "关闭",
                        success: function(t) {
                            t.confirm && wx.navigateTo({
                                url: "/pages/bonus/index"
                            });
                        }
                    });
                }
            });
        },
        config: function(t) {
            var e = a.default.getToken("uid");
            return "timeline" == t ? {
                title: this.data.detail.share.title,
                query: "id=".concat(this.data.id, "&from=").concat(e),
                imageUrl: this.data.topic.share.photo
            } : {
                title: this.data.detail.share.title,
                path: "/pages/apartment/index?id=".concat(this.data.id, "&from=").concat(e),
                imageUrl: this.data.detail.share.photo
            };
        }
    }
});