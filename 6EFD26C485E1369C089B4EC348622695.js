Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var e = __wxConfig.envVersion + "-zuber-";

exports.default = {
    getToken: function(t) {
        if ("api" === t) {
            var r = wx.getStorageSync(e + "uid");
            return r ? "/" + r : "";
        }
        var n = e + t, o = wx.getStorageSync(n);
        try {
            return o ? JSON.parse(o) : o;
        } catch (i) {
            console.warn("Failed to parse cached value for", n, i);
            return o;
        }
    },
    setValue: function(t, r) {
        var n = e + t;
        try {
            var o = JSON.stringify(r);
            wx.setStorageSync(n, o);
        } catch (i) {
            console.warn("Failed to stringify value for", n, i);
            wx.setStorageSync(n, r);
        }
    },
    removeValue: function(t) {
        var r = e + t;
        wx.removeStorageSync(r);
    },
    setToken: function(t, r, n) {
        wx.setStorageSync(e + "uid", t), wx.setStorageSync(e + "token", r), wx.setStorageSync(e + "secret", n);
    },
    cleanToken: function() {
        wx.removeStorageSync(e + "uid"), wx.removeStorageSync(e + "token"), wx.removeStorageSync(e + "secret");
    }
};
