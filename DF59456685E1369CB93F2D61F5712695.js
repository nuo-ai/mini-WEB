Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var e = require("@babel/runtime/helpers/defineProperty.js"), t = require("@babel/runtime/helpers/objectSpread2.js"), a = require("@babel/runtime/helpers/toConsumableArray.js"), u = require("./E4B5148285E1369C82D37C8544322695.js");

exports.default = Behavior({
    data: {
        queue: []
    },
    methods: {
        clear: function() {
            this.setData({
                queue: []
            });
        },
        upload: function(e, s, r) {
            var i = this, n = this.data.queue.length, o = "preview_video" == s ? "video" : "image";
            this.triggerEvent("uploadingstart", {
                type: o,
                value: !0
            }), this.setData({
                queue: [].concat(a(this.data.queue), a(e.map(function(e) {
                    return t(t({}, e), {}, {
                        progress: 0,
                        status: "uploading"
                    });
                })))
            }), (0, u.getFileToken)({
                data: {
                    count: e.length,
                    category: s
                },
                success: function(t) {
                    t.map(function(t, a) {
                        i.excute(e[a].tempFilePath, t, n + a, o, r);
                    });
                }
            });
        },
        excute: function(t, a, u, s, r) {
            var i = this;
            wx.uploadFile({
                url: "https://up-z0.qiniup.com",
                filePath: t,
                name: "file",
                formData: {
                    token: a
                },
                success: function(t) {
                    var a = JSON.parse(t.data), s = a.result.type, r = a.result[s];
                    i.setData(e(e({}, "queue[".concat(u, "].").concat(s), r), "queue[".concat(u, "].status"), "success"));
                },
                fail: function() {
                    i.setData(e({}, "queue[".concat(u, "].status"), "fail"));
                },
                complete: function() {
                    i.finishUploader(s, r);
                }
            }).onProgressUpdate(function(t) {
                i.setData(e({}, "queue[".concat(u, "].progress"), t.progress));
            });
        },
        checkProgress: function() {
            for (var e = !0, t = 0; t < this.data.queue.length; t++) "uploading" == this.data.queue[t].status && (e = !1);
            return e;
        },
        finishUploader: function(e, t) {
            if (this.checkProgress()) {
                var a = this.data.queue.filter(function(e) {
                    return "success" == e.status;
                });
                t && t({
                    event: e,
                    files: a
                }), this.triggerEvent("uploadingend", {
                    type: e,
                    value: !1
                }), this.clear();
            }
        }
    }
});