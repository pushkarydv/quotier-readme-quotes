const express = require("express");
const app = express();
require("dotenv").config();
const quotes = require("./quotes.json");
const { quoteCard } = require("./src/quoteCard");
const theme = require("./src/themes.json");
/* Generating Our Random Quote on Each Request By default */
const quoteObject = quotes[Math.floor(Math.random() * quotes.length)];
const quote = `${quoteObject.quote} - ${quoteObject.author}`;

/* ---- Handling get requests on all routes ----*/
app.get("/", async (req, res) => {
  type = req.query.theme;
  if (type == undefined || type == "") {
    type = "light";
  }
  let ColorTheme = theme[type];
  let card = quoteCard(
    ColorTheme.text,
    ColorTheme.type,
    ColorTheme.border,
    quote,
    ColorTheme.isBorder
  );
  /* ----- Sets the type of content sent  ----- */
  res.setHeader("Content-Type", "image/svg+xml");
  /* Set the Cache type to public (Any cache can store the data) and the max-age */
  res.setHeader("Cache-Control", `public, max-age=10`);
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
