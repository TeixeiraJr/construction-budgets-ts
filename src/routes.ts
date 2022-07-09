import {Router} from 'express';
import UserController from './controllers/UserController'

const routes = Router();

routes.post('/user', UserController.create);
routes.put('/user', UserController.update);
routes.get('/user', UserController.list);
routes.delete('/user', UserController.delete);

export default routes;