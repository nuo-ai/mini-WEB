var a, e = (a = require("../../../DF59456685E1369CB93F2D61F5712695.js")) && a.__esModule ? a : {
    default: a
};

Component({
    behaviors: [ e.default ],
    properties: {
        avatar: {
            type: Object,
            value: {}
        }
    },
    methods: {
        choose: function(a) {
            var e = this, t = a.detail.avatarUrl;
            this.upload([ {
                tempFilePath: t
            } ], "avatar", function() {
                e.triggerEvent("avatar");
            });
        }
    }
});