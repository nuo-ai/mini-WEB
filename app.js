var e, n = (e = require("6EFD26C485E1369C089B4EC348622695.js")) && e.__esModule ? e : {
    default: e
};

require("2A923A3485E1369C4CF45233D5D02695.js");

var a = require("729E7EE385E1369C14F816E407D12695.js");

App({
    onLaunch: function() {
        var e = wx.getUpdateManager();
        e.onUpdateReady(function() {
            wx.showModal({
                title: "更新提示",
                content: "新版本已经准备好，点击重启应用",
                showCancel: !1,
                success: function(n) {
                    n.confirm && e.applyUpdate();
                }
            });
        }), (0, a.getCommonDoc)({
            success: function(e) {
                e.map(function(e) {
                    n.default.setValue(e.name, e.label);
                });
            }
        }), wx.onPageNotFound(function(e) {
            var n = e.path, a = e.query, t = n.split("/").length, o = function(e) {
                var n = [];
                for (var a in e) n.push("".concat(a, "=").concat(e[a]));
                return n.join("&");
            }(a);
            wx.reLaunch({
                url: t <= 2 ? n + "/index" + (o ? "?" + o : "") : "pages/index/index"
            });
        });
    },
    globalData: {
        tabIndex: 0
    }
});