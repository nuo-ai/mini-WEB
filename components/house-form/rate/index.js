Component({
    properties: {
        price: {
            type: String,
            value: ""
        }
    },
    methods: {
        set: function(e) {
            var t = e.detail.value;
            this.triggerEvent("set", {
                name: "money",
                value: t
            });
        }
    }
});