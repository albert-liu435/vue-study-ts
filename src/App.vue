import { useDemoStore } from './store/index';
<template>
<div>
    {{ demoStore.demoid }}
    <button @click="add"></button>
  </div>
</template>

<script setup lang="ts">
//引入仓库
import {useDemoStore} from "./store"
//拿到数据
const demoStore=useDemoStore();
console.log("ssss"+demoStore.demoid)



function add(){
//处理修改数据
	//第一种方式：直接修改
	demoStore.demoid =7
	
	//第二种方式：批量修改
	// demoStore.$patch({
	//      demoid：7，
	//    })
  demoStore.$patch({ demoid: demoStore.demoid + 1 })
	   
	/**
	*第三种方式：借助`action`修改（`action`中可以编写一些业务逻辑）
	*组件中调用`action`即可
	*当一个方法被重复调用时，推荐使用第三种方法
	*/
	// demoStore.add(7)
	// console.log('222',demoStore.demoid)
}


</script>

<style lang="scss" scoped>


</style>