import React, { useState } from "react";
import Calendar from "react-calendar";

function Dashboard(props) {
  const [value, onChange] = useState(new Date());
  const [jobs, setJobs] = useState([]);

  fetch("/api/jobs")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      setJobs(data);
    })
    .catch(function (error) {});

  return (
    <div>
      <label htmlFor="companies">Companies</label>
      <select name="companies" id="companies">
        <option value="amazon">Amazon</option>
        <option value="google">Google</option>
        <option value="meta">Meta</option>
        <option value="apple">Apple</option>
      </select>
      <Calendar onChange={onChange} value={value} />
      {jobs.map((job) => (
        <div key={job.title}>
          <h3>{job.title}</h3>
          <p>{job.company}</p>
        </div>
      ))}
    </div>
  );
}

export default Dashboard;
