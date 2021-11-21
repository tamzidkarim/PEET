var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  console.log(req);
  res.send("es2plus");
});

router.post("/DownloadOrder", (req, res) => {
  console.log(req);
  res.send("DownloadOrder");
});

router.post("/ConfirmOrder", (req, res) => {
  console.log(req);
  res.send("ConfirmOrder");
});

router.post("/CancelOrder", (req, res) => {
  console.log(req);
  res.send("CancelOrder");
});

router.post("/ReleaseProfile", (req, res) => {
  console.log(req);
  res.send("ReleaseProfile");
});

router.post("/HandleDownloadProgressInfo", (req, res) => {
  console.log(req);
  res.send("HandleDownloadProgressInfo");
});

module.exports = router;
