export default {
    getIsLoggedIn(state){
      if (state.isLoggedIn === null){
        return false;
      }

      return state.isLoggedIn || (localStorage.getItem('loginState') && parseInt(localStorage.getItem('loginState')) === 1);
    },
    getUserInfo(state){
        return state.user;
    },
    shouldLoadUserInfo(state){
        return state.shouldLoadUserInfo;
    },
}
