Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.viewDemandList = exports.viewDemandDetail = exports.revokeDemand = exports.createDemand = exports.countDemand = void 0;

var e = require("./520A3F0785E1369C346C5700DE812695.js"), r = require("./0C73FE8785E1369C6A15968031A12695.js");

exports.viewDemandList = (0, e.Builder)(function(e) {
    return (0, r.DemandResource)().get("/my", e);
}), exports.viewDemandDetail = (0, e.Builder)(function(e) {
    return (0, r.DemandResource)().get("/detail", {
        id: e
    });
}), exports.createDemand = (0, e.Builder)(function(e) {
    return (0, r.DemandResource)().post("", e);
}), exports.revokeDemand = (0, e.Builder)(function(e) {
    return (0, r.DemandResource)().post("/revoke", e);
}), exports.countDemand = (0, e.Builder)(function() {
    return (0, r.DemandResource)().get("/index");
});