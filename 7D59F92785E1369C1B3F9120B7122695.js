Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.payOrderFee = exports.payCheckment = exports.getPaymentSettings = exports.estimatePayment = void 0;

var e = require("520A3F0785E1369C346C5700DE812695.js"), t = require("0C73FE8785E1369C6A15968031A12695.js");

exports.getPaymentSettings = (0, e.Builder)(function(e) {
    return 2 == e.type ? (0, t.SaleResource)().get("/stateputonbuysetting", {
        id: e.id
    }) : (0, t.HouseResource)().get("/stateputonbuysetting", {
        id: e.id
    });
}), exports.estimatePayment = (0, e.Builder)(function(e) {
    return (0, t.PaymentResource)().get("/estimate", e);
}), exports.payOrderFee = (0, e.Builder)(function(e) {
    return (0, t.PaymentResource)().post("/pay", e);
}), exports.payCheckment = (0, e.Builder)(function(e) {
    return (0, t.PaymentResource)().post("/payother", e);
});