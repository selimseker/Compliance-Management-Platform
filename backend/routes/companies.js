const express = require("express");
const router = express.Router();

const Company = require("../models/company");



// CREATE PROJECT
router.post("", (req, res, next) => {
    const newComp = new Company(req.body);
    newComp.save().then(savedComp => {
        res.status(201);
        res.json({
            message: "company succesfully created",
            companyID: savedComp._id
        });
    });
})

// GET COMPANIES
router.get("", (req, res, next) => {
    Company.find().then(documents => {
        res.status(200).json({
            message: "companies succesfully fetched",
            companies: documents
        });
    });
})

// START PROJECT
router.put("/startProject", (req, res, next) => {
    const companyID = req.body.companyID;
    const projectID = req.body.projectID;

    Company.updateOne({ "_id": companyID }, { $push: { projects: [projectID] } }).then((res) => {
        console.log(res);
    })

})

module.exports = router;