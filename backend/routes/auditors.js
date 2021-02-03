const express = require("express");
const router = express.Router();

const Auditor = require("../models/auditor");



// CREATE (POST) AUDITOR
router.post("", (req, res, next) => {
    const newAdt = new Auditor(req.body);
    newAdt.save().then(savedAdt => {
        res.status(201);
        res.json({
            message: "auditor created succesfully",
            adtID: savedAdt._id
        });
    });
})

// GET AUDITORS
router.get("", (req, res, next) => {
    Auditor.find().then((documents) => {
        res.status(200).json({
            message: "auditors fetched succesfully",
            auditors: documents
        });
    });
})

// GET AUDITOR BY ID
router.get("/:id", (req, res, next) => {
    Auditor.findById(req.params.id).then((result) => {
        res.status(200).json({
            message: "auditor found",
            auditor: result
        })
    })
})

// GET AUDITORS WHICH KNOWS GIVEN STANDARD
router.get("/standard/:standard", (req, res, next) => {
    Auditor.find({ standards: req.params.standard })
        .then(respond => {
            if (respond) {
                res.status(200).json({
                    message: "auditors with " + req.params.standard + " found",
                    auditors: respond
                });
            } else {
                console.log(respond);
                console.log(req.params.standard);
                console.log("not found");
            }
        });
})


router.put("/assignProject", (req, res, next) => {
    const auditorIDs = req.body.auditorIDs;
    const projectID = req.body.projectID;

    Auditor.updateOne({ "_id": auditorIDs[0] }, { $push: { projects: [projectID] } }).then((res) => {
        console.log(res);
        res.status(201)
        res.json({ message: "succeed" });
    })

})

module.exports = router;