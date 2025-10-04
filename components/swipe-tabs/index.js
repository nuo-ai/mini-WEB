Component({
    options: {
        multipleSlots: !0
    },
    properties: {
        current: {
            type: Number,
            value: 0
        }
    },
    data: {
        tabs: [ {
            name: "租赁",
            value: "rent"
        }, {
            name: "买卖",
            value: "sale"
        } ]
    },
    methods: {
        tab: function(e) {
            var t = e.currentTarget.dataset.index;
            this.triggerEvent("tab", {
                index: t
            });
        },
        prevent: function() {
            return !1;
        },
        swipe: function(e) {
            var t = e.detail.current;
            this.triggerEvent("swipe", {
                index: t
            });
        }
    }
});