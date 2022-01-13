import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import qiankun from 'vite-plugin-qiankun';

// https://vitejs.dev/config/
export default defineConfig({
  // 生产环境需要指定运行域名作为base
  // base: 'http://xxx.com/',
  plugins: [qiankun('vite-vue3', {
    useDevMode: true
  }), vue()],
  server: {
    port: 7106
  }
})
