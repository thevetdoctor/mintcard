const express = require('express');
const router = express.Router();
const missingInput = require('../helpers/missingInput');
const gameController = require('../controllers/gameController');

router.post('/', missingInput, gameController.saveGames);
router.get('/:email', gameController.getGames);

module.exports = router;