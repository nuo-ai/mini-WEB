Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.Builder = void 0;

exports.Builder = function(e) {
    return function(t) {
        e && t && e(t.data).then(function(e) {
            t.success && t.success(e);
        }).catch(function(e) {
            t.fail && t.fail(e);
        });
    };
};