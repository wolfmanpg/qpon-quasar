import notifier from "./notify";
import { useStore } from "vuex";
import { ref } from "vue";
import { useRouter } from "vue-router";

export default function useActionDispatcher() {
  const $store = useStore();
  const $router = useRouter();

  const formSchema = ref({});

  //dispatching action
  const dispatchAction = (
    name,
    data = null,
    onSuccess = null,
    onError = null,
    onFinally = null,
  ) => {
    $store
      .dispatch(name, data)
      .then(() => {
        if (onSuccess !== null) {
          onSuccess();
        }
      })
      .catch((error) => {
        handleServerError(error.message);

        if (onError !== null) {
          onError(error);
        }
      })
      .finally( () => {
        if (onFinally !== null) {
          onFinally();
        }
      });
  };

  //handling server error, depending on error status and error messages
  const handleServerError = (serverErrorObject) => {
    let errorObject = JSON.parse(serverErrorObject);

    //check if it's a validation error
    if (errorObject.status === 422) {
      handleValidationErrors(errorObject.validationErrors);
      return;
    }

    if (errorObject.status === 401){
      notifier.warningNotify('Session expired, please login again');
      $store.dispatch('auth/expireSession');
      $router.replace('/login');
      return;
    }

    //from this point forward, is not a validation error
    let errorMessage;

    try {
      //check if the message is a json string
      const parsedError = JSON.parse(errorObject.message);

      //if it is, take the message property from it (that was passed from server)
      errorMessage = parsedError.message;
    } catch {
      errorMessage = "An error occured!";
    }

    notifier.errorNotify(errorMessage);
  };

  //function for handling validation errors
  const handleValidationErrors = (validationErrors) => {
    let foundValidationInput = false;
    let form = formSchema.value;

    //loop through the form schema and check if a field exists in validation errors
    for (const field in form) {
      formSchema.value[field].hasError = false;
      formSchema.value[field].errorMessage = "";

      //check if current field exists in validation errors
      for (const validatedInput in validationErrors) {

        //if it exists, update its has error value and set the error message
        if (field === validatedInput) {
          formSchema.value[field].hasError = true;
          formSchema.value[field].errorMessage = validationErrors[validatedInput][0];
          foundValidationInput = true;
        }
      }//end of validation errors loop


    }//end of form loop

    //if no field was found to connect with the form, notify an error
    //with a string of messages from the errors returned from server
    if (!foundValidationInput) {
      let errorString = [];

      for (const error in validationErrors) {
        errorString.push(validationErrors[error]);
      }

      notifier.errorNotify(errorString.join(" , "));
    }
  };

  return {
    dispatchAction,
    formSchema,
  };
}
