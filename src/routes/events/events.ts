import * as express from 'express';
import EventsCtrl from '../../controllers/events';

const router = express.Router();

router.route('/')
  .post(EventsCtrl.create);

router.route('/:id')
  .get(EventsCtrl.get);

export default router;