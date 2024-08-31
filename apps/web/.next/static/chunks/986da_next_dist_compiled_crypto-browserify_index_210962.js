(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/986da_next_dist_compiled_crypto-browserify_index_210962.js", {

"[project]/node_modules/.pnpm/next@14.2.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/crypto-browserify/index.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.2.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/buffer/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.2.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
(function() {
    var e = {
        7160: function(e, t, r) {
            var i = t;
            i.bignum = r(711);
            i.define = r(495).define;
            i.base = r(853);
            i.constants = r(7335);
            i.decoders = r(6701);
            i.encoders = r(3418);
        },
        495: function(e, t, r) {
            var i = r(7160);
            var n = r(3782);
            var a = t;
            a.define = function define(e, t) {
                return new Entity(e, t);
            };
            function Entity(e, t) {
                this.name = e;
                this.body = t;
                this.decoders = {};
                this.encoders = {};
            }
            Entity.prototype._createNamed = function createNamed(e) {
                var t;
                try {
                    t = r(6144).runInThisContext("(function " + this.name + "(entity) {\n" + "  this._initNamed(entity);\n" + "})");
                } catch (e) {
                    t = function(e) {
                        this._initNamed(e);
                    };
                }
                n(t, e);
                t.prototype._initNamed = function initnamed(t) {
                    e.call(this, t);
                };
                return new t(this);
            };
            Entity.prototype._getDecoder = function _getDecoder(e) {
                e = e || "der";
                if (!this.decoders.hasOwnProperty(e)) this.decoders[e] = this._createNamed(i.decoders[e]);
                return this.decoders[e];
            };
            Entity.prototype.decode = function decode(e, t, r) {
                return this._getDecoder(t).decode(e, r);
            };
            Entity.prototype._getEncoder = function _getEncoder(e) {
                e = e || "der";
                if (!this.encoders.hasOwnProperty(e)) this.encoders[e] = this._createNamed(i.encoders[e]);
                return this.encoders[e];
            };
            Entity.prototype.encode = function encode(e, t, r) {
                return this._getEncoder(t).encode(e, r);
            };
        },
        6483: function(e, t, r) {
            var i = r(3782);
            var n = r(853).Reporter;
            var a = r(4300).Buffer;
            function DecoderBuffer(e, t) {
                n.call(this, t);
                if (!a.isBuffer(e)) {
                    this.error("Input not Buffer");
                    return;
                }
                this.base = e;
                this.offset = 0;
                this.length = e.length;
            }
            i(DecoderBuffer, n);
            t.C = DecoderBuffer;
            DecoderBuffer.prototype.save = function save() {
                return {
                    offset: this.offset,
                    reporter: n.prototype.save.call(this)
                };
            };
            DecoderBuffer.prototype.restore = function restore(e) {
                var t = new DecoderBuffer(this.base);
                t.offset = e.offset;
                t.length = this.offset;
                this.offset = e.offset;
                n.prototype.restore.call(this, e.reporter);
                return t;
            };
            DecoderBuffer.prototype.isEmpty = function isEmpty() {
                return this.offset === this.length;
            };
            DecoderBuffer.prototype.readUInt8 = function readUInt8(e) {
                if (this.offset + 1 <= this.length) return this.base.readUInt8(this.offset++, true);
                else return this.error(e || "DecoderBuffer overrun");
            };
            DecoderBuffer.prototype.skip = function skip(e, t) {
                if (!(this.offset + e <= this.length)) return this.error(t || "DecoderBuffer overrun");
                var r = new DecoderBuffer(this.base);
                r._reporterState = this._reporterState;
                r.offset = this.offset;
                r.length = this.offset + e;
                this.offset += e;
                return r;
            };
            DecoderBuffer.prototype.raw = function raw(e) {
                return this.base.slice(e ? e.offset : this.offset, this.length);
            };
            function EncoderBuffer(e, t) {
                if (Array.isArray(e)) {
                    this.length = 0;
                    this.value = e.map(function(e) {
                        if (!(e instanceof EncoderBuffer)) e = new EncoderBuffer(e, t);
                        this.length += e.length;
                        return e;
                    }, this);
                } else if (typeof e === "number") {
                    if (!(0 <= e && e <= 255)) return t.error("non-byte EncoderBuffer value");
                    this.value = e;
                    this.length = 1;
                } else if (typeof e === "string") {
                    this.value = e;
                    this.length = a.byteLength(e);
                } else if (a.isBuffer(e)) {
                    this.value = e;
                    this.length = e.length;
                } else {
                    return t.error("Unsupported type: " + typeof e);
                }
            }
            t.R = EncoderBuffer;
            EncoderBuffer.prototype.join = function join(e, t) {
                if (!e) e = new a(this.length);
                if (!t) t = 0;
                if (this.length === 0) return e;
                if (Array.isArray(this.value)) {
                    this.value.forEach(function(r) {
                        r.join(e, t);
                        t += r.length;
                    });
                } else {
                    if (typeof this.value === "number") e[t] = this.value;
                    else if (typeof this.value === "string") e.write(this.value, t);
                    else if (a.isBuffer(this.value)) this.value.copy(e, t);
                    t += this.length;
                }
                return e;
            };
        },
        853: function(e, t, r) {
            var i = t;
            i.Reporter = r(1293).b;
            i.DecoderBuffer = r(6483).C;
            i.EncoderBuffer = r(6483).R;
            i.Node = r(9374);
        },
        9374: function(e, t, r) {
            var i = r(853).Reporter;
            var n = r(853).EncoderBuffer;
            var a = r(853).DecoderBuffer;
            var s = r(3523);
            var o = [
                "seq",
                "seqof",
                "set",
                "setof",
                "objid",
                "bool",
                "gentime",
                "utctime",
                "null_",
                "enum",
                "int",
                "objDesc",
                "bitstr",
                "bmpstr",
                "charstr",
                "genstr",
                "graphstr",
                "ia5str",
                "iso646str",
                "numstr",
                "octstr",
                "printstr",
                "t61str",
                "unistr",
                "utf8str",
                "videostr"
            ];
            var h = [
                "key",
                "obj",
                "use",
                "optional",
                "explicit",
                "implicit",
                "def",
                "choice",
                "any",
                "contains"
            ].concat(o);
            var u = [
                "_peekTag",
                "_decodeTag",
                "_use",
                "_decodeStr",
                "_decodeObjid",
                "_decodeTime",
                "_decodeNull",
                "_decodeInt",
                "_decodeBool",
                "_decodeList",
                "_encodeComposite",
                "_encodeStr",
                "_encodeObjid",
                "_encodeTime",
                "_encodeNull",
                "_encodeInt",
                "_encodeBool"
            ];
            function Node(e, t) {
                var r = {};
                this._baseState = r;
                r.enc = e;
                r.parent = t || null;
                r.children = null;
                r.tag = null;
                r.args = null;
                r.reverseArgs = null;
                r.choice = null;
                r.optional = false;
                r.any = false;
                r.obj = false;
                r.use = null;
                r.useDecoder = null;
                r.key = null;
                r["default"] = null;
                r.explicit = null;
                r.implicit = null;
                r.contains = null;
                if (!r.parent) {
                    r.children = [];
                    this._wrap();
                }
            }
            e.exports = Node;
            var d = [
                "enc",
                "parent",
                "children",
                "tag",
                "args",
                "reverseArgs",
                "choice",
                "optional",
                "any",
                "obj",
                "use",
                "alteredUse",
                "key",
                "default",
                "explicit",
                "implicit",
                "contains"
            ];
            Node.prototype.clone = function clone() {
                var e = this._baseState;
                var t = {};
                d.forEach(function(r) {
                    t[r] = e[r];
                });
                var r = new this.constructor(t.parent);
                r._baseState = t;
                return r;
            };
            Node.prototype._wrap = function wrap() {
                var e = this._baseState;
                h.forEach(function(t) {
                    this[t] = function _wrappedMethod() {
                        var r = new this.constructor(this);
                        e.children.push(r);
                        return r[t].apply(r, arguments);
                    };
                }, this);
            };
            Node.prototype._init = function init(e) {
                var t = this._baseState;
                s(t.parent === null);
                e.call(this);
                t.children = t.children.filter(function(e) {
                    return e._baseState.parent === this;
                }, this);
                s.equal(t.children.length, 1, "Root node can have only one child");
            };
            Node.prototype._useArgs = function useArgs(e) {
                var t = this._baseState;
                var r = e.filter(function(e) {
                    return e instanceof this.constructor;
                }, this);
                e = e.filter(function(e) {
                    return !(e instanceof this.constructor);
                }, this);
                if (r.length !== 0) {
                    s(t.children === null);
                    t.children = r;
                    r.forEach(function(e) {
                        e._baseState.parent = this;
                    }, this);
                }
                if (e.length !== 0) {
                    s(t.args === null);
                    t.args = e;
                    t.reverseArgs = e.map(function(e) {
                        if (typeof e !== "object" || e.constructor !== Object) return e;
                        var t = {};
                        Object.keys(e).forEach(function(r) {
                            if (r == (r | 0)) r |= 0;
                            var i = e[r];
                            t[i] = r;
                        });
                        return t;
                    });
                }
            };
            u.forEach(function(e) {
                Node.prototype[e] = function _overrided() {
                    var t = this._baseState;
                    throw new Error(e + " not implemented for encoding: " + t.enc);
                };
            });
            o.forEach(function(e) {
                Node.prototype[e] = function _tagMethod() {
                    var t = this._baseState;
                    var r = Array.prototype.slice.call(arguments);
                    s(t.tag === null);
                    t.tag = e;
                    this._useArgs(r);
                    return this;
                };
            });
            Node.prototype.use = function use(e) {
                s(e);
                var t = this._baseState;
                s(t.use === null);
                t.use = e;
                return this;
            };
            Node.prototype.optional = function optional() {
                var e = this._baseState;
                e.optional = true;
                return this;
            };
            Node.prototype.def = function def(e) {
                var t = this._baseState;
                s(t["default"] === null);
                t["default"] = e;
                t.optional = true;
                return this;
            };
            Node.prototype.explicit = function explicit(e) {
                var t = this._baseState;
                s(t.explicit === null && t.implicit === null);
                t.explicit = e;
                return this;
            };
            Node.prototype.implicit = function implicit(e) {
                var t = this._baseState;
                s(t.explicit === null && t.implicit === null);
                t.implicit = e;
                return this;
            };
            Node.prototype.obj = function obj() {
                var e = this._baseState;
                var t = Array.prototype.slice.call(arguments);
                e.obj = true;
                if (t.length !== 0) this._useArgs(t);
                return this;
            };
            Node.prototype.key = function key(e) {
                var t = this._baseState;
                s(t.key === null);
                t.key = e;
                return this;
            };
            Node.prototype.any = function any() {
                var e = this._baseState;
                e.any = true;
                return this;
            };
            Node.prototype.choice = function choice(e) {
                var t = this._baseState;
                s(t.choice === null);
                t.choice = e;
                this._useArgs(Object.keys(e).map(function(t) {
                    return e[t];
                }));
                return this;
            };
            Node.prototype.contains = function contains(e) {
                var t = this._baseState;
                s(t.use === null);
                t.contains = e;
                return this;
            };
            Node.prototype._decode = function decode(e, t) {
                var r = this._baseState;
                if (r.parent === null) return e.wrapResult(r.children[0]._decode(e, t));
                var i = r["default"];
                var n = true;
                var s = null;
                if (r.key !== null) s = e.enterKey(r.key);
                if (r.optional) {
                    var o = null;
                    if (r.explicit !== null) o = r.explicit;
                    else if (r.implicit !== null) o = r.implicit;
                    else if (r.tag !== null) o = r.tag;
                    if (o === null && !r.any) {
                        var h = e.save();
                        try {
                            if (r.choice === null) this._decodeGeneric(r.tag, e, t);
                            else this._decodeChoice(e, t);
                            n = true;
                        } catch (e) {
                            n = false;
                        }
                        e.restore(h);
                    } else {
                        n = this._peekTag(e, o, r.any);
                        if (e.isError(n)) return n;
                    }
                }
                var u;
                if (r.obj && n) u = e.enterObject();
                if (n) {
                    if (r.explicit !== null) {
                        var d = this._decodeTag(e, r.explicit);
                        if (e.isError(d)) return d;
                        e = d;
                    }
                    var c = e.offset;
                    if (r.use === null && r.choice === null) {
                        if (r.any) var h = e.save();
                        var l = this._decodeTag(e, r.implicit !== null ? r.implicit : r.tag, r.any);
                        if (e.isError(l)) return l;
                        if (r.any) i = e.raw(h);
                        else e = l;
                    }
                    if (t && t.track && r.tag !== null) t.track(e.path(), c, e.length, "tagged");
                    if (t && t.track && r.tag !== null) t.track(e.path(), e.offset, e.length, "content");
                    if (r.any) i = i;
                    else if (r.choice === null) i = this._decodeGeneric(r.tag, e, t);
                    else i = this._decodeChoice(e, t);
                    if (e.isError(i)) return i;
                    if (!r.any && r.choice === null && r.children !== null) {
                        r.children.forEach(function decodeChildren(r) {
                            r._decode(e, t);
                        });
                    }
                    if (r.contains && (r.tag === "octstr" || r.tag === "bitstr")) {
                        var p = new a(i);
                        i = this._getUse(r.contains, e._reporterState.obj)._decode(p, t);
                    }
                }
                if (r.obj && n) i = e.leaveObject(u);
                if (r.key !== null && (i !== null || n === true)) e.leaveKey(s, r.key, i);
                else if (s !== null) e.exitKey(s);
                return i;
            };
            Node.prototype._decodeGeneric = function decodeGeneric(e, t, r) {
                var i = this._baseState;
                if (e === "seq" || e === "set") return null;
                if (e === "seqof" || e === "setof") return this._decodeList(t, e, i.args[0], r);
                else if (/str$/.test(e)) return this._decodeStr(t, e, r);
                else if (e === "objid" && i.args) return this._decodeObjid(t, i.args[0], i.args[1], r);
                else if (e === "objid") return this._decodeObjid(t, null, null, r);
                else if (e === "gentime" || e === "utctime") return this._decodeTime(t, e, r);
                else if (e === "null_") return this._decodeNull(t, r);
                else if (e === "bool") return this._decodeBool(t, r);
                else if (e === "objDesc") return this._decodeStr(t, e, r);
                else if (e === "int" || e === "enum") return this._decodeInt(t, i.args && i.args[0], r);
                if (i.use !== null) {
                    return this._getUse(i.use, t._reporterState.obj)._decode(t, r);
                } else {
                    return t.error("unknown tag: " + e);
                }
            };
            Node.prototype._getUse = function _getUse(e, t) {
                var r = this._baseState;
                r.useDecoder = this._use(e, t);
                s(r.useDecoder._baseState.parent === null);
                r.useDecoder = r.useDecoder._baseState.children[0];
                if (r.implicit !== r.useDecoder._baseState.implicit) {
                    r.useDecoder = r.useDecoder.clone();
                    r.useDecoder._baseState.implicit = r.implicit;
                }
                return r.useDecoder;
            };
            Node.prototype._decodeChoice = function decodeChoice(e, t) {
                var r = this._baseState;
                var i = null;
                var n = false;
                Object.keys(r.choice).some(function(a) {
                    var s = e.save();
                    var o = r.choice[a];
                    try {
                        var h = o._decode(e, t);
                        if (e.isError(h)) return false;
                        i = {
                            type: a,
                            value: h
                        };
                        n = true;
                    } catch (t) {
                        e.restore(s);
                        return false;
                    }
                    return true;
                }, this);
                if (!n) return e.error("Choice not matched");
                return i;
            };
            Node.prototype._createEncoderBuffer = function createEncoderBuffer(e) {
                return new n(e, this.reporter);
            };
            Node.prototype._encode = function encode(e, t, r) {
                var i = this._baseState;
                if (i["default"] !== null && i["default"] === e) return;
                var n = this._encodeValue(e, t, r);
                if (n === undefined) return;
                if (this._skipDefault(n, t, r)) return;
                return n;
            };
            Node.prototype._encodeValue = function encode(e, t, r) {
                var n = this._baseState;
                if (n.parent === null) return n.children[0]._encode(e, t || new i);
                var a = null;
                this.reporter = t;
                if (n.optional && e === undefined) {
                    if (n["default"] !== null) e = n["default"];
                    else return;
                }
                var s = null;
                var o = false;
                if (n.any) {
                    a = this._createEncoderBuffer(e);
                } else if (n.choice) {
                    a = this._encodeChoice(e, t);
                } else if (n.contains) {
                    s = this._getUse(n.contains, r)._encode(e, t);
                    o = true;
                } else if (n.children) {
                    s = n.children.map(function(r) {
                        if (r._baseState.tag === "null_") return r._encode(null, t, e);
                        if (r._baseState.key === null) return t.error("Child should have a key");
                        var i = t.enterKey(r._baseState.key);
                        if (typeof e !== "object") return t.error("Child expected, but input is not object");
                        var n = r._encode(e[r._baseState.key], t, e);
                        t.leaveKey(i);
                        return n;
                    }, this).filter(function(e) {
                        return e;
                    });
                    s = this._createEncoderBuffer(s);
                } else {
                    if (n.tag === "seqof" || n.tag === "setof") {
                        if (!(n.args && n.args.length === 1)) return t.error("Too many args for : " + n.tag);
                        if (!Array.isArray(e)) return t.error("seqof/setof, but data is not Array");
                        var h = this.clone();
                        h._baseState.implicit = null;
                        s = this._createEncoderBuffer(e.map(function(r) {
                            var i = this._baseState;
                            return this._getUse(i.args[0], e)._encode(r, t);
                        }, h));
                    } else if (n.use !== null) {
                        a = this._getUse(n.use, r)._encode(e, t);
                    } else {
                        s = this._encodePrimitive(n.tag, e);
                        o = true;
                    }
                }
                var a;
                if (!n.any && n.choice === null) {
                    var u = n.implicit !== null ? n.implicit : n.tag;
                    var d = n.implicit === null ? "universal" : "context";
                    if (u === null) {
                        if (n.use === null) t.error("Tag could be omitted only for .use()");
                    } else {
                        if (n.use === null) a = this._encodeComposite(u, o, d, s);
                    }
                }
                if (n.explicit !== null) a = this._encodeComposite(n.explicit, false, "context", a);
                return a;
            };
            Node.prototype._encodeChoice = function encodeChoice(e, t) {
                var r = this._baseState;
                var i = r.choice[e.type];
                if (!i) {
                    s(false, e.type + " not found in " + JSON.stringify(Object.keys(r.choice)));
                }
                return i._encode(e.value, t);
            };
            Node.prototype._encodePrimitive = function encodePrimitive(e, t) {
                var r = this._baseState;
                if (/str$/.test(e)) return this._encodeStr(t, e);
                else if (e === "objid" && r.args) return this._encodeObjid(t, r.reverseArgs[0], r.args[1]);
                else if (e === "objid") return this._encodeObjid(t, null, null);
                else if (e === "gentime" || e === "utctime") return this._encodeTime(t, e);
                else if (e === "null_") return this._encodeNull();
                else if (e === "int" || e === "enum") return this._encodeInt(t, r.args && r.reverseArgs[0]);
                else if (e === "bool") return this._encodeBool(t);
                else if (e === "objDesc") return this._encodeStr(t, e);
                else throw new Error("Unsupported tag: " + e);
            };
            Node.prototype._isNumstr = function isNumstr(e) {
                return /^[0-9 ]*$/.test(e);
            };
            Node.prototype._isPrintstr = function isPrintstr(e) {
                return /^[A-Za-z0-9 '\(\)\+,\-\.\/:=\?]*$/.test(e);
            };
        },
        1293: function(e, t, r) {
            var i = r(3782);
            function Reporter(e) {
                this._reporterState = {
                    obj: null,
                    path: [],
                    options: e || {},
                    errors: []
                };
            }
            t.b = Reporter;
            Reporter.prototype.isError = function isError(e) {
                return e instanceof ReporterError;
            };
            Reporter.prototype.save = function save() {
                var e = this._reporterState;
                return {
                    obj: e.obj,
                    pathLen: e.path.length
                };
            };
            Reporter.prototype.restore = function restore(e) {
                var t = this._reporterState;
                t.obj = e.obj;
                t.path = t.path.slice(0, e.pathLen);
            };
            Reporter.prototype.enterKey = function enterKey(e) {
                return this._reporterState.path.push(e);
            };
            Reporter.prototype.exitKey = function exitKey(e) {
                var t = this._reporterState;
                t.path = t.path.slice(0, e - 1);
            };
            Reporter.prototype.leaveKey = function leaveKey(e, t, r) {
                var i = this._reporterState;
                this.exitKey(e);
                if (i.obj !== null) i.obj[t] = r;
            };
            Reporter.prototype.path = function path() {
                return this._reporterState.path.join("/");
            };
            Reporter.prototype.enterObject = function enterObject() {
                var e = this._reporterState;
                var t = e.obj;
                e.obj = {};
                return t;
            };
            Reporter.prototype.leaveObject = function leaveObject(e) {
                var t = this._reporterState;
                var r = t.obj;
                t.obj = e;
                return r;
            };
            Reporter.prototype.error = function error(e) {
                var t;
                var r = this._reporterState;
                var i = e instanceof ReporterError;
                if (i) {
                    t = e;
                } else {
                    t = new ReporterError(r.path.map(function(e) {
                        return "[" + JSON.stringify(e) + "]";
                    }).join(""), e.message || e, e.stack);
                }
                if (!r.options.partial) throw t;
                if (!i) r.errors.push(t);
                return t;
            };
            Reporter.prototype.wrapResult = function wrapResult(e) {
                var t = this._reporterState;
                if (!t.options.partial) return e;
                return {
                    result: this.isError(e) ? null : e,
                    errors: t.errors
                };
            };
            function ReporterError(e, t) {
                this.path = e;
                this.rethrow(t);
            }
            i(ReporterError, Error);
            ReporterError.prototype.rethrow = function rethrow(e) {
                this.message = e + " at: " + (this.path || "(shallow)");
                if (Error.captureStackTrace) Error.captureStackTrace(this, ReporterError);
                if (!this.stack) {
                    try {
                        throw new Error(this.message);
                    } catch (e) {
                        this.stack = e.stack;
                    }
                }
                return this;
            };
        },
        9791: function(e, t, r) {
            var i = r(7335);
            t.tagClass = {
                0: "universal",
                1: "application",
                2: "context",
                3: "private"
            };
            t.tagClassByName = i._reverse(t.tagClass);
            t.tag = {
                0: "end",
                1: "bool",
                2: "int",
                3: "bitstr",
                4: "octstr",
                5: "null_",
                6: "objid",
                7: "objDesc",
                8: "external",
                9: "real",
                10: "enum",
                11: "embed",
                12: "utf8str",
                13: "relativeOid",
                16: "seq",
                17: "set",
                18: "numstr",
                19: "printstr",
                20: "t61str",
                21: "videostr",
                22: "ia5str",
                23: "utctime",
                24: "gentime",
                25: "graphstr",
                26: "iso646str",
                27: "genstr",
                28: "unistr",
                29: "charstr",
                30: "bmpstr"
            };
            t.tagByName = i._reverse(t.tag);
        },
        7335: function(e, t, r) {
            var i = t;
            i._reverse = function reverse(e) {
                var t = {};
                Object.keys(e).forEach(function(r) {
                    if ((r | 0) == r) r = r | 0;
                    var i = e[r];
                    t[i] = r;
                });
                return t;
            };
            i.der = r(9791);
        },
        2259: function(e, t, r) {
            var i = r(3782);
            var n = r(7160);
            var a = n.base;
            var s = n.bignum;
            var o = n.constants.der;
            function DERDecoder(e) {
                this.enc = "der";
                this.name = e.name;
                this.entity = e;
                this.tree = new DERNode;
                this.tree._init(e.body);
            }
            e.exports = DERDecoder;
            DERDecoder.prototype.decode = function decode(e, t) {
                if (!(e instanceof a.DecoderBuffer)) e = new a.DecoderBuffer(e, t);
                return this.tree._decode(e, t);
            };
            function DERNode(e) {
                a.Node.call(this, "der", e);
            }
            i(DERNode, a.Node);
            DERNode.prototype._peekTag = function peekTag(e, t, r) {
                if (e.isEmpty()) return false;
                var i = e.save();
                var n = derDecodeTag(e, 'Failed to peek tag: "' + t + '"');
                if (e.isError(n)) return n;
                e.restore(i);
                return n.tag === t || n.tagStr === t || n.tagStr + "of" === t || r;
            };
            DERNode.prototype._decodeTag = function decodeTag(e, t, r) {
                var i = derDecodeTag(e, 'Failed to decode tag of "' + t + '"');
                if (e.isError(i)) return i;
                var n = derDecodeLen(e, i.primitive, 'Failed to get length of "' + t + '"');
                if (e.isError(n)) return n;
                if (!r && i.tag !== t && i.tagStr !== t && i.tagStr + "of" !== t) {
                    return e.error('Failed to match tag: "' + t + '"');
                }
                if (i.primitive || n !== null) return e.skip(n, 'Failed to match body of: "' + t + '"');
                var a = e.save();
                var s = this._skipUntilEnd(e, 'Failed to skip indefinite length body: "' + this.tag + '"');
                if (e.isError(s)) return s;
                n = e.offset - a.offset;
                e.restore(a);
                return e.skip(n, 'Failed to match body of: "' + t + '"');
            };
            DERNode.prototype._skipUntilEnd = function skipUntilEnd(e, t) {
                while(true){
                    var r = derDecodeTag(e, t);
                    if (e.isError(r)) return r;
                    var i = derDecodeLen(e, r.primitive, t);
                    if (e.isError(i)) return i;
                    var n;
                    if (r.primitive || i !== null) n = e.skip(i);
                    else n = this._skipUntilEnd(e, t);
                    if (e.isError(n)) return n;
                    if (r.tagStr === "end") break;
                }
            };
            DERNode.prototype._decodeList = function decodeList(e, t, r, i) {
                var n = [];
                while(!e.isEmpty()){
                    var a = this._peekTag(e, "end");
                    if (e.isError(a)) return a;
                    var s = r.decode(e, "der", i);
                    if (e.isError(s) && a) break;
                    n.push(s);
                }
                return n;
            };
            DERNode.prototype._decodeStr = function decodeStr(e, t) {
                if (t === "bitstr") {
                    var r = e.readUInt8();
                    if (e.isError(r)) return r;
                    return {
                        unused: r,
                        data: e.raw()
                    };
                } else if (t === "bmpstr") {
                    var i = e.raw();
                    if (i.length % 2 === 1) return e.error("Decoding of string type: bmpstr length mismatch");
                    var n = "";
                    for(var a = 0; a < i.length / 2; a++){
                        n += String.fromCharCode(i.readUInt16BE(a * 2));
                    }
                    return n;
                } else if (t === "numstr") {
                    var s = e.raw().toString("ascii");
                    if (!this._isNumstr(s)) {
                        return e.error("Decoding of string type: " + "numstr unsupported characters");
                    }
                    return s;
                } else if (t === "octstr") {
                    return e.raw();
                } else if (t === "objDesc") {
                    return e.raw();
                } else if (t === "printstr") {
                    var o = e.raw().toString("ascii");
                    if (!this._isPrintstr(o)) {
                        return e.error("Decoding of string type: " + "printstr unsupported characters");
                    }
                    return o;
                } else if (/str$/.test(t)) {
                    return e.raw().toString();
                } else {
                    return e.error("Decoding of string type: " + t + " unsupported");
                }
            };
            DERNode.prototype._decodeObjid = function decodeObjid(e, t, r) {
                var i;
                var n = [];
                var a = 0;
                while(!e.isEmpty()){
                    var s = e.readUInt8();
                    a <<= 7;
                    a |= s & 127;
                    if ((s & 128) === 0) {
                        n.push(a);
                        a = 0;
                    }
                }
                if (s & 128) n.push(a);
                var o = n[0] / 40 | 0;
                var h = n[0] % 40;
                if (r) i = n;
                else i = [
                    o,
                    h
                ].concat(n.slice(1));
                if (t) {
                    var u = t[i.join(" ")];
                    if (u === undefined) u = t[i.join(".")];
                    if (u !== undefined) i = u;
                }
                return i;
            };
            DERNode.prototype._decodeTime = function decodeTime(e, t) {
                var r = e.raw().toString();
                if (t === "gentime") {
                    var i = r.slice(0, 4) | 0;
                    var n = r.slice(4, 6) | 0;
                    var a = r.slice(6, 8) | 0;
                    var s = r.slice(8, 10) | 0;
                    var o = r.slice(10, 12) | 0;
                    var h = r.slice(12, 14) | 0;
                } else if (t === "utctime") {
                    var i = r.slice(0, 2) | 0;
                    var n = r.slice(2, 4) | 0;
                    var a = r.slice(4, 6) | 0;
                    var s = r.slice(6, 8) | 0;
                    var o = r.slice(8, 10) | 0;
                    var h = r.slice(10, 12) | 0;
                    if (i < 70) i = 2e3 + i;
                    else i = 1900 + i;
                } else {
                    return e.error("Decoding " + t + " time is not supported yet");
                }
                return Date.UTC(i, n - 1, a, s, o, h, 0);
            };
            DERNode.prototype._decodeNull = function decodeNull(e) {
                return null;
            };
            DERNode.prototype._decodeBool = function decodeBool(e) {
                var t = e.readUInt8();
                if (e.isError(t)) return t;
                else return t !== 0;
            };
            DERNode.prototype._decodeInt = function decodeInt(e, t) {
                var r = e.raw();
                var i = new s(r);
                if (t) i = t[i.toString(10)] || i;
                return i;
            };
            DERNode.prototype._use = function use(e, t) {
                if (typeof e === "function") e = e(t);
                return e._getDecoder("der").tree;
            };
            function derDecodeTag(e, t) {
                var r = e.readUInt8(t);
                if (e.isError(r)) return r;
                var i = o.tagClass[r >> 6];
                var n = (r & 32) === 0;
                if ((r & 31) === 31) {
                    var a = r;
                    r = 0;
                    while((a & 128) === 128){
                        a = e.readUInt8(t);
                        if (e.isError(a)) return a;
                        r <<= 7;
                        r |= a & 127;
                    }
                } else {
                    r &= 31;
                }
                var s = o.tag[r];
                return {
                    cls: i,
                    primitive: n,
                    tag: r,
                    tagStr: s
                };
            }
            function derDecodeLen(e, t, r) {
                var i = e.readUInt8(r);
                if (e.isError(i)) return i;
                if (!t && i === 128) return null;
                if ((i & 128) === 0) {
                    return i;
                }
                var n = i & 127;
                if (n > 4) return e.error("length octect is too long");
                i = 0;
                for(var a = 0; a < n; a++){
                    i <<= 8;
                    var s = e.readUInt8(r);
                    if (e.isError(s)) return s;
                    i |= s;
                }
                return i;
            }
        },
        6701: function(e, t, r) {
            var i = t;
            i.der = r(2259);
            i.pem = r(8527);
        },
        8527: function(e, t, r) {
            var i = r(3782);
            var n = r(4300).Buffer;
            var a = r(2259);
            function PEMDecoder(e) {
                a.call(this, e);
                this.enc = "pem";
            }
            i(PEMDecoder, a);
            e.exports = PEMDecoder;
            PEMDecoder.prototype.decode = function decode(e, t) {
                var r = e.toString().split(/[\r\n]+/g);
                var i = t.label.toUpperCase();
                var s = /^-----(BEGIN|END) ([^-]+)-----$/;
                var o = -1;
                var h = -1;
                for(var u = 0; u < r.length; u++){
                    var d = r[u].match(s);
                    if (d === null) continue;
                    if (d[2] !== i) continue;
                    if (o === -1) {
                        if (d[1] !== "BEGIN") break;
                        o = u;
                    } else {
                        if (d[1] !== "END") break;
                        h = u;
                        break;
                    }
                }
                if (o === -1 || h === -1) throw new Error("PEM section not found for: " + i);
                var c = r.slice(o + 1, h).join("");
                c.replace(/[^a-z0-9\+\/=]+/gi, "");
                var l = new n(c, "base64");
                return a.prototype.decode.call(this, l, t);
            };
        },
        7804: function(e, t, r) {
            var i = r(3782);
            var n = r(4300).Buffer;
            var a = r(7160);
            var s = a.base;
            var o = a.constants.der;
            function DEREncoder(e) {
                this.enc = "der";
                this.name = e.name;
                this.entity = e;
                this.tree = new DERNode;
                this.tree._init(e.body);
            }
            e.exports = DEREncoder;
            DEREncoder.prototype.encode = function encode(e, t) {
                return this.tree._encode(e, t).join();
            };
            function DERNode(e) {
                s.Node.call(this, "der", e);
            }
            i(DERNode, s.Node);
            DERNode.prototype._encodeComposite = function encodeComposite(e, t, r, i) {
                var a = encodeTag(e, t, r, this.reporter);
                if (i.length < 128) {
                    var s = new n(2);
                    s[0] = a;
                    s[1] = i.length;
                    return this._createEncoderBuffer([
                        s,
                        i
                    ]);
                }
                var o = 1;
                for(var h = i.length; h >= 256; h >>= 8)o++;
                var s = new n(1 + 1 + o);
                s[0] = a;
                s[1] = 128 | o;
                for(var h = 1 + o, u = i.length; u > 0; h--, u >>= 8)s[h] = u & 255;
                return this._createEncoderBuffer([
                    s,
                    i
                ]);
            };
            DERNode.prototype._encodeStr = function encodeStr(e, t) {
                if (t === "bitstr") {
                    return this._createEncoderBuffer([
                        e.unused | 0,
                        e.data
                    ]);
                } else if (t === "bmpstr") {
                    var r = new n(e.length * 2);
                    for(var i = 0; i < e.length; i++){
                        r.writeUInt16BE(e.charCodeAt(i), i * 2);
                    }
                    return this._createEncoderBuffer(r);
                } else if (t === "numstr") {
                    if (!this._isNumstr(e)) {
                        return this.reporter.error("Encoding of string type: numstr supports " + "only digits and space");
                    }
                    return this._createEncoderBuffer(e);
                } else if (t === "printstr") {
                    if (!this._isPrintstr(e)) {
                        return this.reporter.error("Encoding of string type: printstr supports " + "only latin upper and lower case letters, " + "digits, space, apostrophe, left and rigth " + "parenthesis, plus sign, comma, hyphen, " + "dot, slash, colon, equal sign, " + "question mark");
                    }
                    return this._createEncoderBuffer(e);
                } else if (/str$/.test(t)) {
                    return this._createEncoderBuffer(e);
                } else if (t === "objDesc") {
                    return this._createEncoderBuffer(e);
                } else {
                    return this.reporter.error("Encoding of string type: " + t + " unsupported");
                }
            };
            DERNode.prototype._encodeObjid = function encodeObjid(e, t, r) {
                if (typeof e === "string") {
                    if (!t) return this.reporter.error("string objid given, but no values map found");
                    if (!t.hasOwnProperty(e)) return this.reporter.error("objid not found in values map");
                    e = t[e].split(/[\s\.]+/g);
                    for(var i = 0; i < e.length; i++)e[i] |= 0;
                } else if (Array.isArray(e)) {
                    e = e.slice();
                    for(var i = 0; i < e.length; i++)e[i] |= 0;
                }
                if (!Array.isArray(e)) {
                    return this.reporter.error("objid() should be either array or string, " + "got: " + JSON.stringify(e));
                }
                if (!r) {
                    if (e[1] >= 40) return this.reporter.error("Second objid identifier OOB");
                    e.splice(0, 2, e[0] * 40 + e[1]);
                }
                var a = 0;
                for(var i = 0; i < e.length; i++){
                    var s = e[i];
                    for(a++; s >= 128; s >>= 7)a++;
                }
                var o = new n(a);
                var h = o.length - 1;
                for(var i = e.length - 1; i >= 0; i--){
                    var s = e[i];
                    o[h--] = s & 127;
                    while((s >>= 7) > 0)o[h--] = 128 | s & 127;
                }
                return this._createEncoderBuffer(o);
            };
            function two(e) {
                if (e < 10) return "0" + e;
                else return e;
            }
            DERNode.prototype._encodeTime = function encodeTime(e, t) {
                var r;
                var i = new Date(e);
                if (t === "gentime") {
                    r = [
                        two(i.getFullYear()),
                        two(i.getUTCMonth() + 1),
                        two(i.getUTCDate()),
                        two(i.getUTCHours()),
                        two(i.getUTCMinutes()),
                        two(i.getUTCSeconds()),
                        "Z"
                    ].join("");
                } else if (t === "utctime") {
                    r = [
                        two(i.getFullYear() % 100),
                        two(i.getUTCMonth() + 1),
                        two(i.getUTCDate()),
                        two(i.getUTCHours()),
                        two(i.getUTCMinutes()),
                        two(i.getUTCSeconds()),
                        "Z"
                    ].join("");
                } else {
                    this.reporter.error("Encoding " + t + " time is not supported yet");
                }
                return this._encodeStr(r, "octstr");
            };
            DERNode.prototype._encodeNull = function encodeNull() {
                return this._createEncoderBuffer("");
            };
            DERNode.prototype._encodeInt = function encodeInt(e, t) {
                if (typeof e === "string") {
                    if (!t) return this.reporter.error("String int or enum given, but no values map");
                    if (!t.hasOwnProperty(e)) {
                        return this.reporter.error("Values map doesn't contain: " + JSON.stringify(e));
                    }
                    e = t[e];
                }
                if (typeof e !== "number" && !n.isBuffer(e)) {
                    var r = e.toArray();
                    if (!e.sign && r[0] & 128) {
                        r.unshift(0);
                    }
                    e = new n(r);
                }
                if (n.isBuffer(e)) {
                    var i = e.length;
                    if (e.length === 0) i++;
                    var a = new n(i);
                    e.copy(a);
                    if (e.length === 0) a[0] = 0;
                    return this._createEncoderBuffer(a);
                }
                if (e < 128) return this._createEncoderBuffer(e);
                if (e < 256) return this._createEncoderBuffer([
                    0,
                    e
                ]);
                var i = 1;
                for(var s = e; s >= 256; s >>= 8)i++;
                var a = new Array(i);
                for(var s = a.length - 1; s >= 0; s--){
                    a[s] = e & 255;
                    e >>= 8;
                }
                if (a[0] & 128) {
                    a.unshift(0);
                }
                return this._createEncoderBuffer(new n(a));
            };
            DERNode.prototype._encodeBool = function encodeBool(e) {
                return this._createEncoderBuffer(e ? 255 : 0);
            };
            DERNode.prototype._use = function use(e, t) {
                if (typeof e === "function") e = e(t);
                return e._getEncoder("der").tree;
            };
            DERNode.prototype._skipDefault = function skipDefault(e, t, r) {
                var i = this._baseState;
                var n;
                if (i["default"] === null) return false;
                var a = e.join();
                if (i.defaultBuffer === undefined) i.defaultBuffer = this._encodeValue(i["default"], t, r).join();
                if (a.length !== i.defaultBuffer.length) return false;
                for(n = 0; n < a.length; n++)if (a[n] !== i.defaultBuffer[n]) return false;
                return true;
            };
            function encodeTag(e, t, r, i) {
                var n;
                if (e === "seqof") e = "seq";
                else if (e === "setof") e = "set";
                if (o.tagByName.hasOwnProperty(e)) n = o.tagByName[e];
                else if (typeof e === "number" && (e | 0) === e) n = e;
                else return i.error("Unknown tag: " + e);
                if (n >= 31) return i.error("Multi-octet tag encoding unsupported");
                if (!t) n |= 32;
                n |= o.tagClassByName[r || "universal"] << 6;
                return n;
            }
        },
        3418: function(e, t, r) {
            var i = t;
            i.der = r(7804);
            i.pem = r(1564);
        },
        1564: function(e, t, r) {
            var i = r(3782);
            var n = r(7804);
            function PEMEncoder(e) {
                n.call(this, e);
                this.enc = "pem";
            }
            i(PEMEncoder, n);
            e.exports = PEMEncoder;
            PEMEncoder.prototype.encode = function encode(e, t) {
                var r = n.prototype.encode.call(this, e);
                var i = r.toString("base64");
                var a = [
                    "-----BEGIN " + t.label + "-----"
                ];
                for(var s = 0; s < i.length; s += 64)a.push(i.slice(s, s + 64));
                a.push("-----END " + t.label + "-----");
                return a.join("\n");
            };
        },
        711: function(e, t, r) {
            e = r.nmd(e);
            (function(e, t) {
                "use strict";
                function assert(e, t) {
                    if (!e) throw new Error(t || "Assertion failed");
                }
                function inherits(e, t) {
                    e.super_ = t;
                    var TempCtor = function() {};
                    TempCtor.prototype = t.prototype;
                    e.prototype = new TempCtor;
                    e.prototype.constructor = e;
                }
                function BN(e, t, r) {
                    if (BN.isBN(e)) {
                        return e;
                    }
                    this.negative = 0;
                    this.words = null;
                    this.length = 0;
                    this.red = null;
                    if (e !== null) {
                        if (t === "le" || t === "be") {
                            r = t;
                            t = 10;
                        }
                        this._init(e || 0, t || 10, r || "be");
                    }
                }
                if (typeof e === "object") {
                    e.exports = BN;
                } else {
                    t.BN = BN;
                }
                BN.BN = BN;
                BN.wordSize = 26;
                var i;
                try {
                    i = r(4300).Buffer;
                } catch (e) {}
                BN.isBN = function isBN(e) {
                    if (e instanceof BN) {
                        return true;
                    }
                    return e !== null && typeof e === "object" && e.constructor.wordSize === BN.wordSize && Array.isArray(e.words);
                };
                BN.max = function max(e, t) {
                    if (e.cmp(t) > 0) return e;
                    return t;
                };
                BN.min = function min(e, t) {
                    if (e.cmp(t) < 0) return e;
                    return t;
                };
                BN.prototype._init = function init(e, t, r) {
                    if (typeof e === "number") {
                        return this._initNumber(e, t, r);
                    }
                    if (typeof e === "object") {
                        return this._initArray(e, t, r);
                    }
                    if (t === "hex") {
                        t = 16;
                    }
                    assert(t === (t | 0) && t >= 2 && t <= 36);
                    e = e.toString().replace(/\s+/g, "");
                    var i = 0;
                    if (e[0] === "-") {
                        i++;
                    }
                    if (t === 16) {
                        this._parseHex(e, i);
                    } else {
                        this._parseBase(e, t, i);
                    }
                    if (e[0] === "-") {
                        this.negative = 1;
                    }
                    this.strip();
                    if (r !== "le") return;
                    this._initArray(this.toArray(), t, r);
                };
                BN.prototype._initNumber = function _initNumber(e, t, r) {
                    if (e < 0) {
                        this.negative = 1;
                        e = -e;
                    }
                    if (e < 67108864) {
                        this.words = [
                            e & 67108863
                        ];
                        this.length = 1;
                    } else if (e < 4503599627370496) {
                        this.words = [
                            e & 67108863,
                            e / 67108864 & 67108863
                        ];
                        this.length = 2;
                    } else {
                        assert(e < 9007199254740992);
                        this.words = [
                            e & 67108863,
                            e / 67108864 & 67108863,
                            1
                        ];
                        this.length = 3;
                    }
                    if (r !== "le") return;
                    this._initArray(this.toArray(), t, r);
                };
                BN.prototype._initArray = function _initArray(e, t, r) {
                    assert(typeof e.length === "number");
                    if (e.length <= 0) {
                        this.words = [
                            0
                        ];
                        this.length = 1;
                        return this;
                    }
                    this.length = Math.ceil(e.length / 3);
                    this.words = new Array(this.length);
                    for(var i = 0; i < this.length; i++){
                        this.words[i] = 0;
                    }
                    var n, a;
                    var s = 0;
                    if (r === "be") {
                        for(i = e.length - 1, n = 0; i >= 0; i -= 3){
                            a = e[i] | e[i - 1] << 8 | e[i - 2] << 16;
                            this.words[n] |= a << s & 67108863;
                            this.words[n + 1] = a >>> 26 - s & 67108863;
                            s += 24;
                            if (s >= 26) {
                                s -= 26;
                                n++;
                            }
                        }
                    } else if (r === "le") {
                        for(i = 0, n = 0; i < e.length; i += 3){
                            a = e[i] | e[i + 1] << 8 | e[i + 2] << 16;
                            this.words[n] |= a << s & 67108863;
                            this.words[n + 1] = a >>> 26 - s & 67108863;
                            s += 24;
                            if (s >= 26) {
                                s -= 26;
                                n++;
                            }
                        }
                    }
                    return this.strip();
                };
                function parseHex(e, t, r) {
                    var i = 0;
                    var n = Math.min(e.length, r);
                    for(var a = t; a < n; a++){
                        var s = e.charCodeAt(a) - 48;
                        i <<= 4;
                        if (s >= 49 && s <= 54) {
                            i |= s - 49 + 10;
                        } else if (s >= 17 && s <= 22) {
                            i |= s - 17 + 10;
                        } else {
                            i |= s & 15;
                        }
                    }
                    return i;
                }
                BN.prototype._parseHex = function _parseHex(e, t) {
                    this.length = Math.ceil((e.length - t) / 6);
                    this.words = new Array(this.length);
                    for(var r = 0; r < this.length; r++){
                        this.words[r] = 0;
                    }
                    var i, n;
                    var a = 0;
                    for(r = e.length - 6, i = 0; r >= t; r -= 6){
                        n = parseHex(e, r, r + 6);
                        this.words[i] |= n << a & 67108863;
                        this.words[i + 1] |= n >>> 26 - a & 4194303;
                        a += 24;
                        if (a >= 26) {
                            a -= 26;
                            i++;
                        }
                    }
                    if (r + 6 !== t) {
                        n = parseHex(e, t, r + 6);
                        this.words[i] |= n << a & 67108863;
                        this.words[i + 1] |= n >>> 26 - a & 4194303;
                    }
                    this.strip();
                };
                function parseBase(e, t, r, i) {
                    var n = 0;
                    var a = Math.min(e.length, r);
                    for(var s = t; s < a; s++){
                        var o = e.charCodeAt(s) - 48;
                        n *= i;
                        if (o >= 49) {
                            n += o - 49 + 10;
                        } else if (o >= 17) {
                            n += o - 17 + 10;
                        } else {
                            n += o;
                        }
                    }
                    return n;
                }
                BN.prototype._parseBase = function _parseBase(e, t, r) {
                    this.words = [
                        0
                    ];
                    this.length = 1;
                    for(var i = 0, n = 1; n <= 67108863; n *= t){
                        i++;
                    }
                    i--;
                    n = n / t | 0;
                    var a = e.length - r;
                    var s = a % i;
                    var o = Math.min(a, a - s) + r;
                    var h = 0;
                    for(var u = r; u < o; u += i){
                        h = parseBase(e, u, u + i, t);
                        this.imuln(n);
                        if (this.words[0] + h < 67108864) {
                            this.words[0] += h;
                        } else {
                            this._iaddn(h);
                        }
                    }
                    if (s !== 0) {
                        var d = 1;
                        h = parseBase(e, u, e.length, t);
                        for(u = 0; u < s; u++){
                            d *= t;
                        }
                        this.imuln(d);
                        if (this.words[0] + h < 67108864) {
                            this.words[0] += h;
                        } else {
                            this._iaddn(h);
                        }
                    }
                };
                BN.prototype.copy = function copy(e) {
                    e.words = new Array(this.length);
                    for(var t = 0; t < this.length; t++){
                        e.words[t] = this.words[t];
                    }
                    e.length = this.length;
                    e.negative = this.negative;
                    e.red = this.red;
                };
                BN.prototype.clone = function clone() {
                    var e = new BN(null);
                    this.copy(e);
                    return e;
                };
                BN.prototype._expand = function _expand(e) {
                    while(this.length < e){
                        this.words[this.length++] = 0;
                    }
                    return this;
                };
                BN.prototype.strip = function strip() {
                    while(this.length > 1 && this.words[this.length - 1] === 0){
                        this.length--;
                    }
                    return this._normSign();
                };
                BN.prototype._normSign = function _normSign() {
                    if (this.length === 1 && this.words[0] === 0) {
                        this.negative = 0;
                    }
                    return this;
                };
                BN.prototype.inspect = function inspect() {
                    return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">";
                };
                var n = [
                    "",
                    "0",
                    "00",
                    "000",
                    "0000",
                    "00000",
                    "000000",
                    "0000000",
                    "00000000",
                    "000000000",
                    "0000000000",
                    "00000000000",
                    "000000000000",
                    "0000000000000",
                    "00000000000000",
                    "000000000000000",
                    "0000000000000000",
                    "00000000000000000",
                    "000000000000000000",
                    "0000000000000000000",
                    "00000000000000000000",
                    "000000000000000000000",
                    "0000000000000000000000",
                    "00000000000000000000000",
                    "000000000000000000000000",
                    "0000000000000000000000000"
                ];
                var a = [
                    0,
                    0,
                    25,
                    16,
                    12,
                    11,
                    10,
                    9,
                    8,
                    8,
                    7,
                    7,
                    7,
                    7,
                    6,
                    6,
                    6,
                    6,
                    6,
                    6,
                    6,
                    5,
                    5,
                    5,
                    5,
                    5,
                    5,
                    5,
                    5,
                    5,
                    5,
                    5,
                    5,
                    5,
                    5,
                    5,
                    5
                ];
                var s = [
                    0,
                    0,
                    33554432,
                    43046721,
                    16777216,
                    48828125,
                    60466176,
                    40353607,
                    16777216,
                    43046721,
                    1e7,
                    19487171,
                    35831808,
                    62748517,
                    7529536,
                    11390625,
                    16777216,
                    24137569,
                    34012224,
                    47045881,
                    64e6,
                    4084101,
                    5153632,
                    6436343,
                    7962624,
                    9765625,
                    11881376,
                    14348907,
                    17210368,
                    20511149,
                    243e5,
                    28629151,
                    33554432,
                    39135393,
                    45435424,
                    52521875,
                    60466176
                ];
                BN.prototype.toString = function toString(e, t) {
                    e = e || 10;
                    t = t | 0 || 1;
                    var r;
                    if (e === 16 || e === "hex") {
                        r = "";
                        var i = 0;
                        var o = 0;
                        for(var h = 0; h < this.length; h++){
                            var u = this.words[h];
                            var d = ((u << i | o) & 16777215).toString(16);
                            o = u >>> 24 - i & 16777215;
                            if (o !== 0 || h !== this.length - 1) {
                                r = n[6 - d.length] + d + r;
                            } else {
                                r = d + r;
                            }
                            i += 2;
                            if (i >= 26) {
                                i -= 26;
                                h--;
                            }
                        }
                        if (o !== 0) {
                            r = o.toString(16) + r;
                        }
                        while(r.length % t !== 0){
                            r = "0" + r;
                        }
                        if (this.negative !== 0) {
                            r = "-" + r;
                        }
                        return r;
                    }
                    if (e === (e | 0) && e >= 2 && e <= 36) {
                        var c = a[e];
                        var l = s[e];
                        r = "";
                        var p = this.clone();
                        p.negative = 0;
                        while(!p.isZero()){
                            var v = p.modn(l).toString(e);
                            p = p.idivn(l);
                            if (!p.isZero()) {
                                r = n[c - v.length] + v + r;
                            } else {
                                r = v + r;
                            }
                        }
                        if (this.isZero()) {
                            r = "0" + r;
                        }
                        while(r.length % t !== 0){
                            r = "0" + r;
                        }
                        if (this.negative !== 0) {
                            r = "-" + r;
                        }
                        return r;
                    }
                    assert(false, "Base should be between 2 and 36");
                };
                BN.prototype.toNumber = function toNumber() {
                    var e = this.words[0];
                    if (this.length === 2) {
                        e += this.words[1] * 67108864;
                    } else if (this.length === 3 && this.words[2] === 1) {
                        e += 4503599627370496 + this.words[1] * 67108864;
                    } else if (this.length > 2) {
                        assert(false, "Number can only safely store up to 53 bits");
                    }
                    return this.negative !== 0 ? -e : e;
                };
                BN.prototype.toJSON = function toJSON() {
                    return this.toString(16);
                };
                BN.prototype.toBuffer = function toBuffer(e, t) {
                    assert(typeof i !== "undefined");
                    return this.toArrayLike(i, e, t);
                };
                BN.prototype.toArray = function toArray(e, t) {
                    return this.toArrayLike(Array, e, t);
                };
                BN.prototype.toArrayLike = function toArrayLike(e, t, r) {
                    var i = this.byteLength();
                    var n = r || Math.max(1, i);
                    assert(i <= n, "byte array longer than desired length");
                    assert(n > 0, "Requested array length <= 0");
                    this.strip();
                    var a = t === "le";
                    var s = new e(n);
                    var o, h;
                    var u = this.clone();
                    if (!a) {
                        for(h = 0; h < n - i; h++){
                            s[h] = 0;
                        }
                        for(h = 0; !u.isZero(); h++){
                            o = u.andln(255);
                            u.iushrn(8);
                            s[n - h - 1] = o;
                        }
                    } else {
                        for(h = 0; !u.isZero(); h++){
                            o = u.andln(255);
                            u.iushrn(8);
                            s[h] = o;
                        }
                        for(; h < n; h++){
                            s[h] = 0;
                        }
                    }
                    return s;
                };
                if (Math.clz32) {
                    BN.prototype._countBits = function _countBits(e) {
                        return 32 - Math.clz32(e);
                    };
                } else {
                    BN.prototype._countBits = function _countBits(e) {
                        var t = e;
                        var r = 0;
                        if (t >= 4096) {
                            r += 13;
                            t >>>= 13;
                        }
                        if (t >= 64) {
                            r += 7;
                            t >>>= 7;
                        }
                        if (t >= 8) {
                            r += 4;
                            t >>>= 4;
                        }
                        if (t >= 2) {
                            r += 2;
                            t >>>= 2;
                        }
                        return r + t;
                    };
                }
                BN.prototype._zeroBits = function _zeroBits(e) {
                    if (e === 0) return 26;
                    var t = e;
                    var r = 0;
                    if ((t & 8191) === 0) {
                        r += 13;
                        t >>>= 13;
                    }
                    if ((t & 127) === 0) {
                        r += 7;
                        t >>>= 7;
                    }
                    if ((t & 15) === 0) {
                        r += 4;
                        t >>>= 4;
                    }
                    if ((t & 3) === 0) {
                        r += 2;
                        t >>>= 2;
                    }
                    if ((t & 1) === 0) {
                        r++;
                    }
                    return r;
                };
                BN.prototype.bitLength = function bitLength() {
                    var e = this.words[this.length - 1];
                    var t = this._countBits(e);
                    return (this.length - 1) * 26 + t;
                };
                function toBitArray(e) {
                    var t = new Array(e.bitLength());
                    for(var r = 0; r < t.length; r++){
                        var i = r / 26 | 0;
                        var n = r % 26;
                        t[r] = (e.words[i] & 1 << n) >>> n;
                    }
                    return t;
                }
                BN.prototype.zeroBits = function zeroBits() {
                    if (this.isZero()) return 0;
                    var e = 0;
                    for(var t = 0; t < this.length; t++){
                        var r = this._zeroBits(this.words[t]);
                        e += r;
                        if (r !== 26) break;
                    }
                    return e;
                };
                BN.prototype.byteLength = function byteLength() {
                    return Math.ceil(this.bitLength() / 8);
                };
                BN.prototype.toTwos = function toTwos(e) {
                    if (this.negative !== 0) {
                        return this.abs().inotn(e).iaddn(1);
                    }
                    return this.clone();
                };
                BN.prototype.fromTwos = function fromTwos(e) {
                    if (this.testn(e - 1)) {
                        return this.notn(e).iaddn(1).ineg();
                    }
                    return this.clone();
                };
                BN.prototype.isNeg = function isNeg() {
                    return this.negative !== 0;
                };
                BN.prototype.neg = function neg() {
                    return this.clone().ineg();
                };
                BN.prototype.ineg = function ineg() {
                    if (!this.isZero()) {
                        this.negative ^= 1;
                    }
                    return this;
                };
                BN.prototype.iuor = function iuor(e) {
                    while(this.length < e.length){
                        this.words[this.length++] = 0;
                    }
                    for(var t = 0; t < e.length; t++){
                        this.words[t] = this.words[t] | e.words[t];
                    }
                    return this.strip();
                };
                BN.prototype.ior = function ior(e) {
                    assert((this.negative | e.negative) === 0);
                    return this.iuor(e);
                };
                BN.prototype.or = function or(e) {
                    if (this.length > e.length) return this.clone().ior(e);
                    return e.clone().ior(this);
                };
                BN.prototype.uor = function uor(e) {
                    if (this.length > e.length) return this.clone().iuor(e);
                    return e.clone().iuor(this);
                };
                BN.prototype.iuand = function iuand(e) {
                    var t;
                    if (this.length > e.length) {
                        t = e;
                    } else {
                        t = this;
                    }
                    for(var r = 0; r < t.length; r++){
                        this.words[r] = this.words[r] & e.words[r];
                    }
                    this.length = t.length;
                    return this.strip();
                };
                BN.prototype.iand = function iand(e) {
                    assert((this.negative | e.negative) === 0);
                    return this.iuand(e);
                };
                BN.prototype.and = function and(e) {
                    if (this.length > e.length) return this.clone().iand(e);
                    return e.clone().iand(this);
                };
                BN.prototype.uand = function uand(e) {
                    if (this.length > e.length) return this.clone().iuand(e);
                    return e.clone().iuand(this);
                };
                BN.prototype.iuxor = function iuxor(e) {
                    var t;
                    var r;
                    if (this.length > e.length) {
                        t = this;
                        r = e;
                    } else {
                        t = e;
                        r = this;
                    }
                    for(var i = 0; i < r.length; i++){
                        this.words[i] = t.words[i] ^ r.words[i];
                    }
                    if (this !== t) {
                        for(; i < t.length; i++){
                            this.words[i] = t.words[i];
                        }
                    }
                    this.length = t.length;
                    return this.strip();
                };
                BN.prototype.ixor = function ixor(e) {
                    assert((this.negative | e.negative) === 0);
                    return this.iuxor(e);
                };
                BN.prototype.xor = function xor(e) {
                    if (this.length > e.length) return this.clone().ixor(e);
                    return e.clone().ixor(this);
                };
                BN.prototype.uxor = function uxor(e) {
                    if (this.length > e.length) return this.clone().iuxor(e);
                    return e.clone().iuxor(this);
                };
                BN.prototype.inotn = function inotn(e) {
                    assert(typeof e === "number" && e >= 0);
                    var t = Math.ceil(e / 26) | 0;
                    var r = e % 26;
                    this._expand(t);
                    if (r > 0) {
                        t--;
                    }
                    for(var i = 0; i < t; i++){
                        this.words[i] = ~this.words[i] & 67108863;
                    }
                    if (r > 0) {
                        this.words[i] = ~this.words[i] & 67108863 >> 26 - r;
                    }
                    return this.strip();
                };
                BN.prototype.notn = function notn(e) {
                    return this.clone().inotn(e);
                };
                BN.prototype.setn = function setn(e, t) {
                    assert(typeof e === "number" && e >= 0);
                    var r = e / 26 | 0;
                    var i = e % 26;
                    this._expand(r + 1);
                    if (t) {
                        this.words[r] = this.words[r] | 1 << i;
                    } else {
                        this.words[r] = this.words[r] & ~(1 << i);
                    }
                    return this.strip();
                };
                BN.prototype.iadd = function iadd(e) {
                    var t;
                    if (this.negative !== 0 && e.negative === 0) {
                        this.negative = 0;
                        t = this.isub(e);
                        this.negative ^= 1;
                        return this._normSign();
                    } else if (this.negative === 0 && e.negative !== 0) {
                        e.negative = 0;
                        t = this.isub(e);
                        e.negative = 1;
                        return t._normSign();
                    }
                    var r, i;
                    if (this.length > e.length) {
                        r = this;
                        i = e;
                    } else {
                        r = e;
                        i = this;
                    }
                    var n = 0;
                    for(var a = 0; a < i.length; a++){
                        t = (r.words[a] | 0) + (i.words[a] | 0) + n;
                        this.words[a] = t & 67108863;
                        n = t >>> 26;
                    }
                    for(; n !== 0 && a < r.length; a++){
                        t = (r.words[a] | 0) + n;
                        this.words[a] = t & 67108863;
                        n = t >>> 26;
                    }
                    this.length = r.length;
                    if (n !== 0) {
                        this.words[this.length] = n;
                        this.length++;
                    } else if (r !== this) {
                        for(; a < r.length; a++){
                            this.words[a] = r.words[a];
                        }
                    }
                    return this;
                };
                BN.prototype.add = function add(e) {
                    var t;
                    if (e.negative !== 0 && this.negative === 0) {
                        e.negative = 0;
                        t = this.sub(e);
                        e.negative ^= 1;
                        return t;
                    } else if (e.negative === 0 && this.negative !== 0) {
                        this.negative = 0;
                        t = e.sub(this);
                        this.negative = 1;
                        return t;
                    }
                    if (this.length > e.length) return this.clone().iadd(e);
                    return e.clone().iadd(this);
                };
                BN.prototype.isub = function isub(e) {
                    if (e.negative !== 0) {
                        e.negative = 0;
                        var t = this.iadd(e);
                        e.negative = 1;
                        return t._normSign();
                    } else if (this.negative !== 0) {
                        this.negative = 0;
                        this.iadd(e);
                        this.negative = 1;
                        return this._normSign();
                    }
                    var r = this.cmp(e);
                    if (r === 0) {
                        this.negative = 0;
                        this.length = 1;
                        this.words[0] = 0;
                        return this;
                    }
                    var i, n;
                    if (r > 0) {
                        i = this;
                        n = e;
                    } else {
                        i = e;
                        n = this;
                    }
                    var a = 0;
                    for(var s = 0; s < n.length; s++){
                        t = (i.words[s] | 0) - (n.words[s] | 0) + a;
                        a = t >> 26;
                        this.words[s] = t & 67108863;
                    }
                    for(; a !== 0 && s < i.length; s++){
                        t = (i.words[s] | 0) + a;
                        a = t >> 26;
                        this.words[s] = t & 67108863;
                    }
                    if (a === 0 && s < i.length && i !== this) {
                        for(; s < i.length; s++){
                            this.words[s] = i.words[s];
                        }
                    }
                    this.length = Math.max(this.length, s);
                    if (i !== this) {
                        this.negative = 1;
                    }
                    return this.strip();
                };
                BN.prototype.sub = function sub(e) {
                    return this.clone().isub(e);
                };
                function smallMulTo(e, t, r) {
                    r.negative = t.negative ^ e.negative;
                    var i = e.length + t.length | 0;
                    r.length = i;
                    i = i - 1 | 0;
                    var n = e.words[0] | 0;
                    var a = t.words[0] | 0;
                    var s = n * a;
                    var o = s & 67108863;
                    var h = s / 67108864 | 0;
                    r.words[0] = o;
                    for(var u = 1; u < i; u++){
                        var d = h >>> 26;
                        var c = h & 67108863;
                        var l = Math.min(u, t.length - 1);
                        for(var p = Math.max(0, u - e.length + 1); p <= l; p++){
                            var v = u - p | 0;
                            n = e.words[v] | 0;
                            a = t.words[p] | 0;
                            s = n * a + c;
                            d += s / 67108864 | 0;
                            c = s & 67108863;
                        }
                        r.words[u] = c | 0;
                        h = d | 0;
                    }
                    if (h !== 0) {
                        r.words[u] = h | 0;
                    } else {
                        r.length--;
                    }
                    return r.strip();
                }
                var o = function comb10MulTo(e, t, r) {
                    var i = e.words;
                    var n = t.words;
                    var a = r.words;
                    var s = 0;
                    var o;
                    var h;
                    var u;
                    var d = i[0] | 0;
                    var c = d & 8191;
                    var l = d >>> 13;
                    var p = i[1] | 0;
                    var v = p & 8191;
                    var b = p >>> 13;
                    var m = i[2] | 0;
                    var y = m & 8191;
                    var g = m >>> 13;
                    var _ = i[3] | 0;
                    var w = _ & 8191;
                    var M = _ >>> 13;
                    var B = i[4] | 0;
                    var E = B & 8191;
                    var k = B >>> 13;
                    var A = i[5] | 0;
                    var N = A & 8191;
                    var P = A >>> 13;
                    var x = i[6] | 0;
                    var I = x & 8191;
                    var C = x >>> 13;
                    var D = i[7] | 0;
                    var T = D & 8191;
                    var j = D >>> 13;
                    var q = i[8] | 0;
                    var O = q & 8191;
                    var H = q >>> 13;
                    var L = i[9] | 0;
                    var z = L & 8191;
                    var F = L >>> 13;
                    var U = n[0] | 0;
                    var W = U & 8191;
                    var V = U >>> 13;
                    var G = n[1] | 0;
                    var J = G & 8191;
                    var Z = G >>> 13;
                    var X = n[2] | 0;
                    var Y = X & 8191;
                    var $ = X >>> 13;
                    var Q = n[3] | 0;
                    var ee = Q & 8191;
                    var te = Q >>> 13;
                    var re = n[4] | 0;
                    var ie = re & 8191;
                    var ne = re >>> 13;
                    var ae = n[5] | 0;
                    var fe = ae & 8191;
                    var se = ae >>> 13;
                    var oe = n[6] | 0;
                    var he = oe & 8191;
                    var ue = oe >>> 13;
                    var de = n[7] | 0;
                    var ce = de & 8191;
                    var le = de >>> 13;
                    var pe = n[8] | 0;
                    var ve = pe & 8191;
                    var be = pe >>> 13;
                    var me = n[9] | 0;
                    var ye = me & 8191;
                    var ge = me >>> 13;
                    r.negative = e.negative ^ t.negative;
                    r.length = 19;
                    o = Math.imul(c, W);
                    h = Math.imul(c, V);
                    h = h + Math.imul(l, W) | 0;
                    u = Math.imul(l, V);
                    var _e = (s + o | 0) + ((h & 8191) << 13) | 0;
                    s = (u + (h >>> 13) | 0) + (_e >>> 26) | 0;
                    _e &= 67108863;
                    o = Math.imul(v, W);
                    h = Math.imul(v, V);
                    h = h + Math.imul(b, W) | 0;
                    u = Math.imul(b, V);
                    o = o + Math.imul(c, J) | 0;
                    h = h + Math.imul(c, Z) | 0;
                    h = h + Math.imul(l, J) | 0;
                    u = u + Math.imul(l, Z) | 0;
                    var we = (s + o | 0) + ((h & 8191) << 13) | 0;
                    s = (u + (h >>> 13) | 0) + (we >>> 26) | 0;
                    we &= 67108863;
                    o = Math.imul(y, W);
                    h = Math.imul(y, V);
                    h = h + Math.imul(g, W) | 0;
                    u = Math.imul(g, V);
                    o = o + Math.imul(v, J) | 0;
                    h = h + Math.imul(v, Z) | 0;
                    h = h + Math.imul(b, J) | 0;
                    u = u + Math.imul(b, Z) | 0;
                    o = o + Math.imul(c, Y) | 0;
                    h = h + Math.imul(c, $) | 0;
                    h = h + Math.imul(l, Y) | 0;
                    u = u + Math.imul(l, $) | 0;
                    var Me = (s + o | 0) + ((h & 8191) << 13) | 0;
                    s = (u + (h >>> 13) | 0) + (Me >>> 26) | 0;
                    Me &= 67108863;
                    o = Math.imul(w, W);
                    h = Math.imul(w, V);
                    h = h + Math.imul(M, W) | 0;
                    u = Math.imul(M, V);
                    o = o + Math.imul(y, J) | 0;
                    h = h + Math.imul(y, Z) | 0;
                    h = h + Math.imul(g, J) | 0;
                    u = u + Math.imul(g, Z) | 0;
                    o = o + Math.imul(v, Y) | 0;
                    h = h + Math.imul(v, $) | 0;
                    h = h + Math.imul(b, Y) | 0;
                    u = u + Math.imul(b, $) | 0;
                    o = o + Math.imul(c, ee) | 0;
                    h = h + Math.imul(c, te) | 0;
                    h = h + Math.imul(l, ee) | 0;
                    u = u + Math.imul(l, te) | 0;
                    var Se = (s + o | 0) + ((h & 8191) << 13) | 0;
                    s = (u + (h >>> 13) | 0) + (Se >>> 26) | 0;
                    Se &= 67108863;
                    o = Math.imul(E, W);
                    h = Math.imul(E, V);
                    h = h + Math.imul(k, W) | 0;
                    u = Math.imul(k, V);
                    o = o + Math.imul(w, J) | 0;
                    h = h + Math.imul(w, Z) | 0;
                    h = h + Math.imul(M, J) | 0;
                    u = u + Math.imul(M, Z) | 0;
                    o = o + Math.imul(y, Y) | 0;
                    h = h + Math.imul(y, $) | 0;
                    h = h + Math.imul(g, Y) | 0;
                    u = u + Math.imul(g, $) | 0;
                    o = o + Math.imul(v, ee) | 0;
                    h = h + Math.imul(v, te) | 0;
                    h = h + Math.imul(b, ee) | 0;
                    u = u + Math.imul(b, te) | 0;
                    o = o + Math.imul(c, ie) | 0;
                    h = h + Math.imul(c, ne) | 0;
                    h = h + Math.imul(l, ie) | 0;
                    u = u + Math.imul(l, ne) | 0;
                    var Be = (s + o | 0) + ((h & 8191) << 13) | 0;
                    s = (u + (h >>> 13) | 0) + (Be >>> 26) | 0;
                    Be &= 67108863;
                    o = Math.imul(N, W);
                    h = Math.imul(N, V);
                    h = h + Math.imul(P, W) | 0;
                    u = Math.imul(P, V);
                    o = o + Math.imul(E, J) | 0;
                    h = h + Math.imul(E, Z) | 0;
                    h = h + Math.imul(k, J) | 0;
                    u = u + Math.imul(k, Z) | 0;
                    o = o + Math.imul(w, Y) | 0;
                    h = h + Math.imul(w, $) | 0;
                    h = h + Math.imul(M, Y) | 0;
                    u = u + Math.imul(M, $) | 0;
                    o = o + Math.imul(y, ee) | 0;
                    h = h + Math.imul(y, te) | 0;
                    h = h + Math.imul(g, ee) | 0;
                    u = u + Math.imul(g, te) | 0;
                    o = o + Math.imul(v, ie) | 0;
                    h = h + Math.imul(v, ne) | 0;
                    h = h + Math.imul(b, ie) | 0;
                    u = u + Math.imul(b, ne) | 0;
                    o = o + Math.imul(c, fe) | 0;
                    h = h + Math.imul(c, se) | 0;
                    h = h + Math.imul(l, fe) | 0;
                    u = u + Math.imul(l, se) | 0;
                    var Ee = (s + o | 0) + ((h & 8191) << 13) | 0;
                    s = (u + (h >>> 13) | 0) + (Ee >>> 26) | 0;
                    Ee &= 67108863;
                    o = Math.imul(I, W);
                    h = Math.imul(I, V);
                    h = h + Math.imul(C, W) | 0;
                    u = Math.imul(C, V);
                    o = o + Math.imul(N, J) | 0;
                    h = h + Math.imul(N, Z) | 0;
                    h = h + Math.imul(P, J) | 0;
                    u = u + Math.imul(P, Z) | 0;
                    o = o + Math.imul(E, Y) | 0;
                    h = h + Math.imul(E, $) | 0;
                    h = h + Math.imul(k, Y) | 0;
                    u = u + Math.imul(k, $) | 0;
                    o = o + Math.imul(w, ee) | 0;
                    h = h + Math.imul(w, te) | 0;
                    h = h + Math.imul(M, ee) | 0;
                    u = u + Math.imul(M, te) | 0;
                    o = o + Math.imul(y, ie) | 0;
                    h = h + Math.imul(y, ne) | 0;
                    h = h + Math.imul(g, ie) | 0;
                    u = u + Math.imul(g, ne) | 0;
                    o = o + Math.imul(v, fe) | 0;
                    h = h + Math.imul(v, se) | 0;
                    h = h + Math.imul(b, fe) | 0;
                    u = u + Math.imul(b, se) | 0;
                    o = o + Math.imul(c, he) | 0;
                    h = h + Math.imul(c, ue) | 0;
                    h = h + Math.imul(l, he) | 0;
                    u = u + Math.imul(l, ue) | 0;
                    var ke = (s + o | 0) + ((h & 8191) << 13) | 0;
                    s = (u + (h >>> 13) | 0) + (ke >>> 26) | 0;
                    ke &= 67108863;
                    o = Math.imul(T, W);
                    h = Math.imul(T, V);
                    h = h + Math.imul(j, W) | 0;
                    u = Math.imul(j, V);
                    o = o + Math.imul(I, J) | 0;
                    h = h + Math.imul(I, Z) | 0;
                    h = h + Math.imul(C, J) | 0;
                    u = u + Math.imul(C, Z) | 0;
                    o = o + Math.imul(N, Y) | 0;
                    h = h + Math.imul(N, $) | 0;
                    h = h + Math.imul(P, Y) | 0;
                    u = u + Math.imul(P, $) | 0;
                    o = o + Math.imul(E, ee) | 0;
                    h = h + Math.imul(E, te) | 0;
                    h = h + Math.imul(k, ee) | 0;
                    u = u + Math.imul(k, te) | 0;
                    o = o + Math.imul(w, ie) | 0;
                    h = h + Math.imul(w, ne) | 0;
                    h = h + Math.imul(M, ie) | 0;
                    u = u + Math.imul(M, ne) | 0;
                    o = o + Math.imul(y, fe) | 0;
                    h = h + Math.imul(y, se) | 0;
                    h = h + Math.imul(g, fe) | 0;
                    u = u + Math.imul(g, se) | 0;
                    o = o + Math.imul(v, he) | 0;
                    h = h + Math.imul(v, ue) | 0;
                    h = h + Math.imul(b, he) | 0;
                    u = u + Math.imul(b, ue) | 0;
                    o = o + Math.imul(c, ce) | 0;
                    h = h + Math.imul(c, le) | 0;
                    h = h + Math.imul(l, ce) | 0;
                    u = u + Math.imul(l, le) | 0;
                    var Ae = (s + o | 0) + ((h & 8191) << 13) | 0;
                    s = (u + (h >>> 13) | 0) + (Ae >>> 26) | 0;
                    Ae &= 67108863;
                    o = Math.imul(O, W);
                    h = Math.imul(O, V);
                    h = h + Math.imul(H, W) | 0;
                    u = Math.imul(H, V);
                    o = o + Math.imul(T, J) | 0;
                    h = h + Math.imul(T, Z) | 0;
                    h = h + Math.imul(j, J) | 0;
                    u = u + Math.imul(j, Z) | 0;
                    o = o + Math.imul(I, Y) | 0;
                    h = h + Math.imul(I, $) | 0;
                    h = h + Math.imul(C, Y) | 0;
                    u = u + Math.imul(C, $) | 0;
                    o = o + Math.imul(N, ee) | 0;
                    h = h + Math.imul(N, te) | 0;
                    h = h + Math.imul(P, ee) | 0;
                    u = u + Math.imul(P, te) | 0;
                    o = o + Math.imul(E, ie) | 0;
                    h = h + Math.imul(E, ne) | 0;
                    h = h + Math.imul(k, ie) | 0;
                    u = u + Math.imul(k, ne) | 0;
                    o = o + Math.imul(w, fe) | 0;
                    h = h + Math.imul(w, se) | 0;
                    h = h + Math.imul(M, fe) | 0;
                    u = u + Math.imul(M, se) | 0;
                    o = o + Math.imul(y, he) | 0;
                    h = h + Math.imul(y, ue) | 0;
                    h = h + Math.imul(g, he) | 0;
                    u = u + Math.imul(g, ue) | 0;
                    o = o + Math.imul(v, ce) | 0;
                    h = h + Math.imul(v, le) | 0;
                    h = h + Math.imul(b, ce) | 0;
                    u = u + Math.imul(b, le) | 0;
                    o = o + Math.imul(c, ve) | 0;
                    h = h + Math.imul(c, be) | 0;
                    h = h + Math.imul(l, ve) | 0;
                    u = u + Math.imul(l, be) | 0;
                    var Ne = (s + o | 0) + ((h & 8191) << 13) | 0;
                    s = (u + (h >>> 13) | 0) + (Ne >>> 26) | 0;
                    Ne &= 67108863;
                    o = Math.imul(z, W);
                    h = Math.imul(z, V);
                    h = h + Math.imul(F, W) | 0;
                    u = Math.imul(F, V);
                    o = o + Math.imul(O, J) | 0;
                    h = h + Math.imul(O, Z) | 0;
                    h = h + Math.imul(H, J) | 0;
                    u = u + Math.imul(H, Z) | 0;
                    o = o + Math.imul(T, Y) | 0;
                    h = h + Math.imul(T, $) | 0;
                    h = h + Math.imul(j, Y) | 0;
                    u = u + Math.imul(j, $) | 0;
                    o = o + Math.imul(I, ee) | 0;
                    h = h + Math.imul(I, te) | 0;
                    h = h + Math.imul(C, ee) | 0;
                    u = u + Math.imul(C, te) | 0;
                    o = o + Math.imul(N, ie) | 0;
                    h = h + Math.imul(N, ne) | 0;
                    h = h + Math.imul(P, ie) | 0;
                    u = u + Math.imul(P, ne) | 0;
                    o = o + Math.imul(E, fe) | 0;
                    h = h + Math.imul(E, se) | 0;
                    h = h + Math.imul(k, fe) | 0;
                    u = u + Math.imul(k, se) | 0;
                    o = o + Math.imul(w, he) | 0;
                    h = h + Math.imul(w, ue) | 0;
                    h = h + Math.imul(M, he) | 0;
                    u = u + Math.imul(M, ue) | 0;
                    o = o + Math.imul(y, ce) | 0;
                    h = h + Math.imul(y, le) | 0;
                    h = h + Math.imul(g, ce) | 0;
                    u = u + Math.imul(g, le) | 0;
                    o = o + Math.imul(v, ve) | 0;
                    h = h + Math.imul(v, be) | 0;
                    h = h + Math.imul(b, ve) | 0;
                    u = u + Math.imul(b, be) | 0;
                    o = o + Math.imul(c, ye) | 0;
                    h = h + Math.imul(c, ge) | 0;
                    h = h + Math.imul(l, ye) | 0;
                    u = u + Math.imul(l, ge) | 0;
                    var Re = (s + o | 0) + ((h & 8191) << 13) | 0;
                    s = (u + (h >>> 13) | 0) + (Re >>> 26) | 0;
                    Re &= 67108863;
                    o = Math.imul(z, J);
                    h = Math.imul(z, Z);
                    h = h + Math.imul(F, J) | 0;
                    u = Math.imul(F, Z);
                    o = o + Math.imul(O, Y) | 0;
                    h = h + Math.imul(O, $) | 0;
                    h = h + Math.imul(H, Y) | 0;
                    u = u + Math.imul(H, $) | 0;
                    o = o + Math.imul(T, ee) | 0;
                    h = h + Math.imul(T, te) | 0;
                    h = h + Math.imul(j, ee) | 0;
                    u = u + Math.imul(j, te) | 0;
                    o = o + Math.imul(I, ie) | 0;
                    h = h + Math.imul(I, ne) | 0;
                    h = h + Math.imul(C, ie) | 0;
                    u = u + Math.imul(C, ne) | 0;
                    o = o + Math.imul(N, fe) | 0;
                    h = h + Math.imul(N, se) | 0;
                    h = h + Math.imul(P, fe) | 0;
                    u = u + Math.imul(P, se) | 0;
                    o = o + Math.imul(E, he) | 0;
                    h = h + Math.imul(E, ue) | 0;
                    h = h + Math.imul(k, he) | 0;
                    u = u + Math.imul(k, ue) | 0;
                    o = o + Math.imul(w, ce) | 0;
                    h = h + Math.imul(w, le) | 0;
                    h = h + Math.imul(M, ce) | 0;
                    u = u + Math.imul(M, le) | 0;
                    o = o + Math.imul(y, ve) | 0;
                    h = h + Math.imul(y, be) | 0;
                    h = h + Math.imul(g, ve) | 0;
                    u = u + Math.imul(g, be) | 0;
                    o = o + Math.imul(v, ye) | 0;
                    h = h + Math.imul(v, ge) | 0;
                    h = h + Math.imul(b, ye) | 0;
                    u = u + Math.imul(b, ge) | 0;
                    var Pe = (s + o | 0) + ((h & 8191) << 13) | 0;
                    s = (u + (h >>> 13) | 0) + (Pe >>> 26) | 0;
                    Pe &= 67108863;
                    o = Math.imul(z, Y);
                    h = Math.imul(z, $);
                    h = h + Math.imul(F, Y) | 0;
                    u = Math.imul(F, $);
                    o = o + Math.imul(O, ee) | 0;
                    h = h + Math.imul(O, te) | 0;
                    h = h + Math.imul(H, ee) | 0;
                    u = u + Math.imul(H, te) | 0;
                    o = o + Math.imul(T, ie) | 0;
                    h = h + Math.imul(T, ne) | 0;
                    h = h + Math.imul(j, ie) | 0;
                    u = u + Math.imul(j, ne) | 0;
                    o = o + Math.imul(I, fe) | 0;
                    h = h + Math.imul(I, se) | 0;
                    h = h + Math.imul(C, fe) | 0;
                    u = u + Math.imul(C, se) | 0;
                    o = o + Math.imul(N, he) | 0;
                    h = h + Math.imul(N, ue) | 0;
                    h = h + Math.imul(P, he) | 0;
                    u = u + Math.imul(P, ue) | 0;
                    o = o + Math.imul(E, ce) | 0;
                    h = h + Math.imul(E, le) | 0;
                    h = h + Math.imul(k, ce) | 0;
                    u = u + Math.imul(k, le) | 0;
                    o = o + Math.imul(w, ve) | 0;
                    h = h + Math.imul(w, be) | 0;
                    h = h + Math.imul(M, ve) | 0;
                    u = u + Math.imul(M, be) | 0;
                    o = o + Math.imul(y, ye) | 0;
                    h = h + Math.imul(y, ge) | 0;
                    h = h + Math.imul(g, ye) | 0;
                    u = u + Math.imul(g, ge) | 0;
                    var xe = (s + o | 0) + ((h & 8191) << 13) | 0;
                    s = (u + (h >>> 13) | 0) + (xe >>> 26) | 0;
                    xe &= 67108863;
                    o = Math.imul(z, ee);
                    h = Math.imul(z, te);
                    h = h + Math.imul(F, ee) | 0;
                    u = Math.imul(F, te);
                    o = o + Math.imul(O, ie) | 0;
                    h = h + Math.imul(O, ne) | 0;
                    h = h + Math.imul(H, ie) | 0;
                    u = u + Math.imul(H, ne) | 0;
                    o = o + Math.imul(T, fe) | 0;
                    h = h + Math.imul(T, se) | 0;
                    h = h + Math.imul(j, fe) | 0;
                    u = u + Math.imul(j, se) | 0;
                    o = o + Math.imul(I, he) | 0;
                    h = h + Math.imul(I, ue) | 0;
                    h = h + Math.imul(C, he) | 0;
                    u = u + Math.imul(C, ue) | 0;
                    o = o + Math.imul(N, ce) | 0;
                    h = h + Math.imul(N, le) | 0;
                    h = h + Math.imul(P, ce) | 0;
                    u = u + Math.imul(P, le) | 0;
                    o = o + Math.imul(E, ve) | 0;
                    h = h + Math.imul(E, be) | 0;
                    h = h + Math.imul(k, ve) | 0;
                    u = u + Math.imul(k, be) | 0;
                    o = o + Math.imul(w, ye) | 0;
                    h = h + Math.imul(w, ge) | 0;
                    h = h + Math.imul(M, ye) | 0;
                    u = u + Math.imul(M, ge) | 0;
                    var Ie = (s + o | 0) + ((h & 8191) << 13) | 0;
                    s = (u + (h >>> 13) | 0) + (Ie >>> 26) | 0;
                    Ie &= 67108863;
                    o = Math.imul(z, ie);
                    h = Math.imul(z, ne);
                    h = h + Math.imul(F, ie) | 0;
                    u = Math.imul(F, ne);
                    o = o + Math.imul(O, fe) | 0;
                    h = h + Math.imul(O, se) | 0;
                    h = h + Math.imul(H, fe) | 0;
                    u = u + Math.imul(H, se) | 0;
                    o = o + Math.imul(T, he) | 0;
                    h = h + Math.imul(T, ue) | 0;
                    h = h + Math.imul(j, he) | 0;
                    u = u + Math.imul(j, ue) | 0;
                    o = o + Math.imul(I, ce) | 0;
                    h = h + Math.imul(I, le) | 0;
                    h = h + Math.imul(C, ce) | 0;
                    u = u + Math.imul(C, le) | 0;
                    o = o + Math.imul(N, ve) | 0;
                    h = h + Math.imul(N, be) | 0;
                    h = h + Math.imul(P, ve) | 0;
                    u = u + Math.imul(P, be) | 0;
                    o = o + Math.imul(E, ye) | 0;
                    h = h + Math.imul(E, ge) | 0;
                    h = h + Math.imul(k, ye) | 0;
                    u = u + Math.imul(k, ge) | 0;
                    var Ce = (s + o | 0) + ((h & 8191) << 13) | 0;
                    s = (u + (h >>> 13) | 0) + (Ce >>> 26) | 0;
                    Ce &= 67108863;
                    o = Math.imul(z, fe);
                    h = Math.imul(z, se);
                    h = h + Math.imul(F, fe) | 0;
                    u = Math.imul(F, se);
                    o = o + Math.imul(O, he) | 0;
                    h = h + Math.imul(O, ue) | 0;
                    h = h + Math.imul(H, he) | 0;
                    u = u + Math.imul(H, ue) | 0;
                    o = o + Math.imul(T, ce) | 0;
                    h = h + Math.imul(T, le) | 0;
                    h = h + Math.imul(j, ce) | 0;
                    u = u + Math.imul(j, le) | 0;
                    o = o + Math.imul(I, ve) | 0;
                    h = h + Math.imul(I, be) | 0;
                    h = h + Math.imul(C, ve) | 0;
                    u = u + Math.imul(C, be) | 0;
                    o = o + Math.imul(N, ye) | 0;
                    h = h + Math.imul(N, ge) | 0;
                    h = h + Math.imul(P, ye) | 0;
                    u = u + Math.imul(P, ge) | 0;
                    var De = (s + o | 0) + ((h & 8191) << 13) | 0;
                    s = (u + (h >>> 13) | 0) + (De >>> 26) | 0;
                    De &= 67108863;
                    o = Math.imul(z, he);
                    h = Math.imul(z, ue);
                    h = h + Math.imul(F, he) | 0;
                    u = Math.imul(F, ue);
                    o = o + Math.imul(O, ce) | 0;
                    h = h + Math.imul(O, le) | 0;
                    h = h + Math.imul(H, ce) | 0;
                    u = u + Math.imul(H, le) | 0;
                    o = o + Math.imul(T, ve) | 0;
                    h = h + Math.imul(T, be) | 0;
                    h = h + Math.imul(j, ve) | 0;
                    u = u + Math.imul(j, be) | 0;
                    o = o + Math.imul(I, ye) | 0;
                    h = h + Math.imul(I, ge) | 0;
                    h = h + Math.imul(C, ye) | 0;
                    u = u + Math.imul(C, ge) | 0;
                    var Te = (s + o | 0) + ((h & 8191) << 13) | 0;
                    s = (u + (h >>> 13) | 0) + (Te >>> 26) | 0;
                    Te &= 67108863;
                    o = Math.imul(z, ce);
                    h = Math.imul(z, le);
                    h = h + Math.imul(F, ce) | 0;
                    u = Math.imul(F, le);
                    o = o + Math.imul(O, ve) | 0;
                    h = h + Math.imul(O, be) | 0;
                    h = h + Math.imul(H, ve) | 0;
                    u = u + Math.imul(H, be) | 0;
                    o = o + Math.imul(T, ye) | 0;
                    h = h + Math.imul(T, ge) | 0;
                    h = h + Math.imul(j, ye) | 0;
                    u = u + Math.imul(j, ge) | 0;
                    var je = (s + o | 0) + ((h & 8191) << 13) | 0;
                    s = (u + (h >>> 13) | 0) + (je >>> 26) | 0;
                    je &= 67108863;
                    o = Math.imul(z, ve);
                    h = Math.imul(z, be);
                    h = h + Math.imul(F, ve) | 0;
                    u = Math.imul(F, be);
                    o = o + Math.imul(O, ye) | 0;
                    h = h + Math.imul(O, ge) | 0;
                    h = h + Math.imul(H, ye) | 0;
                    u = u + Math.imul(H, ge) | 0;
                    var qe = (s + o | 0) + ((h & 8191) << 13) | 0;
                    s = (u + (h >>> 13) | 0) + (qe >>> 26) | 0;
                    qe &= 67108863;
                    o = Math.imul(z, ye);
                    h = Math.imul(z, ge);
                    h = h + Math.imul(F, ye) | 0;
                    u = Math.imul(F, ge);
                    var Oe = (s + o | 0) + ((h & 8191) << 13) | 0;
                    s = (u + (h >>> 13) | 0) + (Oe >>> 26) | 0;
                    Oe &= 67108863;
                    a[0] = _e;
                    a[1] = we;
                    a[2] = Me;
                    a[3] = Se;
                    a[4] = Be;
                    a[5] = Ee;
                    a[6] = ke;
                    a[7] = Ae;
                    a[8] = Ne;
                    a[9] = Re;
                    a[10] = Pe;
                    a[11] = xe;
                    a[12] = Ie;
                    a[13] = Ce;
                    a[14] = De;
                    a[15] = Te;
                    a[16] = je;
                    a[17] = qe;
                    a[18] = Oe;
                    if (s !== 0) {
                        a[19] = s;
                        r.length++;
                    }
                    return r;
                };
                if (!Math.imul) {
                    o = smallMulTo;
                }
                function bigMulTo(e, t, r) {
                    r.negative = t.negative ^ e.negative;
                    r.length = e.length + t.length;
                    var i = 0;
                    var n = 0;
                    for(var a = 0; a < r.length - 1; a++){
                        var s = n;
                        n = 0;
                        var o = i & 67108863;
                        var h = Math.min(a, t.length - 1);
                        for(var u = Math.max(0, a - e.length + 1); u <= h; u++){
                            var d = a - u;
                            var c = e.words[d] | 0;
                            var l = t.words[u] | 0;
                            var p = c * l;
                            var v = p & 67108863;
                            s = s + (p / 67108864 | 0) | 0;
                            v = v + o | 0;
                            o = v & 67108863;
                            s = s + (v >>> 26) | 0;
                            n += s >>> 26;
                            s &= 67108863;
                        }
                        r.words[a] = o;
                        i = s;
                        s = n;
                    }
                    if (i !== 0) {
                        r.words[a] = i;
                    } else {
                        r.length--;
                    }
                    return r.strip();
                }
                function jumboMulTo(e, t, r) {
                    var i = new FFTM;
                    return i.mulp(e, t, r);
                }
                BN.prototype.mulTo = function mulTo(e, t) {
                    var r;
                    var i = this.length + e.length;
                    if (this.length === 10 && e.length === 10) {
                        r = o(this, e, t);
                    } else if (i < 63) {
                        r = smallMulTo(this, e, t);
                    } else if (i < 1024) {
                        r = bigMulTo(this, e, t);
                    } else {
                        r = jumboMulTo(this, e, t);
                    }
                    return r;
                };
                function FFTM(e, t) {
                    this.x = e;
                    this.y = t;
                }
                FFTM.prototype.makeRBT = function makeRBT(e) {
                    var t = new Array(e);
                    var r = BN.prototype._countBits(e) - 1;
                    for(var i = 0; i < e; i++){
                        t[i] = this.revBin(i, r, e);
                    }
                    return t;
                };
                FFTM.prototype.revBin = function revBin(e, t, r) {
                    if (e === 0 || e === r - 1) return e;
                    var i = 0;
                    for(var n = 0; n < t; n++){
                        i |= (e & 1) << t - n - 1;
                        e >>= 1;
                    }
                    return i;
                };
                FFTM.prototype.permute = function permute(e, t, r, i, n, a) {
                    for(var s = 0; s < a; s++){
                        i[s] = t[e[s]];
                        n[s] = r[e[s]];
                    }
                };
                FFTM.prototype.transform = function transform(e, t, r, i, n, a) {
                    this.permute(a, e, t, r, i, n);
                    for(var s = 1; s < n; s <<= 1){
                        var o = s << 1;
                        var h = Math.cos(2 * Math.PI / o);
                        var u = Math.sin(2 * Math.PI / o);
                        for(var d = 0; d < n; d += o){
                            var c = h;
                            var l = u;
                            for(var p = 0; p < s; p++){
                                var v = r[d + p];
                                var b = i[d + p];
                                var m = r[d + p + s];
                                var y = i[d + p + s];
                                var g = c * m - l * y;
                                y = c * y + l * m;
                                m = g;
                                r[d + p] = v + m;
                                i[d + p] = b + y;
                                r[d + p + s] = v - m;
                                i[d + p + s] = b - y;
                                if (p !== o) {
                                    g = h * c - u * l;
                                    l = h * l + u * c;
                                    c = g;
                                }
                            }
                        }
                    }
                };
                FFTM.prototype.guessLen13b = function guessLen13b(e, t) {
                    var r = Math.max(t, e) | 1;
                    var i = r & 1;
                    var n = 0;
                    for(r = r / 2 | 0; r; r = r >>> 1){
                        n++;
                    }
                    return 1 << n + 1 + i;
                };
                FFTM.prototype.conjugate = function conjugate(e, t, r) {
                    if (r <= 1) return;
                    for(var i = 0; i < r / 2; i++){
                        var n = e[i];
                        e[i] = e[r - i - 1];
                        e[r - i - 1] = n;
                        n = t[i];
                        t[i] = -t[r - i - 1];
                        t[r - i - 1] = -n;
                    }
                };
                FFTM.prototype.normalize13b = function normalize13b(e, t) {
                    var r = 0;
                    for(var i = 0; i < t / 2; i++){
                        var n = Math.round(e[2 * i + 1] / t) * 8192 + Math.round(e[2 * i] / t) + r;
                        e[i] = n & 67108863;
                        if (n < 67108864) {
                            r = 0;
                        } else {
                            r = n / 67108864 | 0;
                        }
                    }
                    return e;
                };
                FFTM.prototype.convert13b = function convert13b(e, t, r, i) {
                    var n = 0;
                    for(var a = 0; a < t; a++){
                        n = n + (e[a] | 0);
                        r[2 * a] = n & 8191;
                        n = n >>> 13;
                        r[2 * a + 1] = n & 8191;
                        n = n >>> 13;
                    }
                    for(a = 2 * t; a < i; ++a){
                        r[a] = 0;
                    }
                    assert(n === 0);
                    assert((n & ~8191) === 0);
                };
                FFTM.prototype.stub = function stub(e) {
                    var t = new Array(e);
                    for(var r = 0; r < e; r++){
                        t[r] = 0;
                    }
                    return t;
                };
                FFTM.prototype.mulp = function mulp(e, t, r) {
                    var i = 2 * this.guessLen13b(e.length, t.length);
                    var n = this.makeRBT(i);
                    var a = this.stub(i);
                    var s = new Array(i);
                    var o = new Array(i);
                    var h = new Array(i);
                    var u = new Array(i);
                    var d = new Array(i);
                    var c = new Array(i);
                    var l = r.words;
                    l.length = i;
                    this.convert13b(e.words, e.length, s, i);
                    this.convert13b(t.words, t.length, u, i);
                    this.transform(s, a, o, h, i, n);
                    this.transform(u, a, d, c, i, n);
                    for(var p = 0; p < i; p++){
                        var v = o[p] * d[p] - h[p] * c[p];
                        h[p] = o[p] * c[p] + h[p] * d[p];
                        o[p] = v;
                    }
                    this.conjugate(o, h, i);
                    this.transform(o, h, l, a, i, n);
                    this.conjugate(l, a, i);
                    this.normalize13b(l, i);
                    r.negative = e.negative ^ t.negative;
                    r.length = e.length + t.length;
                    return r.strip();
                };
                BN.prototype.mul = function mul(e) {
                    var t = new BN(null);
                    t.words = new Array(this.length + e.length);
                    return this.mulTo(e, t);
                };
                BN.prototype.mulf = function mulf(e) {
                    var t = new BN(null);
                    t.words = new Array(this.length + e.length);
                    return jumboMulTo(this, e, t);
                };
                BN.prototype.imul = function imul(e) {
                    return this.clone().mulTo(e, this);
                };
                BN.prototype.imuln = function imuln(e) {
                    assert(typeof e === "number");
                    assert(e < 67108864);
                    var t = 0;
                    for(var r = 0; r < this.length; r++){
                        var i = (this.words[r] | 0) * e;
                        var n = (i & 67108863) + (t & 67108863);
                        t >>= 26;
                        t += i / 67108864 | 0;
                        t += n >>> 26;
                        this.words[r] = n & 67108863;
                    }
                    if (t !== 0) {
                        this.words[r] = t;
                        this.length++;
                    }
                    return this;
                };
                BN.prototype.muln = function muln(e) {
                    return this.clone().imuln(e);
                };
                BN.prototype.sqr = function sqr() {
                    return this.mul(this);
                };
                BN.prototype.isqr = function isqr() {
                    return this.imul(this.clone());
                };
                BN.prototype.pow = function pow(e) {
                    var t = toBitArray(e);
                    if (t.length === 0) return new BN(1);
                    var r = this;
                    for(var i = 0; i < t.length; i++, r = r.sqr()){
                        if (t[i] !== 0) break;
                    }
                    if (++i < t.length) {
                        for(var n = r.sqr(); i < t.length; i++, n = n.sqr()){
                            if (t[i] === 0) continue;
                            r = r.mul(n);
                        }
                    }
                    return r;
                };
                BN.prototype.iushln = function iushln(e) {
                    assert(typeof e === "number" && e >= 0);
                    var t = e % 26;
                    var r = (e - t) / 26;
                    var i = 67108863 >>> 26 - t << 26 - t;
                    var n;
                    if (t !== 0) {
                        var a = 0;
                        for(n = 0; n < this.length; n++){
                            var s = this.words[n] & i;
                            var o = (this.words[n] | 0) - s << t;
                            this.words[n] = o | a;
                            a = s >>> 26 - t;
                        }
                        if (a) {
                            this.words[n] = a;
                            this.length++;
                        }
                    }
                    if (r !== 0) {
                        for(n = this.length - 1; n >= 0; n--){
                            this.words[n + r] = this.words[n];
                        }
                        for(n = 0; n < r; n++){
                            this.words[n] = 0;
                        }
                        this.length += r;
                    }
                    return this.strip();
                };
                BN.prototype.ishln = function ishln(e) {
                    assert(this.negative === 0);
                    return this.iushln(e);
                };
                BN.prototype.iushrn = function iushrn(e, t, r) {
                    assert(typeof e === "number" && e >= 0);
                    var i;
                    if (t) {
                        i = (t - t % 26) / 26;
                    } else {
                        i = 0;
                    }
                    var n = e % 26;
                    var a = Math.min((e - n) / 26, this.length);
                    var s = 67108863 ^ 67108863 >>> n << n;
                    var o = r;
                    i -= a;
                    i = Math.max(0, i);
                    if (o) {
                        for(var h = 0; h < a; h++){
                            o.words[h] = this.words[h];
                        }
                        o.length = a;
                    }
                    if (a === 0) {} else if (this.length > a) {
                        this.length -= a;
                        for(h = 0; h < this.length; h++){
                            this.words[h] = this.words[h + a];
                        }
                    } else {
                        this.words[0] = 0;
                        this.length = 1;
                    }
                    var u = 0;
                    for(h = this.length - 1; h >= 0 && (u !== 0 || h >= i); h--){
                        var d = this.words[h] | 0;
                        this.words[h] = u << 26 - n | d >>> n;
                        u = d & s;
                    }
                    if (o && u !== 0) {
                        o.words[o.length++] = u;
                    }
                    if (this.length === 0) {
                        this.words[0] = 0;
                        this.length = 1;
                    }
                    return this.strip();
                };
                BN.prototype.ishrn = function ishrn(e, t, r) {
                    assert(this.negative === 0);
                    return this.iushrn(e, t, r);
                };
                BN.prototype.shln = function shln(e) {
                    return this.clone().ishln(e);
                };
                BN.prototype.ushln = function ushln(e) {
                    return this.clone().iushln(e);
                };
                BN.prototype.shrn = function shrn(e) {
                    return this.clone().ishrn(e);
                };
                BN.prototype.ushrn = function ushrn(e) {
                    return this.clone().iushrn(e);
                };
                BN.prototype.testn = function testn(e) {
                    assert(typeof e === "number" && e >= 0);
                    var t = e % 26;
                    var r = (e - t) / 26;
                    var i = 1 << t;
                    if (this.length <= r) return false;
                    var n = this.words[r];
                    return !!(n & i);
                };
                BN.prototype.imaskn = function imaskn(e) {
                    assert(typeof e === "number" && e >= 0);
                    var t = e % 26;
                    var r = (e - t) / 26;
                    assert(this.negative === 0, "imaskn works only with positive numbers");
                    if (this.length <= r) {
                        return this;
                    }
                    if (t !== 0) {
                        r++;
                    }
                    this.length = Math.min(r, this.length);
                    if (t !== 0) {
                        var i = 67108863 ^ 67108863 >>> t << t;
                        this.words[this.length - 1] &= i;
                    }
                    return this.strip();
                };
                BN.prototype.maskn = function maskn(e) {
                    return this.clone().imaskn(e);
                };
                BN.prototype.iaddn = function iaddn(e) {
                    assert(typeof e === "number");
                    assert(e < 67108864);
                    if (e < 0) return this.isubn(-e);
                    if (this.negative !== 0) {
                        if (this.length === 1 && (this.words[0] | 0) < e) {
                            this.words[0] = e - (this.words[0] | 0);
                            this.negative = 0;
                            return this;
                        }
                        this.negative = 0;
                        this.isubn(e);
                        this.negative = 1;
                        return this;
                    }
                    return this._iaddn(e);
                };
                BN.prototype._iaddn = function _iaddn(e) {
                    this.words[0] += e;
                    for(var t = 0; t < this.length && this.words[t] >= 67108864; t++){
                        this.words[t] -= 67108864;
                        if (t === this.length - 1) {
                            this.words[t + 1] = 1;
                        } else {
                            this.words[t + 1]++;
                        }
                    }
                    this.length = Math.max(this.length, t + 1);
                    return this;
                };
                BN.prototype.isubn = function isubn(e) {
                    assert(typeof e === "number");
                    assert(e < 67108864);
                    if (e < 0) return this.iaddn(-e);
                    if (this.negative !== 0) {
                        this.negative = 0;
                        this.iaddn(e);
                        this.negative = 1;
                        return this;
                    }
                    this.words[0] -= e;
                    if (this.length === 1 && this.words[0] < 0) {
                        this.words[0] = -this.words[0];
                        this.negative = 1;
                    } else {
                        for(var t = 0; t < this.length && this.words[t] < 0; t++){
                            this.words[t] += 67108864;
                            this.words[t + 1] -= 1;
                        }
                    }
                    return this.strip();
                };
                BN.prototype.addn = function addn(e) {
                    return this.clone().iaddn(e);
                };
                BN.prototype.subn = function subn(e) {
                    return this.clone().isubn(e);
                };
                BN.prototype.iabs = function iabs() {
                    this.negative = 0;
                    return this;
                };
                BN.prototype.abs = function abs() {
                    return this.clone().iabs();
                };
                BN.prototype._ishlnsubmul = function _ishlnsubmul(e, t, r) {
                    var i = e.length + r;
                    var n;
                    this._expand(i);
                    var a;
                    var s = 0;
                    for(n = 0; n < e.length; n++){
                        a = (this.words[n + r] | 0) + s;
                        var o = (e.words[n] | 0) * t;
                        a -= o & 67108863;
                        s = (a >> 26) - (o / 67108864 | 0);
                        this.words[n + r] = a & 67108863;
                    }
                    for(; n < this.length - r; n++){
                        a = (this.words[n + r] | 0) + s;
                        s = a >> 26;
                        this.words[n + r] = a & 67108863;
                    }
                    if (s === 0) return this.strip();
                    assert(s === -1);
                    s = 0;
                    for(n = 0; n < this.length; n++){
                        a = -(this.words[n] | 0) + s;
                        s = a >> 26;
                        this.words[n] = a & 67108863;
                    }
                    this.negative = 1;
                    return this.strip();
                };
                BN.prototype._wordDiv = function _wordDiv(e, t) {
                    var r = this.length - e.length;
                    var i = this.clone();
                    var n = e;
                    var a = n.words[n.length - 1] | 0;
                    var s = this._countBits(a);
                    r = 26 - s;
                    if (r !== 0) {
                        n = n.ushln(r);
                        i.iushln(r);
                        a = n.words[n.length - 1] | 0;
                    }
                    var o = i.length - n.length;
                    var h;
                    if (t !== "mod") {
                        h = new BN(null);
                        h.length = o + 1;
                        h.words = new Array(h.length);
                        for(var u = 0; u < h.length; u++){
                            h.words[u] = 0;
                        }
                    }
                    var d = i.clone()._ishlnsubmul(n, 1, o);
                    if (d.negative === 0) {
                        i = d;
                        if (h) {
                            h.words[o] = 1;
                        }
                    }
                    for(var c = o - 1; c >= 0; c--){
                        var l = (i.words[n.length + c] | 0) * 67108864 + (i.words[n.length + c - 1] | 0);
                        l = Math.min(l / a | 0, 67108863);
                        i._ishlnsubmul(n, l, c);
                        while(i.negative !== 0){
                            l--;
                            i.negative = 0;
                            i._ishlnsubmul(n, 1, c);
                            if (!i.isZero()) {
                                i.negative ^= 1;
                            }
                        }
                        if (h) {
                            h.words[c] = l;
                        }
                    }
                    if (h) {
                        h.strip();
                    }
                    i.strip();
                    if (t !== "div" && r !== 0) {
                        i.iushrn(r);
                    }
                    return {
                        div: h || null,
                        mod: i
                    };
                };
                BN.prototype.divmod = function divmod(e, t, r) {
                    assert(!e.isZero());
                    if (this.isZero()) {
                        return {
                            div: new BN(0),
                            mod: new BN(0)
                        };
                    }
                    var i, n, a;
                    if (this.negative !== 0 && e.negative === 0) {
                        a = this.neg().divmod(e, t);
                        if (t !== "mod") {
                            i = a.div.neg();
                        }
                        if (t !== "div") {
                            n = a.mod.neg();
                            if (r && n.negative !== 0) {
                                n.iadd(e);
                            }
                        }
                        return {
                            div: i,
                            mod: n
                        };
                    }
                    if (this.negative === 0 && e.negative !== 0) {
                        a = this.divmod(e.neg(), t);
                        if (t !== "mod") {
                            i = a.div.neg();
                        }
                        return {
                            div: i,
                            mod: a.mod
                        };
                    }
                    if ((this.negative & e.negative) !== 0) {
                        a = this.neg().divmod(e.neg(), t);
                        if (t !== "div") {
                            n = a.mod.neg();
                            if (r && n.negative !== 0) {
                                n.isub(e);
                            }
                        }
                        return {
                            div: a.div,
                            mod: n
                        };
                    }
                    if (e.length > this.length || this.cmp(e) < 0) {
                        return {
                            div: new BN(0),
                            mod: this
                        };
                    }
                    if (e.length === 1) {
                        if (t === "div") {
                            return {
                                div: this.divn(e.words[0]),
                                mod: null
                            };
                        }
                        if (t === "mod") {
                            return {
                                div: null,
                                mod: new BN(this.modn(e.words[0]))
                            };
                        }
                        return {
                            div: this.divn(e.words[0]),
                            mod: new BN(this.modn(e.words[0]))
                        };
                    }
                    return this._wordDiv(e, t);
                };
                BN.prototype.div = function div(e) {
                    return this.divmod(e, "div", false).div;
                };
                BN.prototype.mod = function mod(e) {
                    return this.divmod(e, "mod", false).mod;
                };
                BN.prototype.umod = function umod(e) {
                    return this.divmod(e, "mod", true).mod;
                };
                BN.prototype.divRound = function divRound(e) {
                    var t = this.divmod(e);
                    if (t.mod.isZero()) return t.div;
                    var r = t.div.negative !== 0 ? t.mod.isub(e) : t.mod;
                    var i = e.ushrn(1);
                    var n = e.andln(1);
                    var a = r.cmp(i);
                    if (a < 0 || n === 1 && a === 0) return t.div;
                    return t.div.negative !== 0 ? t.div.isubn(1) : t.div.iaddn(1);
                };
                BN.prototype.modn = function modn(e) {
                    assert(e <= 67108863);
                    var t = (1 << 26) % e;
                    var r = 0;
                    for(var i = this.length - 1; i >= 0; i--){
                        r = (t * r + (this.words[i] | 0)) % e;
                    }
                    return r;
                };
                BN.prototype.idivn = function idivn(e) {
                    assert(e <= 67108863);
                    var t = 0;
                    for(var r = this.length - 1; r >= 0; r--){
                        var i = (this.words[r] | 0) + t * 67108864;
                        this.words[r] = i / e | 0;
                        t = i % e;
                    }
                    return this.strip();
                };
                BN.prototype.divn = function divn(e) {
                    return this.clone().idivn(e);
                };
                BN.prototype.egcd = function egcd(e) {
                    assert(e.negative === 0);
                    assert(!e.isZero());
                    var t = this;
                    var r = e.clone();
                    if (t.negative !== 0) {
                        t = t.umod(e);
                    } else {
                        t = t.clone();
                    }
                    var i = new BN(1);
                    var n = new BN(0);
                    var a = new BN(0);
                    var s = new BN(1);
                    var o = 0;
                    while(t.isEven() && r.isEven()){
                        t.iushrn(1);
                        r.iushrn(1);
                        ++o;
                    }
                    var h = r.clone();
                    var u = t.clone();
                    while(!t.isZero()){
                        for(var d = 0, c = 1; (t.words[0] & c) === 0 && d < 26; ++d, c <<= 1);
                        if (d > 0) {
                            t.iushrn(d);
                            while(d-- > 0){
                                if (i.isOdd() || n.isOdd()) {
                                    i.iadd(h);
                                    n.isub(u);
                                }
                                i.iushrn(1);
                                n.iushrn(1);
                            }
                        }
                        for(var l = 0, p = 1; (r.words[0] & p) === 0 && l < 26; ++l, p <<= 1);
                        if (l > 0) {
                            r.iushrn(l);
                            while(l-- > 0){
                                if (a.isOdd() || s.isOdd()) {
                                    a.iadd(h);
                                    s.isub(u);
                                }
                                a.iushrn(1);
                                s.iushrn(1);
                            }
                        }
                        if (t.cmp(r) >= 0) {
                            t.isub(r);
                            i.isub(a);
                            n.isub(s);
                        } else {
                            r.isub(t);
                            a.isub(i);
                            s.isub(n);
                        }
                    }
                    return {
                        a: a,
                        b: s,
                        gcd: r.iushln(o)
                    };
                };
                BN.prototype._invmp = function _invmp(e) {
                    assert(e.negative === 0);
                    assert(!e.isZero());
                    var t = this;
                    var r = e.clone();
                    if (t.negative !== 0) {
                        t = t.umod(e);
                    } else {
                        t = t.clone();
                    }
                    var i = new BN(1);
                    var n = new BN(0);
                    var a = r.clone();
                    while(t.cmpn(1) > 0 && r.cmpn(1) > 0){
                        for(var s = 0, o = 1; (t.words[0] & o) === 0 && s < 26; ++s, o <<= 1);
                        if (s > 0) {
                            t.iushrn(s);
                            while(s-- > 0){
                                if (i.isOdd()) {
                                    i.iadd(a);
                                }
                                i.iushrn(1);
                            }
                        }
                        for(var h = 0, u = 1; (r.words[0] & u) === 0 && h < 26; ++h, u <<= 1);
                        if (h > 0) {
                            r.iushrn(h);
                            while(h-- > 0){
                                if (n.isOdd()) {
                                    n.iadd(a);
                                }
                                n.iushrn(1);
                            }
                        }
                        if (t.cmp(r) >= 0) {
                            t.isub(r);
                            i.isub(n);
                        } else {
                            r.isub(t);
                            n.isub(i);
                        }
                    }
                    var d;
                    if (t.cmpn(1) === 0) {
                        d = i;
                    } else {
                        d = n;
                    }
                    if (d.cmpn(0) < 0) {
                        d.iadd(e);
                    }
                    return d;
                };
                BN.prototype.gcd = function gcd(e) {
                    if (this.isZero()) return e.abs();
                    if (e.isZero()) return this.abs();
                    var t = this.clone();
                    var r = e.clone();
                    t.negative = 0;
                    r.negative = 0;
                    for(var i = 0; t.isEven() && r.isEven(); i++){
                        t.iushrn(1);
                        r.iushrn(1);
                    }
                    do {
                        while(t.isEven()){
                            t.iushrn(1);
                        }
                        while(r.isEven()){
                            r.iushrn(1);
                        }
                        var n = t.cmp(r);
                        if (n < 0) {
                            var a = t;
                            t = r;
                            r = a;
                        } else if (n === 0 || r.cmpn(1) === 0) {
                            break;
                        }
                        t.isub(r);
                    }while (true)
                    return r.iushln(i);
                };
                BN.prototype.invm = function invm(e) {
                    return this.egcd(e).a.umod(e);
                };
                BN.prototype.isEven = function isEven() {
                    return (this.words[0] & 1) === 0;
                };
                BN.prototype.isOdd = function isOdd() {
                    return (this.words[0] & 1) === 1;
                };
                BN.prototype.andln = function andln(e) {
                    return this.words[0] & e;
                };
                BN.prototype.bincn = function bincn(e) {
                    assert(typeof e === "number");
                    var t = e % 26;
                    var r = (e - t) / 26;
                    var i = 1 << t;
                    if (this.length <= r) {
                        this._expand(r + 1);
                        this.words[r] |= i;
                        return this;
                    }
                    var n = i;
                    for(var a = r; n !== 0 && a < this.length; a++){
                        var s = this.words[a] | 0;
                        s += n;
                        n = s >>> 26;
                        s &= 67108863;
                        this.words[a] = s;
                    }
                    if (n !== 0) {
                        this.words[a] = n;
                        this.length++;
                    }
                    return this;
                };
                BN.prototype.isZero = function isZero() {
                    return this.length === 1 && this.words[0] === 0;
                };
                BN.prototype.cmpn = function cmpn(e) {
                    var t = e < 0;
                    if (this.negative !== 0 && !t) return -1;
                    if (this.negative === 0 && t) return 1;
                    this.strip();
                    var r;
                    if (this.length > 1) {
                        r = 1;
                    } else {
                        if (t) {
                            e = -e;
                        }
                        assert(e <= 67108863, "Number is too big");
                        var i = this.words[0] | 0;
                        r = i === e ? 0 : i < e ? -1 : 1;
                    }
                    if (this.negative !== 0) return -r | 0;
                    return r;
                };
                BN.prototype.cmp = function cmp(e) {
                    if (this.negative !== 0 && e.negative === 0) return -1;
                    if (this.negative === 0 && e.negative !== 0) return 1;
                    var t = this.ucmp(e);
                    if (this.negative !== 0) return -t | 0;
                    return t;
                };
                BN.prototype.ucmp = function ucmp(e) {
                    if (this.length > e.length) return 1;
                    if (this.length < e.length) return -1;
                    var t = 0;
                    for(var r = this.length - 1; r >= 0; r--){
                        var i = this.words[r] | 0;
                        var n = e.words[r] | 0;
                        if (i === n) continue;
                        if (i < n) {
                            t = -1;
                        } else if (i > n) {
                            t = 1;
                        }
                        break;
                    }
                    return t;
                };
                BN.prototype.gtn = function gtn(e) {
                    return this.cmpn(e) === 1;
                };
                BN.prototype.gt = function gt(e) {
                    return this.cmp(e) === 1;
                };
                BN.prototype.gten = function gten(e) {
                    return this.cmpn(e) >= 0;
                };
                BN.prototype.gte = function gte(e) {
                    return this.cmp(e) >= 0;
                };
                BN.prototype.ltn = function ltn(e) {
                    return this.cmpn(e) === -1;
                };
                BN.prototype.lt = function lt(e) {
                    return this.cmp(e) === -1;
                };
                BN.prototype.lten = function lten(e) {
                    return this.cmpn(e) <= 0;
                };
                BN.prototype.lte = function lte(e) {
                    return this.cmp(e) <= 0;
                };
                BN.prototype.eqn = function eqn(e) {
                    return this.cmpn(e) === 0;
                };
                BN.prototype.eq = function eq(e) {
                    return this.cmp(e) === 0;
                };
                BN.red = function red(e) {
                    return new Red(e);
                };
                BN.prototype.toRed = function toRed(e) {
                    assert(!this.red, "Already a number in reduction context");
                    assert(this.negative === 0, "red works only with positives");
                    return e.convertTo(this)._forceRed(e);
                };
                BN.prototype.fromRed = function fromRed() {
                    assert(this.red, "fromRed works only with numbers in reduction context");
                    return this.red.convertFrom(this);
                };
                BN.prototype._forceRed = function _forceRed(e) {
                    this.red = e;
                    return this;
                };
                BN.prototype.forceRed = function forceRed(e) {
                    assert(!this.red, "Already a number in reduction context");
                    return this._forceRed(e);
                };
                BN.prototype.redAdd = function redAdd(e) {
                    assert(this.red, "redAdd works only with red numbers");
                    return this.red.add(this, e);
                };
                BN.prototype.redIAdd = function redIAdd(e) {
                    assert(this.red, "redIAdd works only with red numbers");
                    return this.red.iadd(this, e);
                };
                BN.prototype.redSub = function redSub(e) {
                    assert(this.red, "redSub works only with red numbers");
                    return this.red.sub(this, e);
                };
                BN.prototype.redISub = function redISub(e) {
                    assert(this.red, "redISub works only with red numbers");
                    return this.red.isub(this, e);
                };
                BN.prototype.redShl = function redShl(e) {
                    assert(this.red, "redShl works only with red numbers");
                    return this.red.shl(this, e);
                };
                BN.prototype.redMul = function redMul(e) {
                    assert(this.red, "redMul works only with red numbers");
                    this.red._verify2(this, e);
                    return this.red.mul(this, e);
                };
                BN.prototype.redIMul = function redIMul(e) {
                    assert(this.red, "redMul works only with red numbers");
                    this.red._verify2(this, e);
                    return this.red.imul(this, e);
                };
                BN.prototype.redSqr = function redSqr() {
                    assert(this.red, "redSqr works only with red numbers");
                    this.red._verify1(this);
                    return this.red.sqr(this);
                };
                BN.prototype.redISqr = function redISqr() {
                    assert(this.red, "redISqr works only with red numbers");
                    this.red._verify1(this);
                    return this.red.isqr(this);
                };
                BN.prototype.redSqrt = function redSqrt() {
                    assert(this.red, "redSqrt works only with red numbers");
                    this.red._verify1(this);
                    return this.red.sqrt(this);
                };
                BN.prototype.redInvm = function redInvm() {
                    assert(this.red, "redInvm works only with red numbers");
                    this.red._verify1(this);
                    return this.red.invm(this);
                };
                BN.prototype.redNeg = function redNeg() {
                    assert(this.red, "redNeg works only with red numbers");
                    this.red._verify1(this);
                    return this.red.neg(this);
                };
                BN.prototype.redPow = function redPow(e) {
                    assert(this.red && !e.red, "redPow(normalNum)");
                    this.red._verify1(this);
                    return this.red.pow(this, e);
                };
                var h = {
                    k256: null,
                    p224: null,
                    p192: null,
                    p25519: null
                };
                function MPrime(e, t) {
                    this.name = e;
                    this.p = new BN(t, 16);
                    this.n = this.p.bitLength();
                    this.k = new BN(1).iushln(this.n).isub(this.p);
                    this.tmp = this._tmp();
                }
                MPrime.prototype._tmp = function _tmp() {
                    var e = new BN(null);
                    e.words = new Array(Math.ceil(this.n / 13));
                    return e;
                };
                MPrime.prototype.ireduce = function ireduce(e) {
                    var t = e;
                    var r;
                    do {
                        this.split(t, this.tmp);
                        t = this.imulK(t);
                        t = t.iadd(this.tmp);
                        r = t.bitLength();
                    }while (r > this.n)
                    var i = r < this.n ? -1 : t.ucmp(this.p);
                    if (i === 0) {
                        t.words[0] = 0;
                        t.length = 1;
                    } else if (i > 0) {
                        t.isub(this.p);
                    } else {
                        if (t.strip !== undefined) {
                            t.strip();
                        } else {
                            t._strip();
                        }
                    }
                    return t;
                };
                MPrime.prototype.split = function split(e, t) {
                    e.iushrn(this.n, 0, t);
                };
                MPrime.prototype.imulK = function imulK(e) {
                    return e.imul(this.k);
                };
                function K256() {
                    MPrime.call(this, "k256", "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f");
                }
                inherits(K256, MPrime);
                K256.prototype.split = function split(e, t) {
                    var r = 4194303;
                    var i = Math.min(e.length, 9);
                    for(var n = 0; n < i; n++){
                        t.words[n] = e.words[n];
                    }
                    t.length = i;
                    if (e.length <= 9) {
                        e.words[0] = 0;
                        e.length = 1;
                        return;
                    }
                    var a = e.words[9];
                    t.words[t.length++] = a & r;
                    for(n = 10; n < e.length; n++){
                        var s = e.words[n] | 0;
                        e.words[n - 10] = (s & r) << 4 | a >>> 22;
                        a = s;
                    }
                    a >>>= 22;
                    e.words[n - 10] = a;
                    if (a === 0 && e.length > 10) {
                        e.length -= 10;
                    } else {
                        e.length -= 9;
                    }
                };
                K256.prototype.imulK = function imulK(e) {
                    e.words[e.length] = 0;
                    e.words[e.length + 1] = 0;
                    e.length += 2;
                    var t = 0;
                    for(var r = 0; r < e.length; r++){
                        var i = e.words[r] | 0;
                        t += i * 977;
                        e.words[r] = t & 67108863;
                        t = i * 64 + (t / 67108864 | 0);
                    }
                    if (e.words[e.length - 1] === 0) {
                        e.length--;
                        if (e.words[e.length - 1] === 0) {
                            e.length--;
                        }
                    }
                    return e;
                };
                function P224() {
                    MPrime.call(this, "p224", "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001");
                }
                inherits(P224, MPrime);
                function P192() {
                    MPrime.call(this, "p192", "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff");
                }
                inherits(P192, MPrime);
                function P25519() {
                    MPrime.call(this, "25519", "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed");
                }
                inherits(P25519, MPrime);
                P25519.prototype.imulK = function imulK(e) {
                    var t = 0;
                    for(var r = 0; r < e.length; r++){
                        var i = (e.words[r] | 0) * 19 + t;
                        var n = i & 67108863;
                        i >>>= 26;
                        e.words[r] = n;
                        t = i;
                    }
                    if (t !== 0) {
                        e.words[e.length++] = t;
                    }
                    return e;
                };
                BN._prime = function prime(e) {
                    if (h[e]) return h[e];
                    var prime;
                    if (e === "k256") {
                        prime = new K256;
                    } else if (e === "p224") {
                        prime = new P224;
                    } else if (e === "p192") {
                        prime = new P192;
                    } else if (e === "p25519") {
                        prime = new P25519;
                    } else {
                        throw new Error("Unknown prime " + e);
                    }
                    h[e] = prime;
                    return prime;
                };
                function Red(e) {
                    if (typeof e === "string") {
                        var t = BN._prime(e);
                        this.m = t.p;
                        this.prime = t;
                    } else {
                        assert(e.gtn(1), "modulus must be greater than 1");
                        this.m = e;
                        this.prime = null;
                    }
                }
                Red.prototype._verify1 = function _verify1(e) {
                    assert(e.negative === 0, "red works only with positives");
                    assert(e.red, "red works only with red numbers");
                };
                Red.prototype._verify2 = function _verify2(e, t) {
                    assert((e.negative | t.negative) === 0, "red works only with positives");
                    assert(e.red && e.red === t.red, "red works only with red numbers");
                };
                Red.prototype.imod = function imod(e) {
                    if (this.prime) return this.prime.ireduce(e)._forceRed(this);
                    return e.umod(this.m)._forceRed(this);
                };
                Red.prototype.neg = function neg(e) {
                    if (e.isZero()) {
                        return e.clone();
                    }
                    return this.m.sub(e)._forceRed(this);
                };
                Red.prototype.add = function add(e, t) {
                    this._verify2(e, t);
                    var r = e.add(t);
                    if (r.cmp(this.m) >= 0) {
                        r.isub(this.m);
                    }
                    return r._forceRed(this);
                };
                Red.prototype.iadd = function iadd(e, t) {
                    this._verify2(e, t);
                    var r = e.iadd(t);
                    if (r.cmp(this.m) >= 0) {
                        r.isub(this.m);
                    }
                    return r;
                };
                Red.prototype.sub = function sub(e, t) {
                    this._verify2(e, t);
                    var r = e.sub(t);
                    if (r.cmpn(0) < 0) {
                        r.iadd(this.m);
                    }
                    return r._forceRed(this);
                };
                Red.prototype.isub = function isub(e, t) {
                    this._verify2(e, t);
                    var r = e.isub(t);
                    if (r.cmpn(0) < 0) {
                        r.iadd(this.m);
                    }
                    return r;
                };
                Red.prototype.shl = function shl(e, t) {
                    this._verify1(e);
                    return this.imod(e.ushln(t));
                };
                Red.prototype.imul = function imul(e, t) {
                    this._verify2(e, t);
                    return this.imod(e.imul(t));
                };
                Red.prototype.mul = function mul(e, t) {
                    this._verify2(e, t);
                    return this.imod(e.mul(t));
                };
                Red.prototype.isqr = function isqr(e) {
                    return this.imul(e, e.clone());
                };
                Red.prototype.sqr = function sqr(e) {
                    return this.mul(e, e);
                };
                Red.prototype.sqrt = function sqrt(e) {
                    if (e.isZero()) return e.clone();
                    var t = this.m.andln(3);
                    assert(t % 2 === 1);
                    if (t === 3) {
                        var r = this.m.add(new BN(1)).iushrn(2);
                        return this.pow(e, r);
                    }
                    var i = this.m.subn(1);
                    var n = 0;
                    while(!i.isZero() && i.andln(1) === 0){
                        n++;
                        i.iushrn(1);
                    }
                    assert(!i.isZero());
                    var a = new BN(1).toRed(this);
                    var s = a.redNeg();
                    var o = this.m.subn(1).iushrn(1);
                    var h = this.m.bitLength();
                    h = new BN(2 * h * h).toRed(this);
                    while(this.pow(h, o).cmp(s) !== 0){
                        h.redIAdd(s);
                    }
                    var u = this.pow(h, i);
                    var d = this.pow(e, i.addn(1).iushrn(1));
                    var c = this.pow(e, i);
                    var l = n;
                    while(c.cmp(a) !== 0){
                        var p = c;
                        for(var v = 0; p.cmp(a) !== 0; v++){
                            p = p.redSqr();
                        }
                        assert(v < l);
                        var b = this.pow(u, new BN(1).iushln(l - v - 1));
                        d = d.redMul(b);
                        u = b.redSqr();
                        c = c.redMul(u);
                        l = v;
                    }
                    return d;
                };
                Red.prototype.invm = function invm(e) {
                    var t = e._invmp(this.m);
                    if (t.negative !== 0) {
                        t.negative = 0;
                        return this.imod(t).redNeg();
                    } else {
                        return this.imod(t);
                    }
                };
                Red.prototype.pow = function pow(e, t) {
                    if (t.isZero()) return new BN(1).toRed(this);
                    if (t.cmpn(1) === 0) return e.clone();
                    var r = 4;
                    var i = new Array(1 << r);
                    i[0] = new BN(1).toRed(this);
                    i[1] = e;
                    for(var n = 2; n < i.length; n++){
                        i[n] = this.mul(i[n - 1], e);
                    }
                    var a = i[0];
                    var s = 0;
                    var o = 0;
                    var h = t.bitLength() % 26;
                    if (h === 0) {
                        h = 26;
                    }
                    for(n = t.length - 1; n >= 0; n--){
                        var u = t.words[n];
                        for(var d = h - 1; d >= 0; d--){
                            var c = u >> d & 1;
                            if (a !== i[0]) {
                                a = this.sqr(a);
                            }
                            if (c === 0 && s === 0) {
                                o = 0;
                                continue;
                            }
                            s <<= 1;
                            s |= c;
                            o++;
                            if (o !== r && (n !== 0 || d !== 0)) continue;
                            a = this.mul(a, i[s]);
                            o = 0;
                            s = 0;
                        }
                        h = 26;
                    }
                    return a;
                };
                Red.prototype.convertTo = function convertTo(e) {
                    var t = e.umod(this.m);
                    return t === e ? t.clone() : t;
                };
                Red.prototype.convertFrom = function convertFrom(e) {
                    var t = e.clone();
                    t.red = null;
                    return t;
                };
                BN.mont = function mont(e) {
                    return new Mont(e);
                };
                function Mont(e) {
                    Red.call(this, e);
                    this.shift = this.m.bitLength();
                    if (this.shift % 26 !== 0) {
                        this.shift += 26 - this.shift % 26;
                    }
                    this.r = new BN(1).iushln(this.shift);
                    this.r2 = this.imod(this.r.sqr());
                    this.rinv = this.r._invmp(this.m);
                    this.minv = this.rinv.mul(this.r).isubn(1).div(this.m);
                    this.minv = this.minv.umod(this.r);
                    this.minv = this.r.sub(this.minv);
                }
                inherits(Mont, Red);
                Mont.prototype.convertTo = function convertTo(e) {
                    return this.imod(e.ushln(this.shift));
                };
                Mont.prototype.convertFrom = function convertFrom(e) {
                    var t = this.imod(e.mul(this.rinv));
                    t.red = null;
                    return t;
                };
                Mont.prototype.imul = function imul(e, t) {
                    if (e.isZero() || t.isZero()) {
                        e.words[0] = 0;
                        e.length = 1;
                        return e;
                    }
                    var r = e.imul(t);
                    var i = r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m);
                    var n = r.isub(i).iushrn(this.shift);
                    var a = n;
                    if (n.cmp(this.m) >= 0) {
                        a = n.isub(this.m);
                    } else if (n.cmpn(0) < 0) {
                        a = n.iadd(this.m);
                    }
                    return a._forceRed(this);
                };
                Mont.prototype.mul = function mul(e, t) {
                    if (e.isZero() || t.isZero()) return new BN(0)._forceRed(this);
                    var r = e.mul(t);
                    var i = r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m);
                    var n = r.isub(i).iushrn(this.shift);
                    var a = n;
                    if (n.cmp(this.m) >= 0) {
                        a = n.isub(this.m);
                    } else if (n.cmpn(0) < 0) {
                        a = n.iadd(this.m);
                    }
                    return a._forceRed(this);
                };
                Mont.prototype.invm = function invm(e) {
                    var t = this.imod(e._invmp(this.m).mul(this.r2));
                    return t._forceRed(this);
                };
            })(false || e, this);
        },
        1670: function(e, t, r) {
            e = r.nmd(e);
            (function(e, t) {
                "use strict";
                function assert(e, t) {
                    if (!e) throw new Error(t || "Assertion failed");
                }
                function inherits(e, t) {
                    e.super_ = t;
                    var TempCtor = function() {};
                    TempCtor.prototype = t.prototype;
                    e.prototype = new TempCtor;
                    e.prototype.constructor = e;
                }
                function BN(e, t, r) {
                    if (BN.isBN(e)) {
                        return e;
                    }
                    this.negative = 0;
                    this.words = null;
                    this.length = 0;
                    this.red = null;
                    if (e !== null) {
                        if (t === "le" || t === "be") {
                            r = t;
                            t = 10;
                        }
                        this._init(e || 0, t || 10, r || "be");
                    }
                }
                if (typeof e === "object") {
                    e.exports = BN;
                } else {
                    t.BN = BN;
                }
                BN.BN = BN;
                BN.wordSize = 26;
                var i;
                try {
                    i = r(4300).Buffer;
                } catch (e) {}
                BN.isBN = function isBN(e) {
                    if (e instanceof BN) {
                        return true;
                    }
                    return e !== null && typeof e === "object" && e.constructor.wordSize === BN.wordSize && Array.isArray(e.words);
                };
                BN.max = function max(e, t) {
                    if (e.cmp(t) > 0) return e;
                    return t;
                };
                BN.min = function min(e, t) {
                    if (e.cmp(t) < 0) return e;
                    return t;
                };
                BN.prototype._init = function init(e, t, r) {
                    if (typeof e === "number") {
                        return this._initNumber(e, t, r);
                    }
                    if (typeof e === "object") {
                        return this._initArray(e, t, r);
                    }
                    if (t === "hex") {
                        t = 16;
                    }
                    assert(t === (t | 0) && t >= 2 && t <= 36);
                    e = e.toString().replace(/\s+/g, "");
                    var i = 0;
                    if (e[0] === "-") {
                        i++;
                    }
                    if (t === 16) {
                        this._parseHex(e, i);
                    } else {
                        this._parseBase(e, t, i);
                    }
                    if (e[0] === "-") {
                        this.negative = 1;
                    }
                    this._strip();
                    if (r !== "le") return;
                    this._initArray(this.toArray(), t, r);
                };
                BN.prototype._initNumber = function _initNumber(e, t, r) {
                    if (e < 0) {
                        this.negative = 1;
                        e = -e;
                    }
                    if (e < 67108864) {
                        this.words = [
                            e & 67108863
                        ];
                        this.length = 1;
                    } else if (e < 4503599627370496) {
                        this.words = [
                            e & 67108863,
                            e / 67108864 & 67108863
                        ];
                        this.length = 2;
                    } else {
                        assert(e < 9007199254740992);
                        this.words = [
                            e & 67108863,
                            e / 67108864 & 67108863,
                            1
                        ];
                        this.length = 3;
                    }
                    if (r !== "le") return;
                    this._initArray(this.toArray(), t, r);
                };
                BN.prototype._initArray = function _initArray(e, t, r) {
                    assert(typeof e.length === "number");
                    if (e.length <= 0) {
                        this.words = [
                            0
                        ];
                        this.length = 1;
                        return this;
                    }
                    this.length = Math.ceil(e.length / 3);
                    this.words = new Array(this.length);
                    for(var i = 0; i < this.length; i++){
                        this.words[i] = 0;
                    }
                    var n, a;
                    var s = 0;
                    if (r === "be") {
                        for(i = e.length - 1, n = 0; i >= 0; i -= 3){
                            a = e[i] | e[i - 1] << 8 | e[i - 2] << 16;
                            this.words[n] |= a << s & 67108863;
                            this.words[n + 1] = a >>> 26 - s & 67108863;
                            s += 24;
                            if (s >= 26) {
                                s -= 26;
                                n++;
                            }
                        }
                    } else if (r === "le") {
                        for(i = 0, n = 0; i < e.length; i += 3){
                            a = e[i] | e[i + 1] << 8 | e[i + 2] << 16;
                            this.words[n] |= a << s & 67108863;
                            this.words[n + 1] = a >>> 26 - s & 67108863;
                            s += 24;
                            if (s >= 26) {
                                s -= 26;
                                n++;
                            }
                        }
                    }
                    return this._strip();
                };
                function parseHex(e, t, r) {
                    var i = 0;
                    var n = Math.min(e.length, r);
                    var a = 0;
                    for(var s = t; s < n; s++){
                        var o = e.charCodeAt(s) - 48;
                        i <<= 4;
                        var h;
                        if (o >= 49 && o <= 54) {
                            h = o - 49 + 10;
                        } else if (o >= 17 && o <= 22) {
                            h = o - 17 + 10;
                        } else {
                            h = o;
                        }
                        i |= h;
                        a |= h;
                    }
                    assert(!(a & 240), "Invalid character in " + e);
                    return i;
                }
                BN.prototype._parseHex = function _parseHex(e, t) {
                    this.length = Math.ceil((e.length - t) / 6);
                    this.words = new Array(this.length);
                    for(var r = 0; r < this.length; r++){
                        this.words[r] = 0;
                    }
                    var i, n;
                    var a = 0;
                    for(r = e.length - 6, i = 0; r >= t; r -= 6){
                        n = parseHex(e, r, r + 6);
                        this.words[i] |= n << a & 67108863;
                        this.words[i + 1] |= n >>> 26 - a & 4194303;
                        a += 24;
                        if (a >= 26) {
                            a -= 26;
                            i++;
                        }
                    }
                    if (r + 6 !== t) {
                        n = parseHex(e, t, r + 6);
                        this.words[i] |= n << a & 67108863;
                        this.words[i + 1] |= n >>> 26 - a & 4194303;
                    }
                    this._strip();
                };
                function parseBase(e, t, r, i) {
                    var n = 0;
                    var a = 0;
                    var s = Math.min(e.length, r);
                    for(var o = t; o < s; o++){
                        var h = e.charCodeAt(o) - 48;
                        n *= i;
                        if (h >= 49) {
                            a = h - 49 + 10;
                        } else if (h >= 17) {
                            a = h - 17 + 10;
                        } else {
                            a = h;
                        }
                        assert(h >= 0 && a < i, "Invalid character");
                        n += a;
                    }
                    return n;
                }
                BN.prototype._parseBase = function _parseBase(e, t, r) {
                    this.words = [
                        0
                    ];
                    this.length = 1;
                    for(var i = 0, n = 1; n <= 67108863; n *= t){
                        i++;
                    }
                    i--;
                    n = n / t | 0;
                    var a = e.length - r;
                    var s = a % i;
                    var o = Math.min(a, a - s) + r;
                    var h = 0;
                    for(var u = r; u < o; u += i){
                        h = parseBase(e, u, u + i, t);
                        this.imuln(n);
                        if (this.words[0] + h < 67108864) {
                            this.words[0] += h;
                        } else {
                            this._iaddn(h);
                        }
                    }
                    if (s !== 0) {
                        var d = 1;
                        h = parseBase(e, u, e.length, t);
                        for(u = 0; u < s; u++){
                            d *= t;
                        }
                        this.imuln(d);
                        if (this.words[0] + h < 67108864) {
                            this.words[0] += h;
                        } else {
                            this._iaddn(h);
                        }
                    }
                };
                BN.prototype.copy = function copy(e) {
                    e.words = new Array(this.length);
                    for(var t = 0; t < this.length; t++){
                        e.words[t] = this.words[t];
                    }
                    e.length = this.length;
                    e.negative = this.negative;
                    e.red = this.red;
                };
                function move(e, t) {
                    e.words = t.words;
                    e.length = t.length;
                    e.negative = t.negative;
                    e.red = t.red;
                }
                BN.prototype._move = function _move(e) {
                    move(e, this);
                };
                BN.prototype.clone = function clone() {
                    var e = new BN(null);
                    this.copy(e);
                    return e;
                };
                BN.prototype._expand = function _expand(e) {
                    while(this.length < e){
                        this.words[this.length++] = 0;
                    }
                    return this;
                };
                BN.prototype._strip = function strip() {
                    while(this.length > 1 && this.words[this.length - 1] === 0){
                        this.length--;
                    }
                    return this._normSign();
                };
                BN.prototype._normSign = function _normSign() {
                    if (this.length === 1 && this.words[0] === 0) {
                        this.negative = 0;
                    }
                    return this;
                };
                if (typeof Symbol !== "undefined" && typeof Symbol.for === "function") {
                    BN.prototype[Symbol.for("nodejs.util.inspect.custom")] = inspect;
                } else {
                    BN.prototype.inspect = inspect;
                }
                function inspect() {
                    return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">";
                }
                var n = [
                    "",
                    "0",
                    "00",
                    "000",
                    "0000",
                    "00000",
                    "000000",
                    "0000000",
                    "00000000",
                    "000000000",
                    "0000000000",
                    "00000000000",
                    "000000000000",
                    "0000000000000",
                    "00000000000000",
                    "000000000000000",
                    "0000000000000000",
                    "00000000000000000",
                    "000000000000000000",
                    "0000000000000000000",
                    "00000000000000000000",
                    "000000000000000000000",
                    "0000000000000000000000",
                    "00000000000000000000000",
                    "000000000000000000000000",
                    "0000000000000000000000000"
                ];
                var a = [
                    0,
                    0,
                    25,
                    16,
                    12,
                    11,
                    10,
                    9,
                    8,
                    8,
                    7,
                    7,
                    7,
                    7,
                    6,
                    6,
                    6,
                    6,
                    6,
                    6,
                    6,
                    5,
                    5,
                    5,
                    5,
                    5,
                    5,
                    5,
                    5,
                    5,
                    5,
                    5,
                    5,
                    5,
                    5,
                    5,
                    5
                ];
                var s = [
                    0,
                    0,
                    33554432,
                    43046721,
                    16777216,
                    48828125,
                    60466176,
                    40353607,
                    16777216,
                    43046721,
                    1e7,
                    19487171,
                    35831808,
                    62748517,
                    7529536,
                    11390625,
                    16777216,
                    24137569,
                    34012224,
                    47045881,
                    64e6,
                    4084101,
                    5153632,
                    6436343,
                    7962624,
                    9765625,
                    11881376,
                    14348907,
                    17210368,
                    20511149,
                    243e5,
                    28629151,
                    33554432,
                    39135393,
                    45435424,
                    52521875,
                    60466176
                ];
                BN.prototype.toString = function toString(e, t) {
                    e = e || 10;
                    t = t | 0 || 1;
                    var r;
                    if (e === 16 || e === "hex") {
                        r = "";
                        var i = 0;
                        var o = 0;
                        for(var h = 0; h < this.length; h++){
                            var u = this.words[h];
                            var d = ((u << i | o) & 16777215).toString(16);
                            o = u >>> 24 - i & 16777215;
                            if (o !== 0 || h !== this.length - 1) {
                                r = n[6 - d.length] + d + r;
                            } else {
                                r = d + r;
                            }
                            i += 2;
                            if (i >= 26) {
                                i -= 26;
                                h--;
                            }
                        }
                        if (o !== 0) {
                            r = o.toString(16) + r;
                        }
                        while(r.length % t !== 0){
                            r = "0" + r;
                        }
                        if (this.negative !== 0) {
                            r = "-" + r;
                        }
                        return r;
                    }
                    if (e === (e | 0) && e >= 2 && e <= 36) {
                        var c = a[e];
                        var l = s[e];
                        r = "";
                        var p = this.clone();
                        p.negative = 0;
                        while(!p.isZero()){
                            var v = p.modrn(l).toString(e);
                            p = p.idivn(l);
                            if (!p.isZero()) {
                                r = n[c - v.length] + v + r;
                            } else {
                                r = v + r;
                            }
                        }
                        if (this.isZero()) {
                            r = "0" + r;
                        }
                        while(r.length % t !== 0){
                            r = "0" + r;
                        }
                        if (this.negative !== 0) {
                            r = "-" + r;
                        }
                        return r;
                    }
                    assert(false, "Base should be between 2 and 36");
                };
                BN.prototype.toNumber = function toNumber() {
                    var e = this.words[0];
                    if (this.length === 2) {
                        e += this.words[1] * 67108864;
                    } else if (this.length === 3 && this.words[2] === 1) {
                        e += 4503599627370496 + this.words[1] * 67108864;
                    } else if (this.length > 2) {
                        assert(false, "Number can only safely store up to 53 bits");
                    }
                    return this.negative !== 0 ? -e : e;
                };
                BN.prototype.toJSON = function toJSON() {
                    return this.toString(16, 2);
                };
                if (i) {
                    BN.prototype.toBuffer = function toBuffer(e, t) {
                        return this.toArrayLike(i, e, t);
                    };
                }
                BN.prototype.toArray = function toArray(e, t) {
                    return this.toArrayLike(Array, e, t);
                };
                var o = function allocate(e, t) {
                    if (e.allocUnsafe) {
                        return e.allocUnsafe(t);
                    }
                    return new e(t);
                };
                BN.prototype.toArrayLike = function toArrayLike(e, t, r) {
                    this._strip();
                    var i = this.byteLength();
                    var n = r || Math.max(1, i);
                    assert(i <= n, "byte array longer than desired length");
                    assert(n > 0, "Requested array length <= 0");
                    var a = o(e, n);
                    var s = t === "le" ? "LE" : "BE";
                    this["_toArrayLike" + s](a, i);
                    return a;
                };
                BN.prototype._toArrayLikeLE = function _toArrayLikeLE(e, t) {
                    var r = 0;
                    var i = 0;
                    for(var n = 0, a = 0; n < this.length; n++){
                        var s = this.words[n] << a | i;
                        e[r++] = s & 255;
                        if (r < e.length) {
                            e[r++] = s >> 8 & 255;
                        }
                        if (r < e.length) {
                            e[r++] = s >> 16 & 255;
                        }
                        if (a === 6) {
                            if (r < e.length) {
                                e[r++] = s >> 24 & 255;
                            }
                            i = 0;
                            a = 0;
                        } else {
                            i = s >>> 24;
                            a += 2;
                        }
                    }
                    if (r < e.length) {
                        e[r++] = i;
                        while(r < e.length){
                            e[r++] = 0;
                        }
                    }
                };
                BN.prototype._toArrayLikeBE = function _toArrayLikeBE(e, t) {
                    var r = e.length - 1;
                    var i = 0;
                    for(var n = 0, a = 0; n < this.length; n++){
                        var s = this.words[n] << a | i;
                        e[r--] = s & 255;
                        if (r >= 0) {
                            e[r--] = s >> 8 & 255;
                        }
                        if (r >= 0) {
                            e[r--] = s >> 16 & 255;
                        }
                        if (a === 6) {
                            if (r >= 0) {
                                e[r--] = s >> 24 & 255;
                            }
                            i = 0;
                            a = 0;
                        } else {
                            i = s >>> 24;
                            a += 2;
                        }
                    }
                    if (r >= 0) {
                        e[r--] = i;
                        while(r >= 0){
                            e[r--] = 0;
                        }
                    }
                };
                if (Math.clz32) {
                    BN.prototype._countBits = function _countBits(e) {
                        return 32 - Math.clz32(e);
                    };
                } else {
                    BN.prototype._countBits = function _countBits(e) {
                        var t = e;
                        var r = 0;
                        if (t >= 4096) {
                            r += 13;
                            t >>>= 13;
                        }
                        if (t >= 64) {
                            r += 7;
                            t >>>= 7;
                        }
                        if (t >= 8) {
                            r += 4;
                            t >>>= 4;
                        }
                        if (t >= 2) {
                            r += 2;
                            t >>>= 2;
                        }
                        return r + t;
                    };
                }
                BN.prototype._zeroBits = function _zeroBits(e) {
                    if (e === 0) return 26;
                    var t = e;
                    var r = 0;
                    if ((t & 8191) === 0) {
                        r += 13;
                        t >>>= 13;
                    }
                    if ((t & 127) === 0) {
                        r += 7;
                        t >>>= 7;
                    }
                    if ((t & 15) === 0) {
                        r += 4;
                        t >>>= 4;
                    }
                    if ((t & 3) === 0) {
                        r += 2;
                        t >>>= 2;
                    }
                    if ((t & 1) === 0) {
                        r++;
                    }
                    return r;
                };
                BN.prototype.bitLength = function bitLength() {
                    var e = this.words[this.length - 1];
                    var t = this._countBits(e);
                    return (this.length - 1) * 26 + t;
                };
                function toBitArray(e) {
                    var t = new Array(e.bitLength());
                    for(var r = 0; r < t.length; r++){
                        var i = r / 26 | 0;
                        var n = r % 26;
                        t[r] = e.words[i] >>> n & 1;
                    }
                    return t;
                }
                BN.prototype.zeroBits = function zeroBits() {
                    if (this.isZero()) return 0;
                    var e = 0;
                    for(var t = 0; t < this.length; t++){
                        var r = this._zeroBits(this.words[t]);
                        e += r;
                        if (r !== 26) break;
                    }
                    return e;
                };
                BN.prototype.byteLength = function byteLength() {
                    return Math.ceil(this.bitLength() / 8);
                };
                BN.prototype.toTwos = function toTwos(e) {
                    if (this.negative !== 0) {
                        return this.abs().inotn(e).iaddn(1);
                    }
                    return this.clone();
                };
                BN.prototype.fromTwos = function fromTwos(e) {
                    if (this.testn(e - 1)) {
                        return this.notn(e).iaddn(1).ineg();
                    }
                    return this.clone();
                };
                BN.prototype.isNeg = function isNeg() {
                    return this.negative !== 0;
                };
                BN.prototype.neg = function neg() {
                    return this.clone().ineg();
                };
                BN.prototype.ineg = function ineg() {
                    if (!this.isZero()) {
                        this.negative ^= 1;
                    }
                    return this;
                };
                BN.prototype.iuor = function iuor(e) {
                    while(this.length < e.length){
                        this.words[this.length++] = 0;
                    }
                    for(var t = 0; t < e.length; t++){
                        this.words[t] = this.words[t] | e.words[t];
                    }
                    return this._strip();
                };
                BN.prototype.ior = function ior(e) {
                    assert((this.negative | e.negative) === 0);
                    return this.iuor(e);
                };
                BN.prototype.or = function or(e) {
                    if (this.length > e.length) return this.clone().ior(e);
                    return e.clone().ior(this);
                };
                BN.prototype.uor = function uor(e) {
                    if (this.length > e.length) return this.clone().iuor(e);
                    return e.clone().iuor(this);
                };
                BN.prototype.iuand = function iuand(e) {
                    var t;
                    if (this.length > e.length) {
                        t = e;
                    } else {
                        t = this;
                    }
                    for(var r = 0; r < t.length; r++){
                        this.words[r] = this.words[r] & e.words[r];
                    }
                    this.length = t.length;
                    return this._strip();
                };
                BN.prototype.iand = function iand(e) {
                    assert((this.negative | e.negative) === 0);
                    return this.iuand(e);
                };
                BN.prototype.and = function and(e) {
                    if (this.length > e.length) return this.clone().iand(e);
                    return e.clone().iand(this);
                };
                BN.prototype.uand = function uand(e) {
                    if (this.length > e.length) return this.clone().iuand(e);
                    return e.clone().iuand(this);
                };
                BN.prototype.iuxor = function iuxor(e) {
                    var t;
                    var r;
                    if (this.length > e.length) {
                        t = this;
                        r = e;
                    } else {
                        t = e;
                        r = this;
                    }
                    for(var i = 0; i < r.length; i++){
                        this.words[i] = t.words[i] ^ r.words[i];
                    }
                    if (this !== t) {
                        for(; i < t.length; i++){
                            this.words[i] = t.words[i];
                        }
                    }
                    this.length = t.length;
                    return this._strip();
                };
                BN.prototype.ixor = function ixor(e) {
                    assert((this.negative | e.negative) === 0);
                    return this.iuxor(e);
                };
                BN.prototype.xor = function xor(e) {
                    if (this.length > e.length) return this.clone().ixor(e);
                    return e.clone().ixor(this);
                };
                BN.prototype.uxor = function uxor(e) {
                    if (this.length > e.length) return this.clone().iuxor(e);
                    return e.clone().iuxor(this);
                };
                BN.prototype.inotn = function inotn(e) {
                    assert(typeof e === "number" && e >= 0);
                    var t = Math.ceil(e / 26) | 0;
                    var r = e % 26;
                    this._expand(t);
                    if (r > 0) {
                        t--;
                    }
                    for(var i = 0; i < t; i++){
                        this.words[i] = ~this.words[i] & 67108863;
                    }
                    if (r > 0) {
                        this.words[i] = ~this.words[i] & 67108863 >> 26 - r;
                    }
                    return this._strip();
                };
                BN.prototype.notn = function notn(e) {
                    return this.clone().inotn(e);
                };
                BN.prototype.setn = function setn(e, t) {
                    assert(typeof e === "number" && e >= 0);
                    var r = e / 26 | 0;
                    var i = e % 26;
                    this._expand(r + 1);
                    if (t) {
                        this.words[r] = this.words[r] | 1 << i;
                    } else {
                        this.words[r] = this.words[r] & ~(1 << i);
                    }
                    return this._strip();
                };
                BN.prototype.iadd = function iadd(e) {
                    var t;
                    if (this.negative !== 0 && e.negative === 0) {
                        this.negative = 0;
                        t = this.isub(e);
                        this.negative ^= 1;
                        return this._normSign();
                    } else if (this.negative === 0 && e.negative !== 0) {
                        e.negative = 0;
                        t = this.isub(e);
                        e.negative = 1;
                        return t._normSign();
                    }
                    var r, i;
                    if (this.length > e.length) {
                        r = this;
                        i = e;
                    } else {
                        r = e;
                        i = this;
                    }
                    var n = 0;
                    for(var a = 0; a < i.length; a++){
                        t = (r.words[a] | 0) + (i.words[a] | 0) + n;
                        this.words[a] = t & 67108863;
                        n = t >>> 26;
                    }
                    for(; n !== 0 && a < r.length; a++){
                        t = (r.words[a] | 0) + n;
                        this.words[a] = t & 67108863;
                        n = t >>> 26;
                    }
                    this.length = r.length;
                    if (n !== 0) {
                        this.words[this.length] = n;
                        this.length++;
                    } else if (r !== this) {
                        for(; a < r.length; a++){
                            this.words[a] = r.words[a];
                        }
                    }
                    return this;
                };
                BN.prototype.add = function add(e) {
                    var t;
                    if (e.negative !== 0 && this.negative === 0) {
                        e.negative = 0;
                        t = this.sub(e);
                        e.negative ^= 1;
                        return t;
                    } else if (e.negative === 0 && this.negative !== 0) {
                        this.negative = 0;
                        t = e.sub(this);
                        this.negative = 1;
                        return t;
                    }
                    if (this.length > e.length) return this.clone().iadd(e);
                    return e.clone().iadd(this);
                };
                BN.prototype.isub = function isub(e) {
                    if (e.negative !== 0) {
                        e.negative = 0;
                        var t = this.iadd(e);
                        e.negative = 1;
                        return t._normSign();
                    } else if (this.negative !== 0) {
                        this.negative = 0;
                        this.iadd(e);
                        this.negative = 1;
                        return this._normSign();
                    }
                    var r = this.cmp(e);
                    if (r === 0) {
                        this.negative = 0;
                        this.length = 1;
                        this.words[0] = 0;
                        return this;
                    }
                    var i, n;
                    if (r > 0) {
                        i = this;
                        n = e;
                    } else {
                        i = e;
                        n = this;
                    }
                    var a = 0;
                    for(var s = 0; s < n.length; s++){
                        t = (i.words[s] | 0) - (n.words[s] | 0) + a;
                        a = t >> 26;
                        this.words[s] = t & 67108863;
                    }
                    for(; a !== 0 && s < i.length; s++){
                        t = (i.words[s] | 0) + a;
                        a = t >> 26;
                        this.words[s] = t & 67108863;
                    }
                    if (a === 0 && s < i.length && i !== this) {
                        for(; s < i.length; s++){
                            this.words[s] = i.words[s];
                        }
                    }
                    this.length = Math.max(this.length, s);
                    if (i !== this) {
                        this.negative = 1;
                    }
                    return this._strip();
                };
                BN.prototype.sub = function sub(e) {
                    return this.clone().isub(e);
                };
                function smallMulTo(e, t, r) {
                    r.negative = t.negative ^ e.negative;
                    var i = e.length + t.length | 0;
                    r.length = i;
                    i = i - 1 | 0;
                    var n = e.words[0] | 0;
                    var a = t.words[0] | 0;
                    var s = n * a;
                    var o = s & 67108863;
                    var h = s / 67108864 | 0;
                    r.words[0] = o;
                    for(var u = 1; u < i; u++){
                        var d = h >>> 26;
                        var c = h & 67108863;
                        var l = Math.min(u, t.length - 1);
                        for(var p = Math.max(0, u - e.length + 1); p <= l; p++){
                            var v = u - p | 0;
                            n = e.words[v] | 0;
                            a = t.words[p] | 0;
                            s = n * a + c;
                            d += s / 67108864 | 0;
                            c = s & 67108863;
                        }
                        r.words[u] = c | 0;
                        h = d | 0;
                    }
                    if (h !== 0) {
                        r.words[u] = h | 0;
                    } else {
                        r.length--;
                    }
                    return r._strip();
                }
                var h = function comb10MulTo(e, t, r) {
                    var i = e.words;
                    var n = t.words;
                    var a = r.words;
                    var s = 0;
                    var o;
                    var h;
                    var u;
                    var d = i[0] | 0;
                    var c = d & 8191;
                    var l = d >>> 13;
                    var p = i[1] | 0;
                    var v = p & 8191;
                    var b = p >>> 13;
                    var m = i[2] | 0;
                    var y = m & 8191;
                    var g = m >>> 13;
                    var _ = i[3] | 0;
                    var w = _ & 8191;
                    var M = _ >>> 13;
                    var B = i[4] | 0;
                    var E = B & 8191;
                    var k = B >>> 13;
                    var A = i[5] | 0;
                    var N = A & 8191;
                    var P = A >>> 13;
                    var x = i[6] | 0;
                    var I = x & 8191;
                    var C = x >>> 13;
                    var D = i[7] | 0;
                    var T = D & 8191;
                    var j = D >>> 13;
                    var q = i[8] | 0;
                    var O = q & 8191;
                    var H = q >>> 13;
                    var L = i[9] | 0;
                    var z = L & 8191;
                    var F = L >>> 13;
                    var U = n[0] | 0;
                    var W = U & 8191;
                    var V = U >>> 13;
                    var G = n[1] | 0;
                    var J = G & 8191;
                    var Z = G >>> 13;
                    var X = n[2] | 0;
                    var Y = X & 8191;
                    var $ = X >>> 13;
                    var Q = n[3] | 0;
                    var ee = Q & 8191;
                    var te = Q >>> 13;
                    var re = n[4] | 0;
                    var ie = re & 8191;
                    var ne = re >>> 13;
                    var ae = n[5] | 0;
                    var fe = ae & 8191;
                    var se = ae >>> 13;
                    var oe = n[6] | 0;
                    var he = oe & 8191;
                    var ue = oe >>> 13;
                    var de = n[7] | 0;
                    var ce = de & 8191;
                    var le = de >>> 13;
                    var pe = n[8] | 0;
                    var ve = pe & 8191;
                    var be = pe >>> 13;
                    var me = n[9] | 0;
                    var ye = me & 8191;
                    var ge = me >>> 13;
                    r.negative = e.negative ^ t.negative;
                    r.length = 19;
                    o = Math.imul(c, W);
                    h = Math.imul(c, V);
                    h = h + Math.imul(l, W) | 0;
                    u = Math.imul(l, V);
                    var _e = (s + o | 0) + ((h & 8191) << 13) | 0;
                    s = (u + (h >>> 13) | 0) + (_e >>> 26) | 0;
                    _e &= 67108863;
                    o = Math.imul(v, W);
                    h = Math.imul(v, V);
                    h = h + Math.imul(b, W) | 0;
                    u = Math.imul(b, V);
                    o = o + Math.imul(c, J) | 0;
                    h = h + Math.imul(c, Z) | 0;
                    h = h + Math.imul(l, J) | 0;
                    u = u + Math.imul(l, Z) | 0;
                    var we = (s + o | 0) + ((h & 8191) << 13) | 0;
                    s = (u + (h >>> 13) | 0) + (we >>> 26) | 0;
                    we &= 67108863;
                    o = Math.imul(y, W);
                    h = Math.imul(y, V);
                    h = h + Math.imul(g, W) | 0;
                    u = Math.imul(g, V);
                    o = o + Math.imul(v, J) | 0;
                    h = h + Math.imul(v, Z) | 0;
                    h = h + Math.imul(b, J) | 0;
                    u = u + Math.imul(b, Z) | 0;
                    o = o + Math.imul(c, Y) | 0;
                    h = h + Math.imul(c, $) | 0;
                    h = h + Math.imul(l, Y) | 0;
                    u = u + Math.imul(l, $) | 0;
                    var Me = (s + o | 0) + ((h & 8191) << 13) | 0;
                    s = (u + (h >>> 13) | 0) + (Me >>> 26) | 0;
                    Me &= 67108863;
                    o = Math.imul(w, W);
                    h = Math.imul(w, V);
                    h = h + Math.imul(M, W) | 0;
                    u = Math.imul(M, V);
                    o = o + Math.imul(y, J) | 0;
                    h = h + Math.imul(y, Z) | 0;
                    h = h + Math.imul(g, J) | 0;
                    u = u + Math.imul(g, Z) | 0;
                    o = o + Math.imul(v, Y) | 0;
                    h = h + Math.imul(v, $) | 0;
                    h = h + Math.imul(b, Y) | 0;
                    u = u + Math.imul(b, $) | 0;
                    o = o + Math.imul(c, ee) | 0;
                    h = h + Math.imul(c, te) | 0;
                    h = h + Math.imul(l, ee) | 0;
                    u = u + Math.imul(l, te) | 0;
                    var Se = (s + o | 0) + ((h & 8191) << 13) | 0;
                    s = (u + (h >>> 13) | 0) + (Se >>> 26) | 0;
                    Se &= 67108863;
                    o = Math.imul(E, W);
                    h = Math.imul(E, V);
                    h = h + Math.imul(k, W) | 0;
                    u = Math.imul(k, V);
                    o = o + Math.imul(w, J) | 0;
                    h = h + Math.imul(w, Z) | 0;
                    h = h + Math.imul(M, J) | 0;
                    u = u + Math.imul(M, Z) | 0;
                    o = o + Math.imul(y, Y) | 0;
                    h = h + Math.imul(y, $) | 0;
                    h = h + Math.imul(g, Y) | 0;
                    u = u + Math.imul(g, $) | 0;
                    o = o + Math.imul(v, ee) | 0;
                    h = h + Math.imul(v, te) | 0;
                    h = h + Math.imul(b, ee) | 0;
                    u = u + Math.imul(b, te) | 0;
                    o = o + Math.imul(c, ie) | 0;
                    h = h + Math.imul(c, ne) | 0;
                    h = h + Math.imul(l, ie) | 0;
                    u = u + Math.imul(l, ne) | 0;
                    var Be = (s + o | 0) + ((h & 8191) << 13) | 0;
                    s = (u + (h >>> 13) | 0) + (Be >>> 26) | 0;
                    Be &= 67108863;
                    o = Math.imul(N, W);
                    h = Math.imul(N, V);
                    h = h + Math.imul(P, W) | 0;
                    u = Math.imul(P, V);
                    o = o + Math.imul(E, J) | 0;
                    h = h + Math.imul(E, Z) | 0;
                    h = h + Math.imul(k, J) | 0;
                    u = u + Math.imul(k, Z) | 0;
                    o = o + Math.imul(w, Y) | 0;
                    h = h + Math.imul(w, $) | 0;
                    h = h + Math.imul(M, Y) | 0;
                    u = u + Math.imul(M, $) | 0;
                    o = o + Math.imul(y, ee) | 0;
                    h = h + Math.imul(y, te) | 0;
                    h = h + Math.imul(g, ee) | 0;
                    u = u + Math.imul(g, te) | 0;
                    o = o + Math.imul(v, ie) | 0;
                    h = h + Math.imul(v, ne) | 0;
                    h = h + Math.imul(b, ie) | 0;
                    u = u + Math.imul(b, ne) | 0;
                    o = o + Math.imul(c, fe) | 0;
                    h = h + Math.imul(c, se) | 0;
                    h = h + Math.imul(l, fe) | 0;
                    u = u + Math.imul(l, se) | 0;
                    var Ee = (s + o | 0) + ((h & 8191) << 13) | 0;
                    s = (u + (h >>> 13) | 0) + (Ee >>> 26) | 0;
                    Ee &= 67108863;
                    o = Math.imul(I, W);
                    h = Math.imul(I, V);
                    h = h + Math.imul(C, W) | 0;
                    u = Math.imul(C, V);
                    o = o + Math.imul(N, J) | 0;
                    h = h + Math.imul(N, Z) | 0;
                    h = h + Math.imul(P, J) | 0;
                    u = u + Math.imul(P, Z) | 0;
                    o = o + Math.imul(E, Y) | 0;
                    h = h + Math.imul(E, $) | 0;
                    h = h + Math.imul(k, Y) | 0;
                    u = u + Math.imul(k, $) | 0;
                    o = o + Math.imul(w, ee) | 0;
                    h = h + Math.imul(w, te) | 0;
                    h = h + Math.imul(M, ee) | 0;
                    u = u + Math.imul(M, te) | 0;
                    o = o + Math.imul(y, ie) | 0;
                    h = h + Math.imul(y, ne) | 0;
                    h = h + Math.imul(g, ie) | 0;
                    u = u + Math.imul(g, ne) | 0;
                    o = o + Math.imul(v, fe) | 0;
                    h = h + Math.imul(v, se) | 0;
                    h = h + Math.imul(b, fe) | 0;
                    u = u + Math.imul(b, se) | 0;
                    o = o + Math.imul(c, he) | 0;
                    h = h + Math.imul(c, ue) | 0;
                    h = h + Math.imul(l, he) | 0;
                    u = u + Math.imul(l, ue) | 0;
                    var ke = (s + o | 0) + ((h & 8191) << 13) | 0;
                    s = (u + (h >>> 13) | 0) + (ke >>> 26) | 0;
                    ke &= 67108863;
                    o = Math.imul(T, W);
                    h = Math.imul(T, V);
                    h = h + Math.imul(j, W) | 0;
                    u = Math.imul(j, V);
                    o = o + Math.imul(I, J) | 0;
                    h = h + Math.imul(I, Z) | 0;
                    h = h + Math.imul(C, J) | 0;
                    u = u + Math.imul(C, Z) | 0;
                    o = o + Math.imul(N, Y) | 0;
                    h = h + Math.imul(N, $) | 0;
                    h = h + Math.imul(P, Y) | 0;
                    u = u + Math.imul(P, $) | 0;
                    o = o + Math.imul(E, ee) | 0;
                    h = h + Math.imul(E, te) | 0;
                    h = h + Math.imul(k, ee) | 0;
                    u = u + Math.imul(k, te) | 0;
                    o = o + Math.imul(w, ie) | 0;
                    h = h + Math.imul(w, ne) | 0;
                    h = h + Math.imul(M, ie) | 0;
                    u = u + Math.imul(M, ne) | 0;
                    o = o + Math.imul(y, fe) | 0;
                    h = h + Math.imul(y, se) | 0;
                    h = h + Math.imul(g, fe) | 0;
                    u = u + Math.imul(g, se) | 0;
                    o = o + Math.imul(v, he) | 0;
                    h = h + Math.imul(v, ue) | 0;
                    h = h + Math.imul(b, he) | 0;
                    u = u + Math.imul(b, ue) | 0;
                    o = o + Math.imul(c, ce) | 0;
                    h = h + Math.imul(c, le) | 0;
                    h = h + Math.imul(l, ce) | 0;
                    u = u + Math.imul(l, le) | 0;
                    var Ae = (s + o | 0) + ((h & 8191) << 13) | 0;
                    s = (u + (h >>> 13) | 0) + (Ae >>> 26) | 0;
                    Ae &= 67108863;
                    o = Math.imul(O, W);
                    h = Math.imul(O, V);
                    h = h + Math.imul(H, W) | 0;
                    u = Math.imul(H, V);
                    o = o + Math.imul(T, J) | 0;
                    h = h + Math.imul(T, Z) | 0;
                    h = h + Math.imul(j, J) | 0;
                    u = u + Math.imul(j, Z) | 0;
                    o = o + Math.imul(I, Y) | 0;
                    h = h + Math.imul(I, $) | 0;
                    h = h + Math.imul(C, Y) | 0;
                    u = u + Math.imul(C, $) | 0;
                    o = o + Math.imul(N, ee) | 0;
                    h = h + Math.imul(N, te) | 0;
                    h = h + Math.imul(P, ee) | 0;
                    u = u + Math.imul(P, te) | 0;
                    o = o + Math.imul(E, ie) | 0;
                    h = h + Math.imul(E, ne) | 0;
                    h = h + Math.imul(k, ie) | 0;
                    u = u + Math.imul(k, ne) | 0;
                    o = o + Math.imul(w, fe) | 0;
                    h = h + Math.imul(w, se) | 0;
                    h = h + Math.imul(M, fe) | 0;
                    u = u + Math.imul(M, se) | 0;
                    o = o + Math.imul(y, he) | 0;
                    h = h + Math.imul(y, ue) | 0;
                    h = h + Math.imul(g, he) | 0;
                    u = u + Math.imul(g, ue) | 0;
                    o = o + Math.imul(v, ce) | 0;
                    h = h + Math.imul(v, le) | 0;
                    h = h + Math.imul(b, ce) | 0;
                    u = u + Math.imul(b, le) | 0;
                    o = o + Math.imul(c, ve) | 0;
                    h = h + Math.imul(c, be) | 0;
                    h = h + Math.imul(l, ve) | 0;
                    u = u + Math.imul(l, be) | 0;
                    var Ne = (s + o | 0) + ((h & 8191) << 13) | 0;
                    s = (u + (h >>> 13) | 0) + (Ne >>> 26) | 0;
                    Ne &= 67108863;
                    o = Math.imul(z, W);
                    h = Math.imul(z, V);
                    h = h + Math.imul(F, W) | 0;
                    u = Math.imul(F, V);
                    o = o + Math.imul(O, J) | 0;
                    h = h + Math.imul(O, Z) | 0;
                    h = h + Math.imul(H, J) | 0;
                    u = u + Math.imul(H, Z) | 0;
                    o = o + Math.imul(T, Y) | 0;
                    h = h + Math.imul(T, $) | 0;
                    h = h + Math.imul(j, Y) | 0;
                    u = u + Math.imul(j, $) | 0;
                    o = o + Math.imul(I, ee) | 0;
                    h = h + Math.imul(I, te) | 0;
                    h = h + Math.imul(C, ee) | 0;
                    u = u + Math.imul(C, te) | 0;
                    o = o + Math.imul(N, ie) | 0;
                    h = h + Math.imul(N, ne) | 0;
                    h = h + Math.imul(P, ie) | 0;
                    u = u + Math.imul(P, ne) | 0;
                    o = o + Math.imul(E, fe) | 0;
                    h = h + Math.imul(E, se) | 0;
                    h = h + Math.imul(k, fe) | 0;
                    u = u + Math.imul(k, se) | 0;
                    o = o + Math.imul(w, he) | 0;
                    h = h + Math.imul(w, ue) | 0;
                    h = h + Math.imul(M, he) | 0;
                    u = u + Math.imul(M, ue) | 0;
                    o = o + Math.imul(y, ce) | 0;
                    h = h + Math.imul(y, le) | 0;
                    h = h + Math.imul(g, ce) | 0;
                    u = u + Math.imul(g, le) | 0;
                    o = o + Math.imul(v, ve) | 0;
                    h = h + Math.imul(v, be) | 0;
                    h = h + Math.imul(b, ve) | 0;
                    u = u + Math.imul(b, be) | 0;
                    o = o + Math.imul(c, ye) | 0;
                    h = h + Math.imul(c, ge) | 0;
                    h = h + Math.imul(l, ye) | 0;
                    u = u + Math.imul(l, ge) | 0;
                    var Re = (s + o | 0) + ((h & 8191) << 13) | 0;
                    s = (u + (h >>> 13) | 0) + (Re >>> 26) | 0;
                    Re &= 67108863;
                    o = Math.imul(z, J);
                    h = Math.imul(z, Z);
                    h = h + Math.imul(F, J) | 0;
                    u = Math.imul(F, Z);
                    o = o + Math.imul(O, Y) | 0;
                    h = h + Math.imul(O, $) | 0;
                    h = h + Math.imul(H, Y) | 0;
                    u = u + Math.imul(H, $) | 0;
                    o = o + Math.imul(T, ee) | 0;
                    h = h + Math.imul(T, te) | 0;
                    h = h + Math.imul(j, ee) | 0;
                    u = u + Math.imul(j, te) | 0;
                    o = o + Math.imul(I, ie) | 0;
                    h = h + Math.imul(I, ne) | 0;
                    h = h + Math.imul(C, ie) | 0;
                    u = u + Math.imul(C, ne) | 0;
                    o = o + Math.imul(N, fe) | 0;
                    h = h + Math.imul(N, se) | 0;
                    h = h + Math.imul(P, fe) | 0;
                    u = u + Math.imul(P, se) | 0;
                    o = o + Math.imul(E, he) | 0;
                    h = h + Math.imul(E, ue) | 0;
                    h = h + Math.imul(k, he) | 0;
                    u = u + Math.imul(k, ue) | 0;
                    o = o + Math.imul(w, ce) | 0;
                    h = h + Math.imul(w, le) | 0;
                    h = h + Math.imul(M, ce) | 0;
                    u = u + Math.imul(M, le) | 0;
                    o = o + Math.imul(y, ve) | 0;
                    h = h + Math.imul(y, be) | 0;
                    h = h + Math.imul(g, ve) | 0;
                    u = u + Math.imul(g, be) | 0;
                    o = o + Math.imul(v, ye) | 0;
                    h = h + Math.imul(v, ge) | 0;
                    h = h + Math.imul(b, ye) | 0;
                    u = u + Math.imul(b, ge) | 0;
                    var Pe = (s + o | 0) + ((h & 8191) << 13) | 0;
                    s = (u + (h >>> 13) | 0) + (Pe >>> 26) | 0;
                    Pe &= 67108863;
                    o = Math.imul(z, Y);
                    h = Math.imul(z, $);
                    h = h + Math.imul(F, Y) | 0;
                    u = Math.imul(F, $);
                    o = o + Math.imul(O, ee) | 0;
                    h = h + Math.imul(O, te) | 0;
                    h = h + Math.imul(H, ee) | 0;
                    u = u + Math.imul(H, te) | 0;
                    o = o + Math.imul(T, ie) | 0;
                    h = h + Math.imul(T, ne) | 0;
                    h = h + Math.imul(j, ie) | 0;
                    u = u + Math.imul(j, ne) | 0;
                    o = o + Math.imul(I, fe) | 0;
                    h = h + Math.imul(I, se) | 0;
                    h = h + Math.imul(C, fe) | 0;
                    u = u + Math.imul(C, se) | 0;
                    o = o + Math.imul(N, he) | 0;
                    h = h + Math.imul(N, ue) | 0;
                    h = h + Math.imul(P, he) | 0;
                    u = u + Math.imul(P, ue) | 0;
                    o = o + Math.imul(E, ce) | 0;
                    h = h + Math.imul(E, le) | 0;
                    h = h + Math.imul(k, ce) | 0;
                    u = u + Math.imul(k, le) | 0;
                    o = o + Math.imul(w, ve) | 0;
                    h = h + Math.imul(w, be) | 0;
                    h = h + Math.imul(M, ve) | 0;
                    u = u + Math.imul(M, be) | 0;
                    o = o + Math.imul(y, ye) | 0;
                    h = h + Math.imul(y, ge) | 0;
                    h = h + Math.imul(g, ye) | 0;
                    u = u + Math.imul(g, ge) | 0;
                    var xe = (s + o | 0) + ((h & 8191) << 13) | 0;
                    s = (u + (h >>> 13) | 0) + (xe >>> 26) | 0;
                    xe &= 67108863;
                    o = Math.imul(z, ee);
                    h = Math.imul(z, te);
                    h = h + Math.imul(F, ee) | 0;
                    u = Math.imul(F, te);
                    o = o + Math.imul(O, ie) | 0;
                    h = h + Math.imul(O, ne) | 0;
                    h = h + Math.imul(H, ie) | 0;
                    u = u + Math.imul(H, ne) | 0;
                    o = o + Math.imul(T, fe) | 0;
                    h = h + Math.imul(T, se) | 0;
                    h = h + Math.imul(j, fe) | 0;
                    u = u + Math.imul(j, se) | 0;
                    o = o + Math.imul(I, he) | 0;
                    h = h + Math.imul(I, ue) | 0;
                    h = h + Math.imul(C, he) | 0;
                    u = u + Math.imul(C, ue) | 0;
                    o = o + Math.imul(N, ce) | 0;
                    h = h + Math.imul(N, le) | 0;
                    h = h + Math.imul(P, ce) | 0;
                    u = u + Math.imul(P, le) | 0;
                    o = o + Math.imul(E, ve) | 0;
                    h = h + Math.imul(E, be) | 0;
                    h = h + Math.imul(k, ve) | 0;
                    u = u + Math.imul(k, be) | 0;
                    o = o + Math.imul(w, ye) | 0;
                    h = h + Math.imul(w, ge) | 0;
                    h = h + Math.imul(M, ye) | 0;
                    u = u + Math.imul(M, ge) | 0;
                    var Ie = (s + o | 0) + ((h & 8191) << 13) | 0;
                    s = (u + (h >>> 13) | 0) + (Ie >>> 26) | 0;
                    Ie &= 67108863;
                    o = Math.imul(z, ie);
                    h = Math.imul(z, ne);
                    h = h + Math.imul(F, ie) | 0;
                    u = Math.imul(F, ne);
                    o = o + Math.imul(O, fe) | 0;
                    h = h + Math.imul(O, se) | 0;
                    h = h + Math.imul(H, fe) | 0;
                    u = u + Math.imul(H, se) | 0;
                    o = o + Math.imul(T, he) | 0;
                    h = h + Math.imul(T, ue) | 0;
                    h = h + Math.imul(j, he) | 0;
                    u = u + Math.imul(j, ue) | 0;
                    o = o + Math.imul(I, ce) | 0;
                    h = h + Math.imul(I, le) | 0;
                    h = h + Math.imul(C, ce) | 0;
                    u = u + Math.imul(C, le) | 0;
                    o = o + Math.imul(N, ve) | 0;
                    h = h + Math.imul(N, be) | 0;
                    h = h + Math.imul(P, ve) | 0;
                    u = u + Math.imul(P, be) | 0;
                    o = o + Math.imul(E, ye) | 0;
                    h = h + Math.imul(E, ge) | 0;
                    h = h + Math.imul(k, ye) | 0;
                    u = u + Math.imul(k, ge) | 0;
                    var Ce = (s + o | 0) + ((h & 8191) << 13) | 0;
                    s = (u + (h >>> 13) | 0) + (Ce >>> 26) | 0;
                    Ce &= 67108863;
                    o = Math.imul(z, fe);
                    h = Math.imul(z, se);
                    h = h + Math.imul(F, fe) | 0;
                    u = Math.imul(F, se);
                    o = o + Math.imul(O, he) | 0;
                    h = h + Math.imul(O, ue) | 0;
                    h = h + Math.imul(H, he) | 0;
                    u = u + Math.imul(H, ue) | 0;
                    o = o + Math.imul(T, ce) | 0;
                    h = h + Math.imul(T, le) | 0;
                    h = h + Math.imul(j, ce) | 0;
                    u = u + Math.imul(j, le) | 0;
                    o = o + Math.imul(I, ve) | 0;
                    h = h + Math.imul(I, be) | 0;
                    h = h + Math.imul(C, ve) | 0;
                    u = u + Math.imul(C, be) | 0;
                    o = o + Math.imul(N, ye) | 0;
                    h = h + Math.imul(N, ge) | 0;
                    h = h + Math.imul(P, ye) | 0;
                    u = u + Math.imul(P, ge) | 0;
                    var De = (s + o | 0) + ((h & 8191) << 13) | 0;
                    s = (u + (h >>> 13) | 0) + (De >>> 26) | 0;
                    De &= 67108863;
                    o = Math.imul(z, he);
                    h = Math.imul(z, ue);
                    h = h + Math.imul(F, he) | 0;
                    u = Math.imul(F, ue);
                    o = o + Math.imul(O, ce) | 0;
                    h = h + Math.imul(O, le) | 0;
                    h = h + Math.imul(H, ce) | 0;
                    u = u + Math.imul(H, le) | 0;
                    o = o + Math.imul(T, ve) | 0;
                    h = h + Math.imul(T, be) | 0;
                    h = h + Math.imul(j, ve) | 0;
                    u = u + Math.imul(j, be) | 0;
                    o = o + Math.imul(I, ye) | 0;
                    h = h + Math.imul(I, ge) | 0;
                    h = h + Math.imul(C, ye) | 0;
                    u = u + Math.imul(C, ge) | 0;
                    var Te = (s + o | 0) + ((h & 8191) << 13) | 0;
                    s = (u + (h >>> 13) | 0) + (Te >>> 26) | 0;
                    Te &= 67108863;
                    o = Math.imul(z, ce);
                    h = Math.imul(z, le);
                    h = h + Math.imul(F, ce) | 0;
                    u = Math.imul(F, le);
                    o = o + Math.imul(O, ve) | 0;
                    h = h + Math.imul(O, be) | 0;
                    h = h + Math.imul(H, ve) | 0;
                    u = u + Math.imul(H, be) | 0;
                    o = o + Math.imul(T, ye) | 0;
                    h = h + Math.imul(T, ge) | 0;
                    h = h + Math.imul(j, ye) | 0;
                    u = u + Math.imul(j, ge) | 0;
                    var je = (s + o | 0) + ((h & 8191) << 13) | 0;
                    s = (u + (h >>> 13) | 0) + (je >>> 26) | 0;
                    je &= 67108863;
                    o = Math.imul(z, ve);
                    h = Math.imul(z, be);
                    h = h + Math.imul(F, ve) | 0;
                    u = Math.imul(F, be);
                    o = o + Math.imul(O, ye) | 0;
                    h = h + Math.imul(O, ge) | 0;
                    h = h + Math.imul(H, ye) | 0;
                    u = u + Math.imul(H, ge) | 0;
                    var qe = (s + o | 0) + ((h & 8191) << 13) | 0;
                    s = (u + (h >>> 13) | 0) + (qe >>> 26) | 0;
                    qe &= 67108863;
                    o = Math.imul(z, ye);
                    h = Math.imul(z, ge);
                    h = h + Math.imul(F, ye) | 0;
                    u = Math.imul(F, ge);
                    var Oe = (s + o | 0) + ((h & 8191) << 13) | 0;
                    s = (u + (h >>> 13) | 0) + (Oe >>> 26) | 0;
                    Oe &= 67108863;
                    a[0] = _e;
                    a[1] = we;
                    a[2] = Me;
                    a[3] = Se;
                    a[4] = Be;
                    a[5] = Ee;
                    a[6] = ke;
                    a[7] = Ae;
                    a[8] = Ne;
                    a[9] = Re;
                    a[10] = Pe;
                    a[11] = xe;
                    a[12] = Ie;
                    a[13] = Ce;
                    a[14] = De;
                    a[15] = Te;
                    a[16] = je;
                    a[17] = qe;
                    a[18] = Oe;
                    if (s !== 0) {
                        a[19] = s;
                        r.length++;
                    }
                    return r;
                };
                if (!Math.imul) {
                    h = smallMulTo;
                }
                function bigMulTo(e, t, r) {
                    r.negative = t.negative ^ e.negative;
                    r.length = e.length + t.length;
                    var i = 0;
                    var n = 0;
                    for(var a = 0; a < r.length - 1; a++){
                        var s = n;
                        n = 0;
                        var o = i & 67108863;
                        var h = Math.min(a, t.length - 1);
                        for(var u = Math.max(0, a - e.length + 1); u <= h; u++){
                            var d = a - u;
                            var c = e.words[d] | 0;
                            var l = t.words[u] | 0;
                            var p = c * l;
                            var v = p & 67108863;
                            s = s + (p / 67108864 | 0) | 0;
                            v = v + o | 0;
                            o = v & 67108863;
                            s = s + (v >>> 26) | 0;
                            n += s >>> 26;
                            s &= 67108863;
                        }
                        r.words[a] = o;
                        i = s;
                        s = n;
                    }
                    if (i !== 0) {
                        r.words[a] = i;
                    } else {
                        r.length--;
                    }
                    return r._strip();
                }
                function jumboMulTo(e, t, r) {
                    return bigMulTo(e, t, r);
                }
                BN.prototype.mulTo = function mulTo(e, t) {
                    var r;
                    var i = this.length + e.length;
                    if (this.length === 10 && e.length === 10) {
                        r = h(this, e, t);
                    } else if (i < 63) {
                        r = smallMulTo(this, e, t);
                    } else if (i < 1024) {
                        r = bigMulTo(this, e, t);
                    } else {
                        r = jumboMulTo(this, e, t);
                    }
                    return r;
                };
                function FFTM(e, t) {
                    this.x = e;
                    this.y = t;
                }
                FFTM.prototype.makeRBT = function makeRBT(e) {
                    var t = new Array(e);
                    var r = BN.prototype._countBits(e) - 1;
                    for(var i = 0; i < e; i++){
                        t[i] = this.revBin(i, r, e);
                    }
                    return t;
                };
                FFTM.prototype.revBin = function revBin(e, t, r) {
                    if (e === 0 || e === r - 1) return e;
                    var i = 0;
                    for(var n = 0; n < t; n++){
                        i |= (e & 1) << t - n - 1;
                        e >>= 1;
                    }
                    return i;
                };
                FFTM.prototype.permute = function permute(e, t, r, i, n, a) {
                    for(var s = 0; s < a; s++){
                        i[s] = t[e[s]];
                        n[s] = r[e[s]];
                    }
                };
                FFTM.prototype.transform = function transform(e, t, r, i, n, a) {
                    this.permute(a, e, t, r, i, n);
                    for(var s = 1; s < n; s <<= 1){
                        var o = s << 1;
                        var h = Math.cos(2 * Math.PI / o);
                        var u = Math.sin(2 * Math.PI / o);
                        for(var d = 0; d < n; d += o){
                            var c = h;
                            var l = u;
                            for(var p = 0; p < s; p++){
                                var v = r[d + p];
                                var b = i[d + p];
                                var m = r[d + p + s];
                                var y = i[d + p + s];
                                var g = c * m - l * y;
                                y = c * y + l * m;
                                m = g;
                                r[d + p] = v + m;
                                i[d + p] = b + y;
                                r[d + p + s] = v - m;
                                i[d + p + s] = b - y;
                                if (p !== o) {
                                    g = h * c - u * l;
                                    l = h * l + u * c;
                                    c = g;
                                }
                            }
                        }
                    }
                };
                FFTM.prototype.guessLen13b = function guessLen13b(e, t) {
                    var r = Math.max(t, e) | 1;
                    var i = r & 1;
                    var n = 0;
                    for(r = r / 2 | 0; r; r = r >>> 1){
                        n++;
                    }
                    return 1 << n + 1 + i;
                };
                FFTM.prototype.conjugate = function conjugate(e, t, r) {
                    if (r <= 1) return;
                    for(var i = 0; i < r / 2; i++){
                        var n = e[i];
                        e[i] = e[r - i - 1];
                        e[r - i - 1] = n;
                        n = t[i];
                        t[i] = -t[r - i - 1];
                        t[r - i - 1] = -n;
                    }
                };
                FFTM.prototype.normalize13b = function normalize13b(e, t) {
                    var r = 0;
                    for(var i = 0; i < t / 2; i++){
                        var n = Math.round(e[2 * i + 1] / t) * 8192 + Math.round(e[2 * i] / t) + r;
                        e[i] = n & 67108863;
                        if (n < 67108864) {
                            r = 0;
                        } else {
                            r = n / 67108864 | 0;
                        }
                    }
                    return e;
                };
                FFTM.prototype.convert13b = function convert13b(e, t, r, i) {
                    var n = 0;
                    for(var a = 0; a < t; a++){
                        n = n + (e[a] | 0);
                        r[2 * a] = n & 8191;
                        n = n >>> 13;
                        r[2 * a + 1] = n & 8191;
                        n = n >>> 13;
                    }
                    for(a = 2 * t; a < i; ++a){
                        r[a] = 0;
                    }
                    assert(n === 0);
                    assert((n & ~8191) === 0);
                };
                FFTM.prototype.stub = function stub(e) {
                    var t = new Array(e);
                    for(var r = 0; r < e; r++){
                        t[r] = 0;
                    }
                    return t;
                };
                FFTM.prototype.mulp = function mulp(e, t, r) {
                    var i = 2 * this.guessLen13b(e.length, t.length);
                    var n = this.makeRBT(i);
                    var a = this.stub(i);
                    var s = new Array(i);
                    var o = new Array(i);
                    var h = new Array(i);
                    var u = new Array(i);
                    var d = new Array(i);
                    var c = new Array(i);
                    var l = r.words;
                    l.length = i;
                    this.convert13b(e.words, e.length, s, i);
                    this.convert13b(t.words, t.length, u, i);
                    this.transform(s, a, o, h, i, n);
                    this.transform(u, a, d, c, i, n);
                    for(var p = 0; p < i; p++){
                        var v = o[p] * d[p] - h[p] * c[p];
                        h[p] = o[p] * c[p] + h[p] * d[p];
                        o[p] = v;
                    }
                    this.conjugate(o, h, i);
                    this.transform(o, h, l, a, i, n);
                    this.conjugate(l, a, i);
                    this.normalize13b(l, i);
                    r.negative = e.negative ^ t.negative;
                    r.length = e.length + t.length;
                    return r._strip();
                };
                BN.prototype.mul = function mul(e) {
                    var t = new BN(null);
                    t.words = new Array(this.length + e.length);
                    return this.mulTo(e, t);
                };
                BN.prototype.mulf = function mulf(e) {
                    var t = new BN(null);
                    t.words = new Array(this.length + e.length);
                    return jumboMulTo(this, e, t);
                };
                BN.prototype.imul = function imul(e) {
                    return this.clone().mulTo(e, this);
                };
                BN.prototype.imuln = function imuln(e) {
                    var t = e < 0;
                    if (t) e = -e;
                    assert(typeof e === "number");
                    assert(e < 67108864);
                    var r = 0;
                    for(var i = 0; i < this.length; i++){
                        var n = (this.words[i] | 0) * e;
                        var a = (n & 67108863) + (r & 67108863);
                        r >>= 26;
                        r += n / 67108864 | 0;
                        r += a >>> 26;
                        this.words[i] = a & 67108863;
                    }
                    if (r !== 0) {
                        this.words[i] = r;
                        this.length++;
                    }
                    return t ? this.ineg() : this;
                };
                BN.prototype.muln = function muln(e) {
                    return this.clone().imuln(e);
                };
                BN.prototype.sqr = function sqr() {
                    return this.mul(this);
                };
                BN.prototype.isqr = function isqr() {
                    return this.imul(this.clone());
                };
                BN.prototype.pow = function pow(e) {
                    var t = toBitArray(e);
                    if (t.length === 0) return new BN(1);
                    var r = this;
                    for(var i = 0; i < t.length; i++, r = r.sqr()){
                        if (t[i] !== 0) break;
                    }
                    if (++i < t.length) {
                        for(var n = r.sqr(); i < t.length; i++, n = n.sqr()){
                            if (t[i] === 0) continue;
                            r = r.mul(n);
                        }
                    }
                    return r;
                };
                BN.prototype.iushln = function iushln(e) {
                    assert(typeof e === "number" && e >= 0);
                    var t = e % 26;
                    var r = (e - t) / 26;
                    var i = 67108863 >>> 26 - t << 26 - t;
                    var n;
                    if (t !== 0) {
                        var a = 0;
                        for(n = 0; n < this.length; n++){
                            var s = this.words[n] & i;
                            var o = (this.words[n] | 0) - s << t;
                            this.words[n] = o | a;
                            a = s >>> 26 - t;
                        }
                        if (a) {
                            this.words[n] = a;
                            this.length++;
                        }
                    }
                    if (r !== 0) {
                        for(n = this.length - 1; n >= 0; n--){
                            this.words[n + r] = this.words[n];
                        }
                        for(n = 0; n < r; n++){
                            this.words[n] = 0;
                        }
                        this.length += r;
                    }
                    return this._strip();
                };
                BN.prototype.ishln = function ishln(e) {
                    assert(this.negative === 0);
                    return this.iushln(e);
                };
                BN.prototype.iushrn = function iushrn(e, t, r) {
                    assert(typeof e === "number" && e >= 0);
                    var i;
                    if (t) {
                        i = (t - t % 26) / 26;
                    } else {
                        i = 0;
                    }
                    var n = e % 26;
                    var a = Math.min((e - n) / 26, this.length);
                    var s = 67108863 ^ 67108863 >>> n << n;
                    var o = r;
                    i -= a;
                    i = Math.max(0, i);
                    if (o) {
                        for(var h = 0; h < a; h++){
                            o.words[h] = this.words[h];
                        }
                        o.length = a;
                    }
                    if (a === 0) {} else if (this.length > a) {
                        this.length -= a;
                        for(h = 0; h < this.length; h++){
                            this.words[h] = this.words[h + a];
                        }
                    } else {
                        this.words[0] = 0;
                        this.length = 1;
                    }
                    var u = 0;
                    for(h = this.length - 1; h >= 0 && (u !== 0 || h >= i); h--){
                        var d = this.words[h] | 0;
                        this.words[h] = u << 26 - n | d >>> n;
                        u = d & s;
                    }
                    if (o && u !== 0) {
                        o.words[o.length++] = u;
                    }
                    if (this.length === 0) {
                        this.words[0] = 0;
                        this.length = 1;
                    }
                    return this._strip();
                };
                BN.prototype.ishrn = function ishrn(e, t, r) {
                    assert(this.negative === 0);
                    return this.iushrn(e, t, r);
                };
                BN.prototype.shln = function shln(e) {
                    return this.clone().ishln(e);
                };
                BN.prototype.ushln = function ushln(e) {
                    return this.clone().iushln(e);
                };
                BN.prototype.shrn = function shrn(e) {
                    return this.clone().ishrn(e);
                };
                BN.prototype.ushrn = function ushrn(e) {
                    return this.clone().iushrn(e);
                };
                BN.prototype.testn = function testn(e) {
                    assert(typeof e === "number" && e >= 0);
                    var t = e % 26;
                    var r = (e - t) / 26;
                    var i = 1 << t;
                    if (this.length <= r) return false;
                    var n = this.words[r];
                    return !!(n & i);
                };
                BN.prototype.imaskn = function imaskn(e) {
                    assert(typeof e === "number" && e >= 0);
                    var t = e % 26;
                    var r = (e - t) / 26;
                    assert(this.negative === 0, "imaskn works only with positive numbers");
                    if (this.length <= r) {
                        return this;
                    }
                    if (t !== 0) {
                        r++;
                    }
                    this.length = Math.min(r, this.length);
                    if (t !== 0) {
                        var i = 67108863 ^ 67108863 >>> t << t;
                        this.words[this.length - 1] &= i;
                    }
                    return this._strip();
                };
                BN.prototype.maskn = function maskn(e) {
                    return this.clone().imaskn(e);
                };
                BN.prototype.iaddn = function iaddn(e) {
                    assert(typeof e === "number");
                    assert(e < 67108864);
                    if (e < 0) return this.isubn(-e);
                    if (this.negative !== 0) {
                        if (this.length === 1 && (this.words[0] | 0) <= e) {
                            this.words[0] = e - (this.words[0] | 0);
                            this.negative = 0;
                            return this;
                        }
                        this.negative = 0;
                        this.isubn(e);
                        this.negative = 1;
                        return this;
                    }
                    return this._iaddn(e);
                };
                BN.prototype._iaddn = function _iaddn(e) {
                    this.words[0] += e;
                    for(var t = 0; t < this.length && this.words[t] >= 67108864; t++){
                        this.words[t] -= 67108864;
                        if (t === this.length - 1) {
                            this.words[t + 1] = 1;
                        } else {
                            this.words[t + 1]++;
                        }
                    }
                    this.length = Math.max(this.length, t + 1);
                    return this;
                };
                BN.prototype.isubn = function isubn(e) {
                    assert(typeof e === "number");
                    assert(e < 67108864);
                    if (e < 0) return this.iaddn(-e);
                    if (this.negative !== 0) {
                        this.negative = 0;
                        this.iaddn(e);
                        this.negative = 1;
                        return this;
                    }
                    this.words[0] -= e;
                    if (this.length === 1 && this.words[0] < 0) {
                        this.words[0] = -this.words[0];
                        this.negative = 1;
                    } else {
                        for(var t = 0; t < this.length && this.words[t] < 0; t++){
                            this.words[t] += 67108864;
                            this.words[t + 1] -= 1;
                        }
                    }
                    return this._strip();
                };
                BN.prototype.addn = function addn(e) {
                    return this.clone().iaddn(e);
                };
                BN.prototype.subn = function subn(e) {
                    return this.clone().isubn(e);
                };
                BN.prototype.iabs = function iabs() {
                    this.negative = 0;
                    return this;
                };
                BN.prototype.abs = function abs() {
                    return this.clone().iabs();
                };
                BN.prototype._ishlnsubmul = function _ishlnsubmul(e, t, r) {
                    var i = e.length + r;
                    var n;
                    this._expand(i);
                    var a;
                    var s = 0;
                    for(n = 0; n < e.length; n++){
                        a = (this.words[n + r] | 0) + s;
                        var o = (e.words[n] | 0) * t;
                        a -= o & 67108863;
                        s = (a >> 26) - (o / 67108864 | 0);
                        this.words[n + r] = a & 67108863;
                    }
                    for(; n < this.length - r; n++){
                        a = (this.words[n + r] | 0) + s;
                        s = a >> 26;
                        this.words[n + r] = a & 67108863;
                    }
                    if (s === 0) return this._strip();
                    assert(s === -1);
                    s = 0;
                    for(n = 0; n < this.length; n++){
                        a = -(this.words[n] | 0) + s;
                        s = a >> 26;
                        this.words[n] = a & 67108863;
                    }
                    this.negative = 1;
                    return this._strip();
                };
                BN.prototype._wordDiv = function _wordDiv(e, t) {
                    var r = this.length - e.length;
                    var i = this.clone();
                    var n = e;
                    var a = n.words[n.length - 1] | 0;
                    var s = this._countBits(a);
                    r = 26 - s;
                    if (r !== 0) {
                        n = n.ushln(r);
                        i.iushln(r);
                        a = n.words[n.length - 1] | 0;
                    }
                    var o = i.length - n.length;
                    var h;
                    if (t !== "mod") {
                        h = new BN(null);
                        h.length = o + 1;
                        h.words = new Array(h.length);
                        for(var u = 0; u < h.length; u++){
                            h.words[u] = 0;
                        }
                    }
                    var d = i.clone()._ishlnsubmul(n, 1, o);
                    if (d.negative === 0) {
                        i = d;
                        if (h) {
                            h.words[o] = 1;
                        }
                    }
                    for(var c = o - 1; c >= 0; c--){
                        var l = (i.words[n.length + c] | 0) * 67108864 + (i.words[n.length + c - 1] | 0);
                        l = Math.min(l / a | 0, 67108863);
                        i._ishlnsubmul(n, l, c);
                        while(i.negative !== 0){
                            l--;
                            i.negative = 0;
                            i._ishlnsubmul(n, 1, c);
                            if (!i.isZero()) {
                                i.negative ^= 1;
                            }
                        }
                        if (h) {
                            h.words[c] = l;
                        }
                    }
                    if (h) {
                        h._strip();
                    }
                    i._strip();
                    if (t !== "div" && r !== 0) {
                        i.iushrn(r);
                    }
                    return {
                        div: h || null,
                        mod: i
                    };
                };
                BN.prototype.divmod = function divmod(e, t, r) {
                    assert(!e.isZero());
                    if (this.isZero()) {
                        return {
                            div: new BN(0),
                            mod: new BN(0)
                        };
                    }
                    var i, n, a;
                    if (this.negative !== 0 && e.negative === 0) {
                        a = this.neg().divmod(e, t);
                        if (t !== "mod") {
                            i = a.div.neg();
                        }
                        if (t !== "div") {
                            n = a.mod.neg();
                            if (r && n.negative !== 0) {
                                n.iadd(e);
                            }
                        }
                        return {
                            div: i,
                            mod: n
                        };
                    }
                    if (this.negative === 0 && e.negative !== 0) {
                        a = this.divmod(e.neg(), t);
                        if (t !== "mod") {
                            i = a.div.neg();
                        }
                        return {
                            div: i,
                            mod: a.mod
                        };
                    }
                    if ((this.negative & e.negative) !== 0) {
                        a = this.neg().divmod(e.neg(), t);
                        if (t !== "div") {
                            n = a.mod.neg();
                            if (r && n.negative !== 0) {
                                n.isub(e);
                            }
                        }
                        return {
                            div: a.div,
                            mod: n
                        };
                    }
                    if (e.length > this.length || this.cmp(e) < 0) {
                        return {
                            div: new BN(0),
                            mod: this
                        };
                    }
                    if (e.length === 1) {
                        if (t === "div") {
                            return {
                                div: this.divn(e.words[0]),
                                mod: null
                            };
                        }
                        if (t === "mod") {
                            return {
                                div: null,
                                mod: new BN(this.modrn(e.words[0]))
                            };
                        }
                        return {
                            div: this.divn(e.words[0]),
                            mod: new BN(this.modrn(e.words[0]))
                        };
                    }
                    return this._wordDiv(e, t);
                };
                BN.prototype.div = function div(e) {
                    return this.divmod(e, "div", false).div;
                };
                BN.prototype.mod = function mod(e) {
                    return this.divmod(e, "mod", false).mod;
                };
                BN.prototype.umod = function umod(e) {
                    return this.divmod(e, "mod", true).mod;
                };
                BN.prototype.divRound = function divRound(e) {
                    var t = this.divmod(e);
                    if (t.mod.isZero()) return t.div;
                    var r = t.div.negative !== 0 ? t.mod.isub(e) : t.mod;
                    var i = e.ushrn(1);
                    var n = e.andln(1);
                    var a = r.cmp(i);
                    if (a < 0 || n === 1 && a === 0) return t.div;
                    return t.div.negative !== 0 ? t.div.isubn(1) : t.div.iaddn(1);
                };
                BN.prototype.modrn = function modrn(e) {
                    var t = e < 0;
                    if (t) e = -e;
                    assert(e <= 67108863);
                    var r = (1 << 26) % e;
                    var i = 0;
                    for(var n = this.length - 1; n >= 0; n--){
                        i = (r * i + (this.words[n] | 0)) % e;
                    }
                    return t ? -i : i;
                };
                BN.prototype.modn = function modn(e) {
                    return this.modrn(e);
                };
                BN.prototype.idivn = function idivn(e) {
                    var t = e < 0;
                    if (t) e = -e;
                    assert(e <= 67108863);
                    var r = 0;
                    for(var i = this.length - 1; i >= 0; i--){
                        var n = (this.words[i] | 0) + r * 67108864;
                        this.words[i] = n / e | 0;
                        r = n % e;
                    }
                    this._strip();
                    return t ? this.ineg() : this;
                };
                BN.prototype.divn = function divn(e) {
                    return this.clone().idivn(e);
                };
                BN.prototype.egcd = function egcd(e) {
                    assert(e.negative === 0);
                    assert(!e.isZero());
                    var t = this;
                    var r = e.clone();
                    if (t.negative !== 0) {
                        t = t.umod(e);
                    } else {
                        t = t.clone();
                    }
                    var i = new BN(1);
                    var n = new BN(0);
                    var a = new BN(0);
                    var s = new BN(1);
                    var o = 0;
                    while(t.isEven() && r.isEven()){
                        t.iushrn(1);
                        r.iushrn(1);
                        ++o;
                    }
                    var h = r.clone();
                    var u = t.clone();
                    while(!t.isZero()){
                        for(var d = 0, c = 1; (t.words[0] & c) === 0 && d < 26; ++d, c <<= 1);
                        if (d > 0) {
                            t.iushrn(d);
                            while(d-- > 0){
                                if (i.isOdd() || n.isOdd()) {
                                    i.iadd(h);
                                    n.isub(u);
                                }
                                i.iushrn(1);
                                n.iushrn(1);
                            }
                        }
                        for(var l = 0, p = 1; (r.words[0] & p) === 0 && l < 26; ++l, p <<= 1);
                        if (l > 0) {
                            r.iushrn(l);
                            while(l-- > 0){
                                if (a.isOdd() || s.isOdd()) {
                                    a.iadd(h);
                                    s.isub(u);
                                }
                                a.iushrn(1);
                                s.iushrn(1);
                            }
                        }
                        if (t.cmp(r) >= 0) {
                            t.isub(r);
                            i.isub(a);
                            n.isub(s);
                        } else {
                            r.isub(t);
                            a.isub(i);
                            s.isub(n);
                        }
                    }
                    return {
                        a: a,
                        b: s,
                        gcd: r.iushln(o)
                    };
                };
                BN.prototype._invmp = function _invmp(e) {
                    assert(e.negative === 0);
                    assert(!e.isZero());
                    var t = this;
                    var r = e.clone();
                    if (t.negative !== 0) {
                        t = t.umod(e);
                    } else {
                        t = t.clone();
                    }
                    var i = new BN(1);
                    var n = new BN(0);
                    var a = r.clone();
                    while(t.cmpn(1) > 0 && r.cmpn(1) > 0){
                        for(var s = 0, o = 1; (t.words[0] & o) === 0 && s < 26; ++s, o <<= 1);
                        if (s > 0) {
                            t.iushrn(s);
                            while(s-- > 0){
                                if (i.isOdd()) {
                                    i.iadd(a);
                                }
                                i.iushrn(1);
                            }
                        }
                        for(var h = 0, u = 1; (r.words[0] & u) === 0 && h < 26; ++h, u <<= 1);
                        if (h > 0) {
                            r.iushrn(h);
                            while(h-- > 0){
                                if (n.isOdd()) {
                                    n.iadd(a);
                                }
                                n.iushrn(1);
                            }
                        }
                        if (t.cmp(r) >= 0) {
                            t.isub(r);
                            i.isub(n);
                        } else {
                            r.isub(t);
                            n.isub(i);
                        }
                    }
                    var d;
                    if (t.cmpn(1) === 0) {
                        d = i;
                    } else {
                        d = n;
                    }
                    if (d.cmpn(0) < 0) {
                        d.iadd(e);
                    }
                    return d;
                };
                BN.prototype.gcd = function gcd(e) {
                    if (this.isZero()) return e.abs();
                    if (e.isZero()) return this.abs();
                    var t = this.clone();
                    var r = e.clone();
                    t.negative = 0;
                    r.negative = 0;
                    for(var i = 0; t.isEven() && r.isEven(); i++){
                        t.iushrn(1);
                        r.iushrn(1);
                    }
                    do {
                        while(t.isEven()){
                            t.iushrn(1);
                        }
                        while(r.isEven()){
                            r.iushrn(1);
                        }
                        var n = t.cmp(r);
                        if (n < 0) {
                            var a = t;
                            t = r;
                            r = a;
                        } else if (n === 0 || r.cmpn(1) === 0) {
                            break;
                        }
                        t.isub(r);
                    }while (true)
                    return r.iushln(i);
                };
                BN.prototype.invm = function invm(e) {
                    return this.egcd(e).a.umod(e);
                };
                BN.prototype.isEven = function isEven() {
                    return (this.words[0] & 1) === 0;
                };
                BN.prototype.isOdd = function isOdd() {
                    return (this.words[0] & 1) === 1;
                };
                BN.prototype.andln = function andln(e) {
                    return this.words[0] & e;
                };
                BN.prototype.bincn = function bincn(e) {
                    assert(typeof e === "number");
                    var t = e % 26;
                    var r = (e - t) / 26;
                    var i = 1 << t;
                    if (this.length <= r) {
                        this._expand(r + 1);
                        this.words[r] |= i;
                        return this;
                    }
                    var n = i;
                    for(var a = r; n !== 0 && a < this.length; a++){
                        var s = this.words[a] | 0;
                        s += n;
                        n = s >>> 26;
                        s &= 67108863;
                        this.words[a] = s;
                    }
                    if (n !== 0) {
                        this.words[a] = n;
                        this.length++;
                    }
                    return this;
                };
                BN.prototype.isZero = function isZero() {
                    return this.length === 1 && this.words[0] === 0;
                };
                BN.prototype.cmpn = function cmpn(e) {
                    var t = e < 0;
                    if (this.negative !== 0 && !t) return -1;
                    if (this.negative === 0 && t) return 1;
                    this._strip();
                    var r;
                    if (this.length > 1) {
                        r = 1;
                    } else {
                        if (t) {
                            e = -e;
                        }
                        assert(e <= 67108863, "Number is too big");
                        var i = this.words[0] | 0;
                        r = i === e ? 0 : i < e ? -1 : 1;
                    }
                    if (this.negative !== 0) return -r | 0;
                    return r;
                };
                BN.prototype.cmp = function cmp(e) {
                    if (this.negative !== 0 && e.negative === 0) return -1;
                    if (this.negative === 0 && e.negative !== 0) return 1;
                    var t = this.ucmp(e);
                    if (this.negative !== 0) return -t | 0;
                    return t;
                };
                BN.prototype.ucmp = function ucmp(e) {
                    if (this.length > e.length) return 1;
                    if (this.length < e.length) return -1;
                    var t = 0;
                    for(var r = this.length - 1; r >= 0; r--){
                        var i = this.words[r] | 0;
                        var n = e.words[r] | 0;
                        if (i === n) continue;
                        if (i < n) {
                            t = -1;
                        } else if (i > n) {
                            t = 1;
                        }
                        break;
                    }
                    return t;
                };
                BN.prototype.gtn = function gtn(e) {
                    return this.cmpn(e) === 1;
                };
                BN.prototype.gt = function gt(e) {
                    return this.cmp(e) === 1;
                };
                BN.prototype.gten = function gten(e) {
                    return this.cmpn(e) >= 0;
                };
                BN.prototype.gte = function gte(e) {
                    return this.cmp(e) >= 0;
                };
                BN.prototype.ltn = function ltn(e) {
                    return this.cmpn(e) === -1;
                };
                BN.prototype.lt = function lt(e) {
                    return this.cmp(e) === -1;
                };
                BN.prototype.lten = function lten(e) {
                    return this.cmpn(e) <= 0;
                };
                BN.prototype.lte = function lte(e) {
                    return this.cmp(e) <= 0;
                };
                BN.prototype.eqn = function eqn(e) {
                    return this.cmpn(e) === 0;
                };
                BN.prototype.eq = function eq(e) {
                    return this.cmp(e) === 0;
                };
                BN.red = function red(e) {
                    return new Red(e);
                };
                BN.prototype.toRed = function toRed(e) {
                    assert(!this.red, "Already a number in reduction context");
                    assert(this.negative === 0, "red works only with positives");
                    return e.convertTo(this)._forceRed(e);
                };
                BN.prototype.fromRed = function fromRed() {
                    assert(this.red, "fromRed works only with numbers in reduction context");
                    return this.red.convertFrom(this);
                };
                BN.prototype._forceRed = function _forceRed(e) {
                    this.red = e;
                    return this;
                };
                BN.prototype.forceRed = function forceRed(e) {
                    assert(!this.red, "Already a number in reduction context");
                    return this._forceRed(e);
                };
                BN.prototype.redAdd = function redAdd(e) {
                    assert(this.red, "redAdd works only with red numbers");
                    return this.red.add(this, e);
                };
                BN.prototype.redIAdd = function redIAdd(e) {
                    assert(this.red, "redIAdd works only with red numbers");
                    return this.red.iadd(this, e);
                };
                BN.prototype.redSub = function redSub(e) {
                    assert(this.red, "redSub works only with red numbers");
                    return this.red.sub(this, e);
                };
                BN.prototype.redISub = function redISub(e) {
                    assert(this.red, "redISub works only with red numbers");
                    return this.red.isub(this, e);
                };
                BN.prototype.redShl = function redShl(e) {
                    assert(this.red, "redShl works only with red numbers");
                    return this.red.shl(this, e);
                };
                BN.prototype.redMul = function redMul(e) {
                    assert(this.red, "redMul works only with red numbers");
                    this.red._verify2(this, e);
                    return this.red.mul(this, e);
                };
                BN.prototype.redIMul = function redIMul(e) {
                    assert(this.red, "redMul works only with red numbers");
                    this.red._verify2(this, e);
                    return this.red.imul(this, e);
                };
                BN.prototype.redSqr = function redSqr() {
                    assert(this.red, "redSqr works only with red numbers");
                    this.red._verify1(this);
                    return this.red.sqr(this);
                };
                BN.prototype.redISqr = function redISqr() {
                    assert(this.red, "redISqr works only with red numbers");
                    this.red._verify1(this);
                    return this.red.isqr(this);
                };
                BN.prototype.redSqrt = function redSqrt() {
                    assert(this.red, "redSqrt works only with red numbers");
                    this.red._verify1(this);
                    return this.red.sqrt(this);
                };
                BN.prototype.redInvm = function redInvm() {
                    assert(this.red, "redInvm works only with red numbers");
                    this.red._verify1(this);
                    return this.red.invm(this);
                };
                BN.prototype.redNeg = function redNeg() {
                    assert(this.red, "redNeg works only with red numbers");
                    this.red._verify1(this);
                    return this.red.neg(this);
                };
                BN.prototype.redPow = function redPow(e) {
                    assert(this.red && !e.red, "redPow(normalNum)");
                    this.red._verify1(this);
                    return this.red.pow(this, e);
                };
                var u = {
                    k256: null,
                    p224: null,
                    p192: null,
                    p25519: null
                };
                function MPrime(e, t) {
                    this.name = e;
                    this.p = new BN(t, 16);
                    this.n = this.p.bitLength();
                    this.k = new BN(1).iushln(this.n).isub(this.p);
                    this.tmp = this._tmp();
                }
                MPrime.prototype._tmp = function _tmp() {
                    var e = new BN(null);
                    e.words = new Array(Math.ceil(this.n / 13));
                    return e;
                };
                MPrime.prototype.ireduce = function ireduce(e) {
                    var t = e;
                    var r;
                    do {
                        this.split(t, this.tmp);
                        t = this.imulK(t);
                        t = t.iadd(this.tmp);
                        r = t.bitLength();
                    }while (r > this.n)
                    var i = r < this.n ? -1 : t.ucmp(this.p);
                    if (i === 0) {
                        t.words[0] = 0;
                        t.length = 1;
                    } else if (i > 0) {
                        t.isub(this.p);
                    } else {
                        if (t.strip !== undefined) {
                            t.strip();
                        } else {
                            t._strip();
                        }
                    }
                    return t;
                };
                MPrime.prototype.split = function split(e, t) {
                    e.iushrn(this.n, 0, t);
                };
                MPrime.prototype.imulK = function imulK(e) {
                    return e.imul(this.k);
                };
                function K256() {
                    MPrime.call(this, "k256", "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f");
                }
                inherits(K256, MPrime);
                K256.prototype.split = function split(e, t) {
                    var r = 4194303;
                    var i = Math.min(e.length, 9);
                    for(var n = 0; n < i; n++){
                        t.words[n] = e.words[n];
                    }
                    t.length = i;
                    if (e.length <= 9) {
                        e.words[0] = 0;
                        e.length = 1;
                        return;
                    }
                    var a = e.words[9];
                    t.words[t.length++] = a & r;
                    for(n = 10; n < e.length; n++){
                        var s = e.words[n] | 0;
                        e.words[n - 10] = (s & r) << 4 | a >>> 22;
                        a = s;
                    }
                    a >>>= 22;
                    e.words[n - 10] = a;
                    if (a === 0 && e.length > 10) {
                        e.length -= 10;
                    } else {
                        e.length -= 9;
                    }
                };
                K256.prototype.imulK = function imulK(e) {
                    e.words[e.length] = 0;
                    e.words[e.length + 1] = 0;
                    e.length += 2;
                    var t = 0;
                    for(var r = 0; r < e.length; r++){
                        var i = e.words[r] | 0;
                        t += i * 977;
                        e.words[r] = t & 67108863;
                        t = i * 64 + (t / 67108864 | 0);
                    }
                    if (e.words[e.length - 1] === 0) {
                        e.length--;
                        if (e.words[e.length - 1] === 0) {
                            e.length--;
                        }
                    }
                    return e;
                };
                function P224() {
                    MPrime.call(this, "p224", "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001");
                }
                inherits(P224, MPrime);
                function P192() {
                    MPrime.call(this, "p192", "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff");
                }
                inherits(P192, MPrime);
                function P25519() {
                    MPrime.call(this, "25519", "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed");
                }
                inherits(P25519, MPrime);
                P25519.prototype.imulK = function imulK(e) {
                    var t = 0;
                    for(var r = 0; r < e.length; r++){
                        var i = (e.words[r] | 0) * 19 + t;
                        var n = i & 67108863;
                        i >>>= 26;
                        e.words[r] = n;
                        t = i;
                    }
                    if (t !== 0) {
                        e.words[e.length++] = t;
                    }
                    return e;
                };
                BN._prime = function prime(e) {
                    if (u[e]) return u[e];
                    var prime;
                    if (e === "k256") {
                        prime = new K256;
                    } else if (e === "p224") {
                        prime = new P224;
                    } else if (e === "p192") {
                        prime = new P192;
                    } else if (e === "p25519") {
                        prime = new P25519;
                    } else {
                        throw new Error("Unknown prime " + e);
                    }
                    u[e] = prime;
                    return prime;
                };
                function Red(e) {
                    if (typeof e === "string") {
                        var t = BN._prime(e);
                        this.m = t.p;
                        this.prime = t;
                    } else {
                        assert(e.gtn(1), "modulus must be greater than 1");
                        this.m = e;
                        this.prime = null;
                    }
                }
                Red.prototype._verify1 = function _verify1(e) {
                    assert(e.negative === 0, "red works only with positives");
                    assert(e.red, "red works only with red numbers");
                };
                Red.prototype._verify2 = function _verify2(e, t) {
                    assert((e.negative | t.negative) === 0, "red works only with positives");
                    assert(e.red && e.red === t.red, "red works only with red numbers");
                };
                Red.prototype.imod = function imod(e) {
                    if (this.prime) return this.prime.ireduce(e)._forceRed(this);
                    move(e, e.umod(this.m)._forceRed(this));
                    return e;
                };
                Red.prototype.neg = function neg(e) {
                    if (e.isZero()) {
                        return e.clone();
                    }
                    return this.m.sub(e)._forceRed(this);
                };
                Red.prototype.add = function add(e, t) {
                    this._verify2(e, t);
                    var r = e.add(t);
                    if (r.cmp(this.m) >= 0) {
                        r.isub(this.m);
                    }
                    return r._forceRed(this);
                };
                Red.prototype.iadd = function iadd(e, t) {
                    this._verify2(e, t);
                    var r = e.iadd(t);
                    if (r.cmp(this.m) >= 0) {
                        r.isub(this.m);
                    }
                    return r;
                };
                Red.prototype.sub = function sub(e, t) {
                    this._verify2(e, t);
                    var r = e.sub(t);
                    if (r.cmpn(0) < 0) {
                        r.iadd(this.m);
                    }
                    return r._forceRed(this);
                };
                Red.prototype.isub = function isub(e, t) {
                    this._verify2(e, t);
                    var r = e.isub(t);
                    if (r.cmpn(0) < 0) {
                        r.iadd(this.m);
                    }
                    return r;
                };
                Red.prototype.shl = function shl(e, t) {
                    this._verify1(e);
                    return this.imod(e.ushln(t));
                };
                Red.prototype.imul = function imul(e, t) {
                    this._verify2(e, t);
                    return this.imod(e.imul(t));
                };
                Red.prototype.mul = function mul(e, t) {
                    this._verify2(e, t);
                    return this.imod(e.mul(t));
                };
                Red.prototype.isqr = function isqr(e) {
                    return this.imul(e, e.clone());
                };
                Red.prototype.sqr = function sqr(e) {
                    return this.mul(e, e);
                };
                Red.prototype.sqrt = function sqrt(e) {
                    if (e.isZero()) return e.clone();
                    var t = this.m.andln(3);
                    assert(t % 2 === 1);
                    if (t === 3) {
                        var r = this.m.add(new BN(1)).iushrn(2);
                        return this.pow(e, r);
                    }
                    var i = this.m.subn(1);
                    var n = 0;
                    while(!i.isZero() && i.andln(1) === 0){
                        n++;
                        i.iushrn(1);
                    }
                    assert(!i.isZero());
                    var a = new BN(1).toRed(this);
                    var s = a.redNeg();
                    var o = this.m.subn(1).iushrn(1);
                    var h = this.m.bitLength();
                    h = new BN(2 * h * h).toRed(this);
                    while(this.pow(h, o).cmp(s) !== 0){
                        h.redIAdd(s);
                    }
                    var u = this.pow(h, i);
                    var d = this.pow(e, i.addn(1).iushrn(1));
                    var c = this.pow(e, i);
                    var l = n;
                    while(c.cmp(a) !== 0){
                        var p = c;
                        for(var v = 0; p.cmp(a) !== 0; v++){
                            p = p.redSqr();
                        }
                        assert(v < l);
                        var b = this.pow(u, new BN(1).iushln(l - v - 1));
                        d = d.redMul(b);
                        u = b.redSqr();
                        c = c.redMul(u);
                        l = v;
                    }
                    return d;
                };
                Red.prototype.invm = function invm(e) {
                    var t = e._invmp(this.m);
                    if (t.negative !== 0) {
                        t.negative = 0;
                        return this.imod(t).redNeg();
                    } else {
                        return this.imod(t);
                    }
                };
                Red.prototype.pow = function pow(e, t) {
                    if (t.isZero()) return new BN(1).toRed(this);
                    if (t.cmpn(1) === 0) return e.clone();
                    var r = 4;
                    var i = new Array(1 << r);
                    i[0] = new BN(1).toRed(this);
                    i[1] = e;
                    for(var n = 2; n < i.length; n++){
                        i[n] = this.mul(i[n - 1], e);
                    }
                    var a = i[0];
                    var s = 0;
                    var o = 0;
                    var h = t.bitLength() % 26;
                    if (h === 0) {
                        h = 26;
                    }
                    for(n = t.length - 1; n >= 0; n--){
                        var u = t.words[n];
                        for(var d = h - 1; d >= 0; d--){
                            var c = u >> d & 1;
                            if (a !== i[0]) {
                                a = this.sqr(a);
                            }
                            if (c === 0 && s === 0) {
                                o = 0;
                                continue;
                            }
                            s <<= 1;
                            s |= c;
                            o++;
                            if (o !== r && (n !== 0 || d !== 0)) continue;
                            a = this.mul(a, i[s]);
                            o = 0;
                            s = 0;
                        }
                        h = 26;
                    }
                    return a;
                };
                Red.prototype.convertTo = function convertTo(e) {
                    var t = e.umod(this.m);
                    return t === e ? t.clone() : t;
                };
                Red.prototype.convertFrom = function convertFrom(e) {
                    var t = e.clone();
                    t.red = null;
                    return t;
                };
                BN.mont = function mont(e) {
                    return new Mont(e);
                };
                function Mont(e) {
                    Red.call(this, e);
                    this.shift = this.m.bitLength();
                    if (this.shift % 26 !== 0) {
                        this.shift += 26 - this.shift % 26;
                    }
                    this.r = new BN(1).iushln(this.shift);
                    this.r2 = this.imod(this.r.sqr());
                    this.rinv = this.r._invmp(this.m);
                    this.minv = this.rinv.mul(this.r).isubn(1).div(this.m);
                    this.minv = this.minv.umod(this.r);
                    this.minv = this.r.sub(this.minv);
                }
                inherits(Mont, Red);
                Mont.prototype.convertTo = function convertTo(e) {
                    return this.imod(e.ushln(this.shift));
                };
                Mont.prototype.convertFrom = function convertFrom(e) {
                    var t = this.imod(e.mul(this.rinv));
                    t.red = null;
                    return t;
                };
                Mont.prototype.imul = function imul(e, t) {
                    if (e.isZero() || t.isZero()) {
                        e.words[0] = 0;
                        e.length = 1;
                        return e;
                    }
                    var r = e.imul(t);
                    var i = r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m);
                    var n = r.isub(i).iushrn(this.shift);
                    var a = n;
                    if (n.cmp(this.m) >= 0) {
                        a = n.isub(this.m);
                    } else if (n.cmpn(0) < 0) {
                        a = n.iadd(this.m);
                    }
                    return a._forceRed(this);
                };
                Mont.prototype.mul = function mul(e, t) {
                    if (e.isZero() || t.isZero()) return new BN(0)._forceRed(this);
                    var r = e.mul(t);
                    var i = r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m);
                    var n = r.isub(i).iushrn(this.shift);
                    var a = n;
                    if (n.cmp(this.m) >= 0) {
                        a = n.isub(this.m);
                    } else if (n.cmpn(0) < 0) {
                        a = n.iadd(this.m);
                    }
                    return a._forceRed(this);
                };
                Mont.prototype.invm = function invm(e) {
                    var t = this.imod(e._invmp(this.m).mul(this.r2));
                    return t._forceRed(this);
                };
            })(false || e, this);
        },
        3500: function(e, t, r) {
            var i;
            e.exports = function rand(e) {
                if (!i) i = new Rand(null);
                return i.generate(e);
            };
            function Rand(e) {
                this.rand = e;
            }
            e.exports.Rand = Rand;
            Rand.prototype.generate = function generate(e) {
                return this._rand(e);
            };
            Rand.prototype._rand = function _rand(e) {
                if (this.rand.getBytes) return this.rand.getBytes(e);
                var t = new Uint8Array(e);
                for(var r = 0; r < t.length; r++)t[r] = this.rand.getByte();
                return t;
            };
            if (typeof self === "object") {
                if (self.crypto && self.crypto.getRandomValues) {
                    Rand.prototype._rand = function _rand(e) {
                        var t = new Uint8Array(e);
                        self.crypto.getRandomValues(t);
                        return t;
                    };
                } else if (self.msCrypto && self.msCrypto.getRandomValues) {
                    Rand.prototype._rand = function _rand(e) {
                        var t = new Uint8Array(e);
                        self.msCrypto.getRandomValues(t);
                        return t;
                    };
                } else if (typeof window === "object") {
                    Rand.prototype._rand = function() {
                        throw new Error("Not implemented yet");
                    };
                }
            } else {
                try {
                    var n = r(6113);
                    if (typeof n.randomBytes !== "function") throw new Error("Not supported");
                    Rand.prototype._rand = function _rand(e) {
                        return n.randomBytes(e);
                    };
                } catch (e) {}
            }
        },
        1387: function(e, t, r) {
            var i = r(6911).Buffer;
            function asUInt32Array(e) {
                if (!i.isBuffer(e)) e = i.from(e);
                var t = e.length / 4 | 0;
                var r = new Array(t);
                for(var n = 0; n < t; n++){
                    r[n] = e.readUInt32BE(n * 4);
                }
                return r;
            }
            function scrubVec(e) {
                for(var t = 0; t < e.length; e++){
                    e[t] = 0;
                }
            }
            function cryptBlock(e, t, r, i, n) {
                var a = r[0];
                var s = r[1];
                var o = r[2];
                var h = r[3];
                var u = e[0] ^ t[0];
                var d = e[1] ^ t[1];
                var c = e[2] ^ t[2];
                var l = e[3] ^ t[3];
                var p, v, b, m;
                var y = 4;
                for(var g = 1; g < n; g++){
                    p = a[u >>> 24] ^ s[d >>> 16 & 255] ^ o[c >>> 8 & 255] ^ h[l & 255] ^ t[y++];
                    v = a[d >>> 24] ^ s[c >>> 16 & 255] ^ o[l >>> 8 & 255] ^ h[u & 255] ^ t[y++];
                    b = a[c >>> 24] ^ s[l >>> 16 & 255] ^ o[u >>> 8 & 255] ^ h[d & 255] ^ t[y++];
                    m = a[l >>> 24] ^ s[u >>> 16 & 255] ^ o[d >>> 8 & 255] ^ h[c & 255] ^ t[y++];
                    u = p;
                    d = v;
                    c = b;
                    l = m;
                }
                p = (i[u >>> 24] << 24 | i[d >>> 16 & 255] << 16 | i[c >>> 8 & 255] << 8 | i[l & 255]) ^ t[y++];
                v = (i[d >>> 24] << 24 | i[c >>> 16 & 255] << 16 | i[l >>> 8 & 255] << 8 | i[u & 255]) ^ t[y++];
                b = (i[c >>> 24] << 24 | i[l >>> 16 & 255] << 16 | i[u >>> 8 & 255] << 8 | i[d & 255]) ^ t[y++];
                m = (i[l >>> 24] << 24 | i[u >>> 16 & 255] << 16 | i[d >>> 8 & 255] << 8 | i[c & 255]) ^ t[y++];
                p = p >>> 0;
                v = v >>> 0;
                b = b >>> 0;
                m = m >>> 0;
                return [
                    p,
                    v,
                    b,
                    m
                ];
            }
            var n = [
                0,
                1,
                2,
                4,
                8,
                16,
                32,
                64,
                128,
                27,
                54
            ];
            var a = function() {
                var e = new Array(256);
                for(var t = 0; t < 256; t++){
                    if (t < 128) {
                        e[t] = t << 1;
                    } else {
                        e[t] = t << 1 ^ 283;
                    }
                }
                var r = [];
                var i = [];
                var n = [
                    [],
                    [],
                    [],
                    []
                ];
                var a = [
                    [],
                    [],
                    [],
                    []
                ];
                var s = 0;
                var o = 0;
                for(var h = 0; h < 256; ++h){
                    var u = o ^ o << 1 ^ o << 2 ^ o << 3 ^ o << 4;
                    u = u >>> 8 ^ u & 255 ^ 99;
                    r[s] = u;
                    i[u] = s;
                    var d = e[s];
                    var c = e[d];
                    var l = e[c];
                    var p = e[u] * 257 ^ u * 16843008;
                    n[0][s] = p << 24 | p >>> 8;
                    n[1][s] = p << 16 | p >>> 16;
                    n[2][s] = p << 8 | p >>> 24;
                    n[3][s] = p;
                    p = l * 16843009 ^ c * 65537 ^ d * 257 ^ s * 16843008;
                    a[0][u] = p << 24 | p >>> 8;
                    a[1][u] = p << 16 | p >>> 16;
                    a[2][u] = p << 8 | p >>> 24;
                    a[3][u] = p;
                    if (s === 0) {
                        s = o = 1;
                    } else {
                        s = d ^ e[e[e[l ^ d]]];
                        o ^= e[e[o]];
                    }
                }
                return {
                    SBOX: r,
                    INV_SBOX: i,
                    SUB_MIX: n,
                    INV_SUB_MIX: a
                };
            }();
            function AES(e) {
                this._key = asUInt32Array(e);
                this._reset();
            }
            AES.blockSize = 4 * 4;
            AES.keySize = 256 / 8;
            AES.prototype.blockSize = AES.blockSize;
            AES.prototype.keySize = AES.keySize;
            AES.prototype._reset = function() {
                var e = this._key;
                var t = e.length;
                var r = t + 6;
                var i = (r + 1) * 4;
                var s = [];
                for(var o = 0; o < t; o++){
                    s[o] = e[o];
                }
                for(o = t; o < i; o++){
                    var h = s[o - 1];
                    if (o % t === 0) {
                        h = h << 8 | h >>> 24;
                        h = a.SBOX[h >>> 24] << 24 | a.SBOX[h >>> 16 & 255] << 16 | a.SBOX[h >>> 8 & 255] << 8 | a.SBOX[h & 255];
                        h ^= n[o / t | 0] << 24;
                    } else if (t > 6 && o % t === 4) {
                        h = a.SBOX[h >>> 24] << 24 | a.SBOX[h >>> 16 & 255] << 16 | a.SBOX[h >>> 8 & 255] << 8 | a.SBOX[h & 255];
                    }
                    s[o] = s[o - t] ^ h;
                }
                var u = [];
                for(var d = 0; d < i; d++){
                    var c = i - d;
                    var l = s[c - (d % 4 ? 0 : 4)];
                    if (d < 4 || c <= 4) {
                        u[d] = l;
                    } else {
                        u[d] = a.INV_SUB_MIX[0][a.SBOX[l >>> 24]] ^ a.INV_SUB_MIX[1][a.SBOX[l >>> 16 & 255]] ^ a.INV_SUB_MIX[2][a.SBOX[l >>> 8 & 255]] ^ a.INV_SUB_MIX[3][a.SBOX[l & 255]];
                    }
                }
                this._nRounds = r;
                this._keySchedule = s;
                this._invKeySchedule = u;
            };
            AES.prototype.encryptBlockRaw = function(e) {
                e = asUInt32Array(e);
                return cryptBlock(e, this._keySchedule, a.SUB_MIX, a.SBOX, this._nRounds);
            };
            AES.prototype.encryptBlock = function(e) {
                var t = this.encryptBlockRaw(e);
                var r = i.allocUnsafe(16);
                r.writeUInt32BE(t[0], 0);
                r.writeUInt32BE(t[1], 4);
                r.writeUInt32BE(t[2], 8);
                r.writeUInt32BE(t[3], 12);
                return r;
            };
            AES.prototype.decryptBlock = function(e) {
                e = asUInt32Array(e);
                var t = e[1];
                e[1] = e[3];
                e[3] = t;
                var r = cryptBlock(e, this._invKeySchedule, a.INV_SUB_MIX, a.INV_SBOX, this._nRounds);
                var n = i.allocUnsafe(16);
                n.writeUInt32BE(r[0], 0);
                n.writeUInt32BE(r[3], 4);
                n.writeUInt32BE(r[2], 8);
                n.writeUInt32BE(r[1], 12);
                return n;
            };
            AES.prototype.scrub = function() {
                scrubVec(this._keySchedule);
                scrubVec(this._invKeySchedule);
                scrubVec(this._key);
            };
            e.exports.AES = AES;
        },
        6624: function(e, t, r) {
            var i = r(1387);
            var n = r(6911).Buffer;
            var a = r(1043);
            var s = r(3782);
            var o = r(7225);
            var h = r(4734);
            var u = r(598);
            function xorTest(e, t) {
                var r = 0;
                if (e.length !== t.length) r++;
                var i = Math.min(e.length, t.length);
                for(var n = 0; n < i; ++n){
                    r += e[n] ^ t[n];
                }
                return r;
            }
            function calcIv(e, t, r) {
                if (t.length === 12) {
                    e._finID = n.concat([
                        t,
                        n.from([
                            0,
                            0,
                            0,
                            1
                        ])
                    ]);
                    return n.concat([
                        t,
                        n.from([
                            0,
                            0,
                            0,
                            2
                        ])
                    ]);
                }
                var i = new o(r);
                var a = t.length;
                var s = a % 16;
                i.update(t);
                if (s) {
                    s = 16 - s;
                    i.update(n.alloc(s, 0));
                }
                i.update(n.alloc(8, 0));
                var h = a * 8;
                var d = n.alloc(8);
                d.writeUIntBE(h, 0, 8);
                i.update(d);
                e._finID = i.state;
                var c = n.from(e._finID);
                u(c);
                return c;
            }
            function StreamCipher(e, t, r, s) {
                a.call(this);
                var h = n.alloc(4, 0);
                this._cipher = new i.AES(t);
                var u = this._cipher.encryptBlock(h);
                this._ghash = new o(u);
                r = calcIv(this, r, u);
                this._prev = n.from(r);
                this._cache = n.allocUnsafe(0);
                this._secCache = n.allocUnsafe(0);
                this._decrypt = s;
                this._alen = 0;
                this._len = 0;
                this._mode = e;
                this._authTag = null;
                this._called = false;
            }
            s(StreamCipher, a);
            StreamCipher.prototype._update = function(e) {
                if (!this._called && this._alen) {
                    var t = 16 - this._alen % 16;
                    if (t < 16) {
                        t = n.alloc(t, 0);
                        this._ghash.update(t);
                    }
                }
                this._called = true;
                var r = this._mode.encrypt(this, e);
                if (this._decrypt) {
                    this._ghash.update(e);
                } else {
                    this._ghash.update(r);
                }
                this._len += e.length;
                return r;
            };
            StreamCipher.prototype._final = function() {
                if (this._decrypt && !this._authTag) throw new Error("Unsupported state or unable to authenticate data");
                var e = h(this._ghash.final(this._alen * 8, this._len * 8), this._cipher.encryptBlock(this._finID));
                if (this._decrypt && xorTest(e, this._authTag)) throw new Error("Unsupported state or unable to authenticate data");
                this._authTag = e;
                this._cipher.scrub();
            };
            StreamCipher.prototype.getAuthTag = function getAuthTag() {
                if (this._decrypt || !n.isBuffer(this._authTag)) throw new Error("Attempting to get auth tag in unsupported state");
                return this._authTag;
            };
            StreamCipher.prototype.setAuthTag = function setAuthTag(e) {
                if (!this._decrypt) throw new Error("Attempting to set auth tag in unsupported state");
                this._authTag = e;
            };
            StreamCipher.prototype.setAAD = function setAAD(e) {
                if (this._called) throw new Error("Attempting to set AAD in unsupported state");
                this._ghash.update(e);
                this._alen += e.length;
            };
            e.exports = StreamCipher;
        },
        6594: function(e, t, r) {
            var i = r(2);
            var n = r(2598);
            var a = r(5866);
            function getCiphers() {
                return Object.keys(a);
            }
            t.createCipher = t.Cipher = i.createCipher;
            t.createCipheriv = t.Cipheriv = i.createCipheriv;
            t.createDecipher = t.Decipher = n.createDecipher;
            t.createDecipheriv = t.Decipheriv = n.createDecipheriv;
            t.listCiphers = t.getCiphers = getCiphers;
        },
        2598: function(e, t, r) {
            var i = r(6624);
            var n = r(6911).Buffer;
            var a = r(6370);
            var s = r(126);
            var o = r(1043);
            var h = r(1387);
            var u = r(8368);
            var d = r(3782);
            function Decipher(e, t, r) {
                o.call(this);
                this._cache = new Splitter;
                this._last = void 0;
                this._cipher = new h.AES(t);
                this._prev = n.from(r);
                this._mode = e;
                this._autopadding = true;
            }
            d(Decipher, o);
            Decipher.prototype._update = function(e) {
                this._cache.add(e);
                var t;
                var r;
                var i = [];
                while(t = this._cache.get(this._autopadding)){
                    r = this._mode.decrypt(this, t);
                    i.push(r);
                }
                return n.concat(i);
            };
            Decipher.prototype._final = function() {
                var e = this._cache.flush();
                if (this._autopadding) {
                    return unpad(this._mode.decrypt(this, e));
                } else if (e) {
                    throw new Error("data not multiple of block length");
                }
            };
            Decipher.prototype.setAutoPadding = function(e) {
                this._autopadding = !!e;
                return this;
            };
            function Splitter() {
                this.cache = n.allocUnsafe(0);
            }
            Splitter.prototype.add = function(e) {
                this.cache = n.concat([
                    this.cache,
                    e
                ]);
            };
            Splitter.prototype.get = function(e) {
                var t;
                if (e) {
                    if (this.cache.length > 16) {
                        t = this.cache.slice(0, 16);
                        this.cache = this.cache.slice(16);
                        return t;
                    }
                } else {
                    if (this.cache.length >= 16) {
                        t = this.cache.slice(0, 16);
                        this.cache = this.cache.slice(16);
                        return t;
                    }
                }
                return null;
            };
            Splitter.prototype.flush = function() {
                if (this.cache.length) return this.cache;
            };
            function unpad(e) {
                var t = e[15];
                if (t < 1 || t > 16) {
                    throw new Error("unable to decrypt data");
                }
                var r = -1;
                while(++r < t){
                    if (e[r + (16 - t)] !== t) {
                        throw new Error("unable to decrypt data");
                    }
                }
                if (t === 16) return;
                return e.slice(0, 16 - t);
            }
            function createDecipheriv(e, t, r) {
                var o = a[e.toLowerCase()];
                if (!o) throw new TypeError("invalid suite type");
                if (typeof r === "string") r = n.from(r);
                if (o.mode !== "GCM" && r.length !== o.iv) throw new TypeError("invalid iv length " + r.length);
                if (typeof t === "string") t = n.from(t);
                if (t.length !== o.key / 8) throw new TypeError("invalid key length " + t.length);
                if (o.type === "stream") {
                    return new s(o.module, t, r, true);
                } else if (o.type === "auth") {
                    return new i(o.module, t, r, true);
                }
                return new Decipher(o.module, t, r);
            }
            function createDecipher(e, t) {
                var r = a[e.toLowerCase()];
                if (!r) throw new TypeError("invalid suite type");
                var i = u(t, false, r.key, r.iv);
                return createDecipheriv(e, i.key, i.iv);
            }
            t.createDecipher = createDecipher;
            t.createDecipheriv = createDecipheriv;
        },
        2: function(e, t, r) {
            var i = r(6370);
            var n = r(6624);
            var a = r(6911).Buffer;
            var s = r(126);
            var o = r(1043);
            var h = r(1387);
            var u = r(8368);
            var d = r(3782);
            function Cipher(e, t, r) {
                o.call(this);
                this._cache = new Splitter;
                this._cipher = new h.AES(t);
                this._prev = a.from(r);
                this._mode = e;
                this._autopadding = true;
            }
            d(Cipher, o);
            Cipher.prototype._update = function(e) {
                this._cache.add(e);
                var t;
                var r;
                var i = [];
                while(t = this._cache.get()){
                    r = this._mode.encrypt(this, t);
                    i.push(r);
                }
                return a.concat(i);
            };
            var c = a.alloc(16, 16);
            Cipher.prototype._final = function() {
                var e = this._cache.flush();
                if (this._autopadding) {
                    e = this._mode.encrypt(this, e);
                    this._cipher.scrub();
                    return e;
                }
                if (!e.equals(c)) {
                    this._cipher.scrub();
                    throw new Error("data not multiple of block length");
                }
            };
            Cipher.prototype.setAutoPadding = function(e) {
                this._autopadding = !!e;
                return this;
            };
            function Splitter() {
                this.cache = a.allocUnsafe(0);
            }
            Splitter.prototype.add = function(e) {
                this.cache = a.concat([
                    this.cache,
                    e
                ]);
            };
            Splitter.prototype.get = function() {
                if (this.cache.length > 15) {
                    var e = this.cache.slice(0, 16);
                    this.cache = this.cache.slice(16);
                    return e;
                }
                return null;
            };
            Splitter.prototype.flush = function() {
                var e = 16 - this.cache.length;
                var t = a.allocUnsafe(e);
                var r = -1;
                while(++r < e){
                    t.writeUInt8(e, r);
                }
                return a.concat([
                    this.cache,
                    t
                ]);
            };
            function createCipheriv(e, t, r) {
                var o = i[e.toLowerCase()];
                if (!o) throw new TypeError("invalid suite type");
                if (typeof t === "string") t = a.from(t);
                if (t.length !== o.key / 8) throw new TypeError("invalid key length " + t.length);
                if (typeof r === "string") r = a.from(r);
                if (o.mode !== "GCM" && r.length !== o.iv) throw new TypeError("invalid iv length " + r.length);
                if (o.type === "stream") {
                    return new s(o.module, t, r);
                } else if (o.type === "auth") {
                    return new n(o.module, t, r);
                }
                return new Cipher(o.module, t, r);
            }
            function createCipher(e, t) {
                var r = i[e.toLowerCase()];
                if (!r) throw new TypeError("invalid suite type");
                var n = u(t, false, r.key, r.iv);
                return createCipheriv(e, n.key, n.iv);
            }
            t.createCipheriv = createCipheriv;
            t.createCipher = createCipher;
        },
        7225: function(e, t, r) {
            var i = r(6911).Buffer;
            var n = i.alloc(16, 0);
            function toArray(e) {
                return [
                    e.readUInt32BE(0),
                    e.readUInt32BE(4),
                    e.readUInt32BE(8),
                    e.readUInt32BE(12)
                ];
            }
            function fromArray(e) {
                var t = i.allocUnsafe(16);
                t.writeUInt32BE(e[0] >>> 0, 0);
                t.writeUInt32BE(e[1] >>> 0, 4);
                t.writeUInt32BE(e[2] >>> 0, 8);
                t.writeUInt32BE(e[3] >>> 0, 12);
                return t;
            }
            function GHASH(e) {
                this.h = e;
                this.state = i.alloc(16, 0);
                this.cache = i.allocUnsafe(0);
            }
            GHASH.prototype.ghash = function(e) {
                var t = -1;
                while(++t < e.length){
                    this.state[t] ^= e[t];
                }
                this._multiply();
            };
            GHASH.prototype._multiply = function() {
                var e = toArray(this.h);
                var t = [
                    0,
                    0,
                    0,
                    0
                ];
                var r, i, n;
                var a = -1;
                while(++a < 128){
                    i = (this.state[~~(a / 8)] & 1 << 7 - a % 8) !== 0;
                    if (i) {
                        t[0] ^= e[0];
                        t[1] ^= e[1];
                        t[2] ^= e[2];
                        t[3] ^= e[3];
                    }
                    n = (e[3] & 1) !== 0;
                    for(r = 3; r > 0; r--){
                        e[r] = e[r] >>> 1 | (e[r - 1] & 1) << 31;
                    }
                    e[0] = e[0] >>> 1;
                    if (n) {
                        e[0] = e[0] ^ 225 << 24;
                    }
                }
                this.state = fromArray(t);
            };
            GHASH.prototype.update = function(e) {
                this.cache = i.concat([
                    this.cache,
                    e
                ]);
                var t;
                while(this.cache.length >= 16){
                    t = this.cache.slice(0, 16);
                    this.cache = this.cache.slice(16);
                    this.ghash(t);
                }
            };
            GHASH.prototype.final = function(e, t) {
                if (this.cache.length) {
                    this.ghash(i.concat([
                        this.cache,
                        n
                    ], 16));
                }
                this.ghash(fromArray([
                    0,
                    e,
                    0,
                    t
                ]));
                return this.state;
            };
            e.exports = GHASH;
        },
        598: function(e) {
            function incr32(e) {
                var t = e.length;
                var r;
                while(t--){
                    r = e.readUInt8(t);
                    if (r === 255) {
                        e.writeUInt8(0, t);
                    } else {
                        r++;
                        e.writeUInt8(r, t);
                        break;
                    }
                }
            }
            e.exports = incr32;
        },
        9825: function(e, t, r) {
            var i = r(4734);
            t.encrypt = function(e, t) {
                var r = i(t, e._prev);
                e._prev = e._cipher.encryptBlock(r);
                return e._prev;
            };
            t.decrypt = function(e, t) {
                var r = e._prev;
                e._prev = t;
                var n = e._cipher.decryptBlock(t);
                return i(n, r);
            };
        },
        321: function(e, t, r) {
            var i = r(6911).Buffer;
            var n = r(4734);
            function encryptStart(e, t, r) {
                var a = t.length;
                var s = n(t, e._cache);
                e._cache = e._cache.slice(a);
                e._prev = i.concat([
                    e._prev,
                    r ? t : s
                ]);
                return s;
            }
            t.encrypt = function(e, t, r) {
                var n = i.allocUnsafe(0);
                var a;
                while(t.length){
                    if (e._cache.length === 0) {
                        e._cache = e._cipher.encryptBlock(e._prev);
                        e._prev = i.allocUnsafe(0);
                    }
                    if (e._cache.length <= t.length) {
                        a = e._cache.length;
                        n = i.concat([
                            n,
                            encryptStart(e, t.slice(0, a), r)
                        ]);
                        t = t.slice(a);
                    } else {
                        n = i.concat([
                            n,
                            encryptStart(e, t, r)
                        ]);
                        break;
                    }
                }
                return n;
            };
        },
        3147: function(e, t, r) {
            var i = r(6911).Buffer;
            function encryptByte(e, t, r) {
                var i;
                var n = -1;
                var a = 8;
                var s = 0;
                var o, h;
                while(++n < a){
                    i = e._cipher.encryptBlock(e._prev);
                    o = t & 1 << 7 - n ? 128 : 0;
                    h = i[0] ^ o;
                    s += (h & 128) >> n % 8;
                    e._prev = shiftIn(e._prev, r ? o : h);
                }
                return s;
            }
            function shiftIn(e, t) {
                var r = e.length;
                var n = -1;
                var a = i.allocUnsafe(e.length);
                e = i.concat([
                    e,
                    i.from([
                        t
                    ])
                ]);
                while(++n < r){
                    a[n] = e[n] << 1 | e[n + 1] >> 7;
                }
                return a;
            }
            t.encrypt = function(e, t, r) {
                var n = t.length;
                var a = i.allocUnsafe(n);
                var s = -1;
                while(++s < n){
                    a[s] = encryptByte(e, t[s], r);
                }
                return a;
            };
        },
        2430: function(e, t, r) {
            var i = r(6911).Buffer;
            function encryptByte(e, t, r) {
                var n = e._cipher.encryptBlock(e._prev);
                var a = n[0] ^ t;
                e._prev = i.concat([
                    e._prev.slice(1),
                    i.from([
                        r ? t : a
                    ])
                ]);
                return a;
            }
            t.encrypt = function(e, t, r) {
                var n = t.length;
                var a = i.allocUnsafe(n);
                var s = -1;
                while(++s < n){
                    a[s] = encryptByte(e, t[s], r);
                }
                return a;
            };
        },
        3361: function(e, t, r) {
            var i = r(4734);
            var n = r(6911).Buffer;
            var a = r(598);
            function getBlock(e) {
                var t = e._cipher.encryptBlockRaw(e._prev);
                a(e._prev);
                return t;
            }
            var s = 16;
            t.encrypt = function(e, t) {
                var r = Math.ceil(t.length / s);
                var a = e._cache.length;
                e._cache = n.concat([
                    e._cache,
                    n.allocUnsafe(r * s)
                ]);
                for(var o = 0; o < r; o++){
                    var h = getBlock(e);
                    var u = a + o * s;
                    e._cache.writeUInt32BE(h[0], u + 0);
                    e._cache.writeUInt32BE(h[1], u + 4);
                    e._cache.writeUInt32BE(h[2], u + 8);
                    e._cache.writeUInt32BE(h[3], u + 12);
                }
                var d = e._cache.slice(0, t.length);
                e._cache = e._cache.slice(t.length);
                return i(t, d);
            };
        },
        1590: function(e, t) {
            t.encrypt = function(e, t) {
                return e._cipher.encryptBlock(t);
            };
            t.decrypt = function(e, t) {
                return e._cipher.decryptBlock(t);
            };
        },
        6370: function(e, t, r) {
            var i = {
                ECB: r(1590),
                CBC: r(9825),
                CFB: r(321),
                CFB8: r(2430),
                CFB1: r(3147),
                OFB: r(3412),
                CTR: r(3361),
                GCM: r(3361)
            };
            var n = r(5866);
            for(var a in n){
                n[a].module = i[n[a].mode];
            }
            e.exports = n;
        },
        3412: function(e, t, r) {
            var i = r(4734);
            function getBlock(e) {
                e._prev = e._cipher.encryptBlock(e._prev);
                return e._prev;
            }
            t.encrypt = function(e, t) {
                while(e._cache.length < t.length){
                    e._cache = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].concat([
                        e._cache,
                        getBlock(e)
                    ]);
                }
                var r = e._cache.slice(0, t.length);
                e._cache = e._cache.slice(t.length);
                return i(t, r);
            };
        },
        126: function(e, t, r) {
            var i = r(1387);
            var n = r(6911).Buffer;
            var a = r(1043);
            var s = r(3782);
            function StreamCipher(e, t, r, s) {
                a.call(this);
                this._cipher = new i.AES(t);
                this._prev = n.from(r);
                this._cache = n.allocUnsafe(0);
                this._secCache = n.allocUnsafe(0);
                this._decrypt = s;
                this._mode = e;
            }
            s(StreamCipher, a);
            StreamCipher.prototype._update = function(e) {
                return this._mode.encrypt(this, e, this._decrypt);
            };
            StreamCipher.prototype._final = function() {
                this._cipher.scrub();
            };
            e.exports = StreamCipher;
        },
        8996: function(e, t, r) {
            var i = r(5238);
            var n = r(6594);
            var a = r(6370);
            var s = r(6280);
            var o = r(8368);
            function createCipher(e, t) {
                e = e.toLowerCase();
                var r, i;
                if (a[e]) {
                    r = a[e].key;
                    i = a[e].iv;
                } else if (s[e]) {
                    r = s[e].key * 8;
                    i = s[e].iv;
                } else {
                    throw new TypeError("invalid suite type");
                }
                var n = o(t, false, r, i);
                return createCipheriv(e, n.key, n.iv);
            }
            function createDecipher(e, t) {
                e = e.toLowerCase();
                var r, i;
                if (a[e]) {
                    r = a[e].key;
                    i = a[e].iv;
                } else if (s[e]) {
                    r = s[e].key * 8;
                    i = s[e].iv;
                } else {
                    throw new TypeError("invalid suite type");
                }
                var n = o(t, false, r, i);
                return createDecipheriv(e, n.key, n.iv);
            }
            function createCipheriv(e, t, r) {
                e = e.toLowerCase();
                if (a[e]) return n.createCipheriv(e, t, r);
                if (s[e]) return new i({
                    key: t,
                    iv: r,
                    mode: e
                });
                throw new TypeError("invalid suite type");
            }
            function createDecipheriv(e, t, r) {
                e = e.toLowerCase();
                if (a[e]) return n.createDecipheriv(e, t, r);
                if (s[e]) return new i({
                    key: t,
                    iv: r,
                    mode: e,
                    decrypt: true
                });
                throw new TypeError("invalid suite type");
            }
            function getCiphers() {
                return Object.keys(s).concat(n.getCiphers());
            }
            t.createCipher = t.Cipher = createCipher;
            t.createCipheriv = t.Cipheriv = createCipheriv;
            t.createDecipher = t.Decipher = createDecipher;
            t.createDecipheriv = t.Decipheriv = createDecipheriv;
            t.listCiphers = t.getCiphers = getCiphers;
        },
        5238: function(e, t, r) {
            var i = r(1043);
            var n = r(9536);
            var a = r(3782);
            var s = r(6911).Buffer;
            var o = {
                "des-ede3-cbc": n.CBC.instantiate(n.EDE),
                "des-ede3": n.EDE,
                "des-ede-cbc": n.CBC.instantiate(n.EDE),
                "des-ede": n.EDE,
                "des-cbc": n.CBC.instantiate(n.DES),
                "des-ecb": n.DES
            };
            o.des = o["des-cbc"];
            o.des3 = o["des-ede3-cbc"];
            e.exports = DES;
            a(DES, i);
            function DES(e) {
                i.call(this);
                var t = e.mode.toLowerCase();
                var r = o[t];
                var n;
                if (e.decrypt) {
                    n = "decrypt";
                } else {
                    n = "encrypt";
                }
                var a = e.key;
                if (!s.isBuffer(a)) {
                    a = s.from(a);
                }
                if (t === "des-ede" || t === "des-ede-cbc") {
                    a = s.concat([
                        a,
                        a.slice(0, 8)
                    ]);
                }
                var h = e.iv;
                if (!s.isBuffer(h)) {
                    h = s.from(h);
                }
                this._des = r.create({
                    key: a,
                    iv: h,
                    type: n
                });
            }
            DES.prototype._update = function(e) {
                return s.from(this._des.update(e));
            };
            DES.prototype._final = function() {
                return s.from(this._des.final());
            };
        },
        6280: function(e, t) {
            t["des-ecb"] = {
                key: 8,
                iv: 0
            };
            t["des-cbc"] = t.des = {
                key: 8,
                iv: 8
            };
            t["des-ede3-cbc"] = t.des3 = {
                key: 24,
                iv: 8
            };
            t["des-ede3"] = {
                key: 24,
                iv: 0
            };
            t["des-ede-cbc"] = {
                key: 16,
                iv: 8
            };
            t["des-ede"] = {
                key: 16,
                iv: 0
            };
        },
        7166: function(e, t, r) {
            var i = r(711);
            var n = r(7223);
            e.exports = crt;
            function blind(e) {
                var t = getr(e);
                var r = t.toRed(i.mont(e.modulus)).redPow(new i(e.publicExponent)).fromRed();
                return {
                    blinder: r,
                    unblinder: t.invm(e.modulus)
                };
            }
            function crt(e, t) {
                var r = blind(t);
                var n = t.modulus.byteLength();
                var a = i.mont(t.modulus);
                var s = new i(e).mul(r.blinder).umod(t.modulus);
                var o = s.toRed(i.mont(t.prime1));
                var h = s.toRed(i.mont(t.prime2));
                var u = t.coefficient;
                var d = t.prime1;
                var c = t.prime2;
                var l = o.redPow(t.exponent1);
                var p = h.redPow(t.exponent2);
                l = l.fromRed();
                p = p.fromRed();
                var v = l.isub(p).imul(u).umod(d);
                v.imul(c);
                p.iadd(v);
                return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"](p.imul(r.unblinder).umod(t.modulus).toArray(false, n));
            }
            crt.getr = getr;
            function getr(e) {
                var t = e.modulus.byteLength();
                var r = new i(n(t));
                while(r.cmp(e.modulus) >= 0 || !r.umod(e.prime1) || !r.umod(e.prime2)){
                    r = new i(n(t));
                }
                return r;
            }
        },
        9276: function(e, t, r) {
            e.exports = r(2908);
        },
        4078: function(e, t, r) {
            var i = r(6911).Buffer;
            var n = r(9739);
            var a = r(3726);
            var s = r(3782);
            var o = r(9807);
            var h = r(4013);
            var u = r(2908);
            Object.keys(u).forEach(function(e) {
                u[e].id = i.from(u[e].id, "hex");
                u[e.toLowerCase()] = u[e];
            });
            function Sign(e) {
                a.Writable.call(this);
                var t = u[e];
                if (!t) throw new Error("Unknown message digest");
                this._hashType = t.hash;
                this._hash = n(t.hash);
                this._tag = t.id;
                this._signType = t.sign;
            }
            s(Sign, a.Writable);
            Sign.prototype._write = function _write(e, t, r) {
                this._hash.update(e);
                r();
            };
            Sign.prototype.update = function update(e, t) {
                if (typeof e === "string") e = i.from(e, t);
                this._hash.update(e);
                return this;
            };
            Sign.prototype.sign = function signMethod(e, t) {
                this.end();
                var r = this._hash.digest();
                var i = o(r, e, this._hashType, this._signType, this._tag);
                return t ? i.toString(t) : i;
            };
            function Verify(e) {
                a.Writable.call(this);
                var t = u[e];
                if (!t) throw new Error("Unknown message digest");
                this._hash = n(t.hash);
                this._tag = t.id;
                this._signType = t.sign;
            }
            s(Verify, a.Writable);
            Verify.prototype._write = function _write(e, t, r) {
                this._hash.update(e);
                r();
            };
            Verify.prototype.update = function update(e, t) {
                if (typeof e === "string") e = i.from(e, t);
                this._hash.update(e);
                return this;
            };
            Verify.prototype.verify = function verifyMethod(e, t, r) {
                if (typeof t === "string") t = i.from(t, r);
                this.end();
                var n = this._hash.digest();
                return h(t, n, e, this._signType, this._tag);
            };
            function createSign(e) {
                return new Sign(e);
            }
            function createVerify(e) {
                return new Verify(e);
            }
            e.exports = {
                Sign: createSign,
                Verify: createVerify,
                createSign: createSign,
                createVerify: createVerify
            };
        },
        9807: function(e, t, r) {
            var i = r(6911).Buffer;
            var n = r(4873);
            var a = r(7166);
            var s = r(949).ec;
            var o = r(1670);
            var h = r(9902);
            var u = r(9267);
            function sign(e, t, r, n, s) {
                var o = h(t);
                if (o.curve) {
                    if (n !== "ecdsa" && n !== "ecdsa/rsa") throw new Error("wrong private key type");
                    return ecSign(e, o);
                } else if (o.type === "dsa") {
                    if (n !== "dsa") throw new Error("wrong private key type");
                    return dsaSign(e, o, r);
                } else {
                    if (n !== "rsa" && n !== "ecdsa/rsa") throw new Error("wrong private key type");
                }
                e = i.concat([
                    s,
                    e
                ]);
                var u = o.modulus.byteLength();
                var d = [
                    0,
                    1
                ];
                while(e.length + d.length + 1 < u)d.push(255);
                d.push(0);
                var c = -1;
                while(++c < e.length)d.push(e[c]);
                var l = a(d, o);
                return l;
            }
            function ecSign(e, t) {
                var r = u[t.curve.join(".")];
                if (!r) throw new Error("unknown curve " + t.curve.join("."));
                var n = new s(r);
                var a = n.keyFromPrivate(t.privateKey);
                var o = a.sign(e);
                return i.from(o.toDER());
            }
            function dsaSign(e, t, r) {
                var i = t.params.priv_key;
                var n = t.params.p;
                var a = t.params.q;
                var s = t.params.g;
                var h = new o(0);
                var u;
                var d = bits2int(e, a).mod(a);
                var c = false;
                var l = getKey(i, a, e, r);
                while(c === false){
                    u = makeKey(a, l, r);
                    h = makeR(s, u, n, a);
                    c = u.invm(a).imul(d.add(i.mul(h))).mod(a);
                    if (c.cmpn(0) === 0) {
                        c = false;
                        h = new o(0);
                    }
                }
                return toDER(h, c);
            }
            function toDER(e, t) {
                e = e.toArray();
                t = t.toArray();
                if (e[0] & 128) e = [
                    0
                ].concat(e);
                if (t[0] & 128) t = [
                    0
                ].concat(t);
                var r = e.length + t.length + 4;
                var n = [
                    48,
                    r,
                    2,
                    e.length
                ];
                n = n.concat(e, [
                    2,
                    t.length
                ], t);
                return i.from(n);
            }
            function getKey(e, t, r, a) {
                e = i.from(e.toArray());
                if (e.length < t.byteLength()) {
                    var s = i.alloc(t.byteLength() - e.length);
                    e = i.concat([
                        s,
                        e
                    ]);
                }
                var o = r.length;
                var h = bits2octets(r, t);
                var u = i.alloc(o);
                u.fill(1);
                var d = i.alloc(o);
                d = n(a, d).update(u).update(i.from([
                    0
                ])).update(e).update(h).digest();
                u = n(a, d).update(u).digest();
                d = n(a, d).update(u).update(i.from([
                    1
                ])).update(e).update(h).digest();
                u = n(a, d).update(u).digest();
                return {
                    k: d,
                    v: u
                };
            }
            function bits2int(e, t) {
                var r = new o(e);
                var i = (e.length << 3) - t.bitLength();
                if (i > 0) r.ishrn(i);
                return r;
            }
            function bits2octets(e, t) {
                e = bits2int(e, t);
                e = e.mod(t);
                var r = i.from(e.toArray());
                if (r.length < t.byteLength()) {
                    var n = i.alloc(t.byteLength() - r.length);
                    r = i.concat([
                        n,
                        r
                    ]);
                }
                return r;
            }
            function makeKey(e, t, r) {
                var a;
                var s;
                do {
                    a = i.alloc(0);
                    while(a.length * 8 < e.bitLength()){
                        t.v = n(r, t.k).update(t.v).digest();
                        a = i.concat([
                            a,
                            t.v
                        ]);
                    }
                    s = bits2int(a, e);
                    t.k = n(r, t.k).update(t.v).update(i.from([
                        0
                    ])).digest();
                    t.v = n(r, t.k).update(t.v).digest();
                }while (s.cmp(e) !== -1)
                return s;
            }
            function makeR(e, t, r, i) {
                return e.toRed(o.mont(r)).redPow(t).fromRed().mod(i);
            }
            e.exports = sign;
            e.exports.getKey = getKey;
            e.exports.makeKey = makeKey;
        },
        4013: function(e, t, r) {
            var i = r(6911).Buffer;
            var n = r(1670);
            var a = r(949).ec;
            var s = r(9902);
            var o = r(9267);
            function verify(e, t, r, a, o) {
                var h = s(r);
                if (h.type === "ec") {
                    if (a !== "ecdsa" && a !== "ecdsa/rsa") throw new Error("wrong public key type");
                    return ecVerify(e, t, h);
                } else if (h.type === "dsa") {
                    if (a !== "dsa") throw new Error("wrong public key type");
                    return dsaVerify(e, t, h);
                } else {
                    if (a !== "rsa" && a !== "ecdsa/rsa") throw new Error("wrong public key type");
                }
                t = i.concat([
                    o,
                    t
                ]);
                var u = h.modulus.byteLength();
                var d = [
                    1
                ];
                var c = 0;
                while(t.length + d.length + 2 < u){
                    d.push(255);
                    c++;
                }
                d.push(0);
                var l = -1;
                while(++l < t.length){
                    d.push(t[l]);
                }
                d = i.from(d);
                var p = n.mont(h.modulus);
                e = new n(e).toRed(p);
                e = e.redPow(new n(h.publicExponent));
                e = i.from(e.fromRed().toArray());
                var v = c < 8 ? 1 : 0;
                u = Math.min(e.length, d.length);
                if (e.length !== d.length) v = 1;
                l = -1;
                while(++l < u)v |= e[l] ^ d[l];
                return v === 0;
            }
            function ecVerify(e, t, r) {
                var i = o[r.data.algorithm.curve.join(".")];
                if (!i) throw new Error("unknown curve " + r.data.algorithm.curve.join("."));
                var n = new a(i);
                var s = r.data.subjectPrivateKey.data;
                return n.verify(t, e, s);
            }
            function dsaVerify(e, t, r) {
                var i = r.data.p;
                var a = r.data.q;
                var o = r.data.g;
                var h = r.data.pub_key;
                var u = s.signature.decode(e, "der");
                var d = u.s;
                var c = u.r;
                checkValue(d, a);
                checkValue(c, a);
                var l = n.mont(i);
                var p = d.invm(a);
                var v = o.toRed(l).redPow(new n(t).mul(p).mod(a)).fromRed().mul(h.toRed(l).redPow(c.mul(p).mod(a)).fromRed()).mod(i).mod(a);
                return v.cmp(c) === 0;
            }
            function checkValue(e, t) {
                if (e.cmpn(0) <= 0) throw new Error("invalid sig");
                if (e.cmp(t) >= t) throw new Error("invalid sig");
            }
            e.exports = verify;
        },
        4734: function(e) {
            e.exports = function xor(e, t) {
                var r = Math.min(e.length, t.length);
                var i = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"](r);
                for(var n = 0; n < r; ++n){
                    i[n] = e[n] ^ t[n];
                }
                return i;
            };
        },
        1043: function(e, t, r) {
            var i = r(6911).Buffer;
            var n = r(2781).Transform;
            var a = r(1576).StringDecoder;
            var s = r(3782);
            function CipherBase(e) {
                n.call(this);
                this.hashMode = typeof e === "string";
                if (this.hashMode) {
                    this[e] = this._finalOrDigest;
                } else {
                    this.final = this._finalOrDigest;
                }
                if (this._final) {
                    this.__final = this._final;
                    this._final = null;
                }
                this._decoder = null;
                this._encoding = null;
            }
            s(CipherBase, n);
            CipherBase.prototype.update = function(e, t, r) {
                if (typeof e === "string") {
                    e = i.from(e, t);
                }
                var n = this._update(e);
                if (this.hashMode) return this;
                if (r) {
                    n = this._toString(n, r);
                }
                return n;
            };
            CipherBase.prototype.setAutoPadding = function() {};
            CipherBase.prototype.getAuthTag = function() {
                throw new Error("trying to get auth tag in unsupported state");
            };
            CipherBase.prototype.setAuthTag = function() {
                throw new Error("trying to set auth tag in unsupported state");
            };
            CipherBase.prototype.setAAD = function() {
                throw new Error("trying to set aad in unsupported state");
            };
            CipherBase.prototype._transform = function(e, t, r) {
                var i;
                try {
                    if (this.hashMode) {
                        this._update(e);
                    } else {
                        this.push(this._update(e));
                    }
                } catch (e) {
                    i = e;
                } finally{
                    r(i);
                }
            };
            CipherBase.prototype._flush = function(e) {
                var t;
                try {
                    this.push(this.__final());
                } catch (e) {
                    t = e;
                }
                e(t);
            };
            CipherBase.prototype._finalOrDigest = function(e) {
                var t = this.__final() || i.alloc(0);
                if (e) {
                    t = this._toString(t, e, true);
                }
                return t;
            };
            CipherBase.prototype._toString = function(e, t, r) {
                if (!this._decoder) {
                    this._decoder = new a(t);
                    this._encoding = t;
                }
                if (this._encoding !== t) throw new Error("can't switch encodings");
                var i = this._decoder.write(e);
                if (r) {
                    i += this._decoder.end();
                }
                return i;
            };
            e.exports = CipherBase;
        },
        9942: function(e, t, r) {
            var i = r(949);
            var n = r(711);
            e.exports = function createECDH(e) {
                return new ECDH(e);
            };
            var a = {
                secp256k1: {
                    name: "secp256k1",
                    byteLength: 32
                },
                secp224r1: {
                    name: "p224",
                    byteLength: 28
                },
                prime256v1: {
                    name: "p256",
                    byteLength: 32
                },
                prime192v1: {
                    name: "p192",
                    byteLength: 24
                },
                ed25519: {
                    name: "ed25519",
                    byteLength: 32
                },
                secp384r1: {
                    name: "p384",
                    byteLength: 48
                },
                secp521r1: {
                    name: "p521",
                    byteLength: 66
                }
            };
            a.p224 = a.secp224r1;
            a.p256 = a.secp256r1 = a.prime256v1;
            a.p192 = a.secp192r1 = a.prime192v1;
            a.p384 = a.secp384r1;
            a.p521 = a.secp521r1;
            function ECDH(e) {
                this.curveType = a[e];
                if (!this.curveType) {
                    this.curveType = {
                        name: e
                    };
                }
                this.curve = new i.ec(this.curveType.name);
                this.keys = void 0;
            }
            ECDH.prototype.generateKeys = function(e, t) {
                this.keys = this.curve.genKeyPair();
                return this.getPublicKey(e, t);
            };
            ECDH.prototype.computeSecret = function(e, t, r) {
                t = t || "utf8";
                if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].isBuffer(e)) {
                    e = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"](e, t);
                }
                var i = this.curve.keyFromPublic(e).getPublic();
                var n = i.mul(this.keys.getPrivate()).getX();
                return formatReturnValue(n, r, this.curveType.byteLength);
            };
            ECDH.prototype.getPublicKey = function(e, t) {
                var r = this.keys.getPublic(t === "compressed", true);
                if (t === "hybrid") {
                    if (r[r.length - 1] % 2) {
                        r[0] = 7;
                    } else {
                        r[0] = 6;
                    }
                }
                return formatReturnValue(r, e);
            };
            ECDH.prototype.getPrivateKey = function(e) {
                return formatReturnValue(this.keys.getPrivate(), e);
            };
            ECDH.prototype.setPublicKey = function(e, t) {
                t = t || "utf8";
                if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].isBuffer(e)) {
                    e = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"](e, t);
                }
                this.keys._importPublic(e);
                return this;
            };
            ECDH.prototype.setPrivateKey = function(e, t) {
                t = t || "utf8";
                if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].isBuffer(e)) {
                    e = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"](e, t);
                }
                var r = new n(e);
                r = r.toString(16);
                this.keys = this.curve.genKeyPair();
                this.keys._importPrivate(r);
                return this;
            };
            function formatReturnValue(e, t, r) {
                if (!Array.isArray(e)) {
                    e = e.toArray();
                }
                var i = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"](e);
                if (r && i.length < r) {
                    var n = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"](r - i.length);
                    n.fill(0);
                    i = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].concat([
                        n,
                        i
                    ]);
                }
                if (!t) {
                    return i;
                } else {
                    return i.toString(t);
                }
            }
        },
        9739: function(e, t, r) {
            "use strict";
            var i = r(3782);
            var n = r(3533);
            var a = r(3225);
            var s = r(4371);
            var o = r(1043);
            function Hash(e) {
                o.call(this, "digest");
                this._hash = e;
            }
            i(Hash, o);
            Hash.prototype._update = function(e) {
                this._hash.update(e);
            };
            Hash.prototype._final = function() {
                return this._hash.digest();
            };
            e.exports = function createHash(e) {
                e = e.toLowerCase();
                if (e === "md5") return new n;
                if (e === "rmd160" || e === "ripemd160") return new a;
                return new Hash(s(e));
            };
        },
        450: function(e, t, r) {
            var i = r(3533);
            e.exports = function(e) {
                return (new i).update(e).digest();
            };
        },
        4873: function(e, t, r) {
            "use strict";
            var i = r(3782);
            var n = r(8119);
            var a = r(1043);
            var s = r(6911).Buffer;
            var o = r(450);
            var h = r(3225);
            var u = r(4371);
            var d = s.alloc(128);
            function Hmac(e, t) {
                a.call(this, "digest");
                if (typeof t === "string") {
                    t = s.from(t);
                }
                var r = e === "sha512" || e === "sha384" ? 128 : 64;
                this._alg = e;
                this._key = t;
                if (t.length > r) {
                    var i = e === "rmd160" ? new h : u(e);
                    t = i.update(t).digest();
                } else if (t.length < r) {
                    t = s.concat([
                        t,
                        d
                    ], r);
                }
                var n = this._ipad = s.allocUnsafe(r);
                var o = this._opad = s.allocUnsafe(r);
                for(var c = 0; c < r; c++){
                    n[c] = t[c] ^ 54;
                    o[c] = t[c] ^ 92;
                }
                this._hash = e === "rmd160" ? new h : u(e);
                this._hash.update(n);
            }
            i(Hmac, a);
            Hmac.prototype._update = function(e) {
                this._hash.update(e);
            };
            Hmac.prototype._final = function() {
                var e = this._hash.digest();
                var t = this._alg === "rmd160" ? new h : u(this._alg);
                return t.update(this._opad).update(e).digest();
            };
            e.exports = function createHmac(e, t) {
                e = e.toLowerCase();
                if (e === "rmd160" || e === "ripemd160") {
                    return new Hmac("rmd160", t);
                }
                if (e === "md5") {
                    return new n(o, t);
                }
                return new Hmac(e, t);
            };
        },
        8119: function(e, t, r) {
            "use strict";
            var i = r(3782);
            var n = r(6911).Buffer;
            var a = r(1043);
            var s = n.alloc(128);
            var o = 64;
            function Hmac(e, t) {
                a.call(this, "digest");
                if (typeof t === "string") {
                    t = n.from(t);
                }
                this._alg = e;
                this._key = t;
                if (t.length > o) {
                    t = e(t);
                } else if (t.length < o) {
                    t = n.concat([
                        t,
                        s
                    ], o);
                }
                var r = this._ipad = n.allocUnsafe(o);
                var i = this._opad = n.allocUnsafe(o);
                for(var h = 0; h < o; h++){
                    r[h] = t[h] ^ 54;
                    i[h] = t[h] ^ 92;
                }
                this._hash = [
                    r
                ];
            }
            i(Hmac, a);
            Hmac.prototype._update = function(e) {
                this._hash.push(e);
            };
            Hmac.prototype._final = function() {
                var e = this._alg(n.concat(this._hash));
                return this._alg(n.concat([
                    this._opad,
                    e
                ]));
            };
            e.exports = Hmac;
        },
        9536: function(e, t, r) {
            "use strict";
            t.utils = r(5334);
            t.Cipher = r(9876);
            t.DES = r(1016);
            t.CBC = r(8641);
            t.EDE = r(6159);
        },
        8641: function(e, t, r) {
            "use strict";
            var i = r(3523);
            var n = r(3782);
            var a = {};
            function CBCState(e) {
                i.equal(e.length, 8, "Invalid IV length");
                this.iv = new Array(8);
                for(var t = 0; t < this.iv.length; t++)this.iv[t] = e[t];
            }
            function instantiate(e) {
                function CBC(t) {
                    e.call(this, t);
                    this._cbcInit();
                }
                n(CBC, e);
                var t = Object.keys(a);
                for(var r = 0; r < t.length; r++){
                    var i = t[r];
                    CBC.prototype[i] = a[i];
                }
                CBC.create = function create(e) {
                    return new CBC(e);
                };
                return CBC;
            }
            t.instantiate = instantiate;
            a._cbcInit = function _cbcInit() {
                var e = new CBCState(this.options.iv);
                this._cbcState = e;
            };
            a._update = function _update(e, t, r, i) {
                var n = this._cbcState;
                var a = this.constructor.super_.prototype;
                var s = n.iv;
                if (this.type === "encrypt") {
                    for(var o = 0; o < this.blockSize; o++)s[o] ^= e[t + o];
                    a._update.call(this, s, 0, r, i);
                    for(var o = 0; o < this.blockSize; o++)s[o] = r[i + o];
                } else {
                    a._update.call(this, e, t, r, i);
                    for(var o = 0; o < this.blockSize; o++)r[i + o] ^= s[o];
                    for(var o = 0; o < this.blockSize; o++)s[o] = e[t + o];
                }
            };
        },
        9876: function(e, t, r) {
            "use strict";
            var i = r(3523);
            function Cipher(e) {
                this.options = e;
                this.type = this.options.type;
                this.blockSize = 8;
                this._init();
                this.buffer = new Array(this.blockSize);
                this.bufferOff = 0;
            }
            e.exports = Cipher;
            Cipher.prototype._init = function _init() {};
            Cipher.prototype.update = function update(e) {
                if (e.length === 0) return [];
                if (this.type === "decrypt") return this._updateDecrypt(e);
                else return this._updateEncrypt(e);
            };
            Cipher.prototype._buffer = function _buffer(e, t) {
                var r = Math.min(this.buffer.length - this.bufferOff, e.length - t);
                for(var i = 0; i < r; i++)this.buffer[this.bufferOff + i] = e[t + i];
                this.bufferOff += r;
                return r;
            };
            Cipher.prototype._flushBuffer = function _flushBuffer(e, t) {
                this._update(this.buffer, 0, e, t);
                this.bufferOff = 0;
                return this.blockSize;
            };
            Cipher.prototype._updateEncrypt = function _updateEncrypt(e) {
                var t = 0;
                var r = 0;
                var i = (this.bufferOff + e.length) / this.blockSize | 0;
                var n = new Array(i * this.blockSize);
                if (this.bufferOff !== 0) {
                    t += this._buffer(e, t);
                    if (this.bufferOff === this.buffer.length) r += this._flushBuffer(n, r);
                }
                var a = e.length - (e.length - t) % this.blockSize;
                for(; t < a; t += this.blockSize){
                    this._update(e, t, n, r);
                    r += this.blockSize;
                }
                for(; t < e.length; t++, this.bufferOff++)this.buffer[this.bufferOff] = e[t];
                return n;
            };
            Cipher.prototype._updateDecrypt = function _updateDecrypt(e) {
                var t = 0;
                var r = 0;
                var i = Math.ceil((this.bufferOff + e.length) / this.blockSize) - 1;
                var n = new Array(i * this.blockSize);
                for(; i > 0; i--){
                    t += this._buffer(e, t);
                    r += this._flushBuffer(n, r);
                }
                t += this._buffer(e, t);
                return n;
            };
            Cipher.prototype.final = function final(e) {
                var t;
                if (e) t = this.update(e);
                var r;
                if (this.type === "encrypt") r = this._finalEncrypt();
                else r = this._finalDecrypt();
                if (t) return t.concat(r);
                else return r;
            };
            Cipher.prototype._pad = function _pad(e, t) {
                if (t === 0) return false;
                while(t < e.length)e[t++] = 0;
                return true;
            };
            Cipher.prototype._finalEncrypt = function _finalEncrypt() {
                if (!this._pad(this.buffer, this.bufferOff)) return [];
                var e = new Array(this.blockSize);
                this._update(this.buffer, 0, e, 0);
                return e;
            };
            Cipher.prototype._unpad = function _unpad(e) {
                return e;
            };
            Cipher.prototype._finalDecrypt = function _finalDecrypt() {
                i.equal(this.bufferOff, this.blockSize, "Not enough data to decrypt");
                var e = new Array(this.blockSize);
                this._flushBuffer(e, 0);
                return this._unpad(e);
            };
        },
        1016: function(e, t, r) {
            "use strict";
            var i = r(3523);
            var n = r(3782);
            var a = r(5334);
            var s = r(9876);
            function DESState() {
                this.tmp = new Array(2);
                this.keys = null;
            }
            function DES(e) {
                s.call(this, e);
                var t = new DESState;
                this._desState = t;
                this.deriveKeys(t, e.key);
            }
            n(DES, s);
            e.exports = DES;
            DES.create = function create(e) {
                return new DES(e);
            };
            var o = [
                1,
                1,
                2,
                2,
                2,
                2,
                2,
                2,
                1,
                2,
                2,
                2,
                2,
                2,
                2,
                1
            ];
            DES.prototype.deriveKeys = function deriveKeys(e, t) {
                e.keys = new Array(16 * 2);
                i.equal(t.length, this.blockSize, "Invalid key length");
                var r = a.readUInt32BE(t, 0);
                var n = a.readUInt32BE(t, 4);
                a.pc1(r, n, e.tmp, 0);
                r = e.tmp[0];
                n = e.tmp[1];
                for(var s = 0; s < e.keys.length; s += 2){
                    var h = o[s >>> 1];
                    r = a.r28shl(r, h);
                    n = a.r28shl(n, h);
                    a.pc2(r, n, e.keys, s);
                }
            };
            DES.prototype._update = function _update(e, t, r, i) {
                var n = this._desState;
                var s = a.readUInt32BE(e, t);
                var o = a.readUInt32BE(e, t + 4);
                a.ip(s, o, n.tmp, 0);
                s = n.tmp[0];
                o = n.tmp[1];
                if (this.type === "encrypt") this._encrypt(n, s, o, n.tmp, 0);
                else this._decrypt(n, s, o, n.tmp, 0);
                s = n.tmp[0];
                o = n.tmp[1];
                a.writeUInt32BE(r, s, i);
                a.writeUInt32BE(r, o, i + 4);
            };
            DES.prototype._pad = function _pad(e, t) {
                var r = e.length - t;
                for(var i = t; i < e.length; i++)e[i] = r;
                return true;
            };
            DES.prototype._unpad = function _unpad(e) {
                var t = e[e.length - 1];
                for(var r = e.length - t; r < e.length; r++)i.equal(e[r], t);
                return e.slice(0, e.length - t);
            };
            DES.prototype._encrypt = function _encrypt(e, t, r, i, n) {
                var s = t;
                var o = r;
                for(var h = 0; h < e.keys.length; h += 2){
                    var u = e.keys[h];
                    var d = e.keys[h + 1];
                    a.expand(o, e.tmp, 0);
                    u ^= e.tmp[0];
                    d ^= e.tmp[1];
                    var c = a.substitute(u, d);
                    var l = a.permute(c);
                    var p = o;
                    o = (s ^ l) >>> 0;
                    s = p;
                }
                a.rip(o, s, i, n);
            };
            DES.prototype._decrypt = function _decrypt(e, t, r, i, n) {
                var s = r;
                var o = t;
                for(var h = e.keys.length - 2; h >= 0; h -= 2){
                    var u = e.keys[h];
                    var d = e.keys[h + 1];
                    a.expand(s, e.tmp, 0);
                    u ^= e.tmp[0];
                    d ^= e.tmp[1];
                    var c = a.substitute(u, d);
                    var l = a.permute(c);
                    var p = s;
                    s = (o ^ l) >>> 0;
                    o = p;
                }
                a.rip(s, o, i, n);
            };
        },
        6159: function(e, t, r) {
            "use strict";
            var i = r(3523);
            var n = r(3782);
            var a = r(9876);
            var s = r(1016);
            function EDEState(e, t) {
                i.equal(t.length, 24, "Invalid key length");
                var r = t.slice(0, 8);
                var n = t.slice(8, 16);
                var a = t.slice(16, 24);
                if (e === "encrypt") {
                    this.ciphers = [
                        s.create({
                            type: "encrypt",
                            key: r
                        }),
                        s.create({
                            type: "decrypt",
                            key: n
                        }),
                        s.create({
                            type: "encrypt",
                            key: a
                        })
                    ];
                } else {
                    this.ciphers = [
                        s.create({
                            type: "decrypt",
                            key: a
                        }),
                        s.create({
                            type: "encrypt",
                            key: n
                        }),
                        s.create({
                            type: "decrypt",
                            key: r
                        })
                    ];
                }
            }
            function EDE(e) {
                a.call(this, e);
                var t = new EDEState(this.type, this.options.key);
                this._edeState = t;
            }
            n(EDE, a);
            e.exports = EDE;
            EDE.create = function create(e) {
                return new EDE(e);
            };
            EDE.prototype._update = function _update(e, t, r, i) {
                var n = this._edeState;
                n.ciphers[0]._update(e, t, r, i);
                n.ciphers[1]._update(r, i, r, i);
                n.ciphers[2]._update(r, i, r, i);
            };
            EDE.prototype._pad = s.prototype._pad;
            EDE.prototype._unpad = s.prototype._unpad;
        },
        5334: function(e, t) {
            "use strict";
            t.readUInt32BE = function readUInt32BE(e, t) {
                var r = e[0 + t] << 24 | e[1 + t] << 16 | e[2 + t] << 8 | e[3 + t];
                return r >>> 0;
            };
            t.writeUInt32BE = function writeUInt32BE(e, t, r) {
                e[0 + r] = t >>> 24;
                e[1 + r] = t >>> 16 & 255;
                e[2 + r] = t >>> 8 & 255;
                e[3 + r] = t & 255;
            };
            t.ip = function ip(e, t, r, i) {
                var n = 0;
                var a = 0;
                for(var s = 6; s >= 0; s -= 2){
                    for(var o = 0; o <= 24; o += 8){
                        n <<= 1;
                        n |= t >>> o + s & 1;
                    }
                    for(var o = 0; o <= 24; o += 8){
                        n <<= 1;
                        n |= e >>> o + s & 1;
                    }
                }
                for(var s = 6; s >= 0; s -= 2){
                    for(var o = 1; o <= 25; o += 8){
                        a <<= 1;
                        a |= t >>> o + s & 1;
                    }
                    for(var o = 1; o <= 25; o += 8){
                        a <<= 1;
                        a |= e >>> o + s & 1;
                    }
                }
                r[i + 0] = n >>> 0;
                r[i + 1] = a >>> 0;
            };
            t.rip = function rip(e, t, r, i) {
                var n = 0;
                var a = 0;
                for(var s = 0; s < 4; s++){
                    for(var o = 24; o >= 0; o -= 8){
                        n <<= 1;
                        n |= t >>> o + s & 1;
                        n <<= 1;
                        n |= e >>> o + s & 1;
                    }
                }
                for(var s = 4; s < 8; s++){
                    for(var o = 24; o >= 0; o -= 8){
                        a <<= 1;
                        a |= t >>> o + s & 1;
                        a <<= 1;
                        a |= e >>> o + s & 1;
                    }
                }
                r[i + 0] = n >>> 0;
                r[i + 1] = a >>> 0;
            };
            t.pc1 = function pc1(e, t, r, i) {
                var n = 0;
                var a = 0;
                for(var s = 7; s >= 5; s--){
                    for(var o = 0; o <= 24; o += 8){
                        n <<= 1;
                        n |= t >> o + s & 1;
                    }
                    for(var o = 0; o <= 24; o += 8){
                        n <<= 1;
                        n |= e >> o + s & 1;
                    }
                }
                for(var o = 0; o <= 24; o += 8){
                    n <<= 1;
                    n |= t >> o + s & 1;
                }
                for(var s = 1; s <= 3; s++){
                    for(var o = 0; o <= 24; o += 8){
                        a <<= 1;
                        a |= t >> o + s & 1;
                    }
                    for(var o = 0; o <= 24; o += 8){
                        a <<= 1;
                        a |= e >> o + s & 1;
                    }
                }
                for(var o = 0; o <= 24; o += 8){
                    a <<= 1;
                    a |= e >> o + s & 1;
                }
                r[i + 0] = n >>> 0;
                r[i + 1] = a >>> 0;
            };
            t.r28shl = function r28shl(e, t) {
                return e << t & 268435455 | e >>> 28 - t;
            };
            var r = [
                14,
                11,
                17,
                4,
                27,
                23,
                25,
                0,
                13,
                22,
                7,
                18,
                5,
                9,
                16,
                24,
                2,
                20,
                12,
                21,
                1,
                8,
                15,
                26,
                15,
                4,
                25,
                19,
                9,
                1,
                26,
                16,
                5,
                11,
                23,
                8,
                12,
                7,
                17,
                0,
                22,
                3,
                10,
                14,
                6,
                20,
                27,
                24
            ];
            t.pc2 = function pc2(e, t, i, n) {
                var a = 0;
                var s = 0;
                var o = r.length >>> 1;
                for(var h = 0; h < o; h++){
                    a <<= 1;
                    a |= e >>> r[h] & 1;
                }
                for(var h = o; h < r.length; h++){
                    s <<= 1;
                    s |= t >>> r[h] & 1;
                }
                i[n + 0] = a >>> 0;
                i[n + 1] = s >>> 0;
            };
            t.expand = function expand(e, t, r) {
                var i = 0;
                var n = 0;
                i = (e & 1) << 5 | e >>> 27;
                for(var a = 23; a >= 15; a -= 4){
                    i <<= 6;
                    i |= e >>> a & 63;
                }
                for(var a = 11; a >= 3; a -= 4){
                    n |= e >>> a & 63;
                    n <<= 6;
                }
                n |= (e & 31) << 1 | e >>> 31;
                t[r + 0] = i >>> 0;
                t[r + 1] = n >>> 0;
            };
            var i = [
                14,
                0,
                4,
                15,
                13,
                7,
                1,
                4,
                2,
                14,
                15,
                2,
                11,
                13,
                8,
                1,
                3,
                10,
                10,
                6,
                6,
                12,
                12,
                11,
                5,
                9,
                9,
                5,
                0,
                3,
                7,
                8,
                4,
                15,
                1,
                12,
                14,
                8,
                8,
                2,
                13,
                4,
                6,
                9,
                2,
                1,
                11,
                7,
                15,
                5,
                12,
                11,
                9,
                3,
                7,
                14,
                3,
                10,
                10,
                0,
                5,
                6,
                0,
                13,
                15,
                3,
                1,
                13,
                8,
                4,
                14,
                7,
                6,
                15,
                11,
                2,
                3,
                8,
                4,
                14,
                9,
                12,
                7,
                0,
                2,
                1,
                13,
                10,
                12,
                6,
                0,
                9,
                5,
                11,
                10,
                5,
                0,
                13,
                14,
                8,
                7,
                10,
                11,
                1,
                10,
                3,
                4,
                15,
                13,
                4,
                1,
                2,
                5,
                11,
                8,
                6,
                12,
                7,
                6,
                12,
                9,
                0,
                3,
                5,
                2,
                14,
                15,
                9,
                10,
                13,
                0,
                7,
                9,
                0,
                14,
                9,
                6,
                3,
                3,
                4,
                15,
                6,
                5,
                10,
                1,
                2,
                13,
                8,
                12,
                5,
                7,
                14,
                11,
                12,
                4,
                11,
                2,
                15,
                8,
                1,
                13,
                1,
                6,
                10,
                4,
                13,
                9,
                0,
                8,
                6,
                15,
                9,
                3,
                8,
                0,
                7,
                11,
                4,
                1,
                15,
                2,
                14,
                12,
                3,
                5,
                11,
                10,
                5,
                14,
                2,
                7,
                12,
                7,
                13,
                13,
                8,
                14,
                11,
                3,
                5,
                0,
                6,
                6,
                15,
                9,
                0,
                10,
                3,
                1,
                4,
                2,
                7,
                8,
                2,
                5,
                12,
                11,
                1,
                12,
                10,
                4,
                14,
                15,
                9,
                10,
                3,
                6,
                15,
                9,
                0,
                0,
                6,
                12,
                10,
                11,
                1,
                7,
                13,
                13,
                8,
                15,
                9,
                1,
                4,
                3,
                5,
                14,
                11,
                5,
                12,
                2,
                7,
                8,
                2,
                4,
                14,
                2,
                14,
                12,
                11,
                4,
                2,
                1,
                12,
                7,
                4,
                10,
                7,
                11,
                13,
                6,
                1,
                8,
                5,
                5,
                0,
                3,
                15,
                15,
                10,
                13,
                3,
                0,
                9,
                14,
                8,
                9,
                6,
                4,
                11,
                2,
                8,
                1,
                12,
                11,
                7,
                10,
                1,
                13,
                14,
                7,
                2,
                8,
                13,
                15,
                6,
                9,
                15,
                12,
                0,
                5,
                9,
                6,
                10,
                3,
                4,
                0,
                5,
                14,
                3,
                12,
                10,
                1,
                15,
                10,
                4,
                15,
                2,
                9,
                7,
                2,
                12,
                6,
                9,
                8,
                5,
                0,
                6,
                13,
                1,
                3,
                13,
                4,
                14,
                14,
                0,
                7,
                11,
                5,
                3,
                11,
                8,
                9,
                4,
                14,
                3,
                15,
                2,
                5,
                12,
                2,
                9,
                8,
                5,
                12,
                15,
                3,
                10,
                7,
                11,
                0,
                14,
                4,
                1,
                10,
                7,
                1,
                6,
                13,
                0,
                11,
                8,
                6,
                13,
                4,
                13,
                11,
                0,
                2,
                11,
                14,
                7,
                15,
                4,
                0,
                9,
                8,
                1,
                13,
                10,
                3,
                14,
                12,
                3,
                9,
                5,
                7,
                12,
                5,
                2,
                10,
                15,
                6,
                8,
                1,
                6,
                1,
                6,
                4,
                11,
                11,
                13,
                13,
                8,
                12,
                1,
                3,
                4,
                7,
                10,
                14,
                7,
                10,
                9,
                15,
                5,
                6,
                0,
                8,
                15,
                0,
                14,
                5,
                2,
                9,
                3,
                2,
                12,
                13,
                1,
                2,
                15,
                8,
                13,
                4,
                8,
                6,
                10,
                15,
                3,
                11,
                7,
                1,
                4,
                10,
                12,
                9,
                5,
                3,
                6,
                14,
                11,
                5,
                0,
                0,
                14,
                12,
                9,
                7,
                2,
                7,
                2,
                11,
                1,
                4,
                14,
                1,
                7,
                9,
                4,
                12,
                10,
                14,
                8,
                2,
                13,
                0,
                15,
                6,
                12,
                10,
                9,
                13,
                0,
                15,
                3,
                3,
                5,
                5,
                6,
                8,
                11
            ];
            t.substitute = function substitute(e, t) {
                var r = 0;
                for(var n = 0; n < 4; n++){
                    var a = e >>> 18 - n * 6 & 63;
                    var s = i[n * 64 + a];
                    r <<= 4;
                    r |= s;
                }
                for(var n = 0; n < 4; n++){
                    var a = t >>> 18 - n * 6 & 63;
                    var s = i[4 * 64 + n * 64 + a];
                    r <<= 4;
                    r |= s;
                }
                return r >>> 0;
            };
            var n = [
                16,
                25,
                12,
                11,
                3,
                20,
                4,
                15,
                31,
                17,
                9,
                6,
                27,
                14,
                1,
                22,
                30,
                24,
                8,
                18,
                0,
                5,
                29,
                23,
                13,
                19,
                2,
                26,
                10,
                21,
                28,
                7
            ];
            t.permute = function permute(e) {
                var t = 0;
                for(var r = 0; r < n.length; r++){
                    t <<= 1;
                    t |= e >>> n[r] & 1;
                }
                return t >>> 0;
            };
            t.padSplit = function padSplit(e, t, r) {
                var i = e.toString(2);
                while(i.length < t)i = "0" + i;
                var n = [];
                for(var a = 0; a < t; a += r)n.push(i.slice(a, a + r));
                return n.join(" ");
            };
        },
        6587: function(e, t, r) {
            var i = r(296);
            var n = r(7992);
            var a = r(373);
            function getDiffieHellman(e) {
                var t = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"](n[e].prime, "hex");
                var r = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"](n[e].gen, "hex");
                return new a(t, r);
            }
            var s = {
                binary: true,
                hex: true,
                base64: true
            };
            function createDiffieHellman(e, t, r, n) {
                if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].isBuffer(t) || s[t] === undefined) {
                    return createDiffieHellman(e, "binary", t, r);
                }
                t = t || "binary";
                n = n || "binary";
                r = r || new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"]([
                    2
                ]);
                if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].isBuffer(r)) {
                    r = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"](r, n);
                }
                if (typeof e === "number") {
                    return new a(i(e, r), r, true);
                }
                if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].isBuffer(e)) {
                    e = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"](e, t);
                }
                return new a(e, r, true);
            }
            t.DiffieHellmanGroup = t.createDiffieHellmanGroup = t.getDiffieHellman = getDiffieHellman;
            t.createDiffieHellman = t.DiffieHellman = createDiffieHellman;
        },
        373: function(e, t, r) {
            var i = r(711);
            var n = r(1354);
            var a = new n;
            var s = new i(24);
            var o = new i(11);
            var h = new i(10);
            var u = new i(3);
            var d = new i(7);
            var c = r(296);
            var l = r(7223);
            e.exports = DH;
            function setPublicKey(e, t) {
                t = t || "utf8";
                if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].isBuffer(e)) {
                    e = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"](e, t);
                }
                this._pub = new i(e);
                return this;
            }
            function setPrivateKey(e, t) {
                t = t || "utf8";
                if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].isBuffer(e)) {
                    e = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"](e, t);
                }
                this._priv = new i(e);
                return this;
            }
            var p = {};
            function checkPrime(e, t) {
                var r = t.toString("hex");
                var i = [
                    r,
                    e.toString(16)
                ].join("_");
                if (i in p) {
                    return p[i];
                }
                var n = 0;
                if (e.isEven() || !c.simpleSieve || !c.fermatTest(e) || !a.test(e)) {
                    n += 1;
                    if (r === "02" || r === "05") {
                        n += 8;
                    } else {
                        n += 4;
                    }
                    p[i] = n;
                    return n;
                }
                if (!a.test(e.shrn(1))) {
                    n += 2;
                }
                var l;
                switch(r){
                    case "02":
                        if (e.mod(s).cmp(o)) {
                            n += 8;
                        }
                        break;
                    case "05":
                        l = e.mod(h);
                        if (l.cmp(u) && l.cmp(d)) {
                            n += 8;
                        }
                        break;
                    default:
                        n += 4;
                }
                p[i] = n;
                return n;
            }
            function DH(e, t, r) {
                this.setGenerator(t);
                this.__prime = new i(e);
                this._prime = i.mont(this.__prime);
                this._primeLen = e.length;
                this._pub = undefined;
                this._priv = undefined;
                this._primeCode = undefined;
                if (r) {
                    this.setPublicKey = setPublicKey;
                    this.setPrivateKey = setPrivateKey;
                } else {
                    this._primeCode = 8;
                }
            }
            Object.defineProperty(DH.prototype, "verifyError", {
                enumerable: true,
                get: function() {
                    if (typeof this._primeCode !== "number") {
                        this._primeCode = checkPrime(this.__prime, this.__gen);
                    }
                    return this._primeCode;
                }
            });
            DH.prototype.generateKeys = function() {
                if (!this._priv) {
                    this._priv = new i(l(this._primeLen));
                }
                this._pub = this._gen.toRed(this._prime).redPow(this._priv).fromRed();
                return this.getPublicKey();
            };
            DH.prototype.computeSecret = function(e) {
                e = new i(e);
                e = e.toRed(this._prime);
                var t = e.redPow(this._priv).fromRed();
                var r = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"](t.toArray());
                var n = this.getPrime();
                if (r.length < n.length) {
                    var a = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"](n.length - r.length);
                    a.fill(0);
                    r = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].concat([
                        a,
                        r
                    ]);
                }
                return r;
            };
            DH.prototype.getPublicKey = function getPublicKey(e) {
                return formatReturnValue(this._pub, e);
            };
            DH.prototype.getPrivateKey = function getPrivateKey(e) {
                return formatReturnValue(this._priv, e);
            };
            DH.prototype.getPrime = function(e) {
                return formatReturnValue(this.__prime, e);
            };
            DH.prototype.getGenerator = function(e) {
                return formatReturnValue(this._gen, e);
            };
            DH.prototype.setGenerator = function(e, t) {
                t = t || "utf8";
                if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].isBuffer(e)) {
                    e = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"](e, t);
                }
                this.__gen = e;
                this._gen = new i(e);
                return this;
            };
            function formatReturnValue(e, t) {
                var r = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"](e.toArray());
                if (!t) {
                    return r;
                } else {
                    return r.toString(t);
                }
            }
        },
        296: function(e, t, r) {
            var i = r(7223);
            e.exports = findPrime;
            findPrime.simpleSieve = simpleSieve;
            findPrime.fermatTest = fermatTest;
            var n = r(711);
            var a = new n(24);
            var s = r(1354);
            var o = new s;
            var h = new n(1);
            var u = new n(2);
            var d = new n(5);
            var c = new n(16);
            var l = new n(8);
            var p = new n(10);
            var v = new n(3);
            var b = new n(7);
            var m = new n(11);
            var y = new n(4);
            var g = new n(12);
            var _ = null;
            function _getPrimes() {
                if (_ !== null) return _;
                var e = 1048576;
                var t = [];
                t[0] = 2;
                for(var r = 1, i = 3; i < e; i += 2){
                    var n = Math.ceil(Math.sqrt(i));
                    for(var a = 0; a < r && t[a] <= n; a++)if (i % t[a] === 0) break;
                    if (r !== a && t[a] <= n) continue;
                    t[r++] = i;
                }
                _ = t;
                return t;
            }
            function simpleSieve(e) {
                var t = _getPrimes();
                for(var r = 0; r < t.length; r++)if (e.modn(t[r]) === 0) {
                    if (e.cmpn(t[r]) === 0) {
                        return true;
                    } else {
                        return false;
                    }
                }
                return true;
            }
            function fermatTest(e) {
                var t = n.mont(e);
                return u.toRed(t).redPow(e.subn(1)).fromRed().cmpn(1) === 0;
            }
            function findPrime(e, t) {
                if (e < 16) {
                    if (t === 2 || t === 5) {
                        return new n([
                            140,
                            123
                        ]);
                    } else {
                        return new n([
                            140,
                            39
                        ]);
                    }
                }
                t = new n(t);
                var r, s;
                while(true){
                    r = new n(i(Math.ceil(e / 8)));
                    while(r.bitLength() > e){
                        r.ishrn(1);
                    }
                    if (r.isEven()) {
                        r.iadd(h);
                    }
                    if (!r.testn(1)) {
                        r.iadd(u);
                    }
                    if (!t.cmp(u)) {
                        while(r.mod(a).cmp(m)){
                            r.iadd(y);
                        }
                    } else if (!t.cmp(d)) {
                        while(r.mod(p).cmp(v)){
                            r.iadd(y);
                        }
                    }
                    s = r.shrn(1);
                    if (simpleSieve(s) && simpleSieve(r) && fermatTest(s) && fermatTest(r) && o.test(s) && o.test(r)) {
                        return r;
                    }
                }
            }
        },
        949: function(e, t, r) {
            "use strict";
            var i = t;
            i.version = r(2531).i8;
            i.utils = r(4401);
            i.rand = r(3500);
            i.curve = r(9359);
            i.curves = r(6226);
            i.ec = r(4088);
            i.eddsa = r(8511);
        },
        2727: function(e, t, r) {
            "use strict";
            var i = r(711);
            var n = r(4401);
            var a = n.getNAF;
            var s = n.getJSF;
            var o = n.assert;
            function BaseCurve(e, t) {
                this.type = e;
                this.p = new i(t.p, 16);
                this.red = t.prime ? i.red(t.prime) : i.mont(this.p);
                this.zero = new i(0).toRed(this.red);
                this.one = new i(1).toRed(this.red);
                this.two = new i(2).toRed(this.red);
                this.n = t.n && new i(t.n, 16);
                this.g = t.g && this.pointFromJSON(t.g, t.gRed);
                this._wnafT1 = new Array(4);
                this._wnafT2 = new Array(4);
                this._wnafT3 = new Array(4);
                this._wnafT4 = new Array(4);
                this._bitLength = this.n ? this.n.bitLength() : 0;
                var r = this.n && this.p.div(this.n);
                if (!r || r.cmpn(100) > 0) {
                    this.redN = null;
                } else {
                    this._maxwellTrick = true;
                    this.redN = this.n.toRed(this.red);
                }
            }
            e.exports = BaseCurve;
            BaseCurve.prototype.point = function point() {
                throw new Error("Not implemented");
            };
            BaseCurve.prototype.validate = function validate() {
                throw new Error("Not implemented");
            };
            BaseCurve.prototype._fixedNafMul = function _fixedNafMul(e, t) {
                o(e.precomputed);
                var r = e._getDoubles();
                var i = a(t, 1, this._bitLength);
                var n = (1 << r.step + 1) - (r.step % 2 === 0 ? 2 : 1);
                n /= 3;
                var s = [];
                for(var h = 0; h < i.length; h += r.step){
                    var u = 0;
                    for(var t = h + r.step - 1; t >= h; t--)u = (u << 1) + i[t];
                    s.push(u);
                }
                var d = this.jpoint(null, null, null);
                var c = this.jpoint(null, null, null);
                for(var l = n; l > 0; l--){
                    for(var h = 0; h < s.length; h++){
                        var u = s[h];
                        if (u === l) c = c.mixedAdd(r.points[h]);
                        else if (u === -l) c = c.mixedAdd(r.points[h].neg());
                    }
                    d = d.add(c);
                }
                return d.toP();
            };
            BaseCurve.prototype._wnafMul = function _wnafMul(e, t) {
                var r = 4;
                var i = e._getNAFPoints(r);
                r = i.wnd;
                var n = i.points;
                var s = a(t, r, this._bitLength);
                var h = this.jpoint(null, null, null);
                for(var u = s.length - 1; u >= 0; u--){
                    for(var t = 0; u >= 0 && s[u] === 0; u--)t++;
                    if (u >= 0) t++;
                    h = h.dblp(t);
                    if (u < 0) break;
                    var d = s[u];
                    o(d !== 0);
                    if (e.type === "affine") {
                        if (d > 0) h = h.mixedAdd(n[d - 1 >> 1]);
                        else h = h.mixedAdd(n[-d - 1 >> 1].neg());
                    } else {
                        if (d > 0) h = h.add(n[d - 1 >> 1]);
                        else h = h.add(n[-d - 1 >> 1].neg());
                    }
                }
                return e.type === "affine" ? h.toP() : h;
            };
            BaseCurve.prototype._wnafMulAdd = function _wnafMulAdd(e, t, r, i, n) {
                var o = this._wnafT1;
                var h = this._wnafT2;
                var u = this._wnafT3;
                var d = 0;
                for(var c = 0; c < i; c++){
                    var l = t[c];
                    var p = l._getNAFPoints(e);
                    o[c] = p.wnd;
                    h[c] = p.points;
                }
                for(var c = i - 1; c >= 1; c -= 2){
                    var v = c - 1;
                    var b = c;
                    if (o[v] !== 1 || o[b] !== 1) {
                        u[v] = a(r[v], o[v], this._bitLength);
                        u[b] = a(r[b], o[b], this._bitLength);
                        d = Math.max(u[v].length, d);
                        d = Math.max(u[b].length, d);
                        continue;
                    }
                    var m = [
                        t[v],
                        null,
                        null,
                        t[b]
                    ];
                    if (t[v].y.cmp(t[b].y) === 0) {
                        m[1] = t[v].add(t[b]);
                        m[2] = t[v].toJ().mixedAdd(t[b].neg());
                    } else if (t[v].y.cmp(t[b].y.redNeg()) === 0) {
                        m[1] = t[v].toJ().mixedAdd(t[b]);
                        m[2] = t[v].add(t[b].neg());
                    } else {
                        m[1] = t[v].toJ().mixedAdd(t[b]);
                        m[2] = t[v].toJ().mixedAdd(t[b].neg());
                    }
                    var y = [
                        -3,
                        -1,
                        -5,
                        -7,
                        0,
                        7,
                        5,
                        1,
                        3
                    ];
                    var g = s(r[v], r[b]);
                    d = Math.max(g[0].length, d);
                    u[v] = new Array(d);
                    u[b] = new Array(d);
                    for(var _ = 0; _ < d; _++){
                        var w = g[0][_] | 0;
                        var M = g[1][_] | 0;
                        u[v][_] = y[(w + 1) * 3 + (M + 1)];
                        u[b][_] = 0;
                        h[v] = m;
                    }
                }
                var B = this.jpoint(null, null, null);
                var E = this._wnafT4;
                for(var c = d; c >= 0; c--){
                    var k = 0;
                    while(c >= 0){
                        var A = true;
                        for(var _ = 0; _ < i; _++){
                            E[_] = u[_][c] | 0;
                            if (E[_] !== 0) A = false;
                        }
                        if (!A) break;
                        k++;
                        c--;
                    }
                    if (c >= 0) k++;
                    B = B.dblp(k);
                    if (c < 0) break;
                    for(var _ = 0; _ < i; _++){
                        var N = E[_];
                        var l;
                        if (N === 0) continue;
                        else if (N > 0) l = h[_][N - 1 >> 1];
                        else if (N < 0) l = h[_][-N - 1 >> 1].neg();
                        if (l.type === "affine") B = B.mixedAdd(l);
                        else B = B.add(l);
                    }
                }
                for(var c = 0; c < i; c++)h[c] = null;
                if (n) return B;
                else return B.toP();
            };
            function BasePoint(e, t) {
                this.curve = e;
                this.type = t;
                this.precomputed = null;
            }
            BaseCurve.BasePoint = BasePoint;
            BasePoint.prototype.eq = function eq() {
                throw new Error("Not implemented");
            };
            BasePoint.prototype.validate = function validate() {
                return this.curve.validate(this);
            };
            BaseCurve.prototype.decodePoint = function decodePoint(e, t) {
                e = n.toArray(e, t);
                var r = this.p.byteLength();
                if ((e[0] === 4 || e[0] === 6 || e[0] === 7) && e.length - 1 === 2 * r) {
                    if (e[0] === 6) o(e[e.length - 1] % 2 === 0);
                    else if (e[0] === 7) o(e[e.length - 1] % 2 === 1);
                    var i = this.point(e.slice(1, 1 + r), e.slice(1 + r, 1 + 2 * r));
                    return i;
                } else if ((e[0] === 2 || e[0] === 3) && e.length - 1 === r) {
                    return this.pointFromX(e.slice(1, 1 + r), e[0] === 3);
                }
                throw new Error("Unknown point format");
            };
            BasePoint.prototype.encodeCompressed = function encodeCompressed(e) {
                return this.encode(e, true);
            };
            BasePoint.prototype._encode = function _encode(e) {
                var t = this.curve.p.byteLength();
                var r = this.getX().toArray("be", t);
                if (e) return [
                    this.getY().isEven() ? 2 : 3
                ].concat(r);
                return [
                    4
                ].concat(r, this.getY().toArray("be", t));
            };
            BasePoint.prototype.encode = function encode(e, t) {
                return n.encode(this._encode(t), e);
            };
            BasePoint.prototype.precompute = function precompute(e) {
                if (this.precomputed) return this;
                var t = {
                    doubles: null,
                    naf: null,
                    beta: null
                };
                t.naf = this._getNAFPoints(8);
                t.doubles = this._getDoubles(4, e);
                t.beta = this._getBeta();
                this.precomputed = t;
                return this;
            };
            BasePoint.prototype._hasDoubles = function _hasDoubles(e) {
                if (!this.precomputed) return false;
                var t = this.precomputed.doubles;
                if (!t) return false;
                return t.points.length >= Math.ceil((e.bitLength() + 1) / t.step);
            };
            BasePoint.prototype._getDoubles = function _getDoubles(e, t) {
                if (this.precomputed && this.precomputed.doubles) return this.precomputed.doubles;
                var r = [
                    this
                ];
                var i = this;
                for(var n = 0; n < t; n += e){
                    for(var a = 0; a < e; a++)i = i.dbl();
                    r.push(i);
                }
                return {
                    step: e,
                    points: r
                };
            };
            BasePoint.prototype._getNAFPoints = function _getNAFPoints(e) {
                if (this.precomputed && this.precomputed.naf) return this.precomputed.naf;
                var t = [
                    this
                ];
                var r = (1 << e) - 1;
                var i = r === 1 ? null : this.dbl();
                for(var n = 1; n < r; n++)t[n] = t[n - 1].add(i);
                return {
                    wnd: e,
                    points: t
                };
            };
            BasePoint.prototype._getBeta = function _getBeta() {
                return null;
            };
            BasePoint.prototype.dblp = function dblp(e) {
                var t = this;
                for(var r = 0; r < e; r++)t = t.dbl();
                return t;
            };
        },
        2705: function(e, t, r) {
            "use strict";
            var i = r(4401);
            var n = r(711);
            var a = r(3782);
            var s = r(2727);
            var o = i.assert;
            function EdwardsCurve(e) {
                this.twisted = (e.a | 0) !== 1;
                this.mOneA = this.twisted && (e.a | 0) === -1;
                this.extended = this.mOneA;
                s.call(this, "edwards", e);
                this.a = new n(e.a, 16).umod(this.red.m);
                this.a = this.a.toRed(this.red);
                this.c = new n(e.c, 16).toRed(this.red);
                this.c2 = this.c.redSqr();
                this.d = new n(e.d, 16).toRed(this.red);
                this.dd = this.d.redAdd(this.d);
                o(!this.twisted || this.c.fromRed().cmpn(1) === 0);
                this.oneC = (e.c | 0) === 1;
            }
            a(EdwardsCurve, s);
            e.exports = EdwardsCurve;
            EdwardsCurve.prototype._mulA = function _mulA(e) {
                if (this.mOneA) return e.redNeg();
                else return this.a.redMul(e);
            };
            EdwardsCurve.prototype._mulC = function _mulC(e) {
                if (this.oneC) return e;
                else return this.c.redMul(e);
            };
            EdwardsCurve.prototype.jpoint = function jpoint(e, t, r, i) {
                return this.point(e, t, r, i);
            };
            EdwardsCurve.prototype.pointFromX = function pointFromX(e, t) {
                e = new n(e, 16);
                if (!e.red) e = e.toRed(this.red);
                var r = e.redSqr();
                var i = this.c2.redSub(this.a.redMul(r));
                var a = this.one.redSub(this.c2.redMul(this.d).redMul(r));
                var s = i.redMul(a.redInvm());
                var o = s.redSqrt();
                if (o.redSqr().redSub(s).cmp(this.zero) !== 0) throw new Error("invalid point");
                var h = o.fromRed().isOdd();
                if (t && !h || !t && h) o = o.redNeg();
                return this.point(e, o);
            };
            EdwardsCurve.prototype.pointFromY = function pointFromY(e, t) {
                e = new n(e, 16);
                if (!e.red) e = e.toRed(this.red);
                var r = e.redSqr();
                var i = r.redSub(this.c2);
                var a = r.redMul(this.d).redMul(this.c2).redSub(this.a);
                var s = i.redMul(a.redInvm());
                if (s.cmp(this.zero) === 0) {
                    if (t) throw new Error("invalid point");
                    else return this.point(this.zero, e);
                }
                var o = s.redSqrt();
                if (o.redSqr().redSub(s).cmp(this.zero) !== 0) throw new Error("invalid point");
                if (o.fromRed().isOdd() !== t) o = o.redNeg();
                return this.point(o, e);
            };
            EdwardsCurve.prototype.validate = function validate(e) {
                if (e.isInfinity()) return true;
                e.normalize();
                var t = e.x.redSqr();
                var r = e.y.redSqr();
                var i = t.redMul(this.a).redAdd(r);
                var n = this.c2.redMul(this.one.redAdd(this.d.redMul(t).redMul(r)));
                return i.cmp(n) === 0;
            };
            function Point(e, t, r, i, a) {
                s.BasePoint.call(this, e, "projective");
                if (t === null && r === null && i === null) {
                    this.x = this.curve.zero;
                    this.y = this.curve.one;
                    this.z = this.curve.one;
                    this.t = this.curve.zero;
                    this.zOne = true;
                } else {
                    this.x = new n(t, 16);
                    this.y = new n(r, 16);
                    this.z = i ? new n(i, 16) : this.curve.one;
                    this.t = a && new n(a, 16);
                    if (!this.x.red) this.x = this.x.toRed(this.curve.red);
                    if (!this.y.red) this.y = this.y.toRed(this.curve.red);
                    if (!this.z.red) this.z = this.z.toRed(this.curve.red);
                    if (this.t && !this.t.red) this.t = this.t.toRed(this.curve.red);
                    this.zOne = this.z === this.curve.one;
                    if (this.curve.extended && !this.t) {
                        this.t = this.x.redMul(this.y);
                        if (!this.zOne) this.t = this.t.redMul(this.z.redInvm());
                    }
                }
            }
            a(Point, s.BasePoint);
            EdwardsCurve.prototype.pointFromJSON = function pointFromJSON(e) {
                return Point.fromJSON(this, e);
            };
            EdwardsCurve.prototype.point = function point(e, t, r, i) {
                return new Point(this, e, t, r, i);
            };
            Point.fromJSON = function fromJSON(e, t) {
                return new Point(e, t[0], t[1], t[2]);
            };
            Point.prototype.inspect = function inspect() {
                if (this.isInfinity()) return "<EC Point Infinity>";
                return "<EC Point x: " + this.x.fromRed().toString(16, 2) + " y: " + this.y.fromRed().toString(16, 2) + " z: " + this.z.fromRed().toString(16, 2) + ">";
            };
            Point.prototype.isInfinity = function isInfinity() {
                return this.x.cmpn(0) === 0 && (this.y.cmp(this.z) === 0 || this.zOne && this.y.cmp(this.curve.c) === 0);
            };
            Point.prototype._extDbl = function _extDbl() {
                var e = this.x.redSqr();
                var t = this.y.redSqr();
                var r = this.z.redSqr();
                r = r.redIAdd(r);
                var i = this.curve._mulA(e);
                var n = this.x.redAdd(this.y).redSqr().redISub(e).redISub(t);
                var a = i.redAdd(t);
                var s = a.redSub(r);
                var o = i.redSub(t);
                var h = n.redMul(s);
                var u = a.redMul(o);
                var d = n.redMul(o);
                var c = s.redMul(a);
                return this.curve.point(h, u, c, d);
            };
            Point.prototype._projDbl = function _projDbl() {
                var e = this.x.redAdd(this.y).redSqr();
                var t = this.x.redSqr();
                var r = this.y.redSqr();
                var i;
                var n;
                var a;
                if (this.curve.twisted) {
                    var s = this.curve._mulA(t);
                    var o = s.redAdd(r);
                    if (this.zOne) {
                        i = e.redSub(t).redSub(r).redMul(o.redSub(this.curve.two));
                        n = o.redMul(s.redSub(r));
                        a = o.redSqr().redSub(o).redSub(o);
                    } else {
                        var h = this.z.redSqr();
                        var u = o.redSub(h).redISub(h);
                        i = e.redSub(t).redISub(r).redMul(u);
                        n = o.redMul(s.redSub(r));
                        a = o.redMul(u);
                    }
                } else {
                    var s = t.redAdd(r);
                    var h = this.curve._mulC(this.z).redSqr();
                    var u = s.redSub(h).redSub(h);
                    i = this.curve._mulC(e.redISub(s)).redMul(u);
                    n = this.curve._mulC(s).redMul(t.redISub(r));
                    a = s.redMul(u);
                }
                return this.curve.point(i, n, a);
            };
            Point.prototype.dbl = function dbl() {
                if (this.isInfinity()) return this;
                if (this.curve.extended) return this._extDbl();
                else return this._projDbl();
            };
            Point.prototype._extAdd = function _extAdd(e) {
                var t = this.y.redSub(this.x).redMul(e.y.redSub(e.x));
                var r = this.y.redAdd(this.x).redMul(e.y.redAdd(e.x));
                var i = this.t.redMul(this.curve.dd).redMul(e.t);
                var n = this.z.redMul(e.z.redAdd(e.z));
                var a = r.redSub(t);
                var s = n.redSub(i);
                var o = n.redAdd(i);
                var h = r.redAdd(t);
                var u = a.redMul(s);
                var d = o.redMul(h);
                var c = a.redMul(h);
                var l = s.redMul(o);
                return this.curve.point(u, d, l, c);
            };
            Point.prototype._projAdd = function _projAdd(e) {
                var t = this.z.redMul(e.z);
                var r = t.redSqr();
                var i = this.x.redMul(e.x);
                var n = this.y.redMul(e.y);
                var a = this.curve.d.redMul(i).redMul(n);
                var s = r.redSub(a);
                var o = r.redAdd(a);
                var h = this.x.redAdd(this.y).redMul(e.x.redAdd(e.y)).redISub(i).redISub(n);
                var u = t.redMul(s).redMul(h);
                var d;
                var c;
                if (this.curve.twisted) {
                    d = t.redMul(o).redMul(n.redSub(this.curve._mulA(i)));
                    c = s.redMul(o);
                } else {
                    d = t.redMul(o).redMul(n.redSub(i));
                    c = this.curve._mulC(s).redMul(o);
                }
                return this.curve.point(u, d, c);
            };
            Point.prototype.add = function add(e) {
                if (this.isInfinity()) return e;
                if (e.isInfinity()) return this;
                if (this.curve.extended) return this._extAdd(e);
                else return this._projAdd(e);
            };
            Point.prototype.mul = function mul(e) {
                if (this._hasDoubles(e)) return this.curve._fixedNafMul(this, e);
                else return this.curve._wnafMul(this, e);
            };
            Point.prototype.mulAdd = function mulAdd(e, t, r) {
                return this.curve._wnafMulAdd(1, [
                    this,
                    t
                ], [
                    e,
                    r
                ], 2, false);
            };
            Point.prototype.jmulAdd = function jmulAdd(e, t, r) {
                return this.curve._wnafMulAdd(1, [
                    this,
                    t
                ], [
                    e,
                    r
                ], 2, true);
            };
            Point.prototype.normalize = function normalize() {
                if (this.zOne) return this;
                var e = this.z.redInvm();
                this.x = this.x.redMul(e);
                this.y = this.y.redMul(e);
                if (this.t) this.t = this.t.redMul(e);
                this.z = this.curve.one;
                this.zOne = true;
                return this;
            };
            Point.prototype.neg = function neg() {
                return this.curve.point(this.x.redNeg(), this.y, this.z, this.t && this.t.redNeg());
            };
            Point.prototype.getX = function getX() {
                this.normalize();
                return this.x.fromRed();
            };
            Point.prototype.getY = function getY() {
                this.normalize();
                return this.y.fromRed();
            };
            Point.prototype.eq = function eq(e) {
                return this === e || this.getX().cmp(e.getX()) === 0 && this.getY().cmp(e.getY()) === 0;
            };
            Point.prototype.eqXToP = function eqXToP(e) {
                var t = e.toRed(this.curve.red).redMul(this.z);
                if (this.x.cmp(t) === 0) return true;
                var r = e.clone();
                var i = this.curve.redN.redMul(this.z);
                for(;;){
                    r.iadd(this.curve.n);
                    if (r.cmp(this.curve.p) >= 0) return false;
                    t.redIAdd(i);
                    if (this.x.cmp(t) === 0) return true;
                }
            };
            Point.prototype.toP = Point.prototype.normalize;
            Point.prototype.mixedAdd = Point.prototype.add;
        },
        9359: function(e, t, r) {
            "use strict";
            var i = t;
            i.base = r(2727);
            i.short = r(4720);
            i.mont = r(6653);
            i.edwards = r(2705);
        },
        6653: function(e, t, r) {
            "use strict";
            var i = r(711);
            var n = r(3782);
            var a = r(2727);
            var s = r(4401);
            function MontCurve(e) {
                a.call(this, "mont", e);
                this.a = new i(e.a, 16).toRed(this.red);
                this.b = new i(e.b, 16).toRed(this.red);
                this.i4 = new i(4).toRed(this.red).redInvm();
                this.two = new i(2).toRed(this.red);
                this.a24 = this.i4.redMul(this.a.redAdd(this.two));
            }
            n(MontCurve, a);
            e.exports = MontCurve;
            MontCurve.prototype.validate = function validate(e) {
                var t = e.normalize().x;
                var r = t.redSqr();
                var i = r.redMul(t).redAdd(r.redMul(this.a)).redAdd(t);
                var n = i.redSqrt();
                return n.redSqr().cmp(i) === 0;
            };
            function Point(e, t, r) {
                a.BasePoint.call(this, e, "projective");
                if (t === null && r === null) {
                    this.x = this.curve.one;
                    this.z = this.curve.zero;
                } else {
                    this.x = new i(t, 16);
                    this.z = new i(r, 16);
                    if (!this.x.red) this.x = this.x.toRed(this.curve.red);
                    if (!this.z.red) this.z = this.z.toRed(this.curve.red);
                }
            }
            n(Point, a.BasePoint);
            MontCurve.prototype.decodePoint = function decodePoint(e, t) {
                return this.point(s.toArray(e, t), 1);
            };
            MontCurve.prototype.point = function point(e, t) {
                return new Point(this, e, t);
            };
            MontCurve.prototype.pointFromJSON = function pointFromJSON(e) {
                return Point.fromJSON(this, e);
            };
            Point.prototype.precompute = function precompute() {};
            Point.prototype._encode = function _encode() {
                return this.getX().toArray("be", this.curve.p.byteLength());
            };
            Point.fromJSON = function fromJSON(e, t) {
                return new Point(e, t[0], t[1] || e.one);
            };
            Point.prototype.inspect = function inspect() {
                if (this.isInfinity()) return "<EC Point Infinity>";
                return "<EC Point x: " + this.x.fromRed().toString(16, 2) + " z: " + this.z.fromRed().toString(16, 2) + ">";
            };
            Point.prototype.isInfinity = function isInfinity() {
                return this.z.cmpn(0) === 0;
            };
            Point.prototype.dbl = function dbl() {
                var e = this.x.redAdd(this.z);
                var t = e.redSqr();
                var r = this.x.redSub(this.z);
                var i = r.redSqr();
                var n = t.redSub(i);
                var a = t.redMul(i);
                var s = n.redMul(i.redAdd(this.curve.a24.redMul(n)));
                return this.curve.point(a, s);
            };
            Point.prototype.add = function add() {
                throw new Error("Not supported on Montgomery curve");
            };
            Point.prototype.diffAdd = function diffAdd(e, t) {
                var r = this.x.redAdd(this.z);
                var i = this.x.redSub(this.z);
                var n = e.x.redAdd(e.z);
                var a = e.x.redSub(e.z);
                var s = a.redMul(r);
                var o = n.redMul(i);
                var h = t.z.redMul(s.redAdd(o).redSqr());
                var u = t.x.redMul(s.redISub(o).redSqr());
                return this.curve.point(h, u);
            };
            Point.prototype.mul = function mul(e) {
                var t = e.clone();
                var r = this;
                var i = this.curve.point(null, null);
                var n = this;
                for(var a = []; t.cmpn(0) !== 0; t.iushrn(1))a.push(t.andln(1));
                for(var s = a.length - 1; s >= 0; s--){
                    if (a[s] === 0) {
                        r = r.diffAdd(i, n);
                        i = i.dbl();
                    } else {
                        i = r.diffAdd(i, n);
                        r = r.dbl();
                    }
                }
                return i;
            };
            Point.prototype.mulAdd = function mulAdd() {
                throw new Error("Not supported on Montgomery curve");
            };
            Point.prototype.jumlAdd = function jumlAdd() {
                throw new Error("Not supported on Montgomery curve");
            };
            Point.prototype.eq = function eq(e) {
                return this.getX().cmp(e.getX()) === 0;
            };
            Point.prototype.normalize = function normalize() {
                this.x = this.x.redMul(this.z.redInvm());
                this.z = this.curve.one;
                return this;
            };
            Point.prototype.getX = function getX() {
                this.normalize();
                return this.x.fromRed();
            };
        },
        4720: function(e, t, r) {
            "use strict";
            var i = r(4401);
            var n = r(711);
            var a = r(3782);
            var s = r(2727);
            var o = i.assert;
            function ShortCurve(e) {
                s.call(this, "short", e);
                this.a = new n(e.a, 16).toRed(this.red);
                this.b = new n(e.b, 16).toRed(this.red);
                this.tinv = this.two.redInvm();
                this.zeroA = this.a.fromRed().cmpn(0) === 0;
                this.threeA = this.a.fromRed().sub(this.p).cmpn(-3) === 0;
                this.endo = this._getEndomorphism(e);
                this._endoWnafT1 = new Array(4);
                this._endoWnafT2 = new Array(4);
            }
            a(ShortCurve, s);
            e.exports = ShortCurve;
            ShortCurve.prototype._getEndomorphism = function _getEndomorphism(e) {
                if (!this.zeroA || !this.g || !this.n || this.p.modn(3) !== 1) return;
                var t;
                var r;
                if (e.beta) {
                    t = new n(e.beta, 16).toRed(this.red);
                } else {
                    var i = this._getEndoRoots(this.p);
                    t = i[0].cmp(i[1]) < 0 ? i[0] : i[1];
                    t = t.toRed(this.red);
                }
                if (e.lambda) {
                    r = new n(e.lambda, 16);
                } else {
                    var a = this._getEndoRoots(this.n);
                    if (this.g.mul(a[0]).x.cmp(this.g.x.redMul(t)) === 0) {
                        r = a[0];
                    } else {
                        r = a[1];
                        o(this.g.mul(r).x.cmp(this.g.x.redMul(t)) === 0);
                    }
                }
                var s;
                if (e.basis) {
                    s = e.basis.map(function(e) {
                        return {
                            a: new n(e.a, 16),
                            b: new n(e.b, 16)
                        };
                    });
                } else {
                    s = this._getEndoBasis(r);
                }
                return {
                    beta: t,
                    lambda: r,
                    basis: s
                };
            };
            ShortCurve.prototype._getEndoRoots = function _getEndoRoots(e) {
                var t = e === this.p ? this.red : n.mont(e);
                var r = new n(2).toRed(t).redInvm();
                var i = r.redNeg();
                var a = new n(3).toRed(t).redNeg().redSqrt().redMul(r);
                var s = i.redAdd(a).fromRed();
                var o = i.redSub(a).fromRed();
                return [
                    s,
                    o
                ];
            };
            ShortCurve.prototype._getEndoBasis = function _getEndoBasis(e) {
                var t = this.n.ushrn(Math.floor(this.n.bitLength() / 2));
                var r = e;
                var i = this.n.clone();
                var a = new n(1);
                var s = new n(0);
                var o = new n(0);
                var h = new n(1);
                var u;
                var d;
                var c;
                var l;
                var p;
                var v;
                var b;
                var m = 0;
                var y;
                var g;
                while(r.cmpn(0) !== 0){
                    var _ = i.div(r);
                    y = i.sub(_.mul(r));
                    g = o.sub(_.mul(a));
                    var w = h.sub(_.mul(s));
                    if (!c && y.cmp(t) < 0) {
                        u = b.neg();
                        d = a;
                        c = y.neg();
                        l = g;
                    } else if (c && ++m === 2) {
                        break;
                    }
                    b = y;
                    i = r;
                    r = y;
                    o = a;
                    a = g;
                    h = s;
                    s = w;
                }
                p = y.neg();
                v = g;
                var M = c.sqr().add(l.sqr());
                var B = p.sqr().add(v.sqr());
                if (B.cmp(M) >= 0) {
                    p = u;
                    v = d;
                }
                if (c.negative) {
                    c = c.neg();
                    l = l.neg();
                }
                if (p.negative) {
                    p = p.neg();
                    v = v.neg();
                }
                return [
                    {
                        a: c,
                        b: l
                    },
                    {
                        a: p,
                        b: v
                    }
                ];
            };
            ShortCurve.prototype._endoSplit = function _endoSplit(e) {
                var t = this.endo.basis;
                var r = t[0];
                var i = t[1];
                var n = i.b.mul(e).divRound(this.n);
                var a = r.b.neg().mul(e).divRound(this.n);
                var s = n.mul(r.a);
                var o = a.mul(i.a);
                var h = n.mul(r.b);
                var u = a.mul(i.b);
                var d = e.sub(s).sub(o);
                var c = h.add(u).neg();
                return {
                    k1: d,
                    k2: c
                };
            };
            ShortCurve.prototype.pointFromX = function pointFromX(e, t) {
                e = new n(e, 16);
                if (!e.red) e = e.toRed(this.red);
                var r = e.redSqr().redMul(e).redIAdd(e.redMul(this.a)).redIAdd(this.b);
                var i = r.redSqrt();
                if (i.redSqr().redSub(r).cmp(this.zero) !== 0) throw new Error("invalid point");
                var a = i.fromRed().isOdd();
                if (t && !a || !t && a) i = i.redNeg();
                return this.point(e, i);
            };
            ShortCurve.prototype.validate = function validate(e) {
                if (e.inf) return true;
                var t = e.x;
                var r = e.y;
                var i = this.a.redMul(t);
                var n = t.redSqr().redMul(t).redIAdd(i).redIAdd(this.b);
                return r.redSqr().redISub(n).cmpn(0) === 0;
            };
            ShortCurve.prototype._endoWnafMulAdd = function _endoWnafMulAdd(e, t, r) {
                var i = this._endoWnafT1;
                var n = this._endoWnafT2;
                for(var a = 0; a < e.length; a++){
                    var s = this._endoSplit(t[a]);
                    var o = e[a];
                    var h = o._getBeta();
                    if (s.k1.negative) {
                        s.k1.ineg();
                        o = o.neg(true);
                    }
                    if (s.k2.negative) {
                        s.k2.ineg();
                        h = h.neg(true);
                    }
                    i[a * 2] = o;
                    i[a * 2 + 1] = h;
                    n[a * 2] = s.k1;
                    n[a * 2 + 1] = s.k2;
                }
                var u = this._wnafMulAdd(1, i, n, a * 2, r);
                for(var d = 0; d < a * 2; d++){
                    i[d] = null;
                    n[d] = null;
                }
                return u;
            };
            function Point(e, t, r, i) {
                s.BasePoint.call(this, e, "affine");
                if (t === null && r === null) {
                    this.x = null;
                    this.y = null;
                    this.inf = true;
                } else {
                    this.x = new n(t, 16);
                    this.y = new n(r, 16);
                    if (i) {
                        this.x.forceRed(this.curve.red);
                        this.y.forceRed(this.curve.red);
                    }
                    if (!this.x.red) this.x = this.x.toRed(this.curve.red);
                    if (!this.y.red) this.y = this.y.toRed(this.curve.red);
                    this.inf = false;
                }
            }
            a(Point, s.BasePoint);
            ShortCurve.prototype.point = function point(e, t, r) {
                return new Point(this, e, t, r);
            };
            ShortCurve.prototype.pointFromJSON = function pointFromJSON(e, t) {
                return Point.fromJSON(this, e, t);
            };
            Point.prototype._getBeta = function _getBeta() {
                if (!this.curve.endo) return;
                var e = this.precomputed;
                if (e && e.beta) return e.beta;
                var t = this.curve.point(this.x.redMul(this.curve.endo.beta), this.y);
                if (e) {
                    var r = this.curve;
                    var endoMul = function(e) {
                        return r.point(e.x.redMul(r.endo.beta), e.y);
                    };
                    e.beta = t;
                    t.precomputed = {
                        beta: null,
                        naf: e.naf && {
                            wnd: e.naf.wnd,
                            points: e.naf.points.map(endoMul)
                        },
                        doubles: e.doubles && {
                            step: e.doubles.step,
                            points: e.doubles.points.map(endoMul)
                        }
                    };
                }
                return t;
            };
            Point.prototype.toJSON = function toJSON() {
                if (!this.precomputed) return [
                    this.x,
                    this.y
                ];
                return [
                    this.x,
                    this.y,
                    this.precomputed && {
                        doubles: this.precomputed.doubles && {
                            step: this.precomputed.doubles.step,
                            points: this.precomputed.doubles.points.slice(1)
                        },
                        naf: this.precomputed.naf && {
                            wnd: this.precomputed.naf.wnd,
                            points: this.precomputed.naf.points.slice(1)
                        }
                    }
                ];
            };
            Point.fromJSON = function fromJSON(e, t, r) {
                if (typeof t === "string") t = JSON.parse(t);
                var i = e.point(t[0], t[1], r);
                if (!t[2]) return i;
                function obj2point(t) {
                    return e.point(t[0], t[1], r);
                }
                var n = t[2];
                i.precomputed = {
                    beta: null,
                    doubles: n.doubles && {
                        step: n.doubles.step,
                        points: [
                            i
                        ].concat(n.doubles.points.map(obj2point))
                    },
                    naf: n.naf && {
                        wnd: n.naf.wnd,
                        points: [
                            i
                        ].concat(n.naf.points.map(obj2point))
                    }
                };
                return i;
            };
            Point.prototype.inspect = function inspect() {
                if (this.isInfinity()) return "<EC Point Infinity>";
                return "<EC Point x: " + this.x.fromRed().toString(16, 2) + " y: " + this.y.fromRed().toString(16, 2) + ">";
            };
            Point.prototype.isInfinity = function isInfinity() {
                return this.inf;
            };
            Point.prototype.add = function add(e) {
                if (this.inf) return e;
                if (e.inf) return this;
                if (this.eq(e)) return this.dbl();
                if (this.neg().eq(e)) return this.curve.point(null, null);
                if (this.x.cmp(e.x) === 0) return this.curve.point(null, null);
                var t = this.y.redSub(e.y);
                if (t.cmpn(0) !== 0) t = t.redMul(this.x.redSub(e.x).redInvm());
                var r = t.redSqr().redISub(this.x).redISub(e.x);
                var i = t.redMul(this.x.redSub(r)).redISub(this.y);
                return this.curve.point(r, i);
            };
            Point.prototype.dbl = function dbl() {
                if (this.inf) return this;
                var e = this.y.redAdd(this.y);
                if (e.cmpn(0) === 0) return this.curve.point(null, null);
                var t = this.curve.a;
                var r = this.x.redSqr();
                var i = e.redInvm();
                var n = r.redAdd(r).redIAdd(r).redIAdd(t).redMul(i);
                var a = n.redSqr().redISub(this.x.redAdd(this.x));
                var s = n.redMul(this.x.redSub(a)).redISub(this.y);
                return this.curve.point(a, s);
            };
            Point.prototype.getX = function getX() {
                return this.x.fromRed();
            };
            Point.prototype.getY = function getY() {
                return this.y.fromRed();
            };
            Point.prototype.mul = function mul(e) {
                e = new n(e, 16);
                if (this.isInfinity()) return this;
                else if (this._hasDoubles(e)) return this.curve._fixedNafMul(this, e);
                else if (this.curve.endo) return this.curve._endoWnafMulAdd([
                    this
                ], [
                    e
                ]);
                else return this.curve._wnafMul(this, e);
            };
            Point.prototype.mulAdd = function mulAdd(e, t, r) {
                var i = [
                    this,
                    t
                ];
                var n = [
                    e,
                    r
                ];
                if (this.curve.endo) return this.curve._endoWnafMulAdd(i, n);
                else return this.curve._wnafMulAdd(1, i, n, 2);
            };
            Point.prototype.jmulAdd = function jmulAdd(e, t, r) {
                var i = [
                    this,
                    t
                ];
                var n = [
                    e,
                    r
                ];
                if (this.curve.endo) return this.curve._endoWnafMulAdd(i, n, true);
                else return this.curve._wnafMulAdd(1, i, n, 2, true);
            };
            Point.prototype.eq = function eq(e) {
                return this === e || this.inf === e.inf && (this.inf || this.x.cmp(e.x) === 0 && this.y.cmp(e.y) === 0);
            };
            Point.prototype.neg = function neg(e) {
                if (this.inf) return this;
                var t = this.curve.point(this.x, this.y.redNeg());
                if (e && this.precomputed) {
                    var r = this.precomputed;
                    var negate = function(e) {
                        return e.neg();
                    };
                    t.precomputed = {
                        naf: r.naf && {
                            wnd: r.naf.wnd,
                            points: r.naf.points.map(negate)
                        },
                        doubles: r.doubles && {
                            step: r.doubles.step,
                            points: r.doubles.points.map(negate)
                        }
                    };
                }
                return t;
            };
            Point.prototype.toJ = function toJ() {
                if (this.inf) return this.curve.jpoint(null, null, null);
                var e = this.curve.jpoint(this.x, this.y, this.curve.one);
                return e;
            };
            function JPoint(e, t, r, i) {
                s.BasePoint.call(this, e, "jacobian");
                if (t === null && r === null && i === null) {
                    this.x = this.curve.one;
                    this.y = this.curve.one;
                    this.z = new n(0);
                } else {
                    this.x = new n(t, 16);
                    this.y = new n(r, 16);
                    this.z = new n(i, 16);
                }
                if (!this.x.red) this.x = this.x.toRed(this.curve.red);
                if (!this.y.red) this.y = this.y.toRed(this.curve.red);
                if (!this.z.red) this.z = this.z.toRed(this.curve.red);
                this.zOne = this.z === this.curve.one;
            }
            a(JPoint, s.BasePoint);
            ShortCurve.prototype.jpoint = function jpoint(e, t, r) {
                return new JPoint(this, e, t, r);
            };
            JPoint.prototype.toP = function toP() {
                if (this.isInfinity()) return this.curve.point(null, null);
                var e = this.z.redInvm();
                var t = e.redSqr();
                var r = this.x.redMul(t);
                var i = this.y.redMul(t).redMul(e);
                return this.curve.point(r, i);
            };
            JPoint.prototype.neg = function neg() {
                return this.curve.jpoint(this.x, this.y.redNeg(), this.z);
            };
            JPoint.prototype.add = function add(e) {
                if (this.isInfinity()) return e;
                if (e.isInfinity()) return this;
                var t = e.z.redSqr();
                var r = this.z.redSqr();
                var i = this.x.redMul(t);
                var n = e.x.redMul(r);
                var a = this.y.redMul(t.redMul(e.z));
                var s = e.y.redMul(r.redMul(this.z));
                var o = i.redSub(n);
                var h = a.redSub(s);
                if (o.cmpn(0) === 0) {
                    if (h.cmpn(0) !== 0) return this.curve.jpoint(null, null, null);
                    else return this.dbl();
                }
                var u = o.redSqr();
                var d = u.redMul(o);
                var c = i.redMul(u);
                var l = h.redSqr().redIAdd(d).redISub(c).redISub(c);
                var p = h.redMul(c.redISub(l)).redISub(a.redMul(d));
                var v = this.z.redMul(e.z).redMul(o);
                return this.curve.jpoint(l, p, v);
            };
            JPoint.prototype.mixedAdd = function mixedAdd(e) {
                if (this.isInfinity()) return e.toJ();
                if (e.isInfinity()) return this;
                var t = this.z.redSqr();
                var r = this.x;
                var i = e.x.redMul(t);
                var n = this.y;
                var a = e.y.redMul(t).redMul(this.z);
                var s = r.redSub(i);
                var o = n.redSub(a);
                if (s.cmpn(0) === 0) {
                    if (o.cmpn(0) !== 0) return this.curve.jpoint(null, null, null);
                    else return this.dbl();
                }
                var h = s.redSqr();
                var u = h.redMul(s);
                var d = r.redMul(h);
                var c = o.redSqr().redIAdd(u).redISub(d).redISub(d);
                var l = o.redMul(d.redISub(c)).redISub(n.redMul(u));
                var p = this.z.redMul(s);
                return this.curve.jpoint(c, l, p);
            };
            JPoint.prototype.dblp = function dblp(e) {
                if (e === 0) return this;
                if (this.isInfinity()) return this;
                if (!e) return this.dbl();
                if (this.curve.zeroA || this.curve.threeA) {
                    var t = this;
                    for(var r = 0; r < e; r++)t = t.dbl();
                    return t;
                }
                var i = this.curve.a;
                var n = this.curve.tinv;
                var a = this.x;
                var s = this.y;
                var o = this.z;
                var h = o.redSqr().redSqr();
                var u = s.redAdd(s);
                for(var r = 0; r < e; r++){
                    var d = a.redSqr();
                    var c = u.redSqr();
                    var l = c.redSqr();
                    var p = d.redAdd(d).redIAdd(d).redIAdd(i.redMul(h));
                    var v = a.redMul(c);
                    var b = p.redSqr().redISub(v.redAdd(v));
                    var m = v.redISub(b);
                    var y = p.redMul(m);
                    y = y.redIAdd(y).redISub(l);
                    var g = u.redMul(o);
                    if (r + 1 < e) h = h.redMul(l);
                    a = b;
                    o = g;
                    u = y;
                }
                return this.curve.jpoint(a, u.redMul(n), o);
            };
            JPoint.prototype.dbl = function dbl() {
                if (this.isInfinity()) return this;
                if (this.curve.zeroA) return this._zeroDbl();
                else if (this.curve.threeA) return this._threeDbl();
                else return this._dbl();
            };
            JPoint.prototype._zeroDbl = function _zeroDbl() {
                var e;
                var t;
                var r;
                if (this.zOne) {
                    var i = this.x.redSqr();
                    var n = this.y.redSqr();
                    var a = n.redSqr();
                    var s = this.x.redAdd(n).redSqr().redISub(i).redISub(a);
                    s = s.redIAdd(s);
                    var o = i.redAdd(i).redIAdd(i);
                    var h = o.redSqr().redISub(s).redISub(s);
                    var u = a.redIAdd(a);
                    u = u.redIAdd(u);
                    u = u.redIAdd(u);
                    e = h;
                    t = o.redMul(s.redISub(h)).redISub(u);
                    r = this.y.redAdd(this.y);
                } else {
                    var d = this.x.redSqr();
                    var c = this.y.redSqr();
                    var l = c.redSqr();
                    var p = this.x.redAdd(c).redSqr().redISub(d).redISub(l);
                    p = p.redIAdd(p);
                    var v = d.redAdd(d).redIAdd(d);
                    var b = v.redSqr();
                    var m = l.redIAdd(l);
                    m = m.redIAdd(m);
                    m = m.redIAdd(m);
                    e = b.redISub(p).redISub(p);
                    t = v.redMul(p.redISub(e)).redISub(m);
                    r = this.y.redMul(this.z);
                    r = r.redIAdd(r);
                }
                return this.curve.jpoint(e, t, r);
            };
            JPoint.prototype._threeDbl = function _threeDbl() {
                var e;
                var t;
                var r;
                if (this.zOne) {
                    var i = this.x.redSqr();
                    var n = this.y.redSqr();
                    var a = n.redSqr();
                    var s = this.x.redAdd(n).redSqr().redISub(i).redISub(a);
                    s = s.redIAdd(s);
                    var o = i.redAdd(i).redIAdd(i).redIAdd(this.curve.a);
                    var h = o.redSqr().redISub(s).redISub(s);
                    e = h;
                    var u = a.redIAdd(a);
                    u = u.redIAdd(u);
                    u = u.redIAdd(u);
                    t = o.redMul(s.redISub(h)).redISub(u);
                    r = this.y.redAdd(this.y);
                } else {
                    var d = this.z.redSqr();
                    var c = this.y.redSqr();
                    var l = this.x.redMul(c);
                    var p = this.x.redSub(d).redMul(this.x.redAdd(d));
                    p = p.redAdd(p).redIAdd(p);
                    var v = l.redIAdd(l);
                    v = v.redIAdd(v);
                    var b = v.redAdd(v);
                    e = p.redSqr().redISub(b);
                    r = this.y.redAdd(this.z).redSqr().redISub(c).redISub(d);
                    var m = c.redSqr();
                    m = m.redIAdd(m);
                    m = m.redIAdd(m);
                    m = m.redIAdd(m);
                    t = p.redMul(v.redISub(e)).redISub(m);
                }
                return this.curve.jpoint(e, t, r);
            };
            JPoint.prototype._dbl = function _dbl() {
                var e = this.curve.a;
                var t = this.x;
                var r = this.y;
                var i = this.z;
                var n = i.redSqr().redSqr();
                var a = t.redSqr();
                var s = r.redSqr();
                var o = a.redAdd(a).redIAdd(a).redIAdd(e.redMul(n));
                var h = t.redAdd(t);
                h = h.redIAdd(h);
                var u = h.redMul(s);
                var d = o.redSqr().redISub(u.redAdd(u));
                var c = u.redISub(d);
                var l = s.redSqr();
                l = l.redIAdd(l);
                l = l.redIAdd(l);
                l = l.redIAdd(l);
                var p = o.redMul(c).redISub(l);
                var v = r.redAdd(r).redMul(i);
                return this.curve.jpoint(d, p, v);
            };
            JPoint.prototype.trpl = function trpl() {
                if (!this.curve.zeroA) return this.dbl().add(this);
                var e = this.x.redSqr();
                var t = this.y.redSqr();
                var r = this.z.redSqr();
                var i = t.redSqr();
                var n = e.redAdd(e).redIAdd(e);
                var a = n.redSqr();
                var s = this.x.redAdd(t).redSqr().redISub(e).redISub(i);
                s = s.redIAdd(s);
                s = s.redAdd(s).redIAdd(s);
                s = s.redISub(a);
                var o = s.redSqr();
                var h = i.redIAdd(i);
                h = h.redIAdd(h);
                h = h.redIAdd(h);
                h = h.redIAdd(h);
                var u = n.redIAdd(s).redSqr().redISub(a).redISub(o).redISub(h);
                var d = t.redMul(u);
                d = d.redIAdd(d);
                d = d.redIAdd(d);
                var c = this.x.redMul(o).redISub(d);
                c = c.redIAdd(c);
                c = c.redIAdd(c);
                var l = this.y.redMul(u.redMul(h.redISub(u)).redISub(s.redMul(o)));
                l = l.redIAdd(l);
                l = l.redIAdd(l);
                l = l.redIAdd(l);
                var p = this.z.redAdd(s).redSqr().redISub(r).redISub(o);
                return this.curve.jpoint(c, l, p);
            };
            JPoint.prototype.mul = function mul(e, t) {
                e = new n(e, t);
                return this.curve._wnafMul(this, e);
            };
            JPoint.prototype.eq = function eq(e) {
                if (e.type === "affine") return this.eq(e.toJ());
                if (this === e) return true;
                var t = this.z.redSqr();
                var r = e.z.redSqr();
                if (this.x.redMul(r).redISub(e.x.redMul(t)).cmpn(0) !== 0) return false;
                var i = t.redMul(this.z);
                var n = r.redMul(e.z);
                return this.y.redMul(n).redISub(e.y.redMul(i)).cmpn(0) === 0;
            };
            JPoint.prototype.eqXToP = function eqXToP(e) {
                var t = this.z.redSqr();
                var r = e.toRed(this.curve.red).redMul(t);
                if (this.x.cmp(r) === 0) return true;
                var i = e.clone();
                var n = this.curve.redN.redMul(t);
                for(;;){
                    i.iadd(this.curve.n);
                    if (i.cmp(this.curve.p) >= 0) return false;
                    r.redIAdd(n);
                    if (this.x.cmp(r) === 0) return true;
                }
            };
            JPoint.prototype.inspect = function inspect() {
                if (this.isInfinity()) return "<EC JPoint Infinity>";
                return "<EC JPoint x: " + this.x.toString(16, 2) + " y: " + this.y.toString(16, 2) + " z: " + this.z.toString(16, 2) + ">";
            };
            JPoint.prototype.isInfinity = function isInfinity() {
                return this.z.cmpn(0) === 0;
            };
        },
        6226: function(e, t, r) {
            "use strict";
            var i = t;
            var n = r(7028);
            var a = r(9359);
            var s = r(4401);
            var o = s.assert;
            function PresetCurve(e) {
                if (e.type === "short") this.curve = new a.short(e);
                else if (e.type === "edwards") this.curve = new a.edwards(e);
                else this.curve = new a.mont(e);
                this.g = this.curve.g;
                this.n = this.curve.n;
                this.hash = e.hash;
                o(this.g.validate(), "Invalid curve");
                o(this.g.mul(this.n).isInfinity(), "Invalid curve, G*N != O");
            }
            i.PresetCurve = PresetCurve;
            function defineCurve(e, t) {
                Object.defineProperty(i, e, {
                    configurable: true,
                    enumerable: true,
                    get: function() {
                        var r = new PresetCurve(t);
                        Object.defineProperty(i, e, {
                            configurable: true,
                            enumerable: true,
                            value: r
                        });
                        return r;
                    }
                });
            }
            defineCurve("p192", {
                type: "short",
                prime: "p192",
                p: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff",
                a: "ffffffff ffffffff ffffffff fffffffe ffffffff fffffffc",
                b: "64210519 e59c80e7 0fa7e9ab 72243049 feb8deec c146b9b1",
                n: "ffffffff ffffffff ffffffff 99def836 146bc9b1 b4d22831",
                hash: n.sha256,
                gRed: false,
                g: [
                    "188da80e b03090f6 7cbf20eb 43a18800 f4ff0afd 82ff1012",
                    "07192b95 ffc8da78 631011ed 6b24cdd5 73f977a1 1e794811"
                ]
            });
            defineCurve("p224", {
                type: "short",
                prime: "p224",
                p: "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001",
                a: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff fffffffe",
                b: "b4050a85 0c04b3ab f5413256 5044b0b7 d7bfd8ba 270b3943 2355ffb4",
                n: "ffffffff ffffffff ffffffff ffff16a2 e0b8f03e 13dd2945 5c5c2a3d",
                hash: n.sha256,
                gRed: false,
                g: [
                    "b70e0cbd 6bb4bf7f 321390b9 4a03c1d3 56c21122 343280d6 115c1d21",
                    "bd376388 b5f723fb 4c22dfe6 cd4375a0 5a074764 44d58199 85007e34"
                ]
            });
            defineCurve("p256", {
                type: "short",
                prime: null,
                p: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff ffffffff",
                a: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff fffffffc",
                b: "5ac635d8 aa3a93e7 b3ebbd55 769886bc 651d06b0 cc53b0f6 3bce3c3e 27d2604b",
                n: "ffffffff 00000000 ffffffff ffffffff bce6faad a7179e84 f3b9cac2 fc632551",
                hash: n.sha256,
                gRed: false,
                g: [
                    "6b17d1f2 e12c4247 f8bce6e5 63a440f2 77037d81 2deb33a0 f4a13945 d898c296",
                    "4fe342e2 fe1a7f9b 8ee7eb4a 7c0f9e16 2bce3357 6b315ece cbb64068 37bf51f5"
                ]
            });
            defineCurve("p384", {
                type: "short",
                prime: null,
                p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff " + "fffffffe ffffffff 00000000 00000000 ffffffff",
                a: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff " + "fffffffe ffffffff 00000000 00000000 fffffffc",
                b: "b3312fa7 e23ee7e4 988e056b e3f82d19 181d9c6e fe814112 0314088f " + "5013875a c656398d 8a2ed19d 2a85c8ed d3ec2aef",
                n: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff c7634d81 " + "f4372ddf 581a0db2 48b0a77a ecec196a ccc52973",
                hash: n.sha384,
                gRed: false,
                g: [
                    "aa87ca22 be8b0537 8eb1c71e f320ad74 6e1d3b62 8ba79b98 59f741e0 82542a38 " + "5502f25d bf55296c 3a545e38 72760ab7",
                    "3617de4a 96262c6f 5d9e98bf 9292dc29 f8f41dbd 289a147c e9da3113 b5f0b8c0 " + "0a60b1ce 1d7e819d 7a431d7c 90ea0e5f"
                ]
            });
            defineCurve("p521", {
                type: "short",
                prime: null,
                p: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff " + "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff " + "ffffffff ffffffff ffffffff ffffffff ffffffff",
                a: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff " + "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff " + "ffffffff ffffffff ffffffff ffffffff fffffffc",
                b: "00000051 953eb961 8e1c9a1f 929a21a0 b68540ee a2da725b " + "99b315f3 b8b48991 8ef109e1 56193951 ec7e937b 1652c0bd " + "3bb1bf07 3573df88 3d2c34f1 ef451fd4 6b503f00",
                n: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff " + "ffffffff ffffffff fffffffa 51868783 bf2f966b 7fcc0148 " + "f709a5d0 3bb5c9b8 899c47ae bb6fb71e 91386409",
                hash: n.sha512,
                gRed: false,
                g: [
                    "000000c6 858e06b7 0404e9cd 9e3ecb66 2395b442 9c648139 " + "053fb521 f828af60 6b4d3dba a14b5e77 efe75928 fe1dc127 " + "a2ffa8de 3348b3c1 856a429b f97e7e31 c2e5bd66",
                    "00000118 39296a78 9a3bc004 5c8a5fb4 2c7d1bd9 98f54449 " + "579b4468 17afbd17 273e662c 97ee7299 5ef42640 c550b901 " + "3fad0761 353c7086 a272c240 88be9476 9fd16650"
                ]
            });
            defineCurve("curve25519", {
                type: "mont",
                prime: "p25519",
                p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
                a: "76d06",
                b: "1",
                n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
                hash: n.sha256,
                gRed: false,
                g: [
                    "9"
                ]
            });
            defineCurve("ed25519", {
                type: "edwards",
                prime: "p25519",
                p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
                a: "-1",
                c: "1",
                d: "52036cee2b6ffe73 8cc740797779e898 00700a4d4141d8ab 75eb4dca135978a3",
                n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
                hash: n.sha256,
                gRed: false,
                g: [
                    "216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a",
                    "6666666666666666666666666666666666666666666666666666666666666658"
                ]
            });
            var h;
            try {
                h = r(9702);
            } catch (e) {
                h = undefined;
            }
            defineCurve("secp256k1", {
                type: "short",
                prime: "k256",
                p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f",
                a: "0",
                b: "7",
                n: "ffffffff ffffffff ffffffff fffffffe baaedce6 af48a03b bfd25e8c d0364141",
                h: "1",
                hash: n.sha256,
                beta: "7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee",
                lambda: "5363ad4cc05c30e0a5261c028812645a122e22ea20816678df02967c1b23bd72",
                basis: [
                    {
                        a: "3086d221a7d46bcde86c90e49284eb15",
                        b: "-e4437ed6010e88286f547fa90abfe4c3"
                    },
                    {
                        a: "114ca50f7a8e2f3f657c1108d9d44cfd8",
                        b: "3086d221a7d46bcde86c90e49284eb15"
                    }
                ],
                gRed: false,
                g: [
                    "79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798",
                    "483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8",
                    h
                ]
            });
        },
        4088: function(e, t, r) {
            "use strict";
            var i = r(711);
            var n = r(4910);
            var a = r(4401);
            var s = r(6226);
            var o = r(3500);
            var h = a.assert;
            var u = r(4724);
            var d = r(7526);
            function EC(e) {
                if (!(this instanceof EC)) return new EC(e);
                if (typeof e === "string") {
                    h(s.hasOwnProperty(e), "Unknown curve " + e);
                    e = s[e];
                }
                if (e instanceof s.PresetCurve) e = {
                    curve: e
                };
                this.curve = e.curve.curve;
                this.n = this.curve.n;
                this.nh = this.n.ushrn(1);
                this.g = this.curve.g;
                this.g = e.curve.g;
                this.g.precompute(e.curve.n.bitLength() + 1);
                this.hash = e.hash || e.curve.hash;
            }
            e.exports = EC;
            EC.prototype.keyPair = function keyPair(e) {
                return new u(this, e);
            };
            EC.prototype.keyFromPrivate = function keyFromPrivate(e, t) {
                return u.fromPrivate(this, e, t);
            };
            EC.prototype.keyFromPublic = function keyFromPublic(e, t) {
                return u.fromPublic(this, e, t);
            };
            EC.prototype.genKeyPair = function genKeyPair(e) {
                if (!e) e = {};
                var t = new n({
                    hash: this.hash,
                    pers: e.pers,
                    persEnc: e.persEnc || "utf8",
                    entropy: e.entropy || o(this.hash.hmacStrength),
                    entropyEnc: e.entropy && e.entropyEnc || "utf8",
                    nonce: this.n.toArray()
                });
                var r = this.n.byteLength();
                var a = this.n.sub(new i(2));
                do {
                    var s = new i(t.generate(r));
                    if (s.cmp(a) > 0) continue;
                    s.iaddn(1);
                    return this.keyFromPrivate(s);
                }while (true)
            };
            EC.prototype._truncateToN = function truncateToN(e, t) {
                var r = e.byteLength() * 8 - this.n.bitLength();
                if (r > 0) e = e.ushrn(r);
                if (!t && e.cmp(this.n) >= 0) return e.sub(this.n);
                else return e;
            };
            EC.prototype.sign = function sign(e, t, r, a) {
                if (typeof r === "object") {
                    a = r;
                    r = null;
                }
                if (!a) a = {};
                t = this.keyFromPrivate(t, r);
                e = this._truncateToN(new i(e, 16));
                var s = this.n.byteLength();
                var o = t.getPrivate().toArray("be", s);
                var h = e.toArray("be", s);
                var u = new n({
                    hash: this.hash,
                    entropy: o,
                    nonce: h,
                    pers: a.pers,
                    persEnc: a.persEnc || "utf8"
                });
                var c = this.n.sub(new i(1));
                for(var l = 0; true; l++){
                    var p = a.k ? a.k(l) : new i(u.generate(this.n.byteLength()));
                    p = this._truncateToN(p, true);
                    if (p.cmpn(1) <= 0 || p.cmp(c) >= 0) continue;
                    var v = this.g.mul(p);
                    if (v.isInfinity()) continue;
                    var b = v.getX();
                    var m = b.umod(this.n);
                    if (m.cmpn(0) === 0) continue;
                    var y = p.invm(this.n).mul(m.mul(t.getPrivate()).iadd(e));
                    y = y.umod(this.n);
                    if (y.cmpn(0) === 0) continue;
                    var g = (v.getY().isOdd() ? 1 : 0) | (b.cmp(m) !== 0 ? 2 : 0);
                    if (a.canonical && y.cmp(this.nh) > 0) {
                        y = this.n.sub(y);
                        g ^= 1;
                    }
                    return new d({
                        r: m,
                        s: y,
                        recoveryParam: g
                    });
                }
            };
            EC.prototype.verify = function verify(e, t, r, n) {
                e = this._truncateToN(new i(e, 16));
                r = this.keyFromPublic(r, n);
                t = new d(t, "hex");
                var a = t.r;
                var s = t.s;
                if (a.cmpn(1) < 0 || a.cmp(this.n) >= 0) return false;
                if (s.cmpn(1) < 0 || s.cmp(this.n) >= 0) return false;
                var o = s.invm(this.n);
                var h = o.mul(e).umod(this.n);
                var u = o.mul(a).umod(this.n);
                if (!this.curve._maxwellTrick) {
                    var c = this.g.mulAdd(h, r.getPublic(), u);
                    if (c.isInfinity()) return false;
                    return c.getX().umod(this.n).cmp(a) === 0;
                }
                var c = this.g.jmulAdd(h, r.getPublic(), u);
                if (c.isInfinity()) return false;
                return c.eqXToP(a);
            };
            EC.prototype.recoverPubKey = function(e, t, r, n) {
                h((3 & r) === r, "The recovery param is more than two bits");
                t = new d(t, n);
                var a = this.n;
                var s = new i(e);
                var o = t.r;
                var u = t.s;
                var c = r & 1;
                var l = r >> 1;
                if (o.cmp(this.curve.p.umod(this.curve.n)) >= 0 && l) throw new Error("Unable to find sencond key candinate");
                if (l) o = this.curve.pointFromX(o.add(this.curve.n), c);
                else o = this.curve.pointFromX(o, c);
                var p = t.r.invm(a);
                var v = a.sub(s).mul(p).umod(a);
                var b = u.mul(p).umod(a);
                return this.g.mulAdd(v, o, b);
            };
            EC.prototype.getKeyRecoveryParam = function(e, t, r, i) {
                t = new d(t, i);
                if (t.recoveryParam !== null) return t.recoveryParam;
                for(var n = 0; n < 4; n++){
                    var a;
                    try {
                        a = this.recoverPubKey(e, t, n);
                    } catch (e) {
                        continue;
                    }
                    if (a.eq(r)) return n;
                }
                throw new Error("Unable to find valid recovery factor");
            };
        },
        4724: function(e, t, r) {
            "use strict";
            var i = r(711);
            var n = r(4401);
            var a = n.assert;
            function KeyPair(e, t) {
                this.ec = e;
                this.priv = null;
                this.pub = null;
                if (t.priv) this._importPrivate(t.priv, t.privEnc);
                if (t.pub) this._importPublic(t.pub, t.pubEnc);
            }
            e.exports = KeyPair;
            KeyPair.fromPublic = function fromPublic(e, t, r) {
                if (t instanceof KeyPair) return t;
                return new KeyPair(e, {
                    pub: t,
                    pubEnc: r
                });
            };
            KeyPair.fromPrivate = function fromPrivate(e, t, r) {
                if (t instanceof KeyPair) return t;
                return new KeyPair(e, {
                    priv: t,
                    privEnc: r
                });
            };
            KeyPair.prototype.validate = function validate() {
                var e = this.getPublic();
                if (e.isInfinity()) return {
                    result: false,
                    reason: "Invalid public key"
                };
                if (!e.validate()) return {
                    result: false,
                    reason: "Public key is not a point"
                };
                if (!e.mul(this.ec.curve.n).isInfinity()) return {
                    result: false,
                    reason: "Public key * N != O"
                };
                return {
                    result: true,
                    reason: null
                };
            };
            KeyPair.prototype.getPublic = function getPublic(e, t) {
                if (typeof e === "string") {
                    t = e;
                    e = null;
                }
                if (!this.pub) this.pub = this.ec.g.mul(this.priv);
                if (!t) return this.pub;
                return this.pub.encode(t, e);
            };
            KeyPair.prototype.getPrivate = function getPrivate(e) {
                if (e === "hex") return this.priv.toString(16, 2);
                else return this.priv;
            };
            KeyPair.prototype._importPrivate = function _importPrivate(e, t) {
                this.priv = new i(e, t || 16);
                this.priv = this.priv.umod(this.ec.curve.n);
            };
            KeyPair.prototype._importPublic = function _importPublic(e, t) {
                if (e.x || e.y) {
                    if (this.ec.curve.type === "mont") {
                        a(e.x, "Need x coordinate");
                    } else if (this.ec.curve.type === "short" || this.ec.curve.type === "edwards") {
                        a(e.x && e.y, "Need both x and y coordinate");
                    }
                    this.pub = this.ec.curve.point(e.x, e.y);
                    return;
                }
                this.pub = this.ec.curve.decodePoint(e, t);
            };
            KeyPair.prototype.derive = function derive(e) {
                return e.mul(this.priv).getX();
            };
            KeyPair.prototype.sign = function sign(e, t, r) {
                return this.ec.sign(e, this, t, r);
            };
            KeyPair.prototype.verify = function verify(e, t) {
                return this.ec.verify(e, t, this);
            };
            KeyPair.prototype.inspect = function inspect() {
                return "<Key priv: " + (this.priv && this.priv.toString(16, 2)) + " pub: " + (this.pub && this.pub.inspect()) + " >";
            };
        },
        7526: function(e, t, r) {
            "use strict";
            var i = r(711);
            var n = r(4401);
            var a = n.assert;
            function Signature(e, t) {
                if (e instanceof Signature) return e;
                if (this._importDER(e, t)) return;
                a(e.r && e.s, "Signature without r or s");
                this.r = new i(e.r, 16);
                this.s = new i(e.s, 16);
                if (e.recoveryParam === undefined) this.recoveryParam = null;
                else this.recoveryParam = e.recoveryParam;
            }
            e.exports = Signature;
            function Position() {
                this.place = 0;
            }
            function getLength(e, t) {
                var r = e[t.place++];
                if (!(r & 128)) {
                    return r;
                }
                var i = r & 15;
                if (i === 0 || i > 4) {
                    return false;
                }
                var n = 0;
                for(var a = 0, s = t.place; a < i; a++, s++){
                    n <<= 8;
                    n |= e[s];
                    n >>>= 0;
                }
                if (n <= 127) {
                    return false;
                }
                t.place = s;
                return n;
            }
            function rmPadding(e) {
                var t = 0;
                var r = e.length - 1;
                while(!e[t] && !(e[t + 1] & 128) && t < r){
                    t++;
                }
                if (t === 0) {
                    return e;
                }
                return e.slice(t);
            }
            Signature.prototype._importDER = function _importDER(e, t) {
                e = n.toArray(e, t);
                var r = new Position;
                if (e[r.place++] !== 48) {
                    return false;
                }
                var a = getLength(e, r);
                if (a === false) {
                    return false;
                }
                if (a + r.place !== e.length) {
                    return false;
                }
                if (e[r.place++] !== 2) {
                    return false;
                }
                var s = getLength(e, r);
                if (s === false) {
                    return false;
                }
                var o = e.slice(r.place, s + r.place);
                r.place += s;
                if (e[r.place++] !== 2) {
                    return false;
                }
                var h = getLength(e, r);
                if (h === false) {
                    return false;
                }
                if (e.length !== h + r.place) {
                    return false;
                }
                var u = e.slice(r.place, h + r.place);
                if (o[0] === 0) {
                    if (o[1] & 128) {
                        o = o.slice(1);
                    } else {
                        return false;
                    }
                }
                if (u[0] === 0) {
                    if (u[1] & 128) {
                        u = u.slice(1);
                    } else {
                        return false;
                    }
                }
                this.r = new i(o);
                this.s = new i(u);
                this.recoveryParam = null;
                return true;
            };
            function constructLength(e, t) {
                if (t < 128) {
                    e.push(t);
                    return;
                }
                var r = 1 + (Math.log(t) / Math.LN2 >>> 3);
                e.push(r | 128);
                while(--r){
                    e.push(t >>> (r << 3) & 255);
                }
                e.push(t);
            }
            Signature.prototype.toDER = function toDER(e) {
                var t = this.r.toArray();
                var r = this.s.toArray();
                if (t[0] & 128) t = [
                    0
                ].concat(t);
                if (r[0] & 128) r = [
                    0
                ].concat(r);
                t = rmPadding(t);
                r = rmPadding(r);
                while(!r[0] && !(r[1] & 128)){
                    r = r.slice(1);
                }
                var i = [
                    2
                ];
                constructLength(i, t.length);
                i = i.concat(t);
                i.push(2);
                constructLength(i, r.length);
                var a = i.concat(r);
                var s = [
                    48
                ];
                constructLength(s, a.length);
                s = s.concat(a);
                return n.encode(s, e);
            };
        },
        8511: function(e, t, r) {
            "use strict";
            var i = r(7028);
            var n = r(6226);
            var a = r(4401);
            var s = a.assert;
            var o = a.parseBytes;
            var h = r(9917);
            var u = r(9314);
            function EDDSA(e) {
                s(e === "ed25519", "only tested with ed25519 so far");
                if (!(this instanceof EDDSA)) return new EDDSA(e);
                var e = n[e].curve;
                this.curve = e;
                this.g = e.g;
                this.g.precompute(e.n.bitLength() + 1);
                this.pointClass = e.point().constructor;
                this.encodingLength = Math.ceil(e.n.bitLength() / 8);
                this.hash = i.sha512;
            }
            e.exports = EDDSA;
            EDDSA.prototype.sign = function sign(e, t) {
                e = o(e);
                var r = this.keyFromSecret(t);
                var i = this.hashInt(r.messagePrefix(), e);
                var n = this.g.mul(i);
                var a = this.encodePoint(n);
                var s = this.hashInt(a, r.pubBytes(), e).mul(r.priv());
                var h = i.add(s).umod(this.curve.n);
                return this.makeSignature({
                    R: n,
                    S: h,
                    Rencoded: a
                });
            };
            EDDSA.prototype.verify = function verify(e, t, r) {
                e = o(e);
                t = this.makeSignature(t);
                var i = this.keyFromPublic(r);
                var n = this.hashInt(t.Rencoded(), i.pubBytes(), e);
                var a = this.g.mul(t.S());
                var s = t.R().add(i.pub().mul(n));
                return s.eq(a);
            };
            EDDSA.prototype.hashInt = function hashInt() {
                var e = this.hash();
                for(var t = 0; t < arguments.length; t++)e.update(arguments[t]);
                return a.intFromLE(e.digest()).umod(this.curve.n);
            };
            EDDSA.prototype.keyFromPublic = function keyFromPublic(e) {
                return h.fromPublic(this, e);
            };
            EDDSA.prototype.keyFromSecret = function keyFromSecret(e) {
                return h.fromSecret(this, e);
            };
            EDDSA.prototype.makeSignature = function makeSignature(e) {
                if (e instanceof u) return e;
                return new u(this, e);
            };
            EDDSA.prototype.encodePoint = function encodePoint(e) {
                var t = e.getY().toArray("le", this.encodingLength);
                t[this.encodingLength - 1] |= e.getX().isOdd() ? 128 : 0;
                return t;
            };
            EDDSA.prototype.decodePoint = function decodePoint(e) {
                e = a.parseBytes(e);
                var t = e.length - 1;
                var r = e.slice(0, t).concat(e[t] & ~128);
                var i = (e[t] & 128) !== 0;
                var n = a.intFromLE(r);
                return this.curve.pointFromY(n, i);
            };
            EDDSA.prototype.encodeInt = function encodeInt(e) {
                return e.toArray("le", this.encodingLength);
            };
            EDDSA.prototype.decodeInt = function decodeInt(e) {
                return a.intFromLE(e);
            };
            EDDSA.prototype.isPoint = function isPoint(e) {
                return e instanceof this.pointClass;
            };
        },
        9917: function(e, t, r) {
            "use strict";
            var i = r(4401);
            var n = i.assert;
            var a = i.parseBytes;
            var s = i.cachedProperty;
            function KeyPair(e, t) {
                this.eddsa = e;
                this._secret = a(t.secret);
                if (e.isPoint(t.pub)) this._pub = t.pub;
                else this._pubBytes = a(t.pub);
            }
            KeyPair.fromPublic = function fromPublic(e, t) {
                if (t instanceof KeyPair) return t;
                return new KeyPair(e, {
                    pub: t
                });
            };
            KeyPair.fromSecret = function fromSecret(e, t) {
                if (t instanceof KeyPair) return t;
                return new KeyPair(e, {
                    secret: t
                });
            };
            KeyPair.prototype.secret = function secret() {
                return this._secret;
            };
            s(KeyPair, "pubBytes", function pubBytes() {
                return this.eddsa.encodePoint(this.pub());
            });
            s(KeyPair, "pub", function pub() {
                if (this._pubBytes) return this.eddsa.decodePoint(this._pubBytes);
                return this.eddsa.g.mul(this.priv());
            });
            s(KeyPair, "privBytes", function privBytes() {
                var e = this.eddsa;
                var t = this.hash();
                var r = e.encodingLength - 1;
                var i = t.slice(0, e.encodingLength);
                i[0] &= 248;
                i[r] &= 127;
                i[r] |= 64;
                return i;
            });
            s(KeyPair, "priv", function priv() {
                return this.eddsa.decodeInt(this.privBytes());
            });
            s(KeyPair, "hash", function hash() {
                return this.eddsa.hash().update(this.secret()).digest();
            });
            s(KeyPair, "messagePrefix", function messagePrefix() {
                return this.hash().slice(this.eddsa.encodingLength);
            });
            KeyPair.prototype.sign = function sign(e) {
                n(this._secret, "KeyPair can only verify");
                return this.eddsa.sign(e, this);
            };
            KeyPair.prototype.verify = function verify(e, t) {
                return this.eddsa.verify(e, t, this);
            };
            KeyPair.prototype.getSecret = function getSecret(e) {
                n(this._secret, "KeyPair is public only");
                return i.encode(this.secret(), e);
            };
            KeyPair.prototype.getPublic = function getPublic(e) {
                return i.encode(this.pubBytes(), e);
            };
            e.exports = KeyPair;
        },
        9314: function(e, t, r) {
            "use strict";
            var i = r(711);
            var n = r(4401);
            var a = n.assert;
            var s = n.cachedProperty;
            var o = n.parseBytes;
            function Signature(e, t) {
                this.eddsa = e;
                if (typeof t !== "object") t = o(t);
                if (Array.isArray(t)) {
                    t = {
                        R: t.slice(0, e.encodingLength),
                        S: t.slice(e.encodingLength)
                    };
                }
                a(t.R && t.S, "Signature without R or S");
                if (e.isPoint(t.R)) this._R = t.R;
                if (t.S instanceof i) this._S = t.S;
                this._Rencoded = Array.isArray(t.R) ? t.R : t.Rencoded;
                this._Sencoded = Array.isArray(t.S) ? t.S : t.Sencoded;
            }
            s(Signature, "S", function S() {
                return this.eddsa.decodeInt(this.Sencoded());
            });
            s(Signature, "R", function R() {
                return this.eddsa.decodePoint(this.Rencoded());
            });
            s(Signature, "Rencoded", function Rencoded() {
                return this.eddsa.encodePoint(this.R());
            });
            s(Signature, "Sencoded", function Sencoded() {
                return this.eddsa.encodeInt(this.S());
            });
            Signature.prototype.toBytes = function toBytes() {
                return this.Rencoded().concat(this.Sencoded());
            };
            Signature.prototype.toHex = function toHex() {
                return n.encode(this.toBytes(), "hex").toUpperCase();
            };
            e.exports = Signature;
        },
        9702: function(e) {
            e.exports = {
                doubles: {
                    step: 4,
                    points: [
                        [
                            "e60fce93b59e9ec53011aabc21c23e97b2a31369b87a5ae9c44ee89e2a6dec0a",
                            "f7e3507399e595929db99f34f57937101296891e44d23f0be1f32cce69616821"
                        ],
                        [
                            "8282263212c609d9ea2a6e3e172de238d8c39cabd5ac1ca10646e23fd5f51508",
                            "11f8a8098557dfe45e8256e830b60ace62d613ac2f7b17bed31b6eaff6e26caf"
                        ],
                        [
                            "175e159f728b865a72f99cc6c6fc846de0b93833fd2222ed73fce5b551e5b739",
                            "d3506e0d9e3c79eba4ef97a51ff71f5eacb5955add24345c6efa6ffee9fed695"
                        ],
                        [
                            "363d90d447b00c9c99ceac05b6262ee053441c7e55552ffe526bad8f83ff4640",
                            "4e273adfc732221953b445397f3363145b9a89008199ecb62003c7f3bee9de9"
                        ],
                        [
                            "8b4b5f165df3c2be8c6244b5b745638843e4a781a15bcd1b69f79a55dffdf80c",
                            "4aad0a6f68d308b4b3fbd7813ab0da04f9e336546162ee56b3eff0c65fd4fd36"
                        ],
                        [
                            "723cbaa6e5db996d6bf771c00bd548c7b700dbffa6c0e77bcb6115925232fcda",
                            "96e867b5595cc498a921137488824d6e2660a0653779494801dc069d9eb39f5f"
                        ],
                        [
                            "eebfa4d493bebf98ba5feec812c2d3b50947961237a919839a533eca0e7dd7fa",
                            "5d9a8ca3970ef0f269ee7edaf178089d9ae4cdc3a711f712ddfd4fdae1de8999"
                        ],
                        [
                            "100f44da696e71672791d0a09b7bde459f1215a29b3c03bfefd7835b39a48db0",
                            "cdd9e13192a00b772ec8f3300c090666b7ff4a18ff5195ac0fbd5cd62bc65a09"
                        ],
                        [
                            "e1031be262c7ed1b1dc9227a4a04c017a77f8d4464f3b3852c8acde6e534fd2d",
                            "9d7061928940405e6bb6a4176597535af292dd419e1ced79a44f18f29456a00d"
                        ],
                        [
                            "feea6cae46d55b530ac2839f143bd7ec5cf8b266a41d6af52d5e688d9094696d",
                            "e57c6b6c97dce1bab06e4e12bf3ecd5c981c8957cc41442d3155debf18090088"
                        ],
                        [
                            "da67a91d91049cdcb367be4be6ffca3cfeed657d808583de33fa978bc1ec6cb1",
                            "9bacaa35481642bc41f463f7ec9780e5dec7adc508f740a17e9ea8e27a68be1d"
                        ],
                        [
                            "53904faa0b334cdda6e000935ef22151ec08d0f7bb11069f57545ccc1a37b7c0",
                            "5bc087d0bc80106d88c9eccac20d3c1c13999981e14434699dcb096b022771c8"
                        ],
                        [
                            "8e7bcd0bd35983a7719cca7764ca906779b53a043a9b8bcaeff959f43ad86047",
                            "10b7770b2a3da4b3940310420ca9514579e88e2e47fd68b3ea10047e8460372a"
                        ],
                        [
                            "385eed34c1cdff21e6d0818689b81bde71a7f4f18397e6690a841e1599c43862",
                            "283bebc3e8ea23f56701de19e9ebf4576b304eec2086dc8cc0458fe5542e5453"
                        ],
                        [
                            "6f9d9b803ecf191637c73a4413dfa180fddf84a5947fbc9c606ed86c3fac3a7",
                            "7c80c68e603059ba69b8e2a30e45c4d47ea4dd2f5c281002d86890603a842160"
                        ],
                        [
                            "3322d401243c4e2582a2147c104d6ecbf774d163db0f5e5313b7e0e742d0e6bd",
                            "56e70797e9664ef5bfb019bc4ddaf9b72805f63ea2873af624f3a2e96c28b2a0"
                        ],
                        [
                            "85672c7d2de0b7da2bd1770d89665868741b3f9af7643397721d74d28134ab83",
                            "7c481b9b5b43b2eb6374049bfa62c2e5e77f17fcc5298f44c8e3094f790313a6"
                        ],
                        [
                            "948bf809b1988a46b06c9f1919413b10f9226c60f668832ffd959af60c82a0a",
                            "53a562856dcb6646dc6b74c5d1c3418c6d4dff08c97cd2bed4cb7f88d8c8e589"
                        ],
                        [
                            "6260ce7f461801c34f067ce0f02873a8f1b0e44dfc69752accecd819f38fd8e8",
                            "bc2da82b6fa5b571a7f09049776a1ef7ecd292238051c198c1a84e95b2b4ae17"
                        ],
                        [
                            "e5037de0afc1d8d43d8348414bbf4103043ec8f575bfdc432953cc8d2037fa2d",
                            "4571534baa94d3b5f9f98d09fb990bddbd5f5b03ec481f10e0e5dc841d755bda"
                        ],
                        [
                            "e06372b0f4a207adf5ea905e8f1771b4e7e8dbd1c6a6c5b725866a0ae4fce725",
                            "7a908974bce18cfe12a27bb2ad5a488cd7484a7787104870b27034f94eee31dd"
                        ],
                        [
                            "213c7a715cd5d45358d0bbf9dc0ce02204b10bdde2a3f58540ad6908d0559754",
                            "4b6dad0b5ae462507013ad06245ba190bb4850f5f36a7eeddff2c27534b458f2"
                        ],
                        [
                            "4e7c272a7af4b34e8dbb9352a5419a87e2838c70adc62cddf0cc3a3b08fbd53c",
                            "17749c766c9d0b18e16fd09f6def681b530b9614bff7dd33e0b3941817dcaae6"
                        ],
                        [
                            "fea74e3dbe778b1b10f238ad61686aa5c76e3db2be43057632427e2840fb27b6",
                            "6e0568db9b0b13297cf674deccb6af93126b596b973f7b77701d3db7f23cb96f"
                        ],
                        [
                            "76e64113f677cf0e10a2570d599968d31544e179b760432952c02a4417bdde39",
                            "c90ddf8dee4e95cf577066d70681f0d35e2a33d2b56d2032b4b1752d1901ac01"
                        ],
                        [
                            "c738c56b03b2abe1e8281baa743f8f9a8f7cc643df26cbee3ab150242bcbb891",
                            "893fb578951ad2537f718f2eacbfbbbb82314eef7880cfe917e735d9699a84c3"
                        ],
                        [
                            "d895626548b65b81e264c7637c972877d1d72e5f3a925014372e9f6588f6c14b",
                            "febfaa38f2bc7eae728ec60818c340eb03428d632bb067e179363ed75d7d991f"
                        ],
                        [
                            "b8da94032a957518eb0f6433571e8761ceffc73693e84edd49150a564f676e03",
                            "2804dfa44805a1e4d7c99cc9762808b092cc584d95ff3b511488e4e74efdf6e7"
                        ],
                        [
                            "e80fea14441fb33a7d8adab9475d7fab2019effb5156a792f1a11778e3c0df5d",
                            "eed1de7f638e00771e89768ca3ca94472d155e80af322ea9fcb4291b6ac9ec78"
                        ],
                        [
                            "a301697bdfcd704313ba48e51d567543f2a182031efd6915ddc07bbcc4e16070",
                            "7370f91cfb67e4f5081809fa25d40f9b1735dbf7c0a11a130c0d1a041e177ea1"
                        ],
                        [
                            "90ad85b389d6b936463f9d0512678de208cc330b11307fffab7ac63e3fb04ed4",
                            "e507a3620a38261affdcbd9427222b839aefabe1582894d991d4d48cb6ef150"
                        ],
                        [
                            "8f68b9d2f63b5f339239c1ad981f162ee88c5678723ea3351b7b444c9ec4c0da",
                            "662a9f2dba063986de1d90c2b6be215dbbea2cfe95510bfdf23cbf79501fff82"
                        ],
                        [
                            "e4f3fb0176af85d65ff99ff9198c36091f48e86503681e3e6686fd5053231e11",
                            "1e63633ad0ef4f1c1661a6d0ea02b7286cc7e74ec951d1c9822c38576feb73bc"
                        ],
                        [
                            "8c00fa9b18ebf331eb961537a45a4266c7034f2f0d4e1d0716fb6eae20eae29e",
                            "efa47267fea521a1a9dc343a3736c974c2fadafa81e36c54e7d2a4c66702414b"
                        ],
                        [
                            "e7a26ce69dd4829f3e10cec0a9e98ed3143d084f308b92c0997fddfc60cb3e41",
                            "2a758e300fa7984b471b006a1aafbb18d0a6b2c0420e83e20e8a9421cf2cfd51"
                        ],
                        [
                            "b6459e0ee3662ec8d23540c223bcbdc571cbcb967d79424f3cf29eb3de6b80ef",
                            "67c876d06f3e06de1dadf16e5661db3c4b3ae6d48e35b2ff30bf0b61a71ba45"
                        ],
                        [
                            "d68a80c8280bb840793234aa118f06231d6f1fc67e73c5a5deda0f5b496943e8",
                            "db8ba9fff4b586d00c4b1f9177b0e28b5b0e7b8f7845295a294c84266b133120"
                        ],
                        [
                            "324aed7df65c804252dc0270907a30b09612aeb973449cea4095980fc28d3d5d",
                            "648a365774b61f2ff130c0c35aec1f4f19213b0c7e332843967224af96ab7c84"
                        ],
                        [
                            "4df9c14919cde61f6d51dfdbe5fee5dceec4143ba8d1ca888e8bd373fd054c96",
                            "35ec51092d8728050974c23a1d85d4b5d506cdc288490192ebac06cad10d5d"
                        ],
                        [
                            "9c3919a84a474870faed8a9c1cc66021523489054d7f0308cbfc99c8ac1f98cd",
                            "ddb84f0f4a4ddd57584f044bf260e641905326f76c64c8e6be7e5e03d4fc599d"
                        ],
                        [
                            "6057170b1dd12fdf8de05f281d8e06bb91e1493a8b91d4cc5a21382120a959e5",
                            "9a1af0b26a6a4807add9a2daf71df262465152bc3ee24c65e899be932385a2a8"
                        ],
                        [
                            "a576df8e23a08411421439a4518da31880cef0fba7d4df12b1a6973eecb94266",
                            "40a6bf20e76640b2c92b97afe58cd82c432e10a7f514d9f3ee8be11ae1b28ec8"
                        ],
                        [
                            "7778a78c28dec3e30a05fe9629de8c38bb30d1f5cf9a3a208f763889be58ad71",
                            "34626d9ab5a5b22ff7098e12f2ff580087b38411ff24ac563b513fc1fd9f43ac"
                        ],
                        [
                            "928955ee637a84463729fd30e7afd2ed5f96274e5ad7e5cb09eda9c06d903ac",
                            "c25621003d3f42a827b78a13093a95eeac3d26efa8a8d83fc5180e935bcd091f"
                        ],
                        [
                            "85d0fef3ec6db109399064f3a0e3b2855645b4a907ad354527aae75163d82751",
                            "1f03648413a38c0be29d496e582cf5663e8751e96877331582c237a24eb1f962"
                        ],
                        [
                            "ff2b0dce97eece97c1c9b6041798b85dfdfb6d8882da20308f5404824526087e",
                            "493d13fef524ba188af4c4dc54d07936c7b7ed6fb90e2ceb2c951e01f0c29907"
                        ],
                        [
                            "827fbbe4b1e880ea9ed2b2e6301b212b57f1ee148cd6dd28780e5e2cf856e241",
                            "c60f9c923c727b0b71bef2c67d1d12687ff7a63186903166d605b68baec293ec"
                        ],
                        [
                            "eaa649f21f51bdbae7be4ae34ce6e5217a58fdce7f47f9aa7f3b58fa2120e2b3",
                            "be3279ed5bbbb03ac69a80f89879aa5a01a6b965f13f7e59d47a5305ba5ad93d"
                        ],
                        [
                            "e4a42d43c5cf169d9391df6decf42ee541b6d8f0c9a137401e23632dda34d24f",
                            "4d9f92e716d1c73526fc99ccfb8ad34ce886eedfa8d8e4f13a7f7131deba9414"
                        ],
                        [
                            "1ec80fef360cbdd954160fadab352b6b92b53576a88fea4947173b9d4300bf19",
                            "aeefe93756b5340d2f3a4958a7abbf5e0146e77f6295a07b671cdc1cc107cefd"
                        ],
                        [
                            "146a778c04670c2f91b00af4680dfa8bce3490717d58ba889ddb5928366642be",
                            "b318e0ec3354028add669827f9d4b2870aaa971d2f7e5ed1d0b297483d83efd0"
                        ],
                        [
                            "fa50c0f61d22e5f07e3acebb1aa07b128d0012209a28b9776d76a8793180eef9",
                            "6b84c6922397eba9b72cd2872281a68a5e683293a57a213b38cd8d7d3f4f2811"
                        ],
                        [
                            "da1d61d0ca721a11b1a5bf6b7d88e8421a288ab5d5bba5220e53d32b5f067ec2",
                            "8157f55a7c99306c79c0766161c91e2966a73899d279b48a655fba0f1ad836f1"
                        ],
                        [
                            "a8e282ff0c9706907215ff98e8fd416615311de0446f1e062a73b0610d064e13",
                            "7f97355b8db81c09abfb7f3c5b2515888b679a3e50dd6bd6cef7c73111f4cc0c"
                        ],
                        [
                            "174a53b9c9a285872d39e56e6913cab15d59b1fa512508c022f382de8319497c",
                            "ccc9dc37abfc9c1657b4155f2c47f9e6646b3a1d8cb9854383da13ac079afa73"
                        ],
                        [
                            "959396981943785c3d3e57edf5018cdbe039e730e4918b3d884fdff09475b7ba",
                            "2e7e552888c331dd8ba0386a4b9cd6849c653f64c8709385e9b8abf87524f2fd"
                        ],
                        [
                            "d2a63a50ae401e56d645a1153b109a8fcca0a43d561fba2dbb51340c9d82b151",
                            "e82d86fb6443fcb7565aee58b2948220a70f750af484ca52d4142174dcf89405"
                        ],
                        [
                            "64587e2335471eb890ee7896d7cfdc866bacbdbd3839317b3436f9b45617e073",
                            "d99fcdd5bf6902e2ae96dd6447c299a185b90a39133aeab358299e5e9faf6589"
                        ],
                        [
                            "8481bde0e4e4d885b3a546d3e549de042f0aa6cea250e7fd358d6c86dd45e458",
                            "38ee7b8cba5404dd84a25bf39cecb2ca900a79c42b262e556d64b1b59779057e"
                        ],
                        [
                            "13464a57a78102aa62b6979ae817f4637ffcfed3c4b1ce30bcd6303f6caf666b",
                            "69be159004614580ef7e433453ccb0ca48f300a81d0942e13f495a907f6ecc27"
                        ],
                        [
                            "bc4a9df5b713fe2e9aef430bcc1dc97a0cd9ccede2f28588cada3a0d2d83f366",
                            "d3a81ca6e785c06383937adf4b798caa6e8a9fbfa547b16d758d666581f33c1"
                        ],
                        [
                            "8c28a97bf8298bc0d23d8c749452a32e694b65e30a9472a3954ab30fe5324caa",
                            "40a30463a3305193378fedf31f7cc0eb7ae784f0451cb9459e71dc73cbef9482"
                        ],
                        [
                            "8ea9666139527a8c1dd94ce4f071fd23c8b350c5a4bb33748c4ba111faccae0",
                            "620efabbc8ee2782e24e7c0cfb95c5d735b783be9cf0f8e955af34a30e62b945"
                        ],
                        [
                            "dd3625faef5ba06074669716bbd3788d89bdde815959968092f76cc4eb9a9787",
                            "7a188fa3520e30d461da2501045731ca941461982883395937f68d00c644a573"
                        ],
                        [
                            "f710d79d9eb962297e4f6232b40e8f7feb2bc63814614d692c12de752408221e",
                            "ea98e67232d3b3295d3b535532115ccac8612c721851617526ae47a9c77bfc82"
                        ]
                    ]
                },
                naf: {
                    wnd: 7,
                    points: [
                        [
                            "f9308a019258c31049344f85f89d5229b531c845836f99b08601f113bce036f9",
                            "388f7b0f632de8140fe337e62a37f3566500a99934c2231b6cb9fd7584b8e672"
                        ],
                        [
                            "2f8bde4d1a07209355b4a7250a5c5128e88b84bddc619ab7cba8d569b240efe4",
                            "d8ac222636e5e3d6d4dba9dda6c9c426f788271bab0d6840dca87d3aa6ac62d6"
                        ],
                        [
                            "5cbdf0646e5db4eaa398f365f2ea7a0e3d419b7e0330e39ce92bddedcac4f9bc",
                            "6aebca40ba255960a3178d6d861a54dba813d0b813fde7b5a5082628087264da"
                        ],
                        [
                            "acd484e2f0c7f65309ad178a9f559abde09796974c57e714c35f110dfc27ccbe",
                            "cc338921b0a7d9fd64380971763b61e9add888a4375f8e0f05cc262ac64f9c37"
                        ],
                        [
                            "774ae7f858a9411e5ef4246b70c65aac5649980be5c17891bbec17895da008cb",
                            "d984a032eb6b5e190243dd56d7b7b365372db1e2dff9d6a8301d74c9c953c61b"
                        ],
                        [
                            "f28773c2d975288bc7d1d205c3748651b075fbc6610e58cddeeddf8f19405aa8",
                            "ab0902e8d880a89758212eb65cdaf473a1a06da521fa91f29b5cb52db03ed81"
                        ],
                        [
                            "d7924d4f7d43ea965a465ae3095ff41131e5946f3c85f79e44adbcf8e27e080e",
                            "581e2872a86c72a683842ec228cc6defea40af2bd896d3a5c504dc9ff6a26b58"
                        ],
                        [
                            "defdea4cdb677750a420fee807eacf21eb9898ae79b9768766e4faa04a2d4a34",
                            "4211ab0694635168e997b0ead2a93daeced1f4a04a95c0f6cfb199f69e56eb77"
                        ],
                        [
                            "2b4ea0a797a443d293ef5cff444f4979f06acfebd7e86d277475656138385b6c",
                            "85e89bc037945d93b343083b5a1c86131a01f60c50269763b570c854e5c09b7a"
                        ],
                        [
                            "352bbf4a4cdd12564f93fa332ce333301d9ad40271f8107181340aef25be59d5",
                            "321eb4075348f534d59c18259dda3e1f4a1b3b2e71b1039c67bd3d8bcf81998c"
                        ],
                        [
                            "2fa2104d6b38d11b0230010559879124e42ab8dfeff5ff29dc9cdadd4ecacc3f",
                            "2de1068295dd865b64569335bd5dd80181d70ecfc882648423ba76b532b7d67"
                        ],
                        [
                            "9248279b09b4d68dab21a9b066edda83263c3d84e09572e269ca0cd7f5453714",
                            "73016f7bf234aade5d1aa71bdea2b1ff3fc0de2a887912ffe54a32ce97cb3402"
                        ],
                        [
                            "daed4f2be3a8bf278e70132fb0beb7522f570e144bf615c07e996d443dee8729",
                            "a69dce4a7d6c98e8d4a1aca87ef8d7003f83c230f3afa726ab40e52290be1c55"
                        ],
                        [
                            "c44d12c7065d812e8acf28d7cbb19f9011ecd9e9fdf281b0e6a3b5e87d22e7db",
                            "2119a460ce326cdc76c45926c982fdac0e106e861edf61c5a039063f0e0e6482"
                        ],
                        [
                            "6a245bf6dc698504c89a20cfded60853152b695336c28063b61c65cbd269e6b4",
                            "e022cf42c2bd4a708b3f5126f16a24ad8b33ba48d0423b6efd5e6348100d8a82"
                        ],
                        [
                            "1697ffa6fd9de627c077e3d2fe541084ce13300b0bec1146f95ae57f0d0bd6a5",
                            "b9c398f186806f5d27561506e4557433a2cf15009e498ae7adee9d63d01b2396"
                        ],
                        [
                            "605bdb019981718b986d0f07e834cb0d9deb8360ffb7f61df982345ef27a7479",
                            "2972d2de4f8d20681a78d93ec96fe23c26bfae84fb14db43b01e1e9056b8c49"
                        ],
                        [
                            "62d14dab4150bf497402fdc45a215e10dcb01c354959b10cfe31c7e9d87ff33d",
                            "80fc06bd8cc5b01098088a1950eed0db01aa132967ab472235f5642483b25eaf"
                        ],
                        [
                            "80c60ad0040f27dade5b4b06c408e56b2c50e9f56b9b8b425e555c2f86308b6f",
                            "1c38303f1cc5c30f26e66bad7fe72f70a65eed4cbe7024eb1aa01f56430bd57a"
                        ],
                        [
                            "7a9375ad6167ad54aa74c6348cc54d344cc5dc9487d847049d5eabb0fa03c8fb",
                            "d0e3fa9eca8726909559e0d79269046bdc59ea10c70ce2b02d499ec224dc7f7"
                        ],
                        [
                            "d528ecd9b696b54c907a9ed045447a79bb408ec39b68df504bb51f459bc3ffc9",
                            "eecf41253136e5f99966f21881fd656ebc4345405c520dbc063465b521409933"
                        ],
                        [
                            "49370a4b5f43412ea25f514e8ecdad05266115e4a7ecb1387231808f8b45963",
                            "758f3f41afd6ed428b3081b0512fd62a54c3f3afbb5b6764b653052a12949c9a"
                        ],
                        [
                            "77f230936ee88cbbd73df930d64702ef881d811e0e1498e2f1c13eb1fc345d74",
                            "958ef42a7886b6400a08266e9ba1b37896c95330d97077cbbe8eb3c7671c60d6"
                        ],
                        [
                            "f2dac991cc4ce4b9ea44887e5c7c0bce58c80074ab9d4dbaeb28531b7739f530",
                            "e0dedc9b3b2f8dad4da1f32dec2531df9eb5fbeb0598e4fd1a117dba703a3c37"
                        ],
                        [
                            "463b3d9f662621fb1b4be8fbbe2520125a216cdfc9dae3debcba4850c690d45b",
                            "5ed430d78c296c3543114306dd8622d7c622e27c970a1de31cb377b01af7307e"
                        ],
                        [
                            "f16f804244e46e2a09232d4aff3b59976b98fac14328a2d1a32496b49998f247",
                            "cedabd9b82203f7e13d206fcdf4e33d92a6c53c26e5cce26d6579962c4e31df6"
                        ],
                        [
                            "caf754272dc84563b0352b7a14311af55d245315ace27c65369e15f7151d41d1",
                            "cb474660ef35f5f2a41b643fa5e460575f4fa9b7962232a5c32f908318a04476"
                        ],
                        [
                            "2600ca4b282cb986f85d0f1709979d8b44a09c07cb86d7c124497bc86f082120",
                            "4119b88753c15bd6a693b03fcddbb45d5ac6be74ab5f0ef44b0be9475a7e4b40"
                        ],
                        [
                            "7635ca72d7e8432c338ec53cd12220bc01c48685e24f7dc8c602a7746998e435",
                            "91b649609489d613d1d5e590f78e6d74ecfc061d57048bad9e76f302c5b9c61"
                        ],
                        [
                            "754e3239f325570cdbbf4a87deee8a66b7f2b33479d468fbc1a50743bf56cc18",
                            "673fb86e5bda30fb3cd0ed304ea49a023ee33d0197a695d0c5d98093c536683"
                        ],
                        [
                            "e3e6bd1071a1e96aff57859c82d570f0330800661d1c952f9fe2694691d9b9e8",
                            "59c9e0bba394e76f40c0aa58379a3cb6a5a2283993e90c4167002af4920e37f5"
                        ],
                        [
                            "186b483d056a033826ae73d88f732985c4ccb1f32ba35f4b4cc47fdcf04aa6eb",
                            "3b952d32c67cf77e2e17446e204180ab21fb8090895138b4a4a797f86e80888b"
                        ],
                        [
                            "df9d70a6b9876ce544c98561f4be4f725442e6d2b737d9c91a8321724ce0963f",
                            "55eb2dafd84d6ccd5f862b785dc39d4ab157222720ef9da217b8c45cf2ba2417"
                        ],
                        [
                            "5edd5cc23c51e87a497ca815d5dce0f8ab52554f849ed8995de64c5f34ce7143",
                            "efae9c8dbc14130661e8cec030c89ad0c13c66c0d17a2905cdc706ab7399a868"
                        ],
                        [
                            "290798c2b6476830da12fe02287e9e777aa3fba1c355b17a722d362f84614fba",
                            "e38da76dcd440621988d00bcf79af25d5b29c094db2a23146d003afd41943e7a"
                        ],
                        [
                            "af3c423a95d9f5b3054754efa150ac39cd29552fe360257362dfdecef4053b45",
                            "f98a3fd831eb2b749a93b0e6f35cfb40c8cd5aa667a15581bc2feded498fd9c6"
                        ],
                        [
                            "766dbb24d134e745cccaa28c99bf274906bb66b26dcf98df8d2fed50d884249a",
                            "744b1152eacbe5e38dcc887980da38b897584a65fa06cedd2c924f97cbac5996"
                        ],
                        [
                            "59dbf46f8c94759ba21277c33784f41645f7b44f6c596a58ce92e666191abe3e",
                            "c534ad44175fbc300f4ea6ce648309a042ce739a7919798cd85e216c4a307f6e"
                        ],
                        [
                            "f13ada95103c4537305e691e74e9a4a8dd647e711a95e73cb62dc6018cfd87b8",
                            "e13817b44ee14de663bf4bc808341f326949e21a6a75c2570778419bdaf5733d"
                        ],
                        [
                            "7754b4fa0e8aced06d4167a2c59cca4cda1869c06ebadfb6488550015a88522c",
                            "30e93e864e669d82224b967c3020b8fa8d1e4e350b6cbcc537a48b57841163a2"
                        ],
                        [
                            "948dcadf5990e048aa3874d46abef9d701858f95de8041d2a6828c99e2262519",
                            "e491a42537f6e597d5d28a3224b1bc25df9154efbd2ef1d2cbba2cae5347d57e"
                        ],
                        [
                            "7962414450c76c1689c7b48f8202ec37fb224cf5ac0bfa1570328a8a3d7c77ab",
                            "100b610ec4ffb4760d5c1fc133ef6f6b12507a051f04ac5760afa5b29db83437"
                        ],
                        [
                            "3514087834964b54b15b160644d915485a16977225b8847bb0dd085137ec47ca",
                            "ef0afbb2056205448e1652c48e8127fc6039e77c15c2378b7e7d15a0de293311"
                        ],
                        [
                            "d3cc30ad6b483e4bc79ce2c9dd8bc54993e947eb8df787b442943d3f7b527eaf",
                            "8b378a22d827278d89c5e9be8f9508ae3c2ad46290358630afb34db04eede0a4"
                        ],
                        [
                            "1624d84780732860ce1c78fcbfefe08b2b29823db913f6493975ba0ff4847610",
                            "68651cf9b6da903e0914448c6cd9d4ca896878f5282be4c8cc06e2a404078575"
                        ],
                        [
                            "733ce80da955a8a26902c95633e62a985192474b5af207da6df7b4fd5fc61cd4",
                            "f5435a2bd2badf7d485a4d8b8db9fcce3e1ef8e0201e4578c54673bc1dc5ea1d"
                        ],
                        [
                            "15d9441254945064cf1a1c33bbd3b49f8966c5092171e699ef258dfab81c045c",
                            "d56eb30b69463e7234f5137b73b84177434800bacebfc685fc37bbe9efe4070d"
                        ],
                        [
                            "a1d0fcf2ec9de675b612136e5ce70d271c21417c9d2b8aaaac138599d0717940",
                            "edd77f50bcb5a3cab2e90737309667f2641462a54070f3d519212d39c197a629"
                        ],
                        [
                            "e22fbe15c0af8ccc5780c0735f84dbe9a790badee8245c06c7ca37331cb36980",
                            "a855babad5cd60c88b430a69f53a1a7a38289154964799be43d06d77d31da06"
                        ],
                        [
                            "311091dd9860e8e20ee13473c1155f5f69635e394704eaa74009452246cfa9b3",
                            "66db656f87d1f04fffd1f04788c06830871ec5a64feee685bd80f0b1286d8374"
                        ],
                        [
                            "34c1fd04d301be89b31c0442d3e6ac24883928b45a9340781867d4232ec2dbdf",
                            "9414685e97b1b5954bd46f730174136d57f1ceeb487443dc5321857ba73abee"
                        ],
                        [
                            "f219ea5d6b54701c1c14de5b557eb42a8d13f3abbcd08affcc2a5e6b049b8d63",
                            "4cb95957e83d40b0f73af4544cccf6b1f4b08d3c07b27fb8d8c2962a400766d1"
                        ],
                        [
                            "d7b8740f74a8fbaab1f683db8f45de26543a5490bca627087236912469a0b448",
                            "fa77968128d9c92ee1010f337ad4717eff15db5ed3c049b3411e0315eaa4593b"
                        ],
                        [
                            "32d31c222f8f6f0ef86f7c98d3a3335ead5bcd32abdd94289fe4d3091aa824bf",
                            "5f3032f5892156e39ccd3d7915b9e1da2e6dac9e6f26e961118d14b8462e1661"
                        ],
                        [
                            "7461f371914ab32671045a155d9831ea8793d77cd59592c4340f86cbc18347b5",
                            "8ec0ba238b96bec0cbdddcae0aa442542eee1ff50c986ea6b39847b3cc092ff6"
                        ],
                        [
                            "ee079adb1df1860074356a25aa38206a6d716b2c3e67453d287698bad7b2b2d6",
                            "8dc2412aafe3be5c4c5f37e0ecc5f9f6a446989af04c4e25ebaac479ec1c8c1e"
                        ],
                        [
                            "16ec93e447ec83f0467b18302ee620f7e65de331874c9dc72bfd8616ba9da6b5",
                            "5e4631150e62fb40d0e8c2a7ca5804a39d58186a50e497139626778e25b0674d"
                        ],
                        [
                            "eaa5f980c245f6f038978290afa70b6bd8855897f98b6aa485b96065d537bd99",
                            "f65f5d3e292c2e0819a528391c994624d784869d7e6ea67fb18041024edc07dc"
                        ],
                        [
                            "78c9407544ac132692ee1910a02439958ae04877151342ea96c4b6b35a49f51",
                            "f3e0319169eb9b85d5404795539a5e68fa1fbd583c064d2462b675f194a3ddb4"
                        ],
                        [
                            "494f4be219a1a77016dcd838431aea0001cdc8ae7a6fc688726578d9702857a5",
                            "42242a969283a5f339ba7f075e36ba2af925ce30d767ed6e55f4b031880d562c"
                        ],
                        [
                            "a598a8030da6d86c6bc7f2f5144ea549d28211ea58faa70ebf4c1e665c1fe9b5",
                            "204b5d6f84822c307e4b4a7140737aec23fc63b65b35f86a10026dbd2d864e6b"
                        ],
                        [
                            "c41916365abb2b5d09192f5f2dbeafec208f020f12570a184dbadc3e58595997",
                            "4f14351d0087efa49d245b328984989d5caf9450f34bfc0ed16e96b58fa9913"
                        ],
                        [
                            "841d6063a586fa475a724604da03bc5b92a2e0d2e0a36acfe4c73a5514742881",
                            "73867f59c0659e81904f9a1c7543698e62562d6744c169ce7a36de01a8d6154"
                        ],
                        [
                            "5e95bb399a6971d376026947f89bde2f282b33810928be4ded112ac4d70e20d5",
                            "39f23f366809085beebfc71181313775a99c9aed7d8ba38b161384c746012865"
                        ],
                        [
                            "36e4641a53948fd476c39f8a99fd974e5ec07564b5315d8bf99471bca0ef2f66",
                            "d2424b1b1abe4eb8164227b085c9aa9456ea13493fd563e06fd51cf5694c78fc"
                        ],
                        [
                            "336581ea7bfbbb290c191a2f507a41cf5643842170e914faeab27c2c579f726",
                            "ead12168595fe1be99252129b6e56b3391f7ab1410cd1e0ef3dcdcabd2fda224"
                        ],
                        [
                            "8ab89816dadfd6b6a1f2634fcf00ec8403781025ed6890c4849742706bd43ede",
                            "6fdcef09f2f6d0a044e654aef624136f503d459c3e89845858a47a9129cdd24e"
                        ],
                        [
                            "1e33f1a746c9c5778133344d9299fcaa20b0938e8acff2544bb40284b8c5fb94",
                            "60660257dd11b3aa9c8ed618d24edff2306d320f1d03010e33a7d2057f3b3b6"
                        ],
                        [
                            "85b7c1dcb3cec1b7ee7f30ded79dd20a0ed1f4cc18cbcfcfa410361fd8f08f31",
                            "3d98a9cdd026dd43f39048f25a8847f4fcafad1895d7a633c6fed3c35e999511"
                        ],
                        [
                            "29df9fbd8d9e46509275f4b125d6d45d7fbe9a3b878a7af872a2800661ac5f51",
                            "b4c4fe99c775a606e2d8862179139ffda61dc861c019e55cd2876eb2a27d84b"
                        ],
                        [
                            "a0b1cae06b0a847a3fea6e671aaf8adfdfe58ca2f768105c8082b2e449fce252",
                            "ae434102edde0958ec4b19d917a6a28e6b72da1834aff0e650f049503a296cf2"
                        ],
                        [
                            "4e8ceafb9b3e9a136dc7ff67e840295b499dfb3b2133e4ba113f2e4c0e121e5",
                            "cf2174118c8b6d7a4b48f6d534ce5c79422c086a63460502b827ce62a326683c"
                        ],
                        [
                            "d24a44e047e19b6f5afb81c7ca2f69080a5076689a010919f42725c2b789a33b",
                            "6fb8d5591b466f8fc63db50f1c0f1c69013f996887b8244d2cdec417afea8fa3"
                        ],
                        [
                            "ea01606a7a6c9cdd249fdfcfacb99584001edd28abbab77b5104e98e8e3b35d4",
                            "322af4908c7312b0cfbfe369f7a7b3cdb7d4494bc2823700cfd652188a3ea98d"
                        ],
                        [
                            "af8addbf2b661c8a6c6328655eb96651252007d8c5ea31be4ad196de8ce2131f",
                            "6749e67c029b85f52a034eafd096836b2520818680e26ac8f3dfbcdb71749700"
                        ],
                        [
                            "e3ae1974566ca06cc516d47e0fb165a674a3dabcfca15e722f0e3450f45889",
                            "2aeabe7e4531510116217f07bf4d07300de97e4874f81f533420a72eeb0bd6a4"
                        ],
                        [
                            "591ee355313d99721cf6993ffed1e3e301993ff3ed258802075ea8ced397e246",
                            "b0ea558a113c30bea60fc4775460c7901ff0b053d25ca2bdeee98f1a4be5d196"
                        ],
                        [
                            "11396d55fda54c49f19aa97318d8da61fa8584e47b084945077cf03255b52984",
                            "998c74a8cd45ac01289d5833a7beb4744ff536b01b257be4c5767bea93ea57a4"
                        ],
                        [
                            "3c5d2a1ba39c5a1790000738c9e0c40b8dcdfd5468754b6405540157e017aa7a",
                            "b2284279995a34e2f9d4de7396fc18b80f9b8b9fdd270f6661f79ca4c81bd257"
                        ],
                        [
                            "cc8704b8a60a0defa3a99a7299f2e9c3fbc395afb04ac078425ef8a1793cc030",
                            "bdd46039feed17881d1e0862db347f8cf395b74fc4bcdc4e940b74e3ac1f1b13"
                        ],
                        [
                            "c533e4f7ea8555aacd9777ac5cad29b97dd4defccc53ee7ea204119b2889b197",
                            "6f0a256bc5efdf429a2fb6242f1a43a2d9b925bb4a4b3a26bb8e0f45eb596096"
                        ],
                        [
                            "c14f8f2ccb27d6f109f6d08d03cc96a69ba8c34eec07bbcf566d48e33da6593",
                            "c359d6923bb398f7fd4473e16fe1c28475b740dd098075e6c0e8649113dc3a38"
                        ],
                        [
                            "a6cbc3046bc6a450bac24789fa17115a4c9739ed75f8f21ce441f72e0b90e6ef",
                            "21ae7f4680e889bb130619e2c0f95a360ceb573c70603139862afd617fa9b9f"
                        ],
                        [
                            "347d6d9a02c48927ebfb86c1359b1caf130a3c0267d11ce6344b39f99d43cc38",
                            "60ea7f61a353524d1c987f6ecec92f086d565ab687870cb12689ff1e31c74448"
                        ],
                        [
                            "da6545d2181db8d983f7dcb375ef5866d47c67b1bf31c8cf855ef7437b72656a",
                            "49b96715ab6878a79e78f07ce5680c5d6673051b4935bd897fea824b77dc208a"
                        ],
                        [
                            "c40747cc9d012cb1a13b8148309c6de7ec25d6945d657146b9d5994b8feb1111",
                            "5ca560753be2a12fc6de6caf2cb489565db936156b9514e1bb5e83037e0fa2d4"
                        ],
                        [
                            "4e42c8ec82c99798ccf3a610be870e78338c7f713348bd34c8203ef4037f3502",
                            "7571d74ee5e0fb92a7a8b33a07783341a5492144cc54bcc40a94473693606437"
                        ],
                        [
                            "3775ab7089bc6af823aba2e1af70b236d251cadb0c86743287522a1b3b0dedea",
                            "be52d107bcfa09d8bcb9736a828cfa7fac8db17bf7a76a2c42ad961409018cf7"
                        ],
                        [
                            "cee31cbf7e34ec379d94fb814d3d775ad954595d1314ba8846959e3e82f74e26",
                            "8fd64a14c06b589c26b947ae2bcf6bfa0149ef0be14ed4d80f448a01c43b1c6d"
                        ],
                        [
                            "b4f9eaea09b6917619f6ea6a4eb5464efddb58fd45b1ebefcdc1a01d08b47986",
                            "39e5c9925b5a54b07433a4f18c61726f8bb131c012ca542eb24a8ac07200682a"
                        ],
                        [
                            "d4263dfc3d2df923a0179a48966d30ce84e2515afc3dccc1b77907792ebcc60e",
                            "62dfaf07a0f78feb30e30d6295853ce189e127760ad6cf7fae164e122a208d54"
                        ],
                        [
                            "48457524820fa65a4f8d35eb6930857c0032acc0a4a2de422233eeda897612c4",
                            "25a748ab367979d98733c38a1fa1c2e7dc6cc07db2d60a9ae7a76aaa49bd0f77"
                        ],
                        [
                            "dfeeef1881101f2cb11644f3a2afdfc2045e19919152923f367a1767c11cceda",
                            "ecfb7056cf1de042f9420bab396793c0c390bde74b4bbdff16a83ae09a9a7517"
                        ],
                        [
                            "6d7ef6b17543f8373c573f44e1f389835d89bcbc6062ced36c82df83b8fae859",
                            "cd450ec335438986dfefa10c57fea9bcc521a0959b2d80bbf74b190dca712d10"
                        ],
                        [
                            "e75605d59102a5a2684500d3b991f2e3f3c88b93225547035af25af66e04541f",
                            "f5c54754a8f71ee540b9b48728473e314f729ac5308b06938360990e2bfad125"
                        ],
                        [
                            "eb98660f4c4dfaa06a2be453d5020bc99a0c2e60abe388457dd43fefb1ed620c",
                            "6cb9a8876d9cb8520609af3add26cd20a0a7cd8a9411131ce85f44100099223e"
                        ],
                        [
                            "13e87b027d8514d35939f2e6892b19922154596941888336dc3563e3b8dba942",
                            "fef5a3c68059a6dec5d624114bf1e91aac2b9da568d6abeb2570d55646b8adf1"
                        ],
                        [
                            "ee163026e9fd6fe017c38f06a5be6fc125424b371ce2708e7bf4491691e5764a",
                            "1acb250f255dd61c43d94ccc670d0f58f49ae3fa15b96623e5430da0ad6c62b2"
                        ],
                        [
                            "b268f5ef9ad51e4d78de3a750c2dc89b1e626d43505867999932e5db33af3d80",
                            "5f310d4b3c99b9ebb19f77d41c1dee018cf0d34fd4191614003e945a1216e423"
                        ],
                        [
                            "ff07f3118a9df035e9fad85eb6c7bfe42b02f01ca99ceea3bf7ffdba93c4750d",
                            "438136d603e858a3a5c440c38eccbaddc1d2942114e2eddd4740d098ced1f0d8"
                        ],
                        [
                            "8d8b9855c7c052a34146fd20ffb658bea4b9f69e0d825ebec16e8c3ce2b526a1",
                            "cdb559eedc2d79f926baf44fb84ea4d44bcf50fee51d7ceb30e2e7f463036758"
                        ],
                        [
                            "52db0b5384dfbf05bfa9d472d7ae26dfe4b851ceca91b1eba54263180da32b63",
                            "c3b997d050ee5d423ebaf66a6db9f57b3180c902875679de924b69d84a7b375"
                        ],
                        [
                            "e62f9490d3d51da6395efd24e80919cc7d0f29c3f3fa48c6fff543becbd43352",
                            "6d89ad7ba4876b0b22c2ca280c682862f342c8591f1daf5170e07bfd9ccafa7d"
                        ],
                        [
                            "7f30ea2476b399b4957509c88f77d0191afa2ff5cb7b14fd6d8e7d65aaab1193",
                            "ca5ef7d4b231c94c3b15389a5f6311e9daff7bb67b103e9880ef4bff637acaec"
                        ],
                        [
                            "5098ff1e1d9f14fb46a210fada6c903fef0fb7b4a1dd1d9ac60a0361800b7a00",
                            "9731141d81fc8f8084d37c6e7542006b3ee1b40d60dfe5362a5b132fd17ddc0"
                        ],
                        [
                            "32b78c7de9ee512a72895be6b9cbefa6e2f3c4ccce445c96b9f2c81e2778ad58",
                            "ee1849f513df71e32efc3896ee28260c73bb80547ae2275ba497237794c8753c"
                        ],
                        [
                            "e2cb74fddc8e9fbcd076eef2a7c72b0ce37d50f08269dfc074b581550547a4f7",
                            "d3aa2ed71c9dd2247a62df062736eb0baddea9e36122d2be8641abcb005cc4a4"
                        ],
                        [
                            "8438447566d4d7bedadc299496ab357426009a35f235cb141be0d99cd10ae3a8",
                            "c4e1020916980a4da5d01ac5e6ad330734ef0d7906631c4f2390426b2edd791f"
                        ],
                        [
                            "4162d488b89402039b584c6fc6c308870587d9c46f660b878ab65c82c711d67e",
                            "67163e903236289f776f22c25fb8a3afc1732f2b84b4e95dbda47ae5a0852649"
                        ],
                        [
                            "3fad3fa84caf0f34f0f89bfd2dcf54fc175d767aec3e50684f3ba4a4bf5f683d",
                            "cd1bc7cb6cc407bb2f0ca647c718a730cf71872e7d0d2a53fa20efcdfe61826"
                        ],
                        [
                            "674f2600a3007a00568c1a7ce05d0816c1fb84bf1370798f1c69532faeb1a86b",
                            "299d21f9413f33b3edf43b257004580b70db57da0b182259e09eecc69e0d38a5"
                        ],
                        [
                            "d32f4da54ade74abb81b815ad1fb3b263d82d6c692714bcff87d29bd5ee9f08f",
                            "f9429e738b8e53b968e99016c059707782e14f4535359d582fc416910b3eea87"
                        ],
                        [
                            "30e4e670435385556e593657135845d36fbb6931f72b08cb1ed954f1e3ce3ff6",
                            "462f9bce619898638499350113bbc9b10a878d35da70740dc695a559eb88db7b"
                        ],
                        [
                            "be2062003c51cc3004682904330e4dee7f3dcd10b01e580bf1971b04d4cad297",
                            "62188bc49d61e5428573d48a74e1c655b1c61090905682a0d5558ed72dccb9bc"
                        ],
                        [
                            "93144423ace3451ed29e0fb9ac2af211cb6e84a601df5993c419859fff5df04a",
                            "7c10dfb164c3425f5c71a3f9d7992038f1065224f72bb9d1d902a6d13037b47c"
                        ],
                        [
                            "b015f8044f5fcbdcf21ca26d6c34fb8197829205c7b7d2a7cb66418c157b112c",
                            "ab8c1e086d04e813744a655b2df8d5f83b3cdc6faa3088c1d3aea1454e3a1d5f"
                        ],
                        [
                            "d5e9e1da649d97d89e4868117a465a3a4f8a18de57a140d36b3f2af341a21b52",
                            "4cb04437f391ed73111a13cc1d4dd0db1693465c2240480d8955e8592f27447a"
                        ],
                        [
                            "d3ae41047dd7ca065dbf8ed77b992439983005cd72e16d6f996a5316d36966bb",
                            "bd1aeb21ad22ebb22a10f0303417c6d964f8cdd7df0aca614b10dc14d125ac46"
                        ],
                        [
                            "463e2763d885f958fc66cdd22800f0a487197d0a82e377b49f80af87c897b065",
                            "bfefacdb0e5d0fd7df3a311a94de062b26b80c61fbc97508b79992671ef7ca7f"
                        ],
                        [
                            "7985fdfd127c0567c6f53ec1bb63ec3158e597c40bfe747c83cddfc910641917",
                            "603c12daf3d9862ef2b25fe1de289aed24ed291e0ec6708703a5bd567f32ed03"
                        ],
                        [
                            "74a1ad6b5f76e39db2dd249410eac7f99e74c59cb83d2d0ed5ff1543da7703e9",
                            "cc6157ef18c9c63cd6193d83631bbea0093e0968942e8c33d5737fd790e0db08"
                        ],
                        [
                            "30682a50703375f602d416664ba19b7fc9bab42c72747463a71d0896b22f6da3",
                            "553e04f6b018b4fa6c8f39e7f311d3176290d0e0f19ca73f17714d9977a22ff8"
                        ],
                        [
                            "9e2158f0d7c0d5f26c3791efefa79597654e7a2b2464f52b1ee6c1347769ef57",
                            "712fcdd1b9053f09003a3481fa7762e9ffd7c8ef35a38509e2fbf2629008373"
                        ],
                        [
                            "176e26989a43c9cfeba4029c202538c28172e566e3c4fce7322857f3be327d66",
                            "ed8cc9d04b29eb877d270b4878dc43c19aefd31f4eee09ee7b47834c1fa4b1c3"
                        ],
                        [
                            "75d46efea3771e6e68abb89a13ad747ecf1892393dfc4f1b7004788c50374da8",
                            "9852390a99507679fd0b86fd2b39a868d7efc22151346e1a3ca4726586a6bed8"
                        ],
                        [
                            "809a20c67d64900ffb698c4c825f6d5f2310fb0451c869345b7319f645605721",
                            "9e994980d9917e22b76b061927fa04143d096ccc54963e6a5ebfa5f3f8e286c1"
                        ],
                        [
                            "1b38903a43f7f114ed4500b4eac7083fdefece1cf29c63528d563446f972c180",
                            "4036edc931a60ae889353f77fd53de4a2708b26b6f5da72ad3394119daf408f9"
                        ]
                    ]
                }
            };
        },
        4401: function(e, t, r) {
            "use strict";
            var i = t;
            var n = r(711);
            var a = r(3523);
            var s = r(6545);
            i.assert = a;
            i.toArray = s.toArray;
            i.zero2 = s.zero2;
            i.toHex = s.toHex;
            i.encode = s.encode;
            function getNAF(e, t, r) {
                var i = new Array(Math.max(e.bitLength(), r) + 1);
                i.fill(0);
                var n = 1 << t + 1;
                var a = e.clone();
                for(var s = 0; s < i.length; s++){
                    var o;
                    var h = a.andln(n - 1);
                    if (a.isOdd()) {
                        if (h > (n >> 1) - 1) o = (n >> 1) - h;
                        else o = h;
                        a.isubn(o);
                    } else {
                        o = 0;
                    }
                    i[s] = o;
                    a.iushrn(1);
                }
                return i;
            }
            i.getNAF = getNAF;
            function getJSF(e, t) {
                var r = [
                    [],
                    []
                ];
                e = e.clone();
                t = t.clone();
                var i = 0;
                var n = 0;
                while(e.cmpn(-i) > 0 || t.cmpn(-n) > 0){
                    var a = e.andln(3) + i & 3;
                    var s = t.andln(3) + n & 3;
                    if (a === 3) a = -1;
                    if (s === 3) s = -1;
                    var o;
                    if ((a & 1) === 0) {
                        o = 0;
                    } else {
                        var h = e.andln(7) + i & 7;
                        if ((h === 3 || h === 5) && s === 2) o = -a;
                        else o = a;
                    }
                    r[0].push(o);
                    var u;
                    if ((s & 1) === 0) {
                        u = 0;
                    } else {
                        var h = t.andln(7) + n & 7;
                        if ((h === 3 || h === 5) && a === 2) u = -s;
                        else u = s;
                    }
                    r[1].push(u);
                    if (2 * i === o + 1) i = 1 - i;
                    if (2 * n === u + 1) n = 1 - n;
                    e.iushrn(1);
                    t.iushrn(1);
                }
                return r;
            }
            i.getJSF = getJSF;
            function cachedProperty(e, t, r) {
                var i = "_" + t;
                e.prototype[t] = function cachedProperty() {
                    return this[i] !== undefined ? this[i] : this[i] = r.call(this);
                };
            }
            i.cachedProperty = cachedProperty;
            function parseBytes(e) {
                return typeof e === "string" ? i.toArray(e, "hex") : e;
            }
            i.parseBytes = parseBytes;
            function intFromLE(e) {
                return new n(e, "hex", "le");
            }
            i.intFromLE = intFromLE;
        },
        8368: function(e, t, r) {
            var i = r(6911).Buffer;
            var n = r(3533);
            function EVP_BytesToKey(e, t, r, a) {
                if (!i.isBuffer(e)) e = i.from(e, "binary");
                if (t) {
                    if (!i.isBuffer(t)) t = i.from(t, "binary");
                    if (t.length !== 8) throw new RangeError("salt should be Buffer with 8 byte length");
                }
                var s = r / 8;
                var o = i.alloc(s);
                var h = i.alloc(a || 0);
                var u = i.alloc(0);
                while(s > 0 || a > 0){
                    var d = new n;
                    d.update(u);
                    d.update(e);
                    if (t) d.update(t);
                    u = d.digest();
                    var c = 0;
                    if (s > 0) {
                        var l = o.length - s;
                        c = Math.min(s, u.length);
                        u.copy(o, l, 0, c);
                        s -= c;
                    }
                    if (c < u.length && a > 0) {
                        var p = h.length - a;
                        var v = Math.min(a, u.length - c);
                        u.copy(h, p, c, c + v);
                        a -= v;
                    }
                }
                u.fill(0);
                return {
                    key: o,
                    iv: h
                };
            }
            e.exports = EVP_BytesToKey;
        },
        9029: function(e, t, r) {
            "use strict";
            var i = r(6911).Buffer;
            var n = r(3726).Transform;
            var a = r(3782);
            function throwIfNotStringOrBuffer(e, t) {
                if (!i.isBuffer(e) && typeof e !== "string") {
                    throw new TypeError(t + " must be a string or a buffer");
                }
            }
            function HashBase(e) {
                n.call(this);
                this._block = i.allocUnsafe(e);
                this._blockSize = e;
                this._blockOffset = 0;
                this._length = [
                    0,
                    0,
                    0,
                    0
                ];
                this._finalized = false;
            }
            a(HashBase, n);
            HashBase.prototype._transform = function(e, t, r) {
                var i = null;
                try {
                    this.update(e, t);
                } catch (e) {
                    i = e;
                }
                r(i);
            };
            HashBase.prototype._flush = function(e) {
                var t = null;
                try {
                    this.push(this.digest());
                } catch (e) {
                    t = e;
                }
                e(t);
            };
            HashBase.prototype.update = function(e, t) {
                throwIfNotStringOrBuffer(e, "Data");
                if (this._finalized) throw new Error("Digest already called");
                if (!i.isBuffer(e)) e = i.from(e, t);
                var r = this._block;
                var n = 0;
                while(this._blockOffset + e.length - n >= this._blockSize){
                    for(var a = this._blockOffset; a < this._blockSize;)r[a++] = e[n++];
                    this._update();
                    this._blockOffset = 0;
                }
                while(n < e.length)r[this._blockOffset++] = e[n++];
                for(var s = 0, o = e.length * 8; o > 0; ++s){
                    this._length[s] += o;
                    o = this._length[s] / 4294967296 | 0;
                    if (o > 0) this._length[s] -= 4294967296 * o;
                }
                return this;
            };
            HashBase.prototype._update = function() {
                throw new Error("_update is not implemented");
            };
            HashBase.prototype.digest = function(e) {
                if (this._finalized) throw new Error("Digest already called");
                this._finalized = true;
                var t = this._digest();
                if (e !== undefined) t = t.toString(e);
                this._block.fill(0);
                this._blockOffset = 0;
                for(var r = 0; r < 4; ++r)this._length[r] = 0;
                return t;
            };
            HashBase.prototype._digest = function() {
                throw new Error("_digest is not implemented");
            };
            e.exports = HashBase;
        },
        7028: function(e, t, r) {
            var i = t;
            i.utils = r(263);
            i.common = r(1330);
            i.sha = r(301);
            i.ripemd = r(3079);
            i.hmac = r(3092);
            i.sha1 = i.sha.sha1;
            i.sha256 = i.sha.sha256;
            i.sha224 = i.sha.sha224;
            i.sha384 = i.sha.sha384;
            i.sha512 = i.sha.sha512;
            i.ripemd160 = i.ripemd.ripemd160;
        },
        1330: function(e, t, r) {
            "use strict";
            var i = r(263);
            var n = r(3523);
            function BlockHash() {
                this.pending = null;
                this.pendingTotal = 0;
                this.blockSize = this.constructor.blockSize;
                this.outSize = this.constructor.outSize;
                this.hmacStrength = this.constructor.hmacStrength;
                this.padLength = this.constructor.padLength / 8;
                this.endian = "big";
                this._delta8 = this.blockSize / 8;
                this._delta32 = this.blockSize / 32;
            }
            t.BlockHash = BlockHash;
            BlockHash.prototype.update = function update(e, t) {
                e = i.toArray(e, t);
                if (!this.pending) this.pending = e;
                else this.pending = this.pending.concat(e);
                this.pendingTotal += e.length;
                if (this.pending.length >= this._delta8) {
                    e = this.pending;
                    var r = e.length % this._delta8;
                    this.pending = e.slice(e.length - r, e.length);
                    if (this.pending.length === 0) this.pending = null;
                    e = i.join32(e, 0, e.length - r, this.endian);
                    for(var n = 0; n < e.length; n += this._delta32)this._update(e, n, n + this._delta32);
                }
                return this;
            };
            BlockHash.prototype.digest = function digest(e) {
                this.update(this._pad());
                n(this.pending === null);
                return this._digest(e);
            };
            BlockHash.prototype._pad = function pad() {
                var e = this.pendingTotal;
                var t = this._delta8;
                var r = t - (e + this.padLength) % t;
                var i = new Array(r + this.padLength);
                i[0] = 128;
                for(var n = 1; n < r; n++)i[n] = 0;
                e <<= 3;
                if (this.endian === "big") {
                    for(var a = 8; a < this.padLength; a++)i[n++] = 0;
                    i[n++] = 0;
                    i[n++] = 0;
                    i[n++] = 0;
                    i[n++] = 0;
                    i[n++] = e >>> 24 & 255;
                    i[n++] = e >>> 16 & 255;
                    i[n++] = e >>> 8 & 255;
                    i[n++] = e & 255;
                } else {
                    i[n++] = e & 255;
                    i[n++] = e >>> 8 & 255;
                    i[n++] = e >>> 16 & 255;
                    i[n++] = e >>> 24 & 255;
                    i[n++] = 0;
                    i[n++] = 0;
                    i[n++] = 0;
                    i[n++] = 0;
                    for(a = 8; a < this.padLength; a++)i[n++] = 0;
                }
                return i;
            };
        },
        3092: function(e, t, r) {
            "use strict";
            var i = r(263);
            var n = r(3523);
            function Hmac(e, t, r) {
                if (!(this instanceof Hmac)) return new Hmac(e, t, r);
                this.Hash = e;
                this.blockSize = e.blockSize / 8;
                this.outSize = e.outSize / 8;
                this.inner = null;
                this.outer = null;
                this._init(i.toArray(t, r));
            }
            e.exports = Hmac;
            Hmac.prototype._init = function init(e) {
                if (e.length > this.blockSize) e = (new this.Hash).update(e).digest();
                n(e.length <= this.blockSize);
                for(var t = e.length; t < this.blockSize; t++)e.push(0);
                for(t = 0; t < e.length; t++)e[t] ^= 54;
                this.inner = (new this.Hash).update(e);
                for(t = 0; t < e.length; t++)e[t] ^= 106;
                this.outer = (new this.Hash).update(e);
            };
            Hmac.prototype.update = function update(e, t) {
                this.inner.update(e, t);
                return this;
            };
            Hmac.prototype.digest = function digest(e) {
                this.outer.update(this.inner.digest());
                return this.outer.digest(e);
            };
        },
        3079: function(e, t, r) {
            "use strict";
            var i = r(263);
            var n = r(1330);
            var a = i.rotl32;
            var s = i.sum32;
            var o = i.sum32_3;
            var h = i.sum32_4;
            var u = n.BlockHash;
            function RIPEMD160() {
                if (!(this instanceof RIPEMD160)) return new RIPEMD160;
                u.call(this);
                this.h = [
                    1732584193,
                    4023233417,
                    2562383102,
                    271733878,
                    3285377520
                ];
                this.endian = "little";
            }
            i.inherits(RIPEMD160, u);
            t.ripemd160 = RIPEMD160;
            RIPEMD160.blockSize = 512;
            RIPEMD160.outSize = 160;
            RIPEMD160.hmacStrength = 192;
            RIPEMD160.padLength = 64;
            RIPEMD160.prototype._update = function update(e, t) {
                var r = this.h[0];
                var i = this.h[1];
                var n = this.h[2];
                var u = this.h[3];
                var v = this.h[4];
                var b = r;
                var m = i;
                var y = n;
                var g = u;
                var _ = v;
                for(var w = 0; w < 80; w++){
                    var M = s(a(h(r, f(w, i, n, u), e[d[w] + t], K(w)), l[w]), v);
                    r = v;
                    v = u;
                    u = a(n, 10);
                    n = i;
                    i = M;
                    M = s(a(h(b, f(79 - w, m, y, g), e[c[w] + t], Kh(w)), p[w]), _);
                    b = _;
                    _ = g;
                    g = a(y, 10);
                    y = m;
                    m = M;
                }
                M = o(this.h[1], n, g);
                this.h[1] = o(this.h[2], u, _);
                this.h[2] = o(this.h[3], v, b);
                this.h[3] = o(this.h[4], r, m);
                this.h[4] = o(this.h[0], i, y);
                this.h[0] = M;
            };
            RIPEMD160.prototype._digest = function digest(e) {
                if (e === "hex") return i.toHex32(this.h, "little");
                else return i.split32(this.h, "little");
            };
            function f(e, t, r, i) {
                if (e <= 15) return t ^ r ^ i;
                else if (e <= 31) return t & r | ~t & i;
                else if (e <= 47) return (t | ~r) ^ i;
                else if (e <= 63) return t & i | r & ~i;
                else return t ^ (r | ~i);
            }
            function K(e) {
                if (e <= 15) return 0;
                else if (e <= 31) return 1518500249;
                else if (e <= 47) return 1859775393;
                else if (e <= 63) return 2400959708;
                else return 2840853838;
            }
            function Kh(e) {
                if (e <= 15) return 1352829926;
                else if (e <= 31) return 1548603684;
                else if (e <= 47) return 1836072691;
                else if (e <= 63) return 2053994217;
                else return 0;
            }
            var d = [
                0,
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                9,
                10,
                11,
                12,
                13,
                14,
                15,
                7,
                4,
                13,
                1,
                10,
                6,
                15,
                3,
                12,
                0,
                9,
                5,
                2,
                14,
                11,
                8,
                3,
                10,
                14,
                4,
                9,
                15,
                8,
                1,
                2,
                7,
                0,
                6,
                13,
                11,
                5,
                12,
                1,
                9,
                11,
                10,
                0,
                8,
                12,
                4,
                13,
                3,
                7,
                15,
                14,
                5,
                6,
                2,
                4,
                0,
                5,
                9,
                7,
                12,
                2,
                10,
                14,
                1,
                3,
                8,
                11,
                6,
                15,
                13
            ];
            var c = [
                5,
                14,
                7,
                0,
                9,
                2,
                11,
                4,
                13,
                6,
                15,
                8,
                1,
                10,
                3,
                12,
                6,
                11,
                3,
                7,
                0,
                13,
                5,
                10,
                14,
                15,
                8,
                12,
                4,
                9,
                1,
                2,
                15,
                5,
                1,
                3,
                7,
                14,
                6,
                9,
                11,
                8,
                12,
                2,
                10,
                0,
                4,
                13,
                8,
                6,
                4,
                1,
                3,
                11,
                15,
                0,
                5,
                12,
                2,
                13,
                9,
                7,
                10,
                14,
                12,
                15,
                10,
                4,
                1,
                5,
                8,
                7,
                6,
                2,
                13,
                14,
                0,
                3,
                9,
                11
            ];
            var l = [
                11,
                14,
                15,
                12,
                5,
                8,
                7,
                9,
                11,
                13,
                14,
                15,
                6,
                7,
                9,
                8,
                7,
                6,
                8,
                13,
                11,
                9,
                7,
                15,
                7,
                12,
                15,
                9,
                11,
                7,
                13,
                12,
                11,
                13,
                6,
                7,
                14,
                9,
                13,
                15,
                14,
                8,
                13,
                6,
                5,
                12,
                7,
                5,
                11,
                12,
                14,
                15,
                14,
                15,
                9,
                8,
                9,
                14,
                5,
                6,
                8,
                6,
                5,
                12,
                9,
                15,
                5,
                11,
                6,
                8,
                13,
                12,
                5,
                12,
                13,
                14,
                11,
                8,
                5,
                6
            ];
            var p = [
                8,
                9,
                9,
                11,
                13,
                15,
                15,
                5,
                7,
                7,
                8,
                11,
                14,
                14,
                12,
                6,
                9,
                13,
                15,
                7,
                12,
                8,
                9,
                11,
                7,
                7,
                12,
                7,
                6,
                15,
                13,
                11,
                9,
                7,
                15,
                11,
                8,
                6,
                6,
                14,
                12,
                13,
                5,
                14,
                13,
                13,
                7,
                5,
                15,
                5,
                8,
                11,
                14,
                14,
                6,
                14,
                6,
                9,
                12,
                9,
                12,
                5,
                15,
                8,
                8,
                5,
                12,
                9,
                12,
                5,
                14,
                6,
                8,
                13,
                6,
                5,
                15,
                13,
                11,
                11
            ];
        },
        301: function(e, t, r) {
            "use strict";
            t.sha1 = r(2742);
            t.sha224 = r(7105);
            t.sha256 = r(1525);
            t.sha384 = r(9948);
            t.sha512 = r(1319);
        },
        2742: function(e, t, r) {
            "use strict";
            var i = r(263);
            var n = r(1330);
            var a = r(2975);
            var s = i.rotl32;
            var o = i.sum32;
            var h = i.sum32_5;
            var u = a.ft_1;
            var d = n.BlockHash;
            var c = [
                1518500249,
                1859775393,
                2400959708,
                3395469782
            ];
            function SHA1() {
                if (!(this instanceof SHA1)) return new SHA1;
                d.call(this);
                this.h = [
                    1732584193,
                    4023233417,
                    2562383102,
                    271733878,
                    3285377520
                ];
                this.W = new Array(80);
            }
            i.inherits(SHA1, d);
            e.exports = SHA1;
            SHA1.blockSize = 512;
            SHA1.outSize = 160;
            SHA1.hmacStrength = 80;
            SHA1.padLength = 64;
            SHA1.prototype._update = function _update(e, t) {
                var r = this.W;
                for(var i = 0; i < 16; i++)r[i] = e[t + i];
                for(; i < r.length; i++)r[i] = s(r[i - 3] ^ r[i - 8] ^ r[i - 14] ^ r[i - 16], 1);
                var n = this.h[0];
                var a = this.h[1];
                var d = this.h[2];
                var l = this.h[3];
                var p = this.h[4];
                for(i = 0; i < r.length; i++){
                    var v = ~~(i / 20);
                    var b = h(s(n, 5), u(v, a, d, l), p, r[i], c[v]);
                    p = l;
                    l = d;
                    d = s(a, 30);
                    a = n;
                    n = b;
                }
                this.h[0] = o(this.h[0], n);
                this.h[1] = o(this.h[1], a);
                this.h[2] = o(this.h[2], d);
                this.h[3] = o(this.h[3], l);
                this.h[4] = o(this.h[4], p);
            };
            SHA1.prototype._digest = function digest(e) {
                if (e === "hex") return i.toHex32(this.h, "big");
                else return i.split32(this.h, "big");
            };
        },
        7105: function(e, t, r) {
            "use strict";
            var i = r(263);
            var n = r(1525);
            function SHA224() {
                if (!(this instanceof SHA224)) return new SHA224;
                n.call(this);
                this.h = [
                    3238371032,
                    914150663,
                    812702999,
                    4144912697,
                    4290775857,
                    1750603025,
                    1694076839,
                    3204075428
                ];
            }
            i.inherits(SHA224, n);
            e.exports = SHA224;
            SHA224.blockSize = 512;
            SHA224.outSize = 224;
            SHA224.hmacStrength = 192;
            SHA224.padLength = 64;
            SHA224.prototype._digest = function digest(e) {
                if (e === "hex") return i.toHex32(this.h.slice(0, 7), "big");
                else return i.split32(this.h.slice(0, 7), "big");
            };
        },
        1525: function(e, t, r) {
            "use strict";
            var i = r(263);
            var n = r(1330);
            var a = r(2975);
            var s = r(3523);
            var o = i.sum32;
            var h = i.sum32_4;
            var u = i.sum32_5;
            var d = a.ch32;
            var c = a.maj32;
            var l = a.s0_256;
            var p = a.s1_256;
            var v = a.g0_256;
            var b = a.g1_256;
            var m = n.BlockHash;
            var y = [
                1116352408,
                1899447441,
                3049323471,
                3921009573,
                961987163,
                1508970993,
                2453635748,
                2870763221,
                3624381080,
                310598401,
                607225278,
                1426881987,
                1925078388,
                2162078206,
                2614888103,
                3248222580,
                3835390401,
                4022224774,
                264347078,
                604807628,
                770255983,
                1249150122,
                1555081692,
                1996064986,
                2554220882,
                2821834349,
                2952996808,
                3210313671,
                3336571891,
                3584528711,
                113926993,
                338241895,
                666307205,
                773529912,
                1294757372,
                1396182291,
                1695183700,
                1986661051,
                2177026350,
                2456956037,
                2730485921,
                2820302411,
                3259730800,
                3345764771,
                3516065817,
                3600352804,
                4094571909,
                275423344,
                430227734,
                506948616,
                659060556,
                883997877,
                958139571,
                1322822218,
                1537002063,
                1747873779,
                1955562222,
                2024104815,
                2227730452,
                2361852424,
                2428436474,
                2756734187,
                3204031479,
                3329325298
            ];
            function SHA256() {
                if (!(this instanceof SHA256)) return new SHA256;
                m.call(this);
                this.h = [
                    1779033703,
                    3144134277,
                    1013904242,
                    2773480762,
                    1359893119,
                    2600822924,
                    528734635,
                    1541459225
                ];
                this.k = y;
                this.W = new Array(64);
            }
            i.inherits(SHA256, m);
            e.exports = SHA256;
            SHA256.blockSize = 512;
            SHA256.outSize = 256;
            SHA256.hmacStrength = 192;
            SHA256.padLength = 64;
            SHA256.prototype._update = function _update(e, t) {
                var r = this.W;
                for(var i = 0; i < 16; i++)r[i] = e[t + i];
                for(; i < r.length; i++)r[i] = h(b(r[i - 2]), r[i - 7], v(r[i - 15]), r[i - 16]);
                var n = this.h[0];
                var a = this.h[1];
                var m = this.h[2];
                var y = this.h[3];
                var g = this.h[4];
                var _ = this.h[5];
                var w = this.h[6];
                var M = this.h[7];
                s(this.k.length === r.length);
                for(i = 0; i < r.length; i++){
                    var B = u(M, p(g), d(g, _, w), this.k[i], r[i]);
                    var E = o(l(n), c(n, a, m));
                    M = w;
                    w = _;
                    _ = g;
                    g = o(y, B);
                    y = m;
                    m = a;
                    a = n;
                    n = o(B, E);
                }
                this.h[0] = o(this.h[0], n);
                this.h[1] = o(this.h[1], a);
                this.h[2] = o(this.h[2], m);
                this.h[3] = o(this.h[3], y);
                this.h[4] = o(this.h[4], g);
                this.h[5] = o(this.h[5], _);
                this.h[6] = o(this.h[6], w);
                this.h[7] = o(this.h[7], M);
            };
            SHA256.prototype._digest = function digest(e) {
                if (e === "hex") return i.toHex32(this.h, "big");
                else return i.split32(this.h, "big");
            };
        },
        9948: function(e, t, r) {
            "use strict";
            var i = r(263);
            var n = r(1319);
            function SHA384() {
                if (!(this instanceof SHA384)) return new SHA384;
                n.call(this);
                this.h = [
                    3418070365,
                    3238371032,
                    1654270250,
                    914150663,
                    2438529370,
                    812702999,
                    355462360,
                    4144912697,
                    1731405415,
                    4290775857,
                    2394180231,
                    1750603025,
                    3675008525,
                    1694076839,
                    1203062813,
                    3204075428
                ];
            }
            i.inherits(SHA384, n);
            e.exports = SHA384;
            SHA384.blockSize = 1024;
            SHA384.outSize = 384;
            SHA384.hmacStrength = 192;
            SHA384.padLength = 128;
            SHA384.prototype._digest = function digest(e) {
                if (e === "hex") return i.toHex32(this.h.slice(0, 12), "big");
                else return i.split32(this.h.slice(0, 12), "big");
            };
        },
        1319: function(e, t, r) {
            "use strict";
            var i = r(263);
            var n = r(1330);
            var a = r(3523);
            var s = i.rotr64_hi;
            var o = i.rotr64_lo;
            var h = i.shr64_hi;
            var u = i.shr64_lo;
            var d = i.sum64;
            var c = i.sum64_hi;
            var l = i.sum64_lo;
            var p = i.sum64_4_hi;
            var v = i.sum64_4_lo;
            var b = i.sum64_5_hi;
            var m = i.sum64_5_lo;
            var y = n.BlockHash;
            var g = [
                1116352408,
                3609767458,
                1899447441,
                602891725,
                3049323471,
                3964484399,
                3921009573,
                2173295548,
                961987163,
                4081628472,
                1508970993,
                3053834265,
                2453635748,
                2937671579,
                2870763221,
                3664609560,
                3624381080,
                2734883394,
                310598401,
                1164996542,
                607225278,
                1323610764,
                1426881987,
                3590304994,
                1925078388,
                4068182383,
                2162078206,
                991336113,
                2614888103,
                633803317,
                3248222580,
                3479774868,
                3835390401,
                2666613458,
                4022224774,
                944711139,
                264347078,
                2341262773,
                604807628,
                2007800933,
                770255983,
                1495990901,
                1249150122,
                1856431235,
                1555081692,
                3175218132,
                1996064986,
                2198950837,
                2554220882,
                3999719339,
                2821834349,
                766784016,
                2952996808,
                2566594879,
                3210313671,
                3203337956,
                3336571891,
                1034457026,
                3584528711,
                2466948901,
                113926993,
                3758326383,
                338241895,
                168717936,
                666307205,
                1188179964,
                773529912,
                1546045734,
                1294757372,
                1522805485,
                1396182291,
                2643833823,
                1695183700,
                2343527390,
                1986661051,
                1014477480,
                2177026350,
                1206759142,
                2456956037,
                344077627,
                2730485921,
                1290863460,
                2820302411,
                3158454273,
                3259730800,
                3505952657,
                3345764771,
                106217008,
                3516065817,
                3606008344,
                3600352804,
                1432725776,
                4094571909,
                1467031594,
                275423344,
                851169720,
                430227734,
                3100823752,
                506948616,
                1363258195,
                659060556,
                3750685593,
                883997877,
                3785050280,
                958139571,
                3318307427,
                1322822218,
                3812723403,
                1537002063,
                2003034995,
                1747873779,
                3602036899,
                1955562222,
                1575990012,
                2024104815,
                1125592928,
                2227730452,
                2716904306,
                2361852424,
                442776044,
                2428436474,
                593698344,
                2756734187,
                3733110249,
                3204031479,
                2999351573,
                3329325298,
                3815920427,
                3391569614,
                3928383900,
                3515267271,
                566280711,
                3940187606,
                3454069534,
                4118630271,
                4000239992,
                116418474,
                1914138554,
                174292421,
                2731055270,
                289380356,
                3203993006,
                460393269,
                320620315,
                685471733,
                587496836,
                852142971,
                1086792851,
                1017036298,
                365543100,
                1126000580,
                2618297676,
                1288033470,
                3409855158,
                1501505948,
                4234509866,
                1607167915,
                987167468,
                1816402316,
                1246189591
            ];
            function SHA512() {
                if (!(this instanceof SHA512)) return new SHA512;
                y.call(this);
                this.h = [
                    1779033703,
                    4089235720,
                    3144134277,
                    2227873595,
                    1013904242,
                    4271175723,
                    2773480762,
                    1595750129,
                    1359893119,
                    2917565137,
                    2600822924,
                    725511199,
                    528734635,
                    4215389547,
                    1541459225,
                    327033209
                ];
                this.k = g;
                this.W = new Array(160);
            }
            i.inherits(SHA512, y);
            e.exports = SHA512;
            SHA512.blockSize = 1024;
            SHA512.outSize = 512;
            SHA512.hmacStrength = 192;
            SHA512.padLength = 128;
            SHA512.prototype._prepareBlock = function _prepareBlock(e, t) {
                var r = this.W;
                for(var i = 0; i < 32; i++)r[i] = e[t + i];
                for(; i < r.length; i += 2){
                    var n = g1_512_hi(r[i - 4], r[i - 3]);
                    var a = g1_512_lo(r[i - 4], r[i - 3]);
                    var s = r[i - 14];
                    var o = r[i - 13];
                    var h = g0_512_hi(r[i - 30], r[i - 29]);
                    var u = g0_512_lo(r[i - 30], r[i - 29]);
                    var d = r[i - 32];
                    var c = r[i - 31];
                    r[i] = p(n, a, s, o, h, u, d, c);
                    r[i + 1] = v(n, a, s, o, h, u, d, c);
                }
            };
            SHA512.prototype._update = function _update(e, t) {
                this._prepareBlock(e, t);
                var r = this.W;
                var i = this.h[0];
                var n = this.h[1];
                var s = this.h[2];
                var o = this.h[3];
                var h = this.h[4];
                var u = this.h[5];
                var p = this.h[6];
                var v = this.h[7];
                var y = this.h[8];
                var g = this.h[9];
                var _ = this.h[10];
                var w = this.h[11];
                var M = this.h[12];
                var B = this.h[13];
                var E = this.h[14];
                var k = this.h[15];
                a(this.k.length === r.length);
                for(var A = 0; A < r.length; A += 2){
                    var N = E;
                    var P = k;
                    var x = s1_512_hi(y, g);
                    var I = s1_512_lo(y, g);
                    var C = ch64_hi(y, g, _, w, M, B);
                    var D = ch64_lo(y, g, _, w, M, B);
                    var T = this.k[A];
                    var j = this.k[A + 1];
                    var q = r[A];
                    var O = r[A + 1];
                    var H = b(N, P, x, I, C, D, T, j, q, O);
                    var L = m(N, P, x, I, C, D, T, j, q, O);
                    N = s0_512_hi(i, n);
                    P = s0_512_lo(i, n);
                    x = maj64_hi(i, n, s, o, h, u);
                    I = maj64_lo(i, n, s, o, h, u);
                    var z = c(N, P, x, I);
                    var F = l(N, P, x, I);
                    E = M;
                    k = B;
                    M = _;
                    B = w;
                    _ = y;
                    w = g;
                    y = c(p, v, H, L);
                    g = l(v, v, H, L);
                    p = h;
                    v = u;
                    h = s;
                    u = o;
                    s = i;
                    o = n;
                    i = c(H, L, z, F);
                    n = l(H, L, z, F);
                }
                d(this.h, 0, i, n);
                d(this.h, 2, s, o);
                d(this.h, 4, h, u);
                d(this.h, 6, p, v);
                d(this.h, 8, y, g);
                d(this.h, 10, _, w);
                d(this.h, 12, M, B);
                d(this.h, 14, E, k);
            };
            SHA512.prototype._digest = function digest(e) {
                if (e === "hex") return i.toHex32(this.h, "big");
                else return i.split32(this.h, "big");
            };
            function ch64_hi(e, t, r, i, n) {
                var a = e & r ^ ~e & n;
                if (a < 0) a += 4294967296;
                return a;
            }
            function ch64_lo(e, t, r, i, n, a) {
                var s = t & i ^ ~t & a;
                if (s < 0) s += 4294967296;
                return s;
            }
            function maj64_hi(e, t, r, i, n) {
                var a = e & r ^ e & n ^ r & n;
                if (a < 0) a += 4294967296;
                return a;
            }
            function maj64_lo(e, t, r, i, n, a) {
                var s = t & i ^ t & a ^ i & a;
                if (s < 0) s += 4294967296;
                return s;
            }
            function s0_512_hi(e, t) {
                var r = s(e, t, 28);
                var i = s(t, e, 2);
                var n = s(t, e, 7);
                var a = r ^ i ^ n;
                if (a < 0) a += 4294967296;
                return a;
            }
            function s0_512_lo(e, t) {
                var r = o(e, t, 28);
                var i = o(t, e, 2);
                var n = o(t, e, 7);
                var a = r ^ i ^ n;
                if (a < 0) a += 4294967296;
                return a;
            }
            function s1_512_hi(e, t) {
                var r = s(e, t, 14);
                var i = s(e, t, 18);
                var n = s(t, e, 9);
                var a = r ^ i ^ n;
                if (a < 0) a += 4294967296;
                return a;
            }
            function s1_512_lo(e, t) {
                var r = o(e, t, 14);
                var i = o(e, t, 18);
                var n = o(t, e, 9);
                var a = r ^ i ^ n;
                if (a < 0) a += 4294967296;
                return a;
            }
            function g0_512_hi(e, t) {
                var r = s(e, t, 1);
                var i = s(e, t, 8);
                var n = h(e, t, 7);
                var a = r ^ i ^ n;
                if (a < 0) a += 4294967296;
                return a;
            }
            function g0_512_lo(e, t) {
                var r = o(e, t, 1);
                var i = o(e, t, 8);
                var n = u(e, t, 7);
                var a = r ^ i ^ n;
                if (a < 0) a += 4294967296;
                return a;
            }
            function g1_512_hi(e, t) {
                var r = s(e, t, 19);
                var i = s(t, e, 29);
                var n = h(e, t, 6);
                var a = r ^ i ^ n;
                if (a < 0) a += 4294967296;
                return a;
            }
            function g1_512_lo(e, t) {
                var r = o(e, t, 19);
                var i = o(t, e, 29);
                var n = u(e, t, 6);
                var a = r ^ i ^ n;
                if (a < 0) a += 4294967296;
                return a;
            }
        },
        2975: function(e, t, r) {
            "use strict";
            var i = r(263);
            var n = i.rotr32;
            function ft_1(e, t, r, i) {
                if (e === 0) return ch32(t, r, i);
                if (e === 1 || e === 3) return p32(t, r, i);
                if (e === 2) return maj32(t, r, i);
            }
            t.ft_1 = ft_1;
            function ch32(e, t, r) {
                return e & t ^ ~e & r;
            }
            t.ch32 = ch32;
            function maj32(e, t, r) {
                return e & t ^ e & r ^ t & r;
            }
            t.maj32 = maj32;
            function p32(e, t, r) {
                return e ^ t ^ r;
            }
            t.p32 = p32;
            function s0_256(e) {
                return n(e, 2) ^ n(e, 13) ^ n(e, 22);
            }
            t.s0_256 = s0_256;
            function s1_256(e) {
                return n(e, 6) ^ n(e, 11) ^ n(e, 25);
            }
            t.s1_256 = s1_256;
            function g0_256(e) {
                return n(e, 7) ^ n(e, 18) ^ e >>> 3;
            }
            t.g0_256 = g0_256;
            function g1_256(e) {
                return n(e, 17) ^ n(e, 19) ^ e >>> 10;
            }
            t.g1_256 = g1_256;
        },
        263: function(e, t, r) {
            "use strict";
            var i = r(3523);
            var n = r(3782);
            t.inherits = n;
            function isSurrogatePair(e, t) {
                if ((e.charCodeAt(t) & 64512) !== 55296) {
                    return false;
                }
                if (t < 0 || t + 1 >= e.length) {
                    return false;
                }
                return (e.charCodeAt(t + 1) & 64512) === 56320;
            }
            function toArray(e, t) {
                if (Array.isArray(e)) return e.slice();
                if (!e) return [];
                var r = [];
                if (typeof e === "string") {
                    if (!t) {
                        var i = 0;
                        for(var n = 0; n < e.length; n++){
                            var a = e.charCodeAt(n);
                            if (a < 128) {
                                r[i++] = a;
                            } else if (a < 2048) {
                                r[i++] = a >> 6 | 192;
                                r[i++] = a & 63 | 128;
                            } else if (isSurrogatePair(e, n)) {
                                a = 65536 + ((a & 1023) << 10) + (e.charCodeAt(++n) & 1023);
                                r[i++] = a >> 18 | 240;
                                r[i++] = a >> 12 & 63 | 128;
                                r[i++] = a >> 6 & 63 | 128;
                                r[i++] = a & 63 | 128;
                            } else {
                                r[i++] = a >> 12 | 224;
                                r[i++] = a >> 6 & 63 | 128;
                                r[i++] = a & 63 | 128;
                            }
                        }
                    } else if (t === "hex") {
                        e = e.replace(/[^a-z0-9]+/gi, "");
                        if (e.length % 2 !== 0) e = "0" + e;
                        for(n = 0; n < e.length; n += 2)r.push(parseInt(e[n] + e[n + 1], 16));
                    }
                } else {
                    for(n = 0; n < e.length; n++)r[n] = e[n] | 0;
                }
                return r;
            }
            t.toArray = toArray;
            function toHex(e) {
                var t = "";
                for(var r = 0; r < e.length; r++)t += zero2(e[r].toString(16));
                return t;
            }
            t.toHex = toHex;
            function htonl(e) {
                var t = e >>> 24 | e >>> 8 & 65280 | e << 8 & 16711680 | (e & 255) << 24;
                return t >>> 0;
            }
            t.htonl = htonl;
            function toHex32(e, t) {
                var r = "";
                for(var i = 0; i < e.length; i++){
                    var n = e[i];
                    if (t === "little") n = htonl(n);
                    r += zero8(n.toString(16));
                }
                return r;
            }
            t.toHex32 = toHex32;
            function zero2(e) {
                if (e.length === 1) return "0" + e;
                else return e;
            }
            t.zero2 = zero2;
            function zero8(e) {
                if (e.length === 7) return "0" + e;
                else if (e.length === 6) return "00" + e;
                else if (e.length === 5) return "000" + e;
                else if (e.length === 4) return "0000" + e;
                else if (e.length === 3) return "00000" + e;
                else if (e.length === 2) return "000000" + e;
                else if (e.length === 1) return "0000000" + e;
                else return e;
            }
            t.zero8 = zero8;
            function join32(e, t, r, n) {
                var a = r - t;
                i(a % 4 === 0);
                var s = new Array(a / 4);
                for(var o = 0, h = t; o < s.length; o++, h += 4){
                    var u;
                    if (n === "big") u = e[h] << 24 | e[h + 1] << 16 | e[h + 2] << 8 | e[h + 3];
                    else u = e[h + 3] << 24 | e[h + 2] << 16 | e[h + 1] << 8 | e[h];
                    s[o] = u >>> 0;
                }
                return s;
            }
            t.join32 = join32;
            function split32(e, t) {
                var r = new Array(e.length * 4);
                for(var i = 0, n = 0; i < e.length; i++, n += 4){
                    var a = e[i];
                    if (t === "big") {
                        r[n] = a >>> 24;
                        r[n + 1] = a >>> 16 & 255;
                        r[n + 2] = a >>> 8 & 255;
                        r[n + 3] = a & 255;
                    } else {
                        r[n + 3] = a >>> 24;
                        r[n + 2] = a >>> 16 & 255;
                        r[n + 1] = a >>> 8 & 255;
                        r[n] = a & 255;
                    }
                }
                return r;
            }
            t.split32 = split32;
            function rotr32(e, t) {
                return e >>> t | e << 32 - t;
            }
            t.rotr32 = rotr32;
            function rotl32(e, t) {
                return e << t | e >>> 32 - t;
            }
            t.rotl32 = rotl32;
            function sum32(e, t) {
                return e + t >>> 0;
            }
            t.sum32 = sum32;
            function sum32_3(e, t, r) {
                return e + t + r >>> 0;
            }
            t.sum32_3 = sum32_3;
            function sum32_4(e, t, r, i) {
                return e + t + r + i >>> 0;
            }
            t.sum32_4 = sum32_4;
            function sum32_5(e, t, r, i, n) {
                return e + t + r + i + n >>> 0;
            }
            t.sum32_5 = sum32_5;
            function sum64(e, t, r, i) {
                var n = e[t];
                var a = e[t + 1];
                var s = i + a >>> 0;
                var o = (s < i ? 1 : 0) + r + n;
                e[t] = o >>> 0;
                e[t + 1] = s;
            }
            t.sum64 = sum64;
            function sum64_hi(e, t, r, i) {
                var n = t + i >>> 0;
                var a = (n < t ? 1 : 0) + e + r;
                return a >>> 0;
            }
            t.sum64_hi = sum64_hi;
            function sum64_lo(e, t, r, i) {
                var n = t + i;
                return n >>> 0;
            }
            t.sum64_lo = sum64_lo;
            function sum64_4_hi(e, t, r, i, n, a, s, o) {
                var h = 0;
                var u = t;
                u = u + i >>> 0;
                h += u < t ? 1 : 0;
                u = u + a >>> 0;
                h += u < a ? 1 : 0;
                u = u + o >>> 0;
                h += u < o ? 1 : 0;
                var d = e + r + n + s + h;
                return d >>> 0;
            }
            t.sum64_4_hi = sum64_4_hi;
            function sum64_4_lo(e, t, r, i, n, a, s, o) {
                var h = t + i + a + o;
                return h >>> 0;
            }
            t.sum64_4_lo = sum64_4_lo;
            function sum64_5_hi(e, t, r, i, n, a, s, o, h, u) {
                var d = 0;
                var c = t;
                c = c + i >>> 0;
                d += c < t ? 1 : 0;
                c = c + a >>> 0;
                d += c < a ? 1 : 0;
                c = c + o >>> 0;
                d += c < o ? 1 : 0;
                c = c + u >>> 0;
                d += c < u ? 1 : 0;
                var l = e + r + n + s + h + d;
                return l >>> 0;
            }
            t.sum64_5_hi = sum64_5_hi;
            function sum64_5_lo(e, t, r, i, n, a, s, o, h, u) {
                var d = t + i + a + o + u;
                return d >>> 0;
            }
            t.sum64_5_lo = sum64_5_lo;
            function rotr64_hi(e, t, r) {
                var i = t << 32 - r | e >>> r;
                return i >>> 0;
            }
            t.rotr64_hi = rotr64_hi;
            function rotr64_lo(e, t, r) {
                var i = e << 32 - r | t >>> r;
                return i >>> 0;
            }
            t.rotr64_lo = rotr64_lo;
            function shr64_hi(e, t, r) {
                return e >>> r;
            }
            t.shr64_hi = shr64_hi;
            function shr64_lo(e, t, r) {
                var i = e << 32 - r | t >>> r;
                return i >>> 0;
            }
            t.shr64_lo = shr64_lo;
        },
        4910: function(e, t, r) {
            "use strict";
            var i = r(7028);
            var n = r(6545);
            var a = r(3523);
            function HmacDRBG(e) {
                if (!(this instanceof HmacDRBG)) return new HmacDRBG(e);
                this.hash = e.hash;
                this.predResist = !!e.predResist;
                this.outLen = this.hash.outSize;
                this.minEntropy = e.minEntropy || this.hash.hmacStrength;
                this._reseed = null;
                this.reseedInterval = null;
                this.K = null;
                this.V = null;
                var t = n.toArray(e.entropy, e.entropyEnc || "hex");
                var r = n.toArray(e.nonce, e.nonceEnc || "hex");
                var i = n.toArray(e.pers, e.persEnc || "hex");
                a(t.length >= this.minEntropy / 8, "Not enough entropy. Minimum is: " + this.minEntropy + " bits");
                this._init(t, r, i);
            }
            e.exports = HmacDRBG;
            HmacDRBG.prototype._init = function init(e, t, r) {
                var i = e.concat(t).concat(r);
                this.K = new Array(this.outLen / 8);
                this.V = new Array(this.outLen / 8);
                for(var n = 0; n < this.V.length; n++){
                    this.K[n] = 0;
                    this.V[n] = 1;
                }
                this._update(i);
                this._reseed = 1;
                this.reseedInterval = 281474976710656;
            };
            HmacDRBG.prototype._hmac = function hmac() {
                return new i.hmac(this.hash, this.K);
            };
            HmacDRBG.prototype._update = function update(e) {
                var t = this._hmac().update(this.V).update([
                    0
                ]);
                if (e) t = t.update(e);
                this.K = t.digest();
                this.V = this._hmac().update(this.V).digest();
                if (!e) return;
                this.K = this._hmac().update(this.V).update([
                    1
                ]).update(e).digest();
                this.V = this._hmac().update(this.V).digest();
            };
            HmacDRBG.prototype.reseed = function reseed(e, t, r, i) {
                if (typeof t !== "string") {
                    i = r;
                    r = t;
                    t = null;
                }
                e = n.toArray(e, t);
                r = n.toArray(r, i);
                a(e.length >= this.minEntropy / 8, "Not enough entropy. Minimum is: " + this.minEntropy + " bits");
                this._update(e.concat(r || []));
                this._reseed = 1;
            };
            HmacDRBG.prototype.generate = function generate(e, t, r, i) {
                if (this._reseed > this.reseedInterval) throw new Error("Reseed is required");
                if (typeof t !== "string") {
                    i = r;
                    r = t;
                    t = null;
                }
                if (r) {
                    r = n.toArray(r, i || "hex");
                    this._update(r);
                }
                var a = [];
                while(a.length < e){
                    this.V = this._hmac().update(this.V).digest();
                    a = a.concat(this.V);
                }
                var s = a.slice(0, e);
                this._update(r);
                this._reseed++;
                return n.encode(s, t);
            };
        },
        3782: function(e) {
            if (typeof Object.create === "function") {
                e.exports = function inherits(e, t) {
                    if (t) {
                        e.super_ = t;
                        e.prototype = Object.create(t.prototype, {
                            constructor: {
                                value: e,
                                enumerable: false,
                                writable: true,
                                configurable: true
                            }
                        });
                    }
                };
            } else {
                e.exports = function inherits(e, t) {
                    if (t) {
                        e.super_ = t;
                        var TempCtor = function() {};
                        TempCtor.prototype = t.prototype;
                        e.prototype = new TempCtor;
                        e.prototype.constructor = e;
                    }
                };
            }
        },
        3533: function(e, t, r) {
            "use strict";
            var i = r(3782);
            var n = r(9029);
            var a = r(6911).Buffer;
            var s = new Array(16);
            function MD5() {
                n.call(this, 64);
                this._a = 1732584193;
                this._b = 4023233417;
                this._c = 2562383102;
                this._d = 271733878;
            }
            i(MD5, n);
            MD5.prototype._update = function() {
                var e = s;
                for(var t = 0; t < 16; ++t)e[t] = this._block.readInt32LE(t * 4);
                var r = this._a;
                var i = this._b;
                var n = this._c;
                var a = this._d;
                r = fnF(r, i, n, a, e[0], 3614090360, 7);
                a = fnF(a, r, i, n, e[1], 3905402710, 12);
                n = fnF(n, a, r, i, e[2], 606105819, 17);
                i = fnF(i, n, a, r, e[3], 3250441966, 22);
                r = fnF(r, i, n, a, e[4], 4118548399, 7);
                a = fnF(a, r, i, n, e[5], 1200080426, 12);
                n = fnF(n, a, r, i, e[6], 2821735955, 17);
                i = fnF(i, n, a, r, e[7], 4249261313, 22);
                r = fnF(r, i, n, a, e[8], 1770035416, 7);
                a = fnF(a, r, i, n, e[9], 2336552879, 12);
                n = fnF(n, a, r, i, e[10], 4294925233, 17);
                i = fnF(i, n, a, r, e[11], 2304563134, 22);
                r = fnF(r, i, n, a, e[12], 1804603682, 7);
                a = fnF(a, r, i, n, e[13], 4254626195, 12);
                n = fnF(n, a, r, i, e[14], 2792965006, 17);
                i = fnF(i, n, a, r, e[15], 1236535329, 22);
                r = fnG(r, i, n, a, e[1], 4129170786, 5);
                a = fnG(a, r, i, n, e[6], 3225465664, 9);
                n = fnG(n, a, r, i, e[11], 643717713, 14);
                i = fnG(i, n, a, r, e[0], 3921069994, 20);
                r = fnG(r, i, n, a, e[5], 3593408605, 5);
                a = fnG(a, r, i, n, e[10], 38016083, 9);
                n = fnG(n, a, r, i, e[15], 3634488961, 14);
                i = fnG(i, n, a, r, e[4], 3889429448, 20);
                r = fnG(r, i, n, a, e[9], 568446438, 5);
                a = fnG(a, r, i, n, e[14], 3275163606, 9);
                n = fnG(n, a, r, i, e[3], 4107603335, 14);
                i = fnG(i, n, a, r, e[8], 1163531501, 20);
                r = fnG(r, i, n, a, e[13], 2850285829, 5);
                a = fnG(a, r, i, n, e[2], 4243563512, 9);
                n = fnG(n, a, r, i, e[7], 1735328473, 14);
                i = fnG(i, n, a, r, e[12], 2368359562, 20);
                r = fnH(r, i, n, a, e[5], 4294588738, 4);
                a = fnH(a, r, i, n, e[8], 2272392833, 11);
                n = fnH(n, a, r, i, e[11], 1839030562, 16);
                i = fnH(i, n, a, r, e[14], 4259657740, 23);
                r = fnH(r, i, n, a, e[1], 2763975236, 4);
                a = fnH(a, r, i, n, e[4], 1272893353, 11);
                n = fnH(n, a, r, i, e[7], 4139469664, 16);
                i = fnH(i, n, a, r, e[10], 3200236656, 23);
                r = fnH(r, i, n, a, e[13], 681279174, 4);
                a = fnH(a, r, i, n, e[0], 3936430074, 11);
                n = fnH(n, a, r, i, e[3], 3572445317, 16);
                i = fnH(i, n, a, r, e[6], 76029189, 23);
                r = fnH(r, i, n, a, e[9], 3654602809, 4);
                a = fnH(a, r, i, n, e[12], 3873151461, 11);
                n = fnH(n, a, r, i, e[15], 530742520, 16);
                i = fnH(i, n, a, r, e[2], 3299628645, 23);
                r = fnI(r, i, n, a, e[0], 4096336452, 6);
                a = fnI(a, r, i, n, e[7], 1126891415, 10);
                n = fnI(n, a, r, i, e[14], 2878612391, 15);
                i = fnI(i, n, a, r, e[5], 4237533241, 21);
                r = fnI(r, i, n, a, e[12], 1700485571, 6);
                a = fnI(a, r, i, n, e[3], 2399980690, 10);
                n = fnI(n, a, r, i, e[10], 4293915773, 15);
                i = fnI(i, n, a, r, e[1], 2240044497, 21);
                r = fnI(r, i, n, a, e[8], 1873313359, 6);
                a = fnI(a, r, i, n, e[15], 4264355552, 10);
                n = fnI(n, a, r, i, e[6], 2734768916, 15);
                i = fnI(i, n, a, r, e[13], 1309151649, 21);
                r = fnI(r, i, n, a, e[4], 4149444226, 6);
                a = fnI(a, r, i, n, e[11], 3174756917, 10);
                n = fnI(n, a, r, i, e[2], 718787259, 15);
                i = fnI(i, n, a, r, e[9], 3951481745, 21);
                this._a = this._a + r | 0;
                this._b = this._b + i | 0;
                this._c = this._c + n | 0;
                this._d = this._d + a | 0;
            };
            MD5.prototype._digest = function() {
                this._block[this._blockOffset++] = 128;
                if (this._blockOffset > 56) {
                    this._block.fill(0, this._blockOffset, 64);
                    this._update();
                    this._blockOffset = 0;
                }
                this._block.fill(0, this._blockOffset, 56);
                this._block.writeUInt32LE(this._length[0], 56);
                this._block.writeUInt32LE(this._length[1], 60);
                this._update();
                var e = a.allocUnsafe(16);
                e.writeInt32LE(this._a, 0);
                e.writeInt32LE(this._b, 4);
                e.writeInt32LE(this._c, 8);
                e.writeInt32LE(this._d, 12);
                return e;
            };
            function rotl(e, t) {
                return e << t | e >>> 32 - t;
            }
            function fnF(e, t, r, i, n, a, s) {
                return rotl(e + (t & r | ~t & i) + n + a | 0, s) + t | 0;
            }
            function fnG(e, t, r, i, n, a, s) {
                return rotl(e + (t & i | r & ~i) + n + a | 0, s) + t | 0;
            }
            function fnH(e, t, r, i, n, a, s) {
                return rotl(e + (t ^ r ^ i) + n + a | 0, s) + t | 0;
            }
            function fnI(e, t, r, i, n, a, s) {
                return rotl(e + (r ^ (t | ~i)) + n + a | 0, s) + t | 0;
            }
            e.exports = MD5;
        },
        1354: function(e, t, r) {
            var i = r(711);
            var n = r(3500);
            function MillerRabin(e) {
                this.rand = e || new n.Rand;
            }
            e.exports = MillerRabin;
            MillerRabin.create = function create(e) {
                return new MillerRabin(e);
            };
            MillerRabin.prototype._randbelow = function _randbelow(e) {
                var t = e.bitLength();
                var r = Math.ceil(t / 8);
                do {
                    var n = new i(this.rand.generate(r));
                }while (n.cmp(e) >= 0)
                return n;
            };
            MillerRabin.prototype._randrange = function _randrange(e, t) {
                var r = t.sub(e);
                return e.add(this._randbelow(r));
            };
            MillerRabin.prototype.test = function test(e, t, r) {
                var n = e.bitLength();
                var a = i.mont(e);
                var s = new i(1).toRed(a);
                if (!t) t = Math.max(1, n / 48 | 0);
                var o = e.subn(1);
                for(var h = 0; !o.testn(h); h++){}
                var u = e.shrn(h);
                var d = o.toRed(a);
                var c = true;
                for(; t > 0; t--){
                    var l = this._randrange(new i(2), o);
                    if (r) r(l);
                    var p = l.toRed(a).redPow(u);
                    if (p.cmp(s) === 0 || p.cmp(d) === 0) continue;
                    for(var v = 1; v < h; v++){
                        p = p.redSqr();
                        if (p.cmp(s) === 0) return false;
                        if (p.cmp(d) === 0) break;
                    }
                    if (v === h) return false;
                }
                return c;
            };
            MillerRabin.prototype.getDivisor = function getDivisor(e, t) {
                var r = e.bitLength();
                var n = i.mont(e);
                var a = new i(1).toRed(n);
                if (!t) t = Math.max(1, r / 48 | 0);
                var s = e.subn(1);
                for(var o = 0; !s.testn(o); o++){}
                var h = e.shrn(o);
                var u = s.toRed(n);
                for(; t > 0; t--){
                    var d = this._randrange(new i(2), s);
                    var c = e.gcd(d);
                    if (c.cmpn(1) !== 0) return c;
                    var l = d.toRed(n).redPow(h);
                    if (l.cmp(a) === 0 || l.cmp(u) === 0) continue;
                    for(var p = 1; p < o; p++){
                        l = l.redSqr();
                        if (l.cmp(a) === 0) return l.fromRed().subn(1).gcd(e);
                        if (l.cmp(u) === 0) break;
                    }
                    if (p === o) {
                        l = l.redSqr();
                        return l.fromRed().subn(1).gcd(e);
                    }
                }
                return false;
            };
        },
        3523: function(e) {
            e.exports = assert;
            function assert(e, t) {
                if (!e) throw new Error(t || "Assertion failed");
            }
            assert.equal = function assertEqual(e, t, r) {
                if (e != t) throw new Error(r || "Assertion failed: " + e + " != " + t);
            };
        },
        6545: function(e, t) {
            "use strict";
            var r = t;
            function toArray(e, t) {
                if (Array.isArray(e)) return e.slice();
                if (!e) return [];
                var r = [];
                if (typeof e !== "string") {
                    for(var i = 0; i < e.length; i++)r[i] = e[i] | 0;
                    return r;
                }
                if (t === "hex") {
                    e = e.replace(/[^a-z0-9]+/gi, "");
                    if (e.length % 2 !== 0) e = "0" + e;
                    for(var i = 0; i < e.length; i += 2)r.push(parseInt(e[i] + e[i + 1], 16));
                } else {
                    for(var i = 0; i < e.length; i++){
                        var n = e.charCodeAt(i);
                        var a = n >> 8;
                        var s = n & 255;
                        if (a) r.push(a, s);
                        else r.push(s);
                    }
                }
                return r;
            }
            r.toArray = toArray;
            function zero2(e) {
                if (e.length === 1) return "0" + e;
                else return e;
            }
            r.zero2 = zero2;
            function toHex(e) {
                var t = "";
                for(var r = 0; r < e.length; r++)t += zero2(e[r].toString(16));
                return t;
            }
            r.toHex = toHex;
            r.encode = function encode(e, t) {
                if (t === "hex") return toHex(e);
                else return e;
            };
        },
        8687: function(e, t, r) {
            "use strict";
            var i = r(7160);
            t.certificate = r(8782);
            var n = i.define("RSAPrivateKey", function() {
                this.seq().obj(this.key("version").int(), this.key("modulus").int(), this.key("publicExponent").int(), this.key("privateExponent").int(), this.key("prime1").int(), this.key("prime2").int(), this.key("exponent1").int(), this.key("exponent2").int(), this.key("coefficient").int());
            });
            t.RSAPrivateKey = n;
            var a = i.define("RSAPublicKey", function() {
                this.seq().obj(this.key("modulus").int(), this.key("publicExponent").int());
            });
            t.RSAPublicKey = a;
            var s = i.define("SubjectPublicKeyInfo", function() {
                this.seq().obj(this.key("algorithm").use(o), this.key("subjectPublicKey").bitstr());
            });
            t.PublicKey = s;
            var o = i.define("AlgorithmIdentifier", function() {
                this.seq().obj(this.key("algorithm").objid(), this.key("none").null_().optional(), this.key("curve").objid().optional(), this.key("params").seq().obj(this.key("p").int(), this.key("q").int(), this.key("g").int()).optional());
            });
            var h = i.define("PrivateKeyInfo", function() {
                this.seq().obj(this.key("version").int(), this.key("algorithm").use(o), this.key("subjectPrivateKey").octstr());
            });
            t.PrivateKey = h;
            var u = i.define("EncryptedPrivateKeyInfo", function() {
                this.seq().obj(this.key("algorithm").seq().obj(this.key("id").objid(), this.key("decrypt").seq().obj(this.key("kde").seq().obj(this.key("id").objid(), this.key("kdeparams").seq().obj(this.key("salt").octstr(), this.key("iters").int())), this.key("cipher").seq().obj(this.key("algo").objid(), this.key("iv").octstr()))), this.key("subjectPrivateKey").octstr());
            });
            t.EncryptedPrivateKey = u;
            var d = i.define("DSAPrivateKey", function() {
                this.seq().obj(this.key("version").int(), this.key("p").int(), this.key("q").int(), this.key("g").int(), this.key("pub_key").int(), this.key("priv_key").int());
            });
            t.DSAPrivateKey = d;
            t.DSAparam = i.define("DSAparam", function() {
                this.int();
            });
            var c = i.define("ECPrivateKey", function() {
                this.seq().obj(this.key("version").int(), this.key("privateKey").octstr(), this.key("parameters").optional().explicit(0).use(l), this.key("publicKey").optional().explicit(1).bitstr());
            });
            t.ECPrivateKey = c;
            var l = i.define("ECParameters", function() {
                this.choice({
                    namedCurve: this.objid()
                });
            });
            t.signature = i.define("signature", function() {
                this.seq().obj(this.key("r").int(), this.key("s").int());
            });
        },
        8782: function(e, t, r) {
            "use strict";
            var i = r(7160);
            var n = i.define("Time", function() {
                this.choice({
                    utcTime: this.utctime(),
                    generalTime: this.gentime()
                });
            });
            var a = i.define("AttributeTypeValue", function() {
                this.seq().obj(this.key("type").objid(), this.key("value").any());
            });
            var s = i.define("AlgorithmIdentifier", function() {
                this.seq().obj(this.key("algorithm").objid(), this.key("parameters").optional(), this.key("curve").objid().optional());
            });
            var o = i.define("SubjectPublicKeyInfo", function() {
                this.seq().obj(this.key("algorithm").use(s), this.key("subjectPublicKey").bitstr());
            });
            var h = i.define("RelativeDistinguishedName", function() {
                this.setof(a);
            });
            var u = i.define("RDNSequence", function() {
                this.seqof(h);
            });
            var d = i.define("Name", function() {
                this.choice({
                    rdnSequence: this.use(u)
                });
            });
            var c = i.define("Validity", function() {
                this.seq().obj(this.key("notBefore").use(n), this.key("notAfter").use(n));
            });
            var l = i.define("Extension", function() {
                this.seq().obj(this.key("extnID").objid(), this.key("critical").bool().def(false), this.key("extnValue").octstr());
            });
            var p = i.define("TBSCertificate", function() {
                this.seq().obj(this.key("version").explicit(0).int().optional(), this.key("serialNumber").int(), this.key("signature").use(s), this.key("issuer").use(d), this.key("validity").use(c), this.key("subject").use(d), this.key("subjectPublicKeyInfo").use(o), this.key("issuerUniqueID").implicit(1).bitstr().optional(), this.key("subjectUniqueID").implicit(2).bitstr().optional(), this.key("extensions").explicit(3).seqof(l).optional());
            });
            var v = i.define("X509Certificate", function() {
                this.seq().obj(this.key("tbsCertificate").use(p), this.key("signatureAlgorithm").use(s), this.key("signatureValue").bitstr());
            });
            e.exports = v;
        },
        6501: function(e, t, r) {
            var i = /Proc-Type: 4,ENCRYPTED[\n\r]+DEK-Info: AES-((?:128)|(?:192)|(?:256))-CBC,([0-9A-H]+)[\n\r]+([0-9A-z\n\r\+\/\=]+)[\n\r]+/m;
            var n = /^-----BEGIN ((?:.*? KEY)|CERTIFICATE)-----/m;
            var a = /^-----BEGIN ((?:.*? KEY)|CERTIFICATE)-----([0-9A-z\n\r\+\/\=]+)-----END \1-----$/m;
            var s = r(8368);
            var o = r(6594);
            var h = r(6911).Buffer;
            e.exports = function(e, t) {
                var r = e.toString();
                var u = r.match(i);
                var d;
                if (!u) {
                    var c = r.match(a);
                    d = new h(c[2].replace(/[\r\n]/g, ""), "base64");
                } else {
                    var l = "aes" + u[1];
                    var p = h.from(u[2], "hex");
                    var v = h.from(u[3].replace(/[\r\n]/g, ""), "base64");
                    var b = s(t, p.slice(0, 8), parseInt(u[1], 10)).key;
                    var m = [];
                    var y = o.createDecipheriv(l, b, p);
                    m.push(y.update(v));
                    m.push(y.final());
                    d = h.concat(m);
                }
                var g = r.match(n)[1];
                return {
                    tag: g,
                    data: d
                };
            };
        },
        9902: function(e, t, r) {
            var i = r(8687);
            var n = r(2510);
            var a = r(6501);
            var s = r(6594);
            var o = r(4978);
            var h = r(6911).Buffer;
            e.exports = parseKeys;
            function parseKeys(e) {
                var t;
                if (typeof e === "object" && !h.isBuffer(e)) {
                    t = e.passphrase;
                    e = e.key;
                }
                if (typeof e === "string") {
                    e = h.from(e);
                }
                var r = a(e, t);
                var n = r.tag;
                var s = r.data;
                var o, u;
                switch(n){
                    case "CERTIFICATE":
                        u = i.certificate.decode(s, "der").tbsCertificate.subjectPublicKeyInfo;
                    case "PUBLIC KEY":
                        if (!u) {
                            u = i.PublicKey.decode(s, "der");
                        }
                        o = u.algorithm.algorithm.join(".");
                        switch(o){
                            case "1.2.840.113549.1.1.1":
                                return i.RSAPublicKey.decode(u.subjectPublicKey.data, "der");
                            case "1.2.840.10045.2.1":
                                u.subjectPrivateKey = u.subjectPublicKey;
                                return {
                                    type: "ec",
                                    data: u
                                };
                            case "1.2.840.10040.4.1":
                                u.algorithm.params.pub_key = i.DSAparam.decode(u.subjectPublicKey.data, "der");
                                return {
                                    type: "dsa",
                                    data: u.algorithm.params
                                };
                            default:
                                throw new Error("unknown key id " + o);
                        }
                        throw new Error("unknown key type " + n);
                    case "ENCRYPTED PRIVATE KEY":
                        s = i.EncryptedPrivateKey.decode(s, "der");
                        s = decrypt(s, t);
                    case "PRIVATE KEY":
                        u = i.PrivateKey.decode(s, "der");
                        o = u.algorithm.algorithm.join(".");
                        switch(o){
                            case "1.2.840.113549.1.1.1":
                                return i.RSAPrivateKey.decode(u.subjectPrivateKey, "der");
                            case "1.2.840.10045.2.1":
                                return {
                                    curve: u.algorithm.curve,
                                    privateKey: i.ECPrivateKey.decode(u.subjectPrivateKey, "der").privateKey
                                };
                            case "1.2.840.10040.4.1":
                                u.algorithm.params.priv_key = i.DSAparam.decode(u.subjectPrivateKey, "der");
                                return {
                                    type: "dsa",
                                    params: u.algorithm.params
                                };
                            default:
                                throw new Error("unknown key id " + o);
                        }
                        throw new Error("unknown key type " + n);
                    case "RSA PUBLIC KEY":
                        return i.RSAPublicKey.decode(s, "der");
                    case "RSA PRIVATE KEY":
                        return i.RSAPrivateKey.decode(s, "der");
                    case "DSA PRIVATE KEY":
                        return {
                            type: "dsa",
                            params: i.DSAPrivateKey.decode(s, "der")
                        };
                    case "EC PRIVATE KEY":
                        s = i.ECPrivateKey.decode(s, "der");
                        return {
                            curve: s.parameters.value,
                            privateKey: s.privateKey
                        };
                    default:
                        throw new Error("unknown key type " + n);
                }
            }
            parseKeys.signature = i.signature;
            function decrypt(e, t) {
                var r = e.algorithm.decrypt.kde.kdeparams.salt;
                var i = parseInt(e.algorithm.decrypt.kde.kdeparams.iters.toString(), 10);
                var a = n[e.algorithm.decrypt.cipher.algo.join(".")];
                var u = e.algorithm.decrypt.cipher.iv;
                var d = e.subjectPrivateKey;
                var c = parseInt(a.split("-")[1], 10) / 8;
                var l = o.pbkdf2Sync(t, r, i, c, "sha1");
                var p = s.createDecipheriv(a, l, u);
                var v = [];
                v.push(p.update(d));
                v.push(p.final());
                return h.concat(v);
            }
        },
        4978: function(e, t, r) {
            var i = r(6113);
            var n = r(5349);
            var a = r(7007);
            var s = r(5407);
            function nativePBKDF2(e, t, r, o, h, u) {
                n(r, o);
                e = s(e, a, "Password");
                t = s(t, a, "Salt");
                if (typeof h === "function") {
                    u = h;
                    h = "sha1";
                }
                if (typeof u !== "function") throw new Error("No callback provided to pbkdf2");
                return i.pbkdf2(e, t, r, o, h, u);
            }
            function nativePBKDF2Sync(e, t, r, o, h) {
                n(r, o);
                e = s(e, a, "Password");
                t = s(t, a, "Salt");
                h = h || "sha1";
                return i.pbkdf2Sync(e, t, r, o, h);
            }
            if (!i.pbkdf2Sync || i.pbkdf2Sync.toString().indexOf("keylen, digest") === -1) {
                t.pbkdf2Sync = r(2127);
                t.pbkdf2 = r(9601);
            } else {
                t.pbkdf2Sync = nativePBKDF2Sync;
                t.pbkdf2 = nativePBKDF2;
            }
        },
        9601: function(e, t, r) {
            var i = r(6911).Buffer;
            var n = r(5349);
            var a = r(7007);
            var s = r(2127);
            var o = r(5407);
            var h;
            var u = global.crypto && global.crypto.subtle;
            var d = {
                sha: "SHA-1",
                "sha-1": "SHA-1",
                sha1: "SHA-1",
                sha256: "SHA-256",
                "sha-256": "SHA-256",
                sha384: "SHA-384",
                "sha-384": "SHA-384",
                "sha-512": "SHA-512",
                sha512: "SHA-512"
            };
            var c = [];
            function checkNative(e) {
                if (global.process && !global.process.browser) {
                    return Promise.resolve(false);
                }
                if (!u || !u.importKey || !u.deriveBits) {
                    return Promise.resolve(false);
                }
                if (c[e] !== undefined) {
                    return c[e];
                }
                h = h || i.alloc(8);
                var t = browserPbkdf2(h, h, 10, 128, e).then(function() {
                    return true;
                }).catch(function() {
                    return false;
                });
                c[e] = t;
                return t;
            }
            function browserPbkdf2(e, t, r, n, a) {
                return u.importKey("raw", e, {
                    name: "PBKDF2"
                }, false, [
                    "deriveBits"
                ]).then(function(e) {
                    return u.deriveBits({
                        name: "PBKDF2",
                        salt: t,
                        iterations: r,
                        hash: {
                            name: a
                        }
                    }, e, n << 3);
                }).then(function(e) {
                    return i.from(e);
                });
            }
            function resolvePromise(e, t) {
                e.then(function(e) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].nextTick(function() {
                        t(null, e);
                    });
                }, function(e) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].nextTick(function() {
                        t(e);
                    });
                });
            }
            e.exports = function(e, t, r, i, h, u) {
                if (typeof h === "function") {
                    u = h;
                    h = undefined;
                }
                h = h || "sha1";
                var c = d[h.toLowerCase()];
                if (!c || typeof global.Promise !== "function") {
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].nextTick(function() {
                        var n;
                        try {
                            n = s(e, t, r, i, h);
                        } catch (e) {
                            return u(e);
                        }
                        u(null, n);
                    });
                }
                n(r, i);
                e = o(e, a, "Password");
                t = o(t, a, "Salt");
                if (typeof u !== "function") throw new Error("No callback provided to pbkdf2");
                resolvePromise(checkNative(c).then(function(n) {
                    if (n) return browserPbkdf2(e, t, r, i, c);
                    return s(e, t, r, i, h);
                }), u);
            };
        },
        7007: function(e) {
            var t;
            if ("TURBOPACK compile-time truthy", 1) {
                t = "utf-8";
            } else {
                "TURBOPACK unreachable";
            }
            e.exports = t;
        },
        5349: function(e) {
            var t = Math.pow(2, 30) - 1;
            e.exports = function(e, r) {
                if (typeof e !== "number") {
                    throw new TypeError("Iterations not a number");
                }
                if (e < 0) {
                    throw new TypeError("Bad iterations");
                }
                if (typeof r !== "number") {
                    throw new TypeError("Key length not a number");
                }
                if (r < 0 || r > t || r !== r) {
                    throw new TypeError("Bad key length");
                }
            };
        },
        2127: function(e, t, r) {
            var i = {
                md5: 16,
                sha1: 20,
                sha224: 28,
                sha256: 32,
                sha384: 48,
                sha512: 64,
                rmd160: 20,
                ripemd160: 20
            };
            var n = r(4873);
            var a = r(6911).Buffer;
            var s = r(5349);
            var o = r(7007);
            var h = r(5407);
            function pbkdf2(e, t, r, u, d) {
                s(r, u);
                e = h(e, o, "Password");
                t = h(t, o, "Salt");
                d = d || "sha1";
                var c = a.allocUnsafe(u);
                var l = a.allocUnsafe(t.length + 4);
                t.copy(l, 0, 0, t.length);
                var p = 0;
                var v = i[d];
                var b = Math.ceil(u / v);
                for(var m = 1; m <= b; m++){
                    l.writeUInt32BE(m, t.length);
                    var y = n(d, e).update(l).digest();
                    var g = y;
                    for(var _ = 1; _ < r; _++){
                        g = n(d, e).update(g).digest();
                        for(var w = 0; w < v; w++)y[w] ^= g[w];
                    }
                    y.copy(c, p);
                    p += v;
                }
                return c;
            }
            e.exports = pbkdf2;
        },
        5407: function(e, t, r) {
            var i = r(6911).Buffer;
            e.exports = function(e, t, r) {
                if (i.isBuffer(e)) {
                    return e;
                } else if (typeof e === "string") {
                    return i.from(e, t);
                } else if (ArrayBuffer.isView(e)) {
                    return i.from(e.buffer);
                } else {
                    throw new TypeError(r + " must be a string, a Buffer, a typed array or a DataView");
                }
            };
        },
        9783: function(e, t, r) {
            t.publicEncrypt = r(3995);
            t.privateDecrypt = r(4366);
            t.privateEncrypt = function privateEncrypt(e, r) {
                return t.publicEncrypt(e, r, true);
            };
            t.publicDecrypt = function publicDecrypt(e, r) {
                return t.privateDecrypt(e, r, true);
            };
        },
        5520: function(e, t, r) {
            var i = r(9739);
            var n = r(6911).Buffer;
            e.exports = function(e, t) {
                var r = n.alloc(0);
                var a = 0;
                var s;
                while(r.length < t){
                    s = i2ops(a++);
                    r = n.concat([
                        r,
                        i("sha1").update(e).update(s).digest()
                    ]);
                }
                return r.slice(0, t);
            };
            function i2ops(e) {
                var t = n.allocUnsafe(4);
                t.writeUInt32BE(e, 0);
                return t;
            }
        },
        4366: function(e, t, r) {
            var i = r(9902);
            var n = r(5520);
            var a = r(6386);
            var s = r(711);
            var o = r(7166);
            var h = r(9739);
            var u = r(1607);
            var d = r(6911).Buffer;
            e.exports = function privateDecrypt(e, t, r) {
                var n;
                if (e.padding) {
                    n = e.padding;
                } else if (r) {
                    n = 1;
                } else {
                    n = 4;
                }
                var a = i(e);
                var h = a.modulus.byteLength();
                if (t.length > h || new s(t).cmp(a.modulus) >= 0) {
                    throw new Error("decryption error");
                }
                var c;
                if (r) {
                    c = u(new s(t), a);
                } else {
                    c = o(t, a);
                }
                var l = d.alloc(h - c.length);
                c = d.concat([
                    l,
                    c
                ], h);
                if (n === 4) {
                    return oaep(a, c);
                } else if (n === 1) {
                    return pkcs1(a, c, r);
                } else if (n === 3) {
                    return c;
                } else {
                    throw new Error("unknown padding");
                }
            };
            function oaep(e, t) {
                var r = e.modulus.byteLength();
                var i = h("sha1").update(d.alloc(0)).digest();
                var s = i.length;
                if (t[0] !== 0) {
                    throw new Error("decryption error");
                }
                var o = t.slice(1, s + 1);
                var u = t.slice(s + 1);
                var c = a(o, n(u, s));
                var l = a(u, n(c, r - s - 1));
                if (compare(i, l.slice(0, s))) {
                    throw new Error("decryption error");
                }
                var p = s;
                while(l[p] === 0){
                    p++;
                }
                if (l[p++] !== 1) {
                    throw new Error("decryption error");
                }
                return l.slice(p);
            }
            function pkcs1(e, t, r) {
                var i = t.slice(0, 2);
                var n = 2;
                var a = 0;
                while(t[n++] !== 0){
                    if (n >= t.length) {
                        a++;
                        break;
                    }
                }
                var s = t.slice(2, n - 1);
                if (i.toString("hex") !== "0002" && !r || i.toString("hex") !== "0001" && r) {
                    a++;
                }
                if (s.length < 8) {
                    a++;
                }
                if (a) {
                    throw new Error("decryption error");
                }
                return t.slice(n);
            }
            function compare(e, t) {
                e = d.from(e);
                t = d.from(t);
                var r = 0;
                var i = e.length;
                if (e.length !== t.length) {
                    r++;
                    i = Math.min(e.length, t.length);
                }
                var n = -1;
                while(++n < i){
                    r += e[n] ^ t[n];
                }
                return r;
            }
        },
        3995: function(e, t, r) {
            var i = r(9902);
            var n = r(7223);
            var a = r(9739);
            var s = r(5520);
            var o = r(6386);
            var h = r(711);
            var u = r(1607);
            var d = r(7166);
            var c = r(6911).Buffer;
            e.exports = function publicEncrypt(e, t, r) {
                var n;
                if (e.padding) {
                    n = e.padding;
                } else if (r) {
                    n = 1;
                } else {
                    n = 4;
                }
                var a = i(e);
                var s;
                if (n === 4) {
                    s = oaep(a, t);
                } else if (n === 1) {
                    s = pkcs1(a, t, r);
                } else if (n === 3) {
                    s = new h(t);
                    if (s.cmp(a.modulus) >= 0) {
                        throw new Error("data too long for modulus");
                    }
                } else {
                    throw new Error("unknown padding");
                }
                if (r) {
                    return d(s, a);
                } else {
                    return u(s, a);
                }
            };
            function oaep(e, t) {
                var r = e.modulus.byteLength();
                var i = t.length;
                var u = a("sha1").update(c.alloc(0)).digest();
                var d = u.length;
                var l = 2 * d;
                if (i > r - l - 2) {
                    throw new Error("message too long");
                }
                var p = c.alloc(r - i - l - 2);
                var v = r - d - 1;
                var b = n(d);
                var m = o(c.concat([
                    u,
                    p,
                    c.alloc(1, 1),
                    t
                ], v), s(b, v));
                var y = o(b, s(m, d));
                return new h(c.concat([
                    c.alloc(1),
                    y,
                    m
                ], r));
            }
            function pkcs1(e, t, r) {
                var i = t.length;
                var n = e.modulus.byteLength();
                if (i > n - 11) {
                    throw new Error("message too long");
                }
                var a;
                if (r) {
                    a = c.alloc(n - i - 3, 255);
                } else {
                    a = nonZero(n - i - 3);
                }
                return new h(c.concat([
                    c.from([
                        0,
                        r ? 1 : 2
                    ]),
                    a,
                    c.alloc(1),
                    t
                ], n));
            }
            function nonZero(e) {
                var t = c.allocUnsafe(e);
                var r = 0;
                var i = n(e * 2);
                var a = 0;
                var s;
                while(r < e){
                    if (a === i.length) {
                        i = n(e * 2);
                        a = 0;
                    }
                    s = i[a++];
                    if (s) {
                        t[r++] = s;
                    }
                }
                return t;
            }
        },
        1607: function(e, t, r) {
            var i = r(711);
            var n = r(6911).Buffer;
            function withPublic(e, t) {
                return n.from(e.toRed(i.mont(t.modulus)).redPow(new i(t.publicExponent)).fromRed().toArray());
            }
            e.exports = withPublic;
        },
        6386: function(e) {
            e.exports = function xor(e, t) {
                var r = e.length;
                var i = -1;
                while(++i < r){
                    e[i] ^= t[i];
                }
                return e;
            };
        },
        7223: function(e, t, r) {
            "use strict";
            var i = 65536;
            var n = 4294967295;
            function oldBrowser() {
                throw new Error("Secure random number generation is not supported by this browser.\nUse Chrome, Firefox or Internet Explorer 11");
            }
            var a = r(6911).Buffer;
            var s = global.crypto || global.msCrypto;
            if (s && s.getRandomValues) {
                e.exports = randomBytes;
            } else {
                e.exports = oldBrowser;
            }
            function randomBytes(e, t) {
                if (e > n) throw new RangeError("requested too many random bytes");
                var r = a.allocUnsafe(e);
                if (e > 0) {
                    if (e > i) {
                        for(var o = 0; o < e; o += i){
                            s.getRandomValues(r.slice(o, o + i));
                        }
                    } else {
                        s.getRandomValues(r);
                    }
                }
                if (typeof t === "function") {
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].nextTick(function() {
                        t(null, r);
                    });
                }
                return r;
            }
        },
        6445: function(e, t, r) {
            "use strict";
            function oldBrowser() {
                throw new Error("secure random number generation not supported by this browser\nuse chrome, FireFox or Internet Explorer 11");
            }
            var i = r(6911);
            var n = r(7223);
            var a = i.Buffer;
            var s = i.kMaxLength;
            var o = global.crypto || global.msCrypto;
            var h = Math.pow(2, 32) - 1;
            function assertOffset(e, t) {
                if (typeof e !== "number" || e !== e) {
                    throw new TypeError("offset must be a number");
                }
                if (e > h || e < 0) {
                    throw new TypeError("offset must be a uint32");
                }
                if (e > s || e > t) {
                    throw new RangeError("offset out of range");
                }
            }
            function assertSize(e, t, r) {
                if (typeof e !== "number" || e !== e) {
                    throw new TypeError("size must be a number");
                }
                if (e > h || e < 0) {
                    throw new TypeError("size must be a uint32");
                }
                if (e + t > r || e > s) {
                    throw new RangeError("buffer too small");
                }
            }
            if (o && o.getRandomValues || !("TURBOPACK compile-time value", true)) {
                t.randomFill = randomFill;
                t.randomFillSync = randomFillSync;
            } else {
                t.randomFill = oldBrowser;
                t.randomFillSync = oldBrowser;
            }
            function randomFill(e, t, r, i) {
                if (!a.isBuffer(e) && !(e instanceof global.Uint8Array)) {
                    throw new TypeError('"buf" argument must be a Buffer or Uint8Array');
                }
                if (typeof t === "function") {
                    i = t;
                    t = 0;
                    r = e.length;
                } else if (typeof r === "function") {
                    i = r;
                    r = e.length - t;
                } else if (typeof i !== "function") {
                    throw new TypeError('"cb" argument must be a function');
                }
                assertOffset(t, e.length);
                assertSize(r, t, e.length);
                return actualFill(e, t, r, i);
            }
            function actualFill(e, t, r, i) {
                if ("TURBOPACK compile-time truthy", 1) {
                    var a = e.buffer;
                    var s = new Uint8Array(a, t, r);
                    o.getRandomValues(s);
                    if (i) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].nextTick(function() {
                            i(null, e);
                        });
                        return;
                    }
                    return e;
                }
                if (i) {
                    n(r, function(r, n) {
                        if (r) {
                            return i(r);
                        }
                        n.copy(e, t);
                        i(null, e);
                    });
                    return;
                }
                var h = n(r);
                h.copy(e, t);
                return e;
            }
            function randomFillSync(e, t, r) {
                if (typeof t === "undefined") {
                    t = 0;
                }
                if (!a.isBuffer(e) && !(e instanceof global.Uint8Array)) {
                    throw new TypeError('"buf" argument must be a Buffer or Uint8Array');
                }
                assertOffset(t, e.length);
                if (r === undefined) r = e.length - t;
                assertSize(r, t, e.length);
                return actualFill(e, t, r);
            }
        },
        4646: function(e) {
            "use strict";
            const t = {};
            function createErrorType(e, r, i) {
                if (!i) {
                    i = Error;
                }
                function getMessage(e, t, i) {
                    if (typeof r === "string") {
                        return r;
                    } else {
                        return r(e, t, i);
                    }
                }
                class NodeError extends i {
                    constructor(e, t, r){
                        super(getMessage(e, t, r));
                    }
                }
                NodeError.prototype.name = i.name;
                NodeError.prototype.code = e;
                t[e] = NodeError;
            }
            function oneOf(e, t) {
                if (Array.isArray(e)) {
                    const r = e.length;
                    e = e.map((e)=>String(e));
                    if (r > 2) {
                        return `one of ${t} ${e.slice(0, r - 1).join(", ")}, or ` + e[r - 1];
                    } else if (r === 2) {
                        return `one of ${t} ${e[0]} or ${e[1]}`;
                    } else {
                        return `of ${t} ${e[0]}`;
                    }
                } else {
                    return `of ${t} ${String(e)}`;
                }
            }
            function startsWith(e, t, r) {
                return e.substr(!r || r < 0 ? 0 : +r, t.length) === t;
            }
            function endsWith(e, t, r) {
                if (r === undefined || r > e.length) {
                    r = e.length;
                }
                return e.substring(r - t.length, r) === t;
            }
            function includes(e, t, r) {
                if (typeof r !== "number") {
                    r = 0;
                }
                if (r + t.length > e.length) {
                    return false;
                } else {
                    return e.indexOf(t, r) !== -1;
                }
            }
            createErrorType("ERR_INVALID_OPT_VALUE", function(e, t) {
                return 'The value "' + t + '" is invalid for option "' + e + '"';
            }, TypeError);
            createErrorType("ERR_INVALID_ARG_TYPE", function(e, t, r) {
                let i;
                if (typeof t === "string" && startsWith(t, "not ")) {
                    i = "must not be";
                    t = t.replace(/^not /, "");
                } else {
                    i = "must be";
                }
                let n;
                if (endsWith(e, " argument")) {
                    n = `The ${e} ${i} ${oneOf(t, "type")}`;
                } else {
                    const r = includes(e, ".") ? "property" : "argument";
                    n = `The "${e}" ${r} ${i} ${oneOf(t, "type")}`;
                }
                n += `. Received type ${typeof r}`;
                return n;
            }, TypeError);
            createErrorType("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF");
            createErrorType("ERR_METHOD_NOT_IMPLEMENTED", function(e) {
                return "The " + e + " method is not implemented";
            });
            createErrorType("ERR_STREAM_PREMATURE_CLOSE", "Premature close");
            createErrorType("ERR_STREAM_DESTROYED", function(e) {
                return "Cannot call " + e + " after a stream was destroyed";
            });
            createErrorType("ERR_MULTIPLE_CALLBACK", "Callback called multiple times");
            createErrorType("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable");
            createErrorType("ERR_STREAM_WRITE_AFTER_END", "write after end");
            createErrorType("ERR_STREAM_NULL_VALUES", "May not write null values to stream", TypeError);
            createErrorType("ERR_UNKNOWN_ENCODING", function(e) {
                return "Unknown encoding: " + e;
            }, TypeError);
            createErrorType("ERR_STREAM_UNSHIFT_AFTER_END_EVENT", "stream.unshift() after end event");
            e.exports.q = t;
        },
        2403: function(e, t, r) {
            "use strict";
            var i = Object.keys || function(e) {
                var t = [];
                for(var r in e){
                    t.push(r);
                }
                return t;
            };
            e.exports = Duplex;
            var n = r(1709);
            var a = r(7337);
            r(3782)(Duplex, n);
            {
                var s = i(a.prototype);
                for(var o = 0; o < s.length; o++){
                    var h = s[o];
                    if (!Duplex.prototype[h]) Duplex.prototype[h] = a.prototype[h];
                }
            }
            function Duplex(e) {
                if (!(this instanceof Duplex)) return new Duplex(e);
                n.call(this, e);
                a.call(this, e);
                this.allowHalfOpen = true;
                if (e) {
                    if (e.readable === false) this.readable = false;
                    if (e.writable === false) this.writable = false;
                    if (e.allowHalfOpen === false) {
                        this.allowHalfOpen = false;
                        this.once("end", onend);
                    }
                }
            }
            Object.defineProperty(Duplex.prototype, "writableHighWaterMark", {
                enumerable: false,
                get: function get() {
                    return this._writableState.highWaterMark;
                }
            });
            Object.defineProperty(Duplex.prototype, "writableBuffer", {
                enumerable: false,
                get: function get() {
                    return this._writableState && this._writableState.getBuffer();
                }
            });
            Object.defineProperty(Duplex.prototype, "writableLength", {
                enumerable: false,
                get: function get() {
                    return this._writableState.length;
                }
            });
            function onend() {
                if (this._writableState.ended) return;
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].nextTick(onEndNT, this);
            }
            function onEndNT(e) {
                e.end();
            }
            Object.defineProperty(Duplex.prototype, "destroyed", {
                enumerable: false,
                get: function get() {
                    if (this._readableState === undefined || this._writableState === undefined) {
                        return false;
                    }
                    return this._readableState.destroyed && this._writableState.destroyed;
                },
                set: function set(e) {
                    if (this._readableState === undefined || this._writableState === undefined) {
                        return;
                    }
                    this._readableState.destroyed = e;
                    this._writableState.destroyed = e;
                }
            });
        },
        7889: function(e, t, r) {
            "use strict";
            e.exports = PassThrough;
            var i = r(1170);
            r(3782)(PassThrough, i);
            function PassThrough(e) {
                if (!(this instanceof PassThrough)) return new PassThrough(e);
                i.call(this, e);
            }
            PassThrough.prototype._transform = function(e, t, r) {
                r(null, e);
            };
        },
        1709: function(e, t, r) {
            "use strict";
            e.exports = Readable;
            var i;
            Readable.ReadableState = ReadableState;
            var n = r(2361).EventEmitter;
            var a = function EElistenerCount(e, t) {
                return e.listeners(t).length;
            };
            var s = r(4678);
            var o = r(4300).Buffer;
            var h = global.Uint8Array || function() {};
            function _uint8ArrayToBuffer(e) {
                return o.from(e);
            }
            function _isUint8Array(e) {
                return o.isBuffer(e) || e instanceof h;
            }
            var u = r(3837);
            var d;
            if (u && u.debuglog) {
                d = u.debuglog("stream");
            } else {
                d = function debug() {};
            }
            var c = r(4379);
            var l = r(7025);
            var p = r(6776), v = p.getHighWaterMark;
            var b = r(4646).q, m = b.ERR_INVALID_ARG_TYPE, y = b.ERR_STREAM_PUSH_AFTER_EOF, g = b.ERR_METHOD_NOT_IMPLEMENTED, _ = b.ERR_STREAM_UNSHIFT_AFTER_END_EVENT;
            var w;
            var M;
            var B;
            r(3782)(Readable, s);
            var E = l.errorOrDestroy;
            var k = [
                "error",
                "close",
                "destroy",
                "pause",
                "resume"
            ];
            function prependListener(e, t, r) {
                if (typeof e.prependListener === "function") return e.prependListener(t, r);
                if (!e._events || !e._events[t]) e.on(t, r);
                else if (Array.isArray(e._events[t])) e._events[t].unshift(r);
                else e._events[t] = [
                    r,
                    e._events[t]
                ];
            }
            function ReadableState(e, t, n) {
                i = i || r(2403);
                e = e || {};
                if (typeof n !== "boolean") n = t instanceof i;
                this.objectMode = !!e.objectMode;
                if (n) this.objectMode = this.objectMode || !!e.readableObjectMode;
                this.highWaterMark = v(this, e, "readableHighWaterMark", n);
                this.buffer = new c;
                this.length = 0;
                this.pipes = null;
                this.pipesCount = 0;
                this.flowing = null;
                this.ended = false;
                this.endEmitted = false;
                this.reading = false;
                this.sync = true;
                this.needReadable = false;
                this.emittedReadable = false;
                this.readableListening = false;
                this.resumeScheduled = false;
                this.paused = true;
                this.emitClose = e.emitClose !== false;
                this.autoDestroy = !!e.autoDestroy;
                this.destroyed = false;
                this.defaultEncoding = e.defaultEncoding || "utf8";
                this.awaitDrain = 0;
                this.readingMore = false;
                this.decoder = null;
                this.encoding = null;
                if (e.encoding) {
                    if (!w) w = r(3704).s;
                    this.decoder = new w(e.encoding);
                    this.encoding = e.encoding;
                }
            }
            function Readable(e) {
                i = i || r(2403);
                if (!(this instanceof Readable)) return new Readable(e);
                var t = this instanceof i;
                this._readableState = new ReadableState(e, this, t);
                this.readable = true;
                if (e) {
                    if (typeof e.read === "function") this._read = e.read;
                    if (typeof e.destroy === "function") this._destroy = e.destroy;
                }
                s.call(this);
            }
            Object.defineProperty(Readable.prototype, "destroyed", {
                enumerable: false,
                get: function get() {
                    if (this._readableState === undefined) {
                        return false;
                    }
                    return this._readableState.destroyed;
                },
                set: function set(e) {
                    if (!this._readableState) {
                        return;
                    }
                    this._readableState.destroyed = e;
                }
            });
            Readable.prototype.destroy = l.destroy;
            Readable.prototype._undestroy = l.undestroy;
            Readable.prototype._destroy = function(e, t) {
                t(e);
            };
            Readable.prototype.push = function(e, t) {
                var r = this._readableState;
                var i;
                if (!r.objectMode) {
                    if (typeof e === "string") {
                        t = t || r.defaultEncoding;
                        if (t !== r.encoding) {
                            e = o.from(e, t);
                            t = "";
                        }
                        i = true;
                    }
                } else {
                    i = true;
                }
                return readableAddChunk(this, e, t, false, i);
            };
            Readable.prototype.unshift = function(e) {
                return readableAddChunk(this, e, null, true, false);
            };
            function readableAddChunk(e, t, r, i, n) {
                d("readableAddChunk", t);
                var a = e._readableState;
                if (t === null) {
                    a.reading = false;
                    onEofChunk(e, a);
                } else {
                    var s;
                    if (!n) s = chunkInvalid(a, t);
                    if (s) {
                        E(e, s);
                    } else if (a.objectMode || t && t.length > 0) {
                        if (typeof t !== "string" && !a.objectMode && Object.getPrototypeOf(t) !== o.prototype) {
                            t = _uint8ArrayToBuffer(t);
                        }
                        if (i) {
                            if (a.endEmitted) E(e, new _);
                            else addChunk(e, a, t, true);
                        } else if (a.ended) {
                            E(e, new y);
                        } else if (a.destroyed) {
                            return false;
                        } else {
                            a.reading = false;
                            if (a.decoder && !r) {
                                t = a.decoder.write(t);
                                if (a.objectMode || t.length !== 0) addChunk(e, a, t, false);
                                else maybeReadMore(e, a);
                            } else {
                                addChunk(e, a, t, false);
                            }
                        }
                    } else if (!i) {
                        a.reading = false;
                        maybeReadMore(e, a);
                    }
                }
                return !a.ended && (a.length < a.highWaterMark || a.length === 0);
            }
            function addChunk(e, t, r, i) {
                if (t.flowing && t.length === 0 && !t.sync) {
                    t.awaitDrain = 0;
                    e.emit("data", r);
                } else {
                    t.length += t.objectMode ? 1 : r.length;
                    if (i) t.buffer.unshift(r);
                    else t.buffer.push(r);
                    if (t.needReadable) emitReadable(e);
                }
                maybeReadMore(e, t);
            }
            function chunkInvalid(e, t) {
                var r;
                if (!_isUint8Array(t) && typeof t !== "string" && t !== undefined && !e.objectMode) {
                    r = new m("chunk", [
                        "string",
                        "Buffer",
                        "Uint8Array"
                    ], t);
                }
                return r;
            }
            Readable.prototype.isPaused = function() {
                return this._readableState.flowing === false;
            };
            Readable.prototype.setEncoding = function(e) {
                if (!w) w = r(3704).s;
                var t = new w(e);
                this._readableState.decoder = t;
                this._readableState.encoding = this._readableState.decoder.encoding;
                var i = this._readableState.buffer.head;
                var n = "";
                while(i !== null){
                    n += t.write(i.data);
                    i = i.next;
                }
                this._readableState.buffer.clear();
                if (n !== "") this._readableState.buffer.push(n);
                this._readableState.length = n.length;
                return this;
            };
            var A = 1073741824;
            function computeNewHighWaterMark(e) {
                if (e >= A) {
                    e = A;
                } else {
                    e--;
                    e |= e >>> 1;
                    e |= e >>> 2;
                    e |= e >>> 4;
                    e |= e >>> 8;
                    e |= e >>> 16;
                    e++;
                }
                return e;
            }
            function howMuchToRead(e, t) {
                if (e <= 0 || t.length === 0 && t.ended) return 0;
                if (t.objectMode) return 1;
                if (e !== e) {
                    if (t.flowing && t.length) return t.buffer.head.data.length;
                    else return t.length;
                }
                if (e > t.highWaterMark) t.highWaterMark = computeNewHighWaterMark(e);
                if (e <= t.length) return e;
                if (!t.ended) {
                    t.needReadable = true;
                    return 0;
                }
                return t.length;
            }
            Readable.prototype.read = function(e) {
                d("read", e);
                e = parseInt(e, 10);
                var t = this._readableState;
                var r = e;
                if (e !== 0) t.emittedReadable = false;
                if (e === 0 && t.needReadable && ((t.highWaterMark !== 0 ? t.length >= t.highWaterMark : t.length > 0) || t.ended)) {
                    d("read: emitReadable", t.length, t.ended);
                    if (t.length === 0 && t.ended) endReadable(this);
                    else emitReadable(this);
                    return null;
                }
                e = howMuchToRead(e, t);
                if (e === 0 && t.ended) {
                    if (t.length === 0) endReadable(this);
                    return null;
                }
                var i = t.needReadable;
                d("need readable", i);
                if (t.length === 0 || t.length - e < t.highWaterMark) {
                    i = true;
                    d("length less than watermark", i);
                }
                if (t.ended || t.reading) {
                    i = false;
                    d("reading or ended", i);
                } else if (i) {
                    d("do read");
                    t.reading = true;
                    t.sync = true;
                    if (t.length === 0) t.needReadable = true;
                    this._read(t.highWaterMark);
                    t.sync = false;
                    if (!t.reading) e = howMuchToRead(r, t);
                }
                var n;
                if (e > 0) n = fromList(e, t);
                else n = null;
                if (n === null) {
                    t.needReadable = t.length <= t.highWaterMark;
                    e = 0;
                } else {
                    t.length -= e;
                    t.awaitDrain = 0;
                }
                if (t.length === 0) {
                    if (!t.ended) t.needReadable = true;
                    if (r !== e && t.ended) endReadable(this);
                }
                if (n !== null) this.emit("data", n);
                return n;
            };
            function onEofChunk(e, t) {
                d("onEofChunk");
                if (t.ended) return;
                if (t.decoder) {
                    var r = t.decoder.end();
                    if (r && r.length) {
                        t.buffer.push(r);
                        t.length += t.objectMode ? 1 : r.length;
                    }
                }
                t.ended = true;
                if (t.sync) {
                    emitReadable(e);
                } else {
                    t.needReadable = false;
                    if (!t.emittedReadable) {
                        t.emittedReadable = true;
                        emitReadable_(e);
                    }
                }
            }
            function emitReadable(e) {
                var t = e._readableState;
                d("emitReadable", t.needReadable, t.emittedReadable);
                t.needReadable = false;
                if (!t.emittedReadable) {
                    d("emitReadable", t.flowing);
                    t.emittedReadable = true;
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].nextTick(emitReadable_, e);
                }
            }
            function emitReadable_(e) {
                var t = e._readableState;
                d("emitReadable_", t.destroyed, t.length, t.ended);
                if (!t.destroyed && (t.length || t.ended)) {
                    e.emit("readable");
                    t.emittedReadable = false;
                }
                t.needReadable = !t.flowing && !t.ended && t.length <= t.highWaterMark;
                flow(e);
            }
            function maybeReadMore(e, t) {
                if (!t.readingMore) {
                    t.readingMore = true;
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].nextTick(maybeReadMore_, e, t);
                }
            }
            function maybeReadMore_(e, t) {
                while(!t.reading && !t.ended && (t.length < t.highWaterMark || t.flowing && t.length === 0)){
                    var r = t.length;
                    d("maybeReadMore read 0");
                    e.read(0);
                    if (r === t.length) break;
                }
                t.readingMore = false;
            }
            Readable.prototype._read = function(e) {
                E(this, new g("_read()"));
            };
            Readable.prototype.pipe = function(e, t) {
                var r = this;
                var i = this._readableState;
                switch(i.pipesCount){
                    case 0:
                        i.pipes = e;
                        break;
                    case 1:
                        i.pipes = [
                            i.pipes,
                            e
                        ];
                        break;
                    default:
                        i.pipes.push(e);
                        break;
                }
                i.pipesCount += 1;
                d("pipe count=%d opts=%j", i.pipesCount, t);
                var n = (!t || t.end !== false) && e !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].stdout && e !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].stderr;
                var s = n ? onend : unpipe;
                if (i.endEmitted) __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].nextTick(s);
                else r.once("end", s);
                e.on("unpipe", onunpipe);
                function onunpipe(e, t) {
                    d("onunpipe");
                    if (e === r) {
                        if (t && t.hasUnpiped === false) {
                            t.hasUnpiped = true;
                            cleanup();
                        }
                    }
                }
                function onend() {
                    d("onend");
                    e.end();
                }
                var o = pipeOnDrain(r);
                e.on("drain", o);
                var h = false;
                function cleanup() {
                    d("cleanup");
                    e.removeListener("close", onclose);
                    e.removeListener("finish", onfinish);
                    e.removeListener("drain", o);
                    e.removeListener("error", onerror);
                    e.removeListener("unpipe", onunpipe);
                    r.removeListener("end", onend);
                    r.removeListener("end", unpipe);
                    r.removeListener("data", ondata);
                    h = true;
                    if (i.awaitDrain && (!e._writableState || e._writableState.needDrain)) o();
                }
                r.on("data", ondata);
                function ondata(t) {
                    d("ondata");
                    var n = e.write(t);
                    d("dest.write", n);
                    if (n === false) {
                        if ((i.pipesCount === 1 && i.pipes === e || i.pipesCount > 1 && indexOf(i.pipes, e) !== -1) && !h) {
                            d("false write response, pause", i.awaitDrain);
                            i.awaitDrain++;
                        }
                        r.pause();
                    }
                }
                function onerror(t) {
                    d("onerror", t);
                    unpipe();
                    e.removeListener("error", onerror);
                    if (a(e, "error") === 0) E(e, t);
                }
                prependListener(e, "error", onerror);
                function onclose() {
                    e.removeListener("finish", onfinish);
                    unpipe();
                }
                e.once("close", onclose);
                function onfinish() {
                    d("onfinish");
                    e.removeListener("close", onclose);
                    unpipe();
                }
                e.once("finish", onfinish);
                function unpipe() {
                    d("unpipe");
                    r.unpipe(e);
                }
                e.emit("pipe", r);
                if (!i.flowing) {
                    d("pipe resume");
                    r.resume();
                }
                return e;
            };
            function pipeOnDrain(e) {
                return function pipeOnDrainFunctionResult() {
                    var t = e._readableState;
                    d("pipeOnDrain", t.awaitDrain);
                    if (t.awaitDrain) t.awaitDrain--;
                    if (t.awaitDrain === 0 && a(e, "data")) {
                        t.flowing = true;
                        flow(e);
                    }
                };
            }
            Readable.prototype.unpipe = function(e) {
                var t = this._readableState;
                var r = {
                    hasUnpiped: false
                };
                if (t.pipesCount === 0) return this;
                if (t.pipesCount === 1) {
                    if (e && e !== t.pipes) return this;
                    if (!e) e = t.pipes;
                    t.pipes = null;
                    t.pipesCount = 0;
                    t.flowing = false;
                    if (e) e.emit("unpipe", this, r);
                    return this;
                }
                if (!e) {
                    var i = t.pipes;
                    var n = t.pipesCount;
                    t.pipes = null;
                    t.pipesCount = 0;
                    t.flowing = false;
                    for(var a = 0; a < n; a++){
                        i[a].emit("unpipe", this, {
                            hasUnpiped: false
                        });
                    }
                    return this;
                }
                var s = indexOf(t.pipes, e);
                if (s === -1) return this;
                t.pipes.splice(s, 1);
                t.pipesCount -= 1;
                if (t.pipesCount === 1) t.pipes = t.pipes[0];
                e.emit("unpipe", this, r);
                return this;
            };
            Readable.prototype.on = function(e, t) {
                var r = s.prototype.on.call(this, e, t);
                var i = this._readableState;
                if (e === "data") {
                    i.readableListening = this.listenerCount("readable") > 0;
                    if (i.flowing !== false) this.resume();
                } else if (e === "readable") {
                    if (!i.endEmitted && !i.readableListening) {
                        i.readableListening = i.needReadable = true;
                        i.flowing = false;
                        i.emittedReadable = false;
                        d("on readable", i.length, i.reading);
                        if (i.length) {
                            emitReadable(this);
                        } else if (!i.reading) {
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].nextTick(nReadingNextTick, this);
                        }
                    }
                }
                return r;
            };
            Readable.prototype.addListener = Readable.prototype.on;
            Readable.prototype.removeListener = function(e, t) {
                var r = s.prototype.removeListener.call(this, e, t);
                if (e === "readable") {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].nextTick(updateReadableListening, this);
                }
                return r;
            };
            Readable.prototype.removeAllListeners = function(e) {
                var t = s.prototype.removeAllListeners.apply(this, arguments);
                if (e === "readable" || e === undefined) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].nextTick(updateReadableListening, this);
                }
                return t;
            };
            function updateReadableListening(e) {
                var t = e._readableState;
                t.readableListening = e.listenerCount("readable") > 0;
                if (t.resumeScheduled && !t.paused) {
                    t.flowing = true;
                } else if (e.listenerCount("data") > 0) {
                    e.resume();
                }
            }
            function nReadingNextTick(e) {
                d("readable nexttick read 0");
                e.read(0);
            }
            Readable.prototype.resume = function() {
                var e = this._readableState;
                if (!e.flowing) {
                    d("resume");
                    e.flowing = !e.readableListening;
                    resume(this, e);
                }
                e.paused = false;
                return this;
            };
            function resume(e, t) {
                if (!t.resumeScheduled) {
                    t.resumeScheduled = true;
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].nextTick(resume_, e, t);
                }
            }
            function resume_(e, t) {
                d("resume", t.reading);
                if (!t.reading) {
                    e.read(0);
                }
                t.resumeScheduled = false;
                e.emit("resume");
                flow(e);
                if (t.flowing && !t.reading) e.read(0);
            }
            Readable.prototype.pause = function() {
                d("call pause flowing=%j", this._readableState.flowing);
                if (this._readableState.flowing !== false) {
                    d("pause");
                    this._readableState.flowing = false;
                    this.emit("pause");
                }
                this._readableState.paused = true;
                return this;
            };
            function flow(e) {
                var t = e._readableState;
                d("flow", t.flowing);
                while(t.flowing && e.read() !== null){}
            }
            Readable.prototype.wrap = function(e) {
                var t = this;
                var r = this._readableState;
                var i = false;
                e.on("end", function() {
                    d("wrapped end");
                    if (r.decoder && !r.ended) {
                        var e = r.decoder.end();
                        if (e && e.length) t.push(e);
                    }
                    t.push(null);
                });
                e.on("data", function(n) {
                    d("wrapped data");
                    if (r.decoder) n = r.decoder.write(n);
                    if (r.objectMode && (n === null || n === undefined)) return;
                    else if (!r.objectMode && (!n || !n.length)) return;
                    var a = t.push(n);
                    if (!a) {
                        i = true;
                        e.pause();
                    }
                });
                for(var n in e){
                    if (this[n] === undefined && typeof e[n] === "function") {
                        this[n] = function methodWrap(t) {
                            return function methodWrapReturnFunction() {
                                return e[t].apply(e, arguments);
                            };
                        }(n);
                    }
                }
                for(var a = 0; a < k.length; a++){
                    e.on(k[a], this.emit.bind(this, k[a]));
                }
                this._read = function(t) {
                    d("wrapped _read", t);
                    if (i) {
                        i = false;
                        e.resume();
                    }
                };
                return this;
            };
            if (typeof Symbol === "function") {
                Readable.prototype[Symbol.asyncIterator] = function() {
                    if (M === undefined) {
                        M = r(6871);
                    }
                    return M(this);
                };
            }
            Object.defineProperty(Readable.prototype, "readableHighWaterMark", {
                enumerable: false,
                get: function get() {
                    return this._readableState.highWaterMark;
                }
            });
            Object.defineProperty(Readable.prototype, "readableBuffer", {
                enumerable: false,
                get: function get() {
                    return this._readableState && this._readableState.buffer;
                }
            });
            Object.defineProperty(Readable.prototype, "readableFlowing", {
                enumerable: false,
                get: function get() {
                    return this._readableState.flowing;
                },
                set: function set(e) {
                    if (this._readableState) {
                        this._readableState.flowing = e;
                    }
                }
            });
            Readable._fromList = fromList;
            Object.defineProperty(Readable.prototype, "readableLength", {
                enumerable: false,
                get: function get() {
                    return this._readableState.length;
                }
            });
            function fromList(e, t) {
                if (t.length === 0) return null;
                var r;
                if (t.objectMode) r = t.buffer.shift();
                else if (!e || e >= t.length) {
                    if (t.decoder) r = t.buffer.join("");
                    else if (t.buffer.length === 1) r = t.buffer.first();
                    else r = t.buffer.concat(t.length);
                    t.buffer.clear();
                } else {
                    r = t.buffer.consume(e, t.decoder);
                }
                return r;
            }
            function endReadable(e) {
                var t = e._readableState;
                d("endReadable", t.endEmitted);
                if (!t.endEmitted) {
                    t.ended = true;
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].nextTick(endReadableNT, t, e);
                }
            }
            function endReadableNT(e, t) {
                d("endReadableNT", e.endEmitted, e.length);
                if (!e.endEmitted && e.length === 0) {
                    e.endEmitted = true;
                    t.readable = false;
                    t.emit("end");
                    if (e.autoDestroy) {
                        var r = t._writableState;
                        if (!r || r.autoDestroy && r.finished) {
                            t.destroy();
                        }
                    }
                }
            }
            if (typeof Symbol === "function") {
                Readable.from = function(e, t) {
                    if (B === undefined) {
                        B = r(9727);
                    }
                    return B(Readable, e, t);
                };
            }
            function indexOf(e, t) {
                for(var r = 0, i = e.length; r < i; r++){
                    if (e[r] === t) return r;
                }
                return -1;
            }
        },
        1170: function(e, t, r) {
            "use strict";
            e.exports = Transform;
            var i = r(4646).q, n = i.ERR_METHOD_NOT_IMPLEMENTED, a = i.ERR_MULTIPLE_CALLBACK, s = i.ERR_TRANSFORM_ALREADY_TRANSFORMING, o = i.ERR_TRANSFORM_WITH_LENGTH_0;
            var h = r(2403);
            r(3782)(Transform, h);
            function afterTransform(e, t) {
                var r = this._transformState;
                r.transforming = false;
                var i = r.writecb;
                if (i === null) {
                    return this.emit("error", new a);
                }
                r.writechunk = null;
                r.writecb = null;
                if (t != null) this.push(t);
                i(e);
                var n = this._readableState;
                n.reading = false;
                if (n.needReadable || n.length < n.highWaterMark) {
                    this._read(n.highWaterMark);
                }
            }
            function Transform(e) {
                if (!(this instanceof Transform)) return new Transform(e);
                h.call(this, e);
                this._transformState = {
                    afterTransform: afterTransform.bind(this),
                    needTransform: false,
                    transforming: false,
                    writecb: null,
                    writechunk: null,
                    writeencoding: null
                };
                this._readableState.needReadable = true;
                this._readableState.sync = false;
                if (e) {
                    if (typeof e.transform === "function") this._transform = e.transform;
                    if (typeof e.flush === "function") this._flush = e.flush;
                }
                this.on("prefinish", prefinish);
            }
            function prefinish() {
                var e = this;
                if (typeof this._flush === "function" && !this._readableState.destroyed) {
                    this._flush(function(t, r) {
                        done(e, t, r);
                    });
                } else {
                    done(this, null, null);
                }
            }
            Transform.prototype.push = function(e, t) {
                this._transformState.needTransform = false;
                return h.prototype.push.call(this, e, t);
            };
            Transform.prototype._transform = function(e, t, r) {
                r(new n("_transform()"));
            };
            Transform.prototype._write = function(e, t, r) {
                var i = this._transformState;
                i.writecb = r;
                i.writechunk = e;
                i.writeencoding = t;
                if (!i.transforming) {
                    var n = this._readableState;
                    if (i.needTransform || n.needReadable || n.length < n.highWaterMark) this._read(n.highWaterMark);
                }
            };
            Transform.prototype._read = function(e) {
                var t = this._transformState;
                if (t.writechunk !== null && !t.transforming) {
                    t.transforming = true;
                    this._transform(t.writechunk, t.writeencoding, t.afterTransform);
                } else {
                    t.needTransform = true;
                }
            };
            Transform.prototype._destroy = function(e, t) {
                h.prototype._destroy.call(this, e, function(e) {
                    t(e);
                });
            };
            function done(e, t, r) {
                if (t) return e.emit("error", t);
                if (r != null) e.push(r);
                if (e._writableState.length) throw new o;
                if (e._transformState.transforming) throw new s;
                return e.push(null);
            }
        },
        7337: function(e, t, r) {
            "use strict";
            e.exports = Writable;
            function WriteReq(e, t, r) {
                this.chunk = e;
                this.encoding = t;
                this.callback = r;
                this.next = null;
            }
            function CorkedRequest(e) {
                var t = this;
                this.next = null;
                this.entry = null;
                this.finish = function() {
                    onCorkedFinish(t, e);
                };
            }
            var i;
            Writable.WritableState = WritableState;
            var n = {
                deprecate: r(6769)
            };
            var a = r(4678);
            var s = r(4300).Buffer;
            var o = global.Uint8Array || function() {};
            function _uint8ArrayToBuffer(e) {
                return s.from(e);
            }
            function _isUint8Array(e) {
                return s.isBuffer(e) || e instanceof o;
            }
            var h = r(7025);
            var u = r(6776), d = u.getHighWaterMark;
            var c = r(4646).q, l = c.ERR_INVALID_ARG_TYPE, p = c.ERR_METHOD_NOT_IMPLEMENTED, v = c.ERR_MULTIPLE_CALLBACK, b = c.ERR_STREAM_CANNOT_PIPE, m = c.ERR_STREAM_DESTROYED, y = c.ERR_STREAM_NULL_VALUES, g = c.ERR_STREAM_WRITE_AFTER_END, _ = c.ERR_UNKNOWN_ENCODING;
            var w = h.errorOrDestroy;
            r(3782)(Writable, a);
            function nop() {}
            function WritableState(e, t, n) {
                i = i || r(2403);
                e = e || {};
                if (typeof n !== "boolean") n = t instanceof i;
                this.objectMode = !!e.objectMode;
                if (n) this.objectMode = this.objectMode || !!e.writableObjectMode;
                this.highWaterMark = d(this, e, "writableHighWaterMark", n);
                this.finalCalled = false;
                this.needDrain = false;
                this.ending = false;
                this.ended = false;
                this.finished = false;
                this.destroyed = false;
                var a = e.decodeStrings === false;
                this.decodeStrings = !a;
                this.defaultEncoding = e.defaultEncoding || "utf8";
                this.length = 0;
                this.writing = false;
                this.corked = 0;
                this.sync = true;
                this.bufferProcessing = false;
                this.onwrite = function(e) {
                    onwrite(t, e);
                };
                this.writecb = null;
                this.writelen = 0;
                this.bufferedRequest = null;
                this.lastBufferedRequest = null;
                this.pendingcb = 0;
                this.prefinished = false;
                this.errorEmitted = false;
                this.emitClose = e.emitClose !== false;
                this.autoDestroy = !!e.autoDestroy;
                this.bufferedRequestCount = 0;
                this.corkedRequestsFree = new CorkedRequest(this);
            }
            WritableState.prototype.getBuffer = function getBuffer() {
                var e = this.bufferedRequest;
                var t = [];
                while(e){
                    t.push(e);
                    e = e.next;
                }
                return t;
            };
            (function() {
                try {
                    Object.defineProperty(WritableState.prototype, "buffer", {
                        get: n.deprecate(function writableStateBufferGetter() {
                            return this.getBuffer();
                        }, "_writableState.buffer is deprecated. Use _writableState.getBuffer " + "instead.", "DEP0003")
                    });
                } catch (e) {}
            })();
            var M;
            if (typeof Symbol === "function" && Symbol.hasInstance && typeof Function.prototype[Symbol.hasInstance] === "function") {
                M = Function.prototype[Symbol.hasInstance];
                Object.defineProperty(Writable, Symbol.hasInstance, {
                    value: function value(e) {
                        if (M.call(this, e)) return true;
                        if (this !== Writable) return false;
                        return e && e._writableState instanceof WritableState;
                    }
                });
            } else {
                M = function realHasInstance(e) {
                    return e instanceof this;
                };
            }
            function Writable(e) {
                i = i || r(2403);
                var t = this instanceof i;
                if (!t && !M.call(Writable, this)) return new Writable(e);
                this._writableState = new WritableState(e, this, t);
                this.writable = true;
                if (e) {
                    if (typeof e.write === "function") this._write = e.write;
                    if (typeof e.writev === "function") this._writev = e.writev;
                    if (typeof e.destroy === "function") this._destroy = e.destroy;
                    if (typeof e.final === "function") this._final = e.final;
                }
                a.call(this);
            }
            Writable.prototype.pipe = function() {
                w(this, new b);
            };
            function writeAfterEnd(e, t) {
                var r = new g;
                w(e, r);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].nextTick(t, r);
            }
            function validChunk(e, t, r, i) {
                var n;
                if (r === null) {
                    n = new y;
                } else if (typeof r !== "string" && !t.objectMode) {
                    n = new l("chunk", [
                        "string",
                        "Buffer"
                    ], r);
                }
                if (n) {
                    w(e, n);
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].nextTick(i, n);
                    return false;
                }
                return true;
            }
            Writable.prototype.write = function(e, t, r) {
                var i = this._writableState;
                var n = false;
                var a = !i.objectMode && _isUint8Array(e);
                if (a && !s.isBuffer(e)) {
                    e = _uint8ArrayToBuffer(e);
                }
                if (typeof t === "function") {
                    r = t;
                    t = null;
                }
                if (a) t = "buffer";
                else if (!t) t = i.defaultEncoding;
                if (typeof r !== "function") r = nop;
                if (i.ending) writeAfterEnd(this, r);
                else if (a || validChunk(this, i, e, r)) {
                    i.pendingcb++;
                    n = writeOrBuffer(this, i, a, e, t, r);
                }
                return n;
            };
            Writable.prototype.cork = function() {
                this._writableState.corked++;
            };
            Writable.prototype.uncork = function() {
                var e = this._writableState;
                if (e.corked) {
                    e.corked--;
                    if (!e.writing && !e.corked && !e.bufferProcessing && e.bufferedRequest) clearBuffer(this, e);
                }
            };
            Writable.prototype.setDefaultEncoding = function setDefaultEncoding(e) {
                if (typeof e === "string") e = e.toLowerCase();
                if (!([
                    "hex",
                    "utf8",
                    "utf-8",
                    "ascii",
                    "binary",
                    "base64",
                    "ucs2",
                    "ucs-2",
                    "utf16le",
                    "utf-16le",
                    "raw"
                ].indexOf((e + "").toLowerCase()) > -1)) throw new _(e);
                this._writableState.defaultEncoding = e;
                return this;
            };
            Object.defineProperty(Writable.prototype, "writableBuffer", {
                enumerable: false,
                get: function get() {
                    return this._writableState && this._writableState.getBuffer();
                }
            });
            function decodeChunk(e, t, r) {
                if (!e.objectMode && e.decodeStrings !== false && typeof t === "string") {
                    t = s.from(t, r);
                }
                return t;
            }
            Object.defineProperty(Writable.prototype, "writableHighWaterMark", {
                enumerable: false,
                get: function get() {
                    return this._writableState.highWaterMark;
                }
            });
            function writeOrBuffer(e, t, r, i, n, a) {
                if (!r) {
                    var s = decodeChunk(t, i, n);
                    if (i !== s) {
                        r = true;
                        n = "buffer";
                        i = s;
                    }
                }
                var o = t.objectMode ? 1 : i.length;
                t.length += o;
                var h = t.length < t.highWaterMark;
                if (!h) t.needDrain = true;
                if (t.writing || t.corked) {
                    var u = t.lastBufferedRequest;
                    t.lastBufferedRequest = {
                        chunk: i,
                        encoding: n,
                        isBuf: r,
                        callback: a,
                        next: null
                    };
                    if (u) {
                        u.next = t.lastBufferedRequest;
                    } else {
                        t.bufferedRequest = t.lastBufferedRequest;
                    }
                    t.bufferedRequestCount += 1;
                } else {
                    doWrite(e, t, false, o, i, n, a);
                }
                return h;
            }
            function doWrite(e, t, r, i, n, a, s) {
                t.writelen = i;
                t.writecb = s;
                t.writing = true;
                t.sync = true;
                if (t.destroyed) t.onwrite(new m("write"));
                else if (r) e._writev(n, t.onwrite);
                else e._write(n, a, t.onwrite);
                t.sync = false;
            }
            function onwriteError(e, t, r, i, n) {
                --t.pendingcb;
                if (r) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].nextTick(n, i);
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].nextTick(finishMaybe, e, t);
                    e._writableState.errorEmitted = true;
                    w(e, i);
                } else {
                    n(i);
                    e._writableState.errorEmitted = true;
                    w(e, i);
                    finishMaybe(e, t);
                }
            }
            function onwriteStateUpdate(e) {
                e.writing = false;
                e.writecb = null;
                e.length -= e.writelen;
                e.writelen = 0;
            }
            function onwrite(e, t) {
                var r = e._writableState;
                var i = r.sync;
                var n = r.writecb;
                if (typeof n !== "function") throw new v;
                onwriteStateUpdate(r);
                if (t) onwriteError(e, r, i, t, n);
                else {
                    var a = needFinish(r) || e.destroyed;
                    if (!a && !r.corked && !r.bufferProcessing && r.bufferedRequest) {
                        clearBuffer(e, r);
                    }
                    if (i) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].nextTick(afterWrite, e, r, a, n);
                    } else {
                        afterWrite(e, r, a, n);
                    }
                }
            }
            function afterWrite(e, t, r, i) {
                if (!r) onwriteDrain(e, t);
                t.pendingcb--;
                i();
                finishMaybe(e, t);
            }
            function onwriteDrain(e, t) {
                if (t.length === 0 && t.needDrain) {
                    t.needDrain = false;
                    e.emit("drain");
                }
            }
            function clearBuffer(e, t) {
                t.bufferProcessing = true;
                var r = t.bufferedRequest;
                if (e._writev && r && r.next) {
                    var i = t.bufferedRequestCount;
                    var n = new Array(i);
                    var a = t.corkedRequestsFree;
                    a.entry = r;
                    var s = 0;
                    var o = true;
                    while(r){
                        n[s] = r;
                        if (!r.isBuf) o = false;
                        r = r.next;
                        s += 1;
                    }
                    n.allBuffers = o;
                    doWrite(e, t, true, t.length, n, "", a.finish);
                    t.pendingcb++;
                    t.lastBufferedRequest = null;
                    if (a.next) {
                        t.corkedRequestsFree = a.next;
                        a.next = null;
                    } else {
                        t.corkedRequestsFree = new CorkedRequest(t);
                    }
                    t.bufferedRequestCount = 0;
                } else {
                    while(r){
                        var h = r.chunk;
                        var u = r.encoding;
                        var d = r.callback;
                        var c = t.objectMode ? 1 : h.length;
                        doWrite(e, t, false, c, h, u, d);
                        r = r.next;
                        t.bufferedRequestCount--;
                        if (t.writing) {
                            break;
                        }
                    }
                    if (r === null) t.lastBufferedRequest = null;
                }
                t.bufferedRequest = r;
                t.bufferProcessing = false;
            }
            Writable.prototype._write = function(e, t, r) {
                r(new p("_write()"));
            };
            Writable.prototype._writev = null;
            Writable.prototype.end = function(e, t, r) {
                var i = this._writableState;
                if (typeof e === "function") {
                    r = e;
                    e = null;
                    t = null;
                } else if (typeof t === "function") {
                    r = t;
                    t = null;
                }
                if (e !== null && e !== undefined) this.write(e, t);
                if (i.corked) {
                    i.corked = 1;
                    this.uncork();
                }
                if (!i.ending) endWritable(this, i, r);
                return this;
            };
            Object.defineProperty(Writable.prototype, "writableLength", {
                enumerable: false,
                get: function get() {
                    return this._writableState.length;
                }
            });
            function needFinish(e) {
                return e.ending && e.length === 0 && e.bufferedRequest === null && !e.finished && !e.writing;
            }
            function callFinal(e, t) {
                e._final(function(r) {
                    t.pendingcb--;
                    if (r) {
                        w(e, r);
                    }
                    t.prefinished = true;
                    e.emit("prefinish");
                    finishMaybe(e, t);
                });
            }
            function prefinish(e, t) {
                if (!t.prefinished && !t.finalCalled) {
                    if (typeof e._final === "function" && !t.destroyed) {
                        t.pendingcb++;
                        t.finalCalled = true;
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].nextTick(callFinal, e, t);
                    } else {
                        t.prefinished = true;
                        e.emit("prefinish");
                    }
                }
            }
            function finishMaybe(e, t) {
                var r = needFinish(t);
                if (r) {
                    prefinish(e, t);
                    if (t.pendingcb === 0) {
                        t.finished = true;
                        e.emit("finish");
                        if (t.autoDestroy) {
                            var i = e._readableState;
                            if (!i || i.autoDestroy && i.endEmitted) {
                                e.destroy();
                            }
                        }
                    }
                }
                return r;
            }
            function endWritable(e, t, r) {
                t.ending = true;
                finishMaybe(e, t);
                if (r) {
                    if (t.finished) __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].nextTick(r);
                    else e.once("finish", r);
                }
                t.ended = true;
                e.writable = false;
            }
            function onCorkedFinish(e, t, r) {
                var i = e.entry;
                e.entry = null;
                while(i){
                    var n = i.callback;
                    t.pendingcb--;
                    n(r);
                    i = i.next;
                }
                t.corkedRequestsFree.next = e;
            }
            Object.defineProperty(Writable.prototype, "destroyed", {
                enumerable: false,
                get: function get() {
                    if (this._writableState === undefined) {
                        return false;
                    }
                    return this._writableState.destroyed;
                },
                set: function set(e) {
                    if (!this._writableState) {
                        return;
                    }
                    this._writableState.destroyed = e;
                }
            });
            Writable.prototype.destroy = h.destroy;
            Writable.prototype._undestroy = h.undestroy;
            Writable.prototype._destroy = function(e, t) {
                t(e);
            };
        },
        6871: function(e, t, r) {
            "use strict";
            var i;
            function _defineProperty(e, t, r) {
                if (t in e) {
                    Object.defineProperty(e, t, {
                        value: r,
                        enumerable: true,
                        configurable: true,
                        writable: true
                    });
                } else {
                    e[t] = r;
                }
                return e;
            }
            var n = r(9698);
            var a = Symbol("lastResolve");
            var s = Symbol("lastReject");
            var o = Symbol("error");
            var h = Symbol("ended");
            var u = Symbol("lastPromise");
            var d = Symbol("handlePromise");
            var c = Symbol("stream");
            function createIterResult(e, t) {
                return {
                    value: e,
                    done: t
                };
            }
            function readAndResolve(e) {
                var t = e[a];
                if (t !== null) {
                    var r = e[c].read();
                    if (r !== null) {
                        e[u] = null;
                        e[a] = null;
                        e[s] = null;
                        t(createIterResult(r, false));
                    }
                }
            }
            function onReadable(e) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].nextTick(readAndResolve, e);
            }
            function wrapForNext(e, t) {
                return function(r, i) {
                    e.then(function() {
                        if (t[h]) {
                            r(createIterResult(undefined, true));
                            return;
                        }
                        t[d](r, i);
                    }, i);
                };
            }
            var l = Object.getPrototypeOf(function() {});
            var p = Object.setPrototypeOf((i = {
                get stream () {
                    return this[c];
                },
                next: function next() {
                    var e = this;
                    var t = this[o];
                    if (t !== null) {
                        return Promise.reject(t);
                    }
                    if (this[h]) {
                        return Promise.resolve(createIterResult(undefined, true));
                    }
                    if (this[c].destroyed) {
                        return new Promise(function(t, r) {
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].nextTick(function() {
                                if (e[o]) {
                                    r(e[o]);
                                } else {
                                    t(createIterResult(undefined, true));
                                }
                            });
                        });
                    }
                    var r = this[u];
                    var i;
                    if (r) {
                        i = new Promise(wrapForNext(r, this));
                    } else {
                        var n = this[c].read();
                        if (n !== null) {
                            return Promise.resolve(createIterResult(n, false));
                        }
                        i = new Promise(this[d]);
                    }
                    this[u] = i;
                    return i;
                }
            }, _defineProperty(i, Symbol.asyncIterator, function() {
                return this;
            }), _defineProperty(i, "return", function _return() {
                var e = this;
                return new Promise(function(t, r) {
                    e[c].destroy(null, function(e) {
                        if (e) {
                            r(e);
                            return;
                        }
                        t(createIterResult(undefined, true));
                    });
                });
            }), i), l);
            var v = function createReadableStreamAsyncIterator(e) {
                var t;
                var r = Object.create(p, (t = {}, _defineProperty(t, c, {
                    value: e,
                    writable: true
                }), _defineProperty(t, a, {
                    value: null,
                    writable: true
                }), _defineProperty(t, s, {
                    value: null,
                    writable: true
                }), _defineProperty(t, o, {
                    value: null,
                    writable: true
                }), _defineProperty(t, h, {
                    value: e._readableState.endEmitted,
                    writable: true
                }), _defineProperty(t, d, {
                    value: function value(e, t) {
                        var i = r[c].read();
                        if (i) {
                            r[u] = null;
                            r[a] = null;
                            r[s] = null;
                            e(createIterResult(i, false));
                        } else {
                            r[a] = e;
                            r[s] = t;
                        }
                    },
                    writable: true
                }), t));
                r[u] = null;
                n(e, function(e) {
                    if (e && e.code !== "ERR_STREAM_PREMATURE_CLOSE") {
                        var t = r[s];
                        if (t !== null) {
                            r[u] = null;
                            r[a] = null;
                            r[s] = null;
                            t(e);
                        }
                        r[o] = e;
                        return;
                    }
                    var i = r[a];
                    if (i !== null) {
                        r[u] = null;
                        r[a] = null;
                        r[s] = null;
                        i(createIterResult(undefined, true));
                    }
                    r[h] = true;
                });
                e.on("readable", onReadable.bind(null, r));
                return r;
            };
            e.exports = v;
        },
        4379: function(e, t, r) {
            "use strict";
            function ownKeys(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    if (t) i = i.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    });
                    r.push.apply(r, i);
                }
                return r;
            }
            function _objectSpread(e) {
                for(var t = 1; t < arguments.length; t++){
                    var r = arguments[t] != null ? arguments[t] : {};
                    if (t % 2) {
                        ownKeys(Object(r), true).forEach(function(t) {
                            _defineProperty(e, t, r[t]);
                        });
                    } else if (Object.getOwnPropertyDescriptors) {
                        Object.defineProperties(e, Object.getOwnPropertyDescriptors(r));
                    } else {
                        ownKeys(Object(r)).forEach(function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                        });
                    }
                }
                return e;
            }
            function _defineProperty(e, t, r) {
                if (t in e) {
                    Object.defineProperty(e, t, {
                        value: r,
                        enumerable: true,
                        configurable: true,
                        writable: true
                    });
                } else {
                    e[t] = r;
                }
                return e;
            }
            function _classCallCheck(e, t) {
                if (!(e instanceof t)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }
            function _defineProperties(e, t) {
                for(var r = 0; r < t.length; r++){
                    var i = t[r];
                    i.enumerable = i.enumerable || false;
                    i.configurable = true;
                    if ("value" in i) i.writable = true;
                    Object.defineProperty(e, i.key, i);
                }
            }
            function _createClass(e, t, r) {
                if (t) _defineProperties(e.prototype, t);
                if (r) _defineProperties(e, r);
                return e;
            }
            var i = r(4300), n = i.Buffer;
            var a = r(3837), s = a.inspect;
            var o = s && s.custom || "inspect";
            function copyBuffer(e, t, r) {
                n.prototype.copy.call(e, t, r);
            }
            e.exports = function() {
                function BufferList() {
                    _classCallCheck(this, BufferList);
                    this.head = null;
                    this.tail = null;
                    this.length = 0;
                }
                _createClass(BufferList, [
                    {
                        key: "push",
                        value: function push(e) {
                            var t = {
                                data: e,
                                next: null
                            };
                            if (this.length > 0) this.tail.next = t;
                            else this.head = t;
                            this.tail = t;
                            ++this.length;
                        }
                    },
                    {
                        key: "unshift",
                        value: function unshift(e) {
                            var t = {
                                data: e,
                                next: this.head
                            };
                            if (this.length === 0) this.tail = t;
                            this.head = t;
                            ++this.length;
                        }
                    },
                    {
                        key: "shift",
                        value: function shift() {
                            if (this.length === 0) return;
                            var e = this.head.data;
                            if (this.length === 1) this.head = this.tail = null;
                            else this.head = this.head.next;
                            --this.length;
                            return e;
                        }
                    },
                    {
                        key: "clear",
                        value: function clear() {
                            this.head = this.tail = null;
                            this.length = 0;
                        }
                    },
                    {
                        key: "join",
                        value: function join(e) {
                            if (this.length === 0) return "";
                            var t = this.head;
                            var r = "" + t.data;
                            while(t = t.next){
                                r += e + t.data;
                            }
                            return r;
                        }
                    },
                    {
                        key: "concat",
                        value: function concat(e) {
                            if (this.length === 0) return n.alloc(0);
                            var t = n.allocUnsafe(e >>> 0);
                            var r = this.head;
                            var i = 0;
                            while(r){
                                copyBuffer(r.data, t, i);
                                i += r.data.length;
                                r = r.next;
                            }
                            return t;
                        }
                    },
                    {
                        key: "consume",
                        value: function consume(e, t) {
                            var r;
                            if (e < this.head.data.length) {
                                r = this.head.data.slice(0, e);
                                this.head.data = this.head.data.slice(e);
                            } else if (e === this.head.data.length) {
                                r = this.shift();
                            } else {
                                r = t ? this._getString(e) : this._getBuffer(e);
                            }
                            return r;
                        }
                    },
                    {
                        key: "first",
                        value: function first() {
                            return this.head.data;
                        }
                    },
                    {
                        key: "_getString",
                        value: function _getString(e) {
                            var t = this.head;
                            var r = 1;
                            var i = t.data;
                            e -= i.length;
                            while(t = t.next){
                                var n = t.data;
                                var a = e > n.length ? n.length : e;
                                if (a === n.length) i += n;
                                else i += n.slice(0, e);
                                e -= a;
                                if (e === 0) {
                                    if (a === n.length) {
                                        ++r;
                                        if (t.next) this.head = t.next;
                                        else this.head = this.tail = null;
                                    } else {
                                        this.head = t;
                                        t.data = n.slice(a);
                                    }
                                    break;
                                }
                                ++r;
                            }
                            this.length -= r;
                            return i;
                        }
                    },
                    {
                        key: "_getBuffer",
                        value: function _getBuffer(e) {
                            var t = n.allocUnsafe(e);
                            var r = this.head;
                            var i = 1;
                            r.data.copy(t);
                            e -= r.data.length;
                            while(r = r.next){
                                var a = r.data;
                                var s = e > a.length ? a.length : e;
                                a.copy(t, t.length - e, 0, s);
                                e -= s;
                                if (e === 0) {
                                    if (s === a.length) {
                                        ++i;
                                        if (r.next) this.head = r.next;
                                        else this.head = this.tail = null;
                                    } else {
                                        this.head = r;
                                        r.data = a.slice(s);
                                    }
                                    break;
                                }
                                ++i;
                            }
                            this.length -= i;
                            return t;
                        }
                    },
                    {
                        key: o,
                        value: function value(e, t) {
                            return s(this, _objectSpread({}, t, {
                                depth: 0,
                                customInspect: false
                            }));
                        }
                    }
                ]);
                return BufferList;
            }();
        },
        7025: function(e) {
            "use strict";
            function destroy(e, t) {
                var r = this;
                var i = this._readableState && this._readableState.destroyed;
                var n = this._writableState && this._writableState.destroyed;
                if (i || n) {
                    if (t) {
                        t(e);
                    } else if (e) {
                        if (!this._writableState) {
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].nextTick(emitErrorNT, this, e);
                        } else if (!this._writableState.errorEmitted) {
                            this._writableState.errorEmitted = true;
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].nextTick(emitErrorNT, this, e);
                        }
                    }
                    return this;
                }
                if (this._readableState) {
                    this._readableState.destroyed = true;
                }
                if (this._writableState) {
                    this._writableState.destroyed = true;
                }
                this._destroy(e || null, function(e) {
                    if (!t && e) {
                        if (!r._writableState) {
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].nextTick(emitErrorAndCloseNT, r, e);
                        } else if (!r._writableState.errorEmitted) {
                            r._writableState.errorEmitted = true;
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].nextTick(emitErrorAndCloseNT, r, e);
                        } else {
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].nextTick(emitCloseNT, r);
                        }
                    } else if (t) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].nextTick(emitCloseNT, r);
                        t(e);
                    } else {
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].nextTick(emitCloseNT, r);
                    }
                });
                return this;
            }
            function emitErrorAndCloseNT(e, t) {
                emitErrorNT(e, t);
                emitCloseNT(e);
            }
            function emitCloseNT(e) {
                if (e._writableState && !e._writableState.emitClose) return;
                if (e._readableState && !e._readableState.emitClose) return;
                e.emit("close");
            }
            function undestroy() {
                if (this._readableState) {
                    this._readableState.destroyed = false;
                    this._readableState.reading = false;
                    this._readableState.ended = false;
                    this._readableState.endEmitted = false;
                }
                if (this._writableState) {
                    this._writableState.destroyed = false;
                    this._writableState.ended = false;
                    this._writableState.ending = false;
                    this._writableState.finalCalled = false;
                    this._writableState.prefinished = false;
                    this._writableState.finished = false;
                    this._writableState.errorEmitted = false;
                }
            }
            function emitErrorNT(e, t) {
                e.emit("error", t);
            }
            function errorOrDestroy(e, t) {
                var r = e._readableState;
                var i = e._writableState;
                if (r && r.autoDestroy || i && i.autoDestroy) e.destroy(t);
                else e.emit("error", t);
            }
            e.exports = {
                destroy: destroy,
                undestroy: undestroy,
                errorOrDestroy: errorOrDestroy
            };
        },
        9698: function(e, t, r) {
            "use strict";
            var i = r(4646).q.ERR_STREAM_PREMATURE_CLOSE;
            function once(e) {
                var t = false;
                return function() {
                    if (t) return;
                    t = true;
                    for(var r = arguments.length, i = new Array(r), n = 0; n < r; n++){
                        i[n] = arguments[n];
                    }
                    e.apply(this, i);
                };
            }
            function noop() {}
            function isRequest(e) {
                return e.setHeader && typeof e.abort === "function";
            }
            function eos(e, t, r) {
                if (typeof t === "function") return eos(e, null, t);
                if (!t) t = {};
                r = once(r || noop);
                var n = t.readable || t.readable !== false && e.readable;
                var a = t.writable || t.writable !== false && e.writable;
                var s = function onlegacyfinish() {
                    if (!e.writable) h();
                };
                var o = e._writableState && e._writableState.finished;
                var h = function onfinish() {
                    a = false;
                    o = true;
                    if (!n) r.call(e);
                };
                var u = e._readableState && e._readableState.endEmitted;
                var d = function onend() {
                    n = false;
                    u = true;
                    if (!a) r.call(e);
                };
                var c = function onerror(t) {
                    r.call(e, t);
                };
                var l = function onclose() {
                    var t;
                    if (n && !u) {
                        if (!e._readableState || !e._readableState.ended) t = new i;
                        return r.call(e, t);
                    }
                    if (a && !o) {
                        if (!e._writableState || !e._writableState.ended) t = new i;
                        return r.call(e, t);
                    }
                };
                var p = function onrequest() {
                    e.req.on("finish", h);
                };
                if (isRequest(e)) {
                    e.on("complete", h);
                    e.on("abort", l);
                    if (e.req) p();
                    else e.on("request", p);
                } else if (a && !e._writableState) {
                    e.on("end", s);
                    e.on("close", s);
                }
                e.on("end", d);
                e.on("finish", h);
                if (t.error !== false) e.on("error", c);
                e.on("close", l);
                return function() {
                    e.removeListener("complete", h);
                    e.removeListener("abort", l);
                    e.removeListener("request", p);
                    if (e.req) e.req.removeListener("finish", h);
                    e.removeListener("end", s);
                    e.removeListener("close", s);
                    e.removeListener("finish", h);
                    e.removeListener("end", d);
                    e.removeListener("error", c);
                    e.removeListener("close", l);
                };
            }
            e.exports = eos;
        },
        9727: function(e, t, r) {
            "use strict";
            function asyncGeneratorStep(e, t, r, i, n, a, s) {
                try {
                    var o = e[a](s);
                    var h = o.value;
                } catch (e) {
                    r(e);
                    return;
                }
                if (o.done) {
                    t(h);
                } else {
                    Promise.resolve(h).then(i, n);
                }
            }
            function _asyncToGenerator(e) {
                return function() {
                    var t = this, r = arguments;
                    return new Promise(function(i, n) {
                        var a = e.apply(t, r);
                        function _next(e) {
                            asyncGeneratorStep(a, i, n, _next, _throw, "next", e);
                        }
                        function _throw(e) {
                            asyncGeneratorStep(a, i, n, _next, _throw, "throw", e);
                        }
                        _next(undefined);
                    });
                };
            }
            function ownKeys(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    if (t) i = i.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    });
                    r.push.apply(r, i);
                }
                return r;
            }
            function _objectSpread(e) {
                for(var t = 1; t < arguments.length; t++){
                    var r = arguments[t] != null ? arguments[t] : {};
                    if (t % 2) {
                        ownKeys(Object(r), true).forEach(function(t) {
                            _defineProperty(e, t, r[t]);
                        });
                    } else if (Object.getOwnPropertyDescriptors) {
                        Object.defineProperties(e, Object.getOwnPropertyDescriptors(r));
                    } else {
                        ownKeys(Object(r)).forEach(function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                        });
                    }
                }
                return e;
            }
            function _defineProperty(e, t, r) {
                if (t in e) {
                    Object.defineProperty(e, t, {
                        value: r,
                        enumerable: true,
                        configurable: true,
                        writable: true
                    });
                } else {
                    e[t] = r;
                }
                return e;
            }
            var i = r(4646).q.ERR_INVALID_ARG_TYPE;
            function from(e, t, r) {
                var n;
                if (t && typeof t.next === "function") {
                    n = t;
                } else if (t && t[Symbol.asyncIterator]) n = t[Symbol.asyncIterator]();
                else if (t && t[Symbol.iterator]) n = t[Symbol.iterator]();
                else throw new i("iterable", [
                    "Iterable"
                ], t);
                var a = new e(_objectSpread({
                    objectMode: true
                }, r));
                var s = false;
                a._read = function() {
                    if (!s) {
                        s = true;
                        next();
                    }
                };
                function next() {
                    return _next2.apply(this, arguments);
                }
                function _next2() {
                    _next2 = _asyncToGenerator(function*() {
                        try {
                            var e = yield n.next(), t = e.value, r = e.done;
                            if (r) {
                                a.push(null);
                            } else if (a.push((yield t))) {
                                next();
                            } else {
                                s = false;
                            }
                        } catch (e) {
                            a.destroy(e);
                        }
                    });
                    return _next2.apply(this, arguments);
                }
                return a;
            }
            e.exports = from;
        },
        8442: function(e, t, r) {
            "use strict";
            var i;
            function once(e) {
                var t = false;
                return function() {
                    if (t) return;
                    t = true;
                    e.apply(void 0, arguments);
                };
            }
            var n = r(4646).q, a = n.ERR_MISSING_ARGS, s = n.ERR_STREAM_DESTROYED;
            function noop(e) {
                if (e) throw e;
            }
            function isRequest(e) {
                return e.setHeader && typeof e.abort === "function";
            }
            function destroyer(e, t, n, a) {
                a = once(a);
                var o = false;
                e.on("close", function() {
                    o = true;
                });
                if (i === undefined) i = r(9698);
                i(e, {
                    readable: t,
                    writable: n
                }, function(e) {
                    if (e) return a(e);
                    o = true;
                    a();
                });
                var h = false;
                return function(t) {
                    if (o) return;
                    if (h) return;
                    h = true;
                    if (isRequest(e)) return e.abort();
                    if (typeof e.destroy === "function") return e.destroy();
                    a(t || new s("pipe"));
                };
            }
            function call(e) {
                e();
            }
            function pipe(e, t) {
                return e.pipe(t);
            }
            function popCallback(e) {
                if (!e.length) return noop;
                if (typeof e[e.length - 1] !== "function") return noop;
                return e.pop();
            }
            function pipeline() {
                for(var e = arguments.length, t = new Array(e), r = 0; r < e; r++){
                    t[r] = arguments[r];
                }
                var i = popCallback(t);
                if (Array.isArray(t[0])) t = t[0];
                if (t.length < 2) {
                    throw new a("streams");
                }
                var n;
                var s = t.map(function(e, r) {
                    var a = r < t.length - 1;
                    var o = r > 0;
                    return destroyer(e, a, o, function(e) {
                        if (!n) n = e;
                        if (e) s.forEach(call);
                        if (a) return;
                        s.forEach(call);
                        i(n);
                    });
                });
                return t.reduce(pipe);
            }
            e.exports = pipeline;
        },
        6776: function(e, t, r) {
            "use strict";
            var i = r(4646).q.ERR_INVALID_OPT_VALUE;
            function highWaterMarkFrom(e, t, r) {
                return e.highWaterMark != null ? e.highWaterMark : t ? e[r] : null;
            }
            function getHighWaterMark(e, t, r, n) {
                var a = highWaterMarkFrom(t, n, r);
                if (a != null) {
                    if (!(isFinite(a) && Math.floor(a) === a) || a < 0) {
                        var s = n ? r : "highWaterMark";
                        throw new i(s, a);
                    }
                    return Math.floor(a);
                }
                return e.objectMode ? 16 : 16 * 1024;
            }
            e.exports = {
                getHighWaterMark: getHighWaterMark
            };
        },
        4678: function(e, t, r) {
            e.exports = r(2781);
        },
        3726: function(e, t, r) {
            var i = r(2781);
            if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.READABLE_STREAM === "disable" && i) {
                e.exports = i.Readable;
                Object.assign(e.exports, i);
                e.exports.Stream = i;
            } else {
                t = e.exports = r(1709);
                t.Stream = i || t;
                t.Readable = t;
                t.Writable = r(7337);
                t.Duplex = r(2403);
                t.Transform = r(1170);
                t.PassThrough = r(7889);
                t.finished = r(9698);
                t.pipeline = r(8442);
            }
        },
        3225: function(e, t, r) {
            "use strict";
            var i = r(4300).Buffer;
            var n = r(3782);
            var a = r(9029);
            var s = new Array(16);
            var o = [
                0,
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                9,
                10,
                11,
                12,
                13,
                14,
                15,
                7,
                4,
                13,
                1,
                10,
                6,
                15,
                3,
                12,
                0,
                9,
                5,
                2,
                14,
                11,
                8,
                3,
                10,
                14,
                4,
                9,
                15,
                8,
                1,
                2,
                7,
                0,
                6,
                13,
                11,
                5,
                12,
                1,
                9,
                11,
                10,
                0,
                8,
                12,
                4,
                13,
                3,
                7,
                15,
                14,
                5,
                6,
                2,
                4,
                0,
                5,
                9,
                7,
                12,
                2,
                10,
                14,
                1,
                3,
                8,
                11,
                6,
                15,
                13
            ];
            var h = [
                5,
                14,
                7,
                0,
                9,
                2,
                11,
                4,
                13,
                6,
                15,
                8,
                1,
                10,
                3,
                12,
                6,
                11,
                3,
                7,
                0,
                13,
                5,
                10,
                14,
                15,
                8,
                12,
                4,
                9,
                1,
                2,
                15,
                5,
                1,
                3,
                7,
                14,
                6,
                9,
                11,
                8,
                12,
                2,
                10,
                0,
                4,
                13,
                8,
                6,
                4,
                1,
                3,
                11,
                15,
                0,
                5,
                12,
                2,
                13,
                9,
                7,
                10,
                14,
                12,
                15,
                10,
                4,
                1,
                5,
                8,
                7,
                6,
                2,
                13,
                14,
                0,
                3,
                9,
                11
            ];
            var u = [
                11,
                14,
                15,
                12,
                5,
                8,
                7,
                9,
                11,
                13,
                14,
                15,
                6,
                7,
                9,
                8,
                7,
                6,
                8,
                13,
                11,
                9,
                7,
                15,
                7,
                12,
                15,
                9,
                11,
                7,
                13,
                12,
                11,
                13,
                6,
                7,
                14,
                9,
                13,
                15,
                14,
                8,
                13,
                6,
                5,
                12,
                7,
                5,
                11,
                12,
                14,
                15,
                14,
                15,
                9,
                8,
                9,
                14,
                5,
                6,
                8,
                6,
                5,
                12,
                9,
                15,
                5,
                11,
                6,
                8,
                13,
                12,
                5,
                12,
                13,
                14,
                11,
                8,
                5,
                6
            ];
            var d = [
                8,
                9,
                9,
                11,
                13,
                15,
                15,
                5,
                7,
                7,
                8,
                11,
                14,
                14,
                12,
                6,
                9,
                13,
                15,
                7,
                12,
                8,
                9,
                11,
                7,
                7,
                12,
                7,
                6,
                15,
                13,
                11,
                9,
                7,
                15,
                11,
                8,
                6,
                6,
                14,
                12,
                13,
                5,
                14,
                13,
                13,
                7,
                5,
                15,
                5,
                8,
                11,
                14,
                14,
                6,
                14,
                6,
                9,
                12,
                9,
                12,
                5,
                15,
                8,
                8,
                5,
                12,
                9,
                12,
                5,
                14,
                6,
                8,
                13,
                6,
                5,
                15,
                13,
                11,
                11
            ];
            var c = [
                0,
                1518500249,
                1859775393,
                2400959708,
                2840853838
            ];
            var l = [
                1352829926,
                1548603684,
                1836072691,
                2053994217,
                0
            ];
            function RIPEMD160() {
                a.call(this, 64);
                this._a = 1732584193;
                this._b = 4023233417;
                this._c = 2562383102;
                this._d = 271733878;
                this._e = 3285377520;
            }
            n(RIPEMD160, a);
            RIPEMD160.prototype._update = function() {
                var e = s;
                for(var t = 0; t < 16; ++t)e[t] = this._block.readInt32LE(t * 4);
                var r = this._a | 0;
                var i = this._b | 0;
                var n = this._c | 0;
                var a = this._d | 0;
                var p = this._e | 0;
                var v = this._a | 0;
                var b = this._b | 0;
                var m = this._c | 0;
                var y = this._d | 0;
                var g = this._e | 0;
                for(var _ = 0; _ < 80; _ += 1){
                    var w;
                    var M;
                    if (_ < 16) {
                        w = fn1(r, i, n, a, p, e[o[_]], c[0], u[_]);
                        M = fn5(v, b, m, y, g, e[h[_]], l[0], d[_]);
                    } else if (_ < 32) {
                        w = fn2(r, i, n, a, p, e[o[_]], c[1], u[_]);
                        M = fn4(v, b, m, y, g, e[h[_]], l[1], d[_]);
                    } else if (_ < 48) {
                        w = fn3(r, i, n, a, p, e[o[_]], c[2], u[_]);
                        M = fn3(v, b, m, y, g, e[h[_]], l[2], d[_]);
                    } else if (_ < 64) {
                        w = fn4(r, i, n, a, p, e[o[_]], c[3], u[_]);
                        M = fn2(v, b, m, y, g, e[h[_]], l[3], d[_]);
                    } else {
                        w = fn5(r, i, n, a, p, e[o[_]], c[4], u[_]);
                        M = fn1(v, b, m, y, g, e[h[_]], l[4], d[_]);
                    }
                    r = p;
                    p = a;
                    a = rotl(n, 10);
                    n = i;
                    i = w;
                    v = g;
                    g = y;
                    y = rotl(m, 10);
                    m = b;
                    b = M;
                }
                var B = this._b + n + y | 0;
                this._b = this._c + a + g | 0;
                this._c = this._d + p + v | 0;
                this._d = this._e + r + b | 0;
                this._e = this._a + i + m | 0;
                this._a = B;
            };
            RIPEMD160.prototype._digest = function() {
                this._block[this._blockOffset++] = 128;
                if (this._blockOffset > 56) {
                    this._block.fill(0, this._blockOffset, 64);
                    this._update();
                    this._blockOffset = 0;
                }
                this._block.fill(0, this._blockOffset, 56);
                this._block.writeUInt32LE(this._length[0], 56);
                this._block.writeUInt32LE(this._length[1], 60);
                this._update();
                var e = i.alloc ? i.alloc(20) : new i(20);
                e.writeInt32LE(this._a, 0);
                e.writeInt32LE(this._b, 4);
                e.writeInt32LE(this._c, 8);
                e.writeInt32LE(this._d, 12);
                e.writeInt32LE(this._e, 16);
                return e;
            };
            function rotl(e, t) {
                return e << t | e >>> 32 - t;
            }
            function fn1(e, t, r, i, n, a, s, o) {
                return rotl(e + (t ^ r ^ i) + a + s | 0, o) + n | 0;
            }
            function fn2(e, t, r, i, n, a, s, o) {
                return rotl(e + (t & r | ~t & i) + a + s | 0, o) + n | 0;
            }
            function fn3(e, t, r, i, n, a, s, o) {
                return rotl(e + ((t | ~r) ^ i) + a + s | 0, o) + n | 0;
            }
            function fn4(e, t, r, i, n, a, s, o) {
                return rotl(e + (t & i | r & ~i) + a + s | 0, o) + n | 0;
            }
            function fn5(e, t, r, i, n, a, s, o) {
                return rotl(e + (t ^ (r | ~i)) + a + s | 0, o) + n | 0;
            }
            e.exports = RIPEMD160;
        },
        5055: function(e, t, r) {
            var i = r(4300);
            var n = i.Buffer;
            function copyProps(e, t) {
                for(var r in e){
                    t[r] = e[r];
                }
            }
            if (n.from && n.alloc && n.allocUnsafe && n.allocUnsafeSlow) {
                e.exports = i;
            } else {
                copyProps(i, t);
                t.Buffer = SafeBuffer;
            }
            function SafeBuffer(e, t, r) {
                return n(e, t, r);
            }
            SafeBuffer.prototype = Object.create(n.prototype);
            copyProps(n, SafeBuffer);
            SafeBuffer.from = function(e, t, r) {
                if (typeof e === "number") {
                    throw new TypeError("Argument must not be a number");
                }
                return n(e, t, r);
            };
            SafeBuffer.alloc = function(e, t, r) {
                if (typeof e !== "number") {
                    throw new TypeError("Argument must be a number");
                }
                var i = n(e);
                if (t !== undefined) {
                    if (typeof r === "string") {
                        i.fill(t, r);
                    } else {
                        i.fill(t);
                    }
                } else {
                    i.fill(0);
                }
                return i;
            };
            SafeBuffer.allocUnsafe = function(e) {
                if (typeof e !== "number") {
                    throw new TypeError("Argument must be a number");
                }
                return n(e);
            };
            SafeBuffer.allocUnsafeSlow = function(e) {
                if (typeof e !== "number") {
                    throw new TypeError("Argument must be a number");
                }
                return i.SlowBuffer(e);
            };
        },
        6911: function(e, t, r) {
            /*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */ var i = r(4300);
            var n = i.Buffer;
            function copyProps(e, t) {
                for(var r in e){
                    t[r] = e[r];
                }
            }
            if (n.from && n.alloc && n.allocUnsafe && n.allocUnsafeSlow) {
                e.exports = i;
            } else {
                copyProps(i, t);
                t.Buffer = SafeBuffer;
            }
            function SafeBuffer(e, t, r) {
                return n(e, t, r);
            }
            SafeBuffer.prototype = Object.create(n.prototype);
            copyProps(n, SafeBuffer);
            SafeBuffer.from = function(e, t, r) {
                if (typeof e === "number") {
                    throw new TypeError("Argument must not be a number");
                }
                return n(e, t, r);
            };
            SafeBuffer.alloc = function(e, t, r) {
                if (typeof e !== "number") {
                    throw new TypeError("Argument must be a number");
                }
                var i = n(e);
                if (t !== undefined) {
                    if (typeof r === "string") {
                        i.fill(t, r);
                    } else {
                        i.fill(t);
                    }
                } else {
                    i.fill(0);
                }
                return i;
            };
            SafeBuffer.allocUnsafe = function(e) {
                if (typeof e !== "number") {
                    throw new TypeError("Argument must be a number");
                }
                return n(e);
            };
            SafeBuffer.allocUnsafeSlow = function(e) {
                if (typeof e !== "number") {
                    throw new TypeError("Argument must be a number");
                }
                return i.SlowBuffer(e);
            };
        },
        2858: function(e, t, r) {
            var i = r(6911).Buffer;
            function Hash(e, t) {
                this._block = i.alloc(e);
                this._finalSize = t;
                this._blockSize = e;
                this._len = 0;
            }
            Hash.prototype.update = function(e, t) {
                if (typeof e === "string") {
                    t = t || "utf8";
                    e = i.from(e, t);
                }
                var r = this._block;
                var n = this._blockSize;
                var a = e.length;
                var s = this._len;
                for(var o = 0; o < a;){
                    var h = s % n;
                    var u = Math.min(a - o, n - h);
                    for(var d = 0; d < u; d++){
                        r[h + d] = e[o + d];
                    }
                    s += u;
                    o += u;
                    if (s % n === 0) {
                        this._update(r);
                    }
                }
                this._len += a;
                return this;
            };
            Hash.prototype.digest = function(e) {
                var t = this._len % this._blockSize;
                this._block[t] = 128;
                this._block.fill(0, t + 1);
                if (t >= this._finalSize) {
                    this._update(this._block);
                    this._block.fill(0);
                }
                var r = this._len * 8;
                if (r <= 4294967295) {
                    this._block.writeUInt32BE(r, this._blockSize - 4);
                } else {
                    var i = (r & 4294967295) >>> 0;
                    var n = (r - i) / 4294967296;
                    this._block.writeUInt32BE(n, this._blockSize - 8);
                    this._block.writeUInt32BE(i, this._blockSize - 4);
                }
                this._update(this._block);
                var a = this._hash();
                return e ? a.toString(e) : a;
            };
            Hash.prototype._update = function() {
                throw new Error("_update must be implemented by subclass");
            };
            e.exports = Hash;
        },
        4371: function(e, t, r) {
            var i = e.exports = function SHA(e) {
                e = e.toLowerCase();
                var t = i[e];
                if (!t) throw new Error(e + " is not supported (we accept pull requests)");
                return new t;
            };
            i.sha = r(4018);
            i.sha1 = r(4179);
            i.sha224 = r(532);
            i.sha256 = r(1843);
            i.sha384 = r(7455);
            i.sha512 = r(9934);
        },
        4018: function(e, t, r) {
            var i = r(3782);
            var n = r(2858);
            var a = r(6911).Buffer;
            var s = [
                1518500249,
                1859775393,
                2400959708 | 0,
                3395469782 | 0
            ];
            var o = new Array(80);
            function Sha() {
                this.init();
                this._w = o;
                n.call(this, 64, 56);
            }
            i(Sha, n);
            Sha.prototype.init = function() {
                this._a = 1732584193;
                this._b = 4023233417;
                this._c = 2562383102;
                this._d = 271733878;
                this._e = 3285377520;
                return this;
            };
            function rotl5(e) {
                return e << 5 | e >>> 27;
            }
            function rotl30(e) {
                return e << 30 | e >>> 2;
            }
            function ft(e, t, r, i) {
                if (e === 0) return t & r | ~t & i;
                if (e === 2) return t & r | t & i | r & i;
                return t ^ r ^ i;
            }
            Sha.prototype._update = function(e) {
                var t = this._w;
                var r = this._a | 0;
                var i = this._b | 0;
                var n = this._c | 0;
                var a = this._d | 0;
                var o = this._e | 0;
                for(var h = 0; h < 16; ++h)t[h] = e.readInt32BE(h * 4);
                for(; h < 80; ++h)t[h] = t[h - 3] ^ t[h - 8] ^ t[h - 14] ^ t[h - 16];
                for(var u = 0; u < 80; ++u){
                    var d = ~~(u / 20);
                    var c = rotl5(r) + ft(d, i, n, a) + o + t[u] + s[d] | 0;
                    o = a;
                    a = n;
                    n = rotl30(i);
                    i = r;
                    r = c;
                }
                this._a = r + this._a | 0;
                this._b = i + this._b | 0;
                this._c = n + this._c | 0;
                this._d = a + this._d | 0;
                this._e = o + this._e | 0;
            };
            Sha.prototype._hash = function() {
                var e = a.allocUnsafe(20);
                e.writeInt32BE(this._a | 0, 0);
                e.writeInt32BE(this._b | 0, 4);
                e.writeInt32BE(this._c | 0, 8);
                e.writeInt32BE(this._d | 0, 12);
                e.writeInt32BE(this._e | 0, 16);
                return e;
            };
            e.exports = Sha;
        },
        4179: function(e, t, r) {
            var i = r(3782);
            var n = r(2858);
            var a = r(6911).Buffer;
            var s = [
                1518500249,
                1859775393,
                2400959708 | 0,
                3395469782 | 0
            ];
            var o = new Array(80);
            function Sha1() {
                this.init();
                this._w = o;
                n.call(this, 64, 56);
            }
            i(Sha1, n);
            Sha1.prototype.init = function() {
                this._a = 1732584193;
                this._b = 4023233417;
                this._c = 2562383102;
                this._d = 271733878;
                this._e = 3285377520;
                return this;
            };
            function rotl1(e) {
                return e << 1 | e >>> 31;
            }
            function rotl5(e) {
                return e << 5 | e >>> 27;
            }
            function rotl30(e) {
                return e << 30 | e >>> 2;
            }
            function ft(e, t, r, i) {
                if (e === 0) return t & r | ~t & i;
                if (e === 2) return t & r | t & i | r & i;
                return t ^ r ^ i;
            }
            Sha1.prototype._update = function(e) {
                var t = this._w;
                var r = this._a | 0;
                var i = this._b | 0;
                var n = this._c | 0;
                var a = this._d | 0;
                var o = this._e | 0;
                for(var h = 0; h < 16; ++h)t[h] = e.readInt32BE(h * 4);
                for(; h < 80; ++h)t[h] = rotl1(t[h - 3] ^ t[h - 8] ^ t[h - 14] ^ t[h - 16]);
                for(var u = 0; u < 80; ++u){
                    var d = ~~(u / 20);
                    var c = rotl5(r) + ft(d, i, n, a) + o + t[u] + s[d] | 0;
                    o = a;
                    a = n;
                    n = rotl30(i);
                    i = r;
                    r = c;
                }
                this._a = r + this._a | 0;
                this._b = i + this._b | 0;
                this._c = n + this._c | 0;
                this._d = a + this._d | 0;
                this._e = o + this._e | 0;
            };
            Sha1.prototype._hash = function() {
                var e = a.allocUnsafe(20);
                e.writeInt32BE(this._a | 0, 0);
                e.writeInt32BE(this._b | 0, 4);
                e.writeInt32BE(this._c | 0, 8);
                e.writeInt32BE(this._d | 0, 12);
                e.writeInt32BE(this._e | 0, 16);
                return e;
            };
            e.exports = Sha1;
        },
        532: function(e, t, r) {
            var i = r(3782);
            var n = r(1843);
            var a = r(2858);
            var s = r(6911).Buffer;
            var o = new Array(64);
            function Sha224() {
                this.init();
                this._w = o;
                a.call(this, 64, 56);
            }
            i(Sha224, n);
            Sha224.prototype.init = function() {
                this._a = 3238371032;
                this._b = 914150663;
                this._c = 812702999;
                this._d = 4144912697;
                this._e = 4290775857;
                this._f = 1750603025;
                this._g = 1694076839;
                this._h = 3204075428;
                return this;
            };
            Sha224.prototype._hash = function() {
                var e = s.allocUnsafe(28);
                e.writeInt32BE(this._a, 0);
                e.writeInt32BE(this._b, 4);
                e.writeInt32BE(this._c, 8);
                e.writeInt32BE(this._d, 12);
                e.writeInt32BE(this._e, 16);
                e.writeInt32BE(this._f, 20);
                e.writeInt32BE(this._g, 24);
                return e;
            };
            e.exports = Sha224;
        },
        1843: function(e, t, r) {
            var i = r(3782);
            var n = r(2858);
            var a = r(6911).Buffer;
            var s = [
                1116352408,
                1899447441,
                3049323471,
                3921009573,
                961987163,
                1508970993,
                2453635748,
                2870763221,
                3624381080,
                310598401,
                607225278,
                1426881987,
                1925078388,
                2162078206,
                2614888103,
                3248222580,
                3835390401,
                4022224774,
                264347078,
                604807628,
                770255983,
                1249150122,
                1555081692,
                1996064986,
                2554220882,
                2821834349,
                2952996808,
                3210313671,
                3336571891,
                3584528711,
                113926993,
                338241895,
                666307205,
                773529912,
                1294757372,
                1396182291,
                1695183700,
                1986661051,
                2177026350,
                2456956037,
                2730485921,
                2820302411,
                3259730800,
                3345764771,
                3516065817,
                3600352804,
                4094571909,
                275423344,
                430227734,
                506948616,
                659060556,
                883997877,
                958139571,
                1322822218,
                1537002063,
                1747873779,
                1955562222,
                2024104815,
                2227730452,
                2361852424,
                2428436474,
                2756734187,
                3204031479,
                3329325298
            ];
            var o = new Array(64);
            function Sha256() {
                this.init();
                this._w = o;
                n.call(this, 64, 56);
            }
            i(Sha256, n);
            Sha256.prototype.init = function() {
                this._a = 1779033703;
                this._b = 3144134277;
                this._c = 1013904242;
                this._d = 2773480762;
                this._e = 1359893119;
                this._f = 2600822924;
                this._g = 528734635;
                this._h = 1541459225;
                return this;
            };
            function ch(e, t, r) {
                return r ^ e & (t ^ r);
            }
            function maj(e, t, r) {
                return e & t | r & (e | t);
            }
            function sigma0(e) {
                return (e >>> 2 | e << 30) ^ (e >>> 13 | e << 19) ^ (e >>> 22 | e << 10);
            }
            function sigma1(e) {
                return (e >>> 6 | e << 26) ^ (e >>> 11 | e << 21) ^ (e >>> 25 | e << 7);
            }
            function gamma0(e) {
                return (e >>> 7 | e << 25) ^ (e >>> 18 | e << 14) ^ e >>> 3;
            }
            function gamma1(e) {
                return (e >>> 17 | e << 15) ^ (e >>> 19 | e << 13) ^ e >>> 10;
            }
            Sha256.prototype._update = function(e) {
                var t = this._w;
                var r = this._a | 0;
                var i = this._b | 0;
                var n = this._c | 0;
                var a = this._d | 0;
                var o = this._e | 0;
                var h = this._f | 0;
                var u = this._g | 0;
                var d = this._h | 0;
                for(var c = 0; c < 16; ++c)t[c] = e.readInt32BE(c * 4);
                for(; c < 64; ++c)t[c] = gamma1(t[c - 2]) + t[c - 7] + gamma0(t[c - 15]) + t[c - 16] | 0;
                for(var l = 0; l < 64; ++l){
                    var p = d + sigma1(o) + ch(o, h, u) + s[l] + t[l] | 0;
                    var v = sigma0(r) + maj(r, i, n) | 0;
                    d = u;
                    u = h;
                    h = o;
                    o = a + p | 0;
                    a = n;
                    n = i;
                    i = r;
                    r = p + v | 0;
                }
                this._a = r + this._a | 0;
                this._b = i + this._b | 0;
                this._c = n + this._c | 0;
                this._d = a + this._d | 0;
                this._e = o + this._e | 0;
                this._f = h + this._f | 0;
                this._g = u + this._g | 0;
                this._h = d + this._h | 0;
            };
            Sha256.prototype._hash = function() {
                var e = a.allocUnsafe(32);
                e.writeInt32BE(this._a, 0);
                e.writeInt32BE(this._b, 4);
                e.writeInt32BE(this._c, 8);
                e.writeInt32BE(this._d, 12);
                e.writeInt32BE(this._e, 16);
                e.writeInt32BE(this._f, 20);
                e.writeInt32BE(this._g, 24);
                e.writeInt32BE(this._h, 28);
                return e;
            };
            e.exports = Sha256;
        },
        7455: function(e, t, r) {
            var i = r(3782);
            var n = r(9934);
            var a = r(2858);
            var s = r(6911).Buffer;
            var o = new Array(160);
            function Sha384() {
                this.init();
                this._w = o;
                a.call(this, 128, 112);
            }
            i(Sha384, n);
            Sha384.prototype.init = function() {
                this._ah = 3418070365;
                this._bh = 1654270250;
                this._ch = 2438529370;
                this._dh = 355462360;
                this._eh = 1731405415;
                this._fh = 2394180231;
                this._gh = 3675008525;
                this._hh = 1203062813;
                this._al = 3238371032;
                this._bl = 914150663;
                this._cl = 812702999;
                this._dl = 4144912697;
                this._el = 4290775857;
                this._fl = 1750603025;
                this._gl = 1694076839;
                this._hl = 3204075428;
                return this;
            };
            Sha384.prototype._hash = function() {
                var e = s.allocUnsafe(48);
                function writeInt64BE(t, r, i) {
                    e.writeInt32BE(t, i);
                    e.writeInt32BE(r, i + 4);
                }
                writeInt64BE(this._ah, this._al, 0);
                writeInt64BE(this._bh, this._bl, 8);
                writeInt64BE(this._ch, this._cl, 16);
                writeInt64BE(this._dh, this._dl, 24);
                writeInt64BE(this._eh, this._el, 32);
                writeInt64BE(this._fh, this._fl, 40);
                return e;
            };
            e.exports = Sha384;
        },
        9934: function(e, t, r) {
            var i = r(3782);
            var n = r(2858);
            var a = r(6911).Buffer;
            var s = [
                1116352408,
                3609767458,
                1899447441,
                602891725,
                3049323471,
                3964484399,
                3921009573,
                2173295548,
                961987163,
                4081628472,
                1508970993,
                3053834265,
                2453635748,
                2937671579,
                2870763221,
                3664609560,
                3624381080,
                2734883394,
                310598401,
                1164996542,
                607225278,
                1323610764,
                1426881987,
                3590304994,
                1925078388,
                4068182383,
                2162078206,
                991336113,
                2614888103,
                633803317,
                3248222580,
                3479774868,
                3835390401,
                2666613458,
                4022224774,
                944711139,
                264347078,
                2341262773,
                604807628,
                2007800933,
                770255983,
                1495990901,
                1249150122,
                1856431235,
                1555081692,
                3175218132,
                1996064986,
                2198950837,
                2554220882,
                3999719339,
                2821834349,
                766784016,
                2952996808,
                2566594879,
                3210313671,
                3203337956,
                3336571891,
                1034457026,
                3584528711,
                2466948901,
                113926993,
                3758326383,
                338241895,
                168717936,
                666307205,
                1188179964,
                773529912,
                1546045734,
                1294757372,
                1522805485,
                1396182291,
                2643833823,
                1695183700,
                2343527390,
                1986661051,
                1014477480,
                2177026350,
                1206759142,
                2456956037,
                344077627,
                2730485921,
                1290863460,
                2820302411,
                3158454273,
                3259730800,
                3505952657,
                3345764771,
                106217008,
                3516065817,
                3606008344,
                3600352804,
                1432725776,
                4094571909,
                1467031594,
                275423344,
                851169720,
                430227734,
                3100823752,
                506948616,
                1363258195,
                659060556,
                3750685593,
                883997877,
                3785050280,
                958139571,
                3318307427,
                1322822218,
                3812723403,
                1537002063,
                2003034995,
                1747873779,
                3602036899,
                1955562222,
                1575990012,
                2024104815,
                1125592928,
                2227730452,
                2716904306,
                2361852424,
                442776044,
                2428436474,
                593698344,
                2756734187,
                3733110249,
                3204031479,
                2999351573,
                3329325298,
                3815920427,
                3391569614,
                3928383900,
                3515267271,
                566280711,
                3940187606,
                3454069534,
                4118630271,
                4000239992,
                116418474,
                1914138554,
                174292421,
                2731055270,
                289380356,
                3203993006,
                460393269,
                320620315,
                685471733,
                587496836,
                852142971,
                1086792851,
                1017036298,
                365543100,
                1126000580,
                2618297676,
                1288033470,
                3409855158,
                1501505948,
                4234509866,
                1607167915,
                987167468,
                1816402316,
                1246189591
            ];
            var o = new Array(160);
            function Sha512() {
                this.init();
                this._w = o;
                n.call(this, 128, 112);
            }
            i(Sha512, n);
            Sha512.prototype.init = function() {
                this._ah = 1779033703;
                this._bh = 3144134277;
                this._ch = 1013904242;
                this._dh = 2773480762;
                this._eh = 1359893119;
                this._fh = 2600822924;
                this._gh = 528734635;
                this._hh = 1541459225;
                this._al = 4089235720;
                this._bl = 2227873595;
                this._cl = 4271175723;
                this._dl = 1595750129;
                this._el = 2917565137;
                this._fl = 725511199;
                this._gl = 4215389547;
                this._hl = 327033209;
                return this;
            };
            function Ch(e, t, r) {
                return r ^ e & (t ^ r);
            }
            function maj(e, t, r) {
                return e & t | r & (e | t);
            }
            function sigma0(e, t) {
                return (e >>> 28 | t << 4) ^ (t >>> 2 | e << 30) ^ (t >>> 7 | e << 25);
            }
            function sigma1(e, t) {
                return (e >>> 14 | t << 18) ^ (e >>> 18 | t << 14) ^ (t >>> 9 | e << 23);
            }
            function Gamma0(e, t) {
                return (e >>> 1 | t << 31) ^ (e >>> 8 | t << 24) ^ e >>> 7;
            }
            function Gamma0l(e, t) {
                return (e >>> 1 | t << 31) ^ (e >>> 8 | t << 24) ^ (e >>> 7 | t << 25);
            }
            function Gamma1(e, t) {
                return (e >>> 19 | t << 13) ^ (t >>> 29 | e << 3) ^ e >>> 6;
            }
            function Gamma1l(e, t) {
                return (e >>> 19 | t << 13) ^ (t >>> 29 | e << 3) ^ (e >>> 6 | t << 26);
            }
            function getCarry(e, t) {
                return e >>> 0 < t >>> 0 ? 1 : 0;
            }
            Sha512.prototype._update = function(e) {
                var t = this._w;
                var r = this._ah | 0;
                var i = this._bh | 0;
                var n = this._ch | 0;
                var a = this._dh | 0;
                var o = this._eh | 0;
                var h = this._fh | 0;
                var u = this._gh | 0;
                var d = this._hh | 0;
                var c = this._al | 0;
                var l = this._bl | 0;
                var p = this._cl | 0;
                var v = this._dl | 0;
                var b = this._el | 0;
                var m = this._fl | 0;
                var y = this._gl | 0;
                var g = this._hl | 0;
                for(var _ = 0; _ < 32; _ += 2){
                    t[_] = e.readInt32BE(_ * 4);
                    t[_ + 1] = e.readInt32BE(_ * 4 + 4);
                }
                for(; _ < 160; _ += 2){
                    var w = t[_ - 15 * 2];
                    var M = t[_ - 15 * 2 + 1];
                    var B = Gamma0(w, M);
                    var E = Gamma0l(M, w);
                    w = t[_ - 2 * 2];
                    M = t[_ - 2 * 2 + 1];
                    var k = Gamma1(w, M);
                    var A = Gamma1l(M, w);
                    var N = t[_ - 7 * 2];
                    var P = t[_ - 7 * 2 + 1];
                    var x = t[_ - 16 * 2];
                    var I = t[_ - 16 * 2 + 1];
                    var C = E + P | 0;
                    var D = B + N + getCarry(C, E) | 0;
                    C = C + A | 0;
                    D = D + k + getCarry(C, A) | 0;
                    C = C + I | 0;
                    D = D + x + getCarry(C, I) | 0;
                    t[_] = D;
                    t[_ + 1] = C;
                }
                for(var T = 0; T < 160; T += 2){
                    D = t[T];
                    C = t[T + 1];
                    var j = maj(r, i, n);
                    var q = maj(c, l, p);
                    var O = sigma0(r, c);
                    var H = sigma0(c, r);
                    var L = sigma1(o, b);
                    var z = sigma1(b, o);
                    var F = s[T];
                    var U = s[T + 1];
                    var W = Ch(o, h, u);
                    var V = Ch(b, m, y);
                    var G = g + z | 0;
                    var J = d + L + getCarry(G, g) | 0;
                    G = G + V | 0;
                    J = J + W + getCarry(G, V) | 0;
                    G = G + U | 0;
                    J = J + F + getCarry(G, U) | 0;
                    G = G + C | 0;
                    J = J + D + getCarry(G, C) | 0;
                    var Z = H + q | 0;
                    var X = O + j + getCarry(Z, H) | 0;
                    d = u;
                    g = y;
                    u = h;
                    y = m;
                    h = o;
                    m = b;
                    b = v + G | 0;
                    o = a + J + getCarry(b, v) | 0;
                    a = n;
                    v = p;
                    n = i;
                    p = l;
                    i = r;
                    l = c;
                    c = G + Z | 0;
                    r = J + X + getCarry(c, G) | 0;
                }
                this._al = this._al + c | 0;
                this._bl = this._bl + l | 0;
                this._cl = this._cl + p | 0;
                this._dl = this._dl + v | 0;
                this._el = this._el + b | 0;
                this._fl = this._fl + m | 0;
                this._gl = this._gl + y | 0;
                this._hl = this._hl + g | 0;
                this._ah = this._ah + r + getCarry(this._al, c) | 0;
                this._bh = this._bh + i + getCarry(this._bl, l) | 0;
                this._ch = this._ch + n + getCarry(this._cl, p) | 0;
                this._dh = this._dh + a + getCarry(this._dl, v) | 0;
                this._eh = this._eh + o + getCarry(this._el, b) | 0;
                this._fh = this._fh + h + getCarry(this._fl, m) | 0;
                this._gh = this._gh + u + getCarry(this._gl, y) | 0;
                this._hh = this._hh + d + getCarry(this._hl, g) | 0;
            };
            Sha512.prototype._hash = function() {
                var e = a.allocUnsafe(64);
                function writeInt64BE(t, r, i) {
                    e.writeInt32BE(t, i);
                    e.writeInt32BE(r, i + 4);
                }
                writeInt64BE(this._ah, this._al, 0);
                writeInt64BE(this._bh, this._bl, 8);
                writeInt64BE(this._ch, this._cl, 16);
                writeInt64BE(this._dh, this._dl, 24);
                writeInt64BE(this._eh, this._el, 32);
                writeInt64BE(this._fh, this._fl, 40);
                writeInt64BE(this._gh, this._gl, 48);
                writeInt64BE(this._hh, this._hl, 56);
                return e;
            };
            e.exports = Sha512;
        },
        3704: function(e, t, r) {
            "use strict";
            var i = r(5055).Buffer;
            var n = i.isEncoding || function(e) {
                e = "" + e;
                switch(e && e.toLowerCase()){
                    case "hex":
                    case "utf8":
                    case "utf-8":
                    case "ascii":
                    case "binary":
                    case "base64":
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                    case "raw":
                        return true;
                    default:
                        return false;
                }
            };
            function _normalizeEncoding(e) {
                if (!e) return "utf8";
                var t;
                while(true){
                    switch(e){
                        case "utf8":
                        case "utf-8":
                            return "utf8";
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return "utf16le";
                        case "latin1":
                        case "binary":
                            return "latin1";
                        case "base64":
                        case "ascii":
                        case "hex":
                            return e;
                        default:
                            if (t) return;
                            e = ("" + e).toLowerCase();
                            t = true;
                    }
                }
            }
            function normalizeEncoding(e) {
                var t = _normalizeEncoding(e);
                if (typeof t !== "string" && (i.isEncoding === n || !n(e))) throw new Error("Unknown encoding: " + e);
                return t || e;
            }
            t.s = StringDecoder;
            function StringDecoder(e) {
                this.encoding = normalizeEncoding(e);
                var t;
                switch(this.encoding){
                    case "utf16le":
                        this.text = utf16Text;
                        this.end = utf16End;
                        t = 4;
                        break;
                    case "utf8":
                        this.fillLast = utf8FillLast;
                        t = 4;
                        break;
                    case "base64":
                        this.text = base64Text;
                        this.end = base64End;
                        t = 3;
                        break;
                    default:
                        this.write = simpleWrite;
                        this.end = simpleEnd;
                        return;
                }
                this.lastNeed = 0;
                this.lastTotal = 0;
                this.lastChar = i.allocUnsafe(t);
            }
            StringDecoder.prototype.write = function(e) {
                if (e.length === 0) return "";
                var t;
                var r;
                if (this.lastNeed) {
                    t = this.fillLast(e);
                    if (t === undefined) return "";
                    r = this.lastNeed;
                    this.lastNeed = 0;
                } else {
                    r = 0;
                }
                if (r < e.length) return t ? t + this.text(e, r) : this.text(e, r);
                return t || "";
            };
            StringDecoder.prototype.end = utf8End;
            StringDecoder.prototype.text = utf8Text;
            StringDecoder.prototype.fillLast = function(e) {
                if (this.lastNeed <= e.length) {
                    e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed);
                    return this.lastChar.toString(this.encoding, 0, this.lastTotal);
                }
                e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, e.length);
                this.lastNeed -= e.length;
            };
            function utf8CheckByte(e) {
                if (e <= 127) return 0;
                else if (e >> 5 === 6) return 2;
                else if (e >> 4 === 14) return 3;
                else if (e >> 3 === 30) return 4;
                return e >> 6 === 2 ? -1 : -2;
            }
            function utf8CheckIncomplete(e, t, r) {
                var i = t.length - 1;
                if (i < r) return 0;
                var n = utf8CheckByte(t[i]);
                if (n >= 0) {
                    if (n > 0) e.lastNeed = n - 1;
                    return n;
                }
                if (--i < r || n === -2) return 0;
                n = utf8CheckByte(t[i]);
                if (n >= 0) {
                    if (n > 0) e.lastNeed = n - 2;
                    return n;
                }
                if (--i < r || n === -2) return 0;
                n = utf8CheckByte(t[i]);
                if (n >= 0) {
                    if (n > 0) {
                        if (n === 2) n = 0;
                        else e.lastNeed = n - 3;
                    }
                    return n;
                }
                return 0;
            }
            function utf8CheckExtraBytes(e, t, r) {
                if ((t[0] & 192) !== 128) {
                    e.lastNeed = 0;
                    return "�";
                }
                if (e.lastNeed > 1 && t.length > 1) {
                    if ((t[1] & 192) !== 128) {
                        e.lastNeed = 1;
                        return "�";
                    }
                    if (e.lastNeed > 2 && t.length > 2) {
                        if ((t[2] & 192) !== 128) {
                            e.lastNeed = 2;
                            return "�";
                        }
                    }
                }
            }
            function utf8FillLast(e) {
                var t = this.lastTotal - this.lastNeed;
                var r = utf8CheckExtraBytes(this, e, t);
                if (r !== undefined) return r;
                if (this.lastNeed <= e.length) {
                    e.copy(this.lastChar, t, 0, this.lastNeed);
                    return this.lastChar.toString(this.encoding, 0, this.lastTotal);
                }
                e.copy(this.lastChar, t, 0, e.length);
                this.lastNeed -= e.length;
            }
            function utf8Text(e, t) {
                var r = utf8CheckIncomplete(this, e, t);
                if (!this.lastNeed) return e.toString("utf8", t);
                this.lastTotal = r;
                var i = e.length - (r - this.lastNeed);
                e.copy(this.lastChar, 0, i);
                return e.toString("utf8", t, i);
            }
            function utf8End(e) {
                var t = e && e.length ? this.write(e) : "";
                if (this.lastNeed) return t + "�";
                return t;
            }
            function utf16Text(e, t) {
                if ((e.length - t) % 2 === 0) {
                    var r = e.toString("utf16le", t);
                    if (r) {
                        var i = r.charCodeAt(r.length - 1);
                        if (i >= 55296 && i <= 56319) {
                            this.lastNeed = 2;
                            this.lastTotal = 4;
                            this.lastChar[0] = e[e.length - 2];
                            this.lastChar[1] = e[e.length - 1];
                            return r.slice(0, -1);
                        }
                    }
                    return r;
                }
                this.lastNeed = 1;
                this.lastTotal = 2;
                this.lastChar[0] = e[e.length - 1];
                return e.toString("utf16le", t, e.length - 1);
            }
            function utf16End(e) {
                var t = e && e.length ? this.write(e) : "";
                if (this.lastNeed) {
                    var r = this.lastTotal - this.lastNeed;
                    return t + this.lastChar.toString("utf16le", 0, r);
                }
                return t;
            }
            function base64Text(e, t) {
                var r = (e.length - t) % 3;
                if (r === 0) return e.toString("base64", t);
                this.lastNeed = 3 - r;
                this.lastTotal = 3;
                if (r === 1) {
                    this.lastChar[0] = e[e.length - 1];
                } else {
                    this.lastChar[0] = e[e.length - 2];
                    this.lastChar[1] = e[e.length - 1];
                }
                return e.toString("base64", t, e.length - r);
            }
            function base64End(e) {
                var t = e && e.length ? this.write(e) : "";
                if (this.lastNeed) return t + this.lastChar.toString("base64", 0, 3 - this.lastNeed);
                return t;
            }
            function simpleWrite(e) {
                return e.toString(this.encoding);
            }
            function simpleEnd(e) {
                return e && e.length ? this.write(e) : "";
            }
        },
        6769: function(e) {
            e.exports = deprecate;
            function deprecate(e, t) {
                if (config("noDeprecation")) {
                    return e;
                }
                var r = false;
                function deprecated() {
                    if (!r) {
                        if (config("throwDeprecation")) {
                            throw new Error(t);
                        } else if (config("traceDeprecation")) {
                            console.trace(t);
                        } else {
                            console.warn(t);
                        }
                        r = true;
                    }
                    return e.apply(this, arguments);
                }
                return deprecated;
            }
            function config(e) {
                try {
                    if (!global.localStorage) return false;
                } catch (e) {
                    return false;
                }
                var t = global.localStorage[e];
                if (null == t) return false;
                return String(t).toLowerCase() === "true";
            }
        },
        4300: function(e) {
            "use strict";
            e.exports = __turbopack_require__("[project]/node_modules/.pnpm/next@14.2.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/buffer/index.js [app-client] (ecmascript)");
        },
        6113: function(e) {
            "use strict";
            e.exports = __turbopack_require__("[project]/node_modules/.pnpm/next@14.2.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/crypto-browserify/index.js [app-client] (ecmascript)");
        },
        2361: function(e) {
            "use strict";
            e.exports = __turbopack_require__("[project]/node_modules/.pnpm/next@14.2.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/events/events.js [app-client] (ecmascript)");
        },
        2781: function(e) {
            "use strict";
            e.exports = __turbopack_require__("[project]/node_modules/.pnpm/next@14.2.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/stream-browserify/index.js [app-client] (ecmascript)");
        },
        1576: function(e) {
            "use strict";
            e.exports = __turbopack_require__("[project]/node_modules/.pnpm/next@14.2.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/string_decoder/string_decoder.js [app-client] (ecmascript)");
        },
        3837: function(e) {
            "use strict";
            e.exports = __turbopack_require__("[project]/node_modules/.pnpm/next@14.2.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/util/util.js [app-client] (ecmascript)");
        },
        6144: function(e) {
            "use strict";
            e.exports = __turbopack_require__("[project]/node_modules/.pnpm/next@14.2.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/vm-browserify/index.js [app-client] (ecmascript)");
        },
        5866: function(e) {
            "use strict";
            e.exports = JSON.parse('{"aes-128-ecb":{"cipher":"AES","key":128,"iv":0,"mode":"ECB","type":"block"},"aes-192-ecb":{"cipher":"AES","key":192,"iv":0,"mode":"ECB","type":"block"},"aes-256-ecb":{"cipher":"AES","key":256,"iv":0,"mode":"ECB","type":"block"},"aes-128-cbc":{"cipher":"AES","key":128,"iv":16,"mode":"CBC","type":"block"},"aes-192-cbc":{"cipher":"AES","key":192,"iv":16,"mode":"CBC","type":"block"},"aes-256-cbc":{"cipher":"AES","key":256,"iv":16,"mode":"CBC","type":"block"},"aes128":{"cipher":"AES","key":128,"iv":16,"mode":"CBC","type":"block"},"aes192":{"cipher":"AES","key":192,"iv":16,"mode":"CBC","type":"block"},"aes256":{"cipher":"AES","key":256,"iv":16,"mode":"CBC","type":"block"},"aes-128-cfb":{"cipher":"AES","key":128,"iv":16,"mode":"CFB","type":"stream"},"aes-192-cfb":{"cipher":"AES","key":192,"iv":16,"mode":"CFB","type":"stream"},"aes-256-cfb":{"cipher":"AES","key":256,"iv":16,"mode":"CFB","type":"stream"},"aes-128-cfb8":{"cipher":"AES","key":128,"iv":16,"mode":"CFB8","type":"stream"},"aes-192-cfb8":{"cipher":"AES","key":192,"iv":16,"mode":"CFB8","type":"stream"},"aes-256-cfb8":{"cipher":"AES","key":256,"iv":16,"mode":"CFB8","type":"stream"},"aes-128-cfb1":{"cipher":"AES","key":128,"iv":16,"mode":"CFB1","type":"stream"},"aes-192-cfb1":{"cipher":"AES","key":192,"iv":16,"mode":"CFB1","type":"stream"},"aes-256-cfb1":{"cipher":"AES","key":256,"iv":16,"mode":"CFB1","type":"stream"},"aes-128-ofb":{"cipher":"AES","key":128,"iv":16,"mode":"OFB","type":"stream"},"aes-192-ofb":{"cipher":"AES","key":192,"iv":16,"mode":"OFB","type":"stream"},"aes-256-ofb":{"cipher":"AES","key":256,"iv":16,"mode":"OFB","type":"stream"},"aes-128-ctr":{"cipher":"AES","key":128,"iv":16,"mode":"CTR","type":"stream"},"aes-192-ctr":{"cipher":"AES","key":192,"iv":16,"mode":"CTR","type":"stream"},"aes-256-ctr":{"cipher":"AES","key":256,"iv":16,"mode":"CTR","type":"stream"},"aes-128-gcm":{"cipher":"AES","key":128,"iv":12,"mode":"GCM","type":"auth"},"aes-192-gcm":{"cipher":"AES","key":192,"iv":12,"mode":"GCM","type":"auth"},"aes-256-gcm":{"cipher":"AES","key":256,"iv":12,"mode":"GCM","type":"auth"}}');
        },
        2908: function(e) {
            "use strict";
            e.exports = JSON.parse('{"sha224WithRSAEncryption":{"sign":"rsa","hash":"sha224","id":"302d300d06096086480165030402040500041c"},"RSA-SHA224":{"sign":"ecdsa/rsa","hash":"sha224","id":"302d300d06096086480165030402040500041c"},"sha256WithRSAEncryption":{"sign":"rsa","hash":"sha256","id":"3031300d060960864801650304020105000420"},"RSA-SHA256":{"sign":"ecdsa/rsa","hash":"sha256","id":"3031300d060960864801650304020105000420"},"sha384WithRSAEncryption":{"sign":"rsa","hash":"sha384","id":"3041300d060960864801650304020205000430"},"RSA-SHA384":{"sign":"ecdsa/rsa","hash":"sha384","id":"3041300d060960864801650304020205000430"},"sha512WithRSAEncryption":{"sign":"rsa","hash":"sha512","id":"3051300d060960864801650304020305000440"},"RSA-SHA512":{"sign":"ecdsa/rsa","hash":"sha512","id":"3051300d060960864801650304020305000440"},"RSA-SHA1":{"sign":"rsa","hash":"sha1","id":"3021300906052b0e03021a05000414"},"ecdsa-with-SHA1":{"sign":"ecdsa","hash":"sha1","id":""},"sha256":{"sign":"ecdsa","hash":"sha256","id":""},"sha224":{"sign":"ecdsa","hash":"sha224","id":""},"sha384":{"sign":"ecdsa","hash":"sha384","id":""},"sha512":{"sign":"ecdsa","hash":"sha512","id":""},"DSA-SHA":{"sign":"dsa","hash":"sha1","id":""},"DSA-SHA1":{"sign":"dsa","hash":"sha1","id":""},"DSA":{"sign":"dsa","hash":"sha1","id":""},"DSA-WITH-SHA224":{"sign":"dsa","hash":"sha224","id":""},"DSA-SHA224":{"sign":"dsa","hash":"sha224","id":""},"DSA-WITH-SHA256":{"sign":"dsa","hash":"sha256","id":""},"DSA-SHA256":{"sign":"dsa","hash":"sha256","id":""},"DSA-WITH-SHA384":{"sign":"dsa","hash":"sha384","id":""},"DSA-SHA384":{"sign":"dsa","hash":"sha384","id":""},"DSA-WITH-SHA512":{"sign":"dsa","hash":"sha512","id":""},"DSA-SHA512":{"sign":"dsa","hash":"sha512","id":""},"DSA-RIPEMD160":{"sign":"dsa","hash":"rmd160","id":""},"ripemd160WithRSA":{"sign":"rsa","hash":"rmd160","id":"3021300906052b2403020105000414"},"RSA-RIPEMD160":{"sign":"rsa","hash":"rmd160","id":"3021300906052b2403020105000414"},"md5WithRSAEncryption":{"sign":"rsa","hash":"md5","id":"3020300c06082a864886f70d020505000410"},"RSA-MD5":{"sign":"rsa","hash":"md5","id":"3020300c06082a864886f70d020505000410"}}');
        },
        9267: function(e) {
            "use strict";
            e.exports = JSON.parse('{"1.3.132.0.10":"secp256k1","1.3.132.0.33":"p224","1.2.840.10045.3.1.1":"p192","1.2.840.10045.3.1.7":"p256","1.3.132.0.34":"p384","1.3.132.0.35":"p521"}');
        },
        7992: function(e) {
            "use strict";
            e.exports = JSON.parse('{"modp1":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a63a3620ffffffffffffffff"},"modp2":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece65381ffffffffffffffff"},"modp5":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca237327ffffffffffffffff"},"modp14":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aacaa68ffffffffffffffff"},"modp15":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a93ad2caffffffffffffffff"},"modp16":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a92108011a723c12a787e6d788719a10bdba5b2699c327186af4e23c1a946834b6150bda2583e9ca2ad44ce8dbbbc2db04de8ef92e8efc141fbecaa6287c59474e6bc05d99b2964fa090c3a2233ba186515be7ed1f612970cee2d7afb81bdd762170481cd0069127d5b05aa993b4ea988d8fddc186ffb7dc90a6c08f4df435c934063199ffffffffffffffff"},"modp17":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a92108011a723c12a787e6d788719a10bdba5b2699c327186af4e23c1a946834b6150bda2583e9ca2ad44ce8dbbbc2db04de8ef92e8efc141fbecaa6287c59474e6bc05d99b2964fa090c3a2233ba186515be7ed1f612970cee2d7afb81bdd762170481cd0069127d5b05aa993b4ea988d8fddc186ffb7dc90a6c08f4df435c93402849236c3fab4d27c7026c1d4dcb2602646dec9751e763dba37bdf8ff9406ad9e530ee5db382f413001aeb06a53ed9027d831179727b0865a8918da3edbebcf9b14ed44ce6cbaced4bb1bdb7f1447e6cc254b332051512bd7af426fb8f401378cd2bf5983ca01c64b92ecf032ea15d1721d03f482d7ce6e74fef6d55e702f46980c82b5a84031900b1c9e59e7c97fbec7e8f323a97a7e36cc88be0f1d45b7ff585ac54bd407b22b4154aacc8f6d7ebf48e1d814cc5ed20f8037e0a79715eef29be32806a1d58bb7c5da76f550aa3d8a1fbff0eb19ccb1a313d55cda56c9ec2ef29632387fe8d76e3c0468043e8f663f4860ee12bf2d5b0b7474d6e694f91e6dcc4024ffffffffffffffff"},"modp18":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a92108011a723c12a787e6d788719a10bdba5b2699c327186af4e23c1a946834b6150bda2583e9ca2ad44ce8dbbbc2db04de8ef92e8efc141fbecaa6287c59474e6bc05d99b2964fa090c3a2233ba186515be7ed1f612970cee2d7afb81bdd762170481cd0069127d5b05aa993b4ea988d8fddc186ffb7dc90a6c08f4df435c93402849236c3fab4d27c7026c1d4dcb2602646dec9751e763dba37bdf8ff9406ad9e530ee5db382f413001aeb06a53ed9027d831179727b0865a8918da3edbebcf9b14ed44ce6cbaced4bb1bdb7f1447e6cc254b332051512bd7af426fb8f401378cd2bf5983ca01c64b92ecf032ea15d1721d03f482d7ce6e74fef6d55e702f46980c82b5a84031900b1c9e59e7c97fbec7e8f323a97a7e36cc88be0f1d45b7ff585ac54bd407b22b4154aacc8f6d7ebf48e1d814cc5ed20f8037e0a79715eef29be32806a1d58bb7c5da76f550aa3d8a1fbff0eb19ccb1a313d55cda56c9ec2ef29632387fe8d76e3c0468043e8f663f4860ee12bf2d5b0b7474d6e694f91e6dbe115974a3926f12fee5e438777cb6a932df8cd8bec4d073b931ba3bc832b68d9dd300741fa7bf8afc47ed2576f6936ba424663aab639c5ae4f5683423b4742bf1c978238f16cbe39d652de3fdb8befc848ad922222e04a4037c0713eb57a81a23f0c73473fc646cea306b4bcbc8862f8385ddfa9d4b7fa2c087e879683303ed5bdd3a062b3cf5b3a278a66d2a13f83f44f82ddf310ee074ab6a364597e899a0255dc164f31cc50846851df9ab48195ded7ea1b1d510bd7ee74d73faf36bc31ecfa268359046f4eb879f924009438b481c6cd7889a002ed5ee382bc9190da6fc026e479558e4475677e9aa9e3050e2765694dfc81f56e880b96e7160c980dd98edd3dfffffffffffffffff"}}');
        },
        2531: function(e) {
            "use strict";
            e.exports = {
                i8: "6.5.3"
            };
        },
        2510: function(e) {
            "use strict";
            e.exports = JSON.parse('{"2.16.840.1.101.3.4.1.1":"aes-128-ecb","2.16.840.1.101.3.4.1.2":"aes-128-cbc","2.16.840.1.101.3.4.1.3":"aes-128-ofb","2.16.840.1.101.3.4.1.4":"aes-128-cfb","2.16.840.1.101.3.4.1.21":"aes-192-ecb","2.16.840.1.101.3.4.1.22":"aes-192-cbc","2.16.840.1.101.3.4.1.23":"aes-192-ofb","2.16.840.1.101.3.4.1.24":"aes-192-cfb","2.16.840.1.101.3.4.1.41":"aes-256-ecb","2.16.840.1.101.3.4.1.42":"aes-256-cbc","2.16.840.1.101.3.4.1.43":"aes-256-ofb","2.16.840.1.101.3.4.1.44":"aes-256-cfb"}');
        }
    };
    var t = {};
    function __nccwpck_require__(r) {
        var i = t[r];
        if (i !== undefined) {
            return i.exports;
        }
        var n = t[r] = {
            id: r,
            loaded: false,
            exports: {}
        };
        var a = true;
        try {
            e[r].call(n.exports, n, n.exports, __nccwpck_require__);
            a = false;
        } finally{
            if (a) delete t[r];
        }
        n.loaded = true;
        return n.exports;
    }
    !function() {
        __nccwpck_require__.nmd = function(e) {
            e.paths = [];
            if (!e.children) e.children = [];
            return e;
        };
    }();
    if (typeof __nccwpck_require__ !== "undefined") __nccwpck_require__.ab = __dirname + "/";
    var r = {};
    !function() {
        "use strict";
        var e = r;
        e.randomBytes = e.rng = e.pseudoRandomBytes = e.prng = __nccwpck_require__(7223);
        e.createHash = e.Hash = __nccwpck_require__(9739);
        e.createHmac = e.Hmac = __nccwpck_require__(4873);
        var t = __nccwpck_require__(9276);
        var i = Object.keys(t);
        var n = [
            "sha1",
            "sha224",
            "sha256",
            "sha384",
            "sha512",
            "md5",
            "rmd160"
        ].concat(i);
        e.getHashes = function() {
            return n;
        };
        var a = __nccwpck_require__(4978);
        e.pbkdf2 = a.pbkdf2;
        e.pbkdf2Sync = a.pbkdf2Sync;
        var s = __nccwpck_require__(8996);
        e.Cipher = s.Cipher;
        e.createCipher = s.createCipher;
        e.Cipheriv = s.Cipheriv;
        e.createCipheriv = s.createCipheriv;
        e.Decipher = s.Decipher;
        e.createDecipher = s.createDecipher;
        e.Decipheriv = s.Decipheriv;
        e.createDecipheriv = s.createDecipheriv;
        e.getCiphers = s.getCiphers;
        e.listCiphers = s.listCiphers;
        var o = __nccwpck_require__(6587);
        e.DiffieHellmanGroup = o.DiffieHellmanGroup;
        e.createDiffieHellmanGroup = o.createDiffieHellmanGroup;
        e.getDiffieHellman = o.getDiffieHellman;
        e.createDiffieHellman = o.createDiffieHellman;
        e.DiffieHellman = o.DiffieHellman;
        var h = __nccwpck_require__(4078);
        e.createSign = h.createSign;
        e.Sign = h.Sign;
        e.createVerify = h.createVerify;
        e.Verify = h.Verify;
        e.createECDH = __nccwpck_require__(9942);
        var u = __nccwpck_require__(9783);
        e.publicEncrypt = u.publicEncrypt;
        e.privateEncrypt = u.privateEncrypt;
        e.publicDecrypt = u.publicDecrypt;
        e.privateDecrypt = u.privateDecrypt;
        var d = __nccwpck_require__(6445);
        e.randomFill = d.randomFill;
        e.randomFillSync = d.randomFillSync;
        e.createCredentials = function() {
            throw new Error([
                "sorry, createCredentials is not implemented yet",
                "we accept pull requests",
                "https://github.com/crypto-browserify/crypto-browserify"
            ].join("\n"));
        };
        e.constants = {
            DH_CHECK_P_NOT_SAFE_PRIME: 2,
            DH_CHECK_P_NOT_PRIME: 1,
            DH_UNABLE_TO_CHECK_GENERATOR: 4,
            DH_NOT_SUITABLE_GENERATOR: 8,
            NPN_ENABLED: 1,
            ALPN_ENABLED: 1,
            RSA_PKCS1_PADDING: 1,
            RSA_SSLV23_PADDING: 2,
            RSA_NO_PADDING: 3,
            RSA_PKCS1_OAEP_PADDING: 4,
            RSA_X931_PADDING: 5,
            RSA_PKCS1_PSS_PADDING: 6,
            POINT_CONVERSION_COMPRESSED: 2,
            POINT_CONVERSION_UNCOMPRESSED: 4,
            POINT_CONVERSION_HYBRID: 6
        };
    }();
    module.exports = r;
})();

}.call(this) }),
}]);

//# sourceMappingURL=986da_next_dist_compiled_crypto-browserify_index_210962.js.map