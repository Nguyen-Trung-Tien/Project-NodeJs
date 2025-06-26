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
  let data = await CRUDservice.getAllUser();
  console.log(">>>", data);
  return res.render("displayGetCRUD.ejs", { dataTable: data });
};
module.exports = {
  getHomePage: getHomePage,
  getAboutPage: getAboutPage,
  getCRUD: getCRUD,
  postCRUD: postCRUD,
  displayGetCRUD: displayGetCRUD,
};
