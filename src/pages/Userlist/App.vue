<template>
    <div id="app">
        <navbar></navbar>
        <user-table />
        <BottomNav />
    </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import UserTable from '@/pages/Userlist/UserTable'
import BottomNav from '@/components/BottomNav'

export default {
  name: 'Userlist',
  components: {
    BottomNav,
    UserTable,
    Navbar
  }
}
</script>

<style>
    html, body {
        font-family: Arial, Helvetica, sans-serif;
        height: 100%;
        margin: 0;
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
    #user-list {
        display:flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: auto;
        height: auto;
        padding: 20px 20px 50px 20px;
        border-radius: 20px;
        background: #F7F7F7;
    }
    #user-table {
        border-collapse: collapse;
        border: 1px solid #808080;
    }

    thead {
        white-space: nowrap;
        text-align: left;
        font-weight: 700;
    }
    tr td {
        padding: 1rem;
        border: 1px solid #808080;
    }
</style>
