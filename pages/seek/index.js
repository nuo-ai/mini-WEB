var t = require("../../@babel/runtime/helpers/objectSpread2"), i = require("../../@babel/runtime/helpers/defineProperty"), n = require("../../CDB73E6785E1369CABD1566016E12695.js"), e = require("../../DEA51EB285E1369CB8C376B5DD322695.js"), o = s(require("../../737EDC9385E1369C1518B494D3412695.js")), a = s(require("../../C6859C9085E1369CA0E3F497DAF02695.js"));

function s(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

Page({
    behaviors: [ o.default, a.default ],
    data: {
        info: {
            city: "",
            cost1: "",
            cost2: "",
            layout: "",
            content: "",
            contact: ""
        },
        layouts: [],
        binding: !1
    },
    onLoad: function() {
        var t = this;
        this.handle(function() {
            t.init();
        });
    },
    onUnload: function() {
        this.clearGeo();
    },
    init: function() {
        for (var t in this.data.info) this.setData(i({}, "info.".concat(t), ""));
        this.setData({
            "info.city": this.updateLocalCity()
        });
    },
    onShow: function() {
        var t = this;
        this.getCurrentPosition(), this.getLocalCity(function() {
            t.setData({
                "info.city": t.data.local_city
            });
        });
    },
    change: function() {
        this.locate("city");
    },
    confirm: function() {
        this.setData({
            toggle: !1
        }), this.init();
    },
    cancel: function() {
        wx.switchTab({
            url: "/pages/index/index"
        });
    },
    update: function(t) {
        var n = t.detail.name, e = t.detail.value;
        "layout" == n ? this.setData({
            layouts: e
        }) : this.setData(i({}, "info.".concat(n), e));
    },
    desc: function(t) {
        this.setData({
            "info.content": this.data.info.content + (this.data.info.content ? "，" : "") + t.detail.name
        });
    },
    hint: function(t, i) {
        wx.showModal({
            title: i || "信息未完善",
            content: t,
            showCancel: !1,
            confirmText: "知道了",
            confirmColor: "#08979C"
        });
    },
    notice: function() {
        this.hint("房东、中介、公寓管家会加微信向你推荐匹配需求的房源", "温馨提示");
    },
    submit: function() {
        var t = this;
        this.check(function() {
            wx.showModal({
                content: "确定提交？",
                confirmColor: "#08979C",
                success: function(i) {
                    i.confirm && t.create();
                }
            });
        });
    },
    check: function(t) {
        var i = this;
        (0, e.getUserProfile)({
            success: function(n) {
                "" == n.user.phone ? i.setData({
                    binding: !0
                }) : t();
            }
        });
    },
    ask: function() {
        this.setData({
            binding: !this.data.binding
        });
    },
    create: function() {
        this.setData({
            binding: !1,
            "info.layout": this.data.layouts.join(",")
        }), wx.showLoading({
            title: "提交信息...",
            mask: !0
        });
        var i = t({}, this.data.info);
        if (this.data.poi_info) {
            var e = "工作地址：".concat(this.data.poi_info.name, "-").concat(this.data.poi_info.address);
            i.content = e + (i.content ? "\r\n" : "") + i.content, i.poi_info = this.data.poi_info;
        }
        (0, n.createDemand)({
            data: i,
            success: function() {
                wx.hideLoading(), wx.showToast({
                    title: "发布成功",
                    icon: "success",
                    duration: 1e3,
                    mask: !0,
                    complete: function() {
                        wx.redirectTo({
                            url: "/pages/demands/index"
                        });
                    }
                });
            }
        });
    },
    geo: function() {
        this.locate("location");
    },
    onShareAppMessage: function() {
        return {
            title: "六六找房-发布租房需求",
            path: "/pages/seek/index"
        };
    },
    onShareTimeline: function() {
        return {
            title: "六六找房-发布住房需求"
        };
    }
});