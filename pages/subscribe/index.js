var i = require("../../1BC4768185E1369C7DA21E86DDF12695.js");

Page({
    data: {
        info: null
    },
    onShow: function() {
        this.init();
    },
    init: function() {
        var s = this;
        (0, i.subscribeMessage)({
            success: function(i) {
                s.data.info && !s.data.info.is_subscribe && i.is_subscribe && wx.showToast({
                    title: "消息通知已开通",
                    icon: "success"
                }), s.setData({
                    info: i
                });
            }
        });
    },
    view: function() {
        wx.previewImage({
            current: this.data.info.qrcode,
            urls: [ this.data.info.qrcode ]
        });
    }
});