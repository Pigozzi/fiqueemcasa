import { Request, Response } from 'express';
import knex from '../database/connection';
import moment from 'moment-timezone';

class UserController {
    async index(request: Request, response: Response) {
        const users = await knex('users')
            .select('id')
            .select('name');

        return response.json(users);
    }

    async create(request: Request, response: Response) {
        const { name, password } = request.body;

        const user = { name, password };

        await knex('users').insert(user);

        return response.json(user);
    }

    async update(request: Request, response: Response) {
        const { id } = request.params;
        const { name, password } = request.body;

        const updated_at = moment.tz("America/Sao_Paulo").format();

        const user = { name, password, updated_at };

        await knex('users').where('id', id).update(user);

        return response.json(user);
    }
}

export default UserController;