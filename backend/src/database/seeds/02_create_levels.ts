import Knex from 'knex';

export async function seed(knex: Knex) {
    await knex('levels').insert([
        { name: 'Iniciante' },
        { name: 'Intermediário' },
        { name: 'Avançado' }
    ]);
}