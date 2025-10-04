Component({
    properties: {
        house: {
            type: Object,
            value: {}
        },
        title: {
            type: String,
            value: ""
        }
    },
    data: {
        markers: [],
        price: ""
    },
    observers: {
        "house.longitude": function() {
            this.setData({
                markers: [ {
                    id: this.data.house.id,
                    latitude: this.data.house.latitude,
                    longitude: this.data.house.longitude,
                    title: this.data.house.address,
                    width: 18,
                    height: 24,
                    iconPath: "/assets/icons/location-dot-solid.svg"
                } ]
            });
        },
        "house.detail_money_label": function() {
            this.setData({
                price: this.data.house.detail_money_label ? this.data.house.detail_money_label.replace(/\d+/g, function(t) {
                    return '<span style="font-size: 28pt;font-weight: 500"> '.concat(t, " </span>");
                }) : '<span style="font-size: 28pt;font-weight: 500"> '.concat(this.data.house.money, " </span>").concat(2 == this.data.house.house_type ? "万元" : "元/月")
            });
        }
    },
    methods: {
        play: function() {
            this.triggerEvent("play");
        },
        map: function() {
            wx.openLocation({
                latitude: this.data.house.latitude,
                longitude: this.data.house.longitude,
                name: this.data.title,
                address: this.data.house.address,
                scale: 18
            });
        },
        notify: function() {
            wx.showModal({
                title: "提示",
                content: "该价格为预估值，详细价格请联系对方",
                showCancel: !1,
                confirmColor: "#08979C"
            });
        }
    }
});