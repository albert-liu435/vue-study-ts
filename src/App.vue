<template>
  <div>
    <h2>hello lodash-es</h2>
  </div>
</template>

<script setup lang="ts">
import { clone,shuffle, cloneDeep, throttle, debounce } from 'lodash-es'

//浅拷贝 clone
var objects = [{ 'a': 1 }, { 'b': 2 }];
 
const shallow = clone(objects);
console.log(shallow[0] === objects[0]);
// => true


var objects = [{ 'a': 1 }, { 'b': 2 }];
const deep = cloneDeep(objects);
console.log(deep[0] === objects[0]); // false






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