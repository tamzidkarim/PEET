var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  console.log(req);
  res.send("es12");
});

router.post("/RegisterEvent", (req, res) => {
  console.log(req);
  res.send("RegisterEvent");
});

router.post("/DeleteEvent", (req, res) => {
  console.log(req);
  res.send("DeleteEvent");
});

module.exports = router;
