Component({
    properties: {
        title: {
            type: String,
            value: ""
        },
        house: {
            type: Object,
            value: {}
        }
    },
    data: {
        expand: !1
    },
    methods: {
        toggle: function() {
            this.setData({
                expand: !this.data.expand
            });
        }
    }
});