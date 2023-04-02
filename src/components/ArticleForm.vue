<template>
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
input[type="text"] {
    padding-top:30px;
    padding-left: 20px;
    border-bottom: 1px solid rgb(0, 0, 0);
    border-radius: 4px;
}
textarea {
    padding-top:40px;
    padding-left: 10px;
    border-bottom: 2px solid rgb(0, 0, 0);
    border-radius: 4px;
}
label{
    padding-top:200px;
    padding-left: 10px;
}
input [type="submit"] {
    background-color: blue;
    color: white;
    padding-top:30px;
    padding-left: 10px;
    border-bottom: 2px solid rgb(0, 0, 0);
    border-radius: 4px;
}
.green{
    margin-top:30px;
    margin-left:15px;
    background-color: chartreuse;
    width: 80px;
    height: 35px;
    text-align: center;
    color:white;
    border-radius: 4px;

}



</style>

