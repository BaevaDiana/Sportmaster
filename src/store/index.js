import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import {Types} from '../store/types.js'

Vue.use(Vuex)


export default new Vuex.Store({
    state: {
        articles: [],
        status: null
      },
      getters: {
        articles: state => state.articles
      },
      mutations: {
        [Types.mutations.ARTICLES_REQUESTED](state) {
          state.status = Types.request_status.REQUESTED
        },
        [Types.mutations.ARTICLES_SUCCEEDED](state, articles) {
          state.status = Types.request_status.SUCCEEDED
          state.articles = articles
        },
        [Types.mutations.ARTICLES_FAILED](state) {
          state.status = Types.request_status.FAILED
          state.articles = []
        },
        [Types.mutations.ARTICLES_CANCELED](state) {
          state.status = Types.request_status.CANCELED
        },
        [Types.mutations.ARTICLE_ADD_REQUESTED](state) {
          state.status = Types.request_status.REQUESTED
        },
        [Types.mutations.ARTICLE_ADD_SUCCEEDED](state, article) {
          state.status = Types.request_status.SUCCEEDED
          state.articles.push(article)
        },
        [Types.mutations.ARTICLE_ADD_FAILED](state) {
          state.status = Types.request_status.FAILED
        }
      },
      actions: {
        [Types.actions.LOAD_ARTICLES]({ commit }) {
          commit(Types.mutations.ARTICLES_REQUESTED)
          axios.get('/api/articles')
            .then(response => {
              commit(Types.mutations.ARTICLES_SUCCEEDED, response.data)
            })
            .catch(() => {
              commit(Types.mutations.ARTICLES_FAILED)
            })
        },
        [Types.actions.CANCEL_ARTICLES_REQUEST]({ commit }) {
          commit(Types.mutations.ARTICLES_CANCELED)
        },
        [Types.actions.ADD_ARTICLE]({ commit }, article) {
          commit(Types.mutations.ARTICLE_ADD_REQUESTED)
          axios.post('/api/articles', article)
            .then(response => {
              commit(Types.mutations.ARTICLE_ADD_SUCCEEDED, response.data)
            })
            .catch(() => {
              commit(Types.mutations.ARTICLE_ADD_FAILED)
            })
        }
      }
    // state:{
    //     articles: [],
    //     count: 0
    // },
    // mutations: {
    //     fetchArticles(state,articles){
    //         state.articles = articles;
    //     },
    //     addArticle(state,article) {
    //         state.articles.push(article);
    //     },
    //     increment (state){
    //         state.count++
    //     },
    // },
    // actions: {
    //     fetchAarticles(context){
    //         fetch('/articles.json')
    //         .then(response => response.json())
    //         .then(articles => context.commit('fetchArticles',articles));
    //         console.log('Fetch data');
    //     }
    // },
    // modules: {
    // }
});

