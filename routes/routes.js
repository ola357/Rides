const ridesController = require('../controllers/ridesController');
const express = require('express');
const router = express.Router();

router.get('/api/v1/rides', ridesController.allRidesOffer);
router.post('/api/v1/rides', ridesController.createRideOffer);
router.get('/api/v1/rides/:id', ridesController.rideOffer);
router.post('/api/v1/rides/:id/requests', ridesController.joinRideOffer);


router.put('/api/v1/rides/:id', ridesController.updateRideOffer);
router.delete('/api/v1/rides/:id', ridesController.deleteRideOffer);

const routes = { router };

module.exports = routes;