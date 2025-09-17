"use strict";

function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
require("dotenv").config();
var nodemailer = require("nodemailer");
var sendSimpleEmail = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(dataSend) {
    var transporter, info;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.n) {
        case 0:
          transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false,
            auth: {
              user: process.env.EMAIL_APP,
              pass: process.env.EMAIL_APP_PASSWORD
            }
          });
          _context.n = 1;
          return transporter.sendMail({
            from: '"BOOKING-CARE" <tien83442@gmail.com>',
            to: dataSend.receiveEmail,
            subject: subjectEmail(dataSend),
            html: getBodyHTMLEmail(dataSend)
          });
        case 1:
          info = _context.v;
        case 2:
          return _context.a(2);
      }
    }, _callee);
  }));
  return function sendSimpleEmail(_x) {
    return _ref.apply(this, arguments);
  };
}();
var getBodyHTMLEmailRemedy = function getBodyHTMLEmailRemedy(dataSend) {
  var result = "";
  if (dataSend.language === "vi") {
    result = "<div style=\"font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #eee; padding: 20px; border-radius: 10px; background-color: #fafafa;\">\n        <h2 style=\"color: #2c3e50; text-align: center;\">Xin ch\xE0o ".concat(dataSend.patientName, "!</h2>\n        <p style=\"font-size: 16px; color: #333;\">B\u1EA1n nh\u1EADn \u0111\u01B0\u1EE3c email n\xE0y v\xEC b\u1EA1n \u0111\xE3 <b style=\"color:#27ae60;\"> kh\xE1m b\u1EC7nh th\xE0nh c\xF4ng!</b> \uD83C\uDF89</p>\n        <p style=\"font-size: 15px; color: #555;\">Th\xF4ng tin \u0111\u01A1n thu\u1ED1c/h\xF3a \u0111\u01A1n \u0111\u01B0\u1EE3c g\u1EEDi \u0111\xEDnh k\xE8m.</p>\n        <p style=\"font-size: 14px; color: #777; text-align: center;\">C\u1EA3m \u01A1n b\u1EA1n \u0111\xE3 tin t\u01B0\u1EDFng v\xE0 s\u1EED d\u1EE5ng d\u1ECBch v\u1EE5 c\u1EE7a ch\xFAng t\xF4i \u2764\uFE0F</p>\n        </div>\n    ");
  }
  if (dataSend.language === "en") {
    result = "<div style=\"font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #eee; padding: 20px; border-radius: 10px; background-color: #fafafa;\">\n        <h2 style=\"color: #2c3e50; text-align: center;\">Hello  ".concat(dataSend.patientName, "!</h2>\n        <p style=\"font-size: 16px; color: #333;\">You received this email because you have <b style=\"color:#27ae60;\">Appointment successful!</b> \uD83C\uDF89</p>\n        <p style=\"font-size: 14px; color: #777; text-align: center;\">Thank you for trusting and using our services. \u2764\uFE0F</p>\n        </div>\n    ");
  }
  return result;
};
var sendAttachment = function sendAttachment(dataSend) {
  return new Promise(/*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(resole, reject) {
      var transporter, info, _t;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.n) {
          case 0:
            _context2.p = 0;
            transporter = nodemailer.createTransport({
              host: "smtp.gmail.com",
              port: 587,
              secure: false,
              auth: {
                user: process.env.EMAIL_APP,
                pass: process.env.EMAIL_APP_PASSWORD
              }
            });
            _context2.n = 1;
            return transporter.sendMail({
              from: '"BOOKING-CARE" <tien83442@gmail.com>',
              to: dataSend.email,
              subject: subjectEmail(dataSend),
              html: getBodyHTMLEmailRemedy(dataSend),
              attachments: [{
                filename: "remedy-".concat(dataSend.patientId, "-").concat(new Date().getTime(), ".png"),
                content: dataSend.imgBase64.split("base64,")[1],
                encoding: "base64"
              }]
            });
          case 1:
            info = _context2.v;
            resole();
            _context2.n = 3;
            break;
          case 2:
            _context2.p = 2;
            _t = _context2.v;
            reject(_t);
          case 3:
            return _context2.a(2);
        }
      }, _callee2, null, [[0, 2]]);
    }));
    return function (_x2, _x3) {
      return _ref2.apply(this, arguments);
    };
  }());
};
var subjectEmail = function subjectEmail(dataSend) {
  var result = "";
  if (dataSend.language === "vi") {
    result = "Thông tin đặt lịch khám bệnh";
  }
  if (dataSend.language === "en") {
    result = "Appointment information";
  }
  return result;
};
var getBodyHTMLEmail = function getBodyHTMLEmail(dataSend) {
  var result = "";
  if (dataSend.language === "vi") {
    result = "<div style=\"font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #eee; padding: 20px; border-radius: 10px; background-color: #fafafa;\">\n        <h2 style=\"color: #2c3e50; text-align: center;\">Xin ch\xE0o ".concat(dataSend.patientName, "!</h2>\n        <p style=\"font-size: 16px; color: #333;\">B\u1EA1n nh\u1EADn \u0111\u01B0\u1EE3c email n\xE0y v\xEC b\u1EA1n \u0111\xE3 <b style=\"color:#27ae60;\">\u0111\u1EB7t l\u1ECBch kh\xE1m b\u1EC7nh th\xE0nh c\xF4ng!</b> \uD83C\uDF89</p>\n        <div style=\"background: #fff; padding: 15px; border-radius: 8px; margin: 20px 0; border: 1px solid #ddd;\">\n            <p style=\"margin: 5px 0; font-size: 15px;\"><b>\u23F0 Th\u1EDDi gian:</b> ").concat(dataSend.time, "</p>\n            <p style=\"margin: 5px 0; font-size: 15px;\"><b>\uD83D\uDC68\u200D\u2695\uFE0F B\xE1c s\u0129:</b> ").concat(dataSend.doctorName, "</p>\n        </div>\n        <p style=\"font-size: 15px; color: #555;\">N\u1EBFu c\xE1c th\xF4ng tin tr\xEAn l\xE0 ch\xEDnh x\xE1c, vui l\xF2ng nh\u1EA5n n\xFAt b\xEAn d\u01B0\u1EDBi \u0111\u1EC3 x\xE1c nh\u1EADn v\xE0 ho\xE0n t\u1EA5t quy tr\xECnh \u0111\u1EB7t l\u1ECBch.</p>\n        <div style=\"text-align: center; margin: 30px 0;\">\n            <a href=\"").concat(dataSend.redirectLink, "\" target=\"_blank\" style=\"background: #3498db; color: #fff; padding: 12px 24px; text-decoration: none; font-size: 16px; border-radius: 6px; display: inline-block;\">\n            X\xE1c nh\u1EADn \u0111\u1EB7t l\u1ECBch\n            </a>\n        </div>\n        <p style=\"font-size: 14px; color: #777; text-align: center;\">C\u1EA3m \u01A1n b\u1EA1n \u0111\xE3 tin t\u01B0\u1EDFng v\xE0 s\u1EED d\u1EE5ng d\u1ECBch v\u1EE5 c\u1EE7a ch\xFAng t\xF4i \u2764\uFE0F</p>\n        </div>\n    ");
  }
  if (dataSend.language === "en") {
    result = "<div style=\"font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #eee; padding: 20px; border-radius: 10px; background-color: #fafafa;\">\n        <h2 style=\"color: #2c3e50; text-align: center;\">Hello ".concat(dataSend.patientName, "!</h2>\n        <p style=\"font-size: 16px; color: #333;\">You received this email because you have <b style=\"color:#27ae60;\">Appointment successful!</b> \uD83C\uDF89</p>\n        <div style=\"background: #fff; padding: 15px; border-radius: 8px; margin: 20px 0; border: 1px solid #ddd;\">\n            <p style=\"margin: 5px 0; font-size: 15px;\"><b>\u23F0 Time:</b> ").concat(dataSend.time, "</p>\n            <p style=\"margin: 5px 0; font-size: 15px;\"><b>\uD83D\uDC68\u200D\u2695\uFE0F Doctor:</b> ").concat(dataSend.doctorName, "</p>\n        </div>\n        <p style=\"font-size: 15px; color: #555;\">If the above information is correct, please click the button below to confirm and complete the booking process.</p>\n        <div style=\"text-align: center; margin: 30px 0;\">\n            <a href=\"").concat(dataSend.redirectLink, "\" target=\"_blank\" style=\"background: #3498db; color: #fff; padding: 12px 24px; text-decoration: none; font-size: 16px; border-radius: 6px; display: inline-block;\">\n            Confirm appointment\n            </a>\n        </div>\n        <p style=\"font-size: 14px; color: #777; text-align: center;\">Thank you for trusting and using our services. \u2764\uFE0F</p>\n        </div>\n    ");
  }
  return result;
};
module.exports = {
  sendSimpleEmail: sendSimpleEmail,
  sendAttachment: sendAttachment
};