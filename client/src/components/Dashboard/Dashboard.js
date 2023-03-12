import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";

import React, { useState, useEffect } from "react";

import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "react-big-calendar/lib/css/react-big-calendar.css"
import Sidebar from "./Sidebar"

const locales = {
  "en-US": require("date-fns/locale/en-US"),
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek, 
  getDay,
  locales,
});

const jobPostings = [
  {
      title: "SPONSORED: Mastercard - Software Engineer (iOS - Mobile)",
      start: new Date("Mar 11, 2023"),
      end: new Date("Mar 11, 2023"),
  },
];


function Dashboard(props) {
    const [value, onChange] = useState(new Date());
    const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/getJobs")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
<<<<<<< HEAD
       
=======
        console.log(data);
        for (const jobTitle in data) {
          jobPostings.push({title: jobTitle, start: new Date(data[jobTitle]), end: new Date(data[jobTitle])})
        }
>>>>>>> ccb1100dd211eacac14c5a8564eb75b8333053da
        setJobs(data);
        console.log(data);
      })
      .catch(function (error) {});
  }, []); // add an empty dependency array to ensure that the effect is only run once
<<<<<<< HEAD

  
  return (
    <div>
      <label htmlFor="companies">Companies</label>
=======
  
  return (  
    <div> 
>>>>>>> ccb1100dd211eacac14c5a8564eb75b8333053da
      <Sidebar />
      <Calendar localizer={localizer} events={jobPostings}
        startAccessor="start" endAccessor="end" style={{ height: 500, margin: "50px" }} />

<<<<<<< HEAD
      {Object.values(jobs).map((job,index) => (
        <div key={index.title}>
          <h3>{index.title}</h3>
          <p>{job.company}</p>
        </div>
      ))}
=======
>>>>>>> ccb1100dd211eacac14c5a8564eb75b8333053da
    </div>
  )
}

export default Dashboard;

