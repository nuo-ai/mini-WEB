var t = require("../../@babel/runtime/helpers/defineProperty"), e = require("../../9919E58585E1369CFF7F8D8299222695.js"), a = r(require("../../7F02D25785E1369C1964BA5069212695.js")), i = r(require("../../6EFD26C485E1369C089B4EC348622695.js")), s = r(require("../../D2A2D91485E1369CB4C4B113C6612695.js")), n = r(require("../../737EDC9385E1369C1518B494D3412695.js"));

function r(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

Page({
    behaviors: [ a.default, s.default, n.default ],
    data: {
        filters: {
            city: "",
            object_uid: "",
            tag: "",
            keyword: "",
            sequence: ""
        },
        descs: {
            contact: "联系对方",
            chat: "发送私信"
        },
        category: ""
    },
    fetch: e.searchTopicList,
    onLoad: function(e) {
        for (var a in "object_uid" == e.category && e.object_uid == i.default.getToken("uid") ? this.setData({
            category: "my"
        }) : this.setData({
            category: e.category
        }), e) "category" != a && this.setData(t({}, "filters.".concat(a), e[a]));
        "keyword" != this.data.category && this.init();
    },
    init: function() {
        this.search("");
    },
    set: function(t) {
        this.setData({
            "filters.keyword": t.detail.value
        });
    },
    update: function(t) {
        var e = t.currentTarget.dataset.index;
        this.data.list.splice(e, 1), this.setData({
            list: this.data.list
        });
    },
    publish: function() {
        wx.navigateTo({
            url: "/pages/trend/index"
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