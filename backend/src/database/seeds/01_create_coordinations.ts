import Knex from 'knex';

export async function seed(knex: Knex) {
    await knex('coordinations').insert([
        { name: 'Artesanato e Artes Plásticas' },
        { name: 'Cine, Foto e Vídeo' },
        { name: 'Cursos Livres' },
        { name: 'Dança' },
        { name: 'Folclore' },
        { name: 'Literatura' },
        { name: 'Música' },
        { name: 'Teatro e Circo' }
    ]);
}