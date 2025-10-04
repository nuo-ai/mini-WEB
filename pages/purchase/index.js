var t = s(require("../../09158BA385E1369C6F73E3A49A512695.js")), e = require("../../7D59F92785E1369C1B3F9120B7122695.js"), i = require("../../0CB3296685E1369C6AD5416181F12695.js"), a = s(require("../../6EFD26C485E1369C089B4EC348622695.js"));

function s(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

Page({
    behaviors: [ t.default ],
    data: {
        id: "",
        type: "",
        selected: 0,
        settings: [],
        doc: "",
        intro: ""
    },
    onLoad: function(t) {
        this.setData({
            id: t.id,
            type: t.type
        }), this.init();
    },
    init: function() {
        var t = this, i = a.default.getToken("miniapp_sale_tips");
        (0, e.getPaymentSettings)({
            data: {
                id: this.data.id,
                type: this.data.type
            },
            success: function(e) {
                t.setData({
                    settings: e.buy_setting,
                    doc: e.doc,
                    intro: i || ""
                });
            }
        });
    },
    select: function(t) {
        var e = t.currentTarget.dataset.index;
        this.setData({
            selected: e
        });
    },
    buy: function() {
        var t = this.data.settings[this.data.selected];
        this.estimate(t);
    },
    puton: function() {
        var t = this;
        (0, i.updateHouseState)({
            data: {
                id: this.data.id,
                state: 1
            },
            success: function() {
                wx.redirectTo({
                    url: "/pages/complete/index?id=".concat(t.data.id, "&type=").concat(t.data.type)
                });
            }
        });
    }
});