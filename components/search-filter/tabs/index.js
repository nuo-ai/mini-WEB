Component({
    properties: {
        tab: {
            type: String,
            value: ""
        }
    },
    data: {
        tabs: [ {
            name: "租房",
            value: "rent"
        }, {
            name: "买房",
            value: "sale"
        } ]
    },
    methods: {
        over: function(e) {
            var t = e.currentTarget.dataset.index;
            this.triggerEvent("swipe", {
                current: t
            });
        }
    }
});