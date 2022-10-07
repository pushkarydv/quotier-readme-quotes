/* ---- Creating An Express app to serve api ---- */
const express = require("express");
const app = express();

/* ---- using dotenv for Accessing Enviornmental Variables ---- */
require("dotenv").config();

/* ---- Importing JSON files (all the data) ---- */
const quotes = require("./quotes.json");
const theme = require("./src/themes.json");

/* ---- Importing Card template ---- */
const { quoteCard } = require("./src/quoteCard");

/* Generating Our Random Quote on Each Request By default */
const quoteObject = quotes[Math.floor(Math.random() * quotes.length)];
const quote = `${quoteObject.quote} - ${quoteObject.author}`;

/* ---- Handling get requests on all routes ----*/
app.get("/", async (req, res) => {
  res.send(
    "Hello There! Welcome to our quote app. To get A Rendered Quote go to /quote route"
  );
});

app.get("/quote", async (req, res) => {
  let card = quoteCard(
    theme.dark.textColor,
    theme.dark.bg,
    theme.dark.border,
    quote,
    theme.dark.iodeBorder
  );
  /* ----- Sets the type of content sent  ----- */
  res.setHeader("Content-Type", "image/svg+xml");
  /* Set the Cache type to public (Any cache can store the data) and the max-age */
  res.setHeader("Cache-Control", `max-age=N, public`);
  /* ---- sending svg as a response ---- */
  res.send(card);
});

/* 
    Using an Environmentable variable to 
    check if it's running on develoment 
    server - onlyu run in dev else vercel 
    will handle in next method
*/

if (process.env.NODE_ENV === "development") {
  const port = process.env.port || 3000;
  app.listen(port, () => {
    console.log(`listening on http://localhost:${port}`);
  });
}

/* For Deployment on Vercel to work */
module.exports = app;
