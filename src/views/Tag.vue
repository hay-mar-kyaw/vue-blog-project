<template>
    <div class="tag">
        <div v-if="error">
            <p>{{ error }}</p>
        </div >
        <div v-if= "posts.length" class="layout">
            <div>
                <PostsList :posts="filteredPost"></PostsList>
            </div>
            <div>
                <TagFilter :posts="posts"></TagFilter>
            </div>
            
        </div>
    </div>
</template>

<script>
import TagFilter from '../components/TagFilter'
import getPosts from '@/composable/getPosts';
import PostsList from '@/components/PostsList.vue';
import { computed } from 'vue';

    export default {
  components: {
    TagFilter, PostsList },
        props:['tag'],
        setup(props){
            let {posts,error,load}=getPosts()

            load();
            let filteredPost=computed(()=>{
                return posts.value.filter((post)=>{
                    return post.tags.includes(props.tag)
                })
            })
            console.log(filteredPost);
            return{posts,error,filteredPost}
        }

    }
</script>

<style>
.tag{
    max-width: 1200px;
    margin: 0 auto;
}
</style>