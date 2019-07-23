<template>
    <div id="app">
        <div id="logo-container">
            <img alt="Logo" id="logo" :src="logo">
        </div>
        <div id="greeting">
            <h1>White Clouds</h1>
        </div>
        <div class="nav-buttons">
            <nav>
              <div>
                <nav>
                  <router-link tag="button" class="nav-button" v-for="routes in links"
                               :key="routes.id"
                               :to="`${routes.page}`">{{routes.text}}</router-link>
                </nav>
              </div>
            </nav>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Navbar',
  data: function () {
    return {
      logo: require('@/assets/logo.png'),
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
        width: 100%;
        height: 10vh;
        align-items: center;
        justify-content: center;
        background: #F7F7F7;
        padding: auto;
    }
    #logo-container{
        flex: 1;
        height: 100%;
        width: 10vw;
        justify-content: center;
        background: #F7F7F7;
    }
    #logo {
        padding: 2% 0 0 15%;
        max-height: 80%;
    }
    #greeting {
        display: flex;
        justify-content: center;
        height: 100%;
        flex: 1;
        font-size: 1vw;
        border: 1px solid #F7F7F7;
        border-bottom-color: #000000;
    }
    .nav-buttons {
        display: flex;
        height: 100%;
        flex: 1;
        align-items: center;
        justify-content: flex-end;
    }
    .nav-button {
        text-align: center;
        padding: 2vh;
        height: 10vh;
        font-size: 1vw;
        border: 1px solid #F7F7F7;
        background: none;
    }
    .nav-button:hover {
        border-bottom-color: #000000;
    }
</style>
