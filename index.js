const fetch = require("node-fetch");
const fs = require("fs");

async function main() {
  const format = "js";
  const idx = "0";
  const n = "1";
  const mkt = "zh-CN";
  const baseUrl = "https://cn.bing.com";

  const imgUrl =
    baseUrl +
    "/HPImageArchive.aspx?" +
    `format=${format}&idx=${idx}&n=${n}&mkt=${mkt}`;
  const options = {};

  const response = await fetch(imgUrl, options);

  if (response.status < 200 || response.status >= 300) {
    throw new Error("wrong status code");
  }

  const json = await response.json();
  console.log(`successfully fetch the API.`);

  const result = json.images[0] || {};
  if (!Object.keys(result).length > 0) return;

  await fs.rmdir("./dist", { recursive: true }, () => {});
  console.log(`successfully deleted ./dist`);

  await fs.mkdir("./dist", {}, () => {});
  console.log(`successfully create ./dist`);

  await fs.writeFile("data.json", JSON.stringify(result), (err) => {
    if (err) {
      throw err;
    }
    console.log("JSON data is saved.");
  });

  await fs.copyFile("./template/index.html", `./dist/index.html`, () => {});
  await fs.copyFile("./template/page.js", `./dist/page.js`, () => {});
  console.log(`successfully copy asset files`);
}

main().catch((err) => {
  console.log(err);
});
