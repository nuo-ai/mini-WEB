Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var e = require("@babel/runtime/helpers/objectSpread2.js"), t = require("729E7EE385E1369C14F816E407D12695.js");

exports.default = Behavior({
    methods: {
        configShareMenu: function() {
            wx.showShareMenu({
                withShareTicket: !0,
                menus: [ "shareAppMessage", "shareTimeline" ]
            });
        },
        getShareInfo: function(n) {
            var r = wx.getLaunchOptionsSync().scene;
            [ 1044, 1036 ].indexOf(r) >= 0 && wx.login({
                success: function(r) {
                    wx.getGroupEnterInfo({
                        success: function(o) {
                            (0, t.decryptInfo)({
                                data: e({
                                    code: r.code,
                                    encryptedData: o.encryptedData,
                                    iv: o.iv
                                }, n)
                            });
                        }
                    });
                }
            });
        }
    }
});