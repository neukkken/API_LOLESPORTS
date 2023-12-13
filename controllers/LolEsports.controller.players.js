import Players from '../models/LolEsports.model.players.js'

export const getAllPlayers=async(req,res)=>{
    try {
        const foundPlayers=await Players.find()
        res.status(200).json({foundPlayers})
    } catch (error) {
        res.send(error)
    }
}

export const postPlayers=async(req, res)=>{
    try {
        const {name, nick_name, team, photo, age, rol_img}= req.body

        const newPlayer= new Players({
            name,
            nick_name,
            team,
            photo,
            age,
            rol_img
        })
        const savedPlayer=await newPlayer.save()
    
        res.status(200).json({message:"PLAYER SAVED", savedPlayer})
    } catch (error) {
        res.status(400).json({message:`SERVER ERROR! ${error}`})
    }
    
}