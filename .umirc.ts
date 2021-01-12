import { defineConfig } from 'dumi';

export default defineConfig({
  title: '实在智能',
  mode: 'site',
  logo: '/images/color-logo.png',
  // more config: https://d.umijs.org/config
  styles: [
    'https://cdn.bootcdn.net/ajax/libs/antd/4.9.3/antd.css',
    './global.css',
  ],
});
