import axios from "axios";


export default {
  // Gets all books
  getLatestList: function () {
    return axios.get("/api/entries");
  },
  register: function (user) {
    return axios.post("/api/user/register", user);
  },
  login: function (user) {
    return axios.post("/api/user/login", user);
  },
  isAuthorized: function () {
    return axios.get("/api/user/authorized");
  },
  logout: function () {
    return axios.get("/api/user/logout");
  }
}