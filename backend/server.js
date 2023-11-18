const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

const bodyParser = require("body-parser");
app.use(bodyParser.json());

const { Pool } = require("pg");

const pool = new Pool({
  user: process.env.DB_USERNAME,
  host: "localhost",
  database: "ukranians_in_barcelona",
  password: process.env.DB_PASSWORD,
  port: 5432,
});

// Ruta de registro
app.post("/register", async (req, res) => {
  const { email, password } = req.body;

  // Validación básica de email, puedes mejorarla si es necesario
  if (!email.includes("@") || !email.includes(".")) {
    return res.status(400).json({ error: "Invalid email address." });
  }

  // Generar sal y contraseña hash
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  try {
    const client = await pool.connect();
    const result = await client.query(
      "INSERT INTO administrators (email, password) VALUES ($1, $2) RETURNING id",
      [email, hashedPassword]
    );
    client.release();

    res.json({ success: true });
  } catch (err) {
    if (err.code === "23505") {
      return res.status(400).json({
        error: "Email already exists",
      });
    }
    res.status(500).json({ error: "Error during registration." });
  }
});

// Login
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const client = await pool.connect();
    const result = await client.query(
      "SELECT * FROM administrators WHERE email = $1",
      [email]
    );
    client.release();

    if (result.rows.length === 0) {
      return res.status(401).json({ message: "User not found" });
    }

    const user = result.rows[0];
    const hashedPassword = user.password;

    const isMatch = await bcrypt.compare(password, hashedPassword);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid password" });
    }

    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res.cookie("token", token, {
      httpOnly: true,
      sameSite: "none",
      secure: true,
    });
    return res.status(200).json({ success: true, message: "Login successful" });
  } catch (err) {
    res.status(500).json({ message: "Error during login" });
  }
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

app.get("/job_offers", function (req, res) {
  pool.query("SELECT * FROM job_links", (error, result) => {
    res.json(result.rows);
  });
});

app.get("/accommodation", function (req, res) {
  pool.query("SELECT * FROM accommodation", (error, result) => {
    res.json(result.rows);
  });
});

// Updating...

app.post("/socials_services", async (req, res) => {
  const { name, link, address, contacts, area_id, foto } = req.body;

  try {
    const client = await pool.connect();
    const result = await client.query(
      "INSERT INTO social_services (name, link, address, contacts, area_id, foto) VALUES ($1, $2, $3, $4, $5, $6)",
      [name, link, address, contacts, area_id, foto]
    );
    client.release();

    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ error: "Error during social services form submission." });
  }
});

app.post("/lawyers", async (req, res) => {
  const { name, contact_info, area_id, specification, foto } = req.body;

  try {
    const client = await pool.connect();
    const result = await client.query(
      "INSERT INTO lawyers (name, contact_info, area_id, specification ,foto) VALUES ($1, $2, $3, $4, $5)",
      [name, contact_info, area_id, specification, foto]
    );
    client.release();

    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error during lawyers form submission." });
  }
});

app.post("/legalization", async (req, res) => {
  const { name, todo, foto } = req.body;

  try {
    const client = await pool.connect();
    const result = await client.query(
      "INSERT INTO legalize_in_spain (name, todo, foto) VALUES ($1, $2, $3)",
      [name, todo, foto]
    );
    client.release();

    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ error: "Error during legalizattion form submission." });
  }
});

app.post("/job_offers", async (req, res) => {
  const { city, link, name, foto } = req.body;

  try {
    const client = await pool.connect();
    const result = await client.query(
      "INSERT INTO job_links (city, link, name, foto) VALUES ($1, $2, $3, $4)",
      [city, link, name, foto]
    );
    client.release();

    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error during jobs form submission." });
  }
});

app.post("/hospitals", async (req, res) => {
  const { name, link, contacts, area_id, foto } = req.body;

  try {
    const client = await pool.connect();
    const result = await client.query(
      "INSERT INTO hospitals (name, link, contacts, area_Id, foto) VALUES ($1, $2, $3, $4, $5)",
      [name, link, contacts, area_id, foto]
    );
    client.release();

    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error during hospitals form submission." });
  }
});

app.post("/events", async (req, res) => {
  const { foto, name, data, place, area_Id } = req.body;

  try {
    const client = await pool.connect();
    const result = await client.query(
      "INSERT INTO events (foto, name, data, place, area_Id) VALUES ($1, $2, $3, $4, $5)",
      [foto, name, data, place, area_Id]
    );
    client.release();

    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error during events form submission." });
  }
});

// Delete hospitals
app.delete("/hospitals/:id", async (req, res) => {
  const hospitalId = req.params.id;

  try {
    const client = await pool.connect();
    const result = await client.query("DELETE FROM hospitals WHERE id = $1", [
      hospitalId,
    ]);
    client.release();

    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error during hospital deletion." });
  }
});

// Delete Job Link
app.delete("/job_offers/:id", async (req, res) => {
  const jobId = req.params.id;

  try {
    const client = await pool.connect();
    const result = await client.query("DELETE FROM job_links WHERE id = $1", [
      jobId,
    ]);
    client.release();

    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error during job link deletion." });
  }
});

// Delete Event
app.delete("/events/:id", async (req, res) => {
  const eventId = req.params.id;

  try {
    const client = await pool.connect();
    const result = await client.query("DELETE FROM events WHERE id = $1", [
      eventId,
    ]);
    client.release();

    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error during event deletion." });
  }
});
// delete lawyers
app.delete("/lawyers/:id", async (req, res) => {
  const lawyersId = req.params.id;

  try {
    const client = await pool.connect();
    const result = await client.query("DELETE FROM lawyers WHERE id = $1", [
      lawyersId,
    ]);
    client.release();

    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error during lawyers deletion." });
  }
});
//delete legalization
app.delete("/legalization/:name", async (req, res) => {
  const legalizeName = parseInt(req.params.name, 10);

  try {
    const client = await pool.connect();
    const result = await client.query(
      "DELETE FROM legalize_in_spain WHERE name = $1",
      [legalizeName]
    );
    client.release();

    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error during legalization deletion." });
  }
});

//delete social_services
app.delete("/socials_services/:id", async (req, res) => {
  const socialId = req.params.id;

  try {
    const client = await pool.connect();
    const result = await client.query(
      "DELETE FROM social_services WHERE id = $1",
      [socialId]
    );
    client.release();

    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error during social services deletion." });
  }
});

app.listen(5000, function () {
  console.log("Server is listening on port 5000. Ready to accept requests!");
});
