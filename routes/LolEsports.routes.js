import { getAllTeams, postTeams  } from "../controllers/LolEsports.controller.teams.js";
import { getAllPlayers, postPlayers  } from "../controllers/LolEsports.controller.players.js";
import { Router } from "express";

const router=Router()


router.get('/teams', getAllTeams)
router.post('/teams', postTeams)
router.get('/players', getAllPlayers)
router.post('/players', postPlayers)


export default router