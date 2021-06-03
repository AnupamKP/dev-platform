const express = require("express");
const morgan = require("morgan");
const apiResources = require("./routes/api/api");
const errorHandlers = require("./routes/error/error");
const app = express();
const host = "0.0.0.0";
const port = process.env.PORT || 3000;

app.use(morgan("combined"));
app.use(express.json());
app.use("/api", apiResources);
app.use(errorHandlers);

app.listen(port, host, () => {
  console.log(`Started Express Server at port ${port}!`);
});
