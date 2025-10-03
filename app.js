import express from "express";
import path, { dirname } from "path";
import session from "express-session";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// set EJS as view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// serve static files from /public
app.use(express.static(path.join(__dirname, "public")));

// setup session middleware
app.use(
  session({
    secret: "600-elo-chess",
    resave: false,
    saveUninitialized: false,
  })
);

// Serve manifest.json with correct MIME type
app.get('/manifest.json', (req, res) => {
  res.setHeader('Content-Type', 'application/manifest+json');
  res.sendFile(path.join(__dirname, 'public', 'manifest.json'));
});

// render home.ejs on /
app.get("/", (req, res) => {
  res.render("home");
});

app.listen(port,'0.0.0.0',() => {
  console.log(`Server running at http://localhost:${port}/`);
});
