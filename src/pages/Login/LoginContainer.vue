<template>
    <div id="app">
        <div id="content-wrap">
            <form @submit.prevent="handleSubmit" id="login-form">
                <h3 id="heading-text">{{ $route.meta.title }}</h3>
                <label for="email-field">E-mail</label>
                <input v-model="user.email" id="email-field" type="text" />
                <label for="password-field">Password</label>
                <input v-model="user.password" id="password-field" type="text" />
                <div id="buttons">
                  <button id="submit-button">Submit</button>
                  <!-- <router-link to="/submission"
                               id="submit-button"
                               tag="button">Submit</router-link> -->
                  <div>
                    <p>Not a member yet?</p>
                    <router-link to="/register"
                                 id="register-button">Register</router-link>
                  </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
  name: 'InputContainer',
  data: function () {
    return {
      user: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    handleSubmit () {
      console.log('testing handleSubmit')
    }
  }
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
    #login-form {
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
    input {
      margin-left: 15%;
      min-width: 70%;
      border-radius: 5px;
      border: 1px solid #D3D3D3;
      height: 3vh;
    }
    #email-field{
      margin-left: 15%;
      min-width: 70%;
    }
    #password-field {
      margin-left: 15%;
      min-width: 70%;
    }
    #buttons {
      display: flex;
      width: 70%;
      align-items: center;
      justify-content: space-between;
      margin-top: 5%;
      margin-left: 15%;
      margin-bottom: 5%;
    }
    #submit-button {
      padding: 3% 5%;
      border-radius: 5px;
      background: #D3D3D3;
      border: none;
    }
    #submit-button:hover {
      background: #C0C0C0;
      cursor: pointer;
    }
    #register-button {
      color: #808080;
    }
    p {
      white-space: normal;
      font-size: small;
      margin: 0;
    }
</style>
