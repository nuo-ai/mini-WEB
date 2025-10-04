var t = o(require("../../6EFD26C485E1369C089B4EC348622695.js")), e = o(require("../../737EDC9385E1369C1518B494D3412695.js")), a = o(require("../../025AADA085E1369C643CC5A73E412695.js")), i = require("../../9919E58585E1369CFF7F8D8299222695.js"), n = o(require("../../7F02D25785E1369C1964BA5069212695.js")), s = o(require("../../C6859C9085E1369CA0E3F497DAF02695.js")), c = o(require("../../D2A2D91485E1369CB4C4B113C6612695.js"));

function o(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

Page({
    behaviors: [ e.default, a.default, n.default, s.default, c.default ],
    data: {
        filters: {
            city: "",
            object_uid: "",
            tag: "",
            keyword: "",
            sequence: ""
        },
        descs: {
            my: "查看我的动态",
            create: "发布动态",
            contact: "联系对方",
            chat: "发送私信"
        },
        operation_name: ""
    },
    fetch: i.searchTopicList,
    onShow: function() {
        var t = this;
        this.selectTab(1), this.getLocalCity(function() {
            t.init();
        });
    },
    onLoad: function() {
        var t = this;
        this.syncLocalCity(), this.init(), wx.$event.on("trends", this, function() {
            t.refresh();
        });
    },
    init: function() {
        this.data.filters.city != this.data.local_city && (this.setData({
            "filters.city": this.data.local_city
        }), this.search(""));
    },
    change: function() {
        this.locate("city");
    },
    keyword: function() {
        wx.navigateTo({
            url: "/pages/topics/index?city=".concat(this.data.filters.city, "&category=keyword")
        });
    },
    my: function() {
        this.setData({
            operation_name: "my"
        }), this.handle(function() {
            var e = t.default.getToken("uid");
            wx.navigateTo({
                url: "/pages/topics/index?object_uid=".concat(e, "&category=my")
            });
        });
    },
    create: function() {
        this.setData({
            operation_name: "create"
        }), this.handle(function() {
            wx.navigateTo({
                url: "/pages/trend/index"
            });
        });
    },
    confirm: function() {
        this.setData({
            toggle: !1
        }), this.mask(), this["".concat(this.data.operation_name)]();
    },
    cancel: function() {
        this.mask(), this.clear();
    },
    update: function(t) {
        var e = t.currentTarget.dataset.index;
        console.log(t), this.data.list.splice(e, 1), this.setData({
            list: this.data.list
        });
    },
    deal: function(t) {
        var e = t.detail.name, a = t.currentTarget.dataset.index;
        this.setData({
            topic: this.data.list[a]
        }), this[e] && this[e]();
    },
    chat: function() {
        var t = this;
        this.setData({
            operation_name: "chat"
        }), this.handle(function() {
            t.transmit();
        });
    },
    contact: function() {
        var t = this;
        this.setData({
            operation_name: "contact"
        }), this.handle(function() {
            t.communicate();
        });
    },
    onShareAppMessage: function() {
        return this.config("message");
    }
});