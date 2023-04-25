const { Router } = require('express');
const router = Router();
const cors = require('cors');
const corsOptions = require('../Helpers/cors');

// Route information to connect API
router.get('/', cors(corsOptions), (req, res) => {res.status(200).json({ message: 'Connect to our API'})});

module.exports = router;