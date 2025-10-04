Component({
    properties: {
        contact: {
            type: String,
            value: ""
        }
    },
    methods: {
        set: function(t) {
            var e = t.detail.value;
            this.triggerEvent("set", {
                name: "contact",
                value: e
            });
        }
    }
});