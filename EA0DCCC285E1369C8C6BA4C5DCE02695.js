Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

exports.default = Behavior({
    methods: {
        browse: function(e, r, t) {
            var o = r.map(function(e) {
                return e.rotate;
            });
            wx.previewImage({
                current: o[e],
                urls: o,
                showmenu: !!t
            });
        },
        playVideo: function(e) {
            wx.previewMedia({
                current: 0,
                sources: [ {
                    url: e.src,
                    type: "video",
                    poster: e.screenshot
                } ],
                showmenu: !1
            });
        }
    }
});