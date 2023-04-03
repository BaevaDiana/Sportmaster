<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul v-if="articles.length">
      <ArticleBlock
        v-for="article in articles" 
        :key="article.id"
        :title="article.title"
        :body="article.body"
        :publish="article.publish"
        :author="article.author"
      />
    </ul>
    <p v-else>
      No articles in the list.
    </p>
    <div>{{ count }}</div>
  </div>
</template>

<script>
//import ArticleForm from '../components/ArticleForm.vue'
import { mapState } from 'vuex';
import ArticleBlock from '../components/ArticleBlock.vue'
import store from '../store'
export default{
  name: 'ArticleList',
  props: {
      msg:String
  },
  components: {
      ArticleBlock//,ArticleForm
  },
  data() {
      return {
          articles: store.state.articles
      }
  },
  computed: mapState({
    count: state => state.count++,
  }),
  //beforeMount:function(){
     //fetch('/articles.json')
          //.then(response =>response.json())
          //.then(articles =>store.articles=articles);
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