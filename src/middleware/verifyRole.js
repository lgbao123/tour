

import { unAuth } from './handleError';
export const isAdmin = (req, res, next) => {
   const { role } = req.user;

   if (role !== 'ADMIN') return unAuth(res, 'Require role Admin')
   next();
}

