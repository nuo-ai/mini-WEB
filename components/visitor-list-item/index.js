var t = require("../../DEA51EB285E1369CB8C376B5DD322695.js");

Component({
    properties: {
        visitor: {
            type: Object,
            value: {}
        }
    },
    methods: {
        contact: function() {
            this.data.visitor.is_ask_contact && this.ask(this.data.visitor);
        },
        ask: function(i) {
            (0, t.askVisitorContact)({
                data: 2 == i.house_type ? {
                    sale_id: i.house_id,
                    client_uid: i.user.id
                } : {
                    house_id: i.house_id,
                    client_uid: i.user.id
                },
                success: function(t) {
                    wx.showModal({
                        title: "联系方式",
                        content: t,
                        confirmText: "点击复制",
                        confirmColor: "#08979C",
                        success: function(i) {
                            i.confirm && wx.setClipboardData({
                                data: t
                            });
                        }
                    });
                }
            });
        },
        visit: function() {
            wx.navigateTo({
                url: "/pages/house/index?id=".concat(this.data.visitor.house_id, "&type=").concat(this.data.visitor.house_type)
            });
        }
    }
});