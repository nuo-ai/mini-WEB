var t = a(require("../../737EDC9385E1369C1518B494D3412695.js")), i = require("../../9919E58585E1369CFF7F8D8299222695.js"), e = a(require("../../D2A2D91485E1369CB4C4B113C6612695.js"));

function a(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

Page({
    behaviors: [ t.default, e.default ],
    data: {
        id: ""
    },
    onLoad: function(t) {
        var i = this;
        this.setData({
            id: t.id
        }), this.handle(function() {
            i.init();
        });
    },
    init: function() {
        var t = this;
        this.setData({
            toggle: !1
        }), (0, i.viewTopicDetail)({
            data: this.data.id,
            success: function(i) {
                t.setData({
                    topic: i
                });
            }
        });
    },
    cancel: function() {
        this.clear(), wx.navigateBack();
    },
    back: function() {
        wx.navigateBack();
    },
    deal: function(t) {
        var i = t.detail.name;
        "chat" == i ? this.transmit() : "contact" == i && this.communicate();
    },
    onShareAppMessage: function() {
        return this.config("message");
    },
    onShareTimeline: function() {
        return this.config("timeline");
    }
});