import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import './dbConfig.js'
import teamsRouter from './routes/LolEsports.routes.js'



const App=express();
//middlewares
App.use(cors())
App.use(morgan('dev'))
App.use(express.json())
App.use('/api', teamsRouter)

const PORT=6900

App.listen(PORT, ()=>{
    console.log(`API on port ${PORT}`)
})

