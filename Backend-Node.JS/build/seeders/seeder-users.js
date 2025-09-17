"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
module.exports = {
  up: function () {
    var _up = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(queryInterface, Sequelize) {
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            return _context.a(2, queryInterface.bulkInsert("Users", [{
              email: "admin@gmail.com",
              firstName: "Admin",
              lastName: "Tien",
              roleId: "R1",
              gender: "M",
              password: "$2a$10$/KRHY.3RXrOz6h7PlWCgU.roQuqUhbAYnfMB5k4/XY9Kq0ZJ3qIey",
              createdAt: new Date(),
              updatedAt: new Date()
            }, _defineProperty(_defineProperty(_defineProperty(_defineProperty({
              email: "leho@gmail.com",
              firstName: "Hồ",
              lastName: "Lê",
              address: "HCM",
              roleId: "R2",
              gender: "M",
              positionId: "P1"
            }, "gender", "F"), "password", "$2a$10$/KRHY.3RXrOz6h7PlWCgU.roQuqUhbAYnfMB5k4/XY9Kq0ZJ3qIey"), "createdAt", new Date()), "updatedAt", new Date()), {
              email: "mynguyen@gmail.com",
              firstName: "Nguyễn Thị",
              lastName: "Ngọc My",
              address: "HCM",
              roleId: "R2",
              gender: "F",
              positionId: "P1",
              password: "$2a$10$/KRHY.3RXrOz6h7PlWCgU.roQuqUhbAYnfMB5k4/XY9Kq0ZJ3qIey",
              createdAt: new Date(),
              updatedAt: new Date()
            }, {
              email: "maithao@gmail.com",
              firstName: "Nguyễn",
              lastName: "Mai Thảo",
              gender: "F",
              address: "HCM",
              password: "$2a$10$/KRHY.3RXrOz6h7PlWCgU.roQuqUhbAYnfMB5k4/XY9Kq0ZJ3qIey",
              createdAt: new Date(),
              updatedAt: new Date()
            }, {
              email: "hoangle@gmail.com",
              firstName: "Lê Trần",
              lastName: "Hoàng",
              address: "HCM",
              gender: "O",
              password: "$2a$10$/KRHY.3RXrOz6h7PlWCgU.roQuqUhbAYnfMB5k4/XY9Kq0ZJ3qIey",
              roleId: "R2",
              positionId: "P1",
              createdAt: new Date(),
              updatedAt: new Date()
            }, {
              email: "truongdang@gmail.com",
              firstName: "Đặng",
              lastName: "Thanh Trường",
              address: "HCM",
              password: "$2a$10$/KRHY.3RXrOz6h7PlWCgU.roQuqUhbAYnfMB5k4/XY9Kq0ZJ3qIey",
              roleId: "R2",
              positionId: "P1",
              createdAt: new Date(),
              updatedAt: new Date()
            }, {
              email: "phamthang@gmail.com",
              firstName: "Phạm",
              lastName: "Hoàng Thắng",
              address: "HCM",
              password: "$2a$10$/KRHY.3RXrOz6h7PlWCgU.roQuqUhbAYnfMB5k4/XY9Kq0ZJ3qIey",
              roleId: "R2",
              positionId: "P1",
              createdAt: new Date(),
              updatedAt: new Date()
            }, {
              email: "huanle@gmail.com",
              firstName: "Đỗ",
              lastName: "Lê Huân",
              address: "HCM",
              password: "$2a$10$/KRHY.3RXrOz6h7PlWCgU.roQuqUhbAYnfMB5k4/XY9Kq0ZJ3qIey",
              roleId: "R2",
              positionId: "P1",
              createdAt: new Date(),
              updatedAt: new Date()
            }]));
        }
      }, _callee);
    }));
    function up(_x, _x2) {
      return _up.apply(this, arguments);
    }
    return up;
  }(),
  down: function () {
    var _down = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(queryInterface, Sequelize) {
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.n) {
          case 0:
            return _context2.a(2);
        }
      }, _callee2);
    }));
    function down(_x3, _x4) {
      return _down.apply(this, arguments);
    }
    return down;
  }()
};