Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.VisitorResource = exports.ViewResource = exports.UserResource = exports.TopicResource = exports.SearchResource = exports.SaleResource = exports.PaymentResource = exports.MessageResource = exports.MapRsource = exports.HouseResource = exports.FollowResource = exports.FileResource = exports.DemandResource = exports.CommonResource = exports.BonusResource = exports.AuthResource = void 0;

var e = o(require("C82936E285E1369CAE4F5EE5AEA12695.js")), r = o(require("6EFD26C485E1369C089B4EC348622695.js"));

function o(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

exports.AuthResource = function() {
    return e.default.resource("/users");
}, exports.CommonResource = function() {
    return e.default.resource("/commons" + r.default.getToken("api"));
}, exports.UserResource = function() {
    return e.default.resource("/users" + r.default.getToken("api"));
}, exports.FileResource = function() {
    return e.default.resource("/files" + r.default.getToken("api"));
}, exports.SearchResource = function() {
    return e.default.resource("/search" + r.default.getToken("api"));
}, exports.ViewResource = function(o) {
    return e.default.resource("".concat(o ? "/" + o : "", "/views") + r.default.getToken("api"));
}, exports.FollowResource = function() {
    return e.default.resource("/follows" + r.default.getToken("api"));
}, exports.HouseResource = function() {
    return e.default.resource("/house" + r.default.getToken("api"));
}, exports.SaleResource = function() {
    return e.default.resource("/sale" + r.default.getToken("api"));
}, exports.VisitorResource = function() {
    return e.default.resource("/visitors" + r.default.getToken("api"));
}, exports.PaymentResource = function() {
    return e.default.resource("/payment" + r.default.getToken("api"));
}, exports.MessageResource = function() {
    return e.default.resource("/messages" + r.default.getToken("api"));
}, exports.BonusResource = function() {
    return e.default.resource("/bonuses" + r.default.getToken("api"));
}, exports.TopicResource = function() {
    return e.default.resource("/topic" + r.default.getToken("api"));
}, exports.DemandResource = function() {
    return e.default.resource("/demand" + r.default.getToken("api"));
}, exports.MapRsource = function() {
    return e.default.resource("/maps" + r.default.getToken("api"));
};