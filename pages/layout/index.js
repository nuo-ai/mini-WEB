var t = e(require("../../EA0DCCC285E1369C8C6BA4C5DCE02695.js")), a = e(require("../../5B4BC6D585E1369C3D2DAED2A0E02695.js")), i = require("../../52B651C285E1369C34D039C5BAB12695.js");

function e(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

Page({
    behaviors: [ t.default, a.default ],
    data: {
        id: "",
        requesting: !1,
        detail: null
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
        }), (0, i.viewLayoutInfo)({
            data: this.data.id,
            success: function(a) {
                t.setData({
                    requesting: !1,
                    detail: a.apartment
                });
            }
        }));
    },
    play: function() {
        this.playVideo(this.data.detail.layout.videos[0]);
    },
    preview: function(t) {
        var a = t.currentTarget.dataset.index;
        this.browse(a, this.data.detail.layout.photos);
    },
    contact: function() {
        this.communicate(this.data.detail.id);
    }
});