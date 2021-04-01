/* 
    ********** url **********
   
    https://cn.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=zh-CN

    
    ********** param ************
   
    format: "js"        返回json格式的数据
    idx: "0"            返回当前天的数据
    n: "1"              图片个数
    nkt: "zh-CN"        地区

    ********** response *********
    {
    images: [
        {
        startdate: '20210331', 
        fullstartdate: '202103311600',
        enddate: '20210401',
        url: '/th?id=OHR.FooledYa_ZH-CN1264990804_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp',
        urlbase: '/th?id=OHR.FooledYa_ZH-CN1264990804',
        copyright: '卡格拉格帝边境公园中一对正在求偶的鸵鸟，南非 (© Tina Malfilatre/Minden Pictures)',
        copyrightlink: 'https://www.bing.com/search?q=%E9%B8%B5%E9%B8%9F&form=hpcapt&mkt=zh-cn',
        title: '',
        quiz: '/search?q=Bing+homepage+quiz&filters=WQOskey:%22HPQuiz_20210331_FooledYa%22&FORM=HPQUIZ',
        wp: true,
        hsh: '58ce6c472def75a58cc8d6fa1bb66ef0',
        drk: 1,
        top: 1,
        bot: 1,
        hs: []
        }
    ],
    tooltips: {
        loading: '正在加载...',
        previous: '上一个图像',
        next: '下一个图像',
        walle: '此图片不能下载用作壁纸。',
        walls: '下载今日美图。仅限用作桌面壁纸。'
    }
    }
 
*/

const endpoint = "https://cn.bing.com/HPImageArchive.aspx";
const params = new URLSearchParams({
  format: "js",
  idx: "0",
  n: "1",
  nkt: "zh-CN",
});

module.exports = {
  endpoint,
  params,
  url: endpoint + "?" + params.toString(),
};
