var t = require("../../9919E58585E1369CFF7F8D8299222695.js");

Component({
    properties: {
        tags: {
            type: Array,
            value: []
        }
    },
    data: {
        keyword: "",
        list: []
    },
    attached: function() {
        this.search();
    },
    methods: {
        set: function(t) {
            this.setData({
                keyword: t.detail.value
            }), this.search();
        },
        search: function() {
            var a = this;
            (0, t.searchTopicTags)({
                data: this.data.keyword,
                success: function(t) {
                    a.setData({
                        list: t
                    });
                }
            });
        },
        add: function(t) {
            var a = t.currentTarget.dataset.index, e = this.data.list[a].name;
            this.data.tags.indexOf(e.id) < 0 && this.triggerEvent("tag", {
                tag: e
            });
        }
    }
});