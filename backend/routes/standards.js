const express = require("express");
const router = express.Router();

const Control = require("../models/standard").control;
const Standard = require("../models/standard").standard;
const Guideline = require("../models/standard").guideline;
const Threat = require("../models/standard").threat;
const RiskDriver = require("../models/standard").riskDriver;

const mongoose = require("mongoose");
const { control } = require("../models/standard");

// POST NEW STANDARD
router.post("", (req, res, next) => {
  const newStandard = new Standard(req.body);
  newStandard.save().then((savedStd) => {
    res.status(201).json({
      message: "new standard created succesfully",
      id: savedStd._id,
    });
  });
});

// POST NEW DOMAIN (ancestor of controls)
router.post("/domain", (req, res, next) => {
  console.log("create new domain request detected");
  const newControl = new Control(req.body.control);
  newControl._id = mongoose.Types.ObjectId();

  // first save the new control
  newControl
    .save()
    .then((savedControl) => {
      // then edit the standard for adding control id
      return Standard.findByIdAndUpdate(
        { _id: req.body.stdID },
        { $push: { domains: newControl._id } }
      );
    })
    .then((response) => {
      console.log("domain successfully created and added");
      res.status(200);
      res.json({ message: "domain added" });
    });
});

// create new control
router.post("/control", (req, res, next) => {
  const newControl = new Control(req.body);
  newControl.save().then((response) => {
    res.status(200);
    res.json({ message: "new control created" });
  });
});

// get control by standard name and cid
router.get("/control", (req, res, next) => {
  Control.findOne({
    standard_id: req.query.standardName,
    cid: req.query.controlID,
  }).then(
    (control) => {
      res.status(201);
      res.json({ control: control });
    },
    (err) => {
      console.log(err);
    }
  );
});

// link the controlID to standard (only domains or leafs)
router.put("/controlLinking", (req, res, next) => {
  const stdName = req.body.stdName;
  const controlID = req.body.controlID;
  const isLeaf = req.body.isLeaf;
  if (!isLeaf) {
    Standard.updateOne(
      { name: stdName },
      { $push: { domains: controlID } }
    ).then((result) => {
      res.status(200);
      res.json({ message: "domain linked to standard successfully!" });
    });
  }
});

// get standard by name
router.get("/", (req, res, next) => {
  const std_name = req.query.standard_id;
  console.log(req.query);
  Standard.findOne({ name: std_name }).then(
    (document) => {
      res.status(200).json({
        message: "standard found",
        standard: document,
      });
    },
    (err) => {
      console.log(err);
    }
  );
});

router.get("/guideline", (req, res, next) => {
  const std_id = req.query.standard_id;
  const cnt_id = req.query.control_id;
  Guideline.find({ standard_id: std_id, control_id: cnt_id }).then(
    (documents) => {
      res.status(200);
      res.json({
        message: "guidelines found",
        guidelines: documents,
      });
    }
  );
});

router.get("/threat", (req, res, next) => {
  const std_id = req.query.standard_id;
  const cnt_id = req.query.control_id;
  console.log(std_id, cnt_id);
  Threat.find({ standard_id: std_id, control_id: cnt_id }).then((documents) => {
    console.log(documents);
    res.status(200);
    res.json({
      message: "threats found",
      threats: documents,
    });
  });
});

router.get("/risk_driver", (req, res, next) => {
  const std_id = req.query.standard_id;
  const cnt_id = req.query.control_id;
  RiskDriver.find({ standard_id: std_id, control_id: cnt_id }).then(
    (documents) => {
      res.status(200);
      res.json({
        message: "risk-drivers found",
        risks: documents,
      });
    }
  );
});


module.exports = router;
