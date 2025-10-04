var e = s(require("../../737EDC9385E1369C1518B494D3412695.js")), t = s(require("../../025AADA085E1369C643CC5A73E412695.js")), i = s(require("../../C6859C9085E1369CA0E3F497DAF02695.js")), a = require("../../DEA51EB285E1369CB8C376B5DD322695.js");

function s(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

Page({
    behaviors: [ t.default, e.default, i.default ],
    data: {
        menus: [ {
            name: "我的房源",
            icon: "house-user-light",
            route: "houses"
        }, {
            name: "访客记录",
            icon: "people-group-light",
            route: "visitors"
        }, {
            name: "我的收藏",
            icon: "book-heart-light",
            route: "collects"
        } ],
        tester: !1,
        user: null,
        loaded: !1
    },
    onShow: function() {
        var e = this;
        this.selectTab(4), this.syncLocalCity(), this.handle(function() {
            e.profile();
        }, function() {
            e.setData({
                user: null,
                loaded: !0
            });
        });
    },
    profile: function() {
        var e = this;
        (0, a.getUserProfile)({
            success: function(t) {
                e.setData({
                    loaded: !0,
                    tester: t.is_test_user,
                    user: t.user
                });
            },
            fail: function() {
                e.setData({
                    tester: !1,
                    loaded: !0
                });
            }
        });
    },
    trend: function() {
        var e = this;
        this.handle(function() {
            wx.navigateTo({
                url: "/pages/topics/index?object_uid=".concat(e.data.user.id, "&category=my")
            });
        });
    },
    nav: function(e) {
        var t = e.currentTarget.dataset.route;
        this.handle(function() {
            t && wx.navigateTo({
                url: "/pages/".concat(t, "/index")
            });
        });
    },
    confirm: function() {
        this.setData({
            toggle: !1
        }), this.mask(), this.profile();
    },
    cancel: function() {
        this.mask(), this.clear();
    }
});