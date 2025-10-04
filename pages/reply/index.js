var e, t = require("../../@babel/runtime/helpers/defineProperty"), a = (e = require("../../3D2B1CF485E1369C5B4D74F3AC012695.js")) && e.__esModule ? e : {
    default: e
};

Page({
    behaviors: [ a.default ],
    data: {
        parent_id: "",
        house_id: "",
        house_type: "",
        demand_id: "",
        topic_id: "",
        title: "",
        avatar: ""
    },
    onLoad: function(e) {
        for (var a in e) this.setData(t({}, "".concat(a), decodeURIComponent(e[a])));
    },
    confirm: function() {
        this.send();
    }
});