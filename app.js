const express = require("express");
const developerResource = require("./resources/developers");
const app = express();
const port = process.env.PORT || 3000;
const host = "0.0.0.0";

//App routes
app.use(express.json());
app.use("/api/developers", developerResource);

//500 Error Handler
app.use((err, req, res, next) => {
  res.status(500).send("Something Broke!! Please try after sometime...");
});

//404 Error Handler
app.use((req, res, next) => {
  res.status(404).send("Page not found...");
});

app.listen(port, host, () => {
  console.log(`Started Express Server at port ${port}!`);
});
