Component({
    properties: {
        count: {
            type: Number,
            value: ""
        }
    },
    data: {
        selected: 0,
        bed_counts: [ {
            name: "1室",
            value: 1
        }, {
            name: "2室",
            value: 2
        }, {
            name: "3室",
            value: 3
        }, {
            name: "4室",
            value: 4
        }, {
            name: "其他",
            value: -1
        } ]
    },
    observers: {
        count: function() {
            this.data.count ? this.setData({
                selected: -1 == this.data.count ? 4 : this.data.count - 1
            }) : this.setData({
                selected: 0
            });
        }
    },
    methods: {
        select: function(e) {
            var t = e.detail.value;
            this.triggerEvent("set", {
                name: "bed_count",
                value: this.data.bed_counts[t].value
            });
        }
    }
});