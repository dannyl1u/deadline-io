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

app.use('/jobs', jobRoutes);
const PORT = process.env.PORT || 8000;
// simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to deadline server!" });
    });

    
app.listen(PORT, (req, res) => {
    console.log(`Server is running on port ${PORT}.`);
});
