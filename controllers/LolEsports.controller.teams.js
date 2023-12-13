import Teams from '../models/LolEsports.model.teams.js'


export const getAllTeams=async(req,res)=>{
    try {
        const foundTeams=await Teams.find()
        res.status(200).json({foundTeams})
    } catch (error) {
        res.send(error)
    }
}

export const postTeams=async(req, res)=>{
    try {
        const {name, league, logo}= req.body

        const newTeam= new Teams({
            name,
            league,
            logo
        })
        const savedTeam=await newTeam.save()
    
        res.status(200).json({message:"TEAM SAVED", savedTeam})
    } catch (error) {
        res.status(400).json({message:`SERVER ERROR! ${error}`})
    }
    
}



