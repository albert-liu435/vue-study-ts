<template>
  <div>
    <h1>VueUse Core Example</h1>
    <div>
      <h2>Window Size</h2>
      <p>Width: {{ width }}</p>
      <p>Height: {{ height }}</p>
    </div>
    <div>
      <h2>Mouse Position</h2>
      <p>X: {{ x }}</p>
      <p>Y: {{ y }}</p>
    </div>
    <div>
      <h2>Page Title</h2>
      <input v-model="title" placeholder="Enter page title" />
    </div>
    <div>
      <h2>Local Storage</h2>
      <input v-model="storedValue" placeholder="Enter something to store" />
      <p>Stored Value: {{ storedValue }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref,watch} from "vue"
import { useWindowSize, useMouse, useTitle, useStorage } from '@vueuse/core'

//获取窗口尺寸大小
const {width,height} =useWindowSize()

//获取鼠标位置
const {x,y} =useMouse()

//动态设置页面标题
const title=ref('VueUse Example')
useTitle(title)

//使用localStorage存储数据
const storedValue=useStorage('my-storage-key','')




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