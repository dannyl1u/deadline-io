import React, { useState } from "react";
import Calendar from 'react-calendar';
import Sidebar from "./Sidebar";
import 'react-calendar/dist/Calendar.css';
import './dashboard.scss';

function Dashboard(props) {
  const [value, onChange] = useState(new Date());
  const [jobs, setJobs] = useState([]);

  fetch("/getJobs")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      setJobs(data);
      console.log(data);
    })
    .catch(function (error) {});

  return (
    <div>
      <label htmlFor="companies">Companies</label>
      <Sidebar />
      {/* <select name="companies" id="companies">
        <option value="amazon">Amazon</option>
        <option value="google">Google</option>
        <option value="meta">Meta</option>
        <option value="apple">Apple</option>
      </select> */}
      <div className="dashboard">
      <Calendar onChange={onChange} value={value} 
      className='react-calendar'/>
        </div>
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
