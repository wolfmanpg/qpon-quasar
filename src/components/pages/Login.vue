<template>
<div>
 <q-header elevated>
    <q-toolbar>
      <q-toolbar-title>Qpon App</q-toolbar-title>
    </q-toolbar>
  </q-header>

  <container class="q-mt-xl" :isLoading="loginProcessing" :hasError="false">

    <div class="row justify-center">
      <div class="col-xs-10 col-sm-9 col-md-5">
        <q-card class="q-pa-lg">
          <page-header>Login</page-header>

          <q-form @submit="login" class="q-gutter-md">
            <q-input
              filled
              v-model.number="email"
              label="Email"
              lazy-rules="ondemand"
              :rules="[formSchema.email.validate]"
              :error-message="formSchema.email.errorMessage"
              :error="formSchema.email.hasError"
            >
              <template v-slot:prepend>
                <q-icon name="email" />
              </template>
            </q-input>

            <q-input
              filled
              v-model.number="password"
              label="Password"
              lazy-rules="ondemand"
              :rules="[formSchema.password.validate]"
              :error-message="formSchema.password.errorMessage"
              :error="formSchema.password.hasError"
            >
              <template v-slot:prepend>
                <q-icon name="lock" />
              </template>
            </q-input>

            <!-- save buttons -->
            <div class="row justify-center">
              <q-btn
                label="Login"
                type="submit"
                color="primary"
                class="full-width"
                padding="0.81rem"
              />
            </div>
          </q-form>
        </q-card>
      </div>
    </div>
  </container>
</div>


</template>

<script>
import { ref,computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import useActionDispatcher from "../../utils/general/actionDispatcher.js";

export default {
  setup() {
    const $store = useStore();
    const $router = useRouter();

    const email = ref("");
    const password = ref("");
    const loginProcessing = ref(false);

    let { dispatchAction, formSchema } = useActionDispatcher();

    //set form schema
    formSchema.value = {
      email: {
        validate: function (val) {
          return true;
        },
        hasError: false,
        errorMessage: "",
      },
      password: {
        validate: function () {
          return true;
        },
        hasError: false,
        errorMessage: "",
      },
    };

    return {
      formSchema,
      email,
      password,
      loginProcessing,

      login() {
        loginProcessing.value = true;

        const data = {
          email: email.value,
          password: password.value
        }

        const onSuccess = () => {
          loginProcessing.value = false;
          $router.replace('/');
        }

        dispatchAction('auth/login', data, onSuccess);
      },
    };
  },
};
</script>
