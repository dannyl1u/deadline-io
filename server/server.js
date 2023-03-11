const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require ('dotenv').config();
const jobRoutes = require('./routes/job.route');

const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const rp = require('request-promise');
const url = 'https://test-api-jobboard.workbc.ca/Test/JbSearch#/job-search';

rp(url)
  .then(function(html){
    //success!
    console.log(html);
  })
  .catch(function(err){
    //handle error
  });

app.use('/jobs', jobRoutes);
const PORT = process.env.PORT || 8000;
// simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to deadline server!" });
    });

    
app.listen(PORT, (req, res) => {
    console.log(`Server is running on port ${PORT}.`);
});


