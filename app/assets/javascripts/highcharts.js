/*
 Highstock JS v1.1.3 (2012-02-03)

 (c) 2009-2011 Torstein H?nsi

 License: www.highcharts.com/license
 */
(function () {
    function I(a, b) {
        var c;
        a || (a = {});
        for (c in b)a[c] = b[c];
        return a
    }

    function ha() {
        for (var a = 0, b = arguments, c = b.length, d = {}; a < c; a++)d[b[a++]] = b[a];
        return d
    }

    function M(a, b) {
        return parseInt(a, b || 10)
    }

    function Bb(a) {
        return typeof a === "string"
    }

    function pb(a) {
        return typeof a === "object"
    }

    function ic(a) {
        return Object.prototype.toString.call(a) === "[object Array]"
    }

    function Tb(a) {
        return typeof a === "number"
    }

    function Fb(a) {
        return ta.log(a) / ta.LN10
    }

    function rc(a) {
        return ta.pow(10, a)
    }

    function Gb(a, b) {
        for (var c =
            a.length; c--;)if (a[c] === b) {
            a.splice(c, 1);
            break
        }
    }

    function z(a) {
        return a !== C && a !== null
    }

    function Z(a, b, c) {
        var d, e;
        if (Bb(b))z(c) ? a.setAttribute(b, c) : a && a.getAttribute && (e = a.getAttribute(b)); else if (z(b) && pb(b))for (d in b)a.setAttribute(d, b[d]);
        return e
    }

    function qb(a) {
        return ic(a) ? a : [a]
    }

    function r() {
        var a = arguments, b, c, d = a.length;
        for (b = 0; b < d; b++)if (c = a[b], typeof c !== "undefined" && c !== null)return c
    }

    function R(a, b) {
        if (Ub && b && b.opacity !== C)b.filter = "alpha(opacity=" + b.opacity * 100 + ")";
        I(a.style, b)
    }

    function fa(a, b, c, d, e) {
        a = N.createElement(a);
        b && I(a, b);
        e && R(a, {padding:0, border:na, margin:0});
        c && R(a, c);
        d && d.appendChild(a);
        return a
    }

    function oa(a, b) {
        var c = function () {
        };
        c.prototype = new a;
        I(c.prototype, b);
        return c
    }

    function Vb(a, b, c, d) {
        var e = ca.lang, f = isNaN(b = Ja(b)) ? 2 : b, b = c === void 0 ? e.decimalPoint : c, d = d === void 0 ? e.thousandsSep : d, e = a < 0 ? "-" : "", c = String(M(a = Ja(+a || 0).toFixed(f))), g = c.length > 3 ? c.length % 3 : 0;
        return e + (g ? c.substr(0, g) + d : "") + c.substr(g).replace(/(\d{3})(?=\d)/g, "$1" + d) + (f ? b + Ja(a - c).toFixed(f).slice(2) : "")
    }

    function sc(a, b, c, d) {
        var e, c = r(c, 1);
        e = a / c;
        if (!b && (b = [1, 2, 2.5, 5, 10], d && (d.allowDecimals === !1 || d.type === "logarithmic")))c === 1 ? b = [1, 2, 5, 10] : c <= 0.1 && (b = [1 / c]);
        for (d = 0; d < b.length; d++)if (a = b[d], e <= (b[d] + (b[d + 1] || b[d])) / 2)break;
        a *= c;
        return a
    }

    function tc(a, b) {
        var c = b || [
            [rb, [1, 2, 5, 10, 20, 25, 50, 100, 200, 500]],
            [fb, [1, 2, 5, 10, 15, 30]],
            [Za, [1, 2, 5, 10, 15, 30]],
            [pa, [1, 2, 3, 4, 6, 8, 12]],
            [ia, [1, 2]],
            [Ka, [1, 2]],
            [Aa, [1, 2, 3, 4, 6]],
            [Ba, null]
        ], d = c[c.length - 1], e = E[d[0]], f = d[1], g;
        for (g = 0; g < c.length; g++)if (d = c[g], e = E[d[0]], f = d[1], c[g +
            1] && a <= (e * f[f.length - 1] + E[c[g + 1][0]]) / 2)break;
        e === E[Ba] && a < 5 * e && (f = [1, 2, 5]);
        e === E[Ba] && a < 5 * e && (f = [1, 2, 5]);
        c = sc(a / e, f);
        return{unitRange:e, count:c, unitName:d[0]}
    }

    function Wb(a, b, c, d) {
        var e = [], f = {}, g = ca.global.useUTC, h, j = new Date(b), b = a.unitRange, k = a.count;
        j.setMilliseconds(0);
        b >= E[fb] && j.setSeconds(b >= E[Za] ? 0 : k * Qa(j.getSeconds() / k));
        if (b >= E[Za])j[uc](b >= E[pa] ? 0 : k * Qa(j[jc]() / k));
        if (b >= E[pa])j[vc](b >= E[ia] ? 0 : k * Qa(j[kc]() / k));
        if (b >= E[ia])j[lc](b >= E[Aa] ? 1 : k * Qa(j[$a]() / k));
        b >= E[Aa] && (j[wc](b >= E[Ba] ? 0 : k *
            Qa(j[Xb]() / k)), h = j[Yb]());
        b >= E[Ba] && (h -= h % k, j[xc](h));
        if (b === E[Ka])j[lc](j[$a]() - j[mc]() + r(d, 1));
        d = 1;
        h = j[Yb]();
        for (var i = j.getTime(), l = j[Xb](), j = j[$a](); i < c;)e.push(i), b === E[Ba] ? i = Zb(h + d * k, 0) : b === E[Aa] ? i = Zb(h, l + d * k) : !g && (b === E[ia] || b === E[Ka]) ? i = Zb(h, l, j + d * k * (b === E[ia] ? 1 : 7)) : (i += b * k, b <= E[pa] && i % E[ia] === 0 && (f[i] = ia)), d++;
        e.push(i);
        e.info = I(a, {higherRanks:f, totalRange:b * k});
        return e
    }

    function yc() {
        this.symbol = this.color = 0
    }

    function Mc(a, b, c, d, e, f, g, h, j) {
        var k = g.x, g = g.y, j = k + c + (j ? h : -a - h), i = g - b + d + 15, l;
        j <
            7 && (j = c + k + h);
        j + a > c + e && (j -= j + a - (c + e), i = g - b + d - h, l = !0);
        i < d + 5 ? (i = d + 5, l && g >= i && g <= i + b && (i = g + d + h)) : i + b > d + f && (i = d + f - b - h);
        return{x:j, y:i}
    }

    function Nc(a, b) {
        var c = a.length, d, e;
        for (e = 0; e < c; e++)a[e].ss_i = e;
        a.sort(function (a, c) {
            d = b(a, c);
            return d === 0 ? a.ss_i - c.ss_i : d
        });
        for (e = 0; e < c; e++)delete a[e].ss_i
    }

    function Hb(a) {
        for (var b = a.length, c = a[0]; b--;)a[b] < c && (c = a[b]);
        return c
    }

    function Cb(a) {
        for (var b = a.length, c = a[0]; b--;)a[b] > c && (c = a[b]);
        return c
    }

    function sb(a) {
        for (var b in a)a[b] && a[b].destroy && a[b].destroy(), delete a[b]
    }

    function Ib(a) {
        $b || ($b = fa(tb));
        a && $b.appendChild(a);
        $b.innerHTML = ""
    }

    function Jb(a, b) {
        Mb = r(a, b.animation)
    }

    function zc() {
        var a = ca.global.useUTC, b = a ? "getUTC" : "get", c = a ? "setUTC" : "set";
        Zb = a ? Date.UTC : function (a, b, c, g, h, j) {
            return(new Date(a, b, r(c, 1), r(g, 0), r(h, 0), r(j, 0))).getTime()
        };
        jc = b + "Minutes";
        kc = b + "Hours";
        mc = b + "Day";
        $a = b + "Date";
        Xb = b + "Month";
        Yb = b + "FullYear";
        uc = c + "Minutes";
        vc = c + "Hours";
        lc = c + "Date";
        wc = c + "Month";
        xc = c + "FullYear"
    }

    function Db() {
    }

    function ac(a, b) {
        function c(a) {
            function b(a, c) {
                this.pos = a;
                this.type =
                    c || "";
                this.isNew = !0;
                c || this.addLabel()
            }

            function c(a) {
                if (a)this.options = a, this.id = a.id;
                return this
            }

            function d(a, b, c, e) {
                this.isNegative = b;
                this.options = a;
                this.x = c;
                this.stack = e;
                this.alignOptions = {align:a.align || (da ? b ? "left" : "right" : "center"), verticalAlign:a.verticalAlign || (da ? "middle" : b ? "bottom" : "top"), y:r(a.y, da ? 4 : b ? 14 : -6), x:r(a.x, da ? b ? -6 : 6 : 0)};
                this.textAlign = a.textAlign || (da ? b ? "right" : "left" : "center")
            }

            function e() {
                var a = [], b = [], c;
                O = ba = null;
                n(D.series, function (e) {
                    if (e.visible || !v.ignoreHiddenSeries) {
                        var f =
                            e.options, g, h, i, j, k, l, o, s, p, Ra = f.threshold, t, n = [], u = 0;
                        if (m)f = e.xData, f.length && (O = va(r(O, f[0]), Hb(f)), ba = P(r(ba, f[0]), Cb(f))); else {
                            var D, bc, x, za = e.cropped, aa = e.xAxis.getExtremes(), w = !!e.modifyValue;
                            g = f.stacking;
                            ob = g === "percent";
                            if (g)k = f.stack, j = e.type + r(k, ""), l = "-" + j, e.stackKey = j, h = a[j] || [], a[j] = h, i = b[l] || [], b[l] = i;
                            ob && (O = 0, ba = 99);
                            f = e.processedXData;
                            o = e.processedYData;
                            t = o.length;
                            for (c = 0; c < t; c++)if (s = f[c], p = o[c], p !== null && p !== C && (g ? (bc = (D = p < Ra) ? i : h, x = D ? l : j, p = bc[s] = z(bc[s]) ? bc[s] + p : p, q[x] || (q[x] = {}),
                                q[x][s] || (q[x][s] = new d(A.stackLabels, D, s, k)), q[x][s].setTotal(p)) : w && (p = e.modifyValue(p)), za || (f[c + 1] || s) >= aa.min && (f[c - 1] || s) <= aa.max))if (s = p.length)for (; s--;)p[s] !== null && (n[u++] = p[s]); else n[u++] = p;
                            !ob && n.length && (O = va(r(O, n[0]), Hb(n)), ba = P(r(ba, n[0]), Cb(n)));
                            e.useThreshold && Ra !== null && (O >= Ra ? (O = Ra, xb = !0) : ba < Ra && (ba = Ra, Ka = !0))
                        }
                    }
                })
            }

            function f(a) {
                var b;
                b = a;
                ya = r(ya, ta.pow(10, Qa(ta.log(Ea) / ta.LN10)));
                ya < 1 && (b = B(1 / ya) * 10, b = B(a * b) / b);
                return b
            }

            function g() {
                var a, b;
                a = f(Qa(K / Ea) * Ea);
                var c = f(cc(Q / Ea) * Ea);
                for (ga = []; a <= c;) {
                    ga.push(a);
                    a = f(a + Ea);
                    if (a === b)break;
                    b = a
                }
            }

            function h() {
                var a, b = ba - O > Va, c, d, e, f, g, i;
                m && Va === C && (z(A.min) || z(A.max) ? Va = null : (n(D.series, function (a) {
                    f = a.xData;
                    for (d = g = a.xIncrement ? 1 : f.length - 1; d > 0; d--)if (e = f[d] - f[d - 1], c === C || e < c)c = e
                }), Va = va(c * 5, ba - O)));
                Q - K < Va && (a = (Va - Q + K) / 2, a = [K - a, r(A.min, K - a)], b && (a[2] = O), K = Cb(a), i = [K + Va, r(A.max, K + Va)], b && (i[2] = ba), Q = Hb(i), Q - K < Va && (a[0] = Q - Va, a[1] = r(A.min, Q - Va), K = Cb(a)))
            }

            function i(a) {
                var b, c, d = A.tickInterval, e = A.tickPixelInterval;
                qa ? (c = o[m ? "xAxis" : "yAxis"][A.linkedTo],
                    b = c.getExtremes(), K = r(b.min, b.dataMin), Q = r(b.max, b.dataMax)) : (K = r(db, A.min, O), Q = r(Wa, A.max, ba));
                w && (K = Fb(K), Q = Fb(Q));
                W && (db = K = P(K, Q - W), Wa = Q, a && (W = null));
                h();
                if (!Ta && !ob && !qa && z(K) && z(Q)) {
                    b = Q - K || 1;
                    if (!z(A.min) && !z(db) && fa && (O < 0 || !xb))K -= b * fa;
                    if (!z(A.max) && !z(Wa) && oa && (ba > 0 || !Ka))Q += b * oa
                }
                Ea = K === Q || K === void 0 || Q === void 0 ? 1 : qa && !d && e === c.options.tickPixelInterval ? c.tickInterval : r(d, Ta ? 1 : (Q - K) * e / (H || 1));
                m && !a && n(D.series, function (a) {
                    a.processData(K !== ca || Q !== ia)
                });
                V();
                D.beforeSetTickPositions && D.beforeSetTickPositions();
                D.postProcessTickInterval && (Ea = D.postProcessTickInterval(Ea));
                za || (ya = ta.pow(10, Qa(ta.log(Ea) / ta.LN10)), z(A.tickInterval) || (Ea = sc(Ea, null, ya, A)));
                D.tickInterval = Ea;
                Ha = A.minorTickInterval === "auto" && Ea ? Ea / 5 : A.minorTickInterval;
                (ga = A.tickPositions || wb && wb.apply(D, [K, Q])) || (za ? ga = (D.getNonLinearTimeTicks || Wb)(tc(Ea, A.units), K, Q, A.startOfWeek, D.ordinalPositions, D.closestPointRange, !0) : g());
                S(D, "afterSetTickPositions", {tickPositions:ga});
                if (!qa && (a = ga[0], c = ga[ga.length - 1], A.startOnTick ? K = a : K > a && ga.shift(),
                    A.endOnTick ? Q = c : Q < c && ga.pop(), gb || (gb = {x:0, y:0}), !za && ga.length > gb[Ia] && A.alignTicks !== !1))gb[Ia] = ga.length
            }

            function j(a) {
                a = (new c(a)).render();
                $.push(a);
                return a
            }

            function k() {
                var a = A.title, d = A.stackLabels, e = A.alternateGridColor, f = A.lineWidth, g, h, i = o.hasRendered && z(ca) && !isNaN(ca), l = (g = D.series.length && z(K) && z(Q)) || r(A.showEmpty, !0);
                if (g || qa) {
                    if (Ha && !Ta)for (g = K + (ga[0] - K) % Ha; g <= Q; g += Ha)ma[g] || (ma[g] = new b(g, "minor")), i && ma[g].isNew && ma[g].render(null, !0), ma[g].isActive = !0, ma[g].render();
                    n(ga, function (a, c) {
                        if (!qa || a >= K && a <= Q)Sa[a] || (Sa[a] = new b(a)), i && Sa[a].isNew && Sa[a].render(c, !0), Sa[a].isActive = !0, Sa[a].render(c)
                    });
                    e && n(ga, function (a, b) {
                        if (b % 2 === 0 && a < Q)na[a] || (na[a] = new c), na[a].options = {from:a, to:ga[b + 1] !== C ? ga[b + 1] : Q, color:e}, na[a].render(), na[a].isActive = !0
                    });
                    if (!D._addedPlotLB)n((A.plotLines || []).concat(A.plotBands || []), function (a) {
                        j(a)
                    }), D._addedPlotLB = !0
                }
                n([Sa, ma, na], function (a) {
                    for (var b in a)a[b].isActive ? a[b].isActive = !1 : (a[b].destroy(), delete a[b])
                });
                f && (g = y + (p ? F : 0) + aa, h = La - E - (p ? hb :
                    0) + aa, g = X.crispLine([ua, s ? y : g, s ? h : mb, ja, s ? ka - L : g, s ? h : La - E], f), Z ? Z.animate({d:g}) : Z = X.path(g).attr({stroke:A.lineColor, "stroke-width":f, zIndex:7}).add(), Z[l ? "show" : "hide"]());
                if (u && l)l = s ? y : mb, f = M(a.style.fontSize || 12), l = {low:l + (s ? 0 : H), middle:l + H / 2, high:l + (s ? H : 0)}[a.align], f = (s ? mb + hb : y) + (s ? 1 : -1) * (p ? -1 : 1) * bb + (t === 2 ? f : 0), u[u.isNew ? "attr" : "animate"]({x:s ? l : f + (p ? F : 0) + aa + (a.x || 0), y:s ? f - (p ? hb : 0) + aa : l + (a.y || 0)}), u.isNew = !1;
                if (d && d.enabled) {
                    var m, Ra, d = D.stackTotalGroup;
                    if (!d)D.stackTotalGroup = d = X.g("stack-labels").attr({visibility:Ya,
                        zIndex:6}).translate(Y, T).add();
                    for (m in q)for (Ra in a = q[m], a)a[Ra].render(d)
                }
                D.isDirty = !1
            }

            function l(a) {
                for (var b = $.length; b--;)$[b].id === a && $[b].destroy()
            }

            var m = a.isX, p = a.opposite, s = da ? !m : m, t = s ? p ? 0 : 2 : p ? 1 : 3, q = {}, A = G(m ? dc : nc, [Oc, Pc, Ac, Qc][t], a), D = this, u, x = A.type, za = x === "datetime", w = x === "logarithmic", aa = A.offset || 0, Ia = m ? "x" : "y", H = 0, ea, sa, Pa, yb, y, mb, F, hb, E, L, Xa, V, Lb, R, N, Z, O, ba, Va = A.minRange || A.maxZoom, W = A.range, db, Wa, la, ha, Q = null, K = null, ca, ia, fa = A.minPadding, oa = A.maxPadding, Ca = 0, qa = z(A.linkedTo), xb,
                Ka, ob, x = A.events, ib, $ = [], Ea, Ha, ya, ga, wb = A.tickPositioner, Sa = {}, ma = {}, na = {}, pa, Aa, bb, Ta = A.categories, Rc = A.labels.formatter || function () {
                    var a = this.value, b = this.dateTimeLabelFormat;
                    return b ? ub(b, a) : Ea % 1E6 === 0 ? a / 1E6 + "M" : Ea % 1E3 === 0 ? a / 1E3 + "k" : !Ta && a >= 1E3 ? Vb(a, 0) : a
                }, Na = s && A.labels.staggerLines, Ba = A.reversed, Da = Ta && A.tickmarkPlacement === "between" ? 0.5 : 0;
            b.prototype = {addLabel:function () {
                var a = this.pos, b = A.labels, c = Ta && s && Ta.length && !b.step && !b.staggerLines && !b.rotation && wa / Ta.length || !s && wa / 2, d = a === ga[0], f =
                    a === ga[ga.length - 1], e = Ta && z(Ta[a]) ? Ta[a] : a, g = this.label, h = ga.info, i;
                za && h && (i = A.dateTimeLabelFormats[h.higherRanks[a] || h.unitName]);
                this.isFirst = d;
                this.isLast = f;
                a = Rc.call({axis:D, chart:o, isFirst:d, isLast:f, dateTimeLabelFormat:i, value:w ? rc(e) : e});
                c = c && {width:P(1, B(c - 2 * (b.padding || 10))) + Fa};
                c = I(c, b.style);
                z(g) ? g && g.attr({text:a}).css(c) : this.label = z(a) && b.enabled ? X.text(a, 0, 0, b.useHTML).attr({align:b.align, rotation:b.rotation}).css(c).add(R) : null
            }, getLabelSize:function () {
                var a = this.label;
                return a ? (this.labelBBox =
                    a.getBBox())[s ? "height" : "width"] : 0
            }, render:function (a, b) {
                var c = this.type, d = this.label, f = this.pos, e = A.labels, g = this.gridLine, h = c ? c + "Grid" : "grid", i = c ? c + "Tick" : "tick", j = A[h + "LineWidth"], k = A[h + "LineColor"], l = A[h + "LineDashStyle"], m = A[i + "Length"], h = A[i + "Width"] || 0, o = A[i + "Color"], Ra = A[i + "Position"], i = this.mark, t = e.step, q = b && Ma || La, n;
                n = s ? Xa(f + Da, null, null, b) + Pa : y + aa + (p ? (b && Oa || ka) - L - y : 0);
                q = s ? q - E + aa - (p ? hb : 0) : q - Xa(f + Da, null, null, b) - Pa;
                if (j) {
                    f = Lb(f + Da, j, b);
                    if (g === C) {
                        g = {stroke:k, "stroke-width":j};
                        if (l)g.dashstyle =
                            l;
                        if (!c)g.zIndex = 1;
                        this.gridLine = g = j ? X.path(f).attr(g).add(N) : null
                    }
                    !b && g && f && g.animate({d:f})
                }
                if (h)Ra === "inside" && (m = -m), p && (m = -m), c = X.crispLine([ua, n, q, ja, n + (s ? 0 : -m), q + (s ? m : 0)], h), i ? i.animate({d:c}) : this.mark = X.path(c).attr({stroke:o, "stroke-width":h}).add(R);
                d && !isNaN(n) && (n = n + e.x - (Da && s ? Da * sa * (Ba ? -1 : 1) : 0), q = q + e.y - (Da && !s ? Da * sa * (Ba ? 1 : -1) : 0), z(e.y) || (q += M(d.styles.lineHeight) * 0.9 - d.getBBox().height / 2), Na && (q += a / (t || 1) % Na * 16), this.isFirst && !r(A.showFirstLabel, 1) || this.isLast && !r(A.showLastLabel, 1) ?
                    d.hide() : d.show(), t && a % t && d.hide(), d[this.isNew ? "attr" : "animate"]({x:n, y:q}));
                this.isNew = !1
            }, destroy:function () {
                sb(this)
            }};
            c.prototype = {render:function () {
                var a = this, b = (D.pointRange || 0) / 2, c = a.options, d = c.label, f = a.label, e = c.width, g = c.to, h = c.from, i = c.value, j, k = c.dashStyle, l = a.svgElem, m = [], A, p, o = c.color;
                p = c.zIndex;
                var Ra = c.events;
                w && (h = Fb(h), g = Fb(g), i = Fb(i));
                if (e) {
                    if (m = Lb(i, e), b = {stroke:o, "stroke-width":e}, k)b.dashstyle = k
                } else if (z(h) && z(g))h = P(h, K - b), g = va(g, Q + b), j = Lb(g), (m = Lb(h)) && j ? m.push(j[4], j[5],
                    j[1], j[2]) : m = null, b = {fill:o}; else return;
                if (z(p))b.zIndex = p;
                if (l)m ? l.animate({d:m}, null, l.onGetPath) : (l.hide(), l.onGetPath = function () {
                    l.show()
                }); else if (m && m.length && (a.svgElem = l = X.path(m).attr(b).add(), Ra))for (A in k = function (b) {
                    l.on(b, function (c) {
                        Ra[b].apply(a, [c])
                    })
                }, Ra)k(A);
                if (d && z(d.text) && m && m.length && F > 0 && hb > 0) {
                    d = G({align:s && j && "center", x:s ? !j && 4 : 10, verticalAlign:!s && j && "middle", y:s ? j ? 16 : 10 : j ? 6 : -4, rotation:s && !j && 90}, d);
                    if (!f)a.label = f = X.text(d.text, 0, 0).attr({align:d.textAlign || d.align, rotation:d.rotation,
                        zIndex:p}).css(d.style).add();
                    j = [m[1], m[4], r(m[6], m[1])];
                    m = [m[2], m[5], r(m[7], m[2])];
                    A = Hb(j);
                    p = Hb(m);
                    f.align(d, !1, {x:A, y:p, width:Cb(j) - A, height:Cb(m) - p});
                    f.show()
                } else f && f.hide();
                return a
            }, destroy:function () {
                sb(this);
                Gb($, this)
            }};
            d.prototype = {destroy:function () {
                sb(this)
            }, setTotal:function (a) {
                this.cum = this.total = a
            }, render:function (a) {
                var b = this.options.formatter.call(this);
                this.label ? this.label.attr({text:b, visibility:Ua}) : this.label = o.renderer.text(b, 0, 0).css(this.options.style).attr({align:this.textAlign,
                    rotation:this.options.rotation, visibility:Ua}).add(a)
            }, setOffset:function (a, b) {
                var c = this.isNegative, d = D.translate(this.total), f = D.translate(0), f = Ja(d - f), e = o.xAxis[0].translate(this.x) + a, g = o.plotHeight, c = {x:da ? c ? d : d - f : e, y:da ? g - e - b : c ? g - d - f : g - d, width:da ? f : b, height:da ? b : f};
                this.label && this.label.align(this.alignOptions, null, c).attr({visibility:Ya})
            }};
            Xa = function (a, b, c, d, f) {
                var e = 1, g = 0, h = d ? yb : sa, d = d ? ca : K, f = A.ordinal || w && f;
                h || (h = sa);
                c && (e *= -1, g = H);
                Ba && (e *= -1, g -= e * H);
                b ? (Ba && (a = H - a), a = a / h + d, f && (a = D.lin2val(a))) :
                    (f && (a = D.val2lin(a)), a = e * (a - d) * h + g + e * Ca);
                return a
            };
            Lb = function (a, b, c) {
                var d, f, e, a = Xa(a, null, null, c), g = c && Ma || La, h = c && Oa || ka, i, c = f = B(a + Pa);
                d = e = B(g - a - Pa);
                if (isNaN(a))i = !0; else if (s) {
                    if (d = mb, e = g - E, c < y || c > y + F)i = !0
                } else if (c = y, f = h - L, d < mb || d > mb + hb)i = !0;
                return i ? null : X.crispLine([ua, c, d, ja, f, e], b || 0)
            };
            V = function () {
                var a = Q - K, b = 0, c, d;
                if (m)n(D.series, function (a) {
                    b = P(b, a.pointRange);
                    d = a.closestPointRange;
                    !a.noSharedTooltip && z(d) && (c = z(c) ? va(c, d) : d)
                }), D.pointRange = b, D.closestPointRange = c;
                yb = sa;
                D.translationSlope =
                    sa = H / (a + b || 1);
                Pa = s ? y : E;
                Ca = sa * (b / 2)
            };
            Ga.push(D);
            o[m ? "xAxis" : "yAxis"].push(D);
            da && m && Ba === C && (Ba = !0);
            I(D, {addPlotBand:j, addPlotLine:j, adjustTickAmount:function () {
                if (gb && gb[Ia] && !za && !Ta && !qa && A.alignTicks !== !1) {
                    var a = pa, b = ga.length;
                    pa = gb[Ia];
                    if (b < pa) {
                        for (; ga.length < pa;)ga.push(f(ga[ga.length - 1] + Ea));
                        sa *= (b - 1) / (pa - 1);
                        Q = ga[ga.length - 1]
                    }
                    if (z(a) && pa !== a)D.isDirty = !0
                }
            }, categories:Ta, getExtremes:function () {
                return{min:K, max:Q, dataMin:O, dataMax:ba, userMin:db, userMax:Wa}
            }, getPlotLinePath:Lb, getThreshold:function (a) {
                K >
                    a || a === null ? a = K : Q < a && (a = Q);
                return Xa(a, 0, 1)
            }, isXAxis:m, options:A, plotLinesAndBands:$, getOffset:function () {
                var a = D.series.length && z(K) && z(Q), c = a || r(A.showEmpty, !0), d = 0, f = 0, e = A.title, g = A.labels, h = [-1, 1, 1, -1][t], i;
                R || (R = X.g("axis").attr({zIndex:7}).add(), N = X.g("grid").attr({zIndex:A.gridZIndex || 1}).add());
                Aa = 0;
                if (a || qa)n(ga, function (a) {
                    Sa[a] ? Sa[a].addLabel() : Sa[a] = new b(a)
                }), n(ga, function (a) {
                    if (t === 0 || t === 2 || {1:"left", 3:"right"}[t] === g.align)Aa = P(Sa[a].getLabelSize(), Aa)
                }), Na && (Aa += (Na - 1) * 16); else for (i in Sa)Sa[i].destroy(),
                    delete Sa[i];
                if (e && e.text) {
                    if (!u)u = D.axisTitle = X.text(e.text, 0, 0, e.useHTML).attr({zIndex:7, rotation:e.rotation || 0, align:e.textAlign || {low:"left", middle:"center", high:"right"}[e.align]}).css(e.style).add(), u.isNew = !0;
                    c && (d = u.getBBox()[s ? "height" : "width"], f = r(e.margin, s ? 5 : 10));
                    u[c ? "show" : "hide"]()
                }
                aa = h * r(A.offset, J[t]);
                bb = r(e.offset, Aa + f + (t !== 2 && Aa && h * A.labels[s ? "y" : "x"]));
                J[t] = P(J[t], bb + d + h * aa)
            }, render:k, setAxisSize:function () {
                var a = A.offsetLeft || 0, b = A.offsetRight || 0;
                y = r(A.left, Y + a);
                mb = r(A.top, T);
                F = r(A.width, wa - a + b);
                hb = r(A.height, xa);
                E = La - hb - mb;
                L = ka - F - y;
                H = s ? F : hb;
                D.left = y;
                D.top = mb;
                D.len = H
            }, setAxisTranslation:V, setCategories:function (b, c) {
                D.categories = a.categories = Ta = b;
                n(D.series, function (a) {
                    a.translate();
                    a.setTooltipPoints(!0)
                });
                D.isDirty = !0;
                r(c, !0) && o.redraw()
            }, setExtremes:function (a, b, c, d) {
                c = r(c, !0);
                S(D, "setExtremes", {min:a, max:b}, function () {
                    db = a;
                    Wa = b;
                    c && o.redraw(d)
                });
                S(D, "afterSetExtremes", {min:K, max:Q})
            }, setScale:function () {
                var a, b, c;
                ca = K;
                ia = Q;
                ea = H;
                H = s ? F : hb;
                n(D.series, function (a) {
                    if (a.isDirtyData ||
                        a.isDirty || a.xAxis.isDirty)c = !0
                });
                if (H !== ea || c || qa || db !== la || Wa !== ha) {
                    e();
                    i();
                    la = db;
                    ha = Wa;
                    if (!m)for (a in q)for (b in q[a])q[a][b].cum = q[a][b].total;
                    if (!D.isDirty)D.isDirty = o.isDirtyBox || K !== ca || Q !== ia
                }
            }, setTickPositions:i, translate:Xa, redraw:function () {
                vb.resetTracker && vb.resetTracker();
                k();
                n($, function (a) {
                    a.render()
                });
                n(D.series, function (a) {
                    a.isDirty = !0
                })
            }, removePlotBand:l, removePlotLine:l, reversed:Ba, series:[], stacks:q, destroy:function () {
                var a;
                ra(D);
                for (a in q)sb(q[a]), q[a] = null;
                if (D.stackTotalGroup)D.stackTotalGroup =
                    D.stackTotalGroup.destroy();
                n([Sa, ma, na, $], function (a) {
                    sb(a)
                });
                n([Z, R, N, u], function (a) {
                    a && a.destroy()
                });
                Z = R = N = u = null
            }});
            for (ib in x)U(D, ib, x[ib]);
            if (w)D.val2lin = Fb, D.lin2val = rc
        }

        function d(a) {
            function b() {
                var a = this.points || qb(this), c = a[0].series, d;
                d = [c.tooltipHeaderFormatter(a[0].key)];
                n(a, function (a) {
                    c = a.series;
                    d.push(c.tooltipFormatter && c.tooltipFormatter(a) || a.point.tooltipFormatter(c.tooltipOptions.pointFormat))
                });
                return d.join("")
            }

            function c(a, b) {
                l = m ? a : (2 * l + a) / 3;
                p = m ? b : (p + b) / 2;
                s.attr({x:l, y:p});
                Da = Ja(a - l) > 1 || Ja(b - p) > 1 ? function () {
                    c(a, b)
                } : null
            }

            function d() {
                if (!m) {
                    var a = o.hoverPoints;
                    s.hide();
                    a && n(a, function (a) {
                        a.setState()
                    });
                    o.hoverPoints = null;
                    m = !0
                }
            }

            var f, e = a.borderWidth, g = a.crosshairs, h = [], i = a.style, j = a.shared, k = M(i.padding), m = !0, l = 0, p = 0;
            i.padding = 0;
            var s = X.label("", 0, 0).attr({padding:k, fill:a.backgroundColor, "stroke-width":e, r:a.borderRadius, zIndex:8}).css(i).hide().add().shadow(a.shadow);
            return{shared:j, refresh:function (e) {
                var i, k, l, p, q = {}, t = [];
                l = e.tooltipPos;
                i = a.formatter || b;
                q = o.hoverPoints;
                j && (!e.series || !e.series.noSharedTooltip) ? (p = 0, q && n(q, function (a) {
                    a.setState()
                }), o.hoverPoints = e, n(e, function (a) {
                    a.setState(ab);
                    p += a.plotY;
                    t.push(a.getLabelConfig())
                }), k = e[0].plotX, p = B(p) / e.length, q = {x:e[0].category}, q.points = t, e = e[0]) : q = e.getLabelConfig();
                q = i.call(q);
                f = e.series;
                k = r(k, e.plotX);
                p = r(p, e.plotY);
                i = B(l ? l[0] : da ? wa - p : k);
                k = B(l ? l[1] : da ? xa - k : p);
                l = j || !f.isCartesian || f.tooltipOutsidePlot || bb(i, k);
                q === !1 || !l ? d() : (m && (s.show(), m = !1), s.attr({text:q}), s.attr({stroke:a.borderColor || e.color || f.color ||
                    "#606060"}), k = Mc(s.width, s.height, Y, T, wa, xa, {x:i, y:k}, r(a.distance, 12), da), c(B(k.x), B(k.y)));
                if (g) {
                    g = qb(g);
                    for (k = g.length; k--;)if (l = e.series[k ? "yAxis" : "xAxis"], g[k] && l)if (l = l.getPlotLinePath(e[k ? "y" : "x"], 1), h[k])h[k].attr({d:l, visibility:Ya}); else {
                        i = {"stroke-width":g[k].width || 1, stroke:g[k].color || "#C0C0C0", zIndex:g[k].zIndex || 2};
                        if (g[k].dashStyle)i.dashstyle = g[k].dashStyle;
                        h[k] = X.path(l).attr(i).add()
                    }
                }
            }, hide:d, hideCrosshairs:function () {
                n(h, function (a) {
                    a && a.hide()
                })
            }, destroy:function () {
                n(h, function (a) {
                    a &&
                    a.destroy()
                });
                s && (s = s.destroy())
            }}
        }

        function e(a) {
            function b(a) {
                var c, d, e, a = a || Ha.event;
                if (!a.target)a.target = a.srcElement;
                if (a.originalEvent)a = a.originalEvent;
                if (a.event)a = a.event;
                c = a.touches ? a.touches.item(0) : a;
                nb = Bc(F);
                d = nb.left;
                e = nb.top;
                Ub ? (d = a.x, c = a.y) : (d = c.pageX - d, c = c.pageY - e);
                return I(a, {chartX:B(d), chartY:B(c)})
            }

            function c(a) {
                var b = {xAxis:[], yAxis:[]};
                n(Ga, function (c) {
                    var d = c.translate, e = c.isXAxis;
                    b[e ? "xAxis" : "yAxis"].push({axis:c, value:d((da ? !e : e) ? a.chartX - Y : xa - a.chartY + T, !0)})
                });
                return b
            }

            function e() {
                var a = o.hoverSeries, b = o.hoverPoint;
                if (b)b.onMouseOut();
                if (a)a.onMouseOut();
                ya && (ya.hide(), ya.hideCrosshairs());
                Za = null
            }

            function f() {
                if (l) {
                    var a = {xAxis:[], yAxis:[]}, b = l.getBBox(), c = b.x - Y, d = b.y - T;
                    k && (n(Ga, function (e) {
                        if (e.options.zoomEnabled !== !1) {
                            var f = e.translate, g = e.isXAxis, h = da ? !g : g, i = f(h ? c : xa - d - b.height, !0, 0, 0, 1), f = f(h ? c + b.width : xa - d, !0, 0, 0, 1);
                            a[g ? "xAxis" : "yAxis"].push({axis:e, min:va(i, f), max:P(i, f)})
                        }
                    }), S(o, "selection", a, lb));
                    l = l.destroy()
                }
                R(F, {cursor:"auto"});
                o.mouseIsDown = sa = k =
                    !1;
                ra(N, qa ? "touchend" : "mouseup", f)
            }

            function g(a) {
                var b = z(a.pageX) ? a.pageX : a.page.x, a = z(a.pageX) ? a.pageY : a.page.y;
                nb && !bb(b - nb.left - Y, a - nb.top - T) && e()
            }

            function h() {
                e();
                nb = null
            }

            var i, j, k, l, m = v.zoomType, p = /x/.test(m), s = /y/.test(m), q = p && !da || s && da, t = s && !da || p && da;
            ob = function () {
                Wa ? (Wa.translate(Y, T), da && Wa.attr({width:o.plotWidth, height:o.plotHeight}).invert()) : o.trackerGroup = Wa = X.g("tracker").attr({zIndex:9}).add()
            };
            ob();
            if (a.enabled)o.tooltip = ya = d(a), eb = setInterval(function () {
                Da && Da()
            }, 32);
            (function () {
                F.onmousedown =
                    function (a) {
                        a = b(a);
                        !qa && a.preventDefault && a.preventDefault();
                        o.mouseIsDown = sa = !0;
                        o.mouseDownX = i = a.chartX;
                        j = a.chartY;
                        U(N, qa ? "touchend" : "mouseup", f)
                    };
                var d = function (c) {
                    if (!c || !(c.touches && c.touches.length > 1)) {
                        c = b(c);
                        if (!qa)c.returnValue = !1;
                        var d = c.chartX, e = c.chartY, f = !bb(d - Y, e - T);
                        qa && c.type === "touchstart" && (Z(c.target, "isTracker") ? o.runTrackerClick || c.preventDefault() : !Ba && !f && c.preventDefault());
                        f && (d < Y ? d = Y : d > Y + wa && (d = Y + wa), e < T ? e = T : e > T + xa && (e = T + xa));
                        if (sa && c.type !== "touchstart") {
                            if (k = Math.sqrt(Math.pow(i -
                                d, 2) + Math.pow(j - e, 2)), k > 10) {
                                var g = bb(i - Y, j - T);
                                if (Ka && (p || s) && g)l || (l = X.rect(Y, T, q ? 1 : wa, t ? 1 : xa, 0).attr({fill:v.selectionMarkerFill || "rgba(69,114,167,0.25)", zIndex:7}).add());
                                l && q && (c = d - i, l.attr({width:Ja(c), x:(c > 0 ? 0 : c) + i}));
                                l && t && (e -= j, l.attr({height:Ja(e), y:(e > 0 ? 0 : e) + j}));
                                g && !l && v.panning && o.pan(d)
                            }
                        } else if (!f) {
                            var h, d = o.hoverPoint, e = o.hoverSeries, m, n, g = ka, u = da ? c.chartY : c.chartX - Y;
                            if (ya && a.shared && (!e || !e.noSharedTooltip)) {
                                h = [];
                                m = O.length;
                                for (n = 0; n < m; n++)if (O[n].visible && O[n].options.enableMouseTracking !==
                                    !1 && !O[n].noSharedTooltip && O[n].tooltipPoints.length)c = O[n].tooltipPoints[u], c._dist = Ja(u - c.plotX), g = va(g, c._dist), h.push(c);
                                for (m = h.length; m--;)h[m]._dist > g && h.splice(m, 1);
                                if (h.length && h[0].plotX !== Za)ya.refresh(h), Za = h[0].plotX
                            }
                            if (e && e.tracker && (c = e.tooltipPoints[u]) && c !== d)c.onMouseOver()
                        }
                        return f || !Ka
                    }
                };
                F.onmousemove = d;
                U(F, "mouseleave", h);
                U(N, "mousemove", g);
                F.ontouchstart = function (a) {
                    if (p || s)F.onmousedown(a);
                    d(a)
                };
                F.ontouchmove = d;
                F.ontouchend = function () {
                    k && e()
                };
                F.onclick = function (a) {
                    var d = o.hoverPoint,
                        a = b(a);
                    a.cancelBubble = !0;
                    if (!k)if (d && Z(a.target, "isTracker")) {
                        var e = d.plotX, f = d.plotY;
                        I(d, {pageX:nb.left + Y + (da ? wa - f : e), pageY:nb.top + T + (da ? xa - e : f)});
                        S(d.series, "click", I(a, {point:d}));
                        d.firePointEvent("click", a)
                    } else I(a, c(a)), bb(a.chartX - Y, a.chartY - T) && S(o, "click", a);
                    k = !1
                }
            })();
            I(this, {zoomX:p, zoomY:s, resetTracker:e, normalizeMouseEvent:b, destroy:function () {
                if (o.trackerGroup)o.trackerGroup = Wa = o.trackerGroup.destroy();
                ra(F, "mouseleave", h);
                ra(N, "mousemove", g);
                F.onclick = F.onmousedown = F.onmousemove = F.ontouchstart =
                    F.ontouchend = F.ontouchmove = null
            }})
        }

        function f(a) {
            var b = a.type || v.type || v.defaultSeriesType, c = la[b], d = o.hasRendered;
            if (d)if (da && b === "column")c = la.bar; else if (!da && b === "bar")c = la.column;
            b = new c;
            b.init(o, a);
            !d && b.inverted && (da = !0);
            if (b.isCartesian)Ka = b.isCartesian;
            O.push(b);
            return b
        }

        function g() {
            v.alignTicks !== !1 && n(Ga, function (a) {
                a.adjustTickAmount()
            });
            gb = null
        }

        function h(a) {
            var b = o.isDirtyLegend, c, d = o.isDirtyBox, e = O.length, f = e, h = o.clipRect;
            for (Jb(a, o); f--;)if (a = O[f], a.isDirty && a.options.stacking) {
                c =
                    !0;
                break
            }
            if (c)for (f = e; f--;)if (a = O[f], a.options.stacking)a.isDirty = !0;
            n(O, function (a) {
                a.isDirty && a.options.legendType === "point" && (b = !0)
            });
            if (b && wb.renderLegend)wb.renderLegend(), o.isDirtyLegend = !1;
            Ka && (Aa || (gb = null, n(Ga, function (a) {
                a.setScale()
            })), g(), Na(), n(Ga, function (a) {
                a.isDirty && a.redraw()
            }));
            d && ($a(), ob(), h && (Kb(h), h.animate({width:o.plotSizeX, height:o.plotSizeY + 1})));
            n(O, function (a) {
                a.isDirty && a.visible && (!a.isCartesian || a.xAxis) && a.redraw()
            });
            vb && vb.resetTracker && vb.resetTracker();
            S(o, "redraw")
        }

        function j() {
            var b = a.xAxis || {}, d = a.yAxis || {}, b = qb(b);
            n(b, function (a, b) {
                a.index = b;
                a.isX = !0
            });
            d = qb(d);
            n(d, function (a, b) {
                a.index = b
            });
            b = b.concat(d);
            n(b, function (a) {
                new c(a)
            });
            g()
        }

        function k() {
            var a = ca.lang, b = v.resetZoomButton, c = b.relativeTo === "plot" && {x:Y, y:T, width:wa, height:xa};
            o.resetZoomButton = X.button(a.resetZoom, null, null, rb, b.theme).attr({align:b.position.align, title:a.resetZoomTitle}).add().align(b.position, !1, c)
        }

        function i(b, c) {
            Xa = G(a.title, b);
            E = G(a.subtitle, c);
            n([
                ["title", b, Xa],
                ["subtitle", c,
                    E]
            ], function (a) {
                var b = a[0], c = o[b], d = a[1], a = a[2];
                c && d && (c = c.destroy());
                a && a.text && !c && (o[b] = X.text(a.text, 0, 0, a.useHTML).attr({align:a.align, "class":cb + b, zIndex:1}).css(a.style).add().align(a, !1, y))
            })
        }

        function l() {
            L = v.renderTo;
            oa = cb + oc++;
            Bb(L) && (L = N.getElementById(L));
            L.innerHTML = "";
            L.offsetWidth || (W = L.cloneNode(0), R(W, {position:Eb, top:"-9999px", display:""}), N.body.appendChild(W));
            ia = (W || L).offsetWidth;
            xb = (W || L).offsetHeight;
            o.chartWidth = ka = v.width || ia || 600;
            o.chartHeight = La = v.height || (xb > 19 ? xb : 400);
            o.container = F = fa(tb, {className:cb + "container" + (v.className ? " " + v.className : ""), id:oa}, I({position:Cc, overflow:Ua, width:ka + Fa, height:La + Fa, textAlign:"left", lineHeight:"normal"}, v.style), W || L);
            o.renderer = X = v.forExport ? new Nb(F, ka, La, !0) : new Ob(F, ka, La);
            var a, b;
            Dc && F.getBoundingClientRect && (a = function () {
                R(F, {left:0, top:0});
                b = F.getBoundingClientRect();
                R(F, {left:-(b.left - M(b.left)) + Fa, top:-(b.top - M(b.top)) + Fa})
            }, a(), U(Ha, "resize", a), U(o, "destroy", function () {
                ra(Ha, "resize", a)
            }))
        }

        function m() {
            function a() {
                var c =
                    v.width || L.offsetWidth, d = v.height || L.offsetHeight;
                if (c && d) {
                    if (c !== ia || d !== xb)clearTimeout(b), b = setTimeout(function () {
                        kb(c, d, !1)
                    }, 100);
                    ia = c;
                    xb = d
                }
            }

            var b;
            U(Ha, "resize", a);
            U(o, "destroy", function () {
                ra(Ha, "resize", a)
            })
        }

        function p() {
            o && S(o, "endResize", null, function () {
                Aa -= 1
            })
        }

        function t() {
            for (var b = da || v.inverted || v.type === "bar" || v.defaultSeriesType === "bar", c = a.series, d = c && c.length; !b && d--;)c[d].type === "bar" && (b = !0);
            o.inverted = da = b
        }

        function x() {
            var b = a.labels, c = a.credits, d;
            i();
            wb = o.legend = new Db;
            n(Ga, function (a) {
                a.setScale()
            });
            Na();
            n(Ga, function (a) {
                a.setTickPositions(!0)
            });
            g();
            Na();
            $a();
            Ka && n(Ga, function (a) {
                a.render()
            });
            if (!o.seriesGroup)o.seriesGroup = X.g("series-group").attr({zIndex:3}).add();
            n(O, function (a) {
                a.translate();
                a.setTooltipPoints();
                a.render()
            });
            b.items && n(b.items, function () {
                var a = I(b.style, this.style), c = M(a.left) + Y, d = M(a.top) + T + 12;
                delete a.left;
                delete a.top;
                X.text(this.html, c, d).attr({zIndex:2}).css(a).add()
            });
            if (c.enabled && !o.credits)d = c.href, o.credits = X.text(c.text, 0, 0).on("click",
                function () {
                    if (d)location.href =
                        d
                }).attr({align:c.position.align, zIndex:8}).css(c.style).add().align(c.position);
            ob();
            o.hasRendered = !0;
            W && (L.appendChild(F), Ib(W))
        }

        function u() {
            if (!Pb && Ha == Ha.top && N.readyState !== "complete")N.attachEvent("onreadystatechange", function () {
                N.detachEvent("onreadystatechange", u);
                N.readyState === "complete" && u()
            }); else {
                l();
                S(o, "init");
                if (Highcharts.RangeSelector && a.rangeSelector.enabled)o.rangeSelector = new Highcharts.RangeSelector(o);
                fb();
                jb();
                t();
                j();
                n(a.series || [], function (a) {
                    f(a)
                });
                if (Highcharts.Scroller &&
                    (a.navigator.enabled || a.scrollbar.enabled))o.scroller = new Highcharts.Scroller(o);
                o.render = x;
                o.tracker = vb = new e(a.tooltip);
                x();
                b && b.apply(o, [o]);
                n(o.callbacks, function (a) {
                    a.apply(o, [o])
                });
                S(o, "load")
            }
        }

        var w = a.series;
        a.series = null;
        a = G(ca, a);
        a.series = w;
        var v = a.chart, w = v.margin, w = pb(w) ? w : [w, w, w, w], q = r(v.marginTop, w[0]), aa = r(v.marginRight, w[1]), za = r(v.marginBottom, w[2]), H = r(v.marginLeft, w[3]), yb = v.spacingTop, s = v.spacingRight, Ia = v.spacingBottom, ea = v.spacingLeft, y, Xa, E, T, V, ba, Y, J, L, W, F, oa, ia, xb, ka, La, Oa,
            Ma, ha, Ca, $, ib, o = this, Ba = (w = v.events) && !!w.click, pa, bb, ya, sa, Pa, Va, db, xa, wa, vb, Wa, ob, wb, zb, Ab, nb, Ka = v.showAxes, Aa = 0, Ga = [], gb, O = [], da, X, Da, eb, Za, $a, Na, fb, jb, kb, lb, rb, Db = function () {
                function a(b, c) {
                    var d = b.legendItem, e = b.legendLine, g = b.legendSymbol, h = p.color, i = c ? f.itemStyle.color : h, h = c ? b.color : h;
                    d && d.css({fill:i});
                    e && e.attr({stroke:h});
                    g && g.attr({stroke:h, fill:h})
                }

                function b(a, c, d) {
                    var e = a.legendItem, f = a.legendLine, g = a.legendSymbol, a = a.checkbox;
                    e && e.attr({x:c, y:d});
                    f && f.translate(c, d - 4);
                    g && g.attr({x:c +
                        g.xOff, y:d + g.yOff});
                    if (a)a.x = c, a.y = d
                }

                function c() {
                    n(j, function (a) {
                        var b = a.checkbox, c = sa.alignAttr;
                        b && R(b, {left:c.translateX + a.legendItemWidth + b.x - 40 + Fa, top:c.translateY + b.y - 11 + Fa})
                    })
                }

                function d(c) {
                    var e, j, k, o, q = c.legendItem;
                    o = c.series || c;
                    var n = o.options, w = n && n.borderWidth || 0;
                    if (!q) {
                        o = /^(bar|pie|area|column)$/.test(o.type);
                        c.legendItem = q = X.text(f.labelFormatter.call(c), 0, 0).css(c.visible ? l : p).on("mouseover",
                            function () {
                                c.setState(ab);
                                q.css(m)
                            }).on("mouseout",
                            function () {
                                q.css(c.visible ? l : p);
                                c.setState()
                            }).on("click",
                            function () {
                                var a = function () {
                                    c.setVisible()
                                };
                                c.firePointEvent ? c.firePointEvent("legendItemClick", null, a) : S(c, "legendItemClick", null, a)
                            }).attr({zIndex:2}).add(sa);
                        if (!o && n && n.lineWidth) {
                            var Ia = {"stroke-width":n.lineWidth, zIndex:2};
                            if (n.dashStyle)Ia.dashstyle = n.dashStyle;
                            c.legendLine = X.path([ua, -h - i, 0, ja, -i, 0]).attr(Ia).add(sa)
                        }
                        if (o)k = X.rect(e = -h - i, j = -11, h, 12, 2).attr({zIndex:3}).add(sa); else if (n && n.marker && n.marker.enabled)k = n.marker.radius, k = X.symbol(c.symbol, e = -h / 2 - i - k, j = -4 - k, 2 * k, 2 * k).attr(c.pointAttr[ma]).attr({zIndex:3}).add(sa);
                        if (k)k.xOff = e + w % 2 / 2, k.yOff = j + w % 2 / 2;
                        c.legendSymbol = k;
                        a(c, c.visible);
                        if (n && n.showCheckbox)c.checkbox = fa("input", {type:"checkbox", checked:c.selected, defaultChecked:c.selected}, f.itemCheckboxStyle, F), U(c.checkbox, "click", function (a) {
                            S(c, "checkboxClick", {checked:a.target.checked}, function () {
                                c.select()
                            })
                        })
                    }
                    e = q.getBBox();
                    j = c.legendItemWidth = f.itemWidth || h + i + e.width + s;
                    za = e.height;
                    if (g && u - t + j > (B || ka - 2 * s - t))u = t, x += aa + za + r;
                    v = x + r;
                    b(c, u, x);
                    g ? u += j : x += aa + za + r;
                    ea = B || P(g ? u - t : j, ea)
                }

                function e() {
                    u = t;
                    x = s + aa + q - 5;
                    v = ea =
                        0;
                    sa || (sa = X.g("legend").attr({zIndex:10}).add());
                    j = [];
                    n(z, function (a) {
                        var b = a.options;
                        b.showInLegend && (j = j.concat(a.legendItems || (b.legendType === "point" ? a.data : a)))
                    });
                    Nc(j, function (a, b) {
                        return(a.options.legendIndex || 0) - (b.options.legendIndex || 0)
                    });
                    Pa && j.reverse();
                    n(j, d);
                    zb = B || ea;
                    Ab = v - q + za;
                    if (Ia || H) {
                        zb += 2 * s;
                        Ab += 2 * s;
                        if (w) {
                            if (zb > 0 && Ab > 0)w[w.isNew ? "attr" : "animate"](w.crisp(null, null, null, zb, Ab)), w.isNew = !1
                        } else w = X.rect(0, 0, zb, Ab, f.borderRadius, Ia || 0).attr({stroke:f.borderColor, "stroke-width":Ia || 0, fill:H ||
                            na}).add(sa).shadow(f.shadow), w.isNew = !0;
                        w[j.length ? "show" : "hide"]()
                    }
                    for (var a = ["left", "right", "top", "bottom"], b, g = 4; g--;)b = a[g], k[b] && k[b] !== "auto" && (f[g < 2 ? "align" : "verticalAlign"] = b, f[g < 2 ? "x" : "y"] = M(k[b]) * (g % 2 ? -1 : 1));
                    j.length && sa.align(I(f, {width:zb, height:Ab}), !0, y);
                    Aa || c()
                }

                var f = o.options.legend;
                if (f.enabled) {
                    var g = f.layout === "horizontal", h = f.symbolWidth, i = f.symbolPadding, j, k = f.style, l = f.itemStyle, m = f.itemHoverStyle, p = G(l, f.itemHiddenStyle), s = f.padding || M(k.padding), q = 18, t = 4 + s + h + i, u, x, v, za = 0,
                        aa = f.itemMarginTop || 0, r = f.itemMarginBottom || 0, w, Ia = f.borderWidth, H = f.backgroundColor, sa, ea, B = f.width, z = o.series, Pa = f.reversed;
                    e();
                    U(o, "endResize", c);
                    return{colorizeItem:a, destroyItem:function (a) {
                        var b = a.checkbox;
                        n(["legendItem", "legendLine", "legendSymbol"], function (b) {
                            a[b] && a[b].destroy()
                        });
                        b && Ib(a.checkbox)
                    }, renderLegend:e, destroy:function () {
                        w && (w = w.destroy());
                        sa && (sa = sa.destroy())
                    }}
                }
            };
        bb = function (a, b) {
            return a >= 0 && a <= wa && b >= 0 && b <= xa
        };
        rb = function () {
            var a = o.resetZoomButton;
            S(o, "selection", {resetSelection:!0},
                lb);
            if (a)o.resetZoomButton = a.destroy()
        };
        lb = function (a) {
            var b = o.pointCount < 100, c;
            o.resetZoomEnabled !== !1 && !o.resetZoomButton && k();
            !a || a.resetSelection ? n(Ga, function (a) {
                a.options.zoomEnabled !== !1 && (a.setExtremes(null, null, !1), c = !0)
            }) : n(a.xAxis.concat(a.yAxis), function (a) {
                var b = a.axis;
                if (o.tracker[b.isXAxis ? "zoomX" : "zoomY"])b.setExtremes(a.min, a.max, !1), c = !0
            });
            c && h(!0, b)
        };
        o.pan = function (a) {
            var b = o.xAxis[0], c = o.mouseDownX, d = b.pointRange / 2, e = b.getExtremes(), f = b.translate(c - a, !0) + d, c = b.translate(c + wa - a,
                !0) - d;
            (d = o.hoverPoints) && n(d, function (a) {
                a.setState()
            });
            f > va(e.dataMin, e.min) && c < P(e.dataMax, e.max) && b.setExtremes(f, c, !0, !1);
            o.mouseDownX = a;
            R(F, {cursor:"move"})
        };
        Na = function () {
            var b = a.legend, c = r(b.margin, 10), d = b.x, e = b.y, f = b.align, g = b.verticalAlign, h;
            fb();
            if ((o.title || o.subtitle) && !z(q))(h = P(o.title && !Xa.floating && !Xa.verticalAlign && Xa.y || 0, o.subtitle && !E.floating && !E.verticalAlign && E.y || 0)) && (T = P(T, h + r(Xa.margin, 15) + yb));
            b.enabled && !b.floating && (f === "right" ? z(aa) || (V = P(V, zb - d + c + s)) : f === "left" ? z(H) ||
                (Y = P(Y, zb + d + c + ea)) : g === "top" ? z(q) || (T = P(T, Ab + e + c + yb)) : g === "bottom" && (z(za) || (ba = P(ba, Ab - e + c + Ia))));
            o.extraBottomMargin && (ba += o.extraBottomMargin);
            o.extraTopMargin && (T += o.extraTopMargin);
            Ka && n(Ga, function (a) {
                a.getOffset()
            });
            z(H) || (Y += J[3]);
            z(q) || (T += J[0]);
            z(za) || (ba += J[2]);
            z(aa) || (V += J[1]);
            jb()
        };
        kb = function (a, b, c) {
            var d = o.title, e = o.subtitle;
            Aa += 1;
            Jb(c, o);
            Ma = La;
            Oa = ka;
            if (z(a))o.chartWidth = ka = B(a);
            if (z(b))o.chartHeight = La = B(b);
            R(F, {width:ka + Fa, height:La + Fa});
            X.setSize(ka, La, c);
            wa = ka - Y - V;
            xa = La - T - ba;
            gb =
                null;
            n(Ga, function (a) {
                a.isDirty = !0;
                a.setScale()
            });
            n(O, function (a) {
                a.isDirty = !0
            });
            o.isDirtyLegend = !0;
            o.isDirtyBox = !0;
            Na();
            d && d.align(null, null, y);
            e && e.align(null, null, y);
            h(c);
            Ma = null;
            S(o, "resize");
            Mb === !1 ? p() : setTimeout(p, Mb && Mb.duration || 500)
        };
        jb = function () {
            o.plotLeft = Y = B(Y);
            o.plotTop = T = B(T);
            o.plotWidth = wa = B(ka - Y - V);
            o.plotHeight = xa = B(La - T - ba);
            o.plotSizeX = da ? xa : wa;
            o.plotSizeY = da ? wa : xa;
            y = {x:ea, y:yb, width:ka - ea - s, height:La - yb - Ia};
            n(Ga, function (a) {
                a.setAxisSize();
                a.setAxisTranslation()
            })
        };
        fb = function () {
            T =
                r(q, yb);
            V = r(aa, s);
            ba = r(za, Ia);
            Y = r(H, ea);
            J = [0, 0, 0, 0]
        };
        $a = function () {
            var a = v.borderWidth || 0, b = v.backgroundColor, c = v.plotBackgroundColor, d = v.plotBackgroundImage, e, f = {x:Y, y:T, width:wa, height:xa};
            e = a + (v.shadow ? 8 : 0);
            if (a || b)ha ? ha.animate(ha.crisp(null, null, null, ka - e, La - e)) : ha = X.rect(e / 2, e / 2, ka - e, La - e, v.borderRadius, a).attr({stroke:v.borderColor, "stroke-width":a, fill:b || na}).add().shadow(v.shadow);
            c && (Ca ? Ca.animate(f) : Ca = X.rect(Y, T, wa, xa, 0).attr({fill:c}).add().shadow(v.plotShadow));
            d && ($ ? $.animate(f) : $ =
                X.image(d, Y, T, wa, xa).add());
            v.plotBorderWidth && (ib ? ib.animate(ib.crisp(null, Y, T, wa, xa)) : ib = X.rect(Y, T, wa, xa, 0, v.plotBorderWidth).attr({stroke:v.plotBorderColor, "stroke-width":v.plotBorderWidth, zIndex:4}).add());
            o.isDirtyBox = !1
        };
        v.reflow !== !1 && U(o, "load", m);
        if (w)for (pa in w)U(o, pa, w[pa]);
        o.options = a;
        o.series = O;
        o.xAxis = [];
        o.yAxis = [];
        o.addSeries = function (a, b, c) {
            var d;
            a && (Jb(c, o), b = r(b, !0), S(o, "addSeries", {options:a}, function () {
                d = f(a);
                d.isDirty = !0;
                o.isDirtyLegend = !0;
                b && o.redraw()
            }));
            return d
        };
        o.animation =
            r(v.animation, !0);
        o.Axis = c;
        o.destroy = function () {
            var b, c = F && F.parentNode;
            if (o !== null) {
                S(o, "destroy");
                ra(o);
                for (b = Ga.length; b--;)Ga[b] = Ga[b].destroy();
                for (b = O.length; b--;)O[b] = O[b].destroy();
                n("title,subtitle,seriesGroup,clipRect,credits,tracker,scroller,rangeSelector".split(","), function (a) {
                    var b = o[a];
                    b && (o[a] = b.destroy())
                });
                n([ha, ib, Ca, wb, ya, X, vb], function (a) {
                    a && a.destroy && a.destroy()
                });
                ha = ib = Ca = wb = ya = X = vb = null;
                if (F)F.innerHTML = "", ra(F), c && Ib(F), F = null;
                clearInterval(eb);
                for (b in o)delete o[b];
                a = o =
                    null
            }
        };
        o.get = function (a) {
            var b, c, d;
            for (b = 0; b < Ga.length; b++)if (Ga[b].options.id === a)return Ga[b];
            for (b = 0; b < O.length; b++)if (O[b].options.id === a)return O[b];
            for (b = 0; b < O.length; b++) {
                d = O[b].points || [];
                for (c = 0; c < d.length; c++)if (d[c].id === a)return d[c]
            }
            return null
        };
        o.getSelectedPoints = function () {
            var a = [];
            n(O, function (b) {
                a = a.concat(pc(b.points, function (a) {
                    return a.selected
                }))
            });
            return a
        };
        o.getSelectedSeries = function () {
            return pc(O, function (a) {
                return a.selected
            })
        };
        o.hideLoading = function () {
            Pa && ec(Pa, {opacity:0},
                {duration:a.loading.hideDuration || 100, complete:function () {
                    R(Pa, {display:na})
                }});
            db = !1
        };
        o.initSeries = f;
        o.isInsidePlot = bb;
        o.redraw = h;
        o.setSize = kb;
        o.setTitle = i;
        o.showLoading = function (b) {
            var c = a.loading;
            Pa || (Pa = fa(tb, {className:cb + "loading"}, I(c.style, {left:Y + Fa, top:T + Fa, width:wa + Fa, height:xa + Fa, zIndex:10, display:na}), F), Va = fa("span", null, c.labelStyle, Pa));
            Va.innerHTML = b || a.lang.loading;
            db || (R(Pa, {opacity:0, display:""}), ec(Pa, {opacity:c.style.opacity}, {duration:c.showDuration || 0}), db = !0)
        };
        o.pointCount =
            0;
        o.counters = new yc;
        u()
    }

    var C, N = document, Ha = window, ta = Math, B = ta.round, Qa = ta.floor, cc = ta.ceil, P = ta.max, va = ta.min, Ja = ta.abs, Ma = ta.cos, Ca = ta.sin, Na = ta.PI, Ec = Na * 2 / 360, jb = navigator.userAgent, Ub = /msie/i.test(jb) && !Ha.opera, Qb = N.documentMode === 8, Sc = /AppleWebKit/.test(jb), Dc = /Firefox/.test(jb), Pb = !!N.createElementNS && !!N.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect, Tc = Dc && parseInt(jb.split("Firefox/")[1], 10) < 4, Ob, qa = N.documentElement.ontouchstart !== C, Fc = {}, oc = 0, $b, ca, ub, Mb, Rb, E, tb = "div",
        Eb = "absolute", Cc = "relative", Ua = "hidden", cb = "highcharts-", Ya = "visible", Fa = "px", na = "none", ua = "M", ja = "L", Gc = "rgba(192,192,192," + (Pb ? 1.0E-6 : 0.0020) + ")", ma = "", ab = "hover", rb = "millisecond", fb = "second", Za = "minute", pa = "hour", ia = "day", Ka = "week", Aa = "month", Ba = "year", Zb, jc, kc, mc, $a, Xb, Yb, uc, vc, lc, wc, xc, y = Ha.HighchartsAdapter, Oa = y || {}, n = Oa.each, pc = Oa.grep, Bc = Oa.offset, kb = Oa.map, G = Oa.merge, U = Oa.addEvent, ra = Oa.removeEvent, S = Oa.fireEvent, ec = Oa.animate, Kb = Oa.stop, la = {};
    Ha.Highcharts = {};
    ub = function (a, b, c) {
        function d(a, b) {
            a = a.toString().replace(/^([0-9])$/, "0$1");
            b === 3 && (a = a.toString().replace(/^([0-9]{2})$/, "0$1"));
            return a
        }

        if (!z(b) || isNaN(b))return"Invalid date";
        var a = r(a, "%Y-%m-%d %H:%M:%S"), e = new Date(b), f, g = e[kc](), h = e[mc](), j = e[$a](), k = e[Xb](), i = e[Yb](), l = ca.lang, m = l.weekdays, b = {a:m[h].substr(0, 3), A:m[h], d:d(j), e:j, b:l.shortMonths[k], B:l.months[k], m:d(k + 1), y:i.toString().substr(2, 2), Y:i, H:d(g), I:d(g % 12 || 12), l:g % 12 || 12, M:d(e[jc]()), p:g < 12 ? "AM" : "PM", P:g < 12 ? "am" : "pm", S:d(e.getSeconds()), L:d(b % 1E3, 3)};
        for (f in b)a =
            a.replace("%" + f, b[f]);
        return c ? a.substr(0, 1).toUpperCase() + a.substr(1) : a
    };
    yc.prototype = {wrapColor:function (a) {
        if (this.color >= a)this.color = 0
    }, wrapSymbol:function (a) {
        if (this.symbol >= a)this.symbol = 0
    }};
    E = ha(rb, 1, fb, 1E3, Za, 6E4, pa, 36E5, ia, 864E5, Ka, 6048E5, Aa, 2592E6, Ba, 31556952E3);
    Rb = {init:function (a, b, c) {
        var b = b || "", d = a.shift, e = b.indexOf("C") > -1, f = e ? 7 : 3, g, b = b.split(" "), c = [].concat(c), h, j, k = function (a) {
            for (g = a.length; g--;)a[g] === ua && a.splice(g + 1, 0, a[g + 1], a[g + 2], a[g + 1], a[g + 2])
        };
        e && (k(b), k(c));
        a.isArea && (h =
            b.splice(b.length - 6, 6), j = c.splice(c.length - 6, 6));
        d === 1 && (c = [].concat(c).splice(0, f).concat(c));
        a.shift = 0;
        if (b.length)for (a = c.length; b.length < a;)d = [].concat(b).splice(b.length - f, f), e && (d[f - 6] = d[f - 2], d[f - 5] = d[f - 1]), b = b.concat(d);
        h && (b = b.concat(h), c = c.concat(j));
        return[b, c]
    }, step:function (a, b, c, d) {
        var e = [], f = a.length;
        if (c === 1)e = d; else if (f === b.length && c < 1)for (; f--;)d = parseFloat(a[f]), e[f] = isNaN(d) ? a[f] : c * parseFloat(b[f] - d) + d; else e = b;
        return e
    }};
    y && y.init && y.init(Rb);
    if (!y && Ha.jQuery) {
        var $ = jQuery, n =
            function (a, b) {
                for (var c = 0, d = a.length; c < d; c++)if (b.call(a[c], a[c], c, a) === !1)return c
            }, pc = $.grep, kb = function (a, b) {
            for (var c = [], d = 0, e = a.length; d < e; d++)c[d] = b.call(a[d], a[d], d, a);
            return c
        }, G = function () {
            var a = arguments;
            return $.extend(!0, null, a[0], a[1], a[2], a[3])
        }, Bc = function (a) {
            return $(a).offset()
        }, U = function (a, b, c) {
            $(a).bind(b, c)
        }, ra = function (a, b, c) {
            var d = N.removeEventListener ? "removeEventListener" : "detachEvent";
            N[d] && !a[d] && (a[d] = function () {
            });
            $(a).unbind(b, c)
        }, S = function (a, b, c, d) {
            var e = $.Event(b),
                f = "detached" + b, g;
            I(e, c);
            a[b] && (a[f] = a[b], a[b] = null);
            n(["preventDefault", "stopPropagation"], function (a) {
                var b = e[a];
                e[a] = function () {
                    try {
                        b.call(e)
                    } catch (c) {
                        a === "preventDefault" && (g = !0)
                    }
                }
            });
            $(a).trigger(e);
            a[f] && (a[b] = a[f], a[f] = null);
            d && !e.isDefaultPrevented() && !g && d(e)
        }, ec = function (a, b, c) {
            var d = $(a);
            if (b.d)a.toD = b.d, b.d = 1;
            d.stop();
            d.animate(b, c)
        }, Kb = function (a) {
            $(a).stop()
        };
        $.extend($.easing, {easeOutQuad:function (a, b, c, d, e) {
            return-d * (b /= e) * (b - 2) + c
        }});
        var Hc = jQuery.fx, Ic = Hc.step;
        n(["cur", "_default", "width",
            "height"], function (a, b) {
            var c = b ? Ic : Hc.prototype, d = c[a], e;
            d && (c[a] = function (a) {
                a = b ? a : this;
                e = a.elem;
                return e.attr ? e.attr(a.prop, a.now) : d.apply(this, arguments)
            })
        });
        Ic.d = function (a) {
            var b = a.elem;
            if (!a.started) {
                var c = Rb.init(b, b.d, b.toD);
                a.start = c[0];
                a.end = c[1];
                a.started = !0
            }
            b.attr("d", Rb.step(a.start, a.end, a.pos, b.toD))
        }
    }
    y = {enabled:!0, align:"center", x:0, y:15, style:{color:"#666", fontSize:"11px", lineHeight:"14px"}};
    ca = {colors:"#4572A7,#AA4643,#89A54E,#80699B,#3D96AE,#DB843D,#92A8CD,#A47D7C,#B5CA92".split(","),
        symbols:["circle", "diamond", "square", "triangle", "triangle-down"], lang:{loading:"Loading...", months:"January,February,March,April,May,June,July,August,September,October,November,December".split(","), shortMonths:"Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(","), weekdays:"Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(","), decimalPoint:".", resetZoom:"Reset zoom", resetZoomTitle:"Reset zoom level 1:1", thousandsSep:","}, global:{useUTC:!0}, chart:{borderColor:"#4572A7", borderRadius:5,
            defaultSeriesType:"line", ignoreHiddenSeries:!0, spacingTop:10, spacingRight:10, spacingBottom:15, spacingLeft:10, style:{fontFamily:'"Lucida Grande", "Lucida Sans Unicode", Verdana, Arial, Helvetica, sans-serif', fontSize:"12px"}, backgroundColor:"#FFFFFF", plotBorderColor:"#C0C0C0", resetZoomButton:{theme:{zIndex:20}, position:{align:"right", x:-10, y:10}, relativeTo:"plot"}}, title:{text:"Chart title", align:"center", y:15, style:{color:"#3E576F", fontSize:"16px"}}, subtitle:{text:"", align:"center", y:30, style:{color:"#6D869F"}},
        plotOptions:{line:{allowPointSelect:!1, showCheckbox:!1, animation:{duration:1E3}, events:{}, lineWidth:2, shadow:!0, marker:{enabled:!0, lineWidth:0, radius:4, lineColor:"#FFFFFF", states:{hover:{}, select:{fillColor:"#FFFFFF", lineColor:"#000000", lineWidth:2}}}, point:{events:{}}, dataLabels:G(y, {enabled:!1, y:-6, formatter:function () {
            return this.y
        }}), cropThreshold:300, pointRange:0, showInLegend:!0, states:{hover:{marker:{}}, select:{marker:{}}}, stickyTracking:!0}}, labels:{style:{position:Eb, color:"#3E576F"}}, legend:{enabled:!0,
            align:"center", layout:"horizontal", labelFormatter:function () {
                return this.name
            }, borderWidth:1, borderColor:"#909090", borderRadius:5, shadow:!1, style:{padding:"5px"}, itemStyle:{cursor:"pointer", color:"#3E576F"}, itemHoverStyle:{color:"#000000"}, itemHiddenStyle:{color:"#C0C0C0"}, itemCheckboxStyle:{position:Eb, width:"13px", height:"13px"}, symbolWidth:16, symbolPadding:5, verticalAlign:"bottom", x:0, y:0}, loading:{labelStyle:{fontWeight:"bold", position:Cc, top:"1em"}, style:{position:Eb, backgroundColor:"white",
            opacity:0.5, textAlign:"center"}}, tooltip:{enabled:!0, backgroundColor:"rgba(255, 255, 255, .85)", borderWidth:2, borderRadius:5, headerFormat:'<span style="font-size: 10px">{point.key}</span><br/>', pointFormat:'<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b><br/>', shadow:!0, snap:qa ? 25 : 10, style:{color:"#333333", fontSize:"12px", padding:"5px", whiteSpace:"nowrap"}}, credits:{enabled:!0, text:"Highcharts.com", href:"http://www.highcharts.com", position:{align:"right", x:-10, verticalAlign:"bottom",
            y:-5}, style:{cursor:"pointer", color:"#909090", fontSize:"10px"}}};
    var dc = {dateTimeLabelFormats:ha(rb, "%H:%M:%S.%L", fb, "%H:%M:%S", Za, "%H:%M", pa, "%H:%M", ia, "%e. %b", Ka, "%e. %b", Aa, "%b '%y", Ba, "%Y"), endOnTick:!1, gridLineColor:"#C0C0C0", labels:y, lineColor:"#C0D0E0", lineWidth:1, max:null, min:null, minPadding:0.01, maxPadding:0.01, minorGridLineColor:"#E0E0E0", minorGridLineWidth:1, minorTickColor:"#A0A0A0", minorTickLength:2, minorTickPosition:"outside", startOfWeek:1, startOnTick:!1, tickColor:"#C0D0E0", tickLength:5,
        tickmarkPlacement:"between", tickPixelInterval:100, tickPosition:"outside", tickWidth:1, title:{align:"middle", style:{color:"#6D869F", fontWeight:"bold"}}, type:"linear"}, nc = G(dc, {endOnTick:!0, gridLineWidth:1, tickPixelInterval:72, showLastLabel:!0, labels:{align:"right", x:-8, y:3}, lineWidth:0, maxPadding:0.05, minPadding:0.05, startOnTick:!0, tickWidth:0, title:{rotation:270, text:"Y-values"}, stackLabels:{enabled:!1, formatter:function () {
        return this.total
    }, style:y.style}}), Qc = {labels:{align:"right", x:-8, y:null},
        title:{rotation:270}}, Pc = {labels:{align:"left", x:8, y:null}, title:{rotation:90}}, Ac = {labels:{align:"center", x:0, y:14}, title:{rotation:0}}, Oc = G(Ac, {labels:{y:-5}}), V = ca.plotOptions, y = V.line;
    V.spline = G(y);
    V.scatter = G(y, {lineWidth:0, states:{hover:{lineWidth:0}}, tooltip:{headerFormat:'<span style="font-size: 10px; color:{series.color}">{series.name}</span><br/>', pointFormat:"x: <b>{point.x}</b><br/>y: <b>{point.y}</b><br/>"}});
    V.area = G(y, {threshold:0});
    V.areaspline = G(V.area);
    V.column = G(y, {borderColor:"#FFFFFF",
        borderWidth:1, borderRadius:0, groupPadding:0.2, marker:null, pointPadding:0.1, minPointLength:0, cropThreshold:50, pointRange:null, states:{hover:{brightness:0.1, shadow:!1}, select:{color:"#C0C0C0", borderColor:"#000000", shadow:!1}}, dataLabels:{y:null, verticalAlign:null}, threshold:0});
    V.bar = G(V.column, {dataLabels:{align:"left", x:5, y:0}});
    V.pie = G(y, {borderColor:"#FFFFFF", borderWidth:1, center:["50%", "50%"], colorByPoint:!0, dataLabels:{distance:30, enabled:!0, formatter:function () {
        return this.point.name
    }, y:5}, legendType:"point",
        marker:null, size:"75%", showInLegend:!1, slicedOffset:10, states:{hover:{brightness:0.1, shadow:!1}}});
    zc();
    var Da = function (a) {
        var b = [], c;
        (function (a) {
            (c = /rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]?(?:\.[0-9]+)?)\s*\)/.exec(a)) ? b = [M(c[1]), M(c[2]), M(c[3]), parseFloat(c[4], 10)] : (c = /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(a)) && (b = [M(c[1], 16), M(c[2], 16), M(c[3], 16), 1])
        })(a);
        return{get:function (c) {
            return b && !isNaN(b[0]) ? c === "rgb" ? "rgb(" + b[0] + "," + b[1] + "," + b[2] + ")" :
                c === "a" ? b[3] : "rgba(" + b.join(",") + ")" : a
        }, brighten:function (a) {
            if (Tb(a) && a !== 0) {
                var c;
                for (c = 0; c < 3; c++)b[c] += M(a * 255), b[c] < 0 && (b[c] = 0), b[c] > 255 && (b[c] = 255)
            }
            return this
        }, setOpacity:function (a) {
            b[3] = a;
            return this
        }}
    };
    Db.prototype = {init:function (a, b) {
        this.element = N.createElementNS("http://www.w3.org/2000/svg", b);
        this.renderer = a;
        this.attrSetters = {}
    }, animate:function (a, b, c) {
        b = r(b, Mb, !0);
        Kb(this);
        if (b) {
            b = G(b);
            if (c)b.complete = c;
            ec(this, a, b)
        } else this.attr(a), c && c()
    }, attr:function (a, b) {
        var c, d, e, f, g = this.element,
            h = g.nodeName, j = this.renderer, k, i = this.attrSetters, l = this.shadows, m = this.htmlNode, p, n = this;
        Bb(a) && z(b) && (c = a, a = {}, a[c] = b);
        if (Bb(a))c = a, h === "circle" ? c = {x:"cx", y:"cy"}[c] || c : c === "strokeWidth" && (c = "stroke-width"), n = Z(g, c) || this[c] || 0, c !== "d" && c !== "visibility" && (n = parseFloat(n)); else for (c in a) {
            k = !1;
            d = a[c];
            e = i[c] && i[c](d, c);
            if (e !== !1) {
                e !== C && (d = e);
                if (c === "d")d && d.join && (d = d.join(" ")), /(NaN| {2}|^$)/.test(d) && (d = "M 0 0"), this.d = d; else if (c === "x" && h === "text") {
                    for (e = 0; e < g.childNodes.length; e++)f = g.childNodes[e],
                        Z(f, "x") === Z(g, "x") && Z(f, "x", d);
                    this.rotation && Z(g, "transform", "rotate(" + this.rotation + " " + d + " " + M(a.y || Z(g, "y")) + ")")
                } else if (c === "fill")d = j.color(d, g, c); else if (h === "circle" && (c === "x" || c === "y"))c = {x:"cx", y:"cy"}[c] || c; else if (h === "rect" && c === "r")Z(g, {rx:d, ry:d}), k = !0; else if (c === "translateX" || c === "translateY" || c === "rotation" || c === "verticalAlign")this[c] = d, this.updateTransform(), k = !0; else if (c === "stroke")d = j.color(d, g, c); else if (c === "dashstyle")if (c = "stroke-dasharray", d = d && d.toLowerCase(), d === "solid")d =
                    na; else {
                    if (d) {
                        d = d.replace("shortdashdotdot", "3,1,1,1,1,1,").replace("shortdashdot", "3,1,1,1").replace("shortdot", "1,1,").replace("shortdash", "3,1,").replace("longdash", "8,3,").replace(/dot/g, "1,3,").replace("dash", "4,3,").replace(/,$/, "").split(",");
                        for (e = d.length; e--;)d[e] = M(d[e]) * a["stroke-width"];
                        d = d.join(",")
                    }
                } else c === "isTracker" ? this[c] = d : c === "width" ? d = M(d) : c === "align" ? (c = "text-anchor", d = {left:"start", center:"middle", right:"end"}[d]) : c === "title" && (e = N.createElementNS("http://www.w3.org/2000/svg",
                    "title"), e.appendChild(N.createTextNode(d)), g.appendChild(e));
                c === "strokeWidth" && (c = "stroke-width");
                Sc && c === "stroke-width" && d === 0 && (d = 1.0E-6);
                this.symbolName && /^(x|y|r|start|end|innerR|anchorX|anchorY)/.test(c) && (p || (this.symbolAttr(a), p = !0), k = !0);
                if (l && /^(width|height|visibility|x|y|d|transform)$/.test(c))for (e = l.length; e--;)Z(l[e], c, d);
                if ((c === "width" || c === "height") && h === "rect" && d < 0)d = 0;
                c === "text" ? (this.textStr = d, this.added && j.buildText(this)) : k || Z(g, c, d)
            }
            if (m && (c === "x" || c === "y" || c === "translateX" ||
                c === "translateY" || c === "visibility")) {
                e = m.length ? m : [this];
                f = e.length;
                var x;
                for (x = 0; x < f; x++)m = e[x], k = m.getBBox(), m = m.htmlNode, R(m, I(this.styles, {left:k.x + (this.translateX || 0) + Fa, top:k.y + (this.translateY || 0) + Fa})), c === "visibility" && R(m, {visibility:d})
            }
        }
        return n
    }, symbolAttr:function (a) {
        var b = this;
        n("x,y,r,start,end,width,height,innerR,anchorX,anchorY".split(","), function (c) {
            b[c] = r(a[c], b[c])
        });
        b.attr({d:b.renderer.symbols[b.symbolName](b.x, b.y, b.width, b.height, b)})
    }, clip:function (a) {
        return this.attr("clip-path",
            "url(" + this.renderer.url + "#" + a.id + ")")
    }, crisp:function (a, b, c, d, e) {
        var f, g = {}, h = {}, j, a = a || this.strokeWidth || this.attr && this.attr("stroke-width") || 0;
        j = B(a) % 2 / 2;
        h.x = Qa(b || this.x || 0) + j;
        h.y = Qa(c || this.y || 0) + j;
        h.width = Qa((d || this.width || 0) - 2 * j);
        h.height = Qa((e || this.height || 0) - 2 * j);
        h.strokeWidth = a;
        for (f in h)this[f] !== h[f] && (this[f] = g[f] = h[f]);
        return g
    }, css:function (a) {
        var b = this.element, b = a && a.width && b.nodeName === "text", c, d = "", e = function (a, b) {
            return"-" + b.toLowerCase()
        };
        if (a && a.color)a.fill = a.color;
        this.styles =
            a = I(this.styles, a);
        if (Ub && !Pb)b && delete a.width, R(this.element, a); else {
            for (c in a)d += c.replace(/([A-Z])/g, e) + ":" + a[c] + ";";
            this.attr({style:d})
        }
        b && this.added && this.renderer.buildText(this);
        return this
    }, on:function (a, b) {
        var c = b;
        qa && a === "click" && (a = "touchstart", c = function (a) {
            a.preventDefault();
            b()
        });
        this.element["on" + a] = c;
        return this
    }, translate:function (a, b) {
        return this.attr({translateX:a, translateY:b})
    }, invert:function () {
        this.inverted = !0;
        this.updateTransform();
        return this
    }, updateTransform:function () {
        var a =
            this.translateX || 0, b = this.translateY || 0, c = this.inverted, d = this.rotation, e = [];
        c && (a += this.attr("width"), b += this.attr("height"));
        (a || b) && e.push("translate(" + a + "," + b + ")");
        c ? e.push("rotate(90) scale(-1,1)") : d && e.push("rotate(" + d + " " + this.x + " " + this.y + ")");
        e.length && Z(this.element, "transform", e.join(" "))
    }, toFront:function () {
        var a = this.element;
        a.parentNode.appendChild(a);
        return this
    }, align:function (a, b, c) {
        a ? (this.alignOptions = a, this.alignByTranslate = b, c || this.renderer.alignedObjects.push(this)) : (a = this.alignOptions,
            b = this.alignByTranslate);
        var c = r(c, this.renderer), d = a.align, e = a.verticalAlign, f = (c.x || 0) + (a.x || 0), g = (c.y || 0) + (a.y || 0), h = {};
        /^(right|center)$/.test(d) && (f += (c.width - (a.width || 0)) / {right:1, center:2}[d]);
        h[b ? "translateX" : "x"] = B(f);
        /^(bottom|middle)$/.test(e) && (g += (c.height - (a.height || 0)) / ({bottom:1, middle:2}[e] || 1));
        h[b ? "translateY" : "y"] = B(g);
        this[this.placed ? "animate" : "attr"](h);
        this.placed = !0;
        this.alignAttr = h;
        return this
    }, getBBox:function () {
        var a, b, c, d = this.rotation, e = d * Ec;
        try {
            a = I({}, this.element.getBBox())
        } catch (f) {
            a =
            {width:0, height:0}
        }
        b = a.width;
        c = a.height;
        if (d)a.width = Ja(c * Ca(e)) + Ja(b * Ma(e)), a.height = Ja(c * Ma(e)) + Ja(b * Ca(e));
        return a
    }, show:function () {
        return this.attr({visibility:Ya})
    }, hide:function () {
        return this.attr({visibility:Ua})
    }, add:function (a) {
        var b = this.renderer, c = a || b, d = c.element || b.box, e = d.childNodes, f = this.element, g = Z(f, "zIndex"), h;
        this.parentInverted = a && a.inverted;
        this.textStr !== void 0 && b.buildText(this);
        if (a && this.htmlNode) {
            if (!a.htmlNode)a.htmlNode = [];
            a.htmlNode.push(this)
        }
        if (g)c.handleZ = !0, g = M(g);
        if (c.handleZ)for (c = 0; c < e.length; c++)if (a = e[c], b = Z(a, "zIndex"), a !== f && (M(b) > g || !z(g) && z(b))) {
            d.insertBefore(f, a);
            h = !0;
            break
        }
        h || d.appendChild(f);
        this.added = !0;
        S(this, "add");
        return this
    }, safeRemoveChild:function (a) {
        var b = a.parentNode;
        b && b.removeChild(a)
    }, destroy:function () {
        var a = this, b = a.element || {}, c = a.shadows, d = a.box, e, f;
        b.onclick = b.onmouseout = b.onmouseover = b.onmousemove = null;
        Kb(a);
        if (a.clipPath)a.clipPath = a.clipPath.destroy();
        if (a.stops) {
            for (f = 0; f < a.stops.length; f++)a.stops[f] = a.stops[f].destroy();
            a.stops = null
        }
        a.safeRemoveChild(b);
        c && n(c, function (b) {
            a.safeRemoveChild(b)
        });
        d && d.destroy();
        Gb(a.renderer.alignedObjects, a);
        for (e in a)delete a[e];
        return null
    }, empty:function () {
        for (var a = this.element, b = a.childNodes, c = b.length; c--;)a.removeChild(b[c])
    }, shadow:function (a, b) {
        var c = [], d, e, f = this.element, g = this.parentInverted ? "(-1,-1)" : "(1,1)";
        if (a) {
            for (d = 1; d <= 3; d++)e = f.cloneNode(0), Z(e, {isShadow:"true", stroke:"rgb(0, 0, 0)", "stroke-opacity":0.05 * d, "stroke-width":7 - 2 * d, transform:"translate" + g, fill:na}),
                b ? b.element.appendChild(e) : f.parentNode.insertBefore(e, f), c.push(e);
            this.shadows = c
        }
        return this
    }};
    var Nb = function () {
        this.init.apply(this, arguments)
    };
    Nb.prototype = {Element:Db, init:function (a, b, c, d) {
        var e = location, f;
        f = this.createElement("svg").attr({xmlns:"http://www.w3.org/2000/svg", version:"1.1"});
        a.appendChild(f.element);
        this.box = f.element;
        this.boxWrapper = f;
        this.alignedObjects = [];
        this.url = Ub ? "" : e.href.replace(/#.*?$/, "").replace(/\(/g, "\\(").replace(/\)/g, "\\)");
        this.defs = this.createElement("defs").add();
        this.forExport = d;
        this.gradients = {};
        this.setSize(b, c, !1)
    }, destroy:function () {
        var a = this.defs;
        this.box = null;
        this.boxWrapper = this.boxWrapper.destroy();
        sb(this.gradients || {});
        this.gradients = null;
        if (a)this.defs = a.destroy();
        return this.alignedObjects = null
    }, createElement:function (a) {
        var b = new this.Element;
        b.init(this, a);
        return b
    }, buildText:function (a) {
        for (var b = a.element, c = r(a.textStr, "").toString().replace(/<(b|strong)>/g, '<span style="font-weight:bold">').replace(/<(i|em)>/g, '<span style="font-style:italic">').replace(/<a/g,
            "<span").replace(/<\/(b|strong|i|em|a)>/g, "</span>").split(/<br.*?>/g), d = b.childNodes, e = /style="([^"]+)"/, f = /href="([^"]+)"/, g = Z(b, "x"), h = a.styles, j = h && a.useHTML && !this.forExport, k = a.htmlNode, i = h && M(h.width), l = h && h.lineHeight, m, p = d.length; p--;)b.removeChild(d[p]);
        i && !a.added && this.box.appendChild(b);
        c[c.length - 1] === "" && c.pop();
        n(c, function (c, d) {
            var h, j = 0, k, c = c.replace(/<span/g, "|||<span").replace(/<\/span>/g, "</span>|||");
            h = c.split("|||");
            n(h, function (c) {
                if (c !== "" || h.length === 1) {
                    var p = {}, n = N.createElementNS("http://www.w3.org/2000/svg",
                        "tspan");
                    e.test(c) && Z(n, "style", c.match(e)[1].replace(/(;| |^)color([ :])/, "$1fill$2"));
                    f.test(c) && (Z(n, "onclick", 'location.href="' + c.match(f)[1] + '"'), R(n, {cursor:"pointer"}));
                    c = (c.replace(/<(.|\n)*?>/g, "") || " ").replace(/&lt;/g, "<").replace(/&gt;/g, ">");
                    n.appendChild(N.createTextNode(c));
                    j ? p.dx = 3 : p.x = g;
                    if (!j) {
                        if (d) {
                            !Pb && a.renderer.forExport && R(n, {display:"block"});
                            k = Ha.getComputedStyle && M(Ha.getComputedStyle(m, null).getPropertyValue("line-height"));
                            if (!k || isNaN(k))k = l || m.offsetHeight || 18;
                            Z(n, "dy",
                                k)
                        }
                        m = n
                    }
                    Z(n, p);
                    b.appendChild(n);
                    j++;
                    if (i)for (var c = c.replace(/-/g, "- ").split(" "), t, r = []; c.length || r.length;)t = a.getBBox().width, p = t > i, !p || c.length === 1 ? (c = r, r = [], c.length && (n = N.createElementNS("http://www.w3.org/2000/svg", "tspan"), Z(n, {dy:l || 16, x:g}), b.appendChild(n), t > i && (i = t))) : (n.removeChild(n.firstChild), r.unshift(c.pop())), c.length && n.appendChild(N.createTextNode(c.join(" ").replace(/- /g, "-")))
                }
            })
        });
        if (j) {
            if (!k)k = a.htmlNode = fa("span", null, I(h, {position:Eb, top:0, left:0}), this.box.parentNode);
            k.innerHTML = a.textStr;
            for (p = d.length; p--;)d[p].style.visibility = Ua
        }
    }, button:function (a, b, c, d, e, f, g) {
        var h = this.label(a, b, c), j = 0, k, i, l, m, p, a = {x1:0, y1:0, x2:0, y2:1}, e = G(ha("stroke-width", 1, "stroke", "#999", "fill", ha("linearGradient", a, "stops", [
            [0, "#FFF"],
            [1, "#DDD"]
        ]), "r", 3, "padding", 3, "style", ha("color", "black")), e);
        l = e.style;
        delete e.style;
        f = G(e, ha("stroke", "#68A", "fill", ha("linearGradient", a, "stops", [
            [0, "#FFF"],
            [1, "#ACF"]
        ])), f);
        m = f.style;
        delete f.style;
        g = G(e, ha("stroke", "#68A", "fill", ha("linearGradient",
            a, "stops", [
                [0, "#9BD"],
                [1, "#CDF"]
            ])), g);
        p = g.style;
        delete g.style;
        U(h.element, "mouseenter", function () {
            h.attr(f).css(m)
        });
        U(h.element, "mouseleave", function () {
            k = [e, f, g][j];
            i = [l, m, p][j];
            h.attr(k).css(i)
        });
        h.setState = function (a) {
            (j = a) ? a === 2 && h.attr(g).css(p) : h.attr(e).css(l)
        };
        return h.on("click",
            function () {
                d.call(h)
            }).attr(e).css(I({cursor:"default"}, l))
    }, crispLine:function (a, b) {
        a[1] === a[4] && (a[1] = a[4] = B(a[1]) + b % 2 / 2);
        a[2] === a[5] && (a[2] = a[5] = B(a[2]) + b % 2 / 2);
        return a
    }, path:function (a) {
        return this.createElement("path").attr({d:a,
            fill:na})
    }, circle:function (a, b, c) {
        a = pb(a) ? a : {x:a, y:b, r:c};
        return this.createElement("circle").attr(a)
    }, arc:function (a, b, c, d, e, f) {
        if (pb(a))b = a.y, c = a.r, d = a.innerR, e = a.start, f = a.end, a = a.x;
        return this.symbol("arc", a || 0, b || 0, c || 0, c || 0, {innerR:d || 0, start:e || 0, end:f || 0})
    }, rect:function (a, b, c, d, e, f) {
        if (pb(a))b = a.y, c = a.width, d = a.height, e = a.r, f = a.strokeWidth, a = a.x;
        e = this.createElement("rect").attr({rx:e, ry:e, fill:na});
        return e.attr(e.crisp(f, a, b, P(c, 0), P(d, 0)))
    }, setSize:function (a, b, c) {
        var d = this.alignedObjects,
            e = d.length;
        this.width = a;
        this.height = b;
        for (this.boxWrapper[r(c, !0) ? "animate" : "attr"]({width:a, height:b}); e--;)d[e].align()
    }, g:function (a) {
        var b = this.createElement("g");
        return z(a) ? b.attr({"class":cb + a}) : b
    }, image:function (a, b, c, d, e) {
        var f = {preserveAspectRatio:na};
        arguments.length > 1 && I(f, {x:b, y:c, width:d, height:e});
        f = this.createElement("image").attr(f);
        f.element.setAttributeNS ? f.element.setAttributeNS("http://www.w3.org/1999/xlink", "href", a) : f.element.setAttribute("hc-svg-href", a);
        return f
    }, symbol:function (a, b, c, d, e, f) {
        var g, h = this.symbols[a], h = h && h(B(b), B(c), d, e, f), j = /^url\((.*?)\)$/, k;
        if (h)g = this.path(h), I(g, {symbolName:a, x:b, y:c, width:d, height:e}), f && I(g, f); else if (j.test(a)) {
            var i = function (a, b) {
                a.attr({width:b[0], height:b[1]}).translate(-B(b[0] / 2), -B(b[1] / 2))
            };
            k = a.match(j)[1];
            a = Fc[k];
            g = this.image(k).attr({x:b, y:c});
            a ? i(g, a) : (g.attr({width:0, height:0}), fa("img", {onload:function () {
                i(g, Fc[k] = [this.width, this.height])
            }, src:k}))
        }
        return g
    }, symbols:{circle:function (a, b, c, d) {
        var e = 0.166 * c;
        return[ua, a + c / 2,
            b, "C", a + c + e, b, a + c + e, b + d, a + c / 2, b + d, "C", a - e, b + d, a - e, b, a + c / 2, b, "Z"]
    }, square:function (a, b, c, d) {
        return[ua, a, b, ja, a + c, b, a + c, b + d, a, b + d, "Z"]
    }, triangle:function (a, b, c, d) {
        return[ua, a + c / 2, b, ja, a + c, b + d, a, b + d, "Z"]
    }, "triangle-down":function (a, b, c, d) {
        return[ua, a, b, ja, a + c, b, a + c / 2, b + d, "Z"]
    }, diamond:function (a, b, c, d) {
        return[ua, a + c / 2, b, ja, a + c, b + d / 2, a + c / 2, b + d, a, b + d / 2, "Z"]
    }, arc:function (a, b, c, d, e) {
        var f = e.start, c = e.r || c || d, g = e.end - 1.0E-6, d = e.innerR, h = Ma(f), j = Ca(f), k = Ma(g), g = Ca(g), e = e.end - f < Na ? 0 : 1;
        return[ua, a + c * h, b + c *
            j, "A", c, c, 0, e, 1, a + c * k, b + c * g, ja, a + d * k, b + d * g, "A", d, d, 0, e, 0, a + d * h, b + d * j, "Z"]
    }}, clipRect:function (a, b, c, d) {
        var e = cb + oc++, f = this.createElement("clipPath").attr({id:e}).add(this.defs), a = this.rect(a, b, c, d, 0).add(f);
        a.id = e;
        a.clipPath = f;
        return a
    }, color:function (a, b, c) {
        var d, e = /^rgba/;
        if (a && a.linearGradient) {
            var f = this, g = a.linearGradient, b = !ic(g), c = f.gradients, h, j = g.x1 || g[0] || 0, k = g.y1 || g[1] || 0, i = g.x2 || g[2] || 0, l = g.y2 || g[3] || 0, m, p, t = [b, j, k, i, l, a.stops.join(",")].join(",");
            c[t] ? g = Z(c[t].element, "id") : (g = cb + oc++,
                h = f.createElement("linearGradient").attr(I({id:g, x1:j, y1:k, x2:i, y2:l}, b ? null : {gradientUnits:"userSpaceOnUse"})).add(f.defs), h.stops = [], n(a.stops, function (a) {
                e.test(a[1]) ? (d = Da(a[1]), m = d.get("rgb"), p = d.get("a")) : (m = a[1], p = 1);
                a = f.createElement("stop").attr({offset:a[0], "stop-color":m, "stop-opacity":p}).add(h);
                h.stops.push(a)
            }), c[t] = h);
            return"url(" + this.url + "#" + g + ")"
        } else return e.test(a) ? (d = Da(a), Z(b, c + "-opacity", d.get("a")), d.get("rgb")) : (b.removeAttribute(c + "-opacity"), a)
    }, text:function (a, b, c, d) {
        var e =
            ca.chart.style, b = B(r(b, 0)), c = B(r(c, 0)), a = this.createElement("text").attr({x:b, y:c, text:a}).css({fontFamily:e.fontFamily, fontSize:e.fontSize});
        a.x = b;
        a.y = c;
        a.useHTML = d;
        return a
    }, label:function (a, b, c, d, e, f) {
        function g() {
            var a = i.styles, a = a && a.textAlign, b = x, c = x + B(M(i.element.style.fontSize || 11) * 1.2);
            if (z(u) && (a === "center" || a === "right"))b += {center:0.5, right:1}[a] * (u - p.width);
            (b !== l.x || c !== l.y) && l.attr({x:b, y:c});
            l.x = b;
            l.y = c
        }

        function h(a, b) {
            m ? m.attr(a, b) : za[a] = b
        }

        function j() {
            i.attr({text:a, x:b, y:c, anchorX:e,
                anchorY:f})
        }

        var k = this, i = k.g(), l = k.text().attr({zIndex:1}).add(i), m, p, t = "left", x = 3, u, w, v, q, r = 0, za = {}, H = i.attrSetters;
        U(i, "add", j);
        H.width = function (a) {
            u = a;
            return!1
        };
        H.height = function (a) {
            w = a;
            return!1
        };
        H.padding = function (a) {
            x = a;
            g();
            return!1
        };
        H.align = function (a) {
            t = a;
            return!1
        };
        H.text = function (a, b) {
            l.attr(b, a);
            p = (u === void 0 || w === void 0 || i.styles.textAlign) && l.getBBox(!0);
            i.width = (u || p.width) + 2 * x;
            i.height = (w || p.height) + 2 * x;
            if (!m)i.box = m = d ? k.symbol(d, 0, 0, i.width, i.height) : k.rect(0, 0, i.width, i.height, 0, za["stroke-width"]),
                m.add(i);
            m.attr(G({width:i.width, height:i.height}, za));
            za = null;
            g();
            return!1
        };
        H["stroke-width"] = function (a, b) {
            r = a % 2 / 2;
            h(b, a);
            return!1
        };
        H.stroke = H.fill = H.r = function (a, b) {
            h(b, a);
            return!1
        };
        H.anchorX = function (a, b) {
            e = a;
            h(b, a + r - v);
            return!1
        };
        H.anchorY = function (a, b) {
            f = a;
            h(b, a - q);
            return!1
        };
        H.x = function (a) {
            v = a;
            v -= {left:0, center:0.5, right:1}[t] * ((u || p.width) + x);
            i.attr("translateX", B(v));
            return!1
        };
        H.y = function (a) {
            q = a;
            i.attr("translateY", B(a));
            return!1
        };
        var y = i.css;
        return I(i, {css:function (a) {
            if (a) {
                var b = {}, a =
                    G({}, a);
                n("fontSize,fontWeight,fontFamily,color,lineHeight,width".split(","), function (c) {
                    a[c] !== C && (b[c] = a[c], delete a[c])
                });
                l.css(b)
            }
            return y.call(i, a)
        }, getBBox:function () {
            return m.getBBox()
        }, shadow:function (a) {
            m.shadow(a);
            return i
        }, destroy:function () {
            ra(i, "add", j);
            ra(i.element, "mouseenter");
            ra(i.element, "mouseleave");
            l && (l = l.destroy());
            Db.prototype.destroy.call(i)
        }})
    }};
    Ob = Nb;
    var Sb;
    if (!Pb)y = oa(Db, {init:function (a, b) {
        var c = ["<", b, ' filled="f" stroked="f"'], d = ["position: ", Eb, ";"];
        (b === "shape" || b ===
            tb) && d.push("left:0;top:0;width:10px;height:10px;");
        Qb && d.push("visibility: ", b === tb ? Ua : Ya);
        c.push(' style="', d.join(""), '"/>');
        if (b)c = b === tb || b === "span" || b === "img" ? c.join("") : a.prepVML(c), this.element = fa(c);
        this.renderer = a;
        this.attrSetters = {}
    }, add:function (a) {
        var b = this.renderer, c = this.element, d = b.box, d = a ? a.element || a : d;
        a && a.inverted && b.invertChild(c, d);
        Qb && d.gVis === Ua && R(c, {visibility:Ua});
        d.appendChild(c);
        this.added = !0;
        this.alignOnAdd && !this.deferUpdateTransform && this.updateTransform();
        S(this,
            "add");
        return this
    }, toggleChildren:function (a, b) {
        for (var c = a.childNodes, d = c.length; d--;)R(c[d], {visibility:b}), c[d].nodeName === "DIV" && this.toggleChildren(c[d], b)
    }, attr:function (a, b) {
        var c, d, e, f = this.element || {}, g = f.style, h = f.nodeName, j = this.renderer, k = this.symbolName, i, l = this.shadows, m, p = this.attrSetters, n = this;
        Bb(a) && z(b) && (c = a, a = {}, a[c] = b);
        if (Bb(a))c = a, n = c === "strokeWidth" || c === "stroke-width" ? this.strokeweight : this[c]; else for (c in a)if (d = a[c], m = !1, e = p[c] && p[c](d, c), e !== !1 && d !== null) {
            e !== C && (d = e);
            if (k && /^(x|y|r|start|end|width|height|innerR|anchorX|anchorY)/.test(c))i || (this.symbolAttr(a), i = !0), m = !0; else if (c === "d") {
                d = d || [];
                this.d = d.join(" ");
                e = d.length;
                for (m = []; e--;)m[e] = Tb(d[e]) ? B(d[e] * 10) - 5 : d[e] === "Z" ? "x" : d[e];
                d = m.join(" ") || "x";
                f.path = d;
                if (l)for (e = l.length; e--;)l[e].path = d;
                m = !0
            } else if (c === "zIndex" || c === "visibility") {
                if (Qb && c === "visibility" && h === "DIV")f.gVis = d, this.toggleChildren(f, d), d === Ya && (d = null);
                d && (g[c] = d);
                m = !0
            } else if (c === "width" || c === "height")d = P(0, d), this[c] = d, this.updateClipping ?
                (this[c] = d, this.updateClipping()) : g[c] = d, m = !0; else if (/^(x|y)$/.test(c))this[c] = d, f.tagName === "SPAN" ? this.updateTransform() : g[{x:"left", y:"top"}[c]] = d; else if (c === "class")f.className = d; else if (c === "stroke")d = j.color(d, f, c), c = "strokecolor"; else if (c === "stroke-width" || c === "strokeWidth")f.stroked = d ? !0 : !1, c = "strokeweight", this[c] = d, Tb(d) && (d += Fa); else if (c === "dashstyle")(f.getElementsByTagName("stroke")[0] || fa(j.prepVML(["<stroke/>"]), null, null, f))[c] = d || "solid", this.dashstyle = d, m = !0; else if (c === "fill")h ===
                "SPAN" ? g.color = d : (f.filled = d !== na ? !0 : !1, d = j.color(d, f, c), c = "fillcolor"); else if (c === "translateX" || c === "translateY" || c === "rotation" || c === "align")c === "align" && (c = "textAlign"), this[c] = d, this.updateTransform(), m = !0; else if (c === "text")this.bBox = null, f.innerHTML = d, m = !0;
            if (l && c === "visibility")for (e = l.length; e--;)l[e].style[c] = d;
            m || (Qb ? f[c] = d : Z(f, c, d))
        }
        return n
    }, clip:function (a) {
        var b = this, c = a.members;
        c.push(b);
        b.destroyClip = function () {
            Gb(c, b)
        };
        return b.css(a.getCSS(b.inverted))
    }, css:function (a) {
        var b = this.element;
        if (b = a && b.tagName === "SPAN" && a.width)delete a.width, this.textWidth = b, this.updateTransform();
        this.styles = I(this.styles, a);
        R(this.element, a);
        return this
    }, safeRemoveChild:function (a) {
        a.parentNode && Ib(a)
    }, destroy:function () {
        this.destroyClip && this.destroyClip();
        return Db.prototype.destroy.apply(this)
    }, empty:function () {
        for (var a = this.element.childNodes, b = a.length, c; b--;)c = a[b], c.parentNode.removeChild(c)
    }, getBBox:function (a) {
        var b = this.element, c = this.bBox;
        if (!c || a) {
            if (b.nodeName === "text")b.style.position =
                Eb;
            c = this.bBox = {x:b.offsetLeft, y:b.offsetTop, width:b.offsetWidth, height:b.offsetHeight}
        }
        return c
    }, on:function (a, b) {
        this.element["on" + a] = function () {
            var a = Ha.event;
            a.target = a.srcElement;
            b(a)
        };
        return this
    }, updateTransform:function () {
        if (this.added) {
            var a = this, b = a.element, c = a.translateX || 0, d = a.translateY || 0, e = a.x || 0, f = a.y || 0, g = a.textAlign || "left", h = {left:0, center:0.5, right:1}[g], j = g && g !== "left", k = a.shadows;
            if (c || d)R(b, {marginLeft:c, marginTop:d}), k && n(k, function (a) {
                R(a, {marginLeft:c + 1, marginTop:d + 1})
            });
            a.inverted && n(b.childNodes, function (c) {
                a.renderer.invertChild(c, b)
            });
            if (b.tagName === "SPAN") {
                var i, l, k = a.rotation, m;
                i = 0;
                var p = 1, t = 0, x;
                m = M(a.textWidth);
                var u = a.xCorr || 0, w = a.yCorr || 0, v = [k, g, b.innerHTML, a.textWidth].join(",");
                if (v !== a.cTT)z(k) && (i = k * Ec, p = Ma(i), t = Ca(i), R(b, {filter:k ? ["progid:DXImageTransform.Microsoft.Matrix(M11=", p, ", M12=", -t, ", M21=", t, ", M22=", p, ", sizingMethod='auto expand')"].join("") : na})), i = r(a.elemWidth, b.offsetWidth), l = r(a.elemHeight, b.offsetHeight), i > m && (R(b, {width:m + Fa, display:"block",
                    whiteSpace:"normal"}), i = m), m = B((M(b.style.fontSize) || 12) * 1.2), u = p < 0 && -i, w = t < 0 && -l, x = p * t < 0, u += t * m * (x ? 1 - h : h), w -= p * m * (k ? x ? h : 1 - h : 1), j && (u -= i * h * (p < 0 ? -1 : 1), k && (w -= l * h * (t < 0 ? -1 : 1)), R(b, {textAlign:g})), a.xCorr = u, a.yCorr = w;
                R(b, {left:e + u, top:f + w});
                a.cTT = v
            }
        } else this.alignOnAdd = !0
    }, shadow:function (a, b) {
        var c = [], d, e = this.element, f = this.renderer, g, h = e.style, j, k = e.path;
        k && typeof k.value !== "string" && (k = "x");
        if (a) {
            for (d = 1; d <= 3; d++)j = ['<shape isShadow="true" strokeweight="', 7 - 2 * d, '" filled="false" path="', k, '" coordsize="100,100" style="',
                e.style.cssText, '" />'], g = fa(f.prepVML(j), null, {left:M(h.left) + 1, top:M(h.top) + 1}), j = ['<stroke color="black" opacity="', 0.05 * d, '"/>'], fa(f.prepVML(j), null, null, g), b ? b.element.appendChild(g) : e.parentNode.insertBefore(g, e), c.push(g);
            this.shadows = c
        }
        return this
    }}), Sb = function () {
        this.init.apply(this, arguments)
    }, Sb.prototype = G(Nb.prototype, {Element:y, isIE8:jb.indexOf("MSIE 8.0") > -1, init:function (a, b, c) {
        var d;
        this.alignedObjects = [];
        d = this.createElement(tb);
        a.appendChild(d.element);
        this.box = d.element;
        this.boxWrapper =
            d;
        this.setSize(b, c, !1);
        if (!N.namespaces.hcv)N.namespaces.add("hcv", "urn:schemas-microsoft-com:vml"), N.createStyleSheet().cssText = "hcv\\:fill, hcv\\:path, hcv\\:shape, hcv\\:stroke{ behavior:url(#default#VML); display: inline-block; } "
    }, clipRect:function (a, b, c, d) {
        var e = this.createElement();
        return I(e, {members:[], left:a, top:b, width:c, height:d, getCSS:function (a) {
            var b = this.top, c = this.left, d = c + this.width, e = b + this.height, b = {clip:"rect(" + B(a ? c : b) + "px," + B(a ? e : d) + "px," + B(a ? d : e) + "px," + B(a ? b : c) + "px)"};
            !a &&
                Qb && I(b, {width:d + Fa, height:e + Fa});
            return b
        }, updateClipping:function () {
            n(e.members, function (a) {
                a.css(e.getCSS(a.inverted))
            })
        }})
    }, color:function (a, b, c) {
        var d, e = /^rgba/;
        if (a && a.linearGradient) {
            var f, g, h = a.linearGradient, j = h.x1 || h[0] || 0, k = h.y1 || h[1] || 0, i = h.x2 || h[2] || 0, h = h.y2 || h[3] || 0, l, m, p, t;
            n(a.stops, function (a, b) {
                e.test(a[1]) ? (d = Da(a[1]), f = d.get("rgb"), g = d.get("a")) : (f = a[1], g = 1);
                b ? (p = f, t = g) : (l = f, m = g)
            });
            if (c === "fill")a = 90 - ta.atan((h - k) / (i - j)) * 180 / Na, a = ['<fill colors="0% ', l, ",100% ", p, '" angle="', a,
                '" opacity="', t, '" o:opacity2="', m, '" type="gradient" focus="100%" method="any" />'], fa(this.prepVML(a), null, null, b); else return f
        } else if (e.test(a) && b.tagName !== "IMG")return d = Da(a), a = ["<", c, ' opacity="', d.get("a"), '"/>'], fa(this.prepVML(a), null, null, b), d.get("rgb"); else {
            b = b.getElementsByTagName(c);
            if (b.length)b[0].opacity = 1;
            return a
        }
    }, prepVML:function (a) {
        var b = this.isIE8, a = a.join("");
        b ? (a = a.replace("/>", ' xmlns="urn:schemas-microsoft-com:vml" />'), a = a.indexOf('style="') === -1 ? a.replace("/>", ' style="display:inline-block;behavior:url(#default#VML);" />') :
            a.replace('style="', 'style="display:inline-block;behavior:url(#default#VML);')) : a = a.replace("<", "<hcv:");
        return a
    }, text:function (a, b, c) {
        var d = ca.chart.style;
        return this.createElement("span").attr({text:a, x:B(b), y:B(c)}).css({whiteSpace:"nowrap", fontFamily:d.fontFamily, fontSize:d.fontSize})
    }, path:function (a) {
        return this.createElement("shape").attr({coordsize:"100 100", d:a})
    }, circle:function (a, b, c) {
        return this.symbol("circle").attr({x:a, y:b, r:c})
    }, g:function (a) {
        var b;
        a && (b = {className:cb + a, "class":cb +
            a});
        return this.createElement(tb).attr(b)
    }, image:function (a, b, c, d, e) {
        var f = this.createElement("img").attr({src:a});
        arguments.length > 1 && f.css({left:b, top:c, width:d, height:e});
        return f
    }, rect:function (a, b, c, d, e, f) {
        if (pb(a))b = a.y, c = a.width, d = a.height, f = a.strokeWidth, a = a.x;
        var g = this.symbol("rect");
        g.r = e;
        return g.attr(g.crisp(f, a, b, P(c, 0), P(d, 0)))
    }, invertChild:function (a, b) {
        var c = b.style;
        R(a, {flip:"x", left:M(c.width) - 10, top:M(c.height) - 10, rotation:-90})
    }, symbols:{arc:function (a, b, c, d, e) {
        var f = e.start,
            g = e.end, c = e.r || c || d, d = Ma(f), h = Ca(f), j = Ma(g), k = Ca(g), e = e.innerR, i = 0.07 / c, l = e && 0.1 / e || 0;
        if (g - f === 0)return["x"]; else 2 * Na - g + f < i ? j = -i : g - f < l && (j = Ma(f + l));
        return["wa", a - c, b - c, a + c, b + c, a + c * d, b + c * h, a + c * j, b + c * k, "at", a - e, b - e, a + e, b + e, a + e * j, b + e * k, a + e * d, b + e * h, "x", "e"]
    }, circle:function (a, b, c, d) {
        return["wa", a, b, a + c, b + d, a + c, b + d / 2, a + c, b + d / 2, "e"]
    }, rect:function (a, b, c, d, e) {
        if (!z(e))return[];
        var f = a + c, g = b + d, c = va(e.r || 0, c, d);
        return[ua, a + c, b, ja, f - c, b, "wa", f - 2 * c, b, f, b + 2 * c, f - c, b, f, b + c, ja, f, g - c, "wa", f - 2 * c, g - 2 * c, f, g, f, g - c,
            f - c, g, ja, a + c, g, "wa", a, g - 2 * c, a + 2 * c, g, a + c, g, a, g - c, ja, a, b + c, "wa", a, b, a + 2 * c, b + 2 * c, a, b + c, a + c, b, "x", "e"]
    }}}), Ob = Sb;
    ac.prototype.callbacks = [];
    var eb = function () {
    };
    eb.prototype = {init:function (a, b, c) {
        var d = a.chart.counters;
        this.series = a;
        this.applyOptions(b, c);
        this.pointAttr = {};
        if (a.options.colorByPoint) {
            b = a.chart.options.colors;
            if (!this.options)this.options = {};
            this.color = this.options.color = this.color || b[d.color++];
            d.wrapColor(b.length)
        }
        a.chart.pointCount++;
        return this
    }, applyOptions:function (a, b) {
        var c = this.series,
            d = typeof a;
        this.config = a;
        if (d === "number" || a === null)this.y = a; else if (typeof a[0] === "number")this.x = a[0], this.y = a[1]; else if (d === "object" && typeof a.length !== "number")I(this, a), this.options = a; else if (typeof a[0] === "string")this.name = a[0], this.y = a[1];
        if (this.x === C)this.x = b === C ? c.autoIncrement() : b
    }, destroy:function () {
        var a = this.series, b = a.chart.hoverPoints, c;
        a.chart.pointCount--;
        b && (this.setState(), Gb(b, this));
        if (this === a.chart.hoverPoint)this.onMouseOut();
        a.chart.hoverPoints = null;
        if (this.graphic || this.dataLabel)ra(this),
            this.destroyElements();
        this.legendItem && this.series.chart.legend.destroyItem(this);
        for (c in this)this[c] = null
    }, destroyElements:function () {
        for (var a = "graphic,tracker,dataLabel,group,connector,shadowGroup".split(","), b, c = 6; c--;)b = a[c], this[b] && (this[b] = this[b].destroy())
    }, getLabelConfig:function () {
        return{x:this.category, y:this.y, key:this.name || this.category, series:this.series, point:this, percentage:this.percentage, total:this.total || this.stackTotal}
    }, select:function (a, b) {
        var c = this, d = c.series.chart, a =
            r(a, !c.selected);
        c.firePointEvent(a ? "select" : "unselect", {accumulate:b}, function () {
            c.selected = a;
            c.setState(a && "select");
            b || n(d.getSelectedPoints(), function (a) {
                if (a.selected && a !== c)a.selected = !1, a.setState(ma), a.firePointEvent("unselect")
            })
        })
    }, onMouseOver:function () {
        var a = this.series, b = a.chart, c = b.tooltip, d = b.hoverPoint;
        if (d && d !== this)d.onMouseOut();
        this.firePointEvent("mouseOver");
        c && (!c.shared || a.noSharedTooltip) && c.refresh(this);
        this.setState(ab);
        b.hoverPoint = this
    }, onMouseOut:function () {
        this.firePointEvent("mouseOut");
        this.setState();
        this.series.chart.hoverPoint = null
    }, tooltipFormatter:function (a) {
        var b = this.series, c = b.tooltipOptions, d = String(this.y).split("."), d = d[1] ? d[1].length : 0, e = a.match(/\{(series|point)\.[a-zA-Z]+\}/g), f = /[\.}]/, g, h, j;
        for (j in e)h = e[j], Bb(h) && h !== a && (g = h.indexOf("point") === 1 ? this : b, g = h === "{point.y}" ? (c.yPrefix || "") + Vb(this.y, r(c.yDecimals, d)) + (c.ySuffix || "") : g[e[j].split(f)[1]], a = a.replace(e[j], g));
        return a
    }, update:function (a, b, c) {
        var d = this, e = d.series, f = d.graphic, g, h = e.data, j = h.length, k =
            e.chart, b = r(b, !0);
        d.firePointEvent("update", {options:a}, function () {
            d.applyOptions(a);
            pb(a) && (e.getAttribs(), f && f.attr(d.pointAttr[e.state]));
            for (g = 0; g < j; g++)if (h[g] === d) {
                e.xData[g] = d.x;
                e.yData[g] = d.y;
                e.options.data[g] = a;
                break
            }
            e.isDirty = !0;
            e.isDirtyData = !0;
            b && k.redraw(c)
        })
    }, remove:function (a, b) {
        var c = this, d = c.series, e = d.chart, f, g = d.data, h = g.length;
        Jb(b, e);
        a = r(a, !0);
        c.firePointEvent("remove", null, function () {
            for (f = 0; f < h; f++)if (g[f] === c) {
                g.splice(f, 1);
                d.options.data.splice(f, 1);
                d.xData.splice(f, 1);
                d.yData.splice(f,
                    1);
                break
            }
            c.destroy();
            d.isDirty = !0;
            d.isDirtyData = !0;
            a && e.redraw()
        })
    }, firePointEvent:function (a, b, c) {
        var d = this, e = this.series.options;
        (e.point.events[a] || d.options && d.options.events && d.options.events[a]) && this.importEvents();
        a === "click" && e.allowPointSelect && (c = function (a) {
            d.select(null, a.ctrlKey || a.metaKey || a.shiftKey)
        });
        S(this, a, b, c)
    }, importEvents:function () {
        if (!this.hasImportedEvents) {
            var a = G(this.series.options.point, this.options).events, b;
            this.events = a;
            for (b in a)U(this, b, a[b]);
            this.hasImportedEvents =
                !0
        }
    }, setState:function (a) {
        var b = this.plotX, c = this.plotY, d = this.series, e = d.options.states, f = V[d.type].marker && d.options.marker, g = f && !f.enabled, h = f && f.states[a], j = h && h.enabled === !1, k = d.stateMarkerGraphic, i = d.chart, l = this.pointAttr, a = a || ma;
        if (!(a === this.state || this.selected && a !== "select" || e[a] && e[a].enabled === !1 || a && (j || g && !h.enabled))) {
            if (this.graphic)e = this.graphic.symbolName && l[a].r, this.graphic.attr(G(l[a], e ? {x:b - e, y:c - e, width:2 * e, height:2 * e} : {})); else {
                if (a) {
                    if (!k)e = f.radius, d.stateMarkerGraphic =
                        k = i.renderer.symbol(d.symbol, -e, -e, 2 * e, 2 * e).attr(l[a]).add(d.group);
                    k.translate(b, c)
                }
                if (k)k[a ? "show" : "hide"]()
            }
            this.state = a
        }
    }};
    var W = function () {
    };
    W.prototype = {isCartesian:!0, type:"line", pointClass:eb, pointAttrToOptions:{stroke:"lineColor", "stroke-width":"lineWidth", fill:"fillColor", r:"radius"}, init:function (a, b) {
        var c, d;
        d = a.series.length;
        this.chart = a;
        this.options = b = this.setOptions(b);
        this.bindAxes();
        I(this, {index:d, name:b.name || "Series " + (d + 1), state:ma, pointAttr:{}, visible:b.visible !== !1, selected:b.selected ===
            !0});
        d = b.events;
        for (c in d)U(this, c, d[c]);
        if (d && d.click || b.point && b.point.events && b.point.events.click || b.allowPointSelect)a.runTrackerClick = !0;
        this.getColor();
        this.getSymbol();
        this.setData(b.data, !1)
    }, bindAxes:function () {
        var a = this, b = a.options, c = a.chart, d;
        a.isCartesian && n(["xAxis", "yAxis"], function (e) {
            n(c[e], function (c) {
                d = c.options;
                if (b[e] === d.index || b[e] === C && d.index === 0)c.series.push(a), a[e] = c, c.isDirty = !0
            })
        })
    }, autoIncrement:function () {
        var a = this.options, b = this.xIncrement, b = r(b, a.pointStart, 0);
        this.pointInterval = r(this.pointInterval, a.pointInterval, 1);
        this.xIncrement = b + this.pointInterval;
        return b
    }, getSegments:function () {
        var a = -1, b = [], c, d = this.points, e = d.length;
        if (e)if (this.options.connectNulls) {
            for (c = e; c--;)d[c].y === null && d.splice(c, 1);
            b = [d]
        } else n(d, function (c, g) {
            c.y === null ? (g > a + 1 && b.push(d.slice(a + 1, g)), a = g) : g === e - 1 && b.push(d.slice(a + 1, g + 1))
        });
        this.segments = b
    }, setOptions:function (a) {
        var b = this.chart.options, c = b.plotOptions, d = a.data;
        a.data = null;
        a = G(c[this.type], c.series, a);
        a.data = d;
        this.tooltipOptions =
            G(b.tooltip, a.tooltip);
        return a
    }, getColor:function () {
        var a = this.chart.options.colors, b = this.chart.counters;
        this.color = this.options.color || a[b.color++] || "#0000ff";
        b.wrapColor(a.length)
    }, getSymbol:function () {
        var a = this.options.marker, b = this.chart, c = b.options.symbols, b = b.counters;
        this.symbol = a.symbol || c[b.symbol++];
        if (/^url/.test(this.symbol))a.radius = 0;
        b.wrapSymbol(c.length)
    }, addPoint:function (a, b, c, d) {
        var e = this.data, f = this.graph, g = this.area, h = this.chart, j = this.xData, k = this.yData, i = f && f.shift || 0, l =
            this.options.data;
        Jb(d, h);
        if (f && c)f.shift = i + 1;
        if (g)g.shift = i + 1, g.isArea = !0;
        b = r(b, !0);
        d = {series:this};
        this.pointClass.prototype.applyOptions.apply(d, [a]);
        j.push(d.x);
        k.push(this.valueCount === 4 ? [d.open, d.high, d.low, d.close] : d.y);
        l.push(a);
        c && (e[0] ? e[0].remove(!1) : (e.shift(), j.shift(), k.shift(), l.shift()));
        this.getAttribs();
        this.isDirtyData = this.isDirty = !0;
        b && h.redraw()
    }, setData:function (a, b) {
        var c = this.points, d = this.options, e = this.initialColor, f = this.chart, g = null;
        this.xIncrement = null;
        this.pointRange =
            this.xAxis && this.xAxis.categories && 1 || d.pointRange;
        if (z(e))f.counters.color = e;
        var h = [], j = [], k = a ? a.length : [], i = this.valueCount === 4;
        if (k > (d.turboThreshold || 1E3)) {
            for (e = 0; g === null && e < k;)g = a[e], e++;
            if (Tb(g)) {
                g = r(d.pointStart, 0);
                d = r(d.pointInterval, 1);
                for (e = 0; e < k; e++)h[e] = g, j[e] = a[e], g += d;
                this.xIncrement = g
            } else if (ic(g))if (i)for (e = 0; e < k; e++)d = a[e], h[e] = d[0], j[e] = d.slice(1, 5); else for (e = 0; e < k; e++)d = a[e], h[e] = d[0], j[e] = d[1]
        } else for (e = 0; e < k; e++)d = {series:this}, this.pointClass.prototype.applyOptions.apply(d,
            [a[e]]), h[e] = d.x, j[e] = i ? [d.open, d.high, d.low, d.close] : d.y;
        this.data = [];
        this.options.data = a;
        this.xData = h;
        this.yData = j;
        for (e = c && c.length || 0; e--;)c[e] && c[e].destroy && c[e].destroy();
        this.isDirty = this.isDirtyData = f.isDirtyBox = !0;
        r(b, !0) && f.redraw(!1)
    }, remove:function (a, b) {
        var c = this, d = c.chart, a = r(a, !0);
        if (!c.isRemoving)c.isRemoving = !0, S(c, "remove", null, function () {
            c.destroy();
            d.isDirtyLegend = d.isDirtyBox = !0;
            a && d.redraw(b)
        });
        c.isRemoving = !1
    }, processData:function (a) {
        var b = this.xData, c = this.yData, d = b.length,
            e = 0, f = d, g, h, j = this.xAxis, k = this.options, i = k.cropThreshold;
        if (this.isCartesian && !this.isDirty && !j.isDirty && !this.yAxis.isDirty && !a)return!1;
        if (!i || d > i || this.forceCrop)if (a = j.getExtremes(), j = a.min, i = a.max, b[d - 1] < j || b[0] > i)b = [], c = []; else if (b[0] < j || b[d - 1] > i) {
            for (a = 0; a < d; a++)if (b[a] >= j) {
                e = P(0, a - 1);
                break
            }
            for (; a < d; a++)if (b[a] > i) {
                f = a + 1;
                break
            }
            b = b.slice(e, f);
            c = c.slice(e, f);
            g = !0
        }
        for (a = b.length - 1; a > 0; a--)if (d = b[a] - b[a - 1], h === C || d < h)h = d;
        this.cropped = g;
        this.cropStart = e;
        this.processedXData = b;
        this.processedYData =
            c;
        if (k.pointRange === null)this.pointRange = h || 1;
        this.closestPointRange = h
    }, generatePoints:function () {
        var a = this.options.data, b = this.data, c, d = this.processedXData, e = this.processedYData, f = this.pointClass, g = d.length, h = this.cropStart || 0, j, k = this.hasGroupedData, i, l = [], m;
        if (!b && !k)b = [], b.length = a.length, b = this.data = b;
        for (m = 0; m < g; m++)j = h + m, k ? l[m] = (new f).init(this, [d[m]].concat(qb(e[m]))) : (b[j] ? i = b[j] : b[j] = i = (new f).init(this, a[j], d[m]), l[m] = i);
        if (b && (g !== (c = b.length) || k))for (m = 0; m < c; m++)m === h && !k && (m += g), b[m] &&
            b[m].destroyElements();
        this.data = b;
        this.points = l
    }, translate:function () {
        this.processedXData || this.processData();
        this.generatePoints();
        var a = this.chart, b = this.options, c = b.stacking, d = this.xAxis, e = d.categories, f = this.yAxis, g = this.points, h = g.length, j = !!this.modifyValue, k = this.index === f.series.length - 1, i;
        for (i = 0; i < h; i++) {
            var l = g[i], m = l.x, p = l.y, n = l.low, r = f.stacks[(p < b.threshold ? "-" : "") + this.stackKey];
            l.plotX = B(d.translate(m) * 10) / 10;
            if (c && this.visible && r && r[m]) {
                n = r[m];
                m = n.total;
                n.cum = n = n.cum - p;
                p = n + p;
                if (k)n =
                    b.threshold;
                c === "percent" && (n = m ? n * 100 / m : 0, p = m ? p * 100 / m : 0);
                l.percentage = m ? l.y * 100 / m : 0;
                l.stackTotal = m
            }
            if (z(n))l.yBottom = f.translate(n, 0, 1, 0, 1);
            j && (p = this.modifyValue(p, l));
            if (p !== null)l.plotY = B(f.translate(p, 0, 1, 0, 1) * 10) / 10;
            l.clientX = a.inverted ? a.plotHeight - l.plotX : l.plotX;
            l.category = e && e[l.x] !== C ? e[l.x] : l.x
        }
        this.getSegments()
    }, setTooltipPoints:function (a) {
        var b = this.chart, c = b.inverted, d = [], b = B((c ? b.plotTop : b.plotLeft) + b.plotSizeX), e, f;
        e = this.xAxis;
        var g, h, j = [];
        if (this.options.enableMouseTracking !==
            !1) {
            if (a)this.tooltipPoints = null;
            n(this.segments || this.points, function (a) {
                d = d.concat(a)
            });
            e && e.reversed && (d = d.reverse());
            a = d.length;
            for (h = 0; h < a; h++) {
                g = d[h];
                e = d[h - 1] ? d[h - 1]._high + 1 : 0;
                for (f = g._high = d[h + 1] ? Qa((g.plotX + (d[h + 1] ? d[h + 1].plotX : b)) / 2) : b; e <= f;)j[c ? b - e++ : e++] = g
            }
            this.tooltipPoints = j
        }
    }, tooltipHeaderFormatter:function (a) {
        var b = this.tooltipOptions, c = b.xDateFormat || "%A, %b %e, %Y", d = this.xAxis;
        return b.headerFormat.replace("{point.key}", d && d.options.type === "datetime" ? ub(c, a) : a).replace("{series.name}",
            this.name).replace("{series.color}", this.color)
    }, onMouseOver:function () {
        var a = this.chart, b = a.hoverSeries;
        if (qa || !a.mouseIsDown) {
            if (b && b !== this)b.onMouseOut();
            this.options.events.mouseOver && S(this, "mouseOver");
            this.setState(ab);
            a.hoverSeries = this
        }
    }, onMouseOut:function () {
        var a = this.options, b = this.chart, c = b.tooltip, d = b.hoverPoint;
        if (d)d.onMouseOut();
        this && a.events.mouseOut && S(this, "mouseOut");
        c && !a.stickyTracking && !c.shared && c.hide();
        this.setState();
        b.hoverSeries = null
    }, animate:function (a) {
        var b = this.chart,
            c = this.clipRect, d = this.options.animation;
        d && !pb(d) && (d = {});
        if (a) {
            if (!c.isAnimating)c.attr("width", 0), c.isAnimating = !0
        } else c.animate({width:b.plotSizeX}, d), this.animate = null
    }, drawPoints:function () {
        var a, b = this.points, c = this.chart, d, e, f, g, h, j;
        if (this.options.marker.enabled)for (f = b.length; f--;)if (g = b[f], d = g.plotX, e = g.plotY, j = g.graphic, e !== C && !isNaN(e))if (a = g.pointAttr[g.selected ? "select" : ma], h = a.r, j)j.animate(I({x:d - h, y:e - h}, j.symbolName ? {width:2 * h, height:2 * h} : {})); else if (h > 0)g.graphic = c.renderer.symbol(r(g.marker &&
            g.marker.symbol, this.symbol), d - h, e - h, 2 * h, 2 * h).attr(a).add(this.group)
    }, convertAttribs:function (a, b, c, d) {
        var e = this.pointAttrToOptions, f, g, h = {}, a = a || {}, b = b || {}, c = c || {}, d = d || {};
        for (f in e)g = e[f], h[f] = r(a[g], b[f], c[f], d[f]);
        return h
    }, getAttribs:function () {
        var a = this, b = V[a.type].marker ? a.options.marker : a.options, c = b.states, d = c[ab], e, f = a.color, g = {stroke:f, fill:f}, h = a.points, j = [], k, i = a.pointAttrToOptions, l;
        a.options.marker ? (d.radius = d.radius || b.radius + 2, d.lineWidth = d.lineWidth || b.lineWidth + 1) : d.color = d.color ||
            Da(d.color || f).brighten(d.brightness).get();
        j[ma] = a.convertAttribs(b, g);
        n([ab, "select"], function (b) {
            j[b] = a.convertAttribs(c[b], j[ma])
        });
        a.pointAttr = j;
        for (f = h.length; f--;) {
            g = h[f];
            if ((b = g.options && g.options.marker || g.options) && b.enabled === !1)b.radius = 0;
            e = !1;
            if (g.options)for (l in i)z(b[i[l]]) && (e = !0);
            if (e) {
                k = [];
                c = b.states || {};
                e = c[ab] = c[ab] || {};
                if (!a.options.marker)e.color = Da(e.color || g.options.color).brighten(e.brightness || d.brightness).get();
                k[ma] = a.convertAttribs(b, j[ma]);
                k[ab] = a.convertAttribs(c[ab],
                    j[ab], k[ma]);
                k.select = a.convertAttribs(c.select, j.select, k[ma])
            } else k = j;
            g.pointAttr = k
        }
    }, destroy:function () {
        var a = this, b = a.chart, c = a.clipRect, d = /AppleWebKit\/533/.test(jb), e, f, g = a.data || [], h, j, k;
        S(a, "destroy");
        ra(a);
        n(["xAxis", "yAxis"], function (b) {
            if (k = a[b])Gb(k.series, a), k.isDirty = !0
        });
        a.legendItem && a.chart.legend.destroyItem(a);
        for (f = g.length; f--;)(h = g[f]) && h.destroy && h.destroy();
        a.points = null;
        if (c && c !== b.clipRect)a.clipRect = c.destroy();
        n(["area", "graph", "dataLabelsGroup", "group", "tracker"], function (b) {
            a[b] &&
            (e = d && b === "group" ? "hide" : "destroy", a[b][e]())
        });
        if (b.hoverSeries === a)b.hoverSeries = null;
        Gb(b.series, a);
        for (j in a)delete a[j]
    }, drawDataLabels:function () {
        if (this.options.dataLabels.enabled) {
            var a = this, b, c, d = a.points, e = a.options, f = e.dataLabels, g, h, j, k = a.dataLabelsGroup, i = a.chart, l = a.xAxis, l = l ? l.left : i.plotLeft, m = a.yAxis, m = m ? m.top : i.plotTop, p = i.renderer, t = i.inverted, x = a.type, u = e.stacking, w = x === "column" || x === "bar", v = f.verticalAlign === null, q = f.y === null, aa;
            w && (u ? (v && (f = G(f, {verticalAlign:"middle"})), q &&
                (f = G(f, {y:{top:14, middle:4, bottom:-6}[f.verticalAlign]}))) : v && (f = G(f, {verticalAlign:"top"})));
            k ? k.translate(l, m) : k = a.dataLabelsGroup = p.g("data-labels").attr({visibility:a.visible ? Ya : Ua, zIndex:6}).translate(l, m).add();
            h = f;
            n(d, function (d) {
                aa = d.dataLabel;
                f = h;
                (g = d.options) && g.dataLabels && (f = G(f, g.dataLabels));
                if (aa && a.isCartesian && !i.isInsidePlot(d.plotX, d.plotY))d.dataLabel = aa.destroy(); else if (f.enabled) {
                    j = f.formatter.call(d.getLabelConfig(), f);
                    var l = d.barX, m = l && l + d.barW / 2 || d.plotX || -999, n = r(d.plotY,
                        -999), v = f.align, y = q ? d.y >= 0 ? -6 : 12 : f.y;
                    b = (t ? i.plotWidth - n : m) + f.x;
                    c = (t ? i.plotHeight - m : n) + y;
                    x === "column" && (b += {left:-1, right:1}[v] * d.barW / 2 || 0);
                    !u && t && d.y < 0 && (v = "right", b -= 10);
                    f.style.color = r(f.color, f.style.color, a.color, "black");
                    if (aa)t && !f.y && (c = c + M(aa.styles.lineHeight) * 0.9 - aa.getBBox().height / 2), aa.attr({text:j}).animate({x:b, y:c}); else if (z(j))aa = d.dataLabel = p.text(j, b, c).attr({align:v, rotation:f.rotation, zIndex:1}).css(f.style).add(k), t && !f.y && aa.attr({y:c + M(aa.styles.lineHeight) * 0.9 - aa.getBBox().height /
                        2});
                    if (w && e.stacking && aa)m = d.barY, n = d.barW, d = d.barH, aa.align(f, null, {x:t ? i.plotWidth - m - d : l, y:t ? i.plotHeight - l - n : m, width:t ? d : n, height:t ? n : d})
                }
            })
        }
    }, drawGraph:function () {
        var a = this, b = a.options, c = a.graph, d = [], e, f = a.area, g = a.group, h = b.lineColor || a.color, j = b.lineWidth, k = b.dashStyle, i, l = a.chart.renderer, m = a.yAxis.getThreshold(b.threshold), p = /^area/.test(a.type), t = [], x = [];
        n(a.segments, function (c) {
            i = [];
            n(c, function (d, e) {
                a.getPointSpline ? i.push.apply(i, a.getPointSpline(c, d, e)) : (i.push(e ? ja : ua), e && b.step && i.push(d.plotX,
                    c[e - 1].plotY), i.push(d.plotX, d.plotY))
            });
            c.length > 1 ? d = d.concat(i) : t.push(c[0]);
            if (p) {
                var e = [], f, g = i.length;
                for (f = 0; f < g; f++)e.push(i[f]);
                g === 3 && e.push(ja, i[1], i[2]);
                if (b.stacking && a.type !== "areaspline")for (f = c.length - 1; f >= 0; f--)f < c.length - 1 && b.step && e.push(c[f + 1].plotX, c[f].yBottom), e.push(c[f].plotX, c[f].yBottom); else e.push(ja, c[c.length - 1].plotX, m, ja, c[0].plotX, m);
                x = x.concat(e)
            }
        });
        a.graphPath = d;
        a.singlePoints = t;
        if (p)e = r(b.fillColor, Da(a.color).setOpacity(b.fillOpacity || 0.75).get()), f ? f.animate({d:x}) :
            a.area = a.chart.renderer.path(x).attr({fill:e}).add(g);
        if (c)Kb(c), c.animate({d:d}); else if (j) {
            c = {stroke:h, "stroke-width":j};
            if (k)c.dashstyle = k;
            a.graph = l.path(d).attr(c).add(g).shadow(b.shadow)
        }
    }, render:function () {
        var a = this, b = a.chart, c, d, e = a.options, f = e.clip !== !1, g = e.animation, h = g && a.animate, g = h ? g && g.duration || 500 : 0, j = a.clipRect, k = b.renderer;
        if (!j && (j = a.clipRect = !b.hasRendered && b.clipRect ? b.clipRect : k.clipRect(0, 0, b.plotSizeX, b.plotSizeY + 1), !b.clipRect))b.clipRect = j;
        if (!a.group)c = a.group = k.g("series"),
            b.inverted && (d = function () {
                c.attr({width:b.plotWidth, height:b.plotHeight}).invert()
            }, d(), U(b, "resize", d), U(a, "destroy", function () {
                ra(b, "resize", d)
            })), f && c.clip(j), c.attr({visibility:a.visible ? Ya : Ua, zIndex:e.zIndex}).translate(a.xAxis.left, a.yAxis.top).add(b.seriesGroup);
        a.drawDataLabels();
        h && a.animate(!0);
        a.getAttribs();
        a.drawGraph && a.drawGraph();
        a.drawPoints();
        a.options.enableMouseTracking !== !1 && a.drawTracker();
        h && a.animate();
        setTimeout(function () {
            j.isAnimating = !1;
            if ((c = a.group) && j !== b.clipRect &&
                j.renderer) {
                if (f)c.clip(a.clipRect = b.clipRect);
                j.destroy()
            }
        }, g);
        a.isDirty = a.isDirtyData = !1
    }, redraw:function () {
        var a = this.chart, b = this.isDirtyData, c = this.group;
        c && (a.inverted && c.attr({width:a.plotWidth, height:a.plotHeight}), c.animate({translateX:this.xAxis.left, translateY:this.yAxis.top}));
        this.translate();
        this.setTooltipPoints(!0);
        this.render();
        b && S(this, "updatedData")
    }, setState:function (a) {
        var b = this.options, c = this.graph, d = b.states, b = b.lineWidth, a = a || ma;
        if (this.state !== a)this.state = a, d[a] && d[a].enabled ===
            !1 || (a && (b = d[a].lineWidth || b + 1), c && !c.dashstyle && c.attr({"stroke-width":b}, a ? 0 : 500))
    }, setVisible:function (a, b) {
        var c = this.chart, d = this.legendItem, e = this.group, f = this.tracker, g = this.dataLabelsGroup, h, j = this.points, k = c.options.chart.ignoreHiddenSeries;
        h = this.visible;
        h = (this.visible = a = a === C ? !h : a) ? "show" : "hide";
        if (e)e[h]();
        if (f)f[h](); else if (j)for (e = j.length; e--;)if (f = j[e], f.tracker)f.tracker[h]();
        if (g)g[h]();
        d && c.legend.colorizeItem(this, a);
        this.isDirty = !0;
        this.options.stacking && n(c.series, function (a) {
            if (a.options.stacking &&
                a.visible)a.isDirty = !0
        });
        if (k)c.isDirtyBox = !0;
        b !== !1 && c.redraw();
        S(this, h)
    }, show:function () {
        this.setVisible(!0)
    }, hide:function () {
        this.setVisible(!1)
    }, select:function (a) {
        this.selected = a = a === C ? !this.selected : a;
        if (this.checkbox)this.checkbox.checked = a;
        S(this, a ? "select" : "unselect")
    }, drawTracker:function () {
        var a = this, b = a.options, c = [].concat(a.graphPath), d = c.length, e = a.chart, f = e.renderer, g = e.options.tooltip.snap, h = a.tracker, j = b.cursor, j = j && {cursor:j}, k = a.singlePoints, i;
        if (d)for (i = d + 1; i--;)c[i] === ua && c.splice(i +
            1, 0, c[i + 1] - g, c[i + 2], ja), (i && c[i] === ua || i === d) && c.splice(i, 0, ja, c[i - 2] + g, c[i - 1]);
        for (i = 0; i < k.length; i++)d = k[i], c.push(ua, d.plotX - g, d.plotY, ja, d.plotX + g, d.plotY);
        h ? h.attr({d:c}) : (h = f.g().clip(a.clipRect).add(e.trackerGroup), a.tracker = f.path(c).attr({isTracker:!0, stroke:Gc, fill:na, "stroke-width":b.lineWidth + 2 * g, visibility:a.visible ? Ya : Ua, zIndex:b.zIndex || 1}).on(qa ? "touchstart" : "mouseover",
            function () {
                if (e.hoverSeries !== a)a.onMouseOver()
            }).on("mouseout",
            function () {
                if (!b.stickyTracking)a.onMouseOut()
            }).css(j).add(h))
    }};
    y = oa(W);
    la.line = y;
    y = oa(W, {type:"area", useThreshold:!0});
    la.area = y;
    y = oa(W, {type:"spline", getPointSpline:function (a, b, c) {
        var d = b.plotX, e = b.plotY, f = a[c - 1], g = a[c + 1], h, j, k, i;
        if (c && c < a.length - 1) {
            a = f.plotY;
            k = g.plotX;
            var g = g.plotY, l;
            h = (1.5 * d + f.plotX) / 2.5;
            j = (1.5 * e + a) / 2.5;
            k = (1.5 * d + k) / 2.5;
            i = (1.5 * e + g) / 2.5;
            l = (i - j) * (k - d) / (k - h) + e - i;
            j += l;
            i += l;
            j > a && j > e ? (j = P(a, e), i = 2 * e - j) : j < a && j < e && (j = va(a, e), i = 2 * e - j);
            i > g && i > e ? (i = P(g, e), j = 2 * e - i) : i < g && i < e && (i = va(g, e), j = 2 * e - i);
            b.rightContX = k;
            b.rightContY = i
        }
        c ? (b = ["C", f.rightContX || f.plotX,
            f.rightContY || f.plotY, h || d, j || e, d, e], f.rightContX = f.rightContY = null) : b = [ua, d, e];
        return b
    }});
    la.spline = y;
    y = oa(y, {type:"areaspline", useThreshold:!0});
    la.areaspline = y;
    var fc = oa(W, {type:"column", useThreshold:!0, tooltipOutsidePlot:!0, pointAttrToOptions:{stroke:"borderColor", "stroke-width":"borderWidth", fill:"color", r:"borderRadius"}, init:function () {
        W.prototype.init.apply(this, arguments);
        var a = this, b = a.chart;
        b.hasRendered && n(b.series, function (b) {
            if (b.type === a.type)b.isDirty = !0
        })
    }, translate:function () {
        var a =
            this, b = a.chart, c = a.options, d = c.stacking, e = c.borderWidth, f = 0, g = a.xAxis, h = g.reversed, j = {}, k, i;
        W.prototype.translate.apply(a);
        n(b.series, function (b) {
            if (b.type === a.type && b.visible && a.options.group === b.options.group)b.options.stacking ? (k = b.stackKey, j[k] === C && (j[k] = f++), i = j[k]) : i = f++, b.columnIndex = i
        });
        var l = a.points, g = Ja(g.translationSlope) * (g.ordinalSlope || g.closestPointRange || 1), m = g * c.groupPadding, p = (g - 2 * m) / f, t = c.pointWidth, x = z(t) ? (p - t) / 2 : p * c.pointPadding, u = cc(P(r(t, p - 2 * x), 1)), w = x + (m + ((h ? f - a.columnIndex :
            a.columnIndex) || 0) * p - g / 2) * (h ? -1 : 1), v = a.yAxis.getThreshold(c.threshold), q = r(c.minPointLength, 5);
        n(l, function (f) {
            var g = f.plotY, h = f.yBottom || v, i = f.plotX + w, j = cc(va(g, h)), k = cc(P(g, h) - j), l = a.yAxis.stacks[(f.y < 0 ? "-" : "") + a.stackKey], m;
            d && a.visible && l && l[f.x] && l[f.x].setOffset(w, u);
            Ja(k) < q && (q && (k = q, j = Ja(j - v) > q ? h - q : v - (g <= v ? q : 0)), m = j - 3);
            I(f, {barX:i, barY:j, barW:u, barH:k});
            f.shapeType = "rect";
            g = I(b.renderer.Element.prototype.crisp.apply({}, [e, i, j, u, k]), {r:c.borderRadius});
            e % 2 && (g.y -= 1, g.height += 1);
            f.shapeArgs =
                g;
            f.trackerArgs = z(m) && G(f.shapeArgs, {height:P(6, k + 3), y:m})
        })
    }, getSymbol:function () {
    }, drawGraph:function () {
    }, drawPoints:function () {
        var a = this, b = a.options, c = a.chart.renderer, d, e;
        n(a.points, function (f) {
            var g = f.plotY;
            if (g !== C && !isNaN(g) && f.y !== null)d = f.graphic, e = f.shapeArgs, d ? (Kb(d), d.animate(e)) : f.graphic = d = c[f.shapeType](e).attr(f.pointAttr[f.selected ? "select" : ma]).add(a.group).shadow(b.shadow)
        })
    }, drawTracker:function () {
        var a = this, b = a.chart, c = b.renderer, d, e, f = +new Date, g = a.options, h = g.cursor, j = h && {cursor:h},
            k, i;
        a.isCartesian && (k = c.g().clip(a.clipRect).add(b.trackerGroup));
        n(a.points, function (h) {
            e = h.tracker;
            d = h.trackerArgs || h.shapeArgs;
            delete d.strokeWidth;
            if (h.y !== null)e ? e.attr(d) : h.tracker = c[h.shapeType](d).attr({isTracker:f, fill:Gc, visibility:a.visible ? Ya : Ua, zIndex:g.zIndex || 1}).on(qa ? "touchstart" : "mouseover",
                function (c) {
                    i = c.relatedTarget || c.fromElement;
                    if (b.hoverSeries !== a && Z(i, "isTracker") !== f)a.onMouseOver();
                    h.onMouseOver()
                }).on("mouseout",
                function (b) {
                    if (!g.stickyTracking && (i = b.relatedTarget || b.toElement,
                        Z(i, "isTracker") !== f))a.onMouseOut()
                }).css(j).add(h.group || k)
        })
    }, animate:function (a) {
        var b = this, c = b.points;
        if (!a)n(c, function (a) {
            var c = a.graphic, a = a.shapeArgs;
            c && (c.attr({height:0, y:b.yAxis.translate(0, 0, 1)}), c.animate({height:a.height, y:a.y}, b.options.animation))
        }), b.animate = null
    }, remove:function () {
        var a = this, b = a.chart;
        b.hasRendered && n(b.series, function (b) {
            if (b.type === a.type)b.isDirty = !0
        });
        W.prototype.remove.apply(a, arguments)
    }});
    la.column = fc;
    y = oa(fc, {type:"bar", init:function () {
        this.inverted = !0;
        fc.prototype.init.apply(this, arguments)
    }});
    la.bar = y;
    y = oa(W, {type:"scatter", translate:function () {
        var a = this;
        W.prototype.translate.apply(a);
        n(a.points, function (b) {
            b.shapeType = "circle";
            b.shapeArgs = {x:b.plotX, y:b.plotY, r:a.chart.options.tooltip.snap}
        })
    }, drawTracker:function () {
        var a = this, b = a.options.cursor, c = b && {cursor:b}, d;
        n(a.points, function (b) {
            (d = b.graphic) && d.attr({isTracker:!0}).on(qa ? "touchstart" : "mouseover",
                function () {
                    a.onMouseOver();
                    b.onMouseOver()
                }).on("mouseout",
                function () {
                    if (!a.options.stickyTracking)a.onMouseOut()
                }).css(c)
        })
    }});
    la.scatter = y;
    y = oa(eb, {init:function () {
        eb.prototype.init.apply(this, arguments);
        var a = this, b;
        I(a, {visible:a.visible !== !1, name:r(a.name, "Slice")});
        b = function () {
            a.slice()
        };
        U(a, "select", b);
        U(a, "unselect", b);
        return a
    }, setVisible:function (a) {
        var b = this.series.chart, c = this.tracker, d = this.dataLabel, e = this.connector, f = this.shadowGroup, g;
        g = (this.visible = a = a === C ? !this.visible : a) ? "show" : "hide";
        this.group[g]();
        if (c)c[g]();
        if (d)d[g]();
        if (e)e[g]();
        if (f)f[g]();
        this.legendItem && b.legend.colorizeItem(this, a)
    }, slice:function (a, b, c) {
        var d = this.series.chart, e = this.slicedTranslation;
        Jb(c, d);
        r(b, !0);
        a = this.sliced = z(a) ? a : !this.sliced;
        a = {translateX:a ? e[0] : d.plotLeft, translateY:a ? e[1] : d.plotTop};
        this.group.animate(a);
        this.shadowGroup && this.shadowGroup.animate(a)
    }});
    y = oa(W, {type:"pie", isCartesian:!1, pointClass:y, pointAttrToOptions:{stroke:"borderColor", "stroke-width":"borderWidth", fill:"color"}, getColor:function () {
        this.initialColor = this.chart.counters.color
    }, animate:function () {
        var a = this;
        n(a.points, function (b) {
            var c = b.graphic,
                b = b.shapeArgs, d = -Na / 2;
            c && (c.attr({r:0, start:d, end:d}), c.animate({r:b.r, start:b.start, end:b.end}, a.options.animation))
        });
        a.animate = null
    }, setData:function () {
        W.prototype.setData.apply(this, arguments);
        this.processData();
        this.generatePoints()
    }, translate:function () {
        this.generatePoints();
        var a = 0, b = -0.25, c = this.options, d = c.slicedOffset, e = d + c.borderWidth, f = c.center.concat([c.size, c.innerSize || 0]), g = this.chart, h = g.plotWidth, j = g.plotHeight, k, i, l, m = this.points, p = 2 * Na, t, r = va(h, j), u, w, v, q = c.dataLabels.distance,
            f = kb(f, function (a, b) {
                return(u = /%$/.test(a)) ? [h, j, r, r][b] * M(a) / 100 : a
            });
        this.getX = function (a, b) {
            l = ta.asin((a - f[1]) / (f[2] / 2 + q));
            return f[0] + (b ? -1 : 1) * Ma(l) * (f[2] / 2 + q)
        };
        this.center = f;
        n(m, function (b) {
            a += b.y
        });
        n(m, function (c) {
            t = a ? c.y / a : 0;
            k = B(b * p * 1E3) / 1E3;
            b += t;
            i = B(b * p * 1E3) / 1E3;
            c.shapeType = "arc";
            c.shapeArgs = {x:f[0], y:f[1], r:f[2] / 2, innerR:f[3] / 2, start:k, end:i};
            l = (i + k) / 2;
            c.slicedTranslation = kb([Ma(l) * d + g.plotLeft, Ca(l) * d + g.plotTop], B);
            w = Ma(l) * f[2] / 2;
            v = Ca(l) * f[2] / 2;
            c.tooltipPos = [f[0] + w * 0.7, f[1] + v * 0.7];
            c.labelPos =
                [f[0] + w + Ma(l) * q, f[1] + v + Ca(l) * q, f[0] + w + Ma(l) * e, f[1] + v + Ca(l) * e, f[0] + w, f[1] + v, q < 0 ? "center" : l < p / 4 ? "left" : "right", l];
            c.percentage = t * 100;
            c.total = a
        });
        this.setTooltipPoints()
    }, render:function () {
        this.getAttribs();
        this.drawPoints();
        this.options.enableMouseTracking !== !1 && this.drawTracker();
        this.drawDataLabels();
        this.options.animation && this.animate && this.animate();
        this.isDirty = !1
    }, drawPoints:function () {
        var a = this.chart, b = a.renderer, c, d, e, f = this.options.shadow, g, h;
        n(this.points, function (j) {
            d = j.graphic;
            h = j.shapeArgs;
            e = j.group;
            g = j.shadowGroup;
            if (f && !g)g = j.shadowGroup = b.g("shadow").attr({zIndex:4}).add();
            if (!e)e = j.group = b.g("point").attr({zIndex:5}).add();
            c = j.sliced ? j.slicedTranslation : [a.plotLeft, a.plotTop];
            e.translate(c[0], c[1]);
            g && g.translate(c[0], c[1]);
            d ? d.animate(h) : j.graphic = b.arc(h).attr(I(j.pointAttr[ma], {"stroke-linejoin":"round"})).add(j.group).shadow(f, g);
            j.visible === !1 && j.setVisible(!1)
        })
    }, drawDataLabels:function () {
        var a = this.data, b, c = this.chart, d = this.options.dataLabels, e = r(d.connectorPadding, 10),
            f = r(d.connectorWidth, 1), g, h, j = r(d.softConnector, !0), k = d.distance, i = this.center, l = i[2] / 2, i = i[1], m = k > 0, p = [
                [],
                []
            ], t, x, u, w, v = 2, q;
        if (d.enabled) {
            W.prototype.drawDataLabels.apply(this);
            n(a, function (a) {
                a.dataLabel && p[a.labelPos[7] < Na / 2 ? 0 : 1].push(a)
            });
            p[1].reverse();
            w = function (a, b) {
                return b.y - a.y
            };
            for (a = p[0][0] && p[0][0].dataLabel && M(p[0][0].dataLabel.styles.lineHeight); v--;) {
                var y = [], B = [], H = p[v], z = H.length, s;
                for (q = i - l - k; q <= i + l + k; q += a)y.push(q);
                u = y.length;
                if (z > u) {
                    h = [].concat(H);
                    h.sort(w);
                    for (q = z; q--;)h[q].rank =
                        q;
                    for (q = z; q--;)H[q].rank >= u && H.splice(q, 1);
                    z = H.length
                }
                for (q = 0; q < z; q++) {
                    b = H[q];
                    h = b.labelPos;
                    b = 9999;
                    for (x = 0; x < u; x++)g = Ja(y[x] - h[1]), g < b && (b = g, s = x);
                    if (s < q && y[q] !== null)s = q; else for (u < z - q + s && y[q] !== null && (s = u - z + q); y[s] === null;)s++;
                    B.push({i:s, y:y[s]});
                    y[s] = null
                }
                B.sort(w);
                for (q = 0; q < z; q++) {
                    b = H[q];
                    h = b.labelPos;
                    g = b.dataLabel;
                    x = B.pop();
                    t = h[1];
                    u = b.visible === !1 ? Ua : Ya;
                    s = x.i;
                    x = x.y;
                    if (t > x && y[s + 1] !== null || t < x && y[s - 1] !== null)x = t;
                    t = this.getX(s === 0 || s === y.length - 1 ? t : x, v);
                    g.attr({visibility:u, align:h[6]})[g.moved ? "animate" :
                        "attr"]({x:t + d.x + ({left:e, right:-e}[h[6]] || 0), y:x + d.y});
                    g.moved = !0;
                    if (m && f)g = b.connector, h = j ? [ua, t + (h[6] === "left" ? 5 : -5), x, "C", t, x, 2 * h[2] - h[4], 2 * h[3] - h[5], h[2], h[3], ja, h[4], h[5]] : [ua, t + (h[6] === "left" ? 5 : -5), x, ja, h[2], h[3], ja, h[4], h[5]], g ? (g.animate({d:h}), g.attr("visibility", u)) : b.connector = g = this.chart.renderer.path(h).attr({"stroke-width":f, stroke:d.connectorColor || b.color || "#606060", visibility:u, zIndex:3}).translate(c.plotLeft, c.plotTop).add()
                }
            }
        }
    }, drawTracker:fc.prototype.drawTracker, getSymbol:function () {
    }});
    la.pie = y;
    var L = W.prototype, Uc = L.processData, Vc = L.generatePoints, Wc = L.destroy, Xc = L.tooltipHeaderFormatter, y = {approximation:"average", groupPixelWidth:2, dateTimeLabelFormats:ha(rb, ["%A, %b %e, %H:%M:%S.%L", "%A, %b %e, %H:%M:%S.%L", "-%H:%M:%S.%L"], fb, ["%A, %b %e, %H:%M:%S", "%A, %b %e, %H:%M:%S", "-%H:%M:%S"], Za, ["%A, %b %e, %H:%M", "%A, %b %e, %H:%M", "-%H:%M"], pa, ["%A, %b %e, %H:%M", "%A, %b %e, %H:%M", "-%H:%M"], ia, ["%A, %b %e, %Y", "%A, %b %e", "-%A, %b %e, %Y"], Ka, ["Week from %A, %b %e, %Y", "%A, %b %e",
        "-%A, %b %e, %Y"], Aa, ["%B %Y", "%B", "-%B %Y"], Ba, ["%Y", "%Y", "-%Y"])}, Jc = [
        [rb, [1, 2, 5, 10, 20, 25, 50, 100, 200, 500]],
        [fb, [1, 2, 5, 10, 15, 30]],
        [Za, [1, 2, 5, 10, 15, 30]],
        [pa, [1, 2, 3, 4, 6, 8, 12]],
        [ia, [1]],
        [Ka, [1]],
        [Aa, [1, 3, 6]],
        [Ba, null]
    ], lb = {sum:function (a) {
        var b = a.length, c;
        if (!b && a.hasNulls)c = null; else if (b)for (c = 0; b--;)c += a[b];
        return c
    }, average:function (a) {
        var b = a.length, a = lb.sum(a);
        typeof a === "number" && b && (a /= b);
        return a
    }, open:function (a) {
        return a.length ? a[0] : a.hasNulls ? null : C
    }, high:function (a) {
        return a.length ? Cb(a) :
            a.hasNulls ? null : C
    }, low:function (a) {
        return a.length ? Hb(a) : a.hasNulls ? null : C
    }, close:function (a) {
        return a.length ? a[a.length - 1] : a.hasNulls ? null : C
    }, ohlc:function (a, b, c, d) {
        a = lb.open(a);
        b = lb.high(b);
        c = lb.low(c);
        d = lb.close(d);
        if (typeof a === "number" || typeof b === "number" || typeof c === "number" || typeof d === "number")return[a, b, c, d]
    }};
    L.groupData = function (a, b, c, d) {
        var e = this.data, f = this.options.data, g = [], h = [], j = a.length, k, i, l = !!b;
        i = [];
        var m = [], n = [], t = [], r = typeof d === "function" ? d : lb[d], u;
        for (u = 0; u <= j; u++) {
            for (; c[1] !==
                       C && a[u] >= c[1] || u === j;)if (k = c.shift(), i = r(i, m, n, t), i !== C && (g.push(k), h.push(i)), i = [], m = [], n = [], t = [], u === j)break;
            if (u === j)break;
            k = l ? b[u] : null;
            if (d === "ohlc") {
                k = this.cropStart + u;
                var w = e && e[k] || this.pointClass.prototype.applyOptions.apply({}, [f[k]]);
                k = w.open;
                var v = w.high, q = w.low, w = w.close;
                if (typeof k === "number")i.push(k); else if (k === null)i.hasNulls = !0;
                if (typeof v === "number")m.push(v); else if (v === null)m.hasNulls = !0;
                if (typeof q === "number")n.push(q); else if (q === null)n.hasNulls = !0;
                if (typeof w === "number")t.push(w);
                else if (w === null)t.hasNulls = !0
            } else if (typeof k === "number")i.push(k); else if (k === null)i.hasNulls = !0
        }
        return[g, h]
    };
    L.processData = function () {
        var a = this.options, b = a.dataGrouping, c = b && b.enabled, d = this.groupedData, e;
        this.forceCrop = c;
        n(d || [], function (a, b) {
            a && (d[b] = a.destroy ? a.destroy() : null)
        });
        if (Uc.apply(this, arguments) !== !1 && c) {
            var f;
            f = this.chart;
            var c = this.processedXData, g = this.processedYData, h = f.plotSizeX, j = this.xAxis, k = r(j.groupPixelWidth, b.groupPixelWidth), i = c.length, l = f.series, m = this.pointRange;
            if (!j.groupPixelWidth) {
                for (f =
                         l.length; f--;)l[f].xAxis === j && l[f].options.dataGrouping && (k = P(k, l[f].options.dataGrouping.groupPixelWidth));
                j.groupPixelWidth = k
            }
            if (i > h / k || b.forced) {
                e = !0;
                this.points = null;
                f = j.getExtremes();
                i = f.min;
                l = f.max;
                f = j.getGroupIntervalFactor && j.getGroupIntervalFactor(i, l, c) || 1;
                h = k * (l - i) / h * f;
                j = (j.getNonLinearTimeTicks || Wb)(tc(h, b.units || Jc), i, l, null, c, this.closestPointRange);
                g = L.groupData.apply(this, [c, g, j, b.approximation]);
                c = g[0];
                g = g[1];
                if (b.smoothed) {
                    f = c.length - 1;
                    for (c[f] = l; f-- && f > 0;)c[f] += h / 2;
                    c[0] = i
                }
                this.currentDataGrouping =
                    j.info;
                if (a.pointRange === null)this.pointRange = j.info.totalRange;
                this.closestPointRange = j.info.totalRange;
                this.processedXData = c;
                this.processedYData = g
            } else this.currentDataGrouping = null, this.pointRange = m;
            this.hasGroupedData = e
        }
    };
    L.generatePoints = function () {
        Vc.apply(this);
        this.groupedData = this.hasGroupedData ? this.points : null
    };
    L.tooltipHeaderFormatter = function (a) {
        var b = this.tooltipOptions, c = this.options.dataGrouping, d = b.xDateFormat, e, f = this.xAxis, g, h;
        if (f && f.options.type === "datetime" && c) {
            g = this.currentDataGrouping;
            c = c.dateTimeLabelFormats;
            if (g)f = c[g.unitName], g.count === 1 ? d = f[0] : (d = f[1], e = f[2]); else if (!d)for (h in E)if (E[h] >= f.closestPointRange) {
                d = c[h][0];
                break
            }
            d = ub(d, a);
            e && (d += ub(e, a + g.totalRange - 1));
            a = b.headerFormat.replace("{point.key}", d)
        } else a = Xc.apply(this, [a]);
        return a
    };
    L.destroy = function () {
        for (var a = this.groupedData || [], b = a.length; b--;)a[b] && a[b].destroy();
        Wc.apply(this)
    };
    V.line.dataGrouping = V.spline.dataGrouping = V.area.dataGrouping = V.areaspline.dataGrouping = y;
    V.column.dataGrouping = G(y, {approximation:"sum",
        groupPixelWidth:10});
    V.ohlc = G(V.column, {lineWidth:1, dataGrouping:{approximation:"ohlc", enabled:!0, groupPixelWidth:5}, states:{hover:{lineWidth:3}}});
    var y = oa(eb, {applyOptions:function (a) {
        var b = this.series, c = 0;
        if (typeof a === "object" && typeof a.length !== "number")I(this, a), this.options = a; else if (a.length) {
            if (a.length === 5) {
                if (typeof a[0] === "string")this.name = a[0]; else if (typeof a[0] === "number")this.x = a[0];
                c++
            }
            this.open = a[c++];
            this.high = a[c++];
            this.low = a[c++];
            this.close = a[c++]
        }
        this.y = this.high;
        if (this.x ===
            C && b)this.x = b.autoIncrement();
        return this
    }, tooltipFormatter:function () {
        var a = this.series;
        return['<span style="color:' + a.color + ';font-weight:bold">', this.name || a.name, "</span><br/>Open: ", this.open, "<br/>High: ", this.high, "<br/>Low: ", this.low, "<br/>Close: ", this.close, "<br/>"].join("")
    }}), qc = oa(la.column, {type:"ohlc", valueCount:4, pointClass:y, useThreshold:!1, pointAttrToOptions:{stroke:"color", "stroke-width":"lineWidth"}, translate:function () {
        var a = this.yAxis;
        la.column.prototype.translate.apply(this);
        n(this.points, function (b) {
            if (b.open !== null)b.plotOpen = a.translate(b.open, 0, 1, 0, 1);
            if (b.close !== null)b.plotClose = a.translate(b.close, 0, 1, 0, 1)
        })
    }, drawPoints:function () {
        var a = this, b = a.chart, c, d, e, f, g, h, j, k;
        n(a.points, function (i) {
            if (i.plotY !== C)j = i.graphic, c = i.pointAttr[i.selected ? "selected" : ""], f = c["stroke-width"] % 2 / 2, k = B(i.plotX) + f, g = B(i.barW / 2), h = ["M", k, B(i.yBottom), "L", k, B(i.plotY)], i.open !== null && (d = B(i.plotOpen) + f, h.push("M", k, d, "L", k - g, d)), i.close !== null && (e = B(i.plotClose) + f, h.push("M", k, e, "L",
                k + g, e)), j ? j.animate({d:h}) : i.graphic = b.renderer.path(h).attr(c).add(a.group)
        })
    }, animate:null});
    la.ohlc = qc;
    V.candlestick = G(V.column, {dataGrouping:{approximation:"ohlc", enabled:!0}, lineColor:"black", lineWidth:1, upColor:"white", states:{hover:{lineWidth:2}}});
    y = oa(qc, {type:"candlestick", pointAttrToOptions:{fill:"color", stroke:"lineColor", "stroke-width":"lineWidth"}, getAttribs:function () {
        qc.prototype.getAttribs.apply(this, arguments);
        var a = this.options, b = a.states, a = a.upColor, c = G(this.pointAttr);
        c[""].fill =
            a;
        c.hover.fill = b.hover.upColor || a;
        c.select.fill = b.select.upColor || a;
        n(this.points, function (a) {
            if (a.open < a.close)a.pointAttr = c
        })
    }, drawPoints:function () {
        var a = this, b = a.chart, c, d, e, f, g, h, j, k, i, l;
        n(a.points, function (m) {
            k = m.graphic;
            if (m.plotY !== C)c = m.pointAttr[m.selected ? "selected" : ""], h = c["stroke-width"] % 2 / 2, j = B(m.plotX) + h, d = B(m.plotOpen) + h, e = B(m.plotClose) + h, f = ta.min(d, e), g = ta.max(d, e), l = B(m.barW / 2), i = ["M", j - l, g, "L", j - l, f, "L", j + l, f, "L", j + l, g, "L", j - l, g, "M", j, g, "L", j, B(m.yBottom), "M", j, f, "L", j, B(m.plotY),
                "Z"], k ? k.animate({d:i}) : m.graphic = b.renderer.path(i).attr(c).add(a.group)
        })
    }});
    la.candlestick = y;
    var gc = Nb.prototype.symbols;
    V.flags = G(V.column, {dataGrouping:null, fillColor:"white", lineWidth:1, pointRange:0, shape:"flag", stackDistance:7, states:{hover:{lineColor:"black", fillColor:"#FCFFC5"}}, style:{fontSize:"11px", fontWeight:"bold", textAlign:"center"}, y:-30});
    la.flags = oa(la.column, {type:"flags", noSharedTooltip:!0, useThreshold:!1, init:W.prototype.init, pointAttrToOptions:{fill:"fillColor", stroke:"color",
        "stroke-width":"lineWidth", r:"radius"}, translate:function () {
        la.column.prototype.translate.apply(this);
        var a = this.chart, b = this.points, c = b.length - 1, d, e, f, g = (d = this.options.onSeries) && a.get(d), h, j, k;
        if (g) {
            h = g.points;
            d = h.length;
            for (b.sort(function (a, b) {
                return a.x - b.x
            }); d-- && b[c];)if (e = b[c], j = h[d], j.x <= e.x && (e.plotY = j.plotY, j.x < e.x && (k = h[d + 1]) && (e.plotY += (e.x - j.x) / (k.x - j.x) * (k.plotY - j.plotY)), c--, d++, c < 0))break
        }
        n(b, function (c, d) {
            if (!g)c.plotY = c.y === C ? a.plotHeight : c.plotY;
            if ((f = b[d - 1]) && f.plotX === c.plotX) {
                if (f.stackIndex ===
                    C)f.stackIndex = 0;
                c.stackIndex = f.stackIndex + 1
            }
        })
    }, drawPoints:function () {
        var a, b = this.points, c = this.chart.renderer, d, e, f = this.options, g = f.y, h = f.shape, j, k, i, l, m = f.lineWidth % 2 / 2, n;
        for (k = b.length; k--;)if (i = b[k], d = i.plotX + m, a = i.stackIndex, e = i.plotY + g + m - (a !== C && a * f.stackDistance), isNaN(e) && (e = 0), j = a ? C : i.plotX + m, n = a ? C : i.plotY, l = i.graphic, e !== C)a = i.pointAttr[i.selected ? "select" : ""], l ? l.attr({x:d, y:e, r:a.r, anchorX:j, anchorY:n}) : l = i.graphic = c.label(i.options.title || f.title || "A", d, e, h, j, n).css(G(f.style, i.style)).attr(a).attr({align:h ===
            "flag" ? "left" : "center", width:f.width, height:f.height}).add(this.group).shadow(f.shadow), j = l.box, a = j.getBBox(), i.shapeArgs = I(a, {x:d - (h === "flag" ? 0 : j.attr("width") / 2), y:e})
    }, drawTracker:function () {
        la.column.prototype.drawTracker.apply(this);
        n(this.points, function (a) {
            U(a.tracker.element, "mouseover", function () {
                a.graphic.toFront()
            })
        })
    }, tooltipFormatter:function (a) {
        return a.point.text
    }, animate:function () {
    }});
    gc.flag = function (a, b, c, d, e) {
        var f = e && e.anchorX || a, e = e && e.anchorY || b;
        return["M", f, e, "L", a, b + d, a, b,
            a + c, b, a + c, b + d, a, b + d, "M", f, e, "Z"]
    };
    n(["circle", "square"], function (a) {
        gc[a + "pin"] = function (b, c, d, e, f) {
            var g = f && f.anchorX, f = f && f.anchorY, b = gc[a](b, c, d, e);
            g && f && b.push("M", g, c + e, "L", g, f);
            return b
        }
    });
    Ob === Sb && n(["flag", "circlepin", "squarepin"], function (a) {
        Sb.prototype.symbols[a] = gc[a]
    });
    var hc = qa ? "touchstart" : "mousedown", Kc = qa ? "touchmove" : "mousemove", Lc = qa ? "touchend" : "mouseup", y = ha("linearGradient", {x1:0, y1:0, x2:0, y2:1}, "stops", [
        [0, "#FFF"],
        [1, "#CCC"]
    ]), Oa = [].concat(Jc);
    Oa[4] = [ia, [1, 2, 3, 4]];
    Oa[5] = [Ka, [1,
        2, 3]];
    I(ca, {navigator:{handles:{backgroundColor:"#FFF", borderColor:"#666"}, height:40, margin:10, maskFill:"rgba(255, 255, 255, 0.75)", outlineColor:"#444", outlineWidth:1, series:{type:"areaspline", color:"#4572A7", compare:null, fillOpacity:0.4, dataGrouping:{approximation:"average", groupPixelWidth:2, smoothed:!0, units:Oa}, dataLabels:{enabled:!1}, id:cb + "navigator-series", lineColor:"#4572A7", lineWidth:1, marker:{enabled:!1}, pointRange:0, shadow:!1}, xAxis:{tickWidth:0, lineWidth:0, gridLineWidth:1, tickPixelInterval:200,
        labels:{align:"left", x:3, y:-4}}, yAxis:{gridLineWidth:0, startOnTick:!1, endOnTick:!1, minPadding:0.1, maxPadding:0.1, labels:{enabled:!1}, title:{text:null}, tickWidth:0}}, scrollbar:{height:qa ? 20 : 14, barBackgroundColor:y, barBorderRadius:2, barBorderWidth:1, barBorderColor:"#666", buttonArrowColor:"#666", buttonBackgroundColor:y, buttonBorderColor:"#666", buttonBorderRadius:2, buttonBorderWidth:1, rifleColor:"#666", trackBackgroundColor:ha("linearGradient", {x1:0, y1:0, x2:0, y2:1}, "stops", [
        [0, "#EEE"],
        [1, "#FFF"]
    ]), trackBorderColor:"#CCC",
        trackBorderWidth:1}});
    Highcharts.Scroller = function (a) {
        function b(a, b) {
            var c = {fill:R.backgroundColor, stroke:R.borderColor, "stroke-width":1}, d;
            ca || (ha[b] = j.g().css({cursor:"e-resize"}).attr({zIndex:4 - b}).add(), d = j.rect(-4.5, 0, 9, 16, 3, 1).attr(c).add(ha[b]), ya.push(d), d = j.path(["M", -1.5, 4, "L", -1.5, 12, "M", 0.5, 4, "L", 0.5, 12]).attr(c).add(ha[b]), ya.push(d));
            ha[b].translate(S + J + parseInt(a, 10), F + ba / 2 - 8)
        }

        function c(a) {
            var b;
            ca || (pa[a] = j.g().add(fa), b = j.rect(-0.5, -0.5, J + 1, J + 1, u.buttonBorderRadius, u.buttonBorderWidth).attr({stroke:u.buttonBorderColor,
                "stroke-width":u.buttonBorderWidth, fill:u.buttonBackgroundColor}).add(pa[a]), ya.push(b), b = j.path(["M", J / 2 + (a ? -1 : 1), J / 2 - 3, "L", J / 2 + (a ? -1 : 1), J / 2 + 3, J / 2 + (a ? 2 : -2), J / 2]).attr({fill:u.buttonArrowColor}).add(pa[a]), ya.push(b));
            a && pa[a].attr({translateX:ka - J})
        }

        function d(d, e, f, g) {
            if (!isNaN(d)) {
                var h = u.barBorderWidth;
                W = F + N;
                m = r(s.left, a.plotLeft + J);
                p = r(s.len, a.plotWidth - 2 * J);
                S = m - J;
                ka = p + 2 * J;
                if (s.getExtremes) {
                    var k = a.xAxis[0].getExtremes(), n = k.dataMin === null, q = s.getExtremes(), t = va(k.dataMin, q.dataMin), k = P(k.dataMax,
                        q.dataMax);
                    !n && (t !== q.min || k !== q.max) && s.setExtremes(t, k, !0, !1)
                }
                f = r(f, s.translate(d));
                g = r(g, s.translate(e));
                ea = M(va(f, g));
                C = M(P(f, g));
                E = C - ea;
                if (!ca && (l && (ia = j.rect().attr({fill:i.maskFill, zIndex:3}).add(), la = j.rect().attr({fill:i.maskFill, zIndex:3}).add(), ma = j.path().attr({"stroke-width":Y, stroke:i.outlineColor, zIndex:3}).add()), w))fa = j.g().add(), d = u.trackBorderWidth, o = j.rect().attr({y:-d % 2 / 2, fill:u.trackBackgroundColor, stroke:u.trackBorderColor, "stroke-width":d, r:u.trackBorderRadius || 0, height:J}).add(fa),
                    na = j.rect().attr({y:-h % 2 / 2, height:J, fill:u.barBackgroundColor, stroke:u.barBorderColor, "stroke-width":h, r:Z}).add(fa), oa = j.path().attr({stroke:u.rifleColor, "stroke-width":1}).add(fa);
                l && (ia.attr({x:m, y:F, width:ea, height:ba}), la.attr({x:m + C, y:F, width:p - C, height:ba}), ma.attr({d:[ua, S, W, ja, m + ea + N, W, m + ea + N, W + V - J, ua, m + C - N, W + V - J, ja, m + C - N, W, S + ka, W]}), b(ea + N, 0), b(C + N, 1));
                w && (c(0), c(1), fa.translate(S, B(W + ba)), o.attr({width:ka}), na.attr({x:B(J + ea) + h % 2 / 2, width:E - h}), h = J + ea + E / 2 - 0.5, oa.attr({d:[ua, h - 3, J / 4, ja, h -
                    3, 2 * J / 3, ua, h, J / 4, ja, h, 2 * J / 3, ua, h + 3, J / 4, ja, h + 3, 2 * J / 3], visibility:E > 12 ? Ya : Ua}));
                ca = !0
            }
        }

        function e(b) {
            var b = a.tracker.normalizeMouseEvent(b), c = b.chartX, d = b.chartY, e = qa ? 10 : 7;
            if (d > F && d < F + ba + J)(d = !w || d < F + ba) && ta.abs(c - ea - m) < e ? (v = !0, z = C) : d && ta.abs(c - C - m) < e ? (q = !0, z = ea) : c > m + ea && c < m + C ? (y = c, T = L.cursor, L.cursor = "ew-resize", H = c - ea) : c > S && c < S + ka && (c = d ? c - m - E / 2 : c < m ? ea - va(10, E) : c > S + ka - J ? ea + va(10, E) : c < m + ea ? ea - E : C, c < 0 ? c = 0 : c + E > p && (c = p - E), c !== ea && a.xAxis[0].setExtremes(s.translate(c, !0), s.translate(c + E, !0), !0, !1));
            b.preventDefault &&
            b.preventDefault()
        }

        function f(b) {
            b = a.tracker.normalizeMouseEvent(b);
            b = b.chartX;
            b < m ? b = m : b > S + ka - J && (b = S + ka - J);
            v ? (I = !0, d(0, 0, b - m, z)) : q ? (I = !0, d(0, 0, z, b - m)) : y && (I = !0, b < H ? b = H : b > p + H - E && (b = p + H - E), d(0, 0, b - H, b - H + E))
        }

        function g() {
            I && a.xAxis[0].setExtremes(s.translate(ea, !0), s.translate(C, !0), !0, !1);
            v = q = y = I = H = null;
            L.cursor = T
        }

        function h() {
            var b = $.xAxis, c = b.getExtremes(), e = c.min, f = c.max, g = c.dataMin, c = c.dataMax, h = f - e, j, i, k, l, m;
            j = t.xData;
            var n = !!b.setExtremes;
            i = f >= j[j.length - 1];
            j = e <= g;
            if (!x)t.options.pointStart =
                $.xData[0], t.setData($.options.data, !1), m = !0;
            j && (l = g, k = l + h);
            i && (k = c, j || (l = P(k - h, t.xData[0])));
            n && (j || i) ? b.setExtremes(l, k, !0, !1) : (m && a.redraw(!1), d(P(e, g), va(f, c)))
        }

        var j = a.renderer, k = a.options, i = k.navigator, l = i.enabled, m, p, t, x, u = k.scrollbar, w = u.enabled, v, q, y, z, H, I, s, Ia, ea, C, E, L = document.body.style, T, R = i.handles, ba = l ? i.height : 0, Y = i.outlineWidth, J = w ? u.height : 0, V = ba + J, Z = u.barBorderRadius, F = i.top || a.chartHeight - ba - J - k.chart.spacingBottom, N = Y / 2, W, S, ka, ca, k = i.baseSeries, $ = a.series[k] || typeof k === "string" &&
            a.get(k) || a.series[0], ia, la, ma, ha = [], fa, o, na, oa, pa = [], ya = [];
        a.resetZoomEnabled = !1;
        (function () {
            var b = a.xAxis.length, c = a.yAxis.length;
            a.extraBottomMargin = V + i.margin;
            if (l) {
                var d = $.options, j = d.data, k = i.series;
                x = k.data;
                d.data = k.data = null;
                s = new a.Axis(G({ordinal:$.xAxis.options.ordinal}, i.xAxis, {isX:!0, type:"datetime", index:b, height:ba, top:F, offset:0, offsetLeft:J, offsetRight:-J, startOnTick:!1, endOnTick:!1, minPadding:0, maxPadding:0, zoomEnabled:!1}));
                Ia = new a.Axis(G(i.yAxis, {alignTicks:!1, height:ba, top:F,
                    offset:0, index:c, zoomEnabled:!1}));
                b = G($.options, k, {threshold:null, clip:!1, enableMouseTracking:!1, group:"nav", padXAxis:!1, xAxis:b, yAxis:c, name:"Navigator", showInLegend:!1, isInternal:!0, visible:!0});
                d.data = j;
                k.data = x;
                b.data = x || j;
                t = a.initSeries(b);
                U($, "updatedData", h)
            } else s = {translate:function (b, c) {
                var d = $.xAxis.getExtremes(), e = a.plotWidth - 2 * J, f = d.dataMin, d = d.dataMax - f;
                return c ? b * d / e + f : e * (b - f) / d
            }};
            U(a.container, hc, e);
            U(a.container, Kc, f);
            U(document, Lc, g)
        })();
        return{render:d, destroy:function () {
            ra(a.container,
                hc, e);
            ra(a.container, Kc, f);
            ra(document, Lc, g);
            l && ra($, "updatedData", h);
            n([s, Ia, ia, la, ma, o, na, oa, fa], function (a) {
                a && a.destroy && a.destroy()
            });
            s = Ia = ia = la = ma = o = na = oa = fa = null;
            n([pa, ha, ya], function (a) {
                sb(a)
            })
        }}
    };
    I(ca, {rangeSelector:{buttonTheme:{width:28, height:16, padding:1, r:0, zIndex:10}}});
    ca.lang = G(ca.lang, {rangeSelectorZoom:"Zoom", rangeSelectorFrom:"From:", rangeSelectorTo:"To:"});
    Highcharts.RangeSelector = function (a) {
        function b(b, c, d) {
            var e = a.xAxis[0], f = e && e.getExtremes(), g, h = f && f.dataMin, j = f && f.dataMax,
                i, k = e && va(f.max, j), f = new Date(k);
            g = c.type;
            var c = c.count, l, m, n = {millisecond:1, second:1E3, minute:6E4, hour:36E5, day:864E5, week:6048E5};
            if (!(h === null || j === null || b === x))n[g] ? (l = n[g] * c, i = P(k - l, h)) : g === "month" ? (f.setMonth(f.getMonth() - c), i = P(f.getTime(), h), l = 2592E6 * c) : g === "ytd" ? (f = new Date(0), g = new Date, m = g.getFullYear(), f.setFullYear(m), String(m) !== ub("%Y", f) && f.setFullYear(m - 1), i = m = P(h || 0, f.getTime()), g = g.getTime(), k = va(j || g, g)) : g === "year" ? (f.setFullYear(f.getFullYear() - c), i = P(h, f.getTime()), l = 31536E6 *
                c) : g === "all" && e && (i = h, k = j), w[b] && w[b].setState(2), e ? setTimeout(function () {
                e.setExtremes(i, k, r(d, 1), 0);
                x = b
            }, 1) : (h = a.options.xAxis, h[0] = G(h[0], {range:l, min:m}), x = b)
        }

        function c() {
            i && i.blur();
            l && l.blur()
        }

        function d(a, b) {
            var c = a.hasFocus ? q.inputEditDateFormat || "%Y-%m-%d" : q.inputDateFormat || "%b %e, %Y";
            if (b)a.HCTime = b;
            a.value = ub(c, a.HCTime)
        }

        function e(b) {
            var c = b === "min", e;
            m[b] = fa("span", {innerHTML:j[c ? "rangeSelectorFrom" : "rangeSelectorTo"]}, q.labelStyle, k);
            e = fa("input", {name:b, className:cb + "range-selector",
                type:"text"}, I({width:"80px", height:"16px", border:"1px solid silver", marginLeft:"5px", marginRight:c ? "5px" : "0", textAlign:"center"}, q.inputStyle), k);
            e.onfocus = e.onblur = function (a) {
                a = a || window.event;
                e.hasFocus = a.type === "focus";
                d(e)
            };
            e.onchange = function () {
                var b = e.value, d = Date.parse(b), f = a.xAxis[0].getExtremes();
                isNaN(d) && (d = b.split("-"), d = Date.UTC(M(d[0]), M(d[1]) - 1, M(d[2])));
                if (!isNaN(d) && (c && d > f.dataMin && d < l.HCTime || !c && d < f.dataMax && d > i.HCTime))a.xAxis[0].setExtremes(c ? d : f.min, c ? f.max : d)
            };
            return e
        }

        var f =
            a.renderer, g, h = a.container, j = ca.lang, k, i, l, m = {}, p, t, x, u, w = [], v, q, y = [
            {type:"month", count:1, text:"1m"},
            {type:"month", count:3, text:"3m"},
            {type:"month", count:6, text:"6m"},
            {type:"ytd", text:"YTD"},
            {type:"year", count:1, text:"1y"},
            {type:"all", text:"All"}
        ];
        a.resetZoomEnabled = !1;
        (function () {
            a.extraTopMargin = 25;
            q = a.options.rangeSelector;
            v = q.buttons || y;
            var d = q.selected;
            U(h, hc, c);
            d !== C && v[d] && b(d, v[d], !1);
            U(a, "load", function () {
                U(a.xAxis[0], "afterSetExtremes", function () {
                    w[x] && w[x].setState(0);
                    x = null
                })
            })
        })();
        return{render:function (c, m) {
            var r = a.options.chart.style, s = q.buttonTheme, y = q.inputEnabled !== !1, z = s && s.states, B = a.plotLeft, C;
            g || (u = f.text(j.rangeSelectorZoom, B, a.plotTop - 10).css(q.labelStyle).add(), C = B + u.getBBox().width + 5, n(v, function (c, d) {
                w[d] = f.button(c.text, C, a.plotTop - 25,
                    function () {
                        b(d, c);
                        this.isActive = !0
                    }, s, z && z.hover, z && z.select).css({textAlign:"center"}).add();
                C += w[d].width + (q.buttonSpacing || 0);
                x === d && w[d].setState(2)
            }), y && (t = k = fa("div", null, {position:"relative", height:0, fontFamily:r.fontFamily, fontSize:r.fontSize, zIndex:1}),
                h.parentNode.insertBefore(k, h), p = k = fa("div", null, I({position:"absolute", top:a.plotTop - 25 + "px", right:a.chartWidth - a.plotLeft - a.plotWidth + "px"}, q.inputBoxStyle), k), i = e("min"), l = e("max")));
            y && (d(i, c), d(l, m));
            g = !0
        }, destroy:function () {
            ra(h, hc, c);
            n([w], function (a) {
                sb(a)
            });
            u && (u = u.destroy());
            if (i)i.onfocus = i.onblur = i.onchange = null;
            if (l)l.onfocus = l.onblur = l.onchange = null;
            n([i, l, m.min, m.max, p, t], function (a) {
                Ib(a)
            });
            i = l = m = k = p = t = null
        }}
    };
    ac.prototype.callbacks.push(function (a) {
        function b() {
            f = a.xAxis[0].getExtremes();
            g.render(P(f.min, f.dataMin), va(f.max, f.dataMax))
        }

        function c() {
            f = a.xAxis[0].getExtremes();
            h.render(f.min, f.max)
        }

        function d(a) {
            g.render(a.min, a.max)
        }

        function e(a) {
            h.render(a.min, a.max)
        }

        var f, g = a.scroller, h = a.rangeSelector;
        g && (U(a.xAxis[0], "afterSetExtremes", d), U(a, "resize", b), b());
        h && (U(a.xAxis[0], "afterSetExtremes", e), U(a, "resize", c), c());
        U(a, "destroy", function () {
            g && (ra(a, "resize", b), ra(a.xAxis[0], "afterSetExtremes", d));
            h && (ra(a, "resize", c), ra(a.xAxis[0], "afterSetExtremes", e))
        })
    });
    Highcharts.StockChart =
        function (a, b) {
            var c = a.series, d, e = {marker:{enabled:!1, states:{hover:{enabled:!0, radius:5}}}, shadow:!1, states:{hover:{lineWidth:2}}, dataGrouping:{enabled:!0}};
            a.xAxis = kb(qb(a.xAxis || {}), function (a) {
                return G({minPadding:0, maxPadding:0, ordinal:!0, title:{text:null}, showLastLabel:!0}, a, {type:"datetime", categories:null})
            });
            a.yAxis = kb(qb(a.yAxis || {}), function (a) {
                d = a.opposite;
                return G({labels:{align:d ? "right" : "left", x:d ? -2 : 2, y:-2}, showLastLabel:!1, title:{text:null}}, a)
            });
            a.series = null;
            a = G({chart:{panning:!0},
                navigator:{enabled:!0}, scrollbar:{enabled:!0}, rangeSelector:{enabled:!0}, title:{text:null}, tooltip:{shared:!0, crosshairs:!0}, legend:{enabled:!1}, plotOptions:{line:e, spline:e, area:e, areaspline:e, column:{shadow:!1, borderWidth:0, dataGrouping:{enabled:!0}}}}, a, {chart:{inverted:!1}});
            a.series = c;
            return new ac(a, b)
        };
    var Yc = L.init, Zc = L.processData, $c = eb.prototype.tooltipFormatter;
    L.init = function () {
        Yc.apply(this, arguments);
        var a = this.options.compare;
        if (a)this.modifyValue = function (b, c) {
            var d = this.compareValue,
                b = a === "value" ? b - d : b = 100 * (b / d) - 100;
            if (c)c.change = b;
            return b
        }
    };
    L.processData = function () {
        Zc.apply(this, arguments);
        if (this.options.compare)for (var a = 0, b = this.processedXData, c = this.processedYData, d = c.length, e = this.xAxis.getExtremes().min; a < d; a++)if (typeof c[a] === "number" && b[a] >= e) {
            this.compareValue = c[a];
            break
        }
    };
    eb.prototype.tooltipFormatter = function (a) {
        a = a.replace("{point.change}", (this.change > 0 ? "+" : "") + Vb(this.change, this.series.tooltipOptions.changeDecimals || 2));
        return $c.apply(this, [a])
    };
    (function () {
        var a =
            L.init, b = L.getSegments;
        L.init = function () {
            var b, d;
            a.apply(this, arguments);
            b = this.chart;
            (d = this.xAxis) && d.options.ordinal && U(this, "updatedData", function () {
                delete d.ordinalIndex
            });
            if (d && d.options.ordinal && !d.hasOrdinalExtension) {
                d.hasOrdinalExtension = !0;
                d.beforeSetTickPositions = function () {
                    var a, b = [], c = !1, e, k = this.getExtremes(), i = k.min, k = k.max, l;
                    if (this.options.ordinal) {
                        n(this.series, function (c, d) {
                            if (c.visible !== !1 && (b = b.concat(c.processedXData), a = b.length, d && a)) {
                                b.sort(function (a, b) {
                                    return a - b
                                });
                                for (d =
                                         a - 1; d--;)b[d] === b[d + 1] && b.splice(d, 1)
                            }
                        });
                        a = b.length;
                        if (a > 2) {
                            e = b[1] - b[0];
                            for (l = a - 1; l-- && !c;)b[l + 1] - b[l] !== e && (c = !0)
                        }
                        c ? (this.ordinalPositions = b, c = d.val2lin(i, !0), e = d.val2lin(k, !0), this.ordinalSlope = k = (k - i) / (e - c), this.ordinalOffset = i - c * k) : this.ordinalPositions = this.ordinalSlope = this.ordinalOffset = C
                    }
                };
                d.val2lin = function (a, b) {
                    var c = this.ordinalPositions;
                    if (c) {
                        var d = c.length, e, i;
                        for (e = d; e--;)if (c[e] === a) {
                            i = e;
                            break
                        }
                        for (e = d - 1; e--;)if (a > c[e] || e === 0) {
                            c = (a - c[e]) / (c[e + 1] - c[e]);
                            i = e + c;
                            break
                        }
                        return b ? i : this.ordinalSlope *
                            (i || 0) + this.ordinalOffset
                    } else return a
                };
                d.lin2val = function (a, b) {
                    var c = this.ordinalPositions;
                    if (c) {
                        var d = this.ordinalSlope, e = this.ordinalOffset, i = c.length - 1, l, m;
                        if (b)a < 0 ? a = c[0] : a > i ? a = c[i] : (i = Qa(a), m = a - i); else for (; i--;)if (l = d * i + e, a >= l) {
                            d = d * (i + 1) + e;
                            m = (a - l) / (d - l);
                            break
                        }
                        return m !== C && c[i] !== C ? c[i] + (m ? m * (c[i + 1] - c[i]) : 0) : a
                    } else return a
                };
                d.getExtendedPositions = function () {
                    var a = d.series[0].currentDataGrouping, e = d.ordinalIndex, h = a ? a.count + a.unitName : "raw", j = d.getExtremes(), k, i;
                    if (!e)e = d.ordinalIndex = {};
                    if (!e[h])k = {series:[], getExtremes:function () {
                        return{min:j.dataMin, max:j.dataMax}
                    }, options:{ordinal:!0}}, n(d.series, function (d) {
                        i = {xAxis:k, xData:d.xData, chart:b};
                        i.options = {dataGrouping:a ? {enabled:!0, forced:!0, approximation:"open", units:[
                            [a.unitName, [a.count]]
                        ]} : {enabled:!1}};
                        d.processData.apply(i);
                        k.series.push(i)
                    }), d.beforeSetTickPositions.apply(k), e[h] = k.ordinalPositions;
                    return e[h]
                };
                d.getGroupIntervalFactor = function (a, b, c) {
                    for (var d = 0, e = c.length, i = []; d < e - 1; d++)i[d] = c[d + 1] - c[d];
                    i.sort(function (a, b) {
                        return a - b
                    });
                    c = i[Qa(e / 2)];
                    return e * c / (b - a)
                };
                d.postProcessTickInterval = function (a) {
                    var b = this.ordinalSlope;
                    return b ? a / (b / d.closestPointRange) : a
                };
                d.getNonLinearTimeTicks = function (a, b, c, d, e, i, l) {
                    var m = 0, n = 0, r, x = {}, u, w, v, q = [];
                    if (!e || b === C)return Wb(a, b, c, d);
                    for (w = e.length; n < w; n++) {
                        v = n && e[n - 1] > c;
                        if (e[n] < b)m = n; else if (n === w - 1 || e[n + 1] - e[n] > i * 5 || v)r = Wb(a, e[m], e[n], d), q = q.concat(r), m = n + 1;
                        if (v)break
                    }
                    a = r.info;
                    if (l && a.unitRange <= E[pa]) {
                        n = q.length - 1;
                        for (m = 1; m < n; m++)(new Date(q[m]))[$a]() !== (new Date(q[m - 1]))[$a]() &&
                        (x[q[m]] = ia, u = !0);
                        u && (x[q[0]] = ia);
                        a.higherRanks = x
                    }
                    q.info = a;
                    return q
                };
                U(d, "afterSetTickPositions", function (a) {
                    var b = d.options.tickPixelInterval, a = a.tickPositions;
                    if (d.ordinalPositions && z(b))for (var c = a.length, e, k, i, l = (e = a.info) ? e.higherRanks : []; c--;)k = d.translate(a[c]), i && i - k < b * 0.6 ? (l[a[c]] && !l[a[c + 1]] ? (e = c + 1, i = k) : e = c, a.splice(e, 1)) : i = k
                });
                var e = b.pan;
                b.pan = function (a) {
                    var d = b.xAxis[0], h = !1;
                    if (d.options.ordinal) {
                        var j = b.mouseDownX, k = d.getExtremes(), i = k.dataMax, l = k.min, m = k.max, p;
                        p = b.hoverPoints;
                        var r =
                            d.closestPointRange, j = (j - a) / (d.translationSlope * (d.ordinalSlope || r)), x = {ordinalPositions:d.getExtendedPositions()}, u, r = d.lin2val, w = d.val2lin;
                        if (x.ordinalPositions) {
                            if (Ja(j) > 1)p && n(p, function (a) {
                                a.setState()
                            }), j < 0 ? (p = x, x = d.ordinalPositions ? d : x) : p = d.ordinalPositions ? d : x, u = x.ordinalPositions, i > u[u.length - 1] && u.push(i), p = r.apply(p, [w.apply(p, [l, !0]) + j, !0]), j = r.apply(x, [w.apply(x, [m, !0]) + j, !0]), p > va(k.dataMin, l) && j < P(i, m) && d.setExtremes(p, j, !0, !1), b.mouseDownX = a, R(b.container, {cursor:"move"})
                        } else h = !0
                    } else h =
                        !0;
                    h && e.apply(b, arguments)
                }
            }
        };
        L.getSegments = function () {
            var a = this, d, e = a.options.gapSize;
            b.apply(a);
            if (a.xAxis.options.ordinal && e)d = a.segments, n(d, function (b, g) {
                for (var h = b.length - 1; h--;)b[h + 1].x - b[h].x > a.xAxis.closestPointRange * e && d.splice(g + 1, 0, b.splice(h + 1, b.length - h))
            })
        }
    })();
    I(Highcharts, {Chart:ac, dateFormat:ub, pathAnim:Rb, getOptions:function () {
        return ca
    }, hasRtlBug:Tc, numberFormat:Vb, Point:eb, Color:Da, Renderer:Ob, seriesTypes:la, setOptions:function (a) {
        dc = G(dc, a.xAxis);
        nc = G(nc, a.yAxis);
        a.xAxis = a.yAxis =
            C;
        ca = G(ca, a);
        zc();
        return ca
    }, Series:W, addEvent:U, removeEvent:ra, createElement:fa, discardElement:Ib, css:R, each:n, extend:I, map:kb, merge:G, pick:r, splat:qb, extendClass:oa, product:"Highstock", version:"1.1.3"})
})();
