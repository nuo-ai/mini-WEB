var e = o(require("../../../DF59456685E1369CB93F2D61F5712695.js")), i = o(require("../../../EA0DCCC285E1369C8C6BA4C5DCE02695.js"));

function o(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

Component({
    behaviors: [ e.default, i.default ],
    properties: {
        video: {
            type: Object,
            value: null
        }
    },
    methods: {
        permit: function() {
            var e = this;
            wx.requirePrivacyAuthorize({
                success: function() {
                    e.choose();
                },
                fail: function(e) {
                    wx.openPrivacyContract({});
                }
            });
        },
        choose: function() {
            var e = this;
            wx.chooseMedia({
                count: 1,
                mediaType: [ "video" ],
                sourceType: [ "album", "camera" ],
                maxDuration: 60,
                camera: "back",
                success: function(i) {
                    var o = i.tempFiles;
                    e.upload(o, "preview_video", function(i) {
                        e.triggerEvent(i.event, {
                            files: i.files
                        });
                    });
                }
            });
        },
        play: function() {
            this.playVideo(this.data.video);
        },
        remove: function() {
            this.triggerEvent("remove");
        }
    }
});