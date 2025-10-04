var a, i = require("../../729E7EE385E1369C14F816E407D12695.js"), t = (a = require("../../C6859C9085E1369CA0E3F497DAF02695.js")) && a.__esModule ? a : {
    default: a
};

Page({
    behaviors: [ t.default ],
    data: {
        cities: []
    },
    onShow: function() {
        this.init();
    },
    init: function() {
        var a = this;
        (0, i.getCommonCities)({
            success: function(i) {
                a.setData({
                    cities: a.format(i)
                });
            }
        });
    },
    format: function(a) {
        var i = {}, t = [];
        for (var e in a) "热门" == e ? i[e] = a[e].map(function(a) {
            return {
                name: a.display
            };
        }) : a[e].map(function(a) {
            var t = a.group, e = a.display;
            i[t] ? i[t].push({
                name: e
            }) : i[t] = [ {
                name: e
            } ];
        });
        for (var n in i) t.push({
            alpha: n,
            subItems: i[n]
        });
        return t;
    },
    select: function(a) {
        var i = a.detail.item.name;
        this.updateLocalCity(i), wx.navigateBack();
    }
});