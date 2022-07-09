import { Request, Response} from 'express';
const {Users} = require('../database/repository/users');

export default {
    async create(req: Request, res: Response) {
        const users = await Users.create;
        console.log('users', users);
    },

    async update(req: Request, res: Response) {
        
    },

    async list(req: Request, res: Response) {
        
    },

    async delete(req: Request, res: Response) {
        
    }

};