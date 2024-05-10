<template>
  <div>
    <!-- <div>
      <input type="text" v-model="search">
    </div>
      <div v-for="name in filterNames" :key="name">
          {{ name }}
      </div> -->
    <div v-if="posts.length>0">
      <PostsList :posts="posts"></PostsList>    
    </div> 
    <div v-else>
        <Spinner/>
    </div> 
  
      
  </div>
</template>

<script>
import Spinner from '../components/Spinner'
import PostsList from '../components/PostsList'
import getPosts from '@/composable/getPosts';


export default {
  components: {
    Spinner,
    PostsList },
    setup(){
      // let search=ref("")
      // let names=ref(["Aung Aung","Zaw Zaw","Su Su","Zin Zin"]);
      // let filterNames=computed(()=>{
      //   return names.value.filter((name)=>{
      //     return name.includes(search.value);
      //   })
      // })
      // return {
      //   names,search,filterNames
      // }

      /********************************************************************* */

      //Composable function

      let {posts,error,load}=getPosts();
      load();
      return{posts,error}
    }
    
}
</script>
<style>
.home {
    max-width: 1200px;
    margin: 0 auto;
    padding: 10px;
  }
</style>
