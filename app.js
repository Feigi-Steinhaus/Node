const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const cors = require("cors");

const app = express();

app.use(bodyParser.json());
app.use(cors());

const sdk = require("api")("@render-api/v1.0#ja8rb1jlsxhh7qu");

sdk.auth("rnd_VgqLiNh4uWL6WMs1mFwGYNmbKwCS");

app.get("", (req, res) => {
  sdk
    .getServices({ limit: "20" })
    .then(({ data }) => res.status(200).send(data))
    .catch((err) => res.status(200).send("Hello world👍",err));
});

app.listen(3001, () => {
  console.log(`my app is listening in http://localhost:3001`);
});
