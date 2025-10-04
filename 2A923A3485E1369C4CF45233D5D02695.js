Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var r = {};

wx.$event = {
    on: function(e, t, a) {
        var n = [ t, a ], i = [];
        i = r[e], Array.isArray(i) ? (i.splice(e, 1), i.push(n)) : r[e] = [ n ];
    },
    off: function(e, t) {
        var a = r[e];
        Array.isArray(a) && (r[e] = a.filter(function(r) {
            return r[0] != t;
        }));
    },
    emit: function(e, t) {
        var a = r[e];
        Array.isArray(a) && a.map(function(r) {
            var e = r[0];
            r[1].call(e, t);
        });
    }
};

exports.default = wx.$event;