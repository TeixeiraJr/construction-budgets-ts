import { Request, Response} from 'express';
const {createUser} = require('../model/users');

export default {
    async index(req: Request, res: Response) {
        
    },

    async create(req: Request, res: Response) {

        return res.send();
    }
};