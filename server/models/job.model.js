const dbConn = require('../config/db.config');

const Job = function (job) {
    this.title = job.title;
    this.company = job.company;
    this.description = job.description;
    this.type = job.type;
    this.date = job.date;
    this.status = job.status;
    this.priority = job.priority;

    // this.location = job.location;
    // this.salary = job.salary;
    // this.email = job.email;
    // this.phone = job.phone;
    // this.website = job.website;
}

//get all Jobs
Job.getAllJobs = (result) => {
  dbConn.query("SELECT * FROM jobs", (err, res) => {
    if (err) {
      console.log("Error while fetching jobs", err);
      result(null, err);
    } else {
    //  console.log("Job fetched successfully");
      result(null, res);
    }
  });
};


//get job by type
Job.getJobByType = (type, result) => {
  dbConn.query(
    "SELECT * FROM jobs WHERE type = ?",
    type,
    (err, res) => {
      if (err) {
       console.log("Error while fetching data by type", err);
        result(null, err);
      } else {
        result(null, res);
      }
    }
  );
};

  // create new job
Job.createNewJob = (jobReqData, result) => {
    dbConn.query(
      "INSERT INTO jobs SET ?",
      jobReqData,
      (err, res) => {
        if (err) {
          console.log("Error while inserting data");
          result(null, err);
        } else {
          console.log("Job created successfully!");
          result(null, res);
        }
      }
    );
  };
  
//get job by ID for update
 Job.getJobByID = (id, result) => {
    dbConn.query("SELECT * FROM jobs WHERE id=?", id, (err, res) => {
      if (err) {
        console.log("Error while fetching job by id", err);
        result(null, err);
      } else {
        result(null, res);
      }
    });
  };
  
//update job
 Job.updateUser = (id, jobReqData, result) => {
    dbConn.query(
      "UPDATE jobs SET title=?, description=?, type=?, date=?, status=?, priority=?, company=? WHERE id = ?",
      [jobReqData.title, jobReqData.description, jobReqData.type, jobReqData.status, jobReqData.priority, jobReqData.company, id],
      (err, res) => {
        if (err) {
          console.log("Error while updating job");
          result(null, err);
        } else {
          console.log("Job updated successfully");
          result(null, res);
        }
      }
    );
  };
  
  //delete job
Job.deleteJob = (id, result) => {
    dbConn.query("DELETE from jobs WHERE id=?", [id], (err, res) => {
      if (err) {
        console.log("Error while deleting job");
        result(null, err);
      } else {
        result(null, res);
      }
    });
  };
  
  module.exports = Job;
  