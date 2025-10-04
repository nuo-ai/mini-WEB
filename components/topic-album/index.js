var e, t = (e = require("../../EA0DCCC285E1369C8C6BA4C5DCE02695.js")) && e.__esModule ? e : {
    default: e
};

Component({
    behaviors: [ t.default ],
    properties: {
        mode: {
            type: String,
            value: ""
        },
        album: {
            type: Array,
            value: []
        },
        queue: {
            type: Array,
            value: []
        },
        video: {
            type: Object,
            value: null
        }
    },
    methods: {
        view: function(e) {
            var t = e.currentTarget.dataset.index;
            this.browse(t, this.data.album, !0);
        },
        play: function() {
            this.playVideo(this.data.video);
        },
        remove: function(e) {
            var t = e.currentTarget.dataset.index;
            this.triggerEvent("remove", {
                index: t
            });
        },
        more: function() {
            this.triggerEvent("more");
        },
        omit: function() {
            this.triggerEvent("omit");
        }
    }
});