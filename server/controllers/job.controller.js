const JobModel = require("../models/job.model");

// get all jobs list
exports.getAllJobs = (req, res) => {
  //console.log('here all jobs list');
  JobModel.getAllJobs((err, job) => {
    // console.log("We are here");
    if (err) res.send(err);
    //console.log("job", job);
    res.send(job);
  });
};

// get job by type
exports.getJobByType = (req, res) => {
  JobModel.getJobByType(req.params.type, (err, job) => {
    if (err) res.send(err);
    res.send(job);
  });
};
  
// create new job
exports.createNewJob = (req, res) => {
    const jobReqData = new JobModel(req.body);
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
      res.send(400).send({ success: false, message: "Please fill all fields" });
    } else {
      JobModel.createNewJob(jobReqData, (err, data) => {
        if (err) res.send(err);
        res.json({
          status: true,
          message: "Job Created Successfully",
          data: data.insertId,
        });
      });
    }
};
  
// get job by ID  for Update
exports.getJobByID = (req, res) => {
    JobModel.getJobByID(req.params.id, (err, data) => {
      if (err) res.send(err);
     res.send(data);
    });
};
  
// update job
exports.updateJob = (req, res) => {
    const jobReqData = new JobModel(req.body);
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
      res.send(400).send({ success: false, message: "Please fill all fields" });
    } else {
      JobModel.updateJob(
        req.params.id,
        jobReqData,
        (err, data) => {
          if (err) res.send(err);
          res.json({ status: true, message: "Job updated Successfully!" });
        }
      );
    }
};
  
// delete Job
exports.deleteJob = (req, res) => {
    JobModel.deleteJob(req.params.id, (err, data) => {
      if (err) res.send(err);
      res.json({ success: true, message: "Job deleted successully!" });
    });
};