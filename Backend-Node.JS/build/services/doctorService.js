"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _bodyParser = require("body-parser");
var _index = _interopRequireDefault(require("../models/index"));
var _emailService = _interopRequireDefault(require("../services/emailService"));
var _lodash = _interopRequireWildcard(require("lodash"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t0 in e) "default" !== _t0 && {}.hasOwnProperty.call(e, _t0) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t0)) && (i.get || i.set) ? o(f, _t0, i) : f[_t0] = e[_t0]); return f; })(e, t); }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
require("dotenv").config();
var MAX_NUMBER_SCHEDULE = process.env.MAX_NUMBER_SCHEDULE;
var getTopDoctorHome = function getTopDoctorHome(limitInput) {
  return new Promise(/*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(resolve, reject) {
      var users, _t;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            _context.p = 0;
            _context.n = 1;
            return _index["default"].User.findAll({
              limit: limitInput,
              where: {
                roleId: "R2"
              },
              order: [["createdAt", "DESC"]],
              attributes: {
                exclude: ["password"]
              },
              include: [{
                model: _index["default"].AllCode,
                as: "positionData",
                attributes: ["valueEn", "valueVi"]
              }, {
                model: _index["default"].AllCode,
                as: "genderData",
                attributes: ["valueEn", "valueVi"]
              }],
              raw: true,
              nest: true
            });
          case 1:
            users = _context.v;
            resolve({
              errCode: 0,
              data: users
            });
            _context.n = 3;
            break;
          case 2:
            _context.p = 2;
            _t = _context.v;
            reject(_t);
          case 3:
            return _context.a(2);
        }
      }, _callee, null, [[0, 2]]);
    }));
    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }());
};
var getAllDoctors = function getAllDoctors() {
  return new Promise(/*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(resolve, reject) {
      var doctors, _t2;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.n) {
          case 0:
            _context2.p = 0;
            _context2.n = 1;
            return _index["default"].User.findAll({
              where: {
                roleId: "R2"
              },
              attributes: {
                exclude: ["password", "image"]
              }
            });
          case 1:
            doctors = _context2.v;
            resolve({
              errCode: 0,
              data: doctors
            });
            _context2.n = 3;
            break;
          case 2:
            _context2.p = 2;
            _t2 = _context2.v;
            reject(_t2);
          case 3:
            return _context2.a(2);
        }
      }, _callee2, null, [[0, 2]]);
    }));
    return function (_x3, _x4) {
      return _ref2.apply(this, arguments);
    };
  }());
};
var checkRequiredFields = function checkRequiredFields(inputData) {
  var arrFields = ["doctorId", "contentHTML", "contentMarkdown", "action", "selectedPrice", "selectedPayment", "selectedProvince", "nameClinic", "addressClinic", "note", "specialtyId"];
  var isValid = true;
  var element = "";
  for (var i = 0; i < arrFields.length; i++) {
    if (!inputData[arrFields[i]]) {
      isValid = false;
      element = arrFields[i];
      break;
    }
  }
  return {
    isValid: isValid,
    element: element
  };
};
var saveDetailInfoDoctor = function saveDetailInfoDoctor(inputData) {
  return new Promise(/*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(resolve, reject) {
      var checkObject, doctorMarkdown, doctorInfo, _t3;
      return _regenerator().w(function (_context3) {
        while (1) switch (_context3.n) {
          case 0:
            _context3.p = 0;
            checkObject = checkRequiredFields(inputData);
            if (!(checkObject.isValid == false)) {
              _context3.n = 1;
              break;
            }
            resolve({
              errCode: -1,
              errMessage: "Missing parameter: ".concat(checkObject.element, "!")
            });
            _context3.n = 10;
            break;
          case 1:
            if (!(inputData.action === "CREATE")) {
              _context3.n = 3;
              break;
            }
            _context3.n = 2;
            return _index["default"].Markdown.create({
              contentHTML: inputData.contentHTML,
              contentMarkdown: inputData.contentMarkdown,
              description: inputData.description,
              doctorId: inputData.doctorId
            });
          case 2:
            _context3.n = 5;
            break;
          case 3:
            if (!(inputData.action === "EDIT")) {
              _context3.n = 5;
              break;
            }
            _context3.n = 4;
            return _index["default"].Markdown.findOne({
              where: {
                doctorId: inputData.doctorId
              },
              raw: false
            });
          case 4:
            doctorMarkdown = _context3.v;
            if (!doctorMarkdown) {
              _context3.n = 5;
              break;
            }
            doctorMarkdown.contentHTML = inputData.contentHTML;
            doctorMarkdown.contentMarkdown = inputData.contentMarkdown;
            doctorMarkdown.description = inputData.description;
            doctorMarkdown.updateAt = new Date();
            _context3.n = 5;
            return doctorMarkdown.save();
          case 5:
            _context3.n = 6;
            return _index["default"].Doctor_Info.findOne({
              where: {
                doctorId: inputData.doctorId
              },
              raw: false
            });
          case 6:
            doctorInfo = _context3.v;
            if (!doctorInfo) {
              _context3.n = 8;
              break;
            }
            //update
            doctorInfo.doctorId = inputData.doctorId;
            doctorInfo.priceId = inputData.selectedPrice;
            doctorInfo.provinceId = inputData.selectedProvince;
            doctorInfo.paymentId = inputData.selectedPayment;
            doctorInfo.nameClinic = inputData.nameClinic;
            doctorInfo.addressClinic = inputData.addressClinic;
            doctorInfo.note = inputData.note;
            doctorInfo.specialtyId = inputData.specialtyId;
            doctorInfo.clinicId = inputData.clinicId;
            _context3.n = 7;
            return doctorInfo.save();
          case 7:
            _context3.n = 9;
            break;
          case 8:
            _context3.n = 9;
            return _index["default"].Doctor_Info.create({
              doctorId: inputData.doctorId,
              priceId: inputData.selectedPrice,
              provinceId: inputData.selectedProvince,
              paymentId: inputData.selectedPayment,
              nameClinic: inputData.nameClinic,
              addressClinic: inputData.addressClinic,
              note: inputData.note,
              specialtyId: inputData.specialtyId,
              clinicId: inputData.clinicId
            });
          case 9:
            resolve({
              errCode: 0,
              errMessage: "Save info doctor success!"
            });
          case 10:
            _context3.n = 12;
            break;
          case 11:
            _context3.p = 11;
            _t3 = _context3.v;
            reject(_t3);
          case 12:
            return _context3.a(2);
        }
      }, _callee3, null, [[0, 11]]);
    }));
    return function (_x5, _x6) {
      return _ref3.apply(this, arguments);
    };
  }());
};
var getDetailDoctorById = function getDetailDoctorById(inputId) {
  return new Promise(/*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(resolve, reject) {
      var data, _data, _t4;
      return _regenerator().w(function (_context4) {
        while (1) switch (_context4.n) {
          case 0:
            _context4.p = 0;
            if (inputId) {
              _context4.n = 1;
              break;
            }
            resolve({
              errCode: -1,
              errMessage: "Missing required parameter !"
            });
            _context4.n = 3;
            break;
          case 1:
            _context4.n = 2;
            return _index["default"].User.findOne({
              where: {
                id: inputId
              },
              attributes: {
                exclude: ["password"]
              },
              include: [{
                model: _index["default"].Markdown,
                attributes: ["description", "contentHTML", "contentMarkdown"]
              }, {
                model: _index["default"].AllCode,
                as: "positionData",
                attributes: ["valueEn", "valueVi"]
              }, {
                model: _index["default"].Doctor_Info,
                attributes: {
                  exclude: ["id", "doctorId"]
                },
                include: [{
                  model: _index["default"].AllCode,
                  as: "priceTypeData",
                  attributes: ["valueEn", "valueVi"]
                }, {
                  model: _index["default"].AllCode,
                  as: "provinceTypeData",
                  attributes: ["valueEn", "valueVi"]
                }, {
                  model: _index["default"].AllCode,
                  as: "paymentTypeData",
                  attributes: ["valueEn", "valueVi"]
                }]
              }],
              raw: false,
              nest: true
            });
          case 2:
            data = _context4.v;
            if (data && data.image) {
              data.image = new Buffer((_data = data) === null || _data === void 0 ? void 0 : _data.image, "base64").toString("binary");
            }
            if (!data) data = {};
            resolve({
              errCode: 0,
              data: data
            });
          case 3:
            _context4.n = 5;
            break;
          case 4:
            _context4.p = 4;
            _t4 = _context4.v;
            reject(_t4);
          case 5:
            return _context4.a(2);
        }
      }, _callee4, null, [[0, 4]]);
    }));
    return function (_x7, _x8) {
      return _ref4.apply(this, arguments);
    };
  }());
};
var bulkCreateSchedule = function bulkCreateSchedule(data) {
  return new Promise(/*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(resolve, reject) {
      var schedule, existing, toCreate, _t5;
      return _regenerator().w(function (_context5) {
        while (1) switch (_context5.n) {
          case 0:
            _context5.p = 0;
            if (!(!data.arrSchedule || !data.doctorId || !data.formatDate)) {
              _context5.n = 1;
              break;
            }
            resolve({
              errCode: 1,
              errMessage: "Missing required parameter!"
            });
            _context5.n = 4;
            break;
          case 1:
            schedule = data.arrSchedule;
            if (schedule && schedule.length > 0) {
              schedule = schedule.map(function (item) {
                item.maxNumber = MAX_NUMBER_SCHEDULE;
                return item;
              });
            }
            // get all existing data
            _context5.n = 2;
            return _index["default"].Schedule.findAll({
              where: {
                doctorId: data.doctorId,
                date: data.formatDate
              },
              attributes: ["timeType", "date", "doctorId", "maxNumber"],
              raw: false
            });
          case 2:
            existing = _context5.v;
            // compare different
            toCreate = _lodash["default"].differenceWith(schedule, existing, function (a, b) {
              return a.timeType === b.timeType && +a.date === +b.date;
            }); // create data
            if (!(toCreate && toCreate.length > 0)) {
              _context5.n = 3;
              break;
            }
            _context5.n = 3;
            return _index["default"].Schedule.bulkCreate(toCreate);
          case 3:
            resolve({
              errCode: 0,
              errMessage: "OK"
            });
          case 4:
            _context5.n = 6;
            break;
          case 5:
            _context5.p = 5;
            _t5 = _context5.v;
            reject(_t5);
          case 6:
            return _context5.a(2);
        }
      }, _callee5, null, [[0, 5]]);
    }));
    return function (_x9, _x0) {
      return _ref5.apply(this, arguments);
    };
  }());
};
var getScheduleByDate = function getScheduleByDate(doctorId, date) {
  return new Promise(/*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6(resolve, reject) {
      var dataSchedule;
      return _regenerator().w(function (_context6) {
        while (1) switch (_context6.n) {
          case 0:
            if (!(!doctorId || !date)) {
              _context6.n = 1;
              break;
            }
            resolve({
              errCode: -1,
              errMessage: "Missing required parameters  !"
            });
            _context6.n = 3;
            break;
          case 1:
            _context6.n = 2;
            return _index["default"].Schedule.findAll({
              where: {
                doctorId: doctorId,
                date: date
              },
              include: [{
                model: _index["default"].AllCode,
                as: "timeTypeData",
                attributes: ["valueEn", "valueVi"]
              }, {
                model: _index["default"].User,
                as: "doctorData",
                attributes: ["firstName", "lastName"]
              }],
              raw: false,
              nest: true
            });
          case 2:
            dataSchedule = _context6.v;
            if (!dataSchedule) dataSchedule = [];
            resolve({
              errCode: 0,
              errMessage: "OK",
              data: dataSchedule
            });
          case 3:
            try {} catch (e) {
              reject(e);
            }
          case 4:
            return _context6.a(2);
        }
      }, _callee6);
    }));
    return function (_x1, _x10) {
      return _ref6.apply(this, arguments);
    };
  }());
};
var getExtraDoctorById = function getExtraDoctorById(idInput) {
  return new Promise(/*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7(resolve, reject) {
      var data, _t6;
      return _regenerator().w(function (_context7) {
        while (1) switch (_context7.n) {
          case 0:
            _context7.p = 0;
            if (idInput) {
              _context7.n = 1;
              break;
            }
            resolve({
              errCode: -1,
              errMessage: "Missing required parameters!"
            });
            _context7.n = 3;
            break;
          case 1:
            _context7.n = 2;
            return _index["default"].Doctor_Info.findOne({
              where: {
                doctorId: idInput
              },
              attributes: {
                exclude: ["id", "doctorId"]
              },
              include: [{
                model: _index["default"].AllCode,
                as: "priceTypeData",
                attributes: ["valueEn", "valueVi"]
              }, {
                model: _index["default"].AllCode,
                as: "provinceTypeData",
                attributes: ["valueEn", "valueVi"]
              }, {
                model: _index["default"].AllCode,
                as: "paymentTypeData",
                attributes: ["valueEn", "valueVi"]
              }],
              raw: false,
              nest: true
            });
          case 2:
            data = _context7.v;
            if (!data) data = {};
            resolve({
              errCode: 0,
              data: data
            });
          case 3:
            _context7.n = 5;
            break;
          case 4:
            _context7.p = 4;
            _t6 = _context7.v;
            reject(_t6);
          case 5:
            return _context7.a(2);
        }
      }, _callee7, null, [[0, 4]]);
    }));
    return function (_x11, _x12) {
      return _ref7.apply(this, arguments);
    };
  }());
};
var getProfileDoctorById = function getProfileDoctorById(inputId) {
  return new Promise(/*#__PURE__*/function () {
    var _ref8 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee8(resolve, reject) {
      var data, _data2, _t7;
      return _regenerator().w(function (_context8) {
        while (1) switch (_context8.n) {
          case 0:
            _context8.p = 0;
            if (inputId) {
              _context8.n = 1;
              break;
            }
            resolve({
              errCode: -1,
              errMessage: "Missing required parameters!"
            });
            _context8.n = 3;
            break;
          case 1:
            _context8.n = 2;
            return _index["default"].User.findOne({
              where: {
                id: inputId
              },
              attributes: {
                exclude: ["password"]
              },
              include: [{
                model: _index["default"].Markdown,
                attributes: ["description", "contentHTML", "contentMarkdown"]
              }, {
                model: _index["default"].AllCode,
                as: "positionData",
                attributes: ["valueEn", "valueVi"]
              }, {
                model: _index["default"].Doctor_Info,
                attributes: {
                  exclude: ["id", "doctorId"]
                },
                include: [{
                  model: _index["default"].AllCode,
                  as: "priceTypeData",
                  attributes: ["valueEn", "valueVi"]
                }, {
                  model: _index["default"].AllCode,
                  as: "provinceTypeData",
                  attributes: ["valueEn", "valueVi"]
                }, {
                  model: _index["default"].AllCode,
                  as: "paymentTypeData",
                  attributes: ["valueEn", "valueVi"]
                }]
              }],
              raw: false,
              nest: true
            });
          case 2:
            data = _context8.v;
            if (data && data.image) {
              data.image = new Buffer((_data2 = data) === null || _data2 === void 0 ? void 0 : _data2.image, "base64").toString("binary");
            }
            if (!data) data = {};
            resolve({
              errCode: 0,
              data: data
            });
          case 3:
            _context8.n = 5;
            break;
          case 4:
            _context8.p = 4;
            _t7 = _context8.v;
            reject(_t7);
          case 5:
            return _context8.a(2);
        }
      }, _callee8, null, [[0, 4]]);
    }));
    return function (_x13, _x14) {
      return _ref8.apply(this, arguments);
    };
  }());
};
var getListPatientForDoctor = function getListPatientForDoctor(doctorId, date) {
  return new Promise(/*#__PURE__*/function () {
    var _ref9 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee9(resolve, reject) {
      var data, _t8;
      return _regenerator().w(function (_context9) {
        while (1) switch (_context9.n) {
          case 0:
            _context9.p = 0;
            if (!(!doctorId || !date)) {
              _context9.n = 1;
              break;
            }
            resolve({
              errCode: -1,
              errMessage: "Missing required parameters!"
            });
            _context9.n = 3;
            break;
          case 1:
            _context9.n = 2;
            return _index["default"].Bookings.findAll({
              where: {
                statusId: "S2",
                doctorId: doctorId,
                date: date
              },
              include: [{
                model: _index["default"].User,
                as: "patientData",
                attributes: ["email", "firstName", "address", "gender"],
                include: [{
                  model: _index["default"].AllCode,
                  as: "genderData",
                  attributes: ["valueEn", "valueVi"]
                }]
              }, {
                model: _index["default"].AllCode,
                as: "timeTypeDataPatient",
                attributes: ["valueEn", "valueVi"]
              }],
              raw: false,
              nest: true
            });
          case 2:
            data = _context9.v;
            resolve({
              errCode: 0,
              data: data
            });
          case 3:
            _context9.n = 5;
            break;
          case 4:
            _context9.p = 4;
            _t8 = _context9.v;
            reject(_t8);
          case 5:
            return _context9.a(2);
        }
      }, _callee9, null, [[0, 4]]);
    }));
    return function (_x15, _x16) {
      return _ref9.apply(this, arguments);
    };
  }());
};
var sendRemedy = function sendRemedy(data) {
  return new Promise(/*#__PURE__*/function () {
    var _ref0 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee0(resolve, reject) {
      var appointment, _t9;
      return _regenerator().w(function (_context0) {
        while (1) switch (_context0.n) {
          case 0:
            _context0.p = 0;
            if (!(!data.email || !data.doctorId || !data.patientId || !data.timeType || !data.imageBase64)) {
              _context0.n = 1;
              break;
            }
            resolve({
              errCode: -1,
              errMessage: "Missing required parameters!"
            });
            _context0.n = 5;
            break;
          case 1:
            _context0.n = 2;
            return _index["default"].Bookings.findOne({
              where: {
                doctorId: data.doctorId,
                patientId: data.patientId,
                timeType: data.timeType,
                statusId: "S2"
              },
              raw: false
            });
          case 2:
            appointment = _context0.v;
            if (!appointment) {
              _context0.n = 3;
              break;
            }
            appointment.statusId = "S3";
            _context0.n = 3;
            return appointment.save();
          case 3:
            _context0.n = 4;
            return _emailService["default"].sendAttachment(data);
          case 4:
            resolve({
              errCode: 0,
              errMessage: "OK"
            });
          case 5:
            _context0.n = 7;
            break;
          case 6:
            _context0.p = 6;
            _t9 = _context0.v;
            reject(_t9);
          case 7:
            return _context0.a(2);
        }
      }, _callee0, null, [[0, 6]]);
    }));
    return function (_x17, _x18) {
      return _ref0.apply(this, arguments);
    };
  }());
};
module.exports = {
  getTopDoctorHome: getTopDoctorHome,
  getAllDoctors: getAllDoctors,
  saveDetailInfoDoctor: saveDetailInfoDoctor,
  getDetailDoctorById: getDetailDoctorById,
  bulkCreateSchedule: bulkCreateSchedule,
  getScheduleByDate: getScheduleByDate,
  getExtraDoctorById: getExtraDoctorById,
  getProfileDoctorById: getProfileDoctorById,
  getListPatientForDoctor: getListPatientForDoctor,
  sendRemedy: sendRemedy
};