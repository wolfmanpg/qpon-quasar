export default {
    setIsLoggedIn(state, isLoggedIn) {
        state.isLoggedIn = isLoggedIn;
    },
    setUserInfo(state, user) {
        state.user = user;
        state.shouldLoadUserInfo = false;
    },
};
