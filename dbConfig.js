import mongoose, { mongo } from "mongoose";

const URI="mongodb://localhost:27017/LolEsports"

mongoose.connect(URI).then(()=>{
    console.log('database connected succesfully')
}).catch((err)=>{
    console.error(err)
})