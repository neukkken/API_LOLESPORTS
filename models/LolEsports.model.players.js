import mongoose, { Schema } from "mongoose";

const players=new Schema({
    name: String,
    nick_name: String,
    team: String,
    photo: String,
    age: String,
    rol_img: String
})

export default mongoose.model('Players', players)