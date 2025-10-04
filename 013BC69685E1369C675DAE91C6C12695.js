Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getUserAuth = exports.getLoggingState = exports.cleanUserAuth = void 0;

var e, t = (e = require("./6EFD26C485E1369C089B4EC348622695.js")) && e.__esModule ? e : {
    default: e
}, o = require("./0C73FE8785E1369C6A15968031A12695.js");

exports.getLoggingState = function() {
    return !!t.default.getToken("uid");
}, exports.getUserAuth = function(e, u, n) {
    return (0, o.AuthResource)().post("/login", {
        code: e
    }).then(function(e) {
        t.default.setToken(e.uid, e.token, e.secret), u && u(e.user);
    }).catch(function(e) {
        n && n();
    });
}, exports.cleanUserAuth = function(e) {
    t.default.cleanToken(), e && e();
};