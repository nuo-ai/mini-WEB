Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var i = require("@babel/runtime/helpers/objectSpread2.js"), t = require("./0CB3296685E1369C6AD5416181F12695.js"), e = require("./5C9CDA9585E1369C3AFAB292CA022695.js"), a = require("./2E0A3A1385E1369C486C521402722695.js");

exports.default = Behavior({
    methods: {
        add: function() {
            wx.showActionSheet({
                alertText: "发布房源",
                itemList: [ "租赁房源", "买卖房源" ],
                itemColor: "#08979C",
                success: function(i) {
                    wx.navigateTo({
                        url: "/pages/editor/index?type=".concat(i.tapIndex + 1)
                    });
                }
            });
        },
        format: function() {
            var t = this.data.id ? {} : i({}, this.data.location_info);
            return this.data.poi_info && !this.data.id && (t.address = this.data.poi_info.name, 
            t.region = this.data.poi_info.district, t.longitude = this.data.poi_info.longitude, 
            t.latitude = this.data.poi_info.latitude, t.poi_info = this.data.poi_info), t.file_ids = this.data.album.map(function(i) {
                return i.id;
            }).join(","), t.video_file_id = this.data.video ? this.data.video.id : "", this.data.id && (t.id = this.data.id), 
            i(i({}, t), this.data.basic_info);
        },
        sync: function(i) {
            var t = 2 == i.house_type ? a.SALE_MODEL : a.RENT_MODEL;
            for (var e in t) t[e] = i[e] ? i[e] : "";
            this.setData({
                basic_info: t,
                album: i.photos ? i.photos : [],
                video: i.video ? i.video : null
            });
        },
        hint: function(i, t) {
            wx.showModal({
                title: t || "信息未完善",
                content: i,
                showCancel: !1,
                confirmText: "知道了",
                confirmColor: "#08979C"
            });
        },
        validate: function(i, t) {
            if (!this.data.id && "" == i.city) return this.hint("请选择城市"), !1;
            if (!this.data.id && !i.poi_info) return this.hint("请选择一个地址"), !1;
            if ("" != i.bed_count) if ("" != i.square_meter) {
                if (2 != this.data.type || "" != i.money) return 2 != this.data.type && "" == i.money ? (this.hint("请填写租金"), 
                !1) : "" == i.contact ? (this.hint("请填写联系方式"), !1) : this.data.uploading_progress.video ? (this.hint("有视频正在上传中，请等待上传完成", "文件上传中"), 
                !1) : this.data.uploading_progress.image ? (this.hint("有图片正在上传中，请等待上传完成", "文件上传中"), 
                !1) : void (t && t());
                this.hint("请填写价格");
            } else this.hint("请填写面积"); else this.hint("请选择户型");
        },
        save: function() {
            var i = this, a = this.format();
            this.validate(a, function() {
                wx.showLoading({
                    title: "提交信息...",
                    mask: !0
                }), (2 == i.data.type ? e.updateSaleInfo : t.updateHouseInfo)({
                    data: a,
                    success: function(i) {
                        wx.hideLoading(), a.id ? wx.navigateBack() : wx.redirectTo({
                            url: "/pages/purchase/index?id=".concat(i.id, "&type=").concat(i.house_type)
                        });
                    }
                });
            });
        }
    }
});