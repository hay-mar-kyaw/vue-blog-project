<template>
    <div>
        <h1>Posts List</h1>
        <div v-for="post in posts" :key="post.id">
            <SinglePost :post="post"></SinglePost>
        </div>
    </div>
</template>

<script>

import SinglePost from './SinglePost'
export default {
  components: { SinglePost },
    props:["posts"],
    setup () {
        

        return {}
    }
}
</script>

<style scoped>

</style>