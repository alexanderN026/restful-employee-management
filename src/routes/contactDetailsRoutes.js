import express from 'express';
import * as contactDetailsHandler from '../handlers/contactDetailsHandler.js';

const router = express.Router();

router
    .route('/')
    .get(contactDetailsHandler.index)
    .post(contactDetailsHandler.create);

router.route('/:id').get(contactDetailsHandler.show);
router.route('/:id').put(contactDetailsHandler.update);
router.route('/:id').delete(contactDetailsHandler.remove);

export default router;
