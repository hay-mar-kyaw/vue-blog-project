<template>
    <div>
        <h1>Realtime page</h1>
        <div v-for="post in posts" :key="post.id">
            <div>
                <h1>{{ post.title }}</h1>
                <p>{{ post.body }}</p>
            </div><hr>
        </div>
    </div>
</template>

<script>
import {ref} from 'vue'
import { db } from '@/firebase/config';

export default {
    setup () {
        let posts=ref([])
        db.collection("posts").orderBy("created_at","desc").onSnapshot((snap)=>{
            posts.value=snap.docs.map((doc)=>{
                return {id:doc.id,...doc.data()}
                
            })
        })

        return {posts}
    }
}
</script>

<style lang="scss" scoped>

</style>