
import APIFeatures from '../middleware/apiFeatures'
import Tour from '../models/tourModel'

export const getAllTours = (queries) => {
   return new Promise(async (reslove, reject) => {
      try {
         // let params = { ...queries }
         // // Build query
         // // 1. Basic Filter
         // const excludedFields = ['sort', 'fields', 'page', 'limit'];
         // excludedFields.forEach(item => delete params[item])
         // // 2. Advance Filter : and, or, lt, lte, gt, gte
         // let str = JSON.stringify(params)
         // str = str.replace(/\b(lt|lte|gt|gte|or|and)\b/g, math => `$${math}`)
         // params = JSON.parse(str)
         // let query = Tour.find(params)
         // // 3. Sort
         // if (queries.sort) {
         //    queries.sort = queries.sort.split(',').join(' ')
         //    query.sort(queries.sort + ' -_id')
         // } else {
         //    query.sort('-_id')
         // }
         // // 4. Pagination
         // const page = +queries.page || 1
         // const limit = +queries.limit || 100
         // const skip = (page - 1) * limit || 0
         // query.skip(skip).limit(limit)
         // // 5. Select
         // if (queries.fields) {
         //    query.select(queries.fields.replace(',', ' '))
         // } else {
         //    query.select('-__v')
         // }
         // console.log(JSON.stringify(queries));
         const query = new APIFeatures(Tour, queries)
            .filter().sort().paginate().select()
         // .sort()
         // .paginate()
         // .select()

         //Run query
         const result = await query.schema
         // console.log(result);
         reslove({
            DT: { total: result.length, data: result },
            Status: 'success',
            EC: 0
         })
      } catch (error) {

         reject(error)
      }
   })


}