const express = require('express');
const router = express.Router();
const path = require('path');
const { v4: uuidv4 } = require('uuid');

router.get('/login', (req, res) => {
    uuidv4();
});

module.exports = router;
