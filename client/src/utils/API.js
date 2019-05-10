import axios from "axios";

export default {
  // Gets all books
  getLatestList: function () {
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  signIn: function (email, password) {
    axios.post("/api/user/login", { "email": email, "password": password })
      .then(res => {
        console.log(res)
        if (res) {
          console.log("Successful Login" + res);
          this.setState({
            currentPage: "Dashboard"
          });
        } else {
          console.log("sign-in error");
        }
      })
  },
  // Deletes the book with the given id
  signUp: function (id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function (bookData) {
    return axios.post("/api/books", bookData);
  }
};
