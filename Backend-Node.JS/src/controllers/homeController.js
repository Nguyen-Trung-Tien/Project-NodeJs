import db from "../models/index";
import CRUDService from "../services/CRUDService";

let getHomePage = async (req, res) => {
  try {
    let data = await db.User.findAll();

    return res.render("homepage.ejs", {
      data: JSON.stringify(data),
    });
  } catch (e) {
    console.log(e);
  }
};

let getAboutPage = async (req, res) => {
  try {
    return res.render("test/aboutPage.ejs");
  } catch (e) {}
};
let getCRUD = async (req, res) => {
  return res.render("getCRUD.ejs");
};

let postCRUD = async (req, res) => {
  let message = await CRUDService.createNewUser(req.body);
  return res.send("Ok create new user!", message);
};

let displayGetCRUD = async (req, res) => {
  try {
    let data = await CRUDService.getAllUser();
    return res.render("displayGetCRUD.ejs", { dataTable: data });
  } catch (error) {}
};

let getEditCRUD = async (req, res) => {
  let userId = req.query.id;
  if (userId) {
    let useData = await CRUDService.getUserInfoById(userId);

    return res.render("editCRUD.ejs", {
      user: useData,
    });
  } else {
    return res.send("Hello page");
  }
};
let putCRUD = async (req, res) => {
  let data = req.body;
  let allUsers = await CRUDService.updateUserData(data);
  return res.render("displayGetCRUD.ejs", { dataTable: allUsers });
};

let deleteUserById = async (req, res) => {
  let id = req.query.id;
  if (id) {
    await CRUDService.deleteUserById(id);
    return res.send("delete user succeed!");
  } else {
    return res.send("User note found!");
  }
};
module.exports = {
  getHomePage: getHomePage,
  getAboutPage: getAboutPage,
  getCRUD: getCRUD,
  postCRUD: postCRUD,
  displayGetCRUD: displayGetCRUD,
  getEditCRUD: getEditCRUD,
  putCRUD: putCRUD,
  deleteUserById: deleteUserById,
};
