Component({
    properties: {
        layouts: {
            type: Array,
            value: []
        }
    },
    methods: {
        view: function(t) {
            var e = t.currentTarget.dataset.index;
            this.triggerEvent("layout", {
                index: e
            });
        }
    }
});