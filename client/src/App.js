import React, { useState, useEffect } from 'react';

function App() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch('/api/jobs')
      .then(response => response.json())
      .then(data => setJobs(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
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
