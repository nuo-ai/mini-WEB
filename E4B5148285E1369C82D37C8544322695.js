Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getFileToken = void 0;

var e = require("./520A3F0785E1369C346C5700DE812695.js"), r = require("./0C73FE8785E1369C6A15968031A12695.js");

exports.getFileToken = (0, e.Builder)(function(e) {
    return (0, r.FileResource)().get("/token", e);
});