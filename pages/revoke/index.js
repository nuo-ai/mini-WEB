var t = require("../../CDB73E6785E1369CABD1566016E12695.js");

Page({
    data: {
        id: "",
        selected: null,
        reasons: [ {
            value: "需求已解决"
        }, {
            value: "需求填写错误，撤单重新发"
        }, {
            value: "加我微信的人太多，让我烦"
        }, {
            value: "其它"
        } ],
        content: ""
    },
    onLoad: function(t) {
        this.setData({
            id: t.id
        });
    },
    set: function(t) {
        this.setData({
            content: t.detail.value
        });
    },
    select: function(t) {
        var e = t.currentTarget.dataset.index;
        this.setData({
            selected: e
        }), e !== this.data.reasons.length - 1 && this.setData({
            content: ""
        });
    },
    revoke: function() {
        var e = "";
        "" == (e = null !== this.data.selected && this.data.selected != this.data.reasons.length - 1 ? this.data.reasons[this.data.selected].value : this.data.content) ? wx.showModal({
            title: "请选择",
            content: "至少选择一个撤单理由",
            showCancel: !1,
            confirmText: "知道了",
            confirmColor: "#08979C"
        }) : (wx.showLoading({
            title: "提交撤单中...",
            mask: !0
        }), (0, t.revokeDemand)({
            data: {
                id: this.data.id,
                reason: e
            },
            success: function() {
                wx.navigateBack();
            }
        }));
    }
});