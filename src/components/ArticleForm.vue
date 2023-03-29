<template>
    <div>
        <h2>Add new Article</h2>
        <form>
            <div><input type="text" v-model="article.title" placeholder="Title"></div>
            <div><input type="text" v-model="article.author" placeholder="Author"></div>
            <div><textarea v-model="article.body" placeholder="Body"></textarea></div>
            <div><label><input type="checkbox" v-model="article.publish">Published </label></div>        
            <div><input type="submit" value="Add" v-on:click.prevent="$emit('add-article',article)" />.</div>
        </form>
        
    </div>
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
h3 {
    color: #999;
}
</style>

