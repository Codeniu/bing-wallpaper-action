send daily Bing Wallpaper to email with Github Action.

Bing Wallpaper API
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