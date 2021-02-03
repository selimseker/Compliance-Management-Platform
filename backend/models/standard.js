const mongoose = require("mongoose");
const { ObjectId } = require("mongoose");

const Standard = new mongoose.Schema({
  name: { type: String, required: true },
  version: { type: String, required: false },
  year: { type: String, required: false },
  domains: [String],
  controls: [String],
});

const Checklist = new mongoose.Schema(
  {
    checklist_id: { type: String, required: false },
    checklist: { type: String },
    // answer_options: [String],
    // alternative_question: Boolean,
  },
  { _id: true }
);

const Control_Info = new mongoose.Schema({
  title: String,
  mandotary: { type: Boolean, required: false },
  architecture: { type: String, required: false },
});

const Control = new mongoose.Schema({
  standard_id: { type: String },
  isDomain: { type: Boolean },
  cid: { type: String },
  direct_root: { type: String, required: false },
  // ancestors: { type: [String], required: false },
  direct_childs: { type: [String], required: false },
  // all_childs: { type: [String], required: false },
  info: { type: Control_Info },
  checklists: { type: [Checklist], required: false },
});

const Guideline = new mongoose.Schema({
  standard_id: String,
  control_id: String,
  guideline_title: String,
  guideline_item: String,
});

const Threat = new mongoose.Schema({
  standard_id: String,
  control_id: String,
  threats: String,
});

const RiskDriver = new mongoose.Schema({
  standard_id: String,
  control_id: String,
  risk_driver: String,
});

module.exports = {
  checklist: mongoose.model("Checklist", Checklist, "checklists"),
  control: mongoose.model("Control", Control, "controls"),
  standard: mongoose.model("Standard", Standard, "standards"),
  guideline: mongoose.model("Guideline", Guideline, "guidelines"),
  threat: mongoose.model("Threat", Threat, "threats"),
  riskDriver: mongoose.model("RiskDriver", RiskDriver, "riskdrivers"),
};
