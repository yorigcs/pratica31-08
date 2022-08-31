import { Router } from 'express'
import {battleController} from '../controllers'
const battle = Router()

battle.post('/battle',battleController)

export {battle}
