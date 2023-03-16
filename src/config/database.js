// const { Sequelize } = require('sequelize');
import mongoose from 'mongoose';
require('dotenv').config();

const user = process.env.DB_USER
const password = process.env.DB_PASSWORD
const db_name = process.env.DB_NAME


const connection = async () => {
   mongoose.connect(`mongodb+srv://${user}:${password}@cluster0.yq4kyma.mongodb.net/${db_name}?retryWrites=true&w=majority`)
      .then(() => console.log('Connected!'))
      .catch(() => console.log('Connected Fail'))
}
export default connection;