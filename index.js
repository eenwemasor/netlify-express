const express = require("express");
const https = require("https");
const path = require("path");
const axios = require("axios");
const fs = require("fs");
const app = express();
const port = 3000;

app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "pug");

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/login", (req, res) => {
  const url =
    "https://www.facebook.com/v11.0/dialog/oauth?client_id=364826255267649&redirect_uri=http://localhost:3000/login/verify&state=asdada";
  res.writeHead(301, { Location: url });
  res.end();
});

const sslServer = https.createServer(
  {
    key: fs.readFileSync(path.join(__dirname, "cert", "key.pem")),
    cert: fs.readFileSync(path.join(__dirname, "cert", "cert.pem")),
  },
  app
);

app.get("/user/dashboard", (req, res) => {
  res.render("dashboard");
});

sslServer.listen(port, () => {
  console.log(`Example app listening at https://localhost:${port}`);
});
