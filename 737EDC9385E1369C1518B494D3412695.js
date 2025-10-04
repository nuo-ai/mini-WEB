Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var t, e = require("013BC69685E1369C675DAE91C6C12695.js"), a = (t = require("6EFD26C485E1369C089B4EC348622695.js")) && t.__esModule ? t : {
    default: t
};

exports.default = Behavior({
    data: {
        ifLogged: !1,
        toggle: !1
    },
    methods: {
        syncLoggingState: function() {
            this.setData({
                ifLogged: (0, e.getLoggingState)()
            });
        },
        handle: function(t, e) {
            this.syncLoggingState(), this.data.ifLogged ? t && t() : (e && e(), this.mask && this.mask(), 
            this.setData({
                toggle: !0
            }));
        },
        close: function() {
            this.syncLoggingState(), this.setData({
                toggle: !1
            });
        },
        clear: function() {
            a.default.cleanToken(), this.setData({
                ifLogged: !1,
                toggle: !1
            });
        }
    }
});