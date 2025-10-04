Component({
    properties: {
        info: {
            type: Object,
            value: {}
        }
    },
    data: {
        tags: [ {
            name: "电梯房",
            selected: !1
        }, {
            name: "带客厅",
            selected: !1
        }, {
            name: "停车位",
            selected: !1
        }, {
            name: "养宠物",
            selected: !1
        }, {
            name: "通燃气",
            selected: !1
        }, {
            name: "近地铁",
            selected: !1
        } ]
    },
    methods: {
        add: function(e) {
            var t = e.currentTarget.dataset.index, a = this.data.tags[t];
            this.triggerEvent("tag", {
                name: a.name
            });
        }
    }
});