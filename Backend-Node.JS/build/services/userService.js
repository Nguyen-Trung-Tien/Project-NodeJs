"use strict";

var _index = _interopRequireDefault(require("../models/index"));
var _bcryptjs = _interopRequireDefault(require("bcryptjs"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var salt = _bcryptjs["default"].genSaltSync(10);
var hashUserPassword = function hashUserPassword(password) {
  return new Promise(/*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(resolve, reject) {
      var hashPassword, _t;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            _context.p = 0;
            _context.n = 1;
            return _bcryptjs["default"].hashSync(password, salt);
          case 1:
            hashPassword = _context.v;
            resolve(hashPassword);
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
var handleUserLogin = function handleUserLogin(email, password) {
  return new Promise(/*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(resolve, reject) {
      var userData, isExist, user, check, _t2;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.n) {
          case 0:
            _context2.p = 0;
            userData = {};
            _context2.n = 1;
            return checkUserEmail(email);
          case 1:
            isExist = _context2.v;
            if (!isExist) {
              _context2.n = 6;
              break;
            }
            _context2.n = 2;
            return _index["default"].User.findOne({
              attributes: ["id", "email", "roleId", "password", "firstName", "lastName"],
              where: {
                email: email
              },
              raw: true
            });
          case 2:
            user = _context2.v;
            if (!user) {
              _context2.n = 4;
              break;
            }
            _context2.n = 3;
            return _bcryptjs["default"].compareSync(password, user.password);
          case 3:
            check = _context2.v;
            if (check) {
              userData.errCode = 0;
              userData.errMessage = "OK";
              delete user.password;
              userData.user = user;
            } else {
              userData.errCode = 3;
              userData.errMessage = "Wrong password!";
            }
            _context2.n = 5;
            break;
          case 4:
            userData.errCode = 2;
            userData.errMessage = "User's not found!";
          case 5:
            _context2.n = 7;
            break;
          case 6:
            userData.errCode = 1;
            userData.errMessage = "Your`s Email isn`t exits in your`s system. Plz try other Email!";
          case 7:
            resolve(userData);
            _context2.n = 9;
            break;
          case 8:
            _context2.p = 8;
            _t2 = _context2.v;
            reject(_t2);
          case 9:
            return _context2.a(2);
        }
      }, _callee2, null, [[0, 8]]);
    }));
    return function (_x3, _x4) {
      return _ref2.apply(this, arguments);
    };
  }());
};
var checkUserEmail = function checkUserEmail(userEmail) {
  return new Promise(/*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(resolve, reject) {
      var user, _t3;
      return _regenerator().w(function (_context3) {
        while (1) switch (_context3.n) {
          case 0:
            _context3.p = 0;
            _context3.n = 1;
            return _index["default"].User.findOne({
              where: {
                email: userEmail
              }
            });
          case 1:
            user = _context3.v;
            if (user) {
              resolve(true);
            } else {
              resolve(false);
            }
            _context3.n = 3;
            break;
          case 2:
            _context3.p = 2;
            _t3 = _context3.v;
            reject(_t3);
          case 3:
            return _context3.a(2);
        }
      }, _callee3, null, [[0, 2]]);
    }));
    return function (_x5, _x6) {
      return _ref3.apply(this, arguments);
    };
  }());
};
var getAllUsers = function getAllUsers(userId) {
  return new Promise(/*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(resolve, reject) {
      var users, _t4;
      return _regenerator().w(function (_context4) {
        while (1) switch (_context4.n) {
          case 0:
            _context4.p = 0;
            users = "";
            if (!(userId === "All")) {
              _context4.n = 2;
              break;
            }
            _context4.n = 1;
            return _index["default"].User.findAll({
              attributes: {
                exclude: ["password"]
              }
            });
          case 1:
            users = _context4.v;
          case 2:
            if (!(userId && userId !== "All")) {
              _context4.n = 4;
              break;
            }
            _context4.n = 3;
            return _index["default"].User.findAll({
              where: {
                id: userId
              },
              attributes: {
                exclude: ["password"]
              }
            });
          case 3:
            users = _context4.v;
          case 4:
            resolve(users);
            _context4.n = 6;
            break;
          case 5:
            _context4.p = 5;
            _t4 = _context4.v;
            reject(_t4);
          case 6:
            return _context4.a(2);
        }
      }, _callee4, null, [[0, 5]]);
    }));
    return function (_x7, _x8) {
      return _ref4.apply(this, arguments);
    };
  }());
};
var createNewUser = function createNewUser(data) {
  return new Promise(/*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(resolve, reject) {
      var checkEmail, hashPasswordFromBcrypt, _t5;
      return _regenerator().w(function (_context5) {
        while (1) switch (_context5.n) {
          case 0:
            _context5.p = 0;
            _context5.n = 1;
            return checkUserEmail(data.email);
          case 1:
            checkEmail = _context5.v;
            if (!(checkEmail === true)) {
              _context5.n = 2;
              break;
            }
            resolve({
              errCode: 1,
              errMessage: "Your Email is already in used!,Plz try another email! "
            });
            _context5.n = 4;
            break;
          case 2:
            _context5.n = 3;
            return hashUserPassword(data.password);
          case 3:
            hashPasswordFromBcrypt = _context5.v;
            _context5.n = 4;
            return _index["default"].User.create({
              email: data.email,
              password: hashPasswordFromBcrypt,
              firstName: data.firstName,
              lastName: data.lastName,
              address: data.address,
              phoneNumber: data.phoneNumber,
              gender: data.gender,
              roleId: data.roleId,
              positionId: data.positionId,
              image: data.avatar
            });
          case 4:
            resolve({
              errCode: 0,
              errMessage: "OK"
            });
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
var deleteUser = function deleteUser(userId) {
  return new Promise(/*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6(resolve, reject) {
      var foundUser, _t6;
      return _regenerator().w(function (_context6) {
        while (1) switch (_context6.n) {
          case 0:
            _context6.p = 0;
            _context6.n = 1;
            return _index["default"].User.findOne({
              where: {
                id: userId
              }
            });
          case 1:
            foundUser = _context6.v;
            if (!foundUser) {
              resolve({
                errCode: 2,
                errMessage: "The user isn't exits "
              });
            }
            _context6.n = 2;
            return _index["default"].User.destroy({
              where: {
                id: userId
              }
            });
          case 2:
            resolve({
              errCode: 0,
              errMessage: "The user is delete! "
            });
            _context6.n = 4;
            break;
          case 3:
            _context6.p = 3;
            _t6 = _context6.v;
            reject(_t6);
          case 4:
            return _context6.a(2);
        }
      }, _callee6, null, [[0, 3]]);
    }));
    return function (_x1, _x10) {
      return _ref6.apply(this, arguments);
    };
  }());
};
var updateUserData = function updateUserData(data) {
  return new Promise(/*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7(resolve, reject) {
      var user, _t7;
      return _regenerator().w(function (_context7) {
        while (1) switch (_context7.n) {
          case 0:
            _context7.p = 0;
            if (!data.id || !data.roleId || !data.positionId || !data.gender) {
              resolve({
                errCode: 2,
                errMessage: "Missing required parameter!"
              });
            }
            _context7.n = 1;
            return _index["default"].User.findOne({
              where: {
                id: data.id
              },
              raw: false
            });
          case 1:
            user = _context7.v;
            if (!user) {
              _context7.n = 3;
              break;
            }
            user.firstName = data.firstName;
            user.lastName = data.lastName;
            user.address = data.address;
            user.phoneNumber = data.phoneNumber;
            user.roleId = data.roleId;
            user.gender = data.gender;
            user.positionId = data.positionId;
            if (data.avatar) {
              user.image = data.avatar;
            }
            _context7.n = 2;
            return user.save();
          case 2:
            resolve({
              errCode: 0,
              errMessage: "Update the user succeed!"
            });
            _context7.n = 4;
            break;
          case 3:
            resolve({
              errCode: 1,
              errMessage: "User's not found!"
            });
          case 4:
            _context7.n = 6;
            break;
          case 5:
            _context7.p = 5;
            _t7 = _context7.v;
            reject(_t7);
          case 6:
            return _context7.a(2);
        }
      }, _callee7, null, [[0, 5]]);
    }));
    return function (_x11, _x12) {
      return _ref7.apply(this, arguments);
    };
  }());
};
var getAllCodeService = function getAllCodeService(typeInput) {
  return new Promise(/*#__PURE__*/function () {
    var _ref8 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee8(resolve, reject) {
      var res, allCode, _t8;
      return _regenerator().w(function (_context8) {
        while (1) switch (_context8.n) {
          case 0:
            _context8.p = 0;
            if (typeInput) {
              _context8.n = 1;
              break;
            }
            resolve({
              errCode: 1,
              errMessage: "Missing required parameters!"
            });
            _context8.n = 3;
            break;
          case 1:
            res = {};
            _context8.n = 2;
            return _index["default"].AllCode.findAll({
              where: {
                type: typeInput
              }
            });
          case 2:
            allCode = _context8.v;
            res.errCode = 0;
            res.data = allCode;
            resolve(res);
          case 3:
            _context8.n = 5;
            break;
          case 4:
            _context8.p = 4;
            _t8 = _context8.v;
            reject(_t8);
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
module.exports = {
  handleUserLogin: handleUserLogin,
  getAllUsers: getAllUsers,
  createNewUser: createNewUser,
  deleteUser: deleteUser,
  updateUserData: updateUserData,
  getAllCodeService: getAllCodeService
};