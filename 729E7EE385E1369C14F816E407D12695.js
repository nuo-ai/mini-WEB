Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getLocationPoi = exports.getCommonDoc = exports.getCommonCities = exports.getCityInfo = exports.decryptInfo = void 0;

var e = require("./520A3F0785E1369C346C5700DE812695.js"), o = require("./0C73FE8785E1369C6A15968031A12695.js");

exports.getCityInfo = (0, e.Builder)(function(e) {
    return (0, o.SearchResource)().get("/prepare", {
        city: e
    });
}), exports.decryptInfo = (0, e.Builder)(function(e) {
    return (0, o.CommonResource)().post("/decrypt", e);
}), exports.getCommonDoc = (0, e.Builder)(function() {
    return (0, o.CommonResource)().get("/doc");
}), exports.getCommonCities = (0, e.Builder)(function() {
    return (0, o.CommonResource)().get("/city");
}), exports.getLocationPoi = (0, e.Builder)(function(e) {
    return (0, o.MapRsource)().get("/suggestion", e);
});