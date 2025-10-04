Page({
    data: {
        title: "",
        webiste: ""
    },
    onLoad: function(t) {
        this.setData({
            title: t.title,
            website: "https://clause.zuber.im/".concat(t.website)
        });
    }
});