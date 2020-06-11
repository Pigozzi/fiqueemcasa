import { Request, Response } from 'express';
import knex from '../database/connection';

class StatusController {
    async index(request: Request, response: Response) {
        const status = await knex('status')
            .select('id')
            .select('name')

        return response.json(status);
    }
}

export default StatusController;