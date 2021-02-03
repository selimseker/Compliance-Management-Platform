const express = require("express");
const router = express.Router();

const Project = require("../models/project").project;
const Entry = require("../models/project").entry;

// CREATE (POST) PROJECT
router.post("", (req, res, next) => {
  const newPrj = new Project(req.body);
  newPrj.save().then((savedProject) => {
    res.status(201);
    res.json({
      message: "project created succesfully",
      projectID: savedProject._id,
    });
  });
});

// GET PROJECTS
router.get("", (req, res, next) => {
  Project.find().then((documents) => {
    res.status(200).json({
      message: "projects fetched succesfully",
      projects: documents,
    });
  });
});

// GET PROJECT BY ID
router.get("/:id", (req, res, next) => {
  Project.findById(req.params.id).then(
    (document) => {
      res.status(200).json({
        message: "Project found",
        project: document,
      });
    },
    (err) => {
      console.log(err);
    }
  );
});

// POST ENTRY TO GAP-ANALYSYS
router.post("/gapAnalysis", (req, res, next) => {
  const newEntry = new Entry(req.body);

  if (newEntry._id == req.body._id) {
    // update the document
    console.log(newEntry);
    Entry.findByIdAndUpdate(
      { _id: newEntry._id },
      {
        $set: {
          checklist_answers: newEntry.checklist_answers,
          control_decision: newEntry.control_decision,
        },
      }
    ).then((savedEntry) => {
      console.log("entry updated");
      res.json({
        message: "entry updated succesfully",
        entryID: savedEntry._id,
      });
    });
  } else {
    console.log("empty id");
    // new entry
    // first add'its id to project
    Project.findByIdAndUpdate(
      { _id: newEntry.project_id },
      { $push: { analysis: newEntry._id } }
    ).then((response) => {
      console.log("entry_id added to project");
    });

    // save the new document
    newEntry.save().then((savedEntry) => {
      res.status(201);
      res.json({
        message: "entry created succesfully",
        entryID: savedEntry._id,
      });
    });
  }
});

router.get("/gapAnalysis/entries", (req, res, next) => {
  let projectID = req.query.projectID;
  let controlID = req.query.controlID;
  Entry.findOne({ project_id: projectID, control_id: controlID }).then(
    (entry) => {
      res.status(200);
      if (entry == null) {
        res.json({ message: "entry cannot found", entry: entry });
      } else {
        res.json({ message: "entry found", entry: entry });
      }
    }
  );
});

router.get("/gapAnalysis/entries/isDone", (req, res, next) => {
  let projectID = req.query.projectID;
  let controlID = req.query.controlID;
  Entry.findOne({ project_id: projectID, question_id: controlID }).then(
    (entry) => {
      res.status(200);
      if (entry != null) {
        res.json({ message: "question is done", result: true });
      } else {
        res.json({ message: "question is not done", result: false });
      }
    }
  );
});

router.get("/gapAnalysis/entries/dones_inRoot", (req, res, next) => {
  let projectID = req.query.projectID;
  let rootID = req.query.rootID;
  let returnOption = req.query.length_or_documents;
  Entry.find({ project_id: projectID, question_roots: { $in: [rootID] } }).then(
    (entries) => {
      res.status(200);
      if (returnOption == "length_only") {
        res.json({
          message: "number of entries under root",
          entry_num: entries.length,
        });
      } else {
        res.json({ message: "entries under root", entries: entries });
      }
    }
  );
});

module.exports = router;
