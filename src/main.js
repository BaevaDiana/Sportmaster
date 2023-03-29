import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
//import CustomInput from '.components/CustomInput.vue'
import router from './router'
import store from './store'
import VueAxios from 'vue-axios'

Vue.config.productionTip = false

//Vue.component('CustomInput',CustomInput);

store.dispatch('fetchArticles');
Vue.use(VueAxios,axios)

//import ArticleList from './components/ArticleList.vue'
// Vue.axios.get('http://localhost:10000/articles').then((response) => {
//   console.log(response.data)
// })

// this.axios.get('http://localhost:10000/articles').then((response) => {
//   console.log(response.data)
// })

// this.$http.get('http://localhost:10000/articles').then((response) => {
//   console.log(response.data)
// })


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
