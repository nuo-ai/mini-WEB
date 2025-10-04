Component({
    properties: {
        poi: {
            type: Object,
            value: {}
        }
    },
    methods: {
        locate: function() {
            this.triggerEvent("locate");
        }
    }
});