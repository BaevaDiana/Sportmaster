<template>
    <div v-bind:class="{red_publish: !(publish)}">
        <h3  > {{title}} </h3>
        <h5>
            {{body}}  
        </h5>  
        <h2>{{ upperAuthor }}</h2> 
        <button v-on:click.prevent="$emit('state')">Published</button>
    </div>
</template>

<script>

export default {
    name: 'ArticleBlock',
    props: {
        title: String,
        body: String,
        publish: Boolean,
        author:String
    },
    computed:{
        upperAuthor(){
            return this.author.toUpperCase();
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
</style>

