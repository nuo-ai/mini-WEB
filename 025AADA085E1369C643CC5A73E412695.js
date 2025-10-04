Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

exports.default = Behavior({
    methods: {
        selectTab: function(t) {
            "function" == typeof this.getTabBar && this.getTabBar() && this.getTabBar().setData({
                selected: t
            });
        },
        mask: function() {
            if ("function" == typeof this.getTabBar && this.getTabBar()) {
                var t = this.getTabBar();
                t.setData({
                    hide: !t.data.hide
                });
            }
        }
    }
});