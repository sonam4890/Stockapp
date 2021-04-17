const mongoose = require("mongoose");

const companySchema = new mongoose.Schema({
  name: String,
  symbol: String,
  stockExchange: String,
  country: String,
});

const Company = new mongoose.model("Company", companySchema);

module.exports = Company;
