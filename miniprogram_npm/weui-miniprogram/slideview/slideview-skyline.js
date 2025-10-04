module.exports = require("../_commons/0.js")([ {
    ids: [ 20 ],
    modules: {
        145: function(t, a) {
            Component({
                options: {
                    multipleSlots: !0,
                    virtualHost: !0
                },
                properties: {
                    extClass: {
                        type: String,
                        value: ""
                    },
                    buttons: {
                        type: Array,
                        value: [],
                        observer: function() {
                            this.addClassNameForButton();
                        }
                    },
                    disable: {
                        type: Boolean,
                        value: !1
                    },
                    icon: {
                        type: Boolean,
                        value: !1
                    },
                    show: {
                        type: Boolean,
                        value: !1,
                        observer: function() {
                            this.st && (this.data.show ? this.showButtons() : this.hideButtons());
                        }
                    },
                    duration: {
                        type: Number,
                        value: 350
                    },
                    throttle: {
                        type: Number,
                        value: 40
                    },
                    rebounce: {
                        type: Number,
                        value: 0
                    }
                },
                lifetimes: {
                    ready: function() {
                        this.addClassNameForButton(), this.st = {
                            movex: wx.worklet.shared(0),
                            max: wx.worklet.shared(0),
                            startX: wx.worklet.shared(0),
                            startY: wx.worklet.shared(0),
                            out: wx.worklet.shared(this.data.show),
                            isMoving: wx.worklet.shared(!1),
                            firstAngle: wx.worklet.shared(0),
                            buttons: wx.worklet.shared([])
                        }, this.initAnimate();
                    }
                },
                methods: {
                    addClassNameForButton: function() {
                        var t = this.data, a = t.buttons, e = t.icon;
                        a.forEach(function(t) {
                            e ? t.className = "" : "warn" === t.type ? t.className = "weui-slideview__btn-group_warn" : t.className = "weui-slideview__btn-group_default";
                        }), this.setData({
                            buttons: a
                        });
                    },
                    buttonTap: function(t) {
                        this.hideButtons();
                        var a = t.currentTarget.dataset.index;
                        this.triggerEvent("buttontap", {
                            index: a,
                            data: this.data.buttons[a].data
                        }, {});
                    },
                    transitionEnd: function() {},
                    showButtons: function() {
                        if (!this.data.disable) {
                            var t = this.st, a = t.movex, e = t.max, s = t.out;
                            s.value || (s.value = !0, a.value = this.data.duration ? wx.worklet.timing(e.value, {
                                duration: this.data.duration
                            }, function() {}) : e.value, this.triggerEvent("show", {}, {}));
                        }
                    },
                    hideButtons: function() {
                        if (!this.data.disable) {
                            var t = this.st, a = t.movex, e = t.out;
                            e.value && (e.value = !1, a.value = this.data.duration ? wx.worklet.timing(0, {
                                duration: this.data.duration
                            }, function() {}) : 0, this.triggerEvent("hide", {}, {}));
                        }
                    },
                    initAnimate: function() {
                        var t, a = this;
                        this.applyAnimatedStyle(".weui-slideview__left", ((t = function() {
                            var t = a.st.movex;
                            return {
                                transform: "translateX(".concat(-t.value, "px)")
                            };
                        })._closure = {
                            t: {
                                st: {
                                    movex: a.st.movex
                                }
                            }
                        }, t.asString = 'function _f(){const{t}=jsThis._closure;{var a=t.st.movex;return{transform:"translateX(".concat(-a.value,"px)")};}}', 
                        t.__workletHash = 0xde1b01abb63, t.__location = "miniprogram_npm/weui-miniprogram/slideview/slideview-skyline.js (1:1886)", 
                        t.__worklet = !0, t)), this.createSelectorQuery().selectAll(".btn").boundingClientRect(function(t) {
                            for (var e = 0, s = [], i = t.length - 1; i >= 0; i--) e += t[i].width, s[i] = e;
                            a.st.buttons.value = s, a.st.max.value = e, a.data.show && (a.st.movex.value = e);
                            for (var o = function(t) {
                                a.applyAnimatedStyle(".btn-".concat(t), function() {
                                    var e = function() {
                                        var e = a.st, s = e.movex, i = e.max, o = e.buttons.value[t], n = s.value * o / i.value;
                                        return {
                                            transform: "translateX(".concat(-n, "px)")
                                        };
                                    };
                                    return e._closure = {
                                        t: {
                                            st: a.st
                                        },
                                        a: t
                                    }, e.asString = 'function _f(){const{t,a}=jsThis._closure;{var e=t.st,s=e.movex,i=e.max,o=e.buttons.value[a],n=s.value*o/i.value;return{transform:"translateX(".concat(-n,"px)")};}}', 
                                    e.__workletHash = 3814849315837, e.__location = "miniprogram_npm/weui-miniprogram/slideview/slideview-skyline.js (1:2253)", 
                                    e.__worklet = !0, e;
                                }());
                            }, n = t.length - 1; n >= 0; n--) o(n);
                        }).exec();
                    },
                    touchstart: function(t) {
                        if (!this.data.disable) {
                            var a = this.st, e = a.startX, s = a.startY, i = a.firstAngle;
                            e.value = t.touches[0].pageX, s.value = t.touches[0].pageY, i.value = 0;
                        }
                    },
                    _touchstart_worklet_factory_: function() {
                        var t, a = this;
                        return (t = function(t) {
                            if (!a.data.disable) {
                                var e = a.st, s = e.startX, i = e.startY, o = e.firstAngle;
                                s.value = t.touches[0].pageX, i.value = t.touches[0].pageY, o.value = 0;
                            }
                        })._closure = {
                            _this: {
                                data: {
                                    disable: a.data.disable
                                },
                                st: a.st
                            }
                        }, t.asString = "function _f(t){const{_this}=jsThis._closure;{if(!_this.data.disable){var a=_this.st,e=a.startX,s=a.startY,i=a.firstAngle;e.value=t.touches[0].pageX,s.value=t.touches[0].pageY,i.value=0;}}}", 
                        t.__workletHash = 0xe3505228aba, t.__location = "miniprogram_npm/weui-miniprogram/slideview/slideview-skyline.js", 
                        t.__worklet = !0, t;
                    },
                    touchmove: function(t) {
                        if (!this.data.disable) {
                            var a = this.st, e = a.startX, s = a.startY, i = a.firstAngle, o = a.isMoving, n = a.movex, u = a.max, r = a.out, l = t.touches[0].pageX - e.value, h = t.touches[0].pageY - s.value;
                            if (0 === i.value && (i.value = Math.abs(l) - Math.abs(h)), !(i.value < 0)) return o.value = !0, 
                            r.value ? n.value = Math.max(0, Math.min(u.value - l, u.value)) : n.value = Math.max(0, Math.min(-l, u.value)), 
                            !1;
                        }
                    },
                    _touchmove_worklet_factory_: function() {
                        var t, a = this;
                        return (t = function(t) {
                            if (!a.data.disable) {
                                var e = a.st, s = e.startX, i = e.startY, o = e.firstAngle, n = e.isMoving, u = e.movex, r = e.max, l = e.out, h = t.touches[0].pageX - s.value, v = t.touches[0].pageY - i.value;
                                if (0 === o.value && (o.value = Math.abs(h) - Math.abs(v)), !(o.value < 0)) return n.value = !0, 
                                l.value ? u.value = Math.max(0, Math.min(r.value - h, r.value)) : u.value = Math.max(0, Math.min(-h, r.value)), 
                                !1;
                            }
                        })._closure = {
                            _this2: {
                                data: {
                                    disable: a.data.disable
                                },
                                st: a.st
                            }
                        }, t.asString = "function _f(t){const{_this2}=jsThis._closure;{if(!_this2.data.disable){var a=_this2.st,e=a.startX,s=a.startY,i=a.firstAngle,o=a.isMoving,n=a.movex,u=a.max,r=a.out,l=t.touches[0].pageX-e.value,h=t.touches[0].pageY-s.value;if(0===i.value&&(i.value=Math.abs(l)-Math.abs(h)),!(i.value<0))return o.value=!0,r.value?n.value=Math.max(0,Math.min(u.value-l,u.value)):n.value=Math.max(0,Math.min(-l,u.value)),!1;}}}", 
                        t.__workletHash = 0xcc747ed86f2, t.__location = "miniprogram_npm/weui-miniprogram/slideview/slideview-skyline.js", 
                        t.__worklet = !0, t;
                    },
                    touchend: function(t) {
                        if (!this.data.disable) {
                            var a = this.data.throttle, e = this.st, s = e.startX, i = e.isMoving;
                            if (i.value) {
                                var o = t.changedTouches[0].pageX - s.value;
                                i.value = !1, Math.abs(o) < a || o > 0 ? this.hideButtons() : this.showButtons();
                            }
                        }
                    },
                    _touchend_worklet_factory_: function() {
                        var t, a = this, e = this._hideButtons_worklet_factory_(), s = this._showButtons_worklet_factory_();
                        return (t = function(t) {
                            if (!a.data.disable) {
                                var i = a.data.throttle, o = a.st, n = o.startX, u = o.isMoving;
                                if (u.value) {
                                    var r = t.changedTouches[0].pageX - n.value;
                                    u.value = !1, Math.abs(r) < i || r > 0 ? e() : s();
                                }
                            }
                        })._closure = {
                            _this3: {
                                data: {
                                    disable: a.data.disable,
                                    throttle: a.data.throttle
                                },
                                st: a.st
                            },
                            hideButtons: e,
                            showButtons: s
                        }, t.asString = "function _f(t){const{_this3,hideButtons,showButtons}=jsThis._closure;{if(!_this3.data.disable){var a=_this3.data.throttle,e=_this3.st,s=e.startX,i=e.isMoving;if(i.value){var o=t.changedTouches[0].pageX-s.value;i.value=!1,Math.abs(o)<a||o>0?hideButtons():showButtons();}}}}", 
                        t.__workletHash = 0xcc27675aed1, t.__location = "miniprogram_npm/weui-miniprogram/slideview/slideview-skyline.js", 
                        t.__worklet = !0, t;
                    }
                }
            });
        },
        15: function(t, a, e) {
            t.exports = e(145);
        }
    },
    entries: [ [ 15, 0 ] ]
} ]);