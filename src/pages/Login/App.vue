<template>
    <div id="app">
        <navbar />
        <input-container />
        <bottom-nav />
    </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import InputContainer from '@/pages/Login/LoginContainer'
import BottomNav from '@/components/BottomNav'

export default {
  name: 'Login',
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
