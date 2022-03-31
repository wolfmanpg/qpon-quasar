import useServerCall from "../../utils/general/serverCall";
import { api } from "boot/axios";

let { axiosCall } = useServerCall();

export default {
  async login(context, loginData) {
    await api.get("/sanctum/csrf-cookie");

    const onSuccess = (responseMsg) => {
      //save login state
      context.commit("setIsLoggedIn", true);
      localStorage.setItem("loginState", "1");
    };

    await axiosCall("post", "/login", loginData, onSuccess);
  },
  async logout(context) {
    const onSuccess = (responseMsg) => {
      //set logout state
      context.commit("setIsLoggedIn", false);
      localStorage.removeItem("loginState");
    };

    await axiosCall("post", "/logout", {} , onSuccess);
  },
  async expireSession(context) {
      //set logout state
      context.commit("setIsLoggedIn", false);
      localStorage.removeItem("loginState");
  }
};
