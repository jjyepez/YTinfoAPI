let express = require("express");

let app = express();

app.use("/", require("./routers"));

app.listen(8080, () => {
  console.log("Iniciado");
});
