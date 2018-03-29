<template>
  <div id="app" class="container">
    <Header v-show="islogin"></Header>
    <router-view/>
  </div>
</template>

<script>
import Header from "@/components/header.vue"
export default {
  name: 'App',
  components: { Header },
  data(){
      return {

      }
  },
    computed:{
        islogin(){
            return this.$store.state.login
        }
    }

}



</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;

}
</style>
