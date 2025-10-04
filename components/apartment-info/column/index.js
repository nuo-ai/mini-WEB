var e, t = (e = require("../../../EA0DCCC285E1369C8C6BA4C5DCE02695.js")) && e.__esModule ? e : {
    default: e
};

Component({
    behaviors: [ t.default ],
    properties: {
        photos: {
            type: Array,
            value: []
        }
    },
    methods: {
        preview: function(e) {
            var t = e.currentTarget.dataset.index;
            this.browse(t, this.data.photos);
        }
    }
});