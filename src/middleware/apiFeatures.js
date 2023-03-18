class APIFeatures {

   constructor(schema, queries) {
      this.schema = schema;
      this.queries = queries
   }
   filter() {
      let params = { ...this.queries }
      // Build query
      // 1. Basic Filter
      const excludedFields = ['sort', 'fields', 'page', 'limit'];
      excludedFields.forEach(item => delete params[item])
      // 2. Advance Filter : and, or, lt, lte, gt, gte
      let str = JSON.stringify(params)
      str = str.replace(/\b(lt|lte|gt|gte|or|and)\b/g, math => `$${math}`)
      params = JSON.parse(str)
      this.schema = this.schema.find(params)
      return this
   }
   sort() {
      // 3. Sort
      if (this.queries.sort) {
         this.queries.sort = this.queries.sort.split(',').join(' ')
         this.schema = this.schema.sort(this.queries.sort + ' -_id')
      } else {
         this.schema = this.schema.sort('-_id')
      }
      return this
   }
   paginate() {
      // 4. Pagination
      const page = +this.queries.page || 1
      const limit = +this.queries.limit || 100
      const skip = (page - 1) * limit || 0
      this.schema = this.schema.skip(skip).limit(limit)
      return this
   }
   select() {
      // 5. Select
      if (this.queries.fields) {
         this.schema = this.schema.select(this.queries.fields.replace(',', ' '))
      } else {
         this.schema = this.schema.select('-__v')
      }
      return this
   }
}
export default APIFeatures