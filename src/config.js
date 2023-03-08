const fs = require("fs");

const getPath = () =>
  [
    `${process.env.HOME}/.config/.deepl.json`,
    `${process.env.HOME}/.deepl.json`,
  ].find(path => fs.existsSync(path))

module.exports = () => {
  const path = getPath();
  if (!path) throw "config file not found.";
  return JSON.parse(
    fs.readFileSync(path).toString()
  );
}
