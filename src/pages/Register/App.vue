<template>
    <div id="app">
        <navbar />
        <register-container @create:user="createUser" />
        <user-table :users="users"/>
        <bottom-nav />
    </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import RegisterContainer from '@/pages/Register/RegisterContainer'
import BottomNav from '@/components/BottomNav'

import UserTable from '@/pages/Userlist/UserTable'

export default {
  name: 'Register',
  components: {
    Navbar,
    RegisterContainer,
    BottomNav,
    UserTable
  },
  data: function () {
    return {
      users: [
        {
          id: 0,
          name: 'Lorem ipsum',
          email: 'dolor@sit.amet',
          creationDate: '30.05.2019'
        },
        {
          id: 1,
          name: 'Consectetur adipiscing',
          email: 'eiusmod@tempor.incididunt',
          creationDate: '31.05.2019'
        }
      ]
    }
  },
  methods: {
    createUser (user) {
      this.users = [...this.users, user]
    }
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
