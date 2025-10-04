Component({
    properties: {
        username: {
            type: String,
            value: ""
        }
    },
    methods: {
        set: function(e) {
            var t = e.detail.value;
            this.triggerEvent("set", {
                name: "username",
                value: t
            });
        }
    }
});