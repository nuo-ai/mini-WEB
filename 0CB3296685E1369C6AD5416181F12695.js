Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.viewMyHouses = exports.viewHouseInfo = exports.viewHouseDetail = exports.viewDailyList = exports.viewCollectList = exports.updateHouseState = exports.updateHouseInfo = exports.updateFollowState = exports.searchHouseList = exports.removeHouse = exports.askHouseContact = void 0;

var e = require("./520A3F0785E1369C346C5700DE812695.js"), o = require("./0C73FE8785E1369C6A15968031A12695.js");

exports.searchHouseList = (0, e.Builder)(function(e) {
    return (0, o.SearchResource)().get("/house", e);
}), exports.viewHouseDetail = (0, e.Builder)(function(e) {
    return (0, o.ViewResource)().get("/house", e);
}), exports.updateFollowState = (0, e.Builder)(function(e) {
    return e.is_follow ? (0, o.FollowResource)().delete(1 == e.house_type ? "/house" : "/sale", 1 == e.house_type ? {
        house_id: e.id
    } : {
        sale_id: e.id
    }) : (0, o.FollowResource)().post(1 == e.house_type ? "/house" : "/sale", 1 == e.house_type ? {
        house_id: e.id
    } : {
        sale_id: e.id
    });
}), exports.viewCollectList = (0, e.Builder)(function(e) {
    return (0, o.FollowResource)().get("/house", e);
}), exports.updateHouseInfo = (0, e.Builder)(function(e) {
    return e.id ? (0, o.HouseResource)().put("", e) : (0, o.HouseResource)().post("", e);
}), exports.removeHouse = (0, e.Builder)(function(e) {
    return (0, o.HouseResource)().delete("", {
        id: e
    });
}), exports.viewMyHouses = (0, e.Builder)(function(e) {
    return (0, o.HouseResource)().get("/my", e);
}), exports.viewHouseInfo = (0, e.Builder)(function(e) {
    return (0, o.HouseResource)().get("/detail", {
        id: e
    });
}), exports.updateHouseState = (0, e.Builder)(function(e) {
    return (0, o.HouseResource)().put("/state", e);
}), exports.askHouseContact = (0, e.Builder)(function(e) {
    return (0, o.ViewResource)("v2").post("/askcontact", 2 == e.type ? {
        sale_id: e.id
    } : {
        house_id: e.id
    });
}), exports.viewDailyList = (0, e.Builder)(function(e) {
    return (0, o.ViewResource)().get("/daily", e);
});