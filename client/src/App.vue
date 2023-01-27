<template>
  <div id="app">
    <myUpload/>
  </div>
</template>

<script>
import myUpload from './components/myUpload.vue'

export default {
  name: 'App',
  components: {
    myUpload
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
