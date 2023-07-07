/*!
 * jQuery JavaScript Library v3.4.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2019-05-01T21:04Z
 */
function FnSetEndorsementControls(n, t, i, r, u) {
    try {
        var f = [];
        $("form").each(function() {
            this.id && f.push(this.id)
        });
        for (key in f)
            f && $("#" + f[key] + " input,textarea,select,button").prop("disabled", !0);
        $.when(GetActiveControlList(n, t, i, r, u)).then(function(n) {
            var t = $.parseJSON(n);
            for (key in t)
                $(".jsgrid-insert-mode-button").off("click"),
                $(".jsgrid-edit-button").off("click"),
                $(".jsgrid-filter-row select").prop("disabled", !1),
                $(".jsgrid-filter-row textarea").prop("disabled", !1),
                $(".close").prop("disabled", !1),
                $("#" + t[key]).prop("disabled", !1)
        })
    } catch (e) {
        ShowHtmlMessage("Exception", e.message, "error")
    }
}
function GetActiveControlList(n, t, i, r, u) {
    try {
        var f = jQuery.Deferred();
        return n && t && $.ajax({
            type: "GET",
            contentType: "application/json",
            dataType: "json",
            url: "/Layout/GetControlList",
            data: {
                pArea: n,
                pController: t,
                pModuleName: i,
                pPolEndtType: r,
                pPolRecType: u
            },
            success: function(n) {
                f.resolve(n)
            },
            error: function(n) {
                ShowHtmlMessage("Exception", JSON.stringify(n), "error")
            }
        }),
        f.promise()
    } catch (e) {
        ShowHtmlMessage("Exception", e.message, "error")
    }
}
(function(n, t) {
    "use strict";
    typeof module == "object" && typeof module.exports == "object" ? module.exports = n.document ? t(n, !0) : function(n) {
        if (!n.document)
            throw new Error("jQuery requires a window with a document");
        return t(n)
    }
    : t(n)
}
)(typeof window != "undefined" ? window : this, function(n, t) {
    "use strict";
    function lr(n, t, i) {
        i = i || f;
        var r, e, u = i.createElement("script");
        if (u.text = n,
        t)
            for (r in we)
                e = t[r] || t.getAttribute && t.getAttribute(r),
                e && u.setAttribute(r, e);
        i.head.appendChild(u).parentNode.removeChild(u)
    }
    function tt(n) {
        return n == null ? n + "" : typeof n == "object" || typeof n == "function" ? fi[ou.call(n)] || "object" : typeof n
    }
    function li(n) {
        var t = !!n && "length"in n && n.length
          , i = tt(n);
        return u(n) || ot(n) ? !1 : i === "array" || t === 0 || typeof t == "number" && t > 0 && t - 1 in n
    }
    function l(n, t) {
        return n.nodeName && n.nodeName.toLowerCase() === t.toLowerCase()
    }
    function ai(n, t, r) {
        return u(t) ? i.grep(n, function(n, i) {
            return !!t.call(n, i, n) !== r
        }) : t.nodeType ? i.grep(n, function(n) {
            return n === t !== r
        }) : typeof t != "string" ? i.grep(n, function(n) {
            return ui.call(t, n) > -1 !== r
        }) : i.filter(t, n, r)
    }
    function ar(n, t) {
        while ((n = n[t]) && n.nodeType !== 1)
            ;
        return n
    }
    function ne(n) {
        var t = {};
        return i.each(n.match(v) || [], function(n, i) {
            t[i] = !0
        }),
        t
    }
    function it(n) {
        return n
    }
    function ni(n) {
        throw n;
    }
    function vr(n, t, i, r) {
        var f;
        try {
            n && u(f = n.promise) ? f.call(n).done(t).fail(i) : n && u(f = n.then) ? f.call(n, t, i) : t.apply(undefined, [n].slice(r))
        } catch (n) {
            i.apply(undefined, [n])
        }
    }
    function ti() {
        f.removeEventListener("DOMContentLoaded", ti);
        n.removeEventListener("load", ti);
        i.ready()
    }
    function te(n, t) {
        return t.toUpperCase()
    }
    function y(n) {
        return n.replace(ke, "ms-").replace(de, te)
    }
    function vt() {
        this.expando = i.expando + vt.uid++
    }
    function ie(n) {
        return n === "true" ? !0 : n === "false" ? !1 : n === "null" ? null : n === +n + "" ? +n : ge.test(n) ? JSON.parse(n) : n
    }
    function yr(n, t, i) {
        var r;
        if (i === undefined && n.nodeType === 1)
            if (r = "data-" + t.replace(no, "-$&").toLowerCase(),
            i = n.getAttribute(r),
            typeof i == "string") {
                try {
                    i = ie(i)
                } catch (u) {}
                h.set(n, t, i)
            } else
                i = undefined;
        return i
    }
    function pr(n, t, r, u) {
        var s, h, c = 20, l = u ? function() {
            return u.cur()
        }
        : function() {
            return i.css(n, t, "")
        }
        , o = l(), e = r && r[3] || (i.cssNumber[t] ? "" : "px"), f = n.nodeType && (i.cssNumber[t] || e !== "px" && +o) && bt.exec(i.css(n, t));
        if (f && f[3] !== e) {
            for (o = o / 2,
            e = e || f[3],
            f = +o || 1; c--; )
                i.style(n, t, f + e),
                (1 - h) * (1 - (h = l() / o || .5)) <= 0 && (c = 0),
                f = f / h;
            f = f * 2;
            i.style(n, t, f + e);
            r = r || []
        }
        return r && (f = +f || +o || 0,
        s = r[1] ? f + (r[1] + 1) * r[2] : +r[2],
        u && (u.unit = e,
        u.start = f,
        u.end = s)),
        s
    }
    function re(n) {
        var r, f = n.ownerDocument, u = n.nodeName, t = rr[u];
        return t ? t : (r = f.body.appendChild(f.createElement(u)),
        t = i.css(r, "display"),
        r.parentNode.removeChild(r),
        t === "none" && (t = "block"),
        rr[u] = t,
        t)
    }
    function rt(n, t) {
        for (var e, u, f = [], i = 0, o = n.length; i < o; i++)
            (u = n[i],
            u.style) && (e = u.style.display,
            t ? (e === "none" && (f[i] = r.get(u, "display") || null,
            f[i] || (u.style.display = "")),
            u.style.display === "" && wt(u) && (f[i] = re(u))) : e !== "none" && (f[i] = "none",
            r.set(u, "display", e)));
        for (i = 0; i < o; i++)
            f[i] != null && (n[i].style.display = f[i]);
        return n
    }
    function o(n, t) {
        var r;
        return (r = typeof n.getElementsByTagName != "undefined" ? n.getElementsByTagName(t || "*") : typeof n.querySelectorAll != "undefined" ? n.querySelectorAll(t || "*") : [],
        t === undefined || t && l(n, t)) ? i.merge([n], r) : r
    }
    function vi(n, t) {
        for (var i = 0, u = n.length; i < u; i++)
            r.set(n[i], "globalEval", !t || r.get(t[i], "globalEval"))
    }
    function wr(n, t, r, u, f) {
        for (var e, s, p, a, w, v, h = t.createDocumentFragment(), y = [], l = 0, b = n.length; l < b; l++)
            if (e = n[l],
            e || e === 0)
                if (tt(e) === "object")
                    i.merge(y, e.nodeType ? [e] : e);
                else if (wu.test(e)) {
                    for (s = s || h.appendChild(t.createElement("div")),
                    p = (hf.exec(e) || ["", ""])[1].toLowerCase(),
                    a = c[p] || c._default,
                    s.innerHTML = a[1] + i.htmlPrefilter(e) + a[2],
                    v = a[0]; v--; )
                        s = s.lastChild;
                    i.merge(y, s.childNodes);
                    s = h.firstChild;
                    s.textContent = ""
                } else
                    y.push(t.createTextNode(e));
        for (h.textContent = "",
        l = 0; e = y[l++]; ) {
            if (u && i.inArray(e, u) > -1) {
                f && f.push(e);
                continue
            }
            if (w = at(e),
            s = o(h.appendChild(e), "script"),
            w && vi(s),
            r)
                for (v = 0; e = s[v++]; )
                    cf.test(e.type || "") && r.push(e)
        }
        return h
    }
    function ut() {
        return !0
    }
    function ft() {
        return !1
    }
    function ue(n, t) {
        return n === fe() == (t === "focus")
    }
    function fe() {
        try {
            return f.activeElement
        } catch (n) {}
    }
    function yi(n, t, r, u, f, e) {
        var o, s;
        if (typeof t == "object") {
            typeof r != "string" && (u = u || r,
            r = undefined);
            for (s in t)
                yi(n, s, r, u, t[s], e);
            return n
        }
        if (u == null && f == null ? (f = r,
        u = r = undefined) : f == null && (typeof r == "string" ? (f = u,
        u = undefined) : (f = u,
        u = r,
        r = undefined)),
        f === !1)
            f = ft;
        else if (!f)
            return n;
        return e === 1 && (o = f,
        f = function(n) {
            return i().off(n),
            o.apply(this, arguments)
        }
        ,
        f.guid = o.guid || (o.guid = i.guid++)),
        n.each(function() {
            i.event.add(this, t, f, u, r)
        })
    }
    function ii(n, t, u) {
        if (!u) {
            r.get(n, t) === undefined && i.event.add(n, t, ut);
            return
        }
        r.set(n, t, !1);
        i.event.add(n, t, {
            namespace: !1,
            handler: function(n) {
                var o, e, f = r.get(this, t);
                if (n.isTrigger & 1 && this[t]) {
                    if (f.length)
                        (i.event.special[t] || {}).delegateType && n.stopPropagation();
                    else if (f = b.call(arguments),
                    r.set(this, t, f),
                    o = u(this, t),
                    this[t](),
                    e = r.get(this, t),
                    f !== e || o ? r.set(this, t, !1) : e = {},
                    f !== e)
                        return n.stopImmediatePropagation(),
                        n.preventDefault(),
                        e.value
                } else
                    f.length && (r.set(this, t, {
                        value: i.event.trigger(i.extend(f[0], i.Event.prototype), f.slice(1), this)
                    }),
                    n.stopImmediatePropagation())
            }
        })
    }
    function br(n, t) {
        return l(n, "table") && l(t.nodeType !== 11 ? t : t.firstChild, "tr") ? i(n).children("tbody")[0] || n : n
    }
    function ee(n) {
        return n.type = (n.getAttribute("type") !== null) + "/" + n.type,
        n
    }
    function oe(n) {
        return (n.type || "").slice(0, 5) === "true/" ? n.type = n.type.slice(5) : n.removeAttribute("type"),
        n
    }
    function kr(n, t) {
        var f, c, e, o, s, l, a, u;
        if (t.nodeType === 1) {
            if (r.hasData(n) && (o = r.access(n),
            s = r.set(t, o),
            u = o.events,
            u)) {
                delete s.handle;
                s.events = {};
                for (e in u)
                    for (f = 0,
                    c = u[e].length; f < c; f++)
                        i.event.add(t, e, u[e][f])
            }
            h.hasData(n) && (l = h.access(n),
            a = i.extend({}, l),
            h.set(t, a))
        }
    }
    function se(n, t) {
        var i = t.nodeName.toLowerCase();
        i === "input" && dt.test(n.type) ? t.checked = n.checked : (i === "input" || i === "textarea") && (t.defaultValue = n.defaultValue)
    }
    function et(n, t, f, s) {
        t = eu.apply([], t);
        var a, w, l, v, h, b, c = 0, y = n.length, d = y - 1, p = t[0], k = u(p);
        if (k || y > 1 && typeof p == "string" && !e.checkClone && eo.test(p))
            return n.each(function(i) {
                var r = n.eq(i);
                k && (t[0] = p.call(this, i, r.html()));
                et(r, t, f, s)
            });
        if (y && (a = wr(t, n[0].ownerDocument, !1, n, s),
        w = a.firstChild,
        a.childNodes.length === 1 && (a = w),
        w || s)) {
            for (l = i.map(o(a, "script"), ee),
            v = l.length; c < y; c++)
                h = a,
                c !== d && (h = i.clone(h, !0, !0),
                v && i.merge(l, o(h, "script"))),
                f.call(n[c], h, c);
            if (v)
                for (b = l[l.length - 1].ownerDocument,
                i.map(l, oe),
                c = 0; c < v; c++)
                    h = l[c],
                    cf.test(h.type || "") && !r.access(h, "globalEval") && i.contains(b, h) && (h.src && (h.type || "").toLowerCase() !== "module" ? i._evalUrl && !h.noModule && i._evalUrl(h.src, {
                        nonce: h.nonce || h.getAttribute("nonce")
                    }) : lr(h.textContent.replace(oo, ""), h, b))
        }
        return n
    }
    function dr(n, t, r) {
        for (var u, e = t ? i.filter(t, n) : n, f = 0; (u = e[f]) != null; f++)
            r || u.nodeType !== 1 || i.cleanData(o(u)),
            u.parentNode && (r && at(u) && vi(o(u, "script")),
            u.parentNode.removeChild(u));
        return n
    }
    function yt(n, t, r) {
        var o, s, h, u, f = n.style;
        return r = r || ci(n),
        r && (u = r.getPropertyValue(t) || r[t],
        u !== "" || at(n) || (u = i.style(n, t)),
        !e.pixelBoxStyles() && or.test(u) && so.test(t) && (o = f.width,
        s = f.minWidth,
        h = f.maxWidth,
        f.minWidth = f.maxWidth = f.width = u,
        u = r.width,
        f.width = o,
        f.minWidth = s,
        f.maxWidth = h)),
        u !== undefined ? u + "" : u
    }
    function gr(n, t) {
        return {
            get: function() {
                if (n()) {
                    delete this.get;
                    return
                }
                return (this.get = t).apply(this, arguments)
            }
        }
    }
    function he(n) {
        for (var i = n[0].toUpperCase() + n.slice(1), t = af.length; t--; )
            if (n = af[t] + i,
            n in vf)
                return n
    }
    function pi(n) {
        var t = i.cssProps[n] || yf[n];
        return t ? t : n in vf ? n : yf[n] = he(n) || n
    }
    function nu(n, t, i) {
        var r = bt.exec(t);
        return r ? Math.max(0, r[2] - (i || 0)) + (r[3] || "px") : t
    }
    function wi(n, t, r, u, f, e) {
        var o = t === "width" ? 1 : 0
          , h = 0
          , s = 0;
        if (r === (u ? "border" : "content"))
            return 0;
        for (; o < 4; o += 2)
            r === "margin" && (s += i.css(n, r + w[o], !0, f)),
            u ? (r === "content" && (s -= i.css(n, "padding" + w[o], !0, f)),
            r !== "margin" && (s -= i.css(n, "border" + w[o] + "Width", !0, f))) : (s += i.css(n, "padding" + w[o], !0, f),
            r !== "padding" ? s += i.css(n, "border" + w[o] + "Width", !0, f) : h += i.css(n, "border" + w[o] + "Width", !0, f));
        return !u && e >= 0 && (s += Math.max(0, Math.ceil(n["offset" + t[0].toUpperCase() + t.slice(1)] - e - s - h - .5)) || 0),
        s
    }
    function tu(n, t, r) {
        var f = ci(n)
          , c = !e.boxSizingReliable() || r
          , o = c && i.css(n, "boxSizing", !1, f) === "border-box"
          , s = o
          , u = yt(n, t, f)
          , h = "offset" + t[0].toUpperCase() + t.slice(1);
        if (or.test(u)) {
            if (!r)
                return u;
            u = "auto"
        }
        return (!e.boxSizingReliable() && o || u === "auto" || !parseFloat(u) && i.css(n, "display", !1, f) === "inline") && n.getClientRects().length && (o = i.css(n, "boxSizing", !1, f) === "border-box",
        s = h in n,
        s && (u = n[h])),
        u = parseFloat(u) || 0,
        u + wi(n, t, r || (o ? "border" : "content"), s, f, u) + "px"
    }
    function s(n, t, i, r, u) {
        return new s.prototype.init(n,t,i,r,u)
    }
    function bi() {
        si && (f.hidden === !1 && n.requestAnimationFrame ? n.requestAnimationFrame(bi) : n.setTimeout(bi, i.fx.interval),
        i.fx.tick())
    }
    function iu() {
        return n.setTimeout(function() {
            st = undefined
        }),
        st = Date.now()
    }
    function ri(n, t) {
        var r, u = 0, i = {
            height: n
        };
        for (t = t ? 1 : 0; u < 4; u += 2 - t)
            r = w[u],
            i["margin" + r] = i["padding" + r] = n;
        return t && (i.opacity = i.width = n),
        i
    }
    function ru(n, t, i) {
        for (var u, f = (a.tweeners[t] || []).concat(a.tweeners["*"]), r = 0, e = f.length; r < e; r++)
            if (u = f[r].call(i, t, n))
                return u
    }
    function ce(n, t, u) {
        var f, y, w, c, b, s, o, l, k = "width"in t || "height"in t, v = this, p = {}, h = n.style, a = n.nodeType && wt(n), e = r.get(n, "fxshow");
        u.queue || (c = i._queueHooks(n, "fx"),
        c.unqueued == null && (c.unqueued = 0,
        b = c.empty.fire,
        c.empty.fire = function() {
            c.unqueued || b()
        }
        ),
        c.unqueued++,
        v.always(function() {
            v.always(function() {
                c.unqueued--;
                i.queue(n, "fx").length || c.empty.fire()
            })
        }));
        for (f in t)
            if (y = t[f],
            bu.test(y)) {
                if (delete t[f],
                w = w || y === "toggle",
                y === (a ? "hide" : "show"))
                    if (y === "show" && e && e[f] !== undefined)
                        a = !0;
                    else
                        continue;
                p[f] = e && e[f] || i.style(n, f)
            }
        if (s = !i.isEmptyObject(t),
        s || !i.isEmptyObject(p)) {
            k && n.nodeType === 1 && (u.overflow = [h.overflow, h.overflowX, h.overflowY],
            o = e && e.display,
            o == null && (o = r.get(n, "display")),
            l = i.css(n, "display"),
            l === "none" && (o ? l = o : (rt([n], !0),
            o = n.style.display || o,
            l = i.css(n, "display"),
            rt([n]))),
            (l === "inline" || l === "inline-block" && o != null) && i.css(n, "float") === "none" && (s || (v.done(function() {
                h.display = o
            }),
            o == null && (l = h.display,
            o = l === "none" ? "" : l)),
            h.display = "inline-block"));
            u.overflow && (h.overflow = "hidden",
            v.always(function() {
                h.overflow = u.overflow[0];
                h.overflowX = u.overflow[1];
                h.overflowY = u.overflow[2]
            }));
            s = !1;
            for (f in p)
                s || (e ? "hidden"in e && (a = e.hidden) : e = r.access(n, "fxshow", {
                    display: o
                }),
                w && (e.hidden = !a),
                a && rt([n], !0),
                v.done(function() {
                    a || rt([n]);
                    r.remove(n, "fxshow");
                    for (f in p)
                        i.style(n, f, p[f])
                })),
                s = ru(a ? e[f] : 0, f, v),
                f in e || (e[f] = s.start,
                a && (s.end = s.start,
                s.start = 0))
        }
    }
    function le(n, t) {
        var r, f, e, u, o;
        for (r in n)
            if (f = y(r),
            e = t[f],
            u = n[r],
            Array.isArray(u) && (e = u[1],
            u = n[r] = u[0]),
            r !== f && (n[f] = u,
            delete n[r]),
            o = i.cssHooks[f],
            o && "expand"in o) {
                u = o.expand(u);
                delete n[f];
                for (r in u)
                    r in n || (n[r] = u[r],
                    t[r] = e)
            } else
                t[f] = e
    }
    function a(n, t, r) {
        var o, s, h = 0, v = a.prefilters.length, e = i.Deferred().always(function() {
            delete l.elem
        }), l = function() {
            if (s)
                return !1;
            for (var o = st || iu(), t = Math.max(0, f.startTime + f.duration - o), h = t / f.duration || 0, i = 1 - h, r = 0, u = f.tweens.length; r < u; r++)
                f.tweens[r].run(i);
            return (e.notifyWith(n, [f, i, t]),
            i < 1 && u) ? t : (u || e.notifyWith(n, [f, 1, 0]),
            e.resolveWith(n, [f]),
            !1)
        }, f = e.promise({
            elem: n,
            props: i.extend({}, t),
            opts: i.extend(!0, {
                specialEasing: {},
                easing: i.easing._default
            }, r),
            originalProperties: t,
            originalOptions: r,
            startTime: st || iu(),
            duration: r.duration,
            tweens: [],
            createTween: function(t, r) {
                var u = i.Tween(n, f.opts, t, r, f.opts.specialEasing[t] || f.opts.easing);
                return f.tweens.push(u),
                u
            },
            stop: function(t) {
                var i = 0
                  , r = t ? f.tweens.length : 0;
                if (s)
                    return this;
                for (s = !0; i < r; i++)
                    f.tweens[i].run(1);
                return t ? (e.notifyWith(n, [f, 1, 0]),
                e.resolveWith(n, [f, t])) : e.rejectWith(n, [f, t]),
                this
            }
        }), c = f.props;
        for (le(c, f.opts.specialEasing); h < v; h++)
            if (o = a.prefilters[h].call(f, n, c, f.opts),
            o)
                return u(o.stop) && (i._queueHooks(f.elem, f.opts.queue).stop = o.stop.bind(o)),
                o;
        return i.map(c, ru, f),
        u(f.opts.start) && f.opts.start.call(n, f),
        f.progress(f.opts.progress).done(f.opts.done, f.opts.complete).fail(f.opts.fail).always(f.opts.always),
        i.fx.timer(i.extend(l, {
            elem: n,
            anim: f,
            queue: f.opts.queue
        })),
        f
    }
    function d(n) {
        var t = n.match(v) || [];
        return t.join(" ")
    }
    function g(n) {
        return n.getAttribute && n.getAttribute("class") || ""
    }
    function ki(n) {
        return Array.isArray(n) ? n : typeof n == "string" ? n.match(v) || [] : []
    }
    function di(n, t, r, u) {
        var f;
        if (Array.isArray(t))
            i.each(t, function(t, i) {
                r || lo.test(n) ? u(n, i) : di(n + "[" + (typeof i == "object" && i != null ? t : "") + "]", i, r, u)
            });
        else if (r || tt(t) !== "object")
            u(n, t);
        else
            for (f in t)
                di(n + "[" + f + "]", t[f], r, u)
    }
    function uu(n) {
        return function(t, i) {
            typeof t != "string" && (i = t,
            t = "*");
            var r, f = 0, e = t.toLowerCase().match(v) || [];
            if (u(i))
                while (r = e[f++])
                    r[0] === "+" ? (r = r.slice(1) || "*",
                    (n[r] = n[r] || []).unshift(i)) : (n[r] = n[r] || []).push(i)
        }
    }
    function fu(n, t, r, u) {
        function f(s) {
            var h;
            return e[s] = !0,
            i.each(n[s] || [], function(n, i) {
                var s = i(t, r, u);
                if (typeof s != "string" || o || e[s]) {
                    if (o)
                        return !(h = s)
                } else
                    return t.dataTypes.unshift(s),
                    f(s),
                    !1
            }),
            h
        }
        var e = {}
          , o = n === hr;
        return f(t.dataTypes[0]) || !e["*"] && f("*")
    }
    function gi(n, t) {
        var r, u, f = i.ajaxSettings.flatOptions || {};
        for (r in t)
            t[r] !== undefined && ((f[r] ? n : u || (u = {}))[r] = t[r]);
        return u && i.extend(!0, n, u),
        n
    }
    function ae(n, t, i) {
        for (var e, u, f, o, s = n.contents, r = n.dataTypes; r[0] === "*"; )
            r.shift(),
            e === undefined && (e = n.mimeType || t.getResponseHeader("Content-Type"));
        if (e)
            for (u in s)
                if (s[u] && s[u].test(e)) {
                    r.unshift(u);
                    break
                }
        if (r[0]in i)
            f = r[0];
        else {
            for (u in i) {
                if (!r[0] || n.converters[u + " " + r[0]]) {
                    f = u;
                    break
                }
                o || (o = u)
            }
            f = f || o
        }
        if (f)
            return f !== r[0] && r.unshift(f),
            i[f]
    }
    function ve(n, t, i, r) {
        var h, u, f, s, e, o = {}, c = n.dataTypes.slice();
        if (c[1])
            for (f in n.converters)
                o[f.toLowerCase()] = n.converters[f];
        for (u = c.shift(); u; )
            if (n.responseFields[u] && (i[n.responseFields[u]] = t),
            !e && r && n.dataFilter && (t = n.dataFilter(t, n.dataType)),
            e = u,
            u = c.shift(),
            u)
                if (u === "*")
                    u = e;
                else if (e !== "*" && e !== u) {
                    if (f = o[e + " " + u] || o["* " + u],
                    !f)
                        for (h in o)
                            if (s = h.split(" "),
                            s[1] === u && (f = o[e + " " + s[0]] || o["* " + s[0]],
                            f)) {
                                f === !0 ? f = o[h] : o[h] !== !0 && (u = s[0],
                                c.unshift(s[1]));
                                break
                            }
                    if (f !== !0)
                        if (f && n.throws)
                            t = f(t);
                        else
                            try {
                                t = f(t)
                            } catch (l) {
                                return {
                                    state: "parsererror",
                                    error: f ? l : "No conversion from " + e + " to " + u
                                }
                            }
                }
        return {
            state: "success",
            data: t
        }
    }
    var nt = [], f = n.document, ye = Object.getPrototypeOf, b = nt.slice, eu = nt.concat, nr = nt.push, ui = nt.indexOf, fi = {}, ou = fi.toString, ei = fi.hasOwnProperty, su = ei.toString, pe = su.call(Object), e = {}, u = function(n) {
        return typeof n == "function" && typeof n.nodeType != "number"
    }, ot = function(n) {
        return n != null && n === n.window
    }, we = {
        type: !0,
        src: !0,
        nonce: !0,
        noModule: !0
    }, hu = "3.4.1", i = function(n, t) {
        return new i.fn.init(n,t)
    }, be = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, k, tr, cu, lu, au, vu, yu, v, pu, oi, pt, wt, ir, rr, wu, st, si, bu, ku, du, ht, gu, nf, tf, ur, fr, rf, ct, er, hi, uf, ff;
    i.fn = i.prototype = {
        jquery: hu,
        constructor: i,
        length: 0,
        toArray: function() {
            return b.call(this)
        },
        get: function(n) {
            return n == null ? b.call(this) : n < 0 ? this[n + this.length] : this[n]
        },
        pushStack: function(n) {
            var t = i.merge(this.constructor(), n);
            return t.prevObject = this,
            t
        },
        each: function(n) {
            return i.each(this, n)
        },
        map: function(n) {
            return this.pushStack(i.map(this, function(t, i) {
                return n.call(t, i, t)
            }))
        },
        slice: function() {
            return this.pushStack(b.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(n) {
            var i = this.length
              , t = +n + (n < 0 ? i : 0);
            return this.pushStack(t >= 0 && t < i ? [this[t]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: nr,
        sort: nt.sort,
        splice: nt.splice
    };
    i.extend = i.fn.extend = function() {
        var s, f, e, t, o, c, n = arguments[0] || {}, r = 1, l = arguments.length, h = !1;
        for (typeof n == "boolean" && (h = n,
        n = arguments[r] || {},
        r++),
        typeof n == "object" || u(n) || (n = {}),
        r === l && (n = this,
        r--); r < l; r++)
            if ((s = arguments[r]) != null)
                for (f in s)
                    (t = s[f],
                    f !== "__proto__" && n !== t) && (h && t && (i.isPlainObject(t) || (o = Array.isArray(t))) ? (e = n[f],
                    c = o && !Array.isArray(e) ? [] : o || i.isPlainObject(e) ? e : {},
                    o = !1,
                    n[f] = i.extend(h, c, t)) : t !== undefined && (n[f] = t));
        return n
    }
    ;
    i.extend({
        expando: "jQuery" + (hu + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(n) {
            throw new Error(n);
        },
        noop: function() {},
        isPlainObject: function(n) {
            var t, i;
            return !n || ou.call(n) !== "[object Object]" ? !1 : (t = ye(n),
            !t) ? !0 : (i = ei.call(t, "constructor") && t.constructor,
            typeof i == "function" && su.call(i) === pe)
        },
        isEmptyObject: function(n) {
            for (var t in n)
                return !1;
            return !0
        },
        globalEval: function(n, t) {
            lr(n, {
                nonce: t && t.nonce
            })
        },
        each: function(n, t) {
            var r, i = 0;
            if (li(n)) {
                for (r = n.length; i < r; i++)
                    if (t.call(n[i], i, n[i]) === !1)
                        break
            } else
                for (i in n)
                    if (t.call(n[i], i, n[i]) === !1)
                        break;
            return n
        },
        trim: function(n) {
            return n == null ? "" : (n + "").replace(be, "")
        },
        makeArray: function(n, t) {
            var r = t || [];
            return n != null && (li(Object(n)) ? i.merge(r, typeof n == "string" ? [n] : n) : nr.call(r, n)),
            r
        },
        inArray: function(n, t, i) {
            return t == null ? -1 : ui.call(t, n, i)
        },
        merge: function(n, t) {
            for (var u = +t.length, i = 0, r = n.length; i < u; i++)
                n[r++] = t[i];
            return n.length = r,
            n
        },
        grep: function(n, t, i) {
            for (var u, f = [], r = 0, e = n.length, o = !i; r < e; r++)
                u = !t(n[r], r),
                u !== o && f.push(n[r]);
            return f
        },
        map: function(n, t, i) {
            var e, u, r = 0, f = [];
            if (li(n))
                for (e = n.length; r < e; r++)
                    u = t(n[r], r, i),
                    u != null && f.push(u);
            else
                for (r in n)
                    u = t(n[r], r, i),
                    u != null && f.push(u);
            return eu.apply([], f)
        },
        guid: 1,
        support: e
    });
    typeof Symbol == "function" && (i.fn[Symbol.iterator] = nt[Symbol.iterator]);
    i.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(n, t) {
        fi["[object " + t + "]"] = t.toLowerCase()
    });
    k = function(n) {
        function r(n, t, r, u) {
            var s, w, l, v, d, y, g, p = t && t.ownerDocument, a = t ? t.nodeType : 9;
            if (r = r || [],
            typeof n != "string" || !n || a !== 1 && a !== 9 && a !== 11)
                return r;
            if (!u && ((t ? t.ownerDocument || t : c) !== i && b(t),
            t = t || i,
            h)) {
                if (a !== 11 && (d = wr.exec(n)))
                    if (s = d[1]) {
                        if (a === 9)
                            if (l = t.getElementById(s)) {
                                if (l.id === s)
                                    return r.push(l),
                                    r
                            } else
                                return r;
                        else if (p && (l = p.getElementById(s)) && et(t, l) && l.id === s)
                            return r.push(l),
                            r
                    } else {
                        if (d[2])
                            return k.apply(r, t.getElementsByTagName(n)),
                            r;
                        if ((s = d[3]) && e.getElementsByClassName && t.getElementsByClassName)
                            return k.apply(r, t.getElementsByClassName(s)),
                            r
                    }
                if (e.qsa && !pt[n + " "] && (!o || !o.test(n)) && (a !== 1 || t.nodeName.toLowerCase() !== "object")) {
                    if (g = n,
                    p = t,
                    a === 1 && cr.test(n)) {
                        for ((v = t.getAttribute("id")) ? v = v.replace(bi, ki) : t.setAttribute("id", v = f),
                        y = ft(n),
                        w = y.length; w--; )
                            y[w] = "#" + v + " " + ht(y[w]);
                        g = y.join(",");
                        p = ei.test(n) && dt(t.parentNode) || t
                    }
                    try {
                        return k.apply(r, p.querySelectorAll(g)),
                        r
                    } catch (nt) {
                        pt(n, !0)
                    } finally {
                        v === f && t.removeAttribute("id")
                    }
                }
            }
            return li(n.replace(wt, "$1"), t, r, u)
        }
        function st() {
            function n(r, u) {
                return i.push(r + " ") > t.cacheLength && delete n[i.shift()],
                n[r + " "] = u
            }
            var i = [];
            return n
        }
        function l(n) {
            return n[f] = !0,
            n
        }
        function a(n) {
            var t = i.createElement("fieldset");
            try {
                return !!n(t)
            } catch (r) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t);
                t = null
            }
        }
        function kt(n, i) {
            for (var r = n.split("|"), u = r.length; u--; )
                t.attrHandle[r[u]] = i
        }
        function oi(n, t) {
            var i = t && n
              , r = i && n.nodeType === 1 && t.nodeType === 1 && n.sourceIndex - t.sourceIndex;
            if (r)
                return r;
            if (i)
                while (i = i.nextSibling)
                    if (i === t)
                        return -1;
            return n ? 1 : -1
        }
        function gi(n) {
            return function(t) {
                var i = t.nodeName.toLowerCase();
                return i === "input" && t.type === n
            }
        }
        function nr(n) {
            return function(t) {
                var i = t.nodeName.toLowerCase();
                return (i === "input" || i === "button") && t.type === n
            }
        }
        function si(n) {
            return function(t) {
                return "form"in t ? t.parentNode && t.disabled === !1 ? "label"in t ? "label"in t.parentNode ? t.parentNode.disabled === n : t.disabled === n : t.isDisabled === n || t.isDisabled !== !n && br(t) === n : t.disabled === n : "label"in t ? t.disabled === n : !1
            }
        }
        function d(n) {
            return l(function(t) {
                return t = +t,
                l(function(i, r) {
                    for (var u, f = n([], i.length, t), e = f.length; e--; )
                        i[u = f[e]] && (i[u] = !(r[u] = i[u]))
                })
            })
        }
        function dt(n) {
            return n && typeof n.getElementsByTagName != "undefined" && n
        }
        function hi() {}
        function ht(n) {
            for (var t = 0, r = n.length, i = ""; t < r; t++)
                i += n[t].value;
            return i
        }
        function ct(n, t, i) {
            var r = t.dir
              , u = t.next
              , e = u || r
              , o = i && e === "parentNode"
              , s = rr++;
            return t.first ? function(t, i, u) {
                while (t = t[r])
                    if (t.nodeType === 1 || o)
                        return n(t, i, u);
                return !1
            }
            : function(t, i, h) {
                var c, l, a, y = [v, s];
                if (h) {
                    while (t = t[r])
                        if ((t.nodeType === 1 || o) && n(t, i, h))
                            return !0
                } else
                    while (t = t[r])
                        if (t.nodeType === 1 || o)
                            if (a = t[f] || (t[f] = {}),
                            l = a[t.uniqueID] || (a[t.uniqueID] = {}),
                            u && u === t.nodeName.toLowerCase())
                                t = t[r] || t;
                            else {
                                if ((c = l[e]) && c[0] === v && c[1] === s)
                                    return y[2] = c[2];
                                if (l[e] = y,
                                y[2] = n(t, i, h))
                                    return !0
                            }
                return !1
            }
        }
        function gt(n) {
            return n.length > 1 ? function(t, i, r) {
                for (var u = n.length; u--; )
                    if (!n[u](t, i, r))
                        return !1;
                return !0
            }
            : n[0]
        }
        function tr(n, t, i) {
            for (var u = 0, f = t.length; u < f; u++)
                r(n, t[u], i);
            return i
        }
        function lt(n, t, i, r, u) {
            for (var e, o = [], f = 0, s = n.length, h = t != null; f < s; f++)
                (e = n[f]) && (!i || i(e, r, u)) && (o.push(e),
                h && t.push(f));
            return o
        }
        function ni(n, t, i, r, u, e) {
            return r && !r[f] && (r = ni(r)),
            u && !u[f] && (u = ni(u, e)),
            l(function(f, e, o, s) {
                var l, c, a, p = [], y = [], w = e.length, b = f || tr(t || "*", o.nodeType ? [o] : o, []), v = n && (f || !t) ? lt(b, p, n, o, s) : b, h = i ? u || (f ? n : w || r) ? [] : e : v;
                if (i && i(v, h, o, s),
                r)
                    for (l = lt(h, y),
                    r(l, [], o, s),
                    c = l.length; c--; )
                        (a = l[c]) && (h[y[c]] = !(v[y[c]] = a));
                if (f) {
                    if (u || n) {
                        if (u) {
                            for (l = [],
                            c = h.length; c--; )
                                (a = h[c]) && l.push(v[c] = a);
                            u(null, h = [], l, s)
                        }
                        for (c = h.length; c--; )
                            (a = h[c]) && (l = u ? tt(f, a) : p[c]) > -1 && (f[l] = !(e[l] = a))
                    }
                } else
                    h = lt(h === e ? h.splice(w, h.length) : h),
                    u ? u(null, e, h, s) : k.apply(e, h)
            })
        }
        function ti(n) {
            for (var o, u, r, s = n.length, h = t.relative[n[0].type], c = h || t.relative[" "], i = h ? 1 : 0, l = ct(function(n) {
                return n === o
            }, c, !0), a = ct(function(n) {
                return tt(o, n) > -1
            }, c, !0), e = [function(n, t, i) {
                var r = !h && (i || t !== vt) || ((o = t).nodeType ? l(n, t, i) : a(n, t, i));
                return o = null,
                r
            }
            ]; i < s; i++)
                if (u = t.relative[n[i].type])
                    e = [ct(gt(e), u)];
                else {
                    if (u = t.filter[n[i].type].apply(null, n[i].matches),
                    u[f]) {
                        for (r = ++i; r < s; r++)
                            if (t.relative[n[r].type])
                                break;
                        return ni(i > 1 && gt(e), i > 1 && ht(n.slice(0, i - 1).concat({
                            value: n[i - 2].type === " " ? "*" : ""
                        })).replace(wt, "$1"), u, i < r && ti(n.slice(i, r)), r < s && ti(n = n.slice(r)), r < s && ht(n))
                    }
                    e.push(u)
                }
            return gt(e)
        }
        function ir(n, u) {
            var f = u.length > 0
              , e = n.length > 0
              , o = function(o, s, c, l, a) {
                var y, nt, d, g = 0, p = "0", tt = o && [], w = [], it = vt, rt = o || e && t.find.TAG("*", a), ut = v += it == null ? 1 : Math.random() || .1, ft = rt.length;
                for (a && (vt = s === i || s || a); p !== ft && (y = rt[p]) != null; p++) {
                    if (e && y) {
                        for (nt = 0,
                        s || y.ownerDocument === i || (b(y),
                        c = !h); d = n[nt++]; )
                            if (d(y, s || i, c)) {
                                l.push(y);
                                break
                            }
                        a && (v = ut)
                    }
                    f && ((y = !d && y) && g--,
                    o && tt.push(y))
                }
                if (g += p,
                f && p !== g) {
                    for (nt = 0; d = u[nt++]; )
                        d(tt, w, s, c);
                    if (o) {
                        if (g > 0)
                            while (p--)
                                tt[p] || w[p] || (w[p] = fr.call(l));
                        w = lt(w)
                    }
                    k.apply(l, w);
                    a && !o && w.length > 0 && g + u.length > 1 && r.uniqueSort(l)
                }
                return a && (v = ut,
                vt = it),
                tt
            };
            return f ? l(o) : o
        }
        var rt, e, t, at, ci, ft, ii, li, vt, w, ut, b, i, s, h, o, g, yt, et, f = "sizzle" + 1 * new Date, c = n.document, v = 0, rr = 0, ai = st(), vi = st(), yi = st(), pt = st(), ri = function(n, t) {
            return n === t && (ut = !0),
            0
        }, ur = {}.hasOwnProperty, nt = [], fr = nt.pop, er = nt.push, k = nt.push, pi = nt.slice, tt = function(n, t) {
            for (var i = 0, r = n.length; i < r; i++)
                if (n[i] === t)
                    return i;
            return -1
        }, ui = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", u = "[\\x20\\t\\r\\n\\f]", it = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+", wi = "\\[" + u + "*(" + it + ")(?:" + u + "*([*^$|!~]?=)" + u + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + it + "))|)" + u + "*\\]", fi = ":(" + it + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + wi + ")*)|.*)\\)|)", or = new RegExp(u + "+","g"), wt = new RegExp("^" + u + "+|((?:^|[^\\\\])(?:\\\\.)*)" + u + "+$","g"), sr = new RegExp("^" + u + "*," + u + "*"), hr = new RegExp("^" + u + "*([>+~]|" + u + ")" + u + "*"), cr = new RegExp(u + "|>"), lr = new RegExp(fi), ar = new RegExp("^" + it + "$"), bt = {
            ID: new RegExp("^#(" + it + ")"),
            CLASS: new RegExp("^\\.(" + it + ")"),
            TAG: new RegExp("^(" + it + "|[*])"),
            ATTR: new RegExp("^" + wi),
            PSEUDO: new RegExp("^" + fi),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + u + "*(even|odd|(([+-]|)(\\d*)n|)" + u + "*(?:([+-]|)" + u + "*(\\d+)|))" + u + "*\\)|)","i"),
            bool: new RegExp("^(?:" + ui + ")$","i"),
            needsContext: new RegExp("^" + u + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + u + "*((?:-\\d)?\\d*)" + u + "*\\)|)(?=[^-]|$)","i")
        }, vr = /HTML$/i, yr = /^(?:input|select|textarea|button)$/i, pr = /^h\d$/i, ot = /^[^{]+\{\s*\[native \w/, wr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ei = /[+~]/, y = new RegExp("\\\\([\\da-f]{1,6}" + u + "?|(" + u + ")|.)","ig"), p = function(n, t, i) {
            var r = "0x" + t - 65536;
            return r !== r || i ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, r & 1023 | 56320)
        }, bi = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, ki = function(n, t) {
            return t ? n === "\0" ? "�" : n.slice(0, -1) + "\\" + n.charCodeAt(n.length - 1).toString(16) + " " : "\\" + n
        }, di = function() {
            b()
        }, br = ct(function(n) {
            return n.disabled === !0 && n.nodeName.toLowerCase() === "fieldset"
        }, {
            dir: "parentNode",
            next: "legend"
        });
        try {
            k.apply(nt = pi.call(c.childNodes), c.childNodes);
            nt[c.childNodes.length].nodeType
        } catch (kr) {
            k = {
                apply: nt.length ? function(n, t) {
                    er.apply(n, pi.call(t))
                }
                : function(n, t) {
                    for (var i = n.length, r = 0; n[i++] = t[r++]; )
                        ;
                    n.length = i - 1
                }
            }
        }
        e = r.support = {};
        ci = r.isXML = function(n) {
            var i = n.namespaceURI
              , t = (n.ownerDocument || n).documentElement;
            return !vr.test(i || t && t.nodeName || "HTML")
        }
        ;
        b = r.setDocument = function(n) {
            var v, r, l = n ? n.ownerDocument || n : c;
            return l === i || l.nodeType !== 9 || !l.documentElement ? i : (i = l,
            s = i.documentElement,
            h = !ci(i),
            c !== i && (r = i.defaultView) && r.top !== r && (r.addEventListener ? r.addEventListener("unload", di, !1) : r.attachEvent && r.attachEvent("onunload", di)),
            e.attributes = a(function(n) {
                return n.className = "i",
                !n.getAttribute("className")
            }),
            e.getElementsByTagName = a(function(n) {
                return n.appendChild(i.createComment("")),
                !n.getElementsByTagName("*").length
            }),
            e.getElementsByClassName = ot.test(i.getElementsByClassName),
            e.getById = a(function(n) {
                return s.appendChild(n).id = f,
                !i.getElementsByName || !i.getElementsByName(f).length
            }),
            e.getById ? (t.filter.ID = function(n) {
                var t = n.replace(y, p);
                return function(n) {
                    return n.getAttribute("id") === t
                }
            }
            ,
            t.find.ID = function(n, t) {
                if (typeof t.getElementById != "undefined" && h) {
                    var i = t.getElementById(n);
                    return i ? [i] : []
                }
            }
            ) : (t.filter.ID = function(n) {
                var t = n.replace(y, p);
                return function(n) {
                    var i = typeof n.getAttributeNode != "undefined" && n.getAttributeNode("id");
                    return i && i.value === t
                }
            }
            ,
            t.find.ID = function(n, t) {
                if (typeof t.getElementById != "undefined" && h) {
                    var i, u, f, r = t.getElementById(n);
                    if (r) {
                        if (i = r.getAttributeNode("id"),
                        i && i.value === n)
                            return [r];
                        for (f = t.getElementsByName(n),
                        u = 0; r = f[u++]; )
                            if (i = r.getAttributeNode("id"),
                            i && i.value === n)
                                return [r]
                    }
                    return []
                }
            }
            ),
            t.find.TAG = e.getElementsByTagName ? function(n, t) {
                return typeof t.getElementsByTagName != "undefined" ? t.getElementsByTagName(n) : e.qsa ? t.querySelectorAll(n) : void 0
            }
            : function(n, t) {
                var i, r = [], f = 0, u = t.getElementsByTagName(n);
                if (n === "*") {
                    while (i = u[f++])
                        i.nodeType === 1 && r.push(i);
                    return r
                }
                return u
            }
            ,
            t.find.CLASS = e.getElementsByClassName && function(n, t) {
                if (typeof t.getElementsByClassName != "undefined" && h)
                    return t.getElementsByClassName(n)
            }
            ,
            g = [],
            o = [],
            (e.qsa = ot.test(i.querySelectorAll)) && (a(function(n) {
                s.appendChild(n).innerHTML = "<a id='" + f + "'><\/a><select id='" + f + "-\r\\' msallowcapture=''><option selected=''><\/option><\/select>";
                n.querySelectorAll("[msallowcapture^='']").length && o.push("[*^$]=" + u + "*(?:''|\"\")");
                n.querySelectorAll("[selected]").length || o.push("\\[" + u + "*(?:value|" + ui + ")");
                n.querySelectorAll("[id~=" + f + "-]").length || o.push("~=");
                n.querySelectorAll(":checked").length || o.push(":checked");
                n.querySelectorAll("a#" + f + "+*").length || o.push(".#.+[+~]")
            }),
            a(function(n) {
                n.innerHTML = "<a href='' disabled='disabled'><\/a><select disabled='disabled'><option/><\/select>";
                var t = i.createElement("input");
                t.setAttribute("type", "hidden");
                n.appendChild(t).setAttribute("name", "D");
                n.querySelectorAll("[name=d]").length && o.push("name" + u + "*[*^$|!~]?=");
                n.querySelectorAll(":enabled").length !== 2 && o.push(":enabled", ":disabled");
                s.appendChild(n).disabled = !0;
                n.querySelectorAll(":disabled").length !== 2 && o.push(":enabled", ":disabled");
                n.querySelectorAll("*,:x");
                o.push(",.*:")
            })),
            (e.matchesSelector = ot.test(yt = s.matches || s.webkitMatchesSelector || s.mozMatchesSelector || s.oMatchesSelector || s.msMatchesSelector)) && a(function(n) {
                e.disconnectedMatch = yt.call(n, "*");
                yt.call(n, "[s!='']:x");
                g.push("!=", fi)
            }),
            o = o.length && new RegExp(o.join("|")),
            g = g.length && new RegExp(g.join("|")),
            v = ot.test(s.compareDocumentPosition),
            et = v || ot.test(s.contains) ? function(n, t) {
                var r = n.nodeType === 9 ? n.documentElement : n
                  , i = t && t.parentNode;
                return n === i || !!(i && i.nodeType === 1 && (r.contains ? r.contains(i) : n.compareDocumentPosition && n.compareDocumentPosition(i) & 16))
            }
            : function(n, t) {
                if (t)
                    while (t = t.parentNode)
                        if (t === n)
                            return !0;
                return !1
            }
            ,
            ri = v ? function(n, t) {
                if (n === t)
                    return ut = !0,
                    0;
                var r = !n.compareDocumentPosition - !t.compareDocumentPosition;
                return r ? r : (r = (n.ownerDocument || n) === (t.ownerDocument || t) ? n.compareDocumentPosition(t) : 1,
                r & 1 || !e.sortDetached && t.compareDocumentPosition(n) === r) ? n === i || n.ownerDocument === c && et(c, n) ? -1 : t === i || t.ownerDocument === c && et(c, t) ? 1 : w ? tt(w, n) - tt(w, t) : 0 : r & 4 ? -1 : 1
            }
            : function(n, t) {
                if (n === t)
                    return ut = !0,
                    0;
                var r, u = 0, o = n.parentNode, s = t.parentNode, f = [n], e = [t];
                if (o && s) {
                    if (o === s)
                        return oi(n, t)
                } else
                    return n === i ? -1 : t === i ? 1 : o ? -1 : s ? 1 : w ? tt(w, n) - tt(w, t) : 0;
                for (r = n; r = r.parentNode; )
                    f.unshift(r);
                for (r = t; r = r.parentNode; )
                    e.unshift(r);
                while (f[u] === e[u])
                    u++;
                return u ? oi(f[u], e[u]) : f[u] === c ? -1 : e[u] === c ? 1 : 0
            }
            ,
            i)
        }
        ;
        r.matches = function(n, t) {
            return r(n, null, null, t)
        }
        ;
        r.matchesSelector = function(n, t) {
            if ((n.ownerDocument || n) !== i && b(n),
            e.matchesSelector && h && !pt[t + " "] && (!g || !g.test(t)) && (!o || !o.test(t)))
                try {
                    var u = yt.call(n, t);
                    if (u || e.disconnectedMatch || n.document && n.document.nodeType !== 11)
                        return u
                } catch (f) {
                    pt(t, !0)
                }
            return r(t, i, null, [n]).length > 0
        }
        ;
        r.contains = function(n, t) {
            return (n.ownerDocument || n) !== i && b(n),
            et(n, t)
        }
        ;
        r.attr = function(n, r) {
            (n.ownerDocument || n) !== i && b(n);
            var f = t.attrHandle[r.toLowerCase()]
              , u = f && ur.call(t.attrHandle, r.toLowerCase()) ? f(n, r, !h) : undefined;
            return u !== undefined ? u : e.attributes || !h ? n.getAttribute(r) : (u = n.getAttributeNode(r)) && u.specified ? u.value : null
        }
        ;
        r.escape = function(n) {
            return (n + "").replace(bi, ki)
        }
        ;
        r.error = function(n) {
            throw new Error("Syntax error, unrecognized expression: " + n);
        }
        ;
        r.uniqueSort = function(n) {
            var r, u = [], t = 0, i = 0;
            if (ut = !e.detectDuplicates,
            w = !e.sortStable && n.slice(0),
            n.sort(ri),
            ut) {
                while (r = n[i++])
                    r === n[i] && (t = u.push(i));
                while (t--)
                    n.splice(u[t], 1)
            }
            return w = null,
            n
        }
        ;
        at = r.getText = function(n) {
            var r, i = "", u = 0, t = n.nodeType;
            if (t) {
                if (t === 1 || t === 9 || t === 11) {
                    if (typeof n.textContent == "string")
                        return n.textContent;
                    for (n = n.firstChild; n; n = n.nextSibling)
                        i += at(n)
                } else if (t === 3 || t === 4)
                    return n.nodeValue
            } else
                while (r = n[u++])
                    i += at(r);
            return i
        }
        ;
        t = r.selectors = {
            cacheLength: 50,
            createPseudo: l,
            match: bt,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(n) {
                    return n[1] = n[1].replace(y, p),
                    n[3] = (n[3] || n[4] || n[5] || "").replace(y, p),
                    n[2] === "~=" && (n[3] = " " + n[3] + " "),
                    n.slice(0, 4)
                },
                CHILD: function(n) {
                    return n[1] = n[1].toLowerCase(),
                    n[1].slice(0, 3) === "nth" ? (n[3] || r.error(n[0]),
                    n[4] = +(n[4] ? n[5] + (n[6] || 1) : 2 * (n[3] === "even" || n[3] === "odd")),
                    n[5] = +(n[7] + n[8] || n[3] === "odd")) : n[3] && r.error(n[0]),
                    n
                },
                PSEUDO: function(n) {
                    var i, t = !n[6] && n[2];
                    return bt.CHILD.test(n[0]) ? null : (n[3] ? n[2] = n[4] || n[5] || "" : t && lr.test(t) && (i = ft(t, !0)) && (i = t.indexOf(")", t.length - i) - t.length) && (n[0] = n[0].slice(0, i),
                    n[2] = t.slice(0, i)),
                    n.slice(0, 3))
                }
            },
            filter: {
                TAG: function(n) {
                    var t = n.replace(y, p).toLowerCase();
                    return n === "*" ? function() {
                        return !0
                    }
                    : function(n) {
                        return n.nodeName && n.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(n) {
                    var t = ai[n + " "];
                    return t || (t = new RegExp("(^|" + u + ")" + n + "(" + u + "|$)")) && ai(n, function(n) {
                        return t.test(typeof n.className == "string" && n.className || typeof n.getAttribute != "undefined" && n.getAttribute("class") || "")
                    })
                },
                ATTR: function(n, t, i) {
                    return function(u) {
                        var f = r.attr(u, n);
                        return f == null ? t === "!=" : t ? (f += "",
                        t === "=" ? f === i : t === "!=" ? f !== i : t === "^=" ? i && f.indexOf(i) === 0 : t === "*=" ? i && f.indexOf(i) > -1 : t === "$=" ? i && f.slice(-i.length) === i : t === "~=" ? (" " + f.replace(or, " ") + " ").indexOf(i) > -1 : t === "|=" ? f === i || f.slice(0, i.length + 1) === i + "-" : !1) : !0
                    }
                },
                CHILD: function(n, t, i, r, u) {
                    var s = n.slice(0, 3) !== "nth"
                      , o = n.slice(-4) !== "last"
                      , e = t === "of-type";
                    return r === 1 && u === 0 ? function(n) {
                        return !!n.parentNode
                    }
                    : function(t, i, h) {
                        var p, w, y, c, a, b, k = s !== o ? "nextSibling" : "previousSibling", d = t.parentNode, nt = e && t.nodeName.toLowerCase(), g = !h && !e, l = !1;
                        if (d) {
                            if (s) {
                                while (k) {
                                    for (c = t; c = c[k]; )
                                        if (e ? c.nodeName.toLowerCase() === nt : c.nodeType === 1)
                                            return !1;
                                    b = k = n === "only" && !b && "nextSibling"
                                }
                                return !0
                            }
                            if (b = [o ? d.firstChild : d.lastChild],
                            o && g) {
                                for (c = d,
                                y = c[f] || (c[f] = {}),
                                w = y[c.uniqueID] || (y[c.uniqueID] = {}),
                                p = w[n] || [],
                                a = p[0] === v && p[1],
                                l = a && p[2],
                                c = a && d.childNodes[a]; c = ++a && c && c[k] || (l = a = 0) || b.pop(); )
                                    if (c.nodeType === 1 && ++l && c === t) {
                                        w[n] = [v, a, l];
                                        break
                                    }
                            } else if (g && (c = t,
                            y = c[f] || (c[f] = {}),
                            w = y[c.uniqueID] || (y[c.uniqueID] = {}),
                            p = w[n] || [],
                            a = p[0] === v && p[1],
                            l = a),
                            l === !1)
                                while (c = ++a && c && c[k] || (l = a = 0) || b.pop())
                                    if ((e ? c.nodeName.toLowerCase() === nt : c.nodeType === 1) && ++l && (g && (y = c[f] || (c[f] = {}),
                                    w = y[c.uniqueID] || (y[c.uniqueID] = {}),
                                    w[n] = [v, l]),
                                    c === t))
                                        break;
                            return l -= u,
                            l === r || l % r == 0 && l / r >= 0
                        }
                    }
                },
                PSEUDO: function(n, i) {
                    var e, u = t.pseudos[n] || t.setFilters[n.toLowerCase()] || r.error("unsupported pseudo: " + n);
                    return u[f] ? u(i) : u.length > 1 ? (e = [n, n, "", i],
                    t.setFilters.hasOwnProperty(n.toLowerCase()) ? l(function(n, t) {
                        for (var r, f = u(n, i), e = f.length; e--; )
                            r = tt(n, f[e]),
                            n[r] = !(t[r] = f[e])
                    }) : function(n) {
                        return u(n, 0, e)
                    }
                    ) : u
                }
            },
            pseudos: {
                not: l(function(n) {
                    var t = []
                      , r = []
                      , i = ii(n.replace(wt, "$1"));
                    return i[f] ? l(function(n, t, r, u) {
                        for (var e, o = i(n, null, u, []), f = n.length; f--; )
                            (e = o[f]) && (n[f] = !(t[f] = e))
                    }) : function(n, u, f) {
                        return t[0] = n,
                        i(t, null, f, r),
                        t[0] = null,
                        !r.pop()
                    }
                }),
                has: l(function(n) {
                    return function(t) {
                        return r(n, t).length > 0
                    }
                }),
                contains: l(function(n) {
                    return n = n.replace(y, p),
                    function(t) {
                        return (t.textContent || at(t)).indexOf(n) > -1
                    }
                }),
                lang: l(function(n) {
                    return ar.test(n || "") || r.error("unsupported lang: " + n),
                    n = n.replace(y, p).toLowerCase(),
                    function(t) {
                        var i;
                        do
                            if (i = h ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                                return i = i.toLowerCase(),
                                i === n || i.indexOf(n + "-") === 0;
                        while ((t = t.parentNode) && t.nodeType === 1);
                        return !1
                    }
                }),
                target: function(t) {
                    var i = n.location && n.location.hash;
                    return i && i.slice(1) === t.id
                },
                root: function(n) {
                    return n === s
                },
                focus: function(n) {
                    return n === i.activeElement && (!i.hasFocus || i.hasFocus()) && !!(n.type || n.href || ~n.tabIndex)
                },
                enabled: si(!1),
                disabled: si(!0),
                checked: function(n) {
                    var t = n.nodeName.toLowerCase();
                    return t === "input" && !!n.checked || t === "option" && !!n.selected
                },
                selected: function(n) {
                    return n.parentNode && n.parentNode.selectedIndex,
                    n.selected === !0
                },
                empty: function(n) {
                    for (n = n.firstChild; n; n = n.nextSibling)
                        if (n.nodeType < 6)
                            return !1;
                    return !0
                },
                parent: function(n) {
                    return !t.pseudos.empty(n)
                },
                header: function(n) {
                    return pr.test(n.nodeName)
                },
                input: function(n) {
                    return yr.test(n.nodeName)
                },
                button: function(n) {
                    var t = n.nodeName.toLowerCase();
                    return t === "input" && n.type === "button" || t === "button"
                },
                text: function(n) {
                    var t;
                    return n.nodeName.toLowerCase() === "input" && n.type === "text" && ((t = n.getAttribute("type")) == null || t.toLowerCase() === "text")
                },
                first: d(function() {
                    return [0]
                }),
                last: d(function(n, t) {
                    return [t - 1]
                }),
                eq: d(function(n, t, i) {
                    return [i < 0 ? i + t : i]
                }),
                even: d(function(n, t) {
                    for (var i = 0; i < t; i += 2)
                        n.push(i);
                    return n
                }),
                odd: d(function(n, t) {
                    for (var i = 1; i < t; i += 2)
                        n.push(i);
                    return n
                }),
                lt: d(function(n, t, i) {
                    for (var r = i < 0 ? i + t : i > t ? t : i; --r >= 0; )
                        n.push(r);
                    return n
                }),
                gt: d(function(n, t, i) {
                    for (var r = i < 0 ? i + t : i; ++r < t; )
                        n.push(r);
                    return n
                })
            }
        };
        t.pseudos.nth = t.pseudos.eq;
        for (rt in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            t.pseudos[rt] = gi(rt);
        for (rt in {
            submit: !0,
            reset: !0
        })
            t.pseudos[rt] = nr(rt);
        return hi.prototype = t.filters = t.pseudos,
        t.setFilters = new hi,
        ft = r.tokenize = function(n, i) {
            var e, f, s, o, u, h, c, l = vi[n + " "];
            if (l)
                return i ? 0 : l.slice(0);
            for (u = n,
            h = [],
            c = t.preFilter; u; ) {
                (!e || (f = sr.exec(u))) && (f && (u = u.slice(f[0].length) || u),
                h.push(s = []));
                e = !1;
                (f = hr.exec(u)) && (e = f.shift(),
                s.push({
                    value: e,
                    type: f[0].replace(wt, " ")
                }),
                u = u.slice(e.length));
                for (o in t.filter)
                    (f = bt[o].exec(u)) && (!c[o] || (f = c[o](f))) && (e = f.shift(),
                    s.push({
                        value: e,
                        type: o,
                        matches: f
                    }),
                    u = u.slice(e.length));
                if (!e)
                    break
            }
            return i ? u.length : u ? r.error(n) : vi(n, h).slice(0)
        }
        ,
        ii = r.compile = function(n, t) {
            var r, u = [], e = [], i = yi[n + " "];
            if (!i) {
                for (t || (t = ft(n)),
                r = t.length; r--; )
                    i = ti(t[r]),
                    i[f] ? u.push(i) : e.push(i);
                i = yi(n, ir(e, u));
                i.selector = n
            }
            return i
        }
        ,
        li = r.select = function(n, i, r, u) {
            var o, f, e, l, a, c = typeof n == "function" && n, s = !u && ft(n = c.selector || n);
            if (r = r || [],
            s.length === 1) {
                if (f = s[0] = s[0].slice(0),
                f.length > 2 && (e = f[0]).type === "ID" && i.nodeType === 9 && h && t.relative[f[1].type]) {
                    if (i = (t.find.ID(e.matches[0].replace(y, p), i) || [])[0],
                    i)
                        c && (i = i.parentNode);
                    else
                        return r;
                    n = n.slice(f.shift().value.length)
                }
                for (o = bt.needsContext.test(n) ? 0 : f.length; o--; ) {
                    if (e = f[o],
                    t.relative[l = e.type])
                        break;
                    if ((a = t.find[l]) && (u = a(e.matches[0].replace(y, p), ei.test(f[0].type) && dt(i.parentNode) || i))) {
                        if (f.splice(o, 1),
                        n = u.length && ht(f),
                        !n)
                            return k.apply(r, u),
                            r;
                        break
                    }
                }
            }
            return (c || ii(n, s))(u, i, !h, r, !i || ei.test(n) && dt(i.parentNode) || i),
            r
        }
        ,
        e.sortStable = f.split("").sort(ri).join("") === f,
        e.detectDuplicates = !!ut,
        b(),
        e.sortDetached = a(function(n) {
            return n.compareDocumentPosition(i.createElement("fieldset")) & 1
        }),
        a(function(n) {
            return n.innerHTML = "<a href='#'><\/a>",
            n.firstChild.getAttribute("href") === "#"
        }) || kt("type|href|height|width", function(n, t, i) {
            if (!i)
                return n.getAttribute(t, t.toLowerCase() === "type" ? 1 : 2)
        }),
        e.attributes && a(function(n) {
            return n.innerHTML = "<input/>",
            n.firstChild.setAttribute("value", ""),
            n.firstChild.getAttribute("value") === ""
        }) || kt("value", function(n, t, i) {
            if (!i && n.nodeName.toLowerCase() === "input")
                return n.defaultValue
        }),
        a(function(n) {
            return n.getAttribute("disabled") == null
        }) || kt(ui, function(n, t, i) {
            var r;
            if (!i)
                return n[t] === !0 ? t.toLowerCase() : (r = n.getAttributeNode(t)) && r.specified ? r.value : null
        }),
        r
    }(n);
    i.find = k;
    i.expr = k.selectors;
    i.expr[":"] = i.expr.pseudos;
    i.uniqueSort = i.unique = k.uniqueSort;
    i.text = k.getText;
    i.isXMLDoc = k.isXML;
    i.contains = k.contains;
    i.escapeSelector = k.escape;
    var lt = function(n, t, r) {
        for (var u = [], f = r !== undefined; (n = n[t]) && n.nodeType !== 9; )
            if (n.nodeType === 1) {
                if (f && i(n).is(r))
                    break;
                u.push(n)
            }
        return u
    }
      , ef = function(n, t) {
        for (var i = []; n; n = n.nextSibling)
            n.nodeType === 1 && n !== t && i.push(n);
        return i
    }
      , of = i.expr.match.needsContext;
    tr = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    i.filter = function(n, t, r) {
        var u = t[0];
        return (r && (n = ":not(" + n + ")"),
        t.length === 1 && u.nodeType === 1) ? i.find.matchesSelector(u, n) ? [u] : [] : i.find.matches(n, i.grep(t, function(n) {
            return n.nodeType === 1
        }))
    }
    ;
    i.fn.extend({
        find: function(n) {
            var t, r, u = this.length, f = this;
            if (typeof n != "string")
                return this.pushStack(i(n).filter(function() {
                    for (t = 0; t < u; t++)
                        if (i.contains(f[t], this))
                            return !0
                }));
            for (r = this.pushStack([]),
            t = 0; t < u; t++)
                i.find(n, f[t], r);
            return u > 1 ? i.uniqueSort(r) : r
        },
        filter: function(n) {
            return this.pushStack(ai(this, n || [], !1))
        },
        not: function(n) {
            return this.pushStack(ai(this, n || [], !0))
        },
        is: function(n) {
            return !!ai(this, typeof n == "string" && of.test(n) ? i(n) : n || [], !1).length
        }
    });
    lu = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    au = i.fn.init = function(n, t, r) {
        var e, o;
        if (!n)
            return this;
        if (r = r || cu,
        typeof n == "string") {
            if (e = n[0] === "<" && n[n.length - 1] === ">" && n.length >= 3 ? [null, n, null] : lu.exec(n),
            e && (e[1] || !t)) {
                if (e[1]) {
                    if (t = t instanceof i ? t[0] : t,
                    i.merge(this, i.parseHTML(e[1], t && t.nodeType ? t.ownerDocument || t : f, !0)),
                    tr.test(e[1]) && i.isPlainObject(t))
                        for (e in t)
                            u(this[e]) ? this[e](t[e]) : this.attr(e, t[e]);
                    return this
                }
                return o = f.getElementById(e[2]),
                o && (this[0] = o,
                this.length = 1),
                this
            }
            return !t || t.jquery ? (t || r).find(n) : this.constructor(t).find(n)
        }
        return n.nodeType ? (this[0] = n,
        this.length = 1,
        this) : u(n) ? r.ready !== undefined ? r.ready(n) : n(i) : i.makeArray(n, this)
    }
    ;
    au.prototype = i.fn;
    cu = i(f);
    vu = /^(?:parents|prev(?:Until|All))/;
    yu = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    i.fn.extend({
        has: function(n) {
            var t = i(n, this)
              , r = t.length;
            return this.filter(function() {
                for (var n = 0; n < r; n++)
                    if (i.contains(this, t[n]))
                        return !0
            })
        },
        closest: function(n, t) {
            var r, f = 0, o = this.length, u = [], e = typeof n != "string" && i(n);
            if (!of.test(n))
                for (; f < o; f++)
                    for (r = this[f]; r && r !== t; r = r.parentNode)
                        if (r.nodeType < 11 && (e ? e.index(r) > -1 : r.nodeType === 1 && i.find.matchesSelector(r, n))) {
                            u.push(r);
                            break
                        }
            return this.pushStack(u.length > 1 ? i.uniqueSort(u) : u)
        },
        index: function(n) {
            return n ? typeof n == "string" ? ui.call(i(n), this[0]) : ui.call(this, n.jquery ? n[0] : n) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(n, t) {
            return this.pushStack(i.uniqueSort(i.merge(this.get(), i(n, t))))
        },
        addBack: function(n) {
            return this.add(n == null ? this.prevObject : this.prevObject.filter(n))
        }
    });
    i.each({
        parent: function(n) {
            var t = n.parentNode;
            return t && t.nodeType !== 11 ? t : null
        },
        parents: function(n) {
            return lt(n, "parentNode")
        },
        parentsUntil: function(n, t, i) {
            return lt(n, "parentNode", i)
        },
        next: function(n) {
            return ar(n, "nextSibling")
        },
        prev: function(n) {
            return ar(n, "previousSibling")
        },
        nextAll: function(n) {
            return lt(n, "nextSibling")
        },
        prevAll: function(n) {
            return lt(n, "previousSibling")
        },
        nextUntil: function(n, t, i) {
            return lt(n, "nextSibling", i)
        },
        prevUntil: function(n, t, i) {
            return lt(n, "previousSibling", i)
        },
        siblings: function(n) {
            return ef((n.parentNode || {}).firstChild, n)
        },
        children: function(n) {
            return ef(n.firstChild)
        },
        contents: function(n) {
            return typeof n.contentDocument != "undefined" ? n.contentDocument : (l(n, "template") && (n = n.content || n),
            i.merge([], n.childNodes))
        }
    }, function(n, t) {
        i.fn[n] = function(r, u) {
            var f = i.map(this, t, r);
            return n.slice(-5) !== "Until" && (u = r),
            u && typeof u == "string" && (f = i.filter(u, f)),
            this.length > 1 && (yu[n] || i.uniqueSort(f),
            vu.test(n) && f.reverse()),
            this.pushStack(f)
        }
    });
    v = /[^\x20\t\r\n\f]+/g;
    i.Callbacks = function(n) {
        n = typeof n == "string" ? ne(n) : i.extend({}, n);
        var o, r, c, f, t = [], s = [], e = -1, l = function() {
            for (f = f || n.once,
            c = o = !0; s.length; e = -1)
                for (r = s.shift(); ++e < t.length; )
                    t[e].apply(r[0], r[1]) === !1 && n.stopOnFalse && (e = t.length,
                    r = !1);
            n.memory || (r = !1);
            o = !1;
            f && (t = r ? [] : "")
        }, h = {
            add: function() {
                return t && (r && !o && (e = t.length - 1,
                s.push(r)),
                function f(r) {
                    i.each(r, function(i, r) {
                        u(r) ? n.unique && h.has(r) || t.push(r) : r && r.length && tt(r) !== "string" && f(r)
                    })
                }(arguments),
                r && !o && l()),
                this
            },
            remove: function() {
                return i.each(arguments, function(n, r) {
                    for (var u; (u = i.inArray(r, t, u)) > -1; )
                        t.splice(u, 1),
                        u <= e && e--
                }),
                this
            },
            has: function(n) {
                return n ? i.inArray(n, t) > -1 : t.length > 0
            },
            empty: function() {
                return t && (t = []),
                this
            },
            disable: function() {
                return f = s = [],
                t = r = "",
                this
            },
            disabled: function() {
                return !t
            },
            lock: function() {
                return f = s = [],
                r || o || (t = r = ""),
                this
            },
            locked: function() {
                return !!f
            },
            fireWith: function(n, t) {
                return f || (t = t || [],
                t = [n, t.slice ? t.slice() : t],
                s.push(t),
                o || l()),
                this
            },
            fire: function() {
                return h.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!c
            }
        };
        return h
    }
    ;
    i.extend({
        Deferred: function(t) {
            var f = [["notify", "progress", i.Callbacks("memory"), i.Callbacks("memory"), 2], ["resolve", "done", i.Callbacks("once memory"), i.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", i.Callbacks("once memory"), i.Callbacks("once memory"), 1, "rejected"]]
              , o = "pending"
              , e = {
                state: function() {
                    return o
                },
                always: function() {
                    return r.done(arguments).fail(arguments),
                    this
                },
                "catch": function(n) {
                    return e.then(null, n)
                },
                pipe: function() {
                    var n = arguments;
                    return i.Deferred(function(t) {
                        i.each(f, function(i, f) {
                            var e = u(n[f[4]]) && n[f[4]];
                            r[f[1]](function() {
                                var n = e && e.apply(this, arguments);
                                n && u(n.promise) ? n.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[f[0] + "With"](this, e ? [n] : arguments)
                            })
                        });
                        n = null
                    }).promise()
                },
                then: function(t, r, e) {
                    function o(t, r, f, e) {
                        return function() {
                            var h = this
                              , c = arguments
                              , a = function() {
                                var n, i;
                                if (!(t < s)) {
                                    if (n = f.apply(h, c),
                                    n === r.promise())
                                        throw new TypeError("Thenable self-resolution");
                                    i = n && (typeof n == "object" || typeof n == "function") && n.then;
                                    u(i) ? e ? i.call(n, o(s, r, it, e), o(s, r, ni, e)) : (s++,
                                    i.call(n, o(s, r, it, e), o(s, r, ni, e), o(s, r, it, r.notifyWith))) : (f !== it && (h = undefined,
                                    c = [n]),
                                    (e || r.resolveWith)(h, c))
                                }
                            }
                              , l = e ? a : function() {
                                try {
                                    a()
                                } catch (n) {
                                    i.Deferred.exceptionHook && i.Deferred.exceptionHook(n, l.stackTrace);
                                    t + 1 >= s && (f !== ni && (h = undefined,
                                    c = [n]),
                                    r.rejectWith(h, c))
                                }
                            }
                            ;
                            t ? l() : (i.Deferred.getStackHook && (l.stackTrace = i.Deferred.getStackHook()),
                            n.setTimeout(l))
                        }
                    }
                    var s = 0;
                    return i.Deferred(function(n) {
                        f[0][3].add(o(0, n, u(e) ? e : it, n.notifyWith));
                        f[1][3].add(o(0, n, u(t) ? t : it));
                        f[2][3].add(o(0, n, u(r) ? r : ni))
                    }).promise()
                },
                promise: function(n) {
                    return n != null ? i.extend(n, e) : e
                }
            }
              , r = {};
            return i.each(f, function(n, t) {
                var i = t[2]
                  , u = t[5];
                e[t[1]] = i.add;
                u && i.add(function() {
                    o = u
                }, f[3 - n][2].disable, f[3 - n][3].disable, f[0][2].lock, f[0][3].lock);
                i.add(t[3].fire);
                r[t[0]] = function() {
                    return r[t[0] + "With"](this === r ? undefined : this, arguments),
                    this
                }
                ;
                r[t[0] + "With"] = i.fireWith
            }),
            e.promise(r),
            t && t.call(r, r),
            r
        },
        when: function(n) {
            var e = arguments.length
              , t = e
              , o = Array(t)
              , f = b.call(arguments)
              , r = i.Deferred()
              , s = function(n) {
                return function(t) {
                    o[n] = this;
                    f[n] = arguments.length > 1 ? b.call(arguments) : t;
                    --e || r.resolveWith(o, f)
                }
            };
            if (e <= 1 && (vr(n, r.done(s(t)).resolve, r.reject, !e),
            r.state() === "pending" || u(f[t] && f[t].then)))
                return r.then();
            while (t--)
                vr(f[t], s(t), r.reject);
            return r.promise()
        }
    });
    pu = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    i.Deferred.exceptionHook = function(t, i) {
        n.console && n.console.warn && t && pu.test(t.name) && n.console.warn("jQuery.Deferred exception: " + t.message, t.stack, i)
    }
    ;
    i.readyException = function(t) {
        n.setTimeout(function() {
            throw t;
        })
    }
    ;
    oi = i.Deferred();
    i.fn.ready = function(n) {
        return oi.then(n).catch(function(n) {
            i.readyException(n)
        }),
        this
    }
    ;
    i.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(n) {
            (n === !0 ? --i.readyWait : i.isReady) || (i.isReady = !0,
            n !== !0 && --i.readyWait > 0) || oi.resolveWith(f, [i])
        }
    });
    i.ready.then = oi.then;
    f.readyState !== "complete" && (f.readyState === "loading" || f.documentElement.doScroll) ? (f.addEventListener("DOMContentLoaded", ti),
    n.addEventListener("load", ti)) : n.setTimeout(i.ready);
    var p = function(n, t, r, f, e, o, s) {
        var h = 0
          , l = n.length
          , c = r == null;
        if (tt(r) === "object") {
            e = !0;
            for (h in r)
                p(n, t, h, r[h], !0, o, s)
        } else if (f !== undefined && (e = !0,
        u(f) || (s = !0),
        c && (s ? (t.call(n, f),
        t = null) : (c = t,
        t = function(n, t, r) {
            return c.call(i(n), r)
        }
        )),
        t))
            for (; h < l; h++)
                t(n[h], r, s ? f : f.call(n[h], h, t(n[h], r)));
        return e ? n : c ? t.call(n) : l ? t(n[0], r) : o
    }
      , ke = /^-ms-/
      , de = /-([a-z])/g;
    pt = function(n) {
        return n.nodeType === 1 || n.nodeType === 9 || !+n.nodeType
    }
    ;
    vt.uid = 1;
    vt.prototype = {
        cache: function(n) {
            var t = n[this.expando];
            return t || (t = {},
            pt(n) && (n.nodeType ? n[this.expando] = t : Object.defineProperty(n, this.expando, {
                value: t,
                configurable: !0
            }))),
            t
        },
        set: function(n, t, i) {
            var r, u = this.cache(n);
            if (typeof t == "string")
                u[y(t)] = i;
            else
                for (r in t)
                    u[y(r)] = t[r];
            return u
        },
        get: function(n, t) {
            return t === undefined ? this.cache(n) : n[this.expando] && n[this.expando][y(t)]
        },
        access: function(n, t, i) {
            return t === undefined || t && typeof t == "string" && i === undefined ? this.get(n, t) : (this.set(n, t, i),
            i !== undefined ? i : t)
        },
        remove: function(n, t) {
            var u, r = n[this.expando];
            if (r !== undefined) {
                if (t !== undefined)
                    for (Array.isArray(t) ? t = t.map(y) : (t = y(t),
                    t = (t in r) ? [t] : t.match(v) || []),
                    u = t.length; u--; )
                        delete r[t[u]];
                (t === undefined || i.isEmptyObject(r)) && (n.nodeType ? n[this.expando] = undefined : delete n[this.expando])
            }
        },
        hasData: function(n) {
            var t = n[this.expando];
            return t !== undefined && !i.isEmptyObject(t)
        }
    };
    var r = new vt
      , h = new vt
      , ge = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
      , no = /[A-Z]/g;
    i.extend({
        hasData: function(n) {
            return h.hasData(n) || r.hasData(n)
        },
        data: function(n, t, i) {
            return h.access(n, t, i)
        },
        removeData: function(n, t) {
            h.remove(n, t)
        },
        _data: function(n, t, i) {
            return r.access(n, t, i)
        },
        _removeData: function(n, t) {
            r.remove(n, t)
        }
    });
    i.fn.extend({
        data: function(n, t) {
            var f, u, e, i = this[0], o = i && i.attributes;
            if (n === undefined) {
                if (this.length && (e = h.get(i),
                i.nodeType === 1 && !r.get(i, "hasDataAttrs"))) {
                    for (f = o.length; f--; )
                        o[f] && (u = o[f].name,
                        u.indexOf("data-") === 0 && (u = y(u.slice(5)),
                        yr(i, u, e[u])));
                    r.set(i, "hasDataAttrs", !0)
                }
                return e
            }
            return typeof n == "object" ? this.each(function() {
                h.set(this, n)
            }) : p(this, function(t) {
                var r;
                if (i && t === undefined)
                    return (r = h.get(i, n),
                    r !== undefined) ? r : (r = yr(i, n),
                    r !== undefined) ? r : void 0;
                this.each(function() {
                    h.set(this, n, t)
                })
            }, null, t, arguments.length > 1, null, !0)
        },
        removeData: function(n) {
            return this.each(function() {
                h.remove(this, n)
            })
        }
    });
    i.extend({
        queue: function(n, t, u) {
            var f;
            if (n)
                return t = (t || "fx") + "queue",
                f = r.get(n, t),
                u && (!f || Array.isArray(u) ? f = r.access(n, t, i.makeArray(u)) : f.push(u)),
                f || []
        },
        dequeue: function(n, t) {
            t = t || "fx";
            var r = i.queue(n, t)
              , e = r.length
              , u = r.shift()
              , f = i._queueHooks(n, t)
              , o = function() {
                i.dequeue(n, t)
            };
            u === "inprogress" && (u = r.shift(),
            e--);
            u && (t === "fx" && r.unshift("inprogress"),
            delete f.stop,
            u.call(n, o, f));
            !e && f && f.empty.fire()
        },
        _queueHooks: function(n, t) {
            var u = t + "queueHooks";
            return r.get(n, u) || r.access(n, u, {
                empty: i.Callbacks("once memory").add(function() {
                    r.remove(n, [t + "queue", u])
                })
            })
        }
    });
    i.fn.extend({
        queue: function(n, t) {
            var r = 2;
            return (typeof n != "string" && (t = n,
            n = "fx",
            r--),
            arguments.length < r) ? i.queue(this[0], n) : t === undefined ? this : this.each(function() {
                var r = i.queue(this, n, t);
                i._queueHooks(this, n);
                n === "fx" && r[0] !== "inprogress" && i.dequeue(this, n)
            })
        },
        dequeue: function(n) {
            return this.each(function() {
                i.dequeue(this, n)
            })
        },
        clearQueue: function(n) {
            return this.queue(n || "fx", [])
        },
        promise: function(n, t) {
            var u, e = 1, o = i.Deferred(), f = this, s = this.length, h = function() {
                --e || o.resolveWith(f, [f])
            };
            for (typeof n != "string" && (t = n,
            n = undefined),
            n = n || "fx"; s--; )
                u = r.get(f[s], n + "queueHooks"),
                u && u.empty && (e++,
                u.empty.add(h));
            return h(),
            o.promise(t)
        }
    });
    var sf = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
      , bt = new RegExp("^(?:([+-])=|)(" + sf + ")([a-z%]*)$","i")
      , w = ["Top", "Right", "Bottom", "Left"]
      , kt = f.documentElement
      , at = function(n) {
        return i.contains(n.ownerDocument, n)
    }
      , to = {
        composed: !0
    };
    kt.getRootNode && (at = function(n) {
        return i.contains(n.ownerDocument, n) || n.getRootNode(to) === n.ownerDocument
    }
    );
    wt = function(n, t) {
        return n = t || n,
        n.style.display === "none" || n.style.display === "" && at(n) && i.css(n, "display") === "none"
    }
    ;
    ir = function(n, t, i, r) {
        var f, u, e = {};
        for (u in t)
            e[u] = n.style[u],
            n.style[u] = t[u];
        f = i.apply(n, r || []);
        for (u in t)
            n.style[u] = e[u];
        return f
    }
    ;
    rr = {};
    i.fn.extend({
        show: function() {
            return rt(this, !0)
        },
        hide: function() {
            return rt(this)
        },
        toggle: function(n) {
            return typeof n == "boolean" ? n ? this.show() : this.hide() : this.each(function() {
                wt(this) ? i(this).show() : i(this).hide()
            })
        }
    });
    var dt = /^(?:checkbox|radio)$/i
      , hf = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i
      , cf = /^$|^module$|\/(?:java|ecma)script/i
      , c = {
        option: [1, "<select multiple='multiple'>", "<\/select>"],
        thead: [1, "<table>", "<\/table>"],
        col: [2, "<table><colgroup>", "<\/colgroup><\/table>"],
        tr: [2, "<table><tbody>", "<\/tbody><\/table>"],
        td: [3, "<table><tbody><tr>", "<\/tr><\/tbody><\/table>"],
        _default: [0, "", ""]
    };
    c.optgroup = c.option;
    c.tbody = c.tfoot = c.colgroup = c.caption = c.thead;
    c.th = c.td;
    wu = /<|&#?\w+;/,
    function() {
        var i = f.createDocumentFragment()
          , n = i.appendChild(f.createElement("div"))
          , t = f.createElement("input");
        t.setAttribute("type", "radio");
        t.setAttribute("checked", "checked");
        t.setAttribute("name", "t");
        n.appendChild(t);
        e.checkClone = n.cloneNode(!0).cloneNode(!0).lastChild.checked;
        n.innerHTML = "<textarea>x<\/textarea>";
        e.noCloneChecked = !!n.cloneNode(!0).lastChild.defaultValue
    }();
    var io = /^key/
      , ro = /^(?:mouse|pointer|contextmenu|drag|drop)|click/
      , lf = /^([^.]*)(?:\.(.+)|)/;
    i.event = {
        global: {},
        add: function(n, t, u, f, e) {
            var a, y, w, p, b, h, s, c, o, k, d, l = r.get(n);
            if (l)
                for (u.handler && (a = u,
                u = a.handler,
                e = a.selector),
                e && i.find.matchesSelector(kt, e),
                u.guid || (u.guid = i.guid++),
                (p = l.events) || (p = l.events = {}),
                (y = l.handle) || (y = l.handle = function(t) {
                    return typeof i != "undefined" && i.event.triggered !== t.type ? i.event.dispatch.apply(n, arguments) : undefined
                }
                ),
                t = (t || "").match(v) || [""],
                b = t.length; b--; )
                    (w = lf.exec(t[b]) || [],
                    o = d = w[1],
                    k = (w[2] || "").split(".").sort(),
                    o) && (s = i.event.special[o] || {},
                    o = (e ? s.delegateType : s.bindType) || o,
                    s = i.event.special[o] || {},
                    h = i.extend({
                        type: o,
                        origType: d,
                        data: f,
                        handler: u,
                        guid: u.guid,
                        selector: e,
                        needsContext: e && i.expr.match.needsContext.test(e),
                        namespace: k.join(".")
                    }, a),
                    (c = p[o]) || (c = p[o] = [],
                    c.delegateCount = 0,
                    s.setup && s.setup.call(n, f, k, y) !== !1 || n.addEventListener && n.addEventListener(o, y)),
                    s.add && (s.add.call(n, h),
                    h.handler.guid || (h.handler.guid = u.guid)),
                    e ? c.splice(c.delegateCount++, 0, h) : c.push(h),
                    i.event.global[o] = !0)
        },
        remove: function(n, t, u, f, e) {
            var y, k, h, a, p, s, c, l, o, b, d, w = r.hasData(n) && r.get(n);
            if (w && (a = w.events)) {
                for (t = (t || "").match(v) || [""],
                p = t.length; p--; ) {
                    if (h = lf.exec(t[p]) || [],
                    o = d = h[1],
                    b = (h[2] || "").split(".").sort(),
                    !o) {
                        for (o in a)
                            i.event.remove(n, o + t[p], u, f, !0);
                        continue
                    }
                    for (c = i.event.special[o] || {},
                    o = (f ? c.delegateType : c.bindType) || o,
                    l = a[o] || [],
                    h = h[2] && new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                    k = y = l.length; y--; )
                        s = l[y],
                        (e || d === s.origType) && (!u || u.guid === s.guid) && (!h || h.test(s.namespace)) && (!f || f === s.selector || f === "**" && s.selector) && (l.splice(y, 1),
                        s.selector && l.delegateCount--,
                        c.remove && c.remove.call(n, s));
                    k && !l.length && (c.teardown && c.teardown.call(n, b, w.handle) !== !1 || i.removeEvent(n, o, w.handle),
                    delete a[o])
                }
                i.isEmptyObject(a) && r.remove(n, "handle events")
            }
        },
        dispatch: function(n) {
            var t = i.event.fix(n), u, c, s, e, f, l, h = new Array(arguments.length), a = (r.get(this, "events") || {})[t.type] || [], o = i.event.special[t.type] || {};
            for (h[0] = t,
            u = 1; u < arguments.length; u++)
                h[u] = arguments[u];
            if (t.delegateTarget = this,
            !o.preDispatch || o.preDispatch.call(this, t) !== !1) {
                for (l = i.event.handlers.call(this, t, a),
                u = 0; (e = l[u++]) && !t.isPropagationStopped(); )
                    for (t.currentTarget = e.elem,
                    c = 0; (f = e.handlers[c++]) && !t.isImmediatePropagationStopped(); )
                        (!t.rnamespace || f.namespace === !1 || t.rnamespace.test(f.namespace)) && (t.handleObj = f,
                        t.data = f.data,
                        s = ((i.event.special[f.origType] || {}).handle || f.handler).apply(e.elem, h),
                        s !== undefined && (t.result = s) === !1 && (t.preventDefault(),
                        t.stopPropagation()));
                return o.postDispatch && o.postDispatch.call(this, t),
                t.result
            }
        },
        handlers: function(n, t) {
            var f, e, u, o, s, c = [], h = t.delegateCount, r = n.target;
            if (h && r.nodeType && !(n.type === "click" && n.button >= 1))
                for (; r !== this; r = r.parentNode || this)
                    if (r.nodeType === 1 && !(n.type === "click" && r.disabled === !0)) {
                        for (o = [],
                        s = {},
                        f = 0; f < h; f++)
                            e = t[f],
                            u = e.selector + " ",
                            s[u] === undefined && (s[u] = e.needsContext ? i(u, this).index(r) > -1 : i.find(u, this, null, [r]).length),
                            s[u] && o.push(e);
                        o.length && c.push({
                            elem: r,
                            handlers: o
                        })
                    }
            return r = this,
            h < t.length && c.push({
                elem: r,
                handlers: t.slice(h)
            }),
            c
        },
        addProp: function(n, t) {
            Object.defineProperty(i.Event.prototype, n, {
                enumerable: !0,
                configurable: !0,
                get: u(t) ? function() {
                    if (this.originalEvent)
                        return t(this.originalEvent)
                }
                : function() {
                    if (this.originalEvent)
                        return this.originalEvent[n]
                }
                ,
                set: function(t) {
                    Object.defineProperty(this, n, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: t
                    })
                }
            })
        },
        fix: function(n) {
            return n[i.expando] ? n : new i.Event(n)
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                setup: function(n) {
                    var t = this || n;
                    return dt.test(t.type) && t.click && l(t, "input") && ii(t, "click", ut),
                    !1
                },
                trigger: function(n) {
                    var t = this || n;
                    return dt.test(t.type) && t.click && l(t, "input") && ii(t, "click"),
                    !0
                },
                _default: function(n) {
                    var t = n.target;
                    return dt.test(t.type) && t.click && l(t, "input") && r.get(t, "click") || l(t, "a")
                }
            },
            beforeunload: {
                postDispatch: function(n) {
                    n.result !== undefined && n.originalEvent && (n.originalEvent.returnValue = n.result)
                }
            }
        }
    };
    i.removeEvent = function(n, t, i) {
        n.removeEventListener && n.removeEventListener(t, i)
    }
    ;
    i.Event = function(n, t) {
        if (!(this instanceof i.Event))
            return new i.Event(n,t);
        n && n.type ? (this.originalEvent = n,
        this.type = n.type,
        this.isDefaultPrevented = n.defaultPrevented || n.defaultPrevented === undefined && n.returnValue === !1 ? ut : ft,
        this.target = n.target && n.target.nodeType === 3 ? n.target.parentNode : n.target,
        this.currentTarget = n.currentTarget,
        this.relatedTarget = n.relatedTarget) : this.type = n;
        t && i.extend(this, t);
        this.timeStamp = n && n.timeStamp || Date.now();
        this[i.expando] = !0
    }
    ;
    i.Event.prototype = {
        constructor: i.Event,
        isDefaultPrevented: ft,
        isPropagationStopped: ft,
        isImmediatePropagationStopped: ft,
        isSimulated: !1,
        preventDefault: function() {
            var n = this.originalEvent;
            this.isDefaultPrevented = ut;
            n && !this.isSimulated && n.preventDefault()
        },
        stopPropagation: function() {
            var n = this.originalEvent;
            this.isPropagationStopped = ut;
            n && !this.isSimulated && n.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var n = this.originalEvent;
            this.isImmediatePropagationStopped = ut;
            n && !this.isSimulated && n.stopImmediatePropagation();
            this.stopPropagation()
        }
    };
    i.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function(n) {
            var t = n.button;
            return n.which == null && io.test(n.type) ? n.charCode != null ? n.charCode : n.keyCode : !n.which && t !== undefined && ro.test(n.type) ? t & 1 ? 1 : t & 2 ? 3 : t & 4 ? 2 : 0 : n.which
        }
    }, i.event.addProp);
    i.each({
        focus: "focusin",
        blur: "focusout"
    }, function(n, t) {
        i.event.special[n] = {
            setup: function() {
                return ii(this, n, ue),
                !1
            },
            trigger: function() {
                return ii(this, n),
                !0
            },
            delegateType: t
        }
    });
    i.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(n, t) {
        i.event.special[n] = {
            delegateType: t,
            bindType: t,
            handle: function(n) {
                var u, f = this, r = n.relatedTarget, e = n.handleObj;
                return r && (r === f || i.contains(f, r)) || (n.type = e.origType,
                u = e.handler.apply(this, arguments),
                n.type = t),
                u
            }
        }
    });
    i.fn.extend({
        on: function(n, t, i, r) {
            return yi(this, n, t, i, r)
        },
        one: function(n, t, i, r) {
            return yi(this, n, t, i, r, 1)
        },
        off: function(n, t, r) {
            var u, f;
            if (n && n.preventDefault && n.handleObj)
                return u = n.handleObj,
                i(n.delegateTarget).off(u.namespace ? u.origType + "." + u.namespace : u.origType, u.selector, u.handler),
                this;
            if (typeof n == "object") {
                for (f in n)
                    this.off(f, t, n[f]);
                return this
            }
            return (t === !1 || typeof t == "function") && (r = t,
            t = undefined),
            r === !1 && (r = ft),
            this.each(function() {
                i.event.remove(this, n, r, t)
            })
        }
    });
    var uo = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi
      , fo = /<script|<style|<link/i
      , eo = /checked\s*(?:[^=]|=\s*.checked.)/i
      , oo = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    i.extend({
        htmlPrefilter: function(n) {
            return n.replace(uo, "<$1><\/$2>")
        },
        clone: function(n, t, r) {
            var u, c, s, f, h = n.cloneNode(!0), l = at(n);
            if (!e.noCloneChecked && (n.nodeType === 1 || n.nodeType === 11) && !i.isXMLDoc(n))
                for (f = o(h),
                s = o(n),
                u = 0,
                c = s.length; u < c; u++)
                    se(s[u], f[u]);
            if (t)
                if (r)
                    for (s = s || o(n),
                    f = f || o(h),
                    u = 0,
                    c = s.length; u < c; u++)
                        kr(s[u], f[u]);
                else
                    kr(n, h);
            return f = o(h, "script"),
            f.length > 0 && vi(f, !l && o(n, "script")),
            h
        },
        cleanData: function(n) {
            for (var u, t, f, o = i.event.special, e = 0; (t = n[e]) !== undefined; e++)
                if (pt(t)) {
                    if (u = t[r.expando]) {
                        if (u.events)
                            for (f in u.events)
                                o[f] ? i.event.remove(t, f) : i.removeEvent(t, f, u.handle);
                        t[r.expando] = undefined
                    }
                    t[h.expando] && (t[h.expando] = undefined)
                }
        }
    });
    i.fn.extend({
        detach: function(n) {
            return dr(this, n, !0)
        },
        remove: function(n) {
            return dr(this, n)
        },
        text: function(n) {
            return p(this, function(n) {
                return n === undefined ? i.text(this) : this.empty().each(function() {
                    (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) && (this.textContent = n)
                })
            }, null, n, arguments.length)
        },
        append: function() {
            return et(this, arguments, function(n) {
                if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                    var t = br(this, n);
                    t.appendChild(n)
                }
            })
        },
        prepend: function() {
            return et(this, arguments, function(n) {
                if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                    var t = br(this, n);
                    t.insertBefore(n, t.firstChild)
                }
            })
        },
        before: function() {
            return et(this, arguments, function(n) {
                this.parentNode && this.parentNode.insertBefore(n, this)
            })
        },
        after: function() {
            return et(this, arguments, function(n) {
                this.parentNode && this.parentNode.insertBefore(n, this.nextSibling)
            })
        },
        empty: function() {
            for (var n, t = 0; (n = this[t]) != null; t++)
                n.nodeType === 1 && (i.cleanData(o(n, !1)),
                n.textContent = "");
            return this
        },
        clone: function(n, t) {
            return n = n == null ? !1 : n,
            t = t == null ? n : t,
            this.map(function() {
                return i.clone(this, n, t)
            })
        },
        html: function(n) {
            return p(this, function(n) {
                var t = this[0] || {}
                  , r = 0
                  , u = this.length;
                if (n === undefined && t.nodeType === 1)
                    return t.innerHTML;
                if (typeof n == "string" && !fo.test(n) && !c[(hf.exec(n) || ["", ""])[1].toLowerCase()]) {
                    n = i.htmlPrefilter(n);
                    try {
                        for (; r < u; r++)
                            t = this[r] || {},
                            t.nodeType === 1 && (i.cleanData(o(t, !1)),
                            t.innerHTML = n);
                        t = 0
                    } catch (f) {}
                }
                t && this.empty().append(n)
            }, null, n, arguments.length)
        },
        replaceWith: function() {
            var n = [];
            return et(this, arguments, function(t) {
                var r = this.parentNode;
                i.inArray(this, n) < 0 && (i.cleanData(o(this)),
                r && r.replaceChild(t, this))
            }, n)
        }
    });
    i.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(n, t) {
        i.fn[n] = function(n) {
            for (var u, f = [], e = i(n), o = e.length - 1, r = 0; r <= o; r++)
                u = r === o ? this : this.clone(!0),
                i(e[r])[t](u),
                nr.apply(f, u.get());
            return this.pushStack(f)
        }
    });
    var or = new RegExp("^(" + sf + ")(?!px)[a-z%]+$","i")
      , ci = function(t) {
        var i = t.ownerDocument.defaultView;
        return i && i.opener || (i = n),
        i.getComputedStyle(t)
    }
      , so = new RegExp(w.join("|"),"i");
    (function() {
        function r() {
            if (t) {
                o.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0";
                t.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%";
                kt.appendChild(o).appendChild(t);
                var i = n.getComputedStyle(t);
                s = i.top !== "1%";
                a = u(i.marginLeft) === 12;
                t.style.right = "60%";
                l = u(i.right) === 36;
                h = u(i.width) === 36;
                t.style.position = "absolute";
                c = u(t.offsetWidth / 3) === 12;
                kt.removeChild(o);
                t = null
            }
        }
        function u(n) {
            return Math.round(parseFloat(n))
        }
        var s, h, c, l, a, o = f.createElement("div"), t = f.createElement("div");
        t.style && (t.style.backgroundClip = "content-box",
        t.cloneNode(!0).style.backgroundClip = "",
        e.clearCloneStyle = t.style.backgroundClip === "content-box",
        i.extend(e, {
            boxSizingReliable: function() {
                return r(),
                h
            },
            pixelBoxStyles: function() {
                return r(),
                l
            },
            pixelPosition: function() {
                return r(),
                s
            },
            reliableMarginLeft: function() {
                return r(),
                a
            },
            scrollboxSize: function() {
                return r(),
                c
            }
        }))
    }
    )();
    var af = ["Webkit", "Moz", "ms"]
      , vf = f.createElement("div").style
      , yf = {}
      , ho = /^(none|table(?!-c[ea]).+)/
      , pf = /^--/
      , co = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }
      , wf = {
        letterSpacing: "0",
        fontWeight: "400"
    };
    i.extend({
        cssHooks: {
            opacity: {
                get: function(n, t) {
                    if (t) {
                        var i = yt(n, "opacity");
                        return i === "" ? "1" : i
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function(n, t, r, u) {
            if (n && n.nodeType !== 3 && n.nodeType !== 8 && n.style) {
                var f, s, o, c = y(t), l = pf.test(t), h = n.style;
                if (l || (t = pi(c)),
                o = i.cssHooks[t] || i.cssHooks[c],
                r !== undefined) {
                    if (s = typeof r,
                    s === "string" && (f = bt.exec(r)) && f[1] && (r = pr(n, t, f),
                    s = "number"),
                    r == null || r !== r)
                        return;
                    s !== "number" || l || (r += f && f[3] || (i.cssNumber[c] ? "" : "px"));
                    e.clearCloneStyle || r !== "" || t.indexOf("background") !== 0 || (h[t] = "inherit");
                    o && "set"in o && (r = o.set(n, r, u)) === undefined || (l ? h.setProperty(t, r) : h[t] = r)
                } else
                    return o && "get"in o && (f = o.get(n, !1, u)) !== undefined ? f : h[t]
            }
        },
        css: function(n, t, r, u) {
            var f, o, e, s = y(t), h = pf.test(t);
            return (h || (t = pi(s)),
            e = i.cssHooks[t] || i.cssHooks[s],
            e && "get"in e && (f = e.get(n, !0, r)),
            f === undefined && (f = yt(n, t, u)),
            f === "normal" && t in wf && (f = wf[t]),
            r === "" || r) ? (o = parseFloat(f),
            r === !0 || isFinite(o) ? o || 0 : f) : f
        }
    });
    i.each(["height", "width"], function(n, t) {
        i.cssHooks[t] = {
            get: function(n, r, u) {
                if (r)
                    return ho.test(i.css(n, "display")) && (!n.getClientRects().length || !n.getBoundingClientRect().width) ? ir(n, co, function() {
                        return tu(n, t, u)
                    }) : tu(n, t, u)
            },
            set: function(n, r, u) {
                var s, f = ci(n), h = !e.scrollboxSize() && f.position === "absolute", l = h || u, c = l && i.css(n, "boxSizing", !1, f) === "border-box", o = u ? wi(n, t, u, c, f) : 0;
                return c && h && (o -= Math.ceil(n["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(f[t]) - wi(n, t, "border", !1, f) - .5)),
                o && (s = bt.exec(r)) && (s[3] || "px") !== "px" && (n.style[t] = r,
                r = i.css(n, t)),
                nu(n, r, o)
            }
        }
    });
    i.cssHooks.marginLeft = gr(e.reliableMarginLeft, function(n, t) {
        if (t)
            return (parseFloat(yt(n, "marginLeft")) || n.getBoundingClientRect().left - ir(n, {
                marginLeft: 0
            }, function() {
                return n.getBoundingClientRect().left
            })) + "px"
    });
    i.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(n, t) {
        i.cssHooks[n + t] = {
            expand: function(i) {
                for (var r = 0, f = {}, u = typeof i == "string" ? i.split(" ") : [i]; r < 4; r++)
                    f[n + w[r] + t] = u[r] || u[r - 2] || u[0];
                return f
            }
        };
        n !== "margin" && (i.cssHooks[n + t].set = nu)
    });
    i.fn.extend({
        css: function(n, t) {
            return p(this, function(n, t, r) {
                var f, e, o = {}, u = 0;
                if (Array.isArray(t)) {
                    for (f = ci(n),
                    e = t.length; u < e; u++)
                        o[t[u]] = i.css(n, t[u], !1, f);
                    return o
                }
                return r !== undefined ? i.style(n, t, r) : i.css(n, t)
            }, n, t, arguments.length > 1)
        }
    });
    i.Tween = s;
    s.prototype = {
        constructor: s,
        init: function(n, t, r, u, f, e) {
            this.elem = n;
            this.prop = r;
            this.easing = f || i.easing._default;
            this.options = t;
            this.start = this.now = this.cur();
            this.end = u;
            this.unit = e || (i.cssNumber[r] ? "" : "px")
        },
        cur: function() {
            var n = s.propHooks[this.prop];
            return n && n.get ? n.get(this) : s.propHooks._default.get(this)
        },
        run: function(n) {
            var r, t = s.propHooks[this.prop];
            return this.pos = r = this.options.duration ? i.easing[this.easing](n, this.options.duration * n, 0, 1, this.options.duration) : n,
            this.now = (this.end - this.start) * r + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            t && t.set ? t.set(this) : s.propHooks._default.set(this),
            this
        }
    };
    s.prototype.init.prototype = s.prototype;
    s.propHooks = {
        _default: {
            get: function(n) {
                var t;
                return n.elem.nodeType !== 1 || n.elem[n.prop] != null && n.elem.style[n.prop] == null ? n.elem[n.prop] : (t = i.css(n.elem, n.prop, ""),
                !t || t === "auto" ? 0 : t)
            },
            set: function(n) {
                i.fx.step[n.prop] ? i.fx.step[n.prop](n) : n.elem.nodeType === 1 && (i.cssHooks[n.prop] || n.elem.style[pi(n.prop)] != null) ? i.style(n.elem, n.prop, n.now + n.unit) : n.elem[n.prop] = n.now
            }
        }
    };
    s.propHooks.scrollTop = s.propHooks.scrollLeft = {
        set: function(n) {
            n.elem.nodeType && n.elem.parentNode && (n.elem[n.prop] = n.now)
        }
    };
    i.easing = {
        linear: function(n) {
            return n
        },
        swing: function(n) {
            return .5 - Math.cos(n * Math.PI) / 2
        },
        _default: "swing"
    };
    i.fx = s.prototype.init;
    i.fx.step = {};
    bu = /^(?:toggle|show|hide)$/;
    ku = /queueHooks$/;
    i.Animation = i.extend(a, {
        tweeners: {
            "*": [function(n, t) {
                var i = this.createTween(n, t);
                return pr(i.elem, n, bt.exec(t), i),
                i
            }
            ]
        },
        tweener: function(n, t) {
            u(n) ? (t = n,
            n = ["*"]) : n = n.match(v);
            for (var i, r = 0, f = n.length; r < f; r++)
                i = n[r],
                a.tweeners[i] = a.tweeners[i] || [],
                a.tweeners[i].unshift(t)
        },
        prefilters: [ce],
        prefilter: function(n, t) {
            t ? a.prefilters.unshift(n) : a.prefilters.push(n)
        }
    });
    i.speed = function(n, t, r) {
        var f = n && typeof n == "object" ? i.extend({}, n) : {
            complete: r || !r && t || u(n) && n,
            duration: n,
            easing: r && t || t && !u(t) && t
        };
        return i.fx.off ? f.duration = 0 : typeof f.duration != "number" && (f.duration = f.duration in i.fx.speeds ? i.fx.speeds[f.duration] : i.fx.speeds._default),
        (f.queue == null || f.queue === !0) && (f.queue = "fx"),
        f.old = f.complete,
        f.complete = function() {
            u(f.old) && f.old.call(this);
            f.queue && i.dequeue(this, f.queue)
        }
        ,
        f
    }
    ;
    i.fn.extend({
        fadeTo: function(n, t, i, r) {
            return this.filter(wt).css("opacity", 0).show().end().animate({
                opacity: t
            }, n, i, r)
        },
        animate: function(n, t, u, f) {
            var s = i.isEmptyObject(n)
              , o = i.speed(t, u, f)
              , e = function() {
                var t = a(this, i.extend({}, n), o);
                (s || r.get(this, "finish")) && t.stop(!0)
            };
            return e.finish = e,
            s || o.queue === !1 ? this.each(e) : this.queue(o.queue, e)
        },
        stop: function(n, t, u) {
            var f = function(n) {
                var t = n.stop;
                delete n.stop;
                t(u)
            };
            return typeof n != "string" && (u = t,
            t = n,
            n = undefined),
            t && n !== !1 && this.queue(n || "fx", []),
            this.each(function() {
                var s = !0
                  , t = n != null && n + "queueHooks"
                  , o = i.timers
                  , e = r.get(this);
                if (t)
                    e[t] && e[t].stop && f(e[t]);
                else
                    for (t in e)
                        e[t] && e[t].stop && ku.test(t) && f(e[t]);
                for (t = o.length; t--; )
                    o[t].elem === this && (n == null || o[t].queue === n) && (o[t].anim.stop(u),
                    s = !1,
                    o.splice(t, 1));
                (s || !u) && i.dequeue(this, n)
            })
        },
        finish: function(n) {
            return n !== !1 && (n = n || "fx"),
            this.each(function() {
                var t, e = r.get(this), u = e[n + "queue"], o = e[n + "queueHooks"], f = i.timers, s = u ? u.length : 0;
                for (e.finish = !0,
                i.queue(this, n, []),
                o && o.stop && o.stop.call(this, !0),
                t = f.length; t--; )
                    f[t].elem === this && f[t].queue === n && (f[t].anim.stop(!0),
                    f.splice(t, 1));
                for (t = 0; t < s; t++)
                    u[t] && u[t].finish && u[t].finish.call(this);
                delete e.finish
            })
        }
    });
    i.each(["toggle", "show", "hide"], function(n, t) {
        var r = i.fn[t];
        i.fn[t] = function(n, i, u) {
            return n == null || typeof n == "boolean" ? r.apply(this, arguments) : this.animate(ri(t, !0), n, i, u)
        }
    });
    i.each({
        slideDown: ri("show"),
        slideUp: ri("hide"),
        slideToggle: ri("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(n, t) {
        i.fn[n] = function(n, i, r) {
            return this.animate(t, n, i, r)
        }
    });
    i.timers = [];
    i.fx.tick = function() {
        var r, n = 0, t = i.timers;
        for (st = Date.now(); n < t.length; n++)
            r = t[n],
            r() || t[n] !== r || t.splice(n--, 1);
        t.length || i.fx.stop();
        st = undefined
    }
    ;
    i.fx.timer = function(n) {
        i.timers.push(n);
        i.fx.start()
    }
    ;
    i.fx.interval = 13;
    i.fx.start = function() {
        si || (si = !0,
        bi())
    }
    ;
    i.fx.stop = function() {
        si = null
    }
    ;
    i.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    };
    i.fn.delay = function(t, r) {
        return t = i.fx ? i.fx.speeds[t] || t : t,
        r = r || "fx",
        this.queue(r, function(i, r) {
            var u = n.setTimeout(i, t);
            r.stop = function() {
                n.clearTimeout(u)
            }
        })
    }
    ,
    function() {
        var n = f.createElement("input")
          , t = f.createElement("select")
          , i = t.appendChild(f.createElement("option"));
        n.type = "checkbox";
        e.checkOn = n.value !== "";
        e.optSelected = i.selected;
        n = f.createElement("input");
        n.value = "t";
        n.type = "radio";
        e.radioValue = n.value === "t"
    }();
    ht = i.expr.attrHandle;
    i.fn.extend({
        attr: function(n, t) {
            return p(this, i.attr, n, t, arguments.length > 1)
        },
        removeAttr: function(n) {
            return this.each(function() {
                i.removeAttr(this, n)
            })
        }
    });
    i.extend({
        attr: function(n, t, r) {
            var u, f, e = n.nodeType;
            if (e !== 3 && e !== 8 && e !== 2) {
                if (typeof n.getAttribute == "undefined")
                    return i.prop(n, t, r);
                if (e === 1 && i.isXMLDoc(n) || (f = i.attrHooks[t.toLowerCase()] || (i.expr.match.bool.test(t) ? du : undefined)),
                r !== undefined) {
                    if (r === null) {
                        i.removeAttr(n, t);
                        return
                    }
                    return f && "set"in f && (u = f.set(n, r, t)) !== undefined ? u : (n.setAttribute(t, r + ""),
                    r)
                }
                return f && "get"in f && (u = f.get(n, t)) !== null ? u : (u = i.find.attr(n, t),
                u == null ? undefined : u)
            }
        },
        attrHooks: {
            type: {
                set: function(n, t) {
                    if (!e.radioValue && t === "radio" && l(n, "input")) {
                        var i = n.value;
                        return n.setAttribute("type", t),
                        i && (n.value = i),
                        t
                    }
                }
            }
        },
        removeAttr: function(n, t) {
            var i, u = 0, r = t && t.match(v);
            if (r && n.nodeType === 1)
                while (i = r[u++])
                    n.removeAttribute(i)
        }
    });
    du = {
        set: function(n, t, r) {
            return t === !1 ? i.removeAttr(n, r) : n.setAttribute(r, r),
            r
        }
    };
    i.each(i.expr.match.bool.source.match(/\w+/g), function(n, t) {
        var r = ht[t] || i.find.attr;
        ht[t] = function(n, t, i) {
            var f, e, u = t.toLowerCase();
            return i || (e = ht[u],
            ht[u] = f,
            f = r(n, t, i) != null ? u : null,
            ht[u] = e),
            f
        }
    });
    gu = /^(?:input|select|textarea|button)$/i;
    nf = /^(?:a|area)$/i;
    i.fn.extend({
        prop: function(n, t) {
            return p(this, i.prop, n, t, arguments.length > 1)
        },
        removeProp: function(n) {
            return this.each(function() {
                delete this[i.propFix[n] || n]
            })
        }
    });
    i.extend({
        prop: function(n, t, r) {
            var f, u, e = n.nodeType;
            if (e !== 3 && e !== 8 && e !== 2)
                return (e === 1 && i.isXMLDoc(n) || (t = i.propFix[t] || t,
                u = i.propHooks[t]),
                r !== undefined) ? u && "set"in u && (f = u.set(n, r, t)) !== undefined ? f : n[t] = r : u && "get"in u && (f = u.get(n, t)) !== null ? f : n[t]
        },
        propHooks: {
            tabIndex: {
                get: function(n) {
                    var t = i.find.attr(n, "tabindex");
                    return t ? parseInt(t, 10) : gu.test(n.nodeName) || nf.test(n.nodeName) && n.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    });
    e.optSelected || (i.propHooks.selected = {
        get: function(n) {
            var t = n.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex,
            null
        },
        set: function(n) {
            var t = n.parentNode;
            t && (t.selectedIndex,
            t.parentNode && t.parentNode.selectedIndex)
        }
    });
    i.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        i.propFix[this.toLowerCase()] = this
    });
    i.fn.extend({
        addClass: function(n) {
            var f, r, t, e, o, h, s, c = 0;
            if (u(n))
                return this.each(function(t) {
                    i(this).addClass(n.call(this, t, g(this)))
                });
            if (f = ki(n),
            f.length)
                while (r = this[c++])
                    if (e = g(r),
                    t = r.nodeType === 1 && " " + d(e) + " ",
                    t) {
                        for (h = 0; o = f[h++]; )
                            t.indexOf(" " + o + " ") < 0 && (t += o + " ");
                        s = d(t);
                        e !== s && r.setAttribute("class", s)
                    }
            return this
        },
        removeClass: function(n) {
            var f, r, t, e, o, h, s, c = 0;
            if (u(n))
                return this.each(function(t) {
                    i(this).removeClass(n.call(this, t, g(this)))
                });
            if (!arguments.length)
                return this.attr("class", "");
            if (f = ki(n),
            f.length)
                while (r = this[c++])
                    if (e = g(r),
                    t = r.nodeType === 1 && " " + d(e) + " ",
                    t) {
                        for (h = 0; o = f[h++]; )
                            while (t.indexOf(" " + o + " ") > -1)
                                t = t.replace(" " + o + " ", " ");
                        s = d(t);
                        e !== s && r.setAttribute("class", s)
                    }
            return this
        },
        toggleClass: function(n, t) {
            var f = typeof n
              , e = f === "string" || Array.isArray(n);
            return typeof t == "boolean" && e ? t ? this.addClass(n) : this.removeClass(n) : u(n) ? this.each(function(r) {
                i(this).toggleClass(n.call(this, r, g(this), t), t)
            }) : this.each(function() {
                var t, o, u, s;
                if (e)
                    for (o = 0,
                    u = i(this),
                    s = ki(n); t = s[o++]; )
                        u.hasClass(t) ? u.removeClass(t) : u.addClass(t);
                else
                    (n === undefined || f === "boolean") && (t = g(this),
                    t && r.set(this, "__className__", t),
                    this.setAttribute && this.setAttribute("class", t || n === !1 ? "" : r.get(this, "__className__") || ""))
            })
        },
        hasClass: function(n) {
            for (var t, i = 0, r = " " + n + " "; t = this[i++]; )
                if (t.nodeType === 1 && (" " + d(g(t)) + " ").indexOf(r) > -1)
                    return !0;
            return !1
        }
    });
    tf = /\r/g;
    i.fn.extend({
        val: function(n) {
            var t, r, e, f = this[0];
            return arguments.length ? (e = u(n),
            this.each(function(r) {
                var u;
                this.nodeType === 1 && (u = e ? n.call(this, r, i(this).val()) : n,
                u == null ? u = "" : typeof u == "number" ? u += "" : Array.isArray(u) && (u = i.map(u, function(n) {
                    return n == null ? "" : n + ""
                })),
                t = i.valHooks[this.type] || i.valHooks[this.nodeName.toLowerCase()],
                t && "set"in t && t.set(this, u, "value") !== undefined || ($(this).attr("data-autonumber") == undefined ? this.value = u : AutoNumeric.getAutoNumericElement($(this).get(0)).set(u)))
            })) : f ? (t = i.valHooks[f.type] || i.valHooks[f.nodeName.toLowerCase()],
            t && "get"in t && (r = t.get(f, "value")) !== undefined) ? r : (r = f.value,
            typeof r == "string") ? r.replace(tf, "") : r == null ? "" : r : void 0
        }
    });
    i.extend({
        valHooks: {
            option: {
                get: function(n) {
                    var t = i.find.attr(n, "value");
                    return t != null ? t : d(i.text(n))
                }
            },
            select: {
                get: function(n) {
                    for (var e, t, o = n.options, r = n.selectedIndex, u = n.type === "select-one", s = u ? null : [], h = u ? r + 1 : o.length, f = r < 0 ? h : u ? r : 0; f < h; f++)
                        if (t = o[f],
                        (t.selected || f === r) && !t.disabled && (!t.parentNode.disabled || !l(t.parentNode, "optgroup"))) {
                            if (e = i(t).val(),
                            u)
                                return e;
                            s.push(e)
                        }
                    return s
                },
                set: function(n, t) {
                    for (var u, r, f = n.options, e = i.makeArray(t), o = f.length; o--; )
                        r = f[o],
                        (r.selected = i.inArray(i.valHooks.option.get(r), e) > -1) && (u = !0);
                    return u || (n.selectedIndex = -1),
                    e
                }
            }
        }
    });
    i.each(["radio", "checkbox"], function() {
        i.valHooks[this] = {
            set: function(n, t) {
                if (Array.isArray(t))
                    return n.checked = i.inArray(i(n).val(), t) > -1
            }
        };
        e.checkOn || (i.valHooks[this].get = function(n) {
            return n.getAttribute("value") === null ? "on" : n.value
        }
        )
    });
    e.focusin = "onfocusin"in n;
    ur = /^(?:focusinfocus|focusoutblur)$/;
    fr = function(n) {
        n.stopPropagation()
    }
    ;
    i.extend(i.event, {
        trigger: function(t, e, o, s) {
            var k, c, l, d, v, y, a, w, b = [o || f], h = ei.call(t, "type") ? t.type : t, p = ei.call(t, "namespace") ? t.namespace.split(".") : [];
            if ((c = w = l = o = o || f,
            o.nodeType !== 3 && o.nodeType !== 8) && !ur.test(h + i.event.triggered) && (h.indexOf(".") > -1 && (p = h.split("."),
            h = p.shift(),
            p.sort()),
            v = h.indexOf(":") < 0 && "on" + h,
            t = t[i.expando] ? t : new i.Event(h,typeof t == "object" && t),
            t.isTrigger = s ? 2 : 3,
            t.namespace = p.join("."),
            t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
            t.result = undefined,
            t.target || (t.target = o),
            e = e == null ? [t] : i.makeArray(e, [t]),
            a = i.event.special[h] || {},
            s || !a.trigger || a.trigger.apply(o, e) !== !1)) {
                if (!s && !a.noBubble && !ot(o)) {
                    for (d = a.delegateType || h,
                    ur.test(d + h) || (c = c.parentNode); c; c = c.parentNode)
                        b.push(c),
                        l = c;
                    l === (o.ownerDocument || f) && b.push(l.defaultView || l.parentWindow || n)
                }
                for (k = 0; (c = b[k++]) && !t.isPropagationStopped(); )
                    w = c,
                    t.type = k > 1 ? d : a.bindType || h,
                    y = (r.get(c, "events") || {})[t.type] && r.get(c, "handle"),
                    y && y.apply(c, e),
                    y = v && c[v],
                    y && y.apply && pt(c) && (t.result = y.apply(c, e),
                    t.result === !1 && t.preventDefault());
                return t.type = h,
                s || t.isDefaultPrevented() || (!a._default || a._default.apply(b.pop(), e) === !1) && pt(o) && v && u(o[h]) && !ot(o) && (l = o[v],
                l && (o[v] = null),
                i.event.triggered = h,
                t.isPropagationStopped() && w.addEventListener(h, fr),
                o[h](),
                t.isPropagationStopped() && w.removeEventListener(h, fr),
                i.event.triggered = undefined,
                l && (o[v] = l)),
                t.result
            }
        },
        simulate: function(n, t, r) {
            var u = i.extend(new i.Event, r, {
                type: n,
                isSimulated: !0
            });
            i.event.trigger(u, null, t)
        }
    });
    i.fn.extend({
        trigger: function(n, t) {
            return this.each(function() {
                i.event.trigger(n, t, this)
            })
        },
        triggerHandler: function(n, t) {
            var r = this[0];
            if (r)
                return i.event.trigger(n, t, r, !0)
        }
    });
    e.focusin || i.each({
        focus: "focusin",
        blur: "focusout"
    }, function(n, t) {
        var u = function(n) {
            i.event.simulate(t, n.target, i.event.fix(n))
        };
        i.event.special[t] = {
            setup: function() {
                var i = this.ownerDocument || this
                  , f = r.access(i, t);
                f || i.addEventListener(n, u, !0);
                r.access(i, t, (f || 0) + 1)
            },
            teardown: function() {
                var i = this.ownerDocument || this
                  , f = r.access(i, t) - 1;
                f ? r.access(i, t, f) : (i.removeEventListener(n, u, !0),
                r.remove(i, t))
            }
        }
    });
    var gt = n.location
      , bf = Date.now()
      , sr = /\?/;
    i.parseXML = function(t) {
        var r;
        if (!t || typeof t != "string")
            return null;
        try {
            r = (new n.DOMParser).parseFromString(t, "text/xml")
        } catch (u) {
            r = undefined
        }
        return (!r || r.getElementsByTagName("parsererror").length) && i.error("Invalid XML: " + t),
        r
    }
    ;
    var lo = /\[\]$/
      , kf = /\r?\n/g
      , ao = /^(?:submit|button|image|reset|file)$/i
      , vo = /^(?:input|select|textarea|keygen)/i;
    i.param = function(n, t) {
        var r, f = [], e = function(n, t) {
            var i = u(t) ? t() : t;
            f[f.length] = encodeURIComponent(n) + "=" + encodeURIComponent(i == null ? "" : i)
        };
        if (n == null)
            return "";
        if (Array.isArray(n) || n.jquery && !i.isPlainObject(n))
            i.each(n, function() {
                e(this.name, this.value)
            });
        else
            for (r in n)
                di(r, n[r], t, e);
        return f.join("&")
    }
    ;
    i.fn.extend({
        serialize: function() {
            return i.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var n = i.prop(this, "elements");
                return n ? i.makeArray(n) : this
            }).filter(function() {
                var n = this.type;
                return this.name && !i(this).is(":disabled") && vo.test(this.nodeName) && !ao.test(n) && (this.checked || !dt.test(n))
            }).map(function(n, t) {
                var r = i(this).val();
                return r == null ? null : Array.isArray(r) ? i.map(r, function(n) {
                    return {
                        name: t.name,
                        value: n.replace(kf, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: r.replace(kf, "\r\n")
                }
            }).get()
        }
    });
    var yo = /%20/g
      , po = /#.*$/
      , wo = /([?&])_=[^&]*/
      , bo = /^(.*?):[ \t]*([^\r\n]*)$/mg
      , ko = /^(?:GET|HEAD)$/
      , go = /^\/\//
      , df = {}
      , hr = {}
      , gf = "*/".concat("*")
      , cr = f.createElement("a");
    return cr.href = gt.href,
    i.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: gt.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(gt.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": gf,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": i.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(n, t) {
            return t ? gi(gi(n, i.ajaxSettings), t) : gi(i.ajaxSettings, n)
        },
        ajaxPrefilter: uu(df),
        ajaxTransport: uu(hr),
        ajax: function(t, r) {
            function p(t, r, f, l) {
                var v, rt, g, p, w, a = r;
                s || (s = !0,
                d && n.clearTimeout(d),
                c = undefined,
                k = l || "",
                e.readyState = t > 0 ? 4 : 0,
                v = t >= 200 && t < 300 || t === 304,
                f && (p = ae(u, e, f)),
                p = ve(u, p, e, v),
                v ? (u.ifModified && (w = e.getResponseHeader("Last-Modified"),
                w && (i.lastModified[o] = w),
                w = e.getResponseHeader("etag"),
                w && (i.etag[o] = w)),
                t === 204 || u.type === "HEAD" ? a = "nocontent" : t === 304 ? a = "notmodified" : (a = p.state,
                rt = p.data,
                g = p.error,
                v = !g)) : (g = a,
                (t || !a) && (a = "error",
                t < 0 && (t = 0))),
                e.status = t,
                e.statusText = (r || a) + "",
                v ? tt.resolveWith(h, [rt, a, e]) : tt.rejectWith(h, [e, a, g]),
                e.statusCode(b),
                b = undefined,
                y && nt.trigger(v ? "ajaxSuccess" : "ajaxError", [e, u, v ? rt : g]),
                it.fireWith(h, [e, a]),
                y && (nt.trigger("ajaxComplete", [e, u]),
                --i.active || i.event.trigger("ajaxStop")))
            }
            typeof t == "object" && (r = t,
            t = undefined);
            r = r || {};
            var c, o, k, a, d, l, s, y, g, w, u = i.ajaxSetup({}, r), h = u.context || u, nt = u.context && (h.nodeType || h.jquery) ? i(h) : i.event, tt = i.Deferred(), it = i.Callbacks("once memory"), b = u.statusCode || {}, rt = {}, ut = {}, ft = "canceled", e = {
                readyState: 0,
                getResponseHeader: function(n) {
                    var t;
                    if (s) {
                        if (!a)
                            for (a = {}; t = bo.exec(k); )
                                a[t[1].toLowerCase() + " "] = (a[t[1].toLowerCase() + " "] || []).concat(t[2]);
                        t = a[n.toLowerCase() + " "]
                    }
                    return t == null ? null : t.join(", ")
                },
                getAllResponseHeaders: function() {
                    return s ? k : null
                },
                setRequestHeader: function(n, t) {
                    return s == null && (n = ut[n.toLowerCase()] = ut[n.toLowerCase()] || n,
                    rt[n] = t),
                    this
                },
                overrideMimeType: function(n) {
                    return s == null && (u.mimeType = n),
                    this
                },
                statusCode: function(n) {
                    var t;
                    if (n)
                        if (s)
                            e.always(n[e.status]);
                        else
                            for (t in n)
                                b[t] = [b[t], n[t]];
                    return this
                },
                abort: function(n) {
                    var t = n || ft;
                    return c && c.abort(t),
                    p(0, t),
                    this
                }
            };
            if (tt.promise(e),
            u.url = ((t || u.url || gt.href) + "").replace(go, gt.protocol + "//"),
            u.type = r.method || r.type || u.method || u.type,
            u.dataTypes = (u.dataType || "*").toLowerCase().match(v) || [""],
            u.crossDomain == null) {
                l = f.createElement("a");
                try {
                    l.href = u.url;
                    l.href = l.href;
                    u.crossDomain = cr.protocol + "//" + cr.host != l.protocol + "//" + l.host
                } catch (et) {
                    u.crossDomain = !0
                }
            }
            if (u.data && u.processData && typeof u.data != "string" && (u.data = i.param(u.data, u.traditional)),
            fu(df, u, r, e),
            s)
                return e;
            y = i.event && u.global;
            y && i.active++ == 0 && i.event.trigger("ajaxStart");
            u.type = u.type.toUpperCase();
            u.hasContent = !ko.test(u.type);
            o = u.url.replace(po, "");
            u.hasContent ? u.data && u.processData && (u.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && (u.data = u.data.replace(yo, "+")) : (w = u.url.slice(o.length),
            u.data && (u.processData || typeof u.data == "string") && (o += (sr.test(o) ? "&" : "?") + u.data,
            delete u.data),
            u.cache === !1 && (o = o.replace(wo, "$1"),
            w = (sr.test(o) ? "&" : "?") + "_=" + bf++ + w),
            u.url = o + w);
            u.ifModified && (i.lastModified[o] && e.setRequestHeader("If-Modified-Since", i.lastModified[o]),
            i.etag[o] && e.setRequestHeader("If-None-Match", i.etag[o]));
            (u.data && u.hasContent && u.contentType !== !1 || r.contentType) && e.setRequestHeader("Content-Type", u.contentType);
            e.setRequestHeader("Accept", u.dataTypes[0] && u.accepts[u.dataTypes[0]] ? u.accepts[u.dataTypes[0]] + (u.dataTypes[0] !== "*" ? ", " + gf + "; q=0.01" : "") : u.accepts["*"]);
            for (g in u.headers)
                e.setRequestHeader(g, u.headers[g]);
            if (u.beforeSend && (u.beforeSend.call(h, e, u) === !1 || s))
                return e.abort();
            if (ft = "abort",
            it.add(u.complete),
            e.done(u.success),
            e.fail(u.error),
            c = fu(hr, u, r, e),
            c) {
                if (e.readyState = 1,
                y && nt.trigger("ajaxSend", [e, u]),
                s)
                    return e;
                u.async && u.timeout > 0 && (d = n.setTimeout(function() {
                    e.abort("timeout")
                }, u.timeout));
                try {
                    s = !1;
                    c.send(rt, p)
                } catch (et) {
                    if (s)
                        throw et;
                    p(-1, et)
                }
            } else
                p(-1, "No Transport");
            return e
        },
        getJSON: function(n, t, r) {
            return i.get(n, t, r, "json")
        },
        getScript: function(n, t) {
            return i.get(n, undefined, t, "script")
        }
    }),
    i.each(["get", "post"], function(n, t) {
        i[t] = function(n, r, f, e) {
            return u(r) && (e = e || f,
            f = r,
            r = undefined),
            i.ajax(i.extend({
                url: n,
                type: t,
                dataType: e,
                data: r,
                success: f
            }, i.isPlainObject(n) && n))
        }
    }),
    i._evalUrl = function(n, t) {
        return i.ajax({
            url: n,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: {
                "text script": function() {}
            },
            dataFilter: function(n) {
                i.globalEval(n, t)
            }
        })
    }
    ,
    i.fn.extend({
        wrapAll: function(n) {
            var t;
            return this[0] && (u(n) && (n = n.call(this[0])),
            t = i(n, this[0].ownerDocument).eq(0).clone(!0),
            this[0].parentNode && t.insertBefore(this[0]),
            t.map(function() {
                for (var n = this; n.firstElementChild; )
                    n = n.firstElementChild;
                return n
            }).append(this)),
            this
        },
        wrapInner: function(n) {
            return u(n) ? this.each(function(t) {
                i(this).wrapInner(n.call(this, t))
            }) : this.each(function() {
                var t = i(this)
                  , r = t.contents();
                r.length ? r.wrapAll(n) : t.append(n)
            })
        },
        wrap: function(n) {
            var t = u(n);
            return this.each(function(r) {
                i(this).wrapAll(t ? n.call(this, r) : n)
            })
        },
        unwrap: function(n) {
            return this.parent(n).not("body").each(function() {
                i(this).replaceWith(this.childNodes)
            }),
            this
        }
    }),
    i.expr.pseudos.hidden = function(n) {
        return !i.expr.pseudos.visible(n)
    }
    ,
    i.expr.pseudos.visible = function(n) {
        return !!(n.offsetWidth || n.offsetHeight || n.getClientRects().length)
    }
    ,
    i.ajaxSettings.xhr = function() {
        try {
            return new n.XMLHttpRequest
        } catch (t) {}
    }
    ,
    rf = {
        0: 200,
        1223: 204
    },
    ct = i.ajaxSettings.xhr(),
    e.cors = !!ct && "withCredentials"in ct,
    e.ajax = ct = !!ct,
    i.ajaxTransport(function(t) {
        var i, r;
        if (e.cors || ct && !t.crossDomain)
            return {
                send: function(u, f) {
                    var o, e = t.xhr();
                    if (e.open(t.type, t.url, t.async, t.username, t.password),
                    t.xhrFields)
                        for (o in t.xhrFields)
                            e[o] = t.xhrFields[o];
                    t.mimeType && e.overrideMimeType && e.overrideMimeType(t.mimeType);
                    t.crossDomain || u["X-Requested-With"] || (u["X-Requested-With"] = "XMLHttpRequest");
                    for (o in u)
                        e.setRequestHeader(o, u[o]);
                    i = function(n) {
                        return function() {
                            i && (i = r = e.onload = e.onerror = e.onabort = e.ontimeout = e.onreadystatechange = null,
                            n === "abort" ? e.abort() : n === "error" ? typeof e.status != "number" ? f(0, "error") : f(e.status, e.statusText) : f(rf[e.status] || e.status, e.statusText, (e.responseType || "text") !== "text" || typeof e.responseText != "string" ? {
                                binary: e.response
                            } : {
                                text: e.responseText
                            }, e.getAllResponseHeaders()))
                        }
                    }
                    ;
                    e.onload = i();
                    r = e.onerror = e.ontimeout = i("error");
                    e.onabort !== undefined ? e.onabort = r : e.onreadystatechange = function() {
                        e.readyState === 4 && n.setTimeout(function() {
                            i && r()
                        })
                    }
                    ;
                    i = i("abort");
                    try {
                        e.send(t.hasContent && t.data || null)
                    } catch (s) {
                        if (i)
                            throw s;
                    }
                },
                abort: function() {
                    i && i()
                }
            }
    }),
    i.ajaxPrefilter(function(n) {
        n.crossDomain && (n.contents.script = !1)
    }),
    i.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(n) {
                return i.globalEval(n),
                n
            }
        }
    }),
    i.ajaxPrefilter("script", function(n) {
        n.cache === undefined && (n.cache = !1);
        n.crossDomain && (n.type = "GET")
    }),
    i.ajaxTransport("script", function(n) {
        if (n.crossDomain || n.scriptAttrs) {
            var r, t;
            return {
                send: function(u, e) {
                    r = i("<script>").attr(n.scriptAttrs || {}).prop({
                        charset: n.scriptCharset,
                        src: n.url
                    }).on("load error", t = function(n) {
                        r.remove();
                        t = null;
                        n && e(n.type === "error" ? 404 : 200, n.type)
                    }
                    );
                    f.head.appendChild(r[0])
                },
                abort: function() {
                    t && t()
                }
            }
        }
    }),
    er = [],
    hi = /(=)\?(?=&|$)|\?\?/,
    i.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var n = er.pop() || i.expando + "_" + bf++;
            return this[n] = !0,
            n
        }
    }),
    i.ajaxPrefilter("json jsonp", function(t, r, f) {
        var e, o, s, h = t.jsonp !== !1 && (hi.test(t.url) ? "url" : typeof t.data == "string" && (t.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && hi.test(t.data) && "data");
        if (h || t.dataTypes[0] === "jsonp")
            return e = t.jsonpCallback = u(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback,
            h ? t[h] = t[h].replace(hi, "$1" + e) : t.jsonp !== !1 && (t.url += (sr.test(t.url) ? "&" : "?") + t.jsonp + "=" + e),
            t.converters["script json"] = function() {
                return s || i.error(e + " was not called"),
                s[0]
            }
            ,
            t.dataTypes[0] = "json",
            o = n[e],
            n[e] = function() {
                s = arguments
            }
            ,
            f.always(function() {
                o === undefined ? i(n).removeProp(e) : n[e] = o;
                t[e] && (t.jsonpCallback = r.jsonpCallback,
                er.push(e));
                s && u(o) && o(s[0]);
                s = o = undefined
            }),
            "script"
    }),
    e.createHTMLDocument = function() {
        var n = f.implementation.createHTMLDocument("").body;
        return n.innerHTML = "<form><\/form><form><\/form>",
        n.childNodes.length === 2
    }(),
    i.parseHTML = function(n, t, r) {
        if (typeof n != "string")
            return [];
        typeof t == "boolean" && (r = t,
        t = !1);
        var s, u, o;
        return (t || (e.createHTMLDocument ? (t = f.implementation.createHTMLDocument(""),
        s = t.createElement("base"),
        s.href = f.location.href,
        t.head.appendChild(s)) : t = f),
        u = tr.exec(n),
        o = !r && [],
        u) ? [t.createElement(u[1])] : (u = wr([n], t, o),
        o && o.length && i(o).remove(),
        i.merge([], u.childNodes))
    }
    ,
    i.fn.load = function(n, t, r) {
        var f, s, h, e = this, o = n.indexOf(" ");
        return o > -1 && (f = d(n.slice(o)),
        n = n.slice(0, o)),
        u(t) ? (r = t,
        t = undefined) : t && typeof t == "object" && (s = "POST"),
        e.length > 0 && i.ajax({
            url: n,
            type: s || "GET",
            dataType: "html",
            data: t
        }).done(function(n) {
            h = arguments;
            e.html(f ? i("<div>").append(i.parseHTML(n)).find(f) : n)
        }).always(r && function(n, t) {
            e.each(function() {
                r.apply(this, h || [n.responseText, t, n])
            })
        }
        ),
        this
    }
    ,
    i.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(n, t) {
        i.fn[t] = function(n) {
            return this.on(t, n)
        }
    }),
    i.expr.pseudos.animated = function(n) {
        return i.grep(i.timers, function(t) {
            return n === t.elem
        }).length
    }
    ,
    i.offset = {
        setOffset: function(n, t, r) {
            var o, s, h, c, f, l, y, a = i.css(n, "position"), v = i(n), e = {};
            a === "static" && (n.style.position = "relative");
            f = v.offset();
            h = i.css(n, "top");
            l = i.css(n, "left");
            y = (a === "absolute" || a === "fixed") && (h + l).indexOf("auto") > -1;
            y ? (o = v.position(),
            c = o.top,
            s = o.left) : (c = parseFloat(h) || 0,
            s = parseFloat(l) || 0);
            u(t) && (t = t.call(n, r, i.extend({}, f)));
            t.top != null && (e.top = t.top - f.top + c);
            t.left != null && (e.left = t.left - f.left + s);
            "using"in t ? t.using.call(n, e) : v.css(e)
        }
    },
    i.fn.extend({
        offset: function(n) {
            if (arguments.length)
                return n === undefined ? this : this.each(function(t) {
                    i.offset.setOffset(this, n, t)
                });
            var r, u, t = this[0];
            if (t)
                return t.getClientRects().length ? (r = t.getBoundingClientRect(),
                u = t.ownerDocument.defaultView,
                {
                    top: r.top + u.pageYOffset,
                    left: r.left + u.pageXOffset
                }) : {
                    top: 0,
                    left: 0
                }
        },
        position: function() {
            if (this[0]) {
                var n, u, f, t = this[0], r = {
                    top: 0,
                    left: 0
                };
                if (i.css(t, "position") === "fixed")
                    u = t.getBoundingClientRect();
                else {
                    for (u = this.offset(),
                    f = t.ownerDocument,
                    n = t.offsetParent || f.documentElement; n && (n === f.body || n === f.documentElement) && i.css(n, "position") === "static"; )
                        n = n.parentNode;
                    n && n !== t && n.nodeType === 1 && (r = i(n).offset(),
                    r.top += i.css(n, "borderTopWidth", !0),
                    r.left += i.css(n, "borderLeftWidth", !0))
                }
                return {
                    top: u.top - r.top - i.css(t, "marginTop", !0),
                    left: u.left - r.left - i.css(t, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var n = this.offsetParent; n && i.css(n, "position") === "static"; )
                    n = n.offsetParent;
                return n || kt
            })
        }
    }),
    i.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(n, t) {
        var r = "pageYOffset" === t;
        i.fn[n] = function(i) {
            return p(this, function(n, i, u) {
                var f;
                if (ot(n) ? f = n : n.nodeType === 9 && (f = n.defaultView),
                u === undefined)
                    return f ? f[t] : n[i];
                f ? f.scrollTo(r ? f.pageXOffset : u, r ? u : f.pageYOffset) : n[i] = u
            }, n, i, arguments.length)
        }
    }),
    i.each(["top", "left"], function(n, t) {
        i.cssHooks[t] = gr(e.pixelPosition, function(n, r) {
            if (r)
                return r = yt(n, t),
                or.test(r) ? i(n).position()[t] + "px" : r
        })
    }),
    i.each({
        Height: "height",
        Width: "width"
    }, function(n, t) {
        i.each({
            padding: "inner" + n,
            content: t,
            "": "outer" + n
        }, function(r, u) {
            i.fn[u] = function(f, e) {
                var o = arguments.length && (r || typeof f != "boolean")
                  , s = r || (f === !0 || e === !0 ? "margin" : "border");
                return p(this, function(t, r, f) {
                    var e;
                    return ot(t) ? u.indexOf("outer") === 0 ? t["inner" + n] : t.document.documentElement["client" + n] : t.nodeType === 9 ? (e = t.documentElement,
                    Math.max(t.body["scroll" + n], e["scroll" + n], t.body["offset" + n], e["offset" + n], e["client" + n])) : f === undefined ? i.css(t, r, s) : i.style(t, r, f, s)
                }, t, o ? f : undefined, o)
            }
        })
    }),
    i.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(n, t) {
        i.fn[t] = function(n, i) {
            return arguments.length > 0 ? this.on(t, null, n, i) : this.trigger(t)
        }
    }),
    i.fn.extend({
        hover: function(n, t) {
            return this.mouseenter(n).mouseleave(t || n)
        }
    }),
    i.fn.extend({
        bind: function(n, t, i) {
            return this.on(n, null, t, i)
        },
        unbind: function(n, t) {
            return this.off(n, null, t)
        },
        delegate: function(n, t, i, r) {
            return this.on(t, n, i, r)
        },
        undelegate: function(n, t, i) {
            return arguments.length === 1 ? this.off(n, "**") : this.off(t, n || "**", i)
        }
    }),
    i.proxy = function(n, t) {
        var f, e, r;
        return (typeof t == "string" && (f = n[t],
        t = n,
        n = f),
        !u(n)) ? undefined : (e = b.call(arguments, 2),
        r = function() {
            return n.apply(t || this, e.concat(b.call(arguments)))
        }
        ,
        r.guid = n.guid = n.guid || i.guid++,
        r)
    }
    ,
    i.holdReady = function(n) {
        n ? i.readyWait++ : i.ready(!0)
    }
    ,
    i.isArray = Array.isArray,
    i.parseJSON = JSON.parse,
    i.nodeName = l,
    i.isFunction = u,
    i.isWindow = ot,
    i.camelCase = y,
    i.type = tt,
    i.now = Date.now,
    i.isNumeric = function(n) {
        var t = i.type(n);
        return (t === "number" || t === "string") && !isNaN(n - parseFloat(n))
    }
    ,
    typeof define == "function" && define.amd && define("jquery", [], function() {
        return i
    }),
    uf = n.jQuery,
    ff = n.$,
    i.noConflict = function(t) {
        return n.$ === i && (n.$ = ff),
        t && n.jQuery === i && (n.jQuery = uf),
        i
    }
    ,
    t || (n.jQuery = n.$ = i),
    i
});
/*!
  * Bootstrap v4.3.1 (https://getbootstrap.com/)
  * Copyright 2011-2019 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
!function(n, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports, require("jquery")) : "function" == typeof define && define.amd ? define(["exports", "jquery"], t) : t((n = n || self).bootstrap = {}, n.jQuery)
}(this, function(n, t) {
    "use strict";
    function hf(n, t) {
        for (var i, r = 0; r < t.length; r++)
            i = t[r],
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value"in i && (i.writable = !0),
            Object.defineProperty(n, i.key, i)
    }
    function l(n, t, i) {
        return t && hf(n.prototype, t),
        i && hf(n, i),
        n
    }
    function u(n) {
        for (var i, r, t = 1; t < arguments.length; t++)
            i = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(i),
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(i).filter(function(n) {
                return Object.getOwnPropertyDescriptor(i, n).enumerable
            }))),
            r.forEach(function(t) {
                var r, u, f;
                r = n;
                f = i[u = t];
                u in r ? Object.defineProperty(r, u, {
                    value: f,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : r[u] = f
            });
        return n
    }
    function ao(n) {
        var u = this
          , r = !1;
        return t(this).one(i.TRANSITION_END, function() {
            r = !0
        }),
        setTimeout(function() {
            r || i.triggerTransitionEnd(u)
        }, n),
        this
    }
    function gf(n) {
        return n && "[object Function]" === {}.toString.call(n)
    }
    function nt(n, t) {
        if (1 !== n.nodeType)
            return [];
        var i = n.ownerDocument.defaultView.getComputedStyle(n, null);
        return t ? i[t] : i
    }
    function lu(n) {
        return "HTML" === n.nodeName ? n : n.parentNode || n.host
    }
    function hi(n) {
        if (!n)
            return document.body;
        switch (n.nodeName) {
        case "HTML":
        case "BODY":
            return n.ownerDocument.body;
        case "#document":
            return n.body
        }
        var t = nt(n)
          , i = t.overflow
          , r = t.overflowX
          , u = t.overflowY;
        return /(auto|scroll|overlay)/.test(i + u + r) ? n : hi(lu(n))
    }
    function ht(n) {
        return 11 === n ? au : 10 === n ? vu : au || vu
    }
    function ct(n) {
        var r, t, i;
        if (!n)
            return document.documentElement;
        for (r = ht(10) ? document.body : null,
        t = n.offsetParent || null; t === r && n.nextElementSibling; )
            t = (n = n.nextElementSibling).offsetParent;
        return i = t && t.nodeName,
        i && "BODY" !== i && "HTML" !== i ? -1 !== ["TH", "TD", "TABLE"].indexOf(t.nodeName) && "static" === nt(t, "position") ? ct(t) : t : n ? n.ownerDocument.documentElement : document.documentElement
    }
    function yu(n) {
        return null !== n.parentNode ? yu(n.parentNode) : n
    }
    function hr(n, t) {
        var u, h, i, f;
        if (!(n && n.nodeType && t && t.nodeType))
            return document.documentElement;
        var e = n.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING
          , o = e ? n : t
          , s = e ? t : n
          , r = document.createRange();
        return (r.setStart(o, 0),
        r.setEnd(s, 0),
        i = r.commonAncestorContainer,
        n !== i && t !== i || o.contains(s)) ? "BODY" === (h = (u = i).nodeName) || "HTML" !== h && ct(u.firstElementChild) !== u ? ct(i) : i : (f = yu(n),
        f.host ? hr(f.host, t) : hr(n, yu(t).host))
    }
    function lt(n) {
        var t = "top" === (1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "top") ? "scrollTop" : "scrollLeft", i = n.nodeName, r;
        return "BODY" !== i && "HTML" !== i ? n[t] : (r = n.ownerDocument.documentElement,
        (n.ownerDocument.scrollingElement || r)[t])
    }
    function ne(n, t) {
        var i = "x" === t ? "Left" : "Top"
          , r = "Left" === i ? "Right" : "Bottom";
        return parseFloat(n["border" + i + "Width"], 10) + parseFloat(n["border" + r + "Width"], 10)
    }
    function te(n, t, i, r) {
        return Math.max(t["offset" + n], t["scroll" + n], i["client" + n], i["offset" + n], i["scroll" + n], ht(10) ? parseInt(i["offset" + n]) + parseInt(r["margin" + ("Height" === n ? "Top" : "Left")]) + parseInt(r["margin" + ("Height" === n ? "Bottom" : "Right")]) : 0)
    }
    function ie(n) {
        var i = n.body
          , t = n.documentElement
          , r = ht(10) && getComputedStyle(t);
        return {
            height: te("Height", i, t, r),
            width: te("Width", i, t, r)
        }
    }
    function p(n) {
        return h({}, n, {
            right: n.left + n.width,
            bottom: n.top + n.height
        })
    }
    function pu(n) {
        var t = {}, r, u, o;
        try {
            ht(10) ? (t = n.getBoundingClientRect(),
            r = lt(n, "top"),
            u = lt(n, "left"),
            t.top += r,
            t.left += u,
            t.bottom += r,
            t.right += u) : t = n.getBoundingClientRect()
        } catch (n) {}
        var i = {
            left: t.left,
            top: t.top,
            width: t.right - t.left,
            height: t.bottom - t.top
        }
          , s = "HTML" === n.nodeName ? ie(n.ownerDocument) : {}
          , h = s.width || n.clientWidth || i.right - i.left
          , c = s.height || n.clientHeight || i.bottom - i.top
          , f = n.offsetWidth - h
          , e = n.offsetHeight - c;
        return (f || e) && (o = nt(n),
        f -= ne(o, "x"),
        e -= ne(o, "y"),
        i.width -= f,
        i.height -= e),
        p(i)
    }
    function wu(n, t) {
        var l = 2 < arguments.length && void 0 !== arguments[2] && arguments[2], a = ht(10), v = "HTML" === t.nodeName, u = pu(n), r = pu(t), s = hi(n), f = nt(t), h = parseFloat(f.borderTopWidth, 10), c = parseFloat(f.borderLeftWidth, 10), i, e, o;
        return l && v && (r.top = Math.max(r.top, 0),
        r.left = Math.max(r.left, 0)),
        i = p({
            top: u.top - r.top - h,
            left: u.left - r.left - c,
            width: u.width,
            height: u.height
        }),
        (i.marginTop = 0,
        i.marginLeft = 0,
        !a && v) && (e = parseFloat(f.marginTop, 10),
        o = parseFloat(f.marginLeft, 10),
        i.top -= h - e,
        i.bottom -= h - e,
        i.left -= c - o,
        i.right -= c - o,
        i.marginTop = e,
        i.marginLeft = o),
        (a && !l ? t.contains(s) : t === s && "BODY" !== s.nodeName) && (i = function(n, t) {
            var f = 2 < arguments.length && void 0 !== arguments[2] && arguments[2]
              , r = lt(t, "top")
              , u = lt(t, "left")
              , i = f ? -1 : 1;
            return n.top += r * i,
            n.bottom += r * i,
            n.left += u * i,
            n.right += u * i,
            n
        }(i, t)),
        i
    }
    function re(n) {
        if (!n || !n.parentElement || ht())
            return document.documentElement;
        for (var t = n.parentElement; t && "none" === nt(t, "transform"); )
            t = t.parentElement;
        return t || document.documentElement
    }
    function bu(n, t, i, r) {
        var s = 4 < arguments.length && void 0 !== arguments[4] && arguments[4], u = {
            top: 0,
            left: 0
        }, h = s ? re(n) : hr(n, t), e, f, o;
        if ("viewport" === r)
            u = function(n) {
                var r = 1 < arguments.length && void 0 !== arguments[1] && arguments[1]
                  , t = n.ownerDocument.documentElement
                  , i = wu(n, t)
                  , u = Math.max(t.clientWidth, window.innerWidth || 0)
                  , f = Math.max(t.clientHeight, window.innerHeight || 0)
                  , e = r ? 0 : lt(t)
                  , o = r ? 0 : lt(t, "left");
                return p({
                    top: e - i.top + i.marginTop,
                    left: o - i.left + i.marginLeft,
                    width: u,
                    height: f
                })
            }(h, s);
        else if (e = void 0,
        "scrollParent" === r ? "BODY" === (e = hi(lu(t))).nodeName && (e = n.ownerDocument.documentElement) : e = "window" === r ? n.ownerDocument.documentElement : r,
        f = wu(e, h, s),
        "HTML" !== e.nodeName || function n(t) {
            var r = t.nodeName, i;
            return "BODY" === r || "HTML" === r ? !1 : "fixed" === nt(t, "position") ? !0 : (i = lu(t),
            !!i && n(i))
        }(h))
            u = f;
        else {
            var c = ie(n.ownerDocument)
              , l = c.height
              , a = c.width;
            u.top += f.top - f.marginTop;
            u.bottom = l + f.top;
            u.left += f.left - f.marginLeft;
            u.right = a + f.left
        }
        return o = "number" == typeof (i = i || 0),
        u.left += o ? i : i.left || 0,
        u.top += o ? i : i.top || 0,
        u.right -= o ? i : i.right || 0,
        u.bottom -= o ? i : i.bottom || 0,
        u
    }
    function ue(n, t, i, r, u) {
        var l = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;
        if (-1 === n.indexOf("auto"))
            return n;
        var f = bu(i, r, l, u)
          , e = {
            top: {
                width: f.width,
                height: t.top - f.top
            },
            right: {
                width: f.right - t.right,
                height: f.height
            },
            bottom: {
                width: f.width,
                height: f.bottom - t.bottom
            },
            left: {
                width: t.left - f.left,
                height: f.height
            }
        }
          , o = Object.keys(e).map(function(n) {
            return h({
                key: n
            }, e[n], {
                area: (t = e[n],
                t.width * t.height)
            });
            var t
        }).sort(function(n, t) {
            return t.area - n.area
        })
          , s = o.filter(function(n) {
            var t = n.width
              , r = n.height;
            return t >= i.clientWidth && r >= i.clientHeight
        })
          , a = 0 < s.length ? s[0].key : o[0].key
          , c = n.split("-")[1];
        return a + (c ? "-" + c : "")
    }
    function fe(n, t, i) {
        var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
        return wu(i, r ? re(t) : hr(t, i), r)
    }
    function ee(n) {
        var t = n.ownerDocument.defaultView.getComputedStyle(n)
          , i = parseFloat(t.marginTop || 0) + parseFloat(t.marginBottom || 0)
          , r = parseFloat(t.marginLeft || 0) + parseFloat(t.marginRight || 0);
        return {
            width: n.offsetWidth + r,
            height: n.offsetHeight + i
        }
    }
    function cr(n) {
        var t = {
            left: "right",
            right: "left",
            bottom: "top",
            top: "bottom"
        };
        return n.replace(/left|right|bottom|top/g, function(n) {
            return t[n]
        })
    }
    function oe(n, t, i) {
        i = i.split("-")[0];
        var r = ee(n)
          , e = {
            width: r.width,
            height: r.height
        }
          , u = -1 !== ["right", "left"].indexOf(i)
          , o = u ? "top" : "left"
          , f = u ? "left" : "top"
          , s = u ? "height" : "width"
          , h = u ? "width" : "height";
        return e[o] = t[o] + t[s] / 2 - r[s] / 2,
        e[f] = i === f ? t[f] - r[h] : t[cr(f)],
        e
    }
    function ci(n, t) {
        return Array.prototype.find ? n.find(t) : n.filter(t)[0]
    }
    function se(n, t, i) {
        return (void 0 === i ? n : n.slice(0, function(n, t, i) {
            if (Array.prototype.findIndex)
                return n.findIndex(function(n) {
                    return n[t] === i
                });
            var r = ci(n, function(n) {
                return n[t] === i
            });
            return n.indexOf(r)
        }(n, "name", i))).forEach(function(n) {
            n.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
            var i = n.function || n.fn;
            n.enabled && gf(i) && (t.offsets.popper = p(t.offsets.popper),
            t.offsets.reference = p(t.offsets.reference),
            t = i(t, n))
        }),
        t
    }
    function he(n, t) {
        return n.some(function(n) {
            var i = n.name;
            return n.enabled && i === t
        })
    }
    function ku(n) {
        for (var i, r, u = [!1, "ms", "Webkit", "Moz", "O"], f = n.charAt(0).toUpperCase() + n.slice(1), t = 0; t < u.length; t++)
            if (i = u[t],
            r = i ? "" + i + f : n,
            "undefined" != typeof document.body.style[r])
                return r;
        return null
    }
    function ce(n) {
        var t = n.ownerDocument;
        return t ? t.defaultView : window
    }
    function uh(n, t, i, r) {
        i.updateBound = r;
        ce(n).addEventListener("resize", i.updateBound, {
            passive: !0
        });
        var u = hi(n);
        return function n(t, i, r, u) {
            var e = "BODY" === t.nodeName
              , f = e ? t.ownerDocument.defaultView : t;
            f.addEventListener(i, r, {
                passive: !0
            });
            e || n(hi(f.parentNode), i, r, u);
            u.push(f)
        }(u, "scroll", i.updateBound, i.scrollParents),
        i.scrollElement = u,
        i.eventsEnabled = !0,
        i
    }
    function fh() {
        var t, n;
        this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate),
        this.state = (t = this.reference,
        n = this.state,
        ce(t).removeEventListener("resize", n.updateBound),
        n.scrollParents.forEach(function(t) {
            t.removeEventListener("scroll", n.updateBound)
        }),
        n.updateBound = null,
        n.scrollParents = [],
        n.scrollElement = null,
        n.eventsEnabled = !1,
        n))
    }
    function du(n) {
        return "" !== n && !isNaN(parseFloat(n)) && isFinite(n)
    }
    function gu(n, t) {
        Object.keys(t).forEach(function(i) {
            var r = "";
            -1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(i) && du(t[i]) && (r = "px");
            n.style[i] = t[i] + r
        })
    }
    function ae(n, t, i) {
        var u = ci(n, function(n) {
            return n.name === t
        }), f = !!u && n.some(function(n) {
            return n.name === i && n.enabled && n.order < u.order
        }), r, e;
        return f || (r = "`" + t + "`",
        e = "`" + i + "`",
        console.warn(e + " modifier is required by " + r + " modifier in order to work, be sure to include it before " + r + "!")),
        f
    }
    function ve(n) {
        var r = 1 < arguments.length && void 0 !== arguments[1] && arguments[1]
          , t = lr.indexOf(n)
          , i = lr.slice(t + 1).concat(lr.slice(0, t));
        return r ? i.reverse() : i
    }
    function hh(n, t, i, r) {
        var s = [0, 0], h = -1 !== ["right", "left"].indexOf(r), u = n.split(/(\+|\-)/).map(function(n) {
            return n.trim()
        }), f = u.indexOf(ci(u, function(n) {
            return -1 !== n.search(/,|\s/)
        })), e, o;
        return u[f] && -1 === u[f].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead."),
        e = /\s*,\s*|\s+/,
        o = -1 !== f ? [u.slice(0, f).concat([u[f].split(e)[0]]), [u[f].split(e)[1]].concat(u.slice(f + 1))] : [u],
        (o = o.map(function(n, r) {
            var f = (1 === r ? !h : h) ? "height" : "width"
              , u = !1;
            return n.reduce(function(n, t) {
                return "" === n[n.length - 1] && -1 !== ["+", "-"].indexOf(t) ? (n[n.length - 1] = t,
                u = !0,
                n) : u ? (n[n.length - 1] += t,
                u = !1,
                n) : n.concat(t)
            }, []).map(function(n) {
                return function(n, t, i, r) {
                    var o = n.match(/((?:\-|\+)?\d*\.?\d*)(.*)/), f = +o[1], u = o[2], e;
                    if (!f)
                        return n;
                    if (0 !== u.indexOf("%"))
                        return "vh" !== u && "vw" !== u ? f : ("vh" === u ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * f;
                    e = void 0;
                    switch (u) {
                    case "%p":
                        e = i;
                        break;
                    case "%":
                    case "%r":
                    default:
                        e = r
                    }
                    return p(e)[t] / 100 * f
                }(n, f, t, i)
            })
        })).forEach(function(n, t) {
            n.forEach(function(i, r) {
                du(i) && (s[t] += i * ("-" === n[r - 1] ? -1 : 1))
            })
        }),
        s
    }
    function de(n, t, i) {
        if (0 === n.length)
            return n;
        if (i && "function" == typeof i)
            return i(n);
        for (var u = (new window.DOMParser).parseFromString(n, "text/html"), e = Object.keys(t), f = [].slice.call(u.body.querySelectorAll("*")), o = function(n) {
            var i = f[n], o = i.nodeName.toLowerCase(), r, u;
            if (-1 === e.indexOf(i.nodeName.toLowerCase()))
                return i.parentNode.removeChild(i),
                "continue";
            r = [].slice.call(i.attributes);
            u = [].concat(t["*"] || [], t[o] || []);
            r.forEach(function(n) {
                (function(n, t) {
                    var i = n.nodeName.toLowerCase();
                    if (-1 !== t.indexOf(i))
                        return -1 === vc.indexOf(i) || Boolean(n.nodeValue.match(yc) || n.nodeValue.match(pc));
                    for (var u = t.filter(function(n) {
                        return n instanceof RegExp
                    }), r = 0, f = u.length; r < f; r++)
                        if (i.match(u[r]))
                            return !0;
                    return !1
                }
                )(n, u) || i.removeAttribute(n.nodeName)
            })
        }, r = 0, s = f.length; r < s; r++)
            o(r);
        return u.body.innerHTML
    }
    var dt, i, df, au, vu, le, nf, lr, ye, w;
    t = t && t.hasOwnProperty("default") ? t.default : t;
    dt = "transitionend";
    i = {
        TRANSITION_END: "bsTransitionEnd",
        getUID: function(n) {
            for (; n += ~~(1e6 * Math.random()),
            document.getElementById(n); )
                ;
            return n
        },
        getSelectorFromElement: function(n) {
            var t = n.getAttribute("data-target"), i;
            t && "#" !== t || (i = n.getAttribute("href"),
            t = i && "#" !== i ? i.trim() : "");
            try {
                return document.querySelector(t) ? t : null
            } catch (n) {
                return null
            }
        },
        getTransitionDurationFromElement: function(n) {
            if (!n)
                return 0;
            var i = t(n).css("transition-duration")
              , r = t(n).css("transition-delay")
              , u = parseFloat(i)
              , f = parseFloat(r);
            return u || f ? (i = i.split(",")[0],
            r = r.split(",")[0],
            1e3 * (parseFloat(i) + parseFloat(r))) : 0
        },
        reflow: function(n) {
            return n.offsetHeight
        },
        triggerTransitionEnd: function(n) {
            t(n).trigger(dt)
        },
        supportsTransitionEnd: function() {
            return Boolean(dt)
        },
        isElement: function(n) {
            return (n[0] || n).nodeType
        },
        typeCheckConfig: function(n, t, r) {
            var u, s;
            for (u in r)
                if (Object.prototype.hasOwnProperty.call(r, u)) {
                    var e = r[u]
                      , f = t[u]
                      , o = f && i.isElement(f) ? "element" : (s = f,
                    {}.toString.call(s).match(/\s([a-z]+)/i)[1].toLowerCase());
                    if (!new RegExp(e).test(o))
                        throw new Error(n.toUpperCase() + ': Option "' + u + '" provided type "' + o + '" but expected type "' + e + '".');
                }
        },
        findShadowRoot: function(n) {
            if (!document.documentElement.attachShadow)
                return null;
            if ("function" != typeof n.getRootNode)
                return n instanceof ShadowRoot ? n : n.parentNode ? i.findShadowRoot(n.parentNode) : null;
            var t = n.getRootNode();
            return t instanceof ShadowRoot ? t : null
        }
    };
    t.fn.emulateTransitionEnd = ao;
    t.event.special[i.TRANSITION_END] = {
        bindType: dt,
        delegateType: dt,
        handle: function(n) {
            if (t(n.target).is(this))
                return n.handleObj.handler.apply(this, arguments)
        }
    };
    var gt = "alert"
      , ur = "bs.alert"
      , iu = "." + ur
      , vo = t.fn[gt]
      , ru = {
        CLOSE: "close" + iu,
        CLOSED: "closed" + iu,
        CLICK_DATA_API: "click" + iu + ".data-api"
    }
      , yo = "alert"
      , po = "fade"
      , wo = "show"
      , ft = function() {
        function n(n) {
            this._element = n
        }
        var r = n.prototype;
        return r.close = function(n) {
            var t = this._element;
            n && (t = this._getRootElement(n));
            this._triggerCloseEvent(t).isDefaultPrevented() || this._removeElement(t)
        }
        ,
        r.dispose = function() {
            t.removeData(this._element, ur);
            this._element = null
        }
        ,
        r._getRootElement = function(n) {
            var u = i.getSelectorFromElement(n)
              , r = !1;
            return u && (r = document.querySelector(u)),
            r || (r = t(n).closest("." + yo)[0]),
            r
        }
        ,
        r._triggerCloseEvent = function(n) {
            var i = t.Event(ru.CLOSE);
            return t(n).trigger(i),
            i
        }
        ,
        r._removeElement = function(n) {
            var u = this, r;
            (t(n).removeClass(wo),
            t(n).hasClass(po)) ? (r = i.getTransitionDurationFromElement(n),
            t(n).one(i.TRANSITION_END, function(t) {
                return u._destroyElement(n, t)
            }).emulateTransitionEnd(r)) : this._destroyElement(n)
        }
        ,
        r._destroyElement = function(n) {
            t(n).detach().trigger(ru.CLOSED).remove()
        }
        ,
        n._jQueryInterface = function(i) {
            return this.each(function() {
                var u = t(this)
                  , r = u.data(ur);
                r || (r = new n(this),
                u.data(ur, r));
                "close" === i && r[i](this)
            })
        }
        ,
        n._handleDismiss = function(n) {
            return function(t) {
                t && t.preventDefault();
                n.close(this)
            }
        }
        ,
        l(n, null, [{
            key: "VERSION",
            get: function() {
                return "4.3.1"
            }
        }]),
        n
    }();
    t(document).on(ru.CLICK_DATA_API, '[data-dismiss="alert"]', ft._handleDismiss(new ft));
    t.fn[gt] = ft._jQueryInterface;
    t.fn[gt].Constructor = ft;
    t.fn[gt].noConflict = function() {
        return t.fn[gt] = vo,
        ft._jQueryInterface
    }
    ;
    var ni = "button"
      , fr = "bs.button"
      , uu = "." + fr
      , fu = ".data-api"
      , bo = t.fn[ni]
      , ti = "active"
      , ko = "btn"
      , go = "focus"
      , cf = '[data-toggle^="button"]'
      , ns = '[data-toggle="buttons"]'
      , ts = 'input:not([type="hidden"])'
      , is = ".active"
      , lf = ".btn"
      , af = {
        CLICK_DATA_API: "click" + uu + fu,
        FOCUS_BLUR_DATA_API: "focus" + uu + fu + " blur" + uu + fu
    }
      , ii = function() {
        function n(n) {
            this._element = n
        }
        var i = n.prototype;
        return i.toggle = function() {
            var r = !0, f = !0, i = t(this._element).closest(ns)[0], n, u;
            if (i && (n = this._element.querySelector(ts),
            n)) {
                if ("radio" === n.type && (n.checked && this._element.classList.contains(ti) ? r = !1 : (u = i.querySelector(is),
                u && t(u).removeClass(ti))),
                r) {
                    if (n.hasAttribute("disabled") || i.hasAttribute("disabled") || n.classList.contains("disabled") || i.classList.contains("disabled"))
                        return;
                    n.checked = !this._element.classList.contains(ti);
                    t(n).trigger("change")
                }
                n.focus();
                f = !1
            }
            f && this._element.setAttribute("aria-pressed", !this._element.classList.contains(ti));
            r && t(this._element).toggleClass(ti)
        }
        ,
        i.dispose = function() {
            t.removeData(this._element, fr);
            this._element = null
        }
        ,
        n._jQueryInterface = function(i) {
            return this.each(function() {
                var r = t(this).data(fr);
                r || (r = new n(this),
                t(this).data(fr, r));
                "toggle" === i && r[i]()
            })
        }
        ,
        l(n, null, [{
            key: "VERSION",
            get: function() {
                return "4.3.1"
            }
        }]),
        n
    }();
    t(document).on(af.CLICK_DATA_API, cf, function(n) {
        n.preventDefault();
        var i = n.target;
        t(i).hasClass(ko) || (i = t(i).closest(lf));
        ii._jQueryInterface.call(t(i), "toggle")
    }).on(af.FOCUS_BLUR_DATA_API, cf, function(n) {
        var i = t(n.target).closest(lf)[0];
        t(i).toggleClass(go, /^focus(in)?$/.test(n.type))
    });
    t.fn[ni] = ii._jQueryInterface;
    t.fn[ni].Constructor = ii;
    t.fn[ni].noConflict = function() {
        return t.fn[ni] = bo,
        ii._jQueryInterface
    }
    ;
    var et = "carousel"
      , ri = "bs.carousel"
      , e = "." + ri
      , vf = ".data-api"
      , rs = t.fn[et]
      , eu = {
        interval: 5e3,
        keyboard: !0,
        slide: !1,
        pause: "hover",
        wrap: !0,
        touch: !0
    }
      , us = {
        interval: "(number|boolean)",
        keyboard: "boolean",
        slide: "(boolean|string)",
        pause: "(string|boolean)",
        wrap: "boolean",
        touch: "boolean"
    }
      , er = "next"
      , or = "prev"
      , fs = "left"
      , es = "right"
      , o = {
        SLIDE: "slide" + e,
        SLID: "slid" + e,
        KEYDOWN: "keydown" + e,
        MOUSEENTER: "mouseenter" + e,
        MOUSELEAVE: "mouseleave" + e,
        TOUCHSTART: "touchstart" + e,
        TOUCHMOVE: "touchmove" + e,
        TOUCHEND: "touchend" + e,
        POINTERDOWN: "pointerdown" + e,
        POINTERUP: "pointerup" + e,
        DRAG_START: "dragstart" + e,
        LOAD_DATA_API: "load" + e + vf,
        CLICK_DATA_API: "click" + e + vf
    }
      , os = "carousel"
      , k = "active"
      , ss = "slide"
      , hs = "carousel-item-right"
      , cs = "carousel-item-left"
      , ls = "carousel-item-next"
      , as = "carousel-item-prev"
      , vs = "pointer-event"
      , ys = ".active"
      , ou = ".active.carousel-item"
      , ps = ".carousel-item"
      , ws = ".carousel-item img"
      , bs = ".carousel-item-next, .carousel-item-prev"
      , ks = ".carousel-indicators"
      , ds = '[data-ride="carousel"]'
      , yf = {
        TOUCH: "touch",
        PEN: "pen"
    }
      , ot = function() {
        function r(n, t) {
            this._items = null;
            this._interval = null;
            this._activeElement = null;
            this._isPaused = !1;
            this._isSliding = !1;
            this.touchTimeout = null;
            this.touchStartX = 0;
            this.touchDeltaX = 0;
            this._config = this._getConfig(t);
            this._element = n;
            this._indicatorsElement = this._element.querySelector(ks);
            this._touchSupported = "ontouchstart"in document.documentElement || 0 < navigator.maxTouchPoints;
            this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent);
            this._addEventListeners()
        }
        var n = r.prototype;
        return n.next = function() {
            this._isSliding || this._slide(er)
        }
        ,
        n.nextWhenVisible = function() {
            !document.hidden && t(this._element).is(":visible") && "hidden" !== t(this._element).css("visibility") && this.next()
        }
        ,
        n.prev = function() {
            this._isSliding || this._slide(or)
        }
        ,
        n.pause = function(n) {
            n || (this._isPaused = !0);
            this._element.querySelector(bs) && (i.triggerTransitionEnd(this._element),
            this.cycle(!0));
            clearInterval(this._interval);
            this._interval = null
        }
        ,
        n.cycle = function(n) {
            n || (this._isPaused = !1);
            this._interval && (clearInterval(this._interval),
            this._interval = null);
            this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
        }
        ,
        n.to = function(n) {
            var u = this, i, r;
            if (this._activeElement = this._element.querySelector(ou),
            i = this._getItemIndex(this._activeElement),
            !(n > this._items.length - 1 || n < 0))
                if (this._isSliding)
                    t(this._element).one(o.SLID, function() {
                        return u.to(n)
                    });
                else {
                    if (i === n)
                        return this.pause(),
                        void this.cycle();
                    r = i < n ? er : or;
                    this._slide(r, this._items[n])
                }
        }
        ,
        n.dispose = function() {
            t(this._element).off(e);
            t.removeData(this._element, ri);
            this._items = null;
            this._config = null;
            this._element = null;
            this._interval = null;
            this._isPaused = null;
            this._isSliding = null;
            this._activeElement = null;
            this._indicatorsElement = null
        }
        ,
        n._getConfig = function(n) {
            return n = u({}, eu, n),
            i.typeCheckConfig(et, n, us),
            n
        }
        ,
        n._handleSwipe = function() {
            var t = Math.abs(this.touchDeltaX), n;
            t <= 40 || (n = t / this.touchDeltaX,
            0 < n && this.prev(),
            n < 0 && this.next())
        }
        ,
        n._addEventListeners = function() {
            var n = this;
            this._config.keyboard && t(this._element).on(o.KEYDOWN, function(t) {
                return n._keydown(t)
            });
            "hover" === this._config.pause && t(this._element).on(o.MOUSEENTER, function(t) {
                return n.pause(t)
            }).on(o.MOUSELEAVE, function(t) {
                return n.cycle(t)
            });
            this._config.touch && this._addTouchEventListeners()
        }
        ,
        n._addTouchEventListeners = function() {
            var n = this, i, r;
            this._touchSupported && (i = function(t) {
                n._pointerEvent && yf[t.originalEvent.pointerType.toUpperCase()] ? n.touchStartX = t.originalEvent.clientX : n._pointerEvent || (n.touchStartX = t.originalEvent.touches[0].clientX)
            }
            ,
            r = function(t) {
                n._pointerEvent && yf[t.originalEvent.pointerType.toUpperCase()] && (n.touchDeltaX = t.originalEvent.clientX - n.touchStartX);
                n._handleSwipe();
                "hover" === n._config.pause && (n.pause(),
                n.touchTimeout && clearTimeout(n.touchTimeout),
                n.touchTimeout = setTimeout(function(t) {
                    return n.cycle(t)
                }, 500 + n._config.interval))
            }
            ,
            t(this._element.querySelectorAll(ws)).on(o.DRAG_START, function(n) {
                return n.preventDefault()
            }),
            this._pointerEvent ? (t(this._element).on(o.POINTERDOWN, function(n) {
                return i(n)
            }),
            t(this._element).on(o.POINTERUP, function(n) {
                return r(n)
            }),
            this._element.classList.add(vs)) : (t(this._element).on(o.TOUCHSTART, function(n) {
                return i(n)
            }),
            t(this._element).on(o.TOUCHMOVE, function(t) {
                var i;
                n.touchDeltaX = (i = t).originalEvent.touches && 1 < i.originalEvent.touches.length ? 0 : i.originalEvent.touches[0].clientX - n.touchStartX
            }),
            t(this._element).on(o.TOUCHEND, function(n) {
                return r(n)
            })))
        }
        ,
        n._keydown = function(n) {
            if (!/input|textarea/i.test(n.target.tagName))
                switch (n.which) {
                case 37:
                    n.preventDefault();
                    this.prev();
                    break;
                case 39:
                    n.preventDefault();
                    this.next()
                }
        }
        ,
        n._getItemIndex = function(n) {
            return this._items = n && n.parentNode ? [].slice.call(n.parentNode.querySelectorAll(ps)) : [],
            this._items.indexOf(n)
        }
        ,
        n._getItemByDirection = function(n, t) {
            var u = n === er, f = n === or, i = this._getItemIndex(t), e = this._items.length - 1, r;
            return (f && 0 === i || u && i === e) && !this._config.wrap ? t : (r = (i + (n === or ? -1 : 1)) % this._items.length,
            -1 === r ? this._items[this._items.length - 1] : this._items[r])
        }
        ,
        n._triggerSlideEvent = function(n, i) {
            var u = this._getItemIndex(n)
              , f = this._getItemIndex(this._element.querySelector(ou))
              , r = t.Event(o.SLIDE, {
                relatedTarget: n,
                direction: i,
                from: f,
                to: u
            });
            return t(this._element).trigger(r),
            r
        }
        ,
        n._setActiveIndicatorElement = function(n) {
            var r, i;
            this._indicatorsElement && (r = [].slice.call(this._indicatorsElement.querySelectorAll(ys)),
            t(r).removeClass(k),
            i = this._indicatorsElement.children[this._getItemIndex(n)],
            i && t(i).addClass(k))
        }
        ,
        n._slide = function(n, r) {
            var e, s, h, a = this, f = this._element.querySelector(ou), p = this._getItemIndex(f), u = r || f && this._getItemByDirection(n, f), w = this._getItemIndex(u), v = Boolean(this._interval), c, l, y;
            (h = n === er ? (e = cs,
            s = ls,
            fs) : (e = hs,
            s = as,
            es),
            u && t(u).hasClass(k)) ? this._isSliding = !1 : !this._triggerSlideEvent(u, h).isDefaultPrevented() && f && u && (this._isSliding = !0,
            v && this.pause(),
            this._setActiveIndicatorElement(u),
            c = t.Event(o.SLID, {
                relatedTarget: u,
                direction: h,
                from: p,
                to: w
            }),
            t(this._element).hasClass(ss) ? (t(u).addClass(s),
            i.reflow(u),
            t(f).addClass(e),
            t(u).addClass(e),
            l = parseInt(u.getAttribute("data-interval"), 10),
            this._config.interval = l ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval,
            l) : this._config.defaultInterval || this._config.interval,
            y = i.getTransitionDurationFromElement(f),
            t(f).one(i.TRANSITION_END, function() {
                t(u).removeClass(e + " " + s).addClass(k);
                t(f).removeClass(k + " " + s + " " + e);
                a._isSliding = !1;
                setTimeout(function() {
                    return t(a._element).trigger(c)
                }, 0)
            }).emulateTransitionEnd(y)) : (t(f).removeClass(k),
            t(u).addClass(k),
            this._isSliding = !1,
            t(this._element).trigger(c)),
            v && this.cycle())
        }
        ,
        r._jQueryInterface = function(n) {
            return this.each(function() {
                var i = t(this).data(ri), f = u({}, eu, t(this).data()), e;
                if ("object" == typeof n && (f = u({}, f, n)),
                e = "string" == typeof n ? n : f.slide,
                i || (i = new r(this,f),
                t(this).data(ri, i)),
                "number" == typeof n)
                    i.to(n);
                else if ("string" == typeof e) {
                    if ("undefined" == typeof i[e])
                        throw new TypeError('No method named "' + e + '"');
                    i[e]()
                } else
                    f.interval && f.ride && (i.pause(),
                    i.cycle())
            })
        }
        ,
        r._dataApiClickHandler = function(n) {
            var s = i.getSelectorFromElement(this), f, o, e;
            s && (f = t(s)[0],
            f && t(f).hasClass(os) && (o = u({}, t(f).data(), t(this).data()),
            e = this.getAttribute("data-slide-to"),
            e && (o.interval = !1),
            r._jQueryInterface.call(t(f), o),
            e && t(f).data(ri).to(e),
            n.preventDefault()))
        }
        ,
        l(r, null, [{
            key: "VERSION",
            get: function() {
                return "4.3.1"
            }
        }, {
            key: "Default",
            get: function() {
                return eu
            }
        }]),
        r
    }();
    t(document).on(o.CLICK_DATA_API, "[data-slide], [data-slide-to]", ot._dataApiClickHandler);
    t(window).on(o.LOAD_DATA_API, function() {
        for (var i, r = [].slice.call(document.querySelectorAll(ds)), n = 0, u = r.length; n < u; n++)
            i = t(r[n]),
            ot._jQueryInterface.call(i, i.data())
    });
    t.fn[et] = ot._jQueryInterface;
    t.fn[et].Constructor = ot;
    t.fn[et].noConflict = function() {
        return t.fn[et] = rs,
        ot._jQueryInterface
    }
    ;
    var st = "collapse"
      , d = "bs.collapse"
      , ui = "." + d
      , gs = t.fn[st]
      , su = {
        toggle: !0,
        parent: ""
    }
      , nh = {
        toggle: "boolean",
        parent: "(string|element)"
    }
      , fi = {
        SHOW: "show" + ui,
        SHOWN: "shown" + ui,
        HIDE: "hide" + ui,
        HIDDEN: "hidden" + ui,
        CLICK_DATA_API: "click" + ui + ".data-api"
    }
      , g = "show"
      , ei = "collapse"
      , sr = "collapsing"
      , hu = "collapsed"
      , pf = "width"
      , th = "height"
      , ih = ".show, .collapsing"
      , wf = '[data-toggle="collapse"]'
      , oi = function() {
        function r(n, t) {
            this._isTransitioning = !1;
            this._element = n;
            this._config = this._getConfig(t);
            this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + n.id + '"],[data-toggle="collapse"][data-target="#' + n.id + '"]'));
            for (var f = [].slice.call(document.querySelectorAll(wf)), r = 0, o = f.length; r < o; r++) {
                var e = f[r]
                  , u = i.getSelectorFromElement(e)
                  , s = [].slice.call(document.querySelectorAll(u)).filter(function(t) {
                    return t === n
                });
                null !== u && 0 < s.length && (this._selector = u,
                this._triggerArray.push(e))
            }
            this._parent = this._config.parent ? this._getParent() : null;
            this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray);
            this._config.toggle && this.toggle()
        }
        var n = r.prototype;
        return n.toggle = function() {
            t(this._element).hasClass(g) ? this.hide() : this.show()
        }
        ,
        n.show = function() {
            var n, e, u = this, o, f, s, h;
            this._isTransitioning || t(this._element).hasClass(g) || (this._parent && 0 === (n = [].slice.call(this._parent.querySelectorAll(ih)).filter(function(n) {
                return "string" == typeof u._config.parent ? n.getAttribute("data-parent") === u._config.parent : n.classList.contains(ei)
            })).length && (n = null),
            n && (e = t(n).not(this._selector).data(d)) && e._isTransitioning) || (o = t.Event(fi.SHOW),
            (t(this._element).trigger(o),
            o.isDefaultPrevented()) || (n && (r._jQueryInterface.call(t(n).not(this._selector), "hide"),
            e || t(n).data(d, null)),
            f = this._getDimension(),
            t(this._element).removeClass(ei).addClass(sr),
            this._element.style[f] = 0,
            this._triggerArray.length && t(this._triggerArray).removeClass(hu).attr("aria-expanded", !0),
            this.setTransitioning(!0),
            s = "scroll" + (f[0].toUpperCase() + f.slice(1)),
            h = i.getTransitionDurationFromElement(this._element),
            t(this._element).one(i.TRANSITION_END, function() {
                t(u._element).removeClass(sr).addClass(ei).addClass(g);
                u._element.style[f] = "";
                u.setTransitioning(!1);
                t(u._element).trigger(fi.SHOWN)
            }).emulateTransitionEnd(h),
            this._element.style[f] = this._element[s] + "px"))
        }
        ,
        n.hide = function() {
            var s = this, u, n, f, r, e, o, h;
            if (!this._isTransitioning && t(this._element).hasClass(g) && (u = t.Event(fi.HIDE),
            t(this._element).trigger(u),
            !u.isDefaultPrevented())) {
                if (n = this._getDimension(),
                this._element.style[n] = this._element.getBoundingClientRect()[n] + "px",
                i.reflow(this._element),
                t(this._element).addClass(sr).removeClass(ei).removeClass(g),
                f = this._triggerArray.length,
                0 < f)
                    for (r = 0; r < f; r++)
                        e = this._triggerArray[r],
                        o = i.getSelectorFromElement(e),
                        null !== o && (t([].slice.call(document.querySelectorAll(o))).hasClass(g) || t(e).addClass(hu).attr("aria-expanded", !1));
                this.setTransitioning(!0);
                this._element.style[n] = "";
                h = i.getTransitionDurationFromElement(this._element);
                t(this._element).one(i.TRANSITION_END, function() {
                    s.setTransitioning(!1);
                    t(s._element).removeClass(sr).addClass(ei).trigger(fi.HIDDEN)
                }).emulateTransitionEnd(h)
            }
        }
        ,
        n.setTransitioning = function(n) {
            this._isTransitioning = n
        }
        ,
        n.dispose = function() {
            t.removeData(this._element, d);
            this._config = null;
            this._parent = null;
            this._element = null;
            this._triggerArray = null;
            this._isTransitioning = null
        }
        ,
        n._getConfig = function(n) {
            return (n = u({}, su, n)).toggle = Boolean(n.toggle),
            i.typeCheckConfig(st, n, nh),
            n
        }
        ,
        n._getDimension = function() {
            return t(this._element).hasClass(pf) ? pf : th
        }
        ,
        n._getParent = function() {
            var n, e = this, u, f;
            return i.isElement(this._config.parent) ? (n = this._config.parent,
            "undefined" != typeof this._config.parent.jquery && (n = this._config.parent[0])) : n = document.querySelector(this._config.parent),
            u = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]',
            f = [].slice.call(n.querySelectorAll(u)),
            t(f).each(function(n, t) {
                e._addAriaAndCollapsedClass(r._getTargetFromElement(t), [t])
            }),
            n
        }
        ,
        n._addAriaAndCollapsedClass = function(n, i) {
            var r = t(n).hasClass(g);
            i.length && t(i).toggleClass(hu, !r).attr("aria-expanded", r)
        }
        ,
        r._getTargetFromElement = function(n) {
            var t = i.getSelectorFromElement(n);
            return t ? document.querySelector(t) : null
        }
        ,
        r._jQueryInterface = function(n) {
            return this.each(function() {
                var f = t(this)
                  , i = f.data(d)
                  , e = u({}, su, f.data(), "object" == typeof n && n ? n : {});
                if (!i && e.toggle && /show|hide/.test(n) && (e.toggle = !1),
                i || (i = new r(this,e),
                f.data(d, i)),
                "string" == typeof n) {
                    if ("undefined" == typeof i[n])
                        throw new TypeError('No method named "' + n + '"');
                    i[n]()
                }
            })
        }
        ,
        l(r, null, [{
            key: "VERSION",
            get: function() {
                return "4.3.1"
            }
        }, {
            key: "Default",
            get: function() {
                return su
            }
        }]),
        r
    }();
    t(document).on(fi.CLICK_DATA_API, wf, function(n) {
        "A" === n.currentTarget.tagName && n.preventDefault();
        var r = t(this)
          , u = i.getSelectorFromElement(this)
          , f = [].slice.call(document.querySelectorAll(u));
        t(f).each(function() {
            var n = t(this)
              , i = n.data(d) ? "toggle" : r.data();
            oi._jQueryInterface.call(n, i)
        })
    });
    t.fn[st] = oi._jQueryInterface;
    t.fn[st].Constructor = oi;
    t.fn[st].noConflict = function() {
        return t.fn[st] = gs,
        oi._jQueryInterface
    }
    ;
    for (var si = "undefined" != typeof window && "undefined" != typeof document, bf = ["Edge", "Trident", "Firefox"], kf = 0, cu = 0; cu < bf.length; cu += 1)
        if (si && 0 <= navigator.userAgent.indexOf(bf[cu])) {
            kf = 1;
            break
        }
    df = si && window.Promise ? function(n) {
        var t = !1;
        return function() {
            t || (t = !0,
            window.Promise.resolve().then(function() {
                t = !1;
                n()
            }))
        }
    }
    : function(n) {
        var t = !1;
        return function() {
            t || (t = !0,
            setTimeout(function() {
                t = !1;
                n()
            }, kf))
        }
    }
    ;
    au = si && !(!window.MSInputMethodContext || !document.documentMode);
    vu = si && /MSIE 10/.test(navigator.userAgent);
    var rh = function() {
        function n(n, t) {
            for (var i, r = 0; r < t.length; r++)
                i = t[r],
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(n, i.key, i)
        }
        return function(t, i, r) {
            return i && n(t.prototype, i),
            r && n(t, r),
            t
        }
    }()
      , at = function(n, t, i) {
        return t in n ? Object.defineProperty(n, t, {
            value: i,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : n[t] = i,
        n
    }
      , h = Object.assign || function(n) {
        for (var i, r, t = 1; t < arguments.length; t++) {
            i = arguments[t];
            for (r in i)
                Object.prototype.hasOwnProperty.call(i, r) && (n[r] = i[r])
        }
        return n
    }
    ;
    le = si && /Firefox/i.test(navigator.userAgent);
    nf = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"];
    lr = nf.slice(3);
    var eh = "flip"
      , oh = "clockwise"
      , sh = "counterclockwise";
    ye = {
        placement: "bottom",
        positionFixed: !1,
        eventsEnabled: !0,
        removeOnDestroy: !1,
        onCreate: function() {},
        onUpdate: function() {},
        modifiers: {
            shift: {
                order: 100,
                enabled: !0,
                fn: function(n) {
                    var r = n.placement
                      , c = r.split("-")[0]
                      , u = r.split("-")[1];
                    if (u) {
                        var f = n.offsets
                          , i = f.reference
                          , e = f.popper
                          , o = -1 !== ["bottom", "top"].indexOf(c)
                          , t = o ? "left" : "top"
                          , s = o ? "width" : "height"
                          , l = {
                            start: at({}, t, i[t]),
                            end: at({}, t, i[t] + i[s] - e[s])
                        };
                        n.offsets.popper = h({}, e, l[u])
                    }
                    return n
                }
            },
            offset: {
                order: 200,
                enabled: !0,
                fn: function(n, t) {
                    var f = t.offset
                      , o = n.placement
                      , e = n.offsets
                      , i = e.popper
                      , s = e.reference
                      , u = o.split("-")[0]
                      , r = void 0;
                    return r = du(+f) ? [+f, 0] : hh(f, i, s, u),
                    "left" === u ? (i.top += r[0],
                    i.left -= r[1]) : "right" === u ? (i.top += r[0],
                    i.left += r[1]) : "top" === u ? (i.left += r[0],
                    i.top -= r[1]) : "bottom" === u && (i.left += r[0],
                    i.top += r[1]),
                    n.popper = i,
                    n
                },
                offset: 0
            },
            preventOverflow: {
                order: 300,
                enabled: !0,
                fn: function(n, t) {
                    var f = t.boundariesElement || ct(n.instance.popper), u;
                    n.instance.reference === f && (f = ct(f));
                    var e = ku("transform")
                      , r = n.instance.popper.style
                      , o = r.top
                      , s = r.left
                      , c = r[e];
                    r.top = "";
                    r.left = "";
                    r[e] = "";
                    u = bu(n.instance.popper, n.instance.reference, t.padding, f, n.positionFixed);
                    r.top = o;
                    r.left = s;
                    r[e] = c;
                    t.boundaries = u;
                    var l = t.priority
                      , i = n.offsets.popper
                      , a = {
                        primary: function(n) {
                            var r = i[n];
                            return i[n] < u[n] && !t.escapeWithReference && (r = Math.max(i[n], u[n])),
                            at({}, n, r)
                        },
                        secondary: function(n) {
                            var r = "right" === n ? "left" : "top"
                              , f = i[r];
                            return i[n] > u[n] && !t.escapeWithReference && (f = Math.min(i[r], u[n] - ("right" === n ? i.width : i.height))),
                            at({}, r, f)
                        }
                    };
                    return l.forEach(function(n) {
                        var t = -1 !== ["left", "top"].indexOf(n) ? "primary" : "secondary";
                        i = h({}, i, a[t](n))
                    }),
                    n.offsets.popper = i,
                    n
                },
                priority: ["left", "right", "top", "bottom"],
                padding: 5,
                boundariesElement: "scrollParent"
            },
            keepTogether: {
                order: 400,
                enabled: !0,
                fn: function(n) {
                    var o = n.offsets
                      , u = o.popper
                      , i = o.reference
                      , s = n.placement.split("-")[0]
                      , r = Math.floor
                      , f = -1 !== ["top", "bottom"].indexOf(s)
                      , e = f ? "right" : "bottom"
                      , t = f ? "left" : "top"
                      , h = f ? "width" : "height";
                    return u[e] < r(i[t]) && (n.offsets.popper[t] = r(i[t]) - u[h]),
                    u[t] > r(i[e]) && (n.offsets.popper[t] = r(i[e])),
                    n
                }
            },
            arrow: {
                order: 500,
                enabled: !0,
                fn: function(n, t) {
                    var h, r;
                    if (!ae(n.instance.modifiers, "arrow", "keepTogether"))
                        return n;
                    if (r = t.element,
                    "string" == typeof r) {
                        if (!(r = n.instance.popper.querySelector(r)))
                            return n
                    } else if (!n.instance.popper.contains(r))
                        return console.warn("WARNING: `arrow.element` must be child of its popper element!"),
                        n;
                    var w = n.placement.split("-")[0]
                      , v = n.offsets
                      , e = v.popper
                      , u = v.reference
                      , o = -1 !== ["left", "right"].indexOf(w)
                      , c = o ? "height" : "width"
                      , l = o ? "Top" : "Left"
                      , i = l.toLowerCase()
                      , b = o ? "left" : "top"
                      , s = o ? "bottom" : "right"
                      , f = ee(r)[c];
                    u[s] - f < e[i] && (n.offsets.popper[i] -= e[i] - (u[s] - f));
                    u[i] + f > e[s] && (n.offsets.popper[i] += u[i] + f - e[s]);
                    n.offsets.popper = p(n.offsets.popper);
                    var k = u[i] + u[c] / 2 - f / 2
                      , y = nt(n.instance.popper)
                      , d = parseFloat(y["margin" + l], 10)
                      , g = parseFloat(y["border" + l + "Width"], 10)
                      , a = k - n.offsets.popper[i] - d - g;
                    return a = Math.max(Math.min(e[c] - f, a), 0),
                    n.arrowElement = r,
                    n.offsets.arrow = (at(h = {}, i, Math.round(a)),
                    at(h, b, ""),
                    h),
                    n
                },
                element: "[x-arrow]"
            },
            flip: {
                order: 600,
                enabled: !0,
                fn: function(n, t) {
                    if (he(n.instance.modifiers, "inner") || n.flipped && n.placement === n.originalPlacement)
                        return n;
                    var f = bu(n.instance.popper, n.instance.reference, t.padding, t.boundariesElement, n.positionFixed)
                      , i = n.placement.split("-")[0]
                      , e = cr(i)
                      , r = n.placement.split("-")[1] || ""
                      , u = [];
                    switch (t.behavior) {
                    case eh:
                        u = [i, e];
                        break;
                    case oh:
                        u = ve(i);
                        break;
                    case sh:
                        u = ve(i, !0);
                        break;
                    default:
                        u = t.behavior
                    }
                    return u.forEach(function(o, s) {
                        if (i !== o || u.length === s + 1)
                            return n;
                        i = n.placement.split("-")[0];
                        e = cr(i);
                        var y, l = n.offsets.popper, a = n.offsets.reference, c = Math.floor, p = "left" === i && c(l.right) > c(a.left) || "right" === i && c(l.left) < c(a.right) || "top" === i && c(l.bottom) > c(a.top) || "bottom" === i && c(l.top) < c(a.bottom), w = c(l.left) < c(f.left), b = c(l.right) > c(f.right), k = c(l.top) < c(f.top), d = c(l.bottom) > c(f.bottom), g = "left" === i && w || "right" === i && b || "top" === i && k || "bottom" === i && d, v = -1 !== ["top", "bottom"].indexOf(i), nt = !!t.flipVariations && (v && "start" === r && w || v && "end" === r && b || !v && "start" === r && k || !v && "end" === r && d);
                        (p || g || nt) && (n.flipped = !0,
                        (p || g) && (i = u[s + 1]),
                        nt && (r = "end" === (y = r) ? "start" : "start" === y ? "end" : y),
                        n.placement = i + (r ? "-" + r : ""),
                        n.offsets.popper = h({}, n.offsets.popper, oe(n.instance.popper, n.offsets.reference, n.placement)),
                        n = se(n.instance.modifiers, n, "flip"))
                    }),
                    n
                },
                behavior: "flip",
                padding: 5,
                boundariesElement: "viewport"
            },
            inner: {
                order: 700,
                enabled: !1,
                fn: function(n) {
                    var r = n.placement
                      , t = r.split("-")[0]
                      , u = n.offsets
                      , i = u.popper
                      , e = u.reference
                      , f = -1 !== ["left", "right"].indexOf(t)
                      , o = -1 === ["top", "left"].indexOf(t);
                    return i[f ? "left" : "top"] = e[t] - (o ? i[f ? "width" : "height"] : 0),
                    n.placement = cr(r),
                    n.offsets.popper = p(i),
                    n
                }
            },
            hide: {
                order: 800,
                enabled: !0,
                fn: function(n) {
                    if (!ae(n.instance.modifiers, "hide", "preventOverflow"))
                        return n;
                    var t = n.offsets.reference
                      , i = ci(n.instance.modifiers, function(n) {
                        return "preventOverflow" === n.name
                    }).boundaries;
                    if (t.bottom < i.top || t.left > i.right || t.top > i.bottom || t.right < i.left) {
                        if (!0 === n.hide)
                            return n;
                        n.hide = !0;
                        n.attributes["x-out-of-boundaries"] = ""
                    } else {
                        if (!1 === n.hide)
                            return n;
                        n.hide = !1;
                        n.attributes["x-out-of-boundaries"] = !1
                    }
                    return n
                }
            },
            computeStyle: {
                order: 850,
                enabled: !0,
                fn: function(n, t) {
                    var ht = t.x, lt = t.y, at = n.offsets.popper, a = ci(n.instance.modifiers, function(n) {
                        return "applyStyle" === n.name
                    }).gpuAcceleration, et, ot, st;
                    void 0 !== a && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
                    var c, l, v, r, nt, f, tt, y, p, w, it, b, rt, k, vt = void 0 !== a ? a : t.gpuAcceleration, e = ct(n.instance.popper), ut = pu(e), i = {
                        position: at.position
                    }, u = (c = n,
                    l = window.devicePixelRatio < 2 || !le,
                    v = c.offsets,
                    r = v.popper,
                    nt = v.reference,
                    f = Math.round,
                    tt = Math.floor,
                    y = function(n) {
                        return n
                    }
                    ,
                    p = f(nt.width),
                    w = f(r.width),
                    it = -1 !== ["left", "right"].indexOf(c.placement),
                    b = -1 !== c.placement.indexOf("-"),
                    k = l ? f : y,
                    {
                        left: (rt = l ? it || b || p % 2 == w % 2 ? f : tt : y)(p % 2 == 1 && w % 2 == 1 && !b && l ? r.left - 1 : r.left),
                        top: k(r.top),
                        bottom: k(r.bottom),
                        right: rt(r.right)
                    }), o = "bottom" === ht ? "top" : "bottom", s = "right" === lt ? "left" : "right", ft = ku("transform"), d = void 0, g = void 0;
                    return (g = "bottom" === o ? "HTML" === e.nodeName ? -e.clientHeight + u.bottom : -ut.height + u.bottom : u.top,
                    d = "right" === s ? "HTML" === e.nodeName ? -e.clientWidth + u.right : -ut.width + u.right : u.left,
                    vt && ft) ? (i[ft] = "translate3d(" + d + "px, " + g + "px, 0)",
                    i[o] = 0,
                    i[s] = 0,
                    i.willChange = "transform") : (et = "bottom" === o ? -1 : 1,
                    ot = "right" === s ? -1 : 1,
                    i[o] = g * et,
                    i[s] = d * ot,
                    i.willChange = o + ", " + s),
                    st = {
                        "x-placement": n.placement
                    },
                    n.attributes = h({}, st, n.attributes),
                    n.styles = h({}, i, n.styles),
                    n.arrowStyles = h({}, n.offsets.arrow, n.arrowStyles),
                    n
                },
                gpuAcceleration: !0,
                x: "bottom",
                y: "right"
            },
            applyStyle: {
                order: 900,
                enabled: !0,
                fn: function(n) {
                    var i, t;
                    return gu(n.instance.popper, n.styles),
                    i = n.instance.popper,
                    t = n.attributes,
                    Object.keys(t).forEach(function(n) {
                        !1 !== t[n] ? i.setAttribute(n, t[n]) : i.removeAttribute(n)
                    }),
                    n.arrowElement && Object.keys(n.arrowStyles).length && gu(n.arrowElement, n.arrowStyles),
                    n
                },
                onLoad: function(n, t, i, r, u) {
                    var f = fe(u, t, n, i.positionFixed)
                      , e = ue(i.placement, f, t, n, i.modifiers.flip.boundariesElement, i.modifiers.flip.padding);
                    return t.setAttribute("x-placement", e),
                    gu(t, {
                        position: i.positionFixed ? "fixed" : "absolute"
                    }),
                    i
                },
                gpuAcceleration: void 0
            }
        }
    };
    w = function() {
        function n(t, i) {
            var r = this, u = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {}, f;
            !function(n, t) {
                if (!(n instanceof t))
                    throw new TypeError("Cannot call a class as a function");
            }(this, n);
            this.scheduleUpdate = function() {
                return requestAnimationFrame(r.update)
            }
            ;
            this.update = df(this.update.bind(this));
            this.options = h({}, n.Defaults, u);
            this.state = {
                isDestroyed: !1,
                isCreated: !1,
                scrollParents: []
            };
            this.reference = t && t.jquery ? t[0] : t;
            this.popper = i && i.jquery ? i[0] : i;
            this.options.modifiers = {};
            Object.keys(h({}, n.Defaults.modifiers, u.modifiers)).forEach(function(t) {
                r.options.modifiers[t] = h({}, n.Defaults.modifiers[t] || {}, u.modifiers ? u.modifiers[t] : {})
            });
            this.modifiers = Object.keys(this.options.modifiers).map(function(n) {
                return h({
                    name: n
                }, r.options.modifiers[n])
            }).sort(function(n, t) {
                return n.order - t.order
            });
            this.modifiers.forEach(function(n) {
                n.enabled && gf(n.onLoad) && n.onLoad(r.reference, r.popper, r.options, n, r.state)
            });
            this.update();
            f = this.options.eventsEnabled;
            f && this.enableEventListeners();
            this.state.eventsEnabled = f
        }
        return rh(n, [{
            key: "update",
            value: function() {
                return function() {
                    if (!this.state.isDestroyed) {
                        var n = {
                            instance: this,
                            styles: {},
                            arrowStyles: {},
                            attributes: {},
                            flipped: !1,
                            offsets: {}
                        };
                        n.offsets.reference = fe(this.state, this.popper, this.reference, this.options.positionFixed);
                        n.placement = ue(this.options.placement, n.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding);
                        n.originalPlacement = n.placement;
                        n.positionFixed = this.options.positionFixed;
                        n.offsets.popper = oe(this.popper, n.offsets.reference, n.placement);
                        n.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute";
                        n = se(this.modifiers, n);
                        this.state.isCreated ? this.options.onUpdate(n) : (this.state.isCreated = !0,
                        this.options.onCreate(n))
                    }
                }
                .call(this)
            }
        }, {
            key: "destroy",
            value: function() {
                return function() {
                    return this.state.isDestroyed = !0,
                    he(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"),
                    this.popper.style.position = "",
                    this.popper.style.top = "",
                    this.popper.style.left = "",
                    this.popper.style.right = "",
                    this.popper.style.bottom = "",
                    this.popper.style.willChange = "",
                    this.popper.style[ku("transform")] = ""),
                    this.disableEventListeners(),
                    this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper),
                    this
                }
                .call(this)
            }
        }, {
            key: "enableEventListeners",
            value: function() {
                return function() {
                    this.state.eventsEnabled || (this.state = uh(this.reference, this.options, this.state, this.scheduleUpdate))
                }
                .call(this)
            }
        }, {
            key: "disableEventListeners",
            value: function() {
                return fh.call(this)
            }
        }]),
        n
    }();
    w.Utils = ("undefined" != typeof window ? window : global).PopperUtils;
    w.placements = nf;
    w.Defaults = ye;
    var vt = "dropdown"
      , li = "bs.dropdown"
      , y = "." + li
      , tf = ".data-api"
      , ch = t.fn[vt]
      , lh = new RegExp("38|40|27")
      , f = {
        HIDE: "hide" + y,
        HIDDEN: "hidden" + y,
        SHOW: "show" + y,
        SHOWN: "shown" + y,
        CLICK: "click" + y,
        CLICK_DATA_API: "click" + y + tf,
        KEYDOWN_DATA_API: "keydown" + y + tf,
        KEYUP_DATA_API: "keyup" + y + tf
    }
      , ar = "disabled"
      , s = "show"
      , ah = "dropup"
      , vh = "dropright"
      , yh = "dropleft"
      , pe = "dropdown-menu-right"
      , ph = "position-static"
      , vr = '[data-toggle="dropdown"]'
      , rf = ".dropdown-menu"
      , wh = ".navbar-nav"
      , bh = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)"
      , kh = "top-start"
      , dh = "top-end"
      , gh = "bottom-start"
      , nc = "bottom-end"
      , tc = "right-start"
      , ic = "left-start"
      , rc = {
        offset: 0,
        flip: !0,
        boundary: "scrollParent",
        reference: "toggle",
        display: "dynamic"
    }
      , uc = {
        offset: "(number|string|function)",
        flip: "boolean",
        boundary: "(string|element)",
        reference: "(string|element)",
        display: "string"
    }
      , b = function() {
        function n(n, t) {
            this._element = n;
            this._popper = null;
            this._config = this._getConfig(t);
            this._menu = this._getMenuElement();
            this._inNavbar = this._detectNavbar();
            this._addEventListeners()
        }
        var r = n.prototype;
        return r.toggle = function() {
            var r, h, e, o, u;
            if (!this._element.disabled && !t(this._element).hasClass(ar) && (r = n._getParentFromElement(this._element),
            h = t(this._menu).hasClass(s),
            (n._clearMenus(),
            !h) && (e = {
                relatedTarget: this._element
            },
            o = t.Event(f.SHOW, e),
            t(r).trigger(o),
            !o.isDefaultPrevented()))) {
                if (!this._inNavbar) {
                    if ("undefined" == typeof w)
                        throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");
                    u = this._element;
                    "parent" === this._config.reference ? u = r : i.isElement(this._config.reference) && (u = this._config.reference,
                    "undefined" != typeof this._config.reference.jquery && (u = this._config.reference[0]));
                    "scrollParent" !== this._config.boundary && t(r).addClass(ph);
                    this._popper = new w(u,this._menu,this._getPopperConfig())
                }
                "ontouchstart"in document.documentElement && 0 === t(r).closest(wh).length && t(document.body).children().on("mouseover", null, t.noop);
                this._element.focus();
                this._element.setAttribute("aria-expanded", !0);
                t(this._menu).toggleClass(s);
                t(r).toggleClass(s).trigger(t.Event(f.SHOWN, e))
            }
        }
        ,
        r.show = function() {
            if (!(this._element.disabled || t(this._element).hasClass(ar) || t(this._menu).hasClass(s))) {
                var i = {
                    relatedTarget: this._element
                }
                  , r = t.Event(f.SHOW, i)
                  , u = n._getParentFromElement(this._element);
                t(u).trigger(r);
                r.isDefaultPrevented() || (t(this._menu).toggleClass(s),
                t(u).toggleClass(s).trigger(t.Event(f.SHOWN, i)))
            }
        }
        ,
        r.hide = function() {
            if (!this._element.disabled && !t(this._element).hasClass(ar) && t(this._menu).hasClass(s)) {
                var i = {
                    relatedTarget: this._element
                }
                  , r = t.Event(f.HIDE, i)
                  , u = n._getParentFromElement(this._element);
                t(u).trigger(r);
                r.isDefaultPrevented() || (t(this._menu).toggleClass(s),
                t(u).toggleClass(s).trigger(t.Event(f.HIDDEN, i)))
            }
        }
        ,
        r.dispose = function() {
            t.removeData(this._element, li);
            t(this._element).off(y);
            this._element = null;
            (this._menu = null) !== this._popper && (this._popper.destroy(),
            this._popper = null)
        }
        ,
        r.update = function() {
            this._inNavbar = this._detectNavbar();
            null !== this._popper && this._popper.scheduleUpdate()
        }
        ,
        r._addEventListeners = function() {
            var n = this;
            t(this._element).on(f.CLICK, function(t) {
                t.preventDefault();
                t.stopPropagation();
                n.toggle()
            })
        }
        ,
        r._getConfig = function(n) {
            return n = u({}, this.constructor.Default, t(this._element).data(), n),
            i.typeCheckConfig(vt, n, this.constructor.DefaultType),
            n
        }
        ,
        r._getMenuElement = function() {
            if (!this._menu) {
                var t = n._getParentFromElement(this._element);
                t && (this._menu = t.querySelector(rf))
            }
            return this._menu
        }
        ,
        r._getPlacement = function() {
            var i = t(this._element.parentNode)
              , n = gh;
            return i.hasClass(ah) ? (n = kh,
            t(this._menu).hasClass(pe) && (n = dh)) : i.hasClass(vh) ? n = tc : i.hasClass(yh) ? n = ic : t(this._menu).hasClass(pe) && (n = nc),
            n
        }
        ,
        r._detectNavbar = function() {
            return 0 < t(this._element).closest(".navbar").length
        }
        ,
        r._getOffset = function() {
            var t = this
              , n = {};
            return "function" == typeof this._config.offset ? n.fn = function(n) {
                return n.offsets = u({}, n.offsets, t._config.offset(n.offsets, t._element) || {}),
                n
            }
            : n.offset = this._config.offset,
            n
        }
        ,
        r._getPopperConfig = function() {
            var n = {
                placement: this._getPlacement(),
                modifiers: {
                    offset: this._getOffset(),
                    flip: {
                        enabled: this._config.flip
                    },
                    preventOverflow: {
                        boundariesElement: this._config.boundary
                    }
                }
            };
            return "static" === this._config.display && (n.modifiers.applyStyle = {
                enabled: !1
            }),
            n
        }
        ,
        n._jQueryInterface = function(i) {
            return this.each(function() {
                var r = t(this).data(li);
                if (r || (r = new n(this,"object" == typeof i ? i : null),
                t(this).data(li, r)),
                "string" == typeof i) {
                    if ("undefined" == typeof r[i])
                        throw new TypeError('No method named "' + i + '"');
                    r[i]()
                }
            })
        }
        ,
        n._clearMenus = function(i) {
            var l, h;
            if (!i || 3 !== i.which && ("keyup" !== i.type || 9 === i.which))
                for (var u = [].slice.call(document.querySelectorAll(vr)), r = 0, a = u.length; r < a; r++) {
                    var e = n._getParentFromElement(u[r])
                      , c = t(u[r]).data(li)
                      , o = {
                        relatedTarget: u[r]
                    };
                    (i && "click" === i.type && (o.clickEvent = i),
                    c) && (l = c._menu,
                    !t(e).hasClass(s) || i && ("click" === i.type && /input|textarea/i.test(i.target.tagName) || "keyup" === i.type && 9 === i.which) && t.contains(e, i.target) || (h = t.Event(f.HIDE, o),
                    t(e).trigger(h),
                    h.isDefaultPrevented() || ("ontouchstart"in document.documentElement && t(document.body).children().off("mouseover", null, t.noop),
                    u[r].setAttribute("aria-expanded", "false"),
                    t(l).removeClass(s),
                    t(e).removeClass(s).trigger(t.Event(f.HIDDEN, o)))))
                }
        }
        ,
        n._getParentFromElement = function(n) {
            var t, r = i.getSelectorFromElement(n);
            return r && (t = document.querySelector(r)),
            t || n.parentNode
        }
        ,
        n._dataApiKeydownHandler = function(i) {
            var f, e, u, r, o;
            (/input|textarea/i.test(i.target.tagName) ? 32 === i.which || 27 !== i.which && (40 !== i.which && 38 !== i.which || t(i.target).closest(rf).length) : !lh.test(i.which)) || (i.preventDefault(),
            i.stopPropagation(),
            this.disabled || t(this).hasClass(ar)) || (f = n._getParentFromElement(this),
            e = t(f).hasClass(s),
            e && (!e || 27 !== i.which && 32 !== i.which) ? (u = [].slice.call(f.querySelectorAll(bh)),
            0 !== u.length && (r = u.indexOf(i.target),
            38 === i.which && 0 < r && r--,
            40 === i.which && r < u.length - 1 && r++,
            r < 0 && (r = 0),
            u[r].focus())) : (27 === i.which && (o = f.querySelector(vr),
            t(o).trigger("focus")),
            t(this).trigger("click")))
        }
        ,
        l(n, null, [{
            key: "VERSION",
            get: function() {
                return "4.3.1"
            }
        }, {
            key: "Default",
            get: function() {
                return rc
            }
        }, {
            key: "DefaultType",
            get: function() {
                return uc
            }
        }]),
        n
    }();
    t(document).on(f.KEYDOWN_DATA_API, vr, b._dataApiKeydownHandler).on(f.KEYDOWN_DATA_API, rf, b._dataApiKeydownHandler).on(f.CLICK_DATA_API + " " + f.KEYUP_DATA_API, b._clearMenus).on(f.CLICK_DATA_API, vr, function(n) {
        n.preventDefault();
        n.stopPropagation();
        b._jQueryInterface.call(t(this), "toggle")
    }).on(f.CLICK_DATA_API, ".dropdown form", function(n) {
        n.stopPropagation()
    });
    t.fn[vt] = b._jQueryInterface;
    t.fn[vt].Constructor = b;
    t.fn[vt].noConflict = function() {
        return t.fn[vt] = ch,
        b._jQueryInterface
    }
    ;
    var yt = "modal"
      , ai = "bs.modal"
      , c = "." + ai
      , fc = t.fn[yt]
      , uf = {
        backdrop: !0,
        keyboard: !0,
        focus: !0,
        show: !0
    }
      , ec = {
        backdrop: "(boolean|string)",
        keyboard: "boolean",
        focus: "boolean",
        show: "boolean"
    }
      , r = {
        HIDE: "hide" + c,
        HIDDEN: "hidden" + c,
        SHOW: "show" + c,
        SHOWN: "shown" + c,
        FOCUSIN: "focusin" + c,
        RESIZE: "resize" + c,
        CLICK_DISMISS: "click.dismiss" + c,
        KEYDOWN_DISMISS: "keydown.dismiss" + c,
        MOUSEUP_DISMISS: "mouseup.dismiss" + c,
        MOUSEDOWN_DISMISS: "mousedown.dismiss" + c,
        CLICK_DATA_API: "click" + c + ".data-api"
    }
      , oc = "modal-dialog-scrollable"
      , sc = "modal-scrollbar-measure"
      , hc = "modal-backdrop"
      , we = "modal-open"
      , pt = "fade"
      , yr = "show"
      , cc = ".modal-dialog"
      , lc = ".modal-body"
      , ac = '[data-dismiss="modal"]'
      , be = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top"
      , ke = ".sticky-top"
      , vi = function() {
        function f(n, t) {
            this._config = this._getConfig(t);
            this._element = n;
            this._dialog = n.querySelector(cc);
            this._backdrop = null;
            this._isShown = !1;
            this._isBodyOverflowing = !1;
            this._ignoreBackdropClick = !1;
            this._isTransitioning = !1;
            this._scrollbarWidth = 0
        }
        var n = f.prototype;
        return n.toggle = function(n) {
            return this._isShown ? this.hide() : this.show(n)
        }
        ,
        n.show = function(n) {
            var i = this, u;
            this._isShown || this._isTransitioning || (t(this._element).hasClass(pt) && (this._isTransitioning = !0),
            u = t.Event(r.SHOW, {
                relatedTarget: n
            }),
            t(this._element).trigger(u),
            this._isShown || u.isDefaultPrevented() || (this._isShown = !0,
            this._checkScrollbar(),
            this._setScrollbar(),
            this._adjustDialog(),
            this._setEscapeEvent(),
            this._setResizeEvent(),
            t(this._element).on(r.CLICK_DISMISS, ac, function(n) {
                return i.hide(n)
            }),
            t(this._dialog).on(r.MOUSEDOWN_DISMISS, function() {
                t(i._element).one(r.MOUSEUP_DISMISS, function(n) {
                    t(n.target).is(i._element) && (i._ignoreBackdropClick = !0)
                })
            }),
            this._showBackdrop(function() {
                return i._showElement(n)
            })))
        }
        ,
        n.hide = function(n) {
            var o = this, u, f, e;
            (n && n.preventDefault(),
            this._isShown && !this._isTransitioning) && (u = t.Event(r.HIDE),
            (t(this._element).trigger(u),
            this._isShown && !u.isDefaultPrevented()) && (this._isShown = !1,
            f = t(this._element).hasClass(pt),
            (f && (this._isTransitioning = !0),
            this._setEscapeEvent(),
            this._setResizeEvent(),
            t(document).off(r.FOCUSIN),
            t(this._element).removeClass(yr),
            t(this._element).off(r.CLICK_DISMISS),
            t(this._dialog).off(r.MOUSEDOWN_DISMISS),
            f) ? (e = i.getTransitionDurationFromElement(this._element),
            t(this._element).one(i.TRANSITION_END, function(n) {
                return o._hideModal(n)
            }).emulateTransitionEnd(e)) : this._hideModal()))
        }
        ,
        n.dispose = function() {
            [window, this._element, this._dialog].forEach(function(n) {
                return t(n).off(c)
            });
            t(document).off(r.FOCUSIN);
            t.removeData(this._element, ai);
            this._config = null;
            this._element = null;
            this._dialog = null;
            this._backdrop = null;
            this._isShown = null;
            this._isBodyOverflowing = null;
            this._ignoreBackdropClick = null;
            this._isTransitioning = null;
            this._scrollbarWidth = null
        }
        ,
        n.handleUpdate = function() {
            this._adjustDialog()
        }
        ,
        n._getConfig = function(n) {
            return n = u({}, uf, n),
            i.typeCheckConfig(yt, n, ec),
            n
        }
        ,
        n._showElement = function(n) {
            var u = this, e = t(this._element).hasClass(pt), o, f, s;
            this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element);
            this._element.style.display = "block";
            this._element.removeAttribute("aria-hidden");
            this._element.setAttribute("aria-modal", !0);
            t(this._dialog).hasClass(oc) ? this._dialog.querySelector(lc).scrollTop = 0 : this._element.scrollTop = 0;
            e && i.reflow(this._element);
            t(this._element).addClass(yr);
            this._config.focus && this._enforceFocus();
            o = t.Event(r.SHOWN, {
                relatedTarget: n
            });
            f = function() {
                u._config.focus && u._element.focus();
                u._isTransitioning = !1;
                t(u._element).trigger(o)
            }
            ;
            e ? (s = i.getTransitionDurationFromElement(this._dialog),
            t(this._dialog).one(i.TRANSITION_END, f).emulateTransitionEnd(s)) : f()
        }
        ,
        n._enforceFocus = function() {
            var n = this;
            t(document).off(r.FOCUSIN).on(r.FOCUSIN, function(i) {
                document !== i.target && n._element !== i.target && 0 === t(n._element).has(i.target).length && n._element.focus()
            })
        }
        ,
        n._setEscapeEvent = function() {
            var n = this;
            this._isShown && this._config.keyboard ? t(this._element).on(r.KEYDOWN_DISMISS, function(t) {
                27 === t.which && (t.preventDefault(),
                n.hide())
            }) : this._isShown || t(this._element).off(r.KEYDOWN_DISMISS)
        }
        ,
        n._setResizeEvent = function() {
            var n = this;
            this._isShown ? t(window).on(r.RESIZE, function(t) {
                return n.handleUpdate(t)
            }) : t(window).off(r.RESIZE)
        }
        ,
        n._hideModal = function() {
            var n = this;
            this._element.style.display = "none";
            this._element.setAttribute("aria-hidden", !0);
            this._element.removeAttribute("aria-modal");
            this._isTransitioning = !1;
            this._showBackdrop(function() {
                t(document.body).removeClass(we);
                n._resetAdjustments();
                n._resetScrollbar();
                t(n._element).trigger(r.HIDDEN)
            })
        }
        ,
        n._removeBackdrop = function() {
            this._backdrop && (t(this._backdrop).remove(),
            this._backdrop = null)
        }
        ,
        n._showBackdrop = function(n) {
            var u = this, f = t(this._element).hasClass(pt) ? pt : "", o, e, s;
            if (this._isShown && this._config.backdrop) {
                if (this._backdrop = document.createElement("div"),
                this._backdrop.className = hc,
                f && this._backdrop.classList.add(f),
                t(this._backdrop).appendTo(document.body),
                t(this._element).on(r.CLICK_DISMISS, function(n) {
                    u._ignoreBackdropClick ? u._ignoreBackdropClick = !1 : n.target === n.currentTarget && ("static" === u._config.backdrop ? u._element.focus() : u.hide())
                }),
                f && i.reflow(this._backdrop),
                t(this._backdrop).addClass(yr),
                !n)
                    return;
                if (!f)
                    return void n();
                o = i.getTransitionDurationFromElement(this._backdrop);
                t(this._backdrop).one(i.TRANSITION_END, n).emulateTransitionEnd(o)
            } else
                !this._isShown && this._backdrop ? (t(this._backdrop).removeClass(yr),
                e = function() {
                    u._removeBackdrop();
                    n && n()
                }
                ,
                t(this._element).hasClass(pt) ? (s = i.getTransitionDurationFromElement(this._backdrop),
                t(this._backdrop).one(i.TRANSITION_END, e).emulateTransitionEnd(s)) : e()) : n && n()
        }
        ,
        n._adjustDialog = function() {
            var n = this._element.scrollHeight > document.documentElement.clientHeight;
            !this._isBodyOverflowing && n && (this._element.style.paddingLeft = this._scrollbarWidth + "px");
            this._isBodyOverflowing && !n && (this._element.style.paddingRight = this._scrollbarWidth + "px")
        }
        ,
        n._resetAdjustments = function() {
            this._element.style.paddingLeft = "";
            this._element.style.paddingRight = ""
        }
        ,
        n._checkScrollbar = function() {
            var n = document.body.getBoundingClientRect();
            this._isBodyOverflowing = n.left + n.right < window.innerWidth;
            this._scrollbarWidth = this._getScrollbarWidth()
        }
        ,
        n._setScrollbar = function() {
            var n = this, i, r, u, f;
            this._isBodyOverflowing && (i = [].slice.call(document.querySelectorAll(be)),
            r = [].slice.call(document.querySelectorAll(ke)),
            t(i).each(function(i, r) {
                var u = r.style.paddingRight
                  , f = t(r).css("padding-right");
                t(r).data("padding-right", u).css("padding-right", parseFloat(f) + n._scrollbarWidth + "px")
            }),
            t(r).each(function(i, r) {
                var u = r.style.marginRight
                  , f = t(r).css("margin-right");
                t(r).data("margin-right", u).css("margin-right", parseFloat(f) - n._scrollbarWidth + "px")
            }),
            u = document.body.style.paddingRight,
            f = t(document.body).css("padding-right"),
            t(document.body).data("padding-right", u).css("padding-right", parseFloat(f) + this._scrollbarWidth + "px"));
            t(document.body).addClass(we)
        }
        ,
        n._resetScrollbar = function() {
            var r = [].slice.call(document.querySelectorAll(be)), n, i;
            t(r).each(function(n, i) {
                var r = t(i).data("padding-right");
                t(i).removeData("padding-right");
                i.style.paddingRight = r || ""
            });
            n = [].slice.call(document.querySelectorAll("" + ke));
            t(n).each(function(n, i) {
                var r = t(i).data("margin-right");
                "undefined" != typeof r && t(i).css("margin-right", r).removeData("margin-right")
            });
            i = t(document.body).data("padding-right");
            t(document.body).removeData("padding-right");
            document.body.style.paddingRight = i || ""
        }
        ,
        n._getScrollbarWidth = function() {
            var n = document.createElement("div"), t;
            return n.className = sc,
            document.body.appendChild(n),
            t = n.getBoundingClientRect().width - n.clientWidth,
            document.body.removeChild(n),
            t
        }
        ,
        f._jQueryInterface = function(n, i) {
            return this.each(function() {
                var r = t(this).data(ai)
                  , e = u({}, uf, t(this).data(), "object" == typeof n && n ? n : {});
                if (r || (r = new f(this,e),
                t(this).data(ai, r)),
                "string" == typeof n) {
                    if ("undefined" == typeof r[n])
                        throw new TypeError('No method named "' + n + '"');
                    r[n](i)
                } else
                    e.show && r.show(i)
            })
        }
        ,
        l(f, null, [{
            key: "VERSION",
            get: function() {
                return "4.3.1"
            }
        }, {
            key: "Default",
            get: function() {
                return uf
            }
        }]),
        f
    }();
    t(document).on(r.CLICK_DATA_API, '[data-toggle="modal"]', function(n) {
        var f, e = this, o = i.getSelectorFromElement(this), s, h;
        o && (f = document.querySelector(o));
        s = t(f).data(ai) ? "toggle" : u({}, t(f).data(), t(this).data());
        "A" !== this.tagName && "AREA" !== this.tagName || n.preventDefault();
        h = t(f).one(r.SHOW, function(n) {
            n.isDefaultPrevented() || h.one(r.HIDDEN, function() {
                t(e).is(":visible") && e.focus()
            })
        });
        vi._jQueryInterface.call(t(f), s, this)
    });
    t.fn[yt] = vi._jQueryInterface;
    t.fn[yt].Constructor = vi;
    t.fn[yt].noConflict = function() {
        return t.fn[yt] = fc,
        vi._jQueryInterface
    }
    ;
    var vc = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]
      , yc = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi
      , pc = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;
    var tt = "tooltip"
      , pr = "bs.tooltip"
      , a = "." + pr
      , wc = t.fn[tt]
      , ge = "bs-tooltip"
      , bc = new RegExp("(^|\\s)" + ge + "\\S+","g")
      , kc = ["sanitize", "whiteList", "sanitizeFn"]
      , dc = {
        animation: "boolean",
        template: "string",
        title: "(string|element|function)",
        trigger: "string",
        delay: "(number|object)",
        html: "boolean",
        selector: "(string|boolean)",
        placement: "(string|function)",
        offset: "(number|string|function)",
        container: "(string|element|boolean)",
        fallbackPlacement: "(string|array)",
        boundary: "(string|element)",
        sanitize: "boolean",
        sanitizeFn: "(null|function)",
        whiteList: "object"
    }
      , gc = {
        AUTO: "auto",
        TOP: "top",
        RIGHT: "right",
        BOTTOM: "bottom",
        LEFT: "left"
    }
      , nl = {
        animation: !0,
        template: '<div class="tooltip" role="tooltip"><div class="arrow"><\/div><div class="tooltip-inner"><\/div><\/div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        selector: !1,
        placement: "top",
        offset: 0,
        container: !1,
        fallbackPlacement: "flip",
        boundary: "scrollParent",
        sanitize: !0,
        sanitizeFn: null,
        whiteList: {
            "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
            a: ["target", "href", "title", "rel"],
            area: [],
            b: [],
            br: [],
            col: [],
            code: [],
            div: [],
            em: [],
            hr: [],
            h1: [],
            h2: [],
            h3: [],
            h4: [],
            h5: [],
            h6: [],
            i: [],
            img: ["src", "alt", "title", "width", "height"],
            li: [],
            ol: [],
            p: [],
            pre: [],
            s: [],
            small: [],
            span: [],
            sub: [],
            sup: [],
            strong: [],
            u: [],
            ul: []
        }
    }
      , yi = "show"
      , ff = "out"
      , tl = {
        HIDE: "hide" + a,
        HIDDEN: "hidden" + a,
        SHOW: "show" + a,
        SHOWN: "shown" + a,
        INSERTED: "inserted" + a,
        CLICK: "click" + a,
        FOCUSIN: "focusin" + a,
        FOCUSOUT: "focusout" + a,
        MOUSEENTER: "mouseenter" + a,
        MOUSELEAVE: "mouseleave" + a
    }
      , pi = "fade"
      , wi = "show"
      , il = ".tooltip-inner"
      , rl = ".arrow"
      , bi = "hover"
      , ef = "focus"
      , ul = "click"
      , fl = "manual"
      , it = function() {
        function r(n, t) {
            if ("undefined" == typeof w)
                throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");
            this._isEnabled = !0;
            this._timeout = 0;
            this._hoverState = "";
            this._activeTrigger = {};
            this._popper = null;
            this.element = n;
            this.config = this._getConfig(t);
            this.tip = null;
            this._setListeners()
        }
        var n = r.prototype;
        return n.enable = function() {
            this._isEnabled = !0
        }
        ,
        n.disable = function() {
            this._isEnabled = !1
        }
        ,
        n.toggleEnabled = function() {
            this._isEnabled = !this._isEnabled
        }
        ,
        n.toggle = function(n) {
            if (this._isEnabled)
                if (n) {
                    var r = this.constructor.DATA_KEY
                      , i = t(n.currentTarget).data(r);
                    i || (i = new this.constructor(n.currentTarget,this._getDelegateConfig()),
                    t(n.currentTarget).data(r, i));
                    i._activeTrigger.click = !i._activeTrigger.click;
                    i._isWithActiveTrigger() ? i._enter(null, i) : i._leave(null, i)
                } else {
                    if (t(this.getTipElement()).hasClass(wi))
                        return void this._leave(null, this);
                    this._enter(null, this)
                }
        }
        ,
        n.dispose = function() {
            clearTimeout(this._timeout);
            t.removeData(this.element, this.constructor.DATA_KEY);
            t(this.element).off(this.constructor.EVENT_KEY);
            t(this.element).closest(".modal").off("hide.bs.modal");
            this.tip && t(this.tip).remove();
            this._isEnabled = null;
            this._timeout = null;
            this._hoverState = null;
            (this._activeTrigger = null) !== this._popper && this._popper.destroy();
            this._popper = null;
            this.element = null;
            this.config = null;
            this.tip = null
        }
        ,
        n.show = function() {
            var n = this, u, f, h, r, e, c, o, l, s, a;
            if ("none" === t(this.element).css("display"))
                throw new Error("Please use show on visible elements");
            if (u = t.Event(this.constructor.Event.SHOW),
            this.isWithContent() && this._isEnabled) {
                if (t(this.element).trigger(u),
                f = i.findShadowRoot(this.element),
                h = t.contains(null !== f ? f : this.element.ownerDocument.documentElement, this.element),
                u.isDefaultPrevented() || !h)
                    return;
                r = this.getTipElement();
                e = i.getUID(this.constructor.NAME);
                r.setAttribute("id", e);
                this.element.setAttribute("aria-describedby", e);
                this.setContent();
                this.config.animation && t(r).addClass(pi);
                c = "function" == typeof this.config.placement ? this.config.placement.call(this, r, this.element) : this.config.placement;
                o = this._getAttachment(c);
                this.addAttachmentClass(o);
                l = this._getContainer();
                t(r).data(this.constructor.DATA_KEY, this);
                t.contains(this.element.ownerDocument.documentElement, this.tip) || t(r).appendTo(l);
                t(this.element).trigger(this.constructor.Event.INSERTED);
                this._popper = new w(this.element,r,{
                    placement: o,
                    modifiers: {
                        offset: this._getOffset(),
                        flip: {
                            behavior: this.config.fallbackPlacement
                        },
                        arrow: {
                            element: rl
                        },
                        preventOverflow: {
                            boundariesElement: this.config.boundary
                        }
                    },
                    onCreate: function(t) {
                        t.originalPlacement !== t.placement && n._handlePopperPlacementChange(t)
                    },
                    onUpdate: function(t) {
                        return n._handlePopperPlacementChange(t)
                    }
                });
                t(r).addClass(wi);
                "ontouchstart"in document.documentElement && t(document.body).children().on("mouseover", null, t.noop);
                s = function() {
                    n.config.animation && n._fixTransition();
                    var i = n._hoverState;
                    n._hoverState = null;
                    t(n.element).trigger(n.constructor.Event.SHOWN);
                    i === ff && n._leave(null, n)
                }
                ;
                t(this.tip).hasClass(pi) ? (a = i.getTransitionDurationFromElement(this.tip),
                t(this.tip).one(i.TRANSITION_END, s).emulateTransitionEnd(a)) : s()
            }
        }
        ,
        n.hide = function(n) {
            var r = this, u = this.getTipElement(), f = t.Event(this.constructor.Event.HIDE), e = function() {
                r._hoverState !== yi && u.parentNode && u.parentNode.removeChild(u);
                r._cleanTipClass();
                r.element.removeAttribute("aria-describedby");
                t(r.element).trigger(r.constructor.Event.HIDDEN);
                null !== r._popper && r._popper.destroy();
                n && n()
            }, o;
            (t(this.element).trigger(f),
            f.isDefaultPrevented()) || ((t(u).removeClass(wi),
            "ontouchstart"in document.documentElement && t(document.body).children().off("mouseover", null, t.noop),
            this._activeTrigger[ul] = !1,
            this._activeTrigger[ef] = !1,
            this._activeTrigger[bi] = !1,
            t(this.tip).hasClass(pi)) ? (o = i.getTransitionDurationFromElement(u),
            t(u).one(i.TRANSITION_END, e).emulateTransitionEnd(o)) : e(),
            this._hoverState = "")
        }
        ,
        n.update = function() {
            null !== this._popper && this._popper.scheduleUpdate()
        }
        ,
        n.isWithContent = function() {
            return Boolean(this.getTitle())
        }
        ,
        n.addAttachmentClass = function(n) {
            t(this.getTipElement()).addClass(ge + "-" + n)
        }
        ,
        n.getTipElement = function() {
            return this.tip = this.tip || t(this.config.template)[0],
            this.tip
        }
        ,
        n.setContent = function() {
            var n = this.getTipElement();
            this.setElementContent(t(n.querySelectorAll(il)), this.getTitle());
            t(n).removeClass(pi + " " + wi)
        }
        ,
        n.setElementContent = function(n, i) {
            "object" != typeof i || !i.nodeType && !i.jquery ? this.config.html ? (this.config.sanitize && (i = de(i, this.config.whiteList, this.config.sanitizeFn)),
            n.html(i)) : n.text(i) : this.config.html ? t(i).parent().is(n) || n.empty().append(i) : n.text(t(i).text())
        }
        ,
        n.getTitle = function() {
            var n = this.element.getAttribute("data-original-title");
            return n || (n = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title),
            n
        }
        ,
        n._getOffset = function() {
            var t = this
              , n = {};
            return "function" == typeof this.config.offset ? n.fn = function(n) {
                return n.offsets = u({}, n.offsets, t.config.offset(n.offsets, t.element) || {}),
                n
            }
            : n.offset = this.config.offset,
            n
        }
        ,
        n._getContainer = function() {
            return !1 === this.config.container ? document.body : i.isElement(this.config.container) ? t(this.config.container) : t(document).find(this.config.container)
        }
        ,
        n._getAttachment = function(n) {
            return gc[n.toUpperCase()]
        }
        ,
        n._setListeners = function() {
            var n = this;
            this.config.trigger.split(" ").forEach(function(i) {
                if ("click" === i)
                    t(n.element).on(n.constructor.Event.CLICK, n.config.selector, function(t) {
                        return n.toggle(t)
                    });
                else if (i !== fl) {
                    var r = i === bi ? n.constructor.Event.MOUSEENTER : n.constructor.Event.FOCUSIN
                      , u = i === bi ? n.constructor.Event.MOUSELEAVE : n.constructor.Event.FOCUSOUT;
                    t(n.element).on(r, n.config.selector, function(t) {
                        return n._enter(t)
                    }).on(u, n.config.selector, function(t) {
                        return n._leave(t)
                    })
                }
            });
            t(this.element).closest(".modal").on("hide.bs.modal", function() {
                n.element && n.hide()
            });
            this.config.selector ? this.config = u({}, this.config, {
                trigger: "manual",
                selector: ""
            }) : this._fixTitle()
        }
        ,
        n._fixTitle = function() {
            var n = typeof this.element.getAttribute("data-original-title");
            (this.element.getAttribute("title") || "string" !== n) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""),
            this.element.setAttribute("title", ""))
        }
        ,
        n._enter = function(n, i) {
            var r = this.constructor.DATA_KEY;
            (i = i || t(n.currentTarget).data(r)) || (i = new this.constructor(n.currentTarget,this._getDelegateConfig()),
            t(n.currentTarget).data(r, i));
            n && (i._activeTrigger["focusin" === n.type ? ef : bi] = !0);
            t(i.getTipElement()).hasClass(wi) || i._hoverState === yi ? i._hoverState = yi : (clearTimeout(i._timeout),
            i._hoverState = yi,
            i.config.delay && i.config.delay.show ? i._timeout = setTimeout(function() {
                i._hoverState === yi && i.show()
            }, i.config.delay.show) : i.show())
        }
        ,
        n._leave = function(n, i) {
            var r = this.constructor.DATA_KEY;
            (i = i || t(n.currentTarget).data(r)) || (i = new this.constructor(n.currentTarget,this._getDelegateConfig()),
            t(n.currentTarget).data(r, i));
            n && (i._activeTrigger["focusout" === n.type ? ef : bi] = !1);
            i._isWithActiveTrigger() || (clearTimeout(i._timeout),
            i._hoverState = ff,
            i.config.delay && i.config.delay.hide ? i._timeout = setTimeout(function() {
                i._hoverState === ff && i.hide()
            }, i.config.delay.hide) : i.hide())
        }
        ,
        n._isWithActiveTrigger = function() {
            for (var n in this._activeTrigger)
                if (this._activeTrigger[n])
                    return !0;
            return !1
        }
        ,
        n._getConfig = function(n) {
            var r = t(this.element).data();
            return Object.keys(r).forEach(function(n) {
                -1 !== kc.indexOf(n) && delete r[n]
            }),
            "number" == typeof (n = u({}, this.constructor.Default, r, "object" == typeof n && n ? n : {})).delay && (n.delay = {
                show: n.delay,
                hide: n.delay
            }),
            "number" == typeof n.title && (n.title = n.title.toString()),
            "number" == typeof n.content && (n.content = n.content.toString()),
            i.typeCheckConfig(tt, n, this.constructor.DefaultType),
            n.sanitize && (n.template = de(n.template, n.whiteList, n.sanitizeFn)),
            n
        }
        ,
        n._getDelegateConfig = function() {
            var t = {}, n;
            if (this.config)
                for (n in this.config)
                    this.constructor.Default[n] !== this.config[n] && (t[n] = this.config[n]);
            return t
        }
        ,
        n._cleanTipClass = function() {
            var i = t(this.getTipElement())
              , n = i.attr("class").match(bc);
            null !== n && n.length && i.removeClass(n.join(""))
        }
        ,
        n._handlePopperPlacementChange = function(n) {
            var t = n.instance;
            this.tip = t.popper;
            this._cleanTipClass();
            this.addAttachmentClass(this._getAttachment(n.placement))
        }
        ,
        n._fixTransition = function() {
            var n = this.getTipElement()
              , i = this.config.animation;
            null === n.getAttribute("x-placement") && (t(n).removeClass(pi),
            this.config.animation = !1,
            this.hide(),
            this.show(),
            this.config.animation = i)
        }
        ,
        r._jQueryInterface = function(n) {
            return this.each(function() {
                var i = t(this).data(pr)
                  , u = "object" == typeof n && n;
                if ((i || !/dispose|hide/.test(n)) && (i || (i = new r(this,u),
                t(this).data(pr, i)),
                "string" == typeof n)) {
                    if ("undefined" == typeof i[n])
                        throw new TypeError('No method named "' + n + '"');
                    i[n]()
                }
            })
        }
        ,
        l(r, null, [{
            key: "VERSION",
            get: function() {
                return "4.3.1"
            }
        }, {
            key: "Default",
            get: function() {
                return nl
            }
        }, {
            key: "NAME",
            get: function() {
                return tt
            }
        }, {
            key: "DATA_KEY",
            get: function() {
                return pr
            }
        }, {
            key: "Event",
            get: function() {
                return tl
            }
        }, {
            key: "EVENT_KEY",
            get: function() {
                return a
            }
        }, {
            key: "DefaultType",
            get: function() {
                return dc
            }
        }]),
        r
    }();
    t.fn[tt] = it._jQueryInterface;
    t.fn[tt].Constructor = it;
    t.fn[tt].noConflict = function() {
        return t.fn[tt] = wc,
        it._jQueryInterface
    }
    ;
    var wt = "popover"
      , wr = "bs.popover"
      , v = "." + wr
      , el = t.fn[wt]
      , no = "bs-popover"
      , ol = new RegExp("(^|\\s)" + no + "\\S+","g")
      , sl = u({}, it.Default, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"><\/div><h3 class="popover-header"><\/h3><div class="popover-body"><\/div><\/div>'
    })
      , hl = u({}, it.DefaultType, {
        content: "(string|element|function)"
    })
      , cl = "fade"
      , ll = "show"
      , al = ".popover-header"
      , vl = ".popover-body"
      , yl = {
        HIDE: "hide" + v,
        HIDDEN: "hidden" + v,
        SHOW: "show" + v,
        SHOWN: "shown" + v,
        INSERTED: "inserted" + v,
        CLICK: "click" + v,
        FOCUSIN: "focusin" + v,
        FOCUSOUT: "focusout" + v,
        MOUSEENTER: "mouseenter" + v,
        MOUSELEAVE: "mouseleave" + v
    }
      , br = function(n) {
        function r() {
            return n.apply(this, arguments) || this
        }
        var u, f, i;
        return f = n,
        (u = r).prototype = Object.create(f.prototype),
        (u.prototype.constructor = u).__proto__ = f,
        i = r.prototype,
        i.isWithContent = function() {
            return this.getTitle() || this._getContent()
        }
        ,
        i.addAttachmentClass = function(n) {
            t(this.getTipElement()).addClass(no + "-" + n)
        }
        ,
        i.getTipElement = function() {
            return this.tip = this.tip || t(this.config.template)[0],
            this.tip
        }
        ,
        i.setContent = function() {
            var i = t(this.getTipElement()), n;
            this.setElementContent(i.find(al), this.getTitle());
            n = this._getContent();
            "function" == typeof n && (n = n.call(this.element));
            this.setElementContent(i.find(vl), n);
            i.removeClass(cl + " " + ll)
        }
        ,
        i._getContent = function() {
            return this.element.getAttribute("data-content") || this.config.content
        }
        ,
        i._cleanTipClass = function() {
            var i = t(this.getTipElement())
              , n = i.attr("class").match(ol);
            null !== n && 0 < n.length && i.removeClass(n.join(""))
        }
        ,
        r._jQueryInterface = function(n) {
            return this.each(function() {
                var i = t(this).data(wr)
                  , u = "object" == typeof n ? n : null;
                if ((i || !/dispose|hide/.test(n)) && (i || (i = new r(this,u),
                t(this).data(wr, i)),
                "string" == typeof n)) {
                    if ("undefined" == typeof i[n])
                        throw new TypeError('No method named "' + n + '"');
                    i[n]()
                }
            })
        }
        ,
        l(r, null, [{
            key: "VERSION",
            get: function() {
                return "4.3.1"
            }
        }, {
            key: "Default",
            get: function() {
                return sl
            }
        }, {
            key: "NAME",
            get: function() {
                return wt
            }
        }, {
            key: "DATA_KEY",
            get: function() {
                return wr
            }
        }, {
            key: "Event",
            get: function() {
                return yl
            }
        }, {
            key: "EVENT_KEY",
            get: function() {
                return v
            }
        }, {
            key: "DefaultType",
            get: function() {
                return hl
            }
        }]),
        r
    }(it);
    t.fn[wt] = br._jQueryInterface;
    t.fn[wt].Constructor = br;
    t.fn[wt].noConflict = function() {
        return t.fn[wt] = el,
        br._jQueryInterface
    }
    ;
    var rt = "scrollspy"
      , kr = "bs.scrollspy"
      , dr = "." + kr
      , pl = t.fn[rt]
      , to = {
        offset: 10,
        method: "auto",
        target: ""
    }
      , wl = {
        offset: "number",
        method: "string",
        target: "(string|element)"
    }
      , of = {
        ACTIVATE: "activate" + dr,
        SCROLL: "scroll" + dr,
        LOAD_DATA_API: "load" + dr + ".data-api"
    }
      , bl = "dropdown-item"
      , ut = "active"
      , kl = '[data-spy="scroll"]'
      , io = ".nav, .list-group"
      , sf = ".nav-link"
      , dl = ".nav-item"
      , ro = ".list-group-item"
      , gl = ".dropdown"
      , na = ".dropdown-item"
      , ta = ".dropdown-toggle"
      , ia = "offset"
      , uo = "position"
      , ki = function() {
        function r(n, i) {
            var r = this;
            this._element = n;
            this._scrollElement = "BODY" === n.tagName ? window : n;
            this._config = this._getConfig(i);
            this._selector = this._config.target + " " + sf + "," + this._config.target + " " + ro + "," + this._config.target + " " + na;
            this._offsets = [];
            this._targets = [];
            this._activeTarget = null;
            this._scrollHeight = 0;
            t(this._scrollElement).on(of.SCROLL, function(n) {
                return r._process(n)
            });
            this.refresh();
            this._process()
        }
        var n = r.prototype;
        return n.refresh = function() {
            var n = this
              , u = this._scrollElement === this._scrollElement.window ? ia : uo
              , r = "auto" === this._config.method ? u : this._config.method
              , f = r === uo ? this._getScrollTop() : 0;
            this._offsets = [];
            this._targets = [];
            this._scrollHeight = this._getScrollHeight();
            [].slice.call(document.querySelectorAll(this._selector)).map(function(n) {
                var u, e = i.getSelectorFromElement(n), o;
                return (e && (u = document.querySelector(e)),
                u) && (o = u.getBoundingClientRect(),
                o.width || o.height) ? [t(u)[r]().top + f, e] : null
            }).filter(function(n) {
                return n
            }).sort(function(n, t) {
                return n[0] - t[0]
            }).forEach(function(t) {
                n._offsets.push(t[0]);
                n._targets.push(t[1])
            })
        }
        ,
        n.dispose = function() {
            t.removeData(this._element, kr);
            t(this._scrollElement).off(dr);
            this._element = null;
            this._scrollElement = null;
            this._config = null;
            this._selector = null;
            this._offsets = null;
            this._targets = null;
            this._activeTarget = null;
            this._scrollHeight = null
        }
        ,
        n._getConfig = function(n) {
            if ("string" != typeof (n = u({}, to, "object" == typeof n && n ? n : {})).target) {
                var r = t(n.target).attr("id");
                r || (r = i.getUID(rt),
                t(n.target).attr("id", r));
                n.target = "#" + r
            }
            return i.typeCheckConfig(rt, n, wl),
            n
        }
        ,
        n._getScrollTop = function() {
            return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
        }
        ,
        n._getScrollHeight = function() {
            return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
        }
        ,
        n._getOffsetHeight = function() {
            return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
        }
        ,
        n._process = function() {
            var t = this._getScrollTop() + this._config.offset, r = this._getScrollHeight(), u = this._config.offset + r - this._getOffsetHeight(), i, n;
            if (this._scrollHeight !== r && this.refresh(),
            u <= t)
                i = this._targets[this._targets.length - 1],
                this._activeTarget !== i && this._activate(i);
            else {
                if (this._activeTarget && t < this._offsets[0] && 0 < this._offsets[0])
                    return this._activeTarget = null,
                    void this._clear();
                for (n = this._offsets.length; n--; )
                    this._activeTarget !== this._targets[n] && t >= this._offsets[n] && ("undefined" == typeof this._offsets[n + 1] || t < this._offsets[n + 1]) && this._activate(this._targets[n])
            }
        }
        ,
        n._activate = function(n) {
            this._activeTarget = n;
            this._clear();
            var r = this._selector.split(",").map(function(t) {
                return t + '[data-target="' + n + '"],' + t + '[href="' + n + '"]'
            })
              , i = t([].slice.call(document.querySelectorAll(r.join(","))));
            i.hasClass(bl) ? (i.closest(gl).find(ta).addClass(ut),
            i.addClass(ut)) : (i.addClass(ut),
            i.parents(io).prev(sf + ", " + ro).addClass(ut),
            i.parents(io).prev(dl).children(sf).addClass(ut));
            t(this._scrollElement).trigger(of.ACTIVATE, {
                relatedTarget: n
            })
        }
        ,
        n._clear = function() {
            [].slice.call(document.querySelectorAll(this._selector)).filter(function(n) {
                return n.classList.contains(ut)
            }).forEach(function(n) {
                return n.classList.remove(ut)
            })
        }
        ,
        r._jQueryInterface = function(n) {
            return this.each(function() {
                var i = t(this).data(kr);
                if (i || (i = new r(this,"object" == typeof n && n),
                t(this).data(kr, i)),
                "string" == typeof n) {
                    if ("undefined" == typeof i[n])
                        throw new TypeError('No method named "' + n + '"');
                    i[n]()
                }
            })
        }
        ,
        l(r, null, [{
            key: "VERSION",
            get: function() {
                return "4.3.1"
            }
        }, {
            key: "Default",
            get: function() {
                return to
            }
        }]),
        r
    }();
    t(window).on(of.LOAD_DATA_API, function() {
        for (var r, n = [].slice.call(document.querySelectorAll(kl)), i = n.length; i--; )
            r = t(n[i]),
            ki._jQueryInterface.call(r, r.data())
    });
    t.fn[rt] = ki._jQueryInterface;
    t.fn[rt].Constructor = ki;
    t.fn[rt].noConflict = function() {
        return t.fn[rt] = pl,
        ki._jQueryInterface
    }
    ;
    var gr = "bs.tab"
      , di = "." + gr
      , ra = t.fn.tab
      , gi = {
        HIDE: "hide" + di,
        HIDDEN: "hidden" + di,
        SHOW: "show" + di,
        SHOWN: "shown" + di,
        CLICK_DATA_API: "click" + di + ".data-api"
    }
      , ua = "dropdown-menu"
      , nr = "active"
      , fa = "disabled"
      , fo = "fade"
      , eo = "show"
      , ea = ".dropdown"
      , oa = ".nav, .list-group"
      , oo = ".active"
      , so = "> li > .active"
      , sa = ".dropdown-toggle"
      , ha = "> .dropdown-menu .active"
      , tr = function() {
        function n(n) {
            this._element = n
        }
        var r = n.prototype;
        return r.show = function() {
            var h = this, u, n, r, f, c, e, o, s;
            this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && t(this._element).hasClass(nr) || t(this._element).hasClass(fa) || (r = t(this._element).closest(oa)[0],
            f = i.getSelectorFromElement(this._element),
            r && (c = "UL" === r.nodeName || "OL" === r.nodeName ? so : oo,
            n = (n = t.makeArray(t(r).find(c)))[n.length - 1]),
            e = t.Event(gi.HIDE, {
                relatedTarget: this._element
            }),
            o = t.Event(gi.SHOW, {
                relatedTarget: n
            }),
            (n && t(n).trigger(e),
            t(this._element).trigger(o),
            o.isDefaultPrevented() || e.isDefaultPrevented()) || (f && (u = document.querySelector(f)),
            this._activate(this._element, r),
            s = function() {
                var i = t.Event(gi.HIDDEN, {
                    relatedTarget: h._element
                })
                  , r = t.Event(gi.SHOWN, {
                    relatedTarget: n
                });
                t(n).trigger(i);
                t(h._element).trigger(r)
            }
            ,
            u ? this._activate(u, u.parentNode, s) : s()))
        }
        ,
        r.dispose = function() {
            t.removeData(this._element, gr);
            this._element = null
        }
        ,
        r._activate = function(n, r, u) {
            var s = this, f = (!r || "UL" !== r.nodeName && "OL" !== r.nodeName ? t(r).children(oo) : t(r).find(so))[0], h = u && f && t(f).hasClass(fo), e = function() {
                return s._transitionComplete(n, f, u)
            }, o;
            f && h ? (o = i.getTransitionDurationFromElement(f),
            t(f).removeClass(eo).one(i.TRANSITION_END, e).emulateTransitionEnd(o)) : e()
        }
        ,
        r._transitionComplete = function(n, r, u) {
            var f, e, o;
            r && (t(r).removeClass(nr),
            f = t(r.parentNode).find(ha)[0],
            f && t(f).removeClass(nr),
            "tab" === r.getAttribute("role") && r.setAttribute("aria-selected", !1));
            (t(n).addClass(nr),
            "tab" === n.getAttribute("role") && n.setAttribute("aria-selected", !0),
            i.reflow(n),
            n.classList.contains(fo) && n.classList.add(eo),
            n.parentNode && t(n.parentNode).hasClass(ua)) && (e = t(n).closest(ea)[0],
            e && (o = [].slice.call(e.querySelectorAll(sa)),
            t(o).addClass(nr)),
            n.setAttribute("aria-expanded", !0));
            u && u()
        }
        ,
        n._jQueryInterface = function(i) {
            return this.each(function() {
                var u = t(this)
                  , r = u.data(gr);
                if (r || (r = new n(this),
                u.data(gr, r)),
                "string" == typeof i) {
                    if ("undefined" == typeof r[i])
                        throw new TypeError('No method named "' + i + '"');
                    r[i]()
                }
            })
        }
        ,
        l(n, null, [{
            key: "VERSION",
            get: function() {
                return "4.3.1"
            }
        }]),
        n
    }();
    t(document).on(gi.CLICK_DATA_API, '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', function(n) {
        n.preventDefault();
        tr._jQueryInterface.call(t(this), "show")
    });
    t.fn.tab = tr._jQueryInterface;
    t.fn.tab.Constructor = tr;
    t.fn.tab.noConflict = function() {
        return t.fn.tab = ra,
        tr._jQueryInterface
    }
    ;
    var bt = "toast"
      , nu = "bs.toast"
      , ir = "." + nu
      , ca = t.fn[bt]
      , kt = {
        CLICK_DISMISS: "click.dismiss" + ir,
        HIDE: "hide" + ir,
        HIDDEN: "hidden" + ir,
        SHOW: "show" + ir,
        SHOWN: "shown" + ir
    }
      , la = "fade"
      , ho = "hide"
      , rr = "show"
      , co = "showing"
      , aa = {
        animation: "boolean",
        autohide: "boolean",
        delay: "number"
    }
      , lo = {
        animation: !0,
        autohide: !0,
        delay: 500
    }
      , va = '[data-dismiss="toast"]'
      , tu = function() {
        function r(n, t) {
            this._element = n;
            this._config = this._getConfig(t);
            this._timeout = null;
            this._setListeners()
        }
        var n = r.prototype;
        return n.show = function() {
            var n = this, r, u;
            t(this._element).trigger(kt.SHOW);
            this._config.animation && this._element.classList.add(la);
            r = function() {
                n._element.classList.remove(co);
                n._element.classList.add(rr);
                t(n._element).trigger(kt.SHOWN);
                n._config.autohide && n.hide()
            }
            ;
            (this._element.classList.remove(ho),
            this._element.classList.add(co),
            this._config.animation) ? (u = i.getTransitionDurationFromElement(this._element),
            t(this._element).one(i.TRANSITION_END, r).emulateTransitionEnd(u)) : r()
        }
        ,
        n.hide = function(n) {
            var i = this;
            this._element.classList.contains(rr) && (t(this._element).trigger(kt.HIDE),
            n ? this._close() : this._timeout = setTimeout(function() {
                i._close()
            }, this._config.delay))
        }
        ,
        n.dispose = function() {
            clearTimeout(this._timeout);
            this._timeout = null;
            this._element.classList.contains(rr) && this._element.classList.remove(rr);
            t(this._element).off(kt.CLICK_DISMISS);
            t.removeData(this._element, nu);
            this._element = null;
            this._config = null
        }
        ,
        n._getConfig = function(n) {
            return n = u({}, lo, t(this._element).data(), "object" == typeof n && n ? n : {}),
            i.typeCheckConfig(bt, n, this.constructor.DefaultType),
            n
        }
        ,
        n._setListeners = function() {
            var n = this;
            t(this._element).on(kt.CLICK_DISMISS, va, function() {
                return n.hide(!0)
            })
        }
        ,
        n._close = function() {
            var n = this, r = function() {
                n._element.classList.add(ho);
                t(n._element).trigger(kt.HIDDEN)
            }, u;
            (this._element.classList.remove(rr),
            this._config.animation) ? (u = i.getTransitionDurationFromElement(this._element),
            t(this._element).one(i.TRANSITION_END, r).emulateTransitionEnd(u)) : r()
        }
        ,
        r._jQueryInterface = function(n) {
            return this.each(function() {
                var u = t(this)
                  , i = u.data(nu);
                if (i || (i = new r(this,"object" == typeof n && n),
                u.data(nu, i)),
                "string" == typeof n) {
                    if ("undefined" == typeof i[n])
                        throw new TypeError('No method named "' + n + '"');
                    i[n](this)
                }
            })
        }
        ,
        l(r, null, [{
            key: "VERSION",
            get: function() {
                return "4.3.1"
            }
        }, {
            key: "DefaultType",
            get: function() {
                return aa
            }
        }, {
            key: "Default",
            get: function() {
                return lo
            }
        }]),
        r
    }();
    t.fn[bt] = tu._jQueryInterface;
    t.fn[bt].Constructor = tu;
    t.fn[bt].noConflict = function() {
        return t.fn[bt] = ca,
        tu._jQueryInterface
    }
    ,
    function() {
        if ("undefined" == typeof t)
            throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
        var n = t.fn.jquery.split(" ")[0].split(".");
        if (n[0] < 2 && n[1] < 9 || 1 === n[0] && 9 === n[1] && n[2] < 1 || 4 <= n[0])
            throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0");
    }();
    n.Util = i;
    n.Alert = ft;
    n.Button = ii;
    n.Carousel = ot;
    n.Collapse = oi;
    n.Dropdown = b;
    n.Modal = vi;
    n.Popover = br;
    n.Scrollspy = ki;
    n.Tab = tr;
    n.Toast = tu;
    n.Tooltip = it;
    Object.defineProperty(n, "__esModule", {
        value: !0
    })
});
/*!
 * jQuery Validation Plugin v1.19.1
 *
 * https://jqueryvalidation.org/
 *
 * Copyright (c) 2019 Jörn Zaefferer
 * Released under the MIT license
 */
(function(n) {
    typeof define == "function" && define.amd ? define(["jquery"], n) : typeof module == "object" && module.exports ? module.exports = n(require("jquery")) : n(jQuery)
}
)(function(n) {
    n.extend(n.fn, {
        validate: function(t) {
            if (!this.length) {
                t && t.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing.");
                return
            }
            var i = n.data(this[0], "validator");
            if (i)
                return i;
            if (this.attr("novalidate", "novalidate"),
            i = new n.validator(t,this[0]),
            n.data(this[0], "validator", i),
            i.settings.onsubmit) {
                this.on("click.validate", ":submit", function(t) {
                    i.submitButton = t.currentTarget;
                    n(this).hasClass("cancel") && (i.cancelSubmit = !0);
                    n(this).attr("formnovalidate") !== undefined && (i.cancelSubmit = !0)
                });
                this.on("submit.validate", function(t) {
                    function r() {
                        var r, u;
                        return (i.submitButton && (i.settings.submitHandler || i.formSubmitted) && (r = n("<input type='hidden'/>").attr("name", i.submitButton.name).val(n(i.submitButton).val()).appendTo(i.currentForm)),
                        i.settings.submitHandler && !i.settings.debug) ? (u = i.settings.submitHandler.call(i, i.currentForm, t),
                        r && r.remove(),
                        u !== undefined) ? u : !1 : !0
                    }
                    var u, f;
                    return (tinyMCE.triggerSave(),
                    i.settings.debug && t.preventDefault(),
                    i.cancelSubmit) ? (i.cancelSubmit = !1,
                    r()) : (u = n(":disabled", this),
                    n(":disabled", this).removeAttr("disabled"),
                    f = n("input[alt='hidden']"),
                    n("input[alt='hidden']").attr("data-val") && n("input[alt='hidden']").removeAttr("style"),
                    i.form() ? i.pendingRequest ? (i.formSubmitted = !0,
                    !1) : r() : (f.attr("style", "display:none"),
                    u.attr("disabled", !0),
                    i.focusInvalid(),
                    !1))
                })
            }
            return i
        },
        valid: function() {
            var t, i, r;
            return n(this[0]).is("form") ? t = this.validate().form() : (r = [],
            t = !0,
            i = n(this[0].form).validate(),
            this.each(function() {
                t = i.element(this) && t;
                t || (r = r.concat(i.errorList))
            }),
            i.errorList = r),
            t
        },
        rules: function(t, i) {
            var r = this[0], c = typeof this.attr("contenteditable") != "undefined" && this.attr("contenteditable") !== "false", e, s, f, u, o, h;
            if (r != null && (!r.form && c && (r.form = this.closest("form")[0],
            r.name = this.attr("name")),
            r.form != null)) {
                if (t) {
                    e = n.data(r.form, "validator").settings;
                    s = e.rules;
                    f = n.validator.staticRules(r);
                    switch (t) {
                    case "add":
                        n.extend(f, n.validator.normalizeRule(i));
                        delete f.messages;
                        s[r.name] = f;
                        i.messages && (e.messages[r.name] = n.extend(e.messages[r.name], i.messages));
                        break;
                    case "remove":
                        return i ? (h = {},
                        n.each(i.split(/\s/), function(n, t) {
                            h[t] = f[t];
                            delete f[t]
                        }),
                        h) : (delete s[r.name],
                        f)
                    }
                }
                return u = n.validator.normalizeRules(n.extend({}, n.validator.classRules(r), n.validator.attributeRules(r), n.validator.dataRules(r), n.validator.staticRules(r)), r),
                u.required && (o = u.required,
                delete u.required,
                u = n.extend({
                    required: o
                }, u)),
                u.remote && (o = u.remote,
                delete u.remote,
                u = n.extend(u, {
                    remote: o
                })),
                u
            }
        }
    });
    n.extend(n.expr.pseudos || n.expr[":"], {
        blank: function(t) {
            return !n.trim("" + n(t).val())
        },
        filled: function(t) {
            var i = n(t).val();
            return i !== null && !!n.trim("" + i)
        },
        unchecked: function(t) {
            return !n(t).prop("checked")
        }
    });
    n.validator = function(t, i) {
        this.settings = n.extend(!0, {}, n.validator.defaults, t);
        this.currentForm = i;
        this.init()
    }
    ;
    n.validator.format = function(t, i) {
        return arguments.length === 1 ? function() {
            var i = n.makeArray(arguments);
            return i.unshift(t),
            n.validator.format.apply(this, i)
        }
        : i === undefined ? t : (arguments.length > 2 && i.constructor !== Array && (i = n.makeArray(arguments).slice(1)),
        i.constructor !== Array && (i = [i]),
        n.each(i, function(n, i) {
            t = t.replace(new RegExp("\\{" + n + "\\}","g"), function() {
                return i
            })
        }),
        t)
    }
    ;
    n.extend(n.validator, {
        defaults: {
            messages: {},
            groups: {},
            rules: {},
            errorClass: "error",
            pendingClass: "pending",
            validClass: "valid",
            errorElement: "label",
            focusCleanup: !1,
            focusInvalid: !0,
            errorContainer: n([]),
            errorLabelContainer: n([]),
            onsubmit: !0,
            ignore: ":hidden",
            ignoreTitle: !1,
            onfocusin: function(n) {
                this.lastActive = n;
                this.settings.focusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, n, this.settings.errorClass, this.settings.validClass),
                this.hideThese(this.errorsFor(n)))
            },
            onfocusout: function(n) {
                !this.checkable(n) && (n.name in this.submitted || !this.optional(n)) && this.element(n)
            },
            onkeyup: function(t, i) {
                (i.which !== 9 || this.elementValue(t) !== "") && n.inArray(i.keyCode, [16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225]) === -1 && (t.name in this.submitted || t.name in this.invalid) && this.element(t)
            },
            onclick: function(n) {
                n.name in this.submitted ? this.element(n) : n.parentNode.name in this.submitted && this.element(n.parentNode)
            },
            highlight: function(t, i, r) {
                t.type === "radio" ? this.findByName(t.name).addClass(i).removeClass(r) : n(t).addClass(i).removeClass(r)
            },
            unhighlight: function(t, i, r) {
                t.type === "radio" ? this.findByName(t.name).removeClass(i).addClass(r) : n(t).removeClass(i).addClass(r)
            }
        },
        setDefaults: function(t) {
            n.extend(n.validator.defaults, t)
        },
        messages: {
            required: "This field is required.",
            remote: "Please fix this field.",
            email: "Please enter a valid email address.",
            url: "Please enter a valid URL.",
            date: "Please enter a valid date.",
            dateISO: "Please enter a valid date (ISO).",
            number: "Please enter a valid number.",
            digits: "Please enter only digits.",
            equalTo: "Please enter the same value again.",
            maxlength: n.validator.format("Please enter no more than {0} characters."),
            minlength: n.validator.format("Please enter at least {0} characters."),
            rangelength: n.validator.format("Please enter a value between {0} and {1} characters long."),
            range: n.validator.format("Please enter a value between {0} and {1}."),
            max: n.validator.format("Please enter a value less than or equal to {0}."),
            min: n.validator.format("Please enter a value greater than or equal to {0}."),
            step: n.validator.format("Please enter a multiple of {0}.")
        },
        autoCreateRanges: !1,
        prototype: {
            init: function() {
                function i(t) {
                    var e = typeof n(this).attr("contenteditable") != "undefined" && n(this).attr("contenteditable") !== "false";
                    if (!this.form && e && (this.form = n(this).closest("form")[0],
                    this.name = n(this).attr("name")),
                    r === this.form) {
                        var u = n.data(this.form, "validator")
                          , f = "on" + t.type.replace(/^validate/, "")
                          , i = u.settings;
                        i[f] && !n(this).is(i.ignore) && i[f].call(u, this, t)
                    }
                }
                this.labelContainer = n(this.settings.errorLabelContainer);
                this.errorContext = this.labelContainer.length && this.labelContainer || n(this.currentForm);
                this.containers = n(this.settings.errorContainer).add(this.settings.errorLabelContainer);
                this.submitted = {};
                this.valueCache = {};
                this.pendingRequest = 0;
                this.pending = {};
                this.invalid = {};
                this.reset();
                var r = this.currentForm, u = this.groups = {}, t;
                n.each(this.settings.groups, function(t, i) {
                    typeof i == "string" && (i = i.split(/\s/));
                    n.each(i, function(n, i) {
                        u[i] = t
                    })
                });
                t = this.settings.rules;
                n.each(t, function(i, r) {
                    t[i] = n.validator.normalizeRule(r)
                });
                n(this.currentForm).on("focusin.validate focusout.validate keyup.validate", ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox'], [contenteditable], [type='button']", i).on("click.validate", "select, option, [type='radio'], [type='checkbox']", i);
                if (this.settings.invalidHandler)
                    n(this.currentForm).on("invalid-form.validate", this.settings.invalidHandler)
            },
            form: function() {
                return this.checkForm(),
                n.extend(this.submitted, this.errorMap),
                this.invalid = n.extend({}, this.errorMap),
                this.valid() || n(this.currentForm).triggerHandler("invalid-form", [this]),
                this.showErrors(),
                this.valid()
            },
            checkForm: function() {
                this.prepareForm();
                for (var n = 0, t = this.currentElements = this.elements(); t[n]; n++)
                    this.check(t[n]);
                return this.valid()
            },
            element: function(t) {
                var i = this.clean(t), r = this.validationTargetFor(i), u = this, f = !0, e, o;
                return r === undefined ? delete this.invalid[i.name] : (this.prepareElement(r),
                this.currentElements = n(r),
                o = this.groups[r.name],
                o && n.each(this.groups, function(n, t) {
                    t === o && n !== r.name && (i = u.validationTargetFor(u.clean(u.findByName(n))),
                    i && i.name in u.invalid && (u.currentElements.push(i),
                    f = u.check(i) && f))
                }),
                e = this.check(r) !== !1,
                f = f && e,
                this.invalid[r.name] = e ? !1 : !0,
                this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)),
                this.showErrors(),
                n(t).attr("aria-invalid", !e)),
                f
            },
            showErrors: function(t) {
                if (t) {
                    var i = this;
                    n.extend(this.errorMap, t);
                    this.errorList = n.map(this.errorMap, function(n, t) {
                        return {
                            message: n,
                            element: i.findByName(t)[0]
                        }
                    });
                    this.successList = n.grep(this.successList, function(n) {
                        return !(n.name in t)
                    })
                }
                this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
            },
            resetForm: function() {
                n.fn.resetForm && n(this.currentForm).resetForm();
                this.invalid = {};
                this.submitted = {};
                this.prepareForm();
                this.hideErrors();
                var t = this.elements().removeData("previousValue").removeAttr("aria-invalid");
                this.resetElements(t)
            },
            resetElements: function(n) {
                var t;
                if (this.settings.unhighlight)
                    for (t = 0; n[t]; t++)
                        this.settings.unhighlight.call(this, n[t], this.settings.errorClass, ""),
                        this.findByName(n[t].name).removeClass(this.settings.validClass);
                else
                    n.removeClass(this.settings.errorClass).removeClass(this.settings.validClass)
            },
            numberOfInvalids: function() {
                return this.objectLength(this.invalid)
            },
            objectLength: function(n) {
                var i = 0;
                for (var t in n)
                    n[t] !== undefined && n[t] !== null && n[t] !== !1 && i++;
                return i
            },
            hideErrors: function() {
                this.hideThese(this.toHide)
            },
            hideThese: function(n) {
                n.not(this.containers).text("");
                this.addWrapper(n).hide()
            },
            valid: function() {
                return this.size() === 0
            },
            size: function() {
                return this.errorList.length
            },
            focusInvalid: function() {
                if (this.settings.focusInvalid)
                    try {
                        n(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").trigger("focus").trigger("focusin")
                    } catch (t) {}
            },
            findLastActive: function() {
                var t = this.lastActive;
                return t && n.grep(this.errorList, function(n) {
                    return n.element.name === t.name
                }).length === 1 && t
            },
            elements: function() {
                var t = this
                  , i = {};
                return n(this.currentForm).find("input, select, textarea, [contenteditable]").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function() {
                    var r = this.name || n(this).attr("name")
                      , u = typeof n(this).attr("contenteditable") != "undefined" && n(this).attr("contenteditable") !== "false";
                    return (!r && t.settings.debug && window.console && console.error("%o has no name assigned", this),
                    u && (this.form = n(this).closest("form")[0],
                    this.name = r),
                    this.form !== t.currentForm) ? !1 : r in i || !t.objectLength(n(this).rules()) ? !1 : (i[r] = !0,
                    !0)
                })
            },
            clean: function(t) {
                return n(t)[0]
            },
            errors: function() {
                var t = this.settings.errorClass.split(" ").join(".");
                return n(this.settings.errorElement + "." + t, this.errorContext)
            },
            resetInternals: function() {
                this.successList = [];
                this.errorList = [];
                this.errorMap = {};
                this.toShow = n([]);
                this.toHide = n([])
            },
            reset: function() {
                this.resetInternals();
                this.currentElements = n([])
            },
            prepareForm: function() {
                this.reset();
                this.toHide = this.errors().add(this.containers)
            },
            prepareElement: function(n) {
                this.reset();
                this.toHide = this.errorsFor(n)
            },
            elementValue: function(t) {
                var u = n(t), f = t.type, e = typeof u.attr("contenteditable") != "undefined" && u.attr("contenteditable") !== "false", i, r;
                return f === "radio" || f === "checkbox" ? this.findByName(t.name).filter(":checked").val() : f === "number" && typeof t.validity != "undefined" ? t.validity.badInput ? "NaN" : u.val() : (i = e ? u.text() : u.val(),
                f === "file") ? i.substr(0, 12) === "C:\\fakepath\\" ? i.substr(12) : (r = i.lastIndexOf("/"),
                r >= 0) ? i.substr(r + 1) : (r = i.lastIndexOf("\\"),
                r >= 0) ? i.substr(r + 1) : i : typeof i == "string" ? i.replace(/\r/g, "") : i
            },
            check: function(t) {
                t = this.validationTargetFor(this.clean(t));
                var i = n(t).rules(), c = n.map(i, function(n, t) {
                    return t
                }).length, s = !1, h = this.elementValue(t), u, f, r, e;
                typeof i.normalizer == "function" ? e = i.normalizer : typeof this.settings.normalizer == "function" && (e = this.settings.normalizer);
                e && (h = e.call(t, h),
                delete i.normalizer);
                for (f in i) {
                    r = {
                        method: f,
                        parameters: i[f]
                    };
                    try {
                        if (u = n.validator.methods[f].call(this, h, t, r.parameters),
                        u === "dependency-mismatch" && c === 1) {
                            s = !0;
                            continue
                        }
                        if (s = !1,
                        u === "pending") {
                            this.toHide = this.toHide.not(this.errorsFor(t));
                            return
                        }
                        if (!u)
                            return this.formatAndAdd(t, r),
                            !1
                    } catch (o) {
                        this.settings.debug && window.console && console.log("Exception occurred when checking element " + t.id + ", check the '" + r.method + "' method.", o);
                        o instanceof TypeError && (o.message += ".  Exception occurred when checking element " + t.id + ", check the '" + r.method + "' method.");
                        throw o;
                    }
                }
                if (!s)
                    return this.objectLength(i) && this.successList.push(t),
                    !0
            },
            customDataMessage: function(t, i) {
                return n(t).data("msg" + i.charAt(0).toUpperCase() + i.substring(1).toLowerCase()) || n(t).data("msg")
            },
            customMessage: function(n, t) {
                var i = this.settings.messages[n];
                return i && (i.constructor === String ? i : i[t])
            },
            findDefined: function() {
                for (var n = 0; n < arguments.length; n++)
                    if (arguments[n] !== undefined)
                        return arguments[n];
                return undefined
            },
            defaultMessage: function(t, i) {
                typeof i == "string" && (i = {
                    method: i
                });
                var r = this.findDefined(this.customMessage(t.name, i.method), this.customDataMessage(t, i.method), !this.settings.ignoreTitle && t.title || undefined, n.validator.messages[i.method], "<strong>Warning: No message defined for " + t.name + "<\/strong>")
                  , u = /\$?\{(\d+)\}/g;
                return typeof r == "function" ? r = r.call(this, i.parameters, t) : u.test(r) && (r = n.validator.format(r.replace(u, "{$1}"), i.parameters)),
                r
            },
            formatAndAdd: function(n, t) {
                var i = this.defaultMessage(n, t);
                this.errorList.push({
                    message: i,
                    element: n,
                    method: t.method
                });
                this.errorMap[n.name] = i;
                this.submitted[n.name] = i
            },
            addWrapper: function(n) {
                return this.settings.wrapper && (n = n.add(n.parent(this.settings.wrapper))),
                n
            },
            defaultShowErrors: function() {
                for (var i, t, n = 0; this.errorList[n]; n++)
                    t = this.errorList[n],
                    this.settings.highlight && this.settings.highlight.call(this, t.element, this.settings.errorClass, this.settings.validClass),
                    this.showLabel(t.element, t.message);
                if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)),
                this.settings.success)
                    for (n = 0; this.successList[n]; n++)
                        this.showLabel(this.successList[n]);
                if (this.settings.unhighlight)
                    for (n = 0,
                    i = this.validElements(); i[n]; n++)
                        this.settings.unhighlight.call(this, i[n], this.settings.errorClass, this.settings.validClass);
                this.toHide = this.toHide.not(this.toShow);
                this.hideErrors();
                this.addWrapper(this.toShow).show()
            },
            validElements: function() {
                return this.currentElements.not(this.invalidElements())
            },
            invalidElements: function() {
                return n(this.errorList).map(function() {
                    return this.element
                })
            },
            showLabel: function(t, i) {
                var u, s, e, o, r = this.errorsFor(t), h = this.idOrName(t), f = n(t).attr("aria-describedby");
                r.length ? (r.removeClass(this.settings.validClass).addClass(this.settings.errorClass),
                r.html(i)) : (r = n("<" + this.settings.errorElement + ">").attr("id", h + "-error").addClass(this.settings.errorClass).html(i || ""),
                u = r,
                this.settings.wrapper && (u = r.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()),
                this.labelContainer.length ? this.labelContainer.append(u) : this.settings.errorPlacement ? this.settings.errorPlacement.call(this, u, n(t)) : u.insertAfter(t),
                r.is("label") ? r.attr("for", h) : r.parents("label[for='" + this.escapeCssMeta(h) + "']").length === 0 && (e = r.attr("id"),
                f ? f.match(new RegExp("\\b" + this.escapeCssMeta(e) + "\\b")) || (f += " " + e) : f = e,
                n(t).attr("aria-describedby", f),
                s = this.groups[t.name],
                s && (o = this,
                n.each(o.groups, function(t, i) {
                    i === s && n("[name='" + o.escapeCssMeta(t) + "']", o.currentForm).attr("aria-describedby", r.attr("id"))
                }))));
                !i && this.settings.success && (r.text(""),
                typeof this.settings.success == "string" ? r.addClass(this.settings.success) : this.settings.success(r, t));
                this.toShow = this.toShow.add(r)
            },
            errorsFor: function(t) {
                var r = this.escapeCssMeta(this.idOrName(t))
                  , u = n(t).attr("aria-describedby")
                  , i = "label[for='" + r + "'], label[for='" + r + "'] *";
                return u && (i = i + ", #" + this.escapeCssMeta(u).replace(/\s+/g, ", #")),
                this.errors().filter(i)
            },
            escapeCssMeta: function(n) {
                return n.replace(/([\\!"#$%&'()*+,./:;<=>?@\[\]^`{|}~])/g, "\\$1")
            },
            idOrName: function(n) {
                return this.groups[n.name] || (this.checkable(n) ? n.name : n.id || n.name)
            },
            validationTargetFor: function(t) {
                return this.checkable(t) && (t = this.findByName(t.name)),
                n(t).not(this.settings.ignore)[0]
            },
            checkable: function(n) {
                return /radio|checkbox/i.test(n.type)
            },
            findByName: function(t) {
                return n(this.currentForm).find("[name='" + this.escapeCssMeta(t) + "']")
            },
            getLength: function(t, i) {
                switch (i.nodeName.toLowerCase()) {
                case "select":
                    return n("option:selected", i).length;
                case "input":
                    if (this.checkable(i))
                        return this.findByName(i.name).filter(":checked").length
                }
                return t.length
            },
            depend: function(n, t) {
                return this.dependTypes[typeof n] ? this.dependTypes[typeof n](n, t) : !0
            },
            dependTypes: {
                boolean: function(n) {
                    return n
                },
                string: function(t, i) {
                    return !!n(t, i.form).length
                },
                "function": function(n, t) {
                    return n(t)
                }
            },
            optional: function(t) {
                var i = this.elementValue(t);
                return !n.validator.methods.required.call(this, i, t) && "dependency-mismatch"
            },
            startRequest: function(t) {
                this.pending[t.name] || (this.pendingRequest++,
                n(t).addClass(this.settings.pendingClass),
                this.pending[t.name] = !0)
            },
            stopRequest: function(t, i) {
                this.pendingRequest--;
                this.pendingRequest < 0 && (this.pendingRequest = 0);
                delete this.pending[t.name];
                n(t).removeClass(this.settings.pendingClass);
                i && this.pendingRequest === 0 && this.formSubmitted && this.form() ? (n(this.currentForm).submit(),
                this.submitButton && n("input:hidden[name='" + this.submitButton.name + "']", this.currentForm).remove(),
                this.formSubmitted = !1) : !i && this.pendingRequest === 0 && this.formSubmitted && (n(this.currentForm).triggerHandler("invalid-form", [this]),
                this.formSubmitted = !1)
            },
            previousValue: function(t, i) {
                return i = typeof i == "string" && i || "remote",
                n.data(t, "previousValue") || n.data(t, "previousValue", {
                    old: null,
                    valid: !0,
                    message: this.defaultMessage(t, {
                        method: i
                    })
                })
            },
            destroy: function() {
                this.resetForm();
                n(this.currentForm).off(".validate").removeData("validator").find(".validate-equalTo-blur").off(".validate-equalTo").removeClass("validate-equalTo-blur").find(".validate-lessThan-blur").off(".validate-lessThan").removeClass("validate-lessThan-blur").find(".validate-lessThanEqual-blur").off(".validate-lessThanEqual").removeClass("validate-lessThanEqual-blur").find(".validate-greaterThanEqual-blur").off(".validate-greaterThanEqual").removeClass("validate-greaterThanEqual-blur").find(".validate-greaterThan-blur").off(".validate-greaterThan").removeClass("validate-greaterThan-blur")
            }
        },
        classRuleSettings: {
            required: {
                required: !0
            },
            email: {
                email: !0
            },
            url: {
                url: !0
            },
            date: {
                date: !0
            },
            dateISO: {
                dateISO: !0
            },
            number: {
                number: !0
            },
            digits: {
                digits: !0
            },
            creditcard: {
                creditcard: !0
            }
        },
        addClassRules: function(t, i) {
            t.constructor === String ? this.classRuleSettings[t] = i : n.extend(this.classRuleSettings, t)
        },
        classRules: function(t) {
            var i = {}
              , r = n(t).attr("class");
            return r && n.each(r.split(" "), function() {
                this in n.validator.classRuleSettings && n.extend(i, n.validator.classRuleSettings[this])
            }),
            i
        },
        normalizeAttributeRule: function(n, t, i, r) {
            /min|max|step/.test(i) && (t === null || /number|range|text/.test(t)) && (r = Number(r),
            isNaN(r) && (r = undefined));
            r || r === 0 ? n[i] = r : t === i && t !== "range" && (n[i] = !0)
        },
        attributeRules: function(t) {
            var r = {}, f = n(t), e = t.getAttribute("type"), u, i;
            for (u in n.validator.methods)
                u === "required" ? (i = t.getAttribute(u),
                i === "" && (i = !0),
                i = !!i) : i = f.attr(u),
                this.normalizeAttributeRule(r, e, u, i);
            return r.maxlength && /-1|2147483647|524288/.test(r.maxlength) && delete r.maxlength,
            r
        },
        dataRules: function(t) {
            var u = {}, f = n(t), e = t.getAttribute("type"), i, r;
            for (i in n.validator.methods)
                r = f.data("rule" + i.charAt(0).toUpperCase() + i.substring(1).toLowerCase()),
                r === "" && (r = !0),
                this.normalizeAttributeRule(u, e, i, r);
            return u
        },
        staticRules: function(t) {
            var i = {}
              , r = n.data(t.form, "validator");
            return r.settings.rules && (i = n.validator.normalizeRule(r.settings.rules[t.name]) || {}),
            i
        },
        normalizeRules: function(t, i) {
            return n.each(t, function(r, u) {
                if (u === !1) {
                    delete t[r];
                    return
                }
                if (u.param || u.depends) {
                    var f = !0;
                    switch (typeof u.depends) {
                    case "string":
                        f = !!n(u.depends, i.form).length;
                        break;
                    case "function":
                        f = u.depends.call(i, i)
                    }
                    f ? t[r] = u.param !== undefined ? u.param : !0 : (n.data(i.form, "validator").resetElements(n(i)),
                    delete t[r])
                }
            }),
            n.each(t, function(r, u) {
                t[r] = n.isFunction(u) && r !== "normalizer" ? u(i) : u
            }),
            n.each(["minlength", "maxlength"], function() {
                t[this] && (t[this] = Number(t[this]))
            }),
            n.each(["rangelength", "range"], function() {
                var i;
                t[this] && (n.isArray(t[this]) ? t[this] = [Number(t[this][0]), Number(t[this][1])] : typeof t[this] == "string" && (i = t[this].replace(/[\[\]]/g, "").split(/[\s,]+/),
                t[this] = [Number(i[0]), Number(i[1])]))
            }),
            n.validator.autoCreateRanges && (t.min != null && t.max != null && (t.range = [t.min, t.max],
            delete t.min,
            delete t.max),
            t.minlength != null && t.maxlength != null && (t.rangelength = [t.minlength, t.maxlength],
            delete t.minlength,
            delete t.maxlength)),
            t
        },
        normalizeRule: function(t) {
            if (typeof t == "string") {
                var i = {};
                n.each(t.split(/\s/), function() {
                    i[this] = !0
                });
                t = i
            }
            return t
        },
        addMethod: function(t, i, r) {
            n.validator.methods[t] = i;
            n.validator.messages[t] = r !== undefined ? r : n.validator.messages[t];
            i.length < 3 && n.validator.addClassRules(t, n.validator.normalizeRule(t))
        },
        methods: {
            required: function(t, i, r) {
                if (!this.depend(r, i))
                    return "dependency-mismatch";
                if (i.nodeName.toLowerCase() === "select") {
                    var u = n(i).val();
                    return u && u.length > 0
                }
                return this.checkable(i) ? this.getLength(t, i) > 0 : t !== undefined && t !== null && t.length > 0
            },
            email: function(n, t) {
                return this.optional(t) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(n)
            },
            url: function(n, t) {
                return this.optional(t) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(n)
            },
            date: function() {
                var n = !1;
                return function(t, i) {
                    return n || (n = !0,
                    this.settings.debug && window.console && console.warn("The `date` method is deprecated and will be removed in version '2.0.0'.\nPlease don't use it, since it relies on the Date constructor, which\nbehaves very differently across browsers and locales. Use `dateISO`\ninstead or one of the locale specific methods in `localizations/`\nand `additional-methods.js`.")),
                    this.optional(i) || !/Invalid|NaN/.test(new Date(t).toString())
                }
            }(),
            dateISO: function(n, t) {
                return this.optional(t) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(n)
            },
            number: function(n, t) {
                return this.optional(t) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(n)
            },
            digits: function(n, t) {
                return this.optional(t) || /^\d+$/.test(n)
            },
            minlength: function(t, i, r) {
                var u = n.isArray(t) ? t.length : this.getLength(t, i);
                return this.optional(i) || u >= r
            },
            maxlength: function(t, i, r) {
                var u = n.isArray(t) ? t.length : this.getLength(t, i);
                return this.optional(i) || u <= r
            },
            rangelength: function(t, i, r) {
                var u = n.isArray(t) ? t.length : this.getLength(t, i);
                return this.optional(i) || u >= r[0] && u <= r[1]
            },
            min: function(n, t, i) {
                return this.optional(t) || n.replace(/\,/g, "") >= i
            },
            max: function(n, t, i) {
                return this.optional(t) || n.replace(/\,/g, "") <= i
            },
            range: function(n, t, i) {
                return this.optional(t) || n >= i[0] && n <= i[1]
            },
            step: function(t, i, r) {
                var u = n(i).attr("type"), h = "Step attribute on input type " + u + " is not supported.", c = new RegExp("\\b" + u + "\\b"), l = u && !c.test("text,number,range"), e = function(n) {
                    var t = ("" + n).match(/(?:\.(\d+))?$/);
                    return t ? t[1] ? t[1].length : 0 : 0
                }, o = function(n) {
                    return Math.round(n * Math.pow(10, f))
                }, s = !0, f;
                if (l)
                    throw new Error(h);
                return f = e(r),
                (e(t) > f || o(t) % o(r) != 0) && (s = !1),
                this.optional(i) || s
            },
            equalTo: function(t, i, r) {
                var u = n(r);
                if (this.settings.onfocusout && u.not(".validate-equalTo-blur").length)
                    u.addClass("validate-equalTo-blur").on("blur.validate-equalTo", function() {
                        n(i).valid()
                    });
                return t === u.val()
            },
            remote: function(t, i, r, u) {
                if (this.optional(i))
                    return "dependency-mismatch";
                u = typeof u == "string" && u || "remote";
                var e = this.previousValue(i, u), f, o, s;
                return (this.settings.messages[i.name] || (this.settings.messages[i.name] = {}),
                e.originalMessage = e.originalMessage || this.settings.messages[i.name][u],
                this.settings.messages[i.name][u] = e.message,
                r = typeof r == "string" && {
                    url: r
                } || r,
                s = n.param(n.extend({
                    data: t
                }, r.data)),
                e.old === s) ? e.valid : (e.old = s,
                f = this,
                this.startRequest(i),
                o = {},
                o[i.name] = t,
                n.ajax(n.extend(!0, {
                    mode: "abort",
                    port: "validate" + i.name,
                    dataType: "json",
                    data: o,
                    context: f.currentForm,
                    success: function(n) {
                        var r = n === !0 || n === "true", o, s, h;
                        f.settings.messages[i.name][u] = e.originalMessage;
                        r ? (h = f.formSubmitted,
                        f.resetInternals(),
                        f.toHide = f.errorsFor(i),
                        f.formSubmitted = h,
                        f.successList.push(i),
                        f.invalid[i.name] = !1,
                        f.showErrors()) : (o = {},
                        s = n || f.defaultMessage(i, {
                            method: u,
                            parameters: t
                        }),
                        o[i.name] = e.message = s,
                        f.invalid[i.name] = !0,
                        f.showErrors(o));
                        e.valid = r;
                        f.stopRequest(i, r)
                    }
                }, r)),
                "pending")
            }
        }
    });
    var t = {}, i;
    return n.ajaxPrefilter ? n.ajaxPrefilter(function(n, i, r) {
        var u = n.port;
        n.mode === "abort" && (t[u] && t[u].abort(),
        t[u] = r)
    }) : (i = n.ajax,
    n.ajax = function(r) {
        var f = ("mode"in r ? r : n.ajaxSettings).mode
          , u = ("port"in r ? r : n.ajaxSettings).port;
        return f === "abort" ? (t[u] && t[u].abort(),
        t[u] = i.apply(this, arguments),
        t[u]) : i.apply(this, arguments)
    }
    ),
    n
});
!function(n) {
    "function" == typeof define && define.amd ? define("jquery.validate.unobtrusive", ["jquery-validation"], n) : "object" == typeof module && module.exports ? module.exports = n(require("jquery-validation")) : jQuery.validator.unobtrusive = n(jQuery)
}(function(n) {
    function i(n, t, i) {
        n.rules[t] = i;
        n.message && (n.messages[t] = n.message)
    }
    function h(n) {
        return n.replace(/^\s+|\s+$/g, "").split(/\s*,\s*/g)
    }
    function f(n) {
        return n.replace(/([!"#$%&'()*+,.\/:;<=>?@\[\\\]^`{|}~])/g, "\\$1")
    }
    function e(n) {
        return n.substr(0, n.lastIndexOf(".") + 1)
    }
    function o(n, t) {
        return 0 === n.indexOf("*.") && (n = n.replace("*.", t)),
        n
    }
    function c(t, i) {
        var r = n(this).find("[data-valmsg-for='" + f(i[0].name) + "']")
          , u = r.attr("data-valmsg-replace")
          , e = u ? n.parseJSON(u) !== !1 : null;
        r.removeClass("field-validation-valid").addClass("field-validation-error");
        t.data("unobtrusiveContainer", r);
        e ? (r.empty(),
        t.removeClass("input-validation-error").appendTo(r)) : t.hide()
    }
    function l(t, i) {
        var u = n(this).find("[data-valmsg-summary=true]")
          , r = u.find("ul");
        r && r.length && i.errorList.length && (r.empty(),
        u.addClass("validation-summary-errors").removeClass("validation-summary-valid"),
        n.each(i.errorList, function() {
            n("<li />").html(this.message).appendTo(r)
        }))
    }
    function a(t) {
        var i = t.data("unobtrusiveContainer"), r, u;
        i && (r = i.attr("data-valmsg-replace"),
        u = r ? n.parseJSON(r) : null,
        i.addClass("field-validation-valid").removeClass("field-validation-error"),
        t.removeData("unobtrusiveContainer"),
        u && i.empty())
    }
    function v() {
        var t = n(this)
          , i = "__jquery_unobtrusive_validation_form_reset";
        if (!t.data(i)) {
            t.data(i, !0);
            try {
                t.data("validator").resetForm()
            } finally {
                t.removeData(i)
            }
            t.find(".validation-summary-errors").addClass("validation-summary-valid").removeClass("validation-summary-errors");
            t.find(".field-validation-error").addClass("field-validation-valid").removeClass("field-validation-error").removeData("unobtrusiveContainer").find(">*").removeData("unobtrusiveContainer")
        }
    }
    function s(t) {
        var i = n(t)
          , f = i.data(u)
          , s = n.proxy(v, t)
          , e = r.unobtrusive.options || {}
          , o = function(i, r) {
            var u = e[i];
            u && n.isFunction(u) && u.apply(t, r)
        };
        return f || (f = {
            options: {
                errorClass: e.errorClass || "input-validation-error",
                errorElement: e.errorElement || "span",
                errorPlacement: function() {
                    c.apply(t, arguments);
                    o("errorPlacement", arguments)
                },
                invalidHandler: function() {
                    l.apply(t, arguments);
                    o("invalidHandler", arguments)
                },
                messages: {},
                rules: {},
                success: function() {
                    a.apply(t, arguments);
                    o("success", arguments)
                }
            },
            attachValidation: function() {
                i.off("reset." + u, s).on("reset." + u, s).validate(this.options)
            },
            validate: function() {
                return i.validate(),
                i.valid()
            }
        },
        i.data(u, f)),
        f
    }
    var t, r = n.validator, u = "unobtrusiveValidation";
    return r.unobtrusive = {
        adapters: [],
        parseElement: function(t, i) {
            var r, u, o, f = n(t), e = f.parents("form")[0];
            e && (r = s(e),
            r.options.rules[t.name] = u = {},
            r.options.messages[t.name] = o = {},
            n.each(this.adapters, function() {
                var i = "data-val-" + this.name
                  , r = f.attr(i)
                  , s = {};
                void 0 !== r && (i += "-",
                n.each(this.params, function() {
                    s[this] = f.attr(i + this)
                }),
                this.adapt({
                    element: t,
                    form: e,
                    message: r,
                    params: s,
                    rules: u,
                    messages: o
                }))
            }),
            n.extend(u, {
                __dummy__: !0
            }),
            i || r.attachValidation())
        },
        parse: function(t) {
            var i = n(t)
              , u = i.parents().addBack().filter("form").add(i.find("form")).has("[data-val=true]");
            i.find("[data-val=true]").each(function() {
                r.unobtrusive.parseElement(this, !0)
            });
            u.each(function() {
                var n = s(this);
                n && n.attachValidation()
            })
        }
    },
    t = r.unobtrusive.adapters,
    t.add = function(n, t, i) {
        return i || (i = t,
        t = []),
        this.push({
            name: n,
            params: t,
            adapt: i
        }),
        this
    }
    ,
    t.addBool = function(n, t) {
        return this.add(n, function(r) {
            i(r, t || n, !0)
        })
    }
    ,
    t.addMinMax = function(n, t, r, u, f, e) {
        return this.add(n, [f || "min", e || "max"], function(n) {
            var f = n.params.min
              , e = n.params.max;
            f && e ? i(n, u, [f, e]) : f ? i(n, t, f) : e && i(n, r, e)
        })
    }
    ,
    t.addSingleVal = function(n, t, r) {
        return this.add(n, [t || "val"], function(u) {
            i(u, r || n, u.params[t])
        })
    }
    ,
    r.addMethod("__dummy__", function() {
        return !0
    }),
    r.addMethod("regex", function(n, t, i) {
        var r;
        return !!this.optional(t) || (r = new RegExp(i).exec(n),
        r && 0 === r.index && r[0].length === n.length)
    }),
    r.addMethod("nonalphamin", function(n, t, i) {
        var r;
        return i && (r = n.match(/\W/g),
        r = r && r.length >= i),
        r
    }),
    r.methods.extension ? (t.addSingleVal("accept", "mimtype"),
    t.addSingleVal("extension", "extension")) : t.addSingleVal("extension", "extension", "accept"),
    t.addSingleVal("regex", "pattern"),
    t.addBool("creditcard").addBool("date").addBool("digits").addBool("email").addBool("number").addBool("url"),
    t.addMinMax("length", "minlength", "maxlength", "rangelength").addMinMax("range", "min", "max", "range"),
    t.addMinMax("minlength", "minlength").addMinMax("maxlength", "minlength", "maxlength"),
    t.add("equalto", ["other"], function(t) {
        var r = e(t.element.name)
          , u = t.params.other
          , s = o(u, r)
          , h = n(t.form).find(":input").filter("[name='" + f(s) + "']")[0];
        i(t, "equalTo", h)
    }),
    t.add("required", function(n) {
        "INPUT" === n.element.tagName.toUpperCase() && "CHECKBOX" === n.element.type.toUpperCase() || i(n, "required", !0)
    }),
    t.add("remote", ["url", "type", "additionalfields"], function(t) {
        var r = {
            url: t.params.url,
            type: t.params.type || "GET",
            data: {}
        }
          , u = e(t.element.name);
        n.each(h(t.params.additionalfields || t.element.name), function(i, e) {
            var s = o(e, u);
            r.data[s] = function() {
                var i = n(t.form).find(":input").filter("[name='" + f(s) + "']");
                return i.is(":checkbox") ? i.filter(":checked").val() || i.filter(":hidden").val() || "" : i.is(":radio") ? i.filter(":checked").val() || "" : i.val()
            }
        });
        i(t, "remote", r)
    }),
    t.add("password", ["min", "nonalphamin", "regex"], function(n) {
        n.params.min && i(n, "minlength", n.params.min);
        n.params.nonalphamin && i(n, "nonalphamin", n.params.nonalphamin);
        n.params.regex && i(n, "regex", n.params.regex)
    }),
    t.add("fileextensions", ["extensions"], function(n) {
        i(n, "extension", n.params.extensions)
    }),
    n(function() {
        r.unobtrusive.parse(document)
    }),
    r.unobtrusive
});
!function(n) {
    function i(n, t) {
        for (var i = window, r = (n || "").split("."); i && r.length; )
            i = i[r.shift()];
        return "function" == typeof i ? i : (t.push(n),
        Function.constructor.apply(null, t))
    }
    function u(n) {
        return "GET" === n || "POST" === n
    }
    function e(n, t) {
        u(t) || n.setRequestHeader("X-HTTP-Method-Override", t)
    }
    function o(t, i, r) {
        var u;
        r.indexOf("application/x-javascript") === -1 && (u = (t.getAttribute("data-ajax-mode") || "").toUpperCase(),
        n(t.getAttribute("data-ajax-update")).each(function(t, r) {
            switch (u) {
            case "BEFORE":
                n(r).prepend(i);
                break;
            case "AFTER":
                n(r).append(i);
                break;
            case "REPLACE-WITH":
                n(r).replaceWith(i);
                break;
            default:
                n(r).html(i)
            }
        }))
    }
    function f(t, r) {
        var c, l, f, a, s, h;
        (c = t.getAttribute("data-ajax-confirm"),
        !c || window.confirm(c)) && (l = n(t.getAttribute("data-ajax-loading")),
        a = parseInt(t.getAttribute("data-ajax-loading-duration"), 10) || 0,
        n.extend(r, {
            type: t.getAttribute("data-ajax-method") || void 0,
            url: t.getAttribute("data-ajax-url") || void 0,
            cache: "true" === (t.getAttribute("data-ajax-cache") || "").toLowerCase(),
            beforeSend: function(n) {
                var r;
                return e(n, f),
                r = i(t.getAttribute("data-ajax-begin"), ["xhr"]).apply(t, arguments),
                r !== !1 && l.show(a),
                r
            },
            complete: function() {
                l.hide(a);
                i(t.getAttribute("data-ajax-complete"), ["xhr", "status"]).apply(t, arguments)
            },
            success: function(n, r, u) {
                o(t, n, u.getResponseHeader("Content-Type") || "text/html");
                i(t.getAttribute("data-ajax-success"), ["data", "status", "xhr"]).apply(t, arguments)
            },
            error: function() {
                i(t.getAttribute("data-ajax-failure"), ["xhr", "status", "error"]).apply(t, arguments)
            }
        }),
        r.data.push({
            name: "X-Requested-With",
            value: "XMLHttpRequest"
        }),
        f = r.type.toUpperCase(),
        u(f) || (r.type = "POST",
        r.data.push({
            name: "X-HTTP-Method-Override",
            value: f
        })),
        s = n(t),
        s.is("form") && "multipart/form-data" == s.attr("enctype") && (h = new FormData,
        n.each(r.data, function(n, t) {
            h.append(t.name, t.value)
        }),
        n("input[type=file]", s).each(function() {
            var t = this;
            n.each(t.files, function(n, i) {
                h.append(t.name, i)
            })
        }),
        n.extend(r, {
            processData: !1,
            contentType: !1,
            data: h
        })),
        n.ajax(r))
    }
    function s(t) {
        var i = n(t).data(h);
        return !i || !i.validate || i.validate()
    }
    var t = "unobtrusiveAjaxClick"
      , r = "unobtrusiveAjaxClickTarget"
      , h = "unobtrusiveValidation";
    n(document).on("click", "a[data-ajax=true]", function(n) {
        n.preventDefault();
        f(this, {
            url: this.href,
            type: "GET",
            data: []
        })
    });
    n(document).on("click", "form[data-ajax=true] input[type=image]", function(i) {
        var r = i.target.name
          , u = n(i.target)
          , f = n(u.parents("form")[0])
          , e = u.offset();
        f.data(t, [{
            name: r + ".x",
            value: Math.round(i.pageX - e.left)
        }, {
            name: r + ".y",
            value: Math.round(i.pageY - e.top)
        }]);
        setTimeout(function() {
            f.removeData(t)
        }, 0)
    });
    n(document).on("click", "form[data-ajax=true] :submit", function(i) {
        var f = i.currentTarget.name
          , e = n(i.target)
          , u = n(e.parents("form")[0]);
        u.data(t, f ? [{
            name: f,
            value: i.currentTarget.value
        }] : []);
        u.data(r, e);
        setTimeout(function() {
            u.removeData(t);
            u.removeData(r)
        }, 0)
    });
    n(document).on("submit", "form[data-ajax=true]", function(i) {
        var e = n(this).data(t) || []
          , u = n(this).data(r)
          , o = u && (u.hasClass("cancel") || void 0 !== u.attr("formnovalidate"));
        i.preventDefault();
        (o || s(this)) && f(this, {
            url: this.action,
            type: this.method || "GET",
            data: e.concat(n(this).serializeArray())
        })
    })
}(jQuery);
/*!
 * perfect-scrollbar v1.4.0
 * (c) 2018 Hyunje Jun
 * @license MIT
 */
!function(n, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : n.PerfectScrollbar = t()
}(this, function() {
    "use strict";
    function r(n) {
        return getComputedStyle(n)
    }
    function i(n, t) {
        var r, i;
        for (r in t)
            i = t[r],
            "number" == typeof i && (i += "px"),
            n.style[r] = i;
        return n
    }
    function l(n) {
        var t = document.createElement("div");
        return t.className = n,
        t
    }
    function f(n, t) {
        if (!d)
            throw new Error("No element matching method supported");
        return d.call(n, t)
    }
    function o(n) {
        n.remove ? n.remove() : n.parentNode && n.parentNode.removeChild(n)
    }
    function y(n, t) {
        return Array.prototype.filter.call(n.children, function(n) {
            return f(n, t)
        })
    }
    function p(n, i) {
        var r = n.element.classList
          , u = t.state.scrolling(i);
        r.contains(u) ? clearTimeout(g[i]) : r.add(u)
    }
    function w(n, i) {
        g[i] = setTimeout(function() {
            return n.isAlive && n.element.classList.remove(t.state.scrolling(i))
        }, n.settings.scrollingThreshold)
    }
    function tt(n, t) {
        p(n, t);
        w(n, t)
    }
    function a(n) {
        if ("function" == typeof CustomEvent)
            return new CustomEvent(n);
        var t = document.createEvent("CustomEvent");
        return t.initCustomEvent(n, !1, !1, void 0),
        t
    }
    function it(n, t, i, r, u) {
        var s = i[0], h = i[1], o = i[2], f = i[3], c = i[4], l = i[5], e;
        void 0 === r && (r = !0);
        void 0 === u && (u = !1);
        e = n.element;
        n.reach[f] = null;
        e[o] < 1 && (n.reach[f] = "start");
        e[o] > n[s] - n[h] - 1 && (n.reach[f] = "end");
        t && (e.dispatchEvent(a("ps-scroll-" + f)),
        t < 0 ? e.dispatchEvent(a("ps-scroll-" + c)) : t > 0 && e.dispatchEvent(a("ps-scroll-" + l)),
        r && tt(n, f));
        n.reach[f] && (t || u) && e.dispatchEvent(a("ps-" + f + "-reach-" + n.reach[f]))
    }
    function n(n) {
        return parseInt(n, 10) || 0
    }
    function rt(n) {
        return f(n, "input,[contenteditable]") || f(n, "select,[contenteditable]") || f(n, "textarea,[contenteditable]") || f(n, "button,[contenteditable]")
    }
    function ut(t) {
        var i = r(t);
        return n(i.width) + n(i.paddingLeft) + n(i.paddingRight) + n(i.borderLeftWidth) + n(i.borderRightWidth)
    }
    function b(n, t) {
        return n.settings.minScrollbarLength && (t = Math.max(t, n.settings.minScrollbarLength)),
        n.settings.maxScrollbarLength && (t = Math.min(t, n.settings.maxScrollbarLength)),
        t
    }
    function ft(n, t) {
        var r = {
            width: t.railXWidth
        }, f = Math.floor(n.scrollTop), u;
        r.left = t.isRtl ? t.negativeScrollAdjustment + n.scrollLeft + t.containerWidth - t.contentWidth : n.scrollLeft;
        t.isScrollbarXUsingBottom ? r.bottom = t.scrollbarXBottom - f : r.top = t.scrollbarXTop + f;
        i(t.scrollbarXRail, r);
        u = {
            top: f,
            height: t.railYHeight
        };
        t.isScrollbarYUsingRight ? u.right = t.isRtl ? t.contentWidth - (t.negativeScrollAdjustment + n.scrollLeft) - t.scrollbarYRight - t.scrollbarYOuterWidth : t.scrollbarYRight - n.scrollLeft : u.left = t.isRtl ? t.negativeScrollAdjustment + n.scrollLeft + 2 * t.containerWidth - t.contentWidth - t.scrollbarYLeft - t.scrollbarYOuterWidth : t.scrollbarYLeft + n.scrollLeft;
        i(t.scrollbarYRail, u);
        i(t.scrollbarX, {
            left: t.scrollbarXLeft,
            width: t.scrollbarXWidth - t.railBorderXWidth
        });
        i(t.scrollbarY, {
            top: t.scrollbarYTop,
            height: t.scrollbarYHeight - t.railBorderYWidth
        })
    }
    function k(n, i) {
        function r(t) {
            h[e] = c + a * (t[f] - l);
            p(n, o);
            u(n);
            t.stopPropagation();
            t.preventDefault()
        }
        function v() {
            w(n, o);
            n[s].classList.remove(t.state.clicking);
            n.event.unbind(n.ownerDocument, "mousemove", r)
        }
        var y = i[0]
          , b = i[1]
          , f = i[2]
          , k = i[3]
          , d = i[4]
          , g = i[5]
          , e = i[6]
          , o = i[7]
          , s = i[8]
          , h = n.element
          , c = null
          , l = null
          , a = null;
        n.event.bind(n[d], "mousedown", function(i) {
            c = h[e];
            l = i[f];
            a = (n[b] - n[y]) / (n[k] - n[g]);
            n.event.bind(n.ownerDocument, "mousemove", r);
            n.event.once(n.ownerDocument, "mouseup", v);
            n[s].classList.add(t.state.clicking);
            i.stopPropagation();
            i.preventDefault()
        })
    }
    var d = "undefined" != typeof Element && (Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector), t = {
        main: "ps",
        element: {
            thumb: function(n) {
                return "ps__thumb-" + n
            },
            rail: function(n) {
                return "ps__rail-" + n
            },
            consuming: "ps__child--consume"
        },
        state: {
            focus: "ps--focus",
            clicking: "ps--clicking",
            active: function(n) {
                return "ps--active-" + n
            },
            scrolling: function(n) {
                return "ps--scrolling-" + n
            }
        }
    }, g = {
        x: null,
        y: null
    }, h = function(n) {
        this.element = n;
        this.handlers = {}
    }, nt = {
        isEmpty: {
            configurable: !0
        }
    }, e;
    h.prototype.bind = function(n, t) {
        void 0 === this.handlers[n] && (this.handlers[n] = []);
        this.handlers[n].push(t);
        this.element.addEventListener(n, t, !1)
    }
    ;
    h.prototype.unbind = function(n, t) {
        var i = this;
        this.handlers[n] = this.handlers[n].filter(function(r) {
            return !(!t || r === t) || (i.element.removeEventListener(n, r, !1),
            !1)
        })
    }
    ;
    h.prototype.unbindAll = function() {
        var n = this;
        for (var t in n.handlers)
            n.unbind(t)
    }
    ;
    nt.isEmpty.get = function() {
        var n = this;
        return Object.keys(this.handlers).every(function(t) {
            return 0 === n.handlers[t].length
        })
    }
    ;
    Object.defineProperties(h.prototype, nt);
    e = function() {
        this.eventElements = []
    }
    ;
    e.prototype.eventElement = function(n) {
        var t = this.eventElements.filter(function(t) {
            return t.element === n
        })[0];
        return t || (t = new h(n),
        this.eventElements.push(t)),
        t
    }
    ;
    e.prototype.bind = function(n, t, i) {
        this.eventElement(n).bind(t, i)
    }
    ;
    e.prototype.unbind = function(n, t, i) {
        var r = this.eventElement(n);
        r.unbind(t, i);
        r.isEmpty && this.eventElements.splice(this.eventElements.indexOf(r), 1)
    }
    ;
    e.prototype.unbindAll = function() {
        this.eventElements.forEach(function(n) {
            return n.unbindAll()
        });
        this.eventElements = []
    }
    ;
    e.prototype.once = function(n, t, i) {
        var r = this.eventElement(n)
          , u = function(n) {
            r.unbind(t, u);
            i(n)
        };
        r.bind(t, u)
    }
    ;
    var v = function(n, t, i, r, u) {
        void 0 === r && (r = !0);
        void 0 === u && (u = !1);
        var f;
        if ("top" === t)
            f = ["contentHeight", "containerHeight", "scrollTop", "y", "up", "down"];
        else {
            if ("left" !== t)
                throw new Error("A proper axis should be provided");
            f = ["contentWidth", "containerWidth", "scrollLeft", "x", "left", "right"]
        }
        it(n, i, f, r, u)
    }
      , s = {
        isWebKit: "undefined" != typeof document && "WebkitAppearance"in document.documentElement.style,
        supportsTouch: "undefined" != typeof window && ("ontouchstart"in window || window.DocumentTouch && document instanceof window.DocumentTouch),
        supportsIePointer: "undefined" != typeof navigator && navigator.msMaxTouchPoints,
        isChrome: "undefined" != typeof navigator && /Chrome/i.test(navigator && navigator.userAgent)
    }
      , u = function(i) {
        var r = i.element
          , u = Math.floor(r.scrollTop);
        i.containerWidth = r.clientWidth;
        i.containerHeight = r.clientHeight;
        i.contentWidth = r.scrollWidth;
        i.contentHeight = r.scrollHeight;
        r.contains(i.scrollbarXRail) || (y(r, t.element.rail("x")).forEach(function(n) {
            return o(n)
        }),
        r.appendChild(i.scrollbarXRail));
        r.contains(i.scrollbarYRail) || (y(r, t.element.rail("y")).forEach(function(n) {
            return o(n)
        }),
        r.appendChild(i.scrollbarYRail));
        !i.settings.suppressScrollX && i.containerWidth + i.settings.scrollXMarginOffset < i.contentWidth ? (i.scrollbarXActive = !0,
        i.railXWidth = i.containerWidth - i.railXMarginWidth,
        i.railXRatio = i.containerWidth / i.railXWidth,
        i.scrollbarXWidth = b(i, n(i.railXWidth * i.containerWidth / i.contentWidth)),
        i.scrollbarXLeft = n((i.negativeScrollAdjustment + r.scrollLeft) * (i.railXWidth - i.scrollbarXWidth) / (i.contentWidth - i.containerWidth))) : i.scrollbarXActive = !1;
        !i.settings.suppressScrollY && i.containerHeight + i.settings.scrollYMarginOffset < i.contentHeight ? (i.scrollbarYActive = !0,
        i.railYHeight = i.containerHeight - i.railYMarginHeight,
        i.railYRatio = i.containerHeight / i.railYHeight,
        i.scrollbarYHeight = b(i, n(i.railYHeight * i.containerHeight / i.contentHeight)),
        i.scrollbarYTop = n(u * (i.railYHeight - i.scrollbarYHeight) / (i.contentHeight - i.containerHeight))) : i.scrollbarYActive = !1;
        i.scrollbarXLeft >= i.railXWidth - i.scrollbarXWidth && (i.scrollbarXLeft = i.railXWidth - i.scrollbarXWidth);
        i.scrollbarYTop >= i.railYHeight - i.scrollbarYHeight && (i.scrollbarYTop = i.railYHeight - i.scrollbarYHeight);
        ft(r, i);
        i.scrollbarXActive ? r.classList.add(t.state.active("x")) : (r.classList.remove(t.state.active("x")),
        i.scrollbarXWidth = 0,
        i.scrollbarXLeft = 0,
        r.scrollLeft = 0);
        i.scrollbarYActive ? r.classList.add(t.state.active("y")) : (r.classList.remove(t.state.active("y")),
        i.scrollbarYHeight = 0,
        i.scrollbarYTop = 0,
        r.scrollTop = 0)
    }
      , et = {
        "click-rail": function(n) {
            n.event.bind(n.scrollbarY, "mousedown", function(n) {
                return n.stopPropagation()
            });
            n.event.bind(n.scrollbarYRail, "mousedown", function(t) {
                var i = t.pageY - window.pageYOffset - n.scrollbarYRail.getBoundingClientRect().top > n.scrollbarYTop ? 1 : -1;
                n.element.scrollTop += i * n.containerHeight;
                u(n);
                t.stopPropagation()
            });
            n.event.bind(n.scrollbarX, "mousedown", function(n) {
                return n.stopPropagation()
            });
            n.event.bind(n.scrollbarXRail, "mousedown", function(t) {
                var i = t.pageX - window.pageXOffset - n.scrollbarXRail.getBoundingClientRect().left > n.scrollbarXLeft ? 1 : -1;
                n.element.scrollLeft += i * n.containerWidth;
                u(n);
                t.stopPropagation()
            })
        },
        "drag-thumb": function(n) {
            k(n, ["containerWidth", "contentWidth", "pageX", "railXWidth", "scrollbarX", "scrollbarXWidth", "scrollLeft", "x", "scrollbarXRail"]);
            k(n, ["containerHeight", "contentHeight", "pageY", "railYHeight", "scrollbarY", "scrollbarYHeight", "scrollTop", "y", "scrollbarYRail"])
        },
        keyboard: function(n) {
            function i(i, r) {
                var f = Math.floor(t.scrollTop), u;
                if (0 === i) {
                    if (!n.scrollbarYActive)
                        return !1;
                    if (0 === f && r > 0 || f >= n.contentHeight - n.containerHeight && r < 0)
                        return !n.settings.wheelPropagation
                }
                if (u = t.scrollLeft,
                0 === r) {
                    if (!n.scrollbarXActive)
                        return !1;
                    if (0 === u && i < 0 || u >= n.contentWidth - n.containerWidth && i > 0)
                        return !n.settings.wheelPropagation
                }
                return !0
            }
            var t = n.element
              , r = function() {
                return f(t, ":hover")
            }
              , e = function() {
                return f(n.scrollbarX, ":focus") || f(n.scrollbarY, ":focus")
            };
            n.event.bind(n.ownerDocument, "keydown", function(f) {
                var s, h, o;
                if (!(f.isDefaultPrevented && f.isDefaultPrevented() || f.defaultPrevented) && (r() || e())) {
                    if (s = document.activeElement ? document.activeElement : n.ownerDocument.activeElement,
                    s) {
                        if ("IFRAME" === s.tagName)
                            s = s.contentDocument.activeElement;
                        else
                            for (; s.shadowRoot; )
                                s = s.shadowRoot.activeElement;
                        if (rt(s))
                            return
                    }
                    h = 0;
                    o = 0;
                    switch (f.which) {
                    case 37:
                        h = f.metaKey ? -n.contentWidth : f.altKey ? -n.containerWidth : -30;
                        break;
                    case 38:
                        o = f.metaKey ? n.contentHeight : f.altKey ? n.containerHeight : 30;
                        break;
                    case 39:
                        h = f.metaKey ? n.contentWidth : f.altKey ? n.containerWidth : 30;
                        break;
                    case 40:
                        o = f.metaKey ? -n.contentHeight : f.altKey ? -n.containerHeight : -30;
                        break;
                    case 32:
                        o = f.shiftKey ? n.containerHeight : -n.containerHeight;
                        break;
                    case 33:
                        o = n.containerHeight;
                        break;
                    case 34:
                        o = -n.containerHeight;
                        break;
                    case 36:
                        o = n.contentHeight;
                        break;
                    case 35:
                        o = -n.contentHeight;
                        break;
                    default:
                        return
                    }
                    n.settings.suppressScrollX && 0 !== h || n.settings.suppressScrollY && 0 !== o || (t.scrollTop -= o,
                    t.scrollLeft += h,
                    u(n),
                    i(h, o) && f.preventDefault())
                }
            })
        },
        wheel: function(n) {
            function e(t, r) {
                var u = Math.floor(i.scrollTop)
                  , f = 0 === i.scrollTop
                  , e = u + i.offsetHeight === i.scrollHeight
                  , o = 0 === i.scrollLeft
                  , s = i.scrollLeft + i.offsetWidth === i.scrollWidth;
                return !(Math.abs(r) > Math.abs(t) ? f || e : o || s) || !n.settings.wheelPropagation
            }
            function o(n) {
                var t = n.deltaX
                  , i = -1 * n.deltaY;
                return void 0 !== t && void 0 !== i || (t = n.wheelDeltaX / -6,
                i = n.wheelDeltaY / 6),
                n.deltaMode && 1 === n.deltaMode && (t *= 10,
                i *= 10),
                t !== t && i !== i && (t = 0,
                i = n.wheelDelta),
                n.shiftKey ? [-i, -t] : [t, i]
            }
            function h(n, u, f) {
                var e, o, h, c;
                if (!s.isWebKit && i.querySelector("select:focus"))
                    return !0;
                if (!i.contains(n))
                    return !1;
                for (e = n; e && e !== i; ) {
                    if (e.classList.contains(t.element.consuming) || (o = r(e),
                    [o.overflow, o.overflowX, o.overflowY].join("").match(/(scroll|auto)/) && ((h = e.scrollHeight - e.clientHeight,
                    h > 0 && !(0 === e.scrollTop && f > 0 || e.scrollTop === h && f < 0)) || (c = e.scrollWidth - e.clientWidth,
                    c > 0 && !(0 === e.scrollLeft && u < 0 || e.scrollLeft === c && u > 0)))))
                        return !0;
                    e = e.parentNode
                }
                return !1
            }
            function f(t) {
                var c = o(t), r = c[0], f = c[1], s;
                h(t.target, r, f) || (s = !1,
                n.settings.useBothWheelAxes ? n.scrollbarYActive && !n.scrollbarXActive ? (f ? i.scrollTop -= f * n.settings.wheelSpeed : i.scrollTop += r * n.settings.wheelSpeed,
                s = !0) : n.scrollbarXActive && !n.scrollbarYActive && (r ? i.scrollLeft += r * n.settings.wheelSpeed : i.scrollLeft -= f * n.settings.wheelSpeed,
                s = !0) : (i.scrollTop -= f * n.settings.wheelSpeed,
                i.scrollLeft += r * n.settings.wheelSpeed),
                u(n),
                (s = s || e(r, f)) && !t.ctrlKey && (t.stopPropagation(),
                t.preventDefault()))
            }
            var i = n.element;
            void 0 !== window.onwheel ? n.event.bind(i, "wheel", f) : void 0 !== window.onmousewheel && n.event.bind(i, "mousewheel", f)
        },
        touch: function(n) {
            function w(t, r) {
                var u = Math.floor(i.scrollTop)
                  , f = i.scrollLeft
                  , e = Math.abs(t)
                  , o = Math.abs(r);
                if (o > e) {
                    if (r < 0 && u === n.contentHeight - n.containerHeight || r > 0 && 0 === u)
                        return 0 === window.scrollY && r > 0 && s.isChrome
                } else if (e > o && (t < 0 && f === n.contentWidth - n.containerWidth || t > 0 && 0 === f))
                    return !0;
                return !0
            }
            function v(t, r) {
                i.scrollTop -= r;
                i.scrollLeft -= t;
                u(n)
            }
            function y(n) {
                return n.targetTouches ? n.targetTouches[0] : n
            }
            function p(n) {
                return !(n.pointerType && "pen" === n.pointerType && 0 === n.buttons || (!n.targetTouches || 1 !== n.targetTouches.length) && (!n.pointerType || "mouse" === n.pointerType || n.pointerType === n.MSPOINTER_TYPE_MOUSE))
            }
            function h(n) {
                if (p(n)) {
                    var t = y(n);
                    o.pageX = t.pageX;
                    o.pageY = t.pageY;
                    a = (new Date).getTime();
                    null !== e && clearInterval(e)
                }
            }
            function b(n, u, f) {
                var e, o, s, h;
                if (!i.contains(n))
                    return !1;
                for (e = n; e && e !== i; ) {
                    if (e.classList.contains(t.element.consuming) || (o = r(e),
                    [o.overflow, o.overflowX, o.overflowY].join("").match(/(scroll|auto)/) && ((s = e.scrollHeight - e.clientHeight,
                    s > 0 && !(0 === e.scrollTop && f > 0 || e.scrollTop === s && f < 0)) || (h = e.scrollLeft - e.clientWidth,
                    h > 0 && !(0 === e.scrollLeft && u < 0 || e.scrollLeft === h && u > 0)))))
                        return !0;
                    e = e.parentNode
                }
                return !1
            }
            function c(n) {
                var e, r;
                if (p(n)) {
                    var s = y(n)
                      , u = {
                        pageX: s.pageX,
                        pageY: s.pageY
                    }
                      , t = u.pageX - o.pageX
                      , i = u.pageY - o.pageY;
                    if (b(n.target, t, i))
                        return;
                    v(t, i);
                    o = u;
                    e = (new Date).getTime();
                    r = e - a;
                    r > 0 && (f.x = t / r,
                    f.y = i / r,
                    a = e);
                    w(t, i) && n.preventDefault()
                }
            }
            function l() {
                n.settings.swipeEasing && (clearInterval(e),
                e = setInterval(function() {
                    n.isInitialized ? clearInterval(e) : f.x || f.y ? Math.abs(f.x) < .01 && Math.abs(f.y) < .01 ? clearInterval(e) : (v(30 * f.x, 30 * f.y),
                    f.x *= .8,
                    f.y *= .8) : clearInterval(e)
                }, 10))
            }
            if (s.supportsTouch || s.supportsIePointer) {
                var i = n.element
                  , o = {}
                  , a = 0
                  , f = {}
                  , e = null;
                s.supportsTouch ? (n.event.bind(i, "touchstart", h),
                n.event.bind(i, "touchmove", c),
                n.event.bind(i, "touchend", l)) : s.supportsIePointer && (window.PointerEvent ? (n.event.bind(i, "pointerdown", h),
                n.event.bind(i, "pointermove", c),
                n.event.bind(i, "pointerup", l)) : window.MSPointerEvent && (n.event.bind(i, "MSPointerDown", h),
                n.event.bind(i, "MSPointerMove", c),
                n.event.bind(i, "MSPointerUp", l)))
            }
        }
    }
      , c = function(f, o) {
        var c = this, a, v, y, s, h;
        if (void 0 === o && (o = {}),
        "string" == typeof f && (f = document.querySelector(f)),
        !f || !f.nodeName)
            throw new Error("no element is specified to initialize PerfectScrollbar");
        this.element = f;
        f.classList.add(t.main);
        this.settings = {
            handlers: ["click-rail", "drag-thumb", "keyboard", "wheel", "touch"],
            maxScrollbarLength: null,
            minScrollbarLength: null,
            scrollingThreshold: 1e3,
            scrollXMarginOffset: 0,
            scrollYMarginOffset: 0,
            suppressScrollX: !1,
            suppressScrollY: !1,
            swipeEasing: !0,
            useBothWheelAxes: !1,
            wheelPropagation: !0,
            wheelSpeed: 1
        };
        for (a in o)
            c.settings[a] = o[a];
        this.containerWidth = null;
        this.containerHeight = null;
        this.contentWidth = null;
        this.contentHeight = null;
        v = function() {
            return f.classList.add(t.state.focus)
        }
        ;
        y = function() {
            return f.classList.remove(t.state.focus)
        }
        ;
        this.isRtl = "rtl" === r(f).direction;
        this.isNegativeScroll = function() {
            var t = f.scrollLeft
              , n = null;
            return f.scrollLeft = -1,
            n = f.scrollLeft < 0,
            f.scrollLeft = t,
            n
        }();
        this.negativeScrollAdjustment = this.isNegativeScroll ? f.scrollWidth - f.clientWidth : 0;
        this.event = new e;
        this.ownerDocument = f.ownerDocument || document;
        this.scrollbarXRail = l(t.element.rail("x"));
        f.appendChild(this.scrollbarXRail);
        this.scrollbarX = l(t.element.thumb("x"));
        this.scrollbarXRail.appendChild(this.scrollbarX);
        this.scrollbarX.setAttribute("tabindex", 0);
        this.event.bind(this.scrollbarX, "focus", v);
        this.event.bind(this.scrollbarX, "blur", y);
        this.scrollbarXActive = null;
        this.scrollbarXWidth = null;
        this.scrollbarXLeft = null;
        s = r(this.scrollbarXRail);
        this.scrollbarXBottom = parseInt(s.bottom, 10);
        isNaN(this.scrollbarXBottom) ? (this.isScrollbarXUsingBottom = !1,
        this.scrollbarXTop = n(s.top)) : this.isScrollbarXUsingBottom = !0;
        this.railBorderXWidth = n(s.borderLeftWidth) + n(s.borderRightWidth);
        i(this.scrollbarXRail, {
            display: "block"
        });
        this.railXMarginWidth = n(s.marginLeft) + n(s.marginRight);
        i(this.scrollbarXRail, {
            display: ""
        });
        this.railXWidth = null;
        this.railXRatio = null;
        this.scrollbarYRail = l(t.element.rail("y"));
        f.appendChild(this.scrollbarYRail);
        this.scrollbarY = l(t.element.thumb("y"));
        this.scrollbarYRail.appendChild(this.scrollbarY);
        this.scrollbarY.setAttribute("tabindex", 0);
        this.event.bind(this.scrollbarY, "focus", v);
        this.event.bind(this.scrollbarY, "blur", y);
        this.scrollbarYActive = null;
        this.scrollbarYHeight = null;
        this.scrollbarYTop = null;
        h = r(this.scrollbarYRail);
        this.scrollbarYRight = parseInt(h.right, 10);
        isNaN(this.scrollbarYRight) ? (this.isScrollbarYUsingRight = !1,
        this.scrollbarYLeft = n(h.left)) : this.isScrollbarYUsingRight = !0;
        this.scrollbarYOuterWidth = this.isRtl ? ut(this.scrollbarY) : null;
        this.railBorderYWidth = n(h.borderTopWidth) + n(h.borderBottomWidth);
        i(this.scrollbarYRail, {
            display: "block"
        });
        this.railYMarginHeight = n(h.marginTop) + n(h.marginBottom);
        i(this.scrollbarYRail, {
            display: ""
        });
        this.railYHeight = null;
        this.railYRatio = null;
        this.reach = {
            x: f.scrollLeft <= 0 ? "start" : f.scrollLeft >= this.contentWidth - this.containerWidth ? "end" : null,
            y: f.scrollTop <= 0 ? "start" : f.scrollTop >= this.contentHeight - this.containerHeight ? "end" : null
        };
        this.isAlive = !0;
        this.settings.handlers.forEach(function(n) {
            return et[n](c)
        });
        this.lastScrollTop = Math.floor(f.scrollTop);
        this.lastScrollLeft = f.scrollLeft;
        this.event.bind(this.element, "scroll", function(n) {
            return c.onScroll(n)
        });
        u(this)
    };
    return c.prototype.update = function() {
        this.isAlive && (this.negativeScrollAdjustment = this.isNegativeScroll ? this.element.scrollWidth - this.element.clientWidth : 0,
        i(this.scrollbarXRail, {
            display: "block"
        }),
        i(this.scrollbarYRail, {
            display: "block"
        }),
        this.railXMarginWidth = n(r(this.scrollbarXRail).marginLeft) + n(r(this.scrollbarXRail).marginRight),
        this.railYMarginHeight = n(r(this.scrollbarYRail).marginTop) + n(r(this.scrollbarYRail).marginBottom),
        i(this.scrollbarXRail, {
            display: "none"
        }),
        i(this.scrollbarYRail, {
            display: "none"
        }),
        u(this),
        v(this, "top", 0, !1, !0),
        v(this, "left", 0, !1, !0),
        i(this.scrollbarXRail, {
            display: ""
        }),
        i(this.scrollbarYRail, {
            display: ""
        }))
    }
    ,
    c.prototype.onScroll = function() {
        this.isAlive && (u(this),
        v(this, "top", this.element.scrollTop - this.lastScrollTop),
        v(this, "left", this.element.scrollLeft - this.lastScrollLeft),
        this.lastScrollTop = Math.floor(this.element.scrollTop),
        this.lastScrollLeft = this.element.scrollLeft)
    }
    ,
    c.prototype.destroy = function() {
        this.isAlive && (this.event.unbindAll(),
        o(this.scrollbarX),
        o(this.scrollbarY),
        o(this.scrollbarXRail),
        o(this.scrollbarYRail),
        this.removePsClasses(),
        this.element = null,
        this.scrollbarX = null,
        this.scrollbarY = null,
        this.scrollbarXRail = null,
        this.scrollbarYRail = null,
        this.isAlive = !1)
    }
    ,
    c.prototype.removePsClasses = function() {
        this.element.className = this.element.className.split(" ").filter(function(n) {
            return !n.match(/^ps([-_].+|)$/)
        }).join(" ")
    }
    ,
    c
});
!function(n, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : n.Sweetalert2 = t()
}(this, function() {
    "use strict";
    function w(n) {
        return (w = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(n) {
            return typeof n
        }
        : function(n) {
            return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
        }
        )(n)
    }
    function gi(n, t) {
        if (!(n instanceof t))
            throw new TypeError("Cannot call a class as a function");
    }
    function nr(n, t) {
        for (var i, r = 0; r < t.length; r++)
            i = t[r],
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value"in i && (i.writable = !0),
            Object.defineProperty(n, i.key, i)
    }
    function tr(n, t, i) {
        return t && nr(n.prototype, t),
        i && nr(n, i),
        n
    }
    function y() {
        return (y = Object.assign || function(n) {
            for (var i, r, t = 1; t < arguments.length; t++) {
                i = arguments[t];
                for (r in i)
                    Object.prototype.hasOwnProperty.call(i, r) && (n[r] = i[r])
            }
            return n
        }
        ).apply(this, arguments)
    }
    function ct(n) {
        return (ct = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
            return n.__proto__ || Object.getPrototypeOf(n)
        }
        )(n)
    }
    function ri(n, t) {
        return (ri = Object.setPrototypeOf || function(n, t) {
            return n.__proto__ = t,
            n
        }
        )(n, t)
    }
    function ir() {
        return (ir = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham)
                return !1;
            if ("function" == typeof Proxy)
                return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})),
                !0
            } catch (n) {
                return !1
            }
        }() ? Reflect.construct : function(n, t, i) {
            var r = [null], u;
            return r.push.apply(r, t),
            u = new (Function.bind.apply(n, r)),
            i && ri(u, i.prototype),
            u
        }
        ).apply(null, arguments)
    }
    function wu(n, t) {
        return !t || "object" != typeof t && "function" != typeof t ? function(n) {
            if (void 0 === n)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return n
        }(n) : t
    }
    function rr(n, t, i) {
        return (rr = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(n, t, i) {
            var u = function(n, t) {
                for (; !Object.prototype.hasOwnProperty.call(n, t) && null !== (n = ct(n)); )
                    ;
                return n
            }(n, t), r;
            if (u)
                return r = Object.getOwnPropertyDescriptor(u, t),
                r.get ? r.get.call(i) : r.value
        }
        )(n, t, i || n)
    }
    function ur(n) {
        return Object.keys(n).map(function(t) {
            return n[t]
        })
    }
    function ft(n) {
        return Array.prototype.slice.call(n)
    }
    function tt(n) {
        console.error("".concat(er, " ").concat(n))
    }
    function st(n, t) {
        !function(n) {
            -1 === or.indexOf(n) && (or.push(n),
            a(n))
        }('"'.concat(n, '" is deprecated and will be removed in the next major release. Please use "').concat(t, '" instead.'))
    }
    function ui(n) {
        return n && Promise.resolve(n) === n
    }
    function fr(n) {
        var t = {};
        for (var i in n)
            t[n[i]] = "swal2-" + n[i];
        return t
    }
    function lt(n, t) {
        return n.classList.contains(t)
    }
    function h(t, r, u) {
        ft(t.classList).forEach(function(i) {
            -1 === ur(n).indexOf(i) && -1 === ur(b).indexOf(i) && t.classList.remove(i)
        });
        r && r[u] && i(t, r[u])
    }
    function fi(t, i) {
        if (!i)
            return null;
        switch (i) {
        case "select":
        case "textarea":
        case "file":
            return e(t, n[i]);
        case "checkbox":
            return t.querySelector(".".concat(n.checkbox, " input"));
        case "radio":
            return t.querySelector(".".concat(n.radio, " input:checked")) || t.querySelector(".".concat(n.radio, " input:first-child"));
        case "range":
            return t.querySelector(".".concat(n.range, " input"));
        default:
            return e(t, n.input)
        }
    }
    function sr(n) {
        if (n.focus(),
        "file" !== n.type) {
            var t = n.value;
            n.value = "";
            n.value = t
        }
    }
    function vt(n, t, i) {
        n && t && ("string" == typeof t && (t = t.split(/\s+/).filter(Boolean)),
        t.forEach(function(t) {
            n.forEach ? n.forEach(function(n) {
                i ? n.classList.add(t) : n.classList.remove(t)
            }) : i ? n.classList.add(t) : n.classList.remove(t)
        }))
    }
    function yt(n, t, i) {
        i || 0 === parseInt(i) ? n.style[t] = "number" == typeof i ? i + "px" : i : n.style.removeProperty(t)
    }
    function o(n, t) {
        var i = 1 < arguments.length && void 0 !== t ? t : "flex";
        n.style.opacity = "";
        n.style.display = i
    }
    function c(n) {
        n.style.opacity = "";
        n.style.display = "none"
    }
    function pt(n, t, i) {
        t ? o(n, i) : c(n)
    }
    function k(n) {
        return !(!n || !(n.offsetWidth || n.offsetHeight || n.getClientRects().length))
    }
    function hr(n) {
        var t = window.getComputedStyle(n)
          , i = parseFloat(t.getPropertyValue("animation-duration") || "0")
          , r = parseFloat(t.getPropertyValue("transition-duration") || "0");
        return 0 < i || 0 < r
    }
    function l() {
        return document.body.querySelector("." + n.container)
    }
    function wt(n) {
        var t = l();
        return t ? t.querySelector(n) : null
    }
    function v(n) {
        return wt("." + n)
    }
    function r() {
        return v(n.popup)
    }
    function ei() {
        var t = r();
        return ft(t.querySelectorAll("." + n.icon))
    }
    function oi() {
        var n = ei().filter(function(n) {
            return k(n)
        });
        return n.length ? n[0] : null
    }
    function cr() {
        return v(n.title)
    }
    function f() {
        return v(n.content)
    }
    function lr() {
        return v(n.image)
    }
    function ar() {
        return v(n["progress-steps"])
    }
    function si() {
        return v(n["validation-message"])
    }
    function it() {
        return wt("." + n.actions + " ." + n.confirm)
    }
    function rt() {
        return wt("." + n.actions + " ." + n.cancel)
    }
    function bt() {
        return v(n.actions)
    }
    function vr() {
        return v(n.header)
    }
    function yr() {
        return v(n.footer)
    }
    function hi() {
        return v(n.close)
    }
    function ci() {
        var n = ft(r().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')).sort(function(n, t) {
            return n = parseInt(n.getAttribute("tabindex")),
            (t = parseInt(t.getAttribute("tabindex"))) < n ? 1 : n < t ? -1 : 0
        })
          , t = ft(r().querySelectorAll('\n  a[href],\n  area[href],\n  input:not([disabled]),\n  select:not([disabled]),\n  textarea:not([disabled]),\n  button:not([disabled]),\n  iframe,\n  object,\n  embed,\n  [tabindex="0"],\n  [contenteditable],\n  audio[controls],\n  video[controls],\n  summary\n')).filter(function(n) {
            return "-1" !== n.getAttribute("tabindex")
        });
        return function(n) {
            for (var i = [], t = 0; t < n.length; t++)
                -1 === i.indexOf(n[t]) && i.push(n[t]);
            return i
        }(n.concat(t)).filter(function(n) {
            return k(n)
        })
    }
    function pr() {
        return !kt() && !document.body.classList.contains(n["no-backdrop"])
    }
    function wr() {
        return "undefined" == typeof window || "undefined" == typeof document
    }
    function ut(n) {
        nt.isVisible() && br !== n.target.value && nt.resetValidationMessage();
        br = n.target.value
    }
    function li(n, t) {
        n instanceof HTMLElement ? t.appendChild(n) : "object" === w(n) ? gu(t, n) : n && (t.innerHTML = n)
    }
    function bu(t, r) {
        var e = bt()
          , u = it()
          , f = rt();
        r.showConfirmButton || r.showCancelButton || c(e);
        h(e, r.customClass, "actions");
        kr(u, "confirm", r);
        kr(f, "cancel", r);
        r.buttonsStyling ? function(t, r, u) {
            i([t, r], n.styled);
            u.confirmButtonColor && (t.style.backgroundColor = u.confirmButtonColor);
            u.cancelButtonColor && (r.style.backgroundColor = u.cancelButtonColor);
            var f = window.getComputedStyle(t).getPropertyValue("background-color");
            t.style.borderLeftColor = f;
            t.style.borderRightColor = f
        }(u, f, r) : (d([u, f], n.styled),
        u.style.backgroundColor = u.style.borderLeftColor = u.style.borderRightColor = "",
        f.style.backgroundColor = f.style.borderLeftColor = f.style.borderRightColor = "");
        r.reverseButtons && u.parentNode.insertBefore(f, u)
    }
    function kr(t, r, u) {
        pt(t, u["showC" + r.substring(1) + "Button"], "inline-block");
        t.innerHTML = u[r + "ButtonText"];
        t.setAttribute("aria-label", u[r + "ButtonAriaLabel"]);
        t.className = n[r];
        h(t, u.customClass, r + "Button");
        i(t, u[r + "ButtonClass"])
    }
    function nf(t, r) {
        var u = l();
        u && (function(t, r) {
            "string" == typeof r ? t.style.background = r : r || i([document.documentElement, document.body], n["no-backdrop"])
        }(u, r.backdrop),
        !r.backdrop && r.allowOutsideClick && a('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`'),
        function(t, r) {
            r in n ? i(t, n[r]) : (a('The "position" parameter is not valid, defaulting to "center"'),
            i(t, n.center))
        }(u, r.position),
        function(t, r) {
            if (r && "string" == typeof r) {
                var u = "grow-" + r;
                u in n && i(t, n[u])
            }
        }(u, r.grow),
        h(u, r.customClass, "container"),
        r.customContainerClass && i(u, r.customContainerClass))
    }
    function ai(n, t) {
        n.placeholder && !t.inputPlaceholder || (n.placeholder = t.inputPlaceholder)
    }
    function ef(t, i) {
        var r = f().querySelector("#" + n.content);
        i.html ? (li(i.html, r),
        o(r, "block")) : i.text ? (r.textContent = i.text,
        o(r, "block")) : c(r),
        function(t, i) {
            var s = f()
              , r = u.innerParams.get(t)
              , o = !r || i.input !== r.input;
            tf.forEach(function(t) {
                var r = n[t]
                  , u = e(s, r);
                uf(t, i.inputAttributes);
                ff(u, r, i);
                o && c(u)
            });
            i.input && o && rf(i)
        }(t, i);
        h(f(), i.customClass, "content")
    }
    function dr(t, r) {
        var u = ar(), f;
        if (!r.progressSteps || 0 === r.progressSteps.length)
            return c(u);
        o(u);
        u.innerHTML = "";
        f = parseInt(null === r.currentProgressStep ? nt.getQueueStep() : r.currentProgressStep);
        f >= r.progressSteps.length && a("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)");
        r.progressSteps.forEach(function(t, e) {
            var o = function(t) {
                var r = document.createElement("li");
                return i(r, n["progress-step"]),
                r.innerHTML = t,
                r
            }(t), s;
            (u.appendChild(o),
            e === f && i(o, n["active-progress-step"]),
            e !== r.progressSteps.length - 1) && (s = function(t) {
                var r = document.createElement("li");
                return i(r, n["progress-step-line"]),
                t.progressStepsDistance && (r.style.width = t.progressStepsDistance),
                r
            }(t),
            u.appendChild(s))
        })
    }
    function of(t, r) {
        var f = vr();
        h(f, r.customClass, "header");
        dr(0, r),
        function(t, i) {
            var f = u.innerParams.get(t), r;
            f && i.type === f.type && oi() ? h(oi(), i.customClass, "icon") : (tu(),
            i.type) && ((iu(),
            -1 !== Object.keys(b).indexOf(i.type)) ? (r = wt(".".concat(n.icon, ".").concat(b[i.type])),
            o(r),
            h(r, i.customClass, "icon"),
            vt(r, "swal2-animate-".concat(i.type, "-icon"), i.animation)) : tt('Unknown type! Expected "success", "error", "warning", "info" or "question", got "'.concat(i.type, '"')))
        }(t, r),
        function(t, r) {
            var u = lr();
            if (!r.imageUrl)
                return c(u);
            o(u);
            u.setAttribute("src", r.imageUrl);
            u.setAttribute("alt", r.imageAlt);
            yt(u, "width", r.imageWidth);
            yt(u, "height", r.imageHeight);
            u.className = n.image;
            h(u, r.customClass, "image");
            r.imageClass && i(u, r.imageClass)
        }(0, r),
        function(n, t) {
            var i = cr();
            pt(i, t.title || t.titleText);
            t.title && li(t.title, i);
            t.titleText && (i.innerText = t.titleText);
            h(i, t.customClass, "title")
        }(0, r),
        function(n, t) {
            var i = hi();
            i.innerHTML = t.closeButtonHtml;
            h(i, t.customClass, "closeButton");
            pt(i, t.showCloseButton);
            i.setAttribute("aria-label", t.closeButtonAriaLabel)
        }(0, r)
    }
    function gr(t, u) {
        !function(t, u) {
            var f = r();
            yt(f, "width", u.width);
            yt(f, "padding", u.padding);
            u.background && (f.style.background = u.background);
            f.className = n.popup;
            u.toast ? (i([document.documentElement, document.body], n["toast-shown"]),
            i(f, n.toast)) : i(f, n.modal);
            h(f, u.customClass, "popup");
            "string" == typeof u.customClass && i(f, u.customClass);
            vt(f, n.noanimation, !u.animation)
        }(0, u);
        nf(0, u);
        of(t, u);
        ef(t, u);
        bu(0, u),
        function(n, t) {
            var i = yr();
            pt(i, t.footer);
            t.footer && li(t.footer, i);
            h(i, t.customClass, "footer")
        }(0, u);
        "function" == typeof u.onRender && u.onRender(r())
    }
    function nu() {
        return it() && it().click()
    }
    function dt() {
        var t = r();
        t || nt.fire("");
        t = r();
        var u = bt()
          , f = it()
          , e = rt();
        o(u);
        o(f);
        i([t, u], n.loading);
        f.disabled = !0;
        e.disabled = !0;
        t.setAttribute("data-loading", !0);
        t.setAttribute("aria-busy", !0);
        t.focus()
    }
    function sf() {
        return new Promise(function(n) {
            var i = window.scrollX
              , r = window.scrollY;
            t.restoreFocusTimeout = setTimeout(function() {
                t.previousActiveElement && t.previousActiveElement.focus ? (t.previousActiveElement.focus(),
                t.previousActiveElement = null) : document.body && document.body.focus();
                n()
            }, 100);
            void 0 !== i && void 0 !== r && window.scrollTo(i, r)
        }
        )
    }
    function ru(n) {
        return Object.prototype.hasOwnProperty.call(uu, n)
    }
    function vi(n) {
        return cf[n]
    }
    function fu() {
        var i = u.innerParams.get(this)
          , t = u.domCache.get(this);
        i.showConfirmButton || (c(t.confirmButton),
        i.showCancelButton || c(t.actions));
        d([t.popup, t.actions], n.loading);
        t.popup.removeAttribute("aria-busy");
        t.popup.removeAttribute("data-loading");
        t.confirmButton.disabled = !1;
        t.cancelButton.disabled = !1
    }
    function vf() {
        null === ot.previousBodyPadding && document.body.scrollHeight > window.innerHeight && (ot.previousBodyPadding = parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")),
        document.body.style.paddingRight = ot.previousBodyPadding + function() {
            var n, t;
            return "ontouchstart"in window || navigator.msMaxTouchPoints ? 0 : (n = document.createElement("div"),
            n.style.width = "50px",
            n.style.height = "50px",
            n.style.overflow = "scroll",
            document.body.appendChild(n),
            t = n.offsetWidth - n.clientWidth,
            document.body.removeChild(n),
            t)
        }() + "px")
    }
    function eu() {
        return !!window.MSInputMethodContext && !!document.documentMode
    }
    function yi() {
        var n = l()
          , t = r();
        n.style.removeProperty("align-items");
        t.offsetTop < 0 && (n.style.alignItems = "flex-start")
    }
    function su(i, r, u, f) {
        u ? pi(i, f) : (sf().then(function() {
            return pi(i, f)
        }),
        t.keydownTarget.removeEventListener("keydown", t.keydownHandler, {
            capture: t.keydownListenerCapture
        }),
        t.keydownHandlerAdded = !1);
        r.parentNode && r.parentNode.removeChild(r);
        pr() && (null !== ot.previousBodyPadding && (document.body.style.paddingRight = ot.previousBodyPadding + "px",
        ot.previousBodyPadding = null),
        function() {
            if (lt(document.body, n.iosfix)) {
                var t = parseInt(document.body.style.top, 10);
                d(document.body, n.iosfix);
                document.body.style.top = "";
                document.body.scrollTop = -1 * t
            }
        }(),
        "undefined" != typeof window && eu() && window.removeEventListener("resize", yi),
        ft(document.body.children).forEach(function(n) {
            n.hasAttribute("data-previous-aria-hidden") ? (n.setAttribute("aria-hidden", n.getAttribute("data-previous-aria-hidden")),
            n.removeAttribute("data-previous-aria-hidden")) : n.removeAttribute("aria-hidden")
        }));
        d([document.documentElement, document.body], [n.shown, n["height-auto"], n["no-backdrop"], n["toast-shown"], n["toast-column"]])
    }
    function ni(t) {
        var f = r(), e, o;
        f && !lt(f, n.hide) && (e = u.innerParams.get(this),
        e && (o = gt.swalPromiseResolve.get(this),
        d(f, n.show),
        i(f, n.hide),
        function(n, t, i) {
            var u = l()
              , e = ht && hr(t)
              , r = i.onClose
              , f = i.onAfterClose;
            r !== null && typeof r == "function" && r(t);
            e ? cu(n, t, u, f) : su(n, u, kt(), f)
        }(this, f, e),
        o(t || {})))
    }
    function hu(n) {
        for (var t in n)
            n[t] = new WeakMap
    }
    function ti(n, t, i) {
        var r = u.domCache.get(n);
        t.forEach(function(n) {
            r[n].disabled = i
        })
    }
    function lu(n, t) {
        if (!n)
            return !1;
        if ("radio" === n.type)
            for (var r = n.parentNode.parentNode.querySelectorAll("input"), i = 0; i < r.length; i++)
                r[i].disabled = t;
        else
            n.disabled = t
    }
    function yf(n) {
        !function(n) {
            n.inputValidator || Object.keys(wi).forEach(function(t) {
                n.input === t && (n.inputValidator = wi[t])
            })
        }(n);
        n.showLoaderOnConfirm && !n.preConfirm && a("showLoaderOnConfirm is set to true, but preConfirm is not defined.\nshowLoaderOnConfirm should be used together with preConfirm, see usage example:\nhttps://sweetalert2.github.io/#ajax-request");
        n.animation = at(n.animation),
        function(n) {
            n.target && ("string" != typeof n.target || document.querySelector(n.target)) && ("string" == typeof n.target || n.target.appendChild) || (a('Target parameter is not valid, defaulting to "body"'),
            n.target = "body")
        }(n);
        "string" == typeof n.title && (n.title = n.title.split("\n").join("<br />"));
        du(n)
    }
    function vu(n, t) {
        n.removeEventListener(ht, vu);
        t.style.overflowY = "auto"
    }
    function pf(n) {
        var u = l()
          , i = r();
        "function" == typeof n.onBeforeOpen && n.onBeforeOpen(i);
        ie(u, i, n);
        ne(u, i);
        pr() && te(u, n.scrollbarPadding);
        kt() || t.previousActiveElement || (t.previousActiveElement = document.activeElement);
        "function" == typeof n.onOpen && setTimeout(function() {
            return n.onOpen(i)
        })
    }
    function wf(n, t) {
        "select" === t.input || "radio" === t.input ? re(n, t) : -1 !== ["text", "email", "number", "tel", "textarea"].indexOf(t.input) && ui(t.inputValue) && ue(n, t)
    }
    function bf(n, t) {
        n.disableButtons();
        t.input ? oe(n, t) : ki(n, t, !0)
    }
    function kf(n, t) {
        n.disableButtons();
        t(et.cancel)
    }
    function yu(n, t) {
        n.closePopup({
            value: t
        })
    }
    function df(n, t, i, u) {
        t.keydownTarget && t.keydownHandlerAdded && (t.keydownTarget.removeEventListener("keydown", t.keydownHandler, {
            capture: t.keydownListenerCapture
        }),
        t.keydownHandlerAdded = !1);
        i.toast || (t.keydownHandler = function(t) {
            return ye(n, t, i, u)
        }
        ,
        t.keydownTarget = i.keydownListenerCapture ? window : r(),
        t.keydownListenerCapture = i.keydownListenerCapture,
        t.keydownTarget.addEventListener("keydown", t.keydownHandler, {
            capture: t.keydownListenerCapture
        }),
        t.keydownHandlerAdded = !0)
    }
    function bi(n, t, i) {
        for (var u = ci(n.focusCancel), f = 0; f < u.length; f++)
            return (t += i) === u.length ? t = 0 : -1 === t && (t = u.length - 1),
            u[t].focus();
        r().focus()
    }
    function gf(n, t, i) {
        t.toast ? de(n, t, i) : (ge(n),
        no(n),
        to(n, t, i))
    }
    function g() {
        var r, f;
        if ("undefined" != typeof window) {
            "undefined" == typeof Promise && tt("This package requires a Promise library, please include a shim to enable it in this browser (See: https://github.com/sweetalert2/sweetalert2/wiki/Migration-from-SweetAlert-to-SweetAlert2#1-ie-support)");
            di = this;
            for (var t = arguments.length, i = new Array(t), n = 0; n < t; n++)
                i[n] = arguments[n];
            r = Object.freeze(this.constructor.argsToParams(i));
            Object.defineProperties(this, {
                params: {
                    value: r,
                    writable: !1,
                    enumerable: !0,
                    configurable: !0
                }
            });
            f = this._main(this.params);
            u.promise.set(this, f)
        }
    }
    var er = "SweetAlert2:", a = function(n) {
        console.warn("".concat(er, " ").concat(n))
    }, or = [], at = function(n) {
        return "function" == typeof n ? n() : n
    }, et = Object.freeze({
        cancel: "cancel",
        backdrop: "backdrop",
        close: "close",
        esc: "esc",
        timer: "timer"
    }), n = fr(["container", "shown", "height-auto", "iosfix", "popup", "modal", "no-backdrop", "toast", "toast-shown", "toast-column", "fade", "show", "hide", "noanimation", "close", "title", "header", "content", "actions", "confirm", "cancel", "footer", "icon", "image", "input", "file", "range", "select", "radio", "checkbox", "label", "textarea", "inputerror", "validation-message", "progress-steps", "active-progress-step", "progress-step", "progress-step-line", "loading", "styled", "top", "top-start", "top-end", "top-left", "top-right", "center", "center-start", "center-end", "center-left", "center-right", "bottom", "bottom-start", "bottom-end", "bottom-left", "bottom-right", "grow-row", "grow-column", "grow-fullscreen", "rtl"]), b = fr(["success", "warning", "info", "question", "error"]), ot = {
        previousBodyPadding: null
    }, br, i = function(n, t) {
        vt(n, t, !0)
    }, d = function(n, t) {
        vt(n, t, !1)
    }, e = function(n, t) {
        for (var i = 0; i < n.childNodes.length; i++)
            if (lt(n.childNodes[i], t))
                return n.childNodes[i]
    }, kt = function() {
        return document.body.classList.contains(n["toast-shown"])
    }, ku = '\n <div aria-labelledby="'.concat(n.title, '" aria-describedby="').concat(n.content, '" class="').concat(n.popup, '" tabindex="-1">\n   <div class="').concat(n.header, '">\n     <ul class="').concat(n["progress-steps"], '"><\/ul>\n     <div class="').concat(n.icon, " ").concat(b.error, '">\n       <span class="swal2-x-mark"><span class="swal2-x-mark-line-left"><\/span><span class="swal2-x-mark-line-right"><\/span><\/span>\n     <\/div>\n     <div class="').concat(n.icon, " ").concat(b.question, '"><\/div>\n     <div class="').concat(n.icon, " ").concat(b.warning, '"><\/div>\n     <div class="').concat(n.icon, " ").concat(b.info, '"><\/div>\n     <div class="').concat(n.icon, " ").concat(b.success, '">\n       <div class="swal2-success-circular-line-left"><\/div>\n       <span class="swal2-success-line-tip"><\/span> <span class="swal2-success-line-long"><\/span>\n       <div class="swal2-success-ring"><\/div> <div class="swal2-success-fix"><\/div>\n       <div class="swal2-success-circular-line-right"><\/div>\n     <\/div>\n     <img class="').concat(n.image, '" />\n     <h2 class="').concat(n.title, '" id="').concat(n.title, '"><\/h2>\n     <button type="button" class="').concat(n.close, '"><\/button>\n   <\/div>\n   <div class="').concat(n.content, '">\n     <div id="').concat(n.content, '"><\/div>\n     <input class="').concat(n.input, '" />\n     <input type="file" class="').concat(n.file, '" />\n     <div class="').concat(n.range, '">\n       <input type="range" />\n       <output><\/output>\n     <\/div>\n     <select class="').concat(n.select, '"><\/select>\n     <div class="').concat(n.radio, '"><\/div>\n     <label for="').concat(n.checkbox, '" class="').concat(n.checkbox, '">\n       <input type="checkbox" />\n       <span class="').concat(n.label, '"><\/span>\n     <\/label>\n     <textarea class="').concat(n.textarea, '"><\/textarea>\n     <div class="').concat(n["validation-message"], '" id="').concat(n["validation-message"], '"><\/div>\n   <\/div>\n   <div class="').concat(n.actions, '">\n     <button type="button" class="').concat(n.confirm, '">OK<\/button>\n     <button type="button" class="').concat(n.cancel, '">Cancel<\/button>\n   <\/div>\n   <div class="').concat(n.footer, '">\n   <\/div>\n <\/div>\n').replace(/(^|\n)\s*/g, ""), du = function(t) {
        var u, o;
        (function() {
            var t = l();
            t && (t.parentNode.removeChild(t),
            d([document.documentElement, document.body], [n["no-backdrop"], n["toast-shown"], n["has-column"]]))
        }(),
        wr()) ? tt("SweetAlert2 requires document to initialize") : (u = document.createElement("div"),
        u.className = n.container,
        u.innerHTML = ku,
        o = function(n) {
            return "string" == typeof n ? document.querySelector(n) : n
        }(t.target),
        o.appendChild(u),
        function(n) {
            var t = r();
            t.setAttribute("role", n.toast ? "alert" : "dialog");
            t.setAttribute("aria-live", n.toast ? "polite" : "assertive");
            n.toast || t.setAttribute("aria-modal", "true")
        }(t),
        function(t) {
            "rtl" === window.getComputedStyle(t).direction && i(l(), n.rtl)
        }(o),
        function() {
            var t = f()
              , r = e(t, n.input)
              , u = e(t, n.file)
              , i = t.querySelector(".".concat(n.range, " input"))
              , o = t.querySelector(".".concat(n.range, " output"))
              , s = e(t, n.select)
              , h = t.querySelector(".".concat(n.checkbox, " input"))
              , c = e(t, n.textarea);
            r.oninput = ut;
            u.onchange = ut;
            s.onchange = ut;
            h.onchange = ut;
            c.oninput = ut;
            i.oninput = function(n) {
                ut(n);
                o.value = i.value
            }
            ;
            i.onchange = function(n) {
                ut(n);
                i.nextSibling.value = i.value
            }
        }())
    }, gu = function(n, t) {
        if (n.innerHTML = "",
        0 in t)
            for (var i = 0; i in t; i++)
                n.appendChild(t[i].cloneNode(!0));
        else
            n.appendChild(t.cloneNode(!0))
    }, ht = function() {
        var i, n, t;
        if (wr())
            return !1;
        i = document.createElement("div");
        n = {
            WebkitAnimation: "webkitAnimationEnd",
            OAnimation: "oAnimationEnd oanimationend",
            animation: "animationend"
        };
        for (t in n)
            if (Object.prototype.hasOwnProperty.call(n, t) && void 0 !== i.style[t])
                return n[t];
        return !1
    }(), u = {
        promise: new WeakMap,
        innerParams: new WeakMap,
        domCache: new WeakMap
    }, tf = ["input", "file", "range", "select", "radio", "checkbox", "textarea"], rf = function(n) {
        if (!s[n.input])
            return tt('Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "'.concat(n.input, '"'));
        var t = s[n.input](n);
        o(t);
        setTimeout(function() {
            sr(t)
        })
    }, uf = function(n, t) {
        var r = fi(f(), n), i;
        if (r)
            for (i in function(n) {
                for (var i, t = 0; t < n.attributes.length; t++)
                    i = n.attributes[t].name,
                    -1 === ["type", "value", "style"].indexOf(i) && n.removeAttribute(i)
            }(r),
            t)
                "range" === n && "placeholder" === i || r.setAttribute(i, t[i])
    }, ff = function(n, t, r) {
        n.className = t;
        r.inputClass && i(n, r.inputClass);
        r.customClass && i(n, r.customClass.input)
    }, s = {}, tu, iu, ou, gt, cu, pi, au, wi, nt;
    s.text = s.email = s.password = s.number = s.tel = s.url = function(t) {
        var i = e(f(), n.input);
        return "string" == typeof t.inputValue || "number" == typeof t.inputValue ? i.value = t.inputValue : ui(t.inputValue) || a('Unexpected type of inputValue! Expected "string", "number" or "Promise", got "'.concat(w(t.inputValue), '"')),
        ai(i, t),
        i.type = t.input,
        i
    }
    ;
    s.file = function(t) {
        var i = e(f(), n.file);
        return ai(i, t),
        i.type = t.input,
        i
    }
    ;
    s.range = function(t) {
        var i = e(f(), n.range)
          , r = i.querySelector("input")
          , u = i.querySelector("output");
        return r.value = t.inputValue,
        r.type = t.input,
        u.value = t.inputValue,
        i
    }
    ;
    s.select = function(t) {
        var r = e(f(), n.select), i;
        return (r.innerHTML = "",
        t.inputPlaceholder) && (i = document.createElement("option"),
        i.innerHTML = t.inputPlaceholder,
        i.value = "",
        i.disabled = !0,
        i.selected = !0,
        r.appendChild(i)),
        r
    }
    ;
    s.radio = function() {
        var t = e(f(), n.radio);
        return t.innerHTML = "",
        t
    }
    ;
    s.checkbox = function(t) {
        var r = e(f(), n.checkbox)
          , i = fi(f(), "checkbox");
        return i.type = "checkbox",
        i.value = 1,
        i.id = n.checkbox,
        i.checked = Boolean(t.inputValue),
        r.querySelector("span").innerHTML = t.inputPlaceholder,
        r
    }
    ;
    s.textarea = function(t) {
        var i = e(f(), n.textarea), u, o;
        return (i.value = t.inputValue,
        ai(i, t),
        "MutationObserver"in window) && (u = parseInt(window.getComputedStyle(r()).width),
        o = parseInt(window.getComputedStyle(r()).paddingLeft) + parseInt(window.getComputedStyle(r()).paddingRight),
        new MutationObserver(function() {
            var n = i.offsetWidth + o;
            r().style.width = u < n ? n + "px" : null
        }
        ).observe(i, {
            attributes: !0,
            attributeFilter: ["style"]
        })),
        i
    }
    ;
    tu = function() {
        for (var t = ei(), n = 0; n < t.length; n++)
            c(t[n])
    }
    ;
    iu = function() {
        for (var t = r(), u = window.getComputedStyle(t).getPropertyValue("background-color"), i = t.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix"), n = 0; n < i.length; n++)
            i[n].style.backgroundColor = u
    }
    ;
    var p = []
      , t = {}
      , uu = {
        title: "",
        titleText: "",
        text: "",
        html: "",
        footer: "",
        type: null,
        toast: !1,
        customClass: "",
        customContainerClass: "",
        target: "body",
        backdrop: !0,
        animation: !0,
        heightAuto: !0,
        allowOutsideClick: !0,
        allowEscapeKey: !0,
        allowEnterKey: !0,
        stopKeydownPropagation: !0,
        keydownListenerCapture: !1,
        showConfirmButton: !0,
        showCancelButton: !1,
        preConfirm: null,
        confirmButtonText: "OK",
        confirmButtonAriaLabel: "",
        confirmButtonColor: null,
        confirmButtonClass: "",
        cancelButtonText: "Cancel",
        cancelButtonAriaLabel: "",
        cancelButtonColor: null,
        cancelButtonClass: "",
        buttonsStyling: !0,
        reverseButtons: !1,
        focusConfirm: !0,
        focusCancel: !1,
        showCloseButton: !1,
        closeButtonHtml: "&times;",
        closeButtonAriaLabel: "Close this dialog",
        showLoaderOnConfirm: !1,
        imageUrl: null,
        imageWidth: null,
        imageHeight: null,
        imageAlt: "",
        imageClass: "",
        timer: null,
        width: null,
        padding: null,
        background: null,
        input: null,
        inputPlaceholder: "",
        inputValue: "",
        inputOptions: {},
        inputAutoTrim: !0,
        inputClass: "",
        inputAttributes: {},
        inputValidator: null,
        validationMessage: null,
        grow: !1,
        position: "center",
        progressSteps: [],
        currentProgressStep: null,
        progressStepsDistance: null,
        onBeforeOpen: null,
        onOpen: null,
        onRender: null,
        onClose: null,
        onAfterClose: null,
        scrollbarPadding: !0
    }
      , hf = ["title", "titleText", "text", "html", "type", "customClass", "showConfirmButton", "showCancelButton", "confirmButtonText", "confirmButtonAriaLabel", "confirmButtonColor", "confirmButtonClass", "cancelButtonText", "cancelButtonAriaLabel", "cancelButtonColor", "cancelButtonClass", "buttonsStyling", "reverseButtons", "imageUrl", "imageWidth", "imageHeigth", "imageAlt", "imageClass", "progressSteps", "currentProgressStep"]
      , cf = {
        customContainerClass: "customClass",
        confirmButtonClass: "customClass",
        cancelButtonClass: "customClass",
        imageClass: "customClass",
        inputClass: "customClass"
    }
      , lf = ["allowOutsideClick", "allowEnterKey", "backdrop", "focusConfirm", "focusCancel", "heightAuto", "keydownListenerCapture"]
      , af = Object.freeze({
        isValidParameter: ru,
        isUpdatableParameter: function(n) {
            return -1 !== hf.indexOf(n)
        },
        isDeprecatedParameter: vi,
        argsToParams: function(n) {
            var t = {};
            switch (w(n[0])) {
            case "object":
                y(t, n[0]);
                break;
            default:
                ["title", "html", "type"].forEach(function(i, r) {
                    switch (w(n[r])) {
                    case "string":
                        t[i] = n[r];
                        break;
                    case "undefined":
                        break;
                    default:
                        tt("Unexpected type of ".concat(i, '! Expected "string", got ').concat(w(n[r])))
                    }
                })
            }
            return t
        },
        isVisible: function() {
            return k(r())
        },
        clickConfirm: nu,
        clickCancel: function() {
            return rt() && rt().click()
        },
        getContainer: l,
        getPopup: r,
        getTitle: cr,
        getContent: f,
        getImage: lr,
        getIcon: oi,
        getIcons: ei,
        getCloseButton: hi,
        getActions: bt,
        getConfirmButton: it,
        getCancelButton: rt,
        getHeader: vr,
        getFooter: yr,
        getFocusableElements: ci,
        getValidationMessage: si,
        isLoading: function() {
            return r().hasAttribute("data-loading")
        },
        fire: function() {
            for (var t = arguments.length, i = new Array(t), n = 0; n < t; n++)
                i[n] = arguments[n];
            return ir(this, i)
        },
        mixin: function(n) {
            return function(t) {
                function i() {
                    return gi(this, i),
                    wu(this, ct(i).apply(this, arguments))
                }
                return function(n, t) {
                    if ("function" != typeof t && null !== t)
                        throw new TypeError("Super expression must either be null or a function");
                    n.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: n,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && ri(n, t)
                }(i, t),
                tr(i, [{
                    key: "_main",
                    value: function(t) {
                        return rr(ct(i.prototype), "_main", this).call(this, y({}, n, t))
                    }
                }]),
                i
            }(this)
        },
        queue: function(n) {
            function i(n, t) {
                p = [];
                document.body.removeAttribute("data-swal2-queue-step");
                n(t)
            }
            var r = this, t;
            return p = n,
            t = [],
            new Promise(function(n) {
                !function u(f, e) {
                    f < p.length ? (document.body.setAttribute("data-swal2-queue-step", f),
                    r.fire(p[f]).then(function(r) {
                        void 0 !== r.value ? (t.push(r.value),
                        u(f + 1, e)) : i(n, {
                            dismiss: r.dismiss
                        })
                    })) : i(n, {
                        value: t
                    })
                }(0)
            }
            )
        },
        getQueueStep: function() {
            return document.body.getAttribute("data-swal2-queue-step")
        },
        insertQueueStep: function(n, t) {
            return t && t < p.length ? p.splice(t, 0, n) : p.push(n)
        },
        deleteQueueStep: function(n) {
            void 0 !== p[n] && p.splice(n, 1)
        },
        showLoading: dt,
        enableLoading: dt,
        getTimerLeft: function() {
            return t.timeout && t.timeout.getTimerLeft()
        },
        stopTimer: function() {
            return t.timeout && t.timeout.stop()
        },
        resumeTimer: function() {
            return t.timeout && t.timeout.start()
        },
        toggleTimer: function() {
            var n = t.timeout;
            return n && (n.running ? n.stop() : n.start())
        },
        increaseTimer: function(n) {
            return t.timeout && t.timeout.increase(n)
        },
        isTimerRunning: function() {
            return t.timeout && t.timeout.isRunning()
        }
    });
    ou = function() {
        var t, n = l();
        n.ontouchstart = function(i) {
            t = i.target === n || !function(n) {
                return !!(n.scrollHeight > n.clientHeight)
            }(n) && "INPUT" !== i.target.tagName
        }
        ;
        n.ontouchmove = function(n) {
            t && (n.preventDefault(),
            n.stopPropagation())
        }
    }
    ;
    gt = {
        swalPromiseResolve: new WeakMap
    };
    cu = function(n, i, r, u) {
        t.swalCloseEventFinishedCallback = su.bind(null, n, r, kt(), u);
        i.addEventListener(ht, function(n) {
            n.target === i && (t.swalCloseEventFinishedCallback(),
            delete t.swalCloseEventFinishedCallback)
        })
    }
    ;
    pi = function(n, i) {
        setTimeout(function() {
            null !== i && "function" == typeof i && i();
            r() || function(n) {
                delete n.params;
                delete t.keydownHandler;
                delete t.keydownTarget;
                hu(u);
                hu(gt)
            }(n)
        })
    }
    ;
    au = function() {
        function n(t, i) {
            gi(this, n);
            this.callback = t;
            this.remaining = i;
            this.running = !1;
            this.start()
        }
        return tr(n, [{
            key: "start",
            value: function() {
                return this.running || (this.running = !0,
                this.started = new Date,
                this.id = setTimeout(this.callback, this.remaining)),
                this.remaining
            }
        }, {
            key: "stop",
            value: function() {
                return this.running && (this.running = !1,
                clearTimeout(this.id),
                this.remaining -= new Date - this.started),
                this.remaining
            }
        }, {
            key: "increase",
            value: function(n) {
                var t = this.running;
                return t && this.stop(),
                this.remaining += n,
                t && this.start(),
                this.remaining
            }
        }, {
            key: "getTimerLeft",
            value: function() {
                return this.running && (this.stop(),
                this.start()),
                this.remaining
            }
        }, {
            key: "isRunning",
            value: function() {
                return this.running
            }
        }]),
        n
    }();
    wi = {
        email: function(n, t) {
            return /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(n) ? Promise.resolve() : Promise.resolve(t || "Invalid email address")
        },
        url: function(n, t) {
            return /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(n) ? Promise.resolve() : Promise.resolve(t || "Invalid URL")
        }
    };
    var ne = function(n, t) {
        ht && hr(t) ? (n.style.overflowY = "hidden",
        t.addEventListener(ht, vu.bind(null, t, n))) : n.style.overflowY = "auto"
    }, te = function(t, r) {
        !function() {
            if (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream && !lt(document.body, n.iosfix)) {
                var t = document.body.scrollTop;
                document.body.style.top = -1 * t + "px";
                i(document.body, n.iosfix);
                ou()
            }
        }();
        "undefined" != typeof window && eu() && (yi(),
        window.addEventListener("resize", yi));
        ft(document.body.children).forEach(function(n) {
            n === l() || function(n, t) {
                if ("function" == typeof n.contains)
                    return n.contains(t)
            }(n, l()) || (n.hasAttribute("aria-hidden") && n.setAttribute("data-previous-aria-hidden", n.getAttribute("aria-hidden")),
            n.setAttribute("aria-hidden", "true"))
        });
        r && vf();
        setTimeout(function() {
            t.scrollTop = 0
        })
    }, ie = function(t, r, u) {
        u.animation && (i(r, n.show),
        i(t, n.fade));
        o(r);
        i([document.documentElement, document.body, t], n.shown);
        u.heightAuto && u.backdrop && !u.toast && i([document.documentElement, document.body], n["height-auto"])
    }, re = function(n, t) {
        function i(n) {
            return fe[t.input](r, ee(n), t)
        }
        var r = f();
        ui(t.inputOptions) ? (dt(),
        t.inputOptions.then(function(t) {
            n.hideLoading();
            i(t)
        })) : "object" === w(t.inputOptions) ? i(t.inputOptions) : tt("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(w(t.inputOptions)))
    }, ue = function(n, t) {
        var i = n.getInput();
        c(i);
        t.inputValue.then(function(r) {
            i.value = "number" === t.input ? parseFloat(r) || 0 : r + "";
            o(i);
            i.focus();
            n.hideLoading()
        }).catch(function(t) {
            tt("Error in inputValue promise: " + t);
            i.value = "";
            o(i);
            i.focus();
            n.hideLoading()
        })
    }, fe = {
        select: function(t, i, r) {
            var u = e(t, n.select);
            i.forEach(function(n) {
                var i = n[0]
                  , f = n[1]
                  , t = document.createElement("option");
                t.value = i;
                t.innerHTML = f;
                r.inputValue.toString() === i.toString() && (t.selected = !0);
                u.appendChild(t)
            });
            u.focus()
        },
        radio: function(t, i, r) {
            var f = e(t, n.radio), u;
            i.forEach(function(t) {
                var o = t[0], s = t[1], i = document.createElement("input"), e = document.createElement("label"), u;
                i.type = "radio";
                i.name = n.radio;
                i.value = o;
                r.inputValue.toString() === o.toString() && (i.checked = !0);
                u = document.createElement("span");
                u.innerHTML = s;
                u.className = n.label;
                e.appendChild(i);
                e.appendChild(u);
                f.appendChild(e)
            });
            u = f.querySelectorAll("input");
            u.length && u[0].focus()
        }
    }, ee = function(n) {
        var t = [];
        return "undefined" != typeof Map && n instanceof Map ? n.forEach(function(n, i) {
            t.push([i, n])
        }) : Object.keys(n).forEach(function(i) {
            t.push([i, n[i]])
        }),
        t
    }, oe = function(n, t) {
        var i = se(n, t);
        t.inputValidator ? (n.disableInput(),
        Promise.resolve().then(function() {
            return t.inputValidator(i, t.validationMessage)
        }).then(function(r) {
            n.enableButtons();
            n.enableInput();
            r ? n.showValidationMessage(r) : ki(n, t, i)
        })) : n.getInput().checkValidity() ? ki(n, t, i) : (n.enableButtons(),
        n.showValidationMessage(t.validationMessage))
    }, ki = function(n, t, i) {
        (t.showLoaderOnConfirm && dt(),
        t.preConfirm) ? (n.resetValidationMessage(),
        Promise.resolve().then(function() {
            return t.preConfirm(i, t.validationMessage)
        }).then(function(t) {
            k(si()) || !1 === t ? n.hideLoading() : yu(n, void 0 === t ? i : t)
        })) : yu(n, i)
    }, se = function(n, t) {
        var i = n.getInput();
        if (!i)
            return null;
        switch (t.input) {
        case "checkbox":
            return he(i);
        case "radio":
            return ce(i);
        case "file":
            return le(i);
        default:
            return t.inputAutoTrim ? i.value.trim() : i.value
        }
    }, he = function(n) {
        return n.checked ? 1 : 0
    }, ce = function(n) {
        return n.checked ? n.value : null
    }, le = function(n) {
        return n.files.length ? n.files[0] : null
    }, ae = ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Left", "Right", "Up", "Down"], ve = ["Escape", "Esc"], ye = function(n, t, i, r) {
        i.stopKeydownPropagation && t.stopPropagation();
        "Enter" === t.key ? pe(n, t, i) : "Tab" === t.key ? we(t, i) : -1 !== ae.indexOf(t.key) ? be() : -1 !== ve.indexOf(t.key) && ke(t, i, r)
    }, pe = function(n, t, i) {
        if (!t.isComposing && t.target && n.getInput() && t.target.outerHTML === n.getInput().outerHTML) {
            if (-1 !== ["textarea", "file"].indexOf(i.input))
                return;
            nu();
            t.preventDefault()
        }
    }, we = function(n, t) {
        for (var f = n.target, u = ci(t.focusCancel), r = -1, i = 0; i < u.length; i++)
            if (f === u[i]) {
                r = i;
                break
            }
        n.shiftKey ? bi(t, r, -1) : bi(t, r, 1);
        n.stopPropagation();
        n.preventDefault()
    }, be = function() {
        var n = it()
          , t = rt();
        document.activeElement === n && k(t) ? t.focus() : document.activeElement === t && k(n) && n.focus()
    }, ke = function(n, t, i) {
        at(t.allowEscapeKey) && (n.preventDefault(),
        i(et.esc))
    }, de = function(n, t, i) {
        n.popup.onclick = function() {
            t.showConfirmButton || t.showCancelButton || t.showCloseButton || t.input || i(et.close)
        }
    }, ii = !1, ge = function(n) {
        n.popup.onmousedown = function() {
            n.container.onmouseup = function(t) {
                n.container.onmouseup = void 0;
                t.target === n.container && (ii = !0)
            }
        }
    }, no = function(n) {
        n.container.onmousedown = function() {
            n.popup.onmouseup = function(t) {
                n.popup.onmouseup = void 0;
                (t.target === n.popup || n.popup.contains(t.target)) && (ii = !0)
            }
        }
    }, to = function(n, t, i) {
        n.container.onclick = function(r) {
            ii ? ii = !1 : r.target === n.container && at(t.allowOutsideClick) && i(et.backdrop)
        }
    }, io = function(n, t, i) {
        t.timer && (n.timeout = new au(function() {
            i("timer");
            delete n.timeout
        }
        ,t.timer))
    }, ro = function(n, t) {
        if (!t.toast)
            return at(t.allowEnterKey) ? t.focusCancel && k(n.cancelButton) ? n.cancelButton.focus() : t.focusConfirm && k(n.confirmButton) ? n.confirmButton.focus() : void bi(t, -1, 1) : uo()
    }, uo = function() {
        document.activeElement && "function" == typeof document.activeElement.blur && document.activeElement.blur()
    }, di, pu = Object.freeze({
        hideLoading: fu,
        disableLoading: fu,
        getInput: function(n) {
            var i = u.innerParams.get(n || this)
              , t = u.domCache.get(n || this);
            return t ? fi(t.content, i.input) : null
        },
        close: ni,
        closePopup: ni,
        closeModal: ni,
        closeToast: ni,
        enableButtons: function() {
            ti(this, ["confirmButton", "cancelButton"], !1)
        },
        disableButtons: function() {
            ti(this, ["confirmButton", "cancelButton"], !0)
        },
        enableConfirmButton: function() {
            st("Swal.enableConfirmButton()", "Swal.getConfirmButton().removeAttribute('disabled')");
            ti(this, ["confirmButton"], !1)
        },
        disableConfirmButton: function() {
            st("Swal.disableConfirmButton()", "Swal.getConfirmButton().setAttribute('disabled', '')");
            ti(this, ["confirmButton"], !0)
        },
        enableInput: function() {
            return lu(this.getInput(), !1)
        },
        disableInput: function() {
            return lu(this.getInput(), !0)
        },
        showValidationMessage: function(t) {
            var f = u.domCache.get(this), e, r;
            f.validationMessage.innerHTML = t;
            e = window.getComputedStyle(f.popup);
            f.validationMessage.style.marginLeft = "-".concat(e.getPropertyValue("padding-left"));
            f.validationMessage.style.marginRight = "-".concat(e.getPropertyValue("padding-right"));
            o(f.validationMessage);
            r = this.getInput();
            r && (r.setAttribute("aria-invalid", !0),
            r.setAttribute("aria-describedBy", n["validation-message"]),
            sr(r),
            i(r, n.inputerror))
        },
        resetValidationMessage: function() {
            var i = u.domCache.get(this), t;
            i.validationMessage && c(i.validationMessage);
            t = this.getInput();
            t && (t.removeAttribute("aria-invalid"),
            t.removeAttribute("aria-describedBy"),
            d(t, n.inputerror))
        },
        getProgressSteps: function() {
            return st("Swal.getProgressSteps()", "const swalInstance = Swal.fire({progressSteps: ['1', '2', '3']}); const progressSteps = swalInstance.params.progressSteps"),
            u.innerParams.get(this).progressSteps
        },
        setProgressSteps: function(n) {
            st("Swal.setProgressSteps()", "Swal.update()");
            var t = y({}, u.innerParams.get(this), {
                progressSteps: n
            });
            dr(0, t);
            u.innerParams.set(this, t)
        },
        showProgressSteps: function() {
            var n = u.domCache.get(this);
            o(n.progressSteps)
        },
        hideProgressSteps: function() {
            var n = u.domCache.get(this);
            c(n.progressSteps)
        },
        _main: function(e) {
            var o, s;
            return !function(n) {
                var t, i, r, u;
                for (t in n)
                    ru(u = t) || a('Unknown parameter "'.concat(u, '"')),
                    n.toast && (r = t,
                    -1 !== lf.indexOf(r) && a('The parameter "'.concat(r, '" is incompatible with toasts'))),
                    vi(i = void 0) && st(i, vi(i))
            }(e),
            r() && t.swalCloseEventFinishedCallback && (t.swalCloseEventFinishedCallback(),
            delete t.swalCloseEventFinishedCallback),
            t.deferDisposalTimer && (clearTimeout(t.deferDisposalTimer),
            delete t.deferDisposalTimer),
            o = y({}, uu, e),
            yf(o),
            Object.freeze(o),
            t.timeout && (t.timeout.stop(),
            delete t.timeout),
            clearTimeout(t.restoreFocusTimeout),
            s = function(n) {
                var t = {
                    popup: r(),
                    container: l(),
                    content: f(),
                    actions: bt(),
                    confirmButton: it(),
                    cancelButton: rt(),
                    closeButton: hi(),
                    validationMessage: si(),
                    progressSteps: ar()
                };
                return u.domCache.set(n, t),
                t
            }(this),
            gr(this, o),
            u.innerParams.set(this, o),
            function(r, u, f) {
                return new Promise(function(e) {
                    var o = function(n) {
                        r.closePopup({
                            dismiss: n
                        })
                    };
                    gt.swalPromiseResolve.set(r, e);
                    io(t, f, o);
                    u.confirmButton.onclick = function() {
                        return bf(r, f)
                    }
                    ;
                    u.cancelButton.onclick = function() {
                        return kf(r, o)
                    }
                    ;
                    u.closeButton.onclick = function() {
                        return o(et.close)
                    }
                    ;
                    gf(u, f, o);
                    df(r, t, f, o);
                    f.toast && (f.input || f.footer || f.showCloseButton) ? i(document.body, n["toast-column"]) : d(document.body, n["toast-column"]);
                    wf(r, f);
                    pf(f);
                    ro(u, f);
                    u.container.scrollTop = 0
                }
                )
            }(this, s, o)
        },
        update: function(n) {
            var i = {}, t;
            Object.keys(n).forEach(function(t) {
                nt.isUpdatableParameter(t) ? i[t] = n[t] : a('Invalid parameter to update: "'.concat(t, '". Updatable params are listed here: https://github.com/sweetalert2/sweetalert2/blob/master/src/utils/params.js'))
            });
            t = y({}, u.innerParams.get(this), i);
            gr(this, t);
            u.innerParams.set(this, t);
            Object.defineProperties(this, {
                params: {
                    value: y({}, this.params, n),
                    writable: !1,
                    enumerable: !0
                }
            })
        }
    });
    return g.prototype.then = function(n) {
        return u.promise.get(this).then(n)
    }
    ,
    g.prototype.finally = function(n) {
        return u.promise.get(this).finally(n)
    }
    ,
    y(g.prototype, pu),
    y(g, af),
    Object.keys(pu).forEach(function(n) {
        g[n] = function() {
            var t;
            if (di)
                return (t = di)[n].apply(t, arguments)
        }
    }),
    g.DismissReason = et,
    g.version = "8.17.1",
    nt = g,
    nt.default = nt
});
void 0 !== this && this.Sweetalert2 && (this.swal = this.sweetAlert = this.Swal = this.SweetAlert = this.Sweetalert2);
"undefined" != typeof document && function(n, t) {
    var i = n.createElement("style");
    if (n.getElementsByTagName("head")[0].appendChild(i),
    i.styleSheet)
        i.styleSheet.disabled || (i.styleSheet.cssText = t);
    else
        try {
            i.innerHTML = t
        } catch (n) {
            i.innerText = t
        }
}(document, '@charset "UTF-8";@-webkit-keyframes swal2-show{0%{transform:scale(.7)}45%{transform:scale(1.05)}80%{transform:scale(.95)}100%{transform:scale(1)}}@keyframes swal2-show{0%{transform:scale(.7)}45%{transform:scale(1.05)}80%{transform:scale(.95)}100%{transform:scale(1)}}@-webkit-keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(.5);opacity:0}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(.5);opacity:0}}@-webkit-keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.875em;width:1.5625em}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.875em;width:1.5625em}}@-webkit-keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@-webkit-keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@-webkit-keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(.4);opacity:0}50%{margin-top:1.625em;transform:scale(.4);opacity:0}80%{margin-top:-.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(.4);opacity:0}50%{margin-top:1.625em;transform:scale(.4);opacity:0}80%{margin-top:-.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@-webkit-keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0);opacity:1}}body.swal2-toast-shown .swal2-container{background-color:transparent}body.swal2-toast-shown .swal2-container.swal2-shown{background-color:transparent}body.swal2-toast-shown .swal2-container.swal2-top{top:0;right:auto;bottom:auto;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{top:0;right:0;bottom:auto;left:auto}body.swal2-toast-shown .swal2-container.swal2-top-left,body.swal2-toast-shown .swal2-container.swal2-top-start{top:0;right:auto;bottom:auto;left:0}body.swal2-toast-shown .swal2-container.swal2-center-left,body.swal2-toast-shown .swal2-container.swal2-center-start{top:50%;right:auto;bottom:auto;left:0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{top:50%;right:auto;bottom:auto;left:50%;transform:translate(-50%,-50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{top:50%;right:0;bottom:auto;left:auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-left,body.swal2-toast-shown .swal2-container.swal2-bottom-start{top:auto;right:auto;bottom:0;left:0}body.swal2-toast-shown .swal2-container.swal2-bottom{top:auto;right:auto;bottom:0;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{top:auto;right:0;bottom:0;left:auto}body.swal2-toast-column .swal2-toast{flex-direction:column;align-items:stretch}body.swal2-toast-column .swal2-toast .swal2-actions{flex:1;align-self:stretch;height:2.2em;margin-top:.3125em}body.swal2-toast-column .swal2-toast .swal2-loading{justify-content:center}body.swal2-toast-column .swal2-toast .swal2-input{height:2em;margin:.3125em auto;font-size:1em}body.swal2-toast-column .swal2-toast .swal2-validation-message{font-size:1em}.swal2-popup.swal2-toast{flex-direction:row;align-items:center;width:auto;padding:.625em;overflow-y:hidden;box-shadow:0 0 .625em #d9d9d9}.swal2-popup.swal2-toast .swal2-header{flex-direction:row}.swal2-popup.swal2-toast .swal2-title{flex-grow:1;justify-content:flex-start;margin:0 .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{position:static;width:.8em;height:.8em;line-height:.8}.swal2-popup.swal2-toast .swal2-content{justify-content:flex-start;font-size:1em}.swal2-popup.swal2-toast .swal2-icon{width:2em;min-width:2em;height:2em;margin:0}.swal2-popup.swal2-toast .swal2-icon::before{display:flex;align-items:center;font-size:2em;font-weight:700}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-popup.swal2-toast .swal2-icon::before{font-size:.25em}}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{flex-basis:auto!important;width:auto;height:auto;margin:0 .3125em}.swal2-popup.swal2-toast .swal2-styled{margin:0 .3125em;padding:.3125em .625em;font-size:1em}.swal2-popup.swal2-toast .swal2-styled:focus{box-shadow:0 0 0 .0625em #fff,0 0 0 .125em rgba(50,100,150,.4)}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;transform:rotate(45deg);border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.8em;left:-.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast.swal2-show{-webkit-animation:swal2-toast-show .5s;animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{-webkit-animation:swal2-toast-hide .1s forwards;animation:swal2-toast-hide .1s forwards}.swal2-popup.swal2-toast .swal2-animate-success-icon .swal2-success-line-tip{-webkit-animation:swal2-toast-animate-success-line-tip .75s;animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-animate-success-icon .swal2-success-line-long{-webkit-animation:swal2-toast-animate-success-line-long .75s;animation:swal2-toast-animate-success-line-long .75s}@-webkit-keyframes swal2-toast-show{0%{transform:translateY(-.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0)}}@keyframes swal2-toast-show{0%{transform:translateY(-.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0)}}@-webkit-keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@-webkit-keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@-webkit-keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto!important}body.swal2-no-backdrop .swal2-shown{top:auto;right:auto;bottom:auto;left:auto;max-width:calc(100% - .625em * 2);background-color:transparent}body.swal2-no-backdrop .swal2-shown>.swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}body.swal2-no-backdrop .swal2-shown.swal2-top{top:0;left:50%;transform:translateX(-50%)}body.swal2-no-backdrop .swal2-shown.swal2-top-left,body.swal2-no-backdrop .swal2-shown.swal2-top-start{top:0;left:0}body.swal2-no-backdrop .swal2-shown.swal2-top-end,body.swal2-no-backdrop .swal2-shown.swal2-top-right{top:0;right:0}body.swal2-no-backdrop .swal2-shown.swal2-center{top:50%;left:50%;transform:translate(-50%,-50%)}body.swal2-no-backdrop .swal2-shown.swal2-center-left,body.swal2-no-backdrop .swal2-shown.swal2-center-start{top:50%;left:0;transform:translateY(-50%)}body.swal2-no-backdrop .swal2-shown.swal2-center-end,body.swal2-no-backdrop .swal2-shown.swal2-center-right{top:50%;right:0;transform:translateY(-50%)}body.swal2-no-backdrop .swal2-shown.swal2-bottom{bottom:0;left:50%;transform:translateX(-50%)}body.swal2-no-backdrop .swal2-shown.swal2-bottom-left,body.swal2-no-backdrop .swal2-shown.swal2-bottom-start{bottom:0;left:0}body.swal2-no-backdrop .swal2-shown.swal2-bottom-end,body.swal2-no-backdrop .swal2-shown.swal2-bottom-right{right:0;bottom:0}.swal2-container{display:flex;position:fixed;z-index:1060;top:0;right:0;bottom:0;left:0;flex-direction:row;align-items:center;justify-content:center;padding:.625em;overflow-x:hidden;background-color:transparent;-webkit-overflow-scrolling:touch}.swal2-container.swal2-top{align-items:flex-start}.swal2-container.swal2-top-left,.swal2-container.swal2-top-start{align-items:flex-start;justify-content:flex-start}.swal2-container.swal2-top-end,.swal2-container.swal2-top-right{align-items:flex-start;justify-content:flex-end}.swal2-container.swal2-center{align-items:center}.swal2-container.swal2-center-left,.swal2-container.swal2-center-start{align-items:center;justify-content:flex-start}.swal2-container.swal2-center-end,.swal2-container.swal2-center-right{align-items:center;justify-content:flex-end}.swal2-container.swal2-bottom{align-items:flex-end}.swal2-container.swal2-bottom-left,.swal2-container.swal2-bottom-start{align-items:flex-end;justify-content:flex-start}.swal2-container.swal2-bottom-end,.swal2-container.swal2-bottom-right{align-items:flex-end;justify-content:flex-end}.swal2-container.swal2-bottom-end>:first-child,.swal2-container.swal2-bottom-left>:first-child,.swal2-container.swal2-bottom-right>:first-child,.swal2-container.swal2-bottom-start>:first-child,.swal2-container.swal2-bottom>:first-child{margin-top:auto}.swal2-container.swal2-grow-fullscreen>.swal2-modal{display:flex!important;flex:1;align-self:stretch;justify-content:center}.swal2-container.swal2-grow-row>.swal2-modal{display:flex!important;flex:1;align-content:center;justify-content:center}.swal2-container.swal2-grow-column{flex:1;flex-direction:column}.swal2-container.swal2-grow-column.swal2-bottom,.swal2-container.swal2-grow-column.swal2-center,.swal2-container.swal2-grow-column.swal2-top{align-items:center}.swal2-container.swal2-grow-column.swal2-bottom-left,.swal2-container.swal2-grow-column.swal2-bottom-start,.swal2-container.swal2-grow-column.swal2-center-left,.swal2-container.swal2-grow-column.swal2-center-start,.swal2-container.swal2-grow-column.swal2-top-left,.swal2-container.swal2-grow-column.swal2-top-start{align-items:flex-start}.swal2-container.swal2-grow-column.swal2-bottom-end,.swal2-container.swal2-grow-column.swal2-bottom-right,.swal2-container.swal2-grow-column.swal2-center-end,.swal2-container.swal2-grow-column.swal2-center-right,.swal2-container.swal2-grow-column.swal2-top-end,.swal2-container.swal2-grow-column.swal2-top-right{align-items:flex-end}.swal2-container.swal2-grow-column>.swal2-modal{display:flex!important;flex:1;align-content:center;justify-content:center}.swal2-container:not(.swal2-top):not(.swal2-top-start):not(.swal2-top-end):not(.swal2-top-left):not(.swal2-top-right):not(.swal2-center-start):not(.swal2-center-end):not(.swal2-center-left):not(.swal2-center-right):not(.swal2-bottom):not(.swal2-bottom-start):not(.swal2-bottom-end):not(.swal2-bottom-left):not(.swal2-bottom-right):not(.swal2-grow-fullscreen)>.swal2-modal{margin:auto}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-container .swal2-modal{margin:0!important}}.swal2-container.swal2-fade{transition:background-color .1s}.swal2-container.swal2-shown{background-color:rgba(0,0,0,.4)}.swal2-popup{display:none;position:relative;box-sizing:border-box;flex-direction:column;justify-content:center;width:32em;max-width:100%;padding:1.25em;border:none;border-radius:.3125em;background:#fff;font-family:inherit;font-size:1rem}.swal2-popup:focus{outline:0}.swal2-popup.swal2-loading{overflow-y:hidden}.swal2-header{display:flex;flex-direction:column;align-items:center}.swal2-title{position:relative;max-width:100%;margin:0 0 .4em;padding:0;color:#595959;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}.swal2-actions{display:flex;z-index:1;flex-wrap:wrap;align-items:center;justify-content:center;width:100%;margin:1.25em auto 0}.swal2-actions:not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}.swal2-actions:not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0,0,0,.1),rgba(0,0,0,.1))}.swal2-actions:not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.2))}.swal2-actions.swal2-loading .swal2-styled.swal2-confirm{box-sizing:border-box;width:2.5em;height:2.5em;margin:.46875em;padding:0;-webkit-animation:swal2-rotate-loading 1.5s linear 0s infinite normal;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border:.25em solid transparent;border-radius:100%;border-color:transparent;background-color:transparent!important;color:transparent;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.swal2-actions.swal2-loading .swal2-styled.swal2-cancel{margin-right:30px;margin-left:30px}.swal2-actions.swal2-loading :not(.swal2-styled).swal2-confirm::after{content:"";display:inline-block;width:15px;height:15px;margin-left:5px;-webkit-animation:swal2-rotate-loading 1.5s linear 0s infinite normal;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border:3px solid #999;border-radius:50%;border-right-color:transparent;box-shadow:1px 1px 1px #fff}.swal2-styled{margin:.3125em;padding:.625em 2em;box-shadow:none;font-weight:500}.swal2-styled:not([disabled]){cursor:pointer}.swal2-styled.swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#3085d6;color:#fff;font-size:1.0625em}.swal2-styled.swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#aaa;color:#fff;font-size:1.0625em}.swal2-styled:focus{outline:0;box-shadow:0 0 0 2px #fff,0 0 0 4px rgba(50,100,150,.4)}.swal2-styled::-moz-focus-inner{border:0}.swal2-footer{justify-content:center;margin:1.25em 0 0;padding:1em 0 0;border-top:1px solid #eee;color:#545454;font-size:1em}.swal2-image{max-width:100%;margin:1.25em auto}.swal2-close{position:absolute;z-index:2;top:0;right:0;justify-content:center;width:1.2em;height:1.2em;padding:0;overflow:hidden;transition:color .1s ease-out;border:none;border-radius:0;outline:initial;background:0 0;color:#ccc;font-family:serif;font-size:2.5em;line-height:1.2;cursor:pointer}.swal2-close:hover{transform:none;background:0 0;color:#f27474}.swal2-content{z-index:1;justify-content:center;margin:0;padding:0;color:#545454;font-size:1.125em;font-weight:400;line-height:normal;text-align:center;word-wrap:break-word}.swal2-checkbox,.swal2-file,.swal2-input,.swal2-radio,.swal2-select,.swal2-textarea{margin:1em auto}.swal2-file,.swal2-input,.swal2-textarea{box-sizing:border-box;width:100%;transition:border-color .3s,box-shadow .3s;border:1px solid #d9d9d9;border-radius:.1875em;background:inherit;box-shadow:inset 0 1px 1px rgba(0,0,0,.06);color:inherit;font-size:1.125em}.swal2-file.swal2-inputerror,.swal2-input.swal2-inputerror,.swal2-textarea.swal2-inputerror{border-color:#f27474!important;box-shadow:0 0 2px #f27474!important}.swal2-file:focus,.swal2-input:focus,.swal2-textarea:focus{border:1px solid #b4dbed;outline:0;box-shadow:0 0 3px #c4e6f5}.swal2-file::-webkit-input-placeholder,.swal2-input::-webkit-input-placeholder,.swal2-textarea::-webkit-input-placeholder{color:#ccc}.swal2-file::-moz-placeholder,.swal2-input::-moz-placeholder,.swal2-textarea::-moz-placeholder{color:#ccc}.swal2-file:-ms-input-placeholder,.swal2-input:-ms-input-placeholder,.swal2-textarea:-ms-input-placeholder{color:#ccc}.swal2-file::-ms-input-placeholder,.swal2-input::-ms-input-placeholder,.swal2-textarea::-ms-input-placeholder{color:#ccc}.swal2-file::placeholder,.swal2-input::placeholder,.swal2-textarea::placeholder{color:#ccc}.swal2-range{margin:1em auto;background:inherit}.swal2-range input{width:80%}.swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}.swal2-range input,.swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}.swal2-input{height:2.625em;padding:0 .75em}.swal2-input[type=number]{max-width:10em}.swal2-file{background:inherit;font-size:1.125em}.swal2-textarea{height:6.75em;padding:.75em}.swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:inherit;color:inherit;font-size:1.125em}.swal2-checkbox,.swal2-radio{align-items:center;justify-content:center;background:inherit;color:inherit}.swal2-checkbox label,.swal2-radio label{margin:0 .6em;font-size:1.125em}.swal2-checkbox input,.swal2-radio input{margin:0 .4em}.swal2-validation-message{display:none;align-items:center;justify-content:center;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}.swal2-validation-message::before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;zoom:normal;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}@supports (-ms-accelerator:true){.swal2-range input{width:100%!important}.swal2-range output{display:none}}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-range input{width:100%!important}.swal2-range output{display:none}}@-moz-document url-prefix(){.swal2-close:focus{outline:2px solid rgba(50,100,150,.4)}}.swal2-icon{position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:1.25em auto 1.875em;zoom:normal;border:.25em solid transparent;border-radius:50%;font-family:inherit;line-height:5em;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.swal2-icon::before{display:flex;align-items:center;height:92%;font-size:3.75em}.swal2-icon.swal2-error{border-color:#f27474}.swal2-icon.swal2-error .swal2-x-mark{position:relative;flex-grow:1}.swal2-icon.swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}.swal2-icon.swal2-warning{border-color:#facea8;color:#f8bb86}.swal2-icon.swal2-warning::before{content:"!"}.swal2-icon.swal2-info{border-color:#9de0f6;color:#3fc3ee}.swal2-icon.swal2-info::before{content:"i"}.swal2-icon.swal2-question{border-color:#c9dae1;color:#87adbd}.swal2-icon.swal2-question::before{content:"?"}.swal2-icon.swal2-question.swal2-arabic-question-mark::before{content:"؟"}.swal2-icon.swal2-success{border-color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;transform:rotate(45deg);border-radius:50%}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}.swal2-icon.swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-.25em;left:-.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}.swal2-icon.swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}.swal2-icon.swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.875em;width:1.5625em;transform:rotate(45deg)}.swal2-icon.swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}.swal2-progress-steps{align-items:center;margin:0 0 1.25em;padding:0;background:inherit;font-weight:600}.swal2-progress-steps li{display:inline-block;position:relative}.swal2-progress-steps .swal2-progress-step{z-index:20;width:2em;height:2em;border-radius:2em;background:#3085d6;color:#fff;line-height:2em;text-align:center}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#3085d6}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}.swal2-progress-steps .swal2-progress-step-line{z-index:10;width:2.5em;height:.4em;margin:0 -1px;background:#3085d6}[class^=swal2]{-webkit-tap-highlight-color:transparent}.swal2-show{-webkit-animation:swal2-show .3s;animation:swal2-show .3s}.swal2-show.swal2-noanimation{-webkit-animation:none;animation:none}.swal2-hide{-webkit-animation:swal2-hide .15s forwards;animation:swal2-hide .15s forwards}.swal2-hide.swal2-noanimation{-webkit-animation:none;animation:none}.swal2-rtl .swal2-close{right:auto;left:0}.swal2-animate-success-icon .swal2-success-line-tip{-webkit-animation:swal2-animate-success-line-tip .75s;animation:swal2-animate-success-line-tip .75s}.swal2-animate-success-icon .swal2-success-line-long{-webkit-animation:swal2-animate-success-line-long .75s;animation:swal2-animate-success-line-long .75s}.swal2-animate-success-icon .swal2-success-circular-line-right{-webkit-animation:swal2-rotate-success-circular-line 4.25s ease-in;animation:swal2-rotate-success-circular-line 4.25s ease-in}.swal2-animate-error-icon{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-animate-error-icon .swal2-x-mark{-webkit-animation:swal2-animate-error-x-mark .5s;animation:swal2-animate-error-x-mark .5s}@-webkit-keyframes swal2-rotate-loading{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@keyframes swal2-rotate-loading{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll!important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static!important}}');
/*!
 * Select2 4.0.10
 * https://select2.github.io
 *
 * Released under the MIT license
 * https://github.com/select2/select2/blob/master/LICENSE.md
 */
(function(n) {
    typeof define == "function" && define.amd ? define(["jquery"], n) : typeof module == "object" && module.exports ? module.exports = function(t, i) {
        return i === undefined && (i = typeof window != "undefined" ? require("jquery") : require("jquery")(t)),
        n(i),
        i
    }
    : n(jQuery)
}
)(function(n) {
    var t = function() {
        var t;
        return n && n.fn && n.fn.select2 && n.fn.select2.amd && (t = n.fn.select2.amd),
        function() {
            if (!t || !t.requirejs) {
                t ? i = t : t = {};
                /**
 * @license almond 0.3.3 Copyright jQuery Foundation and other contributors.
 * Released under MIT license, http://github.com/requirejs/almond/LICENSE
 */
                var n, i, r;
                (function(t) {
                    function e(n, t) {
                        return d.call(n, t)
                    }
                    function l(n, t) {
                        var o, s, u, e, h, y, c, b, i, l, p, k, r = t && t.split("/"), a = f.map, v = a && a["*"] || {};
                        if (n) {
                            for (n = n.split("/"),
                            h = n.length - 1,
                            f.nodeIdCompat && w.test(n[h]) && (n[h] = n[h].replace(w, "")),
                            n[0].charAt(0) === "." && r && (k = r.slice(0, r.length - 1),
                            n = k.concat(n)),
                            i = 0; i < n.length; i++)
                                if (p = n[i],
                                p === ".")
                                    n.splice(i, 1),
                                    i -= 1;
                                else if (p === "..")
                                    if (i === 0 || i === 1 && n[2] === ".." || n[i - 1] === "..")
                                        continue;
                                    else
                                        i > 0 && (n.splice(i - 1, 2),
                                        i -= 2);
                            n = n.join("/")
                        }
                        if ((r || v) && a) {
                            for (o = n.split("/"),
                            i = o.length; i > 0; i -= 1) {
                                if (s = o.slice(0, i).join("/"),
                                r)
                                    for (l = r.length; l > 0; l -= 1)
                                        if (u = a[r.slice(0, l).join("/")],
                                        u && (u = u[s],
                                        u)) {
                                            e = u;
                                            y = i;
                                            break
                                        }
                                if (e)
                                    break;
                                !c && v && v[s] && (c = v[s],
                                b = i)
                            }
                            !e && c && (e = c,
                            y = b);
                            e && (o.splice(0, y, e),
                            n = o.join("/"))
                        }
                        return n
                    }
                    function b(n, i) {
                        return function() {
                            var r = g.call(arguments, 0);
                            return typeof r[0] != "string" && r.length === 1 && r.push(null),
                            o.apply(t, r.concat([n, i]))
                        }
                    }
                    function nt(n) {
                        return function(t) {
                            return l(t, n)
                        }
                    }
                    function tt(n) {
                        return function(t) {
                            u[n] = t
                        }
                    }
                    function a(n) {
                        if (e(h, n)) {
                            var i = h[n];
                            delete h[n];
                            y[n] = !0;
                            c.apply(t, i)
                        }
                        if (!e(u, n) && !e(y, n))
                            throw new Error("No " + n);
                        return u[n]
                    }
                    function p(n) {
                        var i, t = n ? n.indexOf("!") : -1;
                        return t > -1 && (i = n.substring(0, t),
                        n = n.substring(t + 1, n.length)),
                        [i, n]
                    }
                    function k(n) {
                        return n ? p(n) : []
                    }
                    function it(n) {
                        return function() {
                            return f && f.config && f.config[n] || {}
                        }
                    }
                    var c, o, v, s, u = {}, h = {}, f = {}, y = {}, d = Object.prototype.hasOwnProperty, g = [].slice, w = /\.js$/;
                    v = function(n, t) {
                        var r, u = p(n), i = u[0], f = t[1];
                        return n = u[1],
                        i && (i = l(i, f),
                        r = a(i)),
                        i ? n = r && r.normalize ? r.normalize(n, nt(f)) : l(n, f) : (n = l(n, f),
                        u = p(n),
                        i = u[0],
                        n = u[1],
                        i && (r = a(i))),
                        {
                            f: i ? i + "!" + n : n,
                            n: n,
                            pr: i,
                            p: r
                        }
                    }
                    ;
                    s = {
                        require: function(n) {
                            return b(n)
                        },
                        exports: function(n) {
                            var t = u[n];
                            return typeof t != "undefined" ? t : u[n] = {}
                        },
                        module: function(n) {
                            return {
                                id: n,
                                uri: "",
                                exports: u[n],
                                config: it(n)
                            }
                        }
                    };
                    c = function(n, i, r, f) {
                        var p, o, d, w, c, g, l = [], nt = typeof r, it;
                        if (f = f || n,
                        g = k(f),
                        nt === "undefined" || nt === "function") {
                            for (i = !i.length && r.length ? ["require", "exports", "module"] : i,
                            c = 0; c < i.length; c += 1)
                                if (w = v(i[c], g),
                                o = w.f,
                                o === "require")
                                    l[c] = s.require(n);
                                else if (o === "exports")
                                    l[c] = s.exports(n),
                                    it = !0;
                                else if (o === "module")
                                    p = l[c] = s.module(n);
                                else if (e(u, o) || e(h, o) || e(y, o))
                                    l[c] = a(o);
                                else if (w.p)
                                    w.p.load(w.n, b(f, !0), tt(o), {}),
                                    l[c] = u[o];
                                else
                                    throw new Error(n + " missing " + o);
                            d = r ? r.apply(u[n], l) : undefined;
                            n && (p && p.exports !== t && p.exports !== u[n] ? u[n] = p.exports : d === t && it || (u[n] = d))
                        } else
                            n && (u[n] = r)
                    }
                    ;
                    n = i = o = function(n, i, r, u, e) {
                        if (typeof n == "string")
                            return s[n] ? s[n](i) : a(v(n, k(i)).f);
                        if (!n.splice) {
                            if (f = n,
                            f.deps && o(f.deps, f.callback),
                            !i)
                                return;
                            i.splice ? (n = i,
                            i = r,
                            r = null) : n = t
                        }
                        return i = i || function() {}
                        ,
                        typeof r == "function" && (r = u,
                        u = e),
                        u ? c(t, n, i, r) : setTimeout(function() {
                            c(t, n, i, r)
                        }, 4),
                        o
                    }
                    ;
                    o.config = function(n) {
                        return o(n)
                    }
                    ;
                    n._defined = u;
                    r = function(n, t, i) {
                        if (typeof n != "string")
                            throw new Error("See almond README: incorrect module build, no module name");
                        t.splice || (i = t,
                        t = []);
                        e(u, n) || e(h, n) || (h[n] = [n, t, i])
                    }
                    ;
                    r.amd = {
                        jQuery: !0
                    }
                }
                )();
                t.requirejs = n;
                t.require = i;
                t.define = r
            }
        }(),
        t.define("almond", function() {}),
        t.define("jquery", [], function() {
            var t = n || $;
            return t == null && console && console.error && console.error("Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."),
            t
        }),
        t.define("select2/utils", ["jquery"], function(n) {
            function u(n) {
                var i = n.prototype, r = [], t, u;
                for (t in i)
                    (u = i[t],
                    typeof u == "function") && t !== "constructor" && r.push(t);
                return r
            }
            var t = {}, i, r;
            return t.Extend = function(n, t) {
                function r() {
                    this.constructor = n
                }
                var u = {}.hasOwnProperty;
                for (var i in t)
                    u.call(t, i) && (n[i] = t[i]);
                return r.prototype = t.prototype,
                n.prototype = new r,
                n.__super__ = t.prototype,
                n
            }
            ,
            t.Decorate = function(n, t) {
                function i() {
                    var r = Array.prototype.unshift
                      , u = t.prototype.constructor.length
                      , i = n.prototype.constructor;
                    u > 0 && (r.call(arguments, n.prototype.constructor),
                    i = t.prototype.constructor);
                    i.apply(this, arguments)
                }
                function l() {
                    this.constructor = i
                }
                var s = u(t), h = u(n), r, e, c, f, o;
                for (t.displayName = n.displayName,
                i.prototype = new l,
                r = 0; r < h.length; r++)
                    e = h[r],
                    i.prototype[e] = n.prototype[e];
                for (c = function(n) {
                    var r = function() {}, u;
                    return n in i.prototype && (r = i.prototype[n]),
                    u = t.prototype[n],
                    function() {
                        var n = Array.prototype.unshift;
                        return n.call(arguments, r),
                        u.apply(this, arguments)
                    }
                }
                ,
                f = 0; f < s.length; f++)
                    o = s[f],
                    i.prototype[o] = c(o);
                return i
            }
            ,
            i = function() {
                this.listeners = {}
            }
            ,
            i.prototype.on = function(n, t) {
                this.listeners = this.listeners || {};
                n in this.listeners ? this.listeners[n].push(t) : this.listeners[n] = [t]
            }
            ,
            i.prototype.trigger = function(n) {
                var i = Array.prototype.slice
                  , t = i.call(arguments, 1);
                this.listeners = this.listeners || {};
                t == null && (t = []);
                t.length === 0 && t.push({});
                t[0]._type = n;
                n in this.listeners && this.invoke(this.listeners[n], i.call(arguments, 1));
                "*"in this.listeners && this.invoke(this.listeners["*"], arguments)
            }
            ,
            i.prototype.invoke = function(n, t) {
                for (var i = 0, r = n.length; i < r; i++)
                    n[i].apply(this, t)
            }
            ,
            t.Observable = i,
            t.generateChars = function(n) {
                for (var r, t = "", i = 0; i < n; i++)
                    r = Math.floor(Math.random() * 36),
                    t += r.toString(36);
                return t
            }
            ,
            t.bind = function(n, t) {
                return function() {
                    n.apply(t, arguments)
                }
            }
            ,
            t._convertData = function(n) {
                var f, r, i, u, t;
                for (f in n)
                    if (r = f.split("-"),
                    i = n,
                    r.length !== 1) {
                        for (u = 0; u < r.length; u++)
                            t = r[u],
                            t = t.substring(0, 1).toLowerCase() + t.substring(1),
                            t in i || (i[t] = {}),
                            u == r.length - 1 && (i[t] = n[f]),
                            i = i[t];
                        delete n[f]
                    }
                return n
            }
            ,
            t.hasScroll = function(t, i) {
                var u = n(i)
                  , f = i.style.overflowX
                  , r = i.style.overflowY;
                return f === r && (r === "hidden" || r === "visible") ? !1 : f === "scroll" || r === "scroll" ? !0 : u.innerHeight() < i.scrollHeight || u.innerWidth() < i.scrollWidth
            }
            ,
            t.escapeMarkup = function(n) {
                var t = {
                    "\\": "&#92;",
                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&#39;",
                    "/": "&#47;"
                };
                return typeof n != "string" ? n : String(n).replace(/[&<>"'\/\\]/g, function(n) {
                    return t[n]
                })
            }
            ,
            t.appendMany = function(t, i) {
                if (n.fn.jquery.substr(0, 3) === "1.7") {
                    var r = n();
                    n.map(i, function(n) {
                        r = r.add(n)
                    });
                    i = r
                }
                t.append(i)
            }
            ,
            t.__cache = {},
            r = 0,
            t.GetUniqueElementId = function(n) {
                var t = n.getAttribute("data-select2-id");
                return t == null && (n.id ? (t = n.id,
                n.setAttribute("data-select2-id", t)) : (n.setAttribute("data-select2-id", ++r),
                t = r.toString())),
                t
            }
            ,
            t.StoreData = function(n, i, r) {
                var u = t.GetUniqueElementId(n);
                t.__cache[u] || (t.__cache[u] = {});
                t.__cache[u][i] = r
            }
            ,
            t.GetData = function(i, r) {
                var u = t.GetUniqueElementId(i);
                return r ? t.__cache[u] ? t.__cache[u][r] != null ? t.__cache[u][r] : n(i).data(r) : n(i).data(r) : t.__cache[u]
            }
            ,
            t.RemoveData = function(n) {
                var i = t.GetUniqueElementId(n);
                t.__cache[i] != null && delete t.__cache[i];
                n.removeAttribute("data-select2-id")
            }
            ,
            t
        }),
        t.define("select2/results", ["jquery", "./utils"], function(n, t) {
            function i(n, t, r) {
                this.$element = n;
                this.data = r;
                this.options = t;
                i.__super__.constructor.call(this)
            }
            return t.Extend(i, t.Observable),
            i.prototype.render = function() {
                var t = n('<ul class="select2-results__options" role="listbox"><\/ul>');
                return this.options.get("multiple") && (t.attr("aria-multiselectable", "true"),
                t.addClass("select2-multiple")),
                this.$results = t,
                t
            }
            ,
            i.prototype.clear = function() {
                this.$results.empty()
            }
            ,
            i.prototype.displayMessage = function(t) {
                var u = this.options.get("escapeMarkup"), i, r;
                this.clear();
                this.hideLoading();
                i = n('<li role="alert" aria-live="assertive" class="select2-results__option"><\/li>');
                r = this.options.get("translations").get(t.message);
                i.append(u(r(t.args)));
                i[0].className += " select2-results__message";
                this.$results.append(i)
            }
            ,
            i.prototype.hideMessages = function() {
                this.$results.find(".select2-results__message").remove()
            }
            ,
            i.prototype.append = function(n) {
                var i, t, r, u;
                if (this.hideLoading(),
                i = [],
                n.results == null || n.results.length === 0) {
                    this.$results.children().length === 0 && this.trigger("results:message", {
                        message: "noResults"
                    });
                    return
                }
                for (n.results = this.sort(n.results),
                t = 0; t < n.results.length; t++)
                    r = n.results[t],
                    u = this.option(r),
                    i.push(u);
                this.$results.append(i)
            }
            ,
            i.prototype.position = function(n, t) {
                var i = t.find(".select2-results");
                i.append(n)
            }
            ,
            i.prototype.sort = function(n) {
                var t = this.options.get("sorter");
                return t(n)
            }
            ,
            i.prototype.highlightFirstItem = function() {
                var n = this.$results.find(".select2-results__option[aria-selected]")
                  , t = n.filter("[aria-selected=true]");
                t.length > 0 ? t.first().trigger("mouseenter") : n.first().trigger("mouseenter");
                this.ensureHighlightVisible()
            }
            ,
            i.prototype.setClasses = function() {
                var i = this;
                this.data.current(function(r) {
                    var u = n.map(r, function(n) {
                        return n.id.toString()
                    })
                      , f = i.$results.find(".select2-results__option[aria-selected]");
                    f.each(function() {
                        var r = n(this)
                          , i = t.GetData(this, "data")
                          , f = "" + i.id;
                        i.element != null && i.element.selected || i.element == null && n.inArray(f, u) > -1 ? r.attr("aria-selected", "true") : r.attr("aria-selected", "false")
                    })
                })
            }
            ,
            i.prototype.showLoading = function(n) {
                this.hideLoading();
                var i = this.options.get("translations").get("searching")
                  , r = {
                    disabled: !0,
                    loading: !0,
                    text: i(n)
                }
                  , t = this.option(r);
                t.className += " loading-results";
                this.$results.prepend(t)
            }
            ,
            i.prototype.hideLoading = function() {
                this.$results.find(".loading-results").remove()
            }
            ,
            i.prototype.option = function(i) {
                var u = document.createElement("li"), r, l, o, a, s, f, p, h, e, v, y, c;
                u.className = "select2-results__option";
                r = {
                    role: "option",
                    "aria-selected": "false"
                };
                l = window.Element.prototype.matches || window.Element.prototype.msMatchesSelector || window.Element.prototype.webkitMatchesSelector;
                (i.element != null && l.call(i.element, ":disabled") || i.element == null && i.disabled) && (delete r["aria-selected"],
                r["aria-disabled"] = "true");
                i.id == null && delete r["aria-selected"];
                i._resultId != null && (u.id = i._resultId);
                i.title && (u.title = i.title);
                i.children && (r.role = "group",
                r["aria-label"] = i.text,
                delete r["aria-selected"]);
                for (o in r)
                    a = r[o],
                    u.setAttribute(o, a);
                if (i.children) {
                    for (s = n(u),
                    f = document.createElement("strong"),
                    f.className = "select2-results__group",
                    p = n(f),
                    this.template(i, f),
                    h = [],
                    e = 0; e < i.children.length; e++)
                        v = i.children[e],
                        y = this.option(v),
                        h.push(y);
                    c = n("<ul><\/ul>", {
                        "class": "select2-results__options select2-results__options--nested"
                    });
                    c.append(h);
                    s.append(f);
                    s.append(c)
                } else
                    this.template(i, u);
                return t.StoreData(u, "data", i),
                u
            }
            ,
            i.prototype.bind = function(i) {
                var r = this
                  , u = i.id + "-results";
                this.$results.attr("id", u);
                i.on("results:all", function(n) {
                    r.clear();
                    r.append(n.data);
                    i.isOpen() && (r.setClasses(),
                    r.highlightFirstItem())
                });
                i.on("results:append", function(n) {
                    r.append(n.data);
                    i.isOpen() && r.setClasses()
                });
                i.on("query", function(n) {
                    r.hideMessages();
                    r.showLoading(n)
                });
                i.on("select", function() {
                    i.isOpen() && (r.setClasses(),
                    r.options.get("scrollAfterSelect") && r.highlightFirstItem())
                });
                i.on("unselect", function() {
                    i.isOpen() && (r.setClasses(),
                    r.options.get("scrollAfterSelect") && r.highlightFirstItem())
                });
                i.on("open", function() {
                    r.$results.attr("aria-expanded", "true");
                    r.$results.attr("aria-hidden", "false");
                    r.setClasses();
                    r.ensureHighlightVisible()
                });
                i.on("close", function() {
                    r.$results.attr("aria-expanded", "false");
                    r.$results.attr("aria-hidden", "true");
                    r.$results.removeAttr("aria-activedescendant")
                });
                i.on("results:toggle", function() {
                    var n = r.getHighlightedResults();
                    n.length !== 0 && n.trigger("mouseup")
                });
                i.on("results:select", function() {
                    var n = r.getHighlightedResults(), i;
                    n.length !== 0 && (i = t.GetData(n[0], "data"),
                    n.attr("aria-selected") == "true" ? r.trigger("close", {}) : r.trigger("select", {
                        data: i
                    }))
                });
                i.on("results:previous", function() {
                    var i = r.getHighlightedResults(), u = r.$results.find("[aria-selected]"), f = u.index(i), n, t;
                    if (!(f <= 0)) {
                        n = f - 1;
                        i.length === 0 && (n = 0);
                        t = u.eq(n);
                        t.trigger("mouseenter");
                        var e = r.$results.offset().top
                          , o = t.offset().top
                          , s = r.$results.scrollTop() + (o - e);
                        n === 0 ? r.$results.scrollTop(0) : o - e < 0 && r.$results.scrollTop(s)
                    }
                });
                i.on("results:next", function() {
                    var e = r.getHighlightedResults(), t = r.$results.find("[aria-selected]"), o = t.index(e), i = o + 1, n;
                    if (!(i >= t.length)) {
                        n = t.eq(i);
                        n.trigger("mouseenter");
                        var u = r.$results.offset().top + r.$results.outerHeight(!1)
                          , f = n.offset().top + n.outerHeight(!1)
                          , s = r.$results.scrollTop() + f - u;
                        i === 0 ? r.$results.scrollTop(0) : f > u && r.$results.scrollTop(s)
                    }
                });
                i.on("results:focus", function(n) {
                    n.element.addClass("select2-results__option--highlighted")
                });
                i.on("results:message", function(n) {
                    r.displayMessage(n)
                });
                if (n.fn.mousewheel)
                    this.$results.on("mousewheel", function(n) {
                        var t = r.$results.scrollTop()
                          , i = r.$results.get(0).scrollHeight - t + n.deltaY
                          , u = n.deltaY > 0 && t - n.deltaY <= 0
                          , f = n.deltaY < 0 && i <= r.$results.height();
                        u ? (r.$results.scrollTop(0),
                        n.preventDefault(),
                        n.stopPropagation()) : f && (r.$results.scrollTop(r.$results.get(0).scrollHeight - r.$results.height()),
                        n.preventDefault(),
                        n.stopPropagation())
                    });
                this.$results.on("mouseup", ".select2-results__option[aria-selected]", function(i) {
                    var f = n(this)
                      , u = t.GetData(this, "data");
                    if (f.attr("aria-selected") === "true") {
                        r.options.get("multiple") ? r.trigger("unselect", {
                            originalEvent: i,
                            data: u
                        }) : r.trigger("close", {});
                        return
                    }
                    r.trigger("select", {
                        originalEvent: i,
                        data: u
                    })
                });
                this.$results.on("mouseenter", ".select2-results__option[aria-selected]", function() {
                    var i = t.GetData(this, "data");
                    r.getHighlightedResults().removeClass("select2-results__option--highlighted");
                    r.trigger("results:focus", {
                        data: i,
                        element: n(this)
                    })
                })
            }
            ,
            i.prototype.getHighlightedResults = function() {
                return this.$results.find(".select2-results__option--highlighted")
            }
            ,
            i.prototype.destroy = function() {
                this.$results.remove()
            }
            ,
            i.prototype.ensureHighlightVisible = function() {
                var n = this.getHighlightedResults();
                if (n.length !== 0) {
                    var f = this.$results.find("[aria-selected]")
                      , e = f.index(n)
                      , t = this.$results.offset().top
                      , i = n.offset().top
                      , r = this.$results.scrollTop() + (i - t)
                      , u = i - t;
                    r -= n.outerHeight(!1) * 2;
                    e <= 2 ? this.$results.scrollTop(0) : (u > this.$results.outerHeight() || u < 0) && this.$results.scrollTop(r)
                }
            }
            ,
            i.prototype.template = function(t, i) {
                var u = this.options.get("templateResult")
                  , f = this.options.get("escapeMarkup")
                  , r = u(t, i);
                r == null ? i.style.display = "none" : typeof r == "string" ? i.innerHTML = f(r) : n(i).append(r)
            }
            ,
            i
        }),
        t.define("select2/keys", [], function() {
            return {
                BACKSPACE: 8,
                TAB: 9,
                ENTER: 13,
                SHIFT: 16,
                CTRL: 17,
                ALT: 18,
                ESC: 27,
                SPACE: 32,
                PAGE_UP: 33,
                PAGE_DOWN: 34,
                END: 35,
                HOME: 36,
                LEFT: 37,
                UP: 38,
                RIGHT: 39,
                DOWN: 40,
                DELETE: 46
            }
        }),
        t.define("select2/selection/base", ["jquery", "../utils", "../keys"], function(n, t, i) {
            function r(n, t) {
                this.$element = n;
                this.options = t;
                r.__super__.constructor.call(this)
            }
            return t.Extend(r, t.Observable),
            r.prototype.render = function() {
                var i = n('<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"><\/span>');
                return this._tabindex = 0,
                t.GetData(this.$element[0], "old-tabindex") != null ? this._tabindex = t.GetData(this.$element[0], "old-tabindex") : this.$element.attr("tabindex") != null && (this._tabindex = this.$element.attr("tabindex")),
                i.attr("title", this.$element.attr("title")),
                i.attr("tabindex", this._tabindex),
                i.attr("aria-disabled", "false"),
                this.$selection = i,
                i
            }
            ,
            r.prototype.bind = function(n) {
                var t = this
                  , r = n.id + "-results";
                this.container = n;
                this.$selection.on("focus", function(n) {
                    t.trigger("focus", n)
                });
                this.$selection.on("blur", function(n) {
                    t._handleBlur(n)
                });
                this.$selection.on("keydown", function(n) {
                    t.trigger("keypress", n);
                    n.which === i.SPACE && n.preventDefault()
                });
                n.on("results:focus", function(n) {
                    t.$selection.attr("aria-activedescendant", n.data._resultId)
                });
                n.on("selection:update", function(n) {
                    t.update(n.data)
                });
                n.on("open", function() {
                    t.$selection.attr("aria-expanded", "true");
                    t.$selection.attr("aria-owns", r);
                    t._attachCloseHandler(n)
                });
                n.on("close", function() {
                    t.$selection.attr("aria-expanded", "false");
                    t.$selection.removeAttr("aria-activedescendant");
                    t.$selection.removeAttr("aria-owns");
                    t.$selection.trigger("focus");
                    t._detachCloseHandler(n)
                });
                n.on("enable", function() {
                    t.$selection.attr("tabindex", t._tabindex);
                    t.$selection.attr("aria-disabled", "false")
                });
                n.on("disable", function() {
                    t.$selection.attr("tabindex", "-1");
                    t.$selection.attr("aria-disabled", "true")
                })
            }
            ,
            r.prototype._handleBlur = function(t) {
                var i = this;
                window.setTimeout(function() {
                    document.activeElement == i.$selection[0] || n.contains(i.$selection[0], document.activeElement) || i.trigger("blur", t)
                }, 1)
            }
            ,
            r.prototype._attachCloseHandler = function(i) {
                n(document.body).on("mousedown.select2." + i.id, function(i) {
                    var r = n(i.target)
                      , u = r.closest(".select2")
                      , f = n(".select2.select2-container--open");
                    f.each(function() {
                        if (this != u[0]) {
                            var n = t.GetData(this, "element");
                            n.select2("close")
                        }
                    })
                })
            }
            ,
            r.prototype._detachCloseHandler = function(t) {
                n(document.body).off("mousedown.select2." + t.id)
            }
            ,
            r.prototype.position = function(n, t) {
                var i = t.find(".selection");
                i.append(n)
            }
            ,
            r.prototype.destroy = function() {
                this._detachCloseHandler(this.container)
            }
            ,
            r.prototype.update = function() {
                throw new Error("The `update` method must be defined in child classes.");
            }
            ,
            r
        }),
        t.define("select2/selection/single", ["jquery", "./base", "../utils", "../keys"], function(n, t, i) {
            function r() {
                r.__super__.constructor.apply(this, arguments)
            }
            return i.Extend(r, t),
            r.prototype.render = function() {
                var n = r.__super__.render.call(this);
                return n.addClass("select2-selection--single"),
                n.html('<span class="select2-selection__rendered"><\/span><span class="select2-selection__arrow" role="presentation"><b role="presentation"><\/b><\/span>'),
                n
            }
            ,
            r.prototype.bind = function(n) {
                var i = this, t;
                r.__super__.bind.apply(this, arguments);
                t = n.id + "-container";
                this.$selection.find(".select2-selection__rendered").attr("id", t).attr("role", "textbox").attr("aria-readonly", "true");
                this.$selection.attr("aria-labelledby", t);
                this.$selection.on("mousedown", function(n) {
                    n.which === 1 && i.trigger("toggle", {
                        originalEvent: n
                    })
                });
                this.$selection.on("focus", function() {});
                this.$selection.on("blur", function() {});
                n.on("focus", function() {
                    n.isOpen() || i.$selection.trigger("focus")
                })
            }
            ,
            r.prototype.clear = function() {
                var n = this.$selection.find(".select2-selection__rendered");
                n.empty();
                n.removeAttr("title")
            }
            ,
            r.prototype.display = function(n, t) {
                var i = this.options.get("templateSelection")
                  , r = this.options.get("escapeMarkup");
                return r(i(n, t))
            }
            ,
            r.prototype.selectionContainer = function() {
                return n("<span><\/span>")
            }
            ,
            r.prototype.update = function(n) {
                var r;
                if (n.length === 0) {
                    this.clear();
                    return
                }
                var i = n[0]
                  , t = this.$selection.find(".select2-selection__rendered")
                  , u = this.display(i, t);
                t.empty().append(u);
                r = i.title || i.text;
                r ? t.attr("title", r) : t.removeAttr("title")
            }
            ,
            r
        }),
        t.define("select2/selection/multiple", ["jquery", "./base", "../utils"], function(n, t, i) {
            function r() {
                r.__super__.constructor.apply(this, arguments)
            }
            return i.Extend(r, t),
            r.prototype.render = function() {
                var n = r.__super__.render.call(this);
                return n.addClass("select2-selection--multiple"),
                n.html('<ul class="select2-selection__rendered"><\/ul>'),
                n
            }
            ,
            r.prototype.bind = function() {
                var t = this;
                r.__super__.bind.apply(this, arguments);
                this.$selection.on("click", function(n) {
                    t.trigger("toggle", {
                        originalEvent: n
                    })
                });
                this.$selection.on("click", ".select2-selection__choice__remove", function(r) {
                    if (!t.options.get("disabled")) {
                        var u = n(this)
                          , f = u.parent()
                          , e = i.GetData(f[0], "data");
                        t.trigger("unselect", {
                            originalEvent: r,
                            data: e
                        })
                    }
                })
            }
            ,
            r.prototype.clear = function() {
                var n = this.$selection.find(".select2-selection__rendered");
                n.empty();
                n.removeAttr("title")
            }
            ,
            r.prototype.display = function(n, t) {
                var i = this.options.get("templateSelection")
                  , r = this.options.get("escapeMarkup");
                return r(i(n, t))
            }
            ,
            r.prototype.selectionContainer = function() {
                return n('<li class="select2-selection__choice"><\/li>')
            }
            ,
            r.prototype.update = function(n) {
                var f, r, e, s;
                if (this.clear(),
                n.length !== 0) {
                    for (f = [],
                    r = 0; r < n.length; r++) {
                        var u = n[r]
                          , t = this.selectionContainer()
                          , o = this.display(u, t);
                        this.options.options.maximumSelectionLength == 1 ? (t.addClass("select2-container-custom"),
                        t.append(o)) : (t.append(o),
                        t.append('<span class="select2-selection__choice__remove" role="presentation">&times;<\/span>'));
                        e = u.title || u.text;
                        e && t.attr("title", e);
                        i.StoreData(t[0], "data", u);
                        f.push(t)
                    }
                    s = this.$selection.find(".select2-selection__rendered");
                    i.appendMany(s, f)
                }
            }
            ,
            r
        }),
        t.define("select2/selection/placeholder", ["../utils"], function() {
            function n(n, t, i) {
                this.placeholder = this.normalizePlaceholder(i.get("placeholder"));
                n.call(this, t, i)
            }
            return n.prototype.normalizePlaceholder = function(n, t) {
                return typeof t == "string" && (t = {
                    id: "",
                    text: t
                }),
                t
            }
            ,
            n.prototype.createPlaceholder = function(n, t) {
                var i = this.selectionContainer();
                return i.html(this.display(t)),
                i.addClass("select2-selection__placeholder").removeClass("select2-selection__choice"),
                i
            }
            ,
            n.prototype.update = function(n, t) {
                var r = t.length == 1 && t[0].id != this.placeholder.id, u = t.length > 1, i;
                if (u || r)
                    return n.call(this, t);
                this.clear();
                i = this.createPlaceholder(this.placeholder);
                this.$selection.find(".select2-selection__rendered").append(i)
            }
            ,
            n
        }),
        t.define("select2/selection/allowClear", ["jquery", "../keys", "../utils"], function(n, t, i) {
            function r() {}
            return r.prototype.bind = function(n, t, i) {
                var r = this;
                n.call(this, t, i);
                this.placeholder == null && this.options.get("debug") && window.console && console.error && console.error("Select2: The `allowClear` option should be used in combination with the `placeholder` option.");
                this.$selection.on("mousedown", ".select2-selection__clear", function(n) {
                    r._handleClear(n)
                });
                t.on("keypress", function(n) {
                    r._handleKeyboardClear(n, t)
                })
            }
            ,
            r.prototype._handleClear = function(n, t) {
                var e, u, o, r, f;
                if (!this.options.get("disabled") && (e = this.$selection.find(".select2-selection__clear"),
                e.length !== 0)) {
                    if (t.stopPropagation(),
                    u = i.GetData(e[0], "data"),
                    o = this.$element.val(),
                    this.$element.val(this.placeholder.id),
                    r = {
                        data: u
                    },
                    this.trigger("clear", r),
                    r.prevented) {
                        this.$element.val(o);
                        return
                    }
                    for (f = 0; f < u.length; f++)
                        if (r = {
                            data: u[f]
                        },
                        this.trigger("unselect", r),
                        r.prevented) {
                            this.$element.val(o);
                            return
                        }
                    this.$element.trigger("change");
                    this.trigger("toggle", {})
                }
            }
            ,
            r.prototype._handleKeyboardClear = function(n, i, r) {
                r.isOpen() || (i.which == t.DELETE || i.which == t.BACKSPACE) && this._handleClear(i)
            }
            ,
            r.prototype.update = function(t, r) {
                if (t.call(this, r),
                !(this.$selection.find(".select2-selection__placeholder").length > 0) && r.length !== 0) {
                    var f = this.options.get("translations").get("removeAllItems")
                      , u = n('<span class="select2-selection__clear" title="' + f() + '">&times;<\/span>');
                    i.StoreData(u[0], "data", r);
                    this.$selection.find(".select2-selection__rendered").prepend(u)
                }
            }
            ,
            r
        }),
        t.define("select2/selection/search", ["jquery", "../utils", "../keys"], function(n, t, i) {
            function r(n, t, i) {
                n.call(this, t, i)
            }
            return r.prototype.render = function(t) {
                var i = n('<li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list" /><\/li>'), r;
                return this.$searchContainer = i,
                this.$search = i.find("input"),
                r = t.call(this),
                this._transferTabIndex(),
                r
            }
            ,
            r.prototype.bind = function(n, r, u) {
                var f = this, s = r.id + "-results", e, o;
                n.call(this, r, u);
                r.on("open", function() {
                    f.$search.attr("aria-controls", s);
                    f.$search.trigger("focus")
                });
                r.on("close", function() {
                    f.$search.val("");
                    f.$search.removeAttr("aria-controls");
                    f.$search.removeAttr("aria-activedescendant");
                    f.$search.trigger("focus")
                });
                r.on("enable", function() {
                    f.$search.prop("disabled", !1);
                    f._transferTabIndex()
                });
                r.on("disable", function() {
                    f.$search.prop("disabled", !0)
                });
                r.on("focus", function() {
                    f.$search.trigger("focus")
                });
                r.on("results:focus", function(n) {
                    n.data._resultId ? f.$search.attr("aria-activedescendant", n.data._resultId) : f.$search.removeAttr("aria-activedescendant")
                });
                this.$selection.on("focusin", ".select2-search--inline", function(n) {
                    f.trigger("focus", n)
                });
                this.$selection.on("focusout", ".select2-search--inline", function(n) {
                    f._handleBlur(n)
                });
                this.$selection.on("keydown", ".select2-search--inline", function(n) {
                    var u, r, e;
                    n.stopPropagation();
                    f.trigger("keypress", n);
                    f._keyUpPrevented = n.isDefaultPrevented();
                    u = n.which;
                    u === i.BACKSPACE && f.$search.val() === "" && (r = f.$searchContainer.prev(".select2-selection__choice"),
                    r.length > 0 && (e = t.GetData(r[0], "data"),
                    f.searchRemoveChoice(e),
                    n.preventDefault()))
                });
                this.$selection.on("click", ".select2-search--inline", function(n) {
                    f.$search.val() && n.stopPropagation()
                });
                e = document.documentMode;
                o = e && e <= 11;
                this.$selection.on("input.searchcheck", ".select2-search--inline", function() {
                    if (o) {
                        f.$selection.off("input.search input.searchcheck");
                        return
                    }
                    f.$selection.off("keyup.search")
                });
                this.$selection.on("keyup.search input.search", ".select2-search--inline", function(n) {
                    if (o && n.type === "input") {
                        f.$selection.off("input.search input.searchcheck");
                        return
                    }
                    var t = n.which;
                    t != i.SHIFT && t != i.CTRL && t != i.ALT && t != i.TAB && f.handleSearch(n)
                })
            }
            ,
            r.prototype._transferTabIndex = function() {
                this.$search.attr("tabindex", this.$selection.attr("tabindex"));
                this.$selection.attr("tabindex", "-1")
            }
            ,
            r.prototype.createPlaceholder = function(n, t) {
                this.$search.attr("placeholder", t.text)
            }
            ,
            r.prototype.update = function(n, t) {
                var i = this.$search[0] == document.activeElement;
                this.$search.attr("placeholder", "");
                n.call(this, t);
                this.$selection.find(".select2-selection__rendered").append(this.$searchContainer);
                this.resizeSearch();
                i && this.$search.trigger("focus")
            }
            ,
            r.prototype.handleSearch = function() {
                if (this.resizeSearch(),
                !this._keyUpPrevented) {
                    var n = this.$search.val();
                    this.trigger("query", {
                        term: n
                    })
                }
                this._keyUpPrevented = !1
            }
            ,
            r.prototype.searchRemoveChoice = function(n, t) {
                this.trigger("unselect", {
                    data: t
                });
                this.$search.val(t.text);
                this.handleSearch()
            }
            ,
            r.prototype.resizeSearch = function() {
                var n, t;
                this.$search.css("width", "25px");
                n = "";
                this.$search.attr("placeholder") !== "" ? n = this.$selection.find(".select2-selection__rendered").width() : (t = this.$search.val().length + 1,
                n = t * .75 + "em");
                this.$search.css("width", n)
            }
            ,
            r
        }),
        t.define("select2/selection/eventRelay", ["jquery"], function(n) {
            function t() {}
            return t.prototype.bind = function(t, i, r) {
                var u = this
                  , f = ["open", "opening", "close", "closing", "select", "selecting", "unselect", "unselecting", "clear", "clearing"]
                  , e = ["opening", "closing", "selecting", "unselecting", "clearing"];
                t.call(this, i, r);
                i.on("*", function(t, i) {
                    if (n.inArray(t, f) !== -1) {
                        i = i || {};
                        var r = n.Event("select2:" + t, {
                            params: i
                        });
                        (u.$element.trigger(r),
                        n.inArray(t, e) !== -1) && (i.prevented = r.isDefaultPrevented())
                    }
                })
            }
            ,
            t
        }),
        t.define("select2/translation", ["jquery", "require"], function(n, t) {
            function i(n) {
                this.dict = n || {}
            }
            return i.prototype.all = function() {
                return this.dict
            }
            ,
            i.prototype.get = function(n) {
                return this.dict[n]
            }
            ,
            i.prototype.extend = function(t) {
                this.dict = n.extend({}, t.all(), this.dict)
            }
            ,
            i._cache = {},
            i.loadPath = function(n) {
                if (!(n in i._cache)) {
                    var r = t(n);
                    i._cache[n] = r
                }
                return new i(i._cache[n])
            }
            ,
            i
        }),
        t.define("select2/diacritics", [], function() {
            return {
                "Ⓐ": "A",
                "Ａ": "A",
                "À": "A",
                "Á": "A",
                "Â": "A",
                "Ầ": "A",
                "Ấ": "A",
                "Ẫ": "A",
                "Ẩ": "A",
                "Ã": "A",
                "Ā": "A",
                "Ă": "A",
                "Ằ": "A",
                "Ắ": "A",
                "Ẵ": "A",
                "Ẳ": "A",
                "Ȧ": "A",
                "Ǡ": "A",
                "Ä": "A",
                "Ǟ": "A",
                "Ả": "A",
                "Å": "A",
                "Ǻ": "A",
                "Ǎ": "A",
                "Ȁ": "A",
                "Ȃ": "A",
                "Ạ": "A",
                "Ậ": "A",
                "Ặ": "A",
                "Ḁ": "A",
                "Ą": "A",
                "Ⱥ": "A",
                "Ɐ": "A",
                "Ꜳ": "AA",
                "Æ": "AE",
                "Ǽ": "AE",
                "Ǣ": "AE",
                "Ꜵ": "AO",
                "Ꜷ": "AU",
                "Ꜹ": "AV",
                "Ꜻ": "AV",
                "Ꜽ": "AY",
                "Ⓑ": "B",
                "Ｂ": "B",
                "Ḃ": "B",
                "Ḅ": "B",
                "Ḇ": "B",
                "Ƀ": "B",
                "Ƃ": "B",
                "Ɓ": "B",
                "Ⓒ": "C",
                "Ｃ": "C",
                "Ć": "C",
                "Ĉ": "C",
                "Ċ": "C",
                "Č": "C",
                "Ç": "C",
                "Ḉ": "C",
                "Ƈ": "C",
                "Ȼ": "C",
                "Ꜿ": "C",
                "Ⓓ": "D",
                "Ｄ": "D",
                "Ḋ": "D",
                "Ď": "D",
                "Ḍ": "D",
                "Ḑ": "D",
                "Ḓ": "D",
                "Ḏ": "D",
                "Đ": "D",
                "Ƌ": "D",
                "Ɗ": "D",
                "Ɖ": "D",
                "Ꝺ": "D",
                "Ǳ": "DZ",
                "Ǆ": "DZ",
                "ǲ": "Dz",
                "ǅ": "Dz",
                "Ⓔ": "E",
                "Ｅ": "E",
                "È": "E",
                "É": "E",
                "Ê": "E",
                "Ề": "E",
                "Ế": "E",
                "Ễ": "E",
                "Ể": "E",
                "Ẽ": "E",
                "Ē": "E",
                "Ḕ": "E",
                "Ḗ": "E",
                "Ĕ": "E",
                "Ė": "E",
                "Ë": "E",
                "Ẻ": "E",
                "Ě": "E",
                "Ȅ": "E",
                "Ȇ": "E",
                "Ẹ": "E",
                "Ệ": "E",
                "Ȩ": "E",
                "Ḝ": "E",
                "Ę": "E",
                "Ḙ": "E",
                "Ḛ": "E",
                "Ɛ": "E",
                "Ǝ": "E",
                "Ⓕ": "F",
                "Ｆ": "F",
                "Ḟ": "F",
                "Ƒ": "F",
                "Ꝼ": "F",
                "Ⓖ": "G",
                "Ｇ": "G",
                "Ǵ": "G",
                "Ĝ": "G",
                "Ḡ": "G",
                "Ğ": "G",
                "Ġ": "G",
                "Ǧ": "G",
                "Ģ": "G",
                "Ǥ": "G",
                "Ɠ": "G",
                "Ꞡ": "G",
                "Ᵹ": "G",
                "Ꝿ": "G",
                "Ⓗ": "H",
                "Ｈ": "H",
                "Ĥ": "H",
                "Ḣ": "H",
                "Ḧ": "H",
                "Ȟ": "H",
                "Ḥ": "H",
                "Ḩ": "H",
                "Ḫ": "H",
                "Ħ": "H",
                "Ⱨ": "H",
                "Ⱶ": "H",
                "Ɥ": "H",
                "Ⓘ": "I",
                "Ｉ": "I",
                "Ì": "I",
                "Í": "I",
                "Î": "I",
                "Ĩ": "I",
                "Ī": "I",
                "Ĭ": "I",
                "İ": "I",
                "Ï": "I",
                "Ḯ": "I",
                "Ỉ": "I",
                "Ǐ": "I",
                "Ȉ": "I",
                "Ȋ": "I",
                "Ị": "I",
                "Į": "I",
                "Ḭ": "I",
                "Ɨ": "I",
                "Ⓙ": "J",
                "Ｊ": "J",
                "Ĵ": "J",
                "Ɉ": "J",
                "Ⓚ": "K",
                "Ｋ": "K",
                "Ḱ": "K",
                "Ǩ": "K",
                "Ḳ": "K",
                "Ķ": "K",
                "Ḵ": "K",
                "Ƙ": "K",
                "Ⱪ": "K",
                "Ꝁ": "K",
                "Ꝃ": "K",
                "Ꝅ": "K",
                "Ꞣ": "K",
                "Ⓛ": "L",
                "Ｌ": "L",
                "Ŀ": "L",
                "Ĺ": "L",
                "Ľ": "L",
                "Ḷ": "L",
                "Ḹ": "L",
                "Ļ": "L",
                "Ḽ": "L",
                "Ḻ": "L",
                "Ł": "L",
                "Ƚ": "L",
                "Ɫ": "L",
                "Ⱡ": "L",
                "Ꝉ": "L",
                "Ꝇ": "L",
                "Ꞁ": "L",
                "Ǉ": "LJ",
                "ǈ": "Lj",
                "Ⓜ": "M",
                "Ｍ": "M",
                "Ḿ": "M",
                "Ṁ": "M",
                "Ṃ": "M",
                "Ɱ": "M",
                "Ɯ": "M",
                "Ⓝ": "N",
                "Ｎ": "N",
                "Ǹ": "N",
                "Ń": "N",
                "Ñ": "N",
                "Ṅ": "N",
                "Ň": "N",
                "Ṇ": "N",
                "Ņ": "N",
                "Ṋ": "N",
                "Ṉ": "N",
                "Ƞ": "N",
                "Ɲ": "N",
                "Ꞑ": "N",
                "Ꞥ": "N",
                "Ǌ": "NJ",
                "ǋ": "Nj",
                "Ⓞ": "O",
                "Ｏ": "O",
                "Ò": "O",
                "Ó": "O",
                "Ô": "O",
                "Ồ": "O",
                "Ố": "O",
                "Ỗ": "O",
                "Ổ": "O",
                "Õ": "O",
                "Ṍ": "O",
                "Ȭ": "O",
                "Ṏ": "O",
                "Ō": "O",
                "Ṑ": "O",
                "Ṓ": "O",
                "Ŏ": "O",
                "Ȯ": "O",
                "Ȱ": "O",
                "Ö": "O",
                "Ȫ": "O",
                "Ỏ": "O",
                "Ő": "O",
                "Ǒ": "O",
                "Ȍ": "O",
                "Ȏ": "O",
                "Ơ": "O",
                "Ờ": "O",
                "Ớ": "O",
                "Ỡ": "O",
                "Ở": "O",
                "Ợ": "O",
                "Ọ": "O",
                "Ộ": "O",
                "Ǫ": "O",
                "Ǭ": "O",
                "Ø": "O",
                "Ǿ": "O",
                "Ɔ": "O",
                "Ɵ": "O",
                "Ꝋ": "O",
                "Ꝍ": "O",
                "Œ": "OE",
                "Ƣ": "OI",
                "Ꝏ": "OO",
                "Ȣ": "OU",
                "Ⓟ": "P",
                "Ｐ": "P",
                "Ṕ": "P",
                "Ṗ": "P",
                "Ƥ": "P",
                "Ᵽ": "P",
                "Ꝑ": "P",
                "Ꝓ": "P",
                "Ꝕ": "P",
                "Ⓠ": "Q",
                "Ｑ": "Q",
                "Ꝗ": "Q",
                "Ꝙ": "Q",
                "Ɋ": "Q",
                "Ⓡ": "R",
                "Ｒ": "R",
                "Ŕ": "R",
                "Ṙ": "R",
                "Ř": "R",
                "Ȑ": "R",
                "Ȓ": "R",
                "Ṛ": "R",
                "Ṝ": "R",
                "Ŗ": "R",
                "Ṟ": "R",
                "Ɍ": "R",
                "Ɽ": "R",
                "Ꝛ": "R",
                "Ꞧ": "R",
                "Ꞃ": "R",
                "Ⓢ": "S",
                "Ｓ": "S",
                "ẞ": "S",
                "Ś": "S",
                "Ṥ": "S",
                "Ŝ": "S",
                "Ṡ": "S",
                "Š": "S",
                "Ṧ": "S",
                "Ṣ": "S",
                "Ṩ": "S",
                "Ș": "S",
                "Ş": "S",
                "Ȿ": "S",
                "Ꞩ": "S",
                "Ꞅ": "S",
                "Ⓣ": "T",
                "Ｔ": "T",
                "Ṫ": "T",
                "Ť": "T",
                "Ṭ": "T",
                "Ț": "T",
                "Ţ": "T",
                "Ṱ": "T",
                "Ṯ": "T",
                "Ŧ": "T",
                "Ƭ": "T",
                "Ʈ": "T",
                "Ⱦ": "T",
                "Ꞇ": "T",
                "Ꜩ": "TZ",
                "Ⓤ": "U",
                "Ｕ": "U",
                "Ù": "U",
                "Ú": "U",
                "Û": "U",
                "Ũ": "U",
                "Ṹ": "U",
                "Ū": "U",
                "Ṻ": "U",
                "Ŭ": "U",
                "Ü": "U",
                "Ǜ": "U",
                "Ǘ": "U",
                "Ǖ": "U",
                "Ǚ": "U",
                "Ủ": "U",
                "Ů": "U",
                "Ű": "U",
                "Ǔ": "U",
                "Ȕ": "U",
                "Ȗ": "U",
                "Ư": "U",
                "Ừ": "U",
                "Ứ": "U",
                "Ữ": "U",
                "Ử": "U",
                "Ự": "U",
                "Ụ": "U",
                "Ṳ": "U",
                "Ų": "U",
                "Ṷ": "U",
                "Ṵ": "U",
                "Ʉ": "U",
                "Ⓥ": "V",
                "Ｖ": "V",
                "Ṽ": "V",
                "Ṿ": "V",
                "Ʋ": "V",
                "Ꝟ": "V",
                "Ʌ": "V",
                "Ꝡ": "VY",
                "Ⓦ": "W",
                "Ｗ": "W",
                "Ẁ": "W",
                "Ẃ": "W",
                "Ŵ": "W",
                "Ẇ": "W",
                "Ẅ": "W",
                "Ẉ": "W",
                "Ⱳ": "W",
                "Ⓧ": "X",
                "Ｘ": "X",
                "Ẋ": "X",
                "Ẍ": "X",
                "Ⓨ": "Y",
                "Ｙ": "Y",
                "Ỳ": "Y",
                "Ý": "Y",
                "Ŷ": "Y",
                "Ỹ": "Y",
                "Ȳ": "Y",
                "Ẏ": "Y",
                "Ÿ": "Y",
                "Ỷ": "Y",
                "Ỵ": "Y",
                "Ƴ": "Y",
                "Ɏ": "Y",
                "Ỿ": "Y",
                "Ⓩ": "Z",
                "Ｚ": "Z",
                "Ź": "Z",
                "Ẑ": "Z",
                "Ż": "Z",
                "Ž": "Z",
                "Ẓ": "Z",
                "Ẕ": "Z",
                "Ƶ": "Z",
                "Ȥ": "Z",
                "Ɀ": "Z",
                "Ⱬ": "Z",
                "Ꝣ": "Z",
                "ⓐ": "a",
                "ａ": "a",
                "ẚ": "a",
                "à": "a",
                "á": "a",
                "â": "a",
                "ầ": "a",
                "ấ": "a",
                "ẫ": "a",
                "ẩ": "a",
                "ã": "a",
                "ā": "a",
                "ă": "a",
                "ằ": "a",
                "ắ": "a",
                "ẵ": "a",
                "ẳ": "a",
                "ȧ": "a",
                "ǡ": "a",
                "ä": "a",
                "ǟ": "a",
                "ả": "a",
                "å": "a",
                "ǻ": "a",
                "ǎ": "a",
                "ȁ": "a",
                "ȃ": "a",
                "ạ": "a",
                "ậ": "a",
                "ặ": "a",
                "ḁ": "a",
                "ą": "a",
                "ⱥ": "a",
                "ɐ": "a",
                "ꜳ": "aa",
                "æ": "ae",
                "ǽ": "ae",
                "ǣ": "ae",
                "ꜵ": "ao",
                "ꜷ": "au",
                "ꜹ": "av",
                "ꜻ": "av",
                "ꜽ": "ay",
                "ⓑ": "b",
                "ｂ": "b",
                "ḃ": "b",
                "ḅ": "b",
                "ḇ": "b",
                "ƀ": "b",
                "ƃ": "b",
                "ɓ": "b",
                "ⓒ": "c",
                "ｃ": "c",
                "ć": "c",
                "ĉ": "c",
                "ċ": "c",
                "č": "c",
                "ç": "c",
                "ḉ": "c",
                "ƈ": "c",
                "ȼ": "c",
                "ꜿ": "c",
                "ↄ": "c",
                "ⓓ": "d",
                "ｄ": "d",
                "ḋ": "d",
                "ď": "d",
                "ḍ": "d",
                "ḑ": "d",
                "ḓ": "d",
                "ḏ": "d",
                "đ": "d",
                "ƌ": "d",
                "ɖ": "d",
                "ɗ": "d",
                "ꝺ": "d",
                "ǳ": "dz",
                "ǆ": "dz",
                "ⓔ": "e",
                "ｅ": "e",
                "è": "e",
                "é": "e",
                "ê": "e",
                "ề": "e",
                "ế": "e",
                "ễ": "e",
                "ể": "e",
                "ẽ": "e",
                "ē": "e",
                "ḕ": "e",
                "ḗ": "e",
                "ĕ": "e",
                "ė": "e",
                "ë": "e",
                "ẻ": "e",
                "ě": "e",
                "ȅ": "e",
                "ȇ": "e",
                "ẹ": "e",
                "ệ": "e",
                "ȩ": "e",
                "ḝ": "e",
                "ę": "e",
                "ḙ": "e",
                "ḛ": "e",
                "ɇ": "e",
                "ɛ": "e",
                "ǝ": "e",
                "ⓕ": "f",
                "ｆ": "f",
                "ḟ": "f",
                "ƒ": "f",
                "ꝼ": "f",
                "ⓖ": "g",
                "ｇ": "g",
                "ǵ": "g",
                "ĝ": "g",
                "ḡ": "g",
                "ğ": "g",
                "ġ": "g",
                "ǧ": "g",
                "ģ": "g",
                "ǥ": "g",
                "ɠ": "g",
                "ꞡ": "g",
                "ᵹ": "g",
                "ꝿ": "g",
                "ⓗ": "h",
                "ｈ": "h",
                "ĥ": "h",
                "ḣ": "h",
                "ḧ": "h",
                "ȟ": "h",
                "ḥ": "h",
                "ḩ": "h",
                "ḫ": "h",
                "ẖ": "h",
                "ħ": "h",
                "ⱨ": "h",
                "ⱶ": "h",
                "ɥ": "h",
                "ƕ": "hv",
                "ⓘ": "i",
                "ｉ": "i",
                "ì": "i",
                "í": "i",
                "î": "i",
                "ĩ": "i",
                "ī": "i",
                "ĭ": "i",
                "ï": "i",
                "ḯ": "i",
                "ỉ": "i",
                "ǐ": "i",
                "ȉ": "i",
                "ȋ": "i",
                "ị": "i",
                "į": "i",
                "ḭ": "i",
                "ɨ": "i",
                "ı": "i",
                "ⓙ": "j",
                "ｊ": "j",
                "ĵ": "j",
                "ǰ": "j",
                "ɉ": "j",
                "ⓚ": "k",
                "ｋ": "k",
                "ḱ": "k",
                "ǩ": "k",
                "ḳ": "k",
                "ķ": "k",
                "ḵ": "k",
                "ƙ": "k",
                "ⱪ": "k",
                "ꝁ": "k",
                "ꝃ": "k",
                "ꝅ": "k",
                "ꞣ": "k",
                "ⓛ": "l",
                "ｌ": "l",
                "ŀ": "l",
                "ĺ": "l",
                "ľ": "l",
                "ḷ": "l",
                "ḹ": "l",
                "ļ": "l",
                "ḽ": "l",
                "ḻ": "l",
                "ſ": "l",
                "ł": "l",
                "ƚ": "l",
                "ɫ": "l",
                "ⱡ": "l",
                "ꝉ": "l",
                "ꞁ": "l",
                "ꝇ": "l",
                "ǉ": "lj",
                "ⓜ": "m",
                "ｍ": "m",
                "ḿ": "m",
                "ṁ": "m",
                "ṃ": "m",
                "ɱ": "m",
                "ɯ": "m",
                "ⓝ": "n",
                "ｎ": "n",
                "ǹ": "n",
                "ń": "n",
                "ñ": "n",
                "ṅ": "n",
                "ň": "n",
                "ṇ": "n",
                "ņ": "n",
                "ṋ": "n",
                "ṉ": "n",
                "ƞ": "n",
                "ɲ": "n",
                "ŉ": "n",
                "ꞑ": "n",
                "ꞥ": "n",
                "ǌ": "nj",
                "ⓞ": "o",
                "ｏ": "o",
                "ò": "o",
                "ó": "o",
                "ô": "o",
                "ồ": "o",
                "ố": "o",
                "ỗ": "o",
                "ổ": "o",
                "õ": "o",
                "ṍ": "o",
                "ȭ": "o",
                "ṏ": "o",
                "ō": "o",
                "ṑ": "o",
                "ṓ": "o",
                "ŏ": "o",
                "ȯ": "o",
                "ȱ": "o",
                "ö": "o",
                "ȫ": "o",
                "ỏ": "o",
                "ő": "o",
                "ǒ": "o",
                "ȍ": "o",
                "ȏ": "o",
                "ơ": "o",
                "ờ": "o",
                "ớ": "o",
                "ỡ": "o",
                "ở": "o",
                "ợ": "o",
                "ọ": "o",
                "ộ": "o",
                "ǫ": "o",
                "ǭ": "o",
                "ø": "o",
                "ǿ": "o",
                "ɔ": "o",
                "ꝋ": "o",
                "ꝍ": "o",
                "ɵ": "o",
                "œ": "oe",
                "ƣ": "oi",
                "ȣ": "ou",
                "ꝏ": "oo",
                "ⓟ": "p",
                "ｐ": "p",
                "ṕ": "p",
                "ṗ": "p",
                "ƥ": "p",
                "ᵽ": "p",
                "ꝑ": "p",
                "ꝓ": "p",
                "ꝕ": "p",
                "ⓠ": "q",
                "ｑ": "q",
                "ɋ": "q",
                "ꝗ": "q",
                "ꝙ": "q",
                "ⓡ": "r",
                "ｒ": "r",
                "ŕ": "r",
                "ṙ": "r",
                "ř": "r",
                "ȑ": "r",
                "ȓ": "r",
                "ṛ": "r",
                "ṝ": "r",
                "ŗ": "r",
                "ṟ": "r",
                "ɍ": "r",
                "ɽ": "r",
                "ꝛ": "r",
                "ꞧ": "r",
                "ꞃ": "r",
                "ⓢ": "s",
                "ｓ": "s",
                "ß": "s",
                "ś": "s",
                "ṥ": "s",
                "ŝ": "s",
                "ṡ": "s",
                "š": "s",
                "ṧ": "s",
                "ṣ": "s",
                "ṩ": "s",
                "ș": "s",
                "ş": "s",
                "ȿ": "s",
                "ꞩ": "s",
                "ꞅ": "s",
                "ẛ": "s",
                "ⓣ": "t",
                "ｔ": "t",
                "ṫ": "t",
                "ẗ": "t",
                "ť": "t",
                "ṭ": "t",
                "ț": "t",
                "ţ": "t",
                "ṱ": "t",
                "ṯ": "t",
                "ŧ": "t",
                "ƭ": "t",
                "ʈ": "t",
                "ⱦ": "t",
                "ꞇ": "t",
                "ꜩ": "tz",
                "ⓤ": "u",
                "ｕ": "u",
                "ù": "u",
                "ú": "u",
                "û": "u",
                "ũ": "u",
                "ṹ": "u",
                "ū": "u",
                "ṻ": "u",
                "ŭ": "u",
                "ü": "u",
                "ǜ": "u",
                "ǘ": "u",
                "ǖ": "u",
                "ǚ": "u",
                "ủ": "u",
                "ů": "u",
                "ű": "u",
                "ǔ": "u",
                "ȕ": "u",
                "ȗ": "u",
                "ư": "u",
                "ừ": "u",
                "ứ": "u",
                "ữ": "u",
                "ử": "u",
                "ự": "u",
                "ụ": "u",
                "ṳ": "u",
                "ų": "u",
                "ṷ": "u",
                "ṵ": "u",
                "ʉ": "u",
                "ⓥ": "v",
                "ｖ": "v",
                "ṽ": "v",
                "ṿ": "v",
                "ʋ": "v",
                "ꝟ": "v",
                "ʌ": "v",
                "ꝡ": "vy",
                "ⓦ": "w",
                "ｗ": "w",
                "ẁ": "w",
                "ẃ": "w",
                "ŵ": "w",
                "ẇ": "w",
                "ẅ": "w",
                "ẘ": "w",
                "ẉ": "w",
                "ⱳ": "w",
                "ⓧ": "x",
                "ｘ": "x",
                "ẋ": "x",
                "ẍ": "x",
                "ⓨ": "y",
                "ｙ": "y",
                "ỳ": "y",
                "ý": "y",
                "ŷ": "y",
                "ỹ": "y",
                "ȳ": "y",
                "ẏ": "y",
                "ÿ": "y",
                "ỷ": "y",
                "ẙ": "y",
                "ỵ": "y",
                "ƴ": "y",
                "ɏ": "y",
                "ỿ": "y",
                "ⓩ": "z",
                "ｚ": "z",
                "ź": "z",
                "ẑ": "z",
                "ż": "z",
                "ž": "z",
                "ẓ": "z",
                "ẕ": "z",
                "ƶ": "z",
                "ȥ": "z",
                "ɀ": "z",
                "ⱬ": "z",
                "ꝣ": "z",
                "Ά": "Α",
                "Έ": "Ε",
                "Ή": "Η",
                "Ί": "Ι",
                "Ϊ": "Ι",
                "Ό": "Ο",
                "Ύ": "Υ",
                "Ϋ": "Υ",
                "Ώ": "Ω",
                "ά": "α",
                "έ": "ε",
                "ή": "η",
                "ί": "ι",
                "ϊ": "ι",
                "ΐ": "ι",
                "ό": "ο",
                "ύ": "υ",
                "ϋ": "υ",
                "ΰ": "υ",
                "ώ": "ω",
                "ς": "σ",
                "’": "'"
            }
        }),
        t.define("select2/data/base", ["../utils"], function(n) {
            function t() {
                t.__super__.constructor.call(this)
            }
            return n.Extend(t, n.Observable),
            t.prototype.current = function() {
                throw new Error("The `current` method must be defined in child classes.");
            }
            ,
            t.prototype.query = function() {
                throw new Error("The `query` method must be defined in child classes.");
            }
            ,
            t.prototype.bind = function() {}
            ,
            t.prototype.destroy = function() {}
            ,
            t.prototype.generateResultId = function(t, i) {
                var r = t.id + "-result-";
                return r += n.generateChars(4),
                r + (i.id != null ? "-" + i.id.toString() : "-" + n.generateChars(4))
            }
            ,
            t
        }),
        t.define("select2/data/select", ["./base", "../utils", "jquery"], function(n, t, i) {
            function r(n, t) {
                this.$element = n;
                this.options = t;
                r.__super__.constructor.call(this)
            }
            return t.Extend(r, n),
            r.prototype.current = function(n) {
                var t = []
                  , r = this;
                this.$element.find(":selected").each(function() {
                    var n = i(this)
                      , u = r.item(n);
                    t.push(u)
                });
                n(t)
            }
            ,
            r.prototype.select = function(n) {
                var t = this, r;
                if (n.selected = !0,
                i(n.element).is("option")) {
                    n.element.selected = !0;
                    this.$element.trigger("change");
                    return
                }
                this.$element.prop("multiple") ? this.current(function(r) {
                    var f = [], u, e;
                    for (n = [n],
                    n.push.apply(n, r),
                    u = 0; u < n.length; u++)
                        e = n[u].id,
                        i.inArray(e, f) === -1 && f.push(e);
                    t.$element.val(f);
                    t.$element.trigger("change")
                }) : (r = n.id,
                this.$element.val(r),
                this.$element.trigger("change"))
            }
            ,
            r.prototype.unselect = function(n) {
                var t = this;
                if (this.$element.prop("multiple")) {
                    if (n.selected = !1,
                    i(n.element).is("option")) {
                        n.element.selected = !1;
                        this.$element.trigger("change");
                        return
                    }
                    this.current(function(r) {
                        for (var u, f = [], e = 0; e < r.length; e++)
                            u = r[e].id,
                            u !== n.id && i.inArray(u, f) === -1 && f.push(u);
                        t.$element.val(f);
                        t.$element.trigger("change")
                    })
                }
            }
            ,
            r.prototype.bind = function(n) {
                var t = this;
                this.container = n;
                n.on("select", function(n) {
                    t.select(n.data)
                });
                n.on("unselect", function(n) {
                    t.unselect(n.data)
                })
            }
            ,
            r.prototype.destroy = function() {
                this.$element.find("*").each(function() {
                    t.RemoveData(this)
                })
            }
            ,
            r.prototype.query = function(n, t) {
                var r = []
                  , u = this
                  , f = this.$element.children();
                f.each(function() {
                    var t = i(this), e, f;
                    (t.is("option") || t.is("optgroup")) && (e = u.item(t),
                    f = u.matches(n, e),
                    f !== null && r.push(f))
                });
                t({
                    results: r
                })
            }
            ,
            r.prototype.addOptions = function(n) {
                t.appendMany(this.$element, n)
            }
            ,
            r.prototype.option = function(n) {
                var r, f, u;
                return n.children ? (r = document.createElement("optgroup"),
                r.label = n.text) : (r = document.createElement("option"),
                r.textContent !== undefined ? r.textContent = n.text : r.innerText = n.text),
                n.id !== undefined && (r.value = n.id),
                n.disabled && (r.disabled = !0),
                n.selected && (r.selected = !0),
                n.title && (r.title = n.title),
                f = i(r),
                u = this._normalizeItem(n),
                u.element = r,
                t.StoreData(r, "data", u),
                f
            }
            ,
            r.prototype.item = function(n) {
                var r = {}, f, e, u, o, s;
                if (r = t.GetData(n[0], "data"),
                r != null)
                    return r;
                if (n.is("option"))
                    r = {
                        id: n.val(),
                        text: n.text(),
                        disabled: n.prop("disabled"),
                        selected: n.prop("selected"),
                        title: n.prop("title")
                    };
                else if (n.is("optgroup")) {
                    for (r = {
                        text: n.prop("label"),
                        children: [],
                        title: n.prop("title")
                    },
                    f = n.children("option"),
                    e = [],
                    u = 0; u < f.length; u++)
                        o = i(f[u]),
                        s = this.item(o),
                        e.push(s);
                    r.children = e
                }
                return r = this._normalizeItem(r),
                r.element = n[0],
                t.StoreData(n[0], "data", r),
                r
            }
            ,
            r.prototype._normalizeItem = function(n) {
                n !== Object(n) && (n = {
                    id: n,
                    text: n
                });
                n = i.extend({}, {
                    text: ""
                }, n);
                return n.id != null && (n.id = n.id.toString()),
                n.text != null && (n.text = n.text.toString()),
                n._resultId == null && n.id && this.container != null && (n._resultId = this.generateResultId(this.container, n)),
                i.extend({}, {
                    selected: !1,
                    disabled: !1
                }, n)
            }
            ,
            r.prototype.matches = function(n, t) {
                var i = this.options.get("matcher");
                return i(n, t)
            }
            ,
            r
        }),
        t.define("select2/data/array", ["./select", "../utils", "jquery"], function(n, t, i) {
            function r(n, t) {
                this._dataToConvert = t.get("data") || [];
                r.__super__.constructor.call(this, n, t)
            }
            return t.Extend(r, n),
            r.prototype.bind = function(n, t) {
                r.__super__.bind.call(this, n, t);
                this.addOptions(this.convertToOptions(this._dataToConvert))
            }
            ,
            r.prototype.select = function(n) {
                var t = this.$element.find("option").filter(function(t, i) {
                    return i.value == n.id.toString()
                });
                t.length === 0 && (t = this.option(n),
                this.addOptions(t));
                r.__super__.select.call(this, n)
            }
            ,
            r.prototype.convertToOptions = function(n) {
                function a(n) {
                    return function() {
                        return i(this).val() == n.id
                    }
                }
                for (var r, f, h, c = this, e = this.$element.find("option"), l = e.map(function() {
                    return c.item(i(this)).id
                }).get(), o = [], u = 0; u < n.length; u++) {
                    if (r = this._normalizeItem(n[u]),
                    i.inArray(r.id, l) >= 0) {
                        var s = e.filter(a(r))
                          , v = this.item(s)
                          , y = i.extend(!0, {}, r, v)
                          , p = this.option(y);
                        s.replaceWith(p);
                        continue
                    }
                    f = this.option(r);
                    r.children && (h = this.convertToOptions(r.children),
                    t.appendMany(f, h));
                    o.push(f)
                }
                return o
            }
            ,
            r
        }),
        t.define("select2/data/ajax", ["./array", "../utils", "jquery"], function(n, t, i) {
            function r(n, t) {
                this.ajaxOptions = this._applyDefaults(t.get("ajax"));
                this.ajaxOptions.processResults != null && (this.processResults = this.ajaxOptions.processResults);
                r.__super__.constructor.call(this, n, t)
            }
            return t.Extend(r, n),
            r.prototype._applyDefaults = function(n) {
                var t = {
                    data: function(n) {
                        return i.extend({}, n, {
                            q: n.term
                        })
                    },
                    transport: function(n, t, r) {
                        var u = i.ajax(n);
                        return u.then(t),
                        u.fail(r),
                        u
                    }
                };
                return i.extend({}, t, n, !0)
            }
            ,
            r.prototype.processResults = function(n) {
                return n
            }
            ,
            r.prototype.query = function(n, t) {
                function f() {
                    var f = r.transport(r, function(r) {
                        var f = u.processResults(r, n);
                        u.options.get("debug") && window.console && console.error && (f && f.results && i.isArray(f.results) || console.error("Select2: The AJAX results did not return an array in the `results` key of the response."));
                        t(f)
                    }, function() {
                        "status"in f && (f.status === 0 || f.status === "0") || u.trigger("results:message", {
                            message: "errorLoading"
                        })
                    });
                    u._request = f
                }
                var u = this, r;
                this._request != null && (i.isFunction(this._request.abort) && this._request.abort(),
                this._request = null);
                r = i.extend({
                    type: "GET"
                }, this.ajaxOptions);
                typeof r.url == "function" && (r.url = r.url.call(this.$element, n));
                typeof r.data == "function" && (r.data = r.data.call(this.$element, n));
                this.ajaxOptions.delay && n.term != null ? (this._queryTimeout && window.clearTimeout(this._queryTimeout),
                this._queryTimeout = window.setTimeout(f, this.ajaxOptions.delay)) : f()
            }
            ,
            r
        }),
        t.define("select2/data/tags", ["jquery"], function(n) {
            function t(t, i, r) {
                var f = r.get("tags"), o = r.get("createTag"), e, u;
                if (o !== undefined && (this.createTag = o),
                e = r.get("insertTag"),
                e !== undefined && (this.insertTag = e),
                t.call(this, i, r),
                n.isArray(f))
                    for (u = 0; u < f.length; u++) {
                        var s = f[u]
                          , h = this._normalizeItem(s)
                          , c = this.option(h);
                        this.$element.append(c)
                    }
            }
            return t.prototype.query = function(n, t, i) {
                function u(n, f) {
                    for (var o, c, e = n.results, s = 0; s < e.length; s++) {
                        var h = e[s]
                          , l = h.children != null && !u({
                            results: h.children
                        }, !0)
                          , a = (h.text || "").toUpperCase()
                          , v = (t.term || "").toUpperCase()
                          , y = a === v;
                        if (y || l) {
                            if (f)
                                return !1;
                            n.data = e;
                            i(n);
                            return
                        }
                    }
                    if (f)
                        return !0;
                    o = r.createTag(t);
                    o != null && (c = r.option(o),
                    c.attr("data-select2-tag", !0),
                    r.addOptions([c]),
                    r.insertTag(e, o));
                    n.results = e;
                    i(n)
                }
                var r = this;
                if (this._removeOldTags(),
                t.term == null || t.page != null) {
                    n.call(this, t, i);
                    return
                }
                n.call(this, t, u)
            }
            ,
            t.prototype.createTag = function(t, i) {
                var r = n.trim(i.term);
                return r === "" ? null : {
                    id: r,
                    text: r
                }
            }
            ,
            t.prototype.insertTag = function(n, t, i) {
                t.unshift(i)
            }
            ,
            t.prototype._removeOldTags = function() {
                var t = this.$element.find("option[data-select2-tag]");
                t.each(function() {
                    this.selected || n(this).remove()
                })
            }
            ,
            t
        }),
        t.define("select2/data/tokenizer", ["jquery"], function(n) {
            function t(n, t, i) {
                var r = i.get("tokenizer");
                r !== undefined && (this.tokenizer = r);
                n.call(this, t, i)
            }
            return t.prototype.bind = function(n, t, i) {
                n.call(this, t, i);
                this.$search = t.dropdown.$search || t.selection.$search || i.find(".select2-search__field")
            }
            ,
            t.prototype.query = function(t, i, r) {
                function e(t) {
                    var i = u._normalizeItem(t), f = u.$element.find("option").filter(function() {
                        return n(this).val() === i.id
                    }), r;
                    f.length || (r = u.option(i),
                    r.attr("data-select2-tag", !0),
                    u._removeOldTags(),
                    u.addOptions([r]));
                    o(i)
                }
                function o(n) {
                    u.trigger("select", {
                        data: n
                    })
                }
                var u = this, f;
                i.term = i.term || "";
                f = this.tokenizer(i, this.options, e);
                f.term !== i.term && (this.$search.length && (this.$search.val(f.term),
                this.$search.trigger("focus")),
                i.term = f.term);
                t.call(this, i, r)
            }
            ,
            t.prototype.tokenizer = function(t, i, r, u) {
                for (var h = r.get("tokenSeparators") || [], e = i.term, f = 0, c = this.createTag || function(n) {
                    return {
                        id: n.term,
                        text: n.term
                    }
                }
                , o; f < e.length; ) {
                    if (o = e[f],
                    n.inArray(o, h) === -1) {
                        f++;
                        continue
                    }
                    var l = e.substr(0, f)
                      , a = n.extend({}, i, {
                        term: l
                    })
                      , s = c(a);
                    if (s == null) {
                        f++;
                        continue
                    }
                    u(s);
                    e = e.substr(f + 1) || "";
                    f = 0
                }
                return {
                    term: e
                }
            }
            ,
            t
        }),
        t.define("select2/data/minimumInputLength", [], function() {
            function n(n, t, i) {
                this.minimumInputLength = i.get("minimumInputLength");
                n.call(this, t, i)
            }
            return n.prototype.query = function(n, t, i) {
                if (t.term = t.term || "",
                t.term.length < this.minimumInputLength) {
                    this.trigger("results:message", {
                        message: "inputTooShort",
                        args: {
                            minimum: this.minimumInputLength,
                            input: t.term,
                            params: t
                        }
                    });
                    return
                }
                n.call(this, t, i)
            }
            ,
            n
        }),
        t.define("select2/data/maximumInputLength", [], function() {
            function n(n, t, i) {
                this.maximumInputLength = i.get("maximumInputLength");
                n.call(this, t, i)
            }
            return n.prototype.query = function(n, t, i) {
                if (t.term = t.term || "",
                this.maximumInputLength > 0 && t.term.length > this.maximumInputLength) {
                    this.trigger("results:message", {
                        message: "inputTooLong",
                        args: {
                            maximum: this.maximumInputLength,
                            input: t.term,
                            params: t
                        }
                    });
                    return
                }
                n.call(this, t, i)
            }
            ,
            n
        }),
        t.define("select2/data/maximumSelectionLength", [], function() {
            function n(n, t, i) {
                this.maximumSelectionLength = i.get("maximumSelectionLength");
                n.call(this, t, i)
            }
            return n.prototype.bind = function(n, t, i) {
                var r = this;
                n.call(this, t, i);
                t.on("select", function() {
                    r._checkIfMaximumSelected()
                })
            }
            ,
            n.prototype.query = function(n, t, i) {
                var r = this;
                this._checkIfMaximumSelected(function() {
                    n.call(r, t, i)
                })
            }
            ,
            n.prototype._checkIfMaximumSelected = function(n, t) {
                var i = this;
                this.current(function(n) {
                    var r = n != null ? n.length : 0;
                    if (i.maximumSelectionLength > 0 && r >= i.maximumSelectionLength) {
                        i.trigger("results:message", {
                            message: "maximumSelected",
                            args: {
                                maximum: i.maximumSelectionLength
                            }
                        });
                        return
                    }
                    t && t()
                })
            }
            ,
            n
        }),
        t.define("select2/dropdown", ["jquery", "./utils"], function(n, t) {
            function i(n, t) {
                this.$element = n;
                this.options = t;
                i.__super__.constructor.call(this)
            }
            return t.Extend(i, t.Observable),
            i.prototype.render = function() {
                var i = this.$element[0].className.indexOf("multidropdown"), t;
                return t = i > 0 ? n('<span class="select2-dropdown"><span class="select2-results multidropdown"><\/span><\/span>') : n('<span class="select2-dropdown"><span class="select2-results"><\/span><\/span>'),
                t.attr("dir", this.options.get("dir")),
                this.$dropdown = t,
                t
            }
            ,
            i.prototype.bind = function() {}
            ,
            i.prototype.position = function() {}
            ,
            i.prototype.destroy = function() {
                this.$dropdown.remove()
            }
            ,
            i
        }),
        t.define("select2/dropdown/search", ["jquery", "../utils"], function(n) {
            function t() {}
            return t.prototype.render = function(t) {
                var r = t.call(this)
                  , i = n('<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list" /><\/span>');
                return this.$searchContainer = i,
                this.$search = i.find("input"),
                r.prepend(i),
                r
            }
            ,
            t.prototype.bind = function(t, i, r) {
                var u = this
                  , f = i.id + "-results";
                t.call(this, i, r);
                this.$search.on("keydown", function(n) {
                    u.trigger("keypress", n);
                    u._keyUpPrevented = n.isDefaultPrevented()
                });
                this.$search.on("input", function() {
                    n(this).off("keyup")
                });
                this.$search.on("keyup input", function(n) {
                    u.handleSearch(n)
                });
                i.on("open", function() {
                    u.$search.attr("tabindex", 0);
                    u.$search.attr("aria-controls", f);
                    u.$search.trigger("focus");
                    window.setTimeout(function() {
                        u.$search.trigger("focus")
                    }, 0)
                });
                i.on("close", function() {
                    u.$search.attr("tabindex", -1);
                    u.$search.removeAttr("aria-controls");
                    u.$search.removeAttr("aria-activedescendant");
                    u.$search.val("");
                    u.$search.trigger("blur")
                });
                i.on("focus", function() {
                    i.isOpen() || u.$search.trigger("focus")
                });
                i.on("results:all", function(n) {
                    if (n.query.term == null || n.query.term === "") {
                        var t = u.showSearch(n);
                        t ? u.$searchContainer.removeClass("select2-search--hide") : u.$searchContainer.addClass("select2-search--hide")
                    }
                });
                i.on("results:focus", function(n) {
                    n.data._resultId ? u.$search.attr("aria-activedescendant", n.data._resultId) : u.$search.removeAttr("aria-activedescendant")
                })
            }
            ,
            t.prototype.handleSearch = function() {
                if (!this._keyUpPrevented) {
                    var n = this.$search.val();
                    this.trigger("query", {
                        term: n
                    })
                }
                this._keyUpPrevented = !1
            }
            ,
            t.prototype.showSearch = function() {
                return !0
            }
            ,
            t
        }),
        t.define("select2/dropdown/hidePlaceholder", [], function() {
            function n(n, t, i, r) {
                this.placeholder = this.normalizePlaceholder(i.get("placeholder"));
                n.call(this, t, i, r)
            }
            return n.prototype.append = function(n, t) {
                t.results = this.removePlaceholder(t.results);
                n.call(this, t)
            }
            ,
            n.prototype.normalizePlaceholder = function(n, t) {
                return typeof t == "string" && (t = {
                    id: "",
                    text: t
                }),
                t
            }
            ,
            n.prototype.removePlaceholder = function(n, t) {
                for (var u, r = t.slice(0), i = t.length - 1; i >= 0; i--)
                    u = t[i],
                    this.placeholder.id === u.id && r.splice(i, 1);
                return r
            }
            ,
            n
        }),
        t.define("select2/dropdown/infiniteScroll", ["jquery"], function(n) {
            function t(n, t, i, r) {
                this.lastParams = {};
                n.call(this, t, i, r);
                this.$loadingMore = this.createLoadingMore();
                this.loading = !1
            }
            return t.prototype.append = function(n, t) {
                this.$loadingMore.remove();
                this.loading = !1;
                n.call(this, t);
                this.showLoadingMore(t) && (this.$results.append(this.$loadingMore),
                this.loadMoreIfNeeded())
            }
            ,
            t.prototype.bind = function(n, t, i) {
                var r = this;
                n.call(this, t, i);
                t.on("query", function(n) {
                    r.lastParams = n;
                    r.loading = !0
                });
                t.on("query:append", function(n) {
                    r.lastParams = n;
                    r.loading = !0
                });
                this.$results.on("scroll", this.loadMoreIfNeeded.bind(this))
            }
            ,
            t.prototype.loadMoreIfNeeded = function() {
                var r = n.contains(document.documentElement, this.$loadingMore[0]), t, i;
                !this.loading && r && (t = this.$results.offset().top + this.$results.outerHeight(!1),
                i = this.$loadingMore.offset().top + this.$loadingMore.outerHeight(!1),
                t + 50 >= i && this.loadMore())
            }
            ,
            t.prototype.loadMore = function() {
                this.loading = !0;
                var t = n.extend({}, {
                    page: 1
                }, this.lastParams);
                t.page++;
                this.trigger("query:append", t)
            }
            ,
            t.prototype.showLoadingMore = function(n, t) {
                return t.pagination && t.pagination.more
            }
            ,
            t.prototype.createLoadingMore = function() {
                var t = n('<li class="select2-results__option select2-results__option--load-more"role="option" aria-disabled="true"><\/li>')
                  , i = this.options.get("translations").get("loadingMore");
                return t.html(i(this.lastParams)),
                t
            }
            ,
            t
        }),
        t.define("select2/dropdown/attachBody", ["jquery", "../utils"], function(n, t) {
            function i(t, i, r) {
                this.$dropdownParent = n(r.get("dropdownParent") || document.body);
                t.call(this, i, r)
            }
            return i.prototype.bind = function(n, t, i) {
                var r = this;
                n.call(this, t, i);
                t.on("open", function() {
                    r._showDropdown();
                    r._attachPositioningHandler(t);
                    r._bindContainerResultHandlers(t)
                });
                t.on("close", function() {
                    r._hideDropdown();
                    r._detachPositioningHandler(t)
                });
                this.$dropdownContainer.on("mousedown", function(n) {
                    n.stopPropagation()
                })
            }
            ,
            i.prototype.destroy = function(n) {
                n.call(this);
                this.$dropdownContainer.remove()
            }
            ,
            i.prototype.position = function(n, t, i) {
                t.attr("class", i.attr("class"));
                t.removeClass("select2");
                t.addClass("select2-container--open");
                t.css({
                    position: "absolute",
                    top: -999999
                });
                this.$container = i
            }
            ,
            i.prototype.render = function(t) {
                var i = n("<span><\/span>")
                  , r = t.call(this);
                return i.append(r),
                this.$dropdownContainer = i,
                i
            }
            ,
            i.prototype._hideDropdown = function() {
                this.$dropdownContainer.detach()
            }
            ,
            i.prototype._bindContainerResultHandlers = function(n, t) {
                if (!this._containerResultsHandlersBound) {
                    var i = this;
                    t.on("results:all", function() {
                        i._positionDropdown();
                        i._resizeDropdown()
                    });
                    t.on("results:append", function() {
                        i._positionDropdown();
                        i._resizeDropdown()
                    });
                    t.on("results:message", function() {
                        i._positionDropdown();
                        i._resizeDropdown()
                    });
                    t.on("select", function() {
                        i._positionDropdown();
                        i._resizeDropdown()
                    });
                    t.on("unselect", function() {
                        i._positionDropdown();
                        i._resizeDropdown()
                    });
                    this._containerResultsHandlersBound = !0
                }
            }
            ,
            i.prototype._attachPositioningHandler = function(i, r) {
                var u = this
                  , f = "scroll.select2." + r.id
                  , o = "resize.select2." + r.id
                  , s = "orientationchange.select2." + r.id
                  , e = this.$container.parents().filter(t.hasScroll);
                e.each(function() {
                    t.StoreData(this, "select2-scroll-position", {
                        x: n(this).scrollLeft(),
                        y: n(this).scrollTop()
                    })
                });
                e.on(f, function() {
                    var i = t.GetData(this, "select2-scroll-position");
                    n(this).scrollTop(i.y)
                });
                n(window).on(f + " " + o + " " + s, function() {
                    u._positionDropdown();
                    u._resizeDropdown()
                })
            }
            ,
            i.prototype._detachPositioningHandler = function(i, r) {
                var u = "scroll.select2." + r.id
                  , f = "resize.select2." + r.id
                  , e = "orientationchange.select2." + r.id
                  , o = this.$container.parents().filter(t.hasScroll);
                o.off(u);
                n(window).off(u + " " + f + " " + e)
            }
            ,
            i.prototype._positionDropdown = function() {
                var s = n(window), u = this.$dropdown.hasClass("select2-dropdown--above"), v = this.$dropdown.hasClass("select2-dropdown--below"), t = null, i = this.$container.offset(), r, o;
                i.bottom = i.top + this.$container.outerHeight(!1);
                r = {
                    height: this.$container.outerHeight(!1)
                };
                r.top = i.top;
                r.bottom = i.top + r.height;
                var h = {
                    height: this.$dropdown.outerHeight(!1)
                }
                  , c = {
                    top: s.scrollTop(),
                    bottom: s.scrollTop() + s.height()
                }
                  , l = c.top < i.top - h.height
                  , a = c.bottom > i.bottom + h.height
                  , f = {
                    left: i.left,
                    top: r.bottom
                }
                  , e = this.$dropdownParent;
                e.css("position") === "static" && (e = e.offsetParent());
                o = e.offset();
                f.top -= o.top;
                f.left -= o.left;
                u || v || (t = "below");
                a || !l || u ? !l && a && u && (t = "below") : t = "above";
                (t == "above" || u && t !== "below") && (f.top = r.top - o.top - h.height);
                t != null && (this.$dropdown.removeClass("select2-dropdown--below select2-dropdown--above").addClass("select2-dropdown--" + t),
                this.$container.removeClass("select2-container--below select2-container--above").addClass("select2-container--" + t));
                this.$dropdownContainer.css(f)
            }
            ,
            i.prototype._resizeDropdown = function() {
                var n = {
                    width: this.$container.outerWidth(!1) + "px"
                };
                this.options.get("dropdownAutoWidth") && (n.minWidth = n.width,
                n.position = "relative",
                n.width = "auto");
                this.$dropdown.css(n)
            }
            ,
            i.prototype._showDropdown = function() {
                this.$dropdownContainer.appendTo(this.$dropdownParent);
                this._positionDropdown();
                this._resizeDropdown()
            }
            ,
            i
        }),
        t.define("select2/dropdown/minimumResultsForSearch", [], function() {
            function n(t) {
                for (var u, i = 0, r = 0; r < t.length; r++)
                    u = t[r],
                    u.children ? i += n(u.children) : i++;
                return i
            }
            function t(n, t, i, r) {
                this.minimumResultsForSearch = i.get("minimumResultsForSearch");
                this.minimumResultsForSearch < 0 && (this.minimumResultsForSearch = Infinity);
                n.call(this, t, i, r)
            }
            return t.prototype.showSearch = function(t, i) {
                return n(i.data.results) < this.minimumResultsForSearch ? !1 : t.call(this, i)
            }
            ,
            t
        }),
        t.define("select2/dropdown/selectOnClose", ["../utils"], function(n) {
            function t() {}
            return t.prototype.bind = function(n, t, i) {
                var r = this;
                n.call(this, t, i);
                t.on("close", function(n) {
                    r._handleSelectOnClose(n)
                })
            }
            ,
            t.prototype._handleSelectOnClose = function(t, i) {
                var u, f, r;
                i && i.originalSelect2Event != null && (u = i.originalSelect2Event,
                u._type === "select" || u._type === "unselect") || (f = this.getHighlightedResults(),
                f.length < 1) || (r = n.GetData(f[0], "data"),
                r.element != null && r.element.selected || r.element == null && r.selected) || this.trigger("select", {
                    data: r
                })
            }
            ,
            t
        }),
        t.define("select2/dropdown/closeOnSelect", [], function() {
            function n() {}
            return n.prototype.bind = function(n, t, i) {
                var r = this;
                n.call(this, t, i);
                t.on("select", function(n) {
                    r._selectTriggered(n)
                });
                t.on("unselect", function(n) {
                    r._selectTriggered(n)
                })
            }
            ,
            n.prototype._selectTriggered = function(n, t) {
                var i = t.originalEvent;
                i && (i.ctrlKey || i.metaKey) || this.trigger("close", {
                    originalEvent: i,
                    originalSelect2Event: t
                })
            }
            ,
            n
        }),
        t.define("select2/i18n/en", [], function() {
            return {
                errorLoading: function() {
                    return "The results could not be loaded."
                },
                inputTooLong: function(n) {
                    var t = n.input.length - n.maximum
                      , i = "Please delete " + t + " character";
                    return t != 1 && (i += "s"),
                    i
                },
                inputTooShort: function(n) {
                    var t = n.minimum - n.input.length;
                    return "Please enter " + t + " or more characters"
                },
                loadingMore: function() {
                    return "Loading more results…"
                },
                maximumSelected: function(n) {
                    var t = "You can only select " + n.maximum + " item";
                    return n.maximum != 1 && (t += "s"),
                    t
                },
                noResults: function() {
                    return "No results found"
                },
                searching: function() {
                    return "Searching…"
                },
                removeAllItems: function() {
                    return "Remove all items"
                }
            }
        }),
        t.define("select2/defaults", ["jquery", "require", "./results", "./selection/single", "./selection/multiple", "./selection/placeholder", "./selection/allowClear", "./selection/search", "./selection/eventRelay", "./utils", "./translation", "./diacritics", "./data/select", "./data/array", "./data/ajax", "./data/tags", "./data/tokenizer", "./data/minimumInputLength", "./data/maximumInputLength", "./data/maximumSelectionLength", "./dropdown", "./dropdown/search", "./dropdown/hidePlaceholder", "./dropdown/infiniteScroll", "./dropdown/attachBody", "./dropdown/minimumResultsForSearch", "./dropdown/selectOnClose", "./dropdown/closeOnSelect", "./i18n/en"], function(n, t, i, r, u, f, e, o, s, h, c, l, a, v, y, p, w, b, k, d, g, nt, tt, it, rt, ut, ft, et) {
            function ot() {
                this.reset()
            }
            ot.prototype.apply = function(c) {
                var ht, ct, lt, at, vt, l, ot, st;
                for (c = n.extend(!0, {}, this.defaults, c),
                c.dataAdapter == null && (c.dataAdapter = c.ajax != null ? y : c.data != null ? v : a,
                c.minimumInputLength > 0 && (c.dataAdapter = h.Decorate(c.dataAdapter, b)),
                c.maximumInputLength > 0 && (c.dataAdapter = h.Decorate(c.dataAdapter, k)),
                c.maximumSelectionLength > 0 && (c.dataAdapter = h.Decorate(c.dataAdapter, d)),
                c.tags && (c.dataAdapter = h.Decorate(c.dataAdapter, p)),
                (c.tokenSeparators != null || c.tokenizer != null) && (c.dataAdapter = h.Decorate(c.dataAdapter, w)),
                c.query != null && (ht = t(c.amdBase + "compat/query"),
                c.dataAdapter = h.Decorate(c.dataAdapter, ht)),
                c.initSelection != null && (ct = t(c.amdBase + "compat/initSelection"),
                c.dataAdapter = h.Decorate(c.dataAdapter, ct))),
                c.resultsAdapter == null && (c.resultsAdapter = i,
                c.ajax != null && (c.resultsAdapter = h.Decorate(c.resultsAdapter, it)),
                c.placeholder != null && (c.resultsAdapter = h.Decorate(c.resultsAdapter, tt)),
                c.selectOnClose && (c.resultsAdapter = h.Decorate(c.resultsAdapter, ft))),
                c.dropdownAdapter == null && (c.multiple ? c.dropdownAdapter = g : (lt = h.Decorate(g, nt),
                c.dropdownAdapter = lt),
                c.minimumResultsForSearch !== 0 && (c.dropdownAdapter = h.Decorate(c.dropdownAdapter, ut)),
                c.closeOnSelect && (c.dropdownAdapter = h.Decorate(c.dropdownAdapter, et)),
                (c.dropdownCssClass != null || c.dropdownCss != null || c.adaptDropdownCssClass != null) && (at = t(c.amdBase + "compat/dropdownCss"),
                c.dropdownAdapter = h.Decorate(c.dropdownAdapter, at)),
                c.dropdownAdapter = h.Decorate(c.dropdownAdapter, rt)),
                c.selectionAdapter == null && (c.selectionAdapter = c.multiple ? u : r,
                c.placeholder != null && (c.selectionAdapter = h.Decorate(c.selectionAdapter, f)),
                c.allowClear && (c.selectionAdapter = h.Decorate(c.selectionAdapter, e)),
                c.multiple && (c.selectionAdapter = h.Decorate(c.selectionAdapter, o)),
                (c.containerCssClass != null || c.containerCss != null || c.adaptContainerCssClass != null) && (vt = t(c.amdBase + "compat/containerCss"),
                c.selectionAdapter = h.Decorate(c.selectionAdapter, vt)),
                c.selectionAdapter = h.Decorate(c.selectionAdapter, s)),
                c.language = this._resolveLanguage(c.language),
                c.language.push("en"),
                l = [],
                ot = 0; ot < c.language.length; ot++)
                    st = c.language[ot],
                    l.indexOf(st) === -1 && l.push(st);
                return c.language = l,
                c.translations = this._processTranslations(c.language, c.debug),
                c
            }
            ;
            ot.prototype.reset = function() {
                function i(n) {
                    function t(n) {
                        return l[n] || n
                    }
                    return n.replace(/[^\u0000-\u007E]/g, t)
                }
                function t(r, u) {
                    var f, e, o, s, h, c;
                    if (n.trim(r.term) === "")
                        return u;
                    if (u.children && u.children.length > 0) {
                        for (f = n.extend(!0, {}, u),
                        e = u.children.length - 1; e >= 0; e--)
                            o = u.children[e],
                            s = t(r, o),
                            s == null && f.children.splice(e, 1);
                        return f.children.length > 0 ? f : t(r, f)
                    }
                    return (h = i(u.text).toUpperCase(),
                    c = i(r.term).toUpperCase(),
                    h.indexOf(c) > -1) ? u : null
                }
                this.defaults = {
                    amdBase: "./",
                    amdLanguageBase: "./i18n/",
                    closeOnSelect: !0,
                    debug: !1,
                    dropdownAutoWidth: !1,
                    escapeMarkup: h.escapeMarkup,
                    language: {},
                    matcher: t,
                    minimumInputLength: 0,
                    maximumInputLength: 0,
                    maximumSelectionLength: 0,
                    minimumResultsForSearch: 0,
                    selectOnClose: !1,
                    scrollAfterSelect: !1,
                    sorter: function(n) {
                        return n
                    },
                    templateResult: function(n) {
                        return n.text
                    },
                    templateSelection: function(n) {
                        return n.text
                    },
                    theme: "default",
                    width: "resolve"
                }
            }
            ;
            ot.prototype.applyFromElement = function(n, t) {
                var i = n.language
                  , r = this.defaults.language
                  , u = t.prop("lang")
                  , f = t.closest("[lang]").prop("lang")
                  , e = Array.prototype.concat.call(this._resolveLanguage(u), this._resolveLanguage(i), this._resolveLanguage(r), this._resolveLanguage(f));
                return n.language = e,
                n
            }
            ;
            ot.prototype._resolveLanguage = function(t) {
                var r, u, i, f, e;
                if (!t)
                    return [];
                if (n.isEmptyObject(t))
                    return [];
                if (n.isPlainObject(t))
                    return [t];
                for (r = n.isArray(t) ? t : [t],
                u = [],
                i = 0; i < r.length; i++)
                    u.push(r[i]),
                    typeof r[i] == "string" && r[i].indexOf("-") > 0 && (f = r[i].split("-"),
                    e = f[0],
                    u.push(e));
                return u
            }
            ;
            ot.prototype._processTranslations = function(t, i) {
                for (var u, r, e = new c, f = 0; f < t.length; f++) {
                    if (u = new c,
                    r = t[f],
                    typeof r == "string")
                        try {
                            u = c.loadPath(r)
                        } catch (o) {
                            try {
                                r = this.defaults.amdLanguageBase + r;
                                u = c.loadPath(r)
                            } catch (s) {
                                i && window.console && console.warn && console.warn('Select2: The language file for "' + r + '" could not be automatically loaded. A fallback will be used instead.')
                            }
                        }
                    else
                        u = n.isPlainObject(r) ? new c(r) : r;
                    e.extend(u)
                }
                return e
            }
            ;
            ot.prototype.set = function(t, i) {
                var f = n.camelCase(t), r = {}, u;
                r[f] = i;
                u = h._convertData(r);
                n.extend(!0, this.defaults, u)
            }
            ;
            return new ot
        }),
        t.define("select2/options", ["require", "jquery", "./defaults", "./utils"], function(n, t, i, r) {
            function u(t, u) {
                if (this.options = t,
                u != null && this.fromElement(u),
                u != null && (this.options = i.applyFromElement(this.options, u)),
                this.options = i.apply(this.options),
                u && u.is("input")) {
                    var f = n(this.get("amdBase") + "compat/inputData");
                    this.options.dataAdapter = r.Decorate(this.options.dataAdapter, f)
                }
            }
            return u.prototype.fromElement = function(n) {
                function l(n, t) {
                    return t.toUpperCase()
                }
                var c = ["select2"], f, e, s, o, u, i;
                for (this.options.multiple == null && (this.options.multiple = n.prop("multiple")),
                this.options.disabled == null && (this.options.disabled = n.prop("disabled")),
                this.options.dir == null && (this.options.dir = n.prop("dir") ? n.prop("dir") : n.closest("[dir]").prop("dir") ? n.closest("[dir]").prop("dir") : "ltr"),
                n.prop("disabled", this.options.disabled),
                n.prop("multiple", this.options.multiple),
                r.GetData(n[0], "select2Tags") && (this.options.debug && window.console && console.warn && console.warn('Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'),
                r.StoreData(n[0], "data", r.GetData(n[0], "select2Tags")),
                r.StoreData(n[0], "tags", !0)),
                r.GetData(n[0], "ajaxUrl") && (this.options.debug && window.console && console.warn && console.warn("Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."),
                n.attr("ajax--url", r.GetData(n[0], "ajaxUrl")),
                r.StoreData(n[0], "ajax-Url", r.GetData(n[0], "ajaxUrl"))),
                f = {},
                e = 0; e < n[0].attributes.length; e++)
                    if (s = n[0].attributes[e].name,
                    o = "data-",
                    s.substr(0, o.length) == o) {
                        var h = s.substring(o.length)
                          , a = r.GetData(n[0], h)
                          , v = h.replace(/-([a-z])/g, l);
                        f[v] = a
                    }
                t.fn.jquery && t.fn.jquery.substr(0, 2) == "1." && n[0].dataset && (f = t.extend(!0, {}, n[0].dataset, f));
                u = t.extend(!0, {}, r.GetData(n[0]), f);
                u = r._convertData(u);
                for (i in u)
                    t.inArray(i, c) > -1 || (t.isPlainObject(this.options[i]) ? t.extend(this.options[i], u[i]) : this.options[i] = u[i]);
                return this
            }
            ,
            u.prototype.get = function(n) {
                return this.options[n]
            }
            ,
            u.prototype.set = function(n, t) {
                this.options[n] = t
            }
            ,
            u
        }),
        t.define("select2/core", ["jquery", "./options", "./utils", "./keys"], function(n, t, i, r) {
            var u = function(n, r) {
                var e, o, f, s, h, c, l;
                i.GetData(n[0], "select2") != null && i.GetData(n[0], "select2").destroy();
                this.$element = n;
                this.id = this._generateId(n);
                r = r || {};
                this.options = new t(r,n);
                u.__super__.constructor.call(this);
                e = n.attr("tabindex") || 0;
                i.StoreData(n[0], "old-tabindex", e);
                n.attr("tabindex", "-1");
                o = this.options.get("dataAdapter");
                this.dataAdapter = new o(n,this.options);
                f = this.render();
                this._placeContainer(f);
                s = this.options.get("selectionAdapter");
                this.selection = new s(n,this.options);
                this.$selection = this.selection.render();
                this.selection.position(this.$selection, f);
                h = this.options.get("dropdownAdapter");
                this.dropdown = new h(n,this.options);
                this.$dropdown = this.dropdown.render();
                this.dropdown.position(this.$dropdown, f);
                c = this.options.get("resultsAdapter");
                this.results = new c(n,this.options,this.dataAdapter);
                this.$results = this.results.render();
                this.results.position(this.$results, this.$dropdown);
                l = this;
                this._bindAdapters();
                this._registerDomEvents();
                this._registerDataEvents();
                this._registerSelectionEvents();
                this._registerDropdownEvents();
                this._registerResultsEvents();
                this._registerEvents();
                this.dataAdapter.current(function(n) {
                    l.trigger("selection:update", {
                        data: n
                    })
                });
                n.addClass("select2-hidden-accessible");
                n.attr("aria-hidden", "true");
                this._syncAttributes();
                i.StoreData(n[0], "select2", this);
                n.data("select2", this)
            };
            return i.Extend(u, i.Observable),
            u.prototype._generateId = function(n) {
                var t = "";
                return t = n.attr("id") != null ? n.attr("id") : n.attr("name") != null ? n.attr("name") + "-" + i.generateChars(2) : i.generateChars(4),
                t = t.replace(/(:|\.|\[|\]|,)/g, ""),
                "select2-" + t
            }
            ,
            u.prototype._placeContainer = function(n) {
                n.insertAfter(this.$element);
                var t = this._resolveWidth(this.$element, this.options.get("width"));
                t != null && n.css("width", t)
            }
            ,
            u.prototype._resolveWidth = function(n, t) {
                var u, f, e, o, i, s, h, r, c;
                if (t == "resolve")
                    return (u = this._resolveWidth(n, "style"),
                    u != null) ? u : this._resolveWidth(n, "element");
                if (t == "element")
                    return (f = n.outerWidth(!1),
                    f <= 0) ? "auto" : f + "px";
                if (t == "style") {
                    if (e = n.attr("style"),
                    typeof e != "string")
                        return null;
                    for (o = e.split(";"),
                    i = 0,
                    s = o.length; i < s; i = i + 1)
                        if (h = o[i].replace(/\s/g, ""),
                        r = h.match(/^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i),
                        r !== null && r.length >= 1)
                            return r[1];
                    return null
                }
                return t == "computedstyle" ? (c = window.getComputedStyle(n[0]),
                c.width) : t
            }
            ,
            u.prototype._bindAdapters = function() {
                this.dataAdapter.bind(this, this.$container);
                this.selection.bind(this, this.$container);
                this.dropdown.bind(this, this.$container);
                this.results.bind(this, this.$container)
            }
            ,
            u.prototype._registerDomEvents = function() {
                var t = this, r;
                this.$element.on("change.select2", function() {
                    t.dataAdapter.current(function(n) {
                        t.trigger("selection:update", {
                            data: n
                        })
                    })
                });
                this.$element.on("focus.select2", function(n) {
                    t.trigger("focus", n)
                });
                this._syncA = i.bind(this._syncAttributes, this);
                this._syncS = i.bind(this._syncSubtree, this);
                this.$element[0].attachEvent && this.$element[0].attachEvent("onpropertychange", this._syncA);
                r = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
                r != null ? (this._observer = new r(function(i) {
                    n.each(i, t._syncA);
                    n.each(i, t._syncS)
                }
                ),
                this._observer.observe(this.$element[0], {
                    attributes: !0,
                    childList: !0,
                    subtree: !1
                })) : this.$element[0].addEventListener && (this.$element[0].addEventListener("DOMAttrModified", t._syncA, !1),
                this.$element[0].addEventListener("DOMNodeInserted", t._syncS, !1),
                this.$element[0].addEventListener("DOMNodeRemoved", t._syncS, !1))
            }
            ,
            u.prototype._registerDataEvents = function() {
                var n = this;
                this.dataAdapter.on("*", function(t, i) {
                    n.trigger(t, i)
                })
            }
            ,
            u.prototype._registerSelectionEvents = function() {
                var t = this
                  , i = ["toggle", "focus"];
                this.selection.on("toggle", function() {
                    t.toggleDropdown()
                });
                this.selection.on("focus", function(n) {
                    t.focus(n)
                });
                this.selection.on("*", function(r, u) {
                    n.inArray(r, i) === -1 && t.trigger(r, u)
                })
            }
            ,
            u.prototype._registerDropdownEvents = function() {
                var n = this;
                this.dropdown.on("*", function(t, i) {
                    n.trigger(t, i)
                })
            }
            ,
            u.prototype._registerResultsEvents = function() {
                var n = this;
                this.results.on("*", function(t, i) {
                    n.trigger(t, i)
                })
            }
            ,
            u.prototype._registerEvents = function() {
                var n = this;
                this.on("open", function() {
                    n.$container.addClass("select2-container--open")
                });
                this.on("close", function() {
                    n.$container.removeClass("select2-container--open")
                });
                this.on("enable", function() {
                    n.$container.removeClass("select2-container--disabled")
                });
                this.on("disable", function() {
                    n.$container.addClass("select2-container--disabled")
                });
                this.on("blur", function() {
                    n.$container.removeClass("select2-container--focus")
                });
                this.on("query", function(t) {
                    n.isOpen() || n.trigger("open", {});
                    this.dataAdapter.query(t, function(i) {
                        n.trigger("results:all", {
                            data: i,
                            query: t
                        })
                    })
                });
                this.on("query:append", function(t) {
                    this.dataAdapter.query(t, function(i) {
                        n.trigger("results:append", {
                            data: i,
                            query: t
                        })
                    })
                });
                this.on("keypress", function(t) {
                    var i = t.which;
                    n.isOpen() ? i === r.ESC || i === r.TAB || i === r.UP && t.altKey ? (n.close(),
                    t.preventDefault()) : i === r.ENTER ? (n.trigger("results:select", {}),
                    t.preventDefault()) : i === r.SPACE && t.ctrlKey ? (n.trigger("results:toggle", {}),
                    t.preventDefault()) : i === r.UP ? (n.trigger("results:previous", {}),
                    t.preventDefault()) : i === r.DOWN && (n.trigger("results:next", {}),
                    t.preventDefault()) : (i === r.ENTER || i === r.SPACE || i === r.DOWN && t.altKey) && (n.open(),
                    t.preventDefault())
                })
            }
            ,
            u.prototype._syncAttributes = function() {
                this.options.set("disabled", this.$element.prop("disabled"));
                this.options.get("disabled") ? (this.isOpen() && this.close(),
                this.trigger("disable", {})) : this.trigger("enable", {})
            }
            ,
            u.prototype._syncSubtree = function(n, t) {
                var i = !1, f = this, r, u;
                if (!n || !n.target || n.target.nodeName === "OPTION" || n.target.nodeName === "OPTGROUP") {
                    if (t)
                        if (t.addedNodes && t.addedNodes.length > 0)
                            for (r = 0; r < t.addedNodes.length; r++)
                                u = t.addedNodes[r],
                                u.selected && (i = !0);
                        else
                            t.removedNodes && t.removedNodes.length > 0 && (i = !0);
                    else
                        i = !0;
                    i && this.dataAdapter.current(function(n) {
                        f.trigger("selection:update", {
                            data: n
                        })
                    })
                }
            }
            ,
            u.prototype.trigger = function(n, t) {
                var r = u.__super__.trigger, f = {
                    open: "opening",
                    close: "closing",
                    select: "selecting",
                    unselect: "unselecting",
                    clear: "clearing"
                }, e, i;
                if (t === undefined && (t = {}),
                n in f && (e = f[n],
                i = {
                    prevented: !1,
                    name: n,
                    args: t
                },
                r.call(this, e, i),
                i.prevented)) {
                    t.prevented = !0;
                    return
                }
                r.call(this, n, t)
            }
            ,
            u.prototype.toggleDropdown = function() {
                this.options.get("disabled") || (this.isOpen() ? this.close() : this.open())
            }
            ,
            u.prototype.open = function() {
                this.isOpen() || this.trigger("query", {})
            }
            ,
            u.prototype.close = function() {
                this.isOpen() && this.trigger("close", {})
            }
            ,
            u.prototype.isOpen = function() {
                return this.$container.hasClass("select2-container--open")
            }
            ,
            u.prototype.hasFocus = function() {
                return this.$container.hasClass("select2-container--focus")
            }
            ,
            u.prototype.focus = function() {
                this.hasFocus() || (this.$container.addClass("select2-container--focus"),
                this.trigger("focus", {}))
            }
            ,
            u.prototype.enable = function(n) {
                this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.');
                (n == null || n.length === 0) && (n = [!0]);
                var t = !n[0];
                this.$element.prop("disabled", t)
            }
            ,
            u.prototype.data = function() {
                this.options.get("debug") && arguments.length > 0 && window.console && console.warn && console.warn('Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.');
                var n = [];
                return this.dataAdapter.current(function(t) {
                    n = t
                }),
                n
            }
            ,
            u.prototype.val = function(t) {
                if (this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'),
                t == null || t.length === 0)
                    return this.$element.val();
                var i = t[0];
                n.isArray(i) && (i = n.map(i, function(n) {
                    return n.toString()
                }));
                this.$element.val(i).trigger("change")
            }
            ,
            u.prototype.destroy = function() {
                this.$container.remove();
                this.$element[0].detachEvent && this.$element[0].detachEvent("onpropertychange", this._syncA);
                this._observer != null ? (this._observer.disconnect(),
                this._observer = null) : this.$element[0].removeEventListener && (this.$element[0].removeEventListener("DOMAttrModified", this._syncA, !1),
                this.$element[0].removeEventListener("DOMNodeInserted", this._syncS, !1),
                this.$element[0].removeEventListener("DOMNodeRemoved", this._syncS, !1));
                this._syncA = null;
                this._syncS = null;
                this.$element.off(".select2");
                this.$element.attr("tabindex", i.GetData(this.$element[0], "old-tabindex"));
                this.$element.removeClass("select2-hidden-accessible");
                this.$element.attr("aria-hidden", "false");
                i.RemoveData(this.$element[0]);
                this.$element.removeData("select2");
                this.dataAdapter.destroy();
                this.selection.destroy();
                this.dropdown.destroy();
                this.results.destroy();
                this.dataAdapter = null;
                this.selection = null;
                this.dropdown = null;
                this.results = null
            }
            ,
            u.prototype.render = function() {
                var t = n('<span class="select2 select2-container"><span class="selection"><\/span><span class="dropdown-wrapper" aria-hidden="true"><\/span><\/span>');
                return t.attr("dir", this.options.get("dir")),
                this.$container = t,
                this.$container.addClass("select2-container--" + this.options.get("theme")),
                i.StoreData(t[0], "element", this.$element),
                t
            }
            ,
            u
        }),
        t.define("jquery-mousewheel", ["jquery"], function(n) {
            return n
        }),
        t.define("jquery.select2", ["jquery", "jquery-mousewheel", "./select2/core", "./select2/defaults", "./select2/utils"], function(n, t, i, r, u) {
            if (n.fn.select2 == null) {
                var f = ["open", "close", "destroy"];
                n.fn.select2 = function(t) {
                    if (t = t || {},
                    typeof t == "object")
                        return this.each(function() {
                            var r = n.extend(!0, {}, t)
                              , u = new i(n(this),r)
                        }),
                        this;
                    if (typeof t == "string") {
                        var r, e = Array.prototype.slice.call(arguments, 1);
                        return (this.each(function() {
                            var n = u.GetData(this, "select2");
                            n == null && window.console && console.error && console.error("The select2('" + t + "') method was called on an element that is not using Select2.");
                            r = n[t].apply(n, e)
                        }),
                        n.inArray(t, f) > -1) ? this : r
                    }
                    throw new Error("Invalid arguments for Select2: " + t);
                }
            }
            return n.fn.select2.defaults == null && (n.fn.select2.defaults = r),
            i
        }),
        {
            define: t.define,
            require: t.require
        }
    }()
      , i = t.require("jquery.select2");
    return n.fn.select2.amd = t,
    i
});
$(document).ready(function() {
    fnSetMandatoryClass();
    resizeLoader();
    showPageLoader();
    $(".showMoreInfo").on("show.bs.collapse", function() {
        $("a[href='#" + $(this)[0].id + "']").html("<i class='fas fa-chevron-up'><\/i>Hide")
    }).on("hide.bs.collapse", function() {
        $("a[href='#" + $(this)[0].id + "']").html("<i class='fas fa-chevron-down'><\/i>More")
    });
    $(window).resize(function() {
        resizeLoader()
    });
    $("button[type='submit']").click(function() {
        showPageLoader()
    });
    $("input[type='submit']").click(function() {
        showPageLoader()
    });
    $("form").bind("invalid-form.validate", function(n, t) {
        var r, i;
        hidePageLoader();
        r = "Please correct the following error";
        t.currentElements.length > 1 && (r = "Please correct the following errors");
        i = "<ul>";
        $.each(t.errorList, function(n, t) {
            i += "<li>" + t.message + "<\/li>"
        });
        i += "<\/ul>";
        try {
            Swal.fire({
                title: '<h5 class="text-primary">' + r + "<\/h5>",
                html: i,
                customClass: {
                    icon: "swalIcon",
                    confirmButton: "btnSwalConfirm btn-sm"
                }
            }).then(()=>{
                if (t.currentElements.length > 0) {
                    var n = t.currentElements[0].id;
                    n !== undefined && n !== "" && setTimeout(function() {
                        $("#" + n).focus()
                    }, 500)
                }
            }
            )
        } catch (u) {
            ShowMessage("Exception", u.message, "error")
        }
    });
    $(".without-border").click(function() {
        $(this).toggleClass("expanded").attr("aria-expanded") === "true" ? ($(this).toggleClass("expanded").find("i").removeClass("fa fa-minus"),
        $(this).toggleClass("expanded").find("i").addClass("fa fa-plus")) : ($(this).toggleClass("expanded").find("i").removeClass("fa fa-plus"),
        $(this).toggleClass("expanded").find("i").addClass("fa fa-minus"))
    });
    $(".with-border").click(function() {
        var n = 0
          , t = $(this).toggleClass("expanded").attr("data-target");
        $(this).toggleClass("expanded").attr("aria-expanded") === "true" ? ($(this).toggleClass("expanded").find("i").removeClass("fa fa-minus"),
        $(this).toggleClass("expanded").find("i").addClass("fa fa-plus"),
        $.each($(".with-border"), function(i, r) {
            if ($(r).attr("data-target") === t)
                ;
            else
                $(r).attr("aria-expanded") === "true" && n++
        }),
        n === 0 && ($("#ToggleAllBtn").attr("aria-expanded", "false"),
        $("#ToggleAllBtn").html(""),
        $("#ToggleAllBtn").append("<i class='fa fa-plus' style='margin-right:5px'><\/i>Expand All"))) : ($(this).toggleClass("expanded").find("i").removeClass("fa fa-plus"),
        $(this).toggleClass("expanded").find("i").addClass("fa fa-minus"),
        $("#ToggleAllBtn").attr("aria-expanded", "true"),
        $("#ToggleAllBtn").html(""),
        $("#ToggleAllBtn").append("<i class='fa fa-minus' style='margin-right:5px'><\/i>Toggle All"))
    });
    $("div.spanner").delay(250).queue(function(n) {
        hidePageLoader();
        n()
    });
    $(document).on("focus", ".select2-selection.select2-selection--single", function() {
        $(this).closest(".select2-container").siblings("select:enabled").select2("open")
    });
    $("select.select2").on("select2:closing", function(n) {
        $(n.target).data("select2").$selection.one("focus focusin", function(n) {
            n.stopPropagation()
        })
    })
}).ajaxStart(function() {
    showPageLoader()
}).ajaxSuccess(function() {
    hidePageLoader()
}).ajaxError(function() {
    hidePageLoader()
}).ajaxStop(function() {
    hidePageLoader()
});
fnRedirectPlainLink = function(n) {
    try {
        showPageLoader();
        $(window).attr("location", $(n).attr("data-url"))
    } catch (t) {
        hidePageLoader();
        ShowHtmlMessage("Exception", t.message, "error")
    }
}
;
fnSetMandatoryClass = function() {
    try {
        var n = arguments.length > 0 ? arguments[0] : null;
        n === null ? $("*[data-val-required]").each(function() {
            $("label[for='" + $(this).attr("name") + "']").each(function() {
                $(this).addClass("mandatory")
            })
        }) : $("*[name='" + n + "']").each(function() {
            var n = $(this).attr("data-val-required");
            $("label[for='" + $(this).attr("name") + "']").each(function() {
                n && n !== undefined && n !== "" ? $(this).addClass("mandatory") : $(this).removeClass("mandatory")
            })
        })
    } catch (t) {
        ShowHtmlMessage("Exception", t.message, "error")
    }
}
;
fnRedirectLink = function(n) {
    try {
        var t = fnEncryptParam($(n).attr("data-url"));
        showPageLoader();
        $(window).attr("location", t)
    } catch (i) {
        hidePageLoader();
        ShowHtmlMessage("Exception", i.message, "error")
    }
}
;
fnEncryptParam = function(n) {
    try {
        var t = n;
        return $.ajax({
            type: "GET",
            contentType: "html",
            async: !1,
            url: "/Base/GetEncryptedUrl",
            data: {
                pUrl: n
            },
            success: function(n) {
                t = n
            },
            error: function(n) {
                ShowHtmlMessage("Exception", JSON.stringify(n), "error")
            }
        }),
        t
    } catch (i) {
        ShowHtmlMessage("Exception", i.message, "error")
    }
}
;
rebindGrid = function(n) {
    $("#" + n).jsGrid("loadData")
}
;
ShowMessage = function(n, t, i) {
    try {
        var r = !1;
        switch (i) {
        case "success":
            n = n === "" ? "Success !" : n;
            break;
        case "error":
            n = n === "" ? "Error !" : n;
            r = !0;
            break;
        case "info":
            n = n === "" ? "Information !" : n;
            break;
        case "warning":
            n = n === "" ? "Warning !" : n;
            r = !0;
            break;
        case "question":
            n = n === "" ? "Question !" : n;
            r = !0
        }
        r ? Swal.fire({
            type: i,
            title: n,
            html: t
        }) : Swal.fire({
            type: i,
            title: n,
            html: t,
            timer: 1500,
            showCancelButton: !1,
            showConfirmButton: !1
        }).then(function(n) {
            n === "timer"
        })
    } catch (u) {
        alert(u.message)
    }
}
;
ShowHtmlMessage = function(n, t, i) {
    ShowMessage(n, t, i)
}
;
showPageLoader = function() {
    $("div.spanner") && !$("div.spanner").hasClass("show") && $("div.spanner").addClass("show")
}
;
hidePageLoader = function() {
    $("div.spanner") && $("div.spanner").hasClass("show") && $("div.spanner").removeClass("show")
}
;
resizeLoader = function() {
    var n = $("div.spanner div.loader")
      , t = $(window).width()
      , i = $(window).height()
      , r = n.width()
      , u = n.height()
      , f = i / 2 - u / 2
      , e = t / 2 - r / 2;
    n.css({
        top: f,
        left: e
    })
}
;
getGridItem = function(n) {
    return $("#" + n).jsGrid("_getCurrentRowItem")
}
;
setGridItem = function(n, t, i) {
    return $("#" + n).jsGrid("_setCurrentRowItem", t, i)
}
;
setGridLovCode = function(n, t, i) {
    return $("#" + n).jsGrid("_setCurrentRowLovCode", t, i)
}
;
setGridColumnType = function(n, t, i) {
    return $("#" + n).jsGrid("_setCurrentRowType", t, i)
}
;
setItemProperty = function(n, t, i) {
    return $("#" + n).jsGrid("_setCurrentRowProp", t, i)
}
;
setMinDate = function(n, t) {
    $("#" + n)[0].parentNode._flatpickr.set("minDate", t)
}
;
setMaxDate = function(n, t) {
    $("#" + n)[0].parentNode._flatpickr.set("maxDate", t)
}
;
setDate = function(n, t) {
    var i = $("#" + n)[0].parentNode._flatpickr.config;
    $("#" + n)[0].parentNode._flatpickr.setDate(t, !0, i.dateFormat)
}
;
fnFillGridDropdown = function(n, t, i) {
    return $("#" + n).jsGrid("_fnGridFillDropdown", t, i)
}
;
GridAjaxDone = function(n) {
    try {
        var t = n.Status === 1 ? "success" : "error"
          , i = n.Status === 1 ? "Success" : "Error";
        ShowMessage(i, n.Message.Text, t)
    } catch (r) {
        ShowHtmlMessage("Exception", r.message, "error")
    }
}
;
fnSwitchLanguage = function(n) {
    try {
        var t = {
            Language: n
        };
        $.ajax({
            type: "POST",
            url: "/Account/SwitchLanguage/",
            contentType: "application/json",
            dataType: "json",
            traditional: !0,
            data: JSON.stringify(t),
            success: function() {
                location.reload()
            },
            error: function() {
                location.reload()
            }
        })
    } catch (i) {
        ShowHtmlMessage("Exception", i.message, "error")
    }
}
;
fnFillDropDrowns = function(n, t) {
    try {
        var i = null;
        typeof t == "object" ? i = t : typeof t == "string" && (i = JSON.parse(t));
        $("#" + n).html("");
        $("#" + n).append($("<option><\/option>").val("").html("--Select--"));
        $.each(i, function(t, i) {
            i.ActiveYn && i.ActiveYn === "N" ? $("#" + n).append($("<option><\/option>").attr("value", i.Code).attr("value2", i.Value).text(i.Text).attr("disabled", "disabled")) : $("#" + n).append($("<option><\/option>").attr("value", i.Code).attr("value2", i.Value).text(i.Text))
        })
    } catch (r) {
        ShowHtmlMessage("Exception", r.message, "error")
    }
}
;
fnAppendDropDrowns = function(n, t) {
    try {
        var i = null;
        typeof t == "object" ? i = t : typeof t == "string" && (i = JSON.parse(t));
        $("#" + n).append($("<option><\/option>").val("").html("--Select--"));
        $.each(i, function(t, i) {
            i.ActiveYn && i.ActiveYn === "N" ? $("#" + n).append($("<option><\/option>").attr("value", i.Code).attr("value2", i.Value).text(i.Text).attr("disabled", "disabled")) : $("#" + n).append($("<option><\/option>").attr("value", i.Code).attr("value2", i.Value).text(i.Text))
        })
    } catch (r) {
        ShowHtmlMessage("Exception", r.message, "error")
    }
}
;
GetFormatedDate = function(n) {
    return moment(n, "DD/MM/YYYY HH:mm:ss", !0).format("DDMMYYYY")
}
;
GetCurrencyRate = function(n, t, i, r, u, f) {
    try {
        var e = jQuery.Deferred();
        return n && $.ajax({
            type: "GET",
            contentType: "application/json",
            dataType: "json",
            url: "/User/General/GetCurrencyRate",
            data: {
                pStageCode: n,
                pConfigCode: t,
                pCurrencyCode: i,
                pDate1: r,
                pDate2: u,
                pDate3: f
            },
            success: function(n) {
                e.resolve(n.data)
            },
            error: function(n) {
                ShowHtmlMessage("Exception", JSON.stringify(n), "error")
            }
        }),
        e.promise()
    } catch (o) {
        ShowHtmlMessage("Exception", o.message, "error")
    }
}
;
GetFcByLc = function(n, t, i, r) {
    try {
        var u = jQuery.Deferred();
        return n && $.ajax({
            type: "GET",
            contentType: "application/json",
            dataType: "json",
            url: "/User/General/GetFcByLc",
            data: {
                pStageCode: n,
                pConfigCode: t,
                pLcAmount: i,
                pRate: r
            },
            success: function(n) {
                u.resolve(n.data)
            },
            error: function(n) {
                ShowHtmlMessage("Exception", JSON.stringify(n), "error")
            }
        }),
        u.promise()
    } catch (f) {
        ShowHtmlMessage("Exception", f.message, "error")
    }
}
;
GetLcByFc = function(n, t, i, r) {
    try {
        var u = jQuery.Deferred();
        return n && $.ajax({
            type: "GET",
            contentType: "application/json",
            dataType: "json",
            url: "/User/General/GetLcByFc",
            data: {
                pStageCode: n,
                pConfigCode: t,
                pLcAmount: i,
                pRate: r
            },
            success: function(n) {
                u.resolve(n.data)
            },
            error: function(n) {
                ShowHtmlMessage("Exception", JSON.stringify(n), "error")
            }
        }),
        u.promise()
    } catch (f) {
        ShowHtmlMessage("Exception", f.message, "error")
    }
}
;
fnToggleDiv = function(n, t) {
    var i;
    if ($(n).attr("aria-expanded") === "true")
        for ($(n).attr("aria-expanded", "false"),
        $(n).html(""),
        $(n).append("<i class='fa fa-plus' style='margin-right:5px'><\/i>Expand All"),
        $(".with-border").toggleClass("expanded").attr("aria-expanded", "false"),
        $(".with-border").toggleClass("expanded").find("i").removeClass("fa fa-minus"),
        $(".with-border").toggleClass("expanded").find("i").addClass("fa fa-plus"),
        i = 0; i < t.length; i++)
            $("#" + t[i].id).removeClass("show");
    else
        for ($(n).attr("aria-expanded", "true"),
        $(n).html(""),
        $(n).append("<i class='fa fa-minus'  style='margin-right:5px'><\/i>Toggle All"),
        $(".with-border").toggleClass("expanded").attr("aria-expanded", "true"),
        $(".with-border").toggleClass("expanded").find("i").removeClass("fa fa-plus"),
        $(".with-border").toggleClass("expanded").find("i").addClass("fa fa-minus"),
        i = 0; i < t.length; i++)
            $("#" + t[i].id).addClass("show")
}
;
fnToggleAll = function(n, t) {
    $(n).attr("aria-expanded", "false");
    $(n).html("");
    $(n).append("<i class='fa fa-plus' style='margin-right:5px'><\/i>Expand All");
    $(".with-border").toggleClass("expanded").attr("aria-expanded", "false");
    $(".with-border").toggleClass("expanded").find("i").removeClass("fa fa-minus");
    $(".with-border").toggleClass("expanded").find("i").addClass("fa fa-plus");
    for (var i = 0; i < t.length; i++)
        $("#" + t[i].id).removeClass("show")
}
;
fnDefaultDescription = function(n, t, i=0) {
    var r, u;
    try {
        t !== null && t !== "" && (r = $("#" + t),
        r !== undefined && r.val() === "" && (u = i > 0 ? i : $(n).val().length,
        u > $(n).val().length ? r.val($(n).val()) : r.val($(n).val().substring(0, u))))
    } catch (f) {
        return
    }
}
;
var validPropertySplitter = "#PROP#";
fnCheckValidationField = function(n, t) {
    try {
        var i = 0;
        return $.each(t, function(n, t) {
            var u = t.split(validPropertySplitter), r, f, e;
            u && u.length === 2 && (r = $("*[name='" + u[0] + "']"),
            f = $(r).attr("type"),
            f === "checkbox" ? (e = u[1] === "true" || u[1] === "Y",
            r && r.length === 1 && $(r).prop("checked") === e && i++) : r && r.length === 1 && $(r).val() === u[1] && i++)
        }),
        n === "AND" && i === t.length || n === "OR" && i >= 1
    } catch (r) {
        return !1
    }
}
;
fnValidateRequired = function(n, t, i, r, ...u) {
    try {
        var f = $("*[name='" + t + "']");
        f && f.length === 1 && u && u.length > 0 && (fnCheckValidationField(i, u) ? ($(f[0]).attr("data-val-required", r),
        $(f[0]).rules("add", {
            required: !0,
            messages: {
                required: r
            }
        })) : ($(f[0]).rules("remove", "required"),
        $(f[0]).removeAttr("data-val-required")),
        fnSetMandatoryClass(t))
    } catch (e) {
        return
    }
}
;
fnValidateEmail = function(n, t, i, r, ...u) {
    try {
        var f = $("*[name='" + t + "']");
        f && f.length === 1 && u && u.length > 0 && (fnCheckValidationField(i, u) ? $(f[0]).rules("add", {
            email: !0,
            messages: {
                email: r
            }
        }) : $(f[0]).rules("remove", "email"))
    } catch (e) {
        return
    }
}
;
fnValidateRegex = function(n, t, i, r, u, ...f) {
    try {
        if (u && u !== "") {
            var e = $("*[name='" + t + "']");
            e && e.length === 1 && f && f.length > 0 && (fnCheckValidationField(i, f) ? $(e[0]).rules("add", {
                regex: u,
                messages: {
                    regex: r
                }
            }) : $(e[0]).rules("remove", "regex"))
        }
    } catch (o) {
        return
    }
}
;
fnValidateRange = function(n, t, i, r, u, f, ...e) {
    try {
        var o = $("*[name='" + t + "']");
        o && o.length === 1 && e && e.length > 0 && (fnCheckValidationField(i, e) ? $(o[0]).rules("add", {
            required: !0,
            messages: {
                required: r
            }
        }) : $(o[0]).rules("remove", "required"))
    } catch (s) {
        return
    }
}
;
fnValidateLength = function(n, t, i, r, u, f, ...e) {
    try {
        var o = $("*[name='" + t + "']");
        o && o.length === 1 && e && e.length > 0 && (fnCheckValidationField(i, e) ? $(o[0]).rules("add", {
            required: !0,
            messages: {
                required: r
            }
        }) : $(o[0]).rules("remove", "required"))
    } catch (s) {
        return
    }
}
;
fnRedirectUrl = function(n) {
    try {
        showPageLoader();
        $(window).attr("location", n)
    } catch (t) {
        hidePageLoader();
        ShowHtmlMessage("Exception", t.message, "error")
    }
}
;
fnNavigateMenu = function(n) {
    try {
        n.ctrlKey || showPageLoader()
    } catch (t) {
        alert(t.message)
    }
}
;
