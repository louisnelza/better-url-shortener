const path = require("path")
const express = require("express")
const bodyParser = require("body-parser")

const db = require('./db.js');

const { createShortLink, openShortLink } = require("./url.controller.js")

const app = express();

db.connect();

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "public")))

// routes
app.post("/createShortLink", createShortLink)
app.get("/:unique_name", openShortLink)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});