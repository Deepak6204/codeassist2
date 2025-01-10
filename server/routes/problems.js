const express = require('express');
const router = express.Router();
const Problem = require('../models/problem');

 
router.get('/', async (req, res) => {
  try {
    const problems = await Problem.find();
    res.json({ problems });
  } catch (err) {
    res.status(500).send('Error');
  }
});

 
router.get('/:id', async (req, res) => {
  try {
    const problem = await Problem.findById(req.params.id);
    if (!problem) {
      return res.send('Problem not found');
    }
    res.render('problemDisplay', { problem });   
  } catch (err) {
    res.send('Server error');
  }
});

module.exports = router;