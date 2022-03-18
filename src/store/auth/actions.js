import useServerCall from '../../utils/general/serverCall';
import notifier from '../../utils/general/notify';
import { api } from "boot/axios";

let { axiosCall } = useServerCall();

export default {
    async login(context, loginData) {

      await api.get('/sanctum/csrf-cookie');

      const onSuccess = (responseMsg) => {
        notifier.successNotify('Successful Login');
      }

      await axiosCall('post', '/login', loginData, onSuccess);

      context.commit('setIsLoggedIn', true);
    },
    async logout(context) {

      const onSuccess = (responseMsg) => {
        notifier.successNotify('Logged out successfully');
      }

      await axiosCall('post', '/logout');

      context.commit('setIsLoggedIn', false);
    },
};
