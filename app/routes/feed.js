const express = require('express');
const ImageFeed = require('../controllers/feed');
const router = express.Router();

router.get('/feed', ImageFeed);

module.exports = router;
