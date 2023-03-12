import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import Sidebar from "./Sidebar";
import 'react-calendar/dist/Calendar.css';
import './dashboard.scss';

function Dashboard(props) {
  const [value, onChange] = useState(new Date());
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/getJobs")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        setJobs(data);
      })
      .catch(function (error) {});
  }, []); // add an empty dependency array to ensure that the effect is only run once

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
<<<<<<< HEAD
      <Calendar onChange={onChange} value={value} />
=======
       <div className="dashboard">
      <Calendar onChange={onChange} value={value} 
      className='react-calendar'/>
      </div>
>>>>>>> main
      {Object.values(jobs).map((job) => (
        <div key={job.title}>
          <h3>{job.title}</h3>
          <p>{job.company}</p>
        </div>
      ))}
    </div>
  );
}

export default Dashboard;

