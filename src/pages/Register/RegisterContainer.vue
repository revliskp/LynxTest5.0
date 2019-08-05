<template>
  <div id="app">
    <div id="content-wrap">
      <form @submit.prevent="handleSubmit" id="register-form">
        <h3 id="heading-text">{{ $route.meta.title }}</h3>
        <label for="name-field">Name</label>
        <input
          ref="first"
          type="text"
          :class="{ 'has-error': submitting && invalidName }"
          v-model="user.name"
          @focus="clearStatus"
          @keypress="clearStatus"
          id="name-field"
        />
        <label for="email-field">E-mail</label>
        <input
          type="email"
          :class="{ 'has-error': submitting && invalidEmail }"
          v-model="user.email"
          @focus="clearStatus"
          id="email-field"
        />
        <label for="password-field">Password</label>
        <input
          type="password"
          :class="{ 'has-error': submitting && invalidPassword }"
          v-model="user.password"
          @focus="clearStatus"
          id="password-field"
        />
        <p v-if="error && submitting" class="error-message">
          ❗ Please fill out all required fields
        </p>
        <p v-if="success" class="success-message">
          ✅ You have successfully registered!
        </p>
        <!-- <input type="text" v-model="user.password" id="password-field"> -->
        <div id="buttons">
          <button id="submit-button">Submit</button>
          <!-- <router-link to="/submission"
                       id="submit-button"
                       tag="button">Submit</router-link> -->
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RegisterContainer',
  data: function () {
    return {
      submitting: false,
      error: false,
      success: false,
      user: {
        name: '',
        email: '',
        password: ''
      }
    }
  },
  methods: {
    handleSubmit () {
      this.submitting = true
      this.clearStatus()

      if (this.invalidName || this.invalidEmail || this.invalidPassword) {
        this.error = true
        return
      }

      this.$emit('create:user', this.user)
      this.$refs.first.focus()
      this.user = {
        name: '',
        email: '',
        password: ''
      }
      this.error = false
      this.success = true
      this.submitting = false
    },

    clearStatus () {
      this.success = false
      this.error = false
    }
  },
  computed: {
    invalidName () {
      return this.user.name === ''
    },
    invalidEmail () {
      return this.user.email === ''
    },
    invalidPassword () {
      return this.user.password === ''
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
  #register-form {
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
  [class*='-message'] {
    font-weight: 500;
  }
  .error-message {
    color: #d33c40;
    margin-left: 15%;
    align-items: center;
    justify-content: center;
  }
  .success-message {
    color: #32A95D;
    margin-left: 15%;
    align-items: center;
    justify-content: center;
  }
  .has-error {
    border: 1px solid #D33C40;
  }
</style>
