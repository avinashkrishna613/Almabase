const path = require("path");
const jsDocOptions = {
    definition: {
        openapi: "3.0.0",
        info: {
          title: "Greeting App",
          version: "1.0.0",
        },
      },
      apis: [path.resolve(__dirname, '../routes/*.js')]
}
module.exports = jsDocOptions;
