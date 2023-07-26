### 路由配置规则
- 路由配置文件：src/router/index.js
### 常规页面配置方式
直接在page页面下建立文件夹，文件夹下建立index.vue文件，即可访问

路由地址为：/文件夹名

### 嵌套路由配置方式
page下面建立文件夹layout，文件夹下建立index.vue文件，文件内部建立router-view标签

路由地址为：/文件夹名称/layout，

文件夹下面建立文件夹home文件，文件夹下建立index.vue文件

路由地址为：/文件夹名称/home

## 嵌套路由的其他页面
直接在对应页面文件下面建立文件夹，文件夹下建立index.vue文件

