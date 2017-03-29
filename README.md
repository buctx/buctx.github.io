Dev-Nav 开发导航
===
Developer Navigation - `前端` `Java Web`

![dev-nav](https://raw.githubusercontent.com/mcc108/MarkdownPhotos/master/dev-nav/dev-nav.png)

---

## 当前所包含的开发方向

| 方向 | 简写 | 对应数据文件 | 数据提供者 | 网址 |
|:---:|:---:|:----------:|:---------|:----|
| 前端 | `fe` | fe.json | [@ Cong Min](https://github.com/mcc108) | http://fe.congm.in |
| Java Web | `javaweb` | javaweb.json | [@ xiaofeig](https://github.com/xiaofeig) | http://dev-nav.congm.in/javaweb |

## 目录结构

```
dev-nav
   ├─ README.md
   ├─ index.html *      // 导航主页 (打包后)
   ├─ dist *            // 打包后文件夹
   │    └─ ...
   ├─ src               // 打包前文件夹
   │    └─ ...
   ├─ webpack.config.js // webpack打包配置
   ├─ package.json      // npm本项目描述
   ├─ .gitignore        // ignore node_modules
   └─ data *            // 资源数据文件夹 (json)
        ├─ fe.json      // such as: 前端资源数据 - fe.json
        └─ ...
   (*表示必需)
```

### 如何访问

该项目是通过js判断所访问到index.html的网址的`hash`、`pathname`、`hostname`来判定加载的哪个方向的数据。

如:
```
http://***.**/#fe
http://***.**/fe
http://fe.***.**/
都是访问到的fe前端数据
```

优先级 `hash` > `pathname` > `hostname`

如:
```
http://fe.***.**/javaweb#php
访问到的是php数据, 因为hash优先级更高
```

---

## 新增方向

新增开发方向，欢迎fork并创建对应的json数据，最后再Pull Requests

### data.json格式

关于data数据的json结构分析如下:

```
// data.json 命名格式为: 方向英文简称.json (如fe.json)
{
  "info": { ... },   // 网站信息(对象)
  "section": [ ... ]   // 资源分类(数组)
}
```
```
// section - 资源分类(数组)
[
  {
    "heading": "类别名(必需)",
    "content": [ ... ]   // 类别内容分组(数组)
  },
  ....
]
```
```
// section[i].content - 类别内容分组(数组)
[
  {
    "title": "分组名(可无)",
    "item": [ ... ]   // 资源列表(数组)
  }
]
```
```
// section[i].content[j].item - 资源列表(数组)
[
  {
    "name": "资源名(必需)",
    "link": {
      "home": "资源主页地址(必需)",
      "github": "资源Github地址(可无)"
    }
  }
]
```

---

## 资源收录

你可以通过下述方式提交满足以下任一条件的资源进行收录

* 对学习和开发有一些帮助的网站资源
* 在Github上有较多的star的开源项目

### New Issues

请依照以下格式提交资源

```
方向:             // 所提交资源将放入json文件的方向
类别:             // 所提交资源的类别
资源名:           // 所提交资源全名
主页地址:         // 所提交资源的主页地址
Github:         // 所提交资源的Github地址
```

## 关于该项目 (了解更多)

### 所用技术

* [webpack](https://github.com/webpack/webpack) 打包
* html / css / 原生javascript (es5)
* [vue.js](https://github.com/vuejs/vue)
* [sass](https://github.com/sass/sass) / [compass](https://github.com/Compass/compass)
* [iconfont](http://www.iconfont.cn)

### 开发
安装
```
npm install 推荐使用 cnpm install
```
打包
```
npm run build 即 webpack -p 
```
清除
```
npm run clean 即 rm index.html && rm -rf dist
```
重新打包
```
npm run rebuild 即 npm run clean && npm run build
```

### 搜索高亮

关于搜索高亮功能的原生js实现，可以参见博文: https://i.congm.in/js-find

### 联系作者

@ Cong Min - https://congm.in

> 感谢大家对建设`dev-nav`开发导航所做出的贡献。
