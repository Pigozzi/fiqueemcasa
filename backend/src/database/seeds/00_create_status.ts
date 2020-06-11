import Knex from 'knex';

export async function seed(knex: Knex) {
    await knex('status').insert([
        { name: 'Análise' },
        { name: 'Aceito' },
        { name: 'Negado' },
        { name: 'Offline' },
        { name: 'Online' }
    ]);
}