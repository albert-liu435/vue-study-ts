import { useDemoStore } from './store/index';
<template>
  <div class="count">
    <h2>当前求和为：{{demoid}}</h2>
  </div>
</template>

<script setup lang="ts" name="Count">
  import { useDemoStore} from '@/store'
  /* 引入storeToRefs */
  import { storeToRefs } from 'pinia'
//storeToRefs只会关注sotre中数据，不会对方法进行ref包裹

  /* 得到countStore */
  const demoStore =useDemoStore()
  /* 使用storeToRefs转换countStore，随后解构 */
  const {demoid} = storeToRefs(demoStore)
</script>

<style  scoped>


</style>