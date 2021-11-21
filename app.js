var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var es2plusRouter = require("./routes/es2plus");
var es9plusRouter = require("./routes/es9plus");
var es12Router = require("./routes/es12");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/gsma/rsp2/es2plus", es2plusRouter);
app.use("/gsma/rsp2/es9plus", es9plusRouter);
app.use("/gsma/rsp2/es12", es12Router);

module.exports = app;
