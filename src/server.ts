import express from 'express'
import cors from 'cors'
import {ranking,battle} from './routes'

const server = express()
const PORT = 5000

server.use(cors(),express.json(), ranking, battle)
server.listen(PORT, () => console.log(`server listening on port ${PORT}`))