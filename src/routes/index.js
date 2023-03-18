
// const user = require('./user')
import { notFound } from '../middleware/handleError'
import tour from './tourRouter'
const initRoutes = (app) => {

   app.use('/api/v1/tours', tour)

   return app.use(notFound)
}
export default initRoutes
