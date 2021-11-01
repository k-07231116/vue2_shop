<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
// import storage from './storage/index'
export default {
  mounted() {
    // this.axios.get('/mock/user/login.json').then((res) => {
    //   console.log('res', res)
    // })
    if (this.$cookie.get('userId')) {
      this.getUser()
    }
  },
  methods: {
    getUser() {
      this.axios.get('/user').then((res) => {
        this.username = res.username
        this.$store.dispatch('saveUserName', res.username)
      })
    }
  }
}
</script>

<style lang="scss">
@import './assets/scss/reset.scss';
@import './assets/scss/config.scss';
@import './assets/scss/basic.scss';

@import './assets/scss/button.scss';
</style>
