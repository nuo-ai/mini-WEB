Component({
    properties: {
        content: {
            type: String,
            value: ""
        }
    },
    methods: {
        set: function(t) {
            var e = t.detail.value;
            this.triggerEvent("set", {
                name: "content",
                value: e
            });
        }
    }
});