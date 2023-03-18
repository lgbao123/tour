
import * as services from '../services'
import { internalServerError } from '../middleware/handleError'
export const getAllTours = async (req, res) => {
   try {
      const respone = await services.getAllTours(req.query)
      return res.status(200).json(respone)
   } catch (error) {
      internalServerError(error, req, res)
   }
}
export const top5Tours = async (req, res) => {
   try {
      req.query = { sort: '-ratingsAverage', limit: 5 }
      const respone = await services.getAllTours(req.query)
      return res.status(200).json(respone)
   } catch (error) {
      internalServerError(error, req, res)
   }
}