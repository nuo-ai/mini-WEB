Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.viewSaleInfo = exports.viewSaleDetail = exports.viewSaleCollects = exports.viewMySales = exports.updateSaleInfo = exports.searchSaleList = void 0;

var e = require("./520A3F0785E1369C346C5700DE812695.js"), r = require("./0C73FE8785E1369C6A15968031A12695.js");

exports.searchSaleList = (0, e.Builder)(function(e) {
    return (0, r.SearchResource)().get("/sale", e);
}), exports.viewSaleDetail = (0, e.Builder)(function(e) {
    return (0, r.ViewResource)().get("/sale", e);
}), exports.viewSaleInfo = (0, e.Builder)(function(e) {
    return (0, r.SaleResource)().get("/detail", {
        id: e
    });
}), exports.viewSaleCollects = (0, e.Builder)(function(e) {
    return (0, r.FollowResource)().get("/sale", e);
}), exports.updateSaleInfo = (0, e.Builder)(function(e) {
    return e.id ? (0, r.SaleResource)().put("", e) : (0, r.SaleResource)().post("", e);
}), exports.viewMySales = (0, e.Builder)(function(e) {
    return (0, r.SaleResource)().get("/my", e);
});