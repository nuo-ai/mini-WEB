Component({
    properties: {
        photos: {
            type: Array,
            value: []
        }
    },
    methods: {
        preview: function() {
            this.triggerEvent("gallery");
        }
    }
});