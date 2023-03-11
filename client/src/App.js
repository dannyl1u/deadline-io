import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar'


function App() {
  const [value, onChange] = useState(new Date());
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch('/api/jobs')
      .then(response => response.json())
      .then(data => setJobs(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <label for="companies">Choose a company</label>
      <select name="companies" id="companies">
        <option value="amazon">Amazon</option>
        <option value="google">Google</option>
        <option value="meta">Meta</option>
        <option value="apple">Apple</option>
      </select>
      <Calendar onChange={onChange} value={value} />
      {jobs.map(job => (
        <div key={job.title}>
          <h3>{job.title}</h3>
          <p>{job.company}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
