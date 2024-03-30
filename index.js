const exp = require("constants");
const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "public")));

app.get("/hello/:name", (req, res) => {
    // res.sendFile(path.join(__dirname, "index.html"));
    res.send(`<h1>Hello ${(req.params.name).toUpperCase()}</h1>`);
})
app.get("/about", (req, res) => {
    res.sendFile(path.join(__dirname, "about.html"));
})
app.listen(port, () => {
    console.log(`This website is listening at http://localhost:${port}`);
})