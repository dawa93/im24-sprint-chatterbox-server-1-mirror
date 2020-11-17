const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();
// const { getEndpoints } = require("express-list-endpoints");

const app = express();

let data = { results: [] };

app.use(cors());
app
  .route("/messages")
  .get((req, res) => {
    res.send(JSON.stringify(data));
  })
  .post(jsonParser, (req, res) => {
    data.results.push(req.body);
    res.status(201).send(JSON.stringify(req.body));
  });

// app.use(cors());

// app.get("/messages", (req, res) => {
//   res.send(JSON.stringify(data));
// });

// app.post("/messages", jsonParser, function (req, res) {
//   data.results.push(req.body);
//   res.status(201).send(JSON.stringify(req.body));
// });

module.exports = app;
