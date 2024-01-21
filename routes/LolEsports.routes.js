import { getAllTeams, postTeams } from "../controllers/LolEsports.controller.teams.js";
import { getAllPlayers, postPlayers } from "../controllers/LolEsports.controller.players.js";
import { getAllNews, postNews } from "../controllers/LolEsports.controller.news.js";

import { Router } from "express";


const router = Router()


router.get('/teams:id?', getAllTeams)
router.post('/teams', postTeams)
router.get('/players', getAllPlayers)
router.post('/players', postPlayers)
router.get('/news', getAllNews)
router.post('/news', postNews)


export default router