const express = require("express");
const router = express.Router();

const Job = require("../models/job.model");

// @route GET api/jobs/test
// @description tests books route
// @access Public
router.get('/test', (req, res) => res.send('job route testing!'));

// @route GET api/jobs
// @description Get all books
// @access Public
router.get('/', (req, res) => {
  Job.find()
    .then(job => res.json(job))
    .catch(err => res.status(404).json({ nojobsfound: 'No Jobs found' }));
});

// @route GET api/jobs/:id
// @description Get single job by id
// @access Public
router.get('/:id', (req, res) => {
  Job.findById(req.params.id)
    .then(job => res.json(job))
    .catch(err => res.status(404).json({ nojobsfound: 'No Jobs found' }));
});

// @route GET api/jobs
// @description add/save job
// @access Public
router.post('/', (req, res) => {
    Job.create(req.body)
    .then(job => res.json({ msg: 'Job added successfully' }))
    .catch(err => res.status(400).json({ error: 'Unable to add this job' }));
});


// @route GET api/jobs/:id
// @description Update job
// @access Public
router.put('/:id', (req, res) => {
  Job.findByIdAndUpdate(req.params.id, req.body)
    .then(job => res.json({ msg: 'Updated successfully' }))
    .catch(err =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
});

// @route GET api/jobs/:id
// @description Delete job by id
// @access Public
router.delete('/:id', (req, res) => {
  Job.findByIdAndRemove(req.params.id, req.body)
    .then(job => res.json({ mgs: 'Job entry deleted successfully' }))
    .catch(err => res.status(404).json({ error: 'No such a job' }));
});

module.exports = router;
