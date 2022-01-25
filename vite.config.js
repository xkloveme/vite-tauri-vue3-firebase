import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  base: './', // 生产环境下的公共路径
  build: {
    base: './', // 生产环境下的公共路径
    outDir: './dist',
    minify: 'terser'// 混淆器，terser构建后文件体积更小
  },
  plugins: [vue()],
  // 本地运行配置，及反向代理配置
  server: {
    host: 'localhost',
    port: 2022,
    cors: true, //默认启用并允许任何源
    https: false,
    // open: true, //在服务器启动时自动在浏览器中打开应用程序
    // 反向代理配置，注意rewrite写法
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src")
    }
  }
});
