# yuanse-project
原色project vuepress网站仓库

## 第一次安装(或者在新电脑上安装)

### 克隆仓库到本地
```bash
git clone https://github.com/Yuanse-Association/yuanse-project
```

### 安装本地依赖
2022年10月19日，安装2.0.0-beta.51版本，需要手动指定
```bash
yarn add -D vuepress@2.0.0-beta.51
```

### 本地试运行
本地试运行看效果
```bash
yarn docs:dev
```

## 开始内容更改创作

### 拉取更新
```bash
git pull origin main
```

### 修改内容
打开`docs`文件夹，里面每个文件都是页面内容，通过md文件编译出静态html页面。  
每一个subdirectory代表一个页面，一个页面含有"README.md"主页，\imgs文件夹，以及"other.md"次要页面。

### 本地试运行
本地试运行看效果
```bash
yarn docs:dev
```

### 推送到远端仓库
```bash
git add .
git commit -m "renew by xxx"
git push origin main
```
虽然add commit push有点简单暴力，但就这样简单暴力先吧(^_^)//

### 部署
push到main分支后，触发GitHub actions自动部署到gh-pages分支。

## 其他备忘

### gitignore
之前写的.gitignore一直无效，原来是npm生成的gitignore文件是utf16编码，git不认它，注意.gitignore是不是UTF-8格式保存。  
另外，如果在` git add . `的时候不该加进来的内容也加进来了，就在commit前`git reset`。
```
node_modules/
docs/.vuepress/.cache/
docs/.vuepress/.temp/
docs/.vuepress/dist/
```

### 删除内容
删除node_modules,  
删除docs/.vuepress/.cache和docs/.vuepress/.temp
```bash
rm node_modules
rm docs/.vuepress/.cache docs/.vuepress/.temp
```