const { express, routes } = require("./controller");
const db = require("./config");
const path = require("path");
const app = express();
const cors = require("cors");
// Importing error handling middlware
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
// const errorHandling = require('./middleware/ErrorHandling.js')
const port = +process.env.PORT || 3131;
// static
app.use(express.static("./static")),
  app.use(
    express.urlencoded({
      extended: false,
    }),
    cors(),
    cookieParser(),
    routes
  );
routes.get("^/$|/NodeEOMP", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../api/static/html/index.html"));
});
// Middleware - Application level
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Methods", "*");
  res.header("Access-Control-Requst-Methods", "*");
  res.header("Access-Control-Allow-Headers", "*");
  res.header("Access-Control-Expose-Headers", "Authorization");
  next();
});
app.listen(port, () => {
  console.log(`The server is running on port http://localhost:${port}`);
});