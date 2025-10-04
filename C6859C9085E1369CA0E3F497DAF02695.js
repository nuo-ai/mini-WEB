Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.hotCitys = exports.default = void 0;

var t, e = (t = require("./6EFD26C485E1369C089B4EC348622695.js")) && t.__esModule ? t : {
    default: t
};

exports.hotCitys = "上海,北京,深圳,广州,杭州,南京,苏州,成都,武汉,重庆,天津,长沙,西安,合肥,宁波,郑州,佛山,青岛,东莞,厦门,昆明,福州", 
exports.default = Behavior({
    data: {
        location_info: {
            city: "",
            region: "",
            address: "",
            longitude: "",
            latitude: ""
        },
        poi_info: null,
        located: !1,
        local_city: ""
    },
    methods: {
        locate: function(t) {
            "city" == t ? wx.navigateTo({
                url: "/pages/city/index"
            }) : "location" == t && wx.navigateTo({
                url: "/pages/location/index?city=".concat(this.data.location_info.city)
            });
        },
        getCurrentCity: function() {
            var t = e.default.getToken("city");
            t && this.setData({
                "location_info.city": t
            });
        },
        getCurrentPosition: function() {
            var t = e.default.getToken("poi");
            t && this.setData({
                poi_info: t
            });
        },
        updateLocalCity: function(t) {
            if (!t) return e.default.getToken("city");
            this.setData({
                local_city: t
            }), e.default.setValue("city", t);
        },
        getLocalCity: function(t) {
            var a = e.default.getToken("city");
            a ? a != this.data.local_city && (this.updateLocalCity(a), t && t()) : a || (this.data.located ? (this.updateLocalCity("上海"), 
            t && t()) : this.setData({
                located: !0
            }));
        },
        syncLocalCity: function() {
            var t = e.default.getToken("city");
            t ? this.data.local_city && this.data.local_city == t || this.setData({
                local_city: t
            }) : this.updateLocalCity("上海");
        },
        clearGeo: function() {
            e.default.removeValue("poi");
        }
    }
});