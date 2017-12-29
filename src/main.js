import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Routes from './routes'
import ContactUs from './components/ContactUs.vue'
import Copywrite from './components/Copywrite.vue'
import CreateFilter from './components/CreateFilter.vue'
import CreatJob from './components/CreatJob.vue'
import Footer from './components/BottomFooter.vue'
import MapAdress from './components/MapAdress.vue'
import Navbar from './components/Navbar.vue'
import Summary from './components/ShortView.vue'
import Banner from './components/‌Banner.vue'


Vue.use(VueRouter);
Vue.use(VueResource);

const router = new VueRouter({
routes:Routes,
  mode:'history'
});

new Vue({
  el: '#app',
  router:router,
  render: h => h(App),

});

Vue.config.devtools = true;
