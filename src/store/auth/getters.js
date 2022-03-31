export default {
    getIsLoggedIn(state){
      if (state.isLoggedIn === null){
        return false;
      }

      return state.isLoggedIn || (localStorage.getItem('loginState') && parseInt(localStorage.getItem('loginState')) === 1);
    },
    getLoggedInUser(state){
        return state.user;
    },
}
