const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.listen(5000, function () {
  console.log("Server is listening on port 3000. Ready to accept requests!");
});
const { Pool } = require("pg");

const pool = new Pool({
  user: "elena",
  host: "localhost",
  database: "ukranians_in_barcelona",
  password: "elena1234",
  port: 5432,
});

app.get("/hospitals", function (req, res) {
  pool.query("SELECT * FROM hospitals", (error, result) => {
    res.json(result.rows);
  });
});
