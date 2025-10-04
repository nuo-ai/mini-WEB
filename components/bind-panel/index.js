var e = require("../../DEA51EB285E1369CB8C376B5DD322695.js");

Component({
    properties: {
        desc: {
            type: String,
            value: ""
        },
        show: {
            type: Boolean,
            value: !1
        }
    },
    methods: {
        bind: function(t) {
            var n = this, i = t.detail.code;
            i ? (0, e.bindUserPhone)({
                data: i,
                success: function() {
                    n.triggerEvent("phone");
                }
            }) : this.cancel();
        },
        cancel: function() {
            this.triggerEvent("close");
        }
    }
});