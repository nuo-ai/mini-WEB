var e = t(require("../../../DF59456685E1369CB93F2D61F5712695.js")), r = t(require("../../../EA0DCCC285E1369C8C6BA4C5DCE02695.js"));

function t(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

Component({
    behaviors: [ e.default, r.default ],
    properties: {
        album: {
            type: Array,
            value: []
        }
    },
    methods: {
        edit: function() {
            this.triggerEvent("album");
        }
    }
});