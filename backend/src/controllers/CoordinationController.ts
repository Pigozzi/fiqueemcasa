import { Request, Response } from 'express';
import knex from '../database/connection';

class CoordinationController {
    async index(request: Request, response: Response) {
        const coordinations = await knex('coordinations')
            .select('id')
            .select('name')

        return response.json(coordinations);
    }
}

export default CoordinationController;