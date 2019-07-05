<template>
    <div id="app">
        <div id="content-wrap">
            <div id="input-section">
                <h2 id="heading-text">Heading Text</h2>
                <label for="email-field">E-mail</label>
                <input type="text" id="email-field">
                <label for="password-field">Password</label>
                <input type="password" id="password-field">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "InputContainer"
    }
</script>

<style scoped>
    #app {
        display: flex;
        height: 100%;
    }
    #content-wrap {
        display: flex;
        min-height: 82vh;
        flex-direction: column;
        width: 100%;
        height: auto;
        align-items: center;
        justify-content: center;
    }
    #input-section {
        display:flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        width: 30%;
        height: auto;
        border-radius: 20px;
        background: #F7F7F7;
    }
    #heading-text {
        align-self: center;
        margin-top: 5%;
    }
    label {
        margin-left: 15%;
        margin-top: 5%;
        margin-bottom: 2%;
    }
    #email-field{
        margin-left: 15%;
        min-width: 70%;
    }
    #password-field {
        margin-left: 15%;
        margin-bottom: 10%;
        min-width: 70%;
    }
</style>