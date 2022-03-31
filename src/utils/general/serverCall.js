import { api } from "boot/axios";

export default function useServerCall() {

  //throwing error
  const throwError = (error, onError) => {
    if (onError !== null) {
      onError(error);
    }

    const errorRequest = error.request;

    let errorInstance = {
      status: errorRequest.status,
      message: 'Error Occured..',
      validationErrors: {}
    };

   if (errorRequest.status >= 501){
    errorInstance.message = errorRequest.response;
   }

   if (errorRequest.status === 422){
    errorInstance.validationErrors = JSON.parse(errorRequest.response).errors;
   }

   throw new Error(JSON.stringify(errorInstance));
  };

  //function handling the axios call
  const axiosCall = async (
    type,
    url,
    data = {},
    onSuccess = null,
    onError = null
  ) => {
    let response;

    if (type === "post") {

      //post request
      response = await api
        .post(url, data)
        .then((response) => {
          if (onSuccess !== null) {
            console.log('calling on success now');
            onSuccess(response.data);
            console.log('FINISH on success now');
          }
        })
        .catch((error) => {
          throwError(error, onError);
        });
    } else {

      //get request
      response = await api
        .get(url, { params: data })
        .then((response) => {
          if (onSuccess !== null) {
            onSuccess(response.data);
          }
        })
        .catch((error) => {
          throwError(error, onError);
        });
    }
  };

  return {
    axiosCall,
  };
}
