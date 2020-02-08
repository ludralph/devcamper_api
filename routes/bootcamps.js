const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json({success: true, msg: 'show all bootcamps'});
});

router.post('/', (req, res) => {
    res.status(200).json({success: true, msg: 'create bootcamps'});
});

router.put('/:id', (req, res) => {
    res.status(200).json({success: true, msg: `update bootcamp by id ${req.params.id}`});
});

router.delete('/:id', (req, res) => {
    res.status(200).json({success: true, msg: `delete bootcamp by id ${req.params.id}`});
});

module.exports = router;