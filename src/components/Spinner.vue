<template>
    <div class="spin"></div>
</template>

<script>
    export default {
        
    }
</script>

<style  scoped>
    .spin{
        width: 30px;
        height: 30px;
        border: 5px solid transparent;
        border-radius: 50%;
        border-top-color: crimson;
        margin: 30px auto;
        animation: spin 2s infinite;
    }
    @keyframes spin{
        to{
            transform: rotate(360deg)
        };
    }
</style>