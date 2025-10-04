var t = require("../../@babel/runtime/helpers/objectSpread2"), a = d(require("../../6EFD26C485E1369C089B4EC348622695.js")), e = d(require("../../737EDC9385E1369C1518B494D3412695.js")), i = d(require("../../EA0DCCC285E1369C8C6BA4C5DCE02695.js")), n = d(require("../../A2D8119185E1369CC4BE7996A3312695.js")), s = require("../../0CB3296685E1369C6AD5416181F12695.js"), o = require("../../5C9CDA9585E1369C3AFAB292CA022695.js");

function d(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

Page({
    behaviors: [ e.default, i.default, n.default ],
    data: {
        id: "",
        type: "",
        from: "",
        requesting: !1,
        detail: null,
        operation_name: "",
        descs: {
            favor: "收藏该房源",
            preview: "查看房源照片",
            play: "观看房源视频",
            contact: "联系房东",
            chat: "给房东发送私信"
        },
        binding: !1,
        share: !1
    },
    onShow: function() {
        this.syncLoggingState(), this.configShareMenu(), this.getShareInfo(2 == this.data.type ? {
            sale_id: this.data.id,
            share_uid: this.data.from
        } : {
            house_id: this.data.id,
            share_uid: this.data.from
        });
    },
    onLoad: function(t) {
        this.setData({
            id: t.id,
            type: t.type,
            from: t.from ? t.from : "",
            share: getCurrentPages().length <= 1
        }), this.init();
    },
    init: function() {
        var a = this;
        this.data.requesting || (this.data.detail || this.setData({
            requesting: !0
        }), (2 == this.data.type ? o.viewSaleDetail : s.viewHouseDetail)({
            data: 2 == this.data.type ? {
                sale_id: this.data.id,
                from_uid: this.data.from
            } : {
                house_id: this.data.id,
                from_uid: this.data.from
            },
            success: function(e) {
                a.setData({
                    requesting: !1,
                    detail: t(t({}, e), {}, {
                        house: e.sale ? e.sale : e.house
                    })
                });
            },
            fail: function() {
                wx.switchTab({
                    url: "/pages/index/index"
                });
            }
        }));
    },
    bind: function() {
        this.setData({
            binding: !this.data.binding
        });
    },
    confirm: function() {
        this.close(), this.init(), this["".concat(this.data.operation_name)]();
    },
    preview: function() {
        var t = this, a = this;
        this.setData({
            operation_name: "preview"
        }), this.handle(function() {
            a.browse(0, t.data.detail.house.photos);
        });
    },
    play: function() {
        var t = this, a = this;
        this.setData({
            operation_name: "play"
        }), this.handle(function() {
            a.playVideo(t.data.detail.house.video);
        });
    },
    contact: function() {
        var t = this;
        this.setData({
            operation_name: "contact"
        }), this.handle(function() {
            t.communicate();
        });
    },
    communicate: function() {
        (0, s.askHouseContact)({
            data: {
                id: this.data.id,
                type: this.data.type
            },
            success: function(t) {
                wx.showModal({
                    title: "联系方式",
                    content: t,
                    confirmText: "点击复制",
                    confirmColor: "#08979C",
                    success: function(a) {
                        a.confirm && wx.setClipboardData({
                            data: t
                        });
                    }
                });
            },
            fail: function(t) {
                wx.showModal({
                    title: "积分不足",
                    content: "无法查看联系方式",
                    confirmText: "获取积分",
                    confirmColor: "#08979C",
                    cancelText: "关闭",
                    success: function(t) {
                        t.confirm && wx.navigateTo({
                            url: "/pages/bonus/index"
                        });
                    }
                });
            }
        });
    },
    favor: function() {
        var t = this;
        this.setData({
            operation_name: "favor"
        }), this.handle(function() {
            t.collect();
        });
    },
    collect: function() {
        var t = this;
        (0, s.updateFollowState)({
            data: {
                id: this.data.id,
                house_type: this.data.type,
                is_follow: this.data.detail.is_follow
            },
            success: function() {
                t.init();
            }
        });
    },
    chat: function() {
        var t = this;
        this.setData({
            operation_name: "chat"
        }), this.handle(function() {
            wx.navigateTo({
                url: "/pages/reply/index?house_id=".concat(t.data.id, "&house_type=").concat(t.data.type, "&username=").concat(t.data.detail.user.username, "&title=").concat(t.data.detail.message_title, "&avatar=").concat(t.data.detail.user.avatar.src)
            });
        });
    },
    create: function() {
        wx.navigateTo({
            url: "/pages/editor/index?type=".concat(this.data.type)
        });
    },
    edit: function() {
        wx.navigateTo({
            url: "/pages/editor/index?id=".concat(this.data.id, "&type=").concat(this.data.type)
        });
    },
    remove: function() {
        var t = this;
        wx.showModal({
            title: "删除房源",
            content: "确定要删除该房源吗？",
            success: function(a) {
                a.confirm && (0, s.removeHouse)({
                    data: t.data.id,
                    success: function() {
                        wx.navigateBack();
                    }
                });
            }
        });
    },
    onShareAppMessage: function() {
        var t = a.default.getToken("uid");
        return {
            title: this.data.detail.house.share.title,
            path: "/pages/house/index?id=".concat(this.data.id, "&type=").concat(this.data.type, "&from=").concat(t),
            imageUrl: this.data.detail.house.share.photo.small
        };
    },
    onShareTimeline: function() {
        var t = a.default.getToken("uid");
        return {
            title: this.data.detail.house.share.title,
            query: "id=".concat(this.data.id, "&type=").concat(this.data.type, "&from=").concat(t),
            imageUrl: this.data.detail.house.share.photo.small
        };
    }
});