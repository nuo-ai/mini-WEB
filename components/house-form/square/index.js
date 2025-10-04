Component({
    properties: {
        square: {
            type: String,
            value: ""
        }
    },
    methods: {
        set: function(e) {
            var t = e.detail.value;
            this.triggerEvent("set", {
                name: "square_meter",
                value: t
            });
        }
    }
});