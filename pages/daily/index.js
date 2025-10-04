var t, e = require("../../0CB3296685E1369C6AD5416181F12695.js"), a = (t = require("../../A2D8119185E1369CC4BE7996A3312695.js")) && t.__esModule ? t : {
    default: t
};

Page({
    behaviors: [ a.default ],
    data: {
        requesting: !0,
        city: "",
        type: "",
        date: "",
        title: "",
        list: []
    },
    onLoad: function(t) {
        this.setData({
            city: t.city,
            date: t.date,
            type: t.type
        }), this.init(), this.configShareMenu();
    },
    init: function() {
        var t = this;
        this.setData({
            requesting: !0
        }), (0, e.viewDailyList)({
            data: {
                city: this.data.city,
                date: this.data.date
            },
            success: function(e) {
                t.setData({
                    title: e.page_title,
                    list: e.list,
                    requesting: !1
                });
            },
            fail: function() {
                t.setData({
                    requesting: !1
                });
            }
        });
    },
    onShareAppMessage: function() {
        return {
            title: this.data.title,
            path: "/pages/daily/index?city=".concat(this.data.city, "&date=").concat(this.data.date)
        };
    },
    onShareTimeline: function() {
        return {
            title: this.data.title,
            query: "city=".concat(this.data.city, "&date=").concat(this.data.date)
        };
    }
});