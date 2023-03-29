<template>
  <div id="app">
    <ArticleList msg="List of articles" />
    <div id="nav">
      <router-link to="/"> Articles </router-link><br>
      <router-link to="/about"> About</router-link><br>
      <router-link to="/new"> Add new Article</router-link><br>
    </div>
    <router-view/>
  </div>
</template>

<script>
// import Vue from 'vue'
// import VueAxios from 'vue-axios'
// import axios from 'axios'
// Vue.axios.get('http://localhost:10000/articles').then((response) => {
//   console.log(response.data)
// })

// this.axios.get('http://localhost:10000/articles').then((response) => {
//   console.log(response.data)
// })

// this.$http.get('http://localhost:10000/articles').then((response) => {
//   console.log(response.data)
// })


export default {
  name: 'App',
  // components: {
  //     //ArticleList
  // }
}
</script>

<style>
 @import './style.css';
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

</style>
