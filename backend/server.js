const express = require("express");
const app = express();
const cors = require("cors");
const port = 4000;
const mongoose = require("mongoose");
const Company = require("./models/company");

mongoose
  .connect("mongodb://localhost:27017/apiBackend", {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connection is setup");
  })
  .catch((err) => {
    console.log("connection is failed");
  });

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello");
});

app.post("/companies", (req, res) => {
  console.log(req.body);
  let company = new Company(req.body);
  company
    .save()
    .then(() => {
      res.status(201).send(company);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

app.get("/companies", (req, res) => {
  Company.find()
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

app.delete("/companies/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getCompany = await Company.findByIdAndRemove(_id);
    res.status(200).send(getCompany);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
