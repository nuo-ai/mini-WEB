var t = require("../../@babel/runtime/helpers/toConsumableArray"), e = require("../../@babel/runtime/helpers/defineProperty"), a = require("../../@babel/runtime/helpers/objectSpread2"), i = require("../../0CB3296685E1369C6AD5416181F12695.js"), n = require("../../5C9CDA9585E1369C3AFAB292CA022695.js"), s = l(require("../../737EDC9385E1369C1518B494D3412695.js")), o = l(require("../../C6859C9085E1369CA0E3F497DAF02695.js")), r = l(require("../../99A1A31685E1369CFFC7CB1166112695.js")), u = require("../../2E0A3A1385E1369C486C521402722695.js");

function l(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

Page({
    behaviors: [ s.default, o.default, r.default ],
    data: {
        id: "",
        type: "",
        detail: null,
        basic_info: {},
        album: [],
        video: null,
        editing: !1,
        uploading_progress: {
            video: !1,
            image: !1
        }
    },
    onLoad: function(t) {
        var e = this;
        this.setData({
            id: t.id,
            type: t.type
        }), this.handle(function() {
            e.init();
        });
    },
    onUnload: function() {
        this.clearGeo();
    },
    onShow: function() {
        this.getCurrentCity(), this.getCurrentPosition();
    },
    init: function() {
        var t = this;
        if (this.setData({
            basic_info: 2 == this.data.type ? u.SALE_MODEL : u.RENT_MODEL
        }), this.close(), this.data.id) {
            (2 == this.data.type ? n.viewSaleInfo : i.viewHouseInfo)({
                data: this.data.id,
                success: function(e) {
                    t.setData({
                        detail: a(a({}, e), {}, {
                            house: e.house ? e.house : e.sale
                        })
                    }), t.sync(t.data.detail.house);
                }
            });
        } else {
            var s = t.updateLocalCity();
            for (var o in this.data.basic_info) this.setData(e({}, "basic_info.".concat(o), ""));
            for (var r in this.data.location_info) this.setData(e({}, "location_info.".concat(r), ""));
            this.setData({
                poi_info: null,
                album: [],
                video: null
            }), 2 != this.data.type && this.setData({
                "basic_info.rent_type": 3
            }), s && this.setData({
                "location_info.city": s
            });
        }
    },
    cancel: function() {
        wx.navigateBack();
    },
    select: function(t) {
        var e = t.detail.type;
        this.locate(e);
    },
    update: function(t) {
        var a = t.detail.name, i = t.detail.value;
        this.setData(e({}, "basic_info.".concat(a), i));
    },
    edit: function() {
        this.setData({
            editing: !this.data.editing
        });
    },
    manage: function(e) {
        var a = e.detail.files;
        this.setData({
            album: [].concat(t(this.data.album), t(a.map(function(t) {
                return t.image;
            })))
        });
    },
    remove: function(t) {
        var e = t.detail.index;
        this.data.album.splice(e, 1), this.setData({
            album: this.data.album
        });
    },
    capture: function(t) {
        var e = t.detail.files;
        this.setData({
            video: e[0].video
        });
    },
    cutoff: function() {
        this.setData({
            video: null
        });
    },
    progress: function(t) {
        var a = t.detail;
        this.setData(e({}, "uploading_progress.".concat(a.type), a.value));
    },
    confirm: function() {
        this.save();
    },
    onShareAppMessage: function() {
        return {
            title: "发布".concat(2 == this.data.type ? "买卖" : "租赁", "房源"),
            path: "/pages/editor/index?type=".concat(this.data.type)
        };
    }
});