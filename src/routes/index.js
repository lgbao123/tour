
// const user = require('./user')
import { notFound } from '../middleware/handleError'
import tour from './tourRouter'
const initRoutes = (app) => {

   app.use('/api/v1/auth', tour)

   return app.use(notFound)
}
export default initRoutes
