import API from "../../utils/API";

export default {
  isAuthorized() {
    return API.isAuthorized()
      .then(res => {
        if (res.data.message) {
          this.resetState();
        } else {
          this.isAuth = true;
          this.username = res.data.username;
          sessionStorage.setItem('status', 'loggedIn');
          return true;
        }
      })
      .catch(err => {
        console.log(err);
        this.resetState();
        return false;
      });
  },
  resetState() {
    sessionStorage.removeItem("status");
    this.isAuth = false
  },
  getLogInState() {
    return this.isAuth;
  },
  getUsername() {
    return this.username;
  }
}