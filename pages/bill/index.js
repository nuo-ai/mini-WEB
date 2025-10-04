var e, a = (e = require("../../7F02D25785E1369C1964BA5069212695.js")) && e.__esModule ? e : {
    default: e
}, r = require("../../DEA51EB285E1369CB8C376B5DD322695.js");

Page({
    behaviors: [ a.default ],
    data: {
        user: null,
        filters: {
            page: 1
        }
    },
    fetch: r.viewBonusBill,
    onLoad: function() {
        this.search(this.data.filters.page, "page");
    }
});