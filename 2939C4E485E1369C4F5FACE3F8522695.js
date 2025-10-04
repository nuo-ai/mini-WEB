Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.timeStamp = exports.ticket = exports.default = void 0;

var e, t = require("@babel/runtime/helpers/classCallCheck.js"), n = require("@babel/runtime/helpers/createClass.js"), o = (e = require("./5F6391C085E1369C3905F9C718422695.js")) && e.__esModule ? e : {
    default: e
};

var r = exports.timeStamp = function() {
    return Math.round(new Date().getTime() / 1e3);
};

exports.ticket = function(e) {
    var t = r(), n = e.getToken("token") ? e.getToken("token") : (0, o.default)(t), s = (0, 
    o.default)(n + t);
    return "timestamp=".concat(t, ";oauth2=").concat(n, ";signature=").concat(s);
}, exports.default = function() {
    return n(function e(n, o) {
        t(this, e), this._version = void 0, this._key = void 0, this.token = n, this._version = o;
    }, [ {
        key: "generate",
        value: function(e, t) {
            var n = r(), s = this.token.getToken("secret") ? this.token.getToken("secret") : (0, 
            o.default)(n), a = this.token.getToken("token") ? this.token.getToken("token") : (0, 
            o.default)(n), c = t ? t.toLowerCase() : "get", i = this._version ? this._version + e : e.substring(1), u = "request_url=".concat(i, "&content=").concat(n, "&request_method=").concat(c, "&timestamp=").concat(n, "&secret=").concat(s), l = (0, 
            o.default)(u);
            return "timestamp=".concat(n, ";oauth2=").concat(a, ";signature=").concat(l, ";secret=").concat(s);
        }
    } ]);
}();