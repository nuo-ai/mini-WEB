Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.viewTopicDetail = exports.updateTopicInfo = exports.searchTopicTags = exports.searchTopicList = exports.removeTopic = exports.askTopicContact = void 0;

var e = require("520A3F0785E1369C346C5700DE812695.js"), o = require("0C73FE8785E1369C6A15968031A12695.js");

exports.searchTopicList = (0, e.Builder)(function(e) {
    return (0, o.SearchResource)().get("/topic", e);
}), exports.viewTopicDetail = (0, e.Builder)(function(e) {
    return (0, o.TopicResource)().get("/detail", {
        id: e
    });
}), exports.searchTopicTags = (0, e.Builder)(function(e) {
    return (0, o.TopicResource)().get("/searchtag", {
        keyword: e
    });
}), exports.updateTopicInfo = (0, e.Builder)(function(e) {
    return e.id ? (0, o.TopicResource)().put("", e) : (0, o.TopicResource)().post("", e);
}), exports.removeTopic = (0, e.Builder)(function(e) {
    return (0, o.TopicResource)().delete("", {
        id: e
    });
}), exports.askTopicContact = (0, e.Builder)(function(e) {
    return (0, o.TopicResource)().post("/askcontact", {
        topic_id: e
    });
});