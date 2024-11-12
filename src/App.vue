<template>
  <header>
    <hr>
      <!-- router-link组件 -->
      <router-link to="/">首页</router-link>
      <router-link to="/about">关于我们</router-link>
      <!-- $router属性 -->
      <!-- <button @click="$router.push('/')">首页</button> -->
      <!-- $route属性 -->
      <!-- <button @click="console.log($route)"></button> -->
    <hr>
  </header>
  <main>
    <!-- RouterView组件 定义路由出口 -->
    <router-view></router-view>
  </main>
</template>

<script setup lang="ts">



</script>

<!-- <style lang="scss" scoped> -->
<style scoped>
body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
div {
  padding: 20px;
}

</style>