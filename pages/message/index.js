var t = require("../../1BC4768185E1369C7DA21E86DDF12695.js"), a = d(require("../../3D2B1CF485E1369C5B4D74F3AC012695.js")), i = d(require("../../737EDC9385E1369C1518B494D3412695.js")), e = d(require("../../6EFD26C485E1369C089B4EC348622695.js"));

function d(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

Page({
    behaviors: [ a.default, i.default ],
    data: {
        parent_id: "",
        from: "",
        detail: null,
        keyboard_height: 0,
        keyboard_duration: 0
    },
    onLoad: function(t) {
        var a = this;
        this.setData({
            parent_id: t.id,
            from: t.from ? t.from : ""
        }), this.handle(function() {
            a.init();
        });
    },
    confirm: function() {
        this.setData({
            toggle: !1
        }), this.init();
    },
    cancel: function() {
        this.clear(), wx.switchTab({
            url: "/pages/inbox/index"
        });
    },
    init: function() {
        var a = this;
        (0, t.viewMessageDetail)({
            data: this.data.parent_id,
            success: function(t) {
                a.setData({
                    detail: t
                });
            },
            fail: function() {
                wx.switchTab({
                    url: "/pages/inbox/index"
                });
            }
        });
    },
    view: function() {
        "send" == this.data.from ? wx.navigateBack({
            delta: 2
        }) : this.data.detail.house ? wx.navigateTo({
            url: "/pages/house/index?id=".concat(this.data.detail.house.id, "&type=").concat(this.data.detail.house.house_type)
        }) : this.data.detail.topic ? wx.navigateTo({
            url: "/pages/topic/index?id=".concat(this.data.detail.topic.id)
        }) : this.data.detail.demand && wx.navigateTo({
            url: "/pages/demand/index?id=".concat(this.data.detail.demand.id)
        });
    },
    reply: function() {
        var t = this;
        wx.showModal({
            title: "提示",
            content: "此消息只能回复一次，确认回复？",
            confirmText: "确认回复",
            confirmColor: "#08979C",
            success: function(a) {
                a.confirm && t.send(function() {
                    t.init();
                });
            }
        });
    },
    rereply: function() {
        var t = e.default.getToken("uid"), a = this.data.detail.receive, i = this.data.detail.send, d = a.from_user.id == t ? i : a, n = this.data.detail.demand ? this.data.detail.demand : this.data.detail.house ? this.data.detail.house : this.data.detail.topic, s = "";
        this.data.detail.house ? s = "&".concat(2 == n.house_type ? "sale_id" : "house_id", "=").concat(n.id, "&house_type=").concat(n.house_type) : this.data.detail.topic ? s = "&topic_id=".concat(n.id) : this.data.detail.demand && (s = "&demand_id=".concat(n.id)), 
        wx.navigateTo({
            url: "/pages/reply/index?title=".concat(n.title, "&username=").concat(d.from_user.username, "&avatar=").concat(d.from_user.avatar.src).concat(s)
        });
    },
    adjust: function(t) {
        var a = t.detail.height, i = t.detail.duration;
        this.setData({
            keyboard_height: a,
            duration: i
        });
    },
    notify: function() {
        wx.navigateTo({
            url: "/pages/subscribe/index"
        });
    }
});