Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var e = n(require("./6EFD26C485E1369C089B4EC348622695.js")), t = n(require("./2939C4E485E1369C4F5FACE3F8522695.js"));

function n(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

var r = new t.default(e.default, "client"), i = function(t, n, i, u) {
    return new Promise(function(a, s) {
        try {
            wx.request({
                url: ("release" == __wxConfig.envVersion ? "https://66miniapp-api.66zhizu.com/client" : "preview" == e.default.getToken("test") ? "https://preview-66miniapp-api.66zhizu.com/client" : "https://66miniapp.zuker.im/client") + t + n,
                data: u,
                method: i,
                header: {
                    Authorization: r.generate(t + n, i, u),
                    Terminal: __wxConfig.platform,
                    Version: __wxConfig.envVersion
                },
                success: function(t) {
                    a(function(t) {
                        if (200 === t.statusCode) switch (t.data.code) {
                          case 0:
                            return t.data.result ? t.data.result : Promise.reject(t.data.msg);

                          case 23401:
                            return Promise.reject(t.data.msg);

                          case 401:
                          case 10109:
                            return e.default.cleanToken(), wx.reLaunch({
                                url: "/pages/index/index"
                            }), Promise.reject(t.data.msg);

                          default:
                            return wx.showModal({
                                title: "提示",
                                content: t.data.msg,
                                showCancel: !1,
                                confirmText: "知道了",
                                success: function() {
                                    wx.hideLoading();
                                }
                            }), Promise.reject(t.data.msg);
                        }
                    }(t));
                },
                fail: function(e) {
                    s(e);
                }
            });
        } catch (o) {
            console.error("Unexpected error while issuing request", t, n, o);
            s(o);
        }
    });
};

exports.default = {
    resource: function(e) {
        return {
            get: function(t, n) {
                return i(e, t, "GET", n);
            },
            post: function(t, n) {
                return i(e, t, "POST", n);
            },
            put: function(t, n) {
                return i(e, t, "PUT", n);
            },
            delete: function(t, n) {
                return i(e, t, "DELETE", n);
            }
        };
    }
};
