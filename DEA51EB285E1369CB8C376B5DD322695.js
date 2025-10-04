Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.viewVisitorList = exports.viewVisitorData = exports.viewSaleVisitors = exports.viewBonusBill = exports.updateUserProfile = exports.unregisterUser = exports.getUserProfile = exports.bindUserPhone = exports.askVisitorContact = void 0;

var e = require("520A3F0785E1369C346C5700DE812695.js"), r = require("0C73FE8785E1369C6A15968031A12695.js");

exports.getUserProfile = (0, e.Builder)(function() {
    return (0, r.CommonResource)().get("/user");
}), exports.updateUserProfile = (0, e.Builder)(function(e) {
    return (0, r.UserResource)().put("", e);
}), exports.bindUserPhone = (0, e.Builder)(function(e) {
    return (0, r.UserResource)().post("/bindphone", {
        code: e
    });
}), exports.viewVisitorList = (0, e.Builder)(function(e) {
    return (0, r.VisitorResource)().get("", e);
}), exports.viewSaleVisitors = (0, e.Builder)(function(e) {
    return (0, r.VisitorResource)().get("/salevisitors", e);
}), exports.viewVisitorData = (0, e.Builder)(function(e) {
    return (0, r.VisitorResource)().get("sale" == e ? "/salecount" : "/count");
}), exports.askVisitorContact = (0, e.Builder)(function(e) {
    return (0, r.VisitorResource)().get("/checkusercontact", e);
}), exports.viewBonusBill = (0, e.Builder)(function(e) {
    return (0, r.BonusResource)().get("/record", e);
}), exports.unregisterUser = (0, e.Builder)(function() {
    return (0, r.UserResource)().post("/cancel");
});