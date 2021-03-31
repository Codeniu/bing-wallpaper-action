Get daily Bing Wallpaper with Github Action.

Bing Wallpaper API 的使用：
```
https://cn.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=zh-CN
```
`format=js` : return json 

`idx=0` : get current day's wallpaper

`n=1` : set wallpapers' num, maxValue=8

`mkt=zh-CN` : set region


在node中执行shell命令
```
const exec = require("child_process").execSync;
// exec index.sh
exec("bash echo " + imageUrl + ">> data.json");
```

sction.yml

利用 Github Action 去请求 Bing Wallpaper API. 将获取到的数据保存到文件中。之后发布到 [Gitub Pages](https://codeniu.github.io/bing-wallpaper-action/).


过程：
1. 拉取代码
2. 虚拟环境安装node
3. 安装依赖
4. 构建
   1. fetch 请求 API 数据。
   2. fs 进行文件操作（这里注意要用 fs/promises，要等 dist 文件夹创建完成后再去执行赋值文件的操作。要不然你就会发现有的时候会缺少文件，有的时候直接 dist 文件夹就没生成）
