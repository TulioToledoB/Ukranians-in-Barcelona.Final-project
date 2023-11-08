const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());

const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.listen(5000, function () {
  console.log("Server is listening on port 5000. Ready to accept requests!");
});
const { Pool } = require("pg");

const pool = new Pool({
  user: process.env.DB_USERNAME,
  host: "localhost",
  database: "ukrainians_in_barcelona",
  password: process.env.DB_PASSWORD,
  port: 5432,
});

app.get("/hospitals", function (req, res) {
  pool.query("SELECT * FROM hospitals", (error, result) => {
    if (error) {
      console.error("Error executing query:", error);
      // Handle the error (e.g., send an error response to the client)
    } else {
      console.log("Rows:", result.rows);
      res.json(result.rows); // Send the response to the client
    }
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
  pool.query("SELECT * FROM legalize_in_spain", (error, result) => {
    res.json(result.rows);
  });
});

app.get("/police_stations", function (req, res) {
  pool.query("SELECT * FROM police_stations", (error, result) => {
    res.json(result.rows);
  });
});

app.get("/jobs_offerrs", function (req, res) {
  pool.query("SELECT * FROM job_links", (error, result) => {
    res.json(result.rows);
  });
});

app.get("/accommodation", function (req, res) {
  pool.query("SELECT * FROM accommodation", (error, result) => {
    res.json(result.rows);
  });
});
