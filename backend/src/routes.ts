import express from 'express';

import StatusController from './controllers/StatusController';
import CoordinationController from './controllers/CoordinationController';
import LevelController from './controllers/LevelController';
import UserController from './controllers/UserController';

const routes = express.Router();

const statusController = new StatusController();
const coordinationController = new CoordinationController();
const levelController = new LevelController();
const userController = new UserController();

routes.get('/status', statusController.index);
routes.get('/coordinations', coordinationController.index);
routes.get('/levels', levelController.index);
routes.get('/users', userController.index);
routes.post('/users', userController.create);
routes.put('/users/:id', userController.update);

export default routes;