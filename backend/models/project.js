const mongoose = require("mongoose");
const Company = require("./company").schema;
const Auditor = require("./auditor").schema;

const Project = new mongoose.Schema({
  project_title: String,
  company: Company,
  auditors: [mongoose.Schema.Types.ObjectId],
  standard: String,
  analysis: [mongoose.Schema.Types.ObjectId],
});

const Entry = new mongoose.Schema({
  timestamp: String,
  project_id: mongoose.Schema.Types.ObjectId,
  control_id: String,
  control_decision: {
    decision: String,
    details: { type: String, required: false },
  },
  checklist_answers: [
    {
      checklist_id: String,
      answer: String,
      details: { type: String, required: false },
    },
  ],

  attachements: { type: mongoose.Schema.Types.ObjectId, required: false },
});

module.exports = {
  project: mongoose.model("Project", Project, "projects"),
  entry: mongoose.model("Entry", Entry, "gap_analysis_entries"),
};
