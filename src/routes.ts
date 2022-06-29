import {Router} from 'express';

const routes = Router();

routes.get('./user/create', (req,res) => {
    res.send('user created sucessfully');
})

export default routes;