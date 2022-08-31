import { Router } from 'express'
import {rankingController} from '../controllers'
const ranking = Router()

ranking.get('/ranking',rankingController)

export {ranking}
