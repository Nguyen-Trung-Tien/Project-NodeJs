"use strict";

var _index = _interopRequireDefault(require("../models/index"));
var _emailService = _interopRequireDefault(require("./emailService"));
var _uuid = require("uuid");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
require("dotenv").config();
var builtUrlEmail = function builtUrlEmail(doctorId, token) {
  var result = "".concat(process.env.URL_REACT, "/verify-booking?token=").concat(token, "&doctorId=").concat(doctorId);
  return result;
};
var postBookAppointment = function postBookAppointment(data) {
  return new Promise(/*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(resolve, reject) {
      var token, user, _t;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            _context.p = 0;
            if (!(!data.email || !data.doctorId || !data.timeType || !data.date || !data.fullName || !data.selectedGender || !data.address)) {
              _context.n = 1;
              break;
            }
            resolve({
              errCode: -1,
              errMessage: "Missing required parameter !"
            });
            _context.n = 5;
            break;
          case 1:
            token = (0, _uuid.v4)(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
            _context.n = 2;
            return _emailService["default"].sendSimpleEmail({
              receiveEmail: data.email,
              patientName: data.fullName,
              time: data.timeString,
              doctorName: data.doctorName,
              language: data.language,
              redirectLink: builtUrlEmail(data.doctorId, token)
            });
          case 2:
            _context.n = 3;
            return _index["default"].User.findOrCreate({
              where: {
                email: data.email
              },
              defaults: {
                email: data.email,
                firstName: data.fullName,
                phoneNumber: data.phoneNumber,
                roleId: "R3",
                gender: data.selectedGender,
                address: data.address
              }
            });
          case 3:
            user = _context.v;
            if (!(user && user[0])) {
              _context.n = 4;
              break;
            }
            _context.n = 4;
            return _index["default"].Bookings.findOrCreate({
              where: {
                patientId: user[0].id
              },
              defaults: {
                statusId: "S1",
                doctorId: data.doctorId,
                patientId: user[0].id,
                date: data.date,
                timeType: data.timeType,
                token: token
              }
            });
          case 4:
            resolve({
              errCode: 0,
              errMessage: "Save info patient success!"
            });
          case 5:
            _context.n = 7;
            break;
          case 6:
            _context.p = 6;
            _t = _context.v;
            reject(_t);
          case 7:
            return _context.a(2);
        }
      }, _callee, null, [[0, 6]]);
    }));
    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }());
};
var postVerifyBookAppointment = function postVerifyBookAppointment(data) {
  return new Promise(/*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(resolve, reject) {
      var appointment, _t2;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.n) {
          case 0:
            _context2.p = 0;
            if (!(!data.token || !data.doctorId)) {
              _context2.n = 1;
              break;
            }
            resolve({
              errCode: -1,
              errMessage: "Missing required parameter !"
            });
            _context2.n = 5;
            break;
          case 1:
            _context2.n = 2;
            return _index["default"].Bookings.findOne({
              where: {
                doctorId: data.doctorId,
                token: data.token,
                statusId: "S1"
              },
              raw: false
            });
          case 2:
            appointment = _context2.v;
            if (!appointment) {
              _context2.n = 4;
              break;
            }
            appointment.statusId = "S2";
            _context2.n = 3;
            return appointment.save();
          case 3:
            resolve({
              errCode: 0,
              errMessage: "Update appointment success!"
            });
            _context2.n = 5;
            break;
          case 4:
            resolve({
              errCode: 2,
              errMessage: "Appointment already exists or is activated!"
            });
          case 5:
            _context2.n = 7;
            break;
          case 6:
            _context2.p = 6;
            _t2 = _context2.v;
            reject(_t2);
          case 7:
            return _context2.a(2);
        }
      }, _callee2, null, [[0, 6]]);
    }));
    return function (_x3, _x4) {
      return _ref2.apply(this, arguments);
    };
  }());
};
module.exports = {
  postBookAppointment: postBookAppointment,
  postVerifyBookAppointment: postVerifyBookAppointment
};