import Tour from '../../models/tourModel.js'
import connection from '../../config/database.js'
import fs from 'fs'
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
connection();
const fileTour = JSON.parse(fs.readFileSync(`${__dirname}/tours-simple.json`, 'utf-8'))
const importData = async () => {
   try {
      // console.log(fileTour);
      await Tour.create(fileTour)
      console.log('Add tours success');
      process.exit();

   } catch (error) {
      console.log(error);
   }
   process.exit();

}
const deleteData = async () => {
   try {
      await Tour.deleteMany()
      console.log('Delete tours success');

   } catch (error) {
      console.log(error);
   }
   process.exit();

}
if (process.argv[2] === '--import') {
   importData();

}
if (process.argv[2] === '--delete') {
   deleteData();

}
// console.log(process.argv);