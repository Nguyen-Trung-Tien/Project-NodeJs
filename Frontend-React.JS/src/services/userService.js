import axios from "../axios";

const handleLoginApi = (userEmail, userPassword) => {
  return axios.post("/api/login", { email: userEmail, password: userPassword });
};

const getAllUsers = (idInput) => {
  return axios.get(`/api/get-all-users?id=${idInput}`);
};

const createNewUserService = (data) => {
  return axios.post("/api/create-new-user", data);
};
export { handleLoginApi, getAllUsers, createNewUserService };
