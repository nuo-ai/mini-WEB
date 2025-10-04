Component({
    properties: {
        city: {
            type: String,
            value: ""
        }
    },
    data: {
        date: "",
        today: ""
    },
    attached: function() {
        this.setData({
            today: this.time(),
            date: this.time()
        });
    },
    methods: {
        daily: function() {
            wx.navigateTo({
                url: "/pages/daily/index?city=".concat(this.data.city, "&date=").concat(this.data.date ? this.data.date : this.time(), "&type=1")
            });
        },
        format: function(t) {
            return (t = t.toString())[1] ? t : "0".concat(t);
        },
        time: function() {
            var t = new Date(), a = t.getFullYear(), e = t.getMonth() + 1, i = t.getDate();
            return "".concat([ a, e, i ].map(this.format).join("-"));
        },
        visit: function(t) {
            var a = t.detail.value;
            this.setData({
                date: a
            }), this.daily();
        }
    }
});