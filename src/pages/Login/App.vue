<template>
    <div id="app">
        <navbar />
        <h3>login</h3>
        <input-container />
        <bottom-nav />
    </div>
</template>

<script>
    import Navbar from "@/components/Navbar"
    import InputContainer from "@/components/InputContainer"
    import BottomNav from "@/components/BottomNav"

    export default {
        name: 'app',
        components: {
            Navbar,
            InputContainer,
            BottomNav
        }
    }
</script>

<style>
    html, body {
        font-family: Arial, Helvetica, sans-serif;
        height: 100%;
        margin: 0;
    }
</style>