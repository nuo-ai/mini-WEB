var t = require("../../@babel/runtime/helpers/objectSpread2"), i = require("../../@babel/runtime/helpers/toConsumableArray"), a = require("../../@babel/runtime/helpers/defineProperty"), e = s(require("../../C6859C9085E1369CA0E3F497DAF02695.js")), o = s(require("../../DF59456685E1369CB93F2D61F5712695.js")), n = require("../../9919E58585E1369CFF7F8D8299222695.js");

function s(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

Page({
    behaviors: [ e.default, o.default ],
    data: {
        id: "",
        info: {
            content: "",
            video_file_ids: "",
            file_ids: "",
            tag_list: ""
        },
        adding: !1,
        mode: "",
        tags: [],
        album: [],
        video: null
    },
    onShow: function() {
        this.getCurrentCity(), this.getCurrentPosition();
    },
    onUnload: function() {
        this.clearGeo();
    },
    onLoad: function(t) {
        this.setData({
            id: t.id
        }), this.data.id && this.init();
    },
    init: function() {
        var t = this;
        (0, n.viewTopicDetail)({
            data: this.data.id,
            success: function(i) {
                t.setData({
                    "info.content": i.content,
                    "info.contact": i.contact,
                    album: i.file_ids ? i.photos : [],
                    video: i.video_file_ids ? i.videos[0] : null,
                    tags: i.tag_list,
                    poi_info: i.poi_info,
                    mode: i.video_file_ids ? "video" : i.file_ids ? "photo" : ""
                });
            }
        });
    },
    set: function(t) {
        var i = t.currentTarget.dataset.prop, e = t.detail.value;
        this.setData(a({}, "info.".concat(i), e));
    },
    geo: function() {
        this.locate("location");
    },
    unlocate: function() {
        this.setData({
            poi_info: null
        });
    },
    tag: function() {
        this.setData({
            adding: !0
        });
    },
    topic: function(t) {
        this.setData({
            tags: [].concat(i(this.data.tags), [ t.detail.tag ]),
            adding: !1
        });
    },
    remove: function(t) {
        var i = t.currentTarget.index;
        this.data.tags.splice(i, 1), this.setData({
            tags: this.data.tags
        });
    },
    cancel: function() {
        this.setData({
            adding: !1
        });
    },
    choose: function() {
        var t = this;
        "video" != this.data.mode && this.data.album.length < 9 && wx.chooseMedia({
            count: 9,
            mediaType: [ "image" ],
            sourceType: [ "album", "camera" ],
            success: function(a) {
                var e = a.tempFiles;
                t.setData({
                    mode: "photo"
                }), t.upload(e, "preview", function(a) {
                    t.setData({
                        album: [].concat(i(t.data.album), i(a.files.map(function(t) {
                            return t.image;
                        })))
                    });
                });
            }
        });
    },
    del: function(t) {
        var i = t.detail.index;
        this.data.album.splice(i, 1), this.setData({
            album: this.data.album
        }), 0 == this.data.album.length && this.setData({
            mode: ""
        });
    },
    shot: function() {
        var t = this;
        "photo" != this.data.mode && wx.chooseMedia({
            count: 1,
            mediaType: [ "video" ],
            sourceType: [ "album", "camera" ],
            maxDuration: 60,
            success: function(i) {
                var a = i.tempFiles;
                t.setData({
                    mode: "video"
                }), t.upload(a, "preview_video", function(i) {
                    console.log(i.files), t.setData({
                        video: i.files[0].video
                    });
                });
            }
        });
    },
    omit: function() {
        this.setData({
            video: null,
            mode: ""
        });
    },
    publish: function() {
        "" == this.data.info.content || this.data.info.content.length < 5 ? wx.showModal({
            title: "请写点什么",
            content: "动态内容过少，请多写点",
            showCancel: !1,
            confirmText: "知道了",
            confirmColor: "#08979C"
        }) : this.save();
    },
    save: function() {
        var i = t({}, this.data.info), a = this.data.album.map(function(t) {
            return t.id;
        });
        i.file_ids = a.join(","), i.tag_list = this.data.tags.join(","), this.data.video && (i.video_file_ids = this.data.video.id), 
        this.data.poi_info && (i.poi_info = this.data.poi_info), this.data.id && (i.id = this.data.id), 
        wx.showLoading({
            title: "发布中...",
            mask: !0
        }), (0, n.updateTopicInfo)({
            data: i,
            success: function(t) {
                wx.hideLoading(), wx.redirectTo({
                    url: "/pages/topic/index?id=".concat(t.id)
                });
            }
        });
    }
});