Component({
    properties: {
        city: {
            type: String,
            value: ""
        },
        address: {
            type: String,
            value: ""
        }
    },
    methods: {
        select: function(t) {
            var e = t.currentTarget.dataset.type;
            this.triggerEvent("locate", {
                type: e
            });
        }
    }
});