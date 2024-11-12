<template>
  <div>
    <h1>    <!-- vue3 -->
      {{ $dayjs('20221214').format('YY-MM-DD HH:mm:ss') }}</h1>
      <h1>{{ currentDate }}</h1>
      <h1>{{dayUtil.getCurrentDate()}}</h1>
      <h1>{{current}}</h1>
  </div>
</template>

<script setup lang="ts">

import dayUtil from './utils/utilDays';


import { getCurrentInstance } from 'vue';
const instance = getCurrentInstance();
const $dayjs = instance?.appContext.config.globalProperties.$dayjs;
const currentDate = $dayjs().format('YYYY-MM-DD');

const current=dayUtil.getCurrentDate();


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