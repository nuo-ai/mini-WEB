Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.viewUnreadCount = exports.viewSubscribes = exports.viewMessageDetail = exports.subscribeMessage = exports.sendMessage = exports.searchInbox = void 0;

var e = require("520A3F0785E1369C346C5700DE812695.js"), s = require("0C73FE8785E1369C6A15968031A12695.js");

exports.searchInbox = (0, e.Builder)(function(e) {
    return (0, s.MessageResource)().get("/receive", e);
}), exports.sendMessage = (0, e.Builder)(function(e) {
    return e.topic_id ? (0, s.TopicResource)().post("/message", e) : (0, s.MessageResource)().post("", e);
}), exports.viewMessageDetail = (0, e.Builder)(function(e) {
    return (0, s.MessageResource)().get("/detail", {
        id: e
    });
}), exports.viewSubscribes = (0, e.Builder)(function() {
    return (0, s.MessageResource)().get("/subscribe");
}), exports.subscribeMessage = (0, e.Builder)(function() {
    return (0, s.UserResource)().get("/subscribe");
}), exports.viewUnreadCount = (0, e.Builder)(function() {
    return (0, s.MessageResource)().get("/new");
});