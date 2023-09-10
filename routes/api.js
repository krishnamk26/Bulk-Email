const express = require('express');
const emailController = require('../controllers/emailController');

const router = express.Router();

router.post('/sendBulkEmails', emailController.sendBulkEmails);

module.exports = router;
