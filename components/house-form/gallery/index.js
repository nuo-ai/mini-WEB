var e = r(require("../../../DF59456685E1369CB93F2D61F5712695.js")), t = r(require("../../../EA0DCCC285E1369C8C6BA4C5DCE02695.js"));

function r(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

Component({
    behaviors: [ e.default, t.default ],
    properties: {
        album: {
            type: Array,
            value: []
        }
    },
    methods: {
        choose: function() {
            var e = this;
            wx.chooseMedia({
                count: 9,
                mediaType: [ "image" ],
                sourceType: [ "album", "camera" ],
                success: function(t) {
                    var r = t.tempFiles;
                    e.upload(r, "preview", function(t) {
                        e.triggerEvent(t.event, {
                            files: t.files
                        });
                    });
                }
            });
        },
        view: function(e) {
            var t = e.currentTarget.dataset.index;
            this.browse(t, this.data.album, !0);
        },
        remove: function(e) {
            var t = e.currentTarget.dataset.index;
            this.triggerEvent("remove", {
                index: t
            });
        },
        complete: function() {
            this.triggerEvent("album");
        }
    }
});