const app = require("./app");
const { PORT } = require("./utlis/config");
const { log } = require("./utlis/logger");


app.listen(PORT, () => {
  console.log(`server start at port no : ${PORT}`);
});
