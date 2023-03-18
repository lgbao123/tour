import mongoose from "mongoose";
import { Schema } from "mongoose";
const tourSchema = new Schema({
   name: {
      type: String,
      unique: true,
      min: 3,
      required: [true, "A tour must have name"],
   },
   duration: {
      type: Number,
      required: [true, "A tour must have duration"],
   },
   maxGroupSize: {
      type: Number,
      required: [true, "A tour must have duration"],
   },
   difficulty: {
      type: String,
      required: [true, "A tour must have difficulty"],
   },
   ratingsAverage: {
      type: Number,
      default: 4.5
   },
   ratingsQuantity: {
      type: Number,
      default: 0
   },
   price: {
      type: Number,
      required: [true, "A tour must have price"],
   },
   summary: {
      type: String,
      trim: true,
      required: [true, "A tour must have summary"],
   },
   description: {
      type: String,
      trim: true,
   },
   imageCover: {
      type: String,
      required: [true, "A tour must have image"],
   },
   images: {
      type: [String],
   },
   startDates: {
      type: [Date],
   },
   createdAt: {
      type: Date,
      default: Date.now(),
   }


})

const Tour = mongoose.model("Tour", tourSchema)
export default Tour