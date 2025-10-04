Component({
    properties: {
        gender: {
            type: String,
            value: ""
        }
    },
    data: {
        selected: -1,
        genders: [ {
            name: "男",
            value: "m"
        }, {
            name: "女",
            value: "f"
        } ]
    },
    observers: {
        gender: function() {
            this.setData({
                selected: "m" == this.data.gender ? 0 : "f" == this.data.gender ? 1 : -1
            });
        }
    },
    methods: {
        select: function(e) {
            var t = e.detail.value;
            this.triggerEvent("set", {
                name: "gender",
                value: this.data.genders[t].value
            });
        }
    }
});