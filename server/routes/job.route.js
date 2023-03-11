const express = require("express");
const router = express.Router();

const jobController = require("../controllers/job.controller");

//get all records
router.get("/", jobController.getAllJobs);

// get job by ID
router.get("/:id", jobController.getJobByID);

// get job by type
router.get("/:type", jobController.getJobByType);

// create new job
router.post("/", jobController.createNewJob);

// update job
router.put("/:id", jobController.updateJob);

// delete job
router.delete("/:id", jobController.deleteJob);

module.exports = router;
