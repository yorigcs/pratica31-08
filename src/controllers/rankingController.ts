import {Response, Request} from 'express'

const rankingController = (req: Request, res: Response) => {
    res.status(200).send('oi')
}

export {rankingController}