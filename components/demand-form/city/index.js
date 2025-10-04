Component({
    properties: {
        city: {
            type: String,
            value: ""
        }
    },
    methods: {
        select: function() {
            this.triggerEvent("locate");
        }
    }
});