var e = n(require("../../025AADA085E1369C643CC5A73E412695.js")), i = require("../../1BC4768185E1369C7DA21E86DDF12695.js"), t = n(require("../../7F02D25785E1369C1964BA5069212695.js")), a = n(require("../../737EDC9385E1369C1518B494D3412695.js")), s = n(require("../../3D2B1CF485E1369C5B4D74F3AC012695.js"));

function n(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

Page({
    behaviors: [ e.default, t.default, a.default, s.default ],
    data: {
        filters: {
            page: 1
        }
    },
    fetch: i.searchInbox,
    onShow: function() {
        var e = this;
        this.selectTab(3), this.handle(function() {
            e.renew(), e.check();
        }, function() {
            e.setData({
                list: []
            });
        });
    },
    onLoad: function() {
        var e = this;
        wx.$event.on("inbox", this, function() {
            e.data.ifLogged && (e.refresh(), e.check());
        });
    },
    confirm: function() {
        this.setData({
            toggle: !1
        }), this.mask(), this.renew(), this.check();
    },
    cancel: function() {
        this.mask(), this.clear(), wx.switchTab({
            url: "/pages/index/index"
        });
    },
    notify: function() {
        wx.navigateTo({
            url: "/pages/subscribe/index"
        });
    }
});