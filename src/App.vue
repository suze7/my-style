<template>
  <div id="app" class="pub-layout-home">
    <Header class="pub-layout-header"/>
    <Menu class="pub-layout-menu"/>
    <div class="pub-layout-main">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Header from './components/home/header/Header';
import Menu from './components/home/menu/Menu';
export default {
  name: "Home",
  components: {
    Header,
    Menu
  },
  data: function() {
    return {
    };
  }
};
</script>

<style>
</style>
