fetch("./data.json").then(async function (response) {
  console.log(response.ok);
  const res = await response.json();
  const baseUrl = "https://cn.bing.com";
  const wallpaperUrl = baseUrl + res.url;
  console.log(wallpaperUrl);
  let bodyElement = document.getElementsByTagName("section")[0];
  bodyElement.style.backgroundColor = "#666";
  bodyElement.style.backgroundImage = `url(${wallpaperUrl})`;
});
