<template>
  <div id="app" class="web-font">
      <router-view ></router-view>
  </div>
</template>

<script>
import '@/assets/css/base.css'
export default {
    name: 'app',
}
</script>

<style>
 html, body, #app {
    /* background-color: #2a2c3b; */
    font-size: 14px;
    height: 100%;
    margin: 0px;
    padding: 0px;
}
</style>
