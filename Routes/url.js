const express = require('express');
const router = express.Router();
const {getAllUrl} = require('../Controllers/url')
const {shortUrl} = require('../Controllers/url')
const {getUrl} = require('../Controllers/url')

router.route('/').get(getAllUrl).post(shortUrl);
router.route('/:small').get(getUrl);

module.exports = router;