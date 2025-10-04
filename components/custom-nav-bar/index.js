Component({
    properties: {
        istab: {
            type: Boolean,
            value: !1
        },
        backtab: {
            type: String,
            value: ""
        },
        mode: {
            type: String,
            value: ""
        },
        title: {
            type: String,
            vale: ""
        },
        custom: {
            type: Boolean,
            value: !1
        }
    },
    data: {
        statusBarHeight: 0
    },
    observers: {
        title: function() {
            wx.setNavigationBarTitle({
                title: this.data.title ? this.data.title : "房产盒子"
            });
        }
    },
    ready: function() {
        var t = this;
        wx.getSystemInfo({
            success: function(a) {
                t.setData({
                    statusBarHeight: a.statusBarHeight
                });
            }
        });
    },
    methods: {
        navback: function() {
            var t = getCurrentPages();
            this.data.custom ? this.triggerEvent("navback") : this.data.backtab ? t.length > 1 ? wx.navigateBack({
                delta: t.length - 1
            }) : wx.switchTab({
                url: "/pages/".concat(this.data.backtab, "/index")
            }) : t.length > 1 ? wx.navigateBack({
                delta: 1
            }) : wx.switchTab({
                url: "/pages/index/index"
            });
        }
    }
});