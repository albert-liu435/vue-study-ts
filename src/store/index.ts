/**
 *demo.ts
 */
import { createPinia, defineStore } from "pinia";
//对外暴露
export const useDemoStore = defineStore("demo", {
  // persist: true,
  state: () => ({
    demoid: 1,
    /**
     * .vue
     * import useDemoStore from '@/store/demo
     * const demoStore = useDemoStore
     * console.log(demoStore.demo)
     * */
  }),
  //actions里面放置的是方法，用于响应组件中的动作
  actions: {
    add(value: number) {
      this.demoid = value;
    },
  },
});
