import { boot } from 'quasar/wrappers'
import DateInput from 'components/ui/DateInput.vue';
import PageHeader from 'components/layout/PageHeader.vue';
import Container from 'components/layout/Container.vue';
import Login from 'components/pages/Login.vue';

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(({ app }) => {
  // something to do

  app.component('date-input', DateInput);
  app.component('page-header', PageHeader);
  app.component('container', Container);
  app.component('login', Login);
})
