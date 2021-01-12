import { defineConfig } from 'dumi';

export default defineConfig({
  title: '实在智能',
  mode: 'site',
  logo: '/images/color-logo.png',
  publicPath: '/ii-site/',
  base: '/ii-site',
  history: { type: 'hash' },
  // more config: https://d.umijs.org/config
  styles: ['https://cdn.bootcdn.net/ajax/libs/antd/4.9.3/antd.css'],
});
