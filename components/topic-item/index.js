var t, a = (t = require("../../EA0DCCC285E1369C8C6BA4C5DCE02695.js")) && t.__esModule ? t : {
    default: t
}, e = require("../../9919E58585E1369CFF7F8D8299222695.js");

Component({
    behaviors: [ a.default ],
    properties: {
        topic: {
            type: Object,
            value: {}
        },
        city: {
            type: String,
            value: ""
        },
        tag: {
            type: String,
            value: ""
        },
        specific: {
            type: Boolean,
            value: !1
        },
        category: {
            type: String,
            value: ""
        }
    },
    methods: {
        view: function(t) {
            var a = t.currentTarget.dataset.index;
            this.browse(a, this.data.topic.photos);
        },
        play: function(t) {
            var a = t.currentTarget.dataset.index;
            this.playVideo(this.data.topic.videos[a]);
        },
        visit: function() {
            this.data.specific || wx.navigateTo({
                url: "/pages/topic/index?id=".concat(this.data.topic.id)
            });
        },
        search: function(t) {
            var a = t.currentTarget.dataset.prop, e = t.currentTarget.dataset.value;
            "tag" == a ? e != this.data.tag && wx.navigateTo({
                url: "/pages/topics/index?city=".concat(this.data.city, "&").concat(a, "=").concat(e, "&category=").concat(a)
            }) : "object_uid" == a ? this.data.topic.can_delete && "my" == this.data.category || wx.navigateTo({
                url: "/pages/topics/index?".concat(a, "=").concat(e, "&category=").concat(a)
            }) : this.data.specific || wx.navigateTo({
                url: "/pages/topics/index?city=".concat(this.data.city, "&").concat(a, "=").concat(e, "&category=").concat(a)
            });
        },
        geo: function() {
            var t = this.data.topic.poi_info;
            wx.openLocation({
                latitude: t.latitude,
                longitude: t.longitude,
                name: t.poi_name,
                address: t.road,
                scale: 18
            });
        },
        edit: function() {
            wx.navigateTo({
                url: "/pages/trend/index?id=".concat(this.data.topic.id)
            });
        },
        chat: function() {
            this.triggerEvent("opt", {
                name: "chat"
            });
        },
        contact: function() {
            this.triggerEvent("opt", {
                name: "contact"
            });
        },
        share: function() {
            this.triggerEvent("opt", {
                name: "share"
            });
        },
        remove: function() {
            var t = this;
            wx.showModal({
                title: "删除动态",
                content: "确定要删除该条动态吗？",
                success: function(a) {
                    a.confirm && (0, e.removeTopic)({
                        data: t.data.topic.id,
                        success: function() {
                            t.triggerEvent("remove");
                        }
                    });
                }
            });
        }
    }
});