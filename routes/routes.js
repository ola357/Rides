import express from 'express';
import ridesController from '../controllers/ridesController';

const router = express.Router();

router.get('/api/v1/rides', ridesController.allRidesOffer);
router.post('/api/v1/rides', ridesController.createRideOffer);
router.get('/api/v1/rides/:id', ridesController.rideOffer);
router.post('/api/v1/rides/:id/requests', ridesController.joinRideOffer);


router.put('/api/v1/rides/:id', ridesController.updateRideOffer);
router.delete('/api/v1/rides/:id', ridesController.deleteRideOffer);

const routes = { router };

export default routes;