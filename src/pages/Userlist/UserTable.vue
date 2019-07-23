<template>
  <div id="app">
    <div id="content-wrap">
      <div id="user-list">
        <h3>Our Users:</h3>
        <table id="user-table">
          <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Registration date</td>
          </tr>
          </thead>
          <tr v-for="user in users"
              :key="user.id">
            <td>{{user.name}}</td>
            <td>{{user.email}}</td>
            <td>{{user.creationDate}}</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserTable',
  props: {
    users: Array
  }
}
</script>

<style scoped>
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
