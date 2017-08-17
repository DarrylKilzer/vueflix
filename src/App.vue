<template>
  <div id="app">
    <h1><img src="./assets/logo.png">ue-Flix</h1>
    <Main></Main>
  </div>
</template>

<script>
import Main from './components/Main'
import DrawFlix from './components/DrawFlix'

export default {
  name: 'app',
  components: {
    Main,
    DrawFlix
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
