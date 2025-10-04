var t = n(require("../../737EDC9385E1369C1518B494D3412695.js")), i = n(require("../../A2D8119185E1369CC4BE7996A3312695.js")), e = n(require("../../5B4BC6D585E1369C3D2DAED2A0E02695.js")), a = require("../../52B651C285E1369C34D039C5BAB12695.js");

function n(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

Page({
    behaviors: [ t.default, i.default, e.default ],
    data: {
        id: "",
        requesting: !1,
        detail: null,
        operation_name: "",
        descs: {
            preview: "查看公寓照片",
            contact: "咨询公寓",
            browse: "查看房型详情"
        },
        layout_index: "",
        previewing: !1
    },
    onShow: function() {
        this.syncLoggingState(), this.configShareMenu();
    },
    onLoad: function(t) {
        this.setData({
            id: t.id
        }), this.init();
    },
    init: function() {
        var t = this;
        this.data.requesting || (this.data.detail || this.setData({
            requesting: !0
        }), (0, a.viewApartmentDetail)({
            data: {
                apartment_id: this.data.id
            },
            success: function(i) {
                t.setData({
                    requesting: !1,
                    detail: i
                });
            }
        }));
    },
    confirm: function() {
        this.close(), this.init(), this["".concat(this.data.operation_name)]();
    },
    preview: function() {
        var t = this;
        this.setData({
            operation_name: "preview"
        }), this.handle(function() {
            t.setData({
                previewing: !0
            });
        });
    },
    contact: function() {
        var t = this;
        this.setData({
            operation_name: "contact"
        }), this.handle(function() {
            t.communicate(t.data.id);
        });
    },
    layout: function(t) {
        var i = t.detail.index, e = this;
        this.setData({
            layout_index: i,
            operation_name: "browse"
        }), this.handle(function() {
            e.browse();
        });
    },
    browse: function() {
        wx.navigateTo({
            url: "/pages/layout/index?id=".concat(this.data.detail.apartment.layouts[this.data.layout_index].id)
        });
    },
    cancel: function() {
        this.setData({
            previewing: !1
        });
    },
    onShareAppMessage: function() {
        return this.config("message");
    },
    onShareTimeline: function() {
        return this.config("timeline");
    }
});