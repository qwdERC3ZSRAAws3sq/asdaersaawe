! function(e) {
    var t = {};

    function n(i) {
        if (t[i]) return t[i].exports;
        var r = t[i] = {
            i: i,
            l: !1,
            exports: {}
        };
        return e[i].call(r.exports, r, r.exports, n), r.l = !0, r.exports
    }
    n.m = e, n.c = t, n.d = function(e, t, i) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: i
        })
    }, n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, n.t = function(e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var i = Object.create(null);
        if (n.r(i), Object.defineProperty(i, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var r in e) n.d(i, r, function(t) {
                return e[t]
            }.bind(null, r));
        return i
    }, n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 65)
}([function(e, t, n) {
    var i = t.global = n(61),
        r = t.hasBuffer = i && !!i.isBuffer,
        o = t.hasArrayBuffer = "undefined" != typeof ArrayBuffer,
        s = t.isArray = n(5);
    t.isArrayBuffer = o ? function(e) {
        return e instanceof ArrayBuffer || p(e)
    } : m;
    var a = t.isBuffer = r ? i.isBuffer : m,
        l = t.isView = o ? ArrayBuffer.isView || y("ArrayBuffer", "buffer") : m;
    t.alloc = d, t.concat = function(e, n) {
        n || (n = 0, Array.prototype.forEach.call(e, function(e) {
            n += e.length
        }));
        var i = this !== t && this || e[0],
            r = d.call(i, n),
            o = 0;
        return Array.prototype.forEach.call(e, function(e) {
            o += f.copy.call(e, r, o)
        }), r
    }, t.from = function(e) {
        return "string" == typeof e ? function(e) {
            var t = 3 * e.length,
                n = d.call(this, t),
                i = f.write.call(n, e);
            return t !== i && (n = f.slice.call(n, 0, i)), n
        }.call(this, e) : g(this).from(e)
    };
    var h = t.Array = n(58),
        c = t.Buffer = n(57),
        u = t.Uint8Array = n(56),
        f = t.prototype = n(4);

    function d(e) {
        return g(this).alloc(e)
    }
    var p = y("ArrayBuffer");

    function g(e) {
        return a(e) ? c : l(e) ? u : s(e) ? h : r ? c : o ? u : h
    }

    function m() {
        return !1
    }

    function y(e, t) {
        return e = "[object " + e + "]",
            function(n) {
                return null != n && {}.toString.call(t ? n[t] : n) === e
            }
    }
}, function(e, t, n) {
    var i = n(5);
    t.createCodec = a, t.install = function(e) {
        for (var t in e) o.prototype[t] = s(o.prototype[t], e[t])
    }, t.filter = function(e) {
        return i(e) ? function(e) {
            return e = e.slice(),
                function(n) {
                    return e.reduce(t, n)
                };

            function t(e, t) {
                return t(e)
            }
        }(e) : e
    };
    var r = n(0);

    function o(e) {
        if (!(this instanceof o)) return new o(e);
        this.options = e, this.init()
    }

    function s(e, t) {
        return e && t ? function() {
            return e.apply(this, arguments), t.apply(this, arguments)
        } : e || t
    }

    function a(e) {
        return new o(e)
    }
    o.prototype.init = function() {
        var e = this.options;
        return e && e.uint8array && (this.bufferish = r.Uint8Array), this
    }, t.preset = a({
        preset: !0
    })
}, function(e, t, n) {
    var i = n(7).ExtBuffer,
        r = n(51),
        o = n(12).readUint8,
        s = n(50),
        a = n(1);

    function l() {
        var e = this.options;
        return this.decode = function(e) {
            var t = s.getReadToken(e);
            return function(e) {
                var n = o(e),
                    i = t[n];
                if (!i) throw new Error("Invalid type: " + (n ? "0x" + n.toString(16) : n));
                return i(e)
            }
        }(e), e && e.preset && r.setExtUnpackers(this), this
    }
    a.install({
        addExtUnpacker: function(e, t) {
            (this.extUnpackers || (this.extUnpackers = []))[e] = a.filter(t)
        },
        getExtUnpacker: function(e) {
            return (this.extUnpackers || (this.extUnpackers = []))[e] || function(t) {
                return new i(t, e)
            }
        },
        init: l
    }), t.preset = l.call(a.preset)
}, function(e, t, n) {
    (function(e) {
        ! function(t) {
            var n, i = "undefined",
                r = i !== typeof e && e,
                o = i !== typeof Uint8Array && Uint8Array,
                s = i !== typeof ArrayBuffer && ArrayBuffer,
                a = [0, 0, 0, 0, 0, 0, 0, 0],
                l = Array.isArray || function(e) {
                    return !!e && "[object Array]" == Object.prototype.toString.call(e)
                },
                h = 4294967296,
                c = 16777216;

            function u(e, l, u) {
                var k = l ? 0 : 4,
                    S = l ? 4 : 0,
                    I = l ? 0 : 3,
                    T = l ? 1 : 2,
                    E = l ? 2 : 1,
                    M = l ? 3 : 0,
                    A = l ? v : x,
                    P = l ? w : b,
                    B = R.prototype,
                    C = "is" + e,
                    O = "_" + C;
                return B.buffer = void 0, B.offset = 0, B[O] = !0, B.toNumber = D, B.toString = function(e) {
                    var t = this.buffer,
                        n = this.offset,
                        i = _(t, n + k),
                        r = _(t, n + S),
                        o = "",
                        s = !u && 2147483648 & i;
                    for (s && (i = ~i, r = h - r), e = e || 10;;) {
                        var a = i % e * h + r;
                        if (i = Math.floor(i / e), r = Math.floor(a / e), o = (a % e).toString(e) + o, !i && !r) break
                    }
                    return s && (o = "-" + o), o
                }, B.toJSON = D, B.toArray = f, r && (B.toBuffer = d), o && (B.toArrayBuffer = p), R[C] = function(e) {
                    return !(!e || !e[O])
                }, t[e] = R, R;

                function R(e, t, r, l) {
                    return this instanceof R ? function(e, t, r, l, c) {
                        if (o && s && (t instanceof s && (t = new o(t)), l instanceof s && (l = new o(l))), t || r || l || n) {
                            if (!g(t, r)) c = r, l = t, r = 0, t = new(n || Array)(8);
                            e.buffer = t, e.offset = r |= 0, i !== typeof l && ("string" == typeof l ? function(e, t, n, i) {
                                var r = 0,
                                    o = n.length,
                                    s = 0,
                                    a = 0;
                                "-" === n[0] && r++;
                                for (var l = r; r < o;) {
                                    var c = parseInt(n[r++], i);
                                    if (!(c >= 0)) break;
                                    a = a * i + c, s = s * i + Math.floor(a / h), a %= h
                                }
                                l && (s = ~s, a ? a = h - a : s++), U(e, t + k, s), U(e, t + S, a)
                            }(t, r, l, c || 10) : g(l, c) ? m(t, r, l, c) : "number" == typeof c ? (U(t, r + k, l), U(t, r + S, c)) : l > 0 ? A(t, r, l) : l < 0 ? P(t, r, l) : m(t, r, a, 0))
                        } else e.buffer = y(a, 0)
                    }(this, e, t, r, l) : new R(e, t, r, l)
                }

                function D() {
                    var e = this.buffer,
                        t = this.offset,
                        n = _(e, t + k),
                        i = _(e, t + S);
                    return u || (n |= 0), n ? n * h + i : i
                }

                function U(e, t, n) {
                    e[t + M] = 255 & n, n >>= 8, e[t + E] = 255 & n, n >>= 8, e[t + T] = 255 & n, n >>= 8, e[t + I] = 255 & n
                }

                function _(e, t) {
                    return e[t + I] * c + (e[t + T] << 16) + (e[t + E] << 8) + e[t + M]
                }
            }

            function f(e) {
                var t = this.buffer,
                    i = this.offset;
                return n = null, !1 !== e && 0 === i && 8 === t.length && l(t) ? t : y(t, i)
            }

            function d(t) {
                var i = this.buffer,
                    o = this.offset;
                if (n = r, !1 !== t && 0 === o && 8 === i.length && e.isBuffer(i)) return i;
                var s = new r(8);
                return m(s, 0, i, o), s
            }

            function p(e) {
                var t = this.buffer,
                    i = this.offset,
                    r = t.buffer;
                if (n = o, !1 !== e && 0 === i && r instanceof s && 8 === r.byteLength) return r;
                var a = new o(8);
                return m(a, 0, t, i), a.buffer
            }

            function g(e, t) {
                var n = e && e.length;
                return t |= 0, n && t + 8 <= n && "string" != typeof e[t]
            }

            function m(e, t, n, i) {
                t |= 0, i |= 0;
                for (var r = 0; r < 8; r++) e[t++] = 255 & n[i++]
            }

            function y(e, t) {
                return Array.prototype.slice.call(e, t, t + 8)
            }

            function v(e, t, n) {
                for (var i = t + 8; i > t;) e[--i] = 255 & n, n /= 256
            }

            function w(e, t, n) {
                var i = t + 8;
                for (n++; i > t;) e[--i] = 255 & -n ^ 255, n /= 256
            }

            function x(e, t, n) {
                for (var i = t + 8; t < i;) e[t++] = 255 & n, n /= 256
            }

            function b(e, t, n) {
                var i = t + 8;
                for (n++; t < i;) e[t++] = 255 & -n ^ 255, n /= 256
            }
            u("Uint64BE", !0, !0), u("Int64BE", !0, !1), u("Uint64LE", !1, !0), u("Int64LE", !1, !1)
        }("object" == typeof t && "string" != typeof t.nodeName ? t : this || {})
    }).call(this, n(18).Buffer)
}, function(e, t, n) {
    var i = n(55);
    t.copy = l, t.slice = h, t.toString = function(e, t, n) {
        return (!s && r.isBuffer(this) ? this.toString : i.toString).apply(this, arguments)
    }, t.write = function(e) {
        return function() {
            return (this[e] || i[e]).apply(this, arguments)
        }
    }("write");
    var r = n(0),
        o = r.global,
        s = r.hasBuffer && "TYPED_ARRAY_SUPPORT" in o,
        a = s && !o.TYPED_ARRAY_SUPPORT;

    function l(e, t, n, o) {
        var s = r.isBuffer(this),
            l = r.isBuffer(e);
        if (s && l) return this.copy(e, t, n, o);
        if (a || s || l || !r.isView(this) || !r.isView(e)) return i.copy.call(this, e, t, n, o);
        var c = n || null != o ? h.call(this, n, o) : this;
        return e.set(c, t), c.length
    }

    function h(e, t) {
        var n = this.slice || !a && this.subarray;
        if (n) return n.call(this, e, t);
        var i = r.alloc.call(this, t - e);
        return l.call(this, i, 0, e, t), i
    }
}, function(e, t) {
    var n = {}.toString;
    e.exports = Array.isArray || function(e) {
        return "[object Array]" == n.call(e)
    }
}, function(e, t) {
    t.read = function(e, t, n, i, r) {
        var o, s, a = 8 * r - i - 1,
            l = (1 << a) - 1,
            h = l >> 1,
            c = -7,
            u = n ? r - 1 : 0,
            f = n ? -1 : 1,
            d = e[t + u];
        for (u += f, o = d & (1 << -c) - 1, d >>= -c, c += a; c > 0; o = 256 * o + e[t + u], u += f, c -= 8);
        for (s = o & (1 << -c) - 1, o >>= -c, c += i; c > 0; s = 256 * s + e[t + u], u += f, c -= 8);
        if (0 === o) o = 1 - h;
        else {
            if (o === l) return s ? NaN : 1 / 0 * (d ? -1 : 1);
            s += Math.pow(2, i), o -= h
        }
        return (d ? -1 : 1) * s * Math.pow(2, o - i)
    }, t.write = function(e, t, n, i, r, o) {
        var s, a, l, h = 8 * o - r - 1,
            c = (1 << h) - 1,
            u = c >> 1,
            f = 23 === r ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
            d = i ? 0 : o - 1,
            p = i ? 1 : -1,
            g = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
        for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (a = isNaN(t) ? 1 : 0, s = c) : (s = Math.floor(Math.log(t) / Math.LN2), t * (l = Math.pow(2, -s)) < 1 && (s--, l *= 2), (t += s + u >= 1 ? f / l : f * Math.pow(2, 1 - u)) * l >= 2 && (s++, l /= 2), s + u >= c ? (a = 0, s = c) : s + u >= 1 ? (a = (t * l - 1) * Math.pow(2, r), s += u) : (a = t * Math.pow(2, u - 1) * Math.pow(2, r), s = 0)); r >= 8; e[n + d] = 255 & a, d += p, a /= 256, r -= 8);
        for (s = s << r | a, h += r; h > 0; e[n + d] = 255 & s, d += p, s /= 256, h -= 8);
        e[n + d - p] |= 128 * g
    }
}, function(e, t, n) {
    t.ExtBuffer = function e(t, n) {
        if (!(this instanceof e)) return new e(t, n);
        this.buffer = i.from(t), this.type = n
    };
    var i = n(0)
}, function(e, t, n) {
    var i = n(7).ExtBuffer,
        r = n(54),
        o = n(53),
        s = n(1);

    function a() {
        var e = this.options;
        return this.encode = function(e) {
            var t = o.getWriteType(e);
            return function(e, n) {
                var i = t[typeof n];
                if (!i) throw new Error('Unsupported type "' + typeof n + '": ' + n);
                i(e, n)
            }
        }(e), e && e.preset && r.setExtPackers(this), this
    }
    s.install({
        addExtPacker: function(e, t, n) {
            n = s.filter(n);
            var r = t.name;
            r && "Object" !== r ? (this.extPackers || (this.extPackers = {}))[r] = o : (this.extEncoderList || (this.extEncoderList = [])).unshift([t, o]);

            function o(t) {
                return n && (t = n(t)), new i(t, e)
            }
        },
        getExtPacker: function(e) {
            var t = this.extPackers || (this.extPackers = {}),
                n = e.constructor,
                i = n && n.name && t[n.name];
            if (i) return i;
            for (var r = this.extEncoderList || (this.extEncoderList = []), o = r.length, s = 0; s < o; s++) {
                var a = r[s];
                if (n === a[0]) return a[1]
            }
        },
        init: a
    }), t.preset = a.call(s.preset)
}, function(e, t) {
    var n = {
        utf8: {
            stringToBytes: function(e) {
                return n.bin.stringToBytes(unescape(encodeURIComponent(e)))
            },
            bytesToString: function(e) {
                return decodeURIComponent(escape(n.bin.bytesToString(e)))
            }
        },
        bin: {
            stringToBytes: function(e) {
                for (var t = [], n = 0; n < e.length; n++) t.push(255 & e.charCodeAt(n));
                return t
            },
            bytesToString: function(e) {
                for (var t = [], n = 0; n < e.length; n++) t.push(String.fromCharCode(e[n]));
                return t.join("")
            }
        }
    };
    e.exports = n
}, function(e, t, n) {
    (function(t) {
        e.exports.maxScreenWidth = 1920, e.exports.maxScreenHeight = 1080, e.exports.serverUpdateRate = 9, e.exports.maxPlayers = t && -1 != t.argv.indexOf("--largeserver") ? 80 : 40, e.exports.maxPlayersHard = e.exports.maxPlayers + 10, e.exports.collisionDepth = 6, e.exports.minimapRate = 3e3, e.exports.colGrid = 10, e.exports.clientSendRate = 5, e.exports.healthBarWidth = 50, e.exports.healthBarPad = 4.5, e.exports.iconPadding = 15, e.exports.iconPad = .9, e.exports.deathFadeout = 3e3, e.exports.crownIconScale = 60, e.exports.crownPad = 35, e.exports.chatCountdown = 3e3, e.exports.chatCooldown = 500, e.exports.inSandbox = t && "mm_exp" === t.env.VULTR_SCHEME, e.exports.maxAge = 100, e.exports.gatherAngle = Math.PI / 2.6, e.exports.gatherWiggle = 10, e.exports.hitReturnRatio = .25, e.exports.hitAngle = Math.PI / 2, e.exports.playerScale = 35, e.exports.playerSpeed = .0016, e.exports.playerDecel = .993, e.exports.nameY = 34, e.exports.skinColors = ["#bf8f54", "#cbb091", "#896c4b", "#fadadc", "#ececec", "#c37373"], e.exports.animalCount = 7, e.exports.aiTurnRandom = .06, e.exports.cowNames = ["Sid", "Steph", "Bmoe", "Romn", "Jononthecool", "Fiona", "Vince", "Nathan", "Nick", "Flappy", "Ronald", "Otis", "Pepe", "Mc Donald", "Theo", "Fabz", "Oliver", "Jeff", "Jimmy", "Helena", "Reaper", "Ben", "Alan", "Naomi", "XYZ", "Clever", "Jeremy", "Mike", "Destined", "Stallion", "Allison", "Meaty", "Sophia", "Vaja", "Joey", "Pendy", "Murdoch", "Theo", "Jared", "July", "Sonia", "Mel", "Dexter", "Quinn", "Milky"], e.exports.shieldAngle = Math.PI / 3, e.exports.weaponVariants = [{
            id: 0,
            src: "",
            xp: 0,
            val: 1
        }, {
            id: 1,
            src: "_g",
            xp: 3e3,
            val: 1.1
        }, {
            id: 2,
            src: "_d",
            xp: 7e3,
            val: 1.18
        }], e.exports.fetchVariant = function(t) {
            for (var n = t.weaponXP[t.weaponIndex] || 0, i = e.exports.weaponVariants.length - 1; i >= 0; --i)
                if (n >= e.exports.weaponVariants[i].xp) return e.exports.weaponVariants[i]
        }, e.exports.resourceTypes = ["wood", "food", "stone", "points"], e.exports.areaCount = 7, e.exports.treesPerArea = 9, e.exports.bushesPerArea = 3, e.exports.totalRocks = 32, e.exports.goldOres = 7, e.exports.riverWidth = 724, e.exports.riverPadding = 114, e.exports.waterCurrent = .0011, e.exports.waveSpeed = 1e-4, e.exports.waveMax = 1.3, e.exports.treeScales = [150, 160, 165, 175], e.exports.bushScales = [80, 85, 95], e.exports.rockScales = [80, 85, 90], e.exports.snowBiomeTop = 2400, e.exports.snowSpeed = .75, e.exports.maxNameLength = 15, e.exports.mapScale = 14400, e.exports.mapPingScale = 40, e.exports.mapPingTime = 2200
    }).call(this, n(45))
}, function(e, t, n) {
    ! function(t) {
        e.exports = t;
        var n = "listeners",
            i = {
                on: function(e, t) {
                    return s(this, e).push(t), this
                },
                once: function(e, t) {
                    var n = this;
                    return i.originalListener = t, s(n, e).push(i), n;

                    function i() {
                        o.call(n, e, i), t.apply(this, arguments)
                    }
                },
                off: o,
                emit: function(e, t) {
                    var n = this,
                        i = s(n, e, !0);
                    if (!i) return !1;
                    var r = arguments.length;
                    if (1 === r) i.forEach(function(e) {
                        e.call(n)
                    });
                    else if (2 === r) i.forEach(function(e) {
                        e.call(n, t)
                    });
                    else {
                        var o = Array.prototype.slice.call(arguments, 1);
                        i.forEach(function(e) {
                            e.apply(n, o)
                        })
                    }
                    return !!i.length
                }
            };

        function r(e) {
            for (var t in i) e[t] = i[t];
            return e
        }

        function o(e, t) {
            var i;
            if (arguments.length) {
                if (t) {
                    if (i = s(this, e, !0)) {
                        if (!(i = i.filter(function(e) {
                                return e !== t && e.originalListener !== t
                            })).length) return o.call(this, e);
                        this[n][e] = i
                    }
                } else if ((i = this[n]) && (delete i[e], !Object.keys(i).length)) return o.call(this)
            } else delete this[n];
            return this
        }

        function s(e, t, i) {
            if (!i || e[n]) {
                var r = e[n] || (e[n] = {});
                return r[t] || (r[t] = [])
            }
        }
        r(t.prototype), t.mixin = r
    }(
        /**
         * event-lite.js - Light-weight EventEmitter (less than 1KB when gzipped)
         *
         * @copyright Yusuke Kawasaki
         * @license MIT
         * @constructor
         * @see https://github.com/kawanet/event-lite
         * @see http://kawanet.github.io/event-lite/EventLite.html
         * @example
         * var EventLite = require("event-lite");
         *
         * function MyClass() {...}             // your class
         *
         * EventLite.mixin(MyClass.prototype);  // import event methods
         *
         * var obj = new MyClass();
         * obj.on("foo", function() {...});     // add event listener
         * obj.once("bar", function() {...});   // add one-time event listener
         * obj.emit("foo");                     // dispatch event
         * obj.emit("bar");                     // dispatch another event
         * obj.off("foo");                      // remove event listener
         */
        function e() {
            if (!(this instanceof e)) return new e
        })
}, function(e, t, n) {
    var i = n(6),
        r = n(3),
        o = r.Uint64BE,
        s = r.Int64BE;
    t.getReadFormat = function(e) {
        var t = a.hasArrayBuffer && e && e.binarraybuffer,
            n = e && e.int64;
        return {
            map: h && e && e.usemap ? f : u,
            array: d,
            str: p,
            bin: t ? m : g,
            ext: y,
            uint8: v,
            uint16: x,
            uint32: k,
            uint64: I(8, n ? M : T),
            int8: w,
            int16: b,
            int32: S,
            int64: I(8, n ? A : E),
            float32: I(4, P),
            float64: I(8, B)
        }
    }, t.readUint8 = v;
    var a = n(0),
        l = n(4),
        h = "undefined" != typeof Map,
        c = !0;

    function u(e, t) {
        var n, i = {},
            r = new Array(t),
            o = new Array(t),
            s = e.codec.decode;
        for (n = 0; n < t; n++) r[n] = s(e), o[n] = s(e);
        for (n = 0; n < t; n++) i[r[n]] = o[n];
        return i
    }

    function f(e, t) {
        var n, i = new Map,
            r = new Array(t),
            o = new Array(t),
            s = e.codec.decode;
        for (n = 0; n < t; n++) r[n] = s(e), o[n] = s(e);
        for (n = 0; n < t; n++) i.set(r[n], o[n]);
        return i
    }

    function d(e, t) {
        for (var n = new Array(t), i = e.codec.decode, r = 0; r < t; r++) n[r] = i(e);
        return n
    }

    function p(e, t) {
        var n = e.reserve(t),
            i = n + t;
        return l.toString.call(e.buffer, "utf-8", n, i)
    }

    function g(e, t) {
        var n = e.reserve(t),
            i = n + t,
            r = l.slice.call(e.buffer, n, i);
        return a.from(r)
    }

    function m(e, t) {
        var n = e.reserve(t),
            i = n + t,
            r = l.slice.call(e.buffer, n, i);
        return a.Uint8Array.from(r).buffer
    }

    function y(e, t) {
        var n = e.reserve(t + 1),
            i = e.buffer[n++],
            r = n + t,
            o = e.codec.getExtUnpacker(i);
        if (!o) throw new Error("Invalid ext type: " + (i ? "0x" + i.toString(16) : i));
        return o(l.slice.call(e.buffer, n, r))
    }

    function v(e) {
        var t = e.reserve(1);
        return e.buffer[t]
    }

    function w(e) {
        var t = e.reserve(1),
            n = e.buffer[t];
        return 128 & n ? n - 256 : n
    }

    function x(e) {
        var t = e.reserve(2),
            n = e.buffer;
        return n[t++] << 8 | n[t]
    }

    function b(e) {
        var t = e.reserve(2),
            n = e.buffer,
            i = n[t++] << 8 | n[t];
        return 32768 & i ? i - 65536 : i
    }

    function k(e) {
        var t = e.reserve(4),
            n = e.buffer;
        return 16777216 * n[t++] + (n[t++] << 16) + (n[t++] << 8) + n[t]
    }

    function S(e) {
        var t = e.reserve(4),
            n = e.buffer;
        return n[t++] << 24 | n[t++] << 16 | n[t++] << 8 | n[t]
    }

    function I(e, t) {
        return function(n) {
            var i = n.reserve(e);
            return t.call(n.buffer, i, c)
        }
    }

    function T(e) {
        return new o(this, e).toNumber()
    }

    function E(e) {
        return new s(this, e).toNumber()
    }

    function M(e) {
        return new o(this, e)
    }

    function A(e) {
        return new s(this, e)
    }

    function P(e) {
        return i.read(this, e, !1, 23, 4)
    }

    function B(e) {
        return i.read(this, e, !1, 52, 8)
    }
}, function(e, t, n) {
    t.DecodeBuffer = r;
    var i = n(2).preset;

    function r(e) {
        if (!(this instanceof r)) return new r(e);
        if (e && (this.options = e, e.codec)) {
            var t = this.codec = e.codec;
            t.bufferish && (this.bufferish = t.bufferish)
        }
    }
    n(15).FlexDecoder.mixin(r.prototype), r.prototype.codec = i, r.prototype.fetch = function() {
        return this.codec.decode(this)
    }
}, function(e, t, n) {
    t.decode = function(e, t) {
        var n = new i(t);
        return n.write(e), n.read()
    };
    var i = n(13).DecodeBuffer
}, function(e, t, n) {
    t.FlexDecoder = o, t.FlexEncoder = s;
    var i = n(0),
        r = "BUFFER_SHORTAGE";

    function o() {
        if (!(this instanceof o)) return new o
    }

    function s() {
        if (!(this instanceof s)) return new s
    }

    function a() {
        throw new Error("method not implemented: write()")
    }

    function l() {
        throw new Error("method not implemented: fetch()")
    }

    function h() {
        return this.buffers && this.buffers.length ? (this.flush(), this.pull()) : this.fetch()
    }

    function c(e) {
        (this.buffers || (this.buffers = [])).push(e)
    }

    function u() {
        return (this.buffers || (this.buffers = [])).shift()
    }

    function f(e) {
        return function(t) {
            for (var n in e) t[n] = e[n];
            return t
        }
    }
    o.mixin = f({
        bufferish: i,
        write: function(e) {
            var t = this.offset ? i.prototype.slice.call(this.buffer, this.offset) : this.buffer;
            this.buffer = t ? e ? this.bufferish.concat([t, e]) : t : e, this.offset = 0
        },
        fetch: l,
        flush: function() {
            for (; this.offset < this.buffer.length;) {
                var e, t = this.offset;
                try {
                    e = this.fetch()
                } catch (e) {
                    if (e && e.message != r) throw e;
                    this.offset = t;
                    break
                }
                this.push(e)
            }
        },
        push: c,
        pull: u,
        read: h,
        reserve: function(e) {
            var t = this.offset,
                n = t + e;
            if (n > this.buffer.length) throw new Error(r);
            return this.offset = n, t
        },
        offset: 0
    }), o.mixin(o.prototype), s.mixin = f({
        bufferish: i,
        write: a,
        fetch: function() {
            var e = this.start;
            if (e < this.offset) {
                var t = this.start = this.offset;
                return i.prototype.slice.call(this.buffer, e, t)
            }
        },
        flush: function() {
            for (; this.start < this.offset;) {
                var e = this.fetch();
                e && this.push(e)
            }
        },
        push: c,
        pull: function() {
            var e = this.buffers || (this.buffers = []),
                t = e.length > 1 ? this.bufferish.concat(e) : e[0];
            return e.length = 0, t
        },
        read: h,
        reserve: function(e) {
            var t = 0 | e;
            if (this.buffer) {
                var n = this.buffer.length,
                    i = 0 | this.offset,
                    r = i + t;
                if (r < n) return this.offset = r, i;
                this.flush(), e = Math.max(e, Math.min(2 * n, this.maxBufferSize))
            }
            return e = Math.max(e, this.minBufferSize), this.buffer = this.bufferish.alloc(e), this.start = 0, this.offset = t, 0
        },
        send: function(e) {
            var t = e.length;
            if (t > this.minBufferSize) this.flush(), this.push(e);
            else {
                var n = this.reserve(t);
                i.prototype.copy.call(e, this.buffer, n)
            }
        },
        maxBufferSize: 65536,
        minBufferSize: 2048,
        offset: 0,
        start: 0
    }), s.mixin(s.prototype)
}, function(e, t) {
    for (var n = t.uint8 = new Array(256), i = 0; i <= 255; i++) n[i] = r(i);

    function r(e) {
        return function(t) {
            var n = t.reserve(1);
            t.buffer[n] = e
        }
    }
}, function(e, t) {
    var n;
    n = function() {
        return this
    }();
    try {
        n = n || Function("return this")() || (0, eval)("this")
    } catch (e) {
        "object" == typeof window && (n = window)
    }
    e.exports = n
}, function(e, t, n) {
    "use strict";
    (function(e) {
        /*!
         * The buffer module from node.js, for the browser.
         *
         * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
         * @license  MIT
         */
        var i = n(60),
            r = n(6),
            o = n(59);

        function s() {
            return l.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823
        }

        function a(e, t) {
            if (s() < t) throw new RangeError("Invalid typed array length");
            return l.TYPED_ARRAY_SUPPORT ? (e = new Uint8Array(t)).__proto__ = l.prototype : (null === e && (e = new l(t)), e.length = t), e
        }

        function l(e, t, n) {
            if (!(l.TYPED_ARRAY_SUPPORT || this instanceof l)) return new l(e, t, n);
            if ("number" == typeof e) {
                if ("string" == typeof t) throw new Error("If encoding is specified then the first argument must be a string");
                return u(this, e)
            }
            return h(this, e, t, n)
        }

        function h(e, t, n, i) {
            if ("number" == typeof t) throw new TypeError('"value" argument must not be a number');
            return "undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer ? function(e, t, n, i) {
                if (t.byteLength, n < 0 || t.byteLength < n) throw new RangeError("'offset' is out of bounds");
                if (t.byteLength < n + (i || 0)) throw new RangeError("'length' is out of bounds");
                return t = void 0 === n && void 0 === i ? new Uint8Array(t) : void 0 === i ? new Uint8Array(t, n) : new Uint8Array(t, n, i), l.TYPED_ARRAY_SUPPORT ? (e = t).__proto__ = l.prototype : e = f(e, t), e
            }(e, t, n, i) : "string" == typeof t ? function(e, t, n) {
                if ("string" == typeof n && "" !== n || (n = "utf8"), !l.isEncoding(n)) throw new TypeError('"encoding" must be a valid string encoding');
                var i = 0 | p(t, n),
                    r = (e = a(e, i)).write(t, n);
                return r !== i && (e = e.slice(0, r)), e
            }(e, t, n) : function(e, t) {
                if (l.isBuffer(t)) {
                    var n = 0 | d(t.length);
                    return 0 === (e = a(e, n)).length ? e : (t.copy(e, 0, 0, n), e)
                }
                if (t) {
                    if ("undefined" != typeof ArrayBuffer && t.buffer instanceof ArrayBuffer || "length" in t) return "number" != typeof t.length || function(e) {
                        return e != e
                    }(t.length) ? a(e, 0) : f(e, t);
                    if ("Buffer" === t.type && o(t.data)) return f(e, t.data)
                }
                throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
            }(e, t)
        }

        function c(e) {
            if ("number" != typeof e) throw new TypeError('"size" argument must be a number');
            if (e < 0) throw new RangeError('"size" argument must not be negative')
        }

        function u(e, t) {
            if (c(t), e = a(e, t < 0 ? 0 : 0 | d(t)), !l.TYPED_ARRAY_SUPPORT)
                for (var n = 0; n < t; ++n) e[n] = 0;
            return e
        }

        function f(e, t) {
            var n = t.length < 0 ? 0 : 0 | d(t.length);
            e = a(e, n);
            for (var i = 0; i < n; i += 1) e[i] = 255 & t[i];
            return e
        }

        function d(e) {
            if (e >= s()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + s().toString(16) + " bytes");
            return 0 | e
        }

        function p(e, t) {
            if (l.isBuffer(e)) return e.length;
            if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(e) || e instanceof ArrayBuffer)) return e.byteLength;
            "string" != typeof e && (e = "" + e);
            var n = e.length;
            if (0 === n) return 0;
            for (var i = !1;;) switch (t) {
                case "ascii":
                case "latin1":
                case "binary":
                    return n;
                case "utf8":
                case "utf-8":
                case void 0:
                    return V(e).length;
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return 2 * n;
                case "hex":
                    return n >>> 1;
                case "base64":
                    return Y(e).length;
                default:
                    if (i) return V(e).length;
                    t = ("" + t).toLowerCase(), i = !0
            }
        }

        function g(e, t, n) {
            var i = e[t];
            e[t] = e[n], e[n] = i
        }

        function m(e, t, n, i, r) {
            if (0 === e.length) return -1;
            if ("string" == typeof n ? (i = n, n = 0) : n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648), n = +n, isNaN(n) && (n = r ? 0 : e.length - 1), n < 0 && (n = e.length + n), n >= e.length) {
                if (r) return -1;
                n = e.length - 1
            } else if (n < 0) {
                if (!r) return -1;
                n = 0
            }
            if ("string" == typeof t && (t = l.from(t, i)), l.isBuffer(t)) return 0 === t.length ? -1 : y(e, t, n, i, r);
            if ("number" == typeof t) return t &= 255, l.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? r ? Uint8Array.prototype.indexOf.call(e, t, n) : Uint8Array.prototype.lastIndexOf.call(e, t, n) : y(e, [t], n, i, r);
            throw new TypeError("val must be string, number or Buffer")
        }

        function y(e, t, n, i, r) {
            var o, s = 1,
                a = e.length,
                l = t.length;
            if (void 0 !== i && ("ucs2" === (i = String(i).toLowerCase()) || "ucs-2" === i || "utf16le" === i || "utf-16le" === i)) {
                if (e.length < 2 || t.length < 2) return -1;
                s = 2, a /= 2, l /= 2, n /= 2
            }

            function h(e, t) {
                return 1 === s ? e[t] : e.readUInt16BE(t * s)
            }
            if (r) {
                var c = -1;
                for (o = n; o < a; o++)
                    if (h(e, o) === h(t, -1 === c ? 0 : o - c)) {
                        if (-1 === c && (c = o), o - c + 1 === l) return c * s
                    } else -1 !== c && (o -= o - c), c = -1
            } else
                for (n + l > a && (n = a - l), o = n; o >= 0; o--) {
                    for (var u = !0, f = 0; f < l; f++)
                        if (h(e, o + f) !== h(t, f)) {
                            u = !1;
                            break
                        }
                    if (u) return o
                }
            return -1
        }

        function v(e, t, n, i) {
            n = Number(n) || 0;
            var r = e.length - n;
            i ? (i = Number(i)) > r && (i = r) : i = r;
            var o = t.length;
            if (o % 2 != 0) throw new TypeError("Invalid hex string");
            i > o / 2 && (i = o / 2);
            for (var s = 0; s < i; ++s) {
                var a = parseInt(t.substr(2 * s, 2), 16);
                if (isNaN(a)) return s;
                e[n + s] = a
            }
            return s
        }

        function w(e, t, n, i) {
            return F(V(t, e.length - n), e, n, i)
        }

        function x(e, t, n, i) {
            return F(function(e) {
                for (var t = [], n = 0; n < e.length; ++n) t.push(255 & e.charCodeAt(n));
                return t
            }(t), e, n, i)
        }

        function b(e, t, n, i) {
            return x(e, t, n, i)
        }

        function k(e, t, n, i) {
            return F(Y(t), e, n, i)
        }

        function S(e, t, n, i) {
            return F(function(e, t) {
                for (var n, i, r, o = [], s = 0; s < e.length && !((t -= 2) < 0); ++s) i = (n = e.charCodeAt(s)) >> 8, r = n % 256, o.push(r), o.push(i);
                return o
            }(t, e.length - n), e, n, i)
        }

        function I(e, t, n) {
            return 0 === t && n === e.length ? i.fromByteArray(e) : i.fromByteArray(e.slice(t, n))
        }

        function T(e, t, n) {
            n = Math.min(e.length, n);
            for (var i = [], r = t; r < n;) {
                var o, s, a, l, h = e[r],
                    c = null,
                    u = h > 239 ? 4 : h > 223 ? 3 : h > 191 ? 2 : 1;
                if (r + u <= n) switch (u) {
                    case 1:
                        h < 128 && (c = h);
                        break;
                    case 2:
                        128 == (192 & (o = e[r + 1])) && (l = (31 & h) << 6 | 63 & o) > 127 && (c = l);
                        break;
                    case 3:
                        o = e[r + 1], s = e[r + 2], 128 == (192 & o) && 128 == (192 & s) && (l = (15 & h) << 12 | (63 & o) << 6 | 63 & s) > 2047 && (l < 55296 || l > 57343) && (c = l);
                        break;
                    case 4:
                        o = e[r + 1], s = e[r + 2], a = e[r + 3], 128 == (192 & o) && 128 == (192 & s) && 128 == (192 & a) && (l = (15 & h) << 18 | (63 & o) << 12 | (63 & s) << 6 | 63 & a) > 65535 && l < 1114112 && (c = l)
                }
                null === c ? (c = 65533, u = 1) : c > 65535 && (c -= 65536, i.push(c >>> 10 & 1023 | 55296), c = 56320 | 1023 & c), i.push(c), r += u
            }
            return function(e) {
                var t = e.length;
                if (t <= E) return String.fromCharCode.apply(String, e);
                for (var n = "", i = 0; i < t;) n += String.fromCharCode.apply(String, e.slice(i, i += E));
                return n
            }(i)
        }
        t.Buffer = l, t.SlowBuffer = function(e) {
            return +e != e && (e = 0), l.alloc(+e)
        }, t.INSPECT_MAX_BYTES = 50, l.TYPED_ARRAY_SUPPORT = void 0 !== e.TYPED_ARRAY_SUPPORT ? e.TYPED_ARRAY_SUPPORT : function() {
            try {
                var e = new Uint8Array(1);
                return e.__proto__ = {
                    __proto__: Uint8Array.prototype,
                    foo: function() {
                        return 42
                    }
                }, 42 === e.foo() && "function" == typeof e.subarray && 0 === e.subarray(1, 1).byteLength
            } catch (e) {
                return !1
            }
        }(), t.kMaxLength = s(), l.poolSize = 8192, l._augment = function(e) {
            return e.__proto__ = l.prototype, e
        }, l.from = function(e, t, n) {
            return h(null, e, t, n)
        }, l.TYPED_ARRAY_SUPPORT && (l.prototype.__proto__ = Uint8Array.prototype, l.__proto__ = Uint8Array, "undefined" != typeof Symbol && Symbol.species && l[Symbol.species] === l && Object.defineProperty(l, Symbol.species, {
            value: null,
            configurable: !0
        })), l.alloc = function(e, t, n) {
            return function(e, t, n, i) {
                return c(t), t <= 0 ? a(e, t) : void 0 !== n ? "string" == typeof i ? a(e, t).fill(n, i) : a(e, t).fill(n) : a(e, t)
            }(null, e, t, n)
        }, l.allocUnsafe = function(e) {
            return u(null, e)
        }, l.allocUnsafeSlow = function(e) {
            return u(null, e)
        }, l.isBuffer = function(e) {
            return !(null == e || !e._isBuffer)
        }, l.compare = function(e, t) {
            if (!l.isBuffer(e) || !l.isBuffer(t)) throw new TypeError("Arguments must be Buffers");
            if (e === t) return 0;
            for (var n = e.length, i = t.length, r = 0, o = Math.min(n, i); r < o; ++r)
                if (e[r] !== t[r]) {
                    n = e[r], i = t[r];
                    break
                }
            return n < i ? -1 : i < n ? 1 : 0
        }, l.isEncoding = function(e) {
            switch (String(e).toLowerCase()) {
                case "hex":
                case "utf8":
                case "utf-8":
                case "ascii":
                case "latin1":
                case "binary":
                case "base64":
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return !0;
                default:
                    return !1
            }
        }, l.concat = function(e, t) {
            if (!o(e)) throw new TypeError('"list" argument must be an Array of Buffers');
            if (0 === e.length) return l.alloc(0);
            var n;
            if (void 0 === t)
                for (t = 0, n = 0; n < e.length; ++n) t += e[n].length;
            var i = l.allocUnsafe(t),
                r = 0;
            for (n = 0; n < e.length; ++n) {
                var s = e[n];
                if (!l.isBuffer(s)) throw new TypeError('"list" argument must be an Array of Buffers');
                s.copy(i, r), r += s.length
            }
            return i
        }, l.byteLength = p, l.prototype._isBuffer = !0, l.prototype.swap16 = function() {
            var e = this.length;
            if (e % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
            for (var t = 0; t < e; t += 2) g(this, t, t + 1);
            return this
        }, l.prototype.swap32 = function() {
            var e = this.length;
            if (e % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
            for (var t = 0; t < e; t += 4) g(this, t, t + 3), g(this, t + 1, t + 2);
            return this
        }, l.prototype.swap64 = function() {
            var e = this.length;
            if (e % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
            for (var t = 0; t < e; t += 8) g(this, t, t + 7), g(this, t + 1, t + 6), g(this, t + 2, t + 5), g(this, t + 3, t + 4);
            return this
        }, l.prototype.toString = function() {
            var e = 0 | this.length;
            return 0 === e ? "" : 0 === arguments.length ? T(this, 0, e) : function(e, t, n) {
                var i = !1;
                if ((void 0 === t || t < 0) && (t = 0), t > this.length) return "";
                if ((void 0 === n || n > this.length) && (n = this.length), n <= 0) return "";
                if ((n >>>= 0) <= (t >>>= 0)) return "";
                for (e || (e = "utf8");;) switch (e) {
                    case "hex":
                        return P(this, t, n);
                    case "utf8":
                    case "utf-8":
                        return T(this, t, n);
                    case "ascii":
                        return M(this, t, n);
                    case "latin1":
                    case "binary":
                        return A(this, t, n);
                    case "base64":
                        return I(this, t, n);
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return B(this, t, n);
                    default:
                        if (i) throw new TypeError("Unknown encoding: " + e);
                        e = (e + "").toLowerCase(), i = !0
                }
            }.apply(this, arguments)
        }, l.prototype.equals = function(e) {
            if (!l.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
            return this === e || 0 === l.compare(this, e)
        }, l.prototype.inspect = function() {
            var e = "",
                n = t.INSPECT_MAX_BYTES;
            return this.length > 0 && (e = this.toString("hex", 0, n).match(/.{2}/g).join(" "), this.length > n && (e += " ... ")), "<Buffer " + e + ">"
        }, l.prototype.compare = function(e, t, n, i, r) {
            if (!l.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
            if (void 0 === t && (t = 0), void 0 === n && (n = e ? e.length : 0), void 0 === i && (i = 0), void 0 === r && (r = this.length), t < 0 || n > e.length || i < 0 || r > this.length) throw new RangeError("out of range index");
            if (i >= r && t >= n) return 0;
            if (i >= r) return -1;
            if (t >= n) return 1;
            if (t >>>= 0, n >>>= 0, i >>>= 0, r >>>= 0, this === e) return 0;
            for (var o = r - i, s = n - t, a = Math.min(o, s), h = this.slice(i, r), c = e.slice(t, n), u = 0; u < a; ++u)
                if (h[u] !== c[u]) {
                    o = h[u], s = c[u];
                    break
                }
            return o < s ? -1 : s < o ? 1 : 0
        }, l.prototype.includes = function(e, t, n) {
            return -1 !== this.indexOf(e, t, n)
        }, l.prototype.indexOf = function(e, t, n) {
            return m(this, e, t, n, !0)
        }, l.prototype.lastIndexOf = function(e, t, n) {
            return m(this, e, t, n, !1)
        }, l.prototype.write = function(e, t, n, i) {
            if (void 0 === t) i = "utf8", n = this.length, t = 0;
            else if (void 0 === n && "string" == typeof t) i = t, n = this.length, t = 0;
            else {
                if (!isFinite(t)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                t |= 0, isFinite(n) ? (n |= 0, void 0 === i && (i = "utf8")) : (i = n, n = void 0)
            }
            var r = this.length - t;
            if ((void 0 === n || n > r) && (n = r), e.length > 0 && (n < 0 || t < 0) || t > this.length) throw new RangeError("Attempt to write outside buffer bounds");
            i || (i = "utf8");
            for (var o = !1;;) switch (i) {
                case "hex":
                    return v(this, e, t, n);
                case "utf8":
                case "utf-8":
                    return w(this, e, t, n);
                case "ascii":
                    return x(this, e, t, n);
                case "latin1":
                case "binary":
                    return b(this, e, t, n);
                case "base64":
                    return k(this, e, t, n);
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return S(this, e, t, n);
                default:
                    if (o) throw new TypeError("Unknown encoding: " + i);
                    i = ("" + i).toLowerCase(), o = !0
            }
        }, l.prototype.toJSON = function() {
            return {
                type: "Buffer",
                data: Array.prototype.slice.call(this._arr || this, 0)
            }
        };
        var E = 4096;

        function M(e, t, n) {
            var i = "";
            n = Math.min(e.length, n);
            for (var r = t; r < n; ++r) i += String.fromCharCode(127 & e[r]);
            return i
        }

        function A(e, t, n) {
            var i = "";
            n = Math.min(e.length, n);
            for (var r = t; r < n; ++r) i += String.fromCharCode(e[r]);
            return i
        }

        function P(e, t, n) {
            var i = e.length;
            (!t || t < 0) && (t = 0), (!n || n < 0 || n > i) && (n = i);
            for (var r = "", o = t; o < n; ++o) r += H(e[o]);
            return r
        }

        function B(e, t, n) {
            for (var i = e.slice(t, n), r = "", o = 0; o < i.length; o += 2) r += String.fromCharCode(i[o] + 256 * i[o + 1]);
            return r
        }

        function C(e, t, n) {
            if (e % 1 != 0 || e < 0) throw new RangeError("offset is not uint");
            if (e + t > n) throw new RangeError("Trying to access beyond buffer length")
        }

        function O(e, t, n, i, r, o) {
            if (!l.isBuffer(e)) throw new TypeError('"buffer" argument must be a Buffer instance');
            if (t > r || t < o) throw new RangeError('"value" argument is out of bounds');
            if (n + i > e.length) throw new RangeError("Index out of range")
        }

        function R(e, t, n, i) {
            t < 0 && (t = 65535 + t + 1);
            for (var r = 0, o = Math.min(e.length - n, 2); r < o; ++r) e[n + r] = (t & 255 << 8 * (i ? r : 1 - r)) >>> 8 * (i ? r : 1 - r)
        }

        function D(e, t, n, i) {
            t < 0 && (t = 4294967295 + t + 1);
            for (var r = 0, o = Math.min(e.length - n, 4); r < o; ++r) e[n + r] = t >>> 8 * (i ? r : 3 - r) & 255
        }

        function U(e, t, n, i, r, o) {
            if (n + i > e.length) throw new RangeError("Index out of range");
            if (n < 0) throw new RangeError("Index out of range")
        }

        function _(e, t, n, i, o) {
            return o || U(e, 0, n, 4), r.write(e, t, n, i, 23, 4), n + 4
        }

        function j(e, t, n, i, o) {
            return o || U(e, 0, n, 8), r.write(e, t, n, i, 52, 8), n + 8
        }
        l.prototype.slice = function(e, t) {
            var n, i = this.length;
            if (e = ~~e, t = void 0 === t ? i : ~~t, e < 0 ? (e += i) < 0 && (e = 0) : e > i && (e = i), t < 0 ? (t += i) < 0 && (t = 0) : t > i && (t = i), t < e && (t = e), l.TYPED_ARRAY_SUPPORT)(n = this.subarray(e, t)).__proto__ = l.prototype;
            else {
                var r = t - e;
                n = new l(r, void 0);
                for (var o = 0; o < r; ++o) n[o] = this[o + e]
            }
            return n
        }, l.prototype.readUIntLE = function(e, t, n) {
            e |= 0, t |= 0, n || C(e, t, this.length);
            for (var i = this[e], r = 1, o = 0; ++o < t && (r *= 256);) i += this[e + o] * r;
            return i
        }, l.prototype.readUIntBE = function(e, t, n) {
            e |= 0, t |= 0, n || C(e, t, this.length);
            for (var i = this[e + --t], r = 1; t > 0 && (r *= 256);) i += this[e + --t] * r;
            return i
        }, l.prototype.readUInt8 = function(e, t) {
            return t || C(e, 1, this.length), this[e]
        }, l.prototype.readUInt16LE = function(e, t) {
            return t || C(e, 2, this.length), this[e] | this[e + 1] << 8
        }, l.prototype.readUInt16BE = function(e, t) {
            return t || C(e, 2, this.length), this[e] << 8 | this[e + 1]
        }, l.prototype.readUInt32LE = function(e, t) {
            return t || C(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3]
        }, l.prototype.readUInt32BE = function(e, t) {
            return t || C(e, 4, this.length), 16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3])
        }, l.prototype.readIntLE = function(e, t, n) {
            e |= 0, t |= 0, n || C(e, t, this.length);
            for (var i = this[e], r = 1, o = 0; ++o < t && (r *= 256);) i += this[e + o] * r;
            return i >= (r *= 128) && (i -= Math.pow(2, 8 * t)), i
        }, l.prototype.readIntBE = function(e, t, n) {
            e |= 0, t |= 0, n || C(e, t, this.length);
            for (var i = t, r = 1, o = this[e + --i]; i > 0 && (r *= 256);) o += this[e + --i] * r;
            return o >= (r *= 128) && (o -= Math.pow(2, 8 * t)), o
        }, l.prototype.readInt8 = function(e, t) {
            return t || C(e, 1, this.length), 128 & this[e] ? -1 * (255 - this[e] + 1) : this[e]
        }, l.prototype.readInt16LE = function(e, t) {
            t || C(e, 2, this.length);
            var n = this[e] | this[e + 1] << 8;
            return 32768 & n ? 4294901760 | n : n
        }, l.prototype.readInt16BE = function(e, t) {
            t || C(e, 2, this.length);
            var n = this[e + 1] | this[e] << 8;
            return 32768 & n ? 4294901760 | n : n
        }, l.prototype.readInt32LE = function(e, t) {
            return t || C(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24
        }, l.prototype.readInt32BE = function(e, t) {
            return t || C(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]
        }, l.prototype.readFloatLE = function(e, t) {
            return t || C(e, 4, this.length), r.read(this, e, !0, 23, 4)
        }, l.prototype.readFloatBE = function(e, t) {
            return t || C(e, 4, this.length), r.read(this, e, !1, 23, 4)
        }, l.prototype.readDoubleLE = function(e, t) {
            return t || C(e, 8, this.length), r.read(this, e, !0, 52, 8)
        }, l.prototype.readDoubleBE = function(e, t) {
            return t || C(e, 8, this.length), r.read(this, e, !1, 52, 8)
        }, l.prototype.writeUIntLE = function(e, t, n, i) {
            e = +e, t |= 0, n |= 0, i || O(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
            var r = 1,
                o = 0;
            for (this[t] = 255 & e; ++o < n && (r *= 256);) this[t + o] = e / r & 255;
            return t + n
        }, l.prototype.writeUIntBE = function(e, t, n, i) {
            e = +e, t |= 0, n |= 0, i || O(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
            var r = n - 1,
                o = 1;
            for (this[t + r] = 255 & e; --r >= 0 && (o *= 256);) this[t + r] = e / o & 255;
            return t + n
        }, l.prototype.writeUInt8 = function(e, t, n) {
            return e = +e, t |= 0, n || O(this, e, t, 1, 255, 0), l.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), this[t] = 255 & e, t + 1
        }, l.prototype.writeUInt16LE = function(e, t, n) {
            return e = +e, t |= 0, n || O(this, e, t, 2, 65535, 0), l.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8) : R(this, e, t, !0), t + 2
        }, l.prototype.writeUInt16BE = function(e, t, n) {
            return e = +e, t |= 0, n || O(this, e, t, 2, 65535, 0), l.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = 255 & e) : R(this, e, t, !1), t + 2
        }, l.prototype.writeUInt32LE = function(e, t, n) {
            return e = +e, t |= 0, n || O(this, e, t, 4, 4294967295, 0), l.TYPED_ARRAY_SUPPORT ? (this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = 255 & e) : D(this, e, t, !0), t + 4
        }, l.prototype.writeUInt32BE = function(e, t, n) {
            return e = +e, t |= 0, n || O(this, e, t, 4, 4294967295, 0), l.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e) : D(this, e, t, !1), t + 4
        }, l.prototype.writeIntLE = function(e, t, n, i) {
            if (e = +e, t |= 0, !i) {
                var r = Math.pow(2, 8 * n - 1);
                O(this, e, t, n, r - 1, -r)
            }
            var o = 0,
                s = 1,
                a = 0;
            for (this[t] = 255 & e; ++o < n && (s *= 256);) e < 0 && 0 === a && 0 !== this[t + o - 1] && (a = 1), this[t + o] = (e / s >> 0) - a & 255;
            return t + n
        }, l.prototype.writeIntBE = function(e, t, n, i) {
            if (e = +e, t |= 0, !i) {
                var r = Math.pow(2, 8 * n - 1);
                O(this, e, t, n, r - 1, -r)
            }
            var o = n - 1,
                s = 1,
                a = 0;
            for (this[t + o] = 255 & e; --o >= 0 && (s *= 256);) e < 0 && 0 === a && 0 !== this[t + o + 1] && (a = 1), this[t + o] = (e / s >> 0) - a & 255;
            return t + n
        }, l.prototype.writeInt8 = function(e, t, n) {
            return e = +e, t |= 0, n || O(this, e, t, 1, 127, -128), l.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), e < 0 && (e = 255 + e + 1), this[t] = 255 & e, t + 1
        }, l.prototype.writeInt16LE = function(e, t, n) {
            return e = +e, t |= 0, n || O(this, e, t, 2, 32767, -32768), l.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8) : R(this, e, t, !0), t + 2
        }, l.prototype.writeInt16BE = function(e, t, n) {
            return e = +e, t |= 0, n || O(this, e, t, 2, 32767, -32768), l.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = 255 & e) : R(this, e, t, !1), t + 2
        }, l.prototype.writeInt32LE = function(e, t, n) {
            return e = +e, t |= 0, n || O(this, e, t, 4, 2147483647, -2147483648), l.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24) : D(this, e, t, !0), t + 4
        }, l.prototype.writeInt32BE = function(e, t, n) {
            return e = +e, t |= 0, n || O(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), l.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e) : D(this, e, t, !1), t + 4
        }, l.prototype.writeFloatLE = function(e, t, n) {
            return _(this, e, t, !0, n)
        }, l.prototype.writeFloatBE = function(e, t, n) {
            return _(this, e, t, !1, n)
        }, l.prototype.writeDoubleLE = function(e, t, n) {
            return j(this, e, t, !0, n)
        }, l.prototype.writeDoubleBE = function(e, t, n) {
            return j(this, e, t, !1, n)
        }, l.prototype.copy = function(e, t, n, i) {
            if (n || (n = 0), i || 0 === i || (i = this.length), t >= e.length && (t = e.length), t || (t = 0), i > 0 && i < n && (i = n), i === n) return 0;
            if (0 === e.length || 0 === this.length) return 0;
            if (t < 0) throw new RangeError("targetStart out of bounds");
            if (n < 0 || n >= this.length) throw new RangeError("sourceStart out of bounds");
            if (i < 0) throw new RangeError("sourceEnd out of bounds");
            i > this.length && (i = this.length), e.length - t < i - n && (i = e.length - t + n);
            var r, o = i - n;
            if (this === e && n < t && t < i)
                for (r = o - 1; r >= 0; --r) e[r + t] = this[r + n];
            else if (o < 1e3 || !l.TYPED_ARRAY_SUPPORT)
                for (r = 0; r < o; ++r) e[r + t] = this[r + n];
            else Uint8Array.prototype.set.call(e, this.subarray(n, n + o), t);
            return o
        }, l.prototype.fill = function(e, t, n, i) {
            if ("string" == typeof e) {
                if ("string" == typeof t ? (i = t, t = 0, n = this.length) : "string" == typeof n && (i = n, n = this.length), 1 === e.length) {
                    var r = e.charCodeAt(0);
                    r < 256 && (e = r)
                }
                if (void 0 !== i && "string" != typeof i) throw new TypeError("encoding must be a string");
                if ("string" == typeof i && !l.isEncoding(i)) throw new TypeError("Unknown encoding: " + i)
            } else "number" == typeof e && (e &= 255);
            if (t < 0 || this.length < t || this.length < n) throw new RangeError("Out of range index");
            if (n <= t) return this;
            var o;
            if (t >>>= 0, n = void 0 === n ? this.length : n >>> 0, e || (e = 0), "number" == typeof e)
                for (o = t; o < n; ++o) this[o] = e;
            else {
                var s = l.isBuffer(e) ? e : V(new l(e, i).toString()),
                    a = s.length;
                for (o = 0; o < n - t; ++o) this[o + t] = s[o % a]
            }
            return this
        };
        var L = /[^+\/0-9A-Za-z-_]/g;

        function H(e) {
            return e < 16 ? "0" + e.toString(16) : e.toString(16)
        }

        function V(e, t) {
            var n;
            t = t || 1 / 0;
            for (var i = e.length, r = null, o = [], s = 0; s < i; ++s) {
                if ((n = e.charCodeAt(s)) > 55295 && n < 57344) {
                    if (!r) {
                        if (n > 56319) {
                            (t -= 3) > -1 && o.push(239, 191, 189);
                            continue
                        }
                        if (s + 1 === i) {
                            (t -= 3) > -1 && o.push(239, 191, 189);
                            continue
                        }
                        r = n;
                        continue
                    }
                    if (n < 56320) {
                        (t -= 3) > -1 && o.push(239, 191, 189), r = n;
                        continue
                    }
                    n = 65536 + (r - 55296 << 10 | n - 56320)
                } else r && (t -= 3) > -1 && o.push(239, 191, 189);
                if (r = null, n < 128) {
                    if ((t -= 1) < 0) break;
                    o.push(n)
                } else if (n < 2048) {
                    if ((t -= 2) < 0) break;
                    o.push(n >> 6 | 192, 63 & n | 128)
                } else if (n < 65536) {
                    if ((t -= 3) < 0) break;
                    o.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128)
                } else {
                    if (!(n < 1114112)) throw new Error("Invalid code point");
                    if ((t -= 4) < 0) break;
                    o.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128)
                }
            }
            return o
        }

        function Y(e) {
            return i.toByteArray(function(e) {
                if ((e = function(e) {
                        return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "")
                    }(e).replace(L, "")).length < 2) return "";
                for (; e.length % 4 != 0;) e += "=";
                return e
            }(e))
        }

        function F(e, t, n, i) {
            for (var r = 0; r < i && !(r + n >= t.length || r >= e.length); ++r) t[r + n] = e[r];
            return r
        }
    }).call(this, n(17))
}, function(e, t, n) {
    t.EncodeBuffer = r;
    var i = n(8).preset;

    function r(e) {
        if (!(this instanceof r)) return new r(e);
        if (e && (this.options = e, e.codec)) {
            var t = this.codec = e.codec;
            t.bufferish && (this.bufferish = t.bufferish)
        }
    }
    n(15).FlexEncoder.mixin(r.prototype), r.prototype.codec = i, r.prototype.write = function(e) {
        this.codec.encode(this, e)
    }
}, function(e, t, n) {
    t.encode = function(e, t) {
        var n = new i(t);
        return n.write(e), n.read()
    };
    var i = n(19).EncodeBuffer
}, function(e, t) {
    var n = 2 * Math.PI;
    e.exports = function(e, t, i, r, o, s, a, l) {
        this.sid = e, this.isAI = !0, this.nameIndex = o.randInt(0, s.cowNames.length - 1), this.init = function(e, t, n, i, r) {
            this.x = e, this.y = t, this.startX = r.fixedSpawn ? e : null, this.startY = r.fixedSpawn ? t : null, this.xVel = 0, this.yVel = 0, this.zIndex = 0, this.dir = n, this.dirPlus = 0, this.index = i, this.src = r.src, r.name && (this.name = r.name), this.weightM = r.weightM, this.speed = r.speed, this.killScore = r.killScore, this.turnSpeed = r.turnSpeed, this.scale = r.scale, this.maxHealth = r.health, this.leapForce = r.leapForce, this.health = this.maxHealth, this.chargePlayer = r.chargePlayer, this.viewRange = r.viewRange, this.drop = r.drop, this.dmg = r.dmg, this.hostile = r.hostile, this.dontRun = r.dontRun, this.hitRange = r.hitRange, this.hitDelay = r.hitDelay, this.hitScare = r.hitScare, this.spriteMlt = r.spriteMlt, this.nameScale = r.nameScale, this.colDmg = r.colDmg, this.noTrap = r.noTrap, this.spawnDelay = r.spawnDelay, this.hitWait = 0, this.waitCount = 1e3, this.moveCount = 0, this.targetDir = 0, this.active = !0, this.alive = !0, this.runFrom = null, this.chargeTarget = null, this.dmgOverTime = {}
        };
        var h = 0;
        this.update = function(e) {
            if (this.active) {
                if (this.spawnCounter) return this.spawnCounter -= e, void(this.spawnCounter <= 0 && (this.spawnCounter = 0, this.x = this.startX || o.randInt(0, s.mapScale), this.y = this.startY || o.randInt(0, s.mapScale)));
                (h -= e) <= 0 && (this.dmgOverTime.dmg && (this.changeHealth(-this.dmgOverTime.dmg, this.dmgOverTime.doer), this.dmgOverTime.time -= 1, this.dmgOverTime.time <= 0 && (this.dmgOverTime.dmg = 0)), h = 1e3);
                var r = !1,
                    a = 1;
                if (!this.zIndex && !this.lockMove && this.y >= s.mapScale / 2 - s.riverWidth / 2 && this.y <= s.mapScale / 2 + s.riverWidth / 2 && (a = .33, this.xVel += s.waterCurrent * e), this.lockMove) this.xVel = 0, this.yVel = 0;
                else if (this.waitCount > 0) {
                    if (this.waitCount -= e, this.waitCount <= 0)
                        if (this.chargePlayer) {
                            for (var c, u, f, d = 0; d < i.length; ++d) !i[d].alive || i[d].skin && i[d].skin.bullRepel || (f = o.getDistance(this.x, this.y, i[d].x, i[d].y)) <= this.viewRange && (!c || f < u) && (u = f, c = i[d]);
                            c ? (this.chargeTarget = c, this.moveCount = o.randInt(8e3, 12e3)) : (this.moveCount = o.randInt(1e3, 2e3), this.targetDir = o.randFloat(-Math.PI, Math.PI))
                        } else this.moveCount = o.randInt(4e3, 1e4), this.targetDir = o.randFloat(-Math.PI, Math.PI)
                } else if (this.moveCount > 0) {
                    var p = this.speed * a;
                    if (this.runFrom && this.runFrom.active && (!this.runFrom.isPlayer || this.runFrom.alive) ? (this.targetDir = o.getDirection(this.x, this.y, this.runFrom.x, this.runFrom.y), p *= 1.42) : this.chargeTarget && this.chargeTarget.alive && (this.targetDir = o.getDirection(this.chargeTarget.x, this.chargeTarget.y, this.x, this.y), p *= 1.75, r = !0), this.hitWait && (p *= .3), this.dir != this.targetDir) {
                        this.dir %= n;
                        var g = (this.dir - this.targetDir + n) % n,
                            m = Math.min(Math.abs(g - n), g, this.turnSpeed * e),
                            y = g - Math.PI >= 0 ? 1 : -1;
                        this.dir += y * m + n
                    }
                    this.dir %= n, this.xVel += p * e * Math.cos(this.dir), this.yVel += p * e * Math.sin(this.dir), this.moveCount -= e, this.moveCount <= 0 && (this.runFrom = null, this.chargeTarget = null, this.waitCount = this.hostile ? 1500 : o.randInt(1500, 6e3))
                }
                this.zIndex = 0, this.lockMove = !1;
                var v = o.getDistance(0, 0, this.xVel * e, this.yVel * e),
                    w = Math.min(4, Math.max(1, Math.round(v / 40))),
                    x = 1 / w;
                for (d = 0; d < w; ++d) {
                    this.xVel && (this.x += this.xVel * e * x), this.yVel && (this.y += this.yVel * e * x), M = t.getGridArrays(this.x, this.y, this.scale);
                    for (var b = 0; b < M.length; ++b)
                        for (var k = 0; k < M[b].length; ++k) M[b][k].active && t.checkCollision(this, M[b][k], x)
                }
                var S, I, T, E = !1;
                if (this.hitWait > 0 && (this.hitWait -= e, this.hitWait <= 0)) {
                    E = !0, this.hitWait = 0, this.leapForce && !o.randInt(0, 2) && (this.xVel += this.leapForce * Math.cos(this.dir), this.yVel += this.leapForce * Math.sin(this.dir));
                    for (var M = t.getGridArrays(this.x, this.y, this.hitRange), A = 0; A < M.length; ++A)
                        for (b = 0; b < M[A].length; ++b)(S = M[A][b]).health && (I = o.getDistance(this.x, this.y, S.x, S.y)) < S.scale + this.hitRange && (S.changeHealth(5 * -this.dmg) && t.disableObj(S), t.hitObj(S, o.getDirection(this.x, this.y, S.x, S.y)));
                    for (b = 0; b < i.length; ++b) i[b].canSee(this) && l.send(i[b].id, "aa", this.sid)
                }
                if (r || E)
                    for (d = 0; d < i.length; ++d)(S = i[d]) && S.alive && (I = o.getDistance(this.x, this.y, S.x, S.y), this.hitRange ? !this.hitWait && I <= this.hitRange + S.scale && (E ? (T = o.getDirection(S.x, S.y, this.x, this.y), S.changeHealth(-this.dmg), S.xVel += .6 * Math.cos(T), S.yVel += .6 * Math.sin(T), this.runFrom = null, this.chargeTarget = null, this.waitCount = 3e3, this.hitWait = o.randInt(0, 2) ? 0 : 600) : this.hitWait = this.hitDelay) : I <= this.scale + S.scale && (T = o.getDirection(S.x, S.y, this.x, this.y), S.changeHealth(-this.dmg), S.xVel += .55 * Math.cos(T), S.yVel += .55 * Math.sin(T)));
                this.xVel && (this.xVel *= Math.pow(s.playerDecel, e)), this.yVel && (this.yVel *= Math.pow(s.playerDecel, e));
                var P = this.scale;
                this.x - P < 0 ? (this.x = P, this.xVel = 0) : this.x + P > s.mapScale && (this.x = s.mapScale - P, this.xVel = 0), this.y - P < 0 ? (this.y = P, this.yVel = 0) : this.y + P > s.mapScale && (this.y = s.mapScale - P, this.yVel = 0)
            }
        }, this.canSee = function(e) {
            if (!e) return !1;
            var t = Math.abs(e.x - this.x) - e.scale,
                n = Math.abs(e.y - this.y) - e.scale;
            return t <= s.maxScreenWidth / 2 * 1.3 && n <= s.maxScreenHeight / 2 * 1.3
        };
        var c = 0,
            u = 0;
        this.animate = function(e) {
            this.animTime > 0 && (this.animTime -= e, this.animTime <= 0 ? (this.animTime = 0, this.dirPlus = 0, c = 0, u = 0) : 0 == u ? (c += e / (this.animSpeed * s.hitReturnRatio), this.dirPlus = o.lerp(0, this.targetAngle, Math.min(1, c)), c >= 1 && (c = 1, u = 1)) : (c -= e / (this.animSpeed * (1 - s.hitReturnRatio)), this.dirPlus = o.lerp(0, this.targetAngle, Math.max(0, c))))
        }, this.startAnim = function() {
            this.animTime = this.animSpeed = 600, this.targetAngle = .8 * Math.PI, c = 0, u = 0
        }, this.changeHealth = function(e, t, n) {
            if (this.active && (this.health += e, n && (this.hitScare && !o.randInt(0, this.hitScare) ? (this.runFrom = n, this.waitCount = 0, this.moveCount = 2e3) : this.hostile && this.chargePlayer && n.isPlayer ? (this.chargeTarget = n, this.waitCount = 0, this.moveCount = 8e3) : this.dontRun || (this.runFrom = n, this.waitCount = 0, this.moveCount = 2e3)), e < 0 && this.hitRange && o.randInt(0, 1) && (this.hitWait = 500), t && t.canSee(this) && e < 0 && l.send(t.id, "t", Math.round(this.x), Math.round(this.y), Math.round(-e), 1), this.health <= 0 && (this.spawnDelay ? (this.spawnCounter = this.spawnDelay, this.x = -1e6, this.y = -1e6) : (this.x = this.startX || o.randInt(0, s.mapScale), this.y = this.startY || o.randInt(0, s.mapScale)), this.health = this.maxHealth, this.runFrom = null, t && (a(t, this.killScore), this.drop))))
                for (var i = 0; i < this.drop.length;) t.addResource(s.resourceTypes.indexOf(this.drop[i]), this.drop[i + 1]), i += 2
        }
    }
}, function(e, t) {
    e.exports = function(e, t, n, i, r, o, s, a, l) {
        this.aiTypes = [{
            id: 0,
            src: "cow_1",
            killScore: 150,
            health: 500,
            weightM: .8,
            speed: 95e-5,
            turnSpeed: .001,
            scale: 72,
            drop: ["food", 50]
        }, {
            id: 1,
            src: "pig_1",
            killScore: 200,
            health: 800,
            weightM: .6,
            speed: 85e-5,
            turnSpeed: .001,
            scale: 72,
            drop: ["food", 80]
        }, {
            id: 2,
            name: "Bull",
            src: "bull_2",
            hostile: !0,
            dmg: 20,
            killScore: 1e3,
            health: 1800,
            weightM: .5,
            speed: 94e-5,
            turnSpeed: 74e-5,
            scale: 78,
            viewRange: 800,
            chargePlayer: !0,
            drop: ["food", 100]
        }, {
            id: 3,
            name: "Bully",
            src: "bull_1",
            hostile: !0,
            dmg: 20,
            killScore: 2e3,
            health: 2800,
            weightM: .45,
            speed: .001,
            turnSpeed: 8e-4,
            scale: 90,
            viewRange: 900,
            chargePlayer: !0,
            drop: ["food", 400]
        }, {
            id: 4,
            name: "Scorpion",
            src: "wolf_1",
            hostile: !0,
            dmg: 8,
            killScore: 500,
            health: 300,
            weightM: .45,
            speed: .001,
            turnSpeed: .002,
            scale: 84,
            viewRange: 800,
            chargePlayer: !0,
            drop: ["food", 200]
        }, {
            id: 5,
            name: "Penguin",
            src: "chicken_1",
            dmg: 8,
            killScore: 2e3,
            noTrap: !0,
            health: 300,
            weightM: .2,
            speed: .0018,
            turnSpeed: .006,
            scale: 70,
            drop: ["food", 100]
        }, {
            id: 6,
            name: "aQuiVeRealistic",
            nameScale: 50,
            src: "enemy", //Change chicken_1" to "enemy" for normal MOOSTAFA skin
            hostile: !0,
            dontRun: !0,
            fixedSpawn: !0,
            spawnDelay: 6e4,
            noTrap: !0,
            colDmg: 100,
            dmg: 40,
            killScore: 8e3,
            health: 18e3,
            weightM: .4,
            speed: 7e-4,
            turnSpeed: .01,
            scale: 80,
            spriteMlt: 1.8,
            leapForce: .9,
            viewRange: 1e3,
            hitRange: 210,
            hitDelay: 1e3,
            chargePlayer: !0,
            drop: ["food", 100]
        }, {
            id: 7,
            name: "Pirate Treasure",
            hostile: !0,
            nameScale: 35,
            src: "crate_1",
            fixedSpawn: !0,
            spawnDelay: 12e4,
            colDmg: 200,
            killScore: 5e3,
            health: 2e4,
            weightM: .1,
            speed: 0,
            turnSpeed: 0,
            scale: 70,
            spriteMlt: 1
        }, {
            id: 8,
            name: "A Dog",
            src: "chicken_1", //To revert moofie to normal form, put "wolf_2"
            hostile: !0,
            fixedSpawn: !0,
            dontRun: !0,
            hitScare: 4,
            spawnDelay: 3e4,
            noTrap: !0,
            nameScale: 35,
            dmg: 10,
            colDmg: 100,
            killScore: 3e3,
            health: 7e3,
            weightM: .45,
            speed: .0015,
            turnSpeed: .002,
            scale: 90,
            viewRange: 800,
            chargePlayer: !0,
            drop: ["food", 1e3]
        }], this.spawn = function(h, c, u, f) {
            for (var d, p = 0; p < e.length; ++p)
                if (!e[p].active) {
                    d = e[p];
                    break
                }
            return d || (d = new t(e.length, r, n, i, s, o, a, l), e.push(d)), d.init(h, c, u, f, this.aiTypes[f]), d
        }
    }
}, function(e, t) {
    function n(e) {
        return !!e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
    }
    /*!
     * Determine if an object is a Buffer
     *
     * @author   Feross Aboukhadijeh <https://feross.org>
     * @license  MIT
     */
    e.exports = function(e) {
        return null != e && (n(e) || function(e) {
            return "function" == typeof e.readFloatLE && "function" == typeof e.slice && n(e.slice(0, 0))
        }(e) || !!e._isBuffer)
    }
}, function(e, t) {
    ! function() {
        var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
            n = {
                rotl: function(e, t) {
                    return e << t | e >>> 32 - t
                },
                rotr: function(e, t) {
                    return e << 32 - t | e >>> t
                },
                endian: function(e) {
                    if (e.constructor == Number) return 16711935 & n.rotl(e, 8) | 4278255360 & n.rotl(e, 24);
                    for (var t = 0; t < e.length; t++) e[t] = n.endian(e[t]);
                    return e
                },
                randomBytes: function(e) {
                    for (var t = []; e > 0; e--) t.push(Math.floor(256 * Math.random()));
                    return t
                },
                bytesToWords: function(e) {
                    for (var t = [], n = 0, i = 0; n < e.length; n++, i += 8) t[i >>> 5] |= e[n] << 24 - i % 32;
                    return t
                },
                wordsToBytes: function(e) {
                    for (var t = [], n = 0; n < 32 * e.length; n += 8) t.push(e[n >>> 5] >>> 24 - n % 32 & 255);
                    return t
                },
                bytesToHex: function(e) {
                    for (var t = [], n = 0; n < e.length; n++) t.push((e[n] >>> 4).toString(16)), t.push((15 & e[n]).toString(16));
                    return t.join("")
                },
                hexToBytes: function(e) {
                    for (var t = [], n = 0; n < e.length; n += 2) t.push(parseInt(e.substr(n, 2), 16));
                    return t
                },
                bytesToBase64: function(e) {
                    for (var n = [], i = 0; i < e.length; i += 3)
                        for (var r = e[i] << 16 | e[i + 1] << 8 | e[i + 2], o = 0; o < 4; o++) 8 * i + 6 * o <= 8 * e.length ? n.push(t.charAt(r >>> 6 * (3 - o) & 63)) : n.push("=");
                    return n.join("")
                },
                base64ToBytes: function(e) {
                    e = e.replace(/[^A-Z0-9+\/]/gi, "");
                    for (var n = [], i = 0, r = 0; i < e.length; r = ++i % 4) 0 != r && n.push((t.indexOf(e.charAt(i - 1)) & Math.pow(2, -2 * r + 8) - 1) << 2 * r | t.indexOf(e.charAt(i)) >>> 6 - 2 * r);
                    return n
                }
            };
        e.exports = n
    }()
}, function(e, t, n) {
    ! function() {
        var t = n(24),
            i = n(9).utf8,
            r = n(23),
            o = n(9).bin,
            s = function(e, n) {
                e.constructor == String ? e = n && "binary" === n.encoding ? o.stringToBytes(e) : i.stringToBytes(e) : r(e) ? e = Array.prototype.slice.call(e, 0) : Array.isArray(e) || (e = e.toString());
                for (var a = t.bytesToWords(e), l = 8 * e.length, h = 1732584193, c = -271733879, u = -1732584194, f = 271733878, d = 0; d < a.length; d++) a[d] = 16711935 & (a[d] << 8 | a[d] >>> 24) | 4278255360 & (a[d] << 24 | a[d] >>> 8);
                a[l >>> 5] |= 128 << l % 32, a[14 + (l + 64 >>> 9 << 4)] = l;
                var p = s._ff,
                    g = s._gg,
                    m = s._hh,
                    y = s._ii;
                for (d = 0; d < a.length; d += 16) {
                    var v = h,
                        w = c,
                        x = u,
                        b = f;
                    c = y(c = y(c = y(c = y(c = m(c = m(c = m(c = m(c = g(c = g(c = g(c = g(c = p(c = p(c = p(c = p(c, u = p(u, f = p(f, h = p(h, c, u, f, a[d + 0], 7, -680876936), c, u, a[d + 1], 12, -389564586), h, c, a[d + 2], 17, 606105819), f, h, a[d + 3], 22, -1044525330), u = p(u, f = p(f, h = p(h, c, u, f, a[d + 4], 7, -176418897), c, u, a[d + 5], 12, 1200080426), h, c, a[d + 6], 17, -1473231341), f, h, a[d + 7], 22, -45705983), u = p(u, f = p(f, h = p(h, c, u, f, a[d + 8], 7, 1770035416), c, u, a[d + 9], 12, -1958414417), h, c, a[d + 10], 17, -42063), f, h, a[d + 11], 22, -1990404162), u = p(u, f = p(f, h = p(h, c, u, f, a[d + 12], 7, 1804603682), c, u, a[d + 13], 12, -40341101), h, c, a[d + 14], 17, -1502002290), f, h, a[d + 15], 22, 1236535329), u = g(u, f = g(f, h = g(h, c, u, f, a[d + 1], 5, -165796510), c, u, a[d + 6], 9, -1069501632), h, c, a[d + 11], 14, 643717713), f, h, a[d + 0], 20, -373897302), u = g(u, f = g(f, h = g(h, c, u, f, a[d + 5], 5, -701558691), c, u, a[d + 10], 9, 38016083), h, c, a[d + 15], 14, -660478335), f, h, a[d + 4], 20, -405537848), u = g(u, f = g(f, h = g(h, c, u, f, a[d + 9], 5, 568446438), c, u, a[d + 14], 9, -1019803690), h, c, a[d + 3], 14, -187363961), f, h, a[d + 8], 20, 1163531501), u = g(u, f = g(f, h = g(h, c, u, f, a[d + 13], 5, -1444681467), c, u, a[d + 2], 9, -51403784), h, c, a[d + 7], 14, 1735328473), f, h, a[d + 12], 20, -1926607734), u = m(u, f = m(f, h = m(h, c, u, f, a[d + 5], 4, -378558), c, u, a[d + 8], 11, -2022574463), h, c, a[d + 11], 16, 1839030562), f, h, a[d + 14], 23, -35309556), u = m(u, f = m(f, h = m(h, c, u, f, a[d + 1], 4, -1530992060), c, u, a[d + 4], 11, 1272893353), h, c, a[d + 7], 16, -155497632), f, h, a[d + 10], 23, -1094730640), u = m(u, f = m(f, h = m(h, c, u, f, a[d + 13], 4, 681279174), c, u, a[d + 0], 11, -358537222), h, c, a[d + 3], 16, -722521979), f, h, a[d + 6], 23, 76029189), u = m(u, f = m(f, h = m(h, c, u, f, a[d + 9], 4, -640364487), c, u, a[d + 12], 11, -421815835), h, c, a[d + 15], 16, 530742520), f, h, a[d + 2], 23, -995338651), u = y(u, f = y(f, h = y(h, c, u, f, a[d + 0], 6, -198630844), c, u, a[d + 7], 10, 1126891415), h, c, a[d + 14], 15, -1416354905), f, h, a[d + 5], 21, -57434055), u = y(u, f = y(f, h = y(h, c, u, f, a[d + 12], 6, 1700485571), c, u, a[d + 3], 10, -1894986606), h, c, a[d + 10], 15, -1051523), f, h, a[d + 1], 21, -2054922799), u = y(u, f = y(f, h = y(h, c, u, f, a[d + 8], 6, 1873313359), c, u, a[d + 15], 10, -30611744), h, c, a[d + 6], 15, -1560198380), f, h, a[d + 13], 21, 1309151649), u = y(u, f = y(f, h = y(h, c, u, f, a[d + 4], 6, -145523070), c, u, a[d + 11], 10, -1120210379), h, c, a[d + 2], 15, 718787259), f, h, a[d + 9], 21, -343485551), h = h + v >>> 0, c = c + w >>> 0, u = u + x >>> 0, f = f + b >>> 0
                }
                return t.endian([h, c, u, f])
            };
        s._ff = function(e, t, n, i, r, o, s) {
            var a = e + (t & n | ~t & i) + (r >>> 0) + s;
            return (a << o | a >>> 32 - o) + t
        }, s._gg = function(e, t, n, i, r, o, s) {
            var a = e + (t & i | n & ~i) + (r >>> 0) + s;
            return (a << o | a >>> 32 - o) + t
        }, s._hh = function(e, t, n, i, r, o, s) {
            var a = e + (t ^ n ^ i) + (r >>> 0) + s;
            return (a << o | a >>> 32 - o) + t
        }, s._ii = function(e, t, n, i, r, o, s) {
            var a = e + (n ^ (t | ~i)) + (r >>> 0) + s;
            return (a << o | a >>> 32 - o) + t
        }, s._blocksize = 16, s._digestsize = 16, e.exports = function(e, n) {
            if (void 0 === e || null === e) throw new Error("Illegal argument " + e);
            var i = t.wordsToBytes(s(e, n));
            return n && n.asBytes ? i : n && n.asString ? o.bytesToString(i) : t.bytesToHex(i)
        }
    }()
}, function(e, t, n) {
    "use strict";
    var i = function(e) {
        switch (typeof e) {
            case "string":
                return e;
            case "boolean":
                return e ? "true" : "false";
            case "number":
                return isFinite(e) ? e : "";
            default:
                return ""
        }
    };
    e.exports = function(e, t, n, a) {
        return t = t || "&", n = n || "=", null === e && (e = void 0), "object" == typeof e ? o(s(e), function(s) {
            var a = encodeURIComponent(i(s)) + n;
            return r(e[s]) ? o(e[s], function(e) {
                return a + encodeURIComponent(i(e))
            }).join(t) : a + encodeURIComponent(i(e[s]))
        }).join(t) : a ? encodeURIComponent(i(a)) + n + encodeURIComponent(i(e)) : ""
    };
    var r = Array.isArray || function(e) {
        return "[object Array]" === Object.prototype.toString.call(e)
    };

    function o(e, t) {
        if (e.map) return e.map(t);
        for (var n = [], i = 0; i < e.length; i++) n.push(t(e[i], i));
        return n
    }
    var s = Object.keys || function(e) {
        var t = [];
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.push(n);
        return t
    }
}, function(e, t, n) {
    "use strict";

    function i(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    e.exports = function(e, t, n, o) {
        t = t || "&", n = n || "=";
        var s = {};
        if ("string" != typeof e || 0 === e.length) return s;
        var a = /\+/g;
        e = e.split(t);
        var l = 1e3;
        o && "number" == typeof o.maxKeys && (l = o.maxKeys);
        var h = e.length;
        l > 0 && h > l && (h = l);
        for (var c = 0; c < h; ++c) {
            var u, f, d, p, g = e[c].replace(a, "%20"),
                m = g.indexOf(n);
            m >= 0 ? (u = g.substr(0, m), f = g.substr(m + 1)) : (u = g, f = ""), d = decodeURIComponent(u), p = decodeURIComponent(f), i(s, d) ? r(s[d]) ? s[d].push(p) : s[d] = [s[d], p] : s[d] = p
        }
        return s
    };
    var r = Array.isArray || function(e) {
        return "[object Array]" === Object.prototype.toString.call(e)
    }
}, function(e, t, n) {
    "use strict";
    t.decode = t.parse = n(27), t.encode = t.stringify = n(26)
}, function(e, t, n) {
    "use strict";
    e.exports = {
        isString: function(e) {
            return "string" == typeof e
        },
        isObject: function(e) {
            return "object" == typeof e && null !== e
        },
        isNull: function(e) {
            return null === e
        },
        isNullOrUndefined: function(e) {
            return null == e
        }
    }
}, function(e, t) {
    e.exports = function(e) {
        return e.webpackPolyfill || (e.deprecate = function() {}, e.paths = [], e.children || (e.children = []), Object.defineProperty(e, "loaded", {
            enumerable: !0,
            get: function() {
                return e.l
            }
        }), Object.defineProperty(e, "id", {
            enumerable: !0,
            get: function() {
                return e.i
            }
        }), e.webpackPolyfill = 1), e
    }
}, function(e, t, n) {
    (function(e, i) {
        var r; /*! https://mths.be/punycode v1.4.1 by @mathias */
        ! function(o) {
            "object" == typeof t && t && t.nodeType, "object" == typeof e && e && e.nodeType;
            var s = "object" == typeof i && i;
            s.global !== s && s.window !== s && s.self;
            var a, l = 2147483647,
                h = 36,
                c = 1,
                u = 26,
                f = 38,
                d = 700,
                p = 72,
                g = 128,
                m = "-",
                y = /^xn--/,
                v = /[^\x20-\x7E]/,
                w = /[\x2E\u3002\uFF0E\uFF61]/g,
                x = {
                    overflow: "Overflow: input needs wider integers to process",
                    "not-basic": "Illegal input >= 0x80 (not a basic code point)",
                    "invalid-input": "Invalid input"
                },
                b = h - c,
                k = Math.floor,
                S = String.fromCharCode;

            function I(e) {
                throw new RangeError(x[e])
            }

            function T(e, t) {
                for (var n = e.length, i = []; n--;) i[n] = t(e[n]);
                return i
            }

            function E(e, t) {
                var n = e.split("@"),
                    i = "";
                return n.length > 1 && (i = n[0] + "@", e = n[1]), i + T((e = e.replace(w, ".")).split("."), t).join(".")
            }

            function M(e) {
                for (var t, n, i = [], r = 0, o = e.length; r < o;)(t = e.charCodeAt(r++)) >= 55296 && t <= 56319 && r < o ? 56320 == (64512 & (n = e.charCodeAt(r++))) ? i.push(((1023 & t) << 10) + (1023 & n) + 65536) : (i.push(t), r--) : i.push(t);
                return i
            }

            function A(e) {
                return T(e, function(e) {
                    var t = "";
                    return e > 65535 && (t += S((e -= 65536) >>> 10 & 1023 | 55296), e = 56320 | 1023 & e), t + S(e)
                }).join("")
            }

            function P(e) {
                return e - 48 < 10 ? e - 22 : e - 65 < 26 ? e - 65 : e - 97 < 26 ? e - 97 : h
            }

            function B(e, t) {
                return e + 22 + 75 * (e < 26) - ((0 != t) << 5)
            }

            function C(e, t, n) {
                var i = 0;
                for (e = n ? k(e / d) : e >> 1, e += k(e / t); e > b * u >> 1; i += h) e = k(e / b);
                return k(i + (b + 1) * e / (e + f))
            }

            function O(e) {
                var t, n, i, r, o, s, a, f, d, y, v = [],
                    w = e.length,
                    x = 0,
                    b = g,
                    S = p;
                for ((n = e.lastIndexOf(m)) < 0 && (n = 0), i = 0; i < n; ++i) e.charCodeAt(i) >= 128 && I("not-basic"), v.push(e.charCodeAt(i));
                for (r = n > 0 ? n + 1 : 0; r < w;) {
                    for (o = x, s = 1, a = h; r >= w && I("invalid-input"), ((f = P(e.charCodeAt(r++))) >= h || f > k((l - x) / s)) && I("overflow"), x += f * s, !(f < (d = a <= S ? c : a >= S + u ? u : a - S)); a += h) s > k(l / (y = h - d)) && I("overflow"), s *= y;
                    S = C(x - o, t = v.length + 1, 0 == o), k(x / t) > l - b && I("overflow"), b += k(x / t), x %= t, v.splice(x++, 0, b)
                }
                return A(v)
            }

            function R(e) {
                var t, n, i, r, o, s, a, f, d, y, v, w, x, b, T, E = [];
                for (w = (e = M(e)).length, t = g, n = 0, o = p, s = 0; s < w; ++s)(v = e[s]) < 128 && E.push(S(v));
                for (i = r = E.length, r && E.push(m); i < w;) {
                    for (a = l, s = 0; s < w; ++s)(v = e[s]) >= t && v < a && (a = v);
                    for (a - t > k((l - n) / (x = i + 1)) && I("overflow"), n += (a - t) * x, t = a, s = 0; s < w; ++s)
                        if ((v = e[s]) < t && ++n > l && I("overflow"), v == t) {
                            for (f = n, d = h; !(f < (y = d <= o ? c : d >= o + u ? u : d - o)); d += h) T = f - y, b = h - y, E.push(S(B(y + T % b, 0))), f = k(T / b);
                            E.push(S(B(f, 0))), o = C(n, x, i == r), n = 0, ++i
                        }++n, ++t
                }
                return E.join("")
            }
            a = {
                version: "1.4.1",
                ucs2: {
                    decode: M,
                    encode: A
                },
                decode: O,
                encode: R,
                toASCII: function(e) {
                    return E(e, function(e) {
                        return v.test(e) ? "xn--" + R(e) : e
                    })
                },
                toUnicode: function(e) {
                    return E(e, function(e) {
                        return y.test(e) ? O(e.slice(4).toLowerCase()) : e
                    })
                }
            }, void 0 === (r = function() {
                return a
            }.call(t, n, t, e)) || (e.exports = r)
        }()
    }).call(this, n(30)(e), n(17))
}, function(e, t, n) {
    "use strict";
    var i = n(31),
        r = n(29);

    function o() {
        this.protocol = null, this.slashes = null, this.auth = null, this.host = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.query = null, this.pathname = null, this.path = null, this.href = null
    }
    t.parse = w, t.resolve = function(e, t) {
        return w(e, !1, !0).resolve(t)
    }, t.resolveObject = function(e, t) {
        return e ? w(e, !1, !0).resolveObject(t) : t
    }, t.format = function(e) {
        return r.isString(e) && (e = w(e)), e instanceof o ? e.format() : o.prototype.format.call(e)
    }, t.Url = o;
    var s = /^([a-z0-9.+-]+:)/i,
        a = /:[0-9]*$/,
        l = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,
        h = ["{", "}", "|", "\\", "^", "`"].concat(["<", ">", '"', "`", " ", "\r", "\n", "\t"]),
        c = ["'"].concat(h),
        u = ["%", "/", "?", ";", "#"].concat(c),
        f = ["/", "?", "#"],
        d = /^[+a-z0-9A-Z_-]{0,63}$/,
        p = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
        g = {
            javascript: !0,
            "javascript:": !0
        },
        m = {
            javascript: !0,
            "javascript:": !0
        },
        y = {
            http: !0,
            https: !0,
            ftp: !0,
            gopher: !0,
            file: !0,
            "http:": !0,
            "https:": !0,
            "ftp:": !0,
            "gopher:": !0,
            "file:": !0
        },
        v = n(28);

    function w(e, t, n) {
        if (e && r.isObject(e) && e instanceof o) return e;
        var i = new o;
        return i.parse(e, t, n), i
    }
    o.prototype.parse = function(e, t, n) {
        if (!r.isString(e)) throw new TypeError("Parameter 'url' must be a string, not " + typeof e);
        var o = e.indexOf("?"),
            a = -1 !== o && o < e.indexOf("#") ? "?" : "#",
            h = e.split(a);
        h[0] = h[0].replace(/\\/g, "/");
        var w = e = h.join(a);
        if (w = w.trim(), !n && 1 === e.split("#").length) {
            var x = l.exec(w);
            if (x) return this.path = w, this.href = w, this.pathname = x[1], x[2] ? (this.search = x[2], this.query = t ? v.parse(this.search.substr(1)) : this.search.substr(1)) : t && (this.search = "", this.query = {}), this
        }
        var b = s.exec(w);
        if (b) {
            var k = (b = b[0]).toLowerCase();
            this.protocol = k, w = w.substr(b.length)
        }
        if (n || b || w.match(/^\/\/[^@\/]+@[^@\/]+/)) {
            var S = "//" === w.substr(0, 2);
            !S || b && m[b] || (w = w.substr(2), this.slashes = !0)
        }
        if (!m[b] && (S || b && !y[b])) {
            for (var I, T, E = -1, M = 0; M < f.length; M++) - 1 !== (A = w.indexOf(f[M])) && (-1 === E || A < E) && (E = A);
            for (-1 !== (T = -1 === E ? w.lastIndexOf("@") : w.lastIndexOf("@", E)) && (I = w.slice(0, T), w = w.slice(T + 1), this.auth = decodeURIComponent(I)), E = -1, M = 0; M < u.length; M++) {
                var A; - 1 !== (A = w.indexOf(u[M])) && (-1 === E || A < E) && (E = A)
            } - 1 === E && (E = w.length), this.host = w.slice(0, E), w = w.slice(E), this.parseHost(), this.hostname = this.hostname || "";
            var P = "[" === this.hostname[0] && "]" === this.hostname[this.hostname.length - 1];
            if (!P)
                for (var B = this.hostname.split(/\./), C = (M = 0, B.length); M < C; M++) {
                    var O = B[M];
                    if (O && !O.match(d)) {
                        for (var R = "", D = 0, U = O.length; D < U; D++) O.charCodeAt(D) > 127 ? R += "x" : R += O[D];
                        if (!R.match(d)) {
                            var _ = B.slice(0, M),
                                j = B.slice(M + 1),
                                L = O.match(p);
                            L && (_.push(L[1]), j.unshift(L[2])), j.length && (w = "/" + j.join(".") + w), this.hostname = _.join(".");
                            break
                        }
                    }
                }
            this.hostname.length > 255 ? this.hostname = "" : this.hostname = this.hostname.toLowerCase(), P || (this.hostname = i.toASCII(this.hostname));
            var H = this.port ? ":" + this.port : "",
                V = this.hostname || "";
            this.host = V + H, this.href += this.host, P && (this.hostname = this.hostname.substr(1, this.hostname.length - 2), "/" !== w[0] && (w = "/" + w))
        }
        if (!g[k])
            for (M = 0, C = c.length; M < C; M++) {
                var Y = c[M];
                if (-1 !== w.indexOf(Y)) {
                    var F = encodeURIComponent(Y);
                    F === Y && (F = escape(Y)), w = w.split(Y).join(F)
                }
            }
        var q = w.indexOf("#"); - 1 !== q && (this.hash = w.substr(q), w = w.slice(0, q));
        var W = w.indexOf("?");
        if (-1 !== W ? (this.search = w.substr(W), this.query = w.substr(W + 1), t && (this.query = v.parse(this.query)), w = w.slice(0, W)) : t && (this.search = "", this.query = {}), w && (this.pathname = w), y[k] && this.hostname && !this.pathname && (this.pathname = "/"), this.pathname || this.search) {
            H = this.pathname || "";
            var X = this.search || "";
            this.path = H + X
        }
        return this.href = this.format(), this
    }, o.prototype.format = function() {
        var e = this.auth || "";
        e && (e = (e = encodeURIComponent(e)).replace(/%3A/i, ":"), e += "@");
        var t = this.protocol || "",
            n = this.pathname || "",
            i = this.hash || "",
            o = !1,
            s = "";
        this.host ? o = e + this.host : this.hostname && (o = e + (-1 === this.hostname.indexOf(":") ? this.hostname : "[" + this.hostname + "]"), this.port && (o += ":" + this.port)), this.query && r.isObject(this.query) && Object.keys(this.query).length && (s = v.stringify(this.query));
        var a = this.search || s && "?" + s || "";
        return t && ":" !== t.substr(-1) && (t += ":"), this.slashes || (!t || y[t]) && !1 !== o ? (o = "//" + (o || ""), n && "/" !== n.charAt(0) && (n = "/" + n)) : o || (o = ""), i && "#" !== i.charAt(0) && (i = "#" + i), a && "?" !== a.charAt(0) && (a = "?" + a), t + o + (n = n.replace(/[?#]/g, function(e) {
            return encodeURIComponent(e)
        })) + (a = a.replace("#", "%23")) + i
    }, o.prototype.resolve = function(e) {
        return this.resolveObject(w(e, !1, !0)).format()
    }, o.prototype.resolveObject = function(e) {
        if (r.isString(e)) {
            var t = new o;
            t.parse(e, !1, !0), e = t
        }
        for (var n = new o, i = Object.keys(this), s = 0; s < i.length; s++) {
            var a = i[s];
            n[a] = this[a]
        }
        if (n.hash = e.hash, "" === e.href) return n.href = n.format(), n;
        if (e.slashes && !e.protocol) {
            for (var l = Object.keys(e), h = 0; h < l.length; h++) {
                var c = l[h];
                "protocol" !== c && (n[c] = e[c])
            }
            return y[n.protocol] && n.hostname && !n.pathname && (n.path = n.pathname = "/"), n.href = n.format(), n
        }
        if (e.protocol && e.protocol !== n.protocol) {
            if (!y[e.protocol]) {
                for (var u = Object.keys(e), f = 0; f < u.length; f++) {
                    var d = u[f];
                    n[d] = e[d]
                }
                return n.href = n.format(), n
            }
            if (n.protocol = e.protocol, e.host || m[e.protocol]) n.pathname = e.pathname;
            else {
                for (var p = (e.pathname || "").split("/"); p.length && !(e.host = p.shift()););
                e.host || (e.host = ""), e.hostname || (e.hostname = ""), "" !== p[0] && p.unshift(""), p.length < 2 && p.unshift(""), n.pathname = p.join("/")
            }
            if (n.search = e.search, n.query = e.query, n.host = e.host || "", n.auth = e.auth, n.hostname = e.hostname || e.host, n.port = e.port, n.pathname || n.search) {
                var g = n.pathname || "",
                    v = n.search || "";
                n.path = g + v
            }
            return n.slashes = n.slashes || e.slashes, n.href = n.format(), n
        }
        var w = n.pathname && "/" === n.pathname.charAt(0),
            x = e.host || e.pathname && "/" === e.pathname.charAt(0),
            b = x || w || n.host && e.pathname,
            k = b,
            S = n.pathname && n.pathname.split("/") || [],
            I = (p = e.pathname && e.pathname.split("/") || [], n.protocol && !y[n.protocol]);
        if (I && (n.hostname = "", n.port = null, n.host && ("" === S[0] ? S[0] = n.host : S.unshift(n.host)), n.host = "", e.protocol && (e.hostname = null, e.port = null, e.host && ("" === p[0] ? p[0] = e.host : p.unshift(e.host)), e.host = null), b = b && ("" === p[0] || "" === S[0])), x) n.host = e.host || "" === e.host ? e.host : n.host, n.hostname = e.hostname || "" === e.hostname ? e.hostname : n.hostname, n.search = e.search, n.query = e.query, S = p;
        else if (p.length) S || (S = []), S.pop(), S = S.concat(p), n.search = e.search, n.query = e.query;
        else if (!r.isNullOrUndefined(e.search)) return I && (n.hostname = n.host = S.shift(), (P = !!(n.host && n.host.indexOf("@") > 0) && n.host.split("@")) && (n.auth = P.shift(), n.host = n.hostname = P.shift())), n.search = e.search, n.query = e.query, r.isNull(n.pathname) && r.isNull(n.search) || (n.path = (n.pathname ? n.pathname : "") + (n.search ? n.search : "")), n.href = n.format(), n;
        if (!S.length) return n.pathname = null, n.search ? n.path = "/" + n.search : n.path = null, n.href = n.format(), n;
        for (var T = S.slice(-1)[0], E = (n.host || e.host || S.length > 1) && ("." === T || ".." === T) || "" === T, M = 0, A = S.length; A >= 0; A--) "." === (T = S[A]) ? S.splice(A, 1) : ".." === T ? (S.splice(A, 1), M++) : M && (S.splice(A, 1), M--);
        if (!b && !k)
            for (; M--; M) S.unshift("..");
        !b || "" === S[0] || S[0] && "/" === S[0].charAt(0) || S.unshift(""), E && "/" !== S.join("/").substr(-1) && S.push("");
        var P, B = "" === S[0] || S[0] && "/" === S[0].charAt(0);
        return I && (n.hostname = n.host = B ? "" : S.length ? S.shift() : "", (P = !!(n.host && n.host.indexOf("@") > 0) && n.host.split("@")) && (n.auth = P.shift(), n.host = n.hostname = P.shift())), (b = b || n.host && S.length) && !B && S.unshift(""), S.length ? n.pathname = S.join("/") : (n.pathname = null, n.path = null), r.isNull(n.pathname) && r.isNull(n.search) || (n.path = (n.pathname ? n.pathname : "") + (n.search ? n.search : "")), n.auth = e.auth || n.auth, n.slashes = n.slashes || e.slashes, n.href = n.format(), n
    }, o.prototype.parseHost = function() {
        var e = this.host,
            t = a.exec(e);
        t && (":" !== (t = t[0]) && (this.port = t.substr(1)), e = e.substr(0, e.length - t.length)), e && (this.hostname = e)
    }
}, function(e, t, n) {
    var i = n(32),
        r = n(25);

    function o(e, t, n, i, r) {
        "localhost" == location.hostname && (window.location.hostname = "127.0.0.1"), this.debugLog = !1, this.baseUrl = e, this.lobbySize = n, this.devPort = t, this.lobbySpread = i, this.rawIPs = !!r, this.server = void 0, this.gameIndex = void 0, this.callback = void 0, this.errorCallback = void 0, this.processServers(vultr.servers)
    }
    o.prototype.regionInfo = {
        0: {
            name: "Local",
            latitude: 0,
            longitude: 0
        },
        1: {
            name: "New Jersey",
            latitude: 40.1393329,
            longitude: -75.8521818
        },
        2: {
            name: "Chicago",
            latitude: 41.8339037,
            longitude: -87.872238
        },
        3: {
            name: "Dallas",
            latitude: 32.8208751,
            longitude: -96.8714229
        },
        4: {
            name: "Seattle",
            latitude: 47.6149942,
            longitude: -122.4759879
        },
        5: {
            name: "Los Angeles",
            latitude: 34.0207504,
            longitude: -118.691914
        },
        6: {
            name: "Atlanta",
            latitude: 33.7676334,
            longitude: -84.5610332
        },
        7: {
            name: "Amsterdam",
            latitude: 52.3745287,
            longitude: 4.7581878
        },
        8: {
            name: "London",
            latitude: 51.5283063,
            longitude: -.382486
        },
        9: {
            name: "Frankfurt",
            latitude: 50.1211273,
            longitude: 8.496137
        },
        12: {
            name: "Silicon Valley",
            latitude: 37.4024714,
            longitude: -122.3219752
        },
        19: {
            name: "Sydney",
            latitude: -33.8479715,
            longitude: 150.651084
        },
        24: {
            name: "Paris",
            latitude: 48.8588376,
            longitude: 2.2773454
        },
        25: {
            name: "Tokyo",
            latitude: 35.6732615,
            longitude: 139.569959
        },
        39: {
            name: "Miami",
            latitude: 25.7823071,
            longitude: -80.3012156
        },
        40: {
            name: "Singapore",
            latitude: 1.3147268,
            longitude: 103.7065876
        }
    }, o.prototype.start = function(e, t) {
        this.callback = e, this.errorCallback = t;
        var n = this.parseServerQuery();
        n ? (this.log("Found server in query."), this.password = n[3], this.connect(n[0], n[1], n[2])) : (this.log("Pinging servers..."), this.pingServers())
    }, o.prototype.parseServerQuery = function() {
        var e = i.parse(location.href, !0),
            t = e.query.server;
        if ("string" == typeof t) {
            var n = t.split(":");
            if (3 == n.length) return [parseInt(n[0]), parseInt(n[1]), parseInt(n[2]), e.query.password];
            this.errorCallback("Invalid number of server parameters in " + t)
        }
    }, o.prototype.findServer = function(e, t) {
        var n = this.servers[e];
        if (Array.isArray(n)) {
            for (var i = 0; i < n.length; i++) {
                var r = n[i];
                if (r.index == t) return r
            }
            console.warn("Could not find server in region " + e + " with index " + t + ".")
        } else this.errorCallback("No server list for region " + e)
    }, o.prototype.pingServers = function() {
        var e = this,
            t = [];
        for (var n in this.servers)
            if (this.servers.hasOwnProperty(n)) {
                var i = this.servers[n],
                    r = i[Math.floor(Math.random() * i.length)];
                void 0 != r ? function(i, r) {
                    var o = new XMLHttpRequest;
                    o.onreadystatechange = function(i) {
                        var o = i.target;
                        if (4 == o.readyState)
                            if (200 == o.status) {
                                for (var s = 0; s < t.length; s++) t[s].abort();
                                e.log("Connecting to region", r.region);
                                var a = e.seekServer(r.region);
                                e.connect(a[0], a[1], a[2])
                            } else console.warn("Error pinging " + r.ip + " in region " + n)
                    };
                    var s = "//" + e.serverAddress(r.ip, !0) + ":" + e.serverPort(r) + "/ping";
                    o.open("GET", s, !0), o.send(null), e.log("Pinging", s), t.push(o)
                }(0, r) : console.log("No target server for region " + n)
            }
    }, o.prototype.seekServer = function(e, t, n) {
        void 0 == n && (n = "random"), void 0 == t && (t = !1);
        const i = ["random"];
        var r = this.lobbySize,
            o = this.lobbySpread,
            s = this.servers[e].flatMap(function(e) {
                var t = 0;
                return e.games.map(function(n) {
                    var i = t++;
                    return {
                        region: e.region,
                        index: e.index * e.games.length + i,
                        gameIndex: i,
                        gameCount: e.games.length,
                        playerCount: n.playerCount,
                        isPrivate: n.isPrivate
                    }
                })
            }).filter(function(e) {
                return !e.isPrivate
            }).filter(function(e) {
                return !t || 0 == e.playerCount && e.gameIndex >= e.gameCount / 2
            }).filter(function(e) {
                return "random" == n || i[e.index % i.length].key == n
            }).sort(function(e, t) {
                return t.playerCount - e.playerCount
            }).filter(function(e) {
                return e.playerCount < r
            });
        if (t && s.reverse(), 0 != s.length) {
            var a = Math.min(o, s.length),
                l = Math.floor(Math.random() * a),
                h = s[l = Math.min(l, s.length - 1)],
                c = h.region,
                u = (l = Math.floor(h.index / h.gameCount), h.index % h.gameCount);
            return this.log("Found server."), [c, l, u]
        }
        this.errorCallback("No open servers.")
    }, o.prototype.connect = function(e, t, n) {
        if (!this.connected) {
            var i = this.findServer(e, t);
            void 0 != i ? (this.log("Connecting to server", i, "with game index", n), i.games[n].playerCount >= this.lobbySize ? this.errorCallback("Server is already full.") : (window.history.replaceState(document.title, document.title, this.generateHref(e, t, n, this.password)), this.server = i, this.gameIndex = n, this.log("Calling callback with address", this.serverAddress(i.ip), "on port", this.serverPort(i), "with game index", n), this.callback(this.serverAddress(i.ip), this.serverPort(i), n))) : this.errorCallback("Failed to find server for region " + e + " and index " + t)
        }
    }, o.prototype.switchServer = function(e, t, n, i) {
        this.switchingServers = !0, window.location.href = this.generateHref(e, t, n, i)
    }, o.prototype.generateHref = function(e, t, n, i) {
        var r = "/?server=" + e + ":" + t + ":" + n;
        return i && (r += "&password=" + encodeURIComponent(i)), r
    }, o.prototype.serverAddress = function(e, t) {
        return "127.0.0.1" == e || "7f000001" == e || "903d62ef5d1c2fecdcaeb5e7dd485eff" == e ? window.location.hostname : this.rawIPs ? t ? "ip_" + this.hashIP(e) + "." + this.baseUrl : e : "ip_" + e + "." + this.baseUrl
    }, o.prototype.serverPort = function(e) {
        return 0 == e.region ? this.devPort : location.protocol.startsWith("https") ? 443 : 80
    }, o.prototype.processServers = function(e) {
        for (var t = {}, n = 0; n < e.length; n++) {
            var i = e[n],
                r = t[i.region];
            void 0 == r && (r = [], t[i.region] = r), r.push(i)
        }
        for (var o in t) t[o] = t[o].sort(function(e, t) {
            return e.index - t.index
        });
        this.servers = t
    }, o.prototype.ipToHex = function(e) {
        return e.split(".").map(e => ("00" + parseInt(e).toString(16)).substr(-2)).join("").toLowerCase()
    }, o.prototype.hashIP = function(e) {
        return r(this.ipToHex(e))
    }, o.prototype.log = function() {
        return this.debugLog ? console.log.apply(void 0, arguments) : console.verbose ? console.verbose.apply(void 0, arguments) : void 0
    }, window.testVultrClient = function() {
        var e = 1;

        function t(t, n) {
            (t = `${t}`) == (n = `${n}`) ? console.log(`Assert ${e} passed.`): console.warn(`Assert ${e} failed. Expected ${n}, got ${t}.`), e++
        }
        var n = new o("test.io", -1, 5, 1, !1);
        n.errorCallback = function(e) {}, n.processServers(function(e) {
            var t = [];
            for (var n in e)
                for (var i = e[n], r = 0; r < i.length; r++) t.push({
                    ip: n + ":" + r,
                    scheme: "testing",
                    region: n,
                    index: r,
                    games: i[r].map(e => ({
                        playerCount: e,
                        isPrivate: !1
                    }))
                });
            return t
        }({
            1: [
                [0, 0, 0, 0],
                [0, 0, 0, 0]
            ],
            2: [
                [5, 1, 0, 0],
                [0, 0, 0, 0]
            ],
            3: [
                [5, 0, 1, 5],
                [0, 0, 0, 0]
            ],
            4: [
                [5, 1, 1, 5],
                [1, 0, 0, 0]
            ],
            5: [
                [5, 1, 1, 5],
                [1, 0, 4, 0]
            ],
            6: [
                [5, 5, 5, 5],
                [2, 3, 1, 4]
            ],
            7: [
                [5, 5, 5, 5],
                [5, 5, 5, 5]
            ]
        })), t(n.seekServer(1, !1), [1, 0, 0]), t(n.seekServer(1, !0), [1, 1, 3]), t(n.seekServer(2, !1), [2, 0, 1]), t(n.seekServer(2, !0), [2, 1, 3]), t(n.seekServer(3, !1), [3, 0, 2]), t(n.seekServer(3, !0), [3, 1, 3]), t(n.seekServer(4, !1), [4, 0, 1]), t(n.seekServer(4, !0), [4, 1, 3]), t(n.seekServer(5, !1), [5, 1, 2]), t(n.seekServer(5, !0), [5, 1, 3]), t(n.seekServer(6, !1), [6, 1, 3]), t(n.seekServer(6, !0), void 0), t(n.seekServer(7, !1), void 0), t(n.seekServer(7, !0), void 0), console.log("Tests passed.")
    };
    var s = function(e, t) {
        return e.concat(t)
    };
    Array.prototype.flatMap = function(e) {
        return function(e, t) {
            return t.map(e).reduce(s, [])
        }(e, this)
    }, e.exports = o
}, function(e, t) {
    e.exports.obj = function(e, t) {
        var n;
        this.sounds = [], this.active = !0, this.play = function(t, i, r) {
            i && this.active && ((n = this.sounds[t]) || (n = new Howl({
                src: ".././sound/" + t + ".mp3"
            }), this.sounds[t] = n), r && n.isPlaying || (n.isPlaying = !0, n.play(), n.volume((i || 1) * e.volumeMult), n.loop(r)))
        }, this.toggleMute = function(e, t) {
            (n = this.sounds[e]) && n.mute(t)
        }, this.stop = function(e) {
            (n = this.sounds[e]) && (n.stop(), n.isPlaying = !1)
        }
    }
}, function(e, t) {
    e.exports = function(e, t, n, i, r, o, s, a, l) {
        this.addProjectile = function(h, c, u, f, d, p, g, m, y) {
            for (var v, w = o.projectiles[p], x = 0; x < t.length; ++x)
                if (!t[x].active) {
                    v = t[x];
                    break
                }
            return v || ((v = new e(n, i, r, o, s, a, l)).sid = t.length, t.push(v)), v.init(p, h, c, u, d, w.dmg, f, w.scale, g), v.ignoreObj = m, v.layer = y || w.layer, v.src = w.src, v
        }
    }
}, function(e, t) {
    e.exports = function(e, t, n, i, r, o, s) {
        this.init = function(e, t, n, i, r, o, a, l, h) {
            this.active = !0, this.indx = e, this.x = t, this.y = n, this.dir = i, this.skipMov = !0, this.speed = r, this.dmg = o, this.scale = l, this.range = a, this.owner = h, s && (this.sentTo = {})
        };
        var a, l = [];
        this.update = function(h) {
            if (this.active) {
                var c, u = this.speed * h;
                if (this.skipMov ? this.skipMov = !1 : (this.x += u * Math.cos(this.dir), this.y += u * Math.sin(this.dir), this.range -= u, this.range <= 0 && (this.x += this.range * Math.cos(this.dir), this.y += this.range * Math.sin(this.dir), u = 1, this.range = 0, this.active = !1)), s) {
                    for (var f = 0; f < e.length; ++f) !this.sentTo[e[f].id] && e[f].canSee(this) && (this.sentTo[e[f].id] = 1, s.send(e[f].id, "18", o.fixTo(this.x, 1), o.fixTo(this.y, 1), o.fixTo(this.dir, 2), o.fixTo(this.range, 1), this.speed, this.indx, this.layer, this.sid));
                    for (l.length = 0, f = 0; f < e.length + t.length; ++f) !(a = e[f] || t[f - e.length]).alive || a == this.owner || this.owner.team && a.team == this.owner.team || o.lineInRect(a.x - a.scale, a.y - a.scale, a.x + a.scale, a.y + a.scale, this.x, this.y, this.x + u * Math.cos(this.dir), this.y + u * Math.sin(this.dir)) && l.push(a);
                    for (var d = n.getGridArrays(this.x, this.y, this.scale), p = 0; p < d.length; ++p)
                        for (var g = 0; g < d[p].length; ++g) c = (a = d[p][g]).getScale(), a.active && this.ignoreObj != a.sid && this.layer <= a.layer && l.indexOf(a) < 0 && !a.ignoreCollision && o.lineInRect(a.x - c, a.y - c, a.x + c, a.y + c, this.x, this.y, this.x + u * Math.cos(this.dir), this.y + u * Math.sin(this.dir)) && l.push(a);
                    if (l.length > 0) {
                        var m = null,
                            y = null,
                            v = null;
                        for (f = 0; f < l.length; ++f) v = o.getDistance(this.x, this.y, l[f].x, l[f].y), (null == y || v < y) && (y = v, m = l[f]);
                        if (m.isPlayer || m.isAI) {
                            var w = .3 * (m.weightM || 1);
                            m.xVel += w * Math.cos(this.dir), m.yVel += w * Math.sin(this.dir), void 0 != m.weaponIndex && i.weapons[m.weaponIndex].shield && o.getAngleDist(this.dir + Math.PI, m.dir) <= r.shieldAngle || m.changeHealth(-this.dmg, this.owner, this.owner)
                        } else
                            for (m.projDmg && m.health && m.changeHealth(-this.dmg) && n.disableObj(m), f = 0; f < e.length; ++f) e[f].active && (m.sentTo[e[f].id] && (m.active ? e[f].canSee(m) && s.send(e[f].id, "8", o.fixTo(this.dir, 2), m.sid) : s.send(e[f].id, "12", m.sid)), m.active || m.owner != e[f] || e[f].changeItemCount(m.group.id, -1));
                        for (this.active = !1, f = 0; f < e.length; ++f) this.sentTo[e[f].id] && s.send(e[f].id, "19", this.sid, o.fixTo(y, 1))
                    }
                }
            }
        }
    }
}, function(e, t) {
    e.exports.hats = [{
        id: 45,
        name: "Shame!",
        dontSell: !0,
        price: 0,
        scale: 120,
        desc: "hacks are for losers"
    }, {
        id: 51,
        name: "Moo Cap",
        price: 0,
        scale: 120,
        desc: "coolest mooer around"
    }, {
        id: 101,
        name: "A Custom Hat",
        price: 0,
        scale: 120,
        desc: "So... It's a custom hat"
    }, {
        id: 50,
        name: "Apple Cap",
        price: 0,
        scale: 120,
        desc: "apple farms remembers"
    }, {
        id: 28,
        name: "Cow Head",
        price: 0,
        scale: 120,
        desc: "MooMoo!!"
    }, {
        id: 29,
        name: "Pig Head",
        price: 0,
        scale: 120,
        desc: "no effect"
    }, {
        id: 30,
        name: "Fluff Head",
        price: 0,
        scale: 120,
        desc: "no effect"
    }, {
        id: 36,
        name: "Pandou Head",
        price: 0,
        scale: 120,
        desc: "no effect"
    }, {
        id: 37,
        name: "Bear Head",
        price: 0,
        scale: 120,
        desc: "no effect"
    }, {
        id: 38,
        name: "Monkey Head",
        price: 0,
        scale: 120,
        desc: "no effect"
    }, {
        id: 44,
        name: "Polar Head",
        price: 0,
        scale: 120,
        desc: "no effect"
    }, {
        id: 35,
        name: "Fez Hat",
        price: 0,
        scale: 120,
        desc: "no effect"
    }, {
        id: 42,
        name: "Enigma Hat",
        price: 0,
        scale: 120,
        desc: "join the enigma army"
    }, {
        id: 43,
        name: "Blitz Hat",
        price: 0,
        scale: 120,
        desc:  "I don't do moomoo.io anymore"
    }, {
        id: 49,
        name: "Bob XIII Hat",
        price: 0,
        scale: 120,
        desc: "I'm dead."
    }, {
        id: 8,
        name: "Bummle Hat",
        price: 100,
        scale: 120,
        desc: "no effect"
    }, {
        id: 2,
        name: "Straw Hat",
        price: 500,
        scale: 120,
        desc: "no effect"
    }, {
        id: 15,
        name: "Winter Cap",
        price: 600,
        scale: 120,
        desc: "allows you to move at normal speed in snow",
        coldM: 1
    }, {
        id: 5,
        name: "Cowboy Hat",
        price: 1e3,
        scale: 120,
        desc: "no effect"
    }, {
        id: 4,
        name: "Ranger Hat",
        price: 2e3,
        scale: 120,
        desc: "no effect"
    }, {
        id: 18,
        name: "Explorer Hat",
        price: 2e3,
        scale: 120,
        desc: "no effect"
    }, {
        id: 31,
        name: "Flipper Hat",
        price: 2500,
        scale: 120,
        desc: "have more control while in water",
        watrImm: !0
    }, {
        id: 1,
        name: "Marksman Cap",
        price: 3e3,
        scale: 120,
        desc: "increases arrow speed and range",
        aMlt: 1.3
    }, {
        id: 10,
        name: "Bush Gear",
        price: 3e3,
        scale: 160,
        desc: "allows you to disguise yourself as a bush, although hackers can see you"
    }, {
        id: 48,
        name: "Halo",
        price: 3e3,
        scale: 120,
        desc: "no effect"
    }, {
        id: 6,
        name: "SWAT Gear",
        price: 4e3,
        scale: 120,
        desc: "reduces damage taken but slows movement",
        spdMult: .94,
        dmgMult: .75
    }, {
        id: 23,
        name: "Anti Venom Gear",
        price: 4e3,
        scale: 120,
        desc: "makes you immune to poison",
        poisonRes: 1
    }, {
        id: 13,
        name: "A Mobile Ambulance",
        price: 5e3,
        scale: 110,
        desc: "Become a mobile ambulance. Slowly regenerates health over time",
        healthRegen: 3
    }, {
        id: 9,
        name: "Miners Helmet",
        price: 5e3,
        scale: 120,
        desc: "earn 1 extra gold per resource",
        extraGold: 1
    }, {
        id: 32,
        name: "Musketeer Hat",
        price: 5e3,
        scale: 120,
        desc: "reduces cost of projectiles",
        projCost: .5
    }, {
        id: 7,
        name: "Bull Helmet",
        price: 6e3,
        scale: 120,
        desc: "increases damage done but drains health",
        healthRegen: -5,
        dmgMultO: 1.5,
        spdMult: .96
    }, {
        id: 22,
        name: "EMP Helmet",
        price: 6e3,
        scale: 120,
        desc: "turrets won't attack but you move slower",
        antiTurret: 1,
        spdMult: .7
    }, {
        id: 12,
        name: "Booster Hat",
        price: 6e3,
        scale: 120,
        desc: "increases your movement speed",
        spdMult: 1.16
    }, {
        id: 26,
        name: "Barbarian Armor",
        price: 8e3,
        scale: 120,
        desc: "knocks back enemies that attack you",
        dmgK: .6
    }, {
        id: 21,
        name: "Plague Doctor Mask",
        price: 1e4,
        scale: 120,
        desc: "Spread the disease. Melee attacks deal poison damage",
        poisonDmg: 5,
        poisonTime: 6
    }, {
        id: 46,
        name: "Bull Camoflauge",
        price: 1e4,
        scale: 120,
        desc: "How did you steal the face of a bull? bulls won't target you unless you attack them",
        bullRepel: 1
    }, {
        id: 14,
        name: "Windmill Hat",
        topSprite: !0,
        price: 1e4,
        scale: 120,
        desc: "generates points while worn",
        pps: 1.5
    }, {
        id: 11,
        name: "Spike Gear",
        topSprite: !0,
        price: 1e4,
        scale: 120,
        desc: "deal damage to players that damage you",
        dmg: .45
    }, {
        id: 53,
        name: "Turret Gear",
        topSprite: !0,
        price: 1e4,
        scale: 120,
        desc: "This is heavy.",
        turret: {
            proj: 1,
            range: 700,
            rate: 2500
        },
        spdMult: .5
    }, {
        id: 20,
        name: "Samurai Armor",
        price: 12e3,
        scale: 120,
        desc: "Become the legendary samurai! Increased attack speed and fire rate",
        atkSpd: .78
    }, {
        id: 16,
        name: "The Cult's Armor",
        price: 12e3,
        scale: 120,
        desc: "The ancient armor of the MooCult",
        healD: .4
    }, {
        id: 27,
        name: "Scavenger Gear",
        price: 15e3,
        scale: 120,
        desc: "earn double points for each kill",
        kScrM: 2
    }, {
        id: 40,
        name: "Destruction Helmet",
        price: 15e3,
        scale: 120,
        desc: "increased damage to buildings but slower movement",
        spdMult: .3,
        bDmg: 3.3
    }, {
        id: 52,
        name: "Thief Gear",
        price: 15e3,
        scale: 120,
        desc: "steal half of a players gold when you kill them",
        goldSteal: .5
    }], e.exports.accessories = [{
        id: 12,
        name: "Snowball",
        price: 1e3,
        scale: 105,
        xOff: 18,
        desc: "no effect"
    }, {
        id: 9,
        name: "Tree Cape",
        price: 1e3,
        scale: 90,
        desc: "no effect"
    }, {
        id: 10,
        name: "Stone Cape",
        price: 1e3,
        scale: 90,
        desc: "no effect"
    }, {
        id: 3,
        name: "Cookie Cape",
        price: 1500,
        scale: 90,
        desc: "no effect"
    }, {
        id: 8,
        name: "Cow Cape",
        price: 2e3,
        scale: 90,
        desc: "no effect"
    }, {
        id: 11,
        name: "Monkey Tail",
        price: 2e3,
        scale: 97,
        xOff: 25,
        desc: "Super speed but reduced damage",
        spdMult: 1.4,
        dmgMultO: .2
    }, {
        id: 17,
        name: "Apple Basket",
        price: 3e3,
        scale: 80,
        xOff: 12,
        desc: "slowly regenerates health over time",
        healthRegen: 1
    }, {
        id: 6,
        name: "Winter Cape",
        price: 3e3,
        scale: 90,
        desc: "no effect"
    }, {
        id: 4,
        name: "Skull Cape",
        price: 4e3,
        scale: 90,
        desc: "The skull lord's cape"
    }, {
        id: 5,
        name: "Dash Cape",
        price: 5e3,
        scale: 90,
        desc: "BE THE FLASH!"
    }, {
        id: 2,
        name: "Dragon Cape",
        price: 6e3,
        scale: 90,
        desc: "no effect"
    }, {
        id: 1,
        name: "Super Cape",
        price: 8e3,
        scale: 90,
        desc: "no effect"
    }, {
        id: 7,
        name: "Troll Cape",
        price: 8e3,
        scale: 90,
        desc: "no effect"
    }, {
        id: 14,
        name: "Thorns",
        price: 1e4,
        scale: 115,
        xOff: 20,
        desc: "no effect"
    }, {
        id: 15,
        name: "Blockades",
        price: 1e4,
        scale: 95,
        xOff: 15,
        desc: "no effect"
    }, {
        id: 20,
        name: "Devils Tail",
        price: 1e4,
        scale: 95,
        xOff: 20,
        desc: "no effect"
    }, {
        id: 16,
        name: "Sawblade",
        price: 12e3,
        scale: 90,
        spin: !0,
        xOff: 0,
        desc: "deal damage to players that damage you",
        dmg: .158
    }, {
        id: 13,
        name: "Angel Wings",
        price: 15e3,
        scale: 138,
        xOff: 22,
        desc: "slowly regenerates health over time",
        healthRegen: 3
    }, {
        id: 19,
        name: "Shadow Wings",
        price: 15e3,
        scale: 138,
        xOff: 22,
        desc: "increased movement speed",
        spdMult: 1.1
    }, {
        id: 18,
        name: "Blood Wings",
        price: 2e4,
        scale: 178,
        xOff: 26,
        desc: "restores health when you deal damage",
        healD: .2
    }, {
        id: 21,
        name: "Corrupt X Wings",
        price: 2e4,
        scale: 178,
        xOff: 26,
        desc: "deal damage to players that damage you",
        dmg: .25
    }]
}, function(e, t) {
    var n = Math.abs,
        i = Math.cos,
        r = Math.sin,
        o = Math.pow,
        s = Math.sqrt;
    e.exports = function(e, t, a, l, h, c, u, f, d, p, g, m, y, v) {
        this.id = e, this.sid = t, this.tmpScore = 0, this.team = null, this.skinIndex = 0, this.tailIndex = 0, this.hitTime = 0, this.tails = {};
        for (var w = 0; w < g.length; ++w) g[w].price <= 0 && (this.tails[g[w].id] = 1);
        for (this.skins = {}, w = 0; w < p.length; ++w) p[w].price <= 0 && (this.skins[p[w].id] = 1);
        this.points = 0, this.dt = 0, this.hidden = !1, this.itemCounts = {}, this.isPlayer = !0, this.pps = 0, this.moveDir = void 0, this.skinRot = 0, this.lastPing = 0, this.iconIndex = 0, this.skinColor = 0, this.spawn = function(e) {
            this.active = !0, this.alive = !0, this.lockMove = !1, this.lockDir = !1, this.minimapCounter = 0, this.chatCountdown = 0, this.shameCount = 0, this.shameTimer = 0, this.sentTo = {}, this.gathering = 0, this.autoGather = 0, this.animTime = 0, this.animSpeed = 0, this.mouseState = 0, this.buildIndex = -1, this.weaponIndex = 0, this.dmgOverTime = {}, this.maxXP = 300, this.XP = 0, this.age = 1, this.kills = 0, this.upgrAge = 2, this.upgradePoints = 0, this.x = 0, this.y = 0, this.zIndex = 0, this.xVel = 0, this.yVel = 0, this.slowMult = 1, this.dir = 0, this.dirPlus = 0, this.targetDir = 0, this.targetAngle = 0, this.maxHealth = 100, this.health = this.maxHealth, this.scale = a.playerScale, this.speed = a.playerSpeed, this.resetMoveDir(), this.resetResources(e), this.items = [0, 3, 6, 10], this.weapons = [0], this.shootCount = 0, this.weaponXP = [], this.reloads = {}
        }, this.resetMoveDir = function() {
            this.moveDir = void 0
        }, this.resetResources = function(e) {
            for (var t = 0; t < a.resourceTypes.length; ++t) this[a.resourceTypes[t]] = e ? 100 : 0
        }, this.addItem = function(e) {
            var t = d.list[e];
            if (t) {
                for (var n = 0; n < this.items.length; ++n)
                    if (d.list[this.items[n]].group == t.group) return this.buildIndex == this.items[n] && (this.buildIndex = e), this.items[n] = e, !0;
                return this.items.push(e), !0
            }
            return !1
        }, this.setUserData = function(e) {
            e && (this.name = "unknown", l.isString(e.name) && e.name.length <= a.maxNameLength && (e.name = e.name.replace(/<|>/g, "").replace(/[^\x00-\x7F]/g, ""), e.name.replace(/\s/g, "").length > 0 && (this.name = e.name)), this.skinColor = 0, a.skinColors[e.skin] && (this.skinColor = e.skin))
        }, this.getData = function() {
            return [this.id, this.sid, this.name, l.fixTo(this.x, 2), l.fixTo(this.y, 2), l.fixTo(this.dir, 3), this.health, this.maxHealth, this.scale, this.skinColor]
        }, this.setData = function(e) {
            this.id = e[0], this.sid = e[1], this.name = e[2], this.x = e[3], this.y = e[4], this.dir = e[5], this.health = e[6], this.maxHealth = e[7], this.scale = e[8], this.skinColor = e[9]
        };
        var x = 0;
        this.update = function(e) {
            if (this.alive) {
                if (this.shameTimer > 0 && (this.shameTimer -= e, this.shameTimer <= 0 && (this.shameTimer = 0, this.shameCount = 0)), (x -= e) <= 0) {
                    var t = (this.skin && this.skin.healthRegen ? this.skin.healthRegen : 0) + (this.tail && this.tail.healthRegen ? this.tail.healthRegen : 0);
                    t && this.changeHealth(t, this), this.dmgOverTime.dmg && (this.changeHealth(-this.dmgOverTime.dmg, this.dmgOverTime.doer), this.dmgOverTime.time -= 1, this.dmgOverTime.time <= 0 && (this.dmgOverTime.dmg = 0)), this.healCol && this.changeHealth(this.healCol, this), x = 1e3
                }
                if (this.alive) {
                    if (this.slowMult < 1 && (this.slowMult += 8e-4 * e, this.slowMult > 1 && (this.slowMult = 1)), this.lockMove) this.xVel = 0, this.yVel = 0;
                    else {
                        var n = (this.buildIndex >= 0 ? .5 : 1) * (d.weapons[this.weaponIndex].spdMult || 1) * (this.skin && this.skin.spdMult || 1) * (this.tail && this.tail.spdMult || 1) * (this.y <= a.snowBiomeTop ? this.skin && this.skin.coldM ? 1 : a.snowSpeed : 1) * this.slowMult;
                        !this.zIndex && this.y >= a.mapScale / 2 - a.riverWidth / 2 && this.y <= a.mapScale / 2 + a.riverWidth / 2 && (this.skin && this.skin.watrImm ? (n *= .75, this.xVel += .4 * a.waterCurrent * e) : (n *= .33, this.xVel += a.waterCurrent * e));
                        var f = void 0 != this.moveDir ? i(this.moveDir) : 0,
                            p = void 0 != this.moveDir ? r(this.moveDir) : 0,
                            g = s(f * f + p * p);
                        0 != g && (f /= g, p /= g), f && (this.xVel += f * this.speed * n * e), p && (this.yVel += p * this.speed * n * e)
                    }
                    var m;
                    this.zIndex = 0, this.lockMove = !1, this.healCol = 0;
                    for (var y = l.getDistance(0, 0, this.xVel * e, this.yVel * e), v = Math.min(4, Math.max(1, Math.round(y / 40))), w = 1 / v, b = 0; b < v; ++b) {
                        this.xVel && (this.x += this.xVel * e * w), this.yVel && (this.y += this.yVel * e * w), m = c.getGridArrays(this.x, this.y, this.scale);
                        for (var k = 0; k < m.length; ++k)
                            for (var S = 0; S < m[k].length; ++S) m[k][S].active && c.checkCollision(this, m[k][S], w)
                    }
                    for (b = (T = u.indexOf(this)) + 1; b < u.length; ++b) u[b] != this && u[b].alive && c.checkCollision(this, u[b]);
                    if (this.xVel && (this.xVel *= o(a.playerDecel, e), this.xVel <= .01 && this.xVel >= -.01 && (this.xVel = 0)), this.yVel && (this.yVel *= o(a.playerDecel, e), this.yVel <= .01 && this.yVel >= -.01 && (this.yVel = 0)), this.x - this.scale < 0 ? this.x = this.scale : this.x + this.scale > a.mapScale && (this.x = a.mapScale - this.scale), this.y - this.scale < 0 ? this.y = this.scale : this.y + this.scale > a.mapScale && (this.y = a.mapScale - this.scale), this.buildIndex < 0)
                        if (this.reloads[this.weaponIndex] > 0) this.reloads[this.weaponIndex] -= e, this.gathering = this.mouseState;
                        else if (this.gathering || this.autoGather) {
                        var I = !0;
                        if (d.weapons[this.weaponIndex].gather) this.gather(u);
                        else if (void 0 != d.weapons[this.weaponIndex].projectile && this.hasRes(d.weapons[this.weaponIndex], this.skin ? this.skin.projCost : 0)) {
                            this.useRes(d.weapons[this.weaponIndex], this.skin ? this.skin.projCost : 0);
                            var T = d.weapons[this.weaponIndex].projectile,
                                E = 2 * this.scale,
                                M = this.skin && this.skin.aMlt ? this.skin.aMlt : 1;
                            d.weapons[this.weaponIndex].rec && (this.xVel -= d.weapons[this.weaponIndex].rec * i(this.dir), this.yVel -= d.weapons[this.weaponIndex].rec * r(this.dir)), h.addProjectile(this.x + E * i(this.dir), this.y + E * r(this.dir), this.dir, d.projectiles[T].range * M, d.projectiles[T].speed * M, T, this, null, this.zIndex)
                        } else I = !1;
                        this.gathering = this.mouseState, I && (this.reloads[this.weaponIndex] = d.weapons[this.weaponIndex].speed * (this.skin && this.skin.atkSpd || 1))
                    }
                }
            }
        }, this.addWeaponXP = function(e) {
            this.weaponXP[this.weaponIndex] || (this.weaponXP[this.weaponIndex] = 0), this.weaponXP[this.weaponIndex] += e
        }, this.earnXP = function(e) {
            this.age < a.maxAge && (this.XP += e, this.XP >= this.maxXP ? (this.age < a.maxAge ? (this.age++, this.XP = 0, this.maxXP *= 1.2) : this.XP = this.maxXP, this.upgradePoints++, m.send(this.id, "16", this.upgradePoints, this.upgrAge), m.send(this.id, "15", this.XP, l.fixTo(this.maxXP, 1), this.age)) : m.send(this.id, "15", this.XP))
        }, this.changeHealth = function(e, t) {
            if (e > 0 && this.health >= this.maxHealth) return !1;
            e < 0 && this.skin && (e *= this.skin.dmgMult || 1), e < 0 && this.tail && (e *= this.tail.dmgMult || 1), e < 0 && (this.hitTime = Date.now()), this.health += e, this.health > this.maxHealth && (e -= this.health - this.maxHealth, this.health = this.maxHealth), this.health <= 0 && this.kill(t);
            for (var n = 0; n < u.length; ++n) this.sentTo[u[n].id] && m.send(u[n].id, "10", this.sid, Math.round(this.health));
            return !t || !t.canSee(this) || t == this && e < 0 || m.send(t.id, "t", Math.round(this.x), Math.round(this.y), Math.round(-e), 1), !0
        }, this.kill = function(e) {
            e && e.alive && (e.kills++, e.skin && e.skin.goldSteal ? y(e, Math.round(this.points / 2)) : y(e, Math.round(100 * this.age * (e.skin && e.skin.kScrM ? e.skin.kScrM : 1))), m.send(e.id, "9", "kills", e.kills, 1)), this.alive = !1, m.send(this.id, "11"), v()
        }, this.addResource = function(e, t, n) {
            !n && t > 0 && this.addWeaponXP(t), 3 == e ? y(this, t, !0) : (this[a.resourceTypes[e]] += t, m.send(this.id, "9", a.resourceTypes[e], this[a.resourceTypes[e]], 1))
        }, this.changeItemCount = function(e, t) {
            this.itemCounts[e] = this.itemCounts[e] || 0, this.itemCounts[e] += t, m.send(this.id, "14", e, this.itemCounts[e])
        }, this.buildItem = function(e) {
            var t = this.scale + e.scale + (e.placeOffset || 0),
                n = this.x + t * i(this.dir),
                o = this.y + t * r(this.dir);
            if (this.canBuild(e) && (e.consume || c.checkItemLocation(n, o, e.scale, .6, e.id))) {
                var s = !1;
                if (e.consume) {
                    if (this.hitTime) {
                        var a = Date.now() - this.hitTime;
                        this.hitTime = 0, a <= 120 ? (this.shameCount++, this.shameCount >= 8 && (this.shameTimer = 3e4, this.shameCount = 0)) : (this.shameCount -= 2, this.shameCount <= 0 && (this.shameCount = 0))
                    }
                    this.shameTimer <= 0 && (s = e.consume(this))
                } else s = !0, e.group.limit && this.changeItemCount(e.group.id, 1), e.pps && (this.pps += e.pps), c.add(c.objects.length, n, o, this.dir, e.scale, e.type, e, !1, this);
                s && (this.useRes(e), this.buildIndex = -1)
            }
        }, this.hasRes = function(e, t) {
            for (var n = 0; n < e.req.length;) {
                if (this[e.req[n]] < Math.round(e.req[n + 1] * (t || 1))) return !1;
                n += 2
            }
            return !0
        }, this.useRes = function(e, t) {
            if (!a.inSandbox)
                for (var n = 0; n < e.req.length;) this.addResource(a.resourceTypes.indexOf(e.req[n]), -Math.round(e.req[n + 1] * (t || 1))), n += 2
        }, this.canBuild = function(e) {
            return !!a.inSandbox || !(e.group.limit && this.itemCounts[e.group.id] >= e.group.limit) && this.hasRes(e)
        }, this.gather = function() {
            this.slowMult -= d.weapons[this.weaponIndex].hitSlow || .3, this.slowMult < 0 && (this.slowMult = 0);
            for (var e, t, n, o = a.fetchVariant(this).val, s = {}, h = c.getGridArrays(this.x, this.y, d.weapons[this.weaponIndex].range), p = 0; p < h.length; ++p)
                for (var g = 0; g < h[p].length; ++g)
                    if ((t = h[p][g]).active && !t.dontGather && !s[t.sid] && t.visibleToPlayer(this) && l.getDistance(this.x, this.y, t.x, t.y) - t.scale <= d.weapons[this.weaponIndex].range && (e = l.getDirection(t.x, t.y, this.x, this.y), l.getAngleDist(e, this.dir) <= a.gatherAngle)) {
                        if (s[t.sid] = 1, t.health) {
                            if (t.changeHealth(-d.weapons[this.weaponIndex].dmg * o * (d.weapons[this.weaponIndex].sDmg || 1) * (this.skin && this.skin.bDmg ? this.skin.bDmg : 1), this)) {
                                for (var m = 0; m < t.req.length;) this.addResource(a.resourceTypes.indexOf(t.req[m]), t.req[m + 1]), m += 2;
                                c.disableObj(t)
                            }
                        } else {
                            this.earnXP(4 * d.weapons[this.weaponIndex].gather);
                            var y = d.weapons[this.weaponIndex].gather + (3 == t.type ? 4 : 0);
                            this.skin && this.skin.extraGold && this.addResource(3, 1), this.addResource(t.type, y)
                        }
                        n = !0, c.hitObj(t, e)
                    }
            for (g = 0; g < u.length + f.length; ++g)
                if ((t = u[g] || f[g - u.length]) != this && t.alive && (!t.team || t.team != this.team) && l.getDistance(this.x, this.y, t.x, t.y) - 1.8 * t.scale <= d.weapons[this.weaponIndex].range && (e = l.getDirection(t.x, t.y, this.x, this.y), l.getAngleDist(e, this.dir) <= a.gatherAngle)) {
                    var v = o;
                    void 0 != t.weaponIndex && d.weapons[t.weaponIndex].shield && l.getAngleDist(e + Math.PI, t.dir) <= a.shieldAngle && (v = d.weapons[t.weaponIndex].shield);
                    var w = d.weapons[this.weaponIndex].dmg * (this.skin && this.skin.dmgMultO ? this.skin.dmgMultO : 1) * (this.tail && this.tail.dmgMultO ? this.tail.dmgMultO : 1),
                        x = .3 * (t.weightM || 1) + (d.weapons[this.weaponIndex].knock || 0);
                    t.xVel += x * i(e), t.yVel += x * r(e), this.skin && this.skin.healD && this.changeHealth(w * v * this.skin.healD, this), this.tail && this.tail.healD && this.changeHealth(w * v * this.tail.healD, this), t.skin && t.skin.dmg && 1 == v && this.changeHealth(-w * t.skin.dmg, t), t.tail && t.tail.dmg && 1 == v && this.changeHealth(-w * t.tail.dmg, t), !(t.dmgOverTime && this.skin && this.skin.poisonDmg) || t.skin && t.skin.poisonRes || (t.dmgOverTime.dmg = this.skin.poisonDmg, t.dmgOverTime.time = this.skin.poisonTime || 1, t.dmgOverTime.doer = this), t.skin && t.skin.dmgK && (this.xVel -= t.skin.dmgK * i(e), this.yVel -= t.skin.dmgK * r(e)), t.changeHealth(-w * v, this, this)
                }
            this.sendAnimation(n ? 1 : 0)
        }, this.sendAnimation = function(e) {
            for (var t = 0; t < u.length; ++t) this.sentTo[u[t].id] && this.canSee(u[t]) && m.send(u[t].id, "7", this.sid, e ? 1 : 0, this.weaponIndex)
        };
        var b = 0,
            k = 0;
        this.animate = function(e) {
            this.animTime > 0 && (this.animTime -= e, this.animTime <= 0 ? (this.animTime = 0, this.dirPlus = 0, b = 0, k = 0) : 0 == k ? (b += e / (this.animSpeed * a.hitReturnRatio), this.dirPlus = l.lerp(0, this.targetAngle, Math.min(1, b)), b >= 1 && (b = 1, k = 1)) : (b -= e / (this.animSpeed * (1 - a.hitReturnRatio)), this.dirPlus = l.lerp(0, this.targetAngle, Math.max(0, b))))
        }, this.startAnim = function(e, t) {
            this.animTime = this.animSpeed = d.weapons[t].speed, this.targetAngle = e ? -a.hitAngle : -Math.PI, b = 0, k = 0
        }, this.canSee = function(e) {
            if (!e) return !1;
            var t = n(e.x - this.x) - e.scale,
                i = n(e.y - this.y) - e.scale;
            return t <= a.maxScreenWidth / 2 * 1.3 && i <= a.maxScreenHeight / 2 * 1.3
        }
    }
}, function(e, t) {
    var n = Math.floor,
        i = Math.abs,
        r = Math.cos,
        o = Math.sin,
        s = (Math.pow, Math.sqrt);
    e.exports = function(e, t, a, l, h, c) {
        var u, f;
        this.objects = t, this.grids = {}, this.updateObjects = [];
        var d = l.mapScale / l.colGrid;
        this.setObjectGrids = function(e) {
            for (var t = Math.min(l.mapScale, Math.max(0, e.x)), n = Math.min(l.mapScale, Math.max(0, e.y)), i = 0; i < l.colGrid; ++i) {
                u = i * d;
                for (var r = 0; r < l.colGrid; ++r) f = r * d, t + e.scale >= u && t - e.scale <= u + d && n + e.scale >= f && n - e.scale <= f + d && (this.grids[i + "_" + r] || (this.grids[i + "_" + r] = []), this.grids[i + "_" + r].push(e), e.gridLocations.push(i + "_" + r))
            }
        }, this.removeObjGrid = function(e) {
            for (var t, n = 0; n < e.gridLocations.length; ++n)(t = this.grids[e.gridLocations[n]].indexOf(e)) >= 0 && this.grids[e.gridLocations[n]].splice(t, 1)
        }, this.disableObj = function(e) {
            if (e.active = !1, c) {
                e.owner && e.pps && (e.owner.pps -= e.pps), this.removeObjGrid(e);
                var t = this.updateObjects.indexOf(e);
                t >= 0 && this.updateObjects.splice(t, 1)
            }
        }, this.hitObj = function(e, t) {
            for (var n = 0; n < h.length; ++n) h[n].active && e.sentTo[h[n].id] && (e.active ? h[n].canSee(e) && c.send(h[n].id, "8", a.fixTo(t, 1), e.sid) : (c.send(h[n].id, "12", e.sid), e.owner == h[n] && h[n].changeItemCount(e.group.id, -1)))
        };
        var p, g, m = [];
        this.getGridArrays = function(e, t, i) {
            u = n(e / d), f = n(t / d), m.length = 0;
            try {
                this.grids[u + "_" + f] && m.push(this.grids[u + "_" + f]), e + i >= (u + 1) * d && ((p = this.grids[u + 1 + "_" + f]) && m.push(p), f && t - i <= f * d ? (p = this.grids[u + 1 + "_" + (f - 1)]) && m.push(p) : t + i >= (f + 1) * d && (p = this.grids[u + 1 + "_" + (f + 1)]) && m.push(p)), u && e - i <= u * d && ((p = this.grids[u - 1 + "_" + f]) && m.push(p), f && t - i <= f * d ? (p = this.grids[u - 1 + "_" + (f - 1)]) && m.push(p) : t + i >= (f + 1) * d && (p = this.grids[u - 1 + "_" + (f + 1)]) && m.push(p)), t + i >= (f + 1) * d && (p = this.grids[u + "_" + (f + 1)]) && m.push(p), f && t - i <= f * d && (p = this.grids[u + "_" + (f - 1)]) && m.push(p)
            } catch (e) {}
            return m
        }, this.add = function(n, i, r, o, s, a, l, h, u) {
            g = null;
            for (var f = 0; f < t.length; ++f)
                if (t[f].sid == n) {
                    g = t[f];
                    break
                }
            if (!g)
                for (f = 0; f < t.length; ++f)
                    if (!t[f].active) {
                        g = t[f];
                        break
                    }
            g || (g = new e(n), t.push(g)), h && (g.sid = n), g.init(i, r, o, s, a, l, u), c && (this.setObjectGrids(g), g.doUpdate && this.updateObjects.push(g))
        }, this.disableBySid = function(e) {
            for (var n = 0; n < t.length; ++n)
                if (t[n].sid == e) {
                    this.disableObj(t[n]);
                    break
                }
        }, this.removeAllItems = function(e, n) {
            for (var i = 0; i < t.length; ++i) t[i].active && t[i].owner && t[i].owner.sid == e && this.disableObj(t[i]);
            n && n.broadcast("13", e)
        }, this.fetchSpawnObj = function(e) {
            for (var n = null, i = 0; i < t.length; ++i)
                if ((g = t[i]).active && g.owner && g.owner.sid == e && g.spawnPoint) {
                    n = [g.x, g.y], this.disableObj(g), c.broadcast("12", g.sid), g.owner && g.owner.changeItemCount(g.group.id, -1);
                    break
                }
            return n
        }, this.checkItemLocation = function(e, n, i, r, o, s) {
            for (var h = 0; h < t.length; ++h)
                if (t[h].active && a.getDistance(e, n, t[h].x, t[h].y) < i + (t[h].blocker ? t[h].blocker : t[h].getScale(r, t[h].isItem))) return !1;
            return !(!s && 18 != o && n >= l.mapScale / 2 - l.riverWidth / 2 && n <= l.mapScale / 2 + l.riverWidth / 2)
        }, this.addProjectile = function(e, t, n, i, r) {
            for (var o, s = items.projectiles[r], l = 0; l < projectiles.length; ++l)
                if (!projectiles[l].active) {
                    o = projectiles[l];
                    break
                }
            o || (o = new Projectile(h, a), projectiles.push(o)), o.init(r, e, t, n, s.speed, i, s.scale)
        }, this.checkCollision = function(e, t, n) {
            n = n || 1;
            var l = e.x - t.x,
                h = e.y - t.y,
                c = e.scale + t.scale;
            if (i(l) <= c || i(h) <= c) {
                c = e.scale + (t.getScale ? t.getScale() : t.scale);
                var u = s(l * l + h * h) - c;
                if (u <= 0) {
                    if (t.ignoreCollision) !t.trap || e.noTrap || t.owner == e || t.owner && t.owner.team && t.owner.team == e.team ? t.boostSpeed ? (e.xVel += n * t.boostSpeed * (t.weightM || 1) * r(t.dir), e.yVel += n * t.boostSpeed * (t.weightM || 1) * o(t.dir)) : t.healCol && (e.healCol = t.healCol) : (e.lockMove = !0, t.hideFromEnemy = !1);
                    else {
                        var f = a.getDirection(e.x, e.y, t.x, t.y);
                        if (a.getDistance(e.x, e.y, t.x, t.y), t.isPlayer ? (u = -1 * u / 2, e.x += u * r(f), e.y += u * o(f), t.x -= u * r(f), t.y -= u * o(f)) : (e.x = t.x + c * r(f), e.y = t.y + c * o(f), e.xVel *= .75, e.yVel *= .75), t.dmg && t.owner != e && (!t.owner || !t.owner.team || t.owner.team != e.team)) {
                            e.changeHealth(-t.dmg, t.owner, t);
                            var d = 1.5 * (t.weightM || 1);
                            e.xVel += d * r(f), e.yVel += d * o(f), !t.pDmg || e.skin && e.skin.poisonRes || (e.dmgOverTime.dmg = t.pDmg, e.dmgOverTime.time = 5, e.dmgOverTime.doer = t.owner), e.colDmg && t.health && (t.changeHealth(-e.colDmg) && this.disableObj(t), this.hitObj(t, a.getDirection(e.x, e.y, t.x, t.y)))
                        }
                    }
                    return t.zIndex > e.zIndex && (e.zIndex = t.zIndex), !0
                }
            }
            return !1
        }
    }
}, function(e, t) {
    e.exports = {}
}, function(e, t) {
    e.exports.groups = [{
        id: 0,
        name: "food",
        layer: 0
    }, {
        id: 1,
        name: "walls",
        place: !0,
        limit: 30,
        layer: 0
    }, {
        id: 2,
        name: "spikes",
        place: !0,
        limit: 15,
        layer: 0
    }, {
        id: 3,
        name: "mill",
        place: !0,
        limit: 7,
        layer: 1
    }, {
        id: 4,
        name: "mine",
        place: !0,
        limit: 1,
        layer: 0
    }, {
        id: 5,
        name: "trap",
        place: !0,
        limit: 6,
        layer: -1
    }, {
        id: 6,
        name: "booster",
        place: !0,
        limit: 12,
        layer: -1
    }, {
        id: 7,
        name: "turret",
        place: !0,
        limit: 2,
        layer: 1
    }, {
        id: 8,
        name: "watchtower",
        place: !0,
        limit: 12,
        layer: 1
    }, {
        id: 9,
        name: "buff",
        place: !0,
        limit: 4,
        layer: -1
    }, {
        id: 10,
        name: "spawn",
        place: !0,
        limit: 1,
        layer: -1
    }, {
        id: 11,
        name: "sapling",
        place: !0,
        limit: 2,
        layer: 0
    }, {
        id: 12,
        name: "blocker",
        place: !0,
        limit: 2,
        layer: -1
    }], t.projectiles = [{
        indx: 0,
        layer: 0,
        src: "arrow_1",
        dmg: 25,
        speed: 1.6,
        scale: 103,
        range: 1e3
    }, {
        indx: 1,
        layer: 1,
        dmg: 25,
        scale: 20
    }, {
        indx: 0,
        layer: 0,
        src: "arrow_1",
        dmg: 35,
        speed: 2.5,
        scale: 103,
        range: 1200
    }, {
        indx: 0,
        layer: 0,
        src: "arrow_1",
        dmg: 30,
        speed: 2,
        scale: 103,
        range: 1200
    }, {
        indx: 1,
        layer: 1,
        dmg: 16,
        scale: 20
    }], t.weapons = [{
        id: 0,
        type: 0,
        name: "tool hammer",
        desc: "tool for gathering all resources",
        src: "hammer_1",
        length: 140,
        width: 140,
        xOff: -3,
        yOff: 18,
        dmg: 25,
        range: 65,
        gather: 1,
        speed: 300
    }, {
        id: 1,
        type: 0,
        age: 2,
        name: "hand axe",
        desc: "gathers resources at a higher rate",
        src: "axe_1",
        length: 140,
        width: 140,
        xOff: 3,
        yOff: 24,
        dmg: 30,
        spdMult: 1,
        range: 70,
        gather: 2,
        speed: 400
    }, {
        id: 2,
        type: 0,
        age: 8,
        pre: 1,
        name: "great axe",
        desc: "deal more damage and gather more resources",
        src: "great_axe_1",
        length: 140,
        width: 140,
        xOff: -8,
        yOff: 25,
        dmg: 35,
        spdMult: 1,
        range: 75,
        gather: 4,
        speed: 400
    }, {
        id: 3,
        type: 0,
        age: 2,
        name: "short sword",
        desc: "increased attack power but slower move speed",
        src: "sword_1",
        iPad: 1.3,
        length: 130,
        width: 210,
        xOff: -8,
        yOff: 46,
        dmg: 35,
        spdMult: .85,
        range: 110,
        gather: 1,
        speed: 300
    }, {
        id: 4,
        type: 0,
        age: 8,
        pre: 3,
        name: "katana",
        desc: "Slice, slice and dice. Greater range and damage",
        src: "samurai_1",
        iPad: 1.3,
        length: 130,
        width: 210,
        xOff: -8,
        yOff: 59,
        dmg: 40,
        spdMult: .8,
        range: 118,
        gather: 1,
        speed: 300
    }, {
        id: 5,
        type: 0,
        age: 2, //Change it back to 2, 1 removes the item
        name: "polearm",
        desc: "Stab. Stab. Stab. Long range melee weapon",
        src: "spear_1",
        iPad: 1.3,
        length: 130,
        width: 210,
        xOff: -8,
        yOff: 53,
        dmg: 45,
        knock: .2,
        spdMult: .82,
        range: 142,
        gather: 1,
        speed: 700
    }, {
        id: 6,
        type: 0,
        age: 2,
        name: "bat",
        desc: "fast long range melee weapon",
        src: "bat_1",
        iPad: 1.3,
        length: 110,
        width: 180,
        xOff: -8,
        yOff: 53,
        dmg: 20,
        knock: .7,
        range: 110,
        gather: 1,
        speed: 300
    }, {
        id: 7,
        type: 0,
        age: 2,
        name: "daggers",
        desc: "really fast short range weapon",
        src: "dagger_1",
        iPad: .8,
        length: 110,
        width: 110,
        xOff: 18,
        yOff: 0,
        dmg: 20,
        knock: .1,
        range: 65,
        gather: 1,
        hitSlow: .1,
        spdMult: 1.13,
        speed: 100
    }, {
        id: 8,
        type: 0,
        age: 2,
        name: "stick",
        desc: "great for gathering but very weak",
        src: "stick_1",
        length: 140,
        width: 140,
        xOff: 3,
        yOff: 24,
        dmg: 1,
        spdMult: 1,
        range: 70,
        gather: 7,
        speed: 400
    }, {
        id: 9,
        type: 1,
        age: 6,
        name: "hunting bow",
        desc: "bow used for ranged combat and hunting",
        src: "bow_1",
        req: ["wood", 4],
        length: 120,
        width: 120,
        xOff: -6,
        yOff: 0,
        projectile: 0,
        spdMult: .75,
        speed: 600
    }, {
        id: 10,
        type: 1,
        age: 6, //Change to age 6
        name: "great hammer",
        desc: "hammer used for destroying structures",
        src: "great_hammer_1",
        length: 140,
        width: 140,
        xOff: -9,
        yOff: 25,
        dmg: 10,
        spdMult: .88,
        range: 75,
        sDmg: 7.5,
        gather: 1,
        speed: 400
    }, {
        id: 11,
        type: 1,
        age: 6,
        name: "wooden shield",
        desc: "blocks projectiles and reduces melee damage",
        src: "shield_1",
        length: 120,
        width: 120,
        shield: .2,
        xOff: 6,
        yOff: 0,
        spdMult: .7
    }, {
        id: 12,
        type: 1,
        age: 8,
        pre: 9,
        name: "crossbow",
        desc: "deals more damage and has greater range",
        src: "crossbow_1",
        req: ["wood", 5],
        aboveHand: !0,
        armS: .75,
        length: 120,
        width: 120,
        xOff: -4,
        yOff: 0,
        projectile: 2,
        spdMult: .7,
        speed: 700
    }, {
        id: 13,
        type: 1,
        age: 9,
        pre: 12,
        name: "repeater crossbow",
        desc: "high firerate crossbow with reduced damage",
        src: "crossbow_2",
        req: ["wood", 10],
        aboveHand: !0,
        armS: .75,
        length: 120,
        width: 120,
        xOff: -4,
        yOff: 0,
        projectile: 3,
        spdMult: .7,
        speed: 300
    }], e.exports.list = [{
        group: e.exports.groups[0],
        name: "apple",
        desc: "restores 20 health when consumed",
        req: ["food", 10], //Change back to 10 when done
        consume: function(e) {
            return e.changeHealth(20, e) //Change back to 20 when done
        },
        scale: 22,
        holdOffset: 15
    }, {
        age: 3,
        group: e.exports.groups[0],
        name: "cookie",
        desc: "restores 40 health when consumed",
        req: ["food", 15],
        consume: function(e) {
            return e.changeHealth(40, e)
        },
        scale: 27,
        holdOffset: 15
    }, {
        age: 7,
        group: e.exports.groups[0],
        name: "pizza",
        desc: "restores 30 health and another 50 over 5 seconds",
        req: ["food", 30],
        consume: function(e) {
            return !!(e.changeHealth(30, e) || e.health < 100) && (e.dmgOverTime.dmg = -10, e.dmgOverTime.doer = e, e.dmgOverTime.time = 5, !0)
        },
        scale: 27,
        holdOffset: 15
    }, {
        group: e.exports.groups[1],
        name: "wood wall",
        desc: "provides protection for your village",
        req: ["wood", 10],
        projDmg: !0,
        health: 380,
        scale: 50,
        holdOffset: 20,
        placeOffset: -5
    }, {
        age: 3,
        group: e.exports.groups[1],
        name: "stone wall",
        desc: "provides improved protection for your village",
        req: ["stone", 25],
        health: 900,
        scale: 50,
        holdOffset: 20,
        placeOffset: -5
    }, {
        age: 7,
        pre: 1,
        group: e.exports.groups[1],
        name: "castle wall",
        desc: "provides powerful protection for your village",
        req: ["stone", 35],
        health: 1500,
        scale: 52,
        holdOffset: 20,
        placeOffset: -5
    }, {
        group: e.exports.groups[2],
        name: "spikes",
        desc: "damages enemies when they touch them",
        req: ["wood", 20, "stone", 5],
        health: 400,
        dmg: 20,
        scale: 49,
        spritePadding: -23,
        holdOffset: 8,
        placeOffset: -5
    }, {
        age: 5,
        group: e.exports.groups[2],
        name: "greater spikes",
        desc: "damages enemies when they touch them",
        req: ["wood", 30, "stone", 10],
        health: 500,
        dmg: 35,
        scale: 52,
        spritePadding: -23,
        holdOffset: 8,
        placeOffset: -5
    }, {
        age: 9,
        pre: 1,
        group: e.exports.groups[2],
        name: "poison spikes",
        desc: "poisons enemies when they touch them",
        req: ["wood", 35, "stone", 15],
        health: 600,
        dmg: 30,
        pDmg: 5,
        scale: 52,
        spritePadding: -23,
        holdOffset: 8,
        placeOffset: -5
    }, {
        age: 9,
        pre: 2,
        group: e.exports.groups[2],
        name: "spinning spikes",
        desc: "damages enemies when they touch them",
        req: ["wood", 30, "stone", 20],
        health: 500,
        dmg: 45,
        turnSpeed: .003,
        scale: 52,
        spritePadding: -23,
        holdOffset: 8,
        placeOffset: -5
    }, {
        group: e.exports.groups[3],
        name: "windmill",
        desc: "generates gold over time",
        req: ["wood", 50, "stone", 10],
        health: 400,
        pps: 1,
        turnSpeed: .0016,
        spritePadding: 25,
        iconLineMult: 12,
        scale: 45,
        holdOffset: 20,
        placeOffset: 5
    }, {
        age: 5,
        pre: 1,
        group: e.exports.groups[3],
        name: "faster windmill",
        desc: "generates more gold over time",
        req: ["wood", 60, "stone", 20],
        health: 500,
        pps: 1.5,
        turnSpeed: .0025,
        spritePadding: 25,
        iconLineMult: 12,
        scale: 47,
        holdOffset: 20,
        placeOffset: 5
    }, {
        age: 8,
        pre: 1,
        group: e.exports.groups[3],
        name: "power mill",
        desc: "generates more gold over time",
        req: ["wood", 100, "stone", 50],
        health: 800,
        pps: 2,
        turnSpeed: .005,
        spritePadding: 25,
        iconLineMult: 12,
        scale: 47,
        holdOffset: 20,
        placeOffset: 5
    }, {
        age: 5,
        group: e.exports.groups[4],
        type: 2,
        name: "mine",
        desc: "allows you to mine stone",
        req: ["wood", 20, "stone", 100],
        iconLineMult: 12,
        scale: 65,
        holdOffset: 20,
        placeOffset: 0
    }, {
        age: 5,
        group: e.exports.groups[11],
        type: 0,
        name: "sapling",
        desc: "allows you to farm wood",
        req: ["wood", 150],
        iconLineMult: 12,
        colDiv: .5,
        scale: 110,
        holdOffset: 50,
        placeOffset: -15
    }, {
        age: 4,
        group: e.exports.groups[5],
        name: "pit trap",
        desc: "pit that traps enemies if they walk over it",
        req: ["wood", 30, "stone", 30],
        trap: !0,
        ignoreCollision: !0,
        hideFromEnemy: !0,
        health: 500,
        colDiv: .2,
        scale: 50,
        holdOffset: 20,
        placeOffset: -5
    }, {
        age: 4,
        group: e.exports.groups[6],
        name: "boost pad",
        desc: "provides boost when stepped on",
        req: ["stone", 20, "wood", 5],
        ignoreCollision: !0,
        boostSpeed: 1.5,
        health: 150,
        colDiv: .7,
        scale: 45,
        holdOffset: 20,
        placeOffset: -5
    }, {
        age: 7,
        group: e.exports.groups[7],
        doUpdate: !0,
        name: "turret",
        desc: "defensive structure that shoots at enemies",
        req: ["wood", 200, "stone", 150],
        health: 800,
        projectile: 1,
        shootRange: 700,
        shootRate: 2200,
        scale: 43,
        holdOffset: 20,
        placeOffset: -5
    }, {
        age: 7,
        group: e.exports.groups[8],
        name: "platform",
        desc: "platform to shoot over walls and cross over water",
        req: ["wood", 20],
        ignoreCollision: !0,
        zIndex: 1,
        health: 300,
        scale: 43,
        holdOffset: 20,
        placeOffset: -5
    }, {
        age: 7,
        group: e.exports.groups[9],
        name: "healing pad",
        desc: "standing on it will slowly heal you",
        req: ["wood", 30, "food", 10],
        ignoreCollision: !0,
        healCol: 15,
        health: 400,
        colDiv: .7,
        scale: 45,
        holdOffset: 20,
        placeOffset: -5
    }, {
        age: 9,
        group: e.exports.groups[10],
        name: "spawn pad",
        desc: "you will spawn here when you die but it will dissapear",
        req: ["wood", 100, "stone", 100],
        health: 400,
        ignoreCollision: !0,
        spawnPoint: !0,
        scale: 45,
        holdOffset: 20,
        placeOffset: -5
    }, {
        age: 7,
        group: e.exports.groups[12],
        name: "blocker",
        desc: "blocks building in radius",
        req: ["wood", 30, "stone", 25],
        ignoreCollision: !0,
        blocker: 300,
        health: 400,
        colDiv: .7,
        scale: 45,
        holdOffset: 20,
        placeOffset: -5
    }];
    for (var n = 0; n < e.exports.list.length; ++n) e.exports.list[n].id = n, e.exports.list[n].pre && (e.exports.list[n].pre = n - e.exports.list[n].pre);
    if ("undefined" != typeof window) {
        function i(e) {
            for (let t = e.length - 1; t > 0; t--) {
                const n = Math.floor(Math.random() * (t + 1));
                [e[t], e[n]] = [e[n], e[t]]
            }
            return e
        }
        console.log("DEBUG ASSET LOADER:"), console.log(), console.log("Items:");
        let t = e.exports.list.map(e => e.name);
        t.push("ruby spike"), t.push("ruby mine"), i(t);
        for (let e of t) console.log("    Loading item " + e + "...");
        console.log(), console.log("Weapons:");
        let n = e.exports.weapons.map(e => e.name);
        n.push("ruby sword"), n.push("ruby axe"), n.push("ruby crossbow"), n.push("ruby daggers"), i(n);
        for (let e of n) console.log("    Loading weapon " + e + "...")
    }
}, function(e, t) {
    e.exports = function(e) {
        this.sid = e, this.init = function(e, t, n, i, r, o, s) {
            o = o || {}, this.sentTo = {}, this.gridLocations = [], this.active = !0, this.doUpdate = o.doUpdate, this.x = e, this.y = t, this.dir = n, this.xWiggle = 0, this.yWiggle = 0, this.scale = i, this.type = r, this.id = o.id, this.owner = s, this.name = o.name, this.isItem = void 0 != this.id, this.group = o.group, this.health = o.health, this.layer = 2, void 0 != this.group ? this.layer = this.group.layer : 0 == this.type ? this.layer = 3 : 2 == this.type ? this.layer = 0 : 4 == this.type && (this.layer = -1), this.colDiv = o.colDiv || 1, this.blocker = o.blocker, this.ignoreCollision = o.ignoreCollision, this.dontGather = o.dontGather, this.hideFromEnemy = o.hideFromEnemy, this.friction = o.friction, this.projDmg = o.projDmg, this.dmg = o.dmg, this.pDmg = o.pDmg, this.pps = o.pps, this.zIndex = o.zIndex || 0, this.turnSpeed = o.turnSpeed, this.req = o.req, this.trap = o.trap, this.healCol = o.healCol, this.boostSpeed = o.boostSpeed, this.projectile = o.projectile, this.shootRange = o.shootRange, this.shootRate = o.shootRate, this.shootCount = this.shootRate, this.spawnPoint = o.spawnPoint
        }, this.changeHealth = function(e, t) {
            return this.health += e, this.health <= 0
        }, this.getScale = function(e, t) {
            return e = e || 1, this.scale * (this.isItem || 2 == this.type || 3 == this.type || 4 == this.type ? 1 : .6 * e) * (t ? 1 : this.colDiv)
        }, this.visibleToPlayer = function(e) {
            return !this.hideFromEnemy || this.owner && (this.owner == e || this.owner.team && e.team == this.owner.team)
        }, this.update = function(e) {
            this.active && (this.xWiggle && (this.xWiggle *= Math.pow(.99, e)), this.yWiggle && (this.yWiggle *= Math.pow(.99, e)), this.turnSpeed && (this.dir += this.turnSpeed * e))
        }
    }
}, function(e, t) {
    e.exports.AnimText = function() {
        this.init = function(e, t, n, i, r, o, s) {
            this.x = e, this.y = t, this.color = s, this.scale = n, this.startScale = this.scale, this.maxScale = 1.5 * n, this.scaleSpeed = .7, this.speed = i, this.life = r, this.text = o
        }, this.update = function(e) {
            this.life && (this.life -= e, this.y -= this.speed * e, this.scale += this.scaleSpeed * e, this.scale >= this.maxScale ? (this.scale = this.maxScale, this.scaleSpeed *= -1) : this.scale <= this.startScale && (this.scale = this.startScale, this.scaleSpeed = 0), this.life <= 0 && (this.life = 0))
        }, this.render = function(e, t, n) {
            e.fillStyle = this.color, e.font = this.scale + "px Hammersmith One", e.fillText(this.text, this.x - t, this.y - n)
        }
    }, e.exports.TextManager = function() {
        this.texts = [], this.update = function(e, t, n, i) {
            t.textBaseline = "middle", t.textAlign = "center";
            for (var r = 0; r < this.texts.length; ++r) this.texts[r].life && (this.texts[r].update(e), this.texts[r].render(t, n, i))
        }, this.showText = function(t, n, i, r, o, s, a) {
            for (var l, h = 0; h < this.texts.length; ++h)
                if (!this.texts[h].life) {
                    l = this.texts[h];
                    break
                }
            l || (l = new e.exports.AnimText, this.texts.push(l)), l.init(t, n, i, r, o, s, a)
        }
    }
}, function(e, t) {
    var n = Math.abs,
        i = (Math.cos, Math.sin, Math.pow, Math.sqrt),
        r = (n = Math.abs, Math.atan2),
        o = Math.PI;
    e.exports.randInt = function(e, t) {
        return Math.floor(Math.random() * (t - e + 1)) + e
    }, e.exports.randFloat = function(e, t) {
        return Math.random() * (t - e + 1) + e
    }, e.exports.lerp = function(e, t, n) {
        return e + (t - e) * n
    }, e.exports.decel = function(e, t) {
        return e > 0 ? e = Math.max(0, e - t) : e < 0 && (e = Math.min(0, e + t)), e
    }, e.exports.getDistance = function(e, t, n, r) {
        return i((n -= e) * n + (r -= t) * r)
    }, e.exports.getDirection = function(e, t, n, i) {
        return r(t - i, e - n)
    }, e.exports.getAngleDist = function(e, t) {
        var i = n(t - e) % (2 * o);
        return i > o ? 2 * o - i : i
    }, e.exports.isNumber = function(e) {
        return "number" == typeof e && !isNaN(e) && isFinite(e)
    }, e.exports.isString = function(e) {
        return e && "string" == typeof e
    }, e.exports.kFormat = function(e) {
        return e > 999 ? (e / 1e3).toFixed(1) + "k" : e
    }, e.exports.capitalizeFirst = function(e) {
        return e.charAt(0).toUpperCase() + e.slice(1)
    }, e.exports.fixTo = function(e, t) {
        return parseFloat(e.toFixed(t))
    }, e.exports.sortByPoints = function(e, t) {
        return parseFloat(t.points) - parseFloat(e.points)
    }, e.exports.lineInRect = function(e, t, n, i, r, o, s, a) {
        var l = r,
            h = s;
        if (r > s && (l = s, h = r), h > n && (h = n), l < e && (l = e), l > h) return !1;
        var c = o,
            u = a,
            f = s - r;
        if (Math.abs(f) > 1e-7) {
            var d = (a - o) / f,
                p = o - d * r;
            c = d * l + p, u = d * h + p
        }
        if (c > u) {
            var g = u;
            u = c, c = g
        }
        return u > i && (u = i), c < t && (c = t), !(c > u)
    }, e.exports.containsPoint = function(e, t, n) {
        var i = e.getBoundingClientRect(),
            r = i.left + window.scrollX,
            o = i.top + window.scrollY,
            s = i.width,
            a = i.height;
        return t > r && t < r + s && n > o && n < o + a
    }, e.exports.mousifyTouchEvent = function(e) {
        var t = e.changedTouches[0];
        e.screenX = t.screenX, e.screenY = t.screenY, e.clientX = t.clientX, e.clientY = t.clientY, e.pageX = t.pageX, e.pageY = t.pageY
    }, e.exports.hookTouchEvents = function(t, n) {
        var i = !n,
            r = !1;

        function o(n) {
            e.exports.mousifyTouchEvent(n), window.setUsingTouch(!0), i && (n.preventDefault(), n.stopPropagation()), r && (t.onclick && t.onclick(n), t.onmouseout && t.onmouseout(n), r = !1)
        }
        t.addEventListener("touchstart", e.exports.checkTrusted(function(n) {
            e.exports.mousifyTouchEvent(n), window.setUsingTouch(!0), i && (n.preventDefault(), n.stopPropagation()), t.onmouseover && t.onmouseover(n), r = !0
        }), !1), t.addEventListener("touchmove", e.exports.checkTrusted(function(n) {
            e.exports.mousifyTouchEvent(n), window.setUsingTouch(!0), i && (n.preventDefault(), n.stopPropagation()), e.exports.containsPoint(t, n.pageX, n.pageY) ? r || (t.onmouseover && t.onmouseover(n), r = !0) : r && (t.onmouseout && t.onmouseout(n), r = !1)
        }), !1), t.addEventListener("touchend", e.exports.checkTrusted(o), !1), t.addEventListener("touchcancel", e.exports.checkTrusted(o), !1), t.addEventListener("touchleave", e.exports.checkTrusted(o), !1)
    }, e.exports.removeAllChildren = function(e) {
        for (; e.hasChildNodes();) e.removeChild(e.lastChild)
    }, e.exports.generateElement = function(t) {
        var n = document.createElement(t.tag || "div");

        function i(e, i) {
            t[e] && (n[i] = t[e])
        }
        for (var r in i("text", "textContent"), i("html", "innerHTML"), i("class", "className"), t) {
            switch (r) {
                case "tag":
                case "text":
                case "html":
                case "class":
                case "style":
                case "hookTouch":
                case "parent":
                case "children":
                    continue
            }
            n[r] = t[r]
        }
        if (n.onclick && (n.onclick = e.exports.checkTrusted(n.onclick)), n.onmouseover && (n.onmouseover = e.exports.checkTrusted(n.onmouseover)), n.onmouseout && (n.onmouseout = e.exports.checkTrusted(n.onmouseout)), t.style && (n.style.cssText = t.style), t.hookTouch && e.exports.hookTouchEvents(n), t.parent && t.parent.appendChild(n), t.children)
            for (var o = 0; o < t.children.length; o++) n.appendChild(t.children[o]);
        return n
    }, e.exports.eventIsTrusted = function(e) {
        return !e || "boolean" != typeof e.isTrusted || e.isTrusted
    }, e.exports.checkTrusted = function(t) {
        return function(n) {
            n && n instanceof Event && e.exports.eventIsTrusted(n) && t(n)
        }
    }, e.exports.randomString = function(e) {
        for (var t = "", n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", i = 0; i < e; i++) t += n.charAt(Math.floor(Math.random() * n.length));
        return t
    }
}, function(e, t) {
    var n, i, r = e.exports = {};

    function o() {
        throw new Error("setTimeout has not been defined")
    }

    function s() {
        throw new Error("clearTimeout has not been defined")
    }

    function a(e) {
        if (n === setTimeout) return setTimeout(e, 0);
        if ((n === o || !n) && setTimeout) return n = setTimeout, setTimeout(e, 0);
        try {
            return n(e, 0)
        } catch (t) {
            try {
                return n.call(null, e, 0)
            } catch (t) {
                return n.call(this, e, 0)
            }
        }
    }! function() {
        try {
            n = "function" == typeof setTimeout ? setTimeout : o
        } catch (e) {
            n = o
        }
        try {
            i = "function" == typeof clearTimeout ? clearTimeout : s
        } catch (e) {
            i = s
        }
    }();
    var l, h = [],
        c = !1,
        u = -1;

    function f() {
        c && l && (c = !1, l.length ? h = l.concat(h) : u = -1, h.length && d())
    }

    function d() {
        if (!c) {
            var e = a(f);
            c = !0;
            for (var t = h.length; t;) {
                for (l = h, h = []; ++u < t;) l && l[u].run();
                u = -1, t = h.length
            }
            l = null, c = !1,
                function(e) {
                    if (i === clearTimeout) return clearTimeout(e);
                    if ((i === s || !i) && clearTimeout) return i = clearTimeout, clearTimeout(e);
                    try {
                        i(e)
                    } catch (t) {
                        try {
                            return i.call(null, e)
                        } catch (t) {
                            return i.call(this, e)
                        }
                    }
                }(e)
        }
    }

    function p(e, t) {
        this.fun = e, this.array = t
    }

    function g() {}
    r.nextTick = function(e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1)
            for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        h.push(new p(e, t)), 1 !== h.length || c || a(d)
    }, p.prototype.run = function() {
        this.fun.apply(null, this.array)
    }, r.title = "browser", r.browser = !0, r.env = {}, r.argv = [], r.version = "", r.versions = {}, r.on = g, r.addListener = g, r.once = g, r.off = g, r.removeListener = g, r.removeAllListeners = g, r.emit = g, r.prependListener = g, r.prependOnceListener = g, r.listeners = function(e) {
        return []
    }, r.binding = function(e) {
        throw new Error("process.binding is not supported")
    }, r.cwd = function() {
        return "/"
    }, r.chdir = function(e) {
        throw new Error("process.chdir is not supported")
    }, r.umask = function() {
        return 0
    }
}, function(e, t, n) {
    n(2), n(8), t.codec = {
        preset: n(1).preset
    }
}, function(e, t, n) {
    n(2), n(8), t.createCodec = n(1).createCodec
}, function(e, t, n) {
    t.Decoder = o;
    var i = n(11),
        r = n(13).DecodeBuffer;

    function o(e) {
        if (!(this instanceof o)) return new o(e);
        r.call(this, e)
    }
    o.prototype = new r, i.mixin(o.prototype), o.prototype.decode = function(e) {
        arguments.length && this.write(e), this.flush()
    }, o.prototype.push = function(e) {
        this.emit("data", e)
    }, o.prototype.end = function(e) {
        this.decode(e), this.emit("end")
    }
}, function(e, t, n) {
    t.Encoder = o;
    var i = n(11),
        r = n(19).EncodeBuffer;

    function o(e) {
        if (!(this instanceof o)) return new o(e);
        r.call(this, e)
    }
    o.prototype = new r, i.mixin(o.prototype), o.prototype.encode = function(e) {
        this.write(e), this.emit("data", this.read())
    }, o.prototype.end = function(e) {
        arguments.length && this.encode(e), this.flush(), this.emit("end")
    }
}, function(e, t, n) {
    var i = n(12);

    function r(e) {
        var t, n = new Array(256);
        for (t = 0; t <= 127; t++) n[t] = o(t);
        for (t = 128; t <= 143; t++) n[t] = a(t - 128, e.map);
        for (t = 144; t <= 159; t++) n[t] = a(t - 144, e.array);
        for (t = 160; t <= 191; t++) n[t] = a(t - 160, e.str);
        for (n[192] = o(null), n[193] = null, n[194] = o(!1), n[195] = o(!0), n[196] = s(e.uint8, e.bin), n[197] = s(e.uint16, e.bin), n[198] = s(e.uint32, e.bin), n[199] = s(e.uint8, e.ext), n[200] = s(e.uint16, e.ext), n[201] = s(e.uint32, e.ext), n[202] = e.float32, n[203] = e.float64, n[204] = e.uint8, n[205] = e.uint16, n[206] = e.uint32, n[207] = e.uint64, n[208] = e.int8, n[209] = e.int16, n[210] = e.int32, n[211] = e.int64, n[212] = a(1, e.ext), n[213] = a(2, e.ext), n[214] = a(4, e.ext), n[215] = a(8, e.ext), n[216] = a(16, e.ext), n[217] = s(e.uint8, e.str), n[218] = s(e.uint16, e.str), n[219] = s(e.uint32, e.str), n[220] = s(e.uint16, e.array), n[221] = s(e.uint32, e.array), n[222] = s(e.uint16, e.map), n[223] = s(e.uint32, e.map), t = 224; t <= 255; t++) n[t] = o(t - 256);
        return n
    }

    function o(e) {
        return function() {
            return e
        }
    }

    function s(e, t) {
        return function(n) {
            var i = e(n);
            return t(n, i)
        }
    }

    function a(e, t) {
        return function(n) {
            return t(n, e)
        }
    }
    t.getReadToken = function(e) {
        var t = i.getReadFormat(e);
        return e && e.useraw ? function(e) {
            var t, n = r(e).slice();
            for (n[217] = n[196], n[218] = n[197], n[219] = n[198], t = 160; t <= 191; t++) n[t] = a(t - 160, e.bin);
            return n
        }(t) : r(t)
    }
}, function(e, t, n) {
    t.setExtUnpackers = function(e) {
        e.addExtUnpacker(14, [a, h(Error)]), e.addExtUnpacker(1, [a, h(EvalError)]), e.addExtUnpacker(2, [a, h(RangeError)]), e.addExtUnpacker(3, [a, h(ReferenceError)]), e.addExtUnpacker(4, [a, h(SyntaxError)]), e.addExtUnpacker(5, [a, h(TypeError)]), e.addExtUnpacker(6, [a, h(URIError)]), e.addExtUnpacker(10, [a, l]), e.addExtUnpacker(11, [a, c(Boolean)]), e.addExtUnpacker(12, [a, c(String)]), e.addExtUnpacker(13, [a, c(Date)]), e.addExtUnpacker(15, [a, c(Number)]), "undefined" != typeof Uint8Array && (e.addExtUnpacker(17, c(Int8Array)), e.addExtUnpacker(18, c(Uint8Array)), e.addExtUnpacker(19, [u, c(Int16Array)]), e.addExtUnpacker(20, [u, c(Uint16Array)]), e.addExtUnpacker(21, [u, c(Int32Array)]), e.addExtUnpacker(22, [u, c(Uint32Array)]), e.addExtUnpacker(23, [u, c(Float32Array)]), "undefined" != typeof Float64Array && e.addExtUnpacker(24, [u, c(Float64Array)]), "undefined" != typeof Uint8ClampedArray && e.addExtUnpacker(25, c(Uint8ClampedArray)), e.addExtUnpacker(26, u), e.addExtUnpacker(29, [u, c(DataView)])), r.hasBuffer && e.addExtUnpacker(27, c(o))
    };
    var i, r = n(0),
        o = r.global,
        s = {
            name: 1,
            message: 1,
            stack: 1,
            columnNumber: 1,
            fileName: 1,
            lineNumber: 1
        };

    function a(e) {
        return i || (i = n(14).decode), i(e)
    }

    function l(e) {
        return RegExp.apply(null, e)
    }

    function h(e) {
        return function(t) {
            var n = new e;
            for (var i in s) n[i] = t[i];
            return n
        }
    }

    function c(e) {
        return function(t) {
            return new e(t)
        }
    }

    function u(e) {
        return new Uint8Array(e).buffer
    }
}, function(e, t, n) {
    var i = n(6),
        r = n(3),
        o = r.Uint64BE,
        s = r.Int64BE,
        a = n(16).uint8,
        l = n(0),
        h = l.global,
        c = l.hasBuffer && "TYPED_ARRAY_SUPPORT" in h && !h.TYPED_ARRAY_SUPPORT,
        u = l.hasBuffer && h.prototype || {};

    function f() {
        var e = a.slice();
        return e[196] = d(196), e[197] = p(197), e[198] = g(198), e[199] = d(199), e[200] = p(200), e[201] = g(201), e[202] = m(202, 4, u.writeFloatBE || w, !0), e[203] = m(203, 8, u.writeDoubleBE || x, !0), e[204] = d(204), e[205] = p(205), e[206] = g(206), e[207] = m(207, 8, y), e[208] = d(208), e[209] = p(209), e[210] = g(210), e[211] = m(211, 8, v), e[217] = d(217), e[218] = p(218), e[219] = g(219), e[220] = p(220), e[221] = g(221), e[222] = p(222), e[223] = g(223), e
    }

    function d(e) {
        return function(t, n) {
            var i = t.reserve(2),
                r = t.buffer;
            r[i++] = e, r[i] = n
        }
    }

    function p(e) {
        return function(t, n) {
            var i = t.reserve(3),
                r = t.buffer;
            r[i++] = e, r[i++] = n >>> 8, r[i] = n
        }
    }

    function g(e) {
        return function(t, n) {
            var i = t.reserve(5),
                r = t.buffer;
            r[i++] = e, r[i++] = n >>> 24, r[i++] = n >>> 16, r[i++] = n >>> 8, r[i] = n
        }
    }

    function m(e, t, n, i) {
        return function(r, o) {
            var s = r.reserve(t + 1);
            r.buffer[s++] = e, n.call(r.buffer, o, s, i)
        }
    }

    function y(e, t) {
        new o(this, t, e)
    }

    function v(e, t) {
        new s(this, t, e)
    }

    function w(e, t) {
        i.write(this, e, t, !1, 23, 4)
    }

    function x(e, t) {
        i.write(this, e, t, !1, 52, 8)
    }
    t.getWriteToken = function(e) {
        return e && e.uint8array ? function() {
            var e = f();
            return e[202] = m(202, 4, w), e[203] = m(203, 8, x), e
        }() : c || l.hasBuffer && e && e.safe ? function() {
            var e = a.slice();
            return e[196] = m(196, 1, h.prototype.writeUInt8), e[197] = m(197, 2, h.prototype.writeUInt16BE), e[198] = m(198, 4, h.prototype.writeUInt32BE), e[199] = m(199, 1, h.prototype.writeUInt8), e[200] = m(200, 2, h.prototype.writeUInt16BE), e[201] = m(201, 4, h.prototype.writeUInt32BE), e[202] = m(202, 4, h.prototype.writeFloatBE), e[203] = m(203, 8, h.prototype.writeDoubleBE), e[204] = m(204, 1, h.prototype.writeUInt8), e[205] = m(205, 2, h.prototype.writeUInt16BE), e[206] = m(206, 4, h.prototype.writeUInt32BE), e[207] = m(207, 8, y), e[208] = m(208, 1, h.prototype.writeInt8), e[209] = m(209, 2, h.prototype.writeInt16BE), e[210] = m(210, 4, h.prototype.writeInt32BE), e[211] = m(211, 8, v), e[217] = m(217, 1, h.prototype.writeUInt8), e[218] = m(218, 2, h.prototype.writeUInt16BE), e[219] = m(219, 4, h.prototype.writeUInt32BE), e[220] = m(220, 2, h.prototype.writeUInt16BE), e[221] = m(221, 4, h.prototype.writeUInt32BE), e[222] = m(222, 2, h.prototype.writeUInt16BE), e[223] = m(223, 4, h.prototype.writeUInt32BE), e
        }() : f()
    }
}, function(e, t, n) {
    var i = n(5),
        r = n(3),
        o = r.Uint64BE,
        s = r.Int64BE,
        a = n(0),
        l = n(4),
        h = n(52),
        c = n(16).uint8,
        u = n(7).ExtBuffer,
        f = "undefined" != typeof Uint8Array,
        d = "undefined" != typeof Map,
        p = [];
    p[1] = 212, p[2] = 213, p[4] = 214, p[8] = 215, p[16] = 216, t.getWriteType = function(e) {
        var t = h.getWriteToken(e),
            n = e && e.useraw,
            r = f && e && e.binarraybuffer,
            g = r ? a.isArrayBuffer : a.isBuffer,
            m = r ? function(e, t) {
                x(e, new Uint8Array(t))
            } : x,
            y = d && e && e.usemap ? function(e, n) {
                if (!(n instanceof Map)) return b(e, n);
                var i = n.size;
                t[i < 16 ? 128 + i : i <= 65535 ? 222 : 223](e, i);
                var r = e.codec.encode;
                n.forEach(function(t, n, i) {
                    r(e, n), r(e, t)
                })
            } : b;
        return {
            boolean: function(e, n) {
                t[n ? 195 : 194](e, n)
            },
            function: w,
            number: function(e, n) {
                var i = 0 | n;
                n === i ? t[-32 <= i && i <= 127 ? 255 & i : 0 <= i ? i <= 255 ? 204 : i <= 65535 ? 205 : 206 : -128 <= i ? 208 : -32768 <= i ? 209 : 210](e, i) : t[203](e, n)
            },
            object: n ? function(e, n) {
                if (g(n)) return function(e, n) {
                    var i = n.length;
                    t[i < 32 ? 160 + i : i <= 65535 ? 218 : 219](e, i), e.send(n)
                }(e, n);
                v(e, n)
            } : v,
            string: function(e) {
                return function(n, i) {
                    var r = i.length,
                        o = 5 + 3 * r;
                    n.offset = n.reserve(o);
                    var s = n.buffer,
                        a = e(r),
                        h = n.offset + a;
                    r = l.write.call(s, i, h);
                    var c = e(r);
                    if (a !== c) {
                        var u = h + c - a,
                            f = h + r;
                        l.copy.call(s, s, u, h, f)
                    }
                    t[1 === c ? 160 + r : c <= 3 ? 215 + c : 219](n, r), n.offset += r
                }
            }(n ? function(e) {
                return e < 32 ? 1 : e <= 65535 ? 3 : 5
            } : function(e) {
                return e < 32 ? 1 : e <= 255 ? 2 : e <= 65535 ? 3 : 5
            }),
            symbol: w,
            undefined: w
        };

        function v(e, n) {
            if (null === n) return w(e, n);
            if (g(n)) return m(e, n);
            if (i(n)) return function(e, n) {
                var i = n.length;
                t[i < 16 ? 144 + i : i <= 65535 ? 220 : 221](e, i);
                for (var r = e.codec.encode, o = 0; o < i; o++) r(e, n[o])
            }(e, n);
            if (o.isUint64BE(n)) return function(e, n) {
                t[207](e, n.toArray())
            }(e, n);
            if (s.isInt64BE(n)) return function(e, n) {
                t[211](e, n.toArray())
            }(e, n);
            var r = e.codec.getExtPacker(n);
            if (r && (n = r(n)), n instanceof u) return function(e, n) {
                var i = n.buffer,
                    r = i.length,
                    o = p[r] || (r < 255 ? 199 : r <= 65535 ? 200 : 201);
                t[o](e, r), c[n.type](e), e.send(i)
            }(e, n);
            y(e, n)
        }

        function w(e, n) {
            t[192](e, n)
        }

        function x(e, n) {
            var i = n.length;
            t[i < 255 ? 196 : i <= 65535 ? 197 : 198](e, i), e.send(n)
        }

        function b(e, n) {
            var i = Object.keys(n),
                r = i.length;
            t[r < 16 ? 128 + r : r <= 65535 ? 222 : 223](e, r);
            var o = e.codec.encode;
            i.forEach(function(t) {
                o(e, t), o(e, n[t])
            })
        }
    }
}, function(e, t, n) {
    t.setExtPackers = function(e) {
        e.addExtPacker(14, Error, [u, l]), e.addExtPacker(1, EvalError, [u, l]), e.addExtPacker(2, RangeError, [u, l]), e.addExtPacker(3, ReferenceError, [u, l]), e.addExtPacker(4, SyntaxError, [u, l]), e.addExtPacker(5, TypeError, [u, l]), e.addExtPacker(6, URIError, [u, l]), e.addExtPacker(10, RegExp, [c, l]), e.addExtPacker(11, Boolean, [h, l]), e.addExtPacker(12, String, [h, l]), e.addExtPacker(13, Date, [Number, l]), e.addExtPacker(15, Number, [h, l]), "undefined" != typeof Uint8Array && (e.addExtPacker(17, Int8Array, s), e.addExtPacker(18, Uint8Array, s), e.addExtPacker(19, Int16Array, s), e.addExtPacker(20, Uint16Array, s), e.addExtPacker(21, Int32Array, s), e.addExtPacker(22, Uint32Array, s), e.addExtPacker(23, Float32Array, s), "undefined" != typeof Float64Array && e.addExtPacker(24, Float64Array, s), "undefined" != typeof Uint8ClampedArray && e.addExtPacker(25, Uint8ClampedArray, s), e.addExtPacker(26, ArrayBuffer, s), e.addExtPacker(29, DataView, s)), r.hasBuffer && e.addExtPacker(27, o, r.from)
    };
    var i, r = n(0),
        o = r.global,
        s = r.Uint8Array.from,
        a = {
            name: 1,
            message: 1,
            stack: 1,
            columnNumber: 1,
            fileName: 1,
            lineNumber: 1
        };

    function l(e) {
        return i || (i = n(20).encode), i(e)
    }

    function h(e) {
        return e.valueOf()
    }

    function c(e) {
        (e = RegExp.prototype.toString.call(e).split("/")).shift();
        var t = [e.pop()];
        return t.unshift(e.join("/")), t
    }

    function u(e) {
        var t = {};
        for (var n in a) t[n] = e[n];
        return t
    }
}, function(e, t) {
    t.copy = function(e, t, n, i) {
        var r;
        n || (n = 0), i || 0 === i || (i = this.length), t || (t = 0);
        var o = i - n;
        if (e === this && n < t && t < i)
            for (r = o - 1; r >= 0; r--) e[r + t] = this[r + n];
        else
            for (r = 0; r < o; r++) e[r + t] = this[r + n];
        return o
    }, t.toString = function(e, t, n) {
        var i = 0 | t;
        n || (n = this.length);
        for (var r = "", o = 0; i < n;)(o = this[i++]) < 128 ? r += String.fromCharCode(o) : (192 == (224 & o) ? o = (31 & o) << 6 | 63 & this[i++] : 224 == (240 & o) ? o = (15 & o) << 12 | (63 & this[i++]) << 6 | 63 & this[i++] : 240 == (248 & o) && (o = (7 & o) << 18 | (63 & this[i++]) << 12 | (63 & this[i++]) << 6 | 63 & this[i++]), o >= 65536 ? (o -= 65536, r += String.fromCharCode(55296 + (o >>> 10), 56320 + (1023 & o))) : r += String.fromCharCode(o));
        return r
    }, t.write = function(e, t) {
        for (var n = t || (t |= 0), i = e.length, r = 0, o = 0; o < i;)(r = e.charCodeAt(o++)) < 128 ? this[n++] = r : r < 2048 ? (this[n++] = 192 | r >>> 6, this[n++] = 128 | 63 & r) : r < 55296 || r > 57343 ? (this[n++] = 224 | r >>> 12, this[n++] = 128 | r >>> 6 & 63, this[n++] = 128 | 63 & r) : (r = 65536 + (r - 55296 << 10 | e.charCodeAt(o++) - 56320), this[n++] = 240 | r >>> 18, this[n++] = 128 | r >>> 12 & 63, this[n++] = 128 | r >>> 6 & 63, this[n++] = 128 | 63 & r);
        return n - t
    }
}, function(e, t, n) {
    var i = n(0);

    function r(e) {
        return new Uint8Array(e)
    }(t = e.exports = i.hasArrayBuffer ? r(0) : []).alloc = r, t.concat = i.concat, t.from = function(e) {
        if (i.isView(e)) {
            var n = e.byteOffset,
                r = e.byteLength;
            (e = e.buffer).byteLength !== r && (e.slice ? e = e.slice(n, n + r) : (e = new Uint8Array(e)).byteLength !== r && (e = Array.prototype.slice.call(e, n, n + r)))
        } else {
            if ("string" == typeof e) return i.from.call(t, e);
            if ("number" == typeof e) throw new TypeError('"value" argument must not be a number')
        }
        return new Uint8Array(e)
    }
}, function(e, t, n) {
    var i = n(0),
        r = i.global;

    function o(e) {
        return new r(e)
    }(t = e.exports = i.hasBuffer ? o(0) : []).alloc = i.hasBuffer && r.alloc || o, t.concat = i.concat, t.from = function(e) {
        if (!i.isBuffer(e) && i.isView(e)) e = i.Uint8Array.from(e);
        else if (i.isArrayBuffer(e)) e = new Uint8Array(e);
        else {
            if ("string" == typeof e) return i.from.call(t, e);
            if ("number" == typeof e) throw new TypeError('"value" argument must not be a number')
        }
        return r.from && 1 !== r.from.length ? r.from(e) : new r(e)
    }
}, function(e, t, n) {
    var i = n(0);

    function r(e) {
        return new Array(e)
    }(t = e.exports = r(0)).alloc = r, t.concat = i.concat, t.from = function(e) {
        if (!i.isBuffer(e) && i.isView(e)) e = i.Uint8Array.from(e);
        else if (i.isArrayBuffer(e)) e = new Uint8Array(e);
        else {
            if ("string" == typeof e) return i.from.call(t, e);
            if ("number" == typeof e) throw new TypeError('"value" argument must not be a number')
        }
        return Array.prototype.slice.call(e)
    }
}, function(e, t) {
    var n = {}.toString;
    e.exports = Array.isArray || function(e) {
        return "[object Array]" == n.call(e)
    }
}, function(e, t, n) {
    "use strict";
    t.byteLength = function(e) {
        var t = h(e),
            n = t[0],
            i = t[1];
        return 3 * (n + i) / 4 - i
    }, t.toByteArray = function(e) {
        for (var t, n = h(e), i = n[0], s = n[1], a = new o(3 * (i + s) / 4 - s), l = 0, c = s > 0 ? i - 4 : i, u = 0; u < c; u += 4) t = r[e.charCodeAt(u)] << 18 | r[e.charCodeAt(u + 1)] << 12 | r[e.charCodeAt(u + 2)] << 6 | r[e.charCodeAt(u + 3)], a[l++] = t >> 16 & 255, a[l++] = t >> 8 & 255, a[l++] = 255 & t;
        return 2 === s && (t = r[e.charCodeAt(u)] << 2 | r[e.charCodeAt(u + 1)] >> 4, a[l++] = 255 & t), 1 === s && (t = r[e.charCodeAt(u)] << 10 | r[e.charCodeAt(u + 1)] << 4 | r[e.charCodeAt(u + 2)] >> 2, a[l++] = t >> 8 & 255, a[l++] = 255 & t), a
    }, t.fromByteArray = function(e) {
        for (var t, n = e.length, r = n % 3, o = [], s = 0, a = n - r; s < a; s += 16383) o.push(u(e, s, s + 16383 > a ? a : s + 16383));
        return 1 === r ? (t = e[n - 1], o.push(i[t >> 2] + i[t << 4 & 63] + "==")) : 2 === r && (t = (e[n - 2] << 8) + e[n - 1], o.push(i[t >> 10] + i[t >> 4 & 63] + i[t << 2 & 63] + "=")), o.join("")
    };
    for (var i = [], r = [], o = "undefined" != typeof Uint8Array ? Uint8Array : Array, s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", a = 0, l = s.length; a < l; ++a) i[a] = s[a], r[s.charCodeAt(a)] = a;

    function h(e) {
        var t = e.length;
        if (t % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
        var n = e.indexOf("=");
        return -1 === n && (n = t), [n, n === t ? 0 : 4 - n % 4]
    }

    function c(e) {
        return i[e >> 18 & 63] + i[e >> 12 & 63] + i[e >> 6 & 63] + i[63 & e]
    }

    function u(e, t, n) {
        for (var i, r = [], o = t; o < n; o += 3) i = (e[o] << 16 & 16711680) + (e[o + 1] << 8 & 65280) + (255 & e[o + 2]), r.push(c(i));
        return r.join("")
    }
    r["-".charCodeAt(0)] = 62, r["_".charCodeAt(0)] = 63
}, function(e, t, n) {
    (function(t) {
        function n(e) {
            return e && e.isBuffer && e
        }
        e.exports = n(void 0 !== t && t) || n(this.Buffer) || n("undefined" != typeof window && window.Buffer) || this.Buffer
    }).call(this, n(18).Buffer)
}, function(e, t, n) {
    t.encode = n(20).encode, t.decode = n(14).decode, t.Encoder = n(49).Encoder, t.Decoder = n(48).Decoder, t.createCodec = n(47).createCodec, t.codec = n(46).codec
}, function(e, t, n) {
    var i = n(62);
    n(10), e.exports = {
        socket: null,
        connected: !1,
        socketId: -1,
        connect: function(e, t, n) {
            if (!this.socket) {
                var r = this;
                try {
                    var o = !1,
                        s = e;
                    this.socket = new WebSocket(s), this.socket.binaryType = "arraybuffer", this.socket.onmessage = function(e) {
                        var t = new Uint8Array(e.data),
                            o = i.decode(t),
                            s = o[0];
                        t = o[1], "io-init" == s ? r.socketId = t[0] : n[s].apply(void 0, t)
                    }, this.socket.onopen = function() {
                        r.connected = !0, t()
                    }, this.socket.onclose = function() {
                        r.connected = !1, o || t("Disconnected. Try connecting to another server.")
                    }, this.socket.onerror = function(e) {
                        this.socket && this.socket.readyState != WebSocket.OPEN && (o = !0, console.error("Socket error", arguments), t("Socket error"))
                    }
                } catch (e) {
                    console.warn("Socket connection error:", e), t(e)
                }
            }
        },
        send: function(e) {
            var t = Array.prototype.slice.call(arguments, 1),
                n = i.encode([e, t]);
            this.socket.send(n)
        },
        socketReady: function() {
            return this.socket && this.connected
        },
        close: function() {
            this.socket && this.socket.close()
        }
    }
}, function(e, t) {
    ! function(e, t, n) {
        function i(e, t) {
            return typeof e === t
        }
        var r = [],
            o = [],
            s = {
                _version: "3.5.0",
                _config: {
                    classPrefix: "",
                    enableClasses: !0,
                    enableJSClass: !0,
                    usePrefixes: !0
                },
                _q: [],
                on: function(e, t) {
                    var n = this;
                    setTimeout(function() {
                        t(n[e])
                    }, 0)
                },
                addTest: function(e, t, n) {
                    o.push({
                        name: e,
                        fn: t,
                        options: n
                    })
                },
                addAsyncTest: function(e) {
                    o.push({
                        name: null,
                        fn: e
                    })
                }
            },
            a = function() {};
        a.prototype = s, a = new a;
        var l = t.documentElement,
            h = "svg" === l.nodeName.toLowerCase();
        a.addTest("passiveeventlisteners", function() {
                var t = !1;
                try {
                    var n = Object.defineProperty({}, "passive", {
                        get: function() {
                            t = !0
                        }
                    });
                    e.addEventListener("test", null, n)
                } catch (e) {}
                return t
            }),
            function() {
                var e, t, n, s, l, h;
                for (var c in o)
                    if (o.hasOwnProperty(c)) {
                        if (e = [], (t = o[c]).name && (e.push(t.name.toLowerCase()), t.options && t.options.aliases && t.options.aliases.length))
                            for (n = 0; n < t.options.aliases.length; n++) e.push(t.options.aliases[n].toLowerCase());
                        for (s = i(t.fn, "function") ? t.fn() : t.fn, l = 0; l < e.length; l++) 1 === (h = e[l].split(".")).length ? a[h[0]] = s : (!a[h[0]] || a[h[0]] instanceof Boolean || (a[h[0]] = new Boolean(a[h[0]])), a[h[0]][h[1]] = s), r.push((s ? "" : "no-") + h.join("-"))
                    }
            }(),
            function(e) {
                var t = l.className,
                    n = a._config.classPrefix || "";
                if (h && (t = t.baseVal), a._config.enableJSClass) {
                    var i = new RegExp("(^|\\s)" + n + "no-js(\\s|$)");
                    t = t.replace(i, "$1" + n + "js$2")
                }
                a._config.enableClasses && (t += " " + n + e.join(" " + n), h ? l.className.baseVal = t : l.className = t)
            }(r), delete s.addTest, delete s.addAsyncTest;
        for (var c = 0; c < a._q.length; c++) a._q[c]();
        e.Modernizr = a
    }(window, document)
}, function(e, t, n) {
    "use strict";
    window.loadedScript = !0;
    var i = "127.0.0.1" !== location.hostname && !location.hostname.startsWith("192.168.");
    n(64);
    var r = n(63),
        o = n(44),
        s = n(43),
        a = n(10),
        l = n(42),
        h = n(41),
        c = (n(40), n(39)),
        u = n(38),
        f = n(37),
        d = n(36),
        p = n(35),
        g = n(34).obj,
        m = new s.TextManager,
        y = new(n(33))("moomoo.io", 3e3, a.maxPlayers, 5, !1);
    y.debugLog = !1;
    var v = new g(a, o);

    function w(e) {
        void 0 == e && (e = !v.active), v.active = e, S("moo_moosic", e ? 1 : 0)
    }
    var x, b = Math.PI,
        k = 2 * b;

    function S(e, t) {
        x && localStorage.setItem(e, t)
    }

    function I(e) {
        return x ? localStorage.getItem(e) : null
    }
    Math.lerpAngle = function(e, t, n) {
        Math.abs(t - e) > b && (e > t ? t += k : e += k);
        var i = t + (e - t) * n;
        return i >= 0 && i <= k ? i : i % k
    }, CanvasRenderingContext2D.prototype.roundRect = function(e, t, n, i, r) {
        return n < 2 * r && (r = n / 2), i < 2 * r && (r = i / 2), r < 0 && (r = 0), this.beginPath(), this.moveTo(e + r, t), this.arcTo(e + n, t, e + n, t + i, r), this.arcTo(e + n, t + i, e, t + i, r), this.arcTo(e, t + i, e, t, r), this.arcTo(e, t, e + n, t, r), this.closePath(), this
    }, "undefined" != typeof Storage && (x = !0);
    var T, E, M, A, P, B, C, O, R, D, U, _, j, L, H, V = I("moofoll"),
        Y = 1,
        F = Date.now(),
        q = [],
        W = [],
        X = [],
        N = [],
        z = [],
        G = new p(d, z, W, q, et, h, a, o),
        J = n(22),
        Q = n(21),
        K = new J(q, Q, W, h, null, a, o),
        $ = 1,
        Z = 0,
        ee = 0,
        te = 0,
        ne = {
            id: -1,
            startX: 0,
            startY: 0,
            currentX: 0,
            currentY: 0
        },
        ie = {
            id: -1,
            startX: 0,
            startY: 0,
            currentX: 0,
            currentY: 0
        },
        re = 0,
        oe = a.maxScreenWidth,
        se = a.maxScreenHeight,
        ae = !1,
        le = (document.getElementById("ad-container"), document.getElementById("mainMenu")),
        he = document.getElementById("enterGame"),
        ce = document.getElementById("promoImg"),
        ue = document.getElementById("partyButton"),
        fe = document.getElementById("joinPartyButton"),
        de = document.getElementById("settingsButton"),
        pe = de.getElementsByTagName("span")[0],
        ge = document.getElementById("allianceButton"),
        me = document.getElementById("storeButton"),
        ye = document.getElementById("chatButton"),
        ve = document.getElementById("gameCanvas"),
        we = ve.getContext("2d"),
        xe = document.getElementById("serverBrowser"),
        be = document.getElementById("nativeResolution"),
        ke = document.getElementById("showPing"),
        Se = document.getElementById("playMusic"),
        Ie = document.getElementById("pingDisplay"),
        Te = document.getElementById("menuCardHolder"),
        Ee = document.getElementById("guideCard"),
        Me = document.getElementById("loadingText"),
        Ae = document.getElementById("gameUI"),
        Pe = document.getElementById("actionBar"),
        Be = document.getElementById("scoreDisplay"),
        Ce = document.getElementById("foodDisplay"),
        Oe = document.getElementById("woodDisplay"),
        Re = document.getElementById("stoneDisplay"),
        De = document.getElementById("killCounter"),
        Ue = document.getElementById("leaderboardData"),
        _e = document.getElementById("nameInput"),
        je = document.getElementById("itemInfoHolder"),
        Le = document.getElementById("ageText"),
        He = document.getElementById("ageBarBody"),
        Ve = document.getElementById("upgradeHolder"),
        Ye = document.getElementById("upgradeCounter"),
        Fe = document.getElementById("allianceMenu"),
        qe = document.getElementById("allianceHolder"),
        We = document.getElementById("allianceManager"),
        Xe = document.getElementById("mapDisplay"),
        Ne = document.getElementById("diedText"),
        ze = document.getElementById("skinColorHolder"),
        Ge = Xe.getContext("2d");
    Xe.width = 300, Xe.height = 300;
    var Je = document.getElementById("storeMenu"),
        Qe = document.getElementById("storeHolder"),
        Ke = document.getElementById("noticationDisplay"),
        $e = f.hats,
        Ze = f.accessories,
        et = new c(l, N, o, a),
        tt = "#525252",
        nt = "#3d3f42",
        it = 5.5;

    function rt(e) {
        X = e.teams
    }
    var ot = document.getElementById("featuredYoutube"),
        st = [{
            name: "FlareZ Gaming",
            link: "https://www.youtube.com/channel/UC0UH2LfQvBSeH24bmtbmITw"
        }, {
            name: "Pro Hack Net",
            link: "https://www.youtube.com/channel/UCbwvzJ38AndDTkoX8sD9YOw"
        }, {
            name: "Haykam",
            link: "https://www.youtube.com/channel/UCazucVSJqW-kiHMIhQhD-QQ"
        }, {
            name: "Cloudy",
            link: "https://www.youtube.com/user/SirGodenot"
        }, {
            name: "Jabiddle",
            link: "https://www.youtube.com/channel/UCVLo9brXBWrCttMaGzvm0-Q"
        }, {
            name: "gnnrskl",
            link: "https://www.youtube.com/channel/UC7z97RgHFJRcv2niXgArBDw"
        }, {
            name: "aQuiVeR",
            link: "https://www.youtube.com/channel/UCSl-MBn3qzjrIvLNESQRk-g"
        }, {
            name: "NightmaresDev",
            link: "https://www.youtube.com/channel/UC04p8Mg8nDaDx04A9is2B8Q"
        }, {
            name: "Sushi",
            link: "https://www.youtube.com/channel/UC5HhLbs3sReHo8Bb9NDdFrg"
        }, {
            name: "EuphoricPenguin",
            link: "https://www.youtube.com/channel/UCwU2TbJx3xTSlPqg-Ix3R1g"
        }, {
            name: "Lucario",
            link: "https://www.youtube.com/channel/UCGrvlEOsQFViZbyFDE6t69A"
        }, {
            name: "404 Team",
            link: "https://www.youtube.com/channel/UCvVI98ezn4TpX5wDMZjMa3g"
        }, {
            name: "CX",
            link: "https://www.youtube.com/channel/UCj6C_tiDeATiKd3GX127XoQ"
        }, {
            name: "parse",
            link: "https://www.youtube.com/channel/UCou6CLU-szZA3Tb340TB9_Q"
        }, {
            name: "???",
            link: "https://www.youtube.com/channel/UCgL6J6oL8F69vm-GcPScmwg"
        }, {
            name: "TigerYT",
            link: "https://www.youtube.com/channel/UCiU6WZwiKbsnt5xmwr0OFbg"
        }, {
            name: "FlareZ",
            link: "https://www.youtube.com/channel/UCOcQthRanYcwYY0XVyVeK0g"
        }],
        at = st[o.randInt(0, st.length - 1)];
    ot.innerHTML = "<a target='_blank' class='ytLink' href='" + at.link + "'><i class='material-icons' style='vertical-align: top;'>?</i> " + at.name + "</a>";
    var lt = !0;

    function ht(e) {
        r.close(), ct(e)
    }

    function ct(e) {
        le.style.display = "block", Ae.style.display = "none", Te.style.display = "none", Ne.style.display = "none", Me.style.display = "block", Me.innerHTML = e + "<a href='javascript:window.location.href=window.location.href' class='ytLink'>reload</a>"
    }
    window.onblur = function() {
        lt = !1
    }, window.onfocus = function() {
        lt = !0, O && O.alive && vn()
    }, window.onload = function() {
        ! function(e) {
            y.start(function(t, n, o) {
                var s = (i ? "wss" : "ws") + "://" + t + ":8008/?gameIndex=" + o;
                r.connect(s, function(t) {
                    Ci(), setInterval(() => Ci(), 2500), t ? e("disconnected") : e()
                }, {
                    id: rt,
                    d: ht,
                    1: Mn,
                    2: xi,
                    4: bi,
                    3: Ti,
                    5: Hn,
                    6: ci,
                    a: mi,
                    aa: gi,
                    7: Nn,
                    8: ui,
                    s: fi,
                    9: Si,
                    10: Ii,
                    11: Bn,
                    12: On,
                    13: Cn,
                    14: ki,
                    15: Ln,
                    16: jn,
                    17: Zt,
                    18: di,
                    19: pi,
                    ac: Rt,
                    ad: _t,
                    an: Ct,
                    st: Dt,
                    sa: Ut,
                    us: Gt,
                    ch: un,
                    mm: Nt,
                    t: An,
                    p: Xt,
                    pp: Bi
                }), ft(), setTimeout(() => dt(), 3e3)
            }, function(t) {
                console.error("Vultr error:", t), alert("Error:\n" + t), e(t)
            })
        }(function(e) {
            e ? ht("disconnected") : (he.onclick = o.checkTrusted(function() {
                window.admob ? Tn() : function() {
                    if (window.admob) Tn();
                    else {
                        var e = ++kt > 1,
                            t = Date.now() - bt > xt;
                        if (console.log("Game", e, kt, "Time", t, (Date.now() - bt) / 1e3 / 60, xt / 1e3 / 60), e && t) {
                            St = !0;
                            var n = document.createElement("script");
                            n.src = "//cdn.playwire.com/bolt/js/zeus/embed.js", n.type = "text/javascript", n.setAttribute("charset", "utf-8"), n.setAttribute("data-config", "//config.playwire.com/1020124/v2/pre_content.json"), n.setAttribute("data-width", "640px"), n.setAttribute("data-height", "360px"), n.setAttribute("data-id", "pre-content-player"), n.setAttribute("data-hidden-container", "my-content"), n.setAttribute("data-onready", "window.boltEventHandlers");
                            var i = document.getElementById("pre-content-container");
                            i.style.display = "block", i.appendChild(n), setTimeout(function() {
                                "none" != document.getElementById("my-content").style.display ? (console.log("Ad blocked"), It()) : console.log("Ad not blocked")
                            }, 2500), setTimeout(function() {
                                It()
                            }, 3e4)
                        } else Tn()
                    }
                }()
            }), o.hookTouchEvents(he), ce.onclick = o.checkTrusted(function() {
                Oi("https://krunker.io")
            }), o.hookTouchEvents(ce), fe.onclick = o.checkTrusted(function() {
                setTimeout(function() {
                    ! function() {
                        var e = xe.value,
                            t = prompt("party key", e);
                        t && (window.onbeforeunload = void 0, window.location.href = "/?server=" + t)
                    }()
                }, 10)
            }), o.hookTouchEvents(fe), de.onclick = o.checkTrusted(function() {
                Ee.classList.contains("showing") ? (Ee.classList.remove("showing"), pe.innerText = "Settings") : (Ee.classList.add("showing"), pe.innerText = "Close")
            }), o.hookTouchEvents(de), ge.onclick = o.checkTrusted(function() {
                vn(), "block" != Fe.style.display ? jt() : Fe.style.display = "none"
            }), o.hookTouchEvents(ge), me.onclick = o.checkTrusted(function() {
                "block" != Je.style.display ? (Je.style.display = "block", Fe.style.display = "none", an(), Jt()) : Je.style.display = "none"
            }), o.hookTouchEvents(me), ye.onclick = o.checkTrusted(function() {
                on()
            }), o.hookTouchEvents(ye), Xe.onclick = o.checkTrusted(function() {
                Sn()
            }), o.hookTouchEvents(Xe), function() {
                for (var e = 0; e < Un.length; ++e) {
                    var t = new Image;
                    t.onload = function() {
                        this.isLoaded = !0
                    }, t.src = ".././img/icons/" + Un[e] + ".png", Dn[Un[e]] = t
                }
            }(), Me.style.display = "none", Te.style.display = "block", _e.value = I("moo_name") || "", function() {
                wt();
                var e = I("native_resolution");
                en(e ? "true" == e : "undefined" != typeof cordova), E = "true" == I("show_ping"), Ie.hidden = !E, M = I("moo_moosic") || 0, setInterval(function() {
                    window.cordova && (document.getElementById("downloadButtonContainer").classList.add("cordova"), document.getElementById("mobileDownloadButtonContainer").classList.add("cordova"))
                }, 1e3), tn(), o.removeAllChildren(Pe);
                for (var t = 0; t < h.weapons.length + h.list.length; ++t) ! function(e) {
                    o.generateElement({
                        id: "actionBarItem" + e,
                        class: "actionBarItem",
                        style: "display:none",
                        onmouseout: function() {
                            Tt()
                        },
                        parent: Pe
                    })
                }(t);
                for (t = 0; t < h.list.length + h.weapons.length; ++t) ! function(e) {
                    var t = document.createElement("canvas");
                    t.width = t.height = 66;
                    var n = t.getContext("2d");
                    if (n.translate(t.width / 2, t.height / 2), n.imageSmoothingEnabled = !1, n.webkitImageSmoothingEnabled = !1, n.mozImageSmoothingEnabled = !1, h.weapons[e]) {
                        n.rotate(Math.PI / 4 + Math.PI);
                        var i = new Image;
                        ei[h.weapons[e].src] = i, i.onload = function() {
                            this.isLoaded = !0;
                            var i = 1 / (this.height / this.width),
                                r = h.weapons[e].iPad || 1;
                            n.drawImage(this, -t.width * r * a.iconPad * i / 2, -t.height * r * a.iconPad / 2, t.width * r * i * a.iconPad, t.height * r * a.iconPad), n.fillStyle = "rgba(0, 0, 70, 0.1)", n.globalCompositeOperation = "source-atop", n.fillRect(-t.width / 2, -t.height / 2, t.width, t.height), document.getElementById("actionBarItem" + e).style.backgroundImage = "url(" + t.toDataURL() + ")"
                        }, i.src = ".././img/weapons/" + h.weapons[e].src + ".png", (r = document.getElementById("actionBarItem" + e)).onmouseover = o.checkTrusted(function() {
                            Tt(h.weapons[e], !0)
                        }), r.onclick = o.checkTrusted(function() {
                            In(e, !0)
                        }), o.hookTouchEvents(r)
                    } else {
                        i = oi(h.list[e - h.weapons.length], !0);
                        var r, s = Math.min(t.width - a.iconPadding, i.width);
                        n.globalAlpha = 1, n.drawImage(i, -s / 2, -s / 2, s, s), n.fillStyle = "rgba(0, 0, 70, 0.1)", n.globalCompositeOperation = "source-atop", n.fillRect(-s / 2, -s / 2, s, s), document.getElementById("actionBarItem" + e).style.backgroundImage = "url(" + t.toDataURL() + ")", (r = document.getElementById("actionBarItem" + e)).onmouseover = o.checkTrusted(function() {
                            Tt(h.list[e - h.weapons.length])
                        }), r.onclick = o.checkTrusted(function() {
                            In(e - h.weapons.length)
                        }), o.hookTouchEvents(r)
                    }
                }(t);
                _e.ontouchstart = o.checkTrusted(function(e) {
                    e.preventDefault();
                    var t = prompt("enter name", e.currentTarget.value);
                    e.currentTarget.value = t.slice(0, 15)
                }), be.checked = T, be.onchange = o.checkTrusted(function(e) {
                    en(e.target.checked)
                }), ke.checked = E, ke.onchange = o.checkTrusted(function(e) {
                    E = ke.checked, Ie.hidden = !E, S("show_ping", E ? "true" : "false")
                }), w(M), Se.checked = M, Se.onchange = o.checkTrusted(function(e) {
                    console.log(1), w()
                })
            }())
        })
    }, ve.oncontextmenu = function() {
        return !1
    };
    var ut = 1;

    function ft() {
        var e, t, n = "",
            i = 0;
        for (var r in y.servers) {
            for (var o = y.servers[r], s = 0, l = 0; l < o.length; l++)
                for (var h = 0; h < o[l].games.length; h++) s += o[l].games[h].playerCount;
            i += s;
            var c = y.regionInfo[r].name;
            n += "<option disabled>" + c + " - " + s + " players</option>";
            for (var u = 0; u < o.length; u++)
                for (var f = o[u], d = 0; d < f.games.length; d++) {
                    var p = f.games[d],
                        g = f.index * ut + d + 1,
                        m = y.server && y.server.region === f.region && y.server.index === f.index && y.gameIndex == d,
                        v = c + " " + g + " [" + Math.min(p.playerCount, a.maxPlayers) + "/" + a.maxPlayers + "]";
                    let e = r + ":" + u + ":" + d;
                    m && (ue.getElementsByTagName("span")[0].innerText = e), n += "<option value='" + e + "' " + (m ? "selected" : "") + ">" + v + "</option>"
                }
            n += "<option disabled></option>"
        }
        n += "<option disabled>All Servers - " + i + " players</option>", xe.innerHTML = n, "sandbox.moomoo.io" == location.hostname ? (e = "Back to MooMoo", t = "//moomoo.io/") : (e = "Try the sandbox", t = "//sandbox.moomoo.io/"), document.getElementById("altServer").innerHTML = "<a href='" + t + "'>" + e + "<i class='material-icons' style='font-size:10px;vertical-align:middle'>arrow_forward_ios</i></a>"
    }

    function dt() {
        var e = new XMLHttpRequest;
        e.onreadystatechange = function() {
            4 == this.readyState && (200 == this.status ? (window.vultr = JSON.parse(this.responseText), y.processServers(vultr.servers), ft()) : console.error("Failed to load server data with status code:", this.status))
        }, e.open("GET", "/serverData", !0), e.send()
    }
    xe.addEventListener("change", o.checkTrusted(function() {
        let e = xe.value.split(":");
        y.switchServer(e[0], e[1], e[2])
    }));
    var pt = 0,
        gt = 12e4,
        mt = !1,
        yt = !1,
        vt = 0;

    function wt() {
        window.admob && (mt || window.admob.requestInterstitialAd({
            autoShowInterstitial: yt
        }))
    }
    var xt = 3e5,
        bt = 0,
        kt = 0,
        St = !1;

    function It() {
        St && (St = !1, document.getElementById("pre-content-container").style.display = "none", document.getElementById("my-content").style.display = "none", bt = Date.now(), Tn())
    }

    function Tt(e, t, n) {
        if (O && e)
            if (o.removeAllChildren(je), je.classList.add("visible"), o.generateElement({
                    id: "itemInfoName",
                    text: o.capitalizeFirst(e.name),
                    parent: je
                }), o.generateElement({
                    id: "itemInfoDesc",
                    text: e.desc,
                    parent: je
                }), n);
            else if (t) o.generateElement({
            class: "itemInfoReq",
            text: e.type ? "secondary" : "primary",
            parent: je
        });
        else {
            for (var i = 0; i < e.req.length; i += 2) o.generateElement({
                class: "itemInfoReq",
                html: e.req[i] + "<span class='itemInfoReqVal'> x" + e.req[i + 1] + "</span>",
                parent: je
            });
            e.group.limit && o.generateElement({
                class: "itemInfoLmt",
                text: (O.itemCounts[e.group.id] || 0) + "/" + e.group.limit,
                parent: je
            })
        } else je.classList.remove("visible")
    }
    window.boltEventHandlers = function() {
        Bolt.on("pre-content-player", "showHiddenContainer", function() {
            It()
        })
    };
    var Et, Mt, At, Pt = [],
        Bt = [];

    function Ct(e, t) {
        Pt.push({
            sid: e,
            name: t
        }), Ot()
    }

    function Ot() {
        if (Pt[0]) {
            var e = Pt[0];
            o.removeAllChildren(Ke), Ke.style.display = "block", o.generateElement({
                class: "notificationText",
                text: e.name,
                parent: Ke
            }), o.generateElement({
                class: "notifButton",
                html: "<i class='material-icons' style='font-size:28px;color:#cc5151;'>?</i>",
                parent: Ke,
                onclick: function() {
                    Lt(0)
                },
                hookTouch: !0
            }), o.generateElement({
                class: "notifButton",
                html: "<i class='material-icons' style='font-size:28px;color:#8ecc51;'>?</i>",
                parent: Ke,
                onclick: function() {
                    Lt(1)
                },
                hookTouch: !0
            })
        } else Ke.style.display = "none"
    }

    function Rt(e) {
        X.push(e), "block" == Fe.style.display && jt()
    }

    function Dt(e, t) {
        O && (O.team = e, O.isOwner = t, "block" == Fe.style.display && jt())
    }

    function Ut(e) {
        Bt = e, "block" == Fe.style.display && jt()
    }

    function _t(e) {
        for (var t = X.length - 1; t >= 0; t--) X[t].sid == e && X.splice(t, 1);
        "block" == Fe.style.display && jt()
    }

    function jt() {
        if (O && O.alive) {
            if (an(), Je.style.display = "none", Fe.style.display = "block", o.removeAllChildren(qe), O.team)
                for (var e = 0; e < Bt.length; e += 2) ! function(e) {
                    var t = o.generateElement({
                        class: "allianceItem",
                        style: "color:" + (Bt[e] == O.sid ? "#fff" : "rgba(255,255,255,0.6)"),
                        text: Bt[e + 1],
                        parent: qe
                    });
                    O.isOwner && Bt[e] != O.sid && o.generateElement({
                        class: "joinAlBtn",
                        text: "Kick",
                        onclick: function() {
                            Ht(Bt[e])
                        },
                        hookTouch: !0,
                        parent: t
                    })
                }(e);
            else if (X.length)
                for (e = 0; e < X.length; ++e) ! function(e) {
                    var t = o.generateElement({
                        class: "allianceItem",
                        style: "color:" + (X[e].sid == O.team ? "#fff" : "rgba(255,255,255,0.6)"),
                        text: X[e].sid,
                        parent: qe
                    });
                    o.generateElement({
                        class: "joinAlBtn",
                        text: "Join",
                        onclick: function() {
                            Vt(e)
                        },
                        hookTouch: !0,
                        parent: t
                    })
                }(e);
            else o.generateElement({
                class: "allianceItem",
                text: "No Tribes Yet",
                parent: qe
            });
            o.removeAllChildren(We), O.team ? o.generateElement({
                class: "allianceButtonM",
                style: "width: 360px",
                text: O.isOwner ? "Delete Tribe" : "Leave Tribe",
                onclick: function() {
                    Ft()
                },
                hookTouch: !0,
                parent: We
            }) : (o.generateElement({
                tag: "input",
                type: "text",
                id: "allianceInput",
                maxLength: 7,
                placeholder: "unique name",
                ontouchstart: function(e) {
                    e.preventDefault();
                    var t = prompt("unique name", e.currentTarget.value);
                    e.currentTarget.value = t.slice(0, 7)
                },
                parent: We
            }), o.generateElement({
                tag: "div",
                class: "allianceButtonM",
                style: "width: 140px;",
                text: "Create",
                onclick: function() {
                    Yt()
                },
                hookTouch: !0,
                parent: We
            }))
        }
    }

    function Lt(e) {
        r.send("11", Pt[0].sid, e), Pt.splice(0, 1), Ot()
    }

    function Ht(e) {
        r.send("12", e)
    }

    function Vt(e) {
        r.send("10", X[e].sid)
    }

    function Yt() {
        r.send("8", document.getElementById("allianceInput").value)
    }

    function Ft() {
        Pt = [], Ot(), r.send("9")
    }
    var qt, Wt = [];

    function Xt(e, t) {
        for (var n = 0; n < Wt.length; ++n)
            if (!Wt[n].active) {
                qt = Wt[n];
                break
            }
        qt || (qt = new function() {
            this.init = function(e, t) {
                this.scale = 0, this.x = e, this.y = t, this.active = !0
            }, this.update = function(e, t) {
                this.active && (this.scale += .05 * t, this.scale >= a.mapPingScale ? this.active = !1 : (e.globalAlpha = 1 - Math.max(0, this.scale / a.mapPingScale), e.beginPath(), e.arc(this.x / a.mapScale * Xe.width, this.y / a.mapScale * Xe.width, this.scale, 0, 2 * Math.PI), e.stroke()))
            }
        }, Wt.push(qt)), qt.init(e, t)
    }

    function Nt(e) {
        Mt = e
    }
    var zt = 0;

    function Gt(e, t, n) {
        n ? e ? O.tailIndex = t : O.tails[t] = 1 : e ? O.skinIndex = t : O.skins[t] = 1, "block" == Je.style.display && Jt()
    }

    function Jt() {
        if (O) {
            o.removeAllChildren(Qe);
            for (var e = zt, t = e ? Ze : $e, n = 0; n < t.length; ++n) t[n].dontSell || function(n) {
                var i = o.generateElement({
                    id: "storeDisplay" + n,
                    class: "storeItem",
                    onmouseout: function() {
                        Tt()
                    },
                    onmouseover: function() {
                        Tt(t[n], !1, !0)
                    },
                    parent: Qe
                });
                o.hookTouchEvents(i, !0), o.generateElement({
                    tag: "img",
                    class: "hatPreview",
                    src: "../img/" + (e ? "accessories/access_" : "hats/hat_") + t[n].id + (t[n].topSprite ? "_p" : "") + ".png",
                    parent: i
                }), o.generateElement({
                    tag: "span",
                    text: t[n].name,
                    parent: i
                }), (e ? O.tails[t[n].id] : O.skins[t[n].id]) ? (e ? O.tailIndex : O.skinIndex) == t[n].id ? o.generateElement({
                    class: "joinAlBtn",
                    style: "margin-top: 5px",
                    text: "Unequip",
                    onclick: function() {
                        Qt(0, e)
                    },
                    hookTouch: !0,
                    parent: i
                }) : o.generateElement({
                    class: "joinAlBtn",
                    style: "margin-top: 5px",
                    text: "Equip",
                    onclick: function() {
                        Qt(t[n].id, e)
                    },
                    hookTouch: !0,
                    parent: i
                }) : (o.generateElement({
                    class: "joinAlBtn",
                    style: "margin-top: 5px",
                    text: "Buy",
                    onclick: function() {
                        Kt(t[n].id, e)
                    },
                    hookTouch: !0,
                    parent: i
                }), o.generateElement({
                    tag: "span",
                    class: "itemPrice",
                    text: t[n].price,
                    parent: i
                }))
            }(n)
        }
    }

    function Qt(e, t) {
        r.send("13", 0, e, t)
    }

    function Kt(e, t) {
        r.send("13", 1, e, t)
    }

    function $t() {
        Je.style.display = "none", Fe.style.display = "none", an()
    }

    function Zt(e, t) {
        e && (t ? O.weapons = e : O.items = e);
        for (var n = 0; n < h.list.length; ++n) {
            var i = h.weapons.length + n;
            document.getElementById("actionBarItem" + i).style.display = O.items.indexOf(h.list[n].id) >= 0 ? "inline-block" : "none"
        }
        for (n = 0; n < h.weapons.length; ++n) document.getElementById("actionBarItem" + n).style.display = O.weapons[h.weapons[n].type] == h.weapons[n].id ? "inline-block" : "none"
    }

    function en(e) {
        T = e, Y = e && window.devicePixelRatio || 1, be.checked = e, S("native_resolution", e.toString()), fn()
    }

    function tn() {
        for (var e = "", t = 0; t < a.skinColors.length; ++t) e += t == re ? "<div class='skinColorItem activeSkin' style='background-color:" + a.skinColors[t] + "' onclick='selectSkinColor(" + t + ")'></div>" : "<div class='skinColorItem' style='background-color:" + a.skinColors[t] + "' onclick='selectSkinColor(" + t + ")'></div>";
        ze.innerHTML = e
    }
    var nn = document.getElementById("chatBox"),
        rn = document.getElementById("chatHolder");

    function on() {
        ln ? setTimeout(function() {
            var e = prompt("chat message");
            e && sn(e)
        }, 1) : "block" == rn.style.display ? (nn.value && sn(nn.value), an()) : (Je.style.display = "none", Fe.style.display = "none", rn.style.display = "block", nn.focus(), vn()), nn.value = ""
    }

    function sn(e) {
        r.send("ch", e.slice(0, 30))
    }

    function an() {
        nn.value = "", rn.style.display = "none"
    }
    var ln, hn, cn = ["cunt", "whore", "fuck", "shit", "faggot", "nigger", "nigga", "dick", "vagina", "minge", "cock", "rape", "cum", "sex", "tits", "penis", "clit", "pussy", "meatcurtain", "jizz", "prune", "douche", "wanker", "damn", "bitch", "dick", "fag", "bastard"];

    function un(e, t) {
        var n = Ei(e);
        n && (n.chatMessage = function(e) {
            for (var t, n = 0; n < cn.length; ++n)
                if (e.indexOf(cn[n]) > -1) {
                    t = "";
                    for (var i = 0; i < cn[n].length; ++i) t += t.length ? "o" : "M";
                    var r = new RegExp(cn[n], "g");
                    e = e.replace(r, t)
                }
            return e
        }(t), n.chatCountdown = a.chatCountdown)
    }

    function fn() {
        L = window.innerWidth, H = window.innerHeight;
        var e = Math.max(L / oe, H / se) * Y;
        ve.width = L * Y, ve.height = H * Y, ve.style.width = L + "px", ve.style.height = H + "px", we.setTransform(e, 0, 0, e, (L * Y - oe * e) / 2, (H * Y - se * e) / 2)
    }

    function dn(e) {
        (ln = e) ? Ee.classList.add("touch"): Ee.classList.remove("touch")
    }

    function pn(e) {
        e.preventDefault(), e.stopPropagation(), dn(!0);
        for (var t = 0; t < e.changedTouches.length; t++) {
            var n = e.changedTouches[t];
            n.identifier == ne.id ? (ne.id = -1, kn()) : n.identifier == ie.id && (ie.id = -1, O.buildIndex >= 0 && (C = 1, xn()), C = 0, xn())
        }
    }

    function gn() {
        return O ? (-1 != ie.id ? hn = Math.atan2(ie.currentY - ie.startY, ie.currentX - ie.startX) : O.lockDir || ln || (hn = Math.atan2(te - H / 2, ee - L / 2)), o.fixTo(hn || 0, 2)) : 0
    }
    window.addEventListener("resize", o.checkTrusted(fn)), fn(), dn(!1), window.setUsingTouch = dn, ve.addEventListener("touchmove", o.checkTrusted(function(e) {
        e.preventDefault(), e.stopPropagation(), dn(!0);
        for (var t = 0; t < e.changedTouches.length; t++) {
            var n = e.changedTouches[t];
            n.identifier == ne.id ? (ne.currentX = n.pageX, ne.currentY = n.pageY, kn()) : n.identifier == ie.id && (ie.currentX = n.pageX, ie.currentY = n.pageY, C = 1)
        }
    }), !1), ve.addEventListener("touchstart", o.checkTrusted(function(e) {
        e.preventDefault(), e.stopPropagation(), dn(!0);
        for (var t = 0; t < e.changedTouches.length; t++) {
            var n = e.changedTouches[t];
            n.pageX < document.body.scrollWidth / 2 && -1 == ne.id ? (ne.id = n.identifier, ne.startX = ne.currentX = n.pageX, ne.startY = ne.currentY = n.pageY, kn()) : n.pageX > document.body.scrollWidth / 2 && -1 == ie.id && (ie.id = n.identifier, ie.startX = ie.currentX = n.pageX, ie.startY = ie.currentY = n.pageY, O.buildIndex < 0 && (C = 1, xn()))
        }
    }), !1), ve.addEventListener("touchend", o.checkTrusted(pn), !1), ve.addEventListener("touchcancel", o.checkTrusted(pn), !1), ve.addEventListener("touchleave", o.checkTrusted(pn), !1), ve.addEventListener("mousemove", function(e) {
        e.preventDefault(), e.stopPropagation(), dn(!1), ee = e.clientX, te = e.clientY
    }, !1), ve.addEventListener("mousedown", function(e) {
        dn(!1), 1 != C && (C = 1, xn())
    }, !1), ve.addEventListener("mouseup", function(e) {
        dn(!1), 0 != C && (C = 0, xn())
    }, !1);
    var mn = {},
        yn = {
            87: [0, -1],
            38: [0, -1],
            83: [0, 1],
            40: [0, 1],
            65: [-1, 0],
            37: [-1, 0],
            68: [1, 0],
            39: [1, 0]
        };

    function vn() {
        mn = {}, r.send("rmd")
    }

    function wn() {
        return "block" != Fe.style.display && "block" != rn.style.display
    }

    function xn() {
        O && O.alive && r.send("4", C, O.buildIndex >= 0 ? gn() : null)
    }
    window.addEventListener("keydown", o.checkTrusted(function(e) {
        var t = e.which || e.keyCode || 0;
        27 == t ? $t() : O && O.alive && wn() && (mn[t] || (mn[t] = 1, 69 == t ? r.send("7", 1) : 67 == t ? (At || (At = {}), At.x = O.x, At.y = O.y) : 88 == t ? (O.lockDir = O.lockDir ? 0 : 1, r.send("7", 0)) : void 0 != O.weapons[t - 49] ? In(O.weapons[t - 49], !0) : void 0 != O.items[t - 49 - O.weapons.length] ? In(O.items[t - 49 - O.weapons.length]) : 81 == t ? In(O.items[0]) : 82 == t ? Sn() : yn[t] ? kn() : 32 == t && (C = 1, xn())))
    })), window.addEventListener("keyup", o.checkTrusted(function(e) {
        if (O && O.alive) {
            var t = e.which || e.keyCode || 0;
            13 == t ? on() : wn() && mn[t] && (mn[t] = 0, yn[t] ? kn() : 32 == t && (C = 0, xn()))
        }
    }));
    var bn = void 0;

    function kn() {
        var e = function() {
            var e = 0,
                t = 0;
            if (-1 != ne.id) e += ne.currentX - ne.startX, t += ne.currentY - ne.startY;
            else
                for (var n in yn) {
                    var i = yn[n];
                    e += !!mn[n] * i[0], t += !!mn[n] * i[1]
                }
            return 0 == e && 0 == t ? void 0 : o.fixTo(Math.atan2(t, e), 2)
        }();
        (void 0 == bn || void 0 == e || Math.abs(e - bn) > .3) && (r.send("3", e), bn = e)
    }

    function Sn() {
        r.send("14", 1)
    }

    function In(e, t) {
        r.send("5", e, t)
    }

    function Tn() {
        S("moo_name", _e.value), !ae && r.connected && (ae = !0, v.stop("menu"), ct("Loading..."), r.send("1", {
            name: _e.value,
            moofoll: V,
            skin: re
        }))
    }
    var En = !0;

    function Mn(e) {
        Me.style.display = "none", Te.style.display = "block", le.style.display = "none", mn = {}, R = e, C = 0, ae = !0, En && (En = !1, N.length = 0)
    }

    function An(e, t, n, i) {
        m.showText(e, t, 50, .18, 500, Math.abs(n), n >= 0 ? "#fff" : "#8ecc51")
    }
    var Pn = 99999;

    function Bn() {
        ae = !1;
        try {
            factorem.refreshAds([2], !0)
        } catch (e) {}
        Ae.style.display = "none", $t(), Et = {
            x: O.x,
            y: O.y
        }, Me.style.display = "none", Ne.style.display = "block", Ne.style.fontSize = "0px", Pn = 0, setTimeout(function() {
            Te.style.display = "block", le.style.display = "block", Ne.style.display = "none",
                function() {
                    var e = ++vt > 1,
                        t = Date.now() - pt > gt;
                    e && t && (console.log("Showing"), window.admob && (mt ? window.admob.showInterstitialAd(function() {
                        mt = !1, yt = !1, wt()
                    }) : (yt = !0, pt = Date.now(), window.admob.requestInterstitialAd({
                        autoShowInterstitial: yt
                    }))))
                }()
        }, a.deathFadeout), dt()
    }

    function Cn(e) {
        O && et.removeAllItems(e)
    }

    function On(e) {
        et.disableBySid(e)
    }

    function Rn() {
        Be.innerText = O.points, Ce.innerText = O.food, Oe.innerText = O.wood, Re.innerText = O.stone, De.innerText = O.kills
    }
    var Dn = {},
        Un = ["crown", "skull"],
        _n = [];

    function jn(e, t) {
        if (O.upgradePoints = e, O.upgrAge = t, e > 0) {
            _n.length = 0, o.removeAllChildren(Ve);
            for (var n = 0; n < h.weapons.length; ++n) h.weapons[n].age == t && (void 0 == h.weapons[n].pre || O.weapons.indexOf(h.weapons[n].pre) >= 0) && (o.generateElement({
                id: "upgradeItem" + n,
                class: "actionBarItem",
                onmouseout: function() {
                    Tt()
                },
                parent: Ve
            }).style.backgroundImage = document.getElementById("actionBarItem" + n).style.backgroundImage, _n.push(n));
            for (n = 0; n < h.list.length; ++n)
                if (h.list[n].age == t && (void 0 == h.list[n].pre || O.items.indexOf(h.list[n].pre) >= 0)) {
                    var i = h.weapons.length + n;
                    o.generateElement({
                        id: "upgradeItem" + i,
                        class: "actionBarItem",
                        onmouseout: function() {
                            Tt()
                        },
                        parent: Ve
                    }).style.backgroundImage = document.getElementById("actionBarItem" + i).style.backgroundImage, _n.push(i)
                }
            for (n = 0; n < _n.length; n++) ! function(e) {
                var t = document.getElementById("upgradeItem" + e);
                t.onmouseover = function() {
                    h.weapons[e] ? Tt(h.weapons[e], !0) : Tt(h.list[e - h.weapons.length])
                }, t.onclick = o.checkTrusted(function() {
                    r.send("6", e)
                }), o.hookTouchEvents(t)
            }(_n[n]);
            _n.length ? (Ve.style.display = "block", Ye.style.display = "block", Ye.innerHTML = "SELECT ITEMS (" + e + ")") : (Ve.style.display = "none", Ye.style.display = "none", Tt())
        } else Ve.style.display = "none", Ye.style.display = "none", Tt()
    }

    function Ln(e, t, n) {
        void 0 != e && (O.XP = e), void 0 != t && (O.maxXP = t), void 0 != n && (O.age = n), n == a.maxAge ? (Le.innerHTML = "How'd you get this far?", He.style.width = "100%") : (Le.innerHTML = "AGE " + O.age, He.style.width = O.XP / O.maxXP * 100 + "%")
    }

    function Hn(e) {
        o.removeAllChildren(Ue);
        for (var t = 1, n = 0; n < e.length; n += 3) ! function(n) {
            o.generateElement({
                class: "leaderHolder",
                parent: Ue,
                children: [o.generateElement({
                    class: "leaderboardItem",
                    style: "color:" + (e[n] == R ? "#fff" : "rgba(255,255,255,0.6)"),
                    text: t + ". " + ("" != e[n + 1] ? e[n + 1] : "unknown")
                }), o.generateElement({
                    class: "leaderScore",
                    text: o.kFormat(e[n + 2]) || "0"
                })]
            })
        }(n), t++
    }

    function Vn(e, t, n, i) {
        we.save(), we.setTransform(1, 0, 0, 1, 0, 0), we.scale(Y, Y);
        var r = 50;
        we.beginPath(), we.arc(e, t, r, 0, 2 * Math.PI, !1), we.closePath(), we.fillStyle = "rgba(255, 255, 255, 0.3)", we.fill(), r = 50;
        var o = n - e,
            s = i - t,
            a = Math.sqrt(Math.pow(o, 2) + Math.pow(s, 2)),
            l = a > r ? a / r : 1;
        o /= l, s /= l, we.beginPath(), we.arc(e + o, t + s, .5 * r, 0, 2 * Math.PI, !1), we.closePath(), we.fillStyle = "white", we.fill(), we.restore()
    }

    function Yn(e, t, n) {
        for (var i = 0; i < z.length; ++i)(D = z[i]).active && D.layer == e && (D.update(A), D.active && wi(D.x - t, D.y - n, D.scale) && (we.save(), we.translate(D.x - t, D.y - n), we.rotate(D.dir), qn(0, 0, D, we, 1), we.restore()))
    }
    var Fn = {};

    function qn(e, t, n, i, r) {
        if (n.src) {
            var o = h.projectiles[n.indx].src,
                s = Fn[o];
            s || ((s = new Image).onload = function() {
                this.isLoaded = !0
            }, s.src = ".././img/weapons/" + o + ".png", Fn[o] = s), s.isLoaded && i.drawImage(s, e - n.scale / 2, t - n.scale / 2, n.scale, n.scale)
        } else 1 == n.indx && (i.fillStyle = "#939393", si(e, t, n.scale, i))
    }

    function Wn(e, t, n, i) {
        var r = a.riverWidth + i,
            o = a.mapScale / 2 - t - r / 2;
        o < se && o + r > 0 && n.fillRect(0, o, oe, r)
    }

    function Xn(e, t, n) {
        for (var i, r, o, s = 0; s < N.length; ++s)(D = N[s]).active && (r = D.x + D.xWiggle - t, o = D.y + D.yWiggle - n, 0 == e && D.update(A), D.layer == e && wi(r, o, D.scale + (D.blocker || 0)) && (we.globalAlpha = D.hideFromEnemy ? .6 : 1, D.isItem ? (i = oi(D), we.save(), we.translate(r, o), we.rotate(D.dir), we.drawImage(i, -i.width / 2, -i.height / 2), D.blocker && (we.strokeStyle = "#db6e6e", we.globalAlpha = .3, we.lineWidth = 6, si(0, 0, D.blocker, we, !1, !0)), we.restore()) : (i = ii(D), we.drawImage(i, r - i.width / 2, o - i.height / 2))))
    }

    function Nn(e, t, n) {
        (D = Ei(e)) && D.startAnim(t, n)
    }

    function zn(e, t, n) {
        we.globalAlpha = 1;
        for (var i = 0; i < W.length; ++i)(D = W[i]).zIndex == n && (D.animate(A), D.visible && (D.skinRot += .002 * A, j = (D == O ? gn() : D.dir) + D.dirPlus, we.save(), we.translate(D.x - e, D.y - t), we.rotate(j), Gn(D, we), we.restore()))
    }

    function Gn(e, t) {
        (t = t || we).lineWidth = it, t.lineJoin = "miter";
        var n = Math.PI / 4 * (h.weapons[e.weaponIndex].armS || 1),
            i = e.buildIndex < 0 && h.weapons[e.weaponIndex].hndS || 1,
            r = e.buildIndex < 0 && h.weapons[e.weaponIndex].hndD || 1;
        if (e.tailIndex > 0 && function(e, t, n) {
                if (!(Jn = $n[e])) {
                    var i = new Image;
                    i.onload = function() {
                        this.isLoaded = !0, this.onload = null
                    }, i.src = ".././img/accessories/access_" + e + ".png", $n[e] = i, Jn = i
                }
                var r = Zn[e];
                if (!r) {
                    for (var o = 0; o < Ze.length; ++o)
                        if (Ze[o].id == e) {
                            r = Ze[o];
                            break
                        }
                    Zn[e] = r
                }
                Jn.isLoaded && (t.save(), t.translate(-20 - (r.xOff || 0), 0), r.spin && t.rotate(n.skinRot), t.drawImage(Jn, -r.scale / 2, -r.scale / 2, r.scale, r.scale), t.restore())
            }(e.tailIndex, t, e), e.buildIndex < 0 && !h.weapons[e.weaponIndex].aboveHand && (ti(h.weapons[e.weaponIndex], a.weaponVariants[e.weaponVariant].src, e.scale, 0, t), void 0 == h.weapons[e.weaponIndex].projectile || h.weapons[e.weaponIndex].hideProjectile || qn(e.scale, 0, h.projectiles[h.weapons[e.weaponIndex].projectile], we)), t.fillStyle = a.skinColors[e.skinColor], si(e.scale * Math.cos(n), e.scale * Math.sin(n), 14), si(e.scale * r * Math.cos(-n * i), e.scale * r * Math.sin(-n * i), 14), e.buildIndex < 0 && h.weapons[e.weaponIndex].aboveHand && (ti(h.weapons[e.weaponIndex], a.weaponVariants[e.weaponVariant].src, e.scale, 0, t), void 0 == h.weapons[e.weaponIndex].projectile || h.weapons[e.weaponIndex].hideProjectile || qn(e.scale, 0, h.projectiles[h.weapons[e.weaponIndex].projectile], we)), e.buildIndex >= 0) {
            var o = oi(h.list[e.buildIndex]);
            t.drawImage(o, e.scale - h.list[e.buildIndex].holdOffset, -o.width / 2)
        }
        si(0, 0, e.scale, t), e.skinIndex > 0 && (t.rotate(Math.PI / 2), function e(t, n, i, r) {
            if (!(Jn = Qn[t])) {
                var o = new Image;
                o.onload = function() {
                    this.isLoaded = !0, this.onload = null
                }, o.src = ".././img/hats/hat_" + t + ".png", Qn[t] = o, Jn = o
            }
            var s = i || Kn[t];
            if (!s) {
                for (var a = 0; a < $e.length; ++a)
                    if ($e[a].id == t) {
                        s = $e[a];
                        break
                    }
                Kn[t] = s
            }
            Jn.isLoaded && n.drawImage(Jn, -s.scale / 2, -s.scale / 2, s.scale, s.scale), !i && s.topSprite && (n.save(), n.rotate(r.skinRot), e(t + "_top", n, s, r), n.restore())
        }(e.skinIndex, t, null, e))
    }
    var Jn, Qn = {},
        Kn = {},
        $n = {},
        Zn = {},
        ei = {};

    function ti(e, t, n, i, r) {
        var o = e.src + (t || ""),
            s = ei[o];
        s || ((s = new Image).onload = function() {
            this.isLoaded = !0
        }, s.src = ".././img/weapons/" + o + ".png", ei[o] = s), s.isLoaded && r.drawImage(s, n + e.xOff - e.length / 2, i + e.yOff - e.width / 2, e.length, e.width)
    }
    var ni = {};

    function ii(e) {
        var t = e.y >= a.mapScale - a.snowBiomeTop ? 2 : e.y <= a.snowBiomeTop ? 1 : 0,
            n = e.type + "_" + e.scale + "_" + t,
            i = ni[n];
        if (!i) {
            var r = document.createElement("canvas");
            r.width = r.height = 2.1 * e.scale + it;
            var s = r.getContext("2d");
            if (s.translate(r.width / 2, r.height / 2), s.rotate(o.randFloat(0, Math.PI)), s.strokeStyle = tt, s.lineWidth = it, 0 == e.type)
                for (var l, h = 0; h < 2; ++h) ai(s, 7, l = D.scale * (h ? .5 : 1), .7 * l), s.fillStyle = t ? h ? "#fff" : "#e3f1f4" : h ? "#b4db62" : "#9ebf57", s.fill(), h || s.stroke();
            else if (1 == e.type)
                if (2 == t) s.fillStyle = "#606060", ai(s, 6, .3 * e.scale, .71 * e.scale), s.fill(), s.stroke(), s.fillStyle = "#89a54c", si(0, 0, .55 * e.scale, s), s.fillStyle = "#a5c65b", si(0, 0, .3 * e.scale, s, !0);
                else {
                    var c;
                    ! function(e, t, n, i) {
                        var r, s = Math.PI / 2 * 3,
                            a = Math.PI / 6;
                        e.beginPath(), e.moveTo(0, -i);
                        for (var l = 0; l < 6; l++) r = o.randInt(n + .9, 1.2 * n), e.quadraticCurveTo(Math.cos(s + a) * r, Math.sin(s + a) * r, Math.cos(s + 2 * a) * i, Math.sin(s + 2 * a) * i), s += 2 * a;
                        e.lineTo(0, -i), e.closePath()
                    }(s, 0, D.scale, .7 * D.scale), s.fillStyle = t ? "#e3f1f4" : "#89a54c", s.fill(), s.stroke(), s.fillStyle = t ? "#6a64af" : "#c15555";
                    var u = k / 4;
                    for (h = 0; h < 4; ++h) si((c = o.randInt(D.scale / 3.5, D.scale / 2.3)) * Math.cos(u * h), c * Math.sin(u * h), o.randInt(10, 12), s)
                }
            else 2 != e.type && 3 != e.type || (s.fillStyle = 2 == e.type ? 2 == t ? "#938d77" : "#939393" : "#e0c655", ai(s, 3, e.scale, e.scale), s.fill(), s.stroke(), s.fillStyle = 2 == e.type ? 2 == t ? "#b2ab90" : "#bcbcbc" : "#ebdca3", ai(s, 3, .55 * e.scale, .65 * e.scale), s.fill());
            i = r, ni[n] = i
        }
        return i
    }
    var ri = [];

    function oi(e, t) {
        var n = ri[e.id];
        if (!n || t) {
            var i = document.createElement("canvas");
            i.width = i.height = 2.5 * e.scale + it + (h.list[e.id].spritePadding || 0);
            var r = i.getContext("2d");
            if (r.translate(i.width / 2, i.height / 2), r.rotate(t ? 0 : Math.PI / 2), r.strokeStyle = tt, r.lineWidth = it * (t ? i.width / 81 : 1), "apple" == e.name) {
                r.fillStyle = "#c15555", si(0, 0, e.scale, r), r.fillStyle = "#89a54c";
                var s = -Math.PI / 2;
                ! function(e, t, n, i, r) {
                    var o = e + 25 * Math.cos(i),
                        s = t + 25 * Math.sin(i);
                    r.moveTo(e, t), r.beginPath(), r.quadraticCurveTo((e + o) / 2 + 10 * Math.cos(i + Math.PI / 2), (t + s) / 2 + 10 * Math.sin(i + Math.PI / 2), o, s), r.quadraticCurveTo((e + o) / 2 - 10 * Math.cos(i + Math.PI / 2), (t + s) / 2 - 10 * Math.sin(i + Math.PI / 2), e, t), r.closePath(), r.fill(), r.stroke()
                }(e.scale * Math.cos(s), e.scale * Math.sin(s), 0, s + Math.PI / 2, r)
            } else if ("cookie" == e.name) {
                r.fillStyle = "#cca861", si(0, 0, e.scale, r), r.fillStyle = "#937c4b";
                for (var a = k / (c = 4), l = 0; l < c; ++l) si((u = o.randInt(e.scale / 2.5, e.scale / 1.7)) * Math.cos(a * l), u * Math.sin(a * l), o.randInt(4, 5), r, !0)
            } else if ("pizza" == e.name) {
                var c, u;
                for (r.fillStyle = "#cca861", si(0, 0, e.scale, r), r.fillStyle = "#ead467", si(0, 0, .7 * e.scale, r, !0), a = k / (c = 4), l = 0; l < c; ++l) r.fillStyle = o.randInt(0, 1) ? "#d86868" : "#93b253", si((u = o.randInt(e.scale / 2.5, e.scale / 1.7)) * Math.cos(a * l), u * Math.sin(a * l), o.randInt(4, 5), r, !0)
            } else if ("wood wall" == e.name || "stone wall" == e.name || "castle wall" == e.name) {
                r.fillStyle = "castle wall" == e.name ? "#83898e" : "wood wall" == e.name ? "#a5974c" : "#939393";
                var f = "castle wall" == e.name ? 4 : 3;
                ai(r, f, 1.1 * e.scale, 1.1 * e.scale), r.fill(), r.stroke(), r.fillStyle = "castle wall" == e.name ? "#9da4aa" : "wood wall" == e.name ? "#c9b758" : "#bcbcbc", ai(r, f, .65 * e.scale, .65 * e.scale), r.fill()
            } else if ("spikes" == e.name || "greater spikes" == e.name || "poison spikes" == e.name || "spinning spikes" == e.name) {
                r.fillStyle = "poison spikes" == e.name ? "#7b935d" : "#939393";
                var d = .6 * e.scale;
                ai(r, "spikes" == e.name ? 5 : 6, e.scale, d), r.fill(), r.stroke(), r.fillStyle = "#a5974c", si(0, 0, d, r), r.fillStyle = "#c9b758", si(0, 0, d / 2, r, !0)
            } else if ("windmill" == e.name || "faster windmill" == e.name || "power mill" == e.name) r.fillStyle = "#a5974c", si(0, 0, e.scale, r), r.fillStyle = "#c9b758", hi(0, 0, 1.5 * e.scale, 29, 4, r), r.fillStyle = "#a5974c", si(0, 0, .5 * e.scale, r);
            else if ("mine" == e.name) r.fillStyle = "#939393", ai(r, 3, e.scale, e.scale), r.fill(), r.stroke(), r.fillStyle = "#bcbcbc", ai(r, 3, .55 * e.scale, .65 * e.scale), r.fill();
            else if ("sapling" == e.name)
                for (l = 0; l < 2; ++l) ai(r, 7, d = e.scale * (l ? .5 : 1), .7 * d), r.fillStyle = l ? "#b4db62" : "#9ebf57", r.fill(), l || r.stroke();
            else if ("pit trap" == e.name) r.fillStyle = "#a5974c", ai(r, 3, 1.1 * e.scale, 1.1 * e.scale), r.fill(), r.stroke(), r.fillStyle = tt, ai(r, 3, .65 * e.scale, .65 * e.scale), r.fill();
            else if ("boost pad" == e.name) r.fillStyle = "#7e7f82", li(0, 0, 2 * e.scale, 2 * e.scale, r), r.fill(), r.stroke(), r.fillStyle = "#dbd97d",
                function(e, t) {
                    t = t || we;
                    var n = e * (Math.sqrt(3) / 2);
                    t.beginPath(), t.moveTo(0, -n / 2), t.lineTo(-e / 2, n / 2), t.lineTo(e / 2, n / 2), t.lineTo(0, -n / 2), t.fill(), t.closePath()
                }(1 * e.scale, r);
            else if ("turret" == e.name) r.fillStyle = "#a5974c", si(0, 0, e.scale, r), r.fill(), r.stroke(), r.fillStyle = "#939393", li(0, -25, .9 * e.scale, 50, r), si(0, 0, .6 * e.scale, r), r.fill(), r.stroke();
            else if ("platform" == e.name) {
                r.fillStyle = "#cebd5f";
                var p = 2 * e.scale,
                    g = p / 4,
                    m = -e.scale / 2;
                for (l = 0; l < 4; ++l) li(m - g / 2, 0, g, 2 * e.scale, r), r.fill(), r.stroke(), m += p / 4
            } else "healing pad" == e.name ? (r.fillStyle = "#7e7f82", li(0, 0, 2 * e.scale, 2 * e.scale, r), r.fill(), r.stroke(), r.fillStyle = "#db6e6e", hi(0, 0, .65 * e.scale, 20, 4, r, !0)) : "spawn pad" == e.name ? (r.fillStyle = "#7e7f82", li(0, 0, 2 * e.scale, 2 * e.scale, r), r.fill(), r.stroke(), r.fillStyle = "#71aad6", si(0, 0, .6 * e.scale, r)) : "blocker" == e.name && (r.fillStyle = "#7e7f82", si(0, 0, e.scale, r), r.fill(), r.stroke(), r.rotate(Math.PI / 4), r.fillStyle = "#db6e6e", hi(0, 0, .65 * e.scale, 20, 4, r, !0));
            n = i, t || (ri[e.id] = n)
        }
        return n
    }

    function si(e, t, n, i, r, o) {
        (i = i || we).beginPath(), i.arc(e, t, n, 0, 2 * Math.PI), o || i.fill(), r || i.stroke()
    }

    function ai(e, t, n, i) {
        var r, o, s = Math.PI / 2 * 3,
            a = Math.PI / t;
        e.beginPath(), e.moveTo(0, -n);
        for (var l = 0; l < t; l++) r = Math.cos(s) * n, o = Math.sin(s) * n, e.lineTo(r, o), s += a, r = Math.cos(s) * i, o = Math.sin(s) * i, e.lineTo(r, o), s += a;
        e.lineTo(0, -n), e.closePath()
    }

    function li(e, t, n, i, r, o) {
        r.fillRect(e - n / 2, t - i / 2, n, i), o || r.strokeRect(e - n / 2, t - i / 2, n, i)
    }

    function hi(e, t, n, i, r, o, s) {
        o.save(), o.translate(e, t), r = Math.ceil(r / 2);
        for (var a = 0; a < r; a++) li(0, 0, 2 * n, i, o, s), o.rotate(Math.PI / r);
        o.restore()
    }

    function ci(e) {
        for (var t = 0; t < e.length;) et.add(e[t], e[t + 1], e[t + 2], e[t + 3], e[t + 4], e[t + 5], h.list[e[t + 6]], !0, e[t + 7] >= 0 ? {
            sid: e[t + 7]
        } : null), t += 8
    }

    function ui(e, t) {
        (D = Ai(t)) && (D.xWiggle += a.gatherWiggle * Math.cos(e), D.yWiggle += a.gatherWiggle * Math.sin(e))
    }

    function fi(e, t) {
        (D = Ai(e)) && (D.dir = t, D.xWiggle += a.gatherWiggle * Math.cos(t + Math.PI), D.yWiggle += a.gatherWiggle * Math.sin(t + Math.PI))
    }

    function di(e, t, n, i, r, o, s, a) {
        lt && (G.addProjectile(e, t, n, i, r, o, null, null, s).sid = a)
    }

    function pi(e, t) {
        for (var n = 0; n < z.length; ++n) z[n].sid == e && (z[n].range = t)
    }

    function gi(e) {
        (D = Mi(e)) && D.startAnim()
    }

    function mi(e) {
        for (var t = 0; t < q.length; ++t) q[t].forcePos = !q[t].visible, q[t].visible = !1;
        if (e) {
            var n = Date.now();
            for (t = 0; t < e.length;)(D = Mi(e[t])) ? (D.index = e[t + 1], D.t1 = void 0 === D.t2 ? n : D.t2, D.t2 = n, D.x1 = D.x, D.y1 = D.y, D.x2 = e[t + 2], D.y2 = e[t + 3], D.d1 = void 0 === D.d2 ? e[t + 4] : D.d2, D.d2 = e[t + 4], D.health = e[t + 5], D.dt = 0, D.visible = !0) : ((D = K.spawn(e[t + 2], e[t + 3], e[t + 4], e[t + 1])).x2 = D.x, D.y2 = D.y, D.d2 = D.dir, D.health = e[t + 5], K.aiTypes[e[t + 1]].name || (D.name = a.cowNames[e[t + 6]]), D.forcePos = !0, D.sid = e[t], D.visible = !0), t += 7
        }
    }
    var yi = {};

    function vi(e, t) {
        var n = e.index,
            i = yi[n];
        if (!i) {
            var r = new Image;
            r.onload = function() {
                this.isLoaded = !0, this.onload = null
            }, r.src = ".././img/animals/" + e.src + ".png", i = r, yi[n] = i
        }
        if (i.isLoaded) {
            var o = 1.2 * e.scale * (e.spriteMlt || 1);
            t.drawImage(i, -o, -o, 2 * o, 2 * o)
        }
    }

    function wi(e, t, n) {
        return e + n >= 0 && e - n <= oe && t + n >= 0 && t - n <= se
    }

    function xi(e, t) {
        var n = function(e) {
            for (var t = 0; t < W.length; ++t)
                if (W[t].id == e) return W[t];
            return null
        }(e[0]);
        n || (n = new u(e[0], e[1], a, o, G, et, W, q, h, $e, Ze), W.push(n)), n.spawn(t ? V : null), n.visible = !1, n.x2 = void 0, n.y2 = void 0, n.setData(e), t && (U = (O = n).x, _ = O.y, Zt(), Rn(), Ln(), jn(0), Ae.style.display = "block")
    }

    function bi(e) {
        for (var t = 0; t < W.length; t++)
            if (W[t].id == e) {
                W.splice(t, 1);
                break
            }
    }

    function ki(e, t) {
        O && (O.itemCounts[e] = t)
    }

    function Si(e, t, n) {
        O && (O[e] = t, n && Rn())
    }

    function Ii(e, t) {
        (D = Ei(e)) && (D.health = t)
    }

    function Ti(e) {
        for (var t = Date.now(), n = 0; n < W.length; ++n) W[n].forcePos = !W[n].visible, W[n].visible = !1;
        for (n = 0; n < e.length;)(D = Ei(e[n])) && (D.t1 = void 0 === D.t2 ? t : D.t2, D.t2 = t, D.x1 = D.x, D.y1 = D.y, D.x2 = e[n + 1], D.y2 = e[n + 2], D.d1 = void 0 === D.d2 ? e[n + 3] : D.d2, D.d2 = e[n + 3], D.dt = 0, D.buildIndex = e[n + 4], D.weaponIndex = e[n + 5], D.weaponVariant = e[n + 6], D.team = e[n + 7], D.isLeader = e[n + 8], D.skinIndex = e[n + 9], D.tailIndex = e[n + 10], D.iconIndex = e[n + 11], D.zIndex = e[n + 12], D.visible = !0), n += 13
    }

    function Ei(e) {
        for (var t = 0; t < W.length; ++t)
            if (W[t].sid == e) return W[t];
        return null
    }

    function Mi(e) {
        for (var t = 0; t < q.length; ++t)
            if (q[t].sid == e) return q[t];
        return null
    }

    function Ai(e) {
        for (var t = 0; t < N.length; ++t)
            if (N[t].sid == e) return N[t];
        return null
    }
    var Pi = -1;

    function Bi() {
        var e = Date.now() - Pi;
        window.pingTime = e, Ie.innerText = "Ping: " + e + " ms"
    }

    function Ci() {
        Pi = Date.now(), r.send("pp")
    }

    function Oi(e) {
        window.open(e, "_blank")
    }
    window.requestAnimFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(e) {
            window.setTimeout(e, 1e3 / 60)
        },
        function() {
            var e = a.mapScale / 2;
            et.add(0, e, e + 200, 0, a.treeScales[3], 0), et.add(1, e, e - 480, 0, a.treeScales[3], 0), et.add(2, e + 300, e + 450, 0, a.treeScales[3], 0), et.add(3, e - 950, e - 130, 0, a.treeScales[2], 0), et.add(4, e - 750, e - 400, 0, a.treeScales[3], 0), et.add(5, e - 700, e + 400, 0, a.treeScales[2], 0), et.add(6, e + 800, e - 200, 0, a.treeScales[3], 0), et.add(7, e - 260, e + 340, 0, a.bushScales[3], 1), et.add(8, e + 760, e + 310, 0, a.bushScales[3], 1), et.add(9, e - 800, e + 100, 0, a.bushScales[3], 1), et.add(10, e - 800, e + 300, 0, h.list[4].scale, h.list[4].id, h.list[10]), et.add(11, e + 650, e - 390, 0, h.list[4].scale, h.list[4].id, h.list[10]), et.add(12, e - 400, e - 450, 0, a.rockScales[2], 2)
        }(),
        function e() {
            P = Date.now(), A = P - F, F = P,
                function() {
                    if (O && (!B || P - B >= 1e3 / a.clientSendRate) && (B = P, r.send("2", gn())), Pn < 120 && (Pn += .1 * A, Ne.style.fontSize = Math.min(Math.round(Pn), 120) + "px"), O) {
                        var e = o.getDistance(U, _, O.x, O.y),
                            t = o.getDirection(O.x, O.y, U, _),
                            n = Math.min(.01 * e * A, e);
                        e > .05 ? (U += n * Math.cos(t), _ += n * Math.sin(t)) : (U = O.x, _ = O.y)
                    } else U = a.mapScale / 2, _ = a.mapScale / 2;
                    for (var i = P - 1e3 / a.serverUpdateRate, s = 0; s < W.length + q.length; ++s)
                        if ((D = W[s] || q[s - W.length]) && D.visible)
                            if (D.forcePos) D.x = D.x2, D.y = D.y2, D.dir = D.d2;
                            else {
                                var l = D.t2 - D.t1,
                                    h = (i - D.t1) / l;
                                D.dt += A;
                                var c = Math.min(1.7, D.dt / 170),
                                    u = D.x2 - D.x1;
                                D.x = D.x1 + u * c, u = D.y2 - D.y1, D.y = D.y1 + u * c, D.dir = Math.lerpAngle(D.d2, D.d1, Math.min(1.2, h))
                            }
                    var f = U - oe / 2,
                        d = _ - se / 2;
                    a.snowBiomeTop - d <= 0 && a.mapScale - a.snowBiomeTop - d >= se ? (we.fillStyle = "#b6db66", we.fillRect(0, 0, oe, se)) : a.mapScale - a.snowBiomeTop - d <= 0 ? (we.fillStyle = "#dbc666", we.fillRect(0, 0, oe, se)) : a.snowBiomeTop - d >= se ? (we.fillStyle = "#fff", we.fillRect(0, 0, oe, se)) : a.snowBiomeTop - d >= 0 ? (we.fillStyle = "#fff", we.fillRect(0, 0, oe, a.snowBiomeTop - d), we.fillStyle = "#b6db66", we.fillRect(0, a.snowBiomeTop - d, oe, se - (a.snowBiomeTop - d))) : (we.fillStyle = "#b6db66", we.fillRect(0, 0, oe, a.mapScale - a.snowBiomeTop - d), we.fillStyle = "#dbc666", we.fillRect(0, a.mapScale - a.snowBiomeTop - d, oe, se - (a.mapScale - a.snowBiomeTop - d))), En || (($ += Z * a.waveSpeed * A) >= a.waveMax ? ($ = a.waveMax, Z = -1) : $ <= 1 && ($ = Z = 1), we.globalAlpha = 1, we.fillStyle = "#dbc666", Wn(0, d, we, a.riverPadding), we.fillStyle = "#91b2db", Wn(0, d, we, 250 * ($ - 1))), we.lineWidth = 4, we.strokeStyle = "#000", we.globalAlpha = .06, we.beginPath();
                    for (var p = -U; p < oe; p += se / 18) p > 0 && (we.moveTo(p, 0), we.lineTo(p, se));
                    for (var g = -_; g < se; g += se / 18) p > 0 && (we.moveTo(0, g), we.lineTo(oe, g));
                    for (we.stroke(), we.globalAlpha = 1, we.strokeStyle = tt, Xn(-1, f, d), we.globalAlpha = 1, we.lineWidth = it, Yn(0, f, d), zn(f, d, 0), we.globalAlpha = 1, s = 0; s < q.length; ++s)(D = q[s]).active && D.visible && (D.animate(A), we.save(), we.translate(D.x - f, D.y - d), we.rotate(D.dir + D.dirPlus - Math.PI / 2), vi(D, we), we.restore());
                    if (Xn(0, f, d), Yn(1, f, d), Xn(1, f, d), zn(f, d, 1), Xn(2, f, d), Xn(3, f, d), we.fillStyle = "#000", we.globalAlpha = .09, f <= 0 && we.fillRect(0, 0, -f, se), a.mapScale - f <= oe) {
                        var y = Math.max(0, -d);
                        we.fillRect(a.mapScale - f, y, oe - (a.mapScale - f), se - y)
                    }
                    if (d <= 0 && we.fillRect(-f, 0, oe + f, -d), a.mapScale - d <= se) {
                        var v = Math.max(0, -f),
                            w = 0;
                        a.mapScale - f <= oe && (w = oe - (a.mapScale - f)), we.fillRect(v, a.mapScale - d, oe - v - w, se - (a.mapScale - d))
                    }
                    for (we.globalAlpha = 1, we.fillStyle = "rgba(0, 0, 70, 0.35)", we.fillRect(0, 0, oe, se), we.strokeStyle = nt, s = 0; s < W.length + q.length; ++s)
                        if ((D = W[s] || q[s - W.length]).visible && (10 != D.skinIndex || D == O || D.team && D.team == O.team || 10 == D.skinIndex)) {
                            var x = (D.team ? "[" + D.team + "] " : "") + (D.name || "");
                            if ("" != x) {
                                if (we.font = (D.nameScale || 30) + "px Hammersmith One", we.fillStyle = "#fff", we.textBaseline = "middle", we.textAlign = "center", we.lineWidth = D.nameScale ? 11 : 8, we.lineJoin = "round", we.strokeText(x, D.x - f, D.y - d - D.scale - a.nameY), we.fillText(x, D.x - f, D.y - d - D.scale - a.nameY), D.isLeader && Dn.crown.isLoaded) {
                                    var b = a.crownIconScale;
                                    v = D.x - f - b / 2 - we.measureText(x).width / 2 - a.crownPad, we.drawImage(Dn.crown, v, D.y - d - D.scale - a.nameY - b / 2 - 5, b, b)
                                }
                                1 == D.iconIndex && Dn.skull.isLoaded && (b = a.crownIconScale, v = D.x - f - b / 2 + we.measureText(x).width / 2 + a.crownPad, we.drawImage(Dn.skull, v, D.y - d - D.scale - a.nameY - b / 2 - 5, b, b))
                            }
                            D.health > 0 && (a.healthBarWidth, we.fillStyle = nt, we.roundRect(D.x - f - a.healthBarWidth - a.healthBarPad, D.y - d + D.scale + a.nameY, 2 * a.healthBarWidth + 2 * a.healthBarPad, 17, 8), we.fill(), we.fillStyle = D == O || D.team && D.team == O.team ? "#8ecc51" : "#cc5151", we.roundRect(D.x - f - a.healthBarWidth, D.y - d + D.scale + a.nameY + a.healthBarPad, 2 * a.healthBarWidth * (D.health / D.maxHealth), 17 - 2 * a.healthBarPad, 7), we.fill(), we.textAlign="center", we.textBaseline = "middle", we.fillStyle = "#fff", we.font = "20px Hammersmith One", we.lineJoin = "round", we.lineWidth = 6, we.strokeText(`\nHP:${D.health}/${D.maxHealth}`,D.x - f,D.y - d + D.scale + a.nameY+(34)), we.fillText(`\nHP:${D.health}/${D.maxHealth}`,D.x - f,D.y - d + D.scale + a.nameY+(34)))
                        }
                    for (m.update(A, we, f, d), s = 0; s < W.length; ++s)
                        if ((D = W[s]).visible && D.chatCountdown > 0) {
                            D.chatCountdown -= A, D.chatCountdown <= 0 && (D.chatCountdown = 0), we.font = "32px Hammersmith One";
                            var k = we.measureText(D.chatMessage);
                            we.textBaseline = "middle", we.textAlign = "center", v = D.x - f, y = D.y - D.scale - d - 90;
                            var S = k.width + 17;
                            we.fillStyle = "rgba(0,0,0,0.2)", we.roundRect(v - S / 2, y - 23.5, S, 47, 6), we.fill(), we.fillStyle = "#fff", we.fillText(D.chatMessage, v, y)
                        }! function(e) {
                        if (O && O.alive) {
                            Ge.clearRect(0, 0, Xe.width, Xe.height), Ge.strokeStyle = "#fff", Ge.lineWidth = 4;
                            for (var t = 0; t < Wt.length; ++t)(qt = Wt[t]).update(Ge, e);
                            if (Ge.globalAlpha = 1, Ge.fillStyle = "#fff", si(O.x / a.mapScale * Xe.width, O.y / a.mapScale * Xe.height, 7, Ge, !0), Ge.fillStyle = "rgba(255,255,255,0.35)", O.team && Mt)
                                for (t = 0; t < Mt.length;) si(Mt[t] / a.mapScale * Xe.width, Mt[t + 1] / a.mapScale * Xe.height, 7, Ge, !0), t += 2;
                            Et && (Ge.fillStyle = "#fc5553", Ge.font = "34px Hammersmith One", Ge.textBaseline = "middle", Ge.textAlign = "center", Ge.fillText("x", Et.x / a.mapScale * Xe.width, Et.y / a.mapScale * Xe.height)), At && (Ge.fillStyle = "#fff", Ge.font = "34px Hammersmith One", Ge.textBaseline = "middle", Ge.textAlign = "center", Ge.fillText("x", At.x / a.mapScale * Xe.width, At.y / a.mapScale * Xe.height))
                        }
                    }(A), -1 !== ne.id && Vn(ne.startX, ne.startY, ne.currentX, ne.currentY), -1 !== ie.id && Vn(ie.startX, ie.startY, ie.currentX, ie.currentY)
                }(), requestAnimFrame(e)
        }(), window.openLink = Oi, window.aJoinReq = Lt, window.follmoo = function() {
            V || (V = !0, S("moofoll", 1))
        }, window.kickFromClan = Ht, window.sendJoin = Vt, window.leaveAlliance = Ft, window.createAlliance = Yt, window.storeBuy = Kt, window.storeEquip = Qt, window.showItemInfo = Tt, window.selectSkinColor = function(e) {
            re = e, tn()
        }, window.changeStoreIndex = function(e) {
            zt != e && (zt = e, Jt())
        }, window.config = a
}]);
//# sourceMappingURL=bundle.js.map
