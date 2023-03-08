const deepl = require("deepl");
const config = require("./src/config");

const main = async () => {
  try {
    const {data} = await deepl({
      ...config(),
      text: process.argv[2],
      target_lang: "JA",
    });
    data.translations
      .map(it => it.text)
      .forEach(it => console.log(it));
  } catch (e) {
    console.error(e);
  }
}
main();
