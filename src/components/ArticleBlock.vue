<!-- <template>
    <div v-bind:class="{red_publish: !(publish)}">
        <h3  > {{title}} </h3>
        <h5>
            {{body}}  
        </h5>  
        <h2>{{ upperAuthor }}</h2> 
        <button v-on:click.prevent="$emit('state')">Published</button>
    </div>
</template> -->

<template>
    <v-card class="card" elevation="12" color="grey lighten-4" width="1000">
      <v-img src="../assets/article.png" height="300" width="400"></v-img>
      <v-card-title>{{ title }}</v-card-title>
      <v-card-text class="text1">{{ body }}</v-card-text>
      <v-card-text class="author1" v-bind:class="{ 'red--text': !publish }">{{ upperAuthor}}</v-card-text>
      <v-card-actions>
        <button class="button1" v-on:click.prevent="$emit('state')">{{ publish ? 'PUBLISH' : 'UNPUBLISH' }}</button>
      </v-card-actions>
    </v-card>
</template>


<script>
export default {
    name: 'ArticleBlock',
    props: {
        title: String,
        body: String,
        publish: Boolean,
        author:String,
        id: {
             type:Number,
             required: true
            },
    },
    computed:{
        upperAuthor(){
            return this.author.toUpperCase();
        },
        article() {
            console.log(`${this.$store.state.articles}`)
        return this.$store.state.articles.find(article => article.id === Number(this.id))
        }
    },
    watch:{
        publish(newVal,oldVal){
            console.log(`${newVal} ${oldVal}`)
        }
    }
};
</script>

<style scoped>
h3 {
    color: #999;
}
.card {
    margin-bottom: 50px;
    padding: 20px;
    border: 2px solid #000000;
  }
  .text1{
    font-size:larger;
  }
  .author1{
    font-style: italic;
    font-size: medium;
  }
  .button1{
    background-color: rgb(255, 102, 0);
    width: 100px;
    height: 35px;
    text-align: center;
    color:white;
    border-radius: 15px;
  }
</style>


