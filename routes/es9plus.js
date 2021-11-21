var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  console.log(req);
  res.send("es9plus");
});

router.post("/InitiateAuthentication", (req, res) => {
  console.log("HEADERS", req.headers, "BODY", req.body);
  const response = {
    transactionId: "0123456789ABCDEF",
    serverSigned1:
      "MDEyMzQ1Njc4OUFCQ0RFRmV1WkJCUUFUTkIwSHBSQnh4NnhrWHc9PTM2YjMtMjctMTQ3LTIwNi0xMjMubmdyb2suaW9ldVpCQlFBVE5CMEhwUkJ4eDZ4a1h3PT0=",
    serverSignature1:
      "MDEyMzQ1Njc4OUFCQ0RFRmV1WkJCUUFUTkIwSHBSQnh4NnhrWHc9PTM2YjMtMjctMTQ3LTIwNi0xMjMubmdyb2suaW9ldVpCQlFBVE5CMEhwUkJ4eDZ4a1h3PT0=",
    euiccCiPKIdToBeUsed: "MDM=",
    serverCertificate: "RUU2NTQ0ODQ5NDA0RlpSRUZERA==",
  };
  console.log(response);
  res.send(response);
});

router.post("/AuthenticateClient", (req, res) => {
  console.log(req);
  res.send("AuthenticateClient");
});

router.post("/GetBoundProfilePackage", (req, res) => {
  console.log(req);
  res.send("GetBoundProfilePackage");
});

router.post("/HandleNotification", (req, res) => {
  res.send("HandleNotification");
});

router.post("/CancelSession", (req, res) => {
  console.log(req);
  res.send("CancelSession");
});

module.exports = router;
