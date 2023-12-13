import mongoose, { Schema } from "mongoose";

const news = new Schema({
    title: String,
    img: String
})

export default mongoose.model('News', news)