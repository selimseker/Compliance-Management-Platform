const guidelines = require("./jsons/swift1/guidelines_swift1.json");
const threats = require("./jsons/swift1/threats_swift1.json");
const riskd = require("./jsons/swift1/risk_driver_swift1.json");

const swift1 = require("./jsons/swift1/swifta1.json");
const swift2 = require("./jsons/swift2/swifta2.json");
const swift3 = require("./jsons/swift3/swifta3.json");
const swift4 = require("./jsons/swift4/swifta4.json");
const swift5 = require("./jsons/swift5/swiftb.json");
const nist = require("./jsons/nist/nist.json");

const sending_std = nist;

const Checklist = require("./models/standard").checklist;
const Control = require("./models/standard").control;
const Standard = require("./models/standard").standard;
const Guideline = require("./models/standard").guideline;
const Threat = require("./models/standard").threat;
const RiskDriver = require("./models/standard").riskDriver;

function sendStandardData() {
  const standard = new Standard();
  standard.name = sending_std.standard_name;
  standard.domains = sending_std.domains.map((domain) => domain.id);
  standard.controls = sending_std.domains
    .map((domain) => domain.control_ids)
    .flat(1);

  console.log(standard);
  // save the mongodb schema
  standard.save().then((response) => {
    console.log("std saved");
    // res.status(200);
    // res.json({ message: "new standard created" });
  });
}

function sendStandardDomains() {
  let domSchema;
  sending_std.domains.forEach((domain) => {
    domSchema = new Control();
    domSchema.standard_id = sending_std.standard_name;
    domSchema.isDomain = true;
    domSchema.cid = domain.id;
    domSchema.direct_childs = domain.control_ids;
    domSchema.info = { title: domain.title };
    console.log(domSchema);

    // save the mongodb schema
    domSchema.save().then((response) => {
      console.log("dom saved");
      // res.status(200);
      // res.json({ message: "new standard created" });
    });
  });
}

function sendStandardControls() {
  let contSchema;
  let checklist;
  sending_std.controls.forEach((control) => {
    contSchema = new Control();
    contSchema.standard_id = sending_std.standard_name;
    contSchema.isDomain = false;
    contSchema.cid = control.id;
    contSchema.direct_root = sending_std.domains.filter((dom) =>
      dom.control_ids.includes(control.id)
    )[0].id;
    contSchema.checklist;

    for (let chck = 0; chck < control.checklists.length; chck++) {
      checklist = new Checklist();
      checklist.checklist_id = chck.toString();
      checklist.checklist = control.checklists[chck];
      contSchema.checklists.push(checklist);
    }
    contSchema.info = { title: control.title };

    // save the control
    contSchema.save().then((response) => {
      console.log("cont saved");
      // res.status(200);
      // res.json({ message: "new standard created" });
    });
  });
}

function sendStdInfo() {
  sendGuidelines();
  console.log("guidelines done!");
  sendThreats();
  console.log("threats done!");
  sendRisks();
  console.log("risks done!");
}

function sendThreats() {
  let thtSchema;
  threats.forEach((tht) => {
    thtSchema = new Threat();
    thtSchema.standard_id = "SWIFT-A1";
    thtSchema.control_id = tht.control_id;
    thtSchema.threats = tht.threats;
    // save the tht
    thtSchema.save().then((response) => {});
  });
}

function sendRisks() {
  let riskSchema;
  riskd.forEach((risk) => {
    riskSchema = new RiskDriver();
    riskSchema.standard_id = "SWIFT-A1";
    riskSchema.control_id = risk.control_id;
    riskSchema.risk_driver = risk.risk_driver;
    // save the risk
    riskSchema.save().then((response) => {});
  });
}

function sendGuidelines() {
  let gdlSchema;
  guidelines.forEach((gdl) => {
    gdlSchema = new Guideline();
    gdlSchema.standard_id = "SWIFT-A1";
    gdlSchema.control_id = gdl.control_id;
    gdlSchema.guideline_title = gdl.guideline_title;
    gdlSchema.guideline_item = gdl.guideline_item;
    // save the gdl
    gdlSchema.save().then((response) => {});
  });
}

function main() {
  // console.log("lets go");
  // sendStandardData();
  // console.log("standards done");
  // sendStandardDomains();
  // console.log("doms done");
  // sendStandardControls();
  // console.log("it is done");
  // sendStdInfo();
  // console.log("all done");
}

module.exports = main();
