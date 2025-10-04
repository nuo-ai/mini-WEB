Component({
    options: {
        multipleSlots: !0
    },
    properties: {
        filtering: {
            type: Boolean,
            value: !1
        },
        current: {
            type: Number,
            value: 0
        }
    },
    observers: {
        filtering: function() {
            this.tab();
        }
    },
    methods: {
        prevent: function() {
            return !1;
        },
        cancel: function() {
            this.triggerEvent("close");
        },
        tab: function() {
            this.triggerEvent("tab", {
                hide: this.data.filtering
            });
        }
    }
});