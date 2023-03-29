<!-- <template>
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
          v-on:state="article.publish =!article.publish"
        />
      </ul>
      <p v-else>
        No articles in the list.
      </p>
      <ArticleForm title="New title" body="" author="" publish=""
        v-on:add-article="addArticle" />
    </div>
  </template> -->
  <template>
    <div class="hello">
      <div v-if="loading" class="loader"></div>
      <ul v-if="!loading">
        <div v-if="articles.length">
          <ArticleBlock
            v-for="article in articles"
            :key="article.id"
            :title="article.title"
            :body="article.body" 
            :publish="article.publish"
            :author="article.author"
            v-on:state="article.publish = !article.publish"
          />
        </div>
        <p v-else>
          No articles in the list.
        </p>
      </ul>
      <button v-if="loading" @click="cancelRequest">Cancel</button>
      <div v-if="errorMessage">{{ errorMessage }}</div>
      <!-- <div>Количество статей ={{ count }}</div> -->
      <!-- <ArticleForm title="New title" body="" author="" publish=""
        v-on:add-article="addArticle" /> -->
    </div>
  </template>

  
<script>
// import ArticleForm from './ArticleForm.vue'
import ArticleBlock from './ArticleBlock.vue'
// import store from '@/store'
import axios from 'axios'
import { loadArticles } from '@/services/articlesService';
export default {
  name: 'ArticleList',
  props: ['msg'],
  components:{
    // ArticleForm,
    ArticleBlock
  },
  data(){
    return {
      articles:[],
      loading:false,
      cancelTokenSource: null,
      errorMessage: ''
    };
},
methods:{
    loadArticles() {
        this.loading = true;
        this.articles = [];
        this.cancelTokenSource = axios.CancelToken.source();
        loadArticles(this.cancelTokenSource)
            .then(data => {
                this.articles = data;
            })
            .catch(error => {
                console.error(error);
                this.errorMessage = error.message;
            })
            .finally(() => {
                this.loading = false;
            });
        
    },
    cancelRequest() {
        if (this.loading && this.cancelTokenSource) {
            this.cancelTokenSource.cancel('Request cancelled');
        }
    }
},
beforeMount()  {
    this.loadArticles();
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3{
  margin:40px 0 0;
}
ul{
  list-style-type:none;
  padding:0;
}
li{
  display:inline-block;
  margin: 0 10px;
}
a{
  color:#42b983
}
.loader {
  border: 16px solid #f3f3f3;
  border-top: 16px solid #3498db;
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;
  margin-left: auto;
  margin-right: auto;
}
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>