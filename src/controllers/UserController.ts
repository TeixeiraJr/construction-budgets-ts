import { Request, Response} from 'express';
import Users from '../database/repository/users';

export default {
    async create(req: Request, res: Response) {
        const users = await Users.create;
        res.send('users');
    },

    async update(req: Request, res: Response) {
        
    },

    async list(req: Request, res: Response) {
        
    },

    async delete(req: Request, res: Response) {
        
    }

};