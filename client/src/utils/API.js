import axios from "axios";

export default {
  // Gets all books
  getLatestList: function () {
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  signIn: function (email, password) {
    return axios.post("/api/user/login", { "email": email, "password": password })
  },
  // Deletes the book with the given id
  signUp: function (email, password, username) {
    return axios.post("/api/user/register", { "email": email, "password": password, "username": username })
  },
  // Saves a book to the database
  saveBook: function (bookData) {
    return axios.post("/api/books", bookData);
  }
};
