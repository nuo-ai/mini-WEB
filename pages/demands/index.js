var e = require("../../CDB73E6785E1369CABD1566016E12695.js"), i = a(require("../../737EDC9385E1369C1518B494D3412695.js")), t = a(require("../../7F02D25785E1369C1964BA5069212695.js"));

function a(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

Page({
    behaviors: [ t.default, i.default ],
    data: {
        filters: {
            page: 1
        }
    },
    fetch: e.viewDemandList,
    onLoad: function() {
        var e = this;
        this.handle(function() {
            e.init();
        });
    },
    onShow: function() {
        this.data.list.length > 0 && this.renew();
    },
    init: function() {
        this.search(this.data.filters.page, "page");
    },
    confirm: function() {
        this.setData({
            toggle: !1
        }), this.init();
    },
    cancel: function() {
        wx.navigateBack();
    },
    add: function() {
        wx.navigateTo({
            url: "/pages/seek/index"
        });
    },
    onShareAppMessage: function() {
        return {
            title: "六六找房-发布租房需求",
            path: "/pages/seek/index"
        };
    }
});