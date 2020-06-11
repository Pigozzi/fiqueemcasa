import { Request, Response } from 'express';
import knex from '../database/connection';

class LevelController {
    async index(request: Request, response: Response) {
        const levels = await knex('levels')
            .select('id')
            .select('name');

        return response.json(levels);
    }
}

export default LevelController;