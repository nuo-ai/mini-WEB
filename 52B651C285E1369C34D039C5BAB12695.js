Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.viewLayoutInfo = exports.viewApartmentDetail = exports.askApartmentContact = void 0;

var e = require("520A3F0785E1369C346C5700DE812695.js"), t = require("0C73FE8785E1369C6A15968031A12695.js");

exports.viewApartmentDetail = (0, e.Builder)(function(e) {
    return (0, t.ViewResource)().get("/apartment", e);
}), exports.viewLayoutInfo = (0, e.Builder)(function(e) {
    return (0, t.ViewResource)().get("/layout", {
        layout_id: e
    });
}), exports.askApartmentContact = (0, e.Builder)(function(e) {
    return (0, t.ViewResource)().get("/apartmentphone", {
        apartment_id: e
    });
});