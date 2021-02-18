<template>
  <div id="app">
    <Header></Header>
    <Menu></Menu>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Menu from './components/Menu.vue';

export default {
  name: 'App',
  components: {
    Header,
    Menu
  }
}
</script>

<style>
* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}
html {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    font-size: 62.5%;
}
body {
    font-size: 1.6rem;
}
.fondo {
  background-color: blue ;  
}
</style>
