const { join } = require("path");
const { readdirSync, readFileSync } = require("fs");

const gqlFiles = readdirSync(join(__dirname, "../allTypes"));
let typeDefss = "";

gqlFiles.forEach((file) => {
  typeDefss += readFileSync(join(__dirname, "../allTypes", file), {
    encoding: "utf8",
  });
});
module.exports = typeDefss;
