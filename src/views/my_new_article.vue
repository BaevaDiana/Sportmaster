<template>
    <ArticleForm title="New title" body="" author="" publish=""
      v-on:add-article="addArticle" />
</template>

<script>
import ArticleForm from '@/components/ArticleForm.vue'
import store from '../store'
import axios from 'axios'

export default{
  components: {
      ArticleForm
  },

  //data() {
      
      //return {
         // articles: []
      //}
  //},
  methods:{
      addArticle:function(article){
          let newArticle = {
              id: store.state.articles.length+1,
              ...article
          }
          // store.commit('addArticle', newArticle);
          // //this.articles.push(newArticle);
          // console.log(article.title);
          // this.$router.push('/')
          let data = {
            title: newArticle.title,
            author: newArticle.author,
            body: newArticle.body,
            published: newArticle.publish
      };
            // Отправляем запрос POST на сервер с помощью Axios
        
            axios.post('http://localhost:10000/articles', data)
          .then(response => {
            console.log(response);
            store.commit('addArticle', newArticle);
            
          })
          .catch(error => {
            console.log(error);
          });
        this.$router.push('/articles');
            }
  },
  //beforeMount:function(){
     // fetch('/articles.json')
          //.then(response =>response.json())
          //.then(articles =>this.articles=articles);
      //console.log('Fetch data');
  //}
}
</script>

<style scoped>
h3{
  margin:40px 0 0;
}
ul {
  list-style-type: none;
  padding:0;
}
li {
  display: inline-block;
  margin:0 10px;
}
a {
  color: #42b983;
}