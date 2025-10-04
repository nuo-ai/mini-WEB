Component({
    properties: {
        type: {
            type: Number,
            value: 0
        }
    },
    data: {
        rent_types: [ {
            name: "整租",
            value: 3
        }, {
            name: "合租",
            value: 1
        } ]
    },
    methods: {
        select: function(e) {
            var t = e.currentTarget.dataset.value;
            this.triggerEvent("set", {
                name: "rent_type",
                value: t
            });
        }
    }
});