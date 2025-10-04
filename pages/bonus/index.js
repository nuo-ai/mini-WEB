var e = require("../../DEA51EB285E1369CB8C376B5DD322695.js");

Page({
    data: {
        user: null
    },
    onShow: function() {
        this.profile();
    },
    profile: function() {
        var i = this;
        (0, e.getUserProfile)({
            success: function(e) {
                i.setData({
                    user: e.user
                });
            }
        });
    },
    bill: function() {
        wx.navigateTo({
            url: "/pages/bill/index"
        });
    },
    fulfil: function() {
        wx.navigateTo({
            url: "/pages/profile/index"
        });
    }
});