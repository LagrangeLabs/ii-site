---
title: 进阶
order: 2
toc: menu
nav:
  title: 指南
  order: 1
---

### 主题

由于项目采用 ant-design + umi，因此主题颜色定制[antd theme](https://ant.design/docs/react/customize-theme-cn)

### 容器化

主要介绍一下 nginx 配置两个比较重要的转发

- 第一个是 history 路由，刷新页面时保证能加载到正确的文件
- 第二个是前端对后端接口做的转发，防止跨域等问题

```
location / {
  include /etc/nginx/mime.types;
  root   /app/;
  try_files $uri $uri/  /index.html;
  index  index.html index.htm;
}

location /api_v1/user {
  proxy_redirect off;
  proxy_set_header Host demo-url;
  proxy_set_header X-Real-IP $remote_addr;
  proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
  proxy_pass http://demo-url/user;
}
```
