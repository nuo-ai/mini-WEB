Component({
    properties: {
        phone: {
            type: String,
            value: ""
        }
    },
    methods: {
        bind: function() {
            this.triggerEvent("bind");
        }
    }
});