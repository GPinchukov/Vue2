<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  text-align: center;
  margin-top: 60px;
}
html, body{
  background: url("assets/img/background.jpg") 100% 100% no-repeat;
  height: 100%;
}
  ul{
  list-style-type: none;

  }
</style>
