const mongoose = require("mongoose");

const Company = new mongoose.Schema({
    name: String,
    email: String,
    phone_number: String,
    bio: String,
    industry: String,
    projects: [mongoose.ObjectId],
}, {
    collection: "companies"
});

module.exports = mongoose.model("Company", Company, "companies");