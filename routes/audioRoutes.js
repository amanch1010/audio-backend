const express = require('express');
const router = express.Router();
const audioController = require('../controllers/audioController');

router.post('/', audioController.addAudio);
router.put('/:id', audioController.updateAudio);
router.delete('/:id', audioController.deleteAudio);
router.get('/', audioController.getAudios);

module.exports = router;