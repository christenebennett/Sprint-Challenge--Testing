exports.seed = function (knex, Promise) {
  return knex('games').del()
    .then(function () {
      return knex('games').insert([{
          id: 1,
          title: 'Gunstar Heroes',
          genre: 'Run and gun',
          releaseYear: 1993
        },
        {
          id: 2,
          title: 'Mortal Kombat',
          genre: 'Fighting',
          releaseYear: 1992
        },
        {
          id: 3,
          title: 'Sonic the Hedgehog',
          genre: 'Platform',
          releaseYear: 1991
        }
      ]);
    });
};