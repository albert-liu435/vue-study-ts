<template>
<div class="container">
    <div>{{ x }}-{{ y }}</div>
    <div>{{ store }}</div>
    <div>
      <button @click="addNum">add-{{ counter }}</button>
    </div>
    <div>
      <button @click="fullScreen">全屏</button>
    </div>
    <div>
      <button @click="copyContent">点击复制</button>
    </div>
    <div :class="mode">
      <button @click="btn">切换主题色</button>
    </div>
    <div>
      <button ref="element">useEventListener</button>
    </div>
    <div>{{ width }}-{{ height }}</div>
    <div>
      <button @click="throttledFn">throttledFn 3s</button>
    </div>
    <div>
      <input ref="target" type="text" />
      <button type="button" @click="focused = true">focus</button>
    </div>
    <div ref="outside" style="border: 1px solid #ccc">Hello world</div>
  </div>
</template>

<script setup lang="ts">
import { watch, ref } from "vue";
import {
  useFullscreen,
  useClipboard,
  useLocalStorage,
  useMouse,
  useWindowSize,
  useDebounceFn,
  useThrottleFn,
  useColorMode,
  useEventListener,
  useCloned,
  useFocus,
  onClickOutside,
} from "@vueuse/core";


// 鼠标坐标
const { x, y } = useMouse();
 
// clone
const original = ref({ key: "value" });
const { cloned } = useCloned(original);
original.value.key = "some new value";
 
console.log(cloned.value, original.value);
 
// useStorage, useLocalStorage, useSessionStorage
const store = useLocalStorage("my-storage", {
  name: "Apple",
  color: "red",
});
 
// 防抖
const counter = ref(0);
const addNum = useDebounceFn(
  () => {
    counter.value += 1;
  },
  300,
  { maxWait: 5000 }
);
 
// 节流
const throttledFn = useThrottleFn(() => {
  // do something, it will be called at most 1 time per second
  console.log("throttledFn");
}, 3000);
 
// 全屏
const { isFullscreen, toggle } = useFullscreen();
const fullScreen = () => {
  console.log("isFullScreen=", isFullscreen.value);
  toggle();
};
 
// 点击粘贴useClipboard
const { text, copy, isSupported } = useClipboard();
const copyContent = () => {
  console.log("当前浏览器是否支持", isSupported.value, text.value);
  copy("点击复制");
};
 
// 切换颜色
const mode = useColorMode();
const btn = () => {
  mode.value = mode.value === "light" ? "dark" : "light";
};
 
// vueuse事件绑定
const element = ref(null);
useEventListener(element, "click", () => {
  console.log("监听点击事件");
});
 
// 获取窗口宽高
const { width, height } = useWindowSize();
 
// 自动获取焦点
const target = ref(null);
const { focused } = useFocus(target, { initialValue: true });
 
watch(focused, (focused) => {
  if (focused) console.log("input element has been focused");
  else console.log("input element has lost focus");
});
 
// 在这个元素外点击触发
const outside = ref(null);
onClickOutside(outside, (event) => console.log("outside click=", event));


</script>

<!-- <style lang="scss" scoped> -->
<style scoped>
.light {
  background-color: #ccc;
}
.dark {
  background-color: #333;
}
.container {
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  flex-wrap: wrap;
  flex-direction: column;
}
 
.container > div {
  width: 400px;
  display: flex;
  justify-content: center;
}

</style>