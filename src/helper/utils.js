import bcryptjs from 'bcryptjs'
import "dotenv/config.js";
import path from "path";

export const hashPassword = password => bcryptjs.hashSync(password, bcryptjs.genSaltSync(10))
export const checkIncludeString = (string, arr) => {
   return arr.some(x => x.toLowerCase() == string.toLowerCase())
}



export const getPublicId = (imageURL) => {
   return imageURL.split("/").slice(7).join("/").split(".")[0]
};
