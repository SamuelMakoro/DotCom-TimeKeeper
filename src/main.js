// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'core-js/es6/promise'
import 'core-js/es6/string'
import 'core-js/es7/array'
// import cssVars from 'css-vars-ponyfill'
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App'
import router from './router'
import Vuesax from 'vuesax'

//Vuesax styles
import 'vuesax/dist/vuesax.css' 
Vue.use(Vuesax)

//A date & time picker component imported from Vue.js Examples
import VueCtkDateTimePicker from 'vue-ctk-date-time-picker';
import 'vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.min.css';

// todo
// cssVars()

Vue.use(BootstrapVue)
//Imported date & time picker component registered
Vue.component('vue-ctk-date-time-picker', VueCtkDateTimePicker);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App
  }
})
