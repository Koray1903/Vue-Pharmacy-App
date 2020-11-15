<template>
    <section id="app">

        <router-view/>

    </section>
</template>

<script>
    import {store} from "@/store/store";

    export default {
        name: "App",
        store
    };
</script>

<style>
    #app {
        font-family: 'Montserrat', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
    }

    body {
        margin:0;
        padding:0;
    }
</style>
