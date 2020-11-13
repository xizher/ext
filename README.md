# ext
## - 嵌套git项目

```bash
git submodule add 【项目地址】
```
如果子模块下存在其他子模块，则通过此命令拉取这些嵌套的子模块
```bash
git submodule update --init --recursive 
```
## - git 提交格式规范
> <type>: <body>

- feat: 新功能
- fix: 修复bug
- docs: 文档
- style: 格式（不影响代码运行的变动）
- refactor: 重构
- test: 增加测试
- chore: 构建过程或辅助工具的变动
## - git push 至gitee

1. ```
   git remote add gitee 【gitee对应项目地址】
   ```

2. ```
   git push gitee main
   ```
## - .js文件生成.d.ts

1. ```
   npm i dtsmake -g
   ```

2. ```
   npm i tern --save-dev
   ```

3. ```
   dtsmake -s 【js路径】
   ```
## - ext 集

- customevent => 自定义工具类
- js.ext => js原型扩展
- js.utils => js通用函数

