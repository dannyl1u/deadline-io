const express = require('express');
const connectDB = require('./config/db');
const { getJobs } = require('./scraper');

var cors = require('cors');

// routes
const jobs = require('./routes/job.route');

const app = express();

// Connect Database
connectDB();
// cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('Hello world!'));

app.get('/getJobs', async (req, res) => {
    try {
        const jobs_dict = await getJobs();
        res.json(jobs_dict);
      } catch (error) {
        console.error(error);
        res.status(500).send('Internal server error');
      }
})

// get jobs from vancity
// app.get('/getJobs', async (req, res) => {
//   try {
//       const jobs_dict = await getJobs();
//       res.json(jobs_dict);
//     } catch (error) {
//       console.error(error);
//       res.status(500).send('Internal server error');
//     }
// })


// use Routes
app.use('/api/jobs', jobs);

const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Server running on port ${port}`));