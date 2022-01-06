const express = require('express');
const router = express.Router();

//CONTROLLER
const controller = require('../controllers/mainControllers');

//HTTP://LOCALHOST:3000
router.get('/', controller.index);






module.exports = router;
