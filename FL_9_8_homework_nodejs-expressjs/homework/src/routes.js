const express = require('express');
const router = express.Router();
const car = require('./handlers/car');
router.get('/car', car.getAll);
router.get('/car/:id', car.findById);
router.post('/car', car.addNewCar);
router.put('/car/:id', car.update);
router.delete('/car/:id', car.deleteCar);
module.exports = router;