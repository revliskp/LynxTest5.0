<template>
    <div id="app">
        <button class="footer-button" id="footer-home">Home</button>
        <button class="footer-button" id="footer-login">Sign in</button>
        <button class="footer-button" id="footer-register">Sign up</button>
        <button class="footer-button" id="footer-userlist">Users</button>
    </div>
</template>

<script>
    export default {
        name: "BottomNav"
    }
</script>

<style scoped>
    #app {
        display: flex;
        align-items: center;
        justify-content: center;
        bottom: 0;
        padding-bottom: 0;
        text-align: center;
        width: 100%;
        height: 100%;
        background: #F7F7F7;
    }
    .footer-button {
        padding: 20px 30px;
        background: none;
        border: 1px solid #F7F7F7;
    }
    .footer-button:hover {
        border-top-color: #000000;
    }
</style>