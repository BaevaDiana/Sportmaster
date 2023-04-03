<!-- <template>
    <div>
        <h2>Add new article</h2>
        <form>
            <div><input type="text" v-model="article.title" placeholder="Title"></div>
            <div><input type="text" v-model="article.author" placeholder="Author"></div>
            <div><textarea v-model="article.body" placeholder="Body"></textarea></div>
            <div><label><input type="checkbox" v-model="article.publish">Published </label></div>        
            <div class="green"><input type="submit" value="Add" v-on:click.prevent="$emit('add-article',article)" /></div>
        </form>
    </div>
</template> -->

<template>
    <v-form>
        <v-container>
            <v-text-field
            v-model="article.title"
            :counter="50"
            required
          ></v-text-field>

          <v-text-field
            v-model="article.author"
            label="Author"
            required
          ></v-text-field>

          <v-textarea
            v-model="article.body"
            auto-grow
            variant="filled"
            label="Body"
            rows="2"
            required
          ></v-textarea>

          <v-checkbox
            v-model="article.publish"
            label="Published"
            type="checkbox"
            ></v-checkbox>
          <v-btn class="button"
            type="submit"
            v-on:click.prevent="$emit('add-article',article)"
            >
            ADD
            </v-btn>
        </v-container>
    </v-form>
</template>

<script>
export default {
    name: 'ArticleForm',
    props: {
        title: String,
        body: String,
        publish: Boolean,
        author:String
    },
    data(){
        return{
            article:{
                title:this.title,
                body:this.body,
                publish:this.publish,
                author:this.author
            }
        }
    }
};
</script>

<style scoped>
h2{
    padding-top:20px;
    padding-left:20px;
}
.button{
    background-color: chartreuse;
}
</style>

