import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";

import React, { useState, useEffect } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-datepicker/dist/react-datepicker.css";
import "react-big-calendar/lib/css/react-big-calendar.css"
import Sidebar from "./Sidebar"
import Search from "../Searchbar/Search.js"

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
    fetch("http://100.24.240.168:8000/getJobs")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        for (const jobTitle in data) {
          jobPostings.push({title: jobTitle, start: new Date(data[jobTitle]), end: new Date(data[jobTitle])})
        }
        setJobs(data);
      })
      .catch(function (error) {});
  }, []); // add an empty dependency array to ensure that the effect is only run once
  
  return (  
    <div> 
      {/* <Sidebar /> */}
      <Search></Search>
      <Calendar 
        localizer={localizer}
        events={jobPostings}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 600, margin: "50px" }} />
    </div>
  )
}

export default Dashboard;
