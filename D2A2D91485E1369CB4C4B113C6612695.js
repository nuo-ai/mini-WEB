Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var t, e = require("9919E58585E1369CFF7F8D8299222695.js"), a = (t = require("6EFD26C485E1369C089B4EC348622695.js")) && t.__esModule ? t : {
    default: t
};

exports.default = Behavior({
    data: {
        topic: null
    },
    methods: {
        communicate: function() {
            (0, e.askTopicContact)({
                data: this.data.topic.id,
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
        transmit: function() {
            var t = this.data.topic;
            wx.navigateTo({
                url: "/pages/reply/index?topic_id=".concat(t.id, "&username=").concat(t.user.username, "&title=").concat(t.title ? t.title : t.content, "&avatar=").concat(t.user.avatar.src)
            });
        },
        config: function(t) {
            var e = a.default.getToken("uid");
            return "timeline" == t ? {
                title: this.data.topic.share.title,
                query: "id=".concat(this.data.topic.id, "&from=").concat(e),
                imageUrl: this.data.topic.share.photo.small
            } : {
                title: this.data.topic.share.title,
                path: "/pages/topic/index?id=".concat(this.data.topic.id, "&from=").concat(e),
                imageUrl: this.data.topic.share.photo.small
            };
        }
    }
});