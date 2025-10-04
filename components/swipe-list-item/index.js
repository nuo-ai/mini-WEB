var e = require("../../0CB3296685E1369C6AD5416181F12695.js");

Component({
    properties: {
        house: {
            type: Object,
            value: null
        },
        index: {
            type: Number,
            value: null
        },
        from: {
            type: String,
            value: ""
        }
    },
    data: {
        collect_btns: [ {
            type: "warn",
            src: "/assets/icons/heart-circle-minus-sharp-light.svg"
        } ],
        house_btns: [ {
            type: "warn",
            src: "/assets/icons/trash-can-sharp-light.svg"
        } ]
    },
    methods: {
        tap: function(e) {
            0 == e.detail.index && this.remove();
        },
        remove: function() {
            var t = this;
            wx.showModal({
                title: "houses" == this.data.from ? "删除房源" : "取消收藏",
                content: "确定要".concat("houses" == this.data.from ? "删除" : "取消收藏", "该房源吗？"),
                success: function(s) {
                    s.confirm && ("houses" == t.data.from ? (0, e.removeHouse)({
                        data: t.data.house.target_id,
                        success: function() {
                            t.triggerEvent("remove", {
                                index: t.data.index
                            });
                        }
                    }) : (0, e.updateFollowState)({
                        data: {
                            id: t.data.house.target_id,
                            house_type: t.data.house.target_house_type,
                            is_follow: !0
                        },
                        success: function() {
                            t.triggerEvent("unfavor", {
                                index: t.data.index
                            });
                        }
                    }));
                }
            });
        }
    }
});