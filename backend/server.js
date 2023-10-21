const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.listen(5000, function () {
  console.log("Server is listening on port 5000. Ready to accept requests!");
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

app.get("/areas", function (req, res) {
  pool.query("SELECT * FROM areas_of_barcelona", (error, result) => {
    res.json(result.rows);
  });
});

app.get("/socials_services", function (req, res) {
  pool.query("SELECT * FROM social_services", (error, result) => {
    res.json(result.rows);
  });
});

app.get("/lawyers", function (req, res) {
  pool.query("SELECT * FROM lawyers", (error, result) => {
    res.json(result.rows);
  });
});

app.get("/events", function (req, res) {
  pool.query("SELECT * FROM events", (error, result) => {
    res.json(result.rows);
  });
});

app.get("/legalization", function (req, res) {
  pool.query("SELECT * FROM legalization", (error, result) => {
    res.json(result.rows);
  });
});
