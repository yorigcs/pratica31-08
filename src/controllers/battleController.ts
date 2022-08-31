import { Response, Request } from 'express'
import battleSchema from '../schemas/battleSchema'
import battleService from '../services/battleService'
const battleController = (req: Request, res: Response) => {
    const { firstUser, secondUser } = req.body
    const isInvalid = battleSchema.validate({ firstUser, secondUser }).error
    if (isInvalid) {
        return res.sendStatus(422)
    }
    battleService({ firstUser, secondUser })
    res.send('ok')
}

export { battleController }