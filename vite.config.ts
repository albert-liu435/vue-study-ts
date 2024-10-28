import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import UnoCSS from "unocss/vite";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";

import path from "path";

//https://blog.csdn.net/oBoLuoMi1/article/details/131008428
//https://blog.csdn.net/qq_51904231/article/details/134337777

// https://vite.dev/config/
export default defineConfig({
  //用于配置模块解析规则，包括路径别名、模块文件后缀名的解析顺序等
  resolve: {
    alias: {
      ///路径使用别名
      "@": path.resolve(__dirname, "src"),
    },
  },
  plugins: [
    vue(),
    createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd(), "src/assets/svgs")],
      symbolId: "icon-[dir]-[name]",
      inject: "body-last",
    }),
    AutoImport({
      imports: ["vue", "vue-router", "@vueuse/core", "pinia"],
      // eslintrc 配置在 unplugin-auto-import 中的作用是生成一个自动导入的 ESLint 配置文件
      // 生成的文件须在.eslintrc.js extends 中配置
      eslintrc: {
        enabled: true,
        filepath: "./.eslintrc-auto-import.json",
        globalsPropValue: true,
      },
      vueTemplate: true, // 在 Vue 模板内启用自动导入
      resolvers: [
        ElementPlusResolver({
          // importStyle: false
        }), // 如果项目UI框架为element-plus可使用次配置按需引入
      ],
      dts: path.resolve(__dirname, "types/auto-imports.d.ts"), // 生成的.d.ts文件保存路径
    }),
    Components({
      resolvers: [
        ElementPlusResolver({
          // importStyle: false
        }), // 如果项目UI框架为element-plus可使用次配置按需引入
        // 按需引入 component目录下组件
        // 引入组件名前缀自动带上Tm前缀
        {
          type: "component",
          resolve: (name) => {
            if (!name.match(/^Tm[A-Z]/)) {
              return;
            }
            const partialName = name.slice(2);
            return { name: partialName, from: `@/components/${partialName}` };
          },
        },
      ],
      dts: path.resolve(__dirname, "types/components.d.ts"), // 生成的.d.ts文件保存路径
    }),
    UnoCSS(),
  ],
  optimizeDeps: {
    // exclude: ['loads-es']
  },
});
