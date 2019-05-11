import API from "../../utils/API";

export default {
  isAuthorized() {
    API.isAuthorized()
      .then(res => {
        if (res.data.message) {
          this.resetState();
        } else {
          this.isAuth = true;
          this.username = res.data.username;
        }
      })
      .catch(err => {
        console.log(err);
        this.resetState();
      });
  },
  resetState() {
    this.isAuth = false
  },
  getLogInState() {
    return this.isAuth;
  },
  getUsername() {
    return this.username;
  }
}