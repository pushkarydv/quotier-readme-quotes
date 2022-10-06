const express = require("express");
const app = express();
require("dotenv").config();

/* ---- Handling get requests on all routes ----*/
app.get("/", async (req, res) => {
  res.send("Hello There! Welcome to our quote app");
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
