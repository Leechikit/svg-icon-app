<template>
  <div id="app">
    <VueOfficialSvgIcons></VueOfficialSvgIcons>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import VueOfficialSvgIcons from '@/components/VueOfficialSvgIcons.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    VueOfficialSvgIcons
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
