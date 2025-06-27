import db from "../models/index";
import CRUDservice from "../services/CRUDservice";

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
  let message = await CRUDservice.createNewUser(req.body);
  console.log(message);
  return res.send("Ok create new user!");
};

let displayGetCRUD = async (req, res) => {
  try {
    let data = await CRUDservice.getAllUser();
    return res.render("displayGetCRUD.ejs", { dataTable: data });
  } catch (error) {}
};

let getEditCRUD = async (req, res) => {
  let userId = req.query.id;
  console.log(userId);
  if (userId) {
    let useData = await CRUDservice.getUserInfoById(userId);

    return res.render("editCRUD.ejs", {
      user: useData,
    });
  } else {
    return res.send("Hello page");
  }
};
let putCRUD = async (req, res) => {
  let data = req.body;
  let allUsers = await CRUDservice.updateUserData(data);
  return res.render("displayGetCRUD.ejs", { dataTable: allUsers });
};

module.exports = {
  getHomePage: getHomePage,
  getAboutPage: getAboutPage,
  getCRUD: getCRUD,
  postCRUD: postCRUD,
  displayGetCRUD: displayGetCRUD,
  getEditCRUD: getEditCRUD,
  putCRUD: putCRUD,
};
