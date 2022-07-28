const express = require("express");

const path = require("path");
const api = require("./api");
const app = express();
app.use(express.static(path.join(__dirname, "node_modules")));
app.use(express.static(path.join(__dirname, "dist")));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/", api);
const port = 8080;

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
