Component({
    properties: {
        apartment: {
            type: Object,
            value: {}
        }
    },
    data: {
        tags: []
    },
    observers: {
        "apartment.tags": function() {
            this.data.apartment && this.setData({
                tags: this.data.apartment.tags.split(",")
            });
        }
    },
    methods: {
        view: function(t) {
            var a = t.currentTarget.dataset.index;
            this.browse(a, this.data.photos);
        },
        map: function() {
            wx.openLocation({
                latitude: this.data.apartment.latitude,
                longitude: this.data.apartment.longitude,
                name: this.data.apartment.title,
                address: this.data.apartment.road,
                scale: 18
            });
        }
    }
});