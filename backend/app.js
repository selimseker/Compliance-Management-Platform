const express = require("express");
const app = express();
const mongoose = require("mongoose");

const bodyParser = require("body-parser");

const companies = require("./routes/companies");
const auditors = require("./routes/auditors");
const projects = require("./routes/projects");
const standards = require("./routes/standards");

const std_sender = require("./send_std_toDB");

const uri = "mongodb uri"
mongoose
  .connect(uri, { useFindAndModify: false })
  .then(() => {
    console.log("connected to db");
  })
  .catch(() => {
    console.log("connection failed");
  });

// app.use(bodyParser.json());
app.use(bodyParser.json({ limit: "10mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "10mb", extended: true }));

// options for responds
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});

app.use("/api/companies", companies);
app.use("/api/auditors", auditors);
app.use("/api/projects", projects);
app.use("/api/standards", standards);


module.exports = app;

// std_sender;
