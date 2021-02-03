const mongoose = require("mongoose");

const Auditor = new mongoose.Schema({
    first_name: String,
    second_name: String,
    email: String,
    phone_number: String,
    bio: String,
    supervisor: String,
    standards: [String],
    // standards: [mongoose.ObjectId],
    projects: [mongoose.ObjectId],
});

module.exports = mongoose.model("Auditor", Auditor, "auditors");