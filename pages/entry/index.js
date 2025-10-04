var e = require("../../CDB73E6785E1369CABD1566016E12695.js"), t = a(require("../../737EDC9385E1369C1518B494D3412695.js")), n = a(require("../../025AADA085E1369C643CC5A73E412695.js")), i = a(require("../../6EFD26C485E1369C089B4EC348622695.js"));

function a(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

Page({
    behaviors: [ t.default, n.default ],
    data: {
        count: 0,
        intro: ""
    },
    onLoad: function() {
        var e = this;
        this.selectTab(2), this.setData({
            intro: i.default.getToken("c_app_demands_tips")
        }), wx.$event.on("index", this, function() {
            e.data.ifLogged && e.init();
        }), this.handle(function() {
            e.init();
        });
    },
    onShow: function() {
        this.syncLoggingState(), this.data.ifLogged && this.init();
    },
    init: function() {
        var t = this;
        (0, e.countDemand)({
            success: function(e) {
                t.setData({
                    count: e.demand_count
                });
            }
        });
    },
    confirm: function() {
        this.setData({
            toggle: !1
        }), this.init(), this.mask();
    },
    cancel: function() {
        wx.switchTab({
            url: "/pages/index/index"
        });
    },
    seek: function() {
        wx.navigateTo({
            url: "/pages/seek/index"
        });
    },
    my: function() {
        wx.navigateTo({
            url: "/pages/demands/index"
        });
    },
    onShareAppMessage: function() {
        return {
            title: "六六找房-发布租房需求",
            path: "/pages/demands/index?from=create"
        };
    },
    onShareTimeline: function() {
        return {
            title: "六六找房-发布住房需求",
            query: "from=create"
        };
    }
});