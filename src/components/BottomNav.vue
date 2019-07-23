<template>
    <div id="app">
      <nav>
        <router-link tag="button" class="footer-button" v-for="routes in links"
                     :key="routes.id"
                     :to="`${routes.page}`">{{routes.text}}</router-link>
      </nav>
    </div>
</template>

<script>
export default {
  name: 'BottomNav',
  data: function () {
    return {
      links: [
        {
          id: 0,
          text: 'Home',
          page: '/'
        },
        {
          id: 1,
          text: 'Log in',
          page: '/login'
        },
        {
          id: 2,
          text: 'Register',
          page: '/register'
        },
        {
          id: 3,
          text: 'Userlist',
          page: '/userlist'
        }
      ]
    }
  }
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
