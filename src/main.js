import Vue from 'vue';
import App from './App.vue';
import store from './store/user';
import router from './router/index';
import vuetify from './plugins/vuetify';

import '@aws-amplify/ui-vue';
import Amplify, * as AmplifyModules from 'aws-amplify';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);

Vue.use(AmplifyModules);

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app');
