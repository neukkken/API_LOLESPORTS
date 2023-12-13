import mongoose, { Schema } from "mongoose";

const teams=new Schema({
    name: String,
    league: String,
    logo: String
})

export default mongoose.model('Teams', teams)