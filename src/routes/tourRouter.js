// import * as controllers from '../controllers/'
import express from 'express'
import * as controllers from '../controllers/tourController'
const router = express.Router()
router.route('/')
   .get(controllers.getAllTours)
   .post()

router.route('/:id')
   .get()
   .patch()
   .delete()

router.route('/top-5-tours')
   .get(controllers.top5Tours)

export default router;