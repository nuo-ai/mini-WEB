var t = getApp(), e = [ "index", "trends", "entry", "inbox", "dashboard" ];

Component({
    data: {
        selected: 0,
        hide: !1
    },
    lifetimes: {
        attached: function() {
            this.setData({
                selected: t.globalData.tabIndex
            });
        }
    },
    methods: {
        tab: function(a) {
            var n = a.currentTarget.dataset.tab, d = e.indexOf(n);
            this.data.selected != d ? (wx.switchTab({
                url: "/pages/".concat(n, "/index")
            }), t.globalData.tabIndex = e.indexOf(n)) : wx.$event.emit(n);
        },
        seek: function() {
            2 != this.data.selected && (wx.switchTab({
                url: "/pages/entry/index"
            }), t.globalData.tabIndex = 2);
        }
    }
});