"use strict";

var _index = _interopRequireDefault(require("../models/index"));
var _CRUDService = _interopRequireDefault(require("../services/CRUDService"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var getHomePage = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(req, res) {
    var data, _t;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.n) {
        case 0:
          _context.p = 0;
          _context.n = 1;
          return _index["default"].User.findAll();
        case 1:
          data = _context.v;
          return _context.a(2, res.render("homepage.ejs", {
            data: JSON.stringify(data)
          }));
        case 2:
          _context.p = 2;
          _t = _context.v;
          console.log(_t);
        case 3:
          return _context.a(2);
      }
    }, _callee, null, [[0, 2]]);
  }));
  return function getHomePage(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var getAboutPage = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(req, res) {
    var _t2;
    return _regenerator().w(function (_context2) {
      while (1) switch (_context2.n) {
        case 0:
          _context2.p = 0;
          return _context2.a(2, res.render("test/aboutPage.ejs"));
        case 1:
          _context2.p = 1;
          _t2 = _context2.v;
        case 2:
          return _context2.a(2);
      }
    }, _callee2, null, [[0, 1]]);
  }));
  return function getAboutPage(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var getCRUD = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(req, res) {
    return _regenerator().w(function (_context3) {
      while (1) switch (_context3.n) {
        case 0:
          return _context3.a(2, res.render("getCRUD.ejs"));
      }
    }, _callee3);
  }));
  return function getCRUD(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
var postCRUD = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(req, res) {
    var message;
    return _regenerator().w(function (_context4) {
      while (1) switch (_context4.n) {
        case 0:
          _context4.n = 1;
          return _CRUDService["default"].createNewUser(req.body);
        case 1:
          message = _context4.v;
          return _context4.a(2, res.send("Ok create new user!", message));
      }
    }, _callee4);
  }));
  return function postCRUD(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
var displayGetCRUD = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(req, res) {
    var data, _t3;
    return _regenerator().w(function (_context5) {
      while (1) switch (_context5.n) {
        case 0:
          _context5.p = 0;
          _context5.n = 1;
          return _CRUDService["default"].getAllUser();
        case 1:
          data = _context5.v;
          return _context5.a(2, res.render("displayGetCRUD.ejs", {
            dataTable: data
          }));
        case 2:
          _context5.p = 2;
          _t3 = _context5.v;
        case 3:
          return _context5.a(2);
      }
    }, _callee5, null, [[0, 2]]);
  }));
  return function displayGetCRUD(_x9, _x0) {
    return _ref5.apply(this, arguments);
  };
}();
var getEditCRUD = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6(req, res) {
    var userId, useData;
    return _regenerator().w(function (_context6) {
      while (1) switch (_context6.n) {
        case 0:
          userId = req.query.id;
          if (!userId) {
            _context6.n = 2;
            break;
          }
          _context6.n = 1;
          return _CRUDService["default"].getUserInfoById(userId);
        case 1:
          useData = _context6.v;
          return _context6.a(2, res.render("editCRUD.ejs", {
            user: useData
          }));
        case 2:
          return _context6.a(2, res.send("Hello page"));
        case 3:
          return _context6.a(2);
      }
    }, _callee6);
  }));
  return function getEditCRUD(_x1, _x10) {
    return _ref6.apply(this, arguments);
  };
}();
var putCRUD = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7(req, res) {
    var data, allUsers;
    return _regenerator().w(function (_context7) {
      while (1) switch (_context7.n) {
        case 0:
          data = req.body;
          _context7.n = 1;
          return _CRUDService["default"].updateUserData(data);
        case 1:
          allUsers = _context7.v;
          return _context7.a(2, res.render("displayGetCRUD.ejs", {
            dataTable: allUsers
          }));
      }
    }, _callee7);
  }));
  return function putCRUD(_x11, _x12) {
    return _ref7.apply(this, arguments);
  };
}();
var deleteUserById = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee8(req, res) {
    var id;
    return _regenerator().w(function (_context8) {
      while (1) switch (_context8.n) {
        case 0:
          id = req.query.id;
          if (!id) {
            _context8.n = 2;
            break;
          }
          _context8.n = 1;
          return _CRUDService["default"].deleteUserById(id);
        case 1:
          return _context8.a(2, res.send("delete user succeed!"));
        case 2:
          return _context8.a(2, res.send("User note found!"));
        case 3:
          return _context8.a(2);
      }
    }, _callee8);
  }));
  return function deleteUserById(_x13, _x14) {
    return _ref8.apply(this, arguments);
  };
}();
module.exports = {
  getHomePage: getHomePage,
  getAboutPage: getAboutPage,
  getCRUD: getCRUD,
  postCRUD: postCRUD,
  displayGetCRUD: displayGetCRUD,
  getEditCRUD: getEditCRUD,
  putCRUD: putCRUD,
  deleteUserById: deleteUserById
};