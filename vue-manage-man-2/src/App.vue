<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style lang="less">
* {
  padding: 0;
  margin: 0;
  //box-sizing: border-box;
}

#app {
  height: 100%;
}
</style>
