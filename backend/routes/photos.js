const express = require('express');
const router = express.Router();

const photoCtrl = require('../controllers/photos');

router.get('/', photoCtrl.getAllPhotos);
router.post('/', photoCtrl.createPhoto);
// router.get('/:id', photoCtrl.getOnePhoto);
// router.put('/:id', photoCtrl.modifyPhoto);
// router.delete('/:id', photoCtrl.deletePhoto);

module.exports = router;